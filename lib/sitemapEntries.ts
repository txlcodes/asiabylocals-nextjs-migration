import { translatedLangs } from '@/lib/translations';
import { isDuplicateSlug } from '@/lib/duplicateCanonical';
import { MetadataRoute } from 'next';
import { ITINERARY_COUNTRIES, getItinerarySlugs } from '@/lib/japanItineraries';
import { CITY_URL_MAP } from '@/lib/constants';
import { REDIRECTED_SLUGS } from '@/lib/redirectedSlugs';

export const BASE_URL = 'https://www.asiabylocals.com';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';

async function buildAllEntries(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages = [
    '', '/explore', '/about-us', '/privacy-policy', '/terms-and-conditions',
    '/safety-guidelines', '/support', '/supplier',
    '/cruises-and-yachts',
    '/india', '/india/agra', '/india/delhi', '/india/jaipur',
    '/india/mumbai', '/india/udaipur', '/india/jodhpur', '/india/jaisalmer',
    '/india/bengaluru', '/india/varanasi', '/india/amritsar', '/india/goa',
    '/india/aurangabad', '/india/mathura', '/india/khajuraho', '/india/kolkata',
    '/india/rishikesh', '/india/lucknow', '/india/gwalior', '/india/bikaner',
    '/japan', '/japan/tokyo', '/japan/kyoto', '/japan/osaka', '/japan/hiroshima', '/japan/sapporo', '/japan/nara', '/japan/nagoya', '/japan/hakone', '/japan/mount-fuji',
    '/thailand', '/thailand/phuket', '/thailand/bangkok', '/thailand/chiang-mai', '/thailand/pattaya', '/thailand/krabi',
    '/china', '/china/beijing', '/china/shanghai',
    '/hong-kong', '/hong-kong/hongkong',
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
    priority: path === '' ? 1.0 : 0.8,
  }));

  // Agra info pages (including taj-mahal, agra-fort, fatehpur-sikri)
  const agraInfoPages = [
    'things-to-do-in-agra', 'places-to-visit-in-agra', '1-day-agra-itinerary',
    'taj-mahal-ticket-price-2026', 'taj-mahal-opening-time', 'is-taj-mahal-closed-on-friday',
    'agra-travel-guide-2026', 'taj-mahal', 'agra-fort', 'fatehpur-sikri',
    'agra-gatimaan-entry-ticket', 'delhi-to-agra', 'same-day-agra-tour-from-delhi',
    'best-time-to-visit-agra',
    'agra-tour-guide', 'mehtab-bagh', 'agra-shopping-guide',
    'best-tours-in-agra',
    'best-taj-mahal-tour', 'best-taj-mahal-sunrise-tour', 'best-full-day-agra-tour',
    'taj-mahal-skip-the-line-tickets', 'best-taj-mahal-photography-tour',
    'best-private-taj-mahal-tour', 'best-baby-taj-tour', 'golden-triangle-tour-india',
    'best-agra-tour-operator', 'best-agra-tour-for-families', 'is-agra-safe-for-tourists',
    'best-hotel-near-taj-mahal', 'taj-mahal-night-viewing-tour',
    'agra-tour-guide-scams-how-to-avoid-touts',
    'should-i-book-taj-mahal-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-agra',
    'best-taj-mahal-tour-from-delhi', 'best-taj-mahal-tour-by-train-from-delhi', 'best-taj-mahal-sunset-tour', 'best-agra-street-food-tour', 'best-agra-tour-with-fatehpur-sikri', 'best-overnight-taj-mahal-tour-from-delhi', 'best-agra-tour-from-delhi-airport-layover', 'best-agra-tour-with-mathura-vrindavan', 'best-agra-tour-with-female-guide', 'best-agra-tuk-tuk-tour', 'best-bharatpur-bird-sanctuary-tour-from-agra', 'best-taj-mahal-tour-with-german-speaking-guide', 'best-taj-mahal-tour-with-french-speaking-guide', 'best-taj-mahal-tour-with-spanish-speaking-guide', 'best-taj-mahal-tour-from-jaipur', 'best-golden-triangle-tour-3-days', 'best-luxury-golden-triangle-tour', 'best-golden-triangle-tour-with-ranthambore-tiger-safari', 'best-ranthambore-tiger-safari-from-agra', 'best-taj-mahal-instagram-photoshoot-tour', 'best-taj-mahal-tour-with-lunch', 'best-taj-mahal-tour-with-hotel-pickup', 'is-a-group-tour-to-the-taj-mahal-worth-it', 'best-agra-fort-tour', 'best-akbars-tomb-sikandra-tour', 'best-taj-mahal-tour-with-mehtab-bagh', 'can-i-build-my-own-agra-itinerary-with-a-private-car', 'how-much-is-a-private-car-from-delhi-to-agra-and-jaipur', 'best-agra-to-varanasi-and-khajuraho-tour',
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
    'places-to-visit-in-delhi', 'best-time-to-visit-delhi', 'delhi-shopping-guide',
    '2-day-delhi-itinerary', 'lotus-temple', 'akshardham-temple',
    'delhi-tours',
    'best-tours-in-delhi',
    'red-fort-light-and-sound-show', 'best-old-delhi-food-tour', 'best-old-delhi-rickshaw-tour',
    'best-delhi-tour-guide', 'best-delhi-tour-for-families', 'is-delhi-safe-for-tourists',
    'best-delhi-museum-tour', 'best-delhi-airport-layover-tour', 'best-private-delhi-tour',
    'best-taj-mahal-guide-tour-from-delhi',
    'delhi-tourist-scams-how-to-avoid-touts',
    'should-i-book-delhi-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-delhi',
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
    'delhi-to-jaipur', 'agra-to-jaipur',
    'jaipur-local-private-day-tour',
    'best-tours-in-jaipur',
    'best-jaipur-tour-guide', 'best-private-jaipur-tour', 'best-jaipur-tour-for-families',
    'is-jaipur-safe-for-tourists', 'best-jaipur-tour-operator', 'best-jaipur-photography-tour',
    'best-jaipur-hot-air-balloon-tour', 'best-jaipur-sunset-night-tour',
    'best-jaipur-elephant-experience', 'best-hotel-near-amber-fort',
    'jaipur-tourist-scams-how-to-avoid-touts',
    'should-i-book-jaipur-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-jaipur',
  ].map(slug => ({
    url: `${BASE_URL}/india/jaipur/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Beijing info pages
  const beijingInfoPages = [
    'best-time-to-visit-beijing', 'things-to-do-in-beijing', 'beijing-travel-guide-2026',
    'great-wall-of-china-which-section', 'mutianyu-vs-badaling', 'forbidden-city-tickets-guide',
    'beijing-1-day-itinerary', 'beijing-3-day-itinerary', 'china-visa-guide-for-tourists',
    'beijing-subway-guide', 'temple-of-heaven', 'summer-palace-beijing',
    'hutong-tours-beijing', 'beijing-food-guide', 'beijing-air-quality-when-to-visit',
    'best-tours-in-beijing', 'should-i-book-beijing-tour-direct-or-through-app',
  ].map(slug => ({
    url: `${BASE_URL}/china/beijing/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Shanghai info pages
  const shanghaiInfoPages = [
    'best-time-to-visit-shanghai', 'things-to-do-in-shanghai', 'shanghai-travel-guide-2026',
    'shanghai-1-day-itinerary', 'shanghai-3-day-itinerary', 'the-bund-shanghai',
    'shanghai-tower-tickets', 'yu-garden-shanghai', 'zhujiajiao-water-town',
    'shanghai-french-concession-guide', 'shanghai-food-guide', 'shanghai-disneyland-guide',
    'suzhou-day-trip-from-shanghai', 'shanghai-metro-guide', 'shanghai-vs-beijing-which-to-visit',
  ].map(slug => ({
    url: `${BASE_URL}/china/shanghai/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Hong Kong info pages (country slug 'hong-kong', city slug 'hongkong' per cityCountryMap.ts)
  const hongKongInfoPages = [
    'best-time-to-visit-hong-kong', 'things-to-do-in-hong-kong', 'hong-kong-travel-guide-2026',
    'hong-kong-1-day-itinerary', 'hong-kong-3-day-itinerary', 'hong-kong-visa-guide',
    'octopus-card-guide', 'peak-tram-tickets-guide', 'star-ferry-guide',
    'big-buddha-ngong-ping-360', 'hong-kong-dim-sum-guide', 'mong-kok-night-markets',
    'hong-kong-disneyland-guide', 'hong-kong-typhoon-season', 'macau-day-trip-from-hong-kong',
    'hong-kong-food-guide-beyond-dim-sum', 'lantau-island-guide', 'hong-kong-museums-guide',
    'victoria-peak-vs-sky100', 'hong-kong-with-kids-guide', 'hong-kong-shopping-districts-guide',
    'hong-kong-tram-ding-ding-guide', 'hong-kong-harbour-cruise-guide', 'sai-kung-hiking-guide',
    'hong-kong-afternoon-tea-guide', 'wong-tai-sin-temple-guide', 'hong-kong-nightlife-lan-kwai-fong',
    'hong-kong-cantonese-opera-guide', 'hong-kong-7-day-itinerary', 'hong-kong-budget-travel-guide',
    'hong-kong-luxury-travel-guide', 'hong-kong-rainy-day-activities', 'ocean-park-vs-disneyland-hong-kong',
    'best-tours-in-hong-kong', 'should-i-book-hong-kong-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-hong-kong',
  ].map(slug => ({
    url: `${BASE_URL}/hong-kong/hongkong/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Taiwan (Taipei) info pages
  const taiwanInfoPages = [
    'best-time-to-visit-taipei', 'things-to-do-in-taipei', 'taipei-travel-guide-2026',
    'taipei-1-day-itinerary', 'taipei-3-day-itinerary', 'taiwan-visa-guide-for-tourists',
    'taipei-101-tickets-guide', 'taipei-mrt-easycard-guide', 'shilin-night-market-guide',
    'jiufen-day-trip-guide', 'taipei-hot-springs-guide', 'taipei-food-guide',
    'taipei-temples-guide', 'yangmingshan-national-park-guide', 'taroko-gorge-day-trip',
    'taipei-bubble-tea-origin-guide', 'elephant-mountain-hike-guide', 'taipei-with-kids-guide',
    'ximending-guide', 'taipei-museums-guide-national-palace', 'dadaocheng-old-street-guide',
    'beitou-hot-springs-guide', 'taipei-budget-travel-guide', 'taipei-luxury-travel-guide',
    'keelung-day-trip-guide', 'sun-moon-lake-day-trip', 'alishan-day-trip-guide',
    'taipei-7-day-itinerary', 'taiwan-high-speed-rail-guide', 'taipei-coffee-culture-guide',
    'taipei-lgbtq-friendly-guide', 'taipei-rainy-day-activities', 'taipei-christmas-new-year-guide',
    'best-tours-in-taipei', 'should-i-book-taipei-tour-direct-or-through-app',
  ].map(slug => ({
    url: `${BASE_URL}/taiwan/taipei/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // South Korea info pages (Seoul + Busan), country slug 'south-korea'
  const seoulInfoPages = [
    'best-time-to-visit-seoul', 'things-to-do-in-seoul', 'seoul-travel-guide-2026',
    'seoul-1-day-itinerary', 'seoul-3-day-itinerary', 'south-korea-visa-guide-for-tourists',
    'dmz-tour-guide', 'gyeongbokgung-palace-hanbok-guide', 'seoul-subway-tmoney-guide',
    'myeongdong-shopping-guide', 'seoul-korean-bbq-guide', 'hongdae-nightlife-guide',
    'seoul-to-busan-travel', 'namsan-tower-guide', 'seoul-k-pop-tour-guide',
    'bukchon-hanok-village-guide', 'insadong-guide', 'gwangjang-market-guide',
    'seoul-palaces-guide', 'seoul-night-market-food-guide', 'best-tours-in-seoul', 'should-i-book-seoul-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-seoul',
  ].map(slug => ({
    url: `${BASE_URL}/south-korea/seoul/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const busanInfoPages = [
    'best-time-to-visit-busan', 'things-to-do-in-busan', 'busan-travel-guide-2026',
    'busan-1-day-itinerary', 'haeundae-beach-guide', 'gamcheon-culture-village-guide',
    'jagalchi-fish-market-guide', 'busan-food-guide', 'seoul-to-busan-ktx-guide',
    'busan-nightlife-guide', 'best-tours-in-busan', 'should-i-book-busan-tour-direct-or-through-app',
  ].map(slug => ({
    url: `${BASE_URL}/south-korea/busan/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Turkey info pages (Istanbul), country slug 'turkey'
  const istanbulInfoPages = [
    'best-time-to-visit-istanbul', 'things-to-do-in-istanbul', 'istanbul-travel-guide-2026',
    'istanbul-1-day-itinerary', 'istanbul-3-day-itinerary', 'turkey-visa-guide-for-tourists',
    'hagia-sophia-guide', 'blue-mosque-guide', 'topkapi-palace-tickets-guide',
    'grand-bazaar-spice-bazaar-guide', 'bosphorus-cruise-guide', 'istanbul-hamam-turkish-bath-guide',
    'cappadocia-from-istanbul-guide', 'istanbulkart-transit-guide', 'princes-islands-day-trip',
    'istanbul-food-guide', 'istanbul-7-day-itinerary', 'istanbul-nightlife-guide',
    'istanbul-shopping-guide', 'istanbul-mosques-guide', 'istanbul-museums-guide',
    'istanbul-with-kids-guide', 'istanbul-budget-travel-guide', 'istanbul-luxury-travel-guide',
    'istanbul-rainy-day-activities', 'dolmabahce-palace-guide', 'galata-tower-guide',
    'istanbul-whirling-dervishes-guide', 'istanbul-turkish-coffee-culture-guide', 'istanbul-weekend-guide',
    'best-tours-in-istanbul', 'should-i-book-istanbul-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-istanbul',
  ].map(slug => ({
    url: `${BASE_URL}/turkey/istanbul/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Qatar info pages (Doha), country slug 'qatar'
  const dohaInfoPages = [
    'best-time-to-visit-doha', 'things-to-do-in-doha', 'doha-travel-guide-2026',
    'doha-1-day-itinerary', 'doha-3-day-itinerary', 'qatar-visa-guide-for-tourists',
    'museum-of-islamic-art-doha', 'souq-waqif-guide', 'doha-desert-safari-guide',
    'the-pearl-qatar-guide', 'doha-corniche-guide', 'katara-cultural-village-guide',
    'doha-skyline-west-bay-guide', 'doha-food-guide', 'doha-shopping-malls-guide',
    'qatar-world-cup-2022-legacy-doha', 'doha-7-day-itinerary', 'doha-with-kids-guide',
    'doha-budget-travel-guide', 'doha-luxury-travel-guide', 'doha-beaches-guide',
    'doha-dhow-cruise-guide', 'al-zubarah-fort-day-trip', 'doha-nightlife-guide',
    'zekreet-film-city-guide', 'doha-islamic-architecture-guide', 'doha-falcon-souq-guide',
    'inland-sea-khor-al-adaid-guide', 'doha-ramadan-travel-guide', 'doha-weekend-guide',
    'doha-airport-stopover-guide', 'best-tours-in-doha', 'should-i-book-doha-tour-direct-or-through-app',
  ].map(slug => ({
    url: `${BASE_URL}/qatar/doha/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Maldives info pages (Male), country slug 'maldives'
  const maleInfoPages = [
    'best-time-to-visit-maldives', 'things-to-do-in-male', 'maldives-travel-guide-2026',
    'male-1-day-itinerary', 'maldives-visa-guide-for-tourists', 'maldives-snorkeling-diving-guide',
    'maldives-resort-vs-local-island-guide', 'male-local-island-guide', 'maldives-budget-travel-guide',
    'maldives-luxury-resort-guide', 'maldives-whale-shark-manta-ray-guide', 'maldives-sandbank-tour-guide',
    'male-city-guide', 'maldives-dolphin-watching-guide', 'maldives-airport-transfer-guide',
    'best-tours-in-male', 'should-i-book-male-tour-direct-or-through-app',
  ].map(slug => ({
    url: `${BASE_URL}/maldives/male/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Philippines info pages (Manila + Cebu)
  const manilaInfoPages = [
    'best-time-to-visit-manila', 'things-to-do-in-manila', 'manila-travel-guide-2026',
    'manila-1-day-itinerary', 'philippines-visa-guide-for-tourists', 'intramuros-fort-santiago-guide',
    'manila-jeepney-guide', 'manila-food-guide', 'manila-to-boracay-travel',
    'manila-traffic-reality-guide', 'boracay-day-trip-guide', 'manila-3-day-itinerary',
    'taal-volcano-day-trip',
  ].map(slug => ({
    url: `${BASE_URL}/philippines/manila/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const cebuInfoPages = [
    'best-time-to-visit-cebu', 'things-to-do-in-cebu', 'cebu-travel-guide-2026',
    'cebu-1-day-itinerary', 'cebu-island-hopping-guide', 'oslob-whale-sharks-guide',
    'moalboal-sardine-run-guide', 'kawasan-falls-canyoneering', 'cebu-food-guide',
    'cebu-3-day-itinerary', 'cebu-to-bohol-travel', 'magellan-cross-basilica-guide',
    'cebu-beaches-guide', 'siquijor-day-trip-guide', 'cebu-diving-guide',
    'oslob-vs-donsol-whale-sharks', 'cebu-waterfalls-guide',
  ].map(slug => ({
    url: `${BASE_URL}/philippines/cebu/${slug}`,
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
    'best-tours-in-phuket', 'should-i-book-phuket-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-phuket',
  ].map(slug => ({
    url: `${BASE_URL}/thailand/phuket/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Malaysia info pages, batch 1 (2026-10)
  const kualaLumpurInfoPages = [
    'best-time-to-visit-kuala-lumpur', 'things-to-do-in-kuala-lumpur',
    'kuala-lumpur-travel-guide-2026', 'petronas-towers-tickets-guide',
    'kl-1-day-itinerary', 'kl-3-day-itinerary', 'batu-caves-guide',
    'kl-public-transport-guide', 'kl-halal-food-guide',
    'bukit-bintang-shopping-guide', 'kl-to-penang-travel',
    'malaysia-visa-guide-for-tourists', 'best-tours-in-kuala-lumpur', 'should-i-book-kuala-lumpur-tour-direct-or-through-app',
  ].map(slug => ({
    url: `${BASE_URL}/malaysia/kuala-lumpur/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const penangInfoPages = [
    'best-time-to-visit-penang', 'things-to-do-in-penang',
    'penang-travel-guide-2026', 'georgetown-street-art-guide',
    'penang-1-day-itinerary', 'penang-food-guide', 'penang-hill-guide',
    'georgetown-unesco-heritage-guide', 'penang-beaches-guide',
    'penang-3-day-itinerary', 'clan-jetties-penang', 'kek-lok-si-temple-guide',
    'best-tours-in-penang', 'should-i-book-penang-tour-direct-or-through-app',
  ].map(slug => ({
    url: `${BASE_URL}/malaysia/penang/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const langkawiInfoPages = [
    'langkawi-cable-car-guide', 'langkawi-duty-free-shopping',
  ].map(slug => ({
    url: `${BASE_URL}/malaysia/langkawi/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const malaccaInfoPages = [
    'malacca-unesco-heritage-guide', 'best-time-to-visit-malacca',
  ].map(slug => ({
    url: `${BASE_URL}/malaysia/malacca/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const kotaKinabaluInfoPages = [
    'mount-kinabalu-guide', 'kota-kinabalu-island-hopping',
  ].map(slug => ({
    url: `${BASE_URL}/malaysia/kota-kinabalu/${slug}`,
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
    'best-tours-in-bangkok', 'should-i-book-bangkok-tour-direct-or-through-app',
    'private-tour-vs-group-tour-thailand', 'how-much-should-a-private-tour-guide-cost-in-bangkok',
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
    'best-tours-in-chiang-mai', 'should-i-book-chiang-mai-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-chiang-mai',
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
    'best-tours-in-pattaya', 'should-i-book-pattaya-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-pattaya',
  ].map(slug => ({
    url: `${BASE_URL}/thailand/pattaya/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Krabi info pages
  const phnomPenhInfoPages = [
    'tuol-sleng-and-choeung-ek-guide', 'royal-palace-phnom-penh', 'phnom-penh-2-day-itinerary', 'phnom-penh-food-and-markets', 'phnom-penh-to-siem-reap-transport', 'best-time-to-visit-phnom-penh',
    'phnom-penh-1-day-itinerary', 'koh-dach-silk-island', 'kampot-and-kep-day-trip', 'phnom-penh-street-art', 'where-to-stay-in-phnom-penh', 'phnom-penh-to-battambang', 'oudong-guide', 'phnom-penh-with-kids', 'phnom-penh-to-sihanoukville-and-the-islands', 'phnom-penh-airport-guide', 'best-tours-in-phnom-penh', 'should-i-book-phnom-penh-tour-direct-or-through-app',
  ].map(slug => ({
    url: `${BASE_URL}/cambodia/phnom-penh/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const siemReapInfoPages = [
    'angkor-wat-tickets-and-pass-guide', 'angkor-wat-sunrise-guide', 'angkor-temples-small-vs-grand-circuit', 'best-time-to-visit-siem-reap',
    'tonle-sap-floating-villages-guide', 'siem-reap-3-day-itinerary', 'siem-reap-airport-to-town', 'siem-reap-food-guide',
    'angkor-wat-one-day-itinerary', 'banteay-srei-guide', 'ta-prohm-tomb-raider-temple', 'angkor-by-bike', 'where-to-stay-in-siem-reap', 'siem-reap-2-day-itinerary', 'siem-reap-with-kids', 'bayon-and-angkor-thom-guide', 'beng-mealea-and-koh-ker', 'phnom-kulen-guide', 'angkor-photography-guide', 'siem-reap-nightlife-and-pub-street', 'siem-reap-to-battambang', 'angkor-wat-dress-code', 'siem-reap-money-and-costs', 'preah-vihear-temple-guide', 'angkor-temples-in-the-rainy-season', 'angkor-with-limited-mobility', 'angkor-sunset-where-to-go', 'best-tours-in-siem-reap', 'should-i-book-siem-reap-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-siem-reap',
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
    'best-tours-in-krabi', 'should-i-book-krabi-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-krabi',
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
    'best-tours-in-tokyo', 'should-i-book-tokyo-tour-direct-or-through-app', 'how-much-should-a-private-tour-guide-cost-in-tokyo',
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
    'best-tours-in-kyoto', 'should-i-book-kyoto-tour-direct-or-through-app', 'how-much-should-a-private-tour-guide-cost-in-kyoto',
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
    'best-tours-in-osaka', 'should-i-book-osaka-tour-direct-or-through-app',
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
    'sapporo-with-kids', 'best-tours-in-sapporo', 'should-i-book-sapporo-tour-direct-or-through-app'].map(slug => ({
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
    'should-you-stay-overnight-in-nara', 'best-tours-in-nara', 'should-i-book-nara-tour-direct-or-through-app'].map(slug => ({
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
    'nagoya-samurai-experiences', 'best-tours-in-nagoya', 'should-i-book-nagoya-tour-direct-or-through-app',
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
    'hakone-or-kawaguchiko-for-mount-fuji', 'best-tours-in-hakone', 'should-i-book-hakone-tour-direct-or-through-app'].map(slug => ({
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
    'mount-fuji-day-tour-routes', 'best-tours-in-mount-fuji', 'should-i-book-mount-fuji-tour-direct-or-through-app',
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
    'leaving-ella-onward-transfers', 'best-tours-in-ella', 'should-i-book-ella-tour-direct-or-through-app'].map(slug => ({
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
    'dubai-water-sports-guide',
    'best-tours-in-dubai', 'should-i-book-dubai-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-dubai'].map(slug => ({
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
    'galle-fort-guide', 'mirissa-whale-watching-guide', 'south-coast-beaches-guide', 'galle-2-day-itinerary', 'best-tours-in-galle', 'should-i-book-galle-tour-direct-or-through-app'
  ].map(slug => ({
    url: `${BASE_URL}/sri-lanka/galle/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const negomboInfoPages = [
    'negombo-airport-guide', 'negombo-lagoon-guide', 'best-tours-in-negombo', 'should-i-book-negombo-tour-direct-or-through-app'
  ].map(slug => ({
    url: `${BASE_URL}/sri-lanka/negombo/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const nuwaraEliyaInfoPages = [
    'nuwara-eliya-tea-guide', 'horton-plains-guide', 'best-tours-in-nuwara-eliya', 'should-i-book-nuwara-eliya-tour-direct-or-through-app'
  ].map(slug => ({
    url: `${BASE_URL}/sri-lanka/nuwara-eliya/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const kashmirInfoPages = [
    'kashmir-travel-guide-2026', 'things-to-do-in-kashmir',
    'places-to-visit-in-kashmir', 'best-time-to-visit-kashmir',
    'dal-lake-srinagar', 'gulmarg-travel-guide',
    'pahalgam-travel-guide', 'sonamarg-travel-guide',
    'mughal-gardens-srinagar', 'kashmir-houseboat-guide',
    'srinagar-travel-guide', 'kashmir-food-guide',
    'kashmir-in-winter', 'kashmir-in-summer',
    'kashmir-budget-guide', 'best-tours-in-kashmir', 'should-i-book-kashmir-tour-direct-or-through-app'
  ].map(slug => ({
    url: `${BASE_URL}/india/kashmir/${slug}`,
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
    'pettah-market-guide', 'galle-face-green-guide', 'best-tours-in-colombo', 'should-i-book-colombo-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-colombo',
  ].map(slug => ({
    url: `${BASE_URL}/sri-lanka/colombo/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // The Golden Triangle hub. Registered explicitly rather than derived, because
  // it is the only route of its kind: one country, one page. Leaving it out of
  // the sitemap is how Nagoya's authority pages went live and stayed uncrawled.
  const goldenTriangle = [{
    url: `${BASE_URL}/india/golden-triangle`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    // "golden triangle tour" outranks any single tour page we have for it.
    priority: 0.9,
  }];

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
        // no-store, not a second cache. The route above already limits how
        // often this runs to once an hour; giving the fetch its own 3600s
        // window on top meant the route could regenerate with hour-old data.
        // That is how a sitemap written at 16:58, with 804 Cambodian tours
        // approved, went out carrying 187 of them and none at all for
        // Phnom Penh.
        return fetch(`${API_URL}/api/public/tours?city=${encodeURIComponent(cityQuery)}`, { cache: 'no-store' })
          .then(r => r.ok ? r.json() : { tours: [] })
          .catch(() => ({ tours: [] }));
      })
    );
    const allTours = results.flatMap((data: any) => data.tours || data || []);
    tourPages = allTours
      .filter((t: any) => t.slug && t.city)
      // A duplicate page declares another page as canonical, so submitting it
      // asks Google to crawl a URL we have already told it to ignore. It burns
      // crawl budget on the three biggest Indian cities and slows the
      // consolidation down. Only champions and distinct tours go in.
      .filter((t: any) => !isDuplicateSlug(t.slug))
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
    'best-tours-in-hanoi', 'should-i-book-hanoi-tour-direct-or-through-app',
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
    'sapa-2-day-itinerary', 'best-tours-in-sapa', 'should-i-book-sapa-tour-direct-or-through-app',
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
    'best-tours-in-ubud',
    'should-i-book-ubud-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-ubud',
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
    'canggu-nusa-penida-day-trip', 'best-tours-in-canggu', 'should-i-book-canggu-tour-direct-or-through-app',
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
    'uluwatu-sunset-spots-guide', 'best-tours-in-uluwatu', 'should-i-book-uluwatu-tour-direct-or-through-app',
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
    'best-tours-in-ho-chi-minh-city', 'should-i-book-ho-chi-minh-city-tour-direct-or-through-app',
].map(slug => ({
    url: `${BASE_URL}/vietnam/ho-chi-minh-city/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const all = [...staticPages, ...agraInfoPages, ...delhiInfoPages, ...jaipurInfoPages, ...kashmirInfoPages, ...beijingInfoPages, ...shanghaiInfoPages, ...hongKongInfoPages, ...taiwanInfoPages, ...seoulInfoPages, ...busanInfoPages, ...istanbulInfoPages, ...dohaInfoPages, ...maleInfoPages, ...manilaInfoPages, ...cebuInfoPages, ...phuketInfoPages, ...bangkokInfoPages, ...chiangMaiInfoPages, ...pattayaInfoPages, ...krabiInfoPages, ...siemReapInfoPages, ...phnomPenhInfoPages, ...tokyoInfoPages, ...kyotoInfoPages, ...osakaInfoPages, ...hiroshimaInfoPages, ...sapporoInfoPages, ...naraInfoPages, ...nagoyaInfoPages, ...hakoneInfoPages, ...mountFujiInfoPages, ...colomboInfoPages, ...kandyInfoPages, ...sigiriyaInfoPages, ...mirissaInfoPages, ...bentotaInfoPages, ...nuwaraEliyaInfoPages, ...negomboInfoPages, ...dubaiInfoPages, ...haLongInfoPages, ...hanoiInfoPages, ...sapaInfoPages, ...hoiAnInfoPages, ...ubudInfoPages, ...cangguInfoPages, ...uluwatuInfoPages, ...nusaPenidaInfoPages, ...daNangInfoPages, ...hoChiMinhCityInfoPages, ...kualaLumpurInfoPages, ...penangInfoPages, ...langkawiInfoPages, ...malaccaInfoPages, ...kotaKinabaluInfoPages,
    ...abuDhabiInfoPages,
    ...galleInfoPages, ...ellaInfoPages, ...itineraryPages, ...goldenTriangle, ...tourPages];

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
  const RESERVED = new Set(['about', 'about-us', 'become-a-supplier', 'booking', 'explore', 'privacy-policy', 'safety-guidelines', 'support', 'terms-and-conditions', 'supplier', 'review', 'tour']);
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

// Google's limit is 50,000 URLs / 50 MB (uncompressed) per sitemap file. The
// single sitemap hit 51,193 URLs and Search Console reported "Too many URLs".
// Entries are split into fixed-size chunks served at /sitemaps/<n>.xml, with an
// index at /sitemap.xml (app/sitemap.xml/route.ts) so the submitted URL keeps
// working. 10,000 per chunk keeps each file far below both limits.
export const SITEMAP_CHUNK_SIZE = 10000;

// Every chunk request and the index would otherwise each re-run the whole
// build (one API fetch per city). Share one build for a few minutes.
const CACHE_MS = 5 * 60 * 1000;
let cache: { at: number; promise: Promise<MetadataRoute.Sitemap> } | null = null;

export function getAllSitemapEntries(): Promise<MetadataRoute.Sitemap> {
  if (!cache || Date.now() - cache.at > CACHE_MS) {
    const promise = buildAllEntries();
    cache = { at: Date.now(), promise };
    promise.catch(() => { if (cache && cache.promise === promise) cache = null; });
  }
  return cache.promise;
}

export async function getSitemapChunkCount(): Promise<number> {
  const all = await getAllSitemapEntries();
  return Math.max(1, Math.ceil(all.length / SITEMAP_CHUNK_SIZE));
}

export async function getSitemapChunk(index: number): Promise<MetadataRoute.Sitemap> {
  const all = await getAllSitemapEntries();
  return all.slice(index * SITEMAP_CHUNK_SIZE, (index + 1) * SITEMAP_CHUNK_SIZE);
}
