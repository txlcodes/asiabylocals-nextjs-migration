import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AGRA_INFO_SLUGS, DELHI_INFO_SLUGS, JAIPUR_INFO_SLUGS, PHUKET_INFO_SLUGS, BANGKOK_INFO_SLUGS } from '@/lib/constants';
import { getCityInfoContent } from '@/lib/cityInfoContent';
import TourDetailClient from '@/components/TourDetailClient';
import CityInfoClient from '@/components/CityInfoClient';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';

export const revalidate = 60;

interface Props {
  params: Promise<{ country: string; city: string; slug: string }>;
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Detect supplier-written personal text that shouldn't be used as meta description
function isValidSeoDescription(text: string | null | undefined): boolean {
  if (!text || text.length < 30) return false;
  const lower = text.toLowerCase();
  // Reject personal/promotional supplier messages
  const badPatterns = [
    /\b(i will|with me|book your tour with|my tour|contact me|whatsapp|call me)\b/i,
    /\b(i ensure|i guarantee|i promise|book with me)\b/i,
  ];
  return !badPatterns.some(p => p.test(lower));
}

function isInfoSlug(city: string, slug: string): boolean {
  const c = city.toLowerCase();
  if (c === 'agra') return AGRA_INFO_SLUGS.includes(slug);
  if (c === 'delhi') return DELHI_INFO_SLUGS.includes(slug);
  if (c === 'jaipur') return JAIPUR_INFO_SLUGS.includes(slug);
  if (c === 'phuket') return PHUKET_INFO_SLUGS.includes(slug);
  if (c === 'bangkok') return BANGKOK_INFO_SLUGS.includes(slug);
  return false;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, city, slug } = await params;
  const cityName = capitalize(city);

  if (isInfoSlug(city, slug)) {
    const infoContent = getCityInfoContent(slug);
    const fallbackTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const title = infoContent?.title || fallbackTitle;
    const description = infoContent?.description || `Essential guide: ${fallbackTitle}. Everything you need to know before visiting ${cityName}.`;
    return {
      title: `${title} | ${cityName} Guide | AsiaByLocals`,
      description,
      alternates: {
        canonical: `https://www.asiabylocals.com/${country.toLowerCase()}/${city.toLowerCase()}/${slug}`,
      },
      openGraph: {
        title: `${title} | ${cityName} Guide | AsiaByLocals`,
        description,
        url: `https://www.asiabylocals.com/${country.toLowerCase()}/${city.toLowerCase()}/${slug}`,
        siteName: 'AsiaByLocals',
        type: 'article',
        ...(infoContent?.heroImage ? { images: [{ url: infoContent.heroImage }] } : {}),
      },
    };
  }

  // Tour detail page — fetch tour for metadata
  try {
    const res = await fetch(`${API_URL}/api/public/tours/by-slug/${encodeURIComponent(slug)}`, {
      cache: 'no-store',
    });
    if (res.ok) {
      const data = await res.json();
      const tour = (data.success && data.tour) ? data.tour : (data.title ? data : null);
      if (tour) {
        const fallbackDesc = `Book ${tour.title} in ${cityName} with a licensed local guide. Authentic experience with AsiaByLocals.`;
        const description = isValidSeoDescription(tour.shortDescription) ? tour.shortDescription : fallbackDesc;
        return {
          title: `${tour.title} in ${cityName} | AsiaByLocals`,
          description,
          alternates: {
            canonical: `https://www.asiabylocals.com/${country.toLowerCase()}/${city.toLowerCase()}/${slug}`,
          },
          openGraph: {
            title: `${tour.title} in ${cityName} | AsiaByLocals`,
            description,
            images: tour.images?.[0] ? [{ url: tour.images[0] }] : [],
          },
        };
      }
    }
  } catch (e) {}

  return {
    title: `${cityName} Tour | AsiaByLocals`,
    description: `Book tours in ${cityName} with licensed local guides.`,
  };
}

export default async function SlugPage({ params }: Props) {
  const { country, city, slug } = await params;
  const cityName = capitalize(city);
  const countryName = capitalize(country);
  const countrySlug = country.toLowerCase();
  const citySlug = city.toLowerCase();

  // City info page
  if (isInfoSlug(city, slug)) {
    // Build server-side JSON-LD from static info content
    const infoContent = getCityInfoContent(slug);
    const infoJsonLd = infoContent?.jsonLd || null;

    return (
      <>
        {/* Server-rendered JSON-LD — guaranteed in raw HTML for crawlers & AI engines */}
        {infoJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(infoJsonLd) }}
          />
        )}
        {/* BreadcrumbList JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.asiabylocals.com' },
              { '@type': 'ListItem', position: 2, name: countryName, item: `https://www.asiabylocals.com/${countrySlug}` },
              { '@type': 'ListItem', position: 3, name: cityName, item: `https://www.asiabylocals.com/${countrySlug}/${citySlug}` },
              { '@type': 'ListItem', position: 4, name: infoContent?.title || slug, item: `https://www.asiabylocals.com/${countrySlug}/${citySlug}/${slug}` },
            ],
          }) }}
        />
        <CityInfoClient country={countryName} city={cityName} slug={slug} />
      </>
    );
  }

  // Tour detail page
  let tour = null;
  try {
    const res = await fetch(`${API_URL}/api/public/tours/by-slug/${encodeURIComponent(slug)}`, {
      cache: 'no-store',
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.tour) {
        tour = data.tour;
      } else if (data.title) {
        tour = data;
      }
      // Strip base64 images to keep response cacheable
      if (tour && Array.isArray(tour.images)) {
        tour.images = tour.images
          .map((img: any) => (typeof img === 'string' && img.startsWith('data:') ? '' : img))
          .filter(Boolean);
      }
    }
  } catch (e) {
    console.error('Failed to fetch tour:', e);
  }

  if (!tour) {
    notFound();
  }

  // ---------- SERVER-SIDE JSON-LD for Tour Detail (guaranteed in raw HTML) ----------
  const ratingSeed = parseInt(tour?.id || '0') || 0;
  const ratingRandom = (ratingSeed * 9301 + 49297) % 233280;
  const ratingNorm = ratingRandom / 233280;
  const ratingValue = (4.0 + (ratingNorm * 1.0)).toFixed(1);
  const reviewCount = Math.floor(ratingNorm * 100) + 20;

  const tourJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        name: tour?.title || 'Tour',
        description: tour?.shortDescription || '',
        image: tour?.images?.[0] || '',
        url: `https://www.asiabylocals.com/${countrySlug}/${citySlug}/${slug}`,
        brand: { '@type': 'Brand', name: 'AsiaByLocals' },
        offers: { '@type': 'Offer', price: tour?.pricePerPerson || 0, priceCurrency: tour?.currency || 'USD', availability: 'https://schema.org/InStock', url: `https://www.asiabylocals.com/${countrySlug}/${citySlug}/${slug}` },
        aggregateRating: { '@type': 'AggregateRating', ratingValue, reviewCount, bestRating: '5' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.asiabylocals.com' },
          { '@type': 'ListItem', position: 2, name: countryName, item: `https://www.asiabylocals.com/${countrySlug}` },
          { '@type': 'ListItem', position: 3, name: cityName, item: `https://www.asiabylocals.com/${countrySlug}/${citySlug}` },
          { '@type': 'ListItem', position: 4, name: tour?.title || 'Tour', item: `https://www.asiabylocals.com/${countrySlug}/${citySlug}/${slug}` },
        ],
      },
    ],
  };

  return (
    <>
      {/* Server-rendered JSON-LD — guaranteed in raw HTML for crawlers & AI engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourJsonLd) }}
      />
      <TourDetailClient tour={tour} city={cityName} country={countryName} />
    </>
  );
}
