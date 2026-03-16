import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CountryPageClient from '@/components/CountryPageClient';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';

export const revalidate = 60;

interface Props {
  params: Promise<{ country: string }>;
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const COUNTRY_META: Record<string, {
  title: string;
  description: string;
  cities: { name: string; slug: string; image: string; tagline: string }[];
}> = {
  india: {
    title: 'India Tours & Experiences | Local Guides Across India | AsiaByLocals',
    description: 'Discover the best tours across India with licensed local guides. Explore the Golden Triangle — Delhi, Agra & Jaipur — plus Mumbai, Goa, Varanasi & more. Authentic cultural experiences, heritage walks, food tours & private day trips.',
    cities: [
      { name: 'Agra', slug: 'agra', image: '/agra-hero.webp', tagline: 'Home of the Taj Mahal' },
      { name: 'Delhi', slug: 'delhi', image: '/delhi-home.webp', tagline: 'India\'s Historic Capital' },
      { name: 'Jaipur', slug: 'jaipur', image: '/jaipur-hero.webp', tagline: 'The Pink City of Rajasthan' },
      { name: 'Mumbai', slug: 'mumbai', image: '/cities-images/mumbai.webp', tagline: 'City of Dreams' },
      { name: 'Goa', slug: 'goa', image: '/cities-images/goa.webp', tagline: 'Beaches & Portuguese Heritage' },
      { name: 'Varanasi', slug: 'varanasi', image: '/cities-images/varanasi.webp', tagline: 'The Spiritual Capital' },
      { name: 'Udaipur', slug: 'udaipur', image: '/cities-images/udaipur.webp', tagline: 'City of Lakes' },
      { name: 'Jodhpur', slug: 'jodhpur', image: '/cities-images/jodhpur.webp', tagline: 'The Blue City' },
      { name: 'Jaisalmer', slug: 'jaisalmer', image: '/cities-images/jaisalmer.webp', tagline: 'The Golden City' },
      { name: 'Rishikesh', slug: 'rishikesh', image: '/cities-images/rishikesh.webp', tagline: 'Yoga Capital of the World' },
    ],
  },
  thailand: {
    title: 'Thailand Tours & Experiences | Local Guides Across Thailand | AsiaByLocals',
    description: 'Discover the best tours across Thailand with licensed local guides. Explore Bangkok temples, Phuket beaches, Chiang Mai culture & more. Authentic experiences with expert locals.',
    cities: [
      { name: 'Bangkok', slug: 'bangkok', image: '/bangkok-hero.webp', tagline: 'City of Temples & Street Food' },
      { name: 'Phuket', slug: 'phuket', image: '/phuket-hero.webp', tagline: 'Thailand\'s Island Paradise' },
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const c = country.toLowerCase();
  const meta = COUNTRY_META[c];

  if (!meta) {
    return {
      title: `Tours in ${capitalize(country)} | AsiaByLocals`,
      description: `Discover the best tours in ${capitalize(country)} with licensed local guides.`,
      robots: { index: false, follow: true },
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://www.asiabylocals.com/${c}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.asiabylocals.com/${c}`,
      siteName: 'AsiaByLocals',
      type: 'website',
      images: [{ url: `https://www.asiabylocals.com/${meta.cities[0]?.image || '/og-default.webp'}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`https://www.asiabylocals.com/${meta.cities[0]?.image || '/og-default.webp'}`],
    },
  };
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;
  const c = country.toLowerCase();
  const meta = COUNTRY_META[c];

  if (!meta) {
    notFound();
  }

  // Only fetch tours for featured cities (first 3) to keep SSR fast
  const featuredCities = meta.cities.slice(0, 3);
  const cityTours: Record<string, any[]> = {};
  const cityTourCounts: Record<string, number> = {};
  try {
    const results = await Promise.all(
      featuredCities.map(city => {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        return fetch(
          `${API_URL}/api/public/tours?country=${encodeURIComponent(capitalize(c))}&city=${encodeURIComponent(city.name)}&status=approved`,
          { cache: 'no-store', signal: controller.signal }
        )
          .then(r => { clearTimeout(timeout); return r.ok ? r.json() : { success: false }; })
          .catch(() => { clearTimeout(timeout); return { success: false }; });
      })
    );

    featuredCities.forEach((city, i) => {
      const data = results[i];
      if (data?.success) {
        const toursArray = Array.isArray(data.tours) ? data.tours : (data.tours?.tours || []);
        cityTourCounts[city.slug] = toursArray.length;
        cityTours[city.slug] = toursArray
          .filter((tour: any) => tour.slug)
          .map((tour: any) => ({
            id: tour.id,
            title: tour.title,
            slug: tour.slug,
            city: tour.city,
            country: tour.country,
            duration: tour.duration,
            pricePerPerson: tour.pricePerPerson,
            currency: tour.currency,
            images: Array.isArray(tour.images)
              ? tour.images.filter((img: any) => typeof img === 'string' && !img.startsWith('data:')).slice(0, 1)
              : [],
          }));
      } else {
        cityTours[city.slug] = [];
        cityTourCounts[city.slug] = 0;
      }
    });
  } catch (e) {
    console.error('Failed to fetch country tours:', e);
  }

  // ---------- SERVER-SIDE JSON-LD (guaranteed in raw HTML for SEO/AEO/GEO) ----------
  const countryName = capitalize(c);

  const INDIA_FAQS = [
    { question: 'What is the Golden Triangle tour in India?', answer: 'The Golden Triangle is India\'s most iconic travel circuit connecting Delhi, Agra, and Jaipur. It covers India\'s 1,000-year imperial history in Delhi, the Taj Mahal and Mughal masterpieces in Agra, and the stunning Rajput palaces and forts of Jaipur. Most travelers complete it in 3-5 days with licensed local guides.' },
    { question: 'What is the best time to visit India?', answer: 'The best time to visit most of India is October to March, when temperatures are pleasant (15-25°C) and rainfall is minimal. This is peak season for the Golden Triangle cities (Delhi, Agra, Jaipur). Avoid May-June when temperatures exceed 45°C. The monsoon season (July-September) brings heavy rains but lush green landscapes.' },
    { question: 'Do I need a visa to visit India?', answer: 'Most international visitors need an e-Visa, which can be applied for online at the official Indian government portal. The e-Tourist Visa is valid for 30 days, 1 year, or 5 years depending on the type. Processing typically takes 3-5 business days. Citizens of Nepal and Bhutan do not need a visa.' },
    { question: 'Is India safe for solo travelers?', answer: 'India is generally safe for travelers, including solo and female travelers, especially in major tourist cities like Delhi, Agra, and Jaipur. Standard travel precautions apply: use verified guides, book through reputable platforms like AsiaByLocals, avoid isolated areas at night, and use app-based transport (Uber/Ola).' },
    { question: 'How many days do I need for India?', answer: 'For the Golden Triangle (Delhi, Agra, Jaipur), plan 5-7 days. Add Varanasi for a spiritual dimension (2-3 days), Rajasthan\'s desert cities like Jodhpur and Jaisalmer (3-4 days), or Goa for beaches (3-4 days). A comprehensive first trip to India typically takes 10-14 days.' },
    { question: 'What currency is used in India?', answer: 'India uses the Indian Rupee (INR/₹). As of 2026, 1 USD ≈ 85 INR. Credit cards are widely accepted in hotels, restaurants, and shops in major cities. ATMs are plentiful. For street markets and smaller vendors, carry cash. UPI digital payments (Google Pay, PhonePe) are ubiquitous across India.' },
  ];
  const THAILAND_FAQS = [
    { question: 'What is the best time to visit Thailand?', answer: 'The best time to visit Thailand is November to February (cool and dry season). Bangkok and Phuket are pleasant year-round, but the monsoon season (June-October) brings heavy rains to the Andaman coast (Phuket). The hot season (March-May) sees temperatures above 35°C.' },
    { question: 'Do I need a visa for Thailand?', answer: 'Citizens of most Western countries get visa-free entry for 30-60 days. Check the Thai Immigration website for your specific nationality. Passport must be valid for at least 6 months.' },
  ];
  const faqs = c === 'india' ? INDIA_FAQS : c === 'thailand' ? THAILAND_FAQS : [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: `Tours in ${countryName}`,
        description: `Discover the best tours across ${countryName} with licensed local guides.`,
        url: `https://www.asiabylocals.com/${c}`,
        isPartOf: { '@type': 'WebSite', name: 'AsiaByLocals', url: 'https://www.asiabylocals.com' },
      },
      {
        '@type': 'TravelAgency',
        name: 'AsiaByLocals',
        description: `Book verified local guides and private tours across ${countryName}. Authentic cultural experiences, heritage walks, food tours & day trips.`,
        url: 'https://www.asiabylocals.com',
        areaServed: { '@type': 'Country', name: countryName },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127', bestRating: '5', worstRating: '1' },
        ...(c === 'india' ? {
          review: [
            { '@type': 'Review', author: { '@type': 'Person', name: 'Sarah M.' }, datePublished: '2026-02-15', reviewBody: 'Our guide Rajesh made the Taj Mahal sunrise absolutely magical. He knew exactly where to stand for the best photos and shared stories about Shah Jahan that you won\'t find in any guidebook.', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' } },
            { '@type': 'Review', author: { '@type': 'Person', name: 'Michael T.' }, datePublished: '2026-01-20', reviewBody: 'Our guide Priya navigated the chaotic streets of Jaipur like a pro, got us into Amber Fort before the crowds, and took us to a family-run restaurant no tourist would ever find.', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' } },
            { '@type': 'Review', author: { '@type': 'Person', name: 'David K.' }, datePublished: '2025-12-10', reviewBody: 'Booking through AsiaByLocals was the best decision we made for our India trip. Our guide was incredibly knowledgeable — he had a PhD in Mughal history!', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' } },
          ],
        } : {}),
      },
      ...(faqs.length > 0 ? [{
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
      }] : []),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.asiabylocals.com' },
          { '@type': 'ListItem', position: 2, name: countryName, item: `https://www.asiabylocals.com/${c}` },
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
      <CountryPageClient
        country={countryName}
        countrySlug={c}
        cities={meta.cities}
        cityTours={cityTours}
        cityTourCounts={cityTourCounts}
      />
    </>
  );
}
