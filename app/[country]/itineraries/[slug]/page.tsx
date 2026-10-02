import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getItinerary, getItinerarySlugs, ITINERARY_COUNTRIES } from '@/lib/japanItineraries';
import ItineraryClient from '@/components/ItineraryClient';
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

// Fetch the handful of tours an itinerary links to, one by one, rather than the
// whole country.
//
// The country endpoint returns 2.5 MB for Indonesia and 4.3 MB for Vietnam,
// which is over Next's 2 MB data cache limit, so it was never cached: every
// build and every revalidation pulled the entire catalogue down again. The
// build log says so seven times, once per country.
//
// All of a country's itinerary pages together reference only 27 to 42 distinct
// tours, and a single tour is about 9 KB. Asking for those by slug is roughly
// 300 KB instead of 4.3 MB, and each response is small enough that Next will
// actually cache it.
//
// Keyed by slug rather than by country, so a tour that appears on several
// itineraries is fetched once, and the entry holds the in-flight promise so
// simultaneous pages wait on one request.
const tourBySlug = new Map<string, Promise<any | null>>();

function getTour(slug: string): Promise<any | null> {
  let p = tourBySlug.get(slug);
  if (!p) {
    p = fetch(`${API_URL}/api/public/tours/by-slug/${encodeURIComponent(slug)}`, {
      next: { revalidate: 3600 },
    })
      .then(res => (res.ok ? res.json() : null))
      .then(data => (data?.tour ?? (data?.slug ? data : null)))
      // Do not cache a failure for the life of the process, or every later page
      // asking for this tour silently loses its card.
      .catch(() => {
        tourBySlug.delete(slug);
        return null;
      });
    tourBySlug.set(slug, p);
  }
  return p;
}

/** Pull the tours this itinerary links to, so each day can show a real card. */
async function fetchToursBySlug(slugs: string[]) {
  const wanted = [...new Set(slugs.map(s => s.split('/').pop()).filter(Boolean) as string[])];
  if (wanted.length === 0) return {};
  // One tour failing now costs that one card, not the whole guide, which is
  // what happened when a single country fetch wrapped all of them.
  const rows = await Promise.all(wanted.map(s => getTour(s).catch(() => null)));
  const bySlug: Record<string, any> = {};
  wanted.forEach((s, i) => {
    if (rows[i]) bySlug[s] = rows[i];
  });
  return bySlug;
}

export default async function ItineraryPage({ params }: Props) {
  const { country, slug, lang: langParam } = await params;
  const lang: Lang | null = langParam && isLang(langParam) ? langParam : null;
  const en = getItinerary(country, slug);
  if (!en) notFound();
  const data = mergeItinerary(en, itineraryT(lang, country, slug));

  const allTourUrls = data.days_detail.flatMap(d => d.tours);
  const tourMap = await fetchToursBySlug(allTourUrls);

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
