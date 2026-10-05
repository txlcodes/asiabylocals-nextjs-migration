import { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { CITY_URL_MAP } from '@/lib/cityCountryMap';
import { DUPLICATE_CANONICAL_MAP } from '@/lib/duplicateCanonical';
import { offerRange } from '@/lib/offerPrice';
import { isLang, tourT, pageT, optionT, alternatesFor, canonicalFor, type Lang } from '@/lib/translations';
import { AGRA_INFO_SLUGS, UBUD_INFO_SLUGS, CANGGU_INFO_SLUGS, ULUWATU_INFO_SLUGS, NUSA_PENIDA_INFO_SLUGS, DELHI_INFO_SLUGS, JAIPUR_INFO_SLUGS, PHUKET_INFO_SLUGS, BANGKOK_INFO_SLUGS, KASHMIR_INFO_SLUGS, CHIANG_MAI_INFO_SLUGS, PATTAYA_INFO_SLUGS, KRABI_INFO_SLUGS, TOKYO_INFO_SLUGS, KYOTO_INFO_SLUGS, OSAKA_INFO_SLUGS, HIROSHIMA_INFO_SLUGS, SAPPORO_INFO_SLUGS, NARA_INFO_SLUGS, NAGOYA_INFO_SLUGS, HAKONE_INFO_SLUGS, MOUNT_FUJI_INFO_SLUGS, COLOMBO_INFO_SLUGS, KANDY_INFO_SLUGS, SIGIRIYA_INFO_SLUGS, ELLA_INFO_SLUGS , GALLE_INFO_SLUGS , NEGOMBO_INFO_SLUGS , NUWARA_ELIYA_INFO_SLUGS , BENTOTA_INFO_SLUGS , MIRISSA_INFO_SLUGS, DUBAI_INFO_SLUGS, ABU_DHABI_INFO_SLUGS, HA_LONG_INFO_SLUGS, HANOI_INFO_SLUGS, SAPA_INFO_SLUGS, HOI_AN_INFO_SLUGS, DA_NANG_INFO_SLUGS, HO_CHI_MINH_CITY_INFO_SLUGS, SIEM_REAP_INFO_SLUGS, PHNOM_PENH_INFO_SLUGS, KUALA_LUMPUR_INFO_SLUGS, PENANG_INFO_SLUGS, LANGKAWI_INFO_SLUGS, MALACCA_INFO_SLUGS, KOTA_KINABALU_INFO_SLUGS } from '@/lib/constants';
import { getCityInfoContent } from '@/lib/cityInfoContent';
import { getTourSpecificFAQs } from '@/lib/tourFaqs';
import { getTourReviews } from '@/lib/tourReviews';
import Link from 'next/link';
import TourDetailClient from '@/components/TourDetailClient';
import CityInfoClient from '@/components/CityInfoClient';
import { countryDisplayName } from '@/lib/countryName';
import { cloudinaryLoader } from '@/lib/cloudinaryLoader';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';

export const revalidate = 60;

interface Props {
  params: Promise<{ country: string; city: string; slug: string; lang?: string }>;
}

function capitalize(str: string) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
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
// `budget` is how many characters the title itself may use, worked out from the
// suffix that will be appended, so the finished tag lands inside Google's ~60.
// A fixed 45 produced tags of 62 to 71 characters on 4,236 live tours, because
// " in Ho Chi Minh City | AsiaByLocals" is 35 characters on its own and a fixed
// limit cannot know that. Callers pass the budget; the default keeps the old
// behaviour for anything that has not been updated.
function shortenTitleForMeta(title: string, budget = 45): string {
  if (title.length <= budget) return title;
  // Remove common filler patterns that inflate tour titles
  let short = title
    .replace(/\s*–\s*.*/g, '') // Remove everything after em-dash
    .replace(/\s*—\s*.*/g, '') // Remove everything after em-dash
    .replace(/\s*\|\s*.*/g, '') // Remove everything after pipe
    .replace(/\s*\(.*?\)\s*/g, ' ') // Remove parenthetical text
    .replace(/\s+/g, ' ').trim();
  if (short.length <= budget) return short;
  // Truncate at last word boundary inside the budget
  let truncated = short.substring(0, budget).replace(/\s+\S*$/, '').trim();
  // A cut that lands right after a comma/colon/semicolon in a list-style title
  // ("Agra Fort,") reads as broken in the SERP snippet — strip trailing punctuation.
  truncated = truncated.replace(/[,:;]+$/, '').trim();
  // Remove dangling prepositions/conjunctions that make no sense at the end
  truncated = truncated.replace(/\s+(with|from|by|for|and|in|of|the|a|an|to|at|on|&)$/i, '').trim();
  truncated = truncated.replace(/[,:;]+$/, '').trim();
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
const SEO_TITLE_OVERRIDES: Record<string, string> = {
  // Only override titles where database title is genuinely broken or truncated
  // DO NOT add overrides for pages that are already ranking — title changes reset Google rankings
  'amber-fort-official-guided-tour': 'Amber Fort Official Guided Tour – Jaipur',
  'hawa-mahal-private-tour': 'Hawa Mahal & Jaipur Highlights Private Tour',
  'jaipur-shopping-tour': 'Jaipur Shopping Tour – Crafts, Gems & Textiles',
  'explore-old-new-delhi-city-luxury-car-tour': 'Old & New Delhi Luxury Car Tour – Private City Sightseeing',
  'delhi-guided-shopping-tour-female-expert': 'Delhi Shopping Tour with Female Guide – Markets & Crafts',
  'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal': 'Jaipur City Tour – Amber Fort, Hawa Mahal & City Palace',
  // 143 impressions / 0 clicks at position 7.4 over 90 days for "fatehpur sikri
  // private tour" — the exact phrase wasn't in the tag, just "Private" and
  // "Guide" separately. Lead with the matching phrase instead.
  'fatehpur-sikri-guided-tour': 'Fatehpur Sikri Private Tour with Local Guide 2026',
  // 27.5k impressions / 61 clicks (0.22% CTR) at position 8.8 over 90 days. The
  // page ranks for "taj mahal tickets"; the old title never said "tickets" or a
  // price, so the listing lost the click. Ranking volatility is a real risk on a
  // title change, but 0.22% CTR is a worse steady state.
  'taj-mahal-entry-ticket': 'Taj Mahal Tickets 2026: Prices & How to Book',
};

// Meta description overrides for tour pages whose supplier-written
// shortDescription doesn't answer the query the page actually ranks for.
const SEO_DESCRIPTION_OVERRIDES: Record<string, string> = {
  'taj-mahal-entry-ticket':
    'Taj Mahal ticket prices 2026: ₹1,100 foreign adults, ₹50 Indians, +₹200 for the mausoleum. Skip the queue — we pre-book and meet you at the gate.',
  'fatehpur-sikri-guided-tour':
    'Private Fatehpur Sikri tour with a licensed local guide. Explore Akbar’s abandoned Mughal capital at your own pace, no group, no rush — book direct with no OTA markup.',
};

function isInfoSlug(city: string, slug: string): boolean {
  const c = city.toLowerCase();
  if (c === 'ubud') return UBUD_INFO_SLUGS.includes(slug);
  if (c === 'canggu') return CANGGU_INFO_SLUGS.includes(slug);
  if (c === 'uluwatu') return ULUWATU_INFO_SLUGS.includes(slug);
  if (c === 'nusa-penida') return NUSA_PENIDA_INFO_SLUGS.includes(slug);
  if (c === 'agra') return AGRA_INFO_SLUGS.includes(slug);
  if (c === 'delhi') return DELHI_INFO_SLUGS.includes(slug);
  if (c === 'jaipur') return JAIPUR_INFO_SLUGS.includes(slug);
  if (c === 'phuket') return PHUKET_INFO_SLUGS.includes(slug);
  if (c === 'bangkok') return BANGKOK_INFO_SLUGS.includes(slug);
  if (c === 'kashmir') return KASHMIR_INFO_SLUGS.includes(slug);
  if (c === 'chiang-mai') return CHIANG_MAI_INFO_SLUGS.includes(slug);
  if (c === 'pattaya') return PATTAYA_INFO_SLUGS.includes(slug);
  if (c === 'krabi') return KRABI_INFO_SLUGS.includes(slug);
  if (c === 'siem-reap') return SIEM_REAP_INFO_SLUGS.includes(slug);
  if (c === 'phnom-penh') return PHNOM_PENH_INFO_SLUGS.includes(slug);
  if (c === 'tokyo') return TOKYO_INFO_SLUGS.includes(slug);
  if (c === 'kyoto') return KYOTO_INFO_SLUGS.includes(slug);
  if (c === 'osaka') return OSAKA_INFO_SLUGS.includes(slug);
  if (c === 'hiroshima') return HIROSHIMA_INFO_SLUGS.includes(slug);
  if (c === 'sapporo') return SAPPORO_INFO_SLUGS.includes(slug);
  if (c === 'nara') return NARA_INFO_SLUGS.includes(slug);
  if (c === 'nagoya') return NAGOYA_INFO_SLUGS.includes(slug);
  if (c === 'hakone') return HAKONE_INFO_SLUGS.includes(slug);
  if (c === 'mount-fuji') return MOUNT_FUJI_INFO_SLUGS.includes(slug);
  if (c === 'dubai') return DUBAI_INFO_SLUGS.includes(slug);
  if (c === 'abu-dhabi') return ABU_DHABI_INFO_SLUGS.includes(slug);
  if (c === 'ha-long') return HA_LONG_INFO_SLUGS.includes(slug);
  if (c === 'hanoi') return HANOI_INFO_SLUGS.includes(slug);
  if (c === 'sapa') return SAPA_INFO_SLUGS.includes(slug);
  if (c === 'hoi-an') return HOI_AN_INFO_SLUGS.includes(slug);
  if (c === 'da-nang') return DA_NANG_INFO_SLUGS.includes(slug);
  if (c === 'ho-chi-minh-city') return HO_CHI_MINH_CITY_INFO_SLUGS.includes(slug);
  if (c === 'kuala-lumpur') return KUALA_LUMPUR_INFO_SLUGS.includes(slug);
  if (c === 'penang') return PENANG_INFO_SLUGS.includes(slug);
  if (c === 'langkawi') return LANGKAWI_INFO_SLUGS.includes(slug);
  if (c === 'malacca') return MALACCA_INFO_SLUGS.includes(slug);
  if (c === 'kota-kinabalu') return KOTA_KINABALU_INFO_SLUGS.includes(slug);
  if (c === 'colombo') return COLOMBO_INFO_SLUGS.includes(slug);
  if (c === 'kandy') return KANDY_INFO_SLUGS.includes(slug);
  if (c === 'sigiriya') return SIGIRIYA_INFO_SLUGS.includes(slug);
  if (c === 'mirissa') return MIRISSA_INFO_SLUGS.includes(slug);
  if (c === 'bentota') return BENTOTA_INFO_SLUGS.includes(slug);
  if (c === 'nuwara-eliya') return NUWARA_ELIYA_INFO_SLUGS.includes(slug);
  if (c === 'negombo') return NEGOMBO_INFO_SLUGS.includes(slug);
  if (c === 'galle') return GALLE_INFO_SLUGS.includes(slug);
  if (c === 'ella') return ELLA_INFO_SLUGS.includes(slug);
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
  const { country, city, slug, lang: langParam } = await params;
  const lang: Lang | null = langParam && isLang(langParam) ? langParam : null;
  const cityName = capitalize(city);

  if (isInfoSlug(city, slug)) {
    const infoContent = getCityInfoContent(slug);
    const fallbackTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const title = infoContent?.title || fallbackTitle;
    // Meta title is deliberately separate from the H1: it has ~60 chars before
    // Google truncates, and it needs to lead with the query, not the prose.
    const pt = pageT(lang, slug);
    const metaTitle = pt?.seoTitle || pt?.title || infoContent?.seoTitle || title;
    const description = pt?.description || infoContent?.description || `Essential guide: ${fallbackTitle}. Everything you need to know before visiting ${cityName}.`;
    const infoPath = `/${country.toLowerCase()}/${city.toLowerCase()}/${slug}`;
    return {
      title: `${metaTitle} | AsiaByLocals`,
      description,
      alternates: {
        canonical: canonicalFor(lang, infoPath),
        languages: alternatesFor(infoPath),
      },
      openGraph: {
        title: `${metaTitle} | AsiaByLocals`,
        description,
        url: `https://www.asiabylocals.com/${country.toLowerCase()}/${city.toLowerCase()}/${slug}`,
        siteName: 'AsiaByLocals',
        type: 'article',
        // Social cards never need the untouched 0.73 MB original, and Next
        // preloads this URL, so pointing it at the original downloaded the full
        // file on every visit and threw it away.
        ...(infoContent?.heroImage
          ? { images: [{ url: cloudinaryLoader({ src: infoContent.heroImage, width: 1200 }) }] }
          : {}),
      },
    };
  }

  // Tour detail page — fetch tour for metadata
  try {
    const res = await fetch(`${API_URL}/api/public/tours/by-slug/${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },  // Tour payload is ~9KB; ISR-cache it instead of forcing the route dynamic
    });
    if (res.ok) {
      const data = await res.json();
      const tour = (data.success && data.tour) ? data.tour : (data.title ? data : null);
      if (tour) {
        // Always use CTR-optimized description with trust signals
        const tt = tourT(lang, slug);
        const description = tt?.metaDescription || SEO_DESCRIPTION_OVERRIDES[slug] || buildMetaDescription(tour, cityName);
        // Use SEO override title if available, otherwise shorten the database title
        const seoTitle = tt?.metaTitle || (lang ? tt?.title : undefined) || SEO_TITLE_OVERRIDES[slug];
        // A tag Google cuts off loses the tail visually but still counts it for
        // relevance. Shortening the title instead throws those words away for
        // good, which is worse: budgeting purely on length turned "Private Taxi
        // transfer from Ho Chi Minh" into "...from Ho". So when the tag is too
        // long, drop the " in <City>" suffix before touching the title. The
        // suffix is the cheapest part — on these tours it names a second city
        // the title has already placed.
        const MAX_TAG = 60;
        const withCity = (t: string) =>
          t.toLowerCase().includes(cityName.toLowerCase())
            ? `${t} | AsiaByLocals`
            : `${t} in ${cityName} | AsiaByLocals`;
        let titleTag: string;
        if (seoTitle) {
          titleTag = `${seoTitle} | AsiaByLocals`;
        } else {
          const shortTitle = shortenTitleForMeta(tour.title);
          titleTag = withCity(shortTitle);
          if (titleTag.length > MAX_TAG) {
            // 1. same title, no city suffix
            const noCity = `${shortTitle} | AsiaByLocals`;
            if (noCity.length <= MAX_TAG) {
              titleTag = noCity;
            } else {
              // 2. only now trim the title, and keep it readable
              titleTag = `${shortenTitleForMeta(tour.title, MAX_TAG - ' | AsiaByLocals'.length)} | AsiaByLocals`;
            }
          }
        }
        // Canonicalise to the tour's real country, not whatever country segment
        // the request used — otherwise a wrong-country URL declares itself canonical.
        const canonicalCountry = tour.country
          ? String(tour.country).toLowerCase().replace(/\s+/g, '-')
          : country.toLowerCase();
        // Duplicate-intent pages canonicalise to their champion slug (see map above)
        const canonicalSlug = DUPLICATE_CANONICAL_MAP[slug] || slug;
        const tourPath = `/${canonicalCountry}/${city.toLowerCase()}/${canonicalSlug}`;
        return {
          title: titleTag,
          description,
          alternates: {
            canonical: canonicalFor(lang, tourPath),
            languages: alternatesFor(tourPath),
          },
          openGraph: {
            title: titleTag,
            description,
            // Through the loader, like every other image on the page. Raw here,
            // the share preview was the one thing still fetched from Cloudinary
            // on tours whose photos have long since moved to R2, so every link
            // pasted into WhatsApp or Slack billed against the old host.
            images: tour.images?.[0]
              ? [{ url: cloudinaryLoader({ src: tour.images[0], width: 1200 }), width: 1200, height: 630, alt: tour.title }]
              : [],
          },
        };
      }
    }
  } catch (e) {}

  // Fallback (tour fetch failed or tour deleted): still honor the duplicate map —
  // without this, a deleted duplicate (same-day-agra-tour-from-delhi, found in the
  // 2026-08-26 canonical audit) self-canonicalised and kept competing.
  return {
    title: `${cityName} Tour | AsiaByLocals`,
    description: `Book tours in ${cityName} with licensed local guides.`,
    alternates: {
      canonical: `https://www.asiabylocals.com/${country.toLowerCase()}/${city.toLowerCase()}/${DUPLICATE_CANONICAL_MAP[slug] || slug}`,
    },
  };
}

export default async function SlugPage({ params }: Props) {
  const { country, city, slug, lang: langParam } = await params;
  const lang: Lang | null = langParam && isLang(langParam) ? langParam : null;
  const cityName = capitalize(city);
  const countryName = countryDisplayName(country);
  const countrySlug = country.toLowerCase();
  const citySlug = city.toLowerCase();

  // City info page
  if (isInfoSlug(city, slug)) {
    // Build server-side JSON-LD from static info content
    const infoBase = getCityInfoContent(slug);
    // Translated folder: overlay the translated title/description/sections/FAQ
    // where we have them; anything missing stays English.
    const pt = pageT(lang, slug);
    const infoContent = infoBase && pt ? { ...infoBase, title: pt.title, seoTitle: pt.seoTitle || infoBase.seoTitle, description: pt.description,
      fastFacts: pt.fastFacts || infoBase.fastFacts,
      sections: pt.sections ? infoBase.sections.map((sec: any, i: number) => (pt.sections![i] ? { ...sec, title: pt.sections![i].title, content: pt.sections![i].content } : sec)) : infoBase.sections,
      faqs: pt.faqs || infoBase.faqs, jsonLd: undefined } : infoBase;
    // Pages that define their own jsonLd keep it; the rest (Bali, Japan round 2)
    // get an Article + FAQPage graph built from their faqs, so every guide
    // carries FAQ schema without hand-writing it per page.
    const infoJsonLd = infoContent?.jsonLd
      || (infoContent
        ? {
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                headline: infoContent.title,
                description: infoContent.description,
                image: infoContent.heroImage,
                author: { '@type': 'Organization', name: 'AsiaByLocals' },
                publisher: { '@type': 'Organization', name: 'AsiaByLocals', url: 'https://www.asiabylocals.com' },
                mainEntityOfPage: `https://www.asiabylocals.com/${countrySlug}/${citySlug}/${slug}`,
              },
              ...(infoContent.faqs && infoContent.faqs.length > 0
                ? [{
                    '@type': 'FAQPage',
                    mainEntity: infoContent.faqs.slice(0, 8).map((f) => ({
                      '@type': 'Question',
                      name: f.q,
                      acceptedAnswer: { '@type': 'Answer', text: f.a },
                    })),
                  }]
                : []),
            ],
          }
        : null);

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
        <CityInfoClient country={countryName} city={cityName} slug={slug} data={infoContent} />
      </>
    );
  }

  // Tour detail page
  let tour = null;
  try {
    const res = await fetch(`${API_URL}/api/public/tours/by-slug/${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },  // Tour payload is ~9KB; ISR-cache it instead of forcing the route dynamic
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

  // The route accepts any country segment, so /india/pattaya/<slug> served the
  // same tour as /thailand/pattaya/<slug> — and self-canonicalised, giving Google
  // two "canonical" copies of every tour. Send the wrong-country variant to the
  // real one instead of serving a duplicate.
  // Same for the city: /japan/sapporo/<agra tour> used to bounce between
  // /india/sapporo/ (this redirect) and /japan/sapporo/ (middleware fixing the
  // country for a known city) — a loop GSC reported as "Redirect error".
  // Sending straight to the tour's own country AND city ends it.
  if (tour.country) {
    const realCountry = String(tour.country).toLowerCase().replace(/\s+/g, '-');
    const slugged = tour.city ? String(tour.city).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : '';
    // Only trust the slugified city when it is a URL we actually serve.
    const realCity = slugged && CITY_URL_MAP[slugged] ? slugged : citySlug;
    if ((realCountry && realCountry !== countrySlug) || realCity !== citySlug) {
      // 308, not 307 — Google must retire the wrong URL, not keep it indexed.
      permanentRedirect(`${lang ? `/${lang}` : ''}/${realCountry || countrySlug}/${realCity || citySlug}/${slug}`);
    }
  }

  // Translated folder: overlay the translated copy on the tour object so the
  // detail client, the JSON-LD and the FAQ block all render it. Reviews are
  // never translated (they stay in the language the guest wrote them).
  const tt = tourT(lang, slug);
  if (tt) {
    tour = { ...tour, title: tt.title,
      shortDescription: tt.shortDescription || tour.shortDescription,
      fullDescription: tt.fullDescription || tour.fullDescription,
      highlights: tt.highlights ? JSON.stringify(tt.highlights) : tour.highlights,
      included: tt.included ? JSON.stringify(tt.included) : tour.included,
      notIncluded: tt.notIncluded ? JSON.stringify(tt.notIncluded) : tour.notIncluded };
  }

  // Option titles are translated here rather than in TourDetailClient. Calling
  // optionT from a client component pulled the whole translation table into the
  // browser bundle: one 3.6 MB chunk of French, German and Spanish tour copy
  // downloaded by every visitor, growing with each batch we translate.
  if (lang && Array.isArray(tour?.options)) {
    tour = { ...tour, options: tour.options.map((o: any) => {
      const t = optionT(lang, slug, o?.optionTitle, o?.optionDescription);
      return { ...o, optionTitle: t.title || o?.optionTitle, optionDescription: t.description || o?.optionDescription };
    }) };
  }

  // ---------- SERVER-SIDE JSON-LD for Tour Detail (guaranteed in raw HTML) ----------
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
  const tourFaqs = (tt?.faqs && tt.faqs.length) ? tt.faqs : getTourSpecificFAQs(tour?.title || '', slug);
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
          '@type': 'AggregateOffer',
          lowPrice: offerRange(tour?.options, tour?.pricePerPerson)?.low ?? 0,
          highPrice: offerRange(tour?.options, tour?.pricePerPerson)?.high ?? 0,
          offerCount: Array.isArray(tour?.options) && tour.options.length > 0 ? tour.options.length : 1,
          priceCurrency: tour?.currency || 'USD',
          availability: 'https://schema.org/InStock',
          url: tourUrl,
          priceValidUntil: '2026-12-31',
          seller: { '@type': 'TravelAgency', name: 'AsiaByLocals', url: 'https://www.asiabylocals.com' },
        },
        // Only when real reviews exist. This used to fall back to a rating
        // computed from the tour id (4.0-5.0, 20-120 reviews), which put an
        // invented star score in front of someone about to pay.
        ...(tourReviewData && tourReviewData.totalReviews > 0
          ? {
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: tourReviewData.averageRating.toFixed(1),
                reviewCount: tourReviewData.totalReviews,
                bestRating: '5',
              },
            }
          : {}),
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
          price: offerRange(tour?.options, tour?.pricePerPerson)?.low ?? 0,
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
      // Organization with ContactPoint — trust signals competitors carry (X-Ray 2026-08)
      {
        '@type': 'Organization',
        '@id': 'https://www.asiabylocals.com/#organization',
        name: 'AsiaByLocals',
        url: 'https://www.asiabylocals.com',
        logo: 'https://www.asiabylocals.com/logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'support@asiabylocals.com',
          availableLanguage: ['English'],
        },
      },
      // TouristAttraction — the destination itself, tied to the trip
      {
        '@type': 'TouristAttraction',
        name: `${cityName} — ${tour?.title || 'Tour'}`,
        touristType: tour?.category || 'Cultural Tourism',
        address: {
          '@type': 'PostalAddress',
          addressLocality: cityName,
          addressCountry: countryName,
        },
      },
      // ImageObject for the cover image
      ...(tour?.images?.[0]
        ? [{
            '@type': 'ImageObject',
            contentUrl: tour.images[0],
            url: tour.images[0],
            name: tour?.title || 'Tour',
            creditText: 'AsiaByLocals',
          }]
        : []),
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
    krabi: [
      { slug: 'chicken-island-boat-tour', title: '4-Island Longtail Boat Trip with Thai Lunch' },
      { slug: 'maya-bay-adventure-boat-tour', title: 'Early Bird Phi Phi & 4 Islands Speedboat' },
      { slug: 'tiger-cave-temple-spiritual-tour', title: 'Emerald Pool, Hot Springs & Tiger Cave Temple' },
      { slug: 'hong-island-boat-tour', title: 'Hong Islands Speedboat with Snorkelling' },
      { slug: 'ao-thalane-bay-half-day-tour', title: 'Ao Thalane Mangrove Kayaking' },
      { slug: 'ao-nang-elephant-sanctuary-guided-tour', title: 'Ao Nang Ethical Elephant Sanctuary' },
      { slug: 'krabi-elephant-shelter-entry-ticket', title: 'Elephant Bathing at Krabi Elephant Shelter' },
      { slug: 'ao-nang-cooking-food-tour', title: 'Hands-On Thai Cooking Class in Ao Nang' },
      { slug: 'crystal-lake-mini-tour', title: 'Klong Root Crystal Lagoon Kayaking' },
      { slug: 'james-bond-island-guided-tour', title: 'James Bond Island & Phang Nga Bay' },
      { slug: 'ao-nang-sunset-tour', title: 'Sunset Cruise with Dinner & Plankton Swim' },
      { slug: 'chicken-island-sunset-tour', title: '7 Islands Sunset Cruise with BBQ' },
      { slug: 'hot-spring-waterfall-guided-tour', title: 'Emerald Pool, Hot Springs & Jungle ATV' },
      { slug: 'poda-island-sunrise-tour', title: 'Sunrise Phi Phi Speedboat with Poda Breakfast' },
      { slug: 'ao-nang-backcountry-guided-tour', title: 'Krabi Backcountry ATV Ride' },
    ],
    pattaya: [
      { slug: 'koh-larn-coral-island-full-day-tour', title: 'Coral Island Day Trip by Speedboat' },
      { slug: 'sanctuary-of-truth-naklua-pattaya-spiritual-tour', title: 'Sanctuary of Truth Entrance Ticket' },
      { slug: 'nong-nooch-tropical-garden-pattaya-cultural-tour', title: 'Nong Nooch Garden Entry & Cultural Show' },
      { slug: 'living-green-elephant-sanctuary-chonburi-full-day-tour', title: 'Ethical Elephant Sanctuary Day Trip' },
      { slug: 'elephant-jungle-sanctuary-pattaya-countryside-half-day-tour', title: 'Elephant Jungle Sanctuary Half-Day Visit' },
      { slug: 'alcazar-theatre-pattaya-second-road-evening-tour', title: 'Alcazar Cabaret Evening Show' },
      { slug: 'tiffanys-show-theatre-north-pattaya-entry-ticket', title: "Tiffany's Show with Dinner & VIP Seating" },
      { slug: 'monkey-island-chonburi-boat-tour', title: '3-Island Catamaran Cruise with Buffet Lunch' },
      { slug: 'pattaya-marina-night-market-sunset-tour', title: 'Big Buddha Hill & Marina Night Market' },
      { slug: 'lakeside-atv-trails-pattaya-countryside-mini-tour', title: 'Off-Road ATV Ride with Route Choices' },
      { slug: 'pattaya-dive-sites-full-day-tour', title: 'Boat Diving Day Trip to Samaesarn Reefs' },
      { slug: 'koh-larn-island-off-pattaya-mini-tour', title: 'Koh Larn Tandem Paragliding Flight' },
      { slug: 'jomtien-beach-premium-tour', title: 'Five-Island Jet Ski Safari' },
      { slug: 'pattaya-city-private-tour', title: 'Private Pattaya Sightseeing Tour' },
      { slug: 'dam-restaurant-pattaya-beachfront-mini-tour', title: 'Beachfront Fire Show with Dinner' },
    ],
    'chiang-mai': [
      { slug: 'pon-elephant-sanctuary-half-day-tour', title: 'Ethical Elephant Sanctuary Half-Day Tour' },
      { slug: 'wat-chedi-luang-walking-tour', title: 'Old City & Temples Walking Tour' },
      { slug: 'doi-inthanon-national-park-guided-tour', title: 'Doi Inthanon National Park Guided Tour' },
      { slug: 'wat-rong-khun-white-temple-spiritual-tour', title: 'Chiang Rai White, Blue & Red Temple Tour' },
      { slug: 'local-market-chiang-mai-food-tour', title: 'Cooking Class, Market & Thai Herbs Garden Tour' },
      { slug: 'mae-kampong-village-group-tour', title: 'Gibbon Trek & Mae Kampong Village Tour' },
      { slug: 'night-bazaar-area-chiang-mai-mini-tour', title: 'Cave-Style Lanna Massage & Spa' },
      { slug: 'jungle-flight-canopy-course-chiang-mai-adventure-tour', title: 'Jungle Flight Zipline Roller Coaster' },
      { slug: 'mae-taeng-district-chiang-mai-countryside-adventure-tour', title: '3-Hour ATV Jungle Adventure' },
      { slug: 'bua-tong-sticky-waterfall-adventure-tour', title: 'Sticky Waterfall & Dantewada Small-Group Tour' },
      { slug: 'floracreek-gardens-hang-dong-chiang-mai-mini-tour', title: 'Creekside Garden Lunch Experience' },
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
      <TourDetailClient tour={tour} city={cityName} country={countryName} specificFaqs={tourFaqs || []} hardcodedReviews={tourReviewData} lang={lang || undefined} />

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
