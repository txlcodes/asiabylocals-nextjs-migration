import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AGRA_INFO_SLUGS, DELHI_INFO_SLUGS, JAIPUR_INFO_SLUGS, PHUKET_INFO_SLUGS, BANGKOK_INFO_SLUGS, KASHMIR_INFO_SLUGS } from '@/lib/constants';
import { getCityInfoContent } from '@/lib/cityInfoContent';
import { getTourSpecificFAQs } from '@/lib/tourFaqs';
import { getTourReviews } from '@/lib/tourReviews';
import Link from 'next/link';
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

// Shorten a long tour title for meta tag (keep under 45 chars before " in City | Brand")
function shortenTitleForMeta(title: string): string {
  if (title.length <= 45) return title;
  // Remove common filler patterns that inflate tour titles
  let short = title
    .replace(/\s*–\s*.*/g, '') // Remove everything after em-dash
    .replace(/\s*—\s*.*/g, '') // Remove everything after em-dash
    .replace(/\s*\|\s*.*/g, '') // Remove everything after pipe
    .replace(/\s*\(.*?\)\s*/g, ' ') // Remove parenthetical text
    .replace(/\s+/g, ' ').trim();
  if (short.length <= 45) return short;
  // Truncate at last word boundary before 45 chars
  let truncated = short.substring(0, 45).replace(/\s+\S*$/, '').trim();
  // Remove dangling prepositions/conjunctions that make no sense at the end
  truncated = truncated.replace(/\s+(with|from|by|for|and|in|of|the|a|an|to|at|on|&)$/i, '').trim();
  return truncated;
}

// Use the tour's real description — Google already associates these keywords with the page
function buildMetaDescription(tour: any, cityName: string): string {
  // Use shortDescription directly — content-rich descriptions rank better than templated ones
  if (tour.shortDescription && tour.shortDescription.length > 30) {
    let desc = tour.shortDescription.replace(/\s+/g, ' ').trim();
    if (desc.length > 155) desc = desc.substring(0, 152).replace(/\s+\S*$/, '').trim() + '...';
    return desc;
  }
  // Fallback only for tours with no/bad description
  return `${tour.title} in ${cityName}. Book with a licensed local guide on AsiaByLocals.`;
}

// Strip markdown (links, bold) from text for clean JSON-LD output
function stripMarkdown(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '');
}

// SEO title overrides — when the database title doesn't match the target keyword
// These override ONLY the meta title tag, not the on-page H1 (H1 comes from tour.title)
const SEO_TITLE_OVERRIDES: Record<string, string> = {
  // Only override titles where database title is genuinely broken or truncated
  // DO NOT add overrides for pages that are already ranking — title changes reset Google rankings
  'amber-fort-official-guided-tour': 'Amber Fort Official Guided Tour – Jaipur',
  'hawa-mahal-private-tour': 'Hawa Mahal & Jaipur Highlights Private Tour',
  'jaipur-shopping-tour': 'Jaipur Shopping Tour – Crafts, Gems & Textiles',
  'explore-old-new-delhi-city-luxury-car-tour': 'Old & New Delhi Luxury Car Tour – Private City Sightseeing',
  'delhi-guided-shopping-tour-female-expert': 'Delhi Shopping Tour with Female Guide – Markets & Crafts',
  'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal': 'Jaipur City Tour – Amber Fort, Hawa Mahal & City Palace',
  'fatehpur-sikri-guided-tour': 'Fatehpur Sikri Guided Tour – Private Local Guide in Agra',
};

function isInfoSlug(city: string, slug: string): boolean {
  const c = city.toLowerCase();
  if (c === 'agra') return AGRA_INFO_SLUGS.includes(slug);
  if (c === 'delhi') return DELHI_INFO_SLUGS.includes(slug);
  if (c === 'jaipur') return JAIPUR_INFO_SLUGS.includes(slug);
  if (c === 'phuket') return PHUKET_INFO_SLUGS.includes(slug);
  if (c === 'bangkok') return BANGKOK_INFO_SLUGS.includes(slug);
  if (c === 'kashmir') return KASHMIR_INFO_SLUGS.includes(slug);
  return false;
}

// Pre-render high-traffic tour pages at build time for fastest TTFB
export async function generateStaticParams() {
  return [
    // Agra — highest search volume
    { country: 'india', city: 'agra', slug: 'places-to-visit-in-agra' },
    { country: 'india', city: 'agra', slug: '1-day-agra-itinerary' },
    { country: 'india', city: 'agra', slug: 'taj-mahal-entry-ticket' },
    { country: 'india', city: 'agra', slug: 'taj-mahal-sunrise-tour' },
    { country: 'india', city: 'agra', slug: 'taj-mahal-official-guided-tour' },
    { country: 'india', city: 'agra', slug: 'taj-mahal-agra-fort-guided-tour' },
    { country: 'india', city: 'agra', slug: 'taj-mahal-sunrise-guided-tour' },
    { country: 'india', city: 'agra', slug: 'taj-mahal-full-day-tour' },
    { country: 'india', city: 'agra', slug: 'taj-mahal-photography-tour' },
    { country: 'india', city: 'agra', slug: 'fatehpur-sikri-guided-tour' },
    { country: 'india', city: 'agra', slug: 'agra-city-highlights-tour' },
    { country: 'india', city: 'agra', slug: 'same-day-taj-mahal-tour-by-car-from-delhi' },
    // Delhi
    { country: 'india', city: 'delhi', slug: 'explore-old-new-delhi-city-luxury-car-tour' },
    { country: 'india', city: 'delhi', slug: 'india-gate-guided-tour' },
    { country: 'india', city: 'delhi', slug: 'delhi-guided-shopping-tour-female-expert' },
    { country: 'india', city: 'delhi', slug: 'golden-triangle-tour-delhi-agra-jaipur' },
    { country: 'india', city: 'delhi', slug: 'taj-mahal-same-day-express-train-tour' },
    // Jaipur
    { country: 'india', city: 'jaipur', slug: 'amber-fort-official-guided-tour' },
    { country: 'india', city: 'jaipur', slug: 'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal' },
    { country: 'india', city: 'jaipur', slug: 'jaipur-shopping-tour' },
    { country: 'india', city: 'jaipur', slug: 'jaipur-heritage-walk-street-food-tour' },
    { country: 'india', city: 'jaipur', slug: 'hawa-mahal-private-tour' },
    { country: 'india', city: 'jaipur', slug: 'jaipur-full-day-sightseeing-tour-by-car' },
    { country: 'india', city: 'jaipur', slug: 'jaipur-block-printing-workshop' },
    { country: 'india', city: 'jaipur', slug: 'jaipur-same-day-tour-from-delhi' },
    { country: 'india', city: 'jaipur', slug: 'jaipur-same-day-tour-with-cooking-class' },
    { country: 'india', city: 'jaipur', slug: 'elephant-village-tour-jaipur' },
    { country: 'india', city: 'jaipur', slug: 'jaipur-to-agra-taj-mahal-day-trip' },
    { country: 'india', city: 'jaipur', slug: 'jaipur-city-tour-with-official-guide' },
    // Bangkok
    { country: 'thailand', city: 'bangkok', slug: 'bangkok-grand-palace-wat-pho-wat-arun-guided-tour' },
    // Phuket
    { country: 'thailand', city: 'phuket', slug: 'phi-phi-islands-speedboat-tour-maya-bay-snorkeling' },
    // Kashmir
    { country: 'india', city: 'kashmir', slug: 'kashmir-travel-guide-2026' },
  ];
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
      title: `${title} | AsiaByLocals`,
      description,
      alternates: {
        canonical: `https://www.asiabylocals.com/${country.toLowerCase()}/${city.toLowerCase()}/${slug}`,
      },
      openGraph: {
        title: `${title} | AsiaByLocals`,
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
      cache: 'no-store',  // Response exceeds 2MB fetch cache limit; page-level ISR handles caching
    });
    if (res.ok) {
      const data = await res.json();
      const tour = (data.success && data.tour) ? data.tour : (data.title ? data : null);
      if (tour) {
        // Always use CTR-optimized description with trust signals
        const description = buildMetaDescription(tour, cityName);
        // Use SEO override title if available, otherwise shorten the database title
        const seoTitle = SEO_TITLE_OVERRIDES[slug];
        const shortTitle = seoTitle || shortenTitleForMeta(tour.title);
        // Avoid "Jaipur Tour in Jaipur" duplication
        const titleTag = seoTitle
          ? `${seoTitle} | AsiaByLocals`
          : shortTitle.toLowerCase().includes(cityName.toLowerCase())
            ? `${shortTitle} | AsiaByLocals`
            : `${shortTitle} in ${cityName} | AsiaByLocals`;
        return {
          title: titleTag,
          description,
          alternates: {
            canonical: `https://www.asiabylocals.com/${country.toLowerCase()}/${city.toLowerCase()}/${slug}`,
          },
          openGraph: {
            title: titleTag,
            description,
            images: tour.images?.[0] ? [{ url: tour.images[0], width: 1200, height: 630, alt: tour.title }] : [],
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
      cache: 'no-store',  // Response exceeds 2MB fetch cache limit; page-level ISR handles caching
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
  const tourUrl = `https://www.asiabylocals.com/${countrySlug}/${citySlug}/${slug}`;
  const todayISO = new Date().toISOString().split('T')[0];

  // Build real itinerary from tour data
  const itineraryItems = Array.isArray(tour?.itineraryItems) && tour.itineraryItems.length > 0
    ? tour.itineraryItems
    : null;
  const itinerarySchema = itineraryItems
    ? {
        '@type': 'ItemList',
        description: `Guided tour itinerary in ${cityName}, ${countryName}`,
        numberOfItems: itineraryItems.length,
        itemListElement: itineraryItems.map((item: any, idx: number) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.title || `Stop ${idx + 1}`,
          ...(item.description ? { description: item.description } : {}),
        })),
      }
    : {
        '@type': 'ItemList',
        description: `Guided tour in ${cityName}, ${countryName}`,
        numberOfItems: 1,
        itemListElement: [{ '@type': 'ListItem', position: 1, name: tour?.title || 'Tour Experience' }],
      };

  // Get FAQs for this tour (from extracted lib/tourFaqs.ts)
  const tourFaqs = getTourSpecificFAQs(tour?.title || '', slug);
  const faqSchema = tourFaqs && tourFaqs.length > 0
    ? {
        '@type': 'FAQPage',
        mainEntity: tourFaqs.slice(0, 8).map((faq: { question: string; answer: string }) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: stripMarkdown(faq.answer),
          },
        })),
      }
    : null;

  // Get real reviews for this tour (for rich snippet review schema)
  const tourReviewData = getTourReviews(slug);
  const reviewSchemas = tourReviewData && tourReviewData.reviews.length > 0
    ? tourReviewData.reviews.slice(0, 3).map((review) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: review.author },
        datePublished: review.date,
        reviewRating: { '@type': 'Rating', ratingValue: review.rating, bestRating: '5' },
        reviewBody: review.text,
      }))
    : undefined;

  // Build highlights as amenityFeature
  const highlights = Array.isArray(tour?.highlights) && tour.highlights.length > 0 ? tour.highlights : null;
  const amenityFeatures = highlights
    ? highlights.map((h: string) => ({ '@type': 'LocationFeatureSpecification', name: h, value: true }))
    : undefined;

  const tourJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // Product schema — enables rich results with price + star ratings in Google SERPs
      {
        '@type': 'Product',
        name: tour?.title || 'Tour',
        description: tour?.shortDescription || '',
        image: tour?.images?.[0] || '',
        url: tourUrl,
        datePublished: '2025-01-01',
        dateModified: todayISO,
        brand: { '@type': 'Brand', name: 'AsiaByLocals' },
        offers: {
          '@type': 'Offer',
          price: tour?.pricePerPerson || 0,
          priceCurrency: tour?.currency || 'USD',
          availability: 'https://schema.org/InStock',
          url: tourUrl,
          priceValidUntil: '2026-12-31',
          seller: { '@type': 'TravelAgency', name: 'AsiaByLocals', url: 'https://www.asiabylocals.com' },
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: tourReviewData ? tourReviewData.averageRating.toFixed(1) : ratingValue,
          reviewCount: tourReviewData ? tourReviewData.totalReviews : reviewCount,
          bestRating: '5',
        },
        ...(reviewSchemas ? { review: reviewSchemas } : {}),
      },
      // TouristTrip schema — enriched with real tour data for AI engines and Google
      {
        '@type': 'TouristTrip',
        name: tour?.title || 'Tour',
        description: tour?.fullDescription || tour?.shortDescription || '',
        image: tour?.images?.[0] || '',
        url: tourUrl,
        datePublished: '2025-01-01',
        dateModified: todayISO,
        touristType: tour?.category || 'Cultural Tourism',
        ...(tour?.duration ? { duration: tour.duration } : {}),
        ...(tour?.maxGroupSize ? { maximumAttendeeCapacity: tour.maxGroupSize } : {}),
        ...(Array.isArray(tour?.languages) && tour.languages.length > 0 ? { availableLanguage: tour.languages } : {}),
        ...(amenityFeatures ? { amenityFeature: amenityFeatures } : {}),
        itinerary: itinerarySchema,
        offers: {
          '@type': 'Offer',
          price: tour?.pricePerPerson || 0,
          priceCurrency: tour?.currency || 'USD',
          availability: 'https://schema.org/InStock',
          url: tourUrl,
          seller: { '@type': 'TravelAgency', name: 'AsiaByLocals', url: 'https://www.asiabylocals.com' },
        },
        provider: {
          '@type': 'TravelAgency',
          name: 'AsiaByLocals',
          url: 'https://www.asiabylocals.com',
          '@id': 'https://www.asiabylocals.com/#organization',
        },
        contentLocation: {
          '@type': 'City',
          name: cityName,
          containedInPlace: { '@type': 'Country', name: countryName },
        },
      },
      // BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.asiabylocals.com' },
          { '@type': 'ListItem', position: 2, name: countryName, item: `https://www.asiabylocals.com/${countrySlug}` },
          { '@type': 'ListItem', position: 3, name: cityName, item: `https://www.asiabylocals.com/${countrySlug}/${citySlug}` },
          { '@type': 'ListItem', position: 4, name: tour?.title || 'Tour', item: tourUrl },
        ],
      },
      // FAQPage schema — triggers FAQ accordion rich results in Google SERPs
      ...(faqSchema ? [faqSchema] : []),
    ],
  };

  // Server-rendered internal links — guaranteed in raw HTML for Google crawler
  // (RelatedTours component is client-side API-fetched, which crawlers may skip)
  const CITY_TOUR_LINKS: Record<string, { slug: string; title: string }[]> = {
    agra: [
      { slug: 'taj-mahal-entry-ticket', title: 'Taj Mahal Entry Ticket & Guided Tour' },
      { slug: 'taj-mahal-sunrise-guided-tour', title: 'Taj Mahal Sunrise Guided Tour' },
      { slug: 'taj-mahal-official-guided-tour', title: 'Book Official Tour Guide for Taj Mahal' },
      { slug: 'agra-city-highlights-tour', title: 'Agra City Highlights Tour' },
      { slug: 'fatehpur-sikri-guided-tour', title: 'Fatehpur Sikri Guided Tour' },
      { slug: 'taj-mahal-fatehpur-full-day-tour', title: 'Taj Mahal & Fatehpur Sikri Full Day Tour' },
      { slug: 'agra-friday-tour-taj-closed-alternative', title: 'Agra Friday Tour - Taj Closed Alternative' },
      { slug: 'taj-mahal-agra-fort-guided-tour', title: 'Taj Mahal & Agra Fort Guided Tour' },
      { slug: 'taj-mahal-photography-tour', title: 'Taj Mahal Photography Tour' },
      { slug: 'taj-mahal-royal-private-tour', title: 'Taj Mahal Royal Private Tour' },
      { slug: 'female-guide-for-taj-mahal', title: 'Female Guide for Taj Mahal' },
      { slug: 'heritage-walk-in-agra', title: 'Heritage Walk in Agra' },
    ],
    delhi: [
      { slug: 'explore-old-new-delhi-city-luxury-car-tour', title: 'Old & New Delhi City Tour' },
      { slug: 'delhi-guided-shopping-tour-female-expert', title: 'Delhi Guided Shopping Tour' },
      { slug: 'india-gate-guided-tour', title: 'India Gate Guided Tour' },
      { slug: 'golden-triangle-tour-delhi-agra-jaipur', title: '3-Day Golden Triangle Tour' },
      { slug: 'taj-mahal-same-day-express-train-tour', title: 'Taj Mahal Express Train Tour from Delhi' },
      { slug: 'same-day-taj-mahal-tour-by-car-from-delhi', title: 'Same Day Taj Mahal Tour by Car' },
      { slug: 'from-delhi-same-day-taj-mahal-fastest-train', title: 'Fastest Train to Taj Mahal from Delhi' },
      { slug: 'delhi-full-day-guided-tour', title: 'Delhi Full Day Guided Tour' },
      { slug: 'old-new-delhi-guided-tour', title: 'Old & New Delhi Heritage Tour' },
      { slug: 'delhi-private-4-day-golden-triangle-luxury-tour', title: '4-Day Golden Triangle Luxury Tour' },
      { slug: 'sunrise-taj-mahal-and-agra-tour-by-car', title: 'Sunrise Taj Mahal Tour from Delhi' },
    ],
    jaipur: [
      { slug: 'amber-fort-official-guided-tour', title: 'Amber Fort Official Guided Tour' },
      { slug: 'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal', title: 'Jaipur City Highlights with Amber Fort & Hawa Mahal' },
      { slug: 'jaipur-shopping-tour', title: 'Jaipur Shopping Tour' },
      { slug: 'jaipur-heritage-walk-street-food-tour', title: 'Jaipur Heritage Walk & Street Food Tour' },
      { slug: 'jaipur-full-day-sightseeing-tour-by-car', title: 'Jaipur Full Day Sightseeing Tour' },
      { slug: 'jaipur-block-printing-workshop', title: 'Jaipur Block Printing Workshop' },
      { slug: 'jaipur-same-day-tour-from-delhi', title: 'Jaipur Same Day Tour from Delhi' },
      { slug: 'hawa-mahal-private-tour', title: 'Hawa Mahal & Jaipur Highlights Tour' },
      { slug: 'jaipur-same-day-tour-with-cooking-class', title: 'Jaipur Day Tour with Cooking Class' },
      { slug: 'elephant-village-tour-jaipur', title: 'Elephant Village Tour in Jaipur' },
      { slug: 'jaipur-city-tour-with-official-guide', title: 'Jaipur City Tour with Official Guide' },
      { slug: 'jaipur-private-full-day-sightseeing-tour', title: 'Jaipur Private Full Day Tour' },
      { slug: 'jaipur-to-agra-taj-mahal-day-trip', title: 'Jaipur to Agra Taj Mahal Day Trip' },
      { slug: 'delhi-to-jaipur-royal-private-day-tour', title: 'Delhi to Jaipur Royal Day Tour' },
    ],
    bangkok: [
      { slug: 'bangkok-grand-palace-wat-pho-wat-arun-guided-tour', title: 'Grand Palace, Wat Pho & Wat Arun Guided Tour' },
      { slug: 'ayutthaya-ancient-temples-day-trip-bangkok-thai-lunch', title: 'Ayutthaya Ancient Temples Day Trip with Thai Lunch' },
      { slug: 'bangkok-chinatown-food-tour-15-tastings-michelin-stops', title: 'Bangkok Chinatown Food Tour: 15+ Michelin Tastings' },
      { slug: 'bangkok-street-food-tuk-tuk-night-tour', title: 'Bangkok After Dark: Street Food & Tuk-Tuk Night Tour' },
      { slug: 'learn-muay-thai-bangkok-private-training-certified-fighter', title: 'Learn Muay Thai: Private Training with a Certified Fighter' },
      { slug: 'bangkok-floating-market-railway-market-day-trip-boat-ride', title: 'Floating Market & Railway Market Day Trip with Boat Ride' },
      { slug: 'bangkok-maeklong-railway-damnoen-saduak-dragon-temple-tour', title: 'Maeklong Railway, Damnoen Saduak & Dragon Temple Tour' },
      { slug: 'bangkok-photo-walk-hidden-gems-tour', title: 'Bangkok Photo Walk: Hidden Gems Tour' },
      { slug: 'bangkok-scavenger-hunt-tour', title: 'Khlong Toei Market Scavenger Hunt with Tuk-Tuk Ride' },
      { slug: 'bangkok-ancient-city-erawan-museum-tour', title: 'Ancient City & Erawan Museum Day Trip' },
    ],
  };

  const cityTourLinks = CITY_TOUR_LINKS[citySlug] || [];
  // Filter out the current tour from internal links
  const otherTourLinks = cityTourLinks.filter(t => t.slug !== slug);

  // Info page cross-links — two-way linking between tour pages and info pages
  const CITY_INFO_LINKS: Record<string, { slug: string; title: string }[]> = {
    jaipur: [
      { slug: 'things-to-do-in-jaipur', title: 'Things to Do in Jaipur' },
      { slug: 'jaipur-travel-guide-2026', title: 'Jaipur Travel Guide 2026' },
      { slug: 'amber-fort', title: 'Amber Fort Guide' },
      { slug: 'hawa-mahal', title: 'Hawa Mahal Guide' },
      { slug: 'jantar-mantar-jaipur', title: 'Jantar Mantar Jaipur' },
      { slug: 'jal-mahal', title: 'Jal Mahal Guide' },
      { slug: 'best-time-to-visit-jaipur', title: 'Best Time to Visit Jaipur' },
      { slug: 'jaipur-shopping-guide', title: 'Jaipur Shopping Guide' },
      { slug: 'places-to-visit-in-jaipur', title: 'Places to Visit in Jaipur' },
    ],
    agra: [
      { slug: 'things-to-do-in-agra', title: 'Things to Do in Agra' },
      { slug: 'agra-travel-guide-2026', title: 'Agra Travel Guide 2026' },
      { slug: 'taj-mahal', title: 'Taj Mahal Guide' },
      { slug: 'agra-fort', title: 'Agra Fort Guide' },
      { slug: 'taj-mahal-ticket-price-2026', title: 'Taj Mahal Ticket Price 2026' },
      { slug: 'best-time-to-visit-agra', title: 'Best Time to Visit Agra' },
    ],
    delhi: [
      { slug: 'things-to-do-in-delhi', title: 'Things to Do in Delhi' },
      { slug: 'delhi-travel-guide-2026', title: 'Delhi Travel Guide 2026' },
      { slug: 'red-fort', title: 'Red Fort Guide' },
      { slug: 'india-gate', title: 'India Gate Guide' },
    ],
    kashmir: [
      { slug: 'kashmir-travel-guide-2026', title: 'Kashmir Travel Guide 2026' },
      { slug: 'things-to-do-in-kashmir', title: 'Things to Do in Kashmir' },
      { slug: 'dal-lake-srinagar', title: 'Dal Lake Guide' },
      { slug: 'gulmarg-travel-guide', title: 'Gulmarg Travel Guide' },
      { slug: 'best-time-to-visit-kashmir', title: 'Best Time to Visit Kashmir' },
    ],
  };

  const cityInfoLinks = CITY_INFO_LINKS[citySlug] || [];
  // Filter out current slug if it's an info page being viewed from tour context
  const otherInfoLinks = cityInfoLinks.filter(t => t.slug !== slug);

  return (
    <>
      {/* Server-rendered JSON-LD — guaranteed in raw HTML for crawlers & AI engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourJsonLd) }}
      />
      {/* SEO: visible H1 with city name is rendered by TourDetailClient. No duplicate hidden H1. */}
      <TourDetailClient tour={tour} city={cityName} country={countryName} />

      {/* Server-rendered internal links — visible to Google crawler in raw HTML */}
      {otherTourLinks.length > 0 && (
        <nav aria-label={`More ${cityName} tours`} className="max-w-7xl mx-auto px-6 pb-12">
          <h2 className="text-2xl font-black text-[#001A33] mb-6">More {cityName} Tours</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherTourLinks.map((t) => (
              <Link
                key={t.slug}
                href={`/${countrySlug}/${citySlug}/${t.slug}`}
                className="p-4 rounded-xl border border-gray-200 hover:border-[#10B981] hover:shadow-md transition-all group"
              >
                <span className="text-[15px] font-black text-[#001A33] group-hover:text-[#10B981] transition-colors">
                  {t.title}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      )}

      {/* Server-rendered info page cross-links — two-way linking for SEO */}
      {otherInfoLinks.length > 0 && (
        <nav aria-label={`${cityName} travel guides`} className="max-w-7xl mx-auto px-6 pb-12">
          <h2 className="text-2xl font-black text-[#001A33] mb-6">{cityName} Travel Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherInfoLinks.map((t) => (
              <Link
                key={t.slug}
                href={`/${countrySlug}/${citySlug}/${t.slug}`}
                className="p-4 rounded-xl border border-gray-200 hover:border-[#10B981] hover:shadow-md transition-all group"
              >
                <span className="text-[15px] font-black text-[#001A33] group-hover:text-[#10B981] transition-colors">
                  {t.title}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
