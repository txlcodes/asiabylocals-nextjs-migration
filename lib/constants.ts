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
  { id: 'siem-reap', name: 'Siem Reap', image: 'https://images.asiabylocals.com/asiabylocals/tours/angkor-sunrise-or-sunset-tour/img0/1600.webp', localAngle: 'Angkor Wat & Temples', guidesCount: 1085 },
  { id: 'delhi', name: 'Delhi', image: '/delhi-home.webp', localAngle: 'Historic Capital', guidesCount: 648 },
  { id: 'bali', name: 'Ubud', image: 'https://images.asiabylocals.com/asiabylocals/tours/waterfall-rice-terraces-and-monkey-forest-private-tour-in-ubud/img0/1600.webp', localAngle: 'Spirit & Jungle', guidesCount: 598 },
  { id: 'agra', name: 'Agra', image: '/agra-hero.webp', localAngle: 'Mughal Heritage', guidesCount: 559 },
  { id: 'jaipur', name: 'Jaipur', image: '/jaipur-hero.webp', localAngle: 'Pink City', guidesCount: 513 },
  { id: 'ha-long', name: 'Ha Long', image: 'https://images.asiabylocals.com/asiabylocals/tours/hue-imperial-city-tour-and-dragon-cruise-experience-ha-long/img0/1600.webp', localAngle: 'Limestone Karsts & Cruises', guidesCount: 335 },
  { id: 'kyoto', name: 'Kyoto', image: '/kyoto-hero.webp', localAngle: 'Zen & Temples', guidesCount: 319 },
  { id: 'sapa', name: 'Sapa', image: 'https://images.asiabylocals.com/asiabylocals/tours/hanoi-to-sapa-terraced-fields-culture-and-cuisine-3-days-by-local-operator/img0/1600.webp', localAngle: 'Rice Terraces & Trekking', guidesCount: 319 },
  { id: 'hoi-an', name: 'Hoi An', image: 'https://images.asiabylocals.com/asiabylocals/tours/hoi-an-bus-tour-4-stops-via-hai-van-pass/img0/1600.webp', localAngle: 'Lantern Old Town', guidesCount: 316 },
  { id: 'krabi', name: 'Krabi', image: 'https://images.asiabylocals.com/asiabylocals/tours/premium-phi-phi-islands-day-trip-with-lunch-and-snorkel/img0/1600.webp', localAngle: 'Limestone Cliffs & Islands', guidesCount: 309 },
  { id: 'tokyo', name: 'Tokyo', image: '/cities-images/tokyo.webp', localAngle: 'Neon & Tradition', guidesCount: 294 },
  { id: 'bangkok', name: 'Bangkok', image: '/cities-images/bangkok.webp', localAngle: 'Street Food Capital', guidesCount: 291 },
  { id: 'ho-chi-minh-city', name: 'Ho Chi Minh City', image: '/ho-chi-minh-city-hero.webp', localAngle: 'History & Markets', guidesCount: 291 },
  { id: 'dubai', name: 'Dubai', image: '/dubai-hero.webp', localAngle: 'Modern Oasis', guidesCount: 291 },
  { id: 'colombo', name: 'Colombo', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1781173226/cities/colombo.jpg', localAngle: 'Coastal Capital & Tea', guidesCount: 289 },
  { id: 'kandy', name: 'Kandy', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1781173199/cities/kandy.jpg', localAngle: 'Sacred Tooth Temple & Tea', guidesCount: 261 },
  { id: 'phnom-penh', name: 'Phnom Penh', image: 'https://images.asiabylocals.com/asiabylocals/tours/taprohm-bati-chisor-temple-and-putkiri-pagoda-tour/img0/1600.webp', localAngle: 'Riverside Capital & History', guidesCount: 256 },
  { id: 'chiang-mai', name: 'Chiang Mai', image: '/chiang-mai-hero.webp', localAngle: 'Temples & Mountains', guidesCount: 245 },
  { id: 'hanoi', name: 'Hanoi', image: '/hanoi-hero.webp', localAngle: 'Old Quarter & Street Food', guidesCount: 242 },
  { id: 'phuket', name: 'Phuket', image: '/things-to-do/phuket-phi-phi.webp', localAngle: 'Beaches & Island Hopping', guidesCount: 241 },
  { id: 'osaka', name: 'Osaka', image: '/osaka-hero.webp', localAngle: 'Food Paradise', guidesCount: 209 },
  { id: 'da-nang', name: 'Da Nang', image: 'https://images.asiabylocals.com/asiabylocals/tours/ba-na-hills-and-golden-bridge-day-trip/img0/1600.webp', localAngle: 'Golden Bridge & Beaches', guidesCount: 180 },
  { id: 'pattaya', name: 'Pattaya', image: 'https://images.asiabylocals.com/asiabylocals/tours/flyboard-experience-in-pattaya/img0/1600.webp', localAngle: 'Beaches & Water Sports', guidesCount: 153 },
  { id: 'ella', name: 'Ella', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1781173157/cities/ella.jpg', localAngle: 'Hill Country & Train Rides', guidesCount: 144 },
  { id: 'nusa-penida', name: 'Nusa Penida', image: 'https://images.asiabylocals.com/asiabylocals/tours/kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida/img2/1600.webp', localAngle: 'Kelingking & Manta Rays', guidesCount: 140 },
  { id: 'sigiriya', name: 'Sigiriya', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1781173151/cities/sigiriya.jpg', localAngle: 'Lion Rock Fortress', guidesCount: 137 },
  { id: 'hiroshima', name: 'Hiroshima', image: 'https://images.asiabylocals.com/asiabylocals/tours/hiroshima-and-miyajima-1-day-tour-with-lunch/img0/1600.webp', localAngle: 'Peace Memorial & Miyajima', guidesCount: 132 },
  { id: 'sapporo', name: 'Sapporo', image: 'https://images.asiabylocals.com/asiabylocals/tours/furano-biei-and-ningle-terrace-winter-light-tour/img0/1600.webp', localAngle: 'Snow & Flower Fields', guidesCount: 128 },
  { id: 'nara', name: 'Nara', image: 'https://images.asiabylocals.com/asiabylocals/tours/nara-half-day-small-group-tour/img0/1600.webp', localAngle: 'Deer Park & Ancient Temples', guidesCount: 128 },
  { id: 'galle', name: 'Galle', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1781173147/cities/galle.jpg', localAngle: 'Dutch Fort & Beaches', guidesCount: 123 },
  { id: 'nagoya', name: 'Nagoya', image: 'https://images.asiabylocals.com/asiabylocals/tours/shirakawa-go-and-hida-takayama-full-day-trip/img0/1600.webp', localAngle: 'Castle & Day Trips', guidesCount: 119 },
  { id: 'uluwatu', name: 'Uluwatu', image: 'https://images.asiabylocals.com/asiabylocals/tours/kecak-fire-dance-show-and-uluwatu-temple-entry-ticket/img0/1600.webp', localAngle: 'Cliff Temples & Kecak', guidesCount: 85 },
  { id: 'canggu', name: 'Canggu', image: 'https://images.asiabylocals.com/asiabylocals/tours/bali-private-surf-lesson-with-surf-photos-and-videos/img0/1600.webp', localAngle: 'Surf, Sunsets & Rice Fields', guidesCount: 77 },
  { id: 'abu-dhabi', name: 'Abu Dhabi', image: 'https://images.asiabylocals.com/asiabylocals/tours/abu-dhabi-stand-up-paddle-boarding-guided-tour/img0/1600.webp', localAngle: 'Grand Mosque & Desert', guidesCount: 76 },
  { id: 'mount-fuji', name: 'Mount Fuji', image: 'https://images.asiabylocals.com/asiabylocals/tours/small-group-mt-fuji-lake-tanuki-and-makaino-farm-day-tour/img0/1600.webp', localAngle: 'Iconic Peak & Lakes', guidesCount: 66 },
  { id: 'mirissa', name: 'Mirissa', image: 'https://images.asiabylocals.com/asiabylocals/tours/sl-858113/img0/1600.webp', localAngle: 'Whale Watching & Beaches', guidesCount: 63 },
  { id: 'bentota', name: 'Bentota', image: 'https://images.asiabylocals.com/asiabylocals/tours/sl-894605/img0/1600.webp', localAngle: 'River Safari & Beaches', guidesCount: 31 },
  { id: 'hakone', name: 'Hakone', image: 'https://images.asiabylocals.com/asiabylocals/tours/hakone-hachiri-old-tokaido-highway-hiking-tour-by-local-operator/img0/1600.webp', localAngle: 'Hot Springs & Fuji Views', guidesCount: 30 },
  { id: 'negombo', name: 'Negombo', image: 'https://images.asiabylocals.com/asiabylocals/tours/negombo-sunset-lagoon-safari-with-fishermen/img0/1600.webp', localAngle: 'Lagoon & Fishing Village', guidesCount: 27 },
  { id: 'nuwara-eliya', name: 'Nuwara Eliya', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1781173161/cities/nuwara-eliya.jpg', localAngle: 'Tea Country Highlands', guidesCount: 21 },
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
  'best-time-to-visit-agra',
  // 2026-09: gaps Search Console showed. "agra tour guide" sat at position
  // 29.6 with no page, and Agra had no shopping guide while Delhi and Jaipur did.
  'agra-tour-guide', 'mehtab-bagh', 'agra-shopping-guide',
  // GEO listicle pages (2026-10)
  'best-tours-in-agra',
  // GEO single-topic pages (2026-10)
  'best-taj-mahal-tour', 'best-taj-mahal-sunrise-tour', 'best-full-day-agra-tour',
  'taj-mahal-skip-the-line-tickets', 'best-taj-mahal-photography-tour',
  'best-private-taj-mahal-tour', 'best-baby-taj-tour', 'golden-triangle-tour-india',
  'best-agra-tour-operator', 'best-agra-tour-for-families', 'is-agra-safe-for-tourists',
  'best-hotel-near-taj-mahal', 'taj-mahal-night-viewing-tour',
  'agra-tour-guide-scams-how-to-avoid-touts',
  'should-i-book-taj-mahal-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-agra',
  // 2026-10-31: human-phrased "best X / is X worth it" pages that sell live Agra tours.
  'best-taj-mahal-tour-from-delhi', 'best-taj-mahal-tour-by-train-from-delhi', 'best-taj-mahal-sunset-tour', 'best-agra-street-food-tour', 'best-agra-tour-with-fatehpur-sikri', 'best-overnight-taj-mahal-tour-from-delhi', 'best-agra-tour-from-delhi-airport-layover', 'best-agra-tour-with-mathura-vrindavan', 'best-agra-tour-with-female-guide', 'best-taj-mahal-tour-with-german-speaking-guide', 'best-taj-mahal-tour-with-french-speaking-guide', 'best-taj-mahal-tour-with-spanish-speaking-guide', 'best-taj-mahal-tour-from-jaipur', 'best-golden-triangle-tour-3-days', 'best-luxury-golden-triangle-tour', 'best-golden-triangle-tour-with-ranthambore-tiger-safari', 'best-taj-mahal-instagram-photoshoot-tour', 'best-taj-mahal-tour-with-lunch', 'is-a-group-tour-to-the-taj-mahal-worth-it', 'best-agra-fort-tour', 'how-much-is-a-private-car-from-delhi-to-agra-and-jaipur', 'how-to-book-taj-mahal-tickets-online', 'best-delhi-and-taj-mahal-2-day-tour', 'can-you-visit-the-taj-mahal-from-mumbai-bangalore-or-goa', 'best-holi-tours-near-agra-mathura-vrindavan', 'best-half-day-agra-tour', 'best-sunrise-taj-mahal-tour-from-delhi-by-car', 'best-taj-mahal-tour-with-japanese-speaking-guide', 'best-taj-mahal-tour-with-hindi-speaking-guide', 'best-taj-mahal-tour-from-gurgaon', 'best-2-day-agra-tour', 'best-3-day-delhi-and-agra-tour', 'best-4-day-golden-triangle-tour', 'best-5-day-golden-triangle-tour', 'best-luxury-taj-mahal-day-trip-from-delhi', 'best-taj-mahal-vip-tickets-and-tours', 'best-taj-mahal-agra-fort-baby-taj-day-trip-from-delhi', 'best-one-day-agra-tour-from-agra-taj-fort-baby-taj', 'can-you-go-inside-the-taj-mahal-mausoleum-tours', 'best-taj-mahal-express-entry-tour', 'best-private-car-and-driver-taj-mahal-tour-from-delhi', 'best-agra-local-sightseeing-tour', 'what-to-do-in-agra-on-friday-when-the-taj-is-closed', 'best-agra-to-jaipur-transfer-via-fatehpur-sikri', 'taj-mahal-sunrise-vs-sunset-which-is-better', 'delhi-to-agra-by-train-or-car-which-is-better', 'best-agra-tour-for-first-time-visitors-to-india', 'best-taj-mahal-tour-for-couples-and-honeymoon', 'best-all-inclusive-taj-mahal-tour-from-delhi', 'best-taj-mahal-tour-with-entrance-fees-included', 'agra-tours-by-question',
  'is-bharatpur-bird-sanctuary-tour-worth-it-agra', 'is-gwalior-day-trip-worth-it-agra',
  'is-fabric-painting-workshop-worth-it-agra',
  // 2026-11-27: 50 pages found fully written in lib/agraBestInfoContent.ts but
  // never registered here — they were 404ing despite having real content.
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
  'is-wildlife-rescue-center-visit-worth-it-agra', 'is-instagram-photography-tour-worth-it-agra',
  'is-kinari-bazaar-food-tour-worth-it-agra', 'is-hidden-gems-heritage-tour-worth-it-agra',
  'is-sos-elephant-bear-rescue-worth-it-agra', 'is-taj-mahal-moonlight-tour-worth-it-agra',
  'is-women-special-taj-shiva-temple-tour-worth-it-agra', 'is-taj-nature-countryside-bike-tour-worth-it-agra',
];

export const DELHI_INFO_SLUGS = [
  'delhi-travel-guide-2026', 'red-fort', 'qutub-minar', 'humayuns-tomb',
  'india-gate', 'things-to-do-in-delhi', 'delhi-1-day-itinerary',
  // 2026-09: Delhi had 7 pages against Agra's 14 and Jaipur's 13, and was
  // missing the ones both of them already had.
  'places-to-visit-in-delhi', 'best-time-to-visit-delhi', 'delhi-shopping-guide',
  '2-day-delhi-itinerary', 'lotus-temple', 'akshardham-temple',
  // 2026-10: "delhi tours" / "delhi guided tour" / "new delhi tours" sat at
  // position 23-29 combined, a generic commercial query nothing caught.
  'delhi-tours',
  // GEO listicle pages (2026-10)
  'best-tours-in-delhi',
  // GEO single-topic pages (2026-10)
  'red-fort-light-and-sound-show', 'best-old-delhi-food-tour', 'best-old-delhi-rickshaw-tour',
  'best-delhi-tour-guide', 'best-delhi-tour-for-families', 'is-delhi-safe-for-tourists',
  'best-delhi-museum-tour', 'best-delhi-airport-layover-tour', 'best-private-delhi-tour',
  'best-taj-mahal-guide-tour-from-delhi',
  'delhi-tourist-scams-how-to-avoid-touts',
  'should-i-book-delhi-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-delhi',
  // Tour-selling pages (2026-11-10)
  'best-old-delhi-tour', 'best-india-gate-tour', 'best-qutub-minar-tour',
  'best-akshardham-temple-tour-delhi', 'best-lotus-temple-tour-delhi',
  'best-red-fort-tour-delhi',
  'is-humayuns-tomb-tour-worth-it-delhi', 'is-chandni-chowk-food-tour-worth-it-delhi',
  'is-cooking-class-worth-it-delhi', 'is-lodhi-art-district-walk-worth-it-delhi',
  'is-jim-corbett-tour-worth-it-delhi', 'is-kuno-national-park-tour-worth-it-delhi',
  'is-gandhi-smriti-raj-ghat-tour-worth-it-delhi', 'is-jantar-mantar-tour-worth-it-delhi',
  'is-sanjay-colony-slum-tour-worth-it-delhi', 'is-hauz-khas-deer-park-tour-worth-it-delhi',
  'best-shopping-tour-delhi',
  'is-garden-of-five-senses-tour-worth-it-delhi', 'is-purana-qila-tour-worth-it-delhi',
  'is-khari-bawli-spice-market-tour-worth-it-delhi', 'is-gurudwara-bangla-sahib-tour-worth-it-delhi',
  'is-haunted-monuments-walking-tour-worth-it-delhi', 'is-mehrauli-ruins-tour-worth-it-delhi',
  'is-connaught-place-heritage-walk-worth-it-delhi', 'is-northern-ridge-tibetan-colony-walk-worth-it-delhi',
  'is-henna-art-workshop-worth-it-delhi', 'is-nature-oasis-mudhouse-tour-worth-it-delhi',
  'is-kumhar-gram-pottery-village-tour-worth-it-delhi', 'is-textile-trail-artisan-tour-worth-it-delhi',
  'is-tarot-card-reading-worth-it-delhi', 'is-art-craft-handicraft-tour-worth-it-delhi',
  'is-archeological-sites-tour-worth-it-delhi', 'is-old-delhi-photo-tour-worth-it-delhi',
  'is-monkey-safari-walking-tour-worth-it-delhi', 'is-south-delhi-cycle-tour-worth-it-delhi',
  'is-street-art-walk-chai-worth-it-delhi', 'is-chai-master-class-worth-it-delhi',
  'is-narnaul-skydiving-worth-it-delhi', 'is-tungnath-chandrashila-trek-worth-it-delhi',
  'is-same-day-varanasi-flight-worth-it-delhi', 'is-rishikesh-yoga-ayurveda-worth-it-delhi',
];

export const JAIPUR_INFO_SLUGS = [
  'things-to-do-in-jaipur', 'jaipur-travel-guide-2026',
  '1-day-jaipur-itinerary', 'amber-fort', 'hawa-mahal',
  'city-palace-jaipur', 'nahargarh-fort', 'places-to-visit-in-jaipur',
  'jantar-mantar-jaipur', 'jal-mahal', 'jaipur-shopping-guide',
  'best-time-to-visit-jaipur', '2-day-jaipur-itinerary',
  // The other two legs of the triangle. delhi-to-agra existed; these did not,
  // so anyone planning the loop fell off the site halfway round.
  'delhi-to-jaipur', 'agra-to-jaipur',
  // 2026-10: "jaipur local private day tour" drew 239 impressions at position 12
  // with nothing answering it.
  'jaipur-local-private-day-tour',
  // GEO listicle pages (2026-10)
  'best-tours-in-jaipur',
  // GEO single-topic pages (2026-10)
  'best-jaipur-tour-guide', 'best-private-jaipur-tour', 'best-jaipur-tour-for-families',
  'is-jaipur-safe-for-tourists', 'best-jaipur-tour-operator', 'best-jaipur-photography-tour',
  'best-jaipur-hot-air-balloon-tour', 'best-jaipur-sunset-night-tour',
  'best-jaipur-elephant-experience', 'best-hotel-near-amber-fort',
  'jaipur-tourist-scams-how-to-avoid-touts',
  'should-i-book-jaipur-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-jaipur',
  // Tour-selling pages (2026-11-10)
  'best-amber-fort-tour-jaipur', 'best-hawa-mahal-tour-jaipur', 'best-jaipur-shopping-tour',
  'best-nahargarh-fort-tour-jaipur', 'best-jantar-mantar-tour-jaipur',
  'best-jal-mahal-tour-jaipur',
  'is-block-printing-workshop-worth-it-jaipur', 'is-home-cooking-class-worth-it-jaipur',
  'is-ranthambore-tiger-safari-worth-it-jaipur', 'is-de-copas-pub-crawl-worth-it-jaipur',
  'is-night-jeep-safari-worth-it-jaipur', 'is-night-heritage-walking-tour-worth-it-jaipur',
  'is-birla-mandir-gaushala-tour-worth-it-jaipur', 'is-monkey-temple-sunset-tour-worth-it-jaipur',
  'is-albert-hall-museum-tour-worth-it-jaipur', 'is-chand-baori-bhangarh-fort-tour-worth-it-jaipur',
  'is-elephant-jungle-sanctuary-worth-it-jaipur', 'is-royal-enfield-city-tour-worth-it-jaipur',
  'is-ajmer-pushkar-day-trip-worth-it-jaipur', 'is-patrika-gate-photoshoot-worth-it-jaipur',
  'is-jhalana-leopard-safari-worth-it-jaipur', 'is-chokhi-dhani-cultural-evening-worth-it-jaipur',
  'is-jewelry-gemstone-crafting-worth-it-jaipur', 'is-maota-lake-boat-ride-tour-worth-it-jaipur',
  'is-local-lifestyle-markets-food-tour-worth-it-jaipur', 'is-artisan-craft-cultural-tour-worth-it-jaipur',
  'is-galta-peeth-jawahar-kala-kendra-tour-worth-it-jaipur', 'is-mandawa-art-gallery-town-day-trip-worth-it-jaipur',
  'is-solo-female-motorbike-tour-worth-it-jaipur', 'is-2-day-guided-tour-local-art-worth-it-jaipur',
  'is-namaste-bollywood-dance-worth-it-jaipur', 'is-flower-market-sunrise-tour-worth-it-jaipur',
  'is-morning-bike-tour-old-city-worth-it-jaipur', 'is-night-tuk-tuk-tour-worth-it-jaipur',
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
  'phuket-diving-snorkeling-guide',
  // GEO listicle pages (2026-10)
  'best-tours-in-phuket',
  'should-i-book-phuket-tour-direct-or-through-app',
  // GEO single-topic page (2026-10/31)
  'how-much-should-a-private-tour-guide-cost-in-phuket',
  'is-fantasea-show-worth-it-phuket', 'best-racha-islands-tour-phuket',
  'is-james-bond-island-tour-worth-it-phuket', 'is-phi-phi-shark-point-diving-worth-it-phuket',
  'is-coral-island-tour-worth-it-phuket', 'is-big-buddha-old-town-tour-worth-it-phuket',
  'is-andamanda-water-park-worth-it-phuket',
  'is-simon-cabaret-show-worth-it-phuket', 'is-similan-islands-tour-worth-it-phuket',
  'is-blue-elephant-cooking-class-worth-it-phuket', 'is-khao-sok-bamboo-rafting-worth-it-phuket',
  'is-muay-thai-class-worth-it-phuket', 'is-perfume-workshop-worth-it-phuket',
  'is-sunset-horse-riding-worth-it-phuket', 'is-hanuman-zipline-worth-it-phuket',
  'is-junkyard-theatre-worth-it-phuket', 'is-froggys-fun-park-worth-it-phuket',
  'is-southern-flavours-food-tour-worth-it-phuket', 'is-bangla-boxing-stadium-worth-it-phuket',
  'is-street-art-tile-painting-workshop-worth-it-phuket', 'is-private-surf-lesson-kata-worth-it-phuket',
  'is-patong-nightlife-crawl-worth-it-phuket', 'is-authentic-thai-cultural-experiences-worth-it-phuket',
  'is-khao-sok-cheow-lan-lake-worth-it-phuket', 'is-white-water-rafting-zipline-elephant-worth-it-phuket',
  'is-go-kart-atv-shooting-combo-worth-it-phuket', 'is-koh-chang-vip-mini-phi-phi-worth-it-phuket',
];

// Malaysia authority pages, batch 1 (2026-10). Re-add a slug here ONLY once
// its page exists in lib/malaysiaInfoContent.ts — isInfoSlug() gates the
// route, so a page missing from here 404s however good the content is.
export const KUALA_LUMPUR_INFO_SLUGS = [
  'best-time-to-visit-kuala-lumpur', 'things-to-do-in-kuala-lumpur',
  'kuala-lumpur-travel-guide-2026', 'petronas-towers-tickets-guide',
  'kl-1-day-itinerary', 'kl-3-day-itinerary', 'batu-caves-guide',
  'kl-public-transport-guide', 'kl-halal-food-guide',
  'bukit-bintang-shopping-guide', 'kl-to-penang-travel',
  'malaysia-visa-guide-for-tourists',
  // GEO listicle page (2026-10)
  'best-tours-in-kuala-lumpur',
  'should-i-book-kuala-lumpur-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-kuala-lumpur',
  // Tour-selling page (2026-11-14)
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
  'is-putrajaya-lake-cruise-tour-worth-it-kuala-lumpur', 'is-chinatown-central-market-tour-worth-it-kuala-lumpur',
  'is-sultan-abdul-samad-building-tour-worth-it-kuala-lumpur', 'is-kuala-gandah-batu-caves-private-trip-worth-it-kuala-lumpur',
];

export const PENANG_INFO_SLUGS = [
  'best-time-to-visit-penang', 'things-to-do-in-penang',
  'penang-travel-guide-2026', 'georgetown-street-art-guide',
  'penang-1-day-itinerary', 'penang-food-guide', 'penang-hill-guide',
  'georgetown-unesco-heritage-guide', 'penang-beaches-guide',
  'penang-3-day-itinerary', 'clan-jetties-penang', 'kek-lok-si-temple-guide',
  // GEO listicle page (2026-10)
  'best-tours-in-penang',
  'should-i-book-penang-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-penang',
  // Tour-selling page (2026-11-14)
  'best-george-town-heritage-tour-penang',
  'best-street-food-tour-penang',
  'is-bujang-valley-tour-worth-it-penang', 'is-bukit-merah-orangutan-tour-worth-it-penang',
  'is-george-town-walking-tour-worth-it-penang', 'is-penang-food-tour-worth-it',
  'is-henna-walking-tour-worth-it-george-town', 'is-balik-pulau-tour-worth-it-penang',
  'is-spice-garden-cooking-class-worth-it-penang', 'is-heritage-costume-rental-worth-it-penang',
  'is-teluk-bahang-fishing-village-tour-worth-it-penang', 'is-umi-umi-dining-show-worth-it-penang',
  'is-glass-museum-worth-it-penang', 'is-batu-ferringhi-donut-ride-worth-it-penang',
  'is-jet-ski-worth-it-penang', 'is-nanyang-kungfu-tea-experience-worth-it-penang',
  'is-village-fun-congkak-petting-zoo-worth-it-penang', 'is-balik-pulau-batik-petting-zoo-worth-it-penang',
  'is-floating-mosque-thai-burmese-temple-tour-worth-it-penang', 'is-chowrasta-asam-laksa-nyonya-kuih-tour-worth-it-penang',
  'is-balik-pulau-atv-ride-worth-it-penang', 'is-penang-after-five-golden-hour-worth-it',
  'is-iconic-temples-penang-hill-tour-worth-it-penang', 'is-guided-cultural-village-tour-worth-it-penang',
];

export const LANGKAWI_INFO_SLUGS = [
  'langkawi-cable-car-guide', 'langkawi-duty-free-shopping',
  // Tour-selling pages (2026-11-14)
  'best-kilim-geoforest-mangrove-tour-langkawi', 'best-island-hopping-tour-langkawi',
  'best-jet-ski-tour-langkawi', 'best-atv-waterfall-tour-langkawi',
  'is-underwater-world-worth-it-langkawi', 'is-parasailing-worth-it-langkawi',
  'is-entopia-by-night-worth-it-langkawi', 'is-jet-car-worth-it-langkawi',
  'is-kilim-geoforest-mangrove-tour-worth-it-langkawi', 'is-cable-car-worth-it-langkawi',
  'is-jet-ski-worth-it-langkawi', 'is-atv-waterfall-tour-worth-it-langkawi',
  'is-hidden-islands-cruise-worth-it-langkawi', 'is-gunung-raya-hike-worth-it-langkawi',
  'is-night-mangrove-safari-worth-it-langkawi', 'is-sunset-dinner-cruise-worth-it-langkawi',
  'is-organic-farm-cooking-class-worth-it-langkawi', 'is-birdwatching-tour-worth-it-langkawi',
  'is-spy-game-curve-worth-it-langkawi', 'is-banana-boat-ride-worth-it-langkawi',
  'is-kayaking-adventure-worth-it-langkawi', 'is-evening-city-fire-show-tour-worth-it-langkawi',
  'is-night-rainforest-safari-worth-it-langkawi', 'is-family-forest-walk-survival-skills-worth-it-langkawi',
  'is-secrets-of-the-sanctuary-walk-worth-it-langkawi', 'is-countryside-bike-waterfall-tour-worth-it-langkawi',
  'is-seven-wells-waterfall-tour-worth-it-langkawi', 'is-private-fishing-charter-worth-it-langkawi',
  'is-private-full-day-car-tour-worth-it-langkawi', 'is-dangli-island-snorkeling-worth-it-langkawi',
];

export const MALACCA_INFO_SLUGS = [
  'malacca-unesco-heritage-guide', 'best-time-to-visit-malacca',
  'best-food-tour-malacca', 'is-river-cruise-trishaw-tour-worth-it-malacca',
  'is-bayou-lagoon-water-park-worth-it-malacca',
  'is-upside-down-house-worth-it-malacca', 'is-unesco-walking-tour-worth-it-malacca',
];

export const KOTA_KINABALU_INFO_SLUGS = [
  'mount-kinabalu-guide', 'kota-kinabalu-island-hopping',
  // Tour-selling pages (2026-11-16)
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
];

export const KUCHING_INFO_SLUGS = [
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
];

// Nepal launched 2026-11-16 with 1,535 live tours and zero authority pages.
export const KATHMANDU_INFO_SLUGS = [
  'best-everest-base-camp-trek-kathmandu', 'best-everest-base-camp-helicopter-tour-kathmandu',
  // Tour-selling pages batch 2 (2026-11-16)
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
  'is-women-only-evening-walk-worth-it-kathmandu', 'is-tongba-newari-tasting-tour-worth-it-kathmandu',
  'is-hidden-forest-sunrise-wildlife-worth-it-kathmandu', 'is-unesco-motorbike-tour-worth-it-kathmandu',
  'is-nepali-pulao-cooking-class-worth-it-kathmandu', 'is-nepali-beer-testing-worth-it-kathmandu',
  'is-unesco-hop-on-hop-off-worth-it-kathmandu', 'is-kathmandu-morning-walk-worth-it-kathmandu',
];

// Georgia launched 2026-11-16 with 1,024 live tours and zero authority pages.
export const TBILISI_INFO_SLUGS = [
  'best-kazbegi-day-tour-tbilisi', 'best-kakheti-wine-tour-tbilisi',
  // Batch 2 (2026-11-16)
  'best-old-town-walking-tour-tbilisi', 'best-mtskheta-jvari-day-trip-tbilisi',
  'best-gori-uplistsikhe-day-trip-tbilisi', 'best-david-gareja-monastery-tour-tbilisi',
  'best-chronicles-of-georgia-tour-tbilisi', 'best-horseback-riding-tour-tbilisi',
  // Batch 3 (2026-11-16)
  'best-vardzia-borjomi-day-trip-tbilisi', 'best-georgian-cooking-class-tbilisi',
  'best-mtatsminda-park-tour-tbilisi', 'best-rafting-tour-tbilisi',
  'best-air-balloon-ride-tbilisi', 'best-tusheti-tour-tbilisi',
  'best-sulfur-bath-experience-tbilisi', 'best-bike-tour-tbilisi',
  // Batch 4 (2026-11-16): guide pages to close the real-inventory ceiling gap
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
  'is-artisan-ice-cream-tasting-worth-it-tbilisi', 'is-cup-drawing-coffee-photo-tour-worth-it-tbilisi',
  'is-sololaki-vera-cemetery-tour-worth-it-tbilisi', 'is-city-quest-surprise-ending-worth-it-tbilisi',
  'is-georgian-national-museum-worth-it-tbilisi', 'is-soviet-metro-railway-tour-worth-it-tbilisi',
  'is-old-town-brunch-worth-it-tbilisi', 'is-pizza-khachapuri-burger-class-worth-it-tbilisi',
];

// Oman launched 2026-11-16 with 709 live tours and zero authority pages.
export const MUSCAT_INFO_SLUGS = [
  'best-wahiba-sands-desert-tour-muscat', 'best-dolphin-watching-tour-muscat',
  // Batch 2 (2026-11-16): bring Muscat to 20 tour-selling pages
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
  'is-qalhat-village-wadi-tour-worth-it-muscat', 'is-coastal-hike-mountain-beach-worth-it-muscat',
  'is-wadi-huwqain-hike-swim-worth-it-muscat', 'is-bandar-al-khayran-journey-worth-it-muscat',
  'is-muscat-through-locals-camera-worth-it-muscat', 'is-sidab-hike-worth-it-muscat',
  'is-semi-submarine-cruise-worth-it-muscat',
];

// Armenia launched 2026-11-19 with 547 live tours and zero authority pages.
export const YEREVAN_INFO_SLUGS: string[] = [
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
  'is-morning-walk-with-dog-worth-it-yerevan', 'is-saryan-street-wine-tasting-worth-it-yerevan',
  'is-distillates-tasting-courtyard-worth-it-yerevan', 'is-food-hidden-places-stories-tour-worth-it-yerevan',
  'is-night-walking-tour-worth-it-yerevan', 'is-soviet-yerevan-tour-worth-it-yerevan',
  'is-moonq-wine-tasting-worth-it-yerevan', 'is-bike-tour-food-wine-worth-it-yerevan',
];

// Jordan launched 2026-11-19 with 507 live tours and zero authority pages.
export const PETRA_INFO_SLUGS: string[] = [
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
  'is-petra-lots-cave-dead-sea-tour-worth-it-amman', 'is-petra-pink-salt-lake-dead-sea-tour-worth-it-amman',
  'is-sharm-el-sheikh-petra-ferry-tour-worth-it', 'is-petra-spanish-speaking-guide-tour-worth-it',
];
export const AMMAN_INFO_SLUGS: string[] = [
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
];
export const AQABA_INFO_SLUGS: string[] = [
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
  'is-bedouin-etiquette-jeep-tour-worth-it-aqaba', 'is-camel-ride-dinner-party-worth-it-aqaba',
  'is-romantic-sunset-dinner-couples-worth-it-aqaba', 'is-umm-ad-dami-camping-package-worth-it-aqaba',
  'is-private-boat-tour-snorkeling-worth-it-aqaba', 'is-desert-secret-private-jeep-tour-worth-it-aqaba',
  'is-kharaza-jeep-tour-worth-it-aqaba', 'is-desert-secret-two-days-bedouin-worth-it-aqaba',
];

// Azerbaijan launched 2026-11-19 with 403 live tours and zero authority pages.
export const BAKU_INFO_SLUGS: string[] = [
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
  'is-socialist-architecture-mosaic-tour-worth-it-baku', 'is-caspian-sea-rowing-worth-it-baku',
  'is-eastern-bazaar-tour-worth-it-baku', 'is-paint-baku-by-sea-worth-it-baku',
  'is-canoe-experience-worth-it-baku', 'is-punch-needle-mirror-workshop-worth-it-baku',
  'is-neon-art-museum-worth-it-baku', 'is-history-museum-worth-it-baku',
];

// Singapore launched 2026-11-19 with 318 live tours and zero authority pages.
export const SINGAPORE_INFO_SLUGS: string[] = [
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
  'is-axe-throwing-worth-it-singapore', 'is-fort-canning-walking-tour-worth-it-singapore',
  'is-floral-tea-workshop-worth-it-singapore', 'is-nyonya-kebaya-rental-worth-it-singapore',
  'is-vroomtown-driving-city-worth-it-singapore', 'is-running-tour-worth-it-singapore',
  'is-tumbler-painting-workshop-worth-it-singapore', 'is-southern-islands-speedboat-tour-worth-it-singapore',
  'is-wetland-reserve-tour-worth-it-singapore', 'is-catch-and-cook-worth-it-singapore',
  'is-sidecar-tour-worth-it-singapore', 'is-public-housing-local-life-tour-worth-it-singapore',
];

// Laos launched 2026-11-19 with 304 live tours and zero authority pages.
export const LUANG_PRABANG_INFO_SLUGS: string[] = [
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
  'is-aroma-candle-heritage-home-worth-it-luang-prabang', 'is-buddhas-light-stage-show-worth-it-luang-prabang',
  'is-xiengman-baci-blessing-tour-worth-it-luang-prabang', 'is-hidden-village-walk-crafts-worth-it-luang-prabang',
  'is-sunrise-market-food-experience-worth-it-luang-prabang', 'is-mountain-bike-tour-worth-it-luang-prabang',
  'is-hidden-temples-sacred-cave-hike-worth-it-luang-prabang', 'is-heritage-dinner-cruise-show-worth-it-luang-prabang',
];

// Saudi Arabia launched 2026-11-19 with 289 live tours and zero authority pages.
export const RIYADH_INFO_SLUGS: string[] = [
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
  'is-desert-horse-ride-worth-it-riyadh', 'is-national-museum-souq-ushaiger-tour-worth-it-riyadh',
  'is-riyadh-highlights-local-food-tour-worth-it-riyadh',
];

// Saudi Arabia batch 2 (2026-11-19): Jeddah and AlUla
export const JEDDAH_INFO_SLUGS: string[] = [
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
  'is-hajj-route-artisans-alley-tour-worth-it-jeddah', 'is-discovery-dive-underwater-photography-worth-it-jeddah',
  'is-durrat-al-arous-beach-day-worth-it-jeddah', 'is-king-abdullah-economic-city-day-trip-worth-it-jeddah',
  'is-al-balad-wholesale-souq-tour-worth-it-jeddah', 'is-deep-sea-fishing-reef-swim-worth-it-jeddah',
  'is-desert-safari-buggy-beach-horse-worth-it-jeddah', 'is-red-sea-boat-rental-worth-it-jeddah',
];
export const ALULA_INFO_SLUGS: string[] = [
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
];

// Laos batch 2 (2026-11-19): Vientiane and Vang Vieng
export const VIENTIANE_INFO_SLUGS: string[] = [
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
  'is-reformer-pilates-class-worth-it-vientiane', 'is-la-foret-nature-trip-worth-it-vientiane',
  'is-private-food-tour-dance-show-worth-it-vientiane', 'is-exploring-charms-half-day-tour-worth-it-vientiane',
];
export const VANG_VIENG_INFO_SLUGS: string[] = [
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
];

// Kazakhstan launched 2026-11-19 with 209 live tours and zero authority pages.
export const ALMATY_INFO_SLUGS: string[] = [
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
  'is-city-tour-professional-photoshoot-worth-it-almaty', 'is-city-highlights-chocolate-shop-worth-it-almaty',
  'is-city-tour-green-bazaar-worth-it-almaty', 'is-museum-of-arts-kok-tobe-tour-worth-it-almaty',
  'is-city-of-nomads-kapchagay-tour-worth-it-almaty', 'is-kazakhstan-local-experiences-tour-worth-it-almaty',
  'is-must-see-private-walking-tour-worth-it-almaty', 'is-alpine-eco-tour-old-city-shymbulak-worth-it-almaty',
];

// Mongolia launched 2026-11-19 with 139 live tours and zero authority pages.
export const ULAANBAATAR_INFO_SLUGS: string[] = [
  'best-terelj-national-park-day-tour-ulaanbaatar', 'best-city-tour-ulaanbaatar',
  'best-hustai-national-park-tour-ulaanbaatar', 'best-gobi-desert-multi-day-tour-ulaanbaatar',
  'best-kharkhorin-central-mongolia-tour-ulaanbaatar', 'best-khuvsgul-lake-tour-ulaanbaatar',
  'best-horseback-riding-tour-ulaanbaatar', 'best-nomad-homestay-experience-ulaanbaatar',
  'is-cooking-class-worth-it-ulaanbaatar', 'is-eagle-hunting-tour-worth-it-ulaanbaatar',
  'is-shamanic-ceremony-worth-it-ulaanbaatar', 'is-market-tour-worth-it-ulaanbaatar',
  'is-bar-hopping-tour-worth-it-ulaanbaatar', 'is-walking-tour-worth-it-ulaanbaatar',
  'ulaanbaatar-travel-guide-2026', 'best-time-to-visit-ulaanbaatar',
  'ulaanbaatar-1-day-itinerary', 'mongolia-visa-guide-for-tourists',
  // Listed in the sitemap (lib/sitemapEntries.ts) and has real content in
  // lib/mongoliaInfoContent.ts, but was never added here — so the tour
  // detail route's isInfoSlug() didn't recognise it and both 404'd despite
  // being submitted to Google. Found 2026-11-19 sitemap sweep.
  'ulaanbaatar-food-guide', 'ulaanbaatar-weather-guide',
  'best-2-day-terelj-horseback-tour-ulaanbaatar', 'best-gobi-desert-tour-ulaanbaatar',
  'is-hustai-national-park-tour-worth-it-ulaanbaatar', 'best-kharkhorin-tour-ulaanbaatar',
  'is-chinggis-khaan-museum-worth-it-ulaanbaatar', 'is-nomadic-cultural-show-worth-it-ulaanbaatar',
  'is-bogd-khan-mountain-hike-worth-it-ulaanbaatar', 'is-aglag-monastery-tour-worth-it-ulaanbaatar',
  'is-altai-horse-trek-worth-it-ulaanbaatar',
  'is-terelj-genghis-khan-statue-day-tour-worth-it-ulaanbaatar', 'is-gobi-desert-tour-worth-it-ulaanbaatar',
  'is-khuvsgul-lake-tour-worth-it-ulaanbaatar', 'is-kharkhorin-ancient-capital-tour-worth-it-ulaanbaatar',
  'is-cow-herding-experience-worth-it-ulaanbaatar', 'is-terelj-zipline-worth-it-ulaanbaatar',
  'is-motorcycle-hot-springs-tour-worth-it-ulaanbaatar', 'is-darkhan-shamanic-culture-tour-worth-it-ulaanbaatar',
  'is-khugnu-khan-mountain-tour-worth-it-ulaanbaatar', 'is-asralt-peak-trek-worth-it-ulaanbaatar',
];

// Israel launched 2026-11-19 with 110 live tours and zero authority pages.
export const JERUSALEM_INFO_SLUGS: string[] = [
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
  'is-israel-museum-ein-kerem-tour-worth-it-jerusalem', 'is-shfela-judaean-lowlands-tour-worth-it-jerusalem',
  'is-jerusalems-secrets-van-tour-worth-it-jerusalem', 'is-half-day-jerusalem-highlights-tel-aviv-worth-it',
];
export const TEL_AVIV_INFO_SLUGS: string[] = [
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
  'is-sunset-art-wine-beach-worth-it-tel-aviv', 'is-art-museum-habima-tour-worth-it-tel-aviv',
  'is-anu-palmach-museum-tour-worth-it-tel-aviv', 'is-nazareth-cana-galilee-tour-worth-it-tel-aviv',
];

// Bhutan launched 2026-11-19 with 92 live tours and zero authority pages.
export const THIMPHU_INFO_SLUGS: string[] = [
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
];
export const PARO_INFO_SLUGS: string[] = [
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
];

// Kuwait, Bahrain, Iraq, Lebanon launched 2026-11-19 (smallest remaining
// countries: 10/32/31/16 live tours respectively) with zero authority pages.
export const KUWAIT_CITY_INFO_SLUGS = [
  'best-desert-city-tour-kuwait-city', 'is-kuwait-private-city-tour-worth-it',
  'kuwait-city-travel-guide-2026', 'best-time-to-visit-kuwait-city',
  'is-kuwait-city-safe', 'is-kuwait-day-night-skyline-tour-worth-it',
];

export const MANAMA_INFO_SLUGS = [
  'best-pearling-path-tour-manama', 'best-city-desert-tour-manama',
  'is-bahrain-food-tasting-tour-worth-it-manama', 'manama-travel-guide-2026',
  'best-time-to-visit-manama', 'is-manama-safe',
  'best-boat-cruise-dinner-tour-manama', 'is-jarada-island-tour-worth-it-manama',
  'is-heritage-tour-worth-it-manama', 'is-sunset-horse-riding-worth-it-manama',
  'best-private-yacht-tour-manama',
];

export const BAGHDAD_INFO_SLUGS = [
  'best-babylon-day-trip-baghdad', 'best-baghdad-city-tour-baghdad',
  'is-karbala-day-trip-worth-it-baghdad', 'baghdad-travel-guide-2026',
  'iraq-visa-guide-for-tourists',
  'is-ctesiphon-tour-worth-it-baghdad', 'best-samarra-hatra-mosul-tour-baghdad',
  'is-iraq-marshes-tour-worth-it-baghdad', 'is-ziggurat-of-ur-tour-worth-it-baghdad',
  'best-baghdad-landmark-tour-baghdad',
];

export const BEIRUT_INFO_SLUGS = [
  'best-jeita-grotto-tour-beirut', 'best-baalbek-day-trip-beirut',
  'is-cedars-of-god-tour-worth-it-beirut', 'beirut-travel-guide-2026',
  'lebanon-visa-guide-for-tourists',
  'best-walking-tour-beirut', 'best-chouf-mountains-tour-beirut',
  'is-bourj-hammoud-food-walk-worth-it-beirut', 'is-tripoli-day-trip-worth-it-beirut',
  'is-mount-lebanon-tour-worth-it-beirut',
];

// Secondary cities batch (2026-11-21): thin-inventory cities in
// already-covered countries.
export const DILIJAN_INFO_SLUGS = [
  'best-wine-tasting-tour-dilijan', 'best-hiking-tour-dilijan',
  'is-molokans-village-tour-worth-it-dilijan', 'dilijan-travel-guide-2026',
  'best-time-to-visit-dilijan', 'is-gata-making-class-worth-it-dilijan',
];

export const GYUMRI_INFO_SLUGS = [
  'best-architecture-tour-gyumri', 'is-gurdjieff-tour-worth-it-gyumri',
  'gyumri-travel-guide-2026', 'armenia-visa-guide-for-tourists-gyumri',
  'is-cooking-class-worth-it-gyumri',
];

export const SHEKI_INFO_SLUGS = [
  'best-old-town-tour-sheki', 'best-day-trip-from-baku-sheki',
  'is-sheki-overnight-tour-worth-it', 'sheki-travel-guide-2026',
  'best-time-to-visit-sheki',
];

export const ASTANA_INFO_SLUGS = [
  'best-city-tour-astana', 'is-burabay-national-park-tour-worth-it-astana',
  'astana-travel-guide-2026', 'best-time-to-visit-astana',
  'is-karlag-museum-tour-worth-it-astana',
  'is-horse-riding-stargazing-worth-it-astana',
];

export const BORJOMI_INFO_SLUGS = [
  'best-borjomi-activity-tour-borjomi', 'best-bakuriani-ski-tour-borjomi',
  'borjomi-travel-guide-2026',
  'is-full-day-rafting-worth-it-borjomi',
  'is-vardzia-rabati-castle-tour-worth-it-borjomi',
];

export const KHASAB_INFO_SLUGS = [
  'best-dhow-cruise-khasab', 'best-musandam-adventure-tour-khasab',
  'khasab-travel-guide-2026',
  'is-scuba-diving-worth-it-khasab', 'is-city-tour-worth-it-khasab',
  'is-dhow-zipline-combo-worth-it-khasab', 'is-jabel-mountain-safari-worth-it-khasab',
];

export const NIZWA_INFO_SLUGS = [
  'best-nizwa-day-trip-nizwa', 'best-jebel-akhdar-tour-nizwa',
  'nizwa-travel-guide-2026',
  'is-cultural-cart-tour-worth-it-nizwa',
  'is-jabreen-bahla-castle-tour-worth-it-nizwa',
  'is-nizwa-fort-ticket-worth-it-nizwa', 'is-sayq-plateau-trek-worth-it-nizwa',
];

export const SHYMKENT_INFO_SLUGS = [
  'best-turkistan-tour-shymkent', 'is-city-tour-worth-it-shymkent',
  'is-aksu-canyon-tour-worth-it-shymkent',
];

export const HAIFA_INFO_SLUGS = [
  'best-bahai-gardens-tour-haifa', 'is-nazareth-day-trip-worth-it-haifa',
  'haifa-travel-guide-2026',
];

export const EILAT_INFO_SLUGS = [
  'best-glass-bottom-boat-tour-eilat', 'best-desert-jeep-tour-eilat',
  'best-snorkeling-diving-tour-eilat', 'eilat-travel-guide-2026',
];

// Pokhara (Nepal) — 504 live tours, launched 2026-11-21.
export const POKHARA_INFO_SLUGS = [
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
  'is-gurkha-mountain-butterfly-museum-worth-it-pokhara', 'is-tibetan-refugee-settlement-tour-worth-it-pokhara',
  'is-tibetan-singing-bowl-sound-healing-worth-it-pokhara', 'is-hop-on-hop-off-city-tour-worth-it-pokhara',
  'is-fewa-lake-sup-board-worth-it-pokhara', 'is-tibetan-monastery-prayer-tour-worth-it-pokhara',
  'is-pumdikot-eagle-eye-tour-worth-it-pokhara', 'is-methlang-hill-tour-worth-it-pokhara',
];

// Batumi & Kutaisi (Georgia) — launched 2026-11-21.
export const BATUMI_INFO_SLUGS = [
  'best-walking-tour-batumi', 'best-martvili-canyon-tour-batumi',
  'best-wine-tasting-tour-batumi', 'is-batumi-jet-ski-worth-it',
  'batumi-travel-guide-2026', 'best-time-to-visit-batumi',
  'is-sunset-cruise-worth-it-batumi', 'is-khachapuri-cooking-class-worth-it-batumi',
  'is-machakhela-national-park-hike-worth-it-batumi',
  'is-shipwreck-boat-tour-worth-it-batumi', 'is-pub-crawl-worth-it-batumi',
  'is-turkey-sumela-day-trip-worth-it-batumi', 'is-mtirala-national-park-worth-it-batumi',
  'is-botanical-garden-tour-worth-it-batumi',
];

export const KUTAISI_INFO_SLUGS = [
  'best-old-town-tour-kutaisi', 'best-monasteries-tour-kutaisi',
  'best-prometheus-cave-tour-kutaisi', 'is-tskaltubo-sanatoriums-tour-worth-it-kutaisi',
  'kutaisi-travel-guide-2026',
  'is-okatse-canyon-tour-worth-it-kutaisi', 'is-katskhi-pillar-tour-worth-it-kutaisi',
  'is-vani-sulfur-baths-tour-worth-it-kutaisi', 'is-racha-wine-tour-worth-it-kutaisi',
  'is-svaneti-tour-worth-it-kutaisi', 'is-gelati-motsameta-bagrati-tour-worth-it-kutaisi',
  'is-martvili-okatse-prometheus-combo-worth-it-kutaisi',
];

// Salalah (Oman) — 93 live tours, launched 2026-11-21.
export const SALALAH_INFO_SLUGS = [
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
];

// Bhaktapur & Lumbini (Nepal) — launched 2026-11-21.
export const BHAKTAPUR_INFO_SLUGS = [
  'best-durbar-square-tour-bhaktapur', 'best-pottery-workshop-bhaktapur',
  'is-changunarayan-hike-worth-it-bhaktapur', 'is-bicycle-heritage-tour-worth-it-bhaktapur',
  'is-woodcarving-workshop-worth-it-bhaktapur', 'bhaktapur-travel-guide-2026',
  'is-pottery-curd-workshop-worth-it-bhaktapur', 'is-nagarkot-sunrise-bhaktapur-tour-worth-it',
  'is-maligaun-viewpoint-hike-worth-it-bhaktapur', 'is-ranikot-hike-temple-worth-it-bhaktapur',
  'is-namo-buddha-panauti-bhaktapur-tour-worth-it', 'is-bhaktapur-patan-streets-behind-squares-worth-it',
];

export const LUMBINI_INFO_SLUGS = [
  'best-buddhas-birthplace-tour-lumbini', 'is-beyond-lumbini-tour-worth-it',
  'is-crane-watching-tour-worth-it-lumbini', 'lumbini-travel-guide-2026',
  'is-buddhist-monastery-retreat-worth-it-lumbini',
];

// Kazbegi & Mestia (Georgia) — launched 2026-11-21.
export const KAZBEGI_INFO_SLUGS = [
  'best-gergeti-church-tour-kazbegi', 'best-gveleti-waterfall-hike-kazbegi',
  'is-truso-valley-tour-worth-it-kazbegi', 'best-horse-riding-tour-kazbegi',
  'kazbegi-travel-guide-2026',
  'is-mount-kazbek-climb-worth-it-kazbegi',
  'is-dariali-monastery-gveleti-waterfall-worth-it-kazbegi',
];

export const MESTIA_INFO_SLUGS = [
  'best-ushguli-day-trip-mestia', 'best-chalaadi-glacier-tour-mestia',
  'best-koruldi-lakes-tour-mestia', 'mestia-travel-guide-2026',
  'is-heshkili-huts-tetnuldi-tour-worth-it-mestia',
  'is-shkhara-glacier-horseback-tour-worth-it-mestia',
];

// Wadi Rum (Jordan) — 36 live tours, launched 2026-11-21.
export const WADI_RUM_INFO_SLUGS = [
  'best-jeep-tour-wadi-rum', 'best-overnight-camping-tour-wadi-rum',
  'best-camel-tour-wadi-rum', 'is-khazali-canyon-horseback-worth-it-wadi-rum',
  'wadi-rum-travel-guide-2026',
];

// Pakse & Nong Khiaw (Laos) — launched 2026-11-21.
export const PAKSE_INFO_SLUGS = [
  'best-wat-phou-tour-pakse', 'best-4000-islands-tour-pakse',
  'best-bolaven-plateau-tour-pakse', 'pakse-travel-guide-2026',
  'is-coffee-tasting-worth-it-pakse',
];

export const NONG_KHIAW_INFO_SLUGS = [
  'best-trekking-camping-tour-nong-khiaw', 'is-100-waterfalls-tour-worth-it-nong-khiaw',
  'nong-khiaw-travel-guide-2026',
  'is-rice-field-cycling-tour-worth-it-nong-khiaw',
];

// Mecca (Saudi Arabia) — 33 live tours, launched 2026-11-21. All content
// here is for Muslim pilgrims; Mecca entry is restricted to Muslims under
// Saudi law, stated factually in the content itself.
export const MECCA_INFO_SLUGS = [
  'best-ziyarat-tour-mecca', 'best-jabal-al-nour-tour-mecca',
  'is-clock-tower-museum-worth-it-mecca', 'is-umrah-guidance-tour-worth-it-mecca',
  'mecca-travel-guide-2026',
];

// Medina (Saudi Arabia) — 31 live tours, launched 2026-11-21. Unlike
// Mecca, Medina is generally open to visitors (stated factually below).
export const MEDINA_INFO_SLUGS = [
  'best-ziyarah-tour-medina', 'is-uhud-battlefield-tour-worth-it-medina',
  'best-city-tour-medina', 'medina-travel-guide-2026',
];

export const JOHOR_BAHRU_INFO_SLUGS = [
  'best-jetski-tour-johor-bahru',
  'best-hop-on-hop-off-tour-johor-bahru', 'best-private-city-tour-johor-bahru',
  'best-desaru-day-trip-johor-bahru', 'best-kluang-day-trip-johor-bahru',
  'best-buggy-tour-johor-bahru', 'best-kulai-charter-tour-johor-bahru',
  // Batch 2 (2026-11-16): guide pages to close the real-inventory ceiling gap
  'johor-bahru-travel-guide-2026', 'best-time-to-visit-johor-bahru',
  'johor-bahru-to-singapore-guide', 'is-johor-bahru-safe',
  'johor-bahru-1-day-itinerary', 'johor-bahru-food-guide',
  'johor-bahru-public-transport-guide', 'johor-bahru-shopping-guide',
  'johor-bahru-weather-guide', 'johor-bahru-visa-guide-for-tourists',
  'johor-bahru-currency-and-money-guide', 'johor-bahru-hotels-guide',
  'johor-bahru-nightlife-guide',
];

// China launched 2026-10 with 1,628 live tours (Beijing + Shanghai) and zero
// authority pages. These are the first batch, 15 per city.
export const BEIJING_INFO_SLUGS = [
  'best-time-to-visit-beijing', 'things-to-do-in-beijing', 'beijing-travel-guide-2026',
  'great-wall-of-china-which-section', 'mutianyu-vs-badaling', 'forbidden-city-tickets-guide',
  'beijing-1-day-itinerary', 'beijing-3-day-itinerary', 'china-visa-guide-for-tourists',
  'beijing-subway-guide', 'temple-of-heaven', 'summer-palace-beijing',
  'hutong-tours-beijing', 'beijing-food-guide', 'beijing-air-quality-when-to-visit',
  // GEO listicle page (2026-10)
  'best-tours-in-beijing',
  'should-i-book-beijing-tour-direct-or-through-app',
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
  'is-yuan-ming-yuan-worth-it-beijing', 'is-underground-city-bunker-tour-worth-it-beijing',
  'is-time-tunnel-old-beijing-replica-worth-it-beijing', 'is-nanluoguxiang-houhai-walk-worth-it-beijing',
  'is-universal-studios-worth-it-beijing', 'is-kite-painting-workshop-worth-it-beijing',
  'is-slow-morning-qigong-worth-it-beijing', 'is-night-hutong-food-walk-worth-it-beijing',
  'is-great-wall-helicopter-tour-worth-it-beijing', 'is-datong-grottoes-huayan-temple-worth-it-beijing',
  'is-longmenjian-canyon-old-village-worth-it-beijing', 'is-luoyang-longmen-grottoes-worth-it-beijing',
];

export const SHANGHAI_INFO_SLUGS = [
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
  'is-yuyuan-old-street-food-walk-worth-it-shanghai', 'is-local-market-food-tasting-tour-worth-it-shanghai',
  'is-maxicheng-acrobatic-show-worth-it-shanghai', 'is-cherry-blossom-pastry-making-worth-it-shanghai',
  'is-118-tower-worth-it-shanghai', 'is-qin-dynasty-vr-experience-worth-it-shanghai',
  'is-ai-tui-na-massage-worth-it-shanghai', 'is-suzhou-river-north-bund-walk-worth-it-shanghai',
  'is-chongming-island-worth-it-shanghai', 'is-zhoushan-windmill-coast-worth-it-shanghai',
  'is-tongjian-lake-kayaking-lingshan-cave-worth-it-shanghai', 'is-jingdezhen-porcelain-capital-worth-it-shanghai',
  'is-wuzhen-xizha-night-tour-worth-it-shanghai', 'is-shengsi-floating-sea-farm-worth-it-shanghai',
  'is-danxia-cliffs-tea-gardens-worth-it-shanghai', 'is-cixi-stream-trail-ancient-village-worth-it-shanghai',
  'is-qiandao-lake-underwater-city-worth-it-shanghai', 'is-shenxianju-linhai-ancient-city-worth-it-shanghai',
  'is-yandang-mountain-worth-it-shanghai', 'is-pinghu-old-town-seaside-sunset-worth-it-shanghai',
];

// Hong Kong launched 2026-10 with 197 live tours and zero authority pages.
// City slug is 'hongkong' (no hyphen) per lib/cityCountryMap.ts, even though
// the country slug is 'hong-kong'. Re-add a slug here ONLY once its page
// exists in lib/hongkongInfoContent.ts — isInfoSlug() gates the route.
export const HONG_KONG_INFO_SLUGS = [
  'best-time-to-visit-hong-kong', 'things-to-do-in-hong-kong', 'hong-kong-travel-guide-2026',
  'hong-kong-1-day-itinerary', 'hong-kong-3-day-itinerary', 'hong-kong-visa-guide',
  'octopus-card-guide', 'peak-tram-tickets-guide', 'star-ferry-guide',
  'big-buddha-ngong-ping-360', 'hong-kong-dim-sum-guide', 'mong-kok-night-markets',
  'hong-kong-disneyland-guide', 'hong-kong-typhoon-season', 'macau-day-trip-from-hong-kong',
  // Batch 2 (2026-10-13), bringing Hong Kong to 30 authority pages.
  'hong-kong-food-guide-beyond-dim-sum', 'lantau-island-guide', 'hong-kong-museums-guide',
  'victoria-peak-vs-sky100', 'hong-kong-with-kids-guide', 'hong-kong-shopping-districts-guide',
  'hong-kong-tram-ding-ding-guide', 'hong-kong-harbour-cruise-guide', 'sai-kung-hiking-guide',
  'hong-kong-afternoon-tea-guide', 'wong-tai-sin-temple-guide', 'hong-kong-nightlife-lan-kwai-fong',
  'hong-kong-cantonese-opera-guide', 'hong-kong-7-day-itinerary', 'hong-kong-budget-travel-guide',
  'hong-kong-luxury-travel-guide', 'hong-kong-rainy-day-activities', 'ocean-park-vs-disneyland-hong-kong',
  // GEO listicle page (2026-10)
  'best-tours-in-hong-kong',
  'should-i-book-hong-kong-tour-direct-or-through-app',
  // GEO single-topic page (2026-10/31)
  'how-much-should-a-private-tour-guide-cost-in-hong-kong',
  'is-egg-tart-cooking-class-worth-it-hong-kong',
  'is-macau-day-trip-worth-it-hong-kong', 'is-lantau-island-big-buddha-tour-worth-it-hong-kong',
  'is-victoria-harbour-yacht-tour-worth-it-hong-kong', 'is-shenzhen-day-trip-worth-it-hong-kong',
  'is-food-tour-worth-it-hong-kong',
  'is-tai-o-boat-tour-worth-it-hong-kong', 'is-sai-kung-snorkeling-worth-it-hong-kong',
  'is-hanfu-costume-experience-worth-it-hong-kong', 'is-lion-rock-hike-worth-it-hong-kong',
  'is-dialogue-in-the-dark-worth-it-hong-kong', 'is-caged-home-walking-tour-worth-it-hong-kong',
  'is-fruit-market-gangster-movie-walk-worth-it-hong-kong', 'is-jet-lag-sound-bath-worth-it-hong-kong',
];

// Taiwan launched 2026-10 with 157 live tours (Taipei) and zero authority pages.
// Reached via getTaiwanInfoContent() -> getCityInfoContent(). Re-add a slug here
// ONLY once its page exists in lib/taiwanInfoContent.ts — isInfoSlug() gates the route.
export const TAIPEI_INFO_SLUGS = [
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
  // GEO listicle page (2026-10)
  'best-tours-in-taipei',
  'should-i-book-taipei-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-taipei',
  'is-atayal-culture-day-trip-worth-it-taipei', 'is-yilan-scallion-pancake-tour-worth-it-taipei',
  'is-jiufen-shifen-tour-worth-it-taipei', 'is-sun-moon-lake-tour-worth-it-taipei',
  'is-pineapple-cake-workshop-worth-it-taipei', 'is-night-market-food-tour-worth-it-taipei',
  'is-maokong-gondola-tour-worth-it-taipei', 'is-wulai-hot-springs-tour-worth-it-taipei',
  'is-yangmingshan-national-park-tour-worth-it-taipei',
  'is-beitou-hot-springs-worth-it-taipei', 'is-national-palace-museum-tour-worth-it-taipei',
  'is-houtong-cat-village-worth-it-taipei', 'is-beer-brewery-tour-worth-it-taipei',
  'is-hanfu-guzheng-workshop-worth-it-taipei', 'is-wanli-paragliding-worth-it-taipei',
  'is-zhongshan-comedy-show-tour-worth-it-taipei', 'is-dihua-street-photoshoot-worth-it-taipei',
  'is-tea-ceremony-qipao-workshop-worth-it-taipei', 'is-morning-city-cycling-tour-worth-it-taipei',
  'is-dadaocheng-cooking-class-worth-it-taipei', 'is-thousand-island-lake-pinglin-tea-tour-worth-it-taipei',
  'is-daxi-old-street-tea-factory-worth-it-taipei', 'is-taichung-lukang-gaomei-wetlands-worth-it-taipei',
  'is-tamsui-shell-temple-northernmost-worth-it-taipei', 'is-coast-cycling-railbike-ginger-spa-worth-it-taipei',
];

// South Korea launched 2026-10 with 570 live tours (Seoul 430, Busan 140) and
// zero authority pages. This is the first batch, weighted 20 Seoul / 10 Busan.
// Reached via getSouthKoreaInfoContent() -> getCityInfoContent(). Re-add a slug
// here ONLY once its page exists in lib/southKoreaInfoContent.ts — isInfoSlug()
// gates the route.
export const SEOUL_INFO_SLUGS = [
  'best-time-to-visit-seoul', 'things-to-do-in-seoul', 'seoul-travel-guide-2026',
  'seoul-1-day-itinerary', 'seoul-3-day-itinerary', 'south-korea-visa-guide-for-tourists',
  'dmz-tour-guide', 'gyeongbokgung-palace-hanbok-guide', 'seoul-subway-tmoney-guide',
  'myeongdong-shopping-guide', 'seoul-korean-bbq-guide', 'hongdae-nightlife-guide',
  'seoul-to-busan-travel', 'namsan-tower-guide', 'seoul-k-pop-tour-guide',
  'bukchon-hanok-village-guide', 'insadong-guide', 'gwangjang-market-guide',
  'seoul-palaces-guide', 'seoul-night-market-food-guide',
  // GEO listicle page (2026-10)
  'best-tours-in-seoul',
  'should-i-book-seoul-tour-direct-or-through-app',
  // GEO single-topic page (2026-10/31)
  'how-much-should-a-private-tour-guide-cost-in-seoul',
  'is-nami-island-tour-worth-it-seoul', 'is-han-river-cruise-worth-it-seoul',
  'is-kimchi-cooking-class-worth-it-seoul', 'is-everland-worth-it-seoul',
  'is-dmz-tour-worth-it-seoul', 'is-deoksugung-palace-tour-worth-it-seoul',
  'is-bukchon-cooking-class-worth-it-seoul', 'is-suwon-hwaseong-fortress-tour-worth-it-seoul',
  'is-seoraksan-day-trip-worth-it-seoul', 'is-dongdaemun-market-tour-worth-it-seoul',
  'is-perfume-making-workshop-worth-it-seoul',
  'is-kpop-recording-experience-worth-it-seoul', 'is-taekwondo-lesson-worth-it-seoul',
  'is-moonlight-rainbow-fountain-show-worth-it-seoul', 'is-gwangjang-market-food-crawl-worth-it-seoul',
  'is-nanta-show-worth-it-seoul', 'is-norigae-keyring-making-worth-it-seoul',
  'is-korean-knot-art-workshop-worth-it-seoul', 'is-insadong-name-seal-worth-it-seoul',
  'is-korean-tea-tasting-worth-it-seoul', 'is-indigo-dyeing-workshop-worth-it-seoul',
  'is-hongdae-mother-of-pearl-workshop-worth-it-seoul', 'is-kpop-dance-class-worth-it-seoul',
  'is-bukhansan-trekking-worth-it-seoul', 'is-namhansanseong-fortress-tour-worth-it-seoul',
  'is-pocheon-day-trip-worth-it-seoul', 'is-cheorwon-hantangang-geo-park-worth-it-seoul',
];

// Turkey launched 2026-10 with 687 live tours (single city: Istanbul) and
// zero authority pages. This is the first batch, 30 pages. Reached via
// getTurkeyInfoContent() -> getCityInfoContent(). Re-add a slug here ONLY
// once its page exists in lib/turkeyInfoContent.ts — isInfoSlug() gates the route.
export const ISTANBUL_INFO_SLUGS = [
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
  // GEO listicle page (2026-10)
  'best-tours-in-istanbul',
  'should-i-book-istanbul-tour-direct-or-through-app',
  // GEO single-topic page (2026-10/31)
  'how-much-should-a-private-tour-guide-cost-in-istanbul',
  // Tour-selling pages (2026-11-01)
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
  'is-doner-tandoor-bread-making-worth-it-istanbul', 'is-carpet-rug-weaving-workshop-worth-it-istanbul',
  'is-beylerbeyi-palace-worth-it-istanbul', 'is-stained-glass-art-workshop-worth-it-istanbul',
  'is-perfume-workshop-mansion-worth-it-istanbul', 'is-hodjapasha-dance-show-worth-it-istanbul',
  'is-turkish-tea-world-teas-workshop-worth-it-istanbul', 'is-kinusaiga-fabric-mosaic-workshop-worth-it-istanbul',
  'is-bolu-golcuk-abant-lake-worth-it-istanbul', 'is-mount-nemrut-gobekli-tepe-2day-worth-it-istanbul',
  'is-wine-tasting-tekirdag-worth-it-istanbul', 'is-edirne-bahai-house-worth-it-istanbul',
];

// Qatar launched 2026-10 with 850 live tours (single city: Doha) and
// zero authority pages. This is the first batch, 31 pages. Reached via
// getQatarInfoContent() -> getCityInfoContent(). Re-add a slug here ONLY
// once its page exists in lib/qatarInfoContent.ts — isInfoSlug() gates the route.
export const DOHA_INFO_SLUGS = [
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
  'doha-airport-stopover-guide',
  // GEO listicle page (2026-10)
  'best-tours-in-doha',
  'should-i-book-doha-tour-direct-or-through-app',
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
  'is-mushroom-rocks-serra-sculptures-tour-worth-it-doha', 'is-aspire-park-zone-tour-worth-it-doha',
  'is-museum-of-illusions-worth-it-doha', 'is-sunrise-photography-walk-worth-it-doha',
  'is-north-qatar-purple-island-tour-worth-it-doha', 'is-mia-park-kayaking-worth-it-doha',
  'is-west-bay-parasailing-worth-it-doha', 'is-desert-moonlight-ride-worth-it-doha',
  'is-inland-sea-fishing-trip-worth-it-doha', 'is-paratrike-sealine-worth-it-doha',
  'is-skyline-soar-zipline-worth-it-doha', 'is-guided-scuba-diving-worth-it-doha',
];

export const BUSAN_INFO_SLUGS = [
  'best-time-to-visit-busan', 'things-to-do-in-busan', 'busan-travel-guide-2026',
  'busan-1-day-itinerary', 'haeundae-beach-guide', 'gamcheon-culture-village-guide',
  'jagalchi-fish-market-guide', 'busan-food-guide', 'seoul-to-busan-ktx-guide',
  'busan-nightlife-guide',
  // GEO listicle page (2026-10)
  'best-tours-in-busan',
  'should-i-book-busan-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-busan',
  'is-gamcheon-village-tour-worth-it-busan', 'is-haedong-yonggungsa-temple-tour-worth-it-busan',
  'is-gyeongju-day-trip-worth-it-busan', 'is-taekwondo-experience-worth-it-busan',
  'is-cable-car-tower-tour-worth-it-busan', 'is-night-yacht-cruise-worth-it-busan',
  'is-spa-land-worth-it-busan', 'is-kdrama-filming-locations-tour-worth-it-busan',
  'is-rice-wine-brewing-worth-it-busan', 'is-jagalchi-market-walking-tour-worth-it-busan',
  'is-najeonchilgi-mother-of-pearl-craft-worth-it-busan', 'is-dark-history-ghost-stories-tour-worth-it-busan',
  'is-ocean-view-ring-making-worth-it-busan', 'is-korean-flower-arrangement-worth-it-busan',
  'is-tea-ceremony-experience-worth-it-busan', 'is-rice-cake-making-worth-it-busan',
  'is-night-photography-tour-worth-it-busan', 'is-k-beauty-makeup-experience-worth-it-busan',
  'is-ulsan-petroglyphs-onggi-village-worth-it-busan', 'is-oedo-island-geoje-worth-it-busan',
  'is-screen-golf-experience-worth-it-busan', 'is-east-coast-luge-temple-tour-worth-it-busan',
];

// Philippines launched 2026-10 with 677 live tours (Manila 213, Cebu 464) and
// zero authority pages. These are the first batch, weighted toward Cebu's
// larger tour count (13 Manila, 17 Cebu). Reached via getPhilippinesInfoContent()
// -> getCityInfoContent(). Re-add a slug here ONLY once its page exists in
// lib/philippinesInfoContent.ts — isInfoSlug() gates the route.
// Maldives launched 2026-10 with 67 live tours (single city: Male) and
// zero authority pages. This is the first batch, 15 pages. Reached via
// getMaldivesInfoContent() -> getCityInfoContent(). Re-add a slug here ONLY
// once its page exists in lib/maldivesInfoContent.ts — isInfoSlug() gates the route.
export const MALE_INFO_SLUGS = [
  'best-time-to-visit-maldives', 'things-to-do-in-male', 'maldives-travel-guide-2026',
  'male-1-day-itinerary', 'maldives-visa-guide-for-tourists', 'maldives-snorkeling-diving-guide',
  'maldives-resort-vs-local-island-guide', 'male-local-island-guide', 'maldives-budget-travel-guide',
  'maldives-luxury-resort-guide', 'maldives-whale-shark-manta-ray-guide', 'maldives-sandbank-tour-guide',
  'male-city-guide', 'maldives-dolphin-watching-guide', 'maldives-airport-transfer-guide',
  // GEO listicle page (2026-10)
  'best-tours-in-male',
  'should-i-book-male-tour-direct-or-through-app',
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
  'is-cinematic-photoshoot-drone-video-worth-it-male', 'is-sunset-fishing-trip-worth-it-male',
  'is-thulusdhoo-beach-club-day-pass-worth-it-male', 'is-private-stingray-snorkeling-worth-it-male',
];

// Uzbekistan GEO pages (2026-11-12) — first info-content pages for this
// country; 662 live tours existed across 6 cities with zero info pages.
export const SAMARKAND_INFO_SLUGS = [
  'best-tours-in-samarkand',
  'best-registan-walking-tour-samarkand',
  'best-plov-cooking-class-samarkand',
  'is-bread-baking-worth-it-samarkand', 'is-jewish-legacy-tour-worth-it-samarkand',
  'is-seven-lakes-tour-worth-it-samarkand', 'is-winemaking-tour-worth-it-samarkand',
  'is-registan-night-tour-worth-it-samarkand', 'is-shakhrisabz-day-trip-worth-it-samarkand',
  'is-imam-al-bukhari-complex-worth-it-samarkand', 'is-bike-tour-worth-it-samarkand',
  'is-legend-of-love-show-worth-it-samarkand', 'is-astronomical-heritage-tour-worth-it-samarkand',
  'is-horseback-riding-worth-it-samarkand', 'is-handmade-paper-making-worth-it-samarkand',
  'is-shahi-zinda-guided-tour-worth-it-samarkand', 'is-moonlight-tour-worth-it-samarkand',
  'is-tea-heritage-walk-worth-it-samarkand', 'is-street-food-walking-tour-worth-it-samarkand',
  'is-marokand-concert-hall-show-worth-it-samarkand', 'is-uzbek-folklore-show-worth-it-samarkand',
  'is-legendary-bread-acrobatic-class-worth-it-samarkand', 'is-after-sunset-slow-evening-worth-it-samarkand',
  'is-village-tour-homemade-dinner-worth-it-samarkand', 'is-spiritual-cultural-walk-tea-worth-it-samarkand',
  'is-museum-tour-small-group-worth-it-samarkand', 'is-qurtob-family-masterclass-worth-it-samarkand',
];

export const TASHKENT_INFO_SLUGS = [
  'best-tours-in-tashkent',
  'best-chimgan-mountain-tour-tashkent',
  'is-metro-tour-worth-it-tashkent', 'is-plov-samsa-cooking-class-worth-it-tashkent',
  'is-solar-furnace-tour-worth-it-tashkent', 'is-fergana-valley-tour-worth-it-tashkent',
  'is-old-city-walking-tour-worth-it-tashkent', 'is-tv-tower-worth-it-tashkent',
  'is-culinary-tour-worth-it-tashkent',
  'is-pottery-masterclass-worth-it-tashkent', 'is-embroidery-masterclass-worth-it-tashkent',
  'is-islamic-civilization-center-worth-it-tashkent', 'is-lashkerak-forest-hike-worth-it-tashkent',
  'is-audio-theater-walking-tour-worth-it-tashkent', 'is-city-night-tour-with-dinner-photography-worth-it-tashkent',
  'is-bread-baking-class-worth-it-tashkent', 'is-andijan-market-food-tour-worth-it-tashkent',
  'is-human-house-walking-tour-worth-it-tashkent', 'is-soviet-metro-baker-dishes-tour-worth-it-tashkent',
  'is-parks-and-nature-walking-tour-worth-it-tashkent', 'is-food-bazaar-local-life-tour-worth-it-tashkent',
  'is-khushtak-clay-figurine-painting-worth-it-tashkent', 'is-beldersay-mountain-hike-worth-it-tashkent',
  'is-uzbekistan-6-city-tour-worth-it-tashkent', 'is-private-city-tour-photo-session-worth-it-tashkent',
];

export const BUKHARA_INFO_SLUGS = [
  'best-tours-in-bukhara',
  'best-old-town-walking-tour-bukhara',
  'is-plov-workshop-worth-it-bukhara', 'is-folklore-fashion-show-worth-it-bukhara',
  'is-puppet-making-workshop-worth-it-bukhara', 'is-gold-embroidery-workshop-worth-it-bukhara',
  'is-chor-bakr-countryside-tour-worth-it-bukhara', 'is-hammam-bath-worth-it-bukhara',
  'is-wood-carving-masterclass-worth-it-bukhara', 'is-gijduvan-pottery-workshop-worth-it-bukhara',
  'is-miniature-painting-workshop-worth-it-bukhara', 'is-carpet-making-workshop-worth-it-bukhara',
  'is-desert-safari-emirs-palace-worth-it-bukhara', 'is-bread-making-class-worth-it-bukhara',
  'is-private-tennis-experience-worth-it-bukhara', 'is-jewish-heritage-house-plov-worth-it-bukhara',
  'is-suzani-embroidery-workshop-worth-it-bukhara', 'is-sarmish-soy-petroglyphs-tour-worth-it-bukhara',
  'is-laghman-cooking-class-worth-it-bukhara', 'is-somsa-home-cooking-class-worth-it-bukhara',
  'is-great-silk-route-tour-worth-it-bukhara', 'is-living-eastern-tale-tour-worth-it-bukhara',
];

export const KHIVA_INFO_SLUGS = [
  'best-tours-in-khiva',
  'best-itchan-kala-walking-tour-khiva',
  'is-cooking-class-worth-it-khiva',
  'best-desert-fortresses-tour-khiva', 'is-ceramic-tile-workshop-worth-it-khiva',
  'is-wood-carving-masterclass-worth-it-khiva', 'is-savitsky-museum-tour-worth-it-khiva',
  'is-aral-sea-ship-cemetery-tour-worth-it-khiva', 'is-miniature-painting-workshop-worth-it-khiva',
  'is-shivit-oshi-cooking-class-worth-it-khiva', 'is-japanese-language-walking-tour-worth-it-khiva',
  'is-manti-cooking-tea-ceremony-worth-it-khiva', 'is-barak-dumpling-cooking-class-worth-it-khiva',
  'is-rooftop-cooking-class-dinner-worth-it-khiva', 'is-kunya-urgench-day-tour-worth-it-khiva',
  'is-untold-stories-khorezm-tour-worth-it-khiva', 'is-silk-road-tour-worth-it-khiva',
  'is-savitsky-mizdakhan-chilpik-tour-worth-it-khiva', 'is-khorezm-fortresses-self-drive-tour-worth-it-khiva',
];

export const MANILA_INFO_SLUGS = [
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
  'is-lakbay-museo-worth-it-manila', 'is-smokey-mountain-community-tour-worth-it-manila',
  'is-manila-wwii-history-walking-tour-worth-it', 'is-manila-oldest-cemetery-tour-worth-it',
];

// Boracay (Philippines) — 27 live tours, launched 2026-11-22.
export const BORACAY_INFO_SLUGS = [
  'is-island-hopping-worth-it-boracay', 'is-whale-shark-watching-worth-it-boracay',
  'is-paraw-sunset-sailing-worth-it-boracay', 'is-fire-dancing-show-worth-it-boracay',
  'is-helmet-diving-worth-it-boracay', 'is-parasailing-worth-it-boracay',
];

// Cameron Highlands (Malaysia) — 14 live tours, launched 2026-11-22. 3 of the
// 14 live tours are mis-tagged (Kuala Selangor firefly tour, a Singapore city
// tour, a Cappadocia photoshoot) — flagged for a backend fix (task_425bc4bc),
// not covered here.
export const CAMERON_HIGHLANDS_INFO_SLUGS = [
  'is-tea-plantation-tour-worth-it-cameron-highlands', 'is-mossy-forest-4wd-tour-worth-it-cameron-highlands',
  'is-rafflesia-trek-worth-it-cameron-highlands', 'is-coral-hill-adventure-worth-it-cameron-highlands',
];

// Bengaluru (India) — 7 live tours, launched 2026-11-22. 6 of the 7 are
// genuine (not mis-tagged) fly-from-Bengaluru Taj Mahal packages; Bengaluru
// itself has only 1 real city-specific tour.
export const BENGALURU_INFO_SLUGS = [
  'is-city-guide-tour-worth-it-bengaluru', 'is-taj-mahal-flight-tour-worth-it-bengaluru',
];

// Madaba (Jordan) — 33 live tours, launched 2026-11-22.
export const MADABA_INFO_SLUGS = [
  'is-madaba-mount-nebo-dead-sea-tour-worth-it', 'is-madaba-mosaic-workshop-worth-it',
  'is-umm-ar-rasas-tour-worth-it-madaba',
];

export const CEBU_INFO_SLUGS = [
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
  'is-mount-manunggal-hike-worth-it-cebu', 'is-cebu-food-walk-worth-it-cebu',
  'is-mactan-sunset-speedboat-cruise-worth-it-cebu', 'is-jet-ski-rental-worth-it-cebu',
  'is-mount-naupa-hiking-worth-it-cebu', 'is-bantayan-fundive-scuba-worth-it-cebu',
  'is-cebu-cooking-class-worth-it', 'is-live-fire-shooting-worth-it-cebu',
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
  'khao-san-road-bangkok', 'bangkok-kanchanaburi-day-trip',
  // GEO listicle pages (2026-10)
  'best-tours-in-bangkok',
  // GEO trust page (2026-10)
  'should-i-book-bangkok-tour-direct-or-through-app',
  // GEO single-topic pages (2026-10)
  'private-tour-vs-group-tour-thailand', 'how-much-should-a-private-tour-guide-cost-in-bangkok',
  // Tour-selling pages (2026-11-01)
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
  'is-khao-yai-glamping-safari-worth-it-bangkok', 'is-photography-class-worth-it-bangkok',
  'is-khlong-toei-scavenger-hunt-worth-it-bangkok', 'is-nakhon-nayok-waterfalls-atv-worth-it-bangkok',
];

export const CHIANG_MAI_INFO_SLUGS = [
  'chiang-mai-burning-season-guide', 'best-time-to-visit-chiang-mai',
  'chiang-mai-3-day-itinerary', 'yi-peng-lantern-festival-chiang-mai',
  'doi-suthep-chiang-mai', 'khao-soi-chiang-mai-food-guide',
  'chiang-mai-elephant-sanctuary-guide',
  // GEO listicle pages (2026-10)
  'best-tours-in-chiang-mai',
  'should-i-book-chiang-mai-tour-direct-or-through-app',
  // GEO single-topic page (2026-10/31)
  'how-much-should-a-private-tour-guide-cost-in-chiang-mai',
  'best-doi-inthanon-tour-chiang-mai', 'is-white-water-rafting-worth-it-chiang-mai',
  'is-muay-thai-training-worth-it-chiang-mai', 'is-night-tuk-tuk-food-tour-worth-it-chiang-mai',
  'is-doi-suthep-temple-tour-worth-it-chiang-mai', 'is-doi-inthanon-national-park-worth-it-chiang-mai',
  'is-elephant-jungle-sanctuary-worth-it-chiang-mai', 'is-atv-rafting-waterfall-combo-worth-it-chiang-mai',
  'is-chiang-rai-day-trip-worth-it-chiang-mai', 'is-khantoke-dinner-worth-it-chiang-mai',
  'is-thai-cooking-class-worth-it-chiang-mai', 'is-monk-chat-worth-it-chiang-mai',
  'is-muay-thai-match-worth-it-chiang-mai', 'is-sticky-waterfall-tour-worth-it-chiang-mai',
  'is-sky-hawk-zipline-worth-it-chiang-mai', 'is-ladyboy-cabaret-worth-it-chiang-mai',
  'is-crystal-bead-bracelet-workshop-worth-it-chiang-mai', 'is-canal-tour-herb-garden-worth-it-chiang-mai',
  'is-pha-chor-grand-canyon-worth-it-chiang-mai', 'is-michelin-gastronomic-tour-worth-it-chiang-mai',
  'is-old-city-walking-tour-worth-it-chiang-mai', 'is-herbal-ball-workshop-worth-it-chiang-mai',
  'is-historic-old-city-bike-tour-worth-it-chiang-mai', 'is-local-food-markets-walking-tour-worth-it-chiang-mai',
];
export const PATTAYA_INFO_SLUGS = [
  'is-pattaya-worth-visiting', 'sanctuary-of-truth-pattaya',
  'koh-larn-island-guide', 'where-to-stay-in-pattaya',
  'best-time-to-visit-pattaya', 'nong-nooch-tropical-garden-pattaya',
  'pattaya-2-day-itinerary', 'pattaya-cabaret-shows-guide',
  // GEO listicle pages (2026-10)
  'best-tours-in-pattaya',
  'should-i-book-pattaya-tour-direct-or-through-app',
  // GEO single-topic page (2026-10/31)
  'how-much-should-a-private-tour-guide-cost-in-pattaya',
  'is-art-in-paradise-worth-it-pattaya', 'is-jet-ski-worth-it-pattaya',
  'best-indoor-adrenaline-attraction-pattaya',
  'is-discover-scuba-diving-worth-it-pattaya', 'is-flyboard-experience-worth-it-pattaya',
  'is-coral-island-tour-worth-it-pattaya', 'is-alcazar-cabaret-show-worth-it-pattaya',
  'is-floating-market-tour-worth-it-pattaya', 'is-big-buddha-temple-night-market-tour-worth-it-pattaya',
  'is-elephant-jungle-sanctuary-worth-it-pattaya',
  'is-tiffanys-show-worth-it-pattaya', 'is-ramayana-water-park-worth-it-pattaya',
  'is-max-muay-thai-worth-it-pattaya', 'is-winter-wonderland-worth-it-pattaya',
  'is-bann-thai-food-museum-worth-it-pattaya', 'is-naklua-fishing-village-food-walk-worth-it-pattaya',
  'is-sina-floating-beach-club-worth-it-pattaya', 'is-pattaya-fishing-park-worth-it-pattaya',
  'is-muay-thai-beginner-class-worth-it-pattaya', 'is-indoor-shooting-range-worth-it-pattaya',
  'is-koh-larn-tandem-paragliding-worth-it-pattaya',
];
// Cambodia. isInfoSlug() gates the route, so a page missing from here 404s
// however good the content is.
export const PHNOM_PENH_INFO_SLUGS = [
    'tuol-sleng-and-choeung-ek-guide',
    'royal-palace-phnom-penh',
    'phnom-penh-2-day-itinerary',
    'phnom-penh-food-and-markets',
    'phnom-penh-to-siem-reap-transport',
    'best-time-to-visit-phnom-penh',
    'phnom-penh-1-day-itinerary',
    'koh-dach-silk-island',
    'kampot-and-kep-day-trip',
    'phnom-penh-street-art',
    'where-to-stay-in-phnom-penh',
    'phnom-penh-to-battambang',
    'oudong-guide',
    'phnom-penh-with-kids',
    'phnom-penh-to-sihanoukville-and-the-islands',
    'phnom-penh-airport-guide',
    'best-tours-in-phnom-penh',
    'should-i-book-phnom-penh-tour-direct-or-through-app',
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
    'is-instagram-day-tour-worth-it-phnom-penh', 'is-nightlife-city-tour-worth-it-phnom-penh',
    'is-private-architecture-tour-worth-it-phnom-penh', 'is-olympic-stadium-islands-tour-worth-it-phnom-penh',
    'is-city-bike-tour-with-snacks-worth-it-phnom-penh', 'is-mekong-village-cooking-escape-worth-it-phnom-penh',
    'is-bike-and-boat-tour-worth-it-phnom-penh', 'is-oudong-koh-chen-village-tour-worth-it-phnom-penh',
];

export const SIEM_REAP_INFO_SLUGS = [
    'angkor-wat-tickets-and-pass-guide',
    'angkor-wat-sunrise-guide',
    'angkor-temples-small-vs-grand-circuit',
    'best-time-to-visit-siem-reap',
    'tonle-sap-floating-villages-guide',
    'siem-reap-3-day-itinerary',
    'siem-reap-airport-to-town',
    'siem-reap-food-guide',
    'angkor-wat-one-day-itinerary',
    'banteay-srei-guide',
    'ta-prohm-tomb-raider-temple',
    'angkor-by-bike',
    'where-to-stay-in-siem-reap',
    'siem-reap-2-day-itinerary',
    'siem-reap-with-kids',
    'bayon-and-angkor-thom-guide',
    'beng-mealea-and-koh-ker',
    'phnom-kulen-guide',
    'angkor-photography-guide',
    'siem-reap-nightlife-and-pub-street',
    // GEO listicle page (2026-10)
    'best-tours-in-siem-reap',
    // GEO trust page (2026-10)
    'should-i-book-siem-reap-tour-direct-or-through-app',
    'siem-reap-to-battambang',
    'angkor-wat-dress-code',
    'siem-reap-money-and-costs',
    'preah-vihear-temple-guide',
    'angkor-temples-in-the-rainy-season',
    'angkor-with-limited-mobility',
    'angkor-sunset-where-to-go',
    // GEO single-topic page (2026-10/31)
    'how-much-should-a-private-tour-guide-cost-in-siem-reap',
    // Tour-selling pages (2026-11-01)
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
    'is-village-life-iron-buffalo-worth-it-siem-reap', 'is-authentic-folk-show-worth-it-siem-reap',
    'is-sunset-bar-cycle-tour-worth-it-siem-reap', 'is-khmer-food-progressive-dinner-worth-it-siem-reap',
    'is-angkor-eye-ride-worth-it-siem-reap', 'is-khmer-costume-experience-worth-it-siem-reap',
    'is-west-baray-cycling-tour-worth-it-siem-reap', 'is-kampot-kep-countryside-tour-worth-it-siem-reap',
];

export const KRABI_INFO_SLUGS = [
  'best-time-to-visit-krabi', 'railay-beach-krabi',
  'krabi-4-islands-tour-guide', 'tiger-cave-temple-krabi',
  'where-to-stay-in-krabi', 'krabi-3-day-itinerary',
  'krabi-vs-phuket-which-to-visit',
  // GEO listicle pages (2026-10)
  'best-tours-in-krabi',
  'should-i-book-krabi-tour-direct-or-through-app',
  // GEO single-topic page (2026-10/31)
  'how-much-should-a-private-tour-guide-cost-in-krabi',
  'best-phi-phi-islands-tour-krabi', 'is-emerald-pool-hot-springs-tour-worth-it-krabi',
  'is-ethical-elephant-sanctuary-worth-it-krabi',
  'is-zipline-adventure-worth-it-krabi', 'is-freediving-course-worth-it-krabi',
  'is-4-islands-tour-worth-it-krabi', 'is-7-islands-sunset-plankton-tour-worth-it-krabi',
  'is-phi-phi-islands-tour-worth-it-krabi', 'is-khao-sok-cheow-lan-lake-tour-worth-it-krabi',
  'is-hong-island-lagoon-tour-worth-it-krabi',
  'is-railay-rock-climbing-worth-it-krabi', 'is-thai-cooking-class-worth-it-krabi',
  'is-muay-thai-fight-worth-it-krabi', 'is-ko-lanta-emerald-cave-tour-worth-it-krabi',
  'is-blue-dragon-cabaret-worth-it-krabi', 'is-private-muay-thai-training-session-worth-it-krabi',
  'is-krabi-local-food-night-market-worth-it-krabi', 'is-jurassic-trails-atv-kayaking-worth-it-krabi',
  'is-ao-nang-bar-crawl-worth-it-krabi', 'is-deer-farm-experience-worth-it-krabi',
  'is-stand-up-paddle-board-rental-worth-it-krabi', 'is-krabi-sunrise-market-river-heritage-tour-worth-it-krabi',
];
// Re-add a slug here ONLY once its page exists in lib/tokyoInfoContent.ts.
// Registering a slug without content ships a live, indexable page that renders
// nothing but the title — worse for SEO than a 404.
export const TOKYO_INFO_SLUGS = [
  'best-time-to-visit-tokyo', 'tokyo-3-day-itinerary', 'getting-around-tokyo',
  'shibuya-crossing-guide', 'tokyo-go-kart-guide', 'mount-fuji-day-trip-from-tokyo',
  'tokyo-food-guide'
,
  'senso-ji-asakusa-guide',
  'tsukiji-toyosu-market-guide',
  'teamlab-tokyo-guide',
  'shinjuku-nightlife-guide',
  'tokyo-day-trips',
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
  // GEO listicle page (2026-10)
  'best-tours-in-tokyo',
  // GEO trust page (2026-10)
  'should-i-book-tokyo-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-tokyo',
  // Tour-selling pages (2026-11-02)
  'best-asakusa-sensoji-tour', 'best-kimono-rental-tokyo',
  'is-cat-cafe-tour-worth-it-tokyo',
  'is-daikoku-jdm-tour-worth-it-tokyo', 'is-geisha-show-worth-it-tokyo',
  'is-ghost-stories-night-walk-worth-it-tokyo',
  'is-ninja-samurai-training-worth-it-tokyo', 'is-sushi-making-class-worth-it-tokyo',
  'is-kendo-experience-worth-it-tokyo', 'is-toyosu-tuna-auction-tour-worth-it-tokyo',
];

// Re-add a slug here ONLY once its page exists in lib/kyotoInfoContent.ts.
export const KYOTO_INFO_SLUGS = [
  'best-time-to-visit-kyoto', 'getting-around-kyoto', 'kyoto-3-day-itinerary',
  'fushimi-inari-guide', 'arashiyama-bamboo-forest-guide', 'gion-geisha-district-guide',
  'kyoto-food-guide'
,
  'kinkaku-ji-guide',
  'kiyomizu-dera-guide',
  'kyoto-autumn-foliage-guide',
  'kyoto-cherry-blossom-guide',
  'nishiki-market-guide',
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
  // GEO listicle page (2026-10)
  'best-tours-in-kyoto',
  'should-i-book-kyoto-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-kyoto',
  'is-amanohashidate-ine-tour-worth-it-kyoto', 'is-sound-bath-worth-it-kyoto',
  'is-ninja-weapon-workshop-worth-it-kyoto',
  'is-sushi-making-workshop-worth-it-kyoto', 'is-nintendo-museum-worth-it-kyoto',
  'is-yuzen-dyeing-worth-it-kyoto', 'is-archery-workshop-worth-it-kyoto',
  'is-samurai-ninja-museum-worth-it-kyoto', 'is-tea-ceremony-with-maiko-worth-it-kyoto',
  'is-shibori-scarf-class-worth-it-kyoto', 'is-chopstick-making-workshop-worth-it-kyoto',
];

// Re-add a slug here ONLY once its page exists in lib/sapporoInfoContent.ts.
export const SAPPORO_INFO_SLUGS = [
  'best-time-to-visit-sapporo', 'sapporo-snow-festival-guide', 'getting-around-sapporo',
  'sapporo-food-guide', 'otaru-day-trip-from-sapporo', 'niseko-and-hokkaido-ski-guide',
  'sapporo-3-day-itinerary'
,
  'furano-biei-guide',
  'noboribetsu-onsen-guide',
  'asahiyama-zoo-guide',
  'sapporo-beer-chocolate-factories',
  'lake-toya-shikotsu-guide',
  'where-to-stay-in-sapporo',
  'sapporo-with-kids', 'best-tours-in-sapporo', 'should-i-book-sapporo-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-sapporo',
  'is-ramen-making-class-worth-it-sapporo',
  'is-ice-fishing-worth-it-sapporo', 'is-mount-moiwa-hike-worth-it-sapporo',
  'is-otaru-shakotan-yoichi-distillery-tour-worth-it-sapporo', 'is-sushi-roll-making-class-worth-it-sapporo',
  'is-nijo-market-tour-worth-it-sapporo', 'is-red-brick-government-office-tour-worth-it-sapporo',
  'is-wagashi-nerikiri-making-worth-it-sapporo', 'is-chopstick-making-workshop-worth-it-sapporo',
  'is-sake-tasting-traditional-cups-worth-it-sapporo', 'is-sukiyaki-shabu-shabu-ayce-worth-it-sapporo',
  'is-karaoke-experience-worth-it-sapporo', 'is-pub-crawl-worth-it-sapporo',
  'is-hokkaido-historical-village-worth-it-sapporo', 'is-shikotsu-toya-snowshoe-onsen-worth-it-sapporo'];

// Re-add a slug here ONLY once its page exists in lib/naraInfoContent.ts.
export const NARA_INFO_SLUGS = [
  'best-time-to-visit-nara', 'nara-deer-park-guide', 'todai-ji-temple-guide',
  'nara-day-trip-from-kyoto-osaka', 'nara-half-day-itinerary'
,
  'kasuga-taisha-guide',
  'naramachi-guide',
  'nara-food-guide',
  'getting-around-nara',
  'mount-yoshino-cherry-blossom-guide',
  'nara-workshops-and-crafts',
  'should-you-stay-overnight-in-nara', 'best-tours-in-nara', 'should-i-book-nara-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-nara',
  'is-tea-ceremony-worth-it-nara',
  'is-koriyama-goldfish-tour-worth-it-nara', 'is-hasedera-temple-tour-worth-it-nara',
  'is-rickshaw-tour-worth-it-nara',
  'is-food-bar-hopping-tour-worth-it-nara', 'is-art-forest-hidden-temples-tour-worth-it-nara',
  'is-takayama-tea-whisk-craft-worth-it-nara',
  'is-samurai-tour-worth-it-nara', 'is-omiwa-shrine-tour-worth-it-nara',
  'is-asuka-ancient-capital-tour-worth-it-nara', 'is-deer-lantern-night-walk-worth-it-nara',
  'is-deer-ceramic-figurine-workshop-worth-it-nara', 'is-furoshiki-experience-lunch-worth-it-nara',
  'is-hozanji-temple-cable-car-evening-tour-worth-it-nara', 'is-ebike-nara-highlights-tour-worth-it-nara'];

// Re-add a slug here ONLY once its page exists in lib/nagoyaInfoContent.ts.
export const NAGOYA_INFO_SLUGS = [
  'best-time-to-visit-nagoya', 'nagoya-castle-guide', 'getting-around-nagoya',
  'nagoya-food-guide', 'nagoya-day-trips', 'nagoya-2-day-itinerary'
,
  'ghibli-park-guide',
  'nagoya-castle-keep-closure',
  'atsuta-shrine-guide',
  'toyota-museums-guide',
  'nakasendo-magome-tsumago-guide',
  'is-nagoya-worth-visiting',
  'where-to-stay-in-nagoya',
  'takayama-shirakawago-day-trip-from-nagoya',
  'nagoya-samurai-experiences',
  'best-tours-in-nagoya',
  'should-i-book-nagoya-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-nagoya',
  'is-miso-brewery-tour-worth-it-nagoya', 'is-inuyama-castle-day-trip-worth-it-nagoya',
  'is-atsuta-shrine-tour-worth-it-nagoya', 'is-ise-jingu-day-trip-worth-it-nagoya',
  'is-legoland-japan-worth-it-nagoya',
  'nagoya-toyota-commemorative-museum-guided-tour', 'nagoya-tokugawa-art-museum-guided-tour',
  'nagoya-osu-maid-cafe-experience', 'nagoya-private-koto-lesson-with-musician',
  'nagoya-private-kyudo-archery-lesson-toyoake-dojo', 'nagoya-shinto-priest-shrine-maiden-experience',
  'nagoya-shimenawa-wreath-making-workshop', 'nagoya-sword-museum-admission-ticket',
  'custom-fragrance-workshop-in-nagoya', 'nagoya-takoyaki-cooking-class',
  'osu-kannon-retro-shops-and-pop-culture-walk-in-nagoya', 'golden-palace-and-futuristic-oasis-walk-in-nagoya',
  'miso-factory-and-fox-statue-temple-eco-tour-from-nagoya-by-local-operator',
  'choose-meieki-sakae-kanayama-or-osu-bar-hop-in-nagoya',
  'tokoname-flexible-food-tour-from-centrair-or-town-center-in-nagoya',
  'samurai-kendo-practice-experience-in-nagoya',
];

// Re-add a slug here ONLY once its page exists in lib/ellaInfoContent.ts.
export const ELLA_INFO_SLUGS = [
  'nine-arch-bridge-guide',
  'little-adams-peak-and-ella-rock',
  'ella-city-guide',
  'getting-to-ella',
  'best-time-to-visit-ella',
  'ella-2-day-itinerary',
  'yala-vs-udawalawe-from-ella',
  'liptons-seat-and-ella-tea-country',
  'ella-waterfalls-and-day-tours',
  'leaving-ella-onward-transfers',
  'best-tours-in-ella',
  'should-i-book-ella-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-ella',
  'is-cooking-class-worth-it-ella',
  'is-diyaluma-falls-tour-worth-it-ella', 'is-sinharaja-rainforest-trek-worth-it-ella',
  'is-tea-making-workshop-worth-it-ella', 'is-demodara-cycling-tour-worth-it-ella',
  'is-sunrise-yoga-worth-it-ella', 'is-ella-rock-sunrise-hike-worth-it-ella',
];

// Re-add a slug here ONLY once its page exists in lib/galleInfoContent.ts.
export const GALLE_INFO_SLUGS = [
  'galle-fort-guide',
  'mirissa-whale-watching-guide',
  'south-coast-beaches-guide',
  'galle-2-day-itinerary',
  'best-tours-in-galle',
  'should-i-book-galle-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-galle',
  'is-surf-lesson-worth-it-galle', 'is-cooking-class-worth-it-galle',
  'is-ceylon-gem-workshop-worth-it-galle', 'is-koggala-lake-tour-worth-it-galle',
  'is-kayaking-village-tour-worth-it-galle',
  'best-galle-fort-walking-tour-galle', 'is-turtle-hatchery-worth-it-galle',
  'is-muay-thai-training-worth-it-galle', 'is-escooter-tour-worth-it-galle',
  'is-coconut-oil-workshop-worth-it-galle', 'is-silver-ring-making-worth-it-galle',
  'is-batik-workshop-worth-it-galle', 'is-fort-storytelling-walk-worth-it-galle',
];

// Re-add a slug here ONLY once its page exists in lib/negomboInfoContent.ts.
export const NEGOMBO_INFO_SLUGS = [
  'negombo-airport-guide',
  'negombo-lagoon-guide',
  'best-tours-in-negombo',
  'should-i-book-negombo-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-negombo',
  'is-scuba-diving-worth-it-negombo', 'is-sri-lankan-cooking-class-worth-it-negombo',
  'is-dolphin-whale-watching-worth-it-negombo', 'is-muthurajawela-wetland-tour-worth-it-negombo',
  'is-wilpattu-safari-worth-it-negombo',
  'is-sunset-lagoon-safari-worth-it-negombo', 'is-paramotoring-worth-it-negombo',
  'is-catamaran-sailing-worth-it-negombo', 'is-ayurvedic-massage-worth-it-negombo',
  'is-jewelry-workshop-worth-it-negombo', 'is-bicycle-city-tour-worth-it-negombo',
  'is-snorkeling-worth-it-negombo', 'is-scooter-ride-worth-it-negombo',
  'is-fishing-village-fish-market-tour-worth-it-negombo', 'is-dutch-canal-sunset-boat-tour-worth-it-negombo',
  'is-sunset-kayaking-worth-it-negombo', 'is-local-friend-lagoon-tour-worth-it-negombo',
];

// Re-add a slug here ONLY once its page exists in lib/nuwaraEliyaInfoContent.ts.
export const NUWARA_ELIYA_INFO_SLUGS = [
  'nuwara-eliya-tea-guide',
  'horton-plains-guide',
  'best-tours-in-nuwara-eliya',
  'should-i-book-nuwara-eliya-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-nuwara-eliya',
  'is-horseback-riding-worth-it-nuwara-eliya', 'is-adams-peak-hike-worth-it-nuwara-eliya',
  'is-knuckles-range-tour-worth-it-nuwara-eliya',
  'is-tea-plucking-experience-worth-it-nuwara-eliya', 'is-cloud-forest-hike-worth-it-nuwara-eliya',
  'is-ramayana-temple-trail-worth-it-nuwara-eliya', 'is-rafting-ziplining-combo-worth-it-nuwara-eliya',
  'is-labookellie-tea-factory-worth-it-nuwara-eliya', 'is-horton-plains-sunrise-hike-worth-it-nuwara-eliya',
  'is-tea-field-cycling-worth-it-nuwara-eliya', 'is-ramboda-waterfall-tuk-tuk-tour-worth-it-nuwara-eliya',
];

// Re-add a slug here ONLY once its page exists in lib/bentotaInfoContent.ts.
export const BENTOTA_INFO_SLUGS = [
  'madu-river-safari-guide',
  'bentota-guide',
  'best-water-sports-tour-bentota', 'is-udawalawe-safari-worth-it-bentota',
  'is-yala-safari-worth-it-bentota', 'is-cooking-class-worth-it-bentota',
  'best-madu-river-safari-tour-bentota',
  'is-bawa-garden-richmond-castle-tour-worth-it-bentota',
  'is-paramotoring-worth-it-bentota', 'is-surfing-lesson-worth-it-bentota',
  'is-ayurvedic-massage-worth-it-bentota', 'is-hikkaduwa-snorkeling-worth-it-bentota',
  'is-banana-boat-worth-it-bentota', 'is-fly-fish-worth-it-bentota',
  'is-lagoon-fishing-worth-it-bentota', 'is-speed-boat-ride-worth-it-bentota',
  'is-river-kayaking-worth-it-bentota', 'is-polgampola-waterfall-tour-worth-it-bentota',
  'is-private-village-tour-worth-it-bentota', 'is-beruwala-lighthouse-snorkeling-cruise-worth-it-bentota',
];

// Re-add a slug here ONLY once its page exists in lib/mirissaInfoContent.ts.
export const MIRISSA_INFO_SLUGS = [
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
  'is-cinnamon-garden-tour-worth-it-mirissa', 'is-crazy-ufo-water-sport-worth-it-mirissa',
  'is-jet-skiing-worth-it-mirissa', 'is-paddle-boarding-worth-it-mirissa',
  'is-full-body-relaxation-wellness-worth-it-mirissa', 'is-road-gravel-bike-tour-worth-it-mirissa',
  'is-seafood-platter-experience-worth-it-mirissa', 'is-private-beach-birthday-celebration-worth-it-mirissa',
];

// Re-add a slug here ONLY once its page exists in lib/sigiriyaInfoContent.ts.
export const SIGIRIYA_INFO_SLUGS = [
  'sigiriya-rock-guide', 'dambulla-cave-temple-guide', 'minneriya-elephant-gathering-guide', 'sigiriya-2-day-itinerary',
  'best-time-to-visit-sigiriya', 'getting-around-sigiriya', 'polonnaruwa-guide', 'anuradhapura-guide',
  'is-pidurangala-rock-worth-it-sigiriya', 'is-kaudulla-safari-worth-it-sigiriya',
  'is-cooking-class-worth-it-sigiriya', 'is-village-tour-worth-it-sigiriya',
  'is-trincomalee-day-trip-worth-it-sigiriya', 'is-mihintale-tour-worth-it-sigiriya',
  'is-hurulu-eco-park-safari-worth-it-sigiriya', 'is-tuk-tuk-safari-worth-it-sigiriya',
  'is-sunrise-hike-village-breakfast-worth-it-sigiriya', 'is-habarana-polonnaruwa-dambulla-tour-worth-it-sigiriya',
  'is-minneriya-safari-worth-it-sigiriya', 'is-night-wildlife-tour-worth-it-sigiriya',
  'is-batik-experience-worth-it-sigiriya', 'is-wewela-lake-boat-worth-it-sigiriya',
  'is-loris-exploration-worth-it-sigiriya', 'is-coconut-shell-bamboo-workshop-worth-it-sigiriya',
  'is-mask-painting-workshop-worth-it-sigiriya', 'is-village-lake-swimming-worth-it-sigiriya',
  'is-rock-fortress-massage-tour-worth-it-sigiriya', 'is-sunrise-birdwatching-tour-worth-it-sigiriya',
  'is-wood-crafting-village-tour-worth-it-sigiriya', 'is-hidden-lakeside-lunch-worth-it-sigiriya',
];

// Re-add a slug here ONLY once its page exists in lib/kandyInfoContent.ts.
export const KANDY_INFO_SLUGS = [
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
  'is-pinnawala-elephants-tour-worth-it-kandy', 'is-village-walk-cooking-experience-worth-it-kandy',
  'is-wood-carving-workshop-worth-it-kandy', 'is-hanthana-pekoe-trail-hike-worth-it-kandy',
  'is-village-hiking-waterfalls-worth-it-kandy', 'is-roti-cooking-class-worth-it-kandy',
];

// Re-add a slug here ONLY once its page exists in lib/colomboInfoContent.ts.
export const COLOMBO_INFO_SLUGS = [
  'best-time-to-visit-colombo', 'colombo-city-guide', 'getting-around-colombo',
  'colombo-food-guide', 'day-trips-from-colombo', 'colombo-2-day-itinerary',
  'pettah-market-guide', 'galle-face-green-guide',
  // GEO listicle page (2026-10)
  'best-tours-in-colombo',
  'should-i-book-colombo-tour-direct-or-through-app',
  // GEO single-topic page (2026-10/31)
  'how-much-should-a-private-tour-guide-cost-in-colombo',
  'best-tuk-tuk-city-tour-colombo', 'is-gangaramaya-temple-tour-worth-it-colombo',
  'is-yala-safari-worth-it-colombo', 'is-pinnawala-kandy-tour-worth-it-colombo',
  'is-adams-peak-hike-worth-it-colombo', 'is-jaffna-tour-worth-it-colombo',
  'is-anuradhapura-day-trip-worth-it-colombo',
  'is-port-city-go-karting-worth-it-colombo', 'is-birdwatching-tour-worth-it-colombo',
  'is-tea-rubber-estate-tour-worth-it-colombo', 'is-tuk-tuk-food-tour-worth-it-colombo',
  'is-silver-jewelry-workshop-worth-it-colombo', 'is-port-city-canoeing-worth-it-colombo',
  'is-scooter-tour-worth-it-colombo', 'is-free-tea-tasting-worth-it-colombo',
  'is-ogf-bowling-worth-it-colombo', 'is-sip-and-paint-souvenir-worth-it-colombo',
  'is-port-city-water-skiing-worth-it-colombo', 'is-city-sketching-lesson-worth-it-colombo',
  'is-supervised-tuk-tuk-driving-worth-it-colombo', 'is-beruwala-gem-market-worth-it-colombo',
  'is-kayaking-experience-worth-it-colombo', 'is-market-tour-cooking-class-worth-it-colombo',
];

// Re-add a slug here ONLY once its page exists in lib/hakoneInfoContent.ts.
export const HAKONE_INFO_SLUGS = [
  'best-time-to-visit-hakone', 'getting-around-hakone',
  'hakone-onsen-guide', 'hakone-2-day-itinerary',
  'hakone-open-air-museum-guide',
  'owakudani-black-eggs-guide',
  'hakone-yosegi-marquetry-guide',
  'where-to-stay-in-hakone',
  'hakone-or-kawaguchiko-for-mount-fuji',
  'best-tours-in-hakone',
  'should-i-book-hakone-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-hakone',
  'is-forest-bathing-worth-it-hakone', 'is-open-air-museum-worth-it-hakone',
  'is-evangelion-anime-tour-worth-it-hakone', 'is-odawara-castle-walk-worth-it-hakone',
  'is-venetian-glass-museum-worth-it-hakone', 'is-geothermal-valley-torii-walk-worth-it-hakone',
];

// Fuji content that was sitting under Hakone. The page bodies still live in
// lib/hakoneInfoContent.ts because that lookup is by slug and city-agnostic;
// only the routing and the sitemap needed to change.
// Re-add a slug here ONLY once its page exists in a *InfoContent.ts file.
export const MOUNT_FUJI_INFO_SLUGS = [
  'climbing-mount-fuji-guide',
  'mount-fuji-viewpoints',
  'chureito-pagoda-guide',
  'kawaguchiko-guide',
  'best-time-to-visit-mount-fuji',
  'oshino-hakkai-guide',
  'fuji-five-lakes-guide',
  'mount-fuji-day-tour-routes',
  'best-tours-in-mount-fuji',
  'should-i-book-mount-fuji-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-mount-fuji',
  'is-mount-fuji-summit-climb-worth-it',
  'is-mount-hoei-crater-trek-worth-it-mount-fuji', 'is-aokigahara-forest-day-trip-worth-it-mount-fuji',
  'is-sumo-experience-day-trip-worth-it-mount-fuji', 'is-gotemba-outlets-tour-worth-it-mount-fuji',
  'is-mt-fuji-cycling-hidden-gems-worth-it-mount-fuji', 'is-lake-tanuki-makaino-farm-worth-it-mount-fuji',
  'is-izu-mt-fuji-coast-onsen-worth-it-mount-fuji',
];

// Re-add a slug here ONLY once its page exists in lib/hiroshimaInfoContent.ts.
export const HIROSHIMA_INFO_SLUGS = [
  'best-time-to-visit-hiroshima', 'hiroshima-2-day-itinerary', 'getting-around-hiroshima',
  'peace-memorial-park-guide', 'miyajima-island-guide', 'hiroshima-food-guide',
  'hiroshima-day-trips'
,
  'shimanami-kaido-cycling-guide',
  'onomichi-guide',
  'hiroshima-castle-guide',
  'shukkeien-garden-guide',
  'kure-yamato-museum-guide',
  'hiroshima-with-children',
  'where-to-stay-in-hiroshima',
  'is-calligraphy-workshop-worth-it-hiroshima',
  'is-saijo-sake-tasting-worth-it-hiroshima', 'is-mitaki-temple-waterfall-walk-worth-it-hiroshima',
  'is-hiroshima-miyajima-day-tour-worth-it-hiroshima', 'is-atomic-bomb-story-tour-worth-it-hiroshima',
  'is-koto-concert-worth-it-hiroshima', 'is-okonomiyaki-hopping-tour-worth-it-hiroshima',
  'is-samurai-experience-worth-it-hiroshima', 'is-kakejiku-scroll-making-worth-it-hiroshima',
  'is-citrus-tasting-challenge-worth-it-hiroshima', 'is-anime-singing-lesson-worth-it-hiroshima'];

// Re-add a slug here ONLY once its page exists in lib/osakaInfoContent.ts.
export const OSAKA_INFO_SLUGS = [
  'best-time-to-visit-osaka', 'osaka-3-day-itinerary', 'getting-around-osaka',
  'osaka-castle-guide', 'dotonbori-guide', 'osaka-food-guide',
  'osaka-to-nara-day-trip', 'osaka-to-kyoto-day-trip', 'shinsekai-guide',
  'osaka-nightlife-guide'
,
  'kuromon-market-guide',
  'osaka-with-kids',
  'where-to-stay-in-osaka',
  'osaka-day-trips',
  'osaka-cooking-classes-guide',
  'osaka-photography-tours-guide',
  'osaka-onsen-and-spa-guide',
  'kobe-day-trip-from-osaka',
  'osaka-kimono-rental-guide',
  // GEO listicle page (2026-10)
  'best-tours-in-osaka',
  'should-i-book-osaka-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-osaka',
  'is-cup-noodles-museum-worth-it-osaka', 'is-koshien-baseball-tour-worth-it-osaka',
  'is-ninja-experience-worth-it-osaka',
  'is-samurai-experience-worth-it-osaka', 'is-minoh-waterfall-tour-worth-it-osaka',
  'is-maid-cafe-experience-worth-it-osaka', 'is-ramen-gyoza-cooking-class-worth-it-osaka',
  'is-sakai-knife-blacksmith-tour-worth-it-osaka', 'is-seven-lucky-gods-pilgrimage-worth-it-osaka',
  'is-sushi-food-replica-workshop-worth-it-osaka', 'is-tempozan-ferris-wheel-worth-it-osaka',
  'is-street-kart-experience-worth-it-osaka', 'is-nifrel-aquazoo-worth-it-osaka',
  'is-kimono-photoshoot-worth-it-osaka', 'is-forest-bathing-minoh-worth-it-osaka',
];

export const KASHMIR_INFO_SLUGS = [
  'kashmir-travel-guide-2026', 'things-to-do-in-kashmir',
  'places-to-visit-in-kashmir', 'best-time-to-visit-kashmir',
  'dal-lake-srinagar', 'gulmarg-travel-guide',
  'pahalgam-travel-guide', 'sonamarg-travel-guide',
  'mughal-gardens-srinagar', 'kashmir-houseboat-guide',
  'srinagar-travel-guide', 'kashmir-food-guide',
  'kashmir-in-winter', 'kashmir-in-summer',
  'kashmir-budget-guide',
  // GEO listicle + trust page (2026-10)
  'best-tours-in-kashmir', 'should-i-book-kashmir-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-kashmir',
  'is-pashmina-craft-tour-worth-it-kashmir', 'is-gulmarg-gondola-skiing-worth-it-kashmir',
  'is-doodhpathri-day-trip-worth-it-kashmir', 'is-yousmarg-day-trip-worth-it-kashmir',
  'is-vaishno-devi-tour-worth-it-kashmir',
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

// Re-add a slug here ONLY once its page exists in lib/dubaiInfoContent.ts.
export const DUBAI_INFO_SLUGS = [
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
  // GEO listicle page (2026-10)
  'best-tours-in-dubai',
  'should-i-book-dubai-tour-direct-or-through-app',
  // GEO single-topic page (2026-10/31)
  'how-much-should-a-private-tour-guide-cost-in-dubai',
  // Tour-selling pages (2026-11-01)
  'best-desert-safari-dubai', 'best-burj-khalifa-tour-dubai',
  // New real-tour pages (2026-11-21)
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
  'is-camel-farm-tour-worth-it-dubai', 'is-marina-yacht-breakfast-bbq-tour-worth-it-dubai',
  'is-tanoura-dance-dinner-cruise-worth-it-dubai', 'is-queen-elizabeth-2-heritage-tour-worth-it-dubai',
  'is-chillout-ice-lounge-worth-it-dubai', 'is-al-marmoom-oasis-high-tea-worth-it-dubai',
  'is-storm-coaster-worth-it-dubai', 'is-aya-universe-worth-it-dubai',
  'is-jetski-burj-arab-worth-it-dubai', 'is-house-of-hype-worth-it-dubai',
  'is-ferrari-rental-worth-it-dubai', 'is-zerzura-buggy-dinner-worth-it-dubai',
  'is-russian-bathhouse-worth-it-dubai', 'is-donut-ride-water-sports-worth-it-dubai',
];

// Re-add a slug here ONLY once its page exists in lib/abuDhabiInfoContent.ts.
export const ABU_DHABI_INFO_SLUGS = [
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
  'is-dune-dinner-worth-it-abu-dhabi', 'is-padi-certification-worth-it-abu-dhabi',
  'is-national-aquarium-worth-it-abu-dhabi', 'is-private-fishing-trip-worth-it-abu-dhabi',
  'is-yas-waterworld-worth-it-abu-dhabi', 'is-private-yacht-formula1-luxury-worth-it-abu-dhabi',
];

// Vietnam authority pages (2026-09)

export const HA_LONG_INFO_SLUGS = [
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
  'is-tam-coc-ebike-tour-worth-it-ha-long', 'is-ha-giang-loop-3-day-worth-it-ha-long',
  'is-dinner-cruise-buffet-live-music-worth-it-ha-long', 'is-halong-sky-paragliding-worth-it-ha-long',
];

export const HANOI_INFO_SLUGS = [
  'hanoi-old-quarter-guide',
  'hanoi-street-food-guide',
  'day-trips-from-hanoi',
  'best-time-to-visit-hanoi',
  'ninh-binh-day-trip-from-hanoi',
  'hanoi-food-tours-and-cooking-classes',
  'hanoi-motorbike-tours-guide',
  'hanoi-cultural-shows-and-workshops',
  'hanoi-history-tour-guide',
  // GEO listicle page (2026-10)
  'best-tours-in-hanoi',
  'should-i-book-hanoi-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-hanoi',
  'best-perfume-pagoda-tour-hanoi', 'is-bat-trang-village-tour-worth-it-hanoi',
  'is-cyclo-tour-worth-it-hanoi',
  'is-train-street-food-tour-worth-it-hanoi', 'is-ninh-binh-day-trip-worth-it-hanoi',
  'is-ba-vi-national-park-worth-it-hanoi', 'is-mai-chau-pu-luong-trek-worth-it-hanoi',
  'is-ha-giang-loop-worth-it-hanoi',
  'is-water-puppet-show-worth-it-hanoi', 'is-vespa-city-tour-worth-it-hanoi', 'is-cooking-class-worth-it-hanoi',
  'is-tran-quoc-pagoda-tour-worth-it-hanoi', 'is-perfume-making-workshop-worth-it-hanoi',
  'is-embroidery-workshop-worth-it-hanoi', 'is-knife-making-workshop-worth-it-hanoi',
  'is-indoor-shooting-experience-worth-it-hanoi', 'is-floating-cakes-lotus-tea-worth-it-hanoi',
  'is-incense-village-ao-dai-photoshoot-worth-it-hanoi', 'is-quintessence-of-tonkin-show-worth-it-hanoi',
  'is-ban-gioc-waterfall-tour-worth-it-hanoi', 'is-cao-bang-loop-worth-it-hanoi',
  'is-yen-tu-sacred-mountain-worth-it-hanoi', 'is-hoang-su-phi-harvest-worth-it-hanoi',
];

export const SAPA_INFO_SLUGS = [
  'sapa-trekking-guide',
  'fansipan-cable-car-guide',
  'best-time-to-visit-sapa',
  'getting-to-sapa-from-hanoi',
  'sapa-homestay-guide',
  'sapa-markets-and-bac-ha-guide',
  'mu-cang-chai-and-rice-terrace-guide',
  'sapa-2-day-itinerary',
  'best-tours-in-sapa',
  'should-i-book-sapa-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-sapa',
  'best-motorbike-tour-sapa',
  'is-ha-giang-loop-worth-it-sapa', 'is-paragliding-worth-it-sapa',
  'is-trail-running-tour-worth-it-sapa',
  'is-fansipan-summit-trek-worth-it-sapa', 'is-lao-chai-ta-van-trek-worth-it-sapa',
  'is-mu-cang-chai-trek-worth-it-sapa', 'is-red-dao-herbal-bath-worth-it-sapa',
  'is-overnight-train-tour-worth-it-sapa',
  'is-alpine-coaster-worth-it-sapa', 'is-glass-bridge-tour-worth-it-sapa',
  'is-mountain-biking-worth-it-sapa', 'is-hmong-cooking-class-worth-it-sapa',
  'is-cat-cat-village-tour-worth-it-sapa', 'is-beeswax-indigo-dyeing-workshop-worth-it-sapa',
  'is-pho-cooking-class-worth-it-sapa', 'is-hmong-homestay-worth-it-sapa',
  'is-batik-wax-drawing-workshop-worth-it-sapa', 'is-red-dao-healing-journey-worth-it-sapa',
  'is-sapa-scenic-ride-worth-it-sapa', 'is-wrap-and-roll-kids-cooking-workshop-worth-it-sapa',
  'is-homemade-tofu-worth-it-sapa', 'is-nam-cang-motorbike-loop-worth-it-sapa',
  'is-walking-food-tour-worth-it-sapa', 'is-spring-rolls-cooking-class-worth-it-sapa',
];

export const HOI_AN_INFO_SLUGS = [
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
  'is-incense-making-workshop-worth-it-hoi-an', 'is-teh-dar-bamboo-circus-worth-it-hoi-an',
  'is-wood-carving-class-worth-it-hoi-an', 'is-ghosts-mystery-tour-worth-it-hoi-an',
  'is-motorbike-riding-class-worth-it-hoi-an', 'is-hue-imperial-city-day-trip-worth-it-hoi-an',
  'is-boxing-class-worth-it-hoi-an',
];

export const UBUD_INFO_SLUGS = [
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
  // GEO listicle page (2026-10)
  'best-tours-in-ubud',
  // GEO trust page (2026-10)
  'should-i-book-ubud-tour-direct-or-through-app',
  // GEO single-topic page (2026-10/31)
  'how-much-should-a-private-tour-guide-cost-in-ubud',
  // Tour-selling pages (2026-11-10)
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
  'is-wood-carving-experience-worth-it-ubud', 'is-macrame-workshop-worth-it-ubud',
  'is-keliki-painting-experience-worth-it-ubud', 'is-gianyar-night-market-food-tour-worth-it-ubud',
];

export const CANGGU_INFO_SLUGS = [
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
  'best-tours-in-canggu',
  'should-i-book-canggu-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-canggu',
  // Tour-selling page (2026-11-10)
  'best-surf-lesson-canggu',
  'is-drag-show-worth-it-canggu', 'is-painting-workshop-worth-it-canggu',
  'is-puppy-yoga-worth-it-canggu',
  'is-surf-lessons-worth-it-canggu', 'is-pool-club-day-pass-worth-it-canggu',
  'is-silver-jewelry-class-worth-it-canggu', 'is-mount-batukaru-trek-worth-it-canggu',
  'is-jatiluwih-tanah-lot-tour-worth-it-canggu',
  'is-trunyan-penglipuran-tour-worth-it-canggu', 'is-mixology-class-worth-it-canggu',
  'is-sign-language-class-dinner-worth-it-canggu', 'is-perfume-making-worth-it-canggu',
  'is-iphone-case-workshop-worth-it-canggu', 'is-buggy-river-tubing-coffee-tour-worth-it-canggu',
  'is-charm-bar-workshop-worth-it-canggu', 'is-coastal-snorkeling-worth-it-canggu',
];

export const ULUWATU_INFO_SLUGS = [
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
  'best-tours-in-uluwatu',
  'should-i-book-uluwatu-tour-direct-or-through-app',
  'how-much-should-a-private-tour-guide-cost-in-uluwatu',
  // Tour-selling page (2026-11-10)
  'best-kecak-dance-tour-uluwatu',
  'is-devdan-show-worth-it-uluwatu', 'is-tandem-paragliding-worth-it-uluwatu',
  'is-kecak-sunset-temple-tour-worth-it-uluwatu', 'is-gwk-cultural-park-worth-it-uluwatu',
  'is-tanjung-benoa-watersports-worth-it-uluwatu', 'is-surf-lessons-worth-it-uluwatu',
  'is-nusa-dua-snorkeling-turtle-tour-worth-it-uluwatu',
  'is-tulamben-liberty-wreck-diving-worth-it-uluwatu', 'is-nusa-dua-spa-worth-it-uluwatu',
  'is-silver-jewelry-workshop-worth-it-uluwatu', 'is-cooking-class-market-tour-worth-it-uluwatu',
  'is-padang-padang-photoshoot-worth-it-uluwatu', 'is-sunset-dinner-cruise-buffet-show-worth-it-uluwatu',
  'is-south-coast-3-beaches-tour-worth-it-uluwatu', 'is-mangrove-kayaking-tour-worth-it-uluwatu',
];

export const NUSA_PENIDA_INFO_SLUGS = [
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
  'is-padel-class-worth-it-nusa-penida', 'is-turtle-conservation-cave-temple-tour-worth-it-nusa-penida',
  'is-open-air-buggy-tour-worth-it-nusa-penida', 'is-mangrove-point-snorkeling-worth-it-nusa-penida',
  'is-calendula-spa-worth-it-nusa-penida', 'is-private-car-rental-worth-it-nusa-penida',
  'is-kerta-gosa-tenganan-virgin-beach-tour-worth-it-nusa-penida', 'is-historic-murals-fairy-garden-bat-cave-tour-worth-it-nusa-penida',
];

export const DA_NANG_INFO_SLUGS = [
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
  'is-woodblock-printing-workshop-worth-it-da-nang', 'is-mi-quang-noodle-show-worth-it-da-nang',
  'is-do-paper-workshop-worth-it-da-nang', 'is-nui-than-tai-hot-springs-worth-it-da-nang',
  'is-perfume-making-workshop-worth-it-da-nang', 'is-night-squid-fishing-worth-it-da-nang',
  'is-natural-dyeing-fan-painting-worth-it-da-nang', 'is-speedboat-fishing-experience-worth-it-da-nang',
  'is-cham-island-speedboat-snorkeling-worth-it-da-nang', 'is-dong-giang-heaven-gate-tour-worth-it-da-nang',
  'is-private-fitness-class-worth-it-da-nang', 'is-night-motorbike-han-cruise-worth-it-da-nang',
];

export const HO_CHI_MINH_CITY_INFO_SLUGS = [
  'cu-chi-tunnels-guide',
  'mekong-delta-day-trip-guide',
  'saigon-street-food-guide',
  'best-time-to-visit-ho-chi-minh-city',
  'saigon-motorbike-tours-guide',
  'ho-chi-minh-city-1-day-itinerary',
  'saigon-cooking-classes-guide',
  'saigon-day-trips-guide',
  // GEO listicle page (2026-10)
  'best-tours-in-ho-chi-minh-city',
  'should-i-book-ho-chi-minh-city-tour-direct-or-through-app',
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
  'is-perfume-workshop-worth-it-ho-chi-minh-city', 'is-iconic-apartments-walking-tour-worth-it-ho-chi-minh-city',
  'is-scented-candle-making-workshop-worth-it-ho-chi-minh-city', 'is-icon-saigon-sunset-cruise-worth-it-ho-chi-minh-city',
  'is-chinatown-temples-market-walking-tour-worth-it-ho-chi-minh-city', 'is-archery-hidden-cafe-experience-worth-it-ho-chi-minh-city',
  'is-mosaic-art-workshop-worth-it-ho-chi-minh-city', 'is-thao-dien-walking-tour-worth-it-ho-chi-minh-city',
  'is-tan-lap-floating-village-worth-it-ho-chi-minh-city', 'is-sa-dec-flower-village-worth-it-ho-chi-minh-city',
  'is-bao-loc-waterfalls-tea-hills-worth-it-ho-chi-minh-city', 'is-dak-nong-tour-worth-it-ho-chi-minh-city',
];
