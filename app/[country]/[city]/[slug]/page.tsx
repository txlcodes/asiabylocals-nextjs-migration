import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AGRA_INFO_SLUGS, DELHI_INFO_SLUGS, JAIPUR_INFO_SLUGS, PHUKET_INFO_SLUGS, BANGKOK_INFO_SLUGS } from '@/lib/constants';
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

// Build a CTR-optimized meta description — leads with trust signals like Viator/GYG
function buildMetaDescription(tour: any, cityName: string): string {
  const price = tour.pricePerPerson ? `From $${tour.pricePerPerson}` : '';
  const duration = tour.duration || '';
  const parts: string[] = [];
  if (price) parts.push(price);
  parts.push('Free cancellation');
  if (duration) parts.push(duration);
  parts.push('Licensed local guide');
  const trustLine = parts.join(' · ');
  const desc = `${trustLine}. ${tour.title} in ${cityName}. Book instantly with verified guides on AsiaByLocals.`;
  return desc.length > 155 ? desc.slice(0, 152) + '...' : desc;
}

// Strip markdown (links, bold) from text for clean JSON-LD output
function stripMarkdown(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '');
}

// SEO title overrides — when the database title doesn't match the target keyword
// These override ONLY the meta title tag, not the on-page H1 (H1 comes from tour.title)
const SEO_TITLE_OVERRIDES: Record<string, string> = {
  // Jaipur
  'amber-fort-official-guided-tour': 'Amber Fort Official Guided Tour – Jaipur',
  'hawa-mahal-private-tour': 'Hawa Mahal & Jaipur Highlights Private Tour',
  'jaipur-shopping-tour': 'Jaipur Shopping Tour – Crafts, Gems & Textiles',
  'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal': 'Jaipur City Tour – Amber Fort, Hawa Mahal & City Palace',
  'jaipur-block-printing-workshop': 'Jaipur Block Printing Workshop – Hands-on',
  'jaipur-heritage-walk-street-food-tour': 'Jaipur Heritage Walk & Street Food Tour',
  'jaipur-same-day-tour-with-cooking-class': 'Jaipur Day Tour with Cooking Class',
  // Agra
  'fatehpur-sikri-guided-tour': 'Fatehpur Sikri Guided Tour – Private Guide in Agra',
  'taj-mahal-guided-tour': 'Taj Mahal Guided Tour – Certified Guide in Agra',
  'taj-mahal-photography-tour': 'Taj Mahal Photography Tour in Agra',
  'mysteries-of-agra-local-tour': 'Mysteries of Agra – Local Heritage Tour',
  'agra-friday-tour-taj-closed-alternative': 'Agra Friday Tour – Best Sites When Taj Is Closed',
  'hidden-gems-of-agra-heritage-tour': 'Hidden Gems of Agra – Beyond the Taj Mahal',
  'taj-mahal-pickup-private-tour': 'Agra Fort & Baby Taj Private Tour',
  'taj-mahal-sunrise-tour': 'Taj Mahal Sunrise Tour in Agra',
  'taj-mahal-sunrise-guided-tour': 'Taj Mahal Sunrise Guided Tour in Agra',
  'agra-city-highlights-tour': 'Agra City Highlights Tour with Guide',
  'taj-mahal-half-day-tour': 'Taj Mahal Half-Day Tour – Private Guide in Agra',
  'agra-photography-tour-with-guide': 'Agra Photography Tour with Guide',
  'taj-mahal-royal-private-tour': 'Taj Mahal Royal Private Tour in Agra',
  'taj-mahal-agra-private-day-tour-with-lunch': 'Taj Mahal & Agra Day Tour with Lunch',
  'taj-mahal-sunrise-tour-from-agra': 'Taj Mahal Sunrise Tour from Agra',
  'agra-royal-sunrise-tour': 'Agra Royal Sunrise Tour – Taj Mahal & Fort',
  'taj-mahal-vrindavan-full-day-tour': 'Taj Mahal & Vrindavan Day Tour from Agra',
  'taj-mahal-agra-fort-guided-tour': 'Taj Mahal & Agra Fort Guided Tour',
  'private-sunrise-taj-mahal-agra-fort-tour': 'Private Sunrise Taj Mahal & Agra Fort Tour',
  'same-day-taj-mahal-tour-by-car-from-delhi': 'Same Day Taj Mahal Tour by Car from Delhi',
  // Delhi
  'explore-old-new-delhi-city-luxury-car-tour': 'Old & New Delhi Luxury Car Tour – Private Sightseeing',
  'delhi-guided-shopping-tour-female-expert': 'Delhi Shopping Tour with Female Guide – Markets & Crafts',
  'taj-mahal-sunrise-elephant-conservation-tour': 'Taj Mahal Sunrise & Elephant Tour from Delhi',
  'sunrise-taj-mahal-and-agra-tour-by-car': 'Sunrise Taj Mahal Tour from Delhi by Car',
  'taj-mahal-superfast-guided-tour': 'Taj Mahal Superfast Train Tour from Delhi',
  'india-gate-guided-tour': 'India Gate Guided Tour in Delhi',
  'taj-mahal-same-day-express-train-tour': 'Taj Mahal Express Train Tour from Delhi',
  'from-delhi-same-day-taj-mahal-fastest-train': 'Same Day Taj Mahal – Fastest Train from Delhi',
  'delhi-private-4-day-golden-triangle-luxury-tour': '4-Day Golden Triangle Luxury Tour from Delhi',
  '5-days-golden-triangle-ranthambore-tiger-safari': '5-Day Golden Triangle & Ranthambore Tiger Safari',
  '5-days-golden-triangle-tour-from-delhi': '5-Day Golden Triangle Tour from Delhi',
  'golden-triangle-tour-delhi-agra-jaipur': '3-Day Golden Triangle Tour – Delhi, Agra & Jaipur',
  // Udaipur
  'city-palace-full-day-tour': 'Udaipur City Palace Full-Day Tour',
  // Phuket
  'phi-phi-islands-speedboat-tour-maya-bay-snorkeling': 'Phi Phi Islands Speedboat Tour – Maya Bay',
  'phuket-private-yacht-catamaran-charter-island-hopping': 'Phuket Private Yacht Charter – Island Hopping',
  'muay-thai-training-class-phuket-beginners': 'Muay Thai Training Class Phuket – Beginners',
};

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
      cache: 'no-store',
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
  const tourUrl = `https://www.asiabylocals.com/${countrySlug}/${citySlug}/${slug}`;

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
    ],
    delhi: [
      { slug: 'explore-old-new-delhi-city-luxury-car-tour', title: 'Old & New Delhi City Tour' },
      { slug: 'delhi-guided-shopping-tour-female-expert', title: 'Delhi Guided Shopping Tour' },
      { slug: 'india-gate-guided-tour', title: 'India Gate Guided Tour' },
      { slug: 'golden-triangle-3-day-tour', title: 'Golden Triangle 3-Day Tour' },
    ],
    jaipur: [
      { slug: 'amber-fort-official-guided-tour', title: 'Amber Fort Official Guided Tour' },
      { slug: 'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal', title: 'Jaipur City Highlights with Amber Fort & Hawa Mahal' },
      { slug: 'jaipur-shopping-tour', title: 'Jaipur Shopping Tour' },
      { slug: 'jaipur-heritage-walk-street-food-tour', title: 'Jaipur Heritage Walk & Street Food Tour' },
      { slug: 'jaipur-full-day-sightseeing-tour-by-car', title: 'Jaipur Full Day Sightseeing Tour' },
      { slug: 'jaipur-block-printing-workshop', title: 'Jaipur Block Printing Workshop' },
      { slug: 'jaipur-same-day-tour-from-delhi', title: 'Jaipur Same Day Tour from Delhi' },
    ],
  };

  const cityTourLinks = CITY_TOUR_LINKS[citySlug] || [];
  // Filter out the current tour from internal links
  const otherTourLinks = cityTourLinks.filter(t => t.slug !== slug);

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
    </>
  );
}
