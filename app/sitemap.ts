import { MetadataRoute } from 'next';
import { CITY_URL_MAP } from '@/lib/constants';

const BASE_URL = 'https://www.asiabylocals.com';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages = [
    '', '/about-us', '/privacy-policy', '/terms-and-conditions',
    '/safety-guidelines', '/support', '/supplier',
    '/india/agra', '/india/delhi', '/india/jaipur', '/thailand/phuket',
  ].map(path => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1.0 : 0.8,
  }));

  // Agra info pages (including taj-mahal, agra-fort, fatehpur-sikri)
  const agraInfoPages = [
    'things-to-do-in-agra', 'places-to-visit-in-agra', '1-day-agra-itinerary',
    'taj-mahal-ticket-price-2026', 'taj-mahal-opening-time', 'is-taj-mahal-closed-on-friday',
    'agra-travel-guide-2026', 'taj-mahal', 'agra-fort', 'fatehpur-sikri',
  ].map(slug => ({
    url: `${BASE_URL}/india/agra/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Delhi info pages
  const delhiInfoPages = [
    'delhi-travel-guide-2026', 'red-fort', 'qutub-minar', 'humayuns-tomb',
    'india-gate', 'things-to-do-in-delhi', 'delhi-1-day-itinerary',
  ].map(slug => ({
    url: `${BASE_URL}/india/delhi/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Phuket info pages
  const phuketInfoPages = [
    'things-to-do-in-phuket', 'phuket-travel-guide-2026',
    'big-buddha-phuket', 'wat-chalong', 'phuket-old-town',
    'phuket-1-day-itinerary', 'phi-phi-islands', 'phang-nga-bay',
    'james-bond-island-phuket', 'phuket-island-hopping',
  ].map(slug => ({
    url: `${BASE_URL}/thailand/phuket/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic tour pages from API — fetch per city to avoid 50-item limit
  let tourPages: MetadataRoute.Sitemap = [];
  const cities = ['agra', 'delhi', 'jaipur', 'phuket', 'udaipur', 'jodhpur', 'mumbai', 'bikaner', 'jaisalmer', 'khajuraho', 'varanasi'];
  try {
    const results = await Promise.all(
      cities.map(city =>
        fetch(`${API_URL}/api/public/tours?city=${city}`, { next: { revalidate: 3600 } })
          .then(r => r.ok ? r.json() : { tours: [] })
          .catch(() => ({ tours: [] }))
      )
    );
    const allTours = results.flatMap((data: any) => data.tours || data || []);
    tourPages = allTours
      .filter((t: any) => t.slug && t.city)
      .map((t: any) => {
        const cityKey = t.city.toLowerCase().replace(/\s+/g, '-');
        const mapping = CITY_URL_MAP[cityKey];
        const country = mapping ? mapping.country : 'india';
        const city = mapping ? mapping.city : cityKey;
        return {
          url: `${BASE_URL}/${country}/${city}/${t.slug}`,
          lastModified: new Date(t.updatedAt || t.createdAt || Date.now()),
          changeFrequency: 'weekly' as const,
          priority: 0.6,
        };
      });
  } catch (e) {
    console.error('Sitemap: failed to fetch tours', e);
  }

  return [...staticPages, ...agraInfoPages, ...delhiInfoPages, ...phuketInfoPages, ...tourPages];
}
