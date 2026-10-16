import { CITY_URL_MAP } from '@/lib/cityCountryMap';
import { countryDisplayName } from '@/lib/countryName';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';

export interface CruiseTour {
  id: number;
  title: string;
  slug: string;
  city: string;
  citySlug: string;
  country: string;
  countrySlug: string;
  duration: string;
  pricePerPerson: number;
  currency: string;
  image: string | null;
}

export interface CruiseCountry {
  slug: string;
  name: string;
  count: number;
  tours: CruiseTour[];
}

export interface CruiseCollection {
  total: number;
  countries: CruiseCountry[];
}

// Terms that make a tour a cruise or yacht product on their own.
const STRONG = /\b(yachts?|cruises?|cruising|dhow|catamaran|sail(?:ing|boat)?|gulet|junk boat|houseboat|shikara|glass[- ]bottom)\b/i;
// Boat terms that count unless the product is really a transfer or a ticket.
const BOAT = /\b(boat|speedboat|longtail|long-tail|island hopping|pontoon)\b/i;
const TRANSFER = /\b(transfer|shuttle|ferry ticket|one[- ]way)\b/i;

export function isCruiseTour(title: string): boolean {
  if (STRONG.test(title)) return true;
  return BOAT.test(title) && !TRANSFER.test(title);
}

const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

// country|normalizedCityName -> url slug. Canonical entries (slug === city) win;
// others fill gaps, so 'hongkong' (city 'hong-kong') resolves but the 'bali'
// alias never shadows 'ubud'.
const CITY_SLUG_INDEX: Record<string, string> = {};
for (const pass of [true, false]) {
  for (const [slug, { country, city }] of Object.entries(CITY_URL_MAP)) {
    if ((slug === city) !== pass) continue;
    const key = `${country}|${normalize(city)}`;
    if (!(key in CITY_SLUG_INDEX)) CITY_SLUG_INDEX[key] = slug;
  }
}

export const CRUISE_COUNTRY_SLUGS: string[] = Array.from(
  new Set(Object.values(CITY_URL_MAP).map(m => m.country))
);

function cityToSlug(countrySlug: string, cityName: string): string | null {
  return CITY_SLUG_INDEX[`${countrySlug}|${normalize(cityName)}`] ?? null;
}

// Measured: a cached country response can take 7s+ (Indonesia 1.8MB), so the
// old 8s limit silently dropped whole countries. Country fetches also run in
// batches so a revalidation does not hit the backend with 37 requests at once.
const FETCH_TIMEOUT_MS = 20000;
const FETCH_BATCH = 8;

async function fetchCountryTours(countrySlug: string): Promise<any[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(
      `${API_URL}/api/public/tours?country=${encodeURIComponent(countryDisplayName(countrySlug))}&status=approved`,
      { next: { revalidate: 3600 }, signal: controller.signal }
    );
    if (!res.ok) return [];
    const data = await res.json();
    if (!data?.success) return [];
    return Array.isArray(data.tours) ? data.tours : (data.tours?.tours || []);
  } catch {
    return [];
  } finally {
    clearTimeout(timeout);
  }
}

export async function fetchCruiseTours(): Promise<CruiseCollection> {
  const results: any[][] = [];
  for (let i = 0; i < CRUISE_COUNTRY_SLUGS.length; i += FETCH_BATCH) {
    const batch = CRUISE_COUNTRY_SLUGS.slice(i, i + FETCH_BATCH);
    results.push(...await Promise.all(batch.map(fetchCountryTours)));
  }

  const countries: CruiseCountry[] = [];
  CRUISE_COUNTRY_SLUGS.forEach((countrySlug, i) => {
    const tours: CruiseTour[] = [];
    for (const tour of results[i]) {
      if (!tour?.slug || !tour?.title || !isCruiseTour(tour.title)) continue;
      const citySlug = cityToSlug(countrySlug, tour.city || '');
      if (!citySlug) continue;
      const image = Array.isArray(tour.images)
        ? tour.images.find((img: any) => typeof img === 'string' && !img.startsWith('data:')) ?? null
        : null;
      tours.push({
        id: tour.id,
        title: tour.title,
        slug: tour.slug,
        city: tour.city,
        citySlug,
        country: tour.country,
        countrySlug,
        duration: tour.duration || '',
        pricePerPerson: Number(tour.pricePerPerson) || 0,
        currency: tour.currency || 'USD',
        image,
      });
    }
    if (tours.length > 0) {
      countries.push({ slug: countrySlug, name: countryDisplayName(countrySlug), count: tours.length, tours });
    }
  });

  countries.sort((a, b) => b.count - a.count);
  return { total: countries.reduce((n, c) => n + c.count, 0), countries };
}
