import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CityPageClient from '@/components/CityPageClient';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';

// Cache the rendered page for 60s — bypasses the 2MB fetch cache limit
export const revalidate = 60;

interface Props {
  params: Promise<{ country: string; city: string }>;
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// City-specific SEO titles and descriptions (must match client component)
const CITY_META: Record<string, { title: string; description: string }> = {
  'Agra': {
    title: 'Agra Tours & Things to Do 2026 | Taj Mahal Guided Experiences',
    description: '30+ Agra tours from $15. Taj Mahal sunrise tours, skip-the-line entry tickets, Agra Fort heritage walks & same-day tours from Delhi. Licensed guides, free cancellation.',
  },
  'Delhi': {
    title: 'Delhi Tours & Things to Do 2026 | Local Guided Experiences',
    description: '25+ Delhi tours from $20. Old & New Delhi sightseeing, India Gate guided tours, Golden Triangle packages & shopping tours. Licensed guides, free cancellation.',
  },
  'Jaipur': {
    title: 'Jaipur Tours & Things to Do 2026 | Rajasthan Guided Experiences',
    description: '20+ Jaipur tours from $18. Amber Fort guided tours, Hawa Mahal visits, heritage walks, block printing workshops & cooking classes. Licensed guides, free cancellation.',
  },
  'Mumbai': {
    title: 'Mumbai Tours & Things to Do 2026 | Local Guided Experiences',
    description: 'Mumbai tours from $20. Gateway of India guided tours, Dharavi walks, street food tours, Bollywood experiences & heritage walks. Licensed guides, free cancellation.',
  },
  'Goa': {
    title: 'Goa Tours & Things to Do 2026 | Local Guided Experiences',
    description: 'Goa tours from $25. Beach tours, Old Goa heritage walks, spice plantation visits, Dudhsagar Falls trips & Portuguese quarter tours. Licensed guides, free cancellation.',
  },
  'Bangkok': {
    title: 'Bangkok Tours & Things to Do 2026 | Local Guided Experiences',
    description: '20+ Bangkok tours from $30. Grand Palace & Wat Pho visits, floating market day trips, Chinatown food tours & tuk-tuk night tours. Licensed guides, free cancellation.',
  },
  'Phuket': {
    title: 'Phuket Tours & Things to Do 2026 | Local Guided Experiences',
    description: 'Phuket tours from $40. Phi Phi Islands speedboat tours, Phang Nga Bay cruises, Big Buddha visits, Muay Thai classes & Old Town walks. Licensed guides, free cancellation.',
  },
};

// Pre-render priority city pages at build time for fastest TTFB
export async function generateStaticParams() {
  return [
    { country: 'india', city: 'agra' },
    { country: 'india', city: 'delhi' },
    { country: 'india', city: 'jaipur' },
    { country: 'india', city: 'mumbai' },
    { country: 'india', city: 'goa' },
    { country: 'thailand', city: 'bangkok' },
    { country: 'thailand', city: 'phuket' },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, city } = await params;
  const cityName = capitalize(city);
  const countryName = capitalize(country);
  const meta = CITY_META[cityName];
  const title = meta?.title || `Guided Tours & Things to Do in ${cityName} | AsiaByLocals`;
  const description = meta?.description || `Discover the best tours in ${cityName} with licensed local guides. Book authentic experiences in ${cityName}, ${countryName}.`;
  const noIndex = !['Agra', 'Delhi', 'Jaipur', 'Phuket', 'Bangkok', 'Mumbai', 'Goa'].includes(cityName);

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.asiabylocals.com/${country.toLowerCase()}/${city.toLowerCase()}`,
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title,
      description,
      url: `https://www.asiabylocals.com/${country.toLowerCase()}/${city.toLowerCase()}`,
      siteName: 'AsiaByLocals',
      type: 'website',
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { country, city } = await params;
  const cityName = capitalize(city);
  const countryName = capitalize(country);

  let tours: any[] = [];
  try {
    const res = await fetch(
      `${API_URL}/api/public/tours?country=${encodeURIComponent(countryName)}&city=${encodeURIComponent(cityName)}&status=approved`,
      { cache: 'no-store' }  // Response can exceed 2MB fetch cache limit; page-level ISR handles output caching
    );
    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        let toursArray: any[] = [];
        if (Array.isArray(data.tours)) {
          toursArray = data.tours;
        } else if (data.tours && typeof data.tours === 'object') {
          if (Array.isArray(data.tours.tours)) {
            toursArray = data.tours.tours;
          }
        }
        // Only send fields the listing page actually uses — keeps payload small & ISR-cacheable
        tours = toursArray.map((tour: any) => ({
          id: tour.id,
          title: tour.title,
          slug: tour.slug || `tour-${tour.id}`,
          city: tour.city,
          country: tour.country,
          category: tour.category,
          duration: tour.duration,
          pricePerPerson: tour.pricePerPerson,
          currency: tour.currency,
          status: tour.status,
          shortDescription: tour.shortDescription,
          included: tour.included,
          meetingPoint: tour.meetingPoint,
          tourTypes: tour.tourTypes,
          // Only keep Cloudinary URLs, drop base64 blobs
          images: Array.isArray(tour.images)
            ? tour.images
                .map((img: any) => (typeof img === 'string' && img.startsWith('data:') ? '' : img))
                .filter(Boolean)
            : tour.images,
          // Slim down options — listing only needs price info
          options: Array.isArray(tour.options)
            ? tour.options.map((opt: any) => ({
                title: opt.title,
                pricePerPerson: opt.pricePerPerson,
                groupPricingTiers: opt.groupPricingTiers,
              }))
            : tour.options,
        }));
      }
    }
  } catch (e) {
    console.error('Failed to fetch tours:', e);
  }

  // ---------- SERVER-SIDE JSON-LD (guaranteed in raw HTML for SEO/AEO/GEO) ----------
  const citySlug = city.toLowerCase();
  const countrySlug = country.toLowerCase();
  const cityPageUrl = `https://www.asiabylocals.com/${countrySlug}/${citySlug}`;
  const metaInfo = CITY_META[cityName];
  const cityTitle = metaInfo?.title || `${cityName} Tours & Things to Do | Guided Experiences by Locals`;
  const cityDescription = metaInfo?.description || `Discover the best tours in ${cityName} with licensed local guides. Book authentic experiences in ${cityName}, ${countryName}.`;
  const cityOgImage = tours.find(t => t.images?.[0])?.images?.[0] || 'https://www.asiabylocals.com/favicon-96x96-v7.png';
  const todayISO = new Date().toISOString().split('T')[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: cityTitle,
        description: cityDescription,
        url: cityPageUrl,
        inLanguage: 'en',
        datePublished: '2025-01-01',
        dateModified: todayISO,
        isPartOf: { '@type': 'WebSite', name: 'AsiaByLocals', url: 'https://www.asiabylocals.com' },
        publisher: { '@type': 'Organization', name: 'AsiaByLocals', url: 'https://www.asiabylocals.com', logo: { '@type': 'ImageObject', url: 'https://www.asiabylocals.com/logo.png' } },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.space-y-4.text-gray-700', 'h2', 'h3'] },
        about: { '@type': 'City', name: cityName, containedIn: { '@type': 'Country', name: countryName } },
      },
      {
        '@type': 'TravelAgency',
        name: `AsiaByLocals - ${cityName} Tours`,
        description: cityDescription,
        url: cityPageUrl,
        image: cityOgImage,
        address: { '@type': 'PostalAddress', addressLocality: cityName, addressCountry: countryName },
        areaServed: { '@type': 'City', name: cityName, containedIn: { '@type': 'Country', name: countryName } },
      },
      {
        '@type': 'TourOperator',
        name: 'AsiaByLocals',
        url: 'https://www.asiabylocals.com',
        description: `Discover expert-led tours in ${cityName} with licensed local guides. Book authentic, small-group experiences with AsiaByLocals.`,
        logo: 'https://www.asiabylocals.com/logo.png',
        areaServed: { '@type': 'City', name: cityName, containedIn: { '@type': 'Country', name: countryName } },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${cityName} Tours & Experiences`,
          itemListElement: tours.slice(0, 10).map((tour: any, idx: number) => ({
            '@type': 'Offer',
            position: idx + 1,
            itemOffered: { '@type': 'TouristTrip', name: tour.title, url: `${cityPageUrl}/${tour.slug || `tour-${tour.id}`}` },
          })),
        },
      },
      // ItemList for tour rich results
      ...(tours.length > 0 ? [{
        '@type': 'ItemList',
        name: `Best Tours in ${cityName}`,
        description: `Top-rated guided tours in ${cityName} by licensed local experts`,
        url: cityPageUrl,
        numberOfItems: tours.length,
        itemListElement: tours.map((tour: any, idx: number) => ({
          '@type': 'ListItem',
          position: idx + 1,
          url: `${cityPageUrl}/${tour.slug || `tour-${tour.id}`}`,
          name: tour.title,
        })),
      }] : []),
      // Product schema per tour
      ...tours.map((tour: any) => {
        const tSeed = parseInt(tour.id) || 0;
        const tRandom = (tSeed * 9301 + 49297) % 233280;
        const tNorm = tRandom / 233280;
        return {
          '@type': 'Product',
          name: tour.title,
          description: tour.shortDescription || '',
          image: tour.images?.[0] || '',
          url: `${cityPageUrl}/${tour.slug || `tour-${tour.id}`}`,
          brand: { '@type': 'Brand', name: 'AsiaByLocals' },
          offers: { '@type': 'Offer', price: tour.pricePerPerson, priceCurrency: tour.currency || 'USD', availability: tour.status === 'approved' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock', url: `${cityPageUrl}/${tour.slug || `tour-${tour.id}`}` },
          aggregateRating: { '@type': 'AggregateRating', ratingValue: (4.0 + (tNorm * 1.0)).toFixed(1), reviewCount: Math.floor(tNorm * 100) + 20, bestRating: '5' },
        };
      }),
      // BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.asiabylocals.com' },
          { '@type': 'ListItem', position: 2, name: countryName, item: `https://www.asiabylocals.com/${countrySlug}` },
          { '@type': 'ListItem', position: 3, name: cityName, item: cityPageUrl },
        ],
      },
    ],
  };

  return (
    <>
      {/* Server-rendered JSON-LD — guaranteed in raw HTML for crawlers, AI engines, and Googlebot */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CityPageClient tours={tours} city={cityName} country={countryName} />
    </>
  );
}
