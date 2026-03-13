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
        cityTours[city.slug] = toursArray.map((tour: any) => ({
          id: tour.id,
          title: tour.title,
          slug: tour.slug || `tour-${tour.id}`,
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

  return (
    <CountryPageClient
      country={capitalize(c)}
      countrySlug={c}
      cities={meta.cities}
      cityTours={cityTours}
      cityTourCounts={cityTourCounts}
    />
  );
}
