// Types
export interface CityData {
  id: string;
  name: string;
  image: string;
  localAngle: string;
  guidesCount: number;
}

export interface AttractionData {
  id: string;
  title: string;
  location: string;
  whyLocal: string;
  experts: number;
  image: string;
}

export const CITIES: CityData[] = [
  // Live cities - shown first
  { id: 'agra', name: 'Agra', image: '/agra-hero.webp', localAngle: 'Mughal Heritage', guidesCount: 112 },
  { id: 'delhi', name: 'Delhi', image: '/delhi-home.webp', localAngle: 'Historic Capital', guidesCount: 245 },
  { id: 'jaipur', name: 'Jaipur', image: '/jaipur-hero.webp', localAngle: 'Pink City', guidesCount: 189 },
  { id: 'phuket', name: 'Phuket', image: '/things-to-do/phuket-phi-phi.webp', localAngle: 'Beaches & Island Hopping', guidesCount: 312 },
  { id: 'jodhpur', name: 'Jodhpur', image: '/cities-images/jodhpur.webp', localAngle: 'Blue City', guidesCount: 145 },
  { id: 'jaisalmer', name: 'Jaisalmer', image: '/cities-images/jaisalmer.webp', localAngle: 'Golden City', guidesCount: 124 },
  { id: 'bikaner', name: 'Bikaner', image: '/cities-images/bikaner.webp', localAngle: 'Desert Heritage', guidesCount: 98 },
  { id: 'mathura', name: 'Mathura', image: '/cities-images/mathura.webp', localAngle: 'Spiritual Capital', guidesCount: 134 },
  { id: 'varanasi', name: 'Varanasi', image: '/cities-images/varanasi.webp', localAngle: 'Sacred Ganges', guidesCount: 178 },
  { id: 'khajuraho', name: 'Khajuraho', image: '/cities-images/khajurao.webp', localAngle: 'Temple Art', guidesCount: 112 },
  { id: 'gwalior', name: 'Gwalior', image: '/cities-images/gwalior.webp', localAngle: 'Fort City', guidesCount: 123 },
  { id: 'aurangabad', name: 'Aurangabad', image: '/cities-images/aurangabad.webp', localAngle: 'Cave Temples', guidesCount: 156 },
  { id: 'goa', name: 'Goa', image: '/cities-images/goa.webp', localAngle: 'Beaches & Culture', guidesCount: 234 },
  { id: 'mysore', name: 'Mysore', image: '/cities-images/mysore.webp', localAngle: 'Royal Heritage', guidesCount: 167 },
  { id: 'bengaluru', name: 'Bengaluru', image: '/cities-images/bangalore.webp', localAngle: 'Garden City', guidesCount: 289 },
  { id: 'kolkata', name: 'Kolkata', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1784978999/cities/kolkata.jpg', localAngle: 'City of Joy', guidesCount: 0 },
  { id: 'udaipur', name: 'Udaipur', image: '/cities-images/udaipur.webp', localAngle: 'City of Lakes', guidesCount: 156 },
  { id: 'amritsar', name: 'Amritsar', image: '/cities-images/amritsar.webp', localAngle: 'Golden Temple', guidesCount: 142 },
  { id: 'rishikesh', name: 'Rishikesh', image: '/cities-images/rishikesh.webp', localAngle: 'Yoga Capital', guidesCount: 134 },
  { id: 'leh-ladakh', name: 'Leh Ladakh', image: '/cities-images/leh-ladakh.webp', localAngle: 'Himalayan Desert', guidesCount: 98 },
  { id: 'kashmir', name: 'Kashmir', image: '/cities-images/kashmir.webp', localAngle: 'Alpine Paradise', guidesCount: 87 },
  // Other cities
  { id: 'tokyo', name: 'Tokyo', image: '/cities-images/tokyo.webp', localAngle: 'Neon & Tradition', guidesCount: 342 },
  { id: 'kyoto', name: 'Kyoto', image: '/kyoto-hero.webp', localAngle: 'Zen & Temples', guidesCount: 184 },
  { id: 'bali', name: 'Ubud', image: '/cities-images/bali.webp', localAngle: 'Spirit & Jungle', guidesCount: 256 },
  { id: 'bangkok', name: 'Bangkok', image: '/cities-images/bangkok.webp', localAngle: 'Street Food Capital', guidesCount: 421 },
  { id: 'dubai', name: 'Dubai', image: '/dubai-hero.webp', localAngle: 'Modern Oasis', guidesCount: 287 },
  { id: 'singapore', name: 'Singapore', image: '/cities-images/singapore.webp', localAngle: 'Garden City', guidesCount: 234 },
  { id: 'seoul', name: 'Seoul', image: '/cities-images/seoul.webp', localAngle: 'K-Pop & Palaces', guidesCount: 312 },
  { id: 'hongkong', name: 'Hong Kong', image: '/cities-images/hongkong.webp', localAngle: 'Skyline & Dim Sum', guidesCount: 298 },
  { id: 'kuala-lumpur', name: 'Kuala Lumpur', image: '/kuala-lumpur-hero.webp', localAngle: 'Twin Towers', guidesCount: 156 },
  { id: 'taipei', name: 'Taipei', image: '/taipei-hero.webp', localAngle: 'Night Markets', guidesCount: 189 },
  { id: 'osaka', name: 'Osaka', image: '/osaka-hero.webp', localAngle: 'Food Paradise', guidesCount: 198 },
  { id: 'chiang-mai', name: 'Chiang Mai', image: '/chiang-mai-hero.webp', localAngle: 'Temples & Mountains', guidesCount: 198 },
  { id: 'hanoi', name: 'Hanoi', image: '/hanoi-hero.webp', localAngle: 'Old Quarter & Street Food', guidesCount: 245 },
  { id: 'ho-chi-minh-city', name: 'Ho Chi Minh City', image: '/ho-chi-minh-city-hero.webp', localAngle: 'History & Markets', guidesCount: 267 },
  { id: 'beijing', name: 'Beijing', image: '/beijing-hero.webp', localAngle: 'Great Wall & Forbidden City', guidesCount: 389 },
  { id: 'shanghai', name: 'Shanghai', image: '/shanghai-hero.webp', localAngle: 'Skyline & The Bund', guidesCount: 356 },
  { id: 'manila', name: 'Manila', image: '/manila-hero.webp', localAngle: 'Spanish Heritage & Culture', guidesCount: 223 },
  { id: 'cebu', name: 'Cebu', image: '/cebu-hero.webp', localAngle: 'Beaches & Diving', guidesCount: 178 },
  { id: 'siem-reap', name: 'Siem Reap', image: '/siem-reap-hero.webp', localAngle: 'Angkor Wat & Temples', guidesCount: 234 },
  { id: 'kathmandu', name: 'Kathmandu', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1781173265/cities/kathmandu.jpg', localAngle: 'Himalayan Gateway', guidesCount: 189 },
  { id: 'yangon', name: 'Yangon', image: '/yangon-hero.webp', localAngle: 'Shwedagon Pagoda', guidesCount: 156 },
  { id: 'colombo', name: 'Colombo', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1781173226/cities/colombo.jpg', localAngle: 'Coastal Capital & Tea', guidesCount: 167 },
  { id: 'kandy', name: 'Kandy', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1781173199/cities/kandy.jpg', localAngle: 'Sacred Tooth Temple & Tea', guidesCount: 142 },
  { id: 'galle', name: 'Galle', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1781173147/cities/galle.jpg', localAngle: 'Dutch Fort & Beaches', guidesCount: 128 },
  { id: 'sigiriya', name: 'Sigiriya', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1781173151/cities/sigiriya.jpg', localAngle: 'Lion Rock Fortress', guidesCount: 96 },
  { id: 'ella', name: 'Ella', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1781173157/cities/ella.jpg', localAngle: 'Hill Country & Train Rides', guidesCount: 88 },
  { id: 'nuwara-eliya', name: 'Nuwara Eliya', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1781173161/cities/nuwara-eliya.jpg', localAngle: 'Tea Country Highlands', guidesCount: 79 },
  { id: 'pokhara', name: 'Pokhara', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1781173166/cities/pokhara.jpg', localAngle: 'Lakes & Annapurna Views', guidesCount: 164 },
  { id: 'chitwan', name: 'Chitwan', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1781173170/cities/chitwan.jpg', localAngle: 'Jungle Safari & Rhinos', guidesCount: 73 },
  { id: 'bhaktapur', name: 'Bhaktapur', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1781173206/cities/bhaktapur.jpg', localAngle: 'Medieval Newari Heritage', guidesCount: 91 },
  { id: 'lumbini', name: 'Lumbini', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1781173217/cities/lumbini.jpg', localAngle: 'Birthplace of Buddha', guidesCount: 64 },
  { id: 'yogyakarta', name: 'Yogyakarta', image: '/yogyakarta-hero.webp', localAngle: 'Borobudur & Javanese Culture', guidesCount: 201 },
  { id: 'penang', name: 'Penang', image: '/penang-hero.webp', localAngle: 'UNESCO Heritage & Food', guidesCount: 189 },
  { id: 'busan', name: 'Busan', image: '/busan-hero.webp', localAngle: 'Beaches & Seafood', guidesCount: 234 },
];

export const ATTRACTIONS: AttractionData[] = [
  { id: 'a1', title: 'Fushimi Inari Shrine', location: 'Kyoto', whyLocal: 'Hidden pathways & ritual etiquette', experts: 45, image: '/things-to-do/fushimi-inari.webp' },
  { id: 'a2', title: 'Grand Palace', location: 'Bangkok', whyLocal: 'Decoding royal symbols with locals', experts: 82, image: '/things-to-do/bangkok-grand-palace.webp' },
  { id: 'a3', title: 'Angkor Wat', location: 'Siem Reap', whyLocal: 'Stories behind the bas-reliefs', experts: 120, image: '/things-to-do/angkor-wat.webp' },
  { id: 'a4', title: 'Borobudur Temple', location: 'Java, Indonesia', whyLocal: 'Buddhist cosmology decoded in stone', experts: 67, image: '/borobudur-hero.webp' },
  { id: 'a5', title: 'Halong Bay', location: 'Vietnam', whyLocal: 'Limestone karsts & ancient fishing traditions', experts: 54, image: '/halong-bay-hero.webp' },
  { id: 'a6', title: 'Sigiriya Rock Fortress', location: 'Sri Lanka', whyLocal: 'Royal citadel frescoes & water gardens', experts: 38, image: '/sigiriya-hero.webp' },
];

// Moved to lib/cityCountryMap.ts so middleware.ts can import it without
// pulling this entire file into the Edge bundle. Re-exported here so all the
// existing `from '@/lib/constants'` imports keep working unchanged.
export { CITY_URL_MAP, VALID_COUNTRIES } from './cityCountryMap';
import { CITY_URL_MAP } from './cityCountryMap';

export function getCityUrl(cityName: string, cityId: string): string {
  const mapping = CITY_URL_MAP[cityId.toLowerCase()];
  if (mapping) {
    return `/${mapping.country}/${mapping.city}`;
  }
  const citySlug = cityName.toLowerCase().replace(/\s+/g, '-');
  return `/india/${citySlug}`;
}

export const AGRA_INFO_SLUGS = [
  'things-to-do-in-agra', 'places-to-visit-in-agra', '1-day-agra-itinerary',
  'taj-mahal-ticket-price-2026', 'taj-mahal-opening-time', 'is-taj-mahal-closed-on-friday',
  'agra-travel-guide-2026', 'taj-mahal', 'agra-fort', 'fatehpur-sikri',
  'agra-gatimaan-entry-ticket', 'delhi-to-agra', 'same-day-agra-tour-from-delhi',
  'best-time-to-visit-agra'
];

export const DELHI_INFO_SLUGS = [
  'delhi-travel-guide-2026', 'red-fort', 'qutub-minar', 'humayuns-tomb',
  'india-gate', 'things-to-do-in-delhi', 'delhi-1-day-itinerary'
];

export const JAIPUR_INFO_SLUGS = [
  'things-to-do-in-jaipur', 'jaipur-travel-guide-2026',
  '1-day-jaipur-itinerary', 'amber-fort', 'hawa-mahal',
  'city-palace-jaipur', 'nahargarh-fort', 'places-to-visit-in-jaipur',
  'jantar-mantar-jaipur', 'jal-mahal', 'jaipur-shopping-guide',
  'best-time-to-visit-jaipur', '2-day-jaipur-itinerary'
];

export const PHUKET_INFO_SLUGS = [
  'things-to-do-in-phuket', 'phuket-travel-guide-2026',
  'big-buddha-phuket', 'wat-chalong', 'phuket-old-town',
  'phuket-1-day-itinerary', 'phi-phi-islands', 'phang-nga-bay',
  'james-bond-island-phuket', 'phuket-island-hopping',
  'muay-thai-training-phuket',
  // Authority pages batch 2 (2026-08)
  'best-time-to-visit-phuket', 'phuket-beaches-guide', 'phuket-3-day-itinerary',
  'maya-bay-phuket', 'phuket-elephant-sanctuary-guide', 'phuket-food-guide',
  'phuket-diving-snorkeling-guide'
];

export const BANGKOK_INFO_SLUGS = [
  'things-to-do-in-bangkok', 'bangkok-travel-guide-2026',
  'grand-palace-bangkok', 'wat-pho', 'wat-arun',
  '1-day-bangkok-itinerary', 'floating-market-bangkok',
  'bangkok-canal-tour', 'chatuchak-weekend-market',
  'places-to-visit-in-bangkok',
  // Authority pages batch 2 (2026-08)
  'best-time-to-visit-bangkok', '3-day-bangkok-itinerary',
  'bangkok-ayutthaya-day-trip', 'chinatown-yaowarat-bangkok',
  'where-to-stay-in-bangkok', 'bangkok-street-food-guide',
  'khao-san-road-bangkok', 'bangkok-kanchanaburi-day-trip'
];

export const CHIANG_MAI_INFO_SLUGS = [
  'chiang-mai-burning-season-guide', 'best-time-to-visit-chiang-mai',
  'chiang-mai-3-day-itinerary', 'yi-peng-lantern-festival-chiang-mai',
  'doi-suthep-chiang-mai', 'khao-soi-chiang-mai-food-guide',
  'chiang-mai-elephant-sanctuary-guide'
];
export const PATTAYA_INFO_SLUGS = [
  'is-pattaya-worth-visiting', 'sanctuary-of-truth-pattaya',
  'koh-larn-island-guide', 'where-to-stay-in-pattaya',
  'best-time-to-visit-pattaya', 'nong-nooch-tropical-garden-pattaya',
  'pattaya-2-day-itinerary', 'pattaya-cabaret-shows-guide'
];
export const KRABI_INFO_SLUGS = [
  'best-time-to-visit-krabi', 'railay-beach-krabi',
  'krabi-4-islands-tour-guide', 'tiger-cave-temple-krabi',
  'where-to-stay-in-krabi', 'krabi-3-day-itinerary',
  'krabi-vs-phuket-which-to-visit'
];
// Re-add a slug here ONLY once its page exists in lib/tokyoInfoContent.ts.
// Registering a slug without content ships a live, indexable page that renders
// nothing but the title — worse for SEO than a 404.
export const TOKYO_INFO_SLUGS = [
  'best-time-to-visit-tokyo', 'tokyo-3-day-itinerary', 'getting-around-tokyo',
  'shibuya-crossing-guide', 'tokyo-go-kart-guide', 'mount-fuji-day-trip-from-tokyo',
  'tokyo-food-guide'
];

// Re-add a slug here ONLY once its page exists in lib/kyotoInfoContent.ts.
export const KYOTO_INFO_SLUGS = [
  'best-time-to-visit-kyoto', 'getting-around-kyoto', 'kyoto-3-day-itinerary',
  'fushimi-inari-guide', 'arashiyama-bamboo-forest-guide', 'gion-geisha-district-guide',
  'kyoto-food-guide'
];

// Re-add a slug here ONLY once its page exists in lib/sapporoInfoContent.ts.
export const SAPPORO_INFO_SLUGS = [
  'best-time-to-visit-sapporo', 'sapporo-snow-festival-guide', 'getting-around-sapporo',
  'sapporo-food-guide', 'otaru-day-trip-from-sapporo', 'niseko-and-hokkaido-ski-guide',
  'sapporo-3-day-itinerary'
];

// Re-add a slug here ONLY once its page exists in lib/naraInfoContent.ts.
export const NARA_INFO_SLUGS = [
  'best-time-to-visit-nara', 'nara-deer-park-guide', 'todai-ji-temple-guide',
  'nara-day-trip-from-kyoto-osaka', 'nara-half-day-itinerary'
,
  'kasuga-taisha-guide',
  'naramachi-guide',
  'nara-food-guide',
  'getting-around-nara',
  'mount-yoshino-cherry-blossom-guide'];

// Re-add a slug here ONLY once its page exists in lib/nagoyaInfoContent.ts.
export const NAGOYA_INFO_SLUGS = [
  'best-time-to-visit-nagoya', 'nagoya-castle-guide', 'getting-around-nagoya',
  'nagoya-food-guide', 'nagoya-day-trips', 'nagoya-2-day-itinerary'
,
  'ghibli-park-guide',
  'nagoya-castle-keep-closure',
  'atsuta-shrine-guide',
  'toyota-museums-guide',
  'nakasendo-magome-tsumago-guide'];

// Re-add a slug here ONLY once its page exists in lib/ellaInfoContent.ts.
export const ELLA_INFO_SLUGS = [
  'nine-arch-bridge-guide',
  'little-adams-peak-and-ella-rock',
  'ella-city-guide',
  'getting-to-ella',
  'best-time-to-visit-ella',
  'ella-2-day-itinerary'
];

// Re-add a slug here ONLY once its page exists in lib/galleInfoContent.ts.
export const GALLE_INFO_SLUGS = [
  'galle-fort-guide',
  'mirissa-whale-watching-guide',
  'south-coast-beaches-guide',
  'galle-2-day-itinerary'
];

// Re-add a slug here ONLY once its page exists in lib/negomboInfoContent.ts.
export const NEGOMBO_INFO_SLUGS = [
  'negombo-airport-guide',
  'negombo-lagoon-guide'
];

// Re-add a slug here ONLY once its page exists in lib/nuwaraEliyaInfoContent.ts.
export const NUWARA_ELIYA_INFO_SLUGS = [
  'nuwara-eliya-tea-guide',
  'horton-plains-guide'
];

// Re-add a slug here ONLY once its page exists in lib/bentotaInfoContent.ts.
export const BENTOTA_INFO_SLUGS = [
  'madu-river-safari-guide',
  'bentota-guide'
];

// Re-add a slug here ONLY once its page exists in lib/mirissaInfoContent.ts.
export const MIRISSA_INFO_SLUGS = [
  'mirissa-guide'
];

// Re-add a slug here ONLY once its page exists in lib/sigiriyaInfoContent.ts.
export const SIGIRIYA_INFO_SLUGS = [
  'sigiriya-rock-guide', 'dambulla-cave-temple-guide', 'minneriya-elephant-gathering-guide', 'sigiriya-2-day-itinerary',
  'best-time-to-visit-sigiriya', 'getting-around-sigiriya', 'polonnaruwa-guide', 'anuradhapura-guide'
];

// Re-add a slug here ONLY once its page exists in lib/kandyInfoContent.ts.
export const KANDY_INFO_SLUGS = [
  'temple-of-the-tooth-guide', 'kandy-to-ella-train-guide', 'kandy-esala-perahera-guide', 'best-time-to-visit-kandy',
  'kandy-city-guide', 'getting-around-kandy', 'day-trips-from-kandy', 'kandy-2-day-itinerary'
];

// Re-add a slug here ONLY once its page exists in lib/colomboInfoContent.ts.
export const COLOMBO_INFO_SLUGS = [
  'best-time-to-visit-colombo', 'colombo-city-guide', 'getting-around-colombo',
  'colombo-food-guide', 'day-trips-from-colombo', 'colombo-2-day-itinerary',
  'pettah-market-guide', 'galle-face-green-guide'
];

// Re-add a slug here ONLY once its page exists in lib/hakoneInfoContent.ts.
export const HAKONE_INFO_SLUGS = [
  'climbing-mount-fuji-guide', 'best-time-to-visit-hakone', 'getting-around-hakone',
  'hakone-onsen-guide', 'mount-fuji-viewpoints', 'hakone-2-day-itinerary'
];

// Re-add a slug here ONLY once its page exists in lib/hiroshimaInfoContent.ts.
export const HIROSHIMA_INFO_SLUGS = [
  'best-time-to-visit-hiroshima', 'hiroshima-2-day-itinerary', 'getting-around-hiroshima',
  'peace-memorial-park-guide', 'miyajima-island-guide', 'hiroshima-food-guide',
  'hiroshima-day-trips'
];

// Re-add a slug here ONLY once its page exists in lib/osakaInfoContent.ts.
export const OSAKA_INFO_SLUGS = [
  'best-time-to-visit-osaka', 'osaka-3-day-itinerary', 'getting-around-osaka',
  'osaka-castle-guide', 'dotonbori-guide', 'osaka-food-guide',
  'osaka-to-nara-day-trip', 'osaka-to-kyoto-day-trip', 'shinsekai-guide',
  'osaka-nightlife-guide'
];

export const KASHMIR_INFO_SLUGS = [
  'kashmir-travel-guide-2026', 'things-to-do-in-kashmir',
  'places-to-visit-in-kashmir', 'best-time-to-visit-kashmir',
  'dal-lake-srinagar', 'gulmarg-travel-guide',
  'pahalgam-travel-guide', 'sonamarg-travel-guide',
  'mughal-gardens-srinagar', 'kashmir-houseboat-guide',
  'srinagar-travel-guide', 'kashmir-food-guide',
  'kashmir-in-winter', 'kashmir-in-summer',
  'kashmir-budget-guide'
];

// Shared city locations/places - used in both tour creation and city pages
export const CITY_LOCATIONS: Record<string, string[]> = {
  // --- SRI LANKA ---
  'Colombo': [
    'Gangaramaya Temple', 'Pettah Market', 'Galle Face Green', 'Old Dutch Hospital',
    'Independence Square', 'Red Mosque (Jami Ul-Alfar)', 'National Museum',
    'Viharamahadevi Park', 'Beira Lake', 'Mount Lavinia Beach'
  ],
  'Kandy': [
    'Temple of the Sacred Tooth Relic', 'Kandy Lake', 'Royal Botanical Gardens, Peradeniya',
    'Bahirawakanda Buddha Statue', 'Udawattakele Forest Reserve', 'Kandy View Point',
    'Ceylon Tea Museum', 'Kandy Market'
  ],
  'Galle': [
    'Galle Dutch Fort', 'Galle Lighthouse', 'Dutch Reformed Church', 'Maritime Museum',
    'Flag Rock', 'Unawatuna Beach', 'Jungle Beach', 'Japanese Peace Pagoda'
  ],
  'Sigiriya': [
    'Sigiriya Lion Rock', 'Sigiriya Frescoes', 'Pidurangala Rock', 'Dambulla Cave Temple',
    'Minneriya National Park', 'Kaudulla National Park', 'Sigiriya Museum', 'Water Gardens'
  ],
  'Ella': [
    'Nine Arches Bridge', "Little Adam's Peak", 'Ella Rock', 'Ravana Falls', 'Ravana Cave',
    'Demodara Loop', 'Tea Plantations', "Lipton's Seat"
  ],
  'Nuwara Eliya': [
    'Horton Plains National Park', "World's End", 'Gregory Lake', 'Pedro Tea Estate',
    'Hakgala Botanical Gardens', "Lover's Leap Waterfall", 'Victoria Park', 'Ambewela Farm'
  ],
  'Anuradhapura': [
    'Ruwanwelisaya', 'Sri Maha Bodhi', 'Jetavanaramaya', 'Abhayagiri Dagoba',
    'Isurumuniya Temple', 'Thuparamaya', 'Mihintale', 'Twin Ponds (Kuttam Pokuna)'
  ],
  // --- NEPAL ---
  'Kathmandu': [
    'Kathmandu Durbar Square', 'Swayambhunath (Monkey Temple)', 'Boudhanath Stupa',
    'Pashupatinath Temple', 'Thamel', 'Garden of Dreams', 'Asan Bazaar', 'Kopan Monastery'
  ],
  'Pokhara': [
    'Phewa Lake', 'Sarangkot', 'World Peace Pagoda', 'Davis Falls', 'Gupteshwor Cave',
    'Begnas Lake', 'International Mountain Museum', 'Bindhyabasini Temple'
  ],
  'Chitwan': [
    'Chitwan National Park', 'Rapti River', 'Elephant Breeding Centre', 'Tharu Village',
    'Bishazari Tal', 'Sauraha', 'Twenty Thousand Lakes'
  ],
  'Bhaktapur': [
    'Bhaktapur Durbar Square', 'Nyatapola Temple', 'Pottery Square', 'Dattatreya Square',
    '55-Window Palace', 'Taumadhi Square', 'Peacock Window'
  ],
  'Lumbini': [
    'Maya Devi Temple', 'Sacred Garden', 'Ashoka Pillar', 'Monastic Zone',
    'World Peace Pagoda', 'Lumbini Museum', 'Eternal Peace Flame', 'Bodhi Tree'
  ],
  'Nagarkot': [
    'Nagarkot View Tower', 'Sunrise Viewpoint', 'Nagarkot Nature Trail',
    'Mahakali Temple', 'Changu Narayan'
  ],
  'Delhi': [
    'India Gate', 'Jama Masjid', 'Qutb Minar', 'Chandni Chowk', "Humayun's Tomb",
    'Mehrauli New Delhi', 'Lotus Temple', 'Nizamuddin East New Delhi', 'Old Delhi',
    'Red Fort', 'Central Secretariat New Delhi', 'Rashtrapati Bhavan', 'Indira Gandhi International Airport',
    'Mahipalpur New Delhi', 'Raj Ghat', 'Connaught Place', 'Farash Khana New Delhi',
    'Gurudwara Bangla Sahib', 'Khari Baoli', 'Agrasen ki Baoli'
  ],
  'Mumbai': [
    'Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Chhatrapati Shivaji Terminus',
    'Haji Ali Dargah', 'Juhu Beach', 'Colaba Causeway', 'Bandra-Worli Sea Link'
  ],
  'Agra': [
    'Taj Mahal', 'Agra Fort', 'Baby Taj', 'Mehtab Bagh', 'Jama Masjid',
    'Agra Railway Station', 'Agra Airport',
    'Tomb of Akbar the Great', 'Shri Mankameshwar Temple', 'Sadar Bazar', 'Kinari Bazar'
  ],
  'Jaipur': [
    'Hawa Mahal', 'City Palace', 'Amber Fort', 'Jantar Mantar', 'Jal Mahal',
    'Man Sagar Lake', 'Panna Meena ka Kund', 'Albert Hall Museum', 'Gaitor Ki Chhatriyan',
    'Jaipur International Airport', 'Nahargarh Fort', 'Bapu Bazaar', 'Chandra Mahal',
    'Monkey Temple', 'Maota Lake', 'Jaigarh Fort', 'Patrika Gate', 'Chokhi Dhani', 'Birla Mandir'
  ],
  'Bangkok': [
    'Grand Palace', 'Wat Phra Kaew', 'Wat Pho', 'Wat Arun', 'Chatuchak Weekend Market',
    'Yaowarat Chinatown', 'Jim Thompson House', 'Lumphini Park', 'Asiatique The Riverfront',
    'ICONSIAM', 'Suvarnabhumi Airport', 'Don Mueang Airport', 'MahaNakhon Tower',
    'Damnoen Saduak Floating Market', 'Amphawa Floating Market', 'Taling Chan Floating Market',
    'Khao San Road', 'Silom', 'Sukhumvit', 'Ari', 'Thong Lo', 'Ekkamai',
    'Tha Chang Pier', 'Tha Tien Pier', 'Sathorn Pier', 'Bang Krachao',
    'Vimanmek Teak Mansion', 'Dusit Palace', 'National Museum Bangkok',
    'Erawan Shrine', 'Terminal 21', 'Siam Paragon', 'Central Embassy'
  ],
  'Kerala': [
    'Backwaters', 'Munnar', 'Alleppey', 'Kochi', 'Wayanad',
    'Thekkady', 'Kovalam Beach', 'Varkala'
  ],
  'Jodhpur': [
    'Mehrangarh Fort', 'Jaswant Thada', 'Umaid Bhawan Palace', 'Clock Tower',
    'Mandore Gardens', 'Rao Jodha Desert Rock Park', 'Ghanta Ghar', 'Balsamand Lake',
    'Jodhpur Railway Station', 'Jodhpur Airport', 'Sardar Market', 'Toorji Ka Jhalra',
    'Chamunda Mata Temple', 'Mahamandir Temple', 'Kaylana Lake', 'Machia Biological Park',
    'Rao Jodha Desert Rock Park', 'Bishnoi Village'
  ],
  'Bikaner': [
    'Junagarh Fort', 'Karni Mata Temple', 'Lalgarh Palace', 'National Research Centre on Camel',
    'Gajner Palace', 'Laxmi Niwas Palace', 'Bikaner Camel Festival', 'Rampuria Havelis',
    'Bikaner Railway Station', 'Bikaner Airport', 'Kote Gate', 'Bhandasar Jain Temple',
    'Ganga Government Museum', 'Shri Laxminath Temple', 'Devi Kund Sagar', 'Camel Breeding Farm',
    'Sadul Singh Museum', 'Gajner Wildlife Sanctuary'
  ],
  'Mathura': [
    'Krishna Janmasthan Temple', 'Dwarkadhish Temple', 'Vrindavan', 'Govardhan Hill',
    'Banke Bihari Temple', 'Prem Mandir', 'ISKCON Temple', 'Radha Kund',
    'Mathura Railway Station', 'Mathura Junction', 'Vishram Ghat', 'Kusum Sarovar',
    'Gita Mandir', 'Rangji Temple', 'Seva Kunj', 'Nidhivan',
    'Mathura Museum', 'Barsana', 'Gokul'
  ],
  'Varanasi': [
    'Ganges River', 'Kashi Vishwanath Temple', 'Sarnath', 'Dashashwamedh Ghat',
    'Manikarnika Ghat', 'Assi Ghat', 'Banaras Hindu University', 'Varanasi Railway Station',
    'Varanasi Airport', 'Tulsi Manas Temple', 'Sankat Mochan Hanuman Temple', 'Durga Temple',
    'Ramnagar Fort', 'Bharat Mata Temple', 'New Vishwanath Temple', 'Man Mandir Observatory',
    'Alamgir Mosque', 'Chunar Fort', 'Vishalakshi Temple'
  ],
  'Khajuraho': [
    'Khajuraho Group of Monuments', 'Western Group of Temples', 'Eastern Group of Temples',
    'Southern Group of Temples', 'Archaeological Museum', 'Panna National Park', 'Raneh Falls',
    'Khajuraho Railway Station', 'Khajuraho Airport', 'Kandariya Mahadeva Temple', 'Lakshmana Temple',
    'Vishvanatha Temple', 'Chitragupta Temple', 'Adinath Temple', 'Parsvanath Temple',
    'Duladeo Temple', 'Chaturbhuj Temple', 'Beni Sagar Dam'
  ],
  'Gwalior': [
    'Gwalior Fort', 'Jai Vilas Palace', 'Teli Ka Mandir', 'Sas Bahu Temples',
    'Tansen Tomb', 'Gurudwara Data Bandi Chhod', 'Sun Temple', 'Scindia Museum',
    'Gwalior Railway Station', 'Gwalior Airport', 'Man Mandir Palace', 'Gurjari Mahal',
    'Gopachal Parvat', 'Tomb of Mohammad Ghaus', 'Gwalior Zoo', 'Phool Bagh',
    'Suraj Kund', 'Gwalior Trade Fair Ground', 'Maharaj Bada'
  ],
  'Aurangabad': [
    'Ajanta Caves', 'Ellora Caves', 'Bibi Ka Maqbara', 'Daulatabad Fort',
    'Grishneshwar Temple', 'Panchakki', 'Aurangabad Caves', 'Shivaji Museum',
    'Aurangabad Railway Station', 'Aurangabad Airport', 'Kailasa Temple', 'Buddhist Caves',
    'Jain Caves', 'Himroo Factory', 'Salim Ali Lake', 'Gautala Wildlife Sanctuary',
    'Pithalkora Caves', 'Lonar Crater Lake', 'Aurangabad Caves Complex'
  ],
  'Goa': [
    'Calangute Beach', 'Baga Beach', 'Anjuna Beach', 'Dudhsagar Falls',
    'Basilica of Bom Jesus', 'Fort Aguada', 'Spice Plantations', 'Goa Airport',
    'Goa Railway Station', 'Se Cathedral', 'Chapora Fort', 'Aguada Fort',
    'Dona Paula', 'Reis Magos Fort', 'Mangeshi Temple', 'Shri Shantadurga Temple',
    'Old Goa', 'Fontainhas', 'Candolim Beach', 'Vagator Beach'
  ],
  'Mysore': [
    'Mysore Palace', 'Chamundi Hill', 'Brindavan Gardens', "St. Philomena's Cathedral",
    'Mysore Zoo', 'Jaganmohan Palace', 'Karanji Lake', 'Railway Museum',
    'Mysore Railway Station', 'Mysore Airport', 'Chamundeshwari Temple', 'Lalitha Mahal Palace',
    'Krishnaraja Sagar Dam', 'Somnathpur Temple', 'Ranganathittu Bird Sanctuary', 'Melody World Wax Museum',
    'Sand Sculpture Museum', 'Devaraja Market', 'Mysore Silk Factory'
  ],
  'Bengaluru': [
    'Lalbagh Botanical Garden', 'Cubbon Park', 'Bangalore Palace', "Tipu Sultan's Summer Palace",
    'ISKCON Temple', 'Vidhana Soudha', 'Nandi Hills', 'Bannerghatta National Park',
    'Bangalore Railway Station', 'Bangalore Airport', 'Ulsoor Lake', 'Wonderla Amusement Park',
    'Innovation Film City', 'Bull Temple', 'Vidhana Soudha', 'UB City Mall',
    'Commercial Street', 'MG Road', 'Cubbon Park Metro Station', 'Bangalore Fort'
  ],
  'Kashmir': [
    'Dal Lake', 'Mughal Gardens', 'Shalimar Bagh', 'Nishat Bagh', 'Chashme Shahi',
    'Gulmarg Gondola', 'Pahalgam', 'Sonamarg', 'Betaab Valley', 'Aru Valley',
    'Shankaracharya Temple', 'Hazratbal Shrine', 'Pari Mahal', 'Yusmarg',
    'Dachigam National Park', 'Thajiwas Glacier', 'Wular Lake', 'Manasbal Lake',
    'Srinagar Old City', 'Lal Chowk'
  ],
  'Udaipur': [
    'City Palace', 'Lake Pichola', 'Jag Mandir', 'Jagdish Temple',
    'Monsoon Palace', 'Fateh Sagar Lake', 'Saheliyon Ki Bari'
  ],
  'Jaisalmer': [
    'Jaisalmer Fort', 'Patwon Ki Haveli', 'Sam Sand Dunes', 'Gadisar Lake',
    'Bada Bagh', 'Nathmal Ki Haveli', 'Salim Singh Ki Haveli', 'Desert Safari Camp'
  ],
  'Rishikesh': [
    'Laxman Jhula', 'Ram Jhula', 'Triveni Ghat', 'Neelkanth Mahadev Temple',
    'Beatles Ashram', 'Ganga Aarti', 'Adventure Activities'
  ],
  'Darjeeling': [
    'Tiger Hill', 'Darjeeling Himalayan Railway', 'Batasia Loop', 'Peace Pagoda',
    'Tea Gardens', 'Observatory Hill', 'Padmaja Naidu Himalayan Zoological Park'
  ],
  'Kolkata': [
    'Victoria Memorial', 'Howrah Bridge', 'Kalighat Temple', 'Dakshineswar Kali Temple',
    'Belur Math', 'Indian Museum', 'Marble Palace', 'Park Street',
    'College Street', 'Prinsep Ghat'
  ],
  'Amritsar': [
    'Golden Temple', 'Jallianwala Bagh', 'Wagah Border', 'Partition Museum',
    'Durgiana Temple', 'Gobindgarh Fort', 'Hall Bazaar', 'Khalsa College'
  ],
  'Tokyo': [
    'Senso-ji Temple', 'Tokyo Skytree', 'Shibuya Crossing', 'Meiji Shrine',
    'Tsukiji Outer Market', 'Imperial Palace', 'Harajuku', 'Ueno Park',
    'Tokyo Tower', 'Ginza District'
  ],
  'Kyoto': [
    'Fushimi Inari Shrine', 'Kiyomizu-dera Temple', 'Arashiyama Bamboo Grove', 'Kinkaku-ji (Golden Pavilion)',
    "Gion District", 'Nijo Castle', "Philosopher's Path", 'Tenryu-ji Temple',
    'Sanjusangendo Temple', 'Nishiki Market'
  ],
  'Osaka': [
    'Osaka Castle', 'Dotonbori', 'Universal Studios Japan', 'Shitennoji Temple',
    'Osaka Aquarium Kaiyukan', 'Umeda Sky Building', 'Shinsaibashi Shopping Street', 'Sumiyoshi Taisha',
    'Tempozan Ferris Wheel', 'Osaka Museum of History'
  ],
  'Hiroshima': [
    'Hiroshima Peace Memorial Park', 'Atomic Bomb Dome', 'Itsukushima Shrine (Miyajima)', 'Hiroshima Castle',
    'Shukkeien Garden', 'Mazda Museum', 'Hiroshima Peace Memorial Museum', 'Miyajima Island',
    'Okunoshima (Rabbit Island)', 'Hiroshima Museum of Art'
  ],
  'Nara': [
    'Todai-ji Temple', 'Nara Park', 'Kasuga Taisha Shrine', 'Kofuku-ji Temple',
    'Isuien Garden', 'Nara National Museum', 'Yoshikien Garden', 'Horyu-ji Temple',
    'Naramachi District', 'Mount Wakakusa'
  ],
  'Sapporo': [
    'Sapporo Snow Festival Site', 'Odori Park', 'Sapporo Beer Museum', 'Mount Moiwa',
    'Sapporo Clock Tower', 'Hokkaido Shrine', 'Sapporo TV Tower', 'Maruyama Park',
    'Susukino District', 'Historical Village of Hokkaido'
  ],
  'Yokohama': [
    'Yokohama Chinatown', 'Minato Mirai 21', 'Yokohama Landmark Tower', 'Sankeien Garden',
    'Yokohama Red Brick Warehouse', 'Yamashita Park', 'Yokohama Cosmo World', 'Yokohama Hakkeijima Sea Paradise',
    'Yokohama Museum of Art', 'Yokohama Port Museum'
  ],
  'Fukuoka': [
    'Fukuoka Castle Ruins', 'Ohori Park', 'Canal City Hakata', 'Dazaifu Tenmangu Shrine',
    'Fukuoka Tower', 'Kushida Shrine', 'Yatai Food Stalls', 'Uminonakamichi Seaside Park',
    'Fukuoka Asian Art Museum', 'Momochi Seaside Park'
  ],
  'Nagoya': [
    'Nagoya Castle', 'Atsuta Shrine', 'SCMAGLEV and Railway Park', 'Nagoya City Science Museum',
    'Osu Kannon Temple', 'Noritake Garden', 'Port of Nagoya Public Aquarium', 'Tokugawa Art Museum',
    'Shirotori Garden', 'Nagoya TV Tower'
  ],
  'Okinawa': [
    'Shuri Castle', 'Okinawa Churaumi Aquarium', 'Kokusai Street', 'Okinawa World',
    'Manza Beach', 'Nakagusuku Castle Ruins', 'Sefa Utaki', 'Okinawa Peace Memorial Park',
    'Cape Manzamo', 'Ryukyu Mura'
  ],
  'Chiang Mai': [
    'Doi Suthep', 'Old City Temples', 'Elephant Sanctuary (ethical only)', 'Doi Inthanon',
    'Sunday Walking Street', 'Night Bazaar', 'Sticky Waterfalls', 'Thai Cooking Class',
    'Chiang Rai (White Temple)', 'Nimmanhaemin Road'
  ],
  'Phuket': [
    'Phi Phi Islands', 'Phang Nga Bay / James Bond Island', 'Big Buddha', 'Wat Chalong',
    'Phuket Old Town', 'Promthep Cape', 'Private Speedboat Tour', 'Sunset Catamaran Cruise',
    'Elephant Sanctuary (ethical)', 'Patong Beach (optional)'
  ],
  'Pattaya': [
    'Sanctuary of Truth', 'Walking Street', 'Nong Nooch Botanical Garden', 'Pattaya Beach',
    'Jomtien Beach', 'Pattaya Floating Market', 'Koh Larn (Coral Island)', 'Mini Siam',
    'Art in Paradise', 'Big Buddha Temple'
  ],
  'Krabi': [
    'Railay Beach', 'Ao Nang', 'Emerald Pool (Thung Teao)', 'Tiger Cave Temple',
    'Koh Lanta', 'Krabi Town Night Market', 'Phra Nang Beach', 'Hong Islands',
    'Maya Bay', 'Khao Khanab Nam'
  ],
  'Ayutthaya': [
    'Wat Mahathat', 'Wat Phra Si Sanphet', 'Wat Chaiwatthanaram', 'Wat Yai Chai Mongkhon',
    'Ayutthaya Historical Park', 'Bang Pa-In Royal Palace', 'Wat Phra Ram', 'Wat Lokayasutharam',
    'Chao Sam Phraya National Museum', 'Chao Phraya River'
  ],
  'Sukhothai': [
    'Sukhothai Historical Park', 'Wat Mahathat', 'Wat Si Chum', 'Wat Sa Si',
    'Wat Phra Phai Luang', 'Ramkhamhaeng National Museum', 'Wat Sorasak', 'Wat Traphang Ngoen',
    'Si Satchanalai Historical Park', 'Sangkhalok Museum'
  ],
  'Hua Hin': [
    'Hua Hin Beach', 'Cicada Market', 'Hua Hin Railway Station', 'Khao Takiab',
    'Vana Nava Water Jungle', 'Monsoon Valley Vineyard', 'Phraya Nakhon Cave', 'Black Mountain Water Park',
    'Hua Hin Night Market', 'Maruekhathaiyawan Palace'
  ],
  'Ko Samui': [
    'Chaweng Beach', 'Lamai Beach', 'Big Buddha Temple (Wat Phra Yai)', "Fisherman's Village Bophut",
    'Hin Ta and Hin Yai Rocks', 'Na Muang Waterfalls', 'Ang Thong National Marine Park', 'Secret Buddha Garden',
    'Wat Plai Laem', 'Silver Beach'
  ],
  'Ko Phangan': [
    'Full Moon Party (Haad Rin)', 'Thong Sala Night Market', 'Bottle Beach', 'Salad Beach',
    'Phaeng Waterfall', 'Than Sadet National Park', 'Mae Haad Beach', 'Koh Ma',
    'Wat Phu Khao Noi', 'Secret Beach'
  ],
  'Ko Lanta': [
    'Long Beach (Phra Ae)', 'Klong Dao Beach', 'Mu Ko Lanta National Park', 'Lanta Old Town',
    'Klong Nin Beach', 'Bamboo Bay', 'Khlong Chak Waterfall', 'Koh Rok',
    'Sala Dan Pier', 'Sea Gypsy Village'
  ],
  'Phi Phi Islands': [
    'Maya Bay', 'Phi Phi Viewpoint', 'Bamboo Island', 'Monkey Beach', 'Viking Cave',
    'Tonsai Village', 'Loh Dalum Bay', 'Pi Leh Bay', 'Moo Dee Bay', 'Mosquito Island'
  ],
  'Pai': [
    'Pai Canyon', 'Tham Lod Cave', 'Yun Lai Viewpoint', 'Pai Walking Street', 'Mo Paeng Waterfall',
    'Tha Pai Hot Springs', 'Chedi Phra That Mae Yen (White Buddha)', 'Santichon Village', 'Bamboo Bridge', 'Pai River'
  ],
};

export const TRANSPORTATION_TYPES: string[] = [
  'Bike', 'Segway', 'Electric bike', 'Mountain bike', 'Motorcycle', 'Scooter',
  'Car', 'Limousine', 'Jeep / SUV', 'Van', 'Bus / coach', 'Electric car',
  'Vintage car', 'Black cab', 'Sailboat', 'Ferry', 'Gondola', 'Duck boat',
  'Sightseeing cruise', 'Water taxi', 'Jetski', 'Riverboat', 'Kayak', 'Raft',
  'Catamaran', 'Speedboat', 'Yacht', 'Canoe', 'Paddleboard', 'Surfboard',
  'Submarine', 'Other water transport', 'Glass bottom boat', 'Lake cruise',
  'Banana boat', 'Beer boat', 'Airboat', 'Dhow', 'Train', 'Tram', 'Subway',
  'Helicopter', 'Airplane', 'Balloon', 'Glider', 'Public transportation',
  'Cable car', 'Quad ATV', 'Pedicab / rickshaw', 'Horse carriage', 'Camel',
  'Snowmobile', 'Sled', 'Other animal', 'Beer bike', 'Trike', 'Tuk tuk',
  'Motorized tuk tuk', 'Golf cart', 'On foot', 'Horse'
];

export type EntryTicketOption = 'paid_included' | 'paid_not_included' | 'free_entry' | 'exterior_only';

export const ENTRY_TICKET_OPTIONS: Array<{
  value: EntryTicketOption;
  label: string;
  description: string;
}> = [
  {
    value: 'paid_included',
    label: 'Paid entry: ticket included',
    description: 'The activity enters the location, and the ticket is included in the activity price.'
  },
  {
    value: 'paid_not_included',
    label: 'Paid entry: ticket not included',
    description: 'The activity enters the location, but the ticket is not included in the activity price. Customers must pay the entrance fee during the activity.'
  },
  {
    value: 'free_entry',
    label: 'Free entry: no ticket required',
    description: 'The location is free to enter. No ticket is required.'
  },
  {
    value: 'exterior_only',
    label: 'No entry: exterior visit only',
    description: "The activity does not enter the location, but it is part of the experience (e.g. the attraction's exterior is visited or detailed during a guided tour, etc)."
  }
];
