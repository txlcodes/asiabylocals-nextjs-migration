import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getItinerary, getItinerarySlugs, ITINERARY_COUNTRIES } from '@/lib/japanItineraries';
import ItineraryClient from '@/components/ItineraryClient';
import { countryDisplayName } from '@/lib/countryName';
import { isLang, itineraryT, mergeItinerary, canonicalFor, alternatesFor, type Lang } from '@/lib/translations';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';

export const revalidate = 3600;

interface Props {
  params: Promise<{ country: string; slug: string; lang?: string }>;
}

// A literal "itineraries" segment beats the [city] catch-all at the same depth,
// so /japan/itineraries/7-days lands here and not on a city page for a city
// called "itineraries".
export async function generateStaticParams() {
  return ITINERARY_COUNTRIES.flatMap(country =>
    getItinerarySlugs(country).map(slug => ({ country, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, slug, lang: langParam } = await params;
  const lang: Lang | null = langParam && isLang(langParam) ? langParam : null;
  const en = getItinerary(country, slug);
  if (!en) return { title: 'Itinerary Not Found | AsiaByLocals' };
  const data = mergeItinerary(en, itineraryT(lang, country, slug));

  const path = `/${country.toLowerCase()}/itineraries/${slug}`;
  const url = canonicalFor(lang, path);
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: url, languages: alternatesFor(path) },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url,
      type: 'article',
    },
  };
}

// One country's tour list is several megabytes, which is over Next's 2MB data
// cache limit, so it is refetched in full for every itinerary page that asks
// for it - eight times per country during a build. The pages of one country
// only ever need the same list, so it is fetched once per process and shared.
// Keyed by country name; the entry is the in-flight promise, so pages that ask
// at the same time wait on one request instead of starting their own.
const countryTours = new Map<string, Promise<any[]>>();

function countryTourList(name: string): Promise<any[]> {
  let p = countryTours.get(name);
  if (!p) {
    p = fetch(`${API_URL}/api/public/tours?country=${encodeURIComponent(name)}`, {
      next: { revalidate: 3600 },
    })
      .then(res => (res.ok ? res.json() : null))
      .then(data => (Array.isArray(data?.tours) ? data.tours : []))
      // A failed fetch must not be cached as an empty list for the whole
      // build, or every later page for that country silently loses its cards.
      .catch(err => {
        countryTours.delete(name);
        throw err;
      });
    countryTours.set(name, p);
  }
  return p;
}

/** Pull the tours this itinerary links to, so each day can show a real card. */
async function fetchToursBySlug(country: string, slugs: string[]) {
  const wanted = new Set(slugs.map(s => s.split('/').pop()));
  if (wanted.size === 0) return {};
  try {
    const name = countryDisplayName(country);
    const list = await countryTourList(name);
    const bySlug: Record<string, any> = {};
    for (const t of list) if (wanted.has(t.slug)) bySlug[t.slug] = t;
    return bySlug;
  } catch {
    // A tour card failing to load must not take the whole guide down.
    return {};
  }
}

export default async function ItineraryPage({ params }: Props) {
  const { country, slug, lang: langParam } = await params;
  const lang: Lang | null = langParam && isLang(langParam) ? langParam : null;
  const en = getItinerary(country, slug);
  if (!en) notFound();
  const data = mergeItinerary(en, itineraryT(lang, country, slug));

  const allTourUrls = data.days_detail.flatMap(d => d.tours);
  const tourMap = await fetchToursBySlug(country, allTourUrls);

  // TouristTrip is the type schema.org actually has for this, and it carries
  // the route as structured data rather than as prose an engine has to parse.
  // Article alone told a crawler nothing about the itinerary itself.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristTrip',
        name: data.title,
        description: data.quickAnswer || data.metaDescription,
        touristType: data.bestFor,
        itinerary: {
          '@type': 'ItemList',
          numberOfItems: data.days_detail.length,
          itemListElement: data.days_detail.map(d => ({
            '@type': 'ListItem',
            position: d.day,
            item: {
              '@type': 'TouristDestination',
              name: d.base,
              description: d.heading,
            },
          })),
        },
        provider: {
          '@type': 'Organization',
          name: 'AsiaByLocals',
          url: 'https://www.asiabylocals.com',
        },
      },
      {
        '@type': 'Article',
        headline: data.title,
        description: data.metaDescription,
        author: { '@type': 'Organization', name: 'AsiaByLocals' },
        publisher: { '@type': 'Organization', name: 'AsiaByLocals' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: data.faqs.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ItineraryClient
        data={data}
        country={country}
        slug={slug}
        tourMap={tourMap}
        allSlugs={getItinerarySlugs(country)}
        lang={lang || undefined}
      />
    </>
  );
}
