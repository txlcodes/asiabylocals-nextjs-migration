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
    'best-taj-mahal-tour-from-delhi', 'best-taj-mahal-tour-by-train-from-delhi', 'best-taj-mahal-sunset-tour', 'best-agra-street-food-tour', 'best-agra-tour-with-fatehpur-sikri', 'best-overnight-taj-mahal-tour-from-delhi', 'best-agra-tour-from-delhi-airport-layover', 'best-agra-tour-with-mathura-vrindavan', 'best-agra-tour-with-female-guide', 'best-taj-mahal-tour-with-german-speaking-guide', 'best-taj-mahal-tour-with-french-speaking-guide', 'best-taj-mahal-tour-with-spanish-speaking-guide', 'best-taj-mahal-tour-from-jaipur', 'best-golden-triangle-tour-3-days', 'best-luxury-golden-triangle-tour', 'best-golden-triangle-tour-with-ranthambore-tiger-safari', 'best-taj-mahal-instagram-photoshoot-tour', 'best-taj-mahal-tour-with-lunch', 'is-a-group-tour-to-the-taj-mahal-worth-it', 'best-agra-fort-tour', 'how-much-is-a-private-car-from-delhi-to-agra-and-jaipur', 'how-to-book-taj-mahal-tickets-online', 'best-delhi-and-taj-mahal-2-day-tour', 'can-you-visit-the-taj-mahal-from-mumbai-bangalore-or-goa', 'best-holi-tours-near-agra-mathura-vrindavan', 'best-half-day-agra-tour', 'best-sunrise-taj-mahal-tour-from-delhi-by-car', 'best-taj-mahal-tour-with-japanese-speaking-guide', 'best-taj-mahal-tour-with-hindi-speaking-guide', 'best-taj-mahal-tour-from-gurgaon', 'best-2-day-agra-tour', 'best-3-day-delhi-and-agra-tour', 'best-4-day-golden-triangle-tour', 'best-5-day-golden-triangle-tour', 'best-luxury-taj-mahal-day-trip-from-delhi', 'best-taj-mahal-vip-tickets-and-tours', 'best-taj-mahal-agra-fort-baby-taj-day-trip-from-delhi', 'best-one-day-agra-tour-from-agra-taj-fort-baby-taj', 'can-you-go-inside-the-taj-mahal-mausoleum-tours', 'best-taj-mahal-express-entry-tour', 'best-private-car-and-driver-taj-mahal-tour-from-delhi', 'best-agra-local-sightseeing-tour', 'what-to-do-in-agra-on-friday-when-the-taj-is-closed', 'best-agra-to-jaipur-transfer-via-fatehpur-sikri', 'taj-mahal-sunrise-vs-sunset-which-is-better', 'delhi-to-agra-by-train-or-car-which-is-better', 'best-agra-tour-for-first-time-visitors-to-india', 'best-taj-mahal-tour-for-couples-and-honeymoon', 'best-all-inclusive-taj-mahal-tour-from-delhi', 'best-taj-mahal-tour-with-entrance-fees-included', 'agra-tours-by-question',
    'is-bharatpur-bird-sanctuary-tour-worth-it-agra', 'is-gwalior-day-trip-worth-it-agra',
    'is-fabric-painting-workshop-worth-it-agra',
    'best-agra-tuk-tuk-tour', 'best-bharatpur-bird-sanctuary-tour-from-agra',
    'best-ranthambore-tiger-safari-from-agra', 'best-taj-mahal-tour-with-hotel-pickup',
    'best-akbars-tomb-sikandra-tour', 'best-taj-mahal-tour-with-mehtab-bagh',
    'can-i-build-my-own-agra-itinerary-with-a-private-car', 'best-agra-to-varanasi-and-khajuraho-tour',
    'is-the-mohabbat-the-taj-show-in-agra-worth-it', 'best-agra-shopping-tour-marble-inlay-workshop',
    'best-agra-walking-tour', 'best-agra-elephant-sanctuary-tour',
    'can-i-wear-a-saree-to-the-taj-mahal-tour', 'best-agra-cooking-class',
    'best-taj-mahal-tour-with-chinese-speaking-guide', 'book-a-government-approved-guide-for-the-taj-mahal',
    'best-taj-mahal-tour-from-rishikesh-or-haridwar', 'best-agra-tour-from-lucknow',
    'best-day-trips-from-agra-beyond-the-taj', 'best-taj-mahal-tour-from-hyderabad-bangalore-or-goa-with-flights',
    'best-7-day-india-tour-with-taj-mahal', 'best-golden-triangle-tour-with-amritsar',
    'best-2-day-agra-tours-with-mathura-or-bharatpur', 'best-agra-evening-tour',
    'best-taj-mahal-moonlight-tour', 'best-kannauj-perfume-tour-from-agra',
    'best-agra-workshops-and-experiences', 'best-skip-the-line-taj-mahal-tour-from-delhi',
    'best-offbeat-agra-tour', 'best-jaipur-to-delhi-via-taj-mahal-tour',
    'best-agra-tour-in-winter-fog-season', 'best-agra-tour-in-summer-heat',
    'best-agra-tour-in-monsoon-season', 'skip-the-line-vs-regular-taj-mahal-ticket-is-it-worth-it',
    'agra-fort-or-fatehpur-sikri-which-to-visit', 'taj-mahal-or-agra-fort-which-first',
    'best-agra-tour-for-older-travellers', 'best-agra-tour-for-solo-travellers',
    'best-taj-mahal-tour-for-groups-of-friends-or-big-families', 'best-value-taj-mahal-tour-from-delhi',
    'best-instant-booking-taj-mahal-tours', 'best-agra-sunrise-half-day-tour',
    'best-taj-mahal-sunrise-tour-with-breakfast-from-delhi', 'best-mathura-vrindavan-day-tour-from-delhi-or-agra',
    'is-a-private-fatehpur-sikri-tour-with-guide-worth-it', 'best-agra-three-unesco-sites-tour',
    'best-taj-mahal-tour-by-high-speed-train-from-delhi', 'best-bharatpur-bird-sanctuary-tour-from-delhi-or-jaipur',
    'best-taj-mahal-sunrise-and-fatehpur-sikri-day-tour', 'best-agra-fort-and-fatehpur-sikri-day-trip-from-agra',
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
    'best-old-delhi-tour', 'best-india-gate-tour', 'best-qutub-minar-tour',
    'best-akshardham-temple-tour-delhi', 'best-lotus-temple-tour-delhi',
    'best-red-fort-tour-delhi',
    'is-humayuns-tomb-tour-worth-it-delhi', 'is-chandni-chowk-food-tour-worth-it-delhi',
    'is-cooking-class-worth-it-delhi', 'is-lodhi-art-district-walk-worth-it-delhi',
    'is-jim-corbett-tour-worth-it-delhi', 'is-kuno-national-park-tour-worth-it-delhi',
    'is-gandhi-smriti-raj-ghat-tour-worth-it-delhi', 'is-jantar-mantar-tour-worth-it-delhi',
    'is-sanjay-colony-slum-tour-worth-it-delhi', 'is-hauz-khas-deer-park-tour-worth-it-delhi',
    'best-shopping-tour-delhi',
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
    'best-amber-fort-tour-jaipur', 'best-hawa-mahal-tour-jaipur', 'best-jaipur-shopping-tour',
    'best-nahargarh-fort-tour-jaipur', 'best-jantar-mantar-tour-jaipur',
    'best-jal-mahal-tour-jaipur',
    'is-block-printing-workshop-worth-it-jaipur', 'is-home-cooking-class-worth-it-jaipur',
    'is-ranthambore-tiger-safari-worth-it-jaipur', 'is-de-copas-pub-crawl-worth-it-jaipur',
    'is-night-jeep-safari-worth-it-jaipur', 'is-night-heritage-walking-tour-worth-it-jaipur',
    'is-birla-mandir-gaushala-tour-worth-it-jaipur', 'is-monkey-temple-sunset-tour-worth-it-jaipur',
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
    'how-much-should-a-private-tour-guide-cost-in-beijing',
    'is-acrobatic-show-worth-it-beijing', 'is-panda-house-worth-it-beijing',
    'is-tea-ceremony-worth-it-beijing', 'is-798-art-district-tour-worth-it-beijing',
    'is-peking-opera-workshop-worth-it-beijing', 'is-red-theater-kung-fu-show-worth-it-beijing',
    'is-mahjong-experience-worth-it-beijing', 'is-longqing-gorge-tour-worth-it-beijing',
    'is-mutianyu-great-wall-worth-it-beijing', 'is-badaling-great-wall-worth-it-beijing',
    'is-forbidden-city-tour-worth-it-beijing', 'is-temple-of-heaven-tour-worth-it-beijing',
    'is-terracotta-warriors-day-trip-worth-it-beijing', 'is-hutong-sidecar-tour-worth-it-beijing',
    'is-dumpling-making-class-worth-it-beijing', 'is-simatai-great-wall-worth-it-beijing',
    'is-calligraphy-masterclass-worth-it-beijing', 'is-lama-temple-tour-worth-it-beijing',
    'is-crystal-bead-workshop-worth-it-beijing', 'is-namoc-art-museum-worth-it-beijing',
    'is-liangma-river-cruise-worth-it-beijing', 'is-mao-memorial-hall-worth-it-beijing',
    'is-science-technology-museum-worth-it-beijing', 'is-national-museum-of-china-worth-it-beijing',
    'is-prince-gongs-mansion-worth-it-beijing', 'is-gubei-water-town-worth-it-beijing',
    'is-planetarium-worth-it-beijing', 'is-hutong-nightlife-tour-worth-it-beijing',
    'is-tie-dye-workshop-worth-it-beijing', 'is-fragrant-hills-worth-it-beijing',
    'is-ancient-observatory-worth-it-beijing', 'is-performing-arts-center-worth-it-beijing',
    'is-eastern-qing-tombs-worth-it-beijing', 'is-candied-hawthorn-workshop-worth-it-beijing',
    'is-beihai-park-worth-it-beijing', 'is-bell-drum-towers-worth-it-beijing',
    'is-confucius-temple-worth-it-beijing', 'is-paper-cut-workshop-worth-it-beijing',
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
    'is-huangpu-river-cruise-worth-it-shanghai', 'is-zhouzhuang-water-town-worth-it-shanghai',
    'is-tea-ceremony-worth-it-shanghai', 'is-dumpling-cooking-class-worth-it-shanghai',
    'is-calligraphy-workshop-worth-it-shanghai', 'is-yangcheng-crab-catching-worth-it-shanghai',
    'is-suzhou-day-trip-worth-it-shanghai', 'is-yu-garden-old-town-tour-worth-it-shanghai',
    'is-french-concession-walking-tour-worth-it-shanghai', 'is-zhujiajiao-water-town-worth-it-shanghai',
    'is-era-acrobatic-show-worth-it-shanghai',
    'is-tai-chi-class-worth-it-shanghai', 'is-giant-panda-tour-worth-it-shanghai',
    'is-jade-buddha-temple-tour-worth-it-shanghai', 'is-cheongsam-photoshoot-worth-it-shanghai',
    'best-tours-in-shanghai', 'should-i-book-shanghai-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-shanghai',
    'is-jin-mao-skywalk-worth-it-shanghai', 'is-van-gogh-starry-night-worth-it-shanghai',
    'is-hanfu-photoshoot-worth-it-shanghai', 'is-dragon-beard-candy-worth-it-shanghai',
    'is-shanghai-zoo-worth-it-shanghai', 'is-shanghai-science-museum-worth-it-shanghai',
    'is-pub-crawl-worth-it-shanghai', 'is-jade-buddha-temple-private-tour-worth-it-shanghai',
    'is-ocean-aquarium-worth-it-shanghai', 'is-world-financial-center-worth-it-shanghai',
    'is-nanxiang-ancient-town-worth-it-shanghai', 'is-sheshan-hill-worth-it-shanghai',
    'is-incense-workshop-worth-it-shanghai', 'is-embroidery-class-worth-it-shanghai',
    'is-tea-mentor-experience-worth-it-shanghai', 'is-songcheng-park-worth-it-shanghai',
    'is-fly-over-shanghai-worth-it-shanghai', 'is-oriental-pearl-tower-worth-it-shanghai',
    'is-peking-opera-mask-painting-worth-it-shanghai', 'is-bamboo-weaving-workshop-worth-it-shanghai',
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
    'is-egg-tart-cooking-class-worth-it-hong-kong',
    'is-macau-day-trip-worth-it-hong-kong', 'is-lantau-island-big-buddha-tour-worth-it-hong-kong',
    'is-victoria-harbour-yacht-tour-worth-it-hong-kong', 'is-shenzhen-day-trip-worth-it-hong-kong',
    'is-food-tour-worth-it-hong-kong',
    'is-tai-o-boat-tour-worth-it-hong-kong', 'is-sai-kung-snorkeling-worth-it-hong-kong',
    'is-hanfu-costume-experience-worth-it-hong-kong', 'is-lion-rock-hike-worth-it-hong-kong',
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
    'how-much-should-a-private-tour-guide-cost-in-taipei',
    'is-atayal-culture-day-trip-worth-it-taipei', 'is-yilan-scallion-pancake-tour-worth-it-taipei',
    'is-jiufen-shifen-tour-worth-it-taipei', 'is-sun-moon-lake-tour-worth-it-taipei',
    'is-pineapple-cake-workshop-worth-it-taipei', 'is-night-market-food-tour-worth-it-taipei',
    'is-maokong-gondola-tour-worth-it-taipei', 'is-wulai-hot-springs-tour-worth-it-taipei',
    'is-yangmingshan-national-park-tour-worth-it-taipei',
    'is-beitou-hot-springs-worth-it-taipei', 'is-national-palace-museum-tour-worth-it-taipei',
    'is-houtong-cat-village-worth-it-taipei', 'is-beer-brewery-tour-worth-it-taipei',
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
    'is-nami-island-tour-worth-it-seoul', 'is-han-river-cruise-worth-it-seoul',
    'is-kimchi-cooking-class-worth-it-seoul', 'is-everland-worth-it-seoul',
    'is-dmz-tour-worth-it-seoul', 'is-deoksugung-palace-tour-worth-it-seoul',
    'is-bukchon-cooking-class-worth-it-seoul', 'is-suwon-hwaseong-fortress-tour-worth-it-seoul',
    'is-seoraksan-day-trip-worth-it-seoul', 'is-dongdaemun-market-tour-worth-it-seoul',
    'is-perfume-making-workshop-worth-it-seoul',
    'is-kpop-recording-experience-worth-it-seoul', 'is-taekwondo-lesson-worth-it-seoul',
    'is-moonlight-rainbow-fountain-show-worth-it-seoul', 'is-gwangjang-market-food-crawl-worth-it-seoul',
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
    'how-much-should-a-private-tour-guide-cost-in-busan',
    'is-gamcheon-village-tour-worth-it-busan', 'is-haedong-yonggungsa-temple-tour-worth-it-busan',
    'is-gyeongju-day-trip-worth-it-busan', 'is-taekwondo-experience-worth-it-busan',
    'is-cable-car-tower-tour-worth-it-busan', 'is-night-yacht-cruise-worth-it-busan',
    'is-spa-land-worth-it-busan', 'is-kdrama-filming-locations-tour-worth-it-busan',
    'is-rice-wine-brewing-worth-it-busan', 'is-jagalchi-market-walking-tour-worth-it-busan',
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
    'best-hagia-sophia-blue-mosque-tour', 'best-bosphorus-cruise-istanbul',
    'best-ephesus-pamukkale-fly-tour-istanbul',
    'is-pub-crawl-worth-it-istanbul', 'is-card-game-tea-experience-worth-it-istanbul',
    'is-bursa-day-trip-worth-it-istanbul', 'is-camlica-asian-side-tour-worth-it-istanbul',
    'is-bosphorus-cruise-worth-it-istanbul', 'is-hagia-sophia-topkapi-combo-worth-it-istanbul',
    'is-basilica-cistern-worth-it-istanbul', 'is-princes-islands-tour-worth-it-istanbul',
    'is-whirling-dervish-ceremony-worth-it-istanbul', 'is-cappadocia-tour-from-istanbul-worth-it',
    'is-ephesus-pamukkale-day-trip-worth-it-istanbul',
    'is-gallipoli-tour-worth-it-istanbul', 'is-gobekli-tepe-tour-worth-it-istanbul',
    'is-sapanca-masukiye-tour-worth-it-istanbul', 'is-turkish-coffee-fortune-telling-worth-it-istanbul',
    'is-food-tour-worth-it-istanbul',
    'is-turkish-cooking-class-worth-it-istanbul', 'is-turkish-bath-experience-worth-it-istanbul',
    'is-grand-bazaar-shopping-tour-worth-it-istanbul', 'is-magnificent-century-tour-worth-it-istanbul',
    'is-chora-mosque-worth-it-istanbul', 'is-ebru-marbling-workshop-worth-it-istanbul',
    'is-mosaic-lamp-workshop-worth-it-istanbul', 'is-rainbow-fener-balat-walking-tour-worth-it-istanbul',
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
    'how-much-should-a-private-tour-guide-cost-in-doha',
    'is-quad-bike-worth-it-doha', 'is-luxury-yacht-cruise-worth-it-doha',
    'is-hot-air-balloon-worth-it-doha',
    'is-al-thakira-mangrove-kayaking-worth-it-doha', 'is-al-khor-panda-house-worth-it-doha',
    'is-desert-safari-worth-it-doha', 'is-dhow-cruise-worth-it-doha',
    'is-doha-city-tour-worth-it', 'is-al-zubarah-fort-tour-worth-it-doha',
    'is-jet-ski-worth-it-doha', 'is-musfir-sinkhole-tour-worth-it-doha',
    'is-al-shaqab-horse-center-worth-it-doha',
    'is-beach-club-day-pass-worth-it-doha', 'is-camel-racetrack-oryx-farm-tour-worth-it-doha',
    'is-classic-car-tour-worth-it-doha', 'is-villaggio-mall-gondola-worth-it-doha',
    'is-doha-night-tour-worth-it',
    'is-national-museum-of-qatar-worth-it-doha', 'is-museum-of-islamic-art-worth-it-doha',
    'is-zekreet-richard-serra-tour-worth-it-doha', 'is-lusail-city-tour-worth-it-doha',
    'is-khor-al-adaid-inland-sea-worth-it-doha',
    'is-lusail-winter-wonderland-worth-it-doha', 'is-snow-dunes-theme-park-worth-it-doha',
    'is-education-city-tour-worth-it-doha', 'is-desert-falls-water-park-worth-it-doha',
    'is-olioli-childrens-museum-worth-it-doha', 'is-souq-waqif-walking-tour-worth-it-doha',
    'is-golden-hour-photography-tour-worth-it-doha', 'is-layover-tour-worth-it-doha',
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
    'how-much-should-a-private-tour-guide-cost-in-male',
    'maldives-submarine-tour-guide', 'male-atoll-surf-trip-guide',
    'island-to-island-zipline-adventure-guide',
    'is-maldivian-food-experience-worth-it-male', 'is-cat-island-tour-worth-it-male',
    'is-male-city-tour-worth-it-male', 'is-parasailing-worth-it-male',
    'is-south-ari-atoll-diving-worth-it-male', 'is-shark-tank-diving-worth-it-male',
    'is-club-med-resort-day-pass-worth-it-male', 'is-big-game-fishing-charter-worth-it-male',
    'is-thulusdhoo-surf-trip-worth-it-male', 'is-villingili-walking-tour-worth-it-male',
    'is-underwater-restaurant-worth-it-male', 'is-submarine-tour-worth-it-male',
    'is-beach-bonfire-dinner-worth-it-male', 'is-hulhumale-kayak-tour-worth-it-male',
  ].map(slug => ({
    url: `${BASE_URL}/maldives/male/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Uzbekistan info pages (2026-11-12)
  const samarkandInfoPages = [
    'best-tours-in-samarkand', 'best-registan-walking-tour-samarkand',
    'best-plov-cooking-class-samarkand',
    'is-bread-baking-worth-it-samarkand', 'is-jewish-legacy-tour-worth-it-samarkand',
    'is-seven-lakes-tour-worth-it-samarkand', 'is-winemaking-tour-worth-it-samarkand',
    'is-registan-night-tour-worth-it-samarkand', 'is-shakhrisabz-day-trip-worth-it-samarkand',
    'is-imam-al-bukhari-complex-worth-it-samarkand', 'is-bike-tour-worth-it-samarkand',
    'is-legend-of-love-show-worth-it-samarkand', 'is-astronomical-heritage-tour-worth-it-samarkand',
    'is-horseback-riding-worth-it-samarkand', 'is-handmade-paper-making-worth-it-samarkand',
    'is-shahi-zinda-guided-tour-worth-it-samarkand', 'is-moonlight-tour-worth-it-samarkand',
    'is-tea-heritage-walk-worth-it-samarkand', 'is-street-food-walking-tour-worth-it-samarkand',
  ].map(slug => ({
    url: `${BASE_URL}/uzbekistan/samarkand/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const tashkentInfoPages = [
    'best-tours-in-tashkent', 'best-chimgan-mountain-tour-tashkent',
    'is-metro-tour-worth-it-tashkent', 'is-plov-samsa-cooking-class-worth-it-tashkent',
    'is-solar-furnace-tour-worth-it-tashkent', 'is-fergana-valley-tour-worth-it-tashkent',
    'is-old-city-walking-tour-worth-it-tashkent', 'is-tv-tower-worth-it-tashkent',
    'is-culinary-tour-worth-it-tashkent',
    'is-pottery-masterclass-worth-it-tashkent', 'is-embroidery-masterclass-worth-it-tashkent',
    'is-islamic-civilization-center-worth-it-tashkent', 'is-lashkerak-forest-hike-worth-it-tashkent',
    'is-audio-theater-walking-tour-worth-it-tashkent', 'is-city-night-tour-with-dinner-photography-worth-it-tashkent',
    'is-bread-baking-class-worth-it-tashkent', 'is-andijan-market-food-tour-worth-it-tashkent',
  ].map(slug => ({
    url: `${BASE_URL}/uzbekistan/tashkent/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const bukharaInfoPages = [
    'best-tours-in-bukhara', 'best-old-town-walking-tour-bukhara',
    'is-plov-workshop-worth-it-bukhara', 'is-folklore-fashion-show-worth-it-bukhara',
    'is-puppet-making-workshop-worth-it-bukhara', 'is-gold-embroidery-workshop-worth-it-bukhara',
    'is-chor-bakr-countryside-tour-worth-it-bukhara', 'is-hammam-bath-worth-it-bukhara',
    'is-wood-carving-masterclass-worth-it-bukhara', 'is-gijduvan-pottery-workshop-worth-it-bukhara',
    'is-miniature-painting-workshop-worth-it-bukhara', 'is-carpet-making-workshop-worth-it-bukhara',
    'is-desert-safari-emirs-palace-worth-it-bukhara', 'is-bread-making-class-worth-it-bukhara',
  ].map(slug => ({
    url: `${BASE_URL}/uzbekistan/bukhara/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const khivaInfoPages = [
    'best-tours-in-khiva', 'best-itchan-kala-walking-tour-khiva',
    'is-cooking-class-worth-it-khiva',
    'best-desert-fortresses-tour-khiva', 'is-ceramic-tile-workshop-worth-it-khiva',
    'is-wood-carving-masterclass-worth-it-khiva', 'is-savitsky-museum-tour-worth-it-khiva',
    'is-aral-sea-ship-cemetery-tour-worth-it-khiva', 'is-miniature-painting-workshop-worth-it-khiva',
    'is-shivit-oshi-cooking-class-worth-it-khiva', 'is-japanese-language-walking-tour-worth-it-khiva',
  ].map(slug => ({
    url: `${BASE_URL}/uzbekistan/khiva/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const kathmanduInfoPages = [
    'best-everest-base-camp-trek-kathmandu', 'best-everest-base-camp-helicopter-tour-kathmandu',
    'best-kathmandu-durbar-square-tour-kathmandu', 'best-pashupatinath-boudhanath-tour-kathmandu',
    'best-swayambhunath-monkey-temple-tour-kathmandu', 'best-bhaktapur-durbar-square-tour-kathmandu',
    'best-patan-durbar-square-tour-kathmandu', 'best-nagarkot-sunrise-tour-kathmandu',
    'best-chitwan-jungle-safari-tour-kathmandu', 'best-paragliding-tour-kathmandu',
    'best-river-rafting-tour-kathmandu', 'best-annapurna-base-camp-trek-kathmandu',
    'best-langtang-valley-trek-kathmandu', 'best-poon-hill-trek-kathmandu',
    'best-mustang-tour-kathmandu', 'best-manaslu-circuit-trek-kathmandu',
    'best-nepali-cooking-class-kathmandu', 'best-yoga-meditation-retreat-kathmandu',
    'best-chandragiri-cable-car-tour-kathmandu', 'best-kathmandu-valley-sightseeing-tour-kathmandu',
    'best-shivapuri-hiking-tour-kathmandu', 'best-pottery-workshop-kathmandu',
    'is-dakshinkali-pharping-tour-worth-it-kathmandu', 'is-thamel-pub-crawl-worth-it-kathmandu',
    'is-momo-masterclass-worth-it-kathmandu', 'is-budhanilkantha-temple-tour-worth-it-kathmandu',
    'is-everest-mountain-flight-worth-it-kathmandu', 'is-bungee-jumping-worth-it-kathmandu',
    'is-street-food-tour-worth-it-kathmandu', 'is-rock-climbing-worth-it-kathmandu',
    'is-luxury-spa-worth-it-kathmandu',
    'is-annapurna-base-camp-trek-worth-it-kathmandu', 'is-annapurna-circuit-trek-worth-it-kathmandu',
    'is-langtang-trek-worth-it-kathmandu', 'is-chitwan-safari-worth-it-kathmandu',
    'is-bardiya-tiger-safari-worth-it-kathmandu', 'is-chandragiri-cable-car-worth-it-kathmandu',
    'is-newari-cooking-class-worth-it-kathmandu', 'is-ayurveda-retreat-worth-it-kathmandu',
    'is-yoga-teacher-training-worth-it-kathmandu',
    'is-everest-base-camp-trek-worth-it-kathmandu', 'is-everest-helicopter-tour-worth-it-kathmandu',
    'is-manaslu-circuit-trek-worth-it-kathmandu', 'is-upper-mustang-trek-worth-it-kathmandu',
    'is-mount-kailash-kora-worth-it-kathmandu', 'is-rickshaw-tour-worth-it-kathmandu',
    'is-rafting-safari-trek-worth-it-kathmandu',
    'is-patan-durbar-square-tour-worth-it-kathmandu', 'is-pashupatinath-boudhanath-tour-worth-it-kathmandu',
    'is-gokyo-lakes-trek-worth-it-kathmandu', 'is-island-peak-climbing-worth-it-kathmandu',
    'is-swayambhunath-tour-worth-it-kathmandu', 'is-namobuddha-monastery-hike-worth-it-kathmandu',
    'is-shivapuri-national-park-hike-worth-it-kathmandu', 'is-nagarkot-dhulikhel-namobuddha-trek-worth-it-kathmandu',
    'is-khukuri-forging-demo-worth-it-kathmandu', 'is-nagarkot-zipline-worth-it-kathmandu',
    'is-nepali-cinema-tour-worth-it-kathmandu', 'is-kite-flying-experience-worth-it-kathmandu',
    'is-himalayan-honey-tasting-worth-it-kathmandu', 'is-yomari-making-class-worth-it-kathmandu',
    'is-home-brewing-experience-worth-it-kathmandu', 'is-jamacho-hike-worth-it-kathmandu',
    'is-cultural-dinner-show-worth-it-kathmandu', 'is-ason-bazaar-food-walk-worth-it-kathmandu',
    'is-kirtipur-heritage-tour-worth-it-kathmandu', 'is-shaman-consultation-worth-it-kathmandu',
  ].map(slug => ({
    url: `${BASE_URL}/nepal/kathmandu/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const tbilisiInfoPages = [
    'best-kazbegi-day-tour-tbilisi', 'best-kakheti-wine-tour-tbilisi',
    'best-old-town-walking-tour-tbilisi', 'best-mtskheta-jvari-day-trip-tbilisi',
    'best-gori-uplistsikhe-day-trip-tbilisi', 'best-david-gareja-monastery-tour-tbilisi',
    'best-chronicles-of-georgia-tour-tbilisi', 'best-horseback-riding-tour-tbilisi',
    'best-vardzia-borjomi-day-trip-tbilisi', 'best-georgian-cooking-class-tbilisi',
    'best-mtatsminda-park-tour-tbilisi', 'best-rafting-tour-tbilisi',
    'best-air-balloon-ride-tbilisi', 'best-tusheti-tour-tbilisi',
    'best-sulfur-bath-experience-tbilisi', 'best-bike-tour-tbilisi',
    'tbilisi-travel-guide-2026', 'best-time-to-visit-tbilisi',
    'tbilisi-1-day-itinerary', 'georgia-visa-guide-for-tourists',
    'best-gudauri-ski-tour-tbilisi', 'best-paragliding-tour-tbilisi',
    'is-birtvisi-canyon-tour-worth-it-tbilisi', 'is-fishing-tour-worth-it-tbilisi',
    'is-dashbashi-canyon-tour-worth-it-tbilisi',
    'is-urbex-tour-worth-it-tbilisi', 'is-khevsureti-jeep-tour-worth-it-tbilisi',
    'is-rock-climbing-worth-it-tbilisi',
    'is-dmanisi-archeology-tour-worth-it-tbilisi', 'is-chiatura-cable-cars-tour-worth-it-tbilisi',
    'is-electric-mountain-biking-worth-it-tbilisi',
    'is-mtskheta-jvari-tour-worth-it-tbilisi', 'is-ananuri-gudauri-kazbegi-tour-worth-it-tbilisi',
    'is-kakheti-wine-tour-worth-it-tbilisi', 'is-armenia-day-trip-worth-it-tbilisi',
    'is-chronicles-of-georgia-tour-worth-it-tbilisi',
    'is-khachapuri-food-tour-worth-it-tbilisi', 'is-gori-stalin-museum-tour-worth-it-tbilisi',
    'is-birtvisi-rock-climbing-worth-it-tbilisi',
    'is-soviet-underworld-tour-worth-it-tbilisi', 'is-khinkali-workshop-worth-it-tbilisi',
    'is-stalin-printing-house-tour-worth-it-tbilisi', 'is-park-of-achievements-tour-worth-it-tbilisi',
  ].map(slug => ({
    url: `${BASE_URL}/georgia/tbilisi/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const muscatInfoPages = [
    'best-wahiba-sands-desert-tour-muscat', 'best-dolphin-watching-tour-muscat',
    'best-sultan-qaboos-grand-mosque-tour-muscat', 'best-nizwa-jebel-akhdar-day-trip-muscat',
    'best-jebel-akhdar-overnight-tour-muscat', 'best-jebel-shams-grand-canyon-tour-muscat',
    'best-wadi-shab-tour-muscat', 'best-daymaniyat-islands-snorkeling-tour-muscat',
    'best-scuba-diving-tour-muscat', 'best-fishing-trip-muscat',
    'best-kayaking-tour-muscat', 'best-overnight-camping-trip-muscat',
    'best-bimmah-sinkhole-tour-muscat', 'best-horse-riding-tour-muscat',
    'best-quad-biking-tour-muscat', 'best-city-tour-muscat',
    'best-nakhal-fort-hot-springs-tour-muscat', 'best-sunset-dhow-cruise-muscat',
    'best-wadi-bani-awf-bilad-sayt-tour-muscat', 'best-muttrah-souq-tour-muscat',
    'is-bandar-khayran-island-hopping-worth-it-muscat', 'is-amouage-grand-mosque-tour-worth-it-muscat',
    'is-ras-al-jinz-turtle-reserve-worth-it-muscat', 'is-dubai-muscat-road-trip-worth-it',
    'is-barka-nakhal-rustaq-tour-worth-it-muscat',
    'is-omani-home-dinner-worth-it-muscat', 'is-coral-gardens-snorkeling-worth-it-muscat',
    'is-jabal-shams-sunrise-tour-worth-it-muscat', 'is-wadi-al-abyad-wakan-tour-worth-it-muscat',
    'is-wakeboarding-worth-it-muscat', 'is-parasailing-worth-it-muscat',
    'is-omani-food-tour-worth-it-muscat', 'is-secret-coves-villages-souqs-tour-worth-it-muscat',
  ].map(slug => ({
    url: `${BASE_URL}/oman/muscat/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const mapInfoSlugs = (slugs: string[], countryPath: string, cityPath: string) =>
    slugs.map(slug => ({
      url: `${BASE_URL}/${countryPath}/${cityPath}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  const yerevanInfoPages = mapInfoSlugs([
    'best-garni-geghard-tour-yerevan', 'best-lake-sevan-tour-yerevan',
    'best-khor-virap-tour-yerevan', 'best-wine-tasting-tour-yerevan',
    'best-tatev-monastery-tour-yerevan', 'best-noravank-tour-yerevan',
    'is-yerevan-old-town-tour-worth-it', 'best-brandy-tasting-tour-yerevan',
    'best-cooking-class-yerevan', 'best-mount-aragats-hiking-tour-yerevan',
    'best-horseback-riding-tour-yerevan',
    'yerevan-travel-guide-2026', 'best-time-to-visit-yerevan',
    'yerevan-1-day-itinerary', 'armenia-visa-guide-for-tourists',
    'yerevan-food-guide', 'is-yerevan-safe', 'yerevan-currency-guide',
    'yerevan-public-transport-guide', 'yerevan-shopping-guide',
    'best-birds-cave-tour-yerevan', 'best-ski-resort-tour-yerevan',
    'is-khachkar-crafting-worth-it-yerevan', 'is-havuts-tar-hiking-worth-it-yerevan',
    'is-carpet-museum-tour-worth-it-yerevan', 'is-pottery-workshop-worth-it-yerevan',
    'is-climbing-mount-ararat-worth-it-yerevan', 'is-etchmiadzin-tour-worth-it-yerevan',
    'is-erebuni-matenadaran-tour-worth-it-yerevan',
    'is-trchkan-waterfall-4x4-worth-it-yerevan', 'is-urbex-observatory-tour-worth-it-yerevan',
    'is-lavash-baking-class-worth-it-yerevan', 'is-taste-of-yerevan-tour-worth-it-yerevan',
    'is-mother-armenia-wwii-tour-worth-it-yerevan', 'is-kond-neighborhood-walking-tour-worth-it-yerevan',
    'is-carpet-factory-weaving-workshop-worth-it-yerevan', 'is-letter-writing-ritual-worth-it-yerevan',
  ], 'armenia', 'yerevan');
  const petraInfoPages = mapInfoSlugs([
    'best-petra-day-tour-from-amman', 'best-petra-wadi-rum-2-day-tour',
    'best-multi-day-jordan-highlights-tour', 'best-private-petra-guide-tour',
    'best-petra-monastery-hike-tour', 'is-little-petra-worth-it',
    'is-golf-cart-tour-worth-it-petra', 'is-utv-tour-worth-it-petra',
    'best-petra-photography-tour', 'is-cooking-class-worth-it-petra',
    'best-dana-to-petra-trek', 'is-helicopter-tour-worth-it-petra',
    'best-petra-dead-sea-day-trip', 'best-petra-tour-from-aqaba',
    'best-wadi-rum-jeep-tour-from-petra', 'petra-travel-guide-2026',
    'best-time-to-visit-petra', 'how-many-days-for-petra',
    'petra-entrance-fee-guide', 'jordan-visa-guide-for-tourists',
    'best-petra-hidden-route-tour-petra', 'is-petra-museum-tour-worth-it-petra',
    'best-petra-beyond-the-ruins-experience-petra',
    'is-shobak-castle-tour-worth-it-petra',
    'is-sand-art-experience-worth-it-petra',
  ], 'jordan', 'petra');
  const ammanInfoPages = mapInfoSlugs([
    'best-dead-sea-day-trip-tour-amman', 'best-jerash-day-trip-tour-amman',
    'best-citadel-walking-tour-amman', 'best-desert-castles-tour-amman',
    'best-madaba-mount-nebo-tour-amman', 'best-helicopter-tour-amman',
    'best-food-tour-amman', 'best-craft-workshop-amman',
    'is-hammam-spa-experience-worth-it-amman', 'best-petra-day-trip-from-amman',
    'is-as-salt-day-trip-worth-it-amman', 'is-wadi-mujib-canyon-hike-worth-it-amman',
    'is-baptism-site-tour-worth-it-amman', 'is-pink-lake-crystal-beach-tour-worth-it-amman',
    'amman-travel-guide-2026', 'best-time-to-visit-amman',
    'amman-1-day-itinerary', 'is-amman-safe',
    'amman-food-guide', 'amman-to-petra-guide',
    'is-cave-of-seven-sleepers-tour-worth-it-amman', 'is-qasr-al-abd-tour-worth-it-amman',
    'is-dabke-dance-class-worth-it-amman',
    'is-perfume-workshop-worth-it-amman', 'is-embroidery-class-worth-it-amman',
    'is-arabic-class-worth-it-amman', 'is-kintsugi-pottery-workshop-worth-it-amman',
    'is-raku-pottery-workshop-worth-it-amman', 'is-stained-glass-workshop-worth-it-amman',
    'is-dead-sea-soap-wellness-class-worth-it-amman', 'is-decapolis-route-tour-worth-it-amman',
  ], 'jordan', 'amman');
  const aqabaInfoPages = mapInfoSlugs([
    'best-wadi-rum-half-day-jeep-tour-aqaba', 'best-wadi-rum-full-day-jeep-tour-aqaba',
    'best-wadi-rum-overnight-camp-tour-aqaba', 'best-wadi-rum-sandboarding-tour-aqaba',
    'best-wadi-rum-camel-ride-tour-aqaba', 'is-wadi-rum-stargazing-worth-it-aqaba',
    'best-wadi-rum-hiking-tour-aqaba', 'is-wadi-rum-hot-air-balloon-worth-it-aqaba',
    'best-scuba-diving-tour-aqaba', 'best-snorkeling-tour-aqaba',
    'best-sunset-cruise-tour-aqaba', 'is-aqaba-flyboard-worth-it',
    'best-aqaba-to-wadi-rum-day-trip', 'is-wadi-al-mujib-dead-sea-tour-worth-it-aqaba',
    'aqaba-travel-guide-2026', 'best-time-to-visit-aqaba',
    'is-aqaba-safe', 'aqaba-diving-guide',
    'aqaba-food-guide', 'aqaba-to-petra-guide',
    'is-jet-ski-worth-it-aqaba', 'is-heritage-walking-tour-worth-it-aqaba',
    'is-zipline-desert-jeep-worth-it-aqaba', 'is-buggy-ride-worth-it-aqaba',
    'is-wadi-sabat-trek-worth-it-aqaba', 'is-jebel-rum-summit-climb-worth-it-aqaba',
  ], 'jordan', 'aqaba');
  const bakuInfoPages = mapInfoSlugs([
    'best-gobustan-tour-baku', 'best-old-city-walking-tour-baku',
    'best-ateshgah-yanar-dag-tour-baku', 'best-caspian-sea-boat-tour-baku',
    'best-city-tour-baku', 'best-highland-park-tour-baku',
    'is-maidens-tower-tour-worth-it-baku', 'is-shamakhi-day-trip-worth-it-baku',
    'is-azerbaijan-multiday-tour-worth-it-baku',
    'baku-travel-guide-2026', 'best-time-to-visit-baku',
    'baku-1-day-itinerary', 'azerbaijan-visa-guide-for-tourists',
    'is-baku-safe', 'baku-food-guide',
    'baku-currency-guide', 'baku-public-transport-guide',
    'baku-shopping-guide', 'baku-nightlife-guide', 'baku-weather-guide',
    'best-gabala-tour-baku', 'is-carpet-museum-worth-it-baku',
    'best-khinalug-lahij-village-tour-baku', 'best-quba-shahdag-tour-baku',
    'is-ganja-day-trip-worth-it-baku',
    'is-windsurfing-wakeboarding-worth-it-baku', 'is-balloon-adventure-worth-it-baku',
    'is-yacht-tour-worth-it-baku', 'is-paragliding-worth-it-baku',
    'is-massage-spa-worth-it-baku', 'is-pink-lake-beshbarmag-tour-worth-it-baku',
  ], 'azerbaijan', 'baku');
  const singaporeInfoPages = mapInfoSlugs([
    'best-gardens-by-the-bay-tour-singapore', 'best-chinatown-walking-tour-singapore',
    'best-night-safari-tour-singapore', 'best-night-river-cruise-singapore',
    'best-sentosa-tour-singapore', 'best-food-tour-singapore',
    'best-little-india-tour-singapore', 'best-marina-bay-sands-skypark-tour-singapore',
    'best-cable-car-tour-singapore', 'best-botanic-gardens-tour-singapore',
    'best-singapore-zoo-tour-singapore', 'is-universal-studios-singapore-worth-it',
    'best-bird-paradise-tour-singapore',
    'singapore-travel-guide-2026', 'best-time-to-visit-singapore',
    'singapore-1-day-itinerary', 'singapore-3-day-itinerary',
    'singapore-visa-guide-for-tourists', 'singapore-public-transport-guide',
    'singapore-food-guide', 'is-singapore-expensive',
    'best-bike-tour-singapore', 'best-wings-of-time-cable-car-tour-singapore',
    'best-merlion-civic-district-walking-tour-singapore',
    'is-jewel-changi-tour-worth-it-singapore', 'is-level33-rooftop-brewery-tour-worth-it-singapore',
    'is-adventure-cove-waterpark-worth-it-singapore',
    'best-river-wonders-night-safari-combo-singapore',
    'is-hop-on-hop-off-bus-worth-it-singapore', 'is-katong-joo-chiat-tour-worth-it-singapore',
    'is-art-jamming-worth-it-singapore',
    'is-batam-day-trip-worth-it-singapore',
    'is-pulau-ubin-cycling-tour-worth-it-singapore', 'is-firewalking-worth-it-singapore',
    'is-punggol-kayak-tour-worth-it-singapore', 'is-peranakan-culture-tour-worth-it-singapore',
  ], 'singapore', 'singapore');
  const luangPrabangInfoPages = mapInfoSlugs([
    'best-kuang-si-waterfall-tour-luang-prabang', 'best-alms-giving-ceremony-tour-luang-prabang',
    'best-mekong-sunset-cruise-luang-prabang', 'best-pak-ou-caves-tour-luang-prabang',
    'best-cooking-class-luang-prabang', 'best-food-tour-luang-prabang',
    'best-nong-khiaw-trek-camping-tour-luang-prabang', 'best-slow-boat-transfer-luang-prabang',
    'best-city-heritage-tour-luang-prabang', 'is-weaving-craft-workshop-worth-it-luang-prabang',
    'best-village-trekking-tour-luang-prabang', 'is-paramotor-flight-worth-it-luang-prabang',
    'best-private-full-day-tour-luang-prabang',
    'luang-prabang-travel-guide-2026', 'best-time-to-visit-luang-prabang',
    'luang-prabang-1-day-itinerary', 'laos-visa-guide-for-tourists',
    'luang-prabang-food-guide', 'is-luang-prabang-safe',
    'luang-prabang-alms-giving-etiquette-guide',
    'is-monk-talk-meditation-tour-worth-it-luang-prabang', 'is-vintage-electric-car-ride-worth-it-luang-prabang',
    'is-natural-soap-making-workshop-worth-it-luang-prabang', 'is-krathong-making-sunset-cruise-worth-it-luang-prabang',
    'is-fishing-picnic-worth-it-luang-prabang', 'is-buffalo-tour-worth-it-luang-prabang',
    'is-traditional-costume-photoshoot-worth-it-luang-prabang', 'is-coffee-farm-roasting-tour-worth-it-luang-prabang',
    'is-rice-farming-tour-worth-it-luang-prabang',
  ], 'laos', 'luang-prabang');
  const riyadhInfoPages = mapInfoSlugs([
    'best-edge-of-the-world-tour-riyadh', 'best-desert-safari-tour-riyadh',
    'best-old-riyadh-walking-tour-riyadh', 'best-city-tour-riyadh',
    'best-national-museum-tour-riyadh', 'best-diriyah-tour-riyadh',
    'best-horseback-riding-tour-riyadh', 'best-red-sand-dunes-tour-riyadh',
    'best-architecture-tour-riyadh', 'best-shaqra-ushaiqer-tour-riyadh',
    'is-riyadh-snow-city-worth-it', 'is-riyadh-virtual-reality-experience-worth-it',
    'is-desert-falconry-experience-worth-it-riyadh', 'is-nofa-wildlife-park-safari-worth-it-riyadh',
    'is-night-stargazing-experience-worth-it-riyadh', 'is-bedouin-desert-experience-worth-it-riyadh',
    'riyadh-travel-guide-2026', 'best-time-to-visit-riyadh',
    'riyadh-1-day-itinerary', 'saudi-arabia-visa-guide-for-tourists',
    'is-riyadh-safe', 'riyadh-food-guide',
    'riyadh-public-transport-guide',
    'best-king-khalid-reserve-cycling-tour-riyadh', 'is-riyadh-boulevard-world-tour-worth-it',
    'best-al-dahna-desert-tour-riyadh', 'is-tuwaiq-mountains-tour-worth-it-riyadh',
    'best-riyadh-local-culture-experience-riyadh',
    'is-food-trail-tour-worth-it-riyadh',
    'is-paragliding-buggy-adventure-worth-it-riyadh', 'is-misk-institute-art-tour-worth-it-riyadh',
    'is-masmak-fort-souq-tour-worth-it-riyadh', 'is-farm-adventure-atv-horse-worth-it-riyadh',
    'is-vip-city-tour-saudi-cuisine-worth-it-riyadh', 'is-kingdom-tower-faisaliah-tour-worth-it-riyadh',
  ], 'saudi-arabia', 'riyadh');

  const jeddahInfoPages = mapInfoSlugs([
    'best-al-balad-walking-tour-jeddah', 'best-bayada-island-boat-trip-jeddah',
    'best-taif-day-trip-jeddah', 'best-desert-safari-tour-jeddah',
    'best-red-sea-boat-tour-jeddah', 'best-snorkeling-diving-tour-jeddah',
    'is-moon-mountain-hike-worth-it-jeddah', 'is-teamlab-borderless-jeddah-worth-it',
    'best-jeddah-city-tour', 'is-mecca-day-trip-worth-it-from-jeddah',
    'is-jeddah-stargazing-camp-worth-it', 'is-pottery-workshop-worth-it-jeddah',
    'is-paddleboarding-worth-it-jeddah', 'is-museum-of-islamic-art-worth-it-jeddah',
    'jeddah-travel-guide-2026', 'best-time-to-visit-jeddah',
    'jeddah-1-day-itinerary', 'is-jeddah-safe',
    'jeddah-dress-code-guide', 'jeddah-food-guide',
    'is-jet-car-ride-worth-it-jeddah',
    'is-scuba-certification-course-worth-it-jeddah', 'is-local-woman-guided-tour-worth-it-jeddah',
    'is-floating-mosque-al-balad-tour-worth-it-jeddah',
  ], 'saudi-arabia', 'jeddah');
  const alulaInfoPages = mapInfoSlugs([
    'best-hegra-tour-alula', 'best-dadan-jabal-ikmah-tour-alula',
    'best-old-town-tour-alula', 'is-elephant-rock-tour-worth-it-alula',
    'is-maraya-experience-worth-it-alula', 'best-desert-4x4-tour-alula',
    'best-multi-day-tour-alula', 'best-madinah-to-alula-tour',
    'is-hot-air-balloon-worth-it-alula', 'best-oasis-cultural-experience-alula',
    'is-desert-dinner-safari-worth-it-alula', 'is-private-guided-tour-worth-it-alula',
    'is-full-day-tour-worth-it-alula',
    'alula-travel-guide-2026', 'best-time-to-visit-alula',
    'alula-1-day-itinerary', 'is-alula-safe',
    'how-to-get-to-alula', 'alula-hegra-entrance-guide',
    'alula-dress-code-guide',
    'best-vintage-land-rover-tour-alula', 'is-kashta-coffee-workshop-worth-it-alula',
  ], 'saudi-arabia', 'alula');
  const vientianeInfoPages = mapInfoSlugs([
    'best-buddha-park-tour-vientiane', 'best-patuxai-that-luang-tour-vientiane',
    'best-city-tour-vientiane', 'best-food-tour-vientiane',
    'best-cooking-class-vientiane', 'best-mekong-river-cruise-vientiane',
    'best-temple-tour-vientiane', 'best-vang-vieng-day-trip-from-vientiane',
    'is-plain-of-jars-tour-worth-it-vientiane', 'is-bar-hopping-worth-it-vientiane',
    'is-hidden-island-trekking-worth-it-vientiane', 'is-traditional-costume-photo-tour-worth-it-vientiane',
    'vientiane-travel-guide-2026', 'best-time-to-visit-vientiane',
    'vientiane-1-day-itinerary', 'is-vientiane-safe',
    'vientiane-food-guide', 'vientiane-currency-guide',
    'vientiane-to-luang-prabang-guide', 'vientiane-public-transport-guide',
    'is-lao-art-museum-tuk-tuk-tour-worth-it-vientiane', 'is-traditional-lao-wedding-ceremony-worth-it-vientiane',
    'is-temple-bamboo-spiritual-tour-worth-it-vientiane',
  ], 'laos', 'vientiane');
  const vangViengInfoPages = mapInfoSlugs([
    'best-hot-air-balloon-tour-vang-vieng', 'best-blue-lagoon-tour-vang-vieng',
    'best-paramotor-tour-vang-vieng', 'best-kayaking-cave-tour-vang-vieng',
    'is-nam-song-tubing-worth-it-vang-vieng', 'is-village-trekking-worth-it-vang-vieng',
    'is-go-karting-worth-it-vang-vieng', 'is-paragliding-worth-it-vang-vieng',
    'is-climbing-worth-it-vang-vieng', 'is-food-tour-worth-it-vang-vieng',
    'is-cooking-class-worth-it-vang-vieng', 'is-motorcycle-tour-worth-it-vang-vieng',
    'best-multi-day-adventure-tour-vang-vieng', 'vang-vieng-travel-guide-2026',
    'best-time-to-visit-vang-vieng', 'vang-vieng-1-day-itinerary',
    'is-vang-vieng-safe', 'vang-vieng-tubing-safety-guide',
    'vang-vieng-food-guide', 'vang-vieng-nightlife-guide',
    'is-kayaking-zipline-blue-lagoon-worth-it-vang-vieng',
  ], 'laos', 'vang-vieng');

  const almatyInfoPages = mapInfoSlugs([
    'best-charyn-canyon-day-trip-almaty', 'best-2-day-charyn-kolsai-kaindy-tour-almaty',
    'best-big-almaty-lake-tour-almaty', 'best-altyn-emel-singing-dunes-tour-almaty',
    'best-city-tour-almaty', 'best-shymbulak-medeu-tour-almaty',
    'best-issyk-lake-turgen-gorge-tour-almaty', 'best-assy-plateau-tour-almaty',
    'is-almaty-paragliding-worth-it', 'is-almaty-rock-climbing-worth-it',
    'best-almaty-mountain-hiking-tour-almaty', 'is-almaty-private-dinner-worth-it',
    'is-almaty-shooting-tour-worth-it', 'almaty-travel-guide-2026',
    'best-time-to-visit-almaty', 'almaty-1-day-itinerary',
    'kazakhstan-visa-guide-for-tourists', 'is-almaty-safe',
    'almaty-food-guide', 'almaty-currency-guide',
    'is-kazakh-wine-masterclass-worth-it-almaty', 'best-almaty-evening-experience-almaty',
    'is-tanbaly-gorge-petroglyphs-tour-worth-it-almaty', 'is-wwii-soviet-history-tour-worth-it-almaty',
    'is-alpine-climbing-worth-it-almaty',
  ], 'kazakhstan', 'almaty');
  const ulaanbaatarInfoPages = mapInfoSlugs([
    'best-terelj-national-park-day-tour-ulaanbaatar', 'best-city-tour-ulaanbaatar',
    'best-hustai-national-park-tour-ulaanbaatar', 'best-gobi-desert-multi-day-tour-ulaanbaatar',
    'best-kharkhorin-central-mongolia-tour-ulaanbaatar', 'best-khuvsgul-lake-tour-ulaanbaatar',
    'best-horseback-riding-tour-ulaanbaatar', 'best-nomad-homestay-experience-ulaanbaatar',
    'is-cooking-class-worth-it-ulaanbaatar', 'is-eagle-hunting-tour-worth-it-ulaanbaatar',
    'is-shamanic-ceremony-worth-it-ulaanbaatar', 'is-market-tour-worth-it-ulaanbaatar',
    'is-bar-hopping-tour-worth-it-ulaanbaatar', 'is-walking-tour-worth-it-ulaanbaatar',
    'ulaanbaatar-travel-guide-2026', 'best-time-to-visit-ulaanbaatar',
    'ulaanbaatar-1-day-itinerary', 'mongolia-visa-guide-for-tourists',
    'ulaanbaatar-food-guide', 'ulaanbaatar-weather-guide',
    'best-2-day-terelj-horseback-tour-ulaanbaatar', 'best-gobi-desert-tour-ulaanbaatar',
    'is-hustai-national-park-tour-worth-it-ulaanbaatar', 'best-kharkhorin-tour-ulaanbaatar',
    'is-chinggis-khaan-museum-worth-it-ulaanbaatar', 'is-nomadic-cultural-show-worth-it-ulaanbaatar',
    'is-bogd-khan-mountain-hike-worth-it-ulaanbaatar', 'is-aglag-monastery-tour-worth-it-ulaanbaatar',
    'is-altai-horse-trek-worth-it-ulaanbaatar',
    'is-terelj-genghis-khan-statue-day-tour-worth-it-ulaanbaatar', 'is-gobi-desert-tour-worth-it-ulaanbaatar',
    'is-khuvsgul-lake-tour-worth-it-ulaanbaatar', 'is-kharkhorin-ancient-capital-tour-worth-it-ulaanbaatar',
    'is-cow-herding-experience-worth-it-ulaanbaatar', 'is-terelj-zipline-worth-it-ulaanbaatar',
  ], 'mongolia', 'ulaanbaatar');
  const jerusalemInfoPages = mapInfoSlugs([
    'best-old-city-tour-jerusalem', 'best-bethlehem-day-trip-jerusalem',
    'best-dead-sea-day-trip-jerusalem', 'is-western-wall-heritage-tour-worth-it-jerusalem',
    'is-city-of-david-mount-of-olives-worth-it-jerusalem', 'is-mamilla-mahane-yehuda-tour-worth-it-jerusalem',
    'is-judean-desert-jeep-tour-worth-it-jerusalem', 'is-dig-for-a-day-worth-it-jerusalem',
    'jerusalem-travel-guide-2026', 'best-time-to-visit-jerusalem',
    'jerusalem-1-day-itinerary', 'israel-visa-guide-for-tourists',
    'is-jerusalem-safe', 'jerusalem-dress-code-guide',
    'jerusalem-food-guide', 'jerusalem-public-transport-guide',
    'jerusalem-old-city-quarters-guide', 'jerusalem-to-tel-aviv-guide',
    'jerusalem-to-bethlehem-checkpoint-guide', 'is-old-city-night-tour-worth-it-jerusalem',
  ], 'israel', 'jerusalem');
  const telAvivInfoPages = mapInfoSlugs([
    'best-jaffa-old-city-tour-tel-aviv', 'best-carmel-market-food-tour-tel-aviv',
    'best-boat-cruise-tour-tel-aviv', 'best-bauhaus-white-city-tour-tel-aviv',
    'best-caesarea-haifa-acre-day-trip-tel-aviv', 'best-beach-activity-tel-aviv',
    'best-private-city-tour-tel-aviv', 'best-neve-tzedek-tour-tel-aviv',
    'is-masada-dead-sea-day-trip-worth-it-tel-aviv', 'is-golan-heights-day-trip-worth-it-tel-aviv',
    'is-wineries-tour-worth-it-tel-aviv', 'is-bethlehem-day-trip-worth-it-tel-aviv',
    'is-pub-crawl-worth-it-tel-aviv', 'is-coffee-culture-tour-worth-it-tel-aviv',
    'is-scavenger-hunt-worth-it-tel-aviv', 'tel-aviv-travel-guide-2026',
    'best-time-to-visit-tel-aviv', 'tel-aviv-1-day-itinerary',
    'is-tel-aviv-safe', 'tel-aviv-to-jerusalem-guide',
    'is-paragliding-worth-it-tel-aviv', 'is-private-bike-tour-worth-it-tel-aviv',
  ], 'israel', 'tel-aviv');
  const thimphuInfoPages = mapInfoSlugs([
    'best-3-day-bhutan-tour-thimphu', 'best-4-day-bhutan-tour-thimphu',
    'best-tigers-nest-multi-day-tour-thimphu', 'best-festival-tour-thimphu',
    'best-photography-tour-thimphu', 'is-thimphu-city-highlights-tour-worth-it',
    'is-punakha-dzong-day-trip-worth-it-thimphu', 'is-phajoding-monastery-hike-worth-it-thimphu',
    'is-traditional-craft-workshop-worth-it-thimphu', 'is-bhutan-helicopter-scenic-flight-worth-it',
    'is-national-dress-photoshoot-worth-it-thimphu', 'is-paro-to-thimphu-day-trip-worth-it',
    'thimphu-travel-guide-2026', 'best-time-to-visit-thimphu',
    'bhutan-visa-guide-for-tourists', 'bhutan-sustainable-development-fee-guide',
    'thimphu-food-guide', 'is-thimphu-safe',
    'thimphu-dress-code-guide', 'thimphu-weather-guide',
    'is-cooking-tour-worth-it-thimphu',
    'is-druk-path-trek-worth-it-thimphu', 'is-gangtey-tshechu-tour-worth-it-thimphu',
    'is-royal-highland-festival-tour-worth-it-thimphu', 'is-chilli-trail-tour-worth-it-thimphu',
    'is-dagala-thousand-lakes-trek-worth-it-thimphu',
  ], 'bhutan', 'thimphu');
  const paroInfoPages = mapInfoSlugs([
    'best-tigers-nest-hike-tour-paro', 'best-national-museum-tour-paro',
    'best-multi-day-bhutan-tour-paro', 'is-punakha-day-trip-worth-it-paro',
    'is-private-paro-car-tour-worth-it', 'is-chele-la-hike-worth-it-paro',
    'is-paro-walking-tour-worth-it', 'is-meditation-experience-worth-it-paro',
    'is-bhutan-birdwatching-worth-it', 'is-bumthang-owl-trek-worth-it',
    'paro-travel-guide-2026', 'best-time-to-visit-paro',
    'paro-1-day-itinerary', 'is-tigers-nest-hike-difficult',
    'paro-food-guide', 'paro-airport-guide',
    'how-many-days-for-bhutan', 'paro-dress-code-guide',
    'paro-weather-guide', 'paro-currency-and-money-guide',
  ], 'bhutan', 'paro');

  const kuwaitCityInfoPages = mapInfoSlugs([
    'best-desert-city-tour-kuwait-city', 'is-kuwait-private-city-tour-worth-it',
    'kuwait-city-travel-guide-2026', 'best-time-to-visit-kuwait-city',
    'is-kuwait-city-safe', 'is-kuwait-day-night-skyline-tour-worth-it',
  ], 'kuwait', 'kuwait-city');

  const manamaInfoPages = mapInfoSlugs([
    'best-pearling-path-tour-manama', 'best-city-desert-tour-manama',
    'is-bahrain-food-tasting-tour-worth-it-manama', 'manama-travel-guide-2026',
    'best-time-to-visit-manama', 'is-manama-safe',
    'best-boat-cruise-dinner-tour-manama', 'is-jarada-island-tour-worth-it-manama',
    'is-heritage-tour-worth-it-manama', 'is-sunset-horse-riding-worth-it-manama',
    'best-private-yacht-tour-manama',
  ], 'bahrain', 'manama');

  const baghdadInfoPages = mapInfoSlugs([
    'best-babylon-day-trip-baghdad', 'best-baghdad-city-tour-baghdad',
    'is-karbala-day-trip-worth-it-baghdad', 'baghdad-travel-guide-2026',
    'iraq-visa-guide-for-tourists',
    'is-ctesiphon-tour-worth-it-baghdad', 'best-samarra-hatra-mosul-tour-baghdad',
    'is-iraq-marshes-tour-worth-it-baghdad', 'is-ziggurat-of-ur-tour-worth-it-baghdad',
    'best-baghdad-landmark-tour-baghdad',
  ], 'iraq', 'baghdad');

  const beirutInfoPages = mapInfoSlugs([
    'best-jeita-grotto-tour-beirut', 'best-baalbek-day-trip-beirut',
    'is-cedars-of-god-tour-worth-it-beirut', 'beirut-travel-guide-2026',
    'lebanon-visa-guide-for-tourists',
    'best-walking-tour-beirut', 'best-chouf-mountains-tour-beirut',
    'is-bourj-hammoud-food-walk-worth-it-beirut', 'is-tripoli-day-trip-worth-it-beirut',
    'is-mount-lebanon-tour-worth-it-beirut',
  ], 'lebanon', 'beirut');

  const dilijanInfoPages = mapInfoSlugs([
    'best-wine-tasting-tour-dilijan', 'best-hiking-tour-dilijan',
    'is-molokans-village-tour-worth-it-dilijan', 'dilijan-travel-guide-2026',
    'best-time-to-visit-dilijan', 'is-gata-making-class-worth-it-dilijan',
  ], 'armenia', 'dilijan');

  const gyumriInfoPages = mapInfoSlugs([
    'best-architecture-tour-gyumri', 'is-gurdjieff-tour-worth-it-gyumri',
    'gyumri-travel-guide-2026', 'armenia-visa-guide-for-tourists-gyumri',
    'is-cooking-class-worth-it-gyumri',
  ], 'armenia', 'gyumri');

  const shekiInfoPages = mapInfoSlugs([
    'best-old-town-tour-sheki', 'best-day-trip-from-baku-sheki',
    'is-sheki-overnight-tour-worth-it', 'sheki-travel-guide-2026',
    'best-time-to-visit-sheki',
  ], 'azerbaijan', 'sheki');

  const astanaInfoPages = mapInfoSlugs([
    'best-city-tour-astana', 'is-burabay-national-park-tour-worth-it-astana',
    'astana-travel-guide-2026', 'best-time-to-visit-astana',
    'is-karlag-museum-tour-worth-it-astana',
    'is-horse-riding-stargazing-worth-it-astana',
  ], 'kazakhstan', 'astana');

  const shymkentInfoPages = mapInfoSlugs([
    'best-turkistan-tour-shymkent', 'is-city-tour-worth-it-shymkent',
    'is-aksu-canyon-tour-worth-it-shymkent',
  ], 'kazakhstan', 'shymkent');

  const khasabInfoPages = mapInfoSlugs([
    'best-dhow-cruise-khasab', 'best-musandam-adventure-tour-khasab',
    'khasab-travel-guide-2026',
    'is-scuba-diving-worth-it-khasab', 'is-city-tour-worth-it-khasab',
    'is-dhow-zipline-combo-worth-it-khasab', 'is-jabel-mountain-safari-worth-it-khasab',
  ], 'oman', 'khasab');

  const nizwaInfoPages = mapInfoSlugs([
    'best-nizwa-day-trip-nizwa', 'best-jebel-akhdar-tour-nizwa',
    'nizwa-travel-guide-2026',
    'is-cultural-cart-tour-worth-it-nizwa',
    'is-jabreen-bahla-castle-tour-worth-it-nizwa',
    'is-nizwa-fort-ticket-worth-it-nizwa', 'is-sayq-plateau-trek-worth-it-nizwa',
  ], 'oman', 'nizwa');

  const borjomiInfoPages = mapInfoSlugs([
    'best-borjomi-activity-tour-borjomi', 'best-bakuriani-ski-tour-borjomi',
    'borjomi-travel-guide-2026',
    'is-full-day-rafting-worth-it-borjomi',
    'is-vardzia-rabati-castle-tour-worth-it-borjomi',
  ], 'georgia', 'borjomi');

  const haifaInfoPages = mapInfoSlugs([
    'best-bahai-gardens-tour-haifa', 'is-nazareth-day-trip-worth-it-haifa',
    'haifa-travel-guide-2026',
  ], 'israel', 'haifa');

  const eilatInfoPages = mapInfoSlugs([
    'best-glass-bottom-boat-tour-eilat', 'best-desert-jeep-tour-eilat',
    'best-snorkeling-diving-tour-eilat', 'eilat-travel-guide-2026',
  ], 'israel', 'eilat');

  const pokharaInfoPages = mapInfoSlugs([
    'best-paragliding-tour-pokhara', 'best-sarangkot-sunrise-tour-pokhara',
    'best-annapurna-day-hike-pokhara', 'best-phewa-lake-tour-pokhara',
    'best-zipline-tour-pokhara', 'pokhara-travel-guide-2026',
    'best-time-to-visit-pokhara', 'pokhara-1-day-itinerary',
    'pokhara-vs-kathmandu-guide',
    'is-suspension-bridge-tour-worth-it-pokhara', 'is-atv-tour-worth-it-pokhara',
    'is-horseback-riding-worth-it-pokhara', 'best-chitwan-jungle-safari-tour-pokhara',
    'is-sarangkot-cable-car-worth-it-pokhara', 'is-poon-hill-trek-worth-it-pokhara',
    'is-mardi-himal-trek-worth-it-pokhara', 'is-annapurna-base-camp-from-pokhara-worth-it',
    'is-chitwan-safari-from-pokhara-worth-it', 'is-jomsom-muktinath-tour-worth-it-pokhara',
    'is-ghandruk-tour-worth-it-pokhara',
    'is-tilicho-lake-trek-worth-it-pokhara', 'is-australian-camp-hike-worth-it-pokhara',
    'is-world-peace-stupa-hike-worth-it-pokhara', 'is-kushma-bungee-worth-it-pokhara',
    'is-jomsom-scenic-flight-worth-it-pokhara', 'is-abc-helicopter-tour-worth-it-pokhara',
    'is-tal-barahi-temple-worth-it-pokhara', 'is-skydiving-worth-it-pokhara',
    'is-hot-air-balloon-worth-it-pokhara', 'is-ultralight-flight-worth-it-pokhara',
    'is-gupteshwor-cave-worth-it-pokhara', 'is-begnas-rupa-lake-tour-worth-it-pokhara',
    'is-seti-river-rafting-worth-it-pokhara',
    'is-thakali-dinner-worth-it-pokhara', 'is-phewa-lake-yoga-worth-it-pokhara',
    'is-royal-enfield-adventure-worth-it-pokhara', 'is-pokhara-bungee-worth-it-pokhara',
    'is-skyscreamer-swing-worth-it-pokhara', 'is-kahun-danda-hike-worth-it-pokhara',
    'is-momo-dal-bhat-class-worth-it-pokhara', 'is-night-walking-tour-worth-it-pokhara',
    'is-cultural-evening-dance-thali-worth-it-pokhara', 'is-harpan-danda-hike-worth-it-pokhara',
    'is-hidden-villages-cycling-tour-worth-it-pokhara', 'is-rupakot-twin-lakes-hike-worth-it-pokhara',
  ], 'nepal', 'pokhara');

  const batumiInfoPages = mapInfoSlugs([
    'best-walking-tour-batumi', 'best-martvili-canyon-tour-batumi',
    'best-wine-tasting-tour-batumi', 'is-batumi-jet-ski-worth-it',
    'batumi-travel-guide-2026', 'best-time-to-visit-batumi',
    'is-sunset-cruise-worth-it-batumi', 'is-khachapuri-cooking-class-worth-it-batumi',
    'is-machakhela-national-park-hike-worth-it-batumi',
    'is-shipwreck-boat-tour-worth-it-batumi', 'is-pub-crawl-worth-it-batumi',
    'is-turkey-sumela-day-trip-worth-it-batumi', 'is-mtirala-national-park-worth-it-batumi',
    'is-botanical-garden-tour-worth-it-batumi',
  ], 'georgia', 'batumi');

  const kutaisiInfoPages = mapInfoSlugs([
    'best-old-town-tour-kutaisi', 'best-monasteries-tour-kutaisi',
    'best-prometheus-cave-tour-kutaisi', 'is-tskaltubo-sanatoriums-tour-worth-it-kutaisi',
    'kutaisi-travel-guide-2026',
    'is-okatse-canyon-tour-worth-it-kutaisi', 'is-katskhi-pillar-tour-worth-it-kutaisi',
    'is-vani-sulfur-baths-tour-worth-it-kutaisi', 'is-racha-wine-tour-worth-it-kutaisi',
    'is-svaneti-tour-worth-it-kutaisi', 'is-gelati-motsameta-bagrati-tour-worth-it-kutaisi',
    'is-martvili-okatse-prometheus-combo-worth-it-kutaisi',
  ], 'georgia', 'kutaisi');

  const salalahInfoPages = mapInfoSlugs([
    'best-wadi-darbat-tour-salalah', 'best-empty-quarter-desert-safari-salalah',
    'best-dolphin-watching-tour-salalah', 'best-west-salalah-beach-tour-salalah',
    'is-frankincense-trail-tour-worth-it-salalah', 'best-city-tour-salalah',
    'salalah-travel-guide-2026', 'best-time-to-visit-salalah',
    'is-flyboard-experience-worth-it-salalah', 'is-horse-trek-worth-it-salalah',
    'is-jabal-samhan-atv-tour-worth-it-salalah',
    'is-kayaking-worth-it-salalah', 'is-mirbat-snorkeling-worth-it-salalah',
    'is-fishing-trip-worth-it-salalah', 'is-night-city-tour-worth-it-salalah',
    'is-east-salalah-tour-worth-it', 'is-jabal-samhan-via-ferrata-worth-it-salalah',
    'is-lost-city-of-ubar-tour-worth-it-salalah', 'is-surfboarding-worth-it-salalah',
    'is-ayn-ghedh-waterfall-hike-worth-it-salalah', 'is-dhofar-mountains-coffee-sunset-worth-it-salalah',
  ], 'oman', 'salalah');

  const bhaktapurInfoPages = mapInfoSlugs([
    'best-durbar-square-tour-bhaktapur', 'best-pottery-workshop-bhaktapur',
    'is-changunarayan-hike-worth-it-bhaktapur', 'is-bicycle-heritage-tour-worth-it-bhaktapur',
    'is-woodcarving-workshop-worth-it-bhaktapur', 'bhaktapur-travel-guide-2026',
    'is-pottery-curd-workshop-worth-it-bhaktapur', 'is-nagarkot-sunrise-bhaktapur-tour-worth-it',
  ], 'nepal', 'bhaktapur');

  const lumbiniInfoPages = mapInfoSlugs([
    'best-buddhas-birthplace-tour-lumbini', 'is-beyond-lumbini-tour-worth-it',
    'is-crane-watching-tour-worth-it-lumbini', 'lumbini-travel-guide-2026',
    'is-buddhist-monastery-retreat-worth-it-lumbini',
  ], 'nepal', 'lumbini');

  const kazbegiInfoPages = mapInfoSlugs([
    'best-gergeti-church-tour-kazbegi', 'best-gveleti-waterfall-hike-kazbegi',
    'is-truso-valley-tour-worth-it-kazbegi', 'best-horse-riding-tour-kazbegi',
    'kazbegi-travel-guide-2026',
    'is-mount-kazbek-climb-worth-it-kazbegi',
    'is-dariali-monastery-gveleti-waterfall-worth-it-kazbegi',
  ], 'georgia', 'kazbegi');

  const mestiaInfoPages = mapInfoSlugs([
    'best-ushguli-day-trip-mestia', 'best-chalaadi-glacier-tour-mestia',
    'best-koruldi-lakes-tour-mestia', 'mestia-travel-guide-2026',
    'is-heshkili-huts-tetnuldi-tour-worth-it-mestia',
    'is-shkhara-glacier-horseback-tour-worth-it-mestia',
  ], 'georgia', 'mestia');

  const wadiRumInfoPages = mapInfoSlugs([
    'best-jeep-tour-wadi-rum', 'best-overnight-camping-tour-wadi-rum',
    'best-camel-tour-wadi-rum', 'is-khazali-canyon-horseback-worth-it-wadi-rum',
    'wadi-rum-travel-guide-2026',
  ], 'jordan', 'wadi-rum');

  const pakseInfoPages = mapInfoSlugs([
    'best-wat-phou-tour-pakse', 'best-4000-islands-tour-pakse',
    'best-bolaven-plateau-tour-pakse', 'pakse-travel-guide-2026',
    'is-coffee-tasting-worth-it-pakse',
  ], 'laos', 'pakse');

  const nongKhiawInfoPages = mapInfoSlugs([
    'best-trekking-camping-tour-nong-khiaw', 'is-100-waterfalls-tour-worth-it-nong-khiaw',
    'nong-khiaw-travel-guide-2026',
    'is-rice-field-cycling-tour-worth-it-nong-khiaw',
  ], 'laos', 'nong-khiaw');

  const meccaInfoPages = mapInfoSlugs([
    'best-ziyarat-tour-mecca', 'best-jabal-al-nour-tour-mecca',
    'is-clock-tower-museum-worth-it-mecca', 'is-umrah-guidance-tour-worth-it-mecca',
    'mecca-travel-guide-2026',
  ], 'saudi-arabia', 'mecca');

  const medinaInfoPages = mapInfoSlugs([
    'best-ziyarah-tour-medina', 'is-uhud-battlefield-tour-worth-it-medina',
    'best-city-tour-medina', 'medina-travel-guide-2026',
  ], 'saudi-arabia', 'medina');

  // Philippines info pages (Manila + Cebu)
  const manilaInfoPages = [
    'best-time-to-visit-manila', 'things-to-do-in-manila', 'manila-travel-guide-2026',
    'manila-1-day-itinerary', 'philippines-visa-guide-for-tourists', 'intramuros-fort-santiago-guide',
    'manila-jeepney-guide', 'manila-food-guide', 'manila-to-boracay-travel',
    'manila-traffic-reality-guide', 'boracay-day-trip-guide', 'manila-3-day-itinerary',
    'taal-volcano-day-trip',
    'pagsanjan-falls-day-trip-guide', 'manila-binondo-chinatown-food-tour-guide',
    'manila-cooking-class-guide',
    'is-banaue-sagada-tour-worth-it-manila', 'is-filipino-cultural-dance-dinner-show-worth-it-manila',
    'is-villa-escudero-day-tour-worth-it-manila',
    'is-intramuros-walking-tour-worth-it-manila', 'is-hundred-islands-tour-worth-it-manila',
    'is-pampanga-hot-springs-tour-worth-it-manila', 'is-baguio-city-tour-worth-it-manila',
    'is-tagaytay-taal-day-trip-worth-it-manila', 'is-makati-rooftop-bar-hopping-worth-it-manila',
    'is-manila-ocean-park-worth-it-manila', 'is-bataan-wwii-memorial-tour-worth-it-manila',
    'is-pampanga-ube-farm-tour-worth-it-manila', 'is-zambales-island-hopping-worth-it-manila',
    'best-tours-in-manila',
    'is-fort-santiago-tour-worth-it-manila', 'is-dessert-museum-worth-it-manila',
    'is-manila-bay-night-cruise-worth-it-manila', 'is-tondo-walking-tour-worth-it-manila',
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
    'bantayan-island-day-trip-guide',
    'is-bohol-firefly-watching-worth-it-cebu', 'is-bohol-balicasag-dolphin-tour-worth-it-cebu',
    'is-anjo-world-snow-world-worth-it-cebu',
    'is-temple-of-leah-tour-worth-it-cebu', 'is-tops-sunset-tour-worth-it-cebu',
    'is-oslob-whale-shark-watching-worth-it-cebu', 'is-kawasan-falls-canyoneering-worth-it-cebu',
    'is-moalboal-sardine-run-worth-it-cebu', 'is-chocolate-hills-loboc-river-tour-worth-it-cebu',
    'is-bantayan-island-tour-worth-it-cebu', 'is-cebu-city-heritage-tour-worth-it',
    'is-las-casas-filipinas-worth-it-cebu', 'is-cebu-safari-park-worth-it-cebu',
    'is-padi-certification-worth-it-cebu', 'is-catch-cook-eat-worth-it-cebu',
    'best-tours-in-cebu',
    'is-osmena-casino-peak-tour-worth-it-cebu', 'is-heritage-local-market-tour-worth-it-cebu',
    'is-carbon-market-jeepney-tour-worth-it-cebu', 'is-pub-crawl-worth-it-cebu',
  ].map(slug => ({
    url: `${BASE_URL}/philippines/cebu/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const boracayInfoPages = [
    'is-island-hopping-worth-it-boracay', 'is-whale-shark-watching-worth-it-boracay',
    'is-paraw-sunset-sailing-worth-it-boracay', 'is-fire-dancing-show-worth-it-boracay',
    'is-helmet-diving-worth-it-boracay', 'is-parasailing-worth-it-boracay',
  ].map(slug => ({
    url: `${BASE_URL}/philippines/boracay/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const cameronHighlandsInfoPages = [
    'is-tea-plantation-tour-worth-it-cameron-highlands', 'is-mossy-forest-4wd-tour-worth-it-cameron-highlands',
    'is-rafflesia-trek-worth-it-cameron-highlands', 'is-coral-hill-adventure-worth-it-cameron-highlands',
  ].map(slug => ({
    url: `${BASE_URL}/malaysia/cameron-highlands/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const madabaInfoPages = [
    'is-madaba-mount-nebo-dead-sea-tour-worth-it', 'is-madaba-mosaic-workshop-worth-it',
    'is-umm-ar-rasas-tour-worth-it-madaba',
  ].map(slug => ({
    url: `${BASE_URL}/jordan/madaba/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const bengaluruInfoPages = [
    'is-city-guide-tour-worth-it-bengaluru', 'is-taj-mahal-flight-tour-worth-it-bengaluru',
  ].map(slug => ({
    url: `${BASE_URL}/india/bengaluru/${slug}`,
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
    'is-fantasea-show-worth-it-phuket', 'best-racha-islands-tour-phuket',
    'is-james-bond-island-tour-worth-it-phuket', 'is-phi-phi-shark-point-diving-worth-it-phuket',
    'is-coral-island-tour-worth-it-phuket', 'is-big-buddha-old-town-tour-worth-it-phuket',
    'is-andamanda-water-park-worth-it-phuket',
    'is-simon-cabaret-show-worth-it-phuket', 'is-similan-islands-tour-worth-it-phuket',
    'is-blue-elephant-cooking-class-worth-it-phuket', 'is-khao-sok-bamboo-rafting-worth-it-phuket',
    'is-muay-thai-class-worth-it-phuket', 'is-perfume-workshop-worth-it-phuket',
    'is-sunset-horse-riding-worth-it-phuket', 'is-hanuman-zipline-worth-it-phuket',
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
    'how-much-should-a-private-tour-guide-cost-in-kuala-lumpur',
    'best-petronas-towers-tour-kuala-lumpur',
    'best-genting-highlands-tour-kuala-lumpur', 'is-kuala-selangor-firefly-tour-worth-it-kuala-lumpur',
    'is-kl-bird-park-aquaria-tour-worth-it-kuala-lumpur',
    'best-cameron-highlands-tour-kuala-lumpur', 'is-escape-room-worth-it-kuala-lumpur',
    'is-batu-caves-tour-worth-it-kuala-lumpur', 'is-genting-highlands-day-trip-worth-it-kuala-lumpur',
    'is-malacca-day-trip-worth-it-kuala-lumpur', 'is-cameron-highlands-day-tour-worth-it-kuala-lumpur',
    'is-taman-negara-day-trip-worth-it-kuala-lumpur', 'is-white-water-rafting-worth-it-kuala-lumpur',
    'is-petronas-towers-ticket-worth-it-kuala-lumpur', 'is-sunway-lagoon-worth-it-kuala-lumpur',
    'is-night-heritage-food-walk-worth-it-kuala-lumpur', 'is-cooking-class-with-market-tour-worth-it-kuala-lumpur',
    'is-pewter-workshop-worth-it-kuala-lumpur', 'is-multi-faith-heritage-tour-worth-it-kuala-lumpur',
    'is-durian-academy-tour-worth-it-kuala-lumpur', 'is-kampung-baru-walking-tour-worth-it-kuala-lumpur',
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
    'how-much-should-a-private-tour-guide-cost-in-penang',
    'best-george-town-heritage-tour-penang',
    'best-street-food-tour-penang',
    'is-bujang-valley-tour-worth-it-penang', 'is-bukit-merah-orangutan-tour-worth-it-penang',
    'is-george-town-walking-tour-worth-it-penang', 'is-penang-food-tour-worth-it',
    'is-henna-walking-tour-worth-it-george-town', 'is-balik-pulau-tour-worth-it-penang',
    'is-spice-garden-cooking-class-worth-it-penang', 'is-heritage-costume-rental-worth-it-penang',
    'is-teluk-bahang-fishing-village-tour-worth-it-penang', 'is-umi-umi-dining-show-worth-it-penang',
  ].map(slug => ({
    url: `${BASE_URL}/malaysia/penang/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const langkawiInfoPages = [
    'langkawi-cable-car-guide', 'langkawi-duty-free-shopping',
    'best-kilim-geoforest-mangrove-tour-langkawi', 'best-island-hopping-tour-langkawi',
    'best-jet-ski-tour-langkawi', 'best-atv-waterfall-tour-langkawi',
    'is-underwater-world-worth-it-langkawi', 'is-parasailing-worth-it-langkawi',
    'is-entopia-by-night-worth-it-langkawi', 'is-jet-car-worth-it-langkawi',
    'is-kilim-geoforest-mangrove-tour-worth-it-langkawi', 'is-cable-car-worth-it-langkawi',
    'is-jet-ski-worth-it-langkawi', 'is-atv-waterfall-tour-worth-it-langkawi',
    'is-hidden-islands-cruise-worth-it-langkawi', 'is-gunung-raya-hike-worth-it-langkawi',
    'is-night-mangrove-safari-worth-it-langkawi', 'is-sunset-dinner-cruise-worth-it-langkawi',
    'is-organic-farm-cooking-class-worth-it-langkawi', 'is-birdwatching-tour-worth-it-langkawi',
  ].map(slug => ({
    url: `${BASE_URL}/malaysia/langkawi/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const malaccaInfoPages = [
    'malacca-unesco-heritage-guide', 'best-time-to-visit-malacca',
    'best-food-tour-malacca', 'is-river-cruise-trishaw-tour-worth-it-malacca',
    'is-bayou-lagoon-water-park-worth-it-malacca',
    'is-upside-down-house-worth-it-malacca', 'is-unesco-walking-tour-worth-it-malacca',
  ].map(slug => ({
    url: `${BASE_URL}/malaysia/malacca/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const kotaKinabaluInfoPages = [
    'mount-kinabalu-guide', 'kota-kinabalu-island-hopping',
    'best-mari-mari-cultural-village-tour-kota-kinabalu', 'best-island-hopping-tour-kota-kinabalu',
    'best-firefly-river-cruise-tour-kota-kinabalu', 'best-city-tour-kota-kinabalu',
    'best-tanjung-aru-kayaking-paddleboarding-tour-kota-kinabalu', 'best-island-snorkeling-tour-kota-kinabalu',
    'best-white-water-rafting-tour-kota-kinabalu', 'best-sunset-cruise-tour-kota-kinabalu',
    'best-kundasang-ranau-highlands-tour-kota-kinabalu', 'best-multiday-sabah-adventure-tour-kota-kinabalu',
    'best-catamaran-tour-kota-kinabalu', 'best-monsopiad-headhunter-village-tour-kota-kinabalu',
    'is-kokol-hill-paragliding-worth-it-kota-kinabalu', 'best-maragang-hill-hike-tour-kota-kinabalu',
    'best-moonbay-island-tour-kota-kinabalu', 'is-mengalum-deep-sea-fishing-worth-it-kota-kinabalu',
    'is-party-boat-tour-worth-it-kota-kinabalu', 'is-dreamers-island-worth-it-kota-kinabalu',
    'is-seawalking-tour-worth-it-kota-kinabalu', 'is-scuba-diving-worth-it-kota-kinabalu',
    'is-mantanani-island-worth-it-kota-kinabalu', 'is-proboscis-monkey-firefly-tour-worth-it-kota-kinabalu',
    'is-flavours-of-sabah-cooking-class-worth-it-kota-kinabalu',
    'is-walking-food-tour-worth-it-kota-kinabalu', 'is-blue-tear-river-tour-worth-it-kota-kinabalu',
    'is-mari-mari-cultural-village-worth-it-kota-kinabalu', 'is-mamutik-island-hopping-worth-it-kota-kinabalu',
    'is-kinabalu-view-fire-show-tour-worth-it-kota-kinabalu',
    'is-monsopiad-headhunter-village-worth-it-kota-kinabalu', 'is-mount-kinabalu-climb-worth-it-kota-kinabalu',
    'is-kampung-gipsi-worth-it-kota-kinabalu', 'is-tanjung-aru-sup-worth-it-kota-kinabalu',
  ].map(slug => ({
    url: `${BASE_URL}/malaysia/kota-kinabalu/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const kuchingInfoPages = [
    'is-sarawak-8-day-tour-worth-it-kuching',
    'best-semenggoh-orangutan-tour-kuching', 'best-bako-national-park-tour-kuching',
    'best-fairy-cave-tour-kuching', 'best-sarawak-cultural-village-tour-kuching',
    'best-sunset-river-cruise-kuching', 'best-bengoh-valley-tour-kuching',
    'is-kubah-night-frog-tour-worth-it-kuching', 'best-mangrove-firefly-tour-kuching',
    'best-longhouse-tour-kuching', 'is-rainforest-kayaking-worth-it-kuching',
    'best-food-crawl-tour-kuching', 'is-pub-crawl-worth-it-kuching',
    'is-coffee-tea-crawl-worth-it-kuching', 'is-half-day-city-tour-worth-it-kuching',
    'best-multi-day-sarawak-adventure-kuching', 'best-national-park-tour-kuching',
    'is-siniawan-night-market-worth-it-kuching', 'is-gula-apong-tour-worth-it-kuching',
    'is-weaving-workshop-worth-it-kuching',
    'is-bako-national-park-tour-worth-it-kuching',
    'is-gunung-gading-rafflesia-tour-worth-it-kuching', 'is-royal-cruise-show-worth-it-kuching',
    'is-tanjung-datu-national-park-worth-it-kuching', 'is-maludam-national-park-worth-it-kuching',
  ].map(slug => ({
    url: `${BASE_URL}/malaysia/kuching/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const johorBahruInfoPages = [
    'best-jetski-tour-johor-bahru',
    'best-hop-on-hop-off-tour-johor-bahru', 'best-private-city-tour-johor-bahru',
    'best-desaru-day-trip-johor-bahru', 'best-kluang-day-trip-johor-bahru',
    'best-buggy-tour-johor-bahru', 'best-kulai-charter-tour-johor-bahru',
    'johor-bahru-travel-guide-2026', 'best-time-to-visit-johor-bahru',
    'johor-bahru-to-singapore-guide', 'is-johor-bahru-safe',
    'johor-bahru-1-day-itinerary', 'johor-bahru-food-guide',
    'johor-bahru-public-transport-guide', 'johor-bahru-shopping-guide',
    'johor-bahru-weather-guide', 'johor-bahru-visa-guide-for-tourists',
    'johor-bahru-currency-and-money-guide', 'johor-bahru-hotels-guide',
    'johor-bahru-nightlife-guide',
  ].map(slug => ({
    url: `${BASE_URL}/malaysia/johor-bahru/${slug}`,
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
    'best-grand-palace-tour-bangkok', 'best-ayutthaya-day-trip-from-bangkok', 'best-bangkok-chinatown-food-tour',
    'best-chao-phraya-dinner-cruise-bangkok', 'is-calypso-cabaret-show-worth-it-bangkok',
    'is-grand-palace-wat-pho-tour-worth-it-bangkok', 'is-ayutthaya-day-trip-worth-it-bangkok',
    'is-death-railway-river-kwai-tour-worth-it-bangkok', 'is-chao-phraya-dinner-cruise-worth-it-bangkok',
    'is-baiyoke-sky-observation-deck-worth-it-bangkok',
    'bangkok-ancient-city-erawan-museum-tour', 'is-ethical-elephant-sanctuary-worth-it-bangkok',
    'is-damnoen-saduak-floating-market-worth-it-bangkok', 'is-jim-thompson-house-worth-it-bangkok',
    'is-muay-thai-match-worth-it-bangkok', 'is-wat-arun-canal-tour-worth-it-bangkok',
    'is-muay-thai-class-worth-it-bangkok', 'is-canal-boat-tour-wat-paknam-worth-it-bangkok',
    'is-heritage-walk-giant-swing-golden-mount-worth-it-bangkok', 'is-red-sky-rooftop-bar-worth-it-bangkok',
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
    'best-doi-inthanon-tour-chiang-mai', 'is-white-water-rafting-worth-it-chiang-mai',
    'is-muay-thai-training-worth-it-chiang-mai', 'is-night-tuk-tuk-food-tour-worth-it-chiang-mai',
    'is-doi-suthep-temple-tour-worth-it-chiang-mai', 'is-doi-inthanon-national-park-worth-it-chiang-mai',
    'is-elephant-jungle-sanctuary-worth-it-chiang-mai', 'is-atv-rafting-waterfall-combo-worth-it-chiang-mai',
    'is-chiang-rai-day-trip-worth-it-chiang-mai', 'is-khantoke-dinner-worth-it-chiang-mai',
    'is-thai-cooking-class-worth-it-chiang-mai', 'is-monk-chat-worth-it-chiang-mai',
    'is-muay-thai-match-worth-it-chiang-mai', 'is-sticky-waterfall-tour-worth-it-chiang-mai',
    'is-sky-hawk-zipline-worth-it-chiang-mai', 'is-ladyboy-cabaret-worth-it-chiang-mai',
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
    'is-art-in-paradise-worth-it-pattaya', 'is-jet-ski-worth-it-pattaya',
    'best-indoor-adrenaline-attraction-pattaya',
    'is-discover-scuba-diving-worth-it-pattaya', 'is-flyboard-experience-worth-it-pattaya',
    'is-coral-island-tour-worth-it-pattaya', 'is-alcazar-cabaret-show-worth-it-pattaya',
    'is-floating-market-tour-worth-it-pattaya', 'is-big-buddha-temple-night-market-tour-worth-it-pattaya',
    'is-elephant-jungle-sanctuary-worth-it-pattaya',
    'is-tiffanys-show-worth-it-pattaya', 'is-ramayana-water-park-worth-it-pattaya',
    'is-max-muay-thai-worth-it-pattaya', 'is-winter-wonderland-worth-it-pattaya',
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
    'how-much-should-a-private-tour-guide-cost-in-phnom-penh',
    'is-mekong-sunset-cruise-worth-it-phnom-penh', 'is-khmer-cooking-class-worth-it-phnom-penh',
    'is-cyclo-tour-worth-it-phnom-penh', 'is-shooting-range-tour-worth-it-phnom-penh',
    'is-contemporary-art-tour-worth-it-phnom-penh', 'is-bokor-national-park-day-trip-worth-it-phnom-penh',
    'is-kun-khmer-experience-worth-it-phnom-penh', 'is-silk-island-bike-tour-worth-it-phnom-penh',
    'is-oudong-royal-capital-tour-worth-it-phnom-penh', 'is-upcycling-workshop-worth-it-phnom-penh',
    'is-riverside-walking-tour-worth-it-phnom-penh', 'is-night-tuk-tuk-tour-worth-it-phnom-penh',
    'is-essential-oil-workshop-worth-it-phnom-penh', 'is-national-museum-tour-worth-it-phnom-penh',
    'is-bikes-and-bites-tour-worth-it-phnom-penh', 'is-night-foodie-tour-worth-it-phnom-penh',
    'is-after-dark-street-grills-tour-worth-it-phnom-penh', 'is-city-bike-sunset-cruise-tour-worth-it-phnom-penh',
    'is-royal-palace-wat-phnom-tour-worth-it-phnom-penh', 'is-sky-bar-tour-worth-it-phnom-penh',
    'is-12-stop-landmarks-tuk-tuk-tour-worth-it-phnom-penh', 'is-taprohm-bati-chisor-temple-tour-worth-it-phnom-penh',
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
    'best-angkor-wat-sunrise-tour', 'best-floating-village-tour-siem-reap',
    'is-apsara-dance-show-worth-it-siem-reap', 'is-quad-bike-tour-worth-it-siem-reap',
    'is-cooking-class-worth-it-siem-reap', 'is-silk-farm-tour-worth-it-siem-reap',
    'is-apopo-visitor-center-worth-it-siem-reap', 'is-local-market-khmer-life-tour-worth-it-siem-reap',
    'is-battambang-day-trip-worth-it-siem-reap', 'is-kulen-mountain-trekking-worth-it-siem-reap',
    'is-chong-kneas-sunset-cruise-worth-it-siem-reap', 'is-war-museum-tour-worth-it-siem-reap',
    'is-crocodile-farm-tour-worth-it-siem-reap', 'is-pub-crawl-worth-it-siem-reap',
    'is-rice-liqueur-cocktail-class-worth-it-siem-reap', 'is-killing-cave-bat-cave-tour-worth-it-siem-reap',
    'is-coffee-experience-worth-it-siem-reap', 'is-pottery-class-worth-it-siem-reap',
    'is-kbal-spean-worth-it-siem-reap', 'is-bodia-tonic-massage-worth-it-siem-reap',
    'is-mad-monkey-sunset-cycling-tour-worth-it-siem-reap', 'is-feel-good-evening-walking-tour-worth-it-siem-reap',
    'is-angkor-national-museum-worth-it-siem-reap', 'is-phare-cambodian-circus-worth-it-siem-reap',
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
    'best-phi-phi-islands-tour-krabi', 'is-emerald-pool-hot-springs-tour-worth-it-krabi',
    'is-ethical-elephant-sanctuary-worth-it-krabi',
    'is-zipline-adventure-worth-it-krabi', 'is-freediving-course-worth-it-krabi',
    'is-4-islands-tour-worth-it-krabi', 'is-7-islands-sunset-plankton-tour-worth-it-krabi',
    'is-phi-phi-islands-tour-worth-it-krabi', 'is-khao-sok-cheow-lan-lake-tour-worth-it-krabi',
    'is-hong-island-lagoon-tour-worth-it-krabi',
    'is-railay-rock-climbing-worth-it-krabi', 'is-thai-cooking-class-worth-it-krabi',
    'is-muay-thai-fight-worth-it-krabi', 'is-ko-lanta-emerald-cave-tour-worth-it-krabi',
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
    'best-asakusa-sensoji-tour', 'best-kimono-rental-tokyo',
    'is-cat-cafe-tour-worth-it-tokyo',
    'is-daikoku-jdm-tour-worth-it-tokyo', 'is-geisha-show-worth-it-tokyo',
    'is-ghost-stories-night-walk-worth-it-tokyo',
    'is-ninja-samurai-training-worth-it-tokyo', 'is-sushi-making-class-worth-it-tokyo',
    'is-kendo-experience-worth-it-tokyo', 'is-toyosu-tuna-auction-tour-worth-it-tokyo',
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
    'is-amanohashidate-ine-tour-worth-it-kyoto', 'is-sound-bath-worth-it-kyoto',
    'is-ninja-weapon-workshop-worth-it-kyoto',
    'is-sushi-making-workshop-worth-it-kyoto', 'is-nintendo-museum-worth-it-kyoto',
    'is-yuzen-dyeing-worth-it-kyoto', 'is-archery-workshop-worth-it-kyoto',
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
    'how-much-should-a-private-tour-guide-cost-in-osaka',
    'is-cup-noodles-museum-worth-it-osaka', 'is-koshien-baseball-tour-worth-it-osaka',
    'is-ninja-experience-worth-it-osaka',
    'is-samurai-experience-worth-it-osaka', 'is-minoh-waterfall-tour-worth-it-osaka',
    'is-maid-cafe-experience-worth-it-osaka', 'is-ramen-gyoza-cooking-class-worth-it-osaka',
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
    'where-to-stay-in-hiroshima',
    'is-calligraphy-workshop-worth-it-hiroshima',
    'is-saijo-sake-tasting-worth-it-hiroshima', 'is-mitaki-temple-waterfall-walk-worth-it-hiroshima',
    'is-hiroshima-miyajima-day-tour-worth-it-hiroshima', 'is-atomic-bomb-story-tour-worth-it-hiroshima',
    'is-koto-concert-worth-it-hiroshima', 'is-okonomiyaki-hopping-tour-worth-it-hiroshima'].map(slug => ({
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
    'sapporo-with-kids', 'best-tours-in-sapporo', 'should-i-book-sapporo-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-sapporo',
    'is-ramen-making-class-worth-it-sapporo',
    'is-ice-fishing-worth-it-sapporo', 'is-mount-moiwa-hike-worth-it-sapporo',
    'is-otaru-shakotan-yoichi-distillery-tour-worth-it-sapporo', 'is-sushi-roll-making-class-worth-it-sapporo',
    'is-nijo-market-tour-worth-it-sapporo', 'is-red-brick-government-office-tour-worth-it-sapporo'].map(slug => ({
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
    'should-you-stay-overnight-in-nara', 'best-tours-in-nara', 'should-i-book-nara-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-nara',
    'is-tea-ceremony-worth-it-nara',
    'is-koriyama-goldfish-tour-worth-it-nara', 'is-hasedera-temple-tour-worth-it-nara',
    'is-rickshaw-tour-worth-it-nara',
    'is-samurai-tour-worth-it-nara', 'is-omiwa-shrine-tour-worth-it-nara',
    'is-asuka-ancient-capital-tour-worth-it-nara', 'is-deer-lantern-night-walk-worth-it-nara'].map(slug => ({
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
    'how-much-should-a-private-tour-guide-cost-in-nagoya',
    'is-miso-brewery-tour-worth-it-nagoya', 'is-inuyama-castle-day-trip-worth-it-nagoya',
    'is-atsuta-shrine-tour-worth-it-nagoya', 'is-ise-jingu-day-trip-worth-it-nagoya',
    'is-legoland-japan-worth-it-nagoya',
    'nagoya-toyota-commemorative-museum-guided-tour', 'nagoya-tokugawa-art-museum-guided-tour',
    'nagoya-osu-maid-cafe-experience', 'nagoya-private-koto-lesson-with-musician',
    'nagoya-private-kyudo-archery-lesson-toyoake-dojo', 'nagoya-shinto-priest-shrine-maiden-experience',
    'nagoya-shimenawa-wreath-making-workshop', 'nagoya-sword-museum-admission-ticket',
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
    'hakone-or-kawaguchiko-for-mount-fuji', 'best-tours-in-hakone', 'should-i-book-hakone-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-hakone',
    'is-forest-bathing-worth-it-hakone', 'is-open-air-museum-worth-it-hakone',
    'is-evangelion-anime-tour-worth-it-hakone', 'is-odawara-castle-walk-worth-it-hakone',
    'is-venetian-glass-museum-worth-it-hakone', 'is-geothermal-valley-torii-walk-worth-it-hakone'].map(slug => ({
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
    'how-much-should-a-private-tour-guide-cost-in-mount-fuji',
    'is-mount-fuji-summit-climb-worth-it',
    'is-mount-hoei-crater-trek-worth-it-mount-fuji', 'is-aokigahara-forest-day-trip-worth-it-mount-fuji',
    'is-sumo-experience-day-trip-worth-it-mount-fuji', 'is-gotemba-outlets-tour-worth-it-mount-fuji',
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
    'leaving-ella-onward-transfers', 'best-tours-in-ella', 'should-i-book-ella-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-ella',
    'is-cooking-class-worth-it-ella',
    'is-diyaluma-falls-tour-worth-it-ella', 'is-sinharaja-rainforest-trek-worth-it-ella',
    'is-tea-making-workshop-worth-it-ella', 'is-demodara-cycling-tour-worth-it-ella',
    'is-sunrise-yoga-worth-it-ella', 'is-ella-rock-sunrise-hike-worth-it-ella'].map(slug => ({
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
    'how-much-should-a-private-tour-guide-cost-in-dubai',
    'best-desert-safari-dubai', 'best-burj-khalifa-tour-dubai',
    'atlantis-aquaventure-waterpark-guide', 'dubai-aquarium-underwater-zoo-guide',
    'museum-of-the-future-dubai-frame-guide', 'global-village-dubai-guide',
    'img-worlds-of-adventure-guide', 'dubai-jet-ski-burj-al-arab-guide',
    'is-miracle-garden-worth-it-dubai',
    'is-topgolf-worth-it-dubai', 'is-al-ain-day-trip-worth-it-dubai',
    'is-discover-scuba-diving-worth-it-dubai',
    'is-desert-safari-worth-it-dubai', 'is-burj-khalifa-worth-it-dubai',
    'is-dhow-cruise-worth-it-dubai', 'is-atlantis-aquaventure-worth-it-dubai',
    'is-abu-dhabi-day-trip-worth-it-dubai',
    'is-hot-air-balloon-worth-it-dubai', 'is-museum-of-the-future-tour-worth-it-dubai',
    'is-flying-dress-experience-worth-it-dubai', 'is-hatta-bab-al-shams-tour-worth-it-dubai',
    'is-museum-of-illusions-worth-it-dubai', 'is-old-city-abra-ride-tour-worth-it-dubai',
    'is-camel-farm-tour-worth-it-dubai', 'is-marina-yacht-breakfast-bbq-tour-worth-it-dubai'].map(slug => ({
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
    'abu-dhabi-2-day-itinerary',
    'abu-dhabi-falcon-hospital-guide', 'abu-dhabi-mangrove-kayaking-guide',
    'abu-dhabi-louvre-catamaran-guide', 'is-heritage-village-worth-it-abu-dhabi',
    'is-al-forsan-sports-pass-worth-it-abu-dhabi', 'is-emirati-dining-experience-worth-it-abu-dhabi',
    'is-exclusive-helicopter-tour-worth-it-abu-dhabi',
    'is-desert-safari-worth-it-abu-dhabi', 'is-qasr-al-watan-city-tour-worth-it-abu-dhabi',
    'is-ferrari-world-worth-it-abu-dhabi', 'is-louvre-abu-dhabi-kayak-tour-worth-it',
    'is-yas-island-speedboat-tour-worth-it-abu-dhabi',
    'is-warner-bros-world-worth-it-abu-dhabi', 'is-seaworld-worth-it-abu-dhabi',
    'is-dune-dinner-worth-it-abu-dhabi', 'is-padi-certification-worth-it-abu-dhabi'].map(slug => ({
    url: `${BASE_URL}/uae/abu-dhabi/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const galleInfoPages = [
    'galle-fort-guide', 'mirissa-whale-watching-guide', 'south-coast-beaches-guide', 'galle-2-day-itinerary', 'best-tours-in-galle', 'should-i-book-galle-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-galle',
    'is-surf-lesson-worth-it-galle', 'is-cooking-class-worth-it-galle',
    'is-ceylon-gem-workshop-worth-it-galle', 'is-koggala-lake-tour-worth-it-galle',
    'is-kayaking-village-tour-worth-it-galle',
    'best-galle-fort-walking-tour-galle', 'is-turtle-hatchery-worth-it-galle',
    'is-muay-thai-training-worth-it-galle', 'is-escooter-tour-worth-it-galle',
  ].map(slug => ({
    url: `${BASE_URL}/sri-lanka/galle/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const negomboInfoPages = [
    'negombo-airport-guide', 'negombo-lagoon-guide', 'best-tours-in-negombo', 'should-i-book-negombo-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-negombo',
    'is-scuba-diving-worth-it-negombo', 'is-sri-lankan-cooking-class-worth-it-negombo',
    'is-dolphin-whale-watching-worth-it-negombo', 'is-muthurajawela-wetland-tour-worth-it-negombo',
    'is-wilpattu-safari-worth-it-negombo',
    'is-sunset-lagoon-safari-worth-it-negombo', 'is-paramotoring-worth-it-negombo',
    'is-catamaran-sailing-worth-it-negombo', 'is-ayurvedic-massage-worth-it-negombo',
    'is-jewelry-workshop-worth-it-negombo', 'is-bicycle-city-tour-worth-it-negombo',
    'is-snorkeling-worth-it-negombo', 'is-scooter-ride-worth-it-negombo',
  ].map(slug => ({
    url: `${BASE_URL}/sri-lanka/negombo/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const nuwaraEliyaInfoPages = [
    'nuwara-eliya-tea-guide', 'horton-plains-guide', 'best-tours-in-nuwara-eliya', 'should-i-book-nuwara-eliya-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-nuwara-eliya',
    'is-horseback-riding-worth-it-nuwara-eliya', 'is-adams-peak-hike-worth-it-nuwara-eliya',
    'is-knuckles-range-tour-worth-it-nuwara-eliya',
    'is-tea-plucking-experience-worth-it-nuwara-eliya', 'is-cloud-forest-hike-worth-it-nuwara-eliya',
    'is-ramayana-temple-trail-worth-it-nuwara-eliya', 'is-rafting-ziplining-combo-worth-it-nuwara-eliya',
    'is-labookellie-tea-factory-worth-it-nuwara-eliya', 'is-horton-plains-sunrise-hike-worth-it-nuwara-eliya',
    'is-tea-field-cycling-worth-it-nuwara-eliya', 'is-ramboda-waterfall-tuk-tuk-tour-worth-it-nuwara-eliya',
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
    'kashmir-budget-guide', 'best-tours-in-kashmir', 'should-i-book-kashmir-tour-direct-or-through-app',
    'how-much-should-a-private-tour-guide-cost-in-kashmir',
    'is-pashmina-craft-tour-worth-it-kashmir', 'is-gulmarg-gondola-skiing-worth-it-kashmir',
    'is-doodhpathri-day-trip-worth-it-kashmir', 'is-yousmarg-day-trip-worth-it-kashmir',
    'is-vaishno-devi-tour-worth-it-kashmir',
  ].map(slug => ({
    url: `${BASE_URL}/india/kashmir/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const bentotaInfoPages = [
    'madu-river-safari-guide', 'bentota-guide',
    'best-water-sports-tour-bentota', 'is-udawalawe-safari-worth-it-bentota',
    'is-yala-safari-worth-it-bentota', 'is-cooking-class-worth-it-bentota',
    'best-madu-river-safari-tour-bentota',
    'is-bawa-garden-richmond-castle-tour-worth-it-bentota',
    'is-paramotoring-worth-it-bentota', 'is-surfing-lesson-worth-it-bentota',
    'is-ayurvedic-massage-worth-it-bentota', 'is-hikkaduwa-snorkeling-worth-it-bentota',
    'is-banana-boat-worth-it-bentota', 'is-fly-fish-worth-it-bentota',
    'is-lagoon-fishing-worth-it-bentota', 'is-speed-boat-ride-worth-it-bentota',
  ].map(slug => ({
    url: `${BASE_URL}/sri-lanka/bentota/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const mirissaInfoPages = [
    'mirissa-guide',
    'best-turtle-snorkeling-tour-mirissa', 'is-scuba-diving-worth-it-mirissa',
    'is-mangrove-kayaking-worth-it-mirissa', 'is-sinharaja-rainforest-trek-worth-it-mirissa',
    'is-sri-lankan-cooking-class-worth-it-mirissa', 'is-deep-sea-fishing-worth-it-mirissa',
    'is-snake-conservation-farm-tour-worth-it-mirissa', 'is-crocodile-watching-worth-it-mirissa',
    'is-batik-workshop-worth-it-mirissa',
    'is-whale-watching-tour-worth-it-mirissa', 'is-sunset-catamaran-worth-it-mirissa',
    'is-village-cooking-experience-worth-it-mirissa', 'is-kayak-floating-dinner-worth-it-mirissa',
    'is-nordic-sauna-worth-it-mirissa', 'is-night-snorkeling-worth-it-mirissa',
    'best-water-sports-mirissa', 'is-ayurvedic-retreat-worth-it-mirissa',
  ].map(slug => ({
    url: `${BASE_URL}/sri-lanka/mirissa/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const sigiriyaInfoPages = [
    'sigiriya-rock-guide', 'dambulla-cave-temple-guide', 'minneriya-elephant-gathering-guide', 'sigiriya-2-day-itinerary', 'best-time-to-visit-sigiriya', 'getting-around-sigiriya', 'polonnaruwa-guide', 'anuradhapura-guide',
    'is-pidurangala-rock-worth-it-sigiriya', 'is-kaudulla-safari-worth-it-sigiriya',
    'is-cooking-class-worth-it-sigiriya', 'is-village-tour-worth-it-sigiriya',
    'is-trincomalee-day-trip-worth-it-sigiriya', 'is-mihintale-tour-worth-it-sigiriya',
    'is-hurulu-eco-park-safari-worth-it-sigiriya', 'is-tuk-tuk-safari-worth-it-sigiriya',
    'is-sunrise-hike-village-breakfast-worth-it-sigiriya', 'is-habarana-polonnaruwa-dambulla-tour-worth-it-sigiriya',
    'is-minneriya-safari-worth-it-sigiriya', 'is-night-wildlife-tour-worth-it-sigiriya',
    'is-batik-experience-worth-it-sigiriya', 'is-wewela-lake-boat-worth-it-sigiriya',
    'is-loris-exploration-worth-it-sigiriya', 'is-coconut-shell-bamboo-workshop-worth-it-sigiriya',
    'is-mask-painting-workshop-worth-it-sigiriya', 'is-village-lake-swimming-worth-it-sigiriya',
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
    'leaving-kandy-onward-transfers',
    'is-ambuluwawa-tower-tour-worth-it-kandy', 'is-botanical-garden-tour-worth-it-kandy',
    'is-cultural-dance-show-worth-it-kandy', 'is-tea-factory-tour-worth-it-kandy',
    'is-vedda-village-tour-worth-it-kandy', 'is-ella-scenic-train-worth-it-kandy',
    'is-knuckles-7-falls-hike-worth-it-kandy', 'is-kelani-river-rafting-worth-it-kandy',
    'is-cooking-class-worth-it-kandy', 'is-nanuoya-scenic-train-worth-it-kandy',
    'best-tuk-tuk-city-tour-kandy', 'is-gem-museum-workshop-worth-it-kandy',
    'is-night-temple-tour-worth-it-kandy', 'is-sacred-forest-hike-worth-it-kandy',
    'is-udawatta-kele-nature-walk-worth-it-kandy', 'is-nelligala-temple-tour-worth-it-kandy',
    'is-pinnawala-elephants-tour-worth-it-kandy', 'is-village-walk-cooking-experience-worth-it-kandy'].map(slug => ({
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
    'best-tuk-tuk-city-tour-colombo', 'is-gangaramaya-temple-tour-worth-it-colombo',
    'is-yala-safari-worth-it-colombo', 'is-pinnawala-kandy-tour-worth-it-colombo',
    'is-adams-peak-hike-worth-it-colombo', 'is-jaffna-tour-worth-it-colombo',
    'is-anuradhapura-day-trip-worth-it-colombo',
    'is-port-city-go-karting-worth-it-colombo', 'is-birdwatching-tour-worth-it-colombo',
    'is-tea-rubber-estate-tour-worth-it-colombo', 'is-tuk-tuk-food-tour-worth-it-colombo',
    'is-silver-jewelry-workshop-worth-it-colombo', 'is-port-city-canoeing-worth-it-colombo',
    'is-scooter-tour-worth-it-colombo', 'is-free-tea-tasting-worth-it-colombo',
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

  // City HUB pages (the /<country>/<city> page itself, no slug) for every
  // country added since the hardcoded staticPages list above was last
  // extended: Georgia, Qatar, Jordan, Singapore, Malaysia, South Korea,
  // Taiwan, the Philippines, Laos, Saudi Arabia, Uzbekistan, Azerbaijan,
  // Kazakhstan, Armenia, Oman, Bhutan, Israel, Mongolia and more. Their info
  // pages and tour pages were being submitted, but the hub page — the one
  // that actually ranks for "best tours in <city>" — never was, because
  // nobody had hand-added it to staticPages. Found 2026-11-19: 83 live city
  // hubs with approved tours (Doha alone has 850) entirely absent from the
  // sitemap. Derived from the tour pages just built, not hand-listed, so a
  // newly launched city's hub is covered the moment its tours are — the same
  // lesson as the `cities` derivation above. Duplicate <url> values against
  // staticPages' existing hub entries are harmless; Google de-dupes them.
  const hubUrls = new Set<string>();
  for (const tp of tourPages) {
    const parts = tp.url.replace(`${BASE_URL}/`, '').split('/');
    if (parts.length === 3) hubUrls.add(`${parts[0]}/${parts[1]}`);
  }
  const cityHubPages: MetadataRoute.Sitemap = Array.from(hubUrls).map(path => ({
    url: `${BASE_URL}/${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Country ROOT pages (the /<country> page itself) for every country whose
  // hub pages were just derived above. Found 2026-11-19 in the same audit
  // that found the 83 missing city hubs: app/[country]/page.tsx 404'd for
  // 24 countries (Qatar, Georgia, Turkey, Oman, Armenia, Philippines, South
  // Korea, Azerbaijan, Singapore, Malaysia, Uzbekistan, Jordan, Taiwan,
  // Laos, Saudi Arabia, Kazakhstan, Israel, Mongolia, Bhutan, Kuwait,
  // Bahrain, Iraq, Lebanon, Maldives) because nobody had hand-added them to
  // COUNTRY_META or to this file's staticPages list — the exact same
  // "hand-listed, so it rots" failure as the city hubs, one level up. That
  // 404 is now fixed (app/[country]/page.tsx derives a fallback from the
  // tours API), but the sitemap still never submitted these URLs at all.
  // Derived the same way as cityHubPages: never hand-listed again.
  const countryRootUrls = new Set<string>();
  for (const path of hubUrls) countryRootUrls.add(path.split('/')[0]);
  const countryRootPages: MetadataRoute.Sitemap = Array.from(countryRootUrls).map(country => ({
    url: `${BASE_URL}/${country}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const haLongInfoPages = [
    'ha-long-bay-day-trip-or-overnight-cruise',
    'choosing-a-ha-long-bay-cruise',
    'getting-to-ha-long-bay-from-hanoi',
    'best-time-to-visit-ha-long-bay',
    'lan-ha-bay-and-cat-ba-guide',
    'ha-long-bay-caves-and-islands-guide',
    'ha-long-bay-with-kids',
    'bai-tu-long-bay-guide',
    'is-hop-on-hop-off-bus-worth-it-ha-long',
    'is-overnight-cruise-worth-it-ha-long', 'is-lan-ha-bay-cruise-worth-it-ha-long',
    'is-bai-tu-long-bay-cruise-worth-it-ha-long', 'is-day-cruise-worth-it-ha-long',
    'is-cat-ba-island-tour-worth-it-ha-long', 'is-ninh-binh-ha-long-combo-worth-it',
    'is-yen-tu-mountain-tour-worth-it-ha-long',
    'is-ngu-lam-peak-trek-worth-it-ha-long', 'is-poseidon-night-cruise-worth-it-ha-long',
    'is-monkey-island-tour-worth-it-ha-long', 'is-cat-ba-trekking-overnight-worth-it-ha-long',
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
    'how-much-should-a-private-tour-guide-cost-in-hanoi',
    'best-perfume-pagoda-tour-hanoi', 'is-bat-trang-village-tour-worth-it-hanoi',
    'is-cyclo-tour-worth-it-hanoi',
    'is-train-street-food-tour-worth-it-hanoi', 'is-ninh-binh-day-trip-worth-it-hanoi',
    'is-ba-vi-national-park-worth-it-hanoi', 'is-mai-chau-pu-luong-trek-worth-it-hanoi',
    'is-ha-giang-loop-worth-it-hanoi',
    'is-water-puppet-show-worth-it-hanoi', 'is-vespa-city-tour-worth-it-hanoi', 'is-cooking-class-worth-it-hanoi',
    'is-tran-quoc-pagoda-tour-worth-it-hanoi', 'is-perfume-making-workshop-worth-it-hanoi',
    'is-embroidery-workshop-worth-it-hanoi', 'is-knife-making-workshop-worth-it-hanoi',
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
    'how-much-should-a-private-tour-guide-cost-in-sapa',
    'best-motorbike-tour-sapa',
    'is-ha-giang-loop-worth-it-sapa', 'is-paragliding-worth-it-sapa',
    'is-trail-running-tour-worth-it-sapa',
    'is-fansipan-summit-trek-worth-it-sapa', 'is-lao-chai-ta-van-trek-worth-it-sapa',
    'is-mu-cang-chai-trek-worth-it-sapa', 'is-red-dao-herbal-bath-worth-it-sapa',
    'is-overnight-train-tour-worth-it-sapa',
    'is-alpine-coaster-worth-it-sapa', 'is-glass-bridge-tour-worth-it-sapa',
    'is-mountain-biking-worth-it-sapa', 'is-hmong-cooking-class-worth-it-sapa',
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
    'best-cham-islands-tour-hoi-an',
    'is-painting-class-worth-it-hoi-an', 'is-ao-dai-show-worth-it-hoi-an',
    'is-bach-ma-national-park-trek-worth-it-hoi-an',
    'is-ba-na-hills-tour-worth-it-hoi-an', 'is-cham-islands-snorkeling-worth-it-hoi-an',
    'is-my-son-sanctuary-tour-worth-it-hoi-an', 'is-basket-boat-coconut-forest-worth-it-hoi-an',
    'is-countryside-bicycle-tour-worth-it-hoi-an',
    'is-lantern-boat-ride-worth-it-hoi-an', 'is-lantern-making-workshop-worth-it-hoi-an',
    'is-hai-van-pass-motorbike-tour-worth-it-hoi-an',
    'is-marble-mountains-tour-worth-it-hoi-an', 'is-terracotta-park-pottery-workshop-worth-it-hoi-an',
    'is-coffee-making-class-worth-it-hoi-an', 'is-memories-show-worth-it-hoi-an',
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
    'best-tegalalang-rice-terrace-tour', 'best-mount-batur-sunrise-tour', 'best-balinese-cooking-class-ubud',
    'is-silver-jewelry-class-worth-it-ubud', 'is-coffee-plantation-tour-worth-it-ubud',
    'is-hidden-canyon-tour-worth-it-ubud', 'is-kintamani-downhill-cycling-worth-it-ubud',
    'is-beach-horse-riding-worth-it-ubud',
    'is-cultural-dance-performance-worth-it-ubud',
    'is-ayung-river-rafting-worth-it-ubud', 'is-bali-swing-worth-it-ubud',
    'is-arma-museum-worth-it-ubud', 'is-batik-workshop-worth-it-ubud',
    'is-atv-jungle-ride-worth-it-ubud',
    'is-blue-lagoon-snorkeling-worth-it-ubud', 'is-lempuyang-temple-tour-worth-it-ubud',
    'is-tulamben-wreck-diving-worth-it-ubud', 'is-campuhan-ridge-walk-worth-it-ubud',
    'is-goa-gajah-elephant-cave-worth-it-ubud',
    'is-mount-batur-sunrise-trek-worth-it-ubud', 'is-tirta-empul-purification-worth-it-ubud',
    'is-monkey-forest-worth-it-ubud', 'is-gunung-kawi-temple-worth-it-ubud',
    'is-yoga-healing-worth-it-ubud',
    'is-mount-agung-sunrise-trek-worth-it-ubud', 'is-palm-reading-worth-it-ubud',
    'is-silver-jewelry-making-worth-it-ubud', 'is-trunyan-village-tour-worth-it-ubud',
    'is-lovina-dolphin-watching-worth-it-ubud', 'is-melukat-purification-ceremony-worth-it-ubud',
    'is-river-tubing-adventure-worth-it-ubud', 'is-still-life-painting-workshop-worth-it-ubud',
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
    'how-much-should-a-private-tour-guide-cost-in-canggu',
    'best-surf-lesson-canggu',
    'is-drag-show-worth-it-canggu', 'is-painting-workshop-worth-it-canggu',
    'is-puppy-yoga-worth-it-canggu',
    'is-surf-lessons-worth-it-canggu', 'is-pool-club-day-pass-worth-it-canggu',
    'is-silver-jewelry-class-worth-it-canggu', 'is-mount-batukaru-trek-worth-it-canggu',
    'is-jatiluwih-tanah-lot-tour-worth-it-canggu',
    'is-trunyan-penglipuran-tour-worth-it-canggu', 'is-mixology-class-worth-it-canggu',
    'is-sign-language-class-dinner-worth-it-canggu', 'is-perfume-making-worth-it-canggu',
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
    'how-much-should-a-private-tour-guide-cost-in-uluwatu',
    'best-kecak-dance-tour-uluwatu',
    'is-devdan-show-worth-it-uluwatu', 'is-tandem-paragliding-worth-it-uluwatu',
    'is-kecak-sunset-temple-tour-worth-it-uluwatu', 'is-gwk-cultural-park-worth-it-uluwatu',
    'is-tanjung-benoa-watersports-worth-it-uluwatu', 'is-surf-lessons-worth-it-uluwatu',
    'is-nusa-dua-snorkeling-turtle-tour-worth-it-uluwatu',
    'is-tulamben-liberty-wreck-diving-worth-it-uluwatu', 'is-nusa-dua-spa-worth-it-uluwatu',
    'is-silver-jewelry-workshop-worth-it-uluwatu', 'is-cooking-class-market-tour-worth-it-uluwatu',
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
    'is-scuba-diving-worth-it-nusa-penida',
    'is-coral-reef-restoration-worth-it-nusa-penida', 'is-canang-sari-workshop-worth-it-nusa-penida',
    'is-kelingking-beach-hike-worth-it-nusa-penida', 'is-manta-ray-snorkeling-worth-it-nusa-penida',
    'is-gate-of-heaven-tour-worth-it-nusa-penida', 'is-lembongan-ceningan-day-trip-worth-it-nusa-penida',
    'is-west-coast-tour-worth-it-nusa-penida',
    'is-lembongan-ceningan-tuk-tuk-tour-worth-it-nusa-penida', 'is-diving-tour-hotel-transfer-worth-it-nusa-penida',
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
    'is-son-tra-wildlife-tour-worth-it-da-nang', 'is-vietnamese-cooking-class-worth-it-da-nang',
    'is-herbal-head-spa-worth-it-da-nang', 'is-street-food-scooter-tour-worth-it-da-nang',
    'is-ba-na-hills-tour-worth-it-da-nang', 'is-marble-mountains-tour-worth-it-da-nang',
    'is-mang-den-highland-tour-worth-it-da-nang', 'is-charming-da-nang-show-worth-it',
    'is-surf-retreat-worth-it-da-nang',
    'is-hue-day-trip-worth-it-da-nang', 'is-hai-van-pass-train-worth-it-da-nang',
    'is-pottery-workshop-worth-it-da-nang', 'is-surfing-lesson-worth-it-da-nang',
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
    'how-much-should-a-private-tour-guide-cost-in-ho-chi-minh-city',
    'is-reunification-palace-worth-it-ho-chi-minh-city', 'is-vespa-food-tour-worth-it-ho-chi-minh-city',
    'is-egg-coffee-class-worth-it-ho-chi-minh-city',
    'is-mekong-delta-day-trip-worth-it-ho-chi-minh-city', 'is-can-gio-monkey-island-worth-it-ho-chi-minh-city',
    'is-cat-tien-national-park-worth-it-ho-chi-minh-city', 'is-black-virgin-mountain-cao-dai-tour-worth-it-ho-chi-minh-city',
    'is-ao-dai-photo-experience-worth-it-ho-chi-minh-city',
    'is-water-puppet-show-worth-it-ho-chi-minh-city', 'is-chocolate-workshop-worth-it-ho-chi-minh-city',
    'is-sound-of-vietnam-show-worth-it-ho-chi-minh-city', 'is-long-tan-battlefield-tour-worth-it-ho-chi-minh-city',
    'is-secret-bunker-war-tour-worth-it-ho-chi-minh-city', 'is-conical-hat-painting-workshop-worth-it-ho-chi-minh-city',
    'is-rug-tufting-workshop-worth-it-ho-chi-minh-city', 'is-slum-tour-worth-it-ho-chi-minh-city',
].map(slug => ({
    url: `${BASE_URL}/vietnam/ho-chi-minh-city/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const all = [...staticPages, ...agraInfoPages, ...delhiInfoPages, ...jaipurInfoPages, ...kashmirInfoPages, ...beijingInfoPages, ...shanghaiInfoPages, ...hongKongInfoPages, ...taiwanInfoPages, ...seoulInfoPages, ...busanInfoPages, ...istanbulInfoPages, ...dohaInfoPages, ...maleInfoPages, ...samarkandInfoPages, ...tashkentInfoPages, ...bukharaInfoPages, ...khivaInfoPages, ...manilaInfoPages, ...cebuInfoPages, ...boracayInfoPages, ...cameronHighlandsInfoPages, ...madabaInfoPages, ...bengaluruInfoPages, ...phuketInfoPages, ...bangkokInfoPages, ...chiangMaiInfoPages, ...pattayaInfoPages, ...krabiInfoPages, ...siemReapInfoPages, ...phnomPenhInfoPages, ...tokyoInfoPages, ...kyotoInfoPages, ...osakaInfoPages, ...hiroshimaInfoPages, ...sapporoInfoPages, ...naraInfoPages, ...nagoyaInfoPages, ...hakoneInfoPages, ...mountFujiInfoPages, ...colomboInfoPages, ...kandyInfoPages, ...sigiriyaInfoPages, ...mirissaInfoPages, ...bentotaInfoPages, ...nuwaraEliyaInfoPages, ...negomboInfoPages, ...dubaiInfoPages, ...haLongInfoPages, ...hanoiInfoPages, ...sapaInfoPages, ...hoiAnInfoPages, ...ubudInfoPages, ...cangguInfoPages, ...uluwatuInfoPages, ...nusaPenidaInfoPages, ...daNangInfoPages, ...hoChiMinhCityInfoPages, ...kualaLumpurInfoPages, ...penangInfoPages, ...langkawiInfoPages, ...malaccaInfoPages, ...kotaKinabaluInfoPages, ...kuchingInfoPages, ...johorBahruInfoPages, ...kathmanduInfoPages, ...tbilisiInfoPages, ...muscatInfoPages, ...yerevanInfoPages, ...petraInfoPages, ...ammanInfoPages, ...aqabaInfoPages, ...bakuInfoPages, ...singaporeInfoPages, ...luangPrabangInfoPages, ...riyadhInfoPages, ...jeddahInfoPages, ...alulaInfoPages, ...vientianeInfoPages, ...vangViengInfoPages, ...almatyInfoPages, ...ulaanbaatarInfoPages, ...jerusalemInfoPages, ...telAvivInfoPages, ...thimphuInfoPages, ...paroInfoPages, ...kuwaitCityInfoPages, ...manamaInfoPages, ...baghdadInfoPages, ...beirutInfoPages, ...dilijanInfoPages, ...gyumriInfoPages, ...shekiInfoPages, ...astanaInfoPages, ...shymkentInfoPages, ...khasabInfoPages, ...nizwaInfoPages, ...borjomiInfoPages, ...haifaInfoPages, ...eilatInfoPages, ...pokharaInfoPages, ...batumiInfoPages, ...kutaisiInfoPages, ...salalahInfoPages, ...bhaktapurInfoPages, ...lumbiniInfoPages, ...kazbegiInfoPages, ...mestiaInfoPages, ...wadiRumInfoPages, ...pakseInfoPages, ...nongKhiawInfoPages, ...meccaInfoPages, ...medinaInfoPages,
    ...abuDhabiInfoPages,
    ...galleInfoPages, ...ellaInfoPages, ...itineraryPages, ...goldenTriangle, ...cityHubPages, ...countryRootPages, ...tourPages];

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
