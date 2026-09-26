import { translatedLangs } from '@/lib/translations';
import { MetadataRoute } from 'next';
import { ITINERARY_COUNTRIES, getItinerarySlugs } from '@/lib/japanItineraries';
import { CITY_URL_MAP } from '@/lib/constants';
import { REDIRECTED_SLUGS } from '@/lib/redirectedSlugs';

const BASE_URL = 'https://www.asiabylocals.com';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages = [
    '', '/explore', '/about-us', '/privacy-policy', '/terms-and-conditions',
    '/safety-guidelines', '/support', '/supplier',
    '/getyourguide-viator-alternative',
    '/india', '/india/agra', '/india/delhi', '/india/jaipur',
    '/india/mumbai', '/india/udaipur', '/india/jodhpur', '/india/jaisalmer',
    '/india/bengaluru', '/india/varanasi', '/india/amritsar', '/india/goa',
    '/india/aurangabad', '/india/mathura', '/india/khajuraho', '/india/kolkata',
    '/india/rishikesh', '/india/lucknow', '/india/gwalior', '/india/bikaner',
    '/japan', '/japan/tokyo', '/japan/kyoto', '/japan/osaka', '/japan/hiroshima', '/japan/sapporo', '/japan/nara', '/japan/nagoya', '/japan/hakone', '/japan/mount-fuji',
    '/thailand', '/thailand/phuket', '/thailand/bangkok', '/thailand/chiang-mai', '/thailand/pattaya', '/thailand/krabi',
    '/cambodia', '/cambodia/siem-reap', '/cambodia/phnom-penh',
    '/sri-lanka', '/sri-lanka/colombo', '/sri-lanka/kandy', '/sri-lanka/galle',
    '/sri-lanka/sigiriya', '/sri-lanka/ella', '/sri-lanka/nuwara-eliya',
    '/sri-lanka/negombo', '/sri-lanka/bentota', '/sri-lanka/mirissa',
    '/uae', '/uae/dubai', '/uae/abu-dhabi',
    '/nepal', '/nepal/kathmandu', '/nepal/pokhara', '/nepal/bhaktapur',
    '/vietnam', '/vietnam/hanoi', '/vietnam/ho-chi-minh-city', '/vietnam/hoi-an',
    '/vietnam/da-nang', '/vietnam/ha-long', '/vietnam/sapa',
    '/indonesia', '/indonesia/ubud', '/indonesia/canggu', '/indonesia/uluwatu', '/indonesia/nusa-penida',
  ].map(path => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1.0 : path === '/getyourguide-viator-alternative' ? 0.9 : 0.8,
  }));

  // Agra info pages (including taj-mahal, agra-fort, fatehpur-sikri)
  const agraInfoPages = [
    'things-to-do-in-agra', 'places-to-visit-in-agra', '1-day-agra-itinerary',
    'taj-mahal-ticket-price-2026', 'taj-mahal-opening-time', 'is-taj-mahal-closed-on-friday',
    'agra-travel-guide-2026', 'taj-mahal', 'agra-fort', 'fatehpur-sikri',
    'agra-gatimaan-entry-ticket', 'delhi-to-agra', 'same-day-agra-tour-from-delhi',
    'best-time-to-visit-agra',
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

  // Jaipur info pages
  const jaipurInfoPages = [
    'things-to-do-in-jaipur', 'jaipur-travel-guide-2026',
    '1-day-jaipur-itinerary', 'amber-fort', 'hawa-mahal',
    'city-palace-jaipur', 'nahargarh-fort', 'places-to-visit-in-jaipur',
    'jantar-mantar-jaipur', 'jal-mahal', 'jaipur-shopping-guide',
    'best-time-to-visit-jaipur', '2-day-jaipur-itinerary',
  ].map(slug => ({
    url: `${BASE_URL}/india/jaipur/${slug}`,
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
    'muay-thai-training-phuket',
    'best-time-to-visit-phuket', 'phuket-beaches-guide', 'phuket-3-day-itinerary',
    'maya-bay-phuket', 'phuket-elephant-sanctuary-guide', 'phuket-food-guide',
    'phuket-diving-snorkeling-guide',
  ].map(slug => ({
    url: `${BASE_URL}/thailand/phuket/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Bangkok info pages
  const bangkokInfoPages = [
    'things-to-do-in-bangkok', 'bangkok-travel-guide-2026',
    'grand-palace-bangkok', 'wat-pho', 'wat-arun',
    '1-day-bangkok-itinerary', 'floating-market-bangkok',
    'bangkok-canal-tour', 'chatuchak-weekend-market', 'places-to-visit-in-bangkok',
    'best-time-to-visit-bangkok', '3-day-bangkok-itinerary',
    'bangkok-ayutthaya-day-trip', 'chinatown-yaowarat-bangkok',
    'where-to-stay-in-bangkok', 'bangkok-street-food-guide',
    'khao-san-road-bangkok', 'bangkok-kanchanaburi-day-trip',
  ].map(slug => ({
    url: `${BASE_URL}/thailand/bangkok/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Chiang Mai info pages
  const chiangMaiInfoPages = [
    'chiang-mai-burning-season-guide', 'best-time-to-visit-chiang-mai',
    'chiang-mai-3-day-itinerary', 'yi-peng-lantern-festival-chiang-mai',
    'doi-suthep-chiang-mai', 'khao-soi-chiang-mai-food-guide',
    'chiang-mai-elephant-sanctuary-guide',
  ].map(slug => ({
    url: `${BASE_URL}/thailand/chiang-mai/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Pattaya info pages
  const pattayaInfoPages = [
    'is-pattaya-worth-visiting', 'sanctuary-of-truth-pattaya',
    'koh-larn-island-guide', 'where-to-stay-in-pattaya',
    'best-time-to-visit-pattaya', 'nong-nooch-tropical-garden-pattaya',
    'pattaya-2-day-itinerary', 'pattaya-cabaret-shows-guide',
  ].map(slug => ({
    url: `${BASE_URL}/thailand/pattaya/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Krabi info pages
  const phnomPenhInfoPages = [
    'tuol-sleng-and-choeung-ek-guide', 'royal-palace-phnom-penh', 'phnom-penh-2-day-itinerary', 'phnom-penh-food-and-markets', 'phnom-penh-to-siem-reap-transport', 'best-time-to-visit-phnom-penh',
  ].map(slug => ({
    url: `${BASE_URL}/cambodia/phnom-penh/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const siemReapInfoPages = [
    'angkor-wat-tickets-and-pass-guide', 'angkor-wat-sunrise-guide', 'angkor-temples-small-vs-grand-circuit', 'best-time-to-visit-siem-reap',
    'tonle-sap-floating-villages-guide', 'siem-reap-3-day-itinerary', 'siem-reap-airport-to-town', 'siem-reap-food-guide',
  ].map(slug => ({
    url: `${BASE_URL}/cambodia/siem-reap/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const krabiInfoPages = [
    'best-time-to-visit-krabi', 'railay-beach-krabi',
    'krabi-4-islands-tour-guide', 'tiger-cave-temple-krabi',
    'where-to-stay-in-krabi', 'krabi-3-day-itinerary',
    'krabi-vs-phuket-which-to-visit',
  ].map(slug => ({
    url: `${BASE_URL}/thailand/krabi/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));


  // Tokyo info pages
  // Tokyo info pages
  const tokyoInfoPages = [
    'best-time-to-visit-tokyo', 'tokyo-3-day-itinerary', 'getting-around-tokyo',
    'shibuya-crossing-guide', 'tokyo-go-kart-guide', 'mount-fuji-day-trip-from-tokyo',
    'tokyo-food-guide',
    'senso-ji-asakusa-guide', 'tsukiji-toyosu-market-guide', 'teamlab-tokyo-guide', 'shinjuku-nightlife-guide', 'tokyo-day-trips',
    'tokyo-sumo-guide',
    'akihabara-guide',
    'tokyo-with-kids',
    'where-to-stay-in-tokyo',
    'tokyo-onsen-and-sento-guide',
    'shibuya-sky-guide',
    'tokyo-samurai-and-ninja-experiences',
    'tokyo-photography-tours-guide',
    'tokyo-cycling-tours-guide',
    'tokyo-kimono-and-tea-ceremony-guide',
    'harajuku-guide',
    'kamakura-day-trip-from-tokyo',
    'nikko-day-trip-from-tokyo',
].map(slug => ({
    url: `${BASE_URL}/japan/tokyo/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Kyoto info pages
  const kyotoInfoPages = [
    'best-time-to-visit-kyoto', 'getting-around-kyoto', 'kyoto-3-day-itinerary',
    'fushimi-inari-guide', 'arashiyama-bamboo-forest-guide', 'gion-geisha-district-guide',
    'kyoto-food-guide',
    'kinkaku-ji-guide', 'kiyomizu-dera-guide', 'kyoto-autumn-foliage-guide', 'kyoto-cherry-blossom-guide', 'nishiki-market-guide',
    'uji-tea-guide',
    'kyoto-with-kids',
    'where-to-stay-in-kyoto',
    'kyoto-workshops-and-crafts',
    'kyoto-tea-ceremony-guide',
    'kyoto-geisha-maiko-experiences',
    'kyoto-kimono-rental-guide',
    'kyoto-cycling-guide',
    'kyoto-night-tours-guide',
    'kyoto-zen-meditation-guide',
    'nijo-castle-guide',
    'kyoto-sake-guide',
].map(slug => ({
    url: `${BASE_URL}/japan/kyoto/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Osaka info pages
  const osakaInfoPages = [
    'best-time-to-visit-osaka', 'osaka-3-day-itinerary', 'getting-around-osaka',
    'osaka-castle-guide', 'dotonbori-guide', 'osaka-food-guide',
    'osaka-to-nara-day-trip', 'osaka-to-kyoto-day-trip', 'shinsekai-guide',
    'osaka-nightlife-guide',
    'kuromon-market-guide',
    'osaka-with-kids',
    'where-to-stay-in-osaka',
    'osaka-day-trips',
    'osaka-cooking-classes-guide',
    'osaka-photography-tours-guide',
    'osaka-onsen-and-spa-guide',
    'kobe-day-trip-from-osaka',
    'osaka-kimono-rental-guide',
].map(slug => ({
    url: `${BASE_URL}/japan/osaka/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Hiroshima info pages
  const hiroshimaInfoPages = [
    'best-time-to-visit-hiroshima', 'hiroshima-2-day-itinerary', 'getting-around-hiroshima',
    'peace-memorial-park-guide', 'miyajima-island-guide', 'hiroshima-food-guide',
    'hiroshima-day-trips',
    'shimanami-kaido-cycling-guide', 'onomichi-guide', 'hiroshima-castle-guide', 'shukkeien-garden-guide', 'kure-yamato-museum-guide',
    'hiroshima-with-children',
    'where-to-stay-in-hiroshima'].map(slug => ({
    url: `${BASE_URL}/japan/hiroshima/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Sapporo info pages
  const sapporoInfoPages = [
    'best-time-to-visit-sapporo', 'sapporo-snow-festival-guide', 'getting-around-sapporo',
    'sapporo-food-guide', 'otaru-day-trip-from-sapporo', 'niseko-and-hokkaido-ski-guide',
    'sapporo-3-day-itinerary',
    'furano-biei-guide', 'noboribetsu-onsen-guide', 'asahiyama-zoo-guide', 'sapporo-beer-chocolate-factories', 'lake-toya-shikotsu-guide',
    'where-to-stay-in-sapporo',
    'sapporo-with-kids'].map(slug => ({
    url: `${BASE_URL}/japan/sapporo/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Nara info pages
  const naraInfoPages = [
    'best-time-to-visit-nara', 'nara-deer-park-guide', 'todai-ji-temple-guide',
    'nara-day-trip-from-kyoto-osaka', 'nara-half-day-itinerary',
    'kasuga-taisha-guide', 'naramachi-guide', 'nara-food-guide', 'getting-around-nara', 'mount-yoshino-cherry-blossom-guide',
    'nara-workshops-and-crafts',
    'should-you-stay-overnight-in-nara'].map(slug => ({
    url: `${BASE_URL}/japan/nara/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Nagoya info pages
  const nagoyaInfoPages = [
    'best-time-to-visit-nagoya', 'nagoya-castle-guide', 'getting-around-nagoya',
    'nagoya-food-guide', 'nagoya-day-trips', 'nagoya-2-day-itinerary',
    'ghibli-park-guide', 'nagoya-castle-keep-closure', 'atsuta-shrine-guide', 'toyota-museums-guide', 'nakasendo-magome-tsumago-guide',
    'is-nagoya-worth-visiting',
    'where-to-stay-in-nagoya',
    'takayama-shirakawago-day-trip-from-nagoya',
    'nagoya-samurai-experiences',
].map(slug => ({
    url: `${BASE_URL}/japan/nagoya/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Hakone & Mt. Fuji info pages
  const hakoneInfoPages = [
    'best-time-to-visit-hakone', 'getting-around-hakone',
    'hakone-onsen-guide', 'hakone-2-day-itinerary',
    'hakone-open-air-museum-guide', 'owakudani-black-eggs-guide', 'hakone-yosegi-marquetry-guide',
    'where-to-stay-in-hakone',
    'hakone-or-kawaguchiko-for-mount-fuji'].map(slug => ({
    url: `${BASE_URL}/japan/hakone/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const mountFujiInfoPages = [
    'climbing-mount-fuji-guide', 'mount-fuji-viewpoints',
    'chureito-pagoda-guide', 'kawaguchiko-guide',
    'best-time-to-visit-mount-fuji',
    'oshino-hakkai-guide',
    'fuji-five-lakes-guide',
    'mount-fuji-day-tour-routes',
].map(slug => ({
    url: `${BASE_URL}/japan/mount-fuji/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Colombo info pages
  const ellaInfoPages = [
    'nine-arch-bridge-guide',
    'little-adams-peak-and-ella-rock',
    'ella-city-guide',
    'getting-to-ella',
    'best-time-to-visit-ella',
    'ella-2-day-itinerary',
    'yala-vs-udawalawe-from-ella',
    'liptons-seat-and-ella-tea-country',
    'ella-waterfalls-and-day-tours',
    'leaving-ella-onward-transfers'].map(slug => ({
    url: `${BASE_URL}/sri-lanka/ella/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));


  const dubaiInfoPages = [
    'burj-khalifa-tickets-guide',
    'dubai-desert-safari-guide',
    'best-time-to-visit-dubai',
    'getting-around-dubai',
    'old-dubai-and-the-souks-guide',
    'dubai-2-day-itinerary',
    'dubai-with-kids-guide',
    'dubai-marina-and-the-palm-guide',
    'dubai-yacht-charter-guide',
    'dubai-helicopter-tours-guide',
    'day-trips-from-dubai',
    'dubai-water-sports-guide'].map(slug => ({
    url: `${BASE_URL}/uae/dubai/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const abuDhabiInfoPages = [
    'sheikh-zayed-grand-mosque-guide',
    'louvre-abu-dhabi-guide',
    'qasr-al-watan-guide',
    'yas-island-parks-guide',
    'abu-dhabi-day-trip-from-dubai',
    'best-time-to-visit-abu-dhabi',
    'abu-dhabi-desert-safari-guide',
    'abu-dhabi-city-guide',
    'saadiyat-island-museums-guide',
    'abu-dhabi-with-kids-guide',
    'getting-around-abu-dhabi',
    'abu-dhabi-2-day-itinerary'].map(slug => ({
    url: `${BASE_URL}/uae/abu-dhabi/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const galleInfoPages = [
    'galle-fort-guide', 'mirissa-whale-watching-guide', 'south-coast-beaches-guide', 'galle-2-day-itinerary'
  ].map(slug => ({
    url: `${BASE_URL}/sri-lanka/galle/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const negomboInfoPages = [
    'negombo-airport-guide', 'negombo-lagoon-guide'
  ].map(slug => ({
    url: `${BASE_URL}/sri-lanka/negombo/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const nuwaraEliyaInfoPages = [
    'nuwara-eliya-tea-guide', 'horton-plains-guide'
  ].map(slug => ({
    url: `${BASE_URL}/sri-lanka/nuwara-eliya/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const bentotaInfoPages = [
    'madu-river-safari-guide', 'bentota-guide'
  ].map(slug => ({
    url: `${BASE_URL}/sri-lanka/bentota/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const mirissaInfoPages = [
    'mirissa-guide'
  ].map(slug => ({
    url: `${BASE_URL}/sri-lanka/mirissa/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const sigiriyaInfoPages = [
    'sigiriya-rock-guide', 'dambulla-cave-temple-guide', 'minneriya-elephant-gathering-guide', 'sigiriya-2-day-itinerary', 'best-time-to-visit-sigiriya', 'getting-around-sigiriya', 'polonnaruwa-guide', 'anuradhapura-guide'
  ].map(slug => ({
    url: `${BASE_URL}/sri-lanka/sigiriya/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const kandyInfoPages = [
    'temple-of-the-tooth-guide',
    'kandy-to-ella-train-guide',
    'kandy-esala-perahera-guide',
    'best-time-to-visit-kandy',
    'kandy-city-guide',
    'getting-around-kandy',
    'day-trips-from-kandy',
    'kandy-2-day-itinerary',
    'leaving-kandy-onward-transfers'].map(slug => ({
    url: `${BASE_URL}/sri-lanka/kandy/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const colomboInfoPages = [
    'best-time-to-visit-colombo', 'colombo-city-guide', 'getting-around-colombo',
    'colombo-food-guide', 'day-trips-from-colombo', 'colombo-2-day-itinerary',
    'pettah-market-guide', 'galle-face-green-guide',
  ].map(slug => ({
    url: `${BASE_URL}/sri-lanka/colombo/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Country-level multi-day itineraries — the pages targeting "7 day Japan
  // itinerary" and similar, which pull far more search than any one tour page.
  // Derived, not listed: a hardcoded country list is how Nagoya's authority
  // pages ended up live but absent from the sitemap.
  const itineraryPages = ITINERARY_COUNTRIES.flatMap(country => {
    const lengths = getItinerarySlugs(country);
    return [
      {
        url: `${BASE_URL}/${country}/itineraries`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      ...lengths.map(slug => ({
        url: `${BASE_URL}/${country}/itineraries/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        // 7 and 10 days are the terms people actually search.
        priority: slug === '7-days' || slug === '10-days' ? 0.9 : 0.8,
      })),
    ];
  });

  // Dynamic tour pages from API — fetch per city
  let tourPages: MetadataRoute.Sitemap = [];
  // Derived from CITY_URL_MAP, never hardcoded. A hardcoded list is exactly how
  // all 101 UAE tour pages shipped live and stayed out of the sitemap entirely:
  // 'dubai' and 'abu-dhabi' were simply never added here, so they were never
  // fetched, so Google was never told they existed. Same failure the comment on
  // itineraryPages below warns about. Any city in the map is now covered the day
  // it is added; cities with no tours cost one empty fetch and add nothing.
  const cities = Object.keys(CITY_URL_MAP);
  try {
    const results = await Promise.all(
      cities.map(city => {
        const cityQuery = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        return fetch(`${API_URL}/api/public/tours?city=${encodeURIComponent(cityQuery)}`, { next: { revalidate: 3600 } })
          .then(r => r.ok ? r.json() : { tours: [] })
          .catch(() => ({ tours: [] }));
      })
    );
    const allTours = results.flatMap((data: any) => data.tours || data || []);
    tourPages = allTours
      .filter((t: any) => t.slug && t.city)
      .map((t: any) => {
        const cityKey = t.city.toLowerCase().replace(/\s+/g, '-');
        const mapping = CITY_URL_MAP[cityKey];
        // Fall back to the tour's own country, not a hardcoded 'india' — an
        // unmapped city used to emit /india/<city>/<slug>, which resolves 200
        // (the route accepts any country segment) and so quietly submitted a
        // duplicate of every tour under the wrong country. Pattaya shipped that
        // way: all 16 of its tours were indexed as /india/pattaya/.
        const country = mapping
          ? mapping.country
          : (t.country ? String(t.country).toLowerCase().replace(/\s+/g, '-') : 'india');
        const city = mapping ? mapping.city : cityKey;
        return {
          url: `${BASE_URL}/${country}/${city}/${t.slug}`,
          lastModified: new Date(t.updatedAt || t.createdAt || Date.now()),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        };
      });
  } catch (e) {
    console.error('Sitemap: failed to fetch tours', e);
  }

  const haLongInfoPages = [
    'ha-long-bay-day-trip-or-overnight-cruise',
    'choosing-a-ha-long-bay-cruise',
    'getting-to-ha-long-bay-from-hanoi',
    'best-time-to-visit-ha-long-bay',
    'lan-ha-bay-and-cat-ba-guide',
    'ha-long-bay-caves-and-islands-guide',
    'ha-long-bay-with-kids',
    'bai-tu-long-bay-guide',
].map(slug => ({
    url: `${BASE_URL}/vietnam/ha-long/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const hanoiInfoPages = [
    'hanoi-old-quarter-guide',
    'hanoi-street-food-guide',
    'day-trips-from-hanoi',
    'best-time-to-visit-hanoi',
    'ninh-binh-day-trip-from-hanoi',
    'hanoi-food-tours-and-cooking-classes',
    'hanoi-motorbike-tours-guide',
    'hanoi-cultural-shows-and-workshops',
    'hanoi-history-tour-guide',
].map(slug => ({
    url: `${BASE_URL}/vietnam/hanoi/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const sapaInfoPages = [
    'sapa-trekking-guide',
    'fansipan-cable-car-guide',
    'best-time-to-visit-sapa',
    'getting-to-sapa-from-hanoi',
    'sapa-homestay-guide',
    'sapa-markets-and-bac-ha-guide',
    'mu-cang-chai-and-rice-terrace-guide',
    'sapa-2-day-itinerary',
].map(slug => ({
    url: `${BASE_URL}/vietnam/sapa/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const hoiAnInfoPages = [
    'hoi-an-ancient-town-guide',
    'hoi-an-tailoring-guide',
    'my-son-sanctuary-guide',
    'best-time-to-visit-hoi-an',
    'hoi-an-cooking-classes-guide',
    'hoi-an-lantern-festival-and-night-guide',
    'hoi-an-countryside-and-bike-tours',
    'hoi-an-day-trips-guide',
    'hoi-an-with-kids',
].map(slug => ({
    url: `${BASE_URL}/vietnam/hoi-an/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const ubudInfoPages = [
    'mount-batur-sunrise-guide',
    'tegallalang-rice-terrace-guide',
    'ubud-monkey-forest-guide',
    'ubud-waterfalls-guide',
    'best-time-to-visit-ubud',
    'ubud-temples-guide',
    'day-trips-from-ubud',
    'getting-around-ubud',
      'lempuyang-gate-of-heaven-guide',
    'tirta-empul-purification-guide',
    'tukad-cepung-waterfall-guide',
    'ubud-atv-and-rafting-guide',
    'ubud-cooking-class-guide',
    'ubud-swings-guide',
    'campuhan-ridge-walk-guide',
    'kintamani-and-penglipuran-guide',
    'ubud-art-villages-guide',
    'how-many-days-in-ubud',
    'ubud-with-kids',
].map(slug => ({
    url: `${BASE_URL}/indonesia/ubud/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const cangguInfoPages = [
    'canggu-surf-guide',
    'tanah-lot-guide',
    'canggu-beach-clubs-guide',
    'best-time-to-visit-canggu',
    'day-trips-from-canggu',
    'getting-around-canggu',
    'canggu-or-seminyak-or-uluwatu',
      'canggu-to-ubud-day-trip',
    'canggu-rice-field-walks-guide',
    'north-bali-day-trip-from-canggu',
    'canggu-nusa-penida-day-trip',
].map(slug => ({
    url: `${BASE_URL}/indonesia/canggu/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const uluwatuInfoPages = [
    'uluwatu-temple-kecak-guide',
    'uluwatu-beaches-guide',
    'uluwatu-surf-guide',
    'best-time-to-visit-uluwatu',
    'day-trips-from-uluwatu',
    'getting-around-uluwatu',
      'gwk-cultural-park-guide',
    'jimbaran-seafood-dinner-guide',
    'melasti-beach-guide',
    'uluwatu-sunset-spots-guide',
].map(slug => ({
    url: `${BASE_URL}/indonesia/uluwatu/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const nusaPenidaInfoPages = [
    'getting-to-nusa-penida',
    'kelingking-beach-guide',
    'nusa-penida-west-vs-east',
    'nusa-penida-manta-snorkelling-guide',
    'best-time-to-visit-nusa-penida',
    'nusa-penida-day-trip-or-overnight',
      'diamond-beach-and-atuh-guide',
    'broken-beach-angels-billabong-guide',
    'crystal-bay-guide',
    'nusa-lembongan-vs-nusa-penida',
    'nusa-penida-2-day-itinerary',
].map(slug => ({
    url: `${BASE_URL}/indonesia/nusa-penida/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const daNangInfoPages = [
    'ba-na-hills-golden-bridge-guide',
    'marble-mountains-guide',
    'getting-around-da-nang',
    'best-time-to-visit-da-nang',
    'hai-van-pass-guide',
    'da-nang-beaches-and-water-sports',
    'hue-day-trip-from-da-nang',
    'da-nang-2-day-itinerary',
].map(slug => ({
    url: `${BASE_URL}/vietnam/da-nang/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const hoChiMinhCityInfoPages = [
    'cu-chi-tunnels-guide',
    'mekong-delta-day-trip-guide',
    'saigon-street-food-guide',
    'best-time-to-visit-ho-chi-minh-city',
    'saigon-motorbike-tours-guide',
    'ho-chi-minh-city-1-day-itinerary',
    'saigon-cooking-classes-guide',
    'saigon-day-trips-guide',
].map(slug => ({
    url: `${BASE_URL}/vietnam/ho-chi-minh-city/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const all = [...staticPages, ...agraInfoPages, ...delhiInfoPages, ...jaipurInfoPages, ...phuketInfoPages, ...bangkokInfoPages, ...chiangMaiInfoPages, ...pattayaInfoPages, ...krabiInfoPages, ...siemReapInfoPages, ...phnomPenhInfoPages, ...tokyoInfoPages, ...kyotoInfoPages, ...osakaInfoPages, ...hiroshimaInfoPages, ...sapporoInfoPages, ...naraInfoPages, ...nagoyaInfoPages, ...hakoneInfoPages, ...mountFujiInfoPages, ...colomboInfoPages, ...kandyInfoPages, ...sigiriyaInfoPages, ...mirissaInfoPages, ...bentotaInfoPages, ...nuwaraEliyaInfoPages, ...negomboInfoPages, ...dubaiInfoPages, ...haLongInfoPages, ...hanoiInfoPages, ...sapaInfoPages, ...hoiAnInfoPages, ...ubudInfoPages, ...cangguInfoPages, ...uluwatuInfoPages, ...nusaPenidaInfoPages, ...daNangInfoPages, ...hoChiMinhCityInfoPages,
    ...abuDhabiInfoPages,
    ...galleInfoPages, ...ellaInfoPages, ...itineraryPages, ...tourPages];

  // Drop any URL whose last segment is a slug we 308 away from. Six of these
  // were being submitted — /india/agra/agra-gatimaan-entry-ticket and friends —
  // because the slug sat in both the redirect map and the hardcoded arrays
  // above. Google asks you not to submit redirecting URLs: it wastes crawl
  // budget and says "index this" while the server says "it moved". Filtering
  // here means adding a redirect is enough; nobody has to remember this file.
  const english = all.filter(entry => {
    const slug = entry.url.split('/').pop() || '';
    return !REDIRECTED_SLUGS.has(slug);
  });
  // Translated folders (/fr, /de, /es): only paths with real translated copy
  // are listed (see translatedLangs); an untranslated /fr URL renders English
  // and canonicalises back to /, so listing it would only create duplicates.
  const RESERVED = new Set(['about', 'about-us', 'become-a-supplier', 'booking', 'explore', 'getyourguide-viator-alternative', 'privacy-policy', 'safety-guidelines', 'support', 'terms-and-conditions', 'supplier', 'review', 'tour']);
  const destination = (u: string) => { const path = u.replace(BASE_URL, ''); const first = path.split('/').filter(Boolean)[0]; return !!first && !RESERVED.has(first); };
  const withLangs = english.flatMap(entry => {
    if (!destination(entry.url)) return [entry];
    const path = entry.url.replace(BASE_URL, '');
    const langs = translatedLangs(path);   // only languages with real copy
    if (langs.length === 0) return [entry];
    const languages: Record<string, string> = { en: entry.url, 'x-default': entry.url };
    for (const l of langs) languages[l] = `${BASE_URL}/${l}${path}`;
    const base = { ...entry, alternates: { languages } };
    return [base, ...langs.map(l => ({ ...base, url: `${BASE_URL}/${l}${path}`, priority: Math.max(0.3, (entry.priority ?? 0.6) - 0.1) }))];
  });
  return withLangs;
}
