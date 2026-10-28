'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    Clock,
    Ticket,
    Info,
    CheckCircle2,
    AlertTriangle,
    Star,
    History,
    ShieldCheck,
    Map,
    Wallet
} from 'lucide-react';
import type { CityInfoData } from '@/lib/cityInfoContent';
import { fmt } from '@/lib/i18n';
import Breadcrumbs from '@/components/Breadcrumbs';
import LanguageSwitcher, { useLanguage } from '@/components/LanguageSwitcher';
import { cloudinaryLoader } from '@/lib/cloudinaryLoader';
import { BALI_GUIDES } from '@/lib/baliGuides';
import { JAPAN_GUIDES } from '@/lib/japanGuides';
import { VIETNAM_GUIDES } from '@/lib/vietnamGuides';

interface Props {
    country: string;
    city: string;
    slug: string;
    /** Looked up on the server: the content tables for every city are ~4MB of TS. */
    data?: CityInfoData | null;
}

const AGRA_SIDEBAR = [
    { name: 'Avoid Touts & Scams', slug: 'agra-tour-guide-scams-how-to-avoid-touts' },
    { name: 'Things to Do', slug: 'things-to-do-in-agra' },
    { name: 'Places Guide', slug: 'places-to-visit-in-agra' },
    { name: '1-Day Itinerary', slug: '1-day-agra-itinerary' },
    { name: 'Delhi to Agra', slug: 'delhi-to-agra' },
    { name: 'Day Trip from Delhi', slug: 'same-day-agra-tour-from-delhi' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-agra' },
    { name: 'Pricing 2026', slug: 'taj-mahal-ticket-price-2026' },
    { name: 'Opening Times', slug: 'taj-mahal-opening-time' },
    { name: 'Friday Strategy', slug: 'is-taj-mahal-closed-on-friday' },
    { name: 'Master Guide', slug: 'agra-travel-guide-2026' },
    { name: 'Best Tours in Agra', slug: 'best-tours-in-agra' },
    { name: 'Best Taj Mahal Tour', slug: 'best-taj-mahal-tour' },
    { name: 'Best Sunrise Tour', slug: 'best-taj-mahal-sunrise-tour' },
    { name: 'Best Full-Day Tour', slug: 'best-full-day-agra-tour' },
    { name: 'Skip-the-Line Tickets', slug: 'taj-mahal-skip-the-line-tickets' },
    { name: 'Best Photography Tour', slug: 'best-taj-mahal-photography-tour' },
    { name: 'Best Private Tour', slug: 'best-private-taj-mahal-tour' },
    { name: 'Best Baby Taj Tour', slug: 'best-baby-taj-tour' },
    { name: 'Golden Triangle Tour', slug: 'golden-triangle-tour-india' },
    { name: 'Best Tour Operator', slug: 'best-agra-tour-operator' },
    { name: 'Best Tour for Families', slug: 'best-agra-tour-for-families' },
    { name: 'Is Agra Safe?', slug: 'is-agra-safe-for-tourists' },
    { name: 'Best Hotels Near Taj Mahal', slug: 'best-hotel-near-taj-mahal' },
    { name: 'Night Viewing Tour', slug: 'taj-mahal-night-viewing-tour' },
];

const DELHI_SIDEBAR = [
    { name: 'Avoid Touts & Scams', slug: 'delhi-tourist-scams-how-to-avoid-touts' },
    { name: 'Delhi Travel Guide', slug: 'delhi-travel-guide-2026' },
    { name: 'Red Fort', slug: 'red-fort' },
    { name: 'Qutub Minar', slug: 'qutub-minar' },
    { name: "Humayun's Tomb", slug: 'humayuns-tomb' },
    { name: 'India Gate', slug: 'india-gate' },
    { name: 'Things to Do', slug: 'things-to-do-in-delhi' },
    { name: '1-Day Itinerary', slug: 'delhi-1-day-itinerary' },
    { name: 'Best Tours in Delhi', slug: 'best-tours-in-delhi' },
    { name: 'Red Fort Light & Sound Show', slug: 'red-fort-light-and-sound-show' },
    { name: 'Best Old Delhi Food Tour', slug: 'best-old-delhi-food-tour' },
    { name: 'Best Old Delhi Rickshaw Tour', slug: 'best-old-delhi-rickshaw-tour' },
    { name: 'Best Delhi Tour Guide', slug: 'best-delhi-tour-guide' },
    { name: 'Best Tour for Families', slug: 'best-delhi-tour-for-families' },
    { name: 'Is Delhi Safe?', slug: 'is-delhi-safe-for-tourists' },
    { name: 'Best Museum Tour', slug: 'best-delhi-museum-tour' },
    { name: 'Best Airport Layover Tour', slug: 'best-delhi-airport-layover-tour' },
    { name: 'Best Private Tour', slug: 'best-private-delhi-tour' },
    { name: 'Best Taj Mahal Tour from Delhi', slug: 'best-taj-mahal-guide-tour-from-delhi' },
];

const JAIPUR_SIDEBAR = [
    { name: 'Avoid Touts & Scams', slug: 'jaipur-tourist-scams-how-to-avoid-touts' },
    { name: 'Things to Do', slug: 'things-to-do-in-jaipur' },
    { name: 'Travel Guide 2026', slug: 'jaipur-travel-guide-2026' },
    { name: '1-Day Itinerary', slug: '1-day-jaipur-itinerary' },
    { name: 'Amber Fort', slug: 'amber-fort' },
    { name: 'Hawa Mahal', slug: 'hawa-mahal' },
    { name: 'City Palace', slug: 'city-palace-jaipur' },
    { name: 'Nahargarh Fort', slug: 'nahargarh-fort' },
    { name: 'Places to Visit', slug: 'places-to-visit-in-jaipur' },
    { name: 'Best Tours in Jaipur', slug: 'best-tours-in-jaipur' },
    { name: 'Best Jaipur Tour Guide', slug: 'best-jaipur-tour-guide' },
    { name: 'Best Private Tour', slug: 'best-private-jaipur-tour' },
    { name: 'Best Tour for Families', slug: 'best-jaipur-tour-for-families' },
    { name: 'Is Jaipur Safe?', slug: 'is-jaipur-safe-for-tourists' },
    { name: 'Best Tour Operator', slug: 'best-jaipur-tour-operator' },
    { name: 'Best Photography Tour', slug: 'best-jaipur-photography-tour' },
    { name: 'Hot Air Balloon Tour', slug: 'best-jaipur-hot-air-balloon-tour' },
    { name: 'Best Sunset & Night Tour', slug: 'best-jaipur-sunset-night-tour' },
    { name: 'Ethical Elephant Experience', slug: 'best-jaipur-elephant-experience' },
    { name: 'Best Hotels Near Amber Fort', slug: 'best-hotel-near-amber-fort' },
];

const KUALA_LUMPUR_SIDEBAR = [
    { name: 'Best Tours in Kuala Lumpur', slug: 'best-tours-in-kuala-lumpur' },
    { name: 'KL Travel Guide', slug: 'kuala-lumpur-travel-guide-2026' },
    { name: 'Things to Do', slug: 'things-to-do-in-kuala-lumpur' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-kuala-lumpur' },
    { name: 'Petronas Towers Tickets', slug: 'petronas-towers-tickets-guide' },
    { name: 'Batu Caves Guide', slug: 'batu-caves-guide' },
    { name: '1-Day Itinerary', slug: 'kl-1-day-itinerary' },
    { name: '3-Day Itinerary', slug: 'kl-3-day-itinerary' },
    { name: 'Public Transport', slug: 'kl-public-transport-guide' },
    { name: 'Halal Food Guide', slug: 'kl-halal-food-guide' },
    { name: 'Bukit Bintang Shopping', slug: 'bukit-bintang-shopping-guide' },
    { name: 'KL to Penang', slug: 'kl-to-penang-travel' },
    { name: 'Malaysia Visa Guide', slug: 'malaysia-visa-guide-for-tourists' },
];

const PENANG_SIDEBAR = [
    { name: 'Best Tours in Penang', slug: 'best-tours-in-penang' },
    { name: 'Penang Travel Guide', slug: 'penang-travel-guide-2026' },
    { name: 'Things to Do', slug: 'things-to-do-in-penang' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-penang' },
    { name: 'Georgetown Street Art', slug: 'georgetown-street-art-guide' },
    { name: 'UNESCO Heritage', slug: 'georgetown-unesco-heritage-guide' },
    { name: '1-Day Itinerary', slug: 'penang-1-day-itinerary' },
    { name: '3-Day Itinerary', slug: 'penang-3-day-itinerary' },
    { name: 'Food Guide', slug: 'penang-food-guide' },
    { name: 'Penang Hill', slug: 'penang-hill-guide' },
    { name: 'Kek Lok Si Temple', slug: 'kek-lok-si-temple-guide' },
    { name: 'Clan Jetties', slug: 'clan-jetties-penang' },
    { name: 'Beaches Guide', slug: 'penang-beaches-guide' },
];

const LANGKAWI_SIDEBAR = [
    { name: 'Cable Car Guide', slug: 'langkawi-cable-car-guide' },
    { name: 'Duty-Free Shopping', slug: 'langkawi-duty-free-shopping' },
];

const MALACCA_SIDEBAR = [
    { name: 'UNESCO Heritage Guide', slug: 'malacca-unesco-heritage-guide' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-malacca' },
];

const KOTA_KINABALU_SIDEBAR = [
    { name: 'Mount Kinabalu Guide', slug: 'mount-kinabalu-guide' },
    { name: 'Island Hopping', slug: 'kota-kinabalu-island-hopping' },
];

// Recommended tour links for internal linking from authority pages to tour pages (SEO: pass link juice)
const CITY_RECOMMENDED_TOURS: Record<string, { title: string; slug: string; description: string; image?: string; price?: string; rating?: string }[]> = {
    'kuala-lumpur': [
        { title: 'Kuala Lumpur: Batu Caves & Petronas Towers Guided Tour', slug: 'kuala-lumpur-batu-caves-petronas-towers-guided', description: "Both headline sights in one guided day", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-1366794/img0/1600.webp', price: 'From $592' },
        { title: 'Kuala Lumpur: Petronas Twin Towers & KLCC Park Photoshoot', slug: 'kuala-lumpur-petronas-twin-towers-klcc-park', description: "The towers plus the best free photo angle across KLCC Park", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-1428644/img0/1600.webp', price: 'From $114' },
        { title: 'Kuala Lumpur: Batu Caves Private Tour', slug: 'kuala-lumpur-batu-caves-private-tour', description: "A private, early-morning visit to the 272 steps and Temple Cave", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-761902/img0/1600.webp', price: 'From $57' },
        { title: 'From Kuala Lumpur: Genting Highlands Day Trip with Cable Car', slug: 'kuala-lumpur-genting-full-day-tour', description: "A cooler hilltop resort town, cable car included", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-1503528/img0/1600.webp', price: 'From $106' },
        { title: 'Kuala Lumpur: Sambal Streets Food Tour with 15+ Tastings', slug: 'kuala-lumpur-sambal-streets-food-tour-with-15', description: "A guided route through KL's street food you'd otherwise miss", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-203827/img0/1600.webp', price: 'From $90' },
        { title: 'Kuala Lumpur Full-Day Private City Tour with 22 Attractions', slug: 'kuala-lumpur-full-day-private-city-tour-with-22', description: "A broad first-day overview of the city", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-803183/img0/1600.webp', price: 'From $195' },
    ],
    'penang': [
        { title: 'Georgetown Street Art Tour & Mixed-Culture Local Food Tasting', slug: 'georgetown-street-art-tour-mixed-culture-local', description: "The mural hunt plus George Town's multicultural food", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-723228/img0/1600.webp', price: 'From $136' },
        { title: 'George Town: Heritage Walking Tour with Street Food Tasting', slug: 'george-town-heritage-walking-tour-with-street', description: "Georgetown's UNESCO heritage zone with food stops built in", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-895884/img0/1600.webp', price: 'From $102' },
        { title: 'Penang: Penang Hill and Kek Lok Si Temple Entry Ticket', slug: 'penang-penang-hill-and-kek-lok-si-temple-entry', description: "The hill funicular and Malaysia's largest Buddhist temple", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-1283404/img0/1600.webp', price: 'From $136' },
        { title: 'Good Morning Penang Food Tour with 15+ Tastings', slug: 'good-morning-penang-food-tour-with-15-tastings', description: "Assam laksa, char kway teow and more with a local guide", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-679198/img0/1600.webp', price: 'From $84' },
        { title: 'Sunrise at Penang Hill, Kek Lok Si Temple, and Market Tour', slug: 'sunrise-at-penang-hill-kek-lok-si-temple-and', description: "Beats the queues with a genuinely early timing", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-1294852/img0/1600.webp', price: 'From $181' },
        { title: 'Penang: Chew Jetty, Heritage & Street Food Night Tour', slug: 'penang-chew-jetty-heritage-street-food-night-tour', description: "The last inhabited stilt-village jetty plus the old town at night", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-1466451/img0/1600.webp', price: 'From $121' },
    ],
    'langkawi': [
        { title: 'Langkawi: Island Tour with Cable Car & Sky Bridge Tickets', slug: 'langkawi-island-tour-with-cable-car-sky-bridge', description: "The SkyCab ride and SkyBridge bundled with an island tour", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-1358246/img0/1600.webp', price: 'From $1,206' },
        { title: 'Langkawi: Island Hopping Shared or Private Boat Options', slug: 'langkawi-island-hopping-shared-or-private-boat', description: "Flexible island-hopping with shared or private boat options", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-723708/img0/1600.webp', price: 'From $23' },
        { title: 'Langkawi: Island Hopping + Pregnant Maiden Lake Tour', slug: 'langkawi-island-hopping-pregnant-maiden-lake-tour', description: "Island hopping paired with the island's famous freshwater lake", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-620115/img0/1600.webp', price: 'From $36' },
        { title: 'Langkawi: Jet Ski Tour Island Hopping 3 Hour Experience', slug: 'langkawi-jet-ski-tour-island-hopping-3-hour', description: "A faster, more active way to see the islands", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-834261/img0/1600.webp', price: 'From $216' },
    ],
    'malacca': [
        { title: 'Melaka: Rempah Routes Food Tour with 15+ Tastings', slug: 'melaka-rempah-routes-food-tour-with-15-tastings', description: "A food-led route through Malacca's Peranakan and Malay flavours", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-1209075/img0/1600.webp', price: 'From $75' },
        { title: 'From Kuala Lumpur: Malacca UNESCO Heritage Day Tour', slug: 'from-kuala-lumpur-malacca-unesco-heritage-day-tour', description: "A day trip covering A Famosa, Jonker Street and the Baba Nyonya museum", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-1119805/img0/1600.webp', price: 'From $143' },
    ],
    'kota-kinabalu': [
        { title: 'Sabah: 3 Days 2 Night Mount Kinabalu Climb', slug: 'sabah-3-days-2-night-mount-kinabalu-climb', description: "The full structured climb with the mandatory overnight at Laban Rata", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-1008301/img0/1600.webp', price: 'From $2,273' },
        { title: 'Kota Kinabalu: Lovely Paradise Island Tour + Seafood Lunch', slug: 'kota-kinabalu-lovely-paradise-island-tour-seafood', description: "A multi-island hopping day across the Tunku Abdul Rahman park", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-1274321/img0/1600.webp', price: 'From $225' },
        { title: 'Kota Kinabalu: Mari Mari Cultural Village Tour', slug: 'kota-kinabalu-mari-mari-cultural-village-tour', description: "Sabah's indigenous tribal cultures in a recreated village setting", image: 'https://images.asiabylocals.com/asiabylocals/tours/my-800091/img0/1600.webp', price: 'From $173' },
    ],
    // Siem Reap. Without an entry here the "Top-Rated Tours" block renders
    // empty and the authority pages pass no link equity to the tour pages —
    // which is exactly what happened to Phuket for eleven pages.
    'phnom-penh': [
        { title: "Tuol Sleng and Killing Fields Guided Tour", slug: 'tuol-sleng-and-killing-fields-guided-tour', description: "Tuol Sleng and Choeung Ek in one half-day, with transport between them and a guide", image: 'https://images.asiabylocals.com/asiabylocals/tours/tuol-sleng-and-killing-fields-guided-tour/img0/1600.webp', price: 'From $78', rating: '4.58' },
        { title: "Royal Palace, National Museum and Wat Phnom with Private tour in Phnom Penh", slug: 'royal-palace-national-museum-and-wat-phnom-with-pr', description: "The Silver Pagoda, the best Khmer sculpture anywhere, and the hill the city is named after", image: 'https://images.asiabylocals.com/asiabylocals/tours/royal-palace-national-museum-and-wat-phnom-with-private-tour-in-phnom-penh/img0/1600.webp', price: 'From $163', rating: '4.88' },
        { title: "Phnom Penh Morning Market and Street Art Tour by Tuk Tuk", slug: 'phnom-penh-morning-market-and-street-art-tour-by', description: "The markets while they are still working, then the murals that have gone up since 2015", image: 'https://images.asiabylocals.com/asiabylocals/tours/phnom-penh-morning-market-and-street-art-tour-by-tuk-tuk/img0/1600.webp', price: 'From $64', rating: '4.95' },
        { title: "Street Art and Food Tour with Pickup and Beer in Phnom Penh", slug: 'street-art-and-food-tour-with-pickup-and-beer', description: "Eating where the city eats, with the ordering handled - the actual barrier in Cambodia", image: 'https://images.asiabylocals.com/asiabylocals/tours/street-art-and-food-tour-with-pickup-and-beer-in-phnom-penh/img0/1600.webp', price: 'From $51', rating: '5.0' },
        { title: "Phnom Penh Haft Day Tour to Silk Island by Tuk Tuk", slug: 'phnom-penh-haft-day-tour-to-silk-island-by', description: "A short ferry upstream to the island where weavers still sell at the loom", image: 'https://images.asiabylocals.com/asiabylocals/tours/phnom-penh-haft-day-tour-to-silk-island-by-tuk-tuk-phnom-penh/img0/1600.webp', price: 'From $46', rating: '5.0' },
        { title: "Phnom Penh in Colour: Street Art and Sunset Mekong Cruise", slug: 'phnom-penh-in-colour-street-art-and-sunset-mekong', description: "Street art in the afternoon, then an hour where the Mekong, Tonle Sap and Bassac meet", image: 'https://images.asiabylocals.com/asiabylocals/tours/phnom-penh-in-colour-street-art-and-sunset-mekong-cruise/img0/1600.webp', price: 'From $72', rating: '5.0' },
        { title: "A Day Trip to Kep Beach and Kampot from Phnom Penh", slug: 'a-day-trip-to-kep-beach-and-kampot-from', description: "Kampot pepper smallholdings under Bokor, and blue swimmer crab at the Kep crab market", image: 'https://images.asiabylocals.com/asiabylocals/tours/a-day-trip-to-kep-beach-and-kampot-from-phnom-penh-phnom-penh/img0/1600.webp', price: 'From $306', rating: '4.8' },
        { title: "Oudong Mountain and Phnom Penh Full Day Private Tour", slug: 'oudong-mountain-and-phnom-penh-full-day-private-to', description: "Royal capital for 250 years until 1866, with hilltop stupas holding the ashes of kings", image: 'https://images.asiabylocals.com/asiabylocals/tours/oudong-mountain-and-phnom-penh-full-day-private-tour/img0/1600.webp', price: 'From $376', rating: '5.0' },
    ],
    'siem-reap': [
        { title: "Angkor Wat, Angkor Thom, and Ta Prohm Day Trip with Sunset", slug: 'angkor-wat-angkor-thom-and-ta-prohm-day-trip', description: "Angkor Wat, Angkor Thom and Ta Prohm in one day with sunset - the small circuit, done properly", image: 'https://images.asiabylocals.com/asiabylocals/tours/angkor-wat-angkor-thom-and-ta-prohm-day-trip-with-sunset-siem-reap/img0/1600.webp', price: 'From $25', rating: '5.0' },
        { title: "Banteay Srei and Grand Circuit Heritage Tour", slug: 'banteay-srei-and-grand-circuit-heritage-tour', description: "Banteay Srei carving plus the grand circuit, the loop most visitors never reach", image: 'https://images.asiabylocals.com/asiabylocals/tours/banteay-srei-and-grand-circuit-heritage-tour/img0/1600.webp', price: 'From $25', rating: '4.86' },
        { title: "Grand Circle Tour and Sunset on Bakheng Hill with Guide in Siem Reap", slug: 'grand-circle-tour-and-sunset-on-bakheng-hill-with', description: "Preah Khan, Neak Pean and Ta Som, finishing on Bakheng hill for sunset", image: 'https://images.asiabylocals.com/asiabylocals/tours/grand-circle-tour-and-sunset-on-bakheng-hill-with-guide-in-siem-reap/img0/1600.webp', price: 'From $25', rating: '4.89' },
        { title: "Kulen Waterfall and Banteay Srei Exploration", slug: 'kulen-waterfall-and-banteay-srei-exploration', description: "Banteay Srei pink sandstone and the Kulen waterfall, a full day out of town", image: 'https://images.asiabylocals.com/asiabylocals/tours/kulen-waterfall-and-banteay-srei-exploration/img0/1600.webp', price: 'From $64', rating: '5.0' },
        { title: "Angkor International Airport (SAI) Private/Shared Transfers", slug: 'angkor-international-airport-sai-privateshared-tra', description: "The 45 km run in from Siem Reap-Angkor International, with a driver already waiting", image: 'https://images.asiabylocals.com/asiabylocals/tours/angkor-international-airport-sai-private-shared-transfers-siem-reap/img0/1600.webp', price: 'From $33', rating: '4.83' },
        { title: "Phare: The Cambodian Circus Show with Pickup and Drop-off", slug: 'phare-the-cambodian-circus-show-with-pickup-and-dr', description: "Modern acrobatic theatre staged by graduates of the Battambang circus school", image: 'https://images.asiabylocals.com/asiabylocals/tours/phare-the-cambodian-circus-show-with-pickup-and-drop-off/img0/1600.webp', price: 'From $57', rating: '5.0' },
        { title: "Ultimate Street Food Tour with 20+ Tastings in Siem Reap", slug: 'ultimate-street-food-tour-with-20-tastings-in-siem', description: "Twenty-plus tastings at stalls with no English menu, in the order a Khmer family eats them", image: 'https://images.asiabylocals.com/asiabylocals/tours/ultimate-street-food-tour-with-20-tastings-in-siem-reap/img0/1600.webp', price: 'From $64', rating: '5.0' },
        { title: "Authentic Countryside Sunset Tuk Tuk Tour in Siem Reap", slug: 'authentic-countryside-sunset-tuk-tuk-tour-in-siem-', description: "Rice fields, sugar palms and villages five minutes off the temple road, at last light", image: 'https://images.asiabylocals.com/asiabylocals/tours/authentic-countryside-sunset-tuk-tuk-tour-in-siem-reap/img0/1600.webp', price: 'From $103', rating: '5.0' },
    ],
    'agra': [
        { title: 'Book Official Tour Guide for Taj Mahal', slug: 'taj-mahal-official-guided-tour', description: 'Licensed ASI-certified guide with skip-the-line entry — 3 hours', image: '/things-to-do/agra-official-guide.webp', price: 'From $15', rating: '4.9' },
        { title: 'Taj Mahal Entry Ticket Assistance', slug: 'taj-mahal-entry-ticket', description: 'Pre-booked digital tickets with preferred time slot secured', image: '/things-to-do/agra-taj-ticket.webp', price: 'From $18', rating: '4.8' },
        { title: 'Taj Mahal Sunrise Tour', slug: 'taj-mahal-sunrise-tour', description: 'Early morning visit with golden hour photography & licensed guide', image: '/things-to-do/agra-taj-mahal-sunrise.webp', price: 'From $20', rating: '4.9' },
        { title: 'Taj Mahal & Agra Fort Guided Tour', slug: 'taj-mahal-agra-fort-guided-tour', description: 'Both UNESCO monuments in one day with a historian guide', image: '/things-to-do/agra-fort-gate.webp', price: 'From $25', rating: '4.9' },
        { title: 'Agra Friday Tour (Taj Closed Alternative)', slug: 'agra-friday-tour-taj-closed-alternative', description: 'Agra Fort, Baby Taj & Mehtab Bagh sunset — perfect Friday itinerary', image: '/things-to-do/agra-baby-taj.jpg', price: 'From $22', rating: '4.8' },
        { title: 'Book Tour Guide for Fatehpur Sikri', slug: 'fatehpur-sikri-guided-tour', description: 'Explore Akbar\'s abandoned ghost capital with a historian — 3 hours', image: '/things-to-do/agra-fatehpur-sikri.webp', price: 'From $18', rating: '4.8' },
        { title: 'Female Guide for Taj Mahal', slug: 'female-guide-for-taj-mahal', description: 'Licensed female historian guide — ideal for solo women & families', image: '/things-to-do/agra-female-guide-tour.webp', price: 'From $18', rating: '4.9' },
        { title: 'Taj Mahal Photography Tour', slug: 'taj-mahal-photography-tour', description: 'Professional photography spots & timing with an expert guide', image: '/things-to-do/agra-taj-mahal-garden.webp', price: 'From $25', rating: '4.8' },
        { title: 'Same Day Taj Mahal Tour from Delhi', slug: 'taj-mahal-delhi-guided-tour', description: 'Full-day Delhi to Agra round trip with private car & guide', image: '/things-to-do/agra-transfer-car.webp', price: 'From $65', rating: '4.9' },
        { title: 'Taj Mahal Royal Private Tour', slug: 'taj-mahal-royal-private-tour', description: 'Premium private experience — Taj, Agra Fort & Baby Taj with luxury transport', image: '/things-to-do/agra-taj-mahal-mosque.webp', price: 'From $85', rating: '4.9' },
    ],
    'delhi': [
        { title: 'Explore Old & New Delhi by Luxury Car', slug: 'explore-old-new-delhi-city-luxury-car-tour', description: 'Premium guided tour covering Red Fort, India Gate & more' },
        { title: 'Delhi Guided Shopping Tour with Female Expert', slug: 'delhi-guided-shopping-tour-female-expert', description: 'Local markets, textiles & spices with a female guide' },
        { title: 'Golden Triangle 3-Day Tour', slug: 'golden-triangle-3-day-tour', description: 'Delhi, Agra & Jaipur in 3 days with expert guides' },
        { title: 'India Gate Guided Tour', slug: 'india-gate-guided-tour', description: 'Historical walking tour of India Gate & Rajpath' },
    ],
    'jaipur': [
        { title: 'Amber Fort Official Guided Tour', slug: 'amber-fort-official-guided-tour', description: 'Licensed guide for the magnificent hilltop fortress' },
        { title: 'Hawa Mahal Private Tour', slug: 'hawa-mahal-private-tour', description: 'Palace of Winds with historical commentary' },
        { title: 'Jaipur Shopping Tour', slug: 'jaipur-shopping-tour', description: 'Gems, textiles & handicrafts with a local expert' },
        { title: 'Jaipur City Highlights with Amber Fort & Hawa Mahal', slug: 'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal', description: 'Full-day tour of the Pink City\'s top attractions' },
    ],
    'bangkok': [
        { title: 'Grand Palace, Wat Pho & Wat Arun Guided Tour', slug: 'bangkok-grand-palace-wat-pho-wat-arun-guided-tour', description: 'Private licensed guide for the Royal Complex — 5 hours', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1773710349/tours/bangkok-grand-palace/hq_1.jpg', price: 'From $49', rating: '4.9' },
        { title: 'Bangkok Chinatown Food Tour: 15+ Michelin Tastings', slug: 'bangkok-chinatown-food-tour-15-tastings-michelin-stops', description: 'Navigate Yaowarat with a local food expert — 15+ tastings', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1773776051/tours/bangkok/chefs_tour_6_1773776050893.jpg', price: 'From $70', rating: '4.9' },
        { title: 'Bangkok After Dark: Street Food & Tuk-Tuk Night Tour', slug: 'bangkok-street-food-tuk-tuk-night-tour', description: 'Evening street food & tuk-tuk adventure through Bangkok\'s backstreets', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1773771518/tours/bangkok/midnight_food_1773771515522_0.jpg', price: 'From $77', rating: '4.8' },
        { title: 'Floating Market & Railway Market Day Trip', slug: 'bangkok-floating-market-railway-market-day-trip-boat-ride', description: 'Damnoen Saduak + Maeklong Railway Market with boat ride', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1773768723/tours/bangkok/floating_market_1773768720503_0.jpg', price: 'From $21', rating: '4.7' },
        { title: 'Ayutthaya Ancient Temples Day Trip', slug: 'ayutthaya-ancient-temples-day-trip-bangkok-thai-lunch', description: 'UNESCO World Heritage ruins — full-day guided trip from Bangkok', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1773778104/tours/bangkok/ayutthaya_cover_1773778102218.jpg', price: 'From $42', rating: '4.8' },
        { title: 'Maeklong Railway, Damnoen Saduak & Dragon Temple', slug: 'bangkok-maeklong-railway-damnoen-saduak-dragon-temple-tour', description: 'Three unmissable Bangkok day-trip sights in one guided tour', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1773712062/asiabylocals/tours/bangkok-train-floating-market-dragon-temple/hq_tour_img_1.jpg', price: 'From $30', rating: '4.8' },
        { title: 'Learn Muay Thai: Private Training', slug: 'learn-muay-thai-bangkok-private-training-certified-fighter', description: '1-on-1 Muay Thai training at a certified Bangkok gym', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1773766998/tours/bangkok/muaythai_fitfac_hires_1773766994877_0.jpg', price: 'From $60', rating: '4.9' },
        { title: 'Ancient City & Erawan Museum Day Trip', slug: 'bangkok-ancient-city-erawan-museum-tour', description: 'Thailand\'s largest open-air museum + the three-headed elephant', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1773642670/tours/bangkok/tours/bangkok_1773642669956_0.jpg', price: 'From $25', rating: '4.7' },
        { title: 'Bangkok Photo Walk: Hidden Gems Tour', slug: 'bangkok-photo-walk-hidden-gems-tour', description: 'Discover Bangkok\'s hidden streets and temples with a guide', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1773736540/tours/bangkok/tours/bangkok_1773736539768_0.jpg', price: 'From $45', rating: '4.8' },
        { title: 'Khlong Toei Market Scavenger Hunt', slug: 'bangkok-scavenger-hunt-tour', description: 'Interactive market tour + tuk-tuk ride through Bangkok', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1773742435/tours/bangkok/tours/bangkok_1773742434677_0.jpg', price: 'From $35', rating: '4.7' },
        { title: 'Bangkok Temples, Canals & Local Life Bike Tour', slug: 'bangkok-temples-canals-local-life-bike-tour', description: 'Ride through Thonburi\'s backstreets, canals & temples — max 8 riders', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1773875959/tours/bangkok/biketour/cover.jpg', price: 'From $23', rating: '4.9' },
    ],
    'beijing': [
        { title: 'BJ in a Day: Great Wall, Forbidden City, Hutong & Acrobatics', slug: 'bj-in-a-day-great-wall-forbidden-city-hutong', description: 'Great Wall, Forbidden City, Temple of Heaven and Summer Palace tickets in one packed day', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/70c602548385993fe63184f846c1d0b664db7cfcd45baf6fc9d31370e08f4080.jpg', price: 'From $246', rating: '4.7' },
        { title: 'Off-Peak Mutianyu Great Wall Tour: Early Morning/Last Entry', slug: 'off-peak-mutianyu-great-wall-tour-early', description: 'Timed entry slots that dodge the midday tour-bus crowd wave at Mutianyu', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c6c2e541f4e7c143070d03', price: 'From $181', rating: '4.8' },
        { title: 'Beijing: Mutianyu Great Wall Private Photo Tour with Guide', slug: 'beijing-mutianyu-great-wall-private-photo-tour', description: 'A private, paced Wall day with a guide who knows the empty stretches for photos', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c6c2e541f4e7c143070d03', price: 'From $566', rating: '4.9' },
        { title: 'Beijing Hutong, Drum Tower & Fortune Temple Tour', slug: 'beijing-hutong-drum-tower-fortune-temple-tour', description: 'Old lane neighborhoods, the Drum Tower and a fortune temple most tourists miss', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9179579e8225c71c901c7ad', price: 'From $78', rating: '4.7' },
        { title: 'Beijing: Forbidden City and 798 Art Zone Guided Day Tour', slug: 'beijing-forbidden-city-and-798-art-zone-guided', description: 'Imperial history in the morning, contemporary art in the afternoon', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/91fe6e96cc216fe2cce77c3', price: 'From $402', rating: '4.7' },
        { title: 'Beijing: Private Tour with Forbidden City and Summer Palace', slug: 'beijing-private-tour-with-forbidden-city-and', description: 'Both of Beijing\'s biggest imperial sites in one paced private day', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/beijing-lama-temple-summer-palace', price: 'From $1157', rating: '4.9' },
        { title: 'Beijing: Dumpling-Making Class with Local Host', slug: 'beijing-dumpling-making-class-with-local-host', description: 'Hands-on in a real home kitchen — consistently the top-rated single activity in the city', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/68cf1ea2154466309633bfd', price: 'From $117', rating: '4.9' },
        { title: 'Beijing: Chinese Home Cooking Class with Local Host', slug: 'beijing-chinese-home-cooking-class-with-local-host', description: 'Market shopping then cooking a full home-style meal together', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ed259f9300e7ac7505eb8a1', price: 'From $117', rating: '4.9' },
        { title: 'Beijing: Temple of Heaven Detective Tour with Tickets', slug: 'beijing-temple-of-heaven-detective-tour-with', description: 'A game-format guided visit to the Temple of Heaven, tickets included', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0cab3f', price: 'From $81', rating: '4.6' },
        { title: 'Beijing: Paper-Cutting Workshop and Tea Tasting Experience', slug: 'beijing-paper-cutting-workshop-and-tea-tasting', description: 'A traditional craft workshop with a local artist and a tea tasting', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2781edc31918e27ba7d0b8a768d9c1c460ee043921f828d659a8063f438841ec.png', price: 'From $123', rating: '4.8' },
    ],
    'shanghai': [
        { title: 'Shanghai: Zhujiajiao, French Concession & Bund Day Tour', slug: 'shanghai-zhujiajiao-french-concession-bund-day', description: 'A one-day sampler of the water town, old colonial district and skyline', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-zhujiajiao', price: 'From $152', rating: '4.7' },
        { title: 'Modern Suzhou & Ancient Water Town Tour with Boat Ride', slug: 'modern-suzhou-ancient-water-town-tour-with-boat', description: "Suzhou's UNESCO-listed gardens and canals in one day trip with a boat ride", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/suzhou-canal', price: 'From $440', rating: '4.8' },
        { title: 'Private Suzhou Day Trip from Shanghai by Bullet Train', slug: 'private-suzhou-day-trip-from-shanghai-by-bullet', description: "The stronger day-trip pick if you can only do one — classical gardens via bullet train", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/suzhou-garden', price: 'From $585', rating: '4.8' },
        { title: 'Shanghai: Yu Garden and City God Temple Culture Tour', slug: 'shanghai-yu-garden-and-city-god-temple-culture', description: 'A guided visit separating the real garden from the surrounding bazaar', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-yu-garden', price: 'From $102', rating: '4.7' },
        { title: 'From Shanghai: Zhujiajiao Water Town Day Trip with Boat Ride', slug: 'from-shanghai-zhujiajiao-water-town-day-trip-with', description: 'The easiest canal-town day trip from Shanghai, with the signature gondola ride', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/zhujiajiao-boat', price: 'From $676', rating: '4.7' },
        { title: 'Shanghai: River Ferry and Bund Tour with Local English Guide', slug: 'shanghai-river-ferry-and-bund-tour-with-local', description: "Both the historic Bund and futuristic Pudong skyline from the water", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0f00744670e8541da39765d', price: 'From $101', rating: '4.7' },
        { title: 'Shanghai Tower: Observation Deck Admission Ticket', slug: 'shanghai-tower-observation-deck-admission-ticket', description: "The world's second-tallest building, best visited in the morning", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-tower', price: 'From $66', rating: '4.7' },
        { title: 'Shanghai: Former French Concession Bike Tour with Brunch', slug: 'shanghai-former-french-concession-bike-tour-with', description: "Covers more ground than walking alone, brunch stop included", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/french-concession-bike', price: 'From $323', rating: '4.7' },
        { title: 'Shanghai: VIP Huangpu Night Cruise with Guide & Bund Views', slug: 'shanghaivip-huangpu-night-cruise-with-guide-bund', description: 'Both skylines lit up at night, seen from the water', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-night-cruise', price: 'From $41', rating: '4.6' },
        { title: 'Shanghai Disneyland Guided Tour: 6-Hour Group/Private', slug: 'shanghai-disneyland-guided-tour-6-hour', description: 'Ticketing and park logistics handled for the first Disney park on the Chinese mainland', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-disneyland-tour', price: 'From $40', rating: '4.5' },
    ],
    'hongkong': [
        { title: 'Hong Kong: Victoria Peak Guided Walking Tour', slug: 'hong-kong-victoria-peak-guided-walking-tour', description: 'Skip the Peak Tram station queue and climb Victoria Peak on foot with a guide', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/78b8cdc0b3b074980e2b7e9d89315712fee9c9444af006d906d3756218b124de.jpg', price: 'From $208', rating: '4.7' },
        { title: 'HK: Sail on Star Ferry to Million-Dollars View Central Tour', slug: 'hk-sail-on-star-ferry-to-million-dollars-view', description: 'The classic harbor crossing, running since 1888, paired with a Central walk', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1adedc55131203d80fbc40423126d42070bc78cfe083f583f7d5741c5b8626a7.jpeg', price: 'From $29', rating: '4.6' },
        { title: 'Hong Kong: Peak Tram Sky Terrace 428 & Photos Tour', slug: 'hong-kong-peak-tram-sky-terrace-428-photos-tour', description: 'A timed Peak Tram visit that avoids the worst of the boarding queue', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a770dcde68e54570c682cc4a54dbb1eb621ccf4700edddb505edcf5c667b19b8.png', price: 'From $119', rating: '4.6' },
        { title: 'Hong Kong: Lantau VIP Priority Cable Car, Big Buddha & Tai O', slug: 'hong-kong-lantau-vip-priority-cable-car-big', description: 'The full Lantau Island day — Ngong Ping 360 cable car, Big Buddha and Tai O fishing village', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1b06e15f219028b4aa5249305d094571ec9394403bf321771f4700b13020c336.jpg', price: 'From $131', rating: '4.7' },
        { title: 'Ngong Ping 360 Cable Car Fast Lane Ticket with Hotel Pick Up', slug: 'ngong-ping-360-cable-car-fast-lane-ticket-with', description: 'Skip the base-station queue to reach the Tian Tan Buddha', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/207dd90465dd6b901d24827a7b867448fc42101b69682ca46ced4a8e0c673833.jpg', price: 'From $68', rating: '4.6' },
        { title: 'Hong Kong: Small-Group Dim Sum Lunch with 30+ Items', slug: 'hong-kong-small-group-dim-sum-lunch-with-30', description: 'A guided dim sum lunch covering 30-plus classic dishes', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/238b5465b7fe6311243810dfcdc5da07c8c7341098818628dc4e91ead1c8c84b.jpg', price: 'From $1105', rating: '4.8' },
        { title: 'Hong Kong: Yau Ma Tei Temple Street Night Walking Tour', slug: 'hong-kong-yau-ma-tei-temple-street-night-walking', description: 'A guided walk through Temple Street\'s night market stalls and food stands', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a5008587fb56e196dfaa948d1b25a7357b621c7e284237a865eb6869d279bda8.png', price: 'From $228', rating: '4.7' },
        { title: 'Macau: Macau Full Day Tour with Lunch and Transfers', slug: 'macau-macau-full-day-tour-with-lunch-and-transfers', description: 'A full-day Macau trip with ferry, transfers and lunch handled', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/172162fc9c3d4efd940fd62e939a9795bcf0950012b8453159c3ba4a6b12a0ac.jpg', price: 'From $161', rating: '4.5' },
    ],
    'taipei': [
        { title: 'Taipei: City Highlights Tour with Taipei 101 Observatory', slug: 'taipei-city-highlights-tour-with-taipei-101', description: 'The 89th-floor observatory plus the city highlights, in one guided day', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1dc72d786636f64e3a6ab0305d5d38e68f59356f59f82436e69ef6baabbe1080.png', price: 'From $89', rating: '4.6' },
        { title: 'From Taipei: Jiufen and Shifen Day Trip with Guide Bus Tour', slug: 'from-taipei-jiufen-and-shifen-day-trip-with-guide', description: "Jiufen's lantern-lit old street and Shifen's sky lantern release in one day", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1e47d3f0f962cc7bd362da4d85a5ae1f321fceebb78a91f3c8ffaa921ddf757.jpg', price: 'From $62', rating: '4.6' },
        { title: 'Taipei: Longshan Temple, Dihua Street & Taipei 101 Tour', slug: 'taipei-longshan-temple-dihua-street-taipei-101', description: "The city's most atmospheric temple, the old merchant quarter and the modern skyline", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1c6e6382cd4e43257d35e28c523c9ac75b5c4bd79122f4ce9656a2ca3ef3fbd4.png', price: 'From $466', rating: '4.6' },
        { title: 'Taipei: 2-Hour Raohe Night Market Walking Tour', slug: 'taipei-2-hour-raohe-night-market-walking-tour', description: "A guided evening through one of Taipei's best night markets for food", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9a93e9c213f8958b4ec19e656eddff00cf009f5799d4da38df6f883acb67576b.png', price: 'From $78', rating: '4.6' },
        { title: 'Taipei: 4-Hour Beitou Hot Springs & Heritage Walking Tour', slug: 'taipei-4-hour-beitou-hot-springs-heritage-walking', description: "A hot-spring valley that's been a resort district since the Japanese colonial era", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fb8ecdd3799b61e6b317f26aff64bda69434b789d0e131a1085ee9a6516fbabd.jpeg', price: 'From $181', rating: '4.6' },
        { title: 'Taipei: Yangmingshan National Park Hiking Day Tour', slug: 'taipei-yangmingshan-national-park-hiking-day-tour', description: "A volcanic national park inside the city limits, with sulfur vents and trails", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cbb024dd3226f8cc19f6f86e505db9bf0d5f5ad4c73f81a468a03c1f5f4bcfd7.jpeg', price: 'From $581', rating: '4.6' },
        { title: 'Taipei: Food Tour with 12+ Taiwanese Tastings', slug: 'taipei-food-tour-with-12-taiwanese-tastings', description: 'A guided first-night orientation to beef noodle soup and night-market staples', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4a87893e8407e0d0bfe688b382f3e7103a4fac2681896191c8aaaaf9ebce8665.jpeg', price: 'From $73', rating: '4.6' },
        { title: 'From Taipei: Private Maokong Gondola & Tea Culture Day Tour', slug: 'from-taipei-private-maokong-gondola-tea-culture', description: 'A scenic gondola ride up to the tea-growing hills above the city', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4582daf2ac14268b503fdf943a54e9cf5b7f442c689b80a04ef2d861aca7a428.jpeg', price: 'From $546', rating: '4.6' },
    ],
    'seoul': [
        { title: 'Seoul: Gyeongbokgung Tour with Hanbok as a King or Queen', slug: 'seoul-gyeongbokgung-tour-with-hanbok-as-a-king-or', description: 'A guided palace walk with hanbok rental and free palace entry handled for you', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e83adac682525068c13880ea43e0dcf685f0e9146feb0243a603171589a2f62e.jpg', price: 'From $340', rating: '4.7' },
        { title: 'Seoul: DMZ Small-Group Tour with Lunch & North Korea View', slug: 'seoul-dmz-small-group-tour-with-lunch-north-korea', description: "Seoul's most-booked day trip — the Third Tunnel, Dora Observatory and Imjingak", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/43e4f501bad3975debe95bac8919a4e4e2045b5609d8340fdc276487c1c8c01a.png', price: 'From $129', rating: '4.7' },
        { title: 'Seoul: Hongdae Indie Live Music Night & Korean BBQ Dinner', slug: 'seoul-hongdae-indie-live-music-night-korean-bbq', description: "A proper BBQ dinner paired with Hongdae's indie music scene", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a3c7bd3c113aadb41d2f84904d24696c89bc6d1f1d5babf6e2472c8ba9a17082.jpg', price: 'From $57', rating: '4.7' },
        { title: 'Be a K-Pop Star in Seoul: Studio Recording, Makeup & Video', slug: 'be-a-k-pop-star-in-seoul-studio-recording', description: 'A full styling, vocal recording and video-shoot experience, no dance background needed', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/735a6acd3c7d0a5f204f0723432e2cc29280f51e07f766a6afb5f850c99ad885.jpg', price: 'From $379', rating: '4.7' },
        { title: 'Seoul: N Seoul Tower & Myeongdong Night Tour', slug: 'seoul-n-seoul-tower-myeongdong-night-tour', description: "Myeongdong's evening street food paired with the N Seoul Tower skyline", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/72181adabda65850009a3e75b893559387c981526472d20e04447c912aed2c11.jpg', price: 'From $135', rating: '4.7' },
        { title: 'Seoul: Bukchon Village, Gyeongbokgung, Gwangjang Market', slug: 'seoul-bukchon-village-gyeongbokgung-gwangjang', description: "A guided morning loop through the palace, hanok village and a market stop", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c06b62fe9a354db85eec52efc79810b4d224c99289b0ede41528bb15f22a75f1.jpg', price: 'From $56', rating: '4.7' },
        { title: 'Seoul: Insadong & Jogye Temple Cultural Guided Walking Tour', slug: 'seoul-insadong-jogye-temple-cultural-guided', description: "The traditional-crafts district and its central Buddhist temple in one guided walk", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b5b2ff5b4df99e336e8fd31561f43c38a89fea5af32db715b593eb8d05e51188.png', price: 'From $68', rating: '4.7' },
        { title: 'Seoul: Royal Palaces, Secret Garden & Hanok Village Tour', slug: 'seoul-royal-palaces-secret-garden-hanok-village', description: "A guided day combining multiple palaces, the Secret Garden and a hanok village stop", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bad5aded21ad081f5519f659809804dacc102d3083b0e65bff9066a17679de12.jpeg', price: 'From $299', rating: '4.6' },
    ],
    'istanbul': [
        { title: 'Istanbul: Hagia Sophia, Blue Mosque & Cistern Guided Tour', slug: 'istanbul-hagia-sophia-blue-mosque-cistern-guided', description: 'A guided morning covering the three headline Sultanahmet sights', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dcf68b321ccac985456d2efce5ad90f9daa43d9ee56aee55d69bdf3bbb43258c.jpeg', price: 'From $262', rating: '4.7' },
        { title: 'Istanbul: Topkapi Palace & Harem Fast-Track with Audio Guide', slug: 'istanbul-topkapi-palace-harem-fast-track-with', description: 'The main palace and separately-ticketed Harem, with fast-track entry', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/082f1a0813c0644e768877f4e3459078114df9ddbed36abd44102b627936bdbc.jpg', price: 'From $112', rating: '4.6' },
        { title: 'Istanbul: Private Grand Bazaar Shopping Tour with Guide', slug: 'istanbul-private-grand-bazaar-shopping-tour-with', description: "A guided walk through the Grand Bazaar's lanes with haggling tips", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/09e5af000b61afab317a5e87bc9d9c28f47e0a4575a4cc3eb8408c4f1c53871c.jpg', price: 'From $104', rating: '4.7' },
        { title: 'Istanbul: Bosphorus Sunset Yacht Tour With Guide & Snacks', slug: 'istanbul-bosphorus-sunset-yacht-tour-with-guide', description: 'A sunset cruise past the palaces, bridges and waterfront mansions', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6024c78ccbf626cabea49fd9701ff28924340966fc088184d649b880daf1a73e.jpeg', price: 'From $35', rating: '4.7' },
        { title: 'Istanbul: Princess Islands Day Trip with Lunch & Ferry', slug: 'istanbul-princess-islands-day-trip-with-lunch', description: 'A full day on the car-free Princes’ Islands, ferry and lunch included', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9bd18bf79d05f81d3cb769e7839dcee3ad0e68a5a30a717ccbd01b56db5e1c91.jpg', price: 'From $88', rating: '4.6' },
        { title: 'Istanbul: Karakoy Hammam Experience', slug: 'istanbul-karakoy-hammam-experience', description: 'A traditional hammam scrub-and-foam-massage experience in Galata/Karaköy', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e6d10d65383c41f9bba8a2857bc84d3bff2fc729bcb382b85b07d0ad94f180fa.jpeg', price: 'From $146', rating: '4.7' },
        { title: 'Istanbul Food Tour: Small Group, History & Photo Spots', slug: 'istanbul-food-tour-small-group-history-photo-spots', description: 'A guided street-food walk through the old city with historical context', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/838b47cab4965458e2bd87e4c8c9d30ef843b2c4a03aff5e5ed74f4f665636ba.jpg', price: 'From $117', rating: '4.8' },
        { title: 'Istanbul: Mesmerizing Whirling Dervishes Sema Ceremony', slug: 'istanbul-mesmerizing-whirling-dervishes-sema', description: 'A full Sema ceremony evening with the ritual’s history explained', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f4096e07cd93a71345623c12247ef4147659db690a8ee4477b79fb154a92d6cc.png', price: 'From $103', rating: '4.7' },
    ],
    'doha': [
        { title: 'Doha: Guided City Tour with Museum of Islamic Art Visit', slug: 'doha-guided-city-tour-with-museum-of-islamic-art', description: 'A guided city loop built around I.M. Pei’s Museum of Islamic Art', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f6c79b6b925263a2b6cd4880b16c089bd9bc7195fb62e4a55132a3248954f2de.jpeg', price: 'From $46', rating: '4.6' },
        { title: 'Doha: Souq Waqif Traditional Food Tour with Skyline Views', slug: 'doha-souq-waqif-traditional-food-tour-with', description: 'A guided food walk through the souq’s covered lanes', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2cab29b2b52f9ebf0f406d1a14f73ea0daa20f7124e88bd43053521f5b7d0fbf.jpeg', price: 'From $71', rating: '4.6' },
        { title: 'From Doha: Khor Al Adaid & Inland Sea 4x4 Desert Tour', slug: 'from-doha-khor-al-adaid-inland-sea-4x4-desert', description: 'Dune bashing out to where the desert meets the sea', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b90cf497acfec171428d65cce1d7576ced2db4c7599284ca2eb9ac9b2aebdef1.jpeg', price: 'From $78', rating: '4.6' },
        { title: 'Doha: Traditional Dhow Sunset Cruise with Optional Dinner', slug: 'doha-traditional-dhow-sunset-cruise-with-optional', description: 'A sunset cruise past the West Bay skyline', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c79071ddb93a209cbadc7f3b633f6133a15bfa3dedb17afb96a715c938e049e5.jpeg', price: 'From $24', rating: '4.6' },
        { title: 'Doha: Guided Kayaking Experience at The Pearl', slug: 'doha-guided-kayaking-experience-at-the-pearl', description: 'A guided paddle through The Pearl-Qatar’s marina', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4dd224a9dcbc2ef5c6a8e8226de462ceca1b1b2de037bf15df5955eee7395cb6.jpg', price: 'From $65', rating: '4.6' },
        { title: 'Doha: City Tour with Villaggio Mall Gondola Ride', slug: 'doha-city-tour-with-villaggio-mall-gondola-ride', description: 'A city loop including the indoor Venetian-style canal ride', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a8cf64db8dbc75e1891d1bd36f9754618618136ff082f43d201be060f46f5b47.png', price: 'From $168', rating: '4.6' },
        { title: 'Doha: Night Safari with Dune Bashing & Clear-Sky Stargazing', slug: 'doha-night-safari-with-dune-bashing-clear-sky', description: 'A desert safari scheduled entirely after sunset', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9eb1727443af0361ec8886f3feb625d8a63aaad8e2f142e90251760e7d462d0e.jpeg', price: 'From $26', rating: '4.6' },
        { title: 'From Doha: Al Zubarah Fort Tour via Al Khor & Purple Island', slug: 'from-doha-al-zubarah-fort-tour-via-al-khor', description: 'A full day to Qatar’s only UNESCO World Heritage Site', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cf0a6f0d5079ce7b10e2916a453fa4b09c588e3d97d9f8f92428f3a30fb20adf.png', price: 'From $50', rating: '4.6' },
    ],
    'male': [
        { title: 'Malé: Guided City Tour', slug: 'male-guided-city-tour', description: 'A guided loop through the capital’s harbor, mosque and old town', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/659bd1a3ae21ec75a02f3c82938dde311685054668a936ca2ccbcdf230fa8e3d.jpg', price: 'From $52', rating: '4.6' },
        { title: 'Maldives: Manta Ray Snorkeling at Rasfari Corner', slug: 'maldives-manta-ray-snorkeling-at-rasfari-corner', description: 'A snorkeling trip to a reliable manta ray site close to Malé', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eda7256a80feec399244d280cc30a4fb0b34b1375524b2ac07ebcc96b97b9332.jpg', price: 'From $221', rating: '4.6' },
        { title: 'From Hulhumalé: Nurse Shark & Stingray Snorkeling Tour', slug: 'from-hulhumale-nurse-shark-stingray-snorkeling', description: 'A guided snorkel trip for nurse sharks and stingrays', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/aa9554277e5c1832aaa0267b0921e2fdbd3ff8be2fd984d6834fcae205a2c0a3.png', price: 'From $260', rating: '4.6' },
        { title: 'Maldives: Sandbank, Snorkelling & Sunset Cruise', slug: 'maldives-sandbank-snorkelling-sunset-cruise', description: 'A combined sandbank, reef snorkel and sunset cruise half-day', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/63b6f89a915016e7d3c07b5ab15c6c3fc48c0d01890bd808cb7a78be7518da2f.jpg', price: 'From $372', rating: '4.6' },
        { title: 'Hulhumale & Male\': Small-Group Maldives Dolphin Cruise', slug: 'hulhumale-male-small-group-maldives-dolphin-cruise', description: 'A small-group cruise focused on spinner dolphin sightings', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cd2819d52d49c4363ed3b90de5684bde0c6ff3aeada334ed2173c9bc7f7a25fe.jpg', price: 'From $116', rating: '4.6' },
        { title: 'Maldives Submarine Tour – Dive 45 Meters Below the Ocean', slug: 'maldives-submarine-tour-dive-45-meters-below-the', description: 'Descend beneath the ocean without getting wet', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e9ba7b8d18296684580c4245de41b8770c78172687b327e98cc1d4336c1e4f3b.jpg', price: 'From $221', rating: '4.6' },
        { title: 'Maafushi: Beach Horse Ride with Sunrise & Sunset Options', slug: 'maafushi-beach-horse-ride-with-sunrise-sunset', description: 'A beach horse ride on Maafushi\'s shoreline', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6e13e77a3d2c232fb66fe504227cdb1fde6b48aff59af04eb86aa3f1a68e43b4.png', price: 'From $189', rating: '4.6' },
        { title: 'Maldives: Beginner Scuba Dive with Shallow-Water Training', slug: 'maldives-beginner-scuba-dive-with-shallow-water', description: 'An introductory dive for non-certified divers', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/de22f339d55621804067650723bb02805802a51c1ca96c0d7394e21d5f69b619.jpg', price: 'From $177', rating: '4.6' },
    ],
    'busan': [
        { title: 'Busan: Jagalchi Market & Gamcheon Village Walking Tour', slug: 'busan-jagalchi-market-gamcheon-village-walking', description: "Both of Busan's signature sights in a single guided walking day", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd3dab2e37e064f0ebeef9b3bbb9ad0bf893ff1b16eefdf4fae1e358afde878f.jpg', price: 'From $262', rating: '4.7' },
        { title: 'Busan: Day Trip to Haeundae Sky Capsule & Yonggungsa Temple', slug: 'busan-day-trip-to-haeundae-sky-capsule-yonggungsa', description: "Busan's famous beach and its clifftop coastal temple in one half-day", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ea6b12d36ba6e580fbaaccfc6ba380582658f36b52e98713e5f29e7b60c17815.jpg', price: 'From $28', rating: '4.6' },
        { title: 'Busan: Night Views Tour with Yacht Ride and Fireworks', slug: 'busan-night-views-tour-with-yacht-ride-and', description: "Haeundae and Gwangalli's lit-up coastline, seen from the water", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/928beadadd31968dd237c66c60408a6a05da367ecf83bc45c655d7524ed42650.jpg', price: 'From $228', rating: '4.7' },
        { title: 'Busan Bites Food Tour with 10+ Tastings', slug: 'busan-bites-food-tour-with-10-tastings', description: "A wide sampler across Busan's seafood and street-food specialties", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/347d35bea00bcf482b619cf80c8ef11ae07547c04664a9d41f605552cdfabeb4.jpg', price: 'From $114', rating: '4.7' },
        { title: 'Busan: Night Tour with Jagalchi Market and Skywalk', slug: 'busan-night-tour-with-jagalchi-market-and-skywalk', description: "Korea's largest seafood market paired with a coastal skywalk stop", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5b956fe1c7404209d99fd39fd66a55e5ee559cc82eaa908da151fec3bb53e1e4.jpg', price: 'From $98', rating: '4.6' },
        { title: 'Busan Tour: Gamcheon Village & Yonggungsa Temple + Lunch', slug: 'busan-tour-gamcheon-village-yonggungsa-temple', description: "Korea's 'Machu Picchu' village and the coastal temple, lunch included", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0e27d5add2a26b2a144a86a71d24168b477c8bbb9a8288d2a1d9ac0610f8bfa0.png', price: 'From $208', rating: '4.7' },
        { title: 'Busan Nightscape Experience: From BIFF Square to The Bay 101', slug: 'busan-nightscape-experience-from-biff-square-to', description: "A guided evening linking the historic entertainment core to the modern waterfront", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d66ba674c9946e105ba898ba5ba80f1c0ddf51e30ce2bdb462968fd8cc24cc9d.jpg', price: 'From $546', rating: '4.6' },
        { title: 'Busan: Local Food Experience & Korean Pancake Cooking', slug: 'busan-local-food-experience-korean-pancake-cooking', description: "A hands-on introduction to Busan's own food identity", image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/058ceb394d9c137736b85c72ad83cb6c037275c80186b7ae384baaad3ecd87d9.png', price: 'From $77', rating: '4.7' },
    ],
    'manila': [
        { title: 'Manila: Tour of Fort Santiago\'s Dungeons & Rizal\'s Last Walk', slug: 'manila-tour-of-fort-santiagos-dungeons-rizals', description: 'The WWII dungeons and José Rizal\'s final hours before execution', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/36fa199a7cab779366613d14f92d23bfa6c36f3abd4701ea8785946e5fb05aa2.jpg', price: 'From $47', rating: '4.6' },
        { title: 'Manila: 3-Hour Intramuros Guided Walking Tour', slug: 'manila-3-hour-intramuros-guided-walking-tour', description: 'The walled Spanish colonial core, its churches and old city walls', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/35b2c0e467012b43d605518d1fac67230f37b8c185310e2f2326b06a6c53bb28.jpeg', price: 'From $76', rating: '4.6' },
        { title: 'Manila: Binondo Chinatown Walking Tour with Food Samples', slug: 'manila-binondo-chinatown-walking-tour-with-food', description: 'The world\'s oldest Chinatown, with tastings along the way', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2adfd9286c73fc964db3fc7c7ca20b32f882093c176da73e237ebc5e4a5b318d.jpg', price: 'From $194', rating: '4.6' },
        { title: 'Private Tour! Manila, Tagaytay & Taal Volcano Day Tour', slug: 'private-tour-manila-tagaytay-taal-volcano-day-tour', description: 'The Tagaytay ridge view and Taal Volcano, one of the world\'s smallest active volcanoes', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6304876ee6b3c390549e2de990309b11d031c6621df95405850d1fbf2bca7faa.jpg', price: 'From $201', rating: '4.6' },
        { title: 'Manila: Manila Bay Sunset Walking Tour & Waterfront History', slug: 'manila-manila-bay-sunset-walking-tour-waterfront', description: 'A guided evening walk timed to the bay\'s dramatic sunset', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c8d25b1bc8b9093b24ce020a81b9aaab739c288090ce928c9f2877c5033dffcf.jpg', price: 'From $79', rating: '4.6' },
        { title: 'Manila: Food Tour! Cooking & Local Market Visit via Jeepney', slug: 'manila-food-tour-cooking-local-market-visit-via', description: 'A guided food and market tour that uses jeepneys as real transport', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0383216b8ddad3cad5ea7067eeca7d08916a68c1adefa530ee5ddb78961f7f15.png', price: 'From $82', rating: '4.6' },
        { title: 'Manila: Chef-Curated Food Tour of Makati by Motorcycle', slug: 'manila-chef-curated-food-tour-of-makati-by', description: 'A guided food crawl through Makati, skipping traffic by motorcycle', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f662d2a7f11233b2fb18a7584c3d9ed1737efea4bb2a56b0945ef172a4522272.jpg', price: 'From $113', rating: '4.6' },
    ],
    'cebu': [
        { title: 'Cebu: Oslob Whale Shark Tour, Sumilon Island & Tumalog Falls', slug: 'cebu-oslob-whale-shark-tour-sumilon-island', description: 'South Cebu\'s signature whale shark encounter plus Sumilon and Tumalog Falls', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/26eb511bcac63318af95c2418702f563a17f3567d203a2776c2fbb3245a7c3ef.jpg', price: 'From $227', rating: '4.6' },
        { title: 'Cebu: Kawasan Falls Canyoneering Tour with Hotel Pickup', slug: 'cebu-kawasan-falls-canyoneering-tour-with-hotel', description: 'Jumps, rappels and swims down to Kawasan\'s turquoise main pool', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a585eec8aa1511eff1f7180824adc66ea6d09cfb817452a7dca98d9eacff84f3.png', price: 'From $345', rating: '4.6' },
        { title: 'Cebu: Moalboal Scuba Diving, Sardines Run & Pescador Snorkel', slug: 'cebu-moalboal-scuba-diving-sardines-run-pescador', description: 'The shore-accessible sardine run plus a Pescador Island dive', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d2c79efd74626b51b0b930ddebb991094b0ecfe753eced67e4f2996403a29dd8.jpg', price: 'From $259', rating: '4.6' },
        { title: 'Cebu: City Tour of Christianity\'s Roots in the Philippines', slug: 'cebu-city-tour-of-christianitys-roots-in-the', description: 'Magellan\'s Cross, the Basilica and Fort San Pedro in one guided loop', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d6f0eeca47f1d1602377dcfb453880973dcc660fea9fc2fe32783b5f98dbecc7.png', price: 'From $76', rating: '4.6' },
        { title: 'From Cebu: Bohol Day Trip with Loboc River Cruise & Lunch', slug: 'from-cebu-bohol-day-trip-with-loboc-river-cruise', description: 'The Chocolate Hills and a floating-restaurant river cruise lunch', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1fd7bc0d5db837d86b5c768005af8bf1acc87efd45a3fb712604a2c5af54b82c.png', price: 'From $235', rating: '4.6' },
        { title: 'Cebu: Private Full-Day Customizable Car Charter with Driver', slug: 'cebu-private-full-day-customizable-car-charter', description: 'A flexible private charter for structuring your own Cebu day', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bea537d3939623dc173be01f063ad6247ad5f5387bd8265942b7c15a821d1f7f.jpeg', price: 'From $130', rating: '4.6' },
        { title: 'The Best of Siquijor Island Tour', slug: 'the-best-of-siquijor-island-tour', description: 'A guided loop through Siquijor\'s waterfalls, beaches and old churches', image: 'https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a38d4330845723cacde97cb49d4f4f156870cb27d414cac620f18a12c05d6015.jpg', price: 'From $61', rating: '4.6' },
    ],
    'phuket': [
        { title: 'Phi Phi Islands Premium Catamaran Tour (Maya Bay & Snorkeling)', slug: 'phi-phi-islands-speedboat-tour-maya-bay-snorkeling', description: 'Maya Bay, Pileh Lagoon & Bamboo Island snorkelling — 8 hours', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1784980215/tours/phuket-phi-phi-bamboo-buffet-455/img_0.jpg', price: 'From $119', rating: '4.9' },
        { title: 'James Bond Island Speedboat Tour with Canoeing & Lunch', slug: 'james-bond-island-speedboat-tour-phuket', description: 'Phang Nga Bay sea caves, hong lagoons & Koh Panyee stilt village', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1772835259/tours/phuket/james-bond-island-speedboat-tour-phuket-0.jpg', price: 'From $99', rating: '4.8' },
        { title: 'Phuket Full Day City Tour — Big Buddha, Wat Chalong & Old Town', slug: 'phuket-old-town-full-day-tour', description: 'Every island landmark in one guided day with transport included', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1774346594/tours/phuket-city-tour/otr7lkk1puhugfwroyli.jpg', price: 'From $37', rating: '4.8' },
        { title: 'Phi Phi & Khai Islands Speedboat Tour with Lunch', slug: 'phi-phi-khai-islands-speedboat-tour-with-lunch', description: 'The value route to Maya Bay & Phi Phi with Khai Island snorkelling', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1772655052/tours/phuket/tours/phuket_1772655052140_0.jpg', price: 'From $95', rating: '4.7' },
        { title: 'Phuket Scuba Diving for Beginners — Racha Yai Island', slug: 'phuket-scuba-diving-beginners-full-day-racha-yai-island', description: 'Discover Scuba at the region\'s best beginner site — no experience needed', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1773246903/tours/phuket/tours/phuket_1773246902563_0.jpg', price: 'From $150', rating: '4.9' },
        { title: 'Hidden Forest Elephant Reserve — Morning Visit with Meal', slug: 'hidden-forest-elephant-reserve-guided-tour', description: 'A no-riding reserve: feed, walk with & observe rescued elephants', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1784980228/tours/phuket-hidden-forest-elephant-reserve/img_0.jpg', price: 'From $99' },
        { title: 'Fun Cooking Class at Pum\'s Thai Restaurant & Cooking School', slug: 'phuket-pums-thai-cooking-class', description: 'Pound your own curry paste and cook a full Thai meal — 3 hours', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1774731363/tours/phuket/tours/phuket_1774731362237_0.jpg', price: 'From $62', rating: '4.8' },
        { title: 'Phuket: Southern Thai Flavors Food Tastings Tour', slug: 'kio-thian-keng-saphan-hin-shrine-food-tour', description: 'The Old Town dishes locals actually eat, with a local food guide', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1783413370/tours/phuket/tours/phuket_1783413369774_0.jpg', price: 'From $69' },
        { title: 'Phuket Jet Ski Tour — Island Hopping from Patong', slug: 'phuket-jet-ski-tour-island-hopping-patong-beach', description: 'Guided jet ski island-hopping straight off Patong beach — 3 hours', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1774168925/tours/phuket/jet-ski/tours/phuket/jet-ski/jet_ski_2.jpg', price: 'From $69', rating: '4.8' },
        { title: 'Phuket: Guided Sunset Tour with Seafood Market Dinner', slug: 'sea-gypsies-fish-market-sunset-tour', description: 'Sea gypsy villages, the working fish market & a sunset seafood dinner', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1783407750/tours/phuket/tours/phuket_1783407750063_0.jpg', price: 'From $68' },
    ],
    'chiang-mai': [
        { title: 'Doi Suthep & Wat Pha Lat by Local Red Truck', slug: 'huai-kaeo-waterfall-guided-tour', description: 'The mountain temple plus the forest monastery most visitors miss — 4 hours', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1784800909/tours/chiang-mai/tours/chiang-mai_1784800908655_0.jpg', price: 'From $19' },
        { title: '3-Hour Old City & Temples Guided Walking Tour', slug: 'wat-chedi-luang-walking-tour', description: 'Wat Chedi Luang, Wat Phra Singh and 700 years of Lanna history on foot', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1784887368/tours/chiang-mai-3-hour-old-city-and-temples-guided-walking-tour/img_1.jpg', price: 'From $15' },
        { title: 'Elephant Sanctuary Feeding Program — Half Day', slug: 'pon-elephant-sanctuary-half-day-tour', description: 'No riding, no shows — feed and observe a rescued herd', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1784887315/tours/chiang-mai-elephant-sanctuary-feeding-program-half-day-tour/img_1.jpg', price: 'From $30' },
        { title: 'Cooking Class, Market & Thai Herbs Garden Tour', slug: 'local-market-chiang-mai-food-tour', description: 'Wet-market tour then cook a northern Thai meal from scratch', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1784887326/tours/chiang-mai-cooking-class-market-thai-herbs-garden-tour/img_1.jpg', price: 'From $35' },
        { title: 'Doi Inthanon National Park Full-Day Eco Tour', slug: 'doi-inthanon-national-park-full-day-tour', description: "Thailand's highest peak, twin royal pagodas, cloud forest & waterfalls", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1785081714/asiabylocals/tours/chiang-mai-doi-inthanon-eco-tour/hq_tour_img_1.jpg', price: 'From $45' },
        { title: 'Chiang Rai White, Blue & Red Temple & Karen Tribe', slug: 'wat-rong-khun-white-temple-spiritual-tour', description: "Chiang Rai's three surreal contemporary temples — full day trip", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1784887304/tours/chiang-maichiang-rai-white-blue-red-temple-karen-tribe/img_1.jpg', price: 'From $40' },
        { title: 'Khan Toke Traditional Dinner & Lanna Dance Show', slug: 'traditional-khan-toke-restaurant-chiang-mai-experience', description: 'The northern banquet on a low pedestal tray with classical Lanna dance', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1785081737/asiabylocals/tours/chiang-mai-khan-toke-dinner-dance-show/hq_tour_img_1.jpg', price: 'From $24' },
        { title: 'Chiang Mai After Dark: Golden-lit Temples & Lanna Food Trail', slug: 'wat-lok-moli-food-tour', description: "Northern dishes you can't order without Thai, between lit-up temples", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1783328915/tours/chiang-mai/tours/chiang-mai_1783328914608_0.jpg', price: 'From $45' },
        { title: 'Gibbon Trek & Mae Kampong Village Small-Group Tour', slug: 'mae-kampong-village-group-tour', description: 'Hill village life and jungle canopy above the Chiang Mai valley', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1785942039/asiabylocals/tours/chiang-mai-gibbon-trek-mae-kampong-tour/hq_tour_img_1.jpg', price: 'From $75' },
        { title: 'Chiang Mai Boxing Stadium Ticket', slug: 'chiangmai-boxing-stadium-entry-ticket', description: 'A real Muay Thai card at a local Chiang Mai stadium', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1784887336/tours/chiangmai-chiangmai-boxing-stadiums-ticket/img_1.jpg', price: 'From $21' },
    ],
    'pattaya': [
        { title: 'Sanctuary of Truth Wooden Temple Entrance Ticket', slug: 'sanctuary-of-truth-naklua-pattaya-spiritual-tour', description: "Thailand's 105m all-teak temple, built without a single nail", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786098704/asiabylocals/tours/pattaya-the-sanctuary-of-truth-admission-ticket/hq_tour_img_1.png', price: 'From $17', rating: '4.8' },
        { title: 'Coral Island Day Trip by Speedboat with Lunch', slug: 'koh-larn-coral-island-full-day-tour', description: "Koh Larn's turquoise water 7 km offshore — speedboat, beach time & lunch", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786098597/asiabylocals/tours/pattaya-coral-island-speedboat-tour-with-lunch-and-transfer/hq_tour_img_1.png', price: 'From $11', rating: '4.7' },
        { title: 'Nong Nooch Garden Entry Pass with Cultural Shows', slug: 'nong-nooch-tropical-garden-pattaya-cultural-tour', description: '600 acres of botanical gardens and a world-class cycad collection', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786098681/asiabylocals/tours/pattaya-nong-nooch-tropical-garden-ticket-for-foreigners/hq_tour_img_1.jpg', price: 'From $14', rating: '4.7' },
        { title: 'Ethical Elephant Sanctuary Day Trip from Pattaya', slug: 'living-green-elephant-sanctuary-chonburi-full-day-tour', description: 'A no-riding sanctuary in the Chonburi countryside', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786098559/asiabylocals/tours/from-pattaya-living-green-elephant-sanctuary-day-trip/hq_tour_img_1.jpg', price: 'From $65', rating: '4.9' },
        { title: "Tiffany's Show Pattaya: Cabaret with Dinner & VIP Seat", slug: 'tiffanys-show-theatre-north-pattaya-entry-ticket', description: 'The cabaret institution that has run since 1974', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786098839/asiabylocals/tours/pattaya-tiffany-cabaret-show-with-dinner-vip-seating-more/hq_tour_img_1.jpg', price: 'From $60', rating: '4.8' },
        { title: 'Pattaya Sunset Trio: Big Buddha Hill, Viewpoint & Night Market', slug: 'pattaya-marina-night-market-sunset-tour', description: "Wat Phra Yai, the bay viewpoint and the marina night market at dusk", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786098868/asiabylocals/tours/pattaya-big-buddha-temple-and-night-market-tour/hq_tour_img_1.jpg', price: 'From $84', rating: '4.8' },
        { title: 'Pattaya 3-Island Catamaran Cruise with Thai Buffet', slug: 'monkey-island-chonburi-boat-tour', description: "The quieter outer islands by catamaran, away from Koh Larn's crowds", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786098547/asiabylocals/tours/pattaya-exclusive-3-island-catamaran-tour-with-buffet-lunch/hq_tour_img_1.jpg', price: 'From $87', rating: '4.8' },
        { title: 'Alcazar Cabaret Evening Show Ticket', slug: 'alcazar-theatre-pattaya-second-road-evening-tour', description: "Tiffany's long-standing rival — 75 minutes of big-production cabaret", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786098780/asiabylocals/tours/pattaya-alcazar-cabaret-show-admission-ticket/hq_tour_img_1.jpg', price: 'From $33', rating: '4.7' },
        { title: 'Boat Diving Day Trip to Pattaya & Samaesarn Reefs', slug: 'pattaya-dive-sites-full-day-tour', description: 'The most accessible diving in Thailand, including wreck sites', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786098668/asiabylocals/tours/pattaya-fun-dives-in-pattaya-and-samaesarn-with-transfer/hq_tour_img_1.png', price: 'From $105', rating: '4.8' },
        { title: 'Private Pattaya Sightseeing Tour', slug: 'pattaya-city-private-tour', description: 'The city highlights at your own pace with a private local guide', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786098619/asiabylocals/tours/pattaya-laem-chabang-port-private-city-highlights-tour/hq_tour_img_1.png', price: 'From $72', rating: '4.8' },
    ],
    'tokyo': [
        { title: 'Shibuya Crossing Go-Kart Ride with Photos', slug: 'shibuya-crossing-crossing-photography-tour', description: "Street-legal kart through the world's busiest scramble — costume included", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786740222/asiabylocals/tours/tokyo-go-kart-shibuya-crossing-photo-stop/hq_tour_img_1.png', price: 'From $79', rating: '4.8' },
        { title: 'Asakusa, Skytree & Akihabara Go-Kart Run', slug: 'tokyo-skytree-spiritual-tour', description: "Old Tokyo, the river under Skytree, then Electric Town — 70 minutes", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786740200/asiabylocals/tours/tokyo-go-kart-asakusa-skytree-akihabara/hq_tour_img_1.png', price: 'From $81', rating: '4.7' },
        { title: 'Central Tokyo by E-Bike', slug: 'imperial-palace-bike-tour', description: "Imperial Palace moat, Nihonbashi, Ginza and Tsukiji in three hours", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786740232/asiabylocals/tours/tokyo-ebike-city-highlights-3-hours/hq_tour_img_1.jpg', price: 'From $63', rating: '4.7' },
        { title: 'Private Walking Day with a Local Guide', slug: 'shibuya-crossing-walking-tour', description: "Six hours, no fixed route — built around what you actually want", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786740171/asiabylocals/tours/tokyo-private-walking-tour-local-guide/hq_tour_img_1.jpg', price: 'From $85', rating: '5.0' },
        { title: 'Shibuya After Dark Neon Photo Walk', slug: 'shibuya-crossing-photography-tour', description: "A local photographer shoots you through the backstreets and Nonbei Yokocho", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786740190/asiabylocals/tours/tokyo-shibuya-neon-night-photo-walk/hq_tour_img_1.jpg', price: 'From $116', rating: '5.0' },
        { title: 'Tokyo Backstreets E-Bike: Yanaka', slug: 'yanaka-backstreets-bike-tour', description: "Shitamachi lanes that survived 1923 and the firebombing", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786740245/asiabylocals/tours/tokyo-ebike-hidden-neighbourhoods-3-hours/hq_tour_img_1.jpg', price: 'From $63', rating: '4.6' },
        { title: 'Snow Monkeys & Zenko-ji Day Trip', slug: 'jigokudani-monkey-park-full-day-tour', description: "Nagano's hot-spring macaques and a 1,400-year-old temple, private car", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787169014/asiabylocals/tours/nagano-zenkoji-snow-monkeys-day-trip/hq_tour_img_1.jpg', price: 'From $144', rating: '4.9' },
        { title: 'Tokyo Night Drive: Wangan & Daikoku PA', slug: 'daikoku-parking-area-evening-tour', description: "Japan's most famous informal car meet, from the passenger seat", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787168997/asiabylocals/tours/tokyo-drift-jdm-night-drive/hq_tour_img_1.jpg', price: 'From $123', rating: '4.8' },
        { title: 'Togoshi Ginza Hidden Food Walk', slug: 'togoshi-ginza-shotengai-food-tour', description: "Tokyo's longest shopping street — 1.3 km, no other tour groups", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787169079/asiabylocals/tours/togoshi-ginza-hidden-food-tour/hq_tour_img_1.jpg', price: 'From $113', rating: '5.0' },
        { title: 'Tokyo Ghost Walk: Yokai & Folklore', slug: 'tokyo-backstreets-walking-tour', description: "Real execution grounds and the stories that outlived them", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787169054/asiabylocals/tours/tokyo-ghost-tour-japanese-folklore/hq_tour_img_1.jpg', price: 'From $80', rating: '4.3' },
    ],
    'krabi': [
        { title: 'Krabi Classic 4-Island Tour with Snorkelling', slug: 'phra-nang-cave-beach-boat-tour', description: 'Phra Nang, Chicken, Tup & Poda by speedboat with hotel pickup', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786364587/asiabylocals/tours/krabi-620-krabi-classic-4-island-tour-with-snorkeling-hotel-pickup/hq_tour_img_1.jpg', price: 'From $36' },
        { title: "4 Islands & Krabi's Separated Sea by Longtail", slug: 'chicken-island-guided-tour', description: 'The Talay Waek sandbar at low tide, traditional longtail boat', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786364677/asiabylocals/tours/krabi-627-krabi-4-islands-krabi-s-separated-sea-longtail-boat-tour/hq_tour_img_1.jpg', price: 'From $21' },
        { title: 'Hong Islands Speedboat Tour with Lunch', slug: 'hong-island-boat-tour', description: 'The enclosed emerald lagoon — quieter than the 4-island circuit', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786364536/asiabylocals/tours/krabi-615-krabi-hong-islands-speedboat-tour-with-lunch-snorkeling/hq_tour_img_1.jpg', price: 'From $33' },
        { title: 'Tiger Cave Temple, Emerald Pool & Hot Springs', slug: 'tiger-cave-temple-spiritual-tour', description: "The 1,260-step climb plus Krabi's jungle pools — weather-proof", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786364390/asiabylocals/tours/krabi-602-krabi-tiger-cave-temple-emerald-pool-and-hot-springs-tour/hq_tour_img_1.jpg', price: 'From $43' },
        { title: 'Phi Phi Early Bird & 4 Islands by Speedboat', slug: 'maya-bay-adventure-boat-tour', description: 'Reach Maya Bay ahead of the Phuket fleet, then the Krabi islands', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786364413/asiabylocals/tours/krabi-604-from-krabi-phi-phi-early-bird-4-islands-by-speedboat/hq_tour_img_1.jpg', price: 'From $88' },
        { title: 'Ao Thalane Mangrove Kayaking Tour', slug: 'ao-thalane-guided-tour', description: 'Paddle tidal channels between karsts — runs when the sea does not', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786364493/asiabylocals/tours/krabi-611-krabi-ao-thalane-mangrove-kayaking-tour-with-pickup/hq_tour_img_1.jpg', price: 'From $27' },
        { title: 'Emerald Pool & Hot Spring Waterfall with ATV', slug: 'hot-spring-waterfall-guided-tour', description: "Krabi's inland jungle: mineral-blue pool and thermal stone tubs", image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786364651/asiabylocals/tours/krabi-625-krabi-emerald-pool-and-hot-spring-waterfall-with-atv-riding/hq_tour_img_1.jpg', price: 'From $74' },
        { title: 'Klong Root Crystal Lake Kayaking Tour', slug: 'crystal-lake-mini-tour', description: 'Spring water so clear the kayaks look like they float on air', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786364450/asiabylocals/tours/krabi-607-krabi-klong-root-crystal-lake-kayaking-tour/hq_tour_img_1.jpg', price: 'From $29' },
        { title: 'Traditional Thai Cooking Class with a Local Chef', slug: 'ao-nang-cooking-food-tour', description: 'Market tour then southern Thai dishes cooked from scratch', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786364546/asiabylocals/tours/krabi-616-krabi-traditional-thai-cooking-class-with-local-chef/hq_tour_img_1.jpg', price: 'From $48' },
        { title: 'Phi Phi Beat-the-Crowds with Poda Sunrise Breakfast', slug: 'poda-island-sunrise-tour', description: 'Pre-dawn departure, breakfast on Poda, Maya Bay before the fleet', image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1786364638/asiabylocals/tours/krabi-624-phi-phi-island-beat-the-crowds-poda-breakfast-at-sunrise/hq_tour_img_1.png', price: 'From $96' },
    ],
};

const BANGKOK_SIDEBAR = [
    { name: 'Things to Do', slug: 'things-to-do-in-bangkok' },
    { name: 'Travel Guide 2026', slug: 'bangkok-travel-guide-2026' },
    { name: 'Grand Palace', slug: 'grand-palace-bangkok' },
    { name: 'Wat Pho', slug: 'wat-pho' },
    { name: 'Wat Arun', slug: 'wat-arun' },
    { name: '1-Day Itinerary', slug: '1-day-bangkok-itinerary' },
    { name: '3-Day Itinerary', slug: '3-day-bangkok-itinerary' },
    { name: 'Floating Market', slug: 'floating-market-bangkok' },
    { name: 'Canal Tour', slug: 'bangkok-canal-tour' },
    { name: 'Chatuchak Market', slug: 'chatuchak-weekend-market' },
    { name: 'Places to Visit', slug: 'places-to-visit-in-bangkok' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-bangkok' },
    { name: 'Ayutthaya Day Trip', slug: 'bangkok-ayutthaya-day-trip' },
    { name: 'Chinatown (Yaowarat)', slug: 'chinatown-yaowarat-bangkok' },
    { name: 'Where to Stay', slug: 'where-to-stay-in-bangkok' },
    { name: 'Street Food Guide', slug: 'bangkok-street-food-guide' },
    { name: 'Khao San Road', slug: 'khao-san-road-bangkok' },
    { name: 'Kanchanaburi Day Trip', slug: 'bangkok-kanchanaburi-day-trip' },
    { name: 'Best Tours in Bangkok', slug: 'best-tours-in-bangkok' },
];

const BEIJING_SIDEBAR = [
    { name: 'Best Tours in Beijing', slug: 'best-tours-in-beijing' },
    { name: 'Beijing Travel Guide', slug: 'beijing-travel-guide-2026' },
    { name: 'Things to Do', slug: 'things-to-do-in-beijing' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-beijing' },
    { name: 'China Visa Guide', slug: 'china-visa-guide-for-tourists' },
    { name: 'Great Wall: Which Section', slug: 'great-wall-of-china-which-section' },
    { name: 'Mutianyu vs Badaling', slug: 'mutianyu-vs-badaling' },
    { name: 'Forbidden City Tickets', slug: 'forbidden-city-tickets-guide' },
    { name: '1-Day Itinerary', slug: 'beijing-1-day-itinerary' },
    { name: '3-Day Itinerary', slug: 'beijing-3-day-itinerary' },
    { name: 'Subway Guide', slug: 'beijing-subway-guide' },
    { name: 'Temple of Heaven', slug: 'temple-of-heaven' },
    { name: 'Summer Palace', slug: 'summer-palace-beijing' },
    { name: 'Hutong Tours', slug: 'hutong-tours-beijing' },
    { name: 'Food Guide', slug: 'beijing-food-guide' },
    { name: 'Air Quality & When to Visit', slug: 'beijing-air-quality-when-to-visit' },
];

const SHANGHAI_SIDEBAR = [
    { name: 'Shanghai Travel Guide', slug: 'shanghai-travel-guide-2026' },
    { name: 'Things to Do', slug: 'things-to-do-in-shanghai' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-shanghai' },
    { name: '1-Day Itinerary', slug: 'shanghai-1-day-itinerary' },
    { name: '3-Day Itinerary', slug: 'shanghai-3-day-itinerary' },
    { name: 'The Bund', slug: 'the-bund-shanghai' },
    { name: 'Shanghai Tower Tickets', slug: 'shanghai-tower-tickets' },
    { name: 'Yu Garden', slug: 'yu-garden-shanghai' },
    { name: 'Zhujiajiao Water Town', slug: 'zhujiajiao-water-town' },
    { name: 'French Concession Guide', slug: 'shanghai-french-concession-guide' },
    { name: 'Food Guide', slug: 'shanghai-food-guide' },
    { name: 'Disneyland Guide', slug: 'shanghai-disneyland-guide' },
    { name: 'Suzhou Day Trip', slug: 'suzhou-day-trip-from-shanghai' },
    { name: 'Metro Guide', slug: 'shanghai-metro-guide' },
    { name: 'Shanghai vs Beijing', slug: 'shanghai-vs-beijing-which-to-visit' },
];

const HONG_KONG_SIDEBAR = [
    { name: 'Best Tours in Hong Kong', slug: 'best-tours-in-hong-kong' },
    { name: 'Hong Kong Travel Guide', slug: 'hong-kong-travel-guide-2026' },
    { name: 'Things to Do', slug: 'things-to-do-in-hong-kong' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-hong-kong' },
    { name: 'Visa Guide', slug: 'hong-kong-visa-guide' },
    { name: '1-Day Itinerary', slug: 'hong-kong-1-day-itinerary' },
    { name: '3-Day Itinerary', slug: 'hong-kong-3-day-itinerary' },
    { name: 'Octopus Card Guide', slug: 'octopus-card-guide' },
    { name: 'Peak Tram Tickets', slug: 'peak-tram-tickets-guide' },
    { name: 'Star Ferry Guide', slug: 'star-ferry-guide' },
    { name: 'Big Buddha & Ngong Ping 360', slug: 'big-buddha-ngong-ping-360' },
    { name: 'Dim Sum Guide', slug: 'hong-kong-dim-sum-guide' },
    { name: 'Mong Kok Night Markets', slug: 'mong-kok-night-markets' },
    { name: 'Disneyland Guide', slug: 'hong-kong-disneyland-guide' },
    { name: 'Typhoon Season', slug: 'hong-kong-typhoon-season' },
    { name: 'Macau Day Trip', slug: 'macau-day-trip-from-hong-kong' },
    { name: 'Lantau Island Guide', slug: 'lantau-island-guide' },
    { name: '7-Day Itinerary', slug: 'hong-kong-7-day-itinerary' },
];

const TAIPEI_SIDEBAR = [
    { name: 'Best Tours in Taipei', slug: 'best-tours-in-taipei' },
    { name: 'Taipei Travel Guide', slug: 'taipei-travel-guide-2026' },
    { name: 'Things to Do', slug: 'things-to-do-in-taipei' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-taipei' },
    { name: 'Visa Guide', slug: 'taiwan-visa-guide-for-tourists' },
    { name: '1-Day Itinerary', slug: 'taipei-1-day-itinerary' },
    { name: '3-Day Itinerary', slug: 'taipei-3-day-itinerary' },
    { name: 'Taipei 101 Tickets', slug: 'taipei-101-tickets-guide' },
    { name: 'MRT & EasyCard Guide', slug: 'taipei-mrt-easycard-guide' },
    { name: 'Shilin Night Market', slug: 'shilin-night-market-guide' },
    { name: 'Jiufen Day Trip', slug: 'jiufen-day-trip-guide' },
    { name: 'Hot Springs Guide', slug: 'taipei-hot-springs-guide' },
    { name: 'Food Guide', slug: 'taipei-food-guide' },
    { name: 'Temples Guide', slug: 'taipei-temples-guide' },
    { name: 'Yangmingshan National Park', slug: 'yangmingshan-national-park-guide' },
    { name: 'Taroko Gorge Day Trip', slug: 'taroko-gorge-day-trip' },
    { name: 'Elephant Mountain Hike', slug: 'elephant-mountain-hike-guide' },
    { name: 'Sun Moon Lake Day Trip', slug: 'sun-moon-lake-day-trip' },
];

const SEOUL_SIDEBAR = [
    { name: 'Best Tours in Seoul', slug: 'best-tours-in-seoul' },
    { name: 'Seoul Travel Guide', slug: 'seoul-travel-guide-2026' },
    { name: 'Things to Do', slug: 'things-to-do-in-seoul' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-seoul' },
    { name: 'Visa Guide', slug: 'south-korea-visa-guide-for-tourists' },
    { name: '1-Day Itinerary', slug: 'seoul-1-day-itinerary' },
    { name: '3-Day Itinerary', slug: 'seoul-3-day-itinerary' },
    { name: 'DMZ Tour Guide', slug: 'dmz-tour-guide' },
    { name: 'Gyeongbokgung & Hanbok', slug: 'gyeongbokgung-palace-hanbok-guide' },
    { name: 'Subway & T-Money Guide', slug: 'seoul-subway-tmoney-guide' },
    { name: 'Myeongdong Shopping', slug: 'myeongdong-shopping-guide' },
    { name: 'Korean BBQ Guide', slug: 'seoul-korean-bbq-guide' },
    { name: 'Hongdae Nightlife', slug: 'hongdae-nightlife-guide' },
    { name: 'Seoul to Busan', slug: 'seoul-to-busan-travel' },
    { name: 'N Seoul Tower', slug: 'namsan-tower-guide' },
    { name: 'K-Pop Tour Guide', slug: 'seoul-k-pop-tour-guide' },
    { name: 'Bukchon Hanok Village', slug: 'bukchon-hanok-village-guide' },
    { name: 'Insadong Guide', slug: 'insadong-guide' },
    { name: 'Gwangjang Market', slug: 'gwangjang-market-guide' },
    { name: "Seoul's Palaces", slug: 'seoul-palaces-guide' },
    { name: 'Night Market Food Guide', slug: 'seoul-night-market-food-guide' },
];

const ISTANBUL_SIDEBAR = [
    { name: 'Best Tours in Istanbul', slug: 'best-tours-in-istanbul' },
    { name: 'Istanbul Travel Guide', slug: 'istanbul-travel-guide-2026' },
    { name: 'Things to Do', slug: 'things-to-do-in-istanbul' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-istanbul' },
    { name: 'Turkey Visa Guide', slug: 'turkey-visa-guide-for-tourists' },
    { name: '1-Day Itinerary', slug: 'istanbul-1-day-itinerary' },
    { name: '3-Day Itinerary', slug: 'istanbul-3-day-itinerary' },
    { name: '7-Day Itinerary', slug: 'istanbul-7-day-itinerary' },
    { name: 'Weekend Guide', slug: 'istanbul-weekend-guide' },
    { name: 'Hagia Sophia Guide', slug: 'hagia-sophia-guide' },
    { name: 'Blue Mosque Guide', slug: 'blue-mosque-guide' },
    { name: 'Topkapi Palace Tickets', slug: 'topkapi-palace-tickets-guide' },
    { name: 'Grand & Spice Bazaar', slug: 'grand-bazaar-spice-bazaar-guide' },
    { name: 'Bosphorus Cruise Guide', slug: 'bosphorus-cruise-guide' },
    { name: 'Hamam / Turkish Bath', slug: 'istanbul-hamam-turkish-bath-guide' },
    { name: 'Cappadocia from Istanbul', slug: 'cappadocia-from-istanbul-guide' },
    { name: 'Istanbulkart Transit Guide', slug: 'istanbulkart-transit-guide' },
    { name: "Princes' Islands Day Trip", slug: 'princes-islands-day-trip' },
    { name: 'Food Guide', slug: 'istanbul-food-guide' },
    { name: 'Nightlife Guide', slug: 'istanbul-nightlife-guide' },
    { name: 'Shopping Guide', slug: 'istanbul-shopping-guide' },
    { name: 'Mosques Guide', slug: 'istanbul-mosques-guide' },
    { name: 'Museums Guide', slug: 'istanbul-museums-guide' },
    { name: 'Istanbul with Kids', slug: 'istanbul-with-kids-guide' },
    { name: 'Budget Travel Guide', slug: 'istanbul-budget-travel-guide' },
    { name: 'Luxury Travel Guide', slug: 'istanbul-luxury-travel-guide' },
    { name: 'Rainy Day Activities', slug: 'istanbul-rainy-day-activities' },
    { name: 'Dolmabahce Palace Guide', slug: 'dolmabahce-palace-guide' },
    { name: 'Galata Tower Guide', slug: 'galata-tower-guide' },
    { name: 'Whirling Dervishes Guide', slug: 'istanbul-whirling-dervishes-guide' },
    { name: 'Turkish Coffee Culture', slug: 'istanbul-turkish-coffee-culture-guide' },
];

const DOHA_SIDEBAR = [
    { name: 'Best Tours in Doha', slug: 'best-tours-in-doha' },
    { name: 'Doha Travel Guide', slug: 'doha-travel-guide-2026' },
    { name: 'Things to Do', slug: 'things-to-do-in-doha' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-doha' },
    { name: 'Qatar Visa Guide', slug: 'qatar-visa-guide-for-tourists' },
    { name: '1-Day Itinerary', slug: 'doha-1-day-itinerary' },
    { name: '3-Day Itinerary', slug: 'doha-3-day-itinerary' },
    { name: '7-Day Itinerary', slug: 'doha-7-day-itinerary' },
    { name: 'Weekend Guide', slug: 'doha-weekend-guide' },
    { name: 'Museum of Islamic Art', slug: 'museum-of-islamic-art-doha' },
    { name: 'Souq Waqif Guide', slug: 'souq-waqif-guide' },
    { name: 'Desert Safari Guide', slug: 'doha-desert-safari-guide' },
    { name: 'Inland Sea (Khor Al Adaid)', slug: 'inland-sea-khor-al-adaid-guide' },
    { name: 'The Pearl-Qatar Guide', slug: 'the-pearl-qatar-guide' },
    { name: 'Doha Corniche Guide', slug: 'doha-corniche-guide' },
    { name: 'Katara Cultural Village', slug: 'katara-cultural-village-guide' },
    { name: 'Skyline & West Bay Guide', slug: 'doha-skyline-west-bay-guide' },
    { name: 'Food Guide', slug: 'doha-food-guide' },
    { name: 'Shopping & Malls Guide', slug: 'doha-shopping-malls-guide' },
    { name: 'World Cup 2022 Legacy', slug: 'qatar-world-cup-2022-legacy-doha' },
    { name: 'Doha with Kids', slug: 'doha-with-kids-guide' },
    { name: 'Budget Travel Guide', slug: 'doha-budget-travel-guide' },
    { name: 'Luxury Travel Guide', slug: 'doha-luxury-travel-guide' },
    { name: 'Beaches Guide', slug: 'doha-beaches-guide' },
    { name: 'Dhow Cruise Guide', slug: 'doha-dhow-cruise-guide' },
    { name: 'Al Zubarah Fort Day Trip', slug: 'al-zubarah-fort-day-trip' },
    { name: 'Nightlife Guide', slug: 'doha-nightlife-guide' },
    { name: 'Zekreet & Film City', slug: 'zekreet-film-city-guide' },
    { name: 'Islamic Architecture Guide', slug: 'doha-islamic-architecture-guide' },
    { name: 'Falcon Souq Guide', slug: 'doha-falcon-souq-guide' },
    { name: 'Ramadan Travel Guide', slug: 'doha-ramadan-travel-guide' },
    { name: 'Airport Stopover Guide', slug: 'doha-airport-stopover-guide' },
];

const MALE_SIDEBAR = [
    { name: 'Best Tours in Malé', slug: 'best-tours-in-male' },
    { name: 'Maldives Travel Guide', slug: 'maldives-travel-guide-2026' },
    { name: 'Things to Do in Malé', slug: 'things-to-do-in-male' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-maldives' },
    { name: 'Maldives Visa Guide', slug: 'maldives-visa-guide-for-tourists' },
    { name: '1-Day Itinerary', slug: 'male-1-day-itinerary' },
    { name: 'Malé City Guide', slug: 'male-city-guide' },
    { name: 'Snorkeling & Diving Guide', slug: 'maldives-snorkeling-diving-guide' },
    { name: 'Resort vs Local Island', slug: 'maldives-resort-vs-local-island-guide' },
    { name: 'Malé Local Island Guide', slug: 'male-local-island-guide' },
    { name: 'Budget Travel Guide', slug: 'maldives-budget-travel-guide' },
    { name: 'Luxury Resort Guide', slug: 'maldives-luxury-resort-guide' },
    { name: 'Whale Shark & Manta Ray Guide', slug: 'maldives-whale-shark-manta-ray-guide' },
    { name: 'Sandbank Tour Guide', slug: 'maldives-sandbank-tour-guide' },
    { name: 'Dolphin Watching Guide', slug: 'maldives-dolphin-watching-guide' },
    { name: 'Airport Transfer Guide', slug: 'maldives-airport-transfer-guide' },
];

const BUSAN_SIDEBAR = [
    { name: 'Best Tours in Busan', slug: 'best-tours-in-busan' },
    { name: 'Busan Travel Guide', slug: 'busan-travel-guide-2026' },
    { name: 'Things to Do', slug: 'things-to-do-in-busan' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-busan' },
    { name: '1-Day Itinerary', slug: 'busan-1-day-itinerary' },
    { name: 'Haeundae Beach Guide', slug: 'haeundae-beach-guide' },
    { name: 'Gamcheon Culture Village', slug: 'gamcheon-culture-village-guide' },
    { name: 'Jagalchi Fish Market', slug: 'jagalchi-fish-market-guide' },
    { name: 'Food Guide', slug: 'busan-food-guide' },
    { name: 'Seoul to Busan KTX', slug: 'seoul-to-busan-ktx-guide' },
    { name: 'Nightlife Guide', slug: 'busan-nightlife-guide' },
];

const MANILA_SIDEBAR = [
    { name: 'Manila Travel Guide', slug: 'manila-travel-guide-2026' },
    { name: 'Things to Do', slug: 'things-to-do-in-manila' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-manila' },
    { name: 'Philippines Visa Guide', slug: 'philippines-visa-guide-for-tourists' },
    { name: '1-Day Itinerary', slug: 'manila-1-day-itinerary' },
    { name: '3-Day Itinerary', slug: 'manila-3-day-itinerary' },
    { name: 'Intramuros & Fort Santiago', slug: 'intramuros-fort-santiago-guide' },
    { name: 'Jeepney Guide', slug: 'manila-jeepney-guide' },
    { name: 'Food Guide', slug: 'manila-food-guide' },
    { name: 'Manila to Boracay', slug: 'manila-to-boracay-travel' },
    { name: 'Traffic Reality Guide', slug: 'manila-traffic-reality-guide' },
    { name: 'Boracay Day Trip', slug: 'boracay-day-trip-guide' },
    { name: 'Taal Volcano Day Trip', slug: 'taal-volcano-day-trip' },
];

const CEBU_SIDEBAR = [
    { name: 'Cebu Travel Guide', slug: 'cebu-travel-guide-2026' },
    { name: 'Things to Do', slug: 'things-to-do-in-cebu' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-cebu' },
    { name: '1-Day Itinerary', slug: 'cebu-1-day-itinerary' },
    { name: '3-Day Itinerary', slug: 'cebu-3-day-itinerary' },
    { name: 'Island Hopping Guide', slug: 'cebu-island-hopping-guide' },
    { name: 'Oslob Whale Sharks', slug: 'oslob-whale-sharks-guide' },
    { name: 'Oslob vs Donsol', slug: 'oslob-vs-donsol-whale-sharks' },
    { name: 'Moalboal Sardine Run', slug: 'moalboal-sardine-run-guide' },
    { name: 'Kawasan Falls Canyoneering', slug: 'kawasan-falls-canyoneering' },
    { name: 'Waterfalls Guide', slug: 'cebu-waterfalls-guide' },
    { name: 'Diving Guide', slug: 'cebu-diving-guide' },
    { name: 'Beaches Guide', slug: 'cebu-beaches-guide' },
    { name: 'Food Guide', slug: 'cebu-food-guide' },
    { name: 'Magellan\'s Cross & Basilica', slug: 'magellan-cross-basilica-guide' },
    { name: 'Cebu to Bohol', slug: 'cebu-to-bohol-travel' },
    { name: 'Siquijor Day Trip', slug: 'siquijor-day-trip-guide' },
];

const PHUKET_SIDEBAR = [
    { name: 'Phuket Travel Guide', slug: 'phuket-travel-guide-2026' },
    { name: 'Things to Do', slug: 'things-to-do-in-phuket' },
    { name: 'Phi Phi Islands', slug: 'phi-phi-islands' },
    { name: 'Phang Nga Bay', slug: 'phang-nga-bay' },
    { name: 'Big Buddha', slug: 'big-buddha-phuket' },
    { name: 'Wat Chalong', slug: 'wat-chalong' },
    { name: 'Old Town', slug: 'phuket-old-town' },
    { name: '1-Day Itinerary', slug: 'phuket-1-day-itinerary' },
    { name: 'James Bond Island', slug: 'james-bond-island-phuket' },
    { name: 'Island Hopping', slug: 'phuket-island-hopping' },
    { name: 'Muay Thai Training', slug: 'muay-thai-training-phuket' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-phuket' },
    { name: 'Beaches Guide', slug: 'phuket-beaches-guide' },
    { name: '3-Day Itinerary', slug: 'phuket-3-day-itinerary' },
    { name: 'Maya Bay', slug: 'maya-bay-phuket' },
    { name: 'Elephant Sanctuaries', slug: 'phuket-elephant-sanctuary-guide' },
    { name: 'Food Guide', slug: 'phuket-food-guide' },
    { name: 'Diving & Snorkeling', slug: 'phuket-diving-snorkeling-guide' },
    { name: 'Best Tours in Phuket', slug: 'best-tours-in-phuket' },
];

const CHIANG_MAI_SIDEBAR = [
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-chiang-mai' },
    { name: 'Burning Season Guide', slug: 'chiang-mai-burning-season-guide' },
    { name: '3-Day Itinerary', slug: 'chiang-mai-3-day-itinerary' },
    { name: 'Doi Suthep', slug: 'doi-suthep-chiang-mai' },
    { name: 'Yi Peng Lantern Festival', slug: 'yi-peng-lantern-festival-chiang-mai' },
    { name: 'Khao Soi & Food Guide', slug: 'khao-soi-chiang-mai-food-guide' },
    { name: 'Elephant Sanctuaries', slug: 'chiang-mai-elephant-sanctuary-guide' },
    { name: 'Best Tours in Chiang Mai', slug: 'best-tours-in-chiang-mai' },
];

const PATTAYA_SIDEBAR = [
    { name: 'Is Pattaya Worth Visiting?', slug: 'is-pattaya-worth-visiting' },
    { name: 'Where to Stay', slug: 'where-to-stay-in-pattaya' },
    { name: 'Sanctuary of Truth', slug: 'sanctuary-of-truth-pattaya' },
    { name: 'Koh Larn Island', slug: 'koh-larn-island-guide' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-pattaya' },
    { name: 'Nong Nooch Garden', slug: 'nong-nooch-tropical-garden-pattaya' },
    { name: '2-Day Itinerary', slug: 'pattaya-2-day-itinerary' },
    { name: 'Cabaret Shows', slug: 'pattaya-cabaret-shows-guide' },
    { name: 'Best Tours in Pattaya', slug: 'best-tours-in-pattaya' },
];

const PHNOM_PENH_SIDEBAR = [
    { name: 'Best Tours in Phnom Penh', slug: 'best-tours-in-phnom-penh' },
    { name: 'S-21 & Killing Fields', slug: 'tuol-sleng-and-choeung-ek-guide' },
    { name: 'Royal Palace', slug: 'royal-palace-phnom-penh' },
    { name: '2-Day Itinerary', slug: 'phnom-penh-2-day-itinerary' },
    { name: 'Food & Markets', slug: 'phnom-penh-food-and-markets' },
    { name: 'To Siem Reap', slug: 'phnom-penh-to-siem-reap-transport' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-phnom-penh' },
    { name: '1-Day Itinerary', slug: 'phnom-penh-1-day-itinerary' },
    { name: 'Koh Dach Silk Island', slug: 'koh-dach-silk-island' },
    { name: 'Kampot & Kep Day Trip', slug: 'kampot-and-kep-day-trip' },
    { name: 'Street Art & Architecture', slug: 'phnom-penh-street-art' },
    { name: 'Where to Stay', slug: 'where-to-stay-in-phnom-penh' },
    { name: 'To Battambang', slug: 'phnom-penh-to-battambang' },
    { name: 'Oudong', slug: 'oudong-guide' },
    { name: 'With Children', slug: 'phnom-penh-with-kids' },
    { name: 'To the Islands', slug: 'phnom-penh-to-sihanoukville-and-the-islands' },
    { name: 'Airport Guide', slug: 'phnom-penh-airport-guide' },
];

const SIEM_REAP_SIDEBAR = [
    { name: 'Best Tours in Siem Reap', slug: 'best-tours-in-siem-reap' },
    { name: 'Angkor Tickets & Pass', slug: 'angkor-wat-tickets-and-pass-guide' },
    { name: 'Angkor Sunrise', slug: 'angkor-wat-sunrise-guide' },
    { name: 'Small vs Grand Circuit', slug: 'angkor-temples-small-vs-grand-circuit' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-siem-reap' },
    { name: 'Tonle Sap Villages', slug: 'tonle-sap-floating-villages-guide' },
    { name: '3-Day Itinerary', slug: 'siem-reap-3-day-itinerary' },
    { name: 'Airport to Town', slug: 'siem-reap-airport-to-town' },
    { name: 'Food Guide', slug: 'siem-reap-food-guide' },
    { name: 'Angkor in One Day', slug: 'angkor-wat-one-day-itinerary' },
    { name: 'Banteay Srei', slug: 'banteay-srei-guide' },
    { name: 'Ta Prohm', slug: 'ta-prohm-tomb-raider-temple' },
    { name: 'Angkor by Bike', slug: 'angkor-by-bike' },
    { name: 'Where to Stay', slug: 'where-to-stay-in-siem-reap' },
    { name: '2-Day Itinerary', slug: 'siem-reap-2-day-itinerary' },
    { name: 'With Children', slug: 'siem-reap-with-kids' },
    { name: 'Angkor Thom & Bayon', slug: 'bayon-and-angkor-thom-guide' },
    { name: 'Beng Mealea & Koh Ker', slug: 'beng-mealea-and-koh-ker' },
    { name: 'Phnom Kulen', slug: 'phnom-kulen-guide' },
    { name: 'Photography Guide', slug: 'angkor-photography-guide' },
    { name: 'Nightlife & Pub Street', slug: 'siem-reap-nightlife-and-pub-street' },
    { name: 'To Battambang', slug: 'siem-reap-to-battambang' },
    { name: 'Dress Code', slug: 'angkor-wat-dress-code' },
    { name: 'Money & Costs', slug: 'siem-reap-money-and-costs' },
    { name: 'Preah Vihear', slug: 'preah-vihear-temple-guide' },
    { name: 'Angkor in the Rains', slug: 'angkor-temples-in-the-rainy-season' },
    { name: 'Limited Mobility', slug: 'angkor-with-limited-mobility' },
    { name: 'Where to Watch Sunset', slug: 'angkor-sunset-where-to-go' },
];

const KRABI_SIDEBAR = [
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-krabi' },
    { name: 'Railay Beach', slug: 'railay-beach-krabi' },
    { name: '4 Islands Tour', slug: 'krabi-4-islands-tour-guide' },
    { name: 'Tiger Cave Temple', slug: 'tiger-cave-temple-krabi' },
    { name: 'Where to Stay', slug: 'where-to-stay-in-krabi' },
    { name: '3-Day Itinerary', slug: 'krabi-3-day-itinerary' },
    { name: 'Krabi vs Phuket', slug: 'krabi-vs-phuket-which-to-visit' },
    { name: 'Best Tours in Krabi', slug: 'best-tours-in-krabi' },
];

/** "Sri Lanka" -> "sri-lanka". toLowerCase() alone leaves the space in the URL. */
const urlSlug = (s: string) => s.toLowerCase().trim().replace(/\s+/g, '-');


const COLOMBO_SIDEBAR = [
    { name: 'Best Tours in Colombo', slug: 'best-tours-in-colombo' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-colombo' },
    { name: 'Colombo City Guide', slug: 'colombo-city-guide' },
    { name: 'Getting Around', slug: 'getting-around-colombo' },
    { name: 'Colombo Food Guide', slug: 'colombo-food-guide' },
    { name: 'Day Trips', slug: 'day-trips-from-colombo' },
    { name: '2-Day Itinerary', slug: 'colombo-2-day-itinerary' },
    { name: 'Pettah Market Guide', slug: 'pettah-market-guide' },
    { name: 'Galle Face Green', slug: 'galle-face-green-guide' },
];

const SIGIRIYA_SIDEBAR = [
    { name: 'Sigiriya Rock Guide', slug: 'sigiriya-rock-guide' },
    { name: 'Dambulla Cave Temple', slug: 'dambulla-cave-temple-guide' },
    { name: 'Minneriya Elephant Gathering', slug: 'minneriya-elephant-gathering-guide' },
    { name: 'Polonnaruwa Guide', slug: 'polonnaruwa-guide' },
    { name: 'Anuradhapura Guide', slug: 'anuradhapura-guide' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-sigiriya' },
    { name: 'Getting Around', slug: 'getting-around-sigiriya' },
    { name: 'Sigiriya 2-Day Itinerary', slug: 'sigiriya-2-day-itinerary' },
];

const ELLA_SIDEBAR = [
    { name: 'Best Tours in Ella', slug: 'best-tours-in-ella' },
    { name: 'Leaving Ella: Transfers', slug: 'leaving-ella-onward-transfers' },
    { name: 'Nine Arch Bridge', slug: 'nine-arch-bridge-guide' },
    { name: "Little Adam's Peak & Ella Rock", slug: 'little-adams-peak-and-ella-rock' },
    { name: 'Ella City Guide', slug: 'ella-city-guide' },
    { name: 'Getting to Ella', slug: 'getting-to-ella' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-ella' },
    { name: 'Ella 2-Day Itinerary', slug: 'ella-2-day-itinerary' },
    { name: 'Yala vs Udawalawe Safari', slug: 'yala-vs-udawalawe-from-ella' },
    { name: "Lipton's Seat & Tea Country", slug: 'liptons-seat-and-ella-tea-country' },
    { name: 'Waterfalls & Day Tours', slug: 'ella-waterfalls-and-day-tours' },
];

const GALLE_SIDEBAR = [
    { name: 'Best Tours in Galle', slug: 'best-tours-in-galle' },
    { name: 'Galle Fort Guide', slug: 'galle-fort-guide' },
    { name: 'Mirissa Whale Watching', slug: 'mirissa-whale-watching-guide' },
    { name: 'South Coast Beaches', slug: 'south-coast-beaches-guide' },
    { name: 'Galle 2-Day Itinerary', slug: 'galle-2-day-itinerary' },
];

const NEGOMBO_SIDEBAR = [
    { name: 'Best Tours in Negombo', slug: 'best-tours-in-negombo' },
    { name: 'Negombo Airport Guide', slug: 'negombo-airport-guide' },
    { name: 'Negombo Lagoon Guide', slug: 'negombo-lagoon-guide' },
];

const NUWARA_ELIYA_SIDEBAR = [
    { name: 'Best Tours in Nuwara Eliya', slug: 'best-tours-in-nuwara-eliya' },
    { name: 'Ceylon Tea Guide', slug: 'nuwara-eliya-tea-guide' },
    { name: 'Horton Plains & World\'s End', slug: 'horton-plains-guide' },
];

const BENTOTA_SIDEBAR = [
    { name: 'Madu River Safari', slug: 'madu-river-safari-guide' },
    { name: 'Bentota Guide', slug: 'bentota-guide' },
];

const MIRISSA_SIDEBAR = [
    { name: 'Mirissa Guide', slug: 'mirissa-guide' },
];

const KANDY_SIDEBAR = [
    { name: 'Leaving Kandy: Transfers', slug: 'leaving-kandy-onward-transfers' },
    { name: 'Temple of the Tooth', slug: 'temple-of-the-tooth-guide' },
    { name: 'Kandy to Ella Train', slug: 'kandy-to-ella-train-guide' },
    { name: 'Esala Perahera', slug: 'kandy-esala-perahera-guide' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-kandy' },
    { name: 'Kandy City Guide', slug: 'kandy-city-guide' },
    { name: 'Getting Around', slug: 'getting-around-kandy' },
    { name: 'Day Trips', slug: 'day-trips-from-kandy' },
    { name: '2-Day Itinerary', slug: 'kandy-2-day-itinerary' },
];

const OSAKA_SIDEBAR = [
    { name: 'Osaka Food Guide', slug: 'osaka-food-guide' },
    { name: 'Dotonbori Guide', slug: 'dotonbori-guide' },
    { name: 'Osaka Castle', slug: 'osaka-castle-guide' },
    { name: 'Shinsekai Guide', slug: 'shinsekai-guide' },
    { name: 'Osaka Nightlife', slug: 'osaka-nightlife-guide' },
    { name: 'Day Trip to Kyoto', slug: 'osaka-to-kyoto-day-trip' },
    { name: 'Day Trip to Nara', slug: 'osaka-to-nara-day-trip' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-osaka' },
    { name: 'Getting Around', slug: 'getting-around-osaka' },
    { name: '3-Day Itinerary', slug: 'osaka-3-day-itinerary' },
    { name: 'Kuromon Market', slug: 'kuromon-market-guide' },
    { name: 'Osaka with Kids', slug: 'osaka-with-kids' },
    { name: 'Where to Stay in Osaka', slug: 'where-to-stay-in-osaka' },
    { name: 'Day Trips from Osaka', slug: 'osaka-day-trips' },
    { name: 'Best Tours in Osaka', slug: 'best-tours-in-osaka' },
];

const HIROSHIMA_SIDEBAR = [
    { name: 'Peace Memorial Park', slug: 'peace-memorial-park-guide' },
    { name: 'Hiroshima Castle', slug: 'hiroshima-castle-guide' },
    { name: 'Shukkeien Garden', slug: 'shukkeien-garden-guide' },
    { name: 'Kure & Yamato Museum', slug: 'kure-yamato-museum-guide' },
    { name: 'Shimanami Kaido Cycling', slug: 'shimanami-kaido-cycling-guide' },
    { name: 'Onomichi Guide', slug: 'onomichi-guide' },
    { name: 'Miyajima Island', slug: 'miyajima-island-guide' },
    { name: 'Hiroshima Food Guide', slug: 'hiroshima-food-guide' },
    { name: 'Day Trips', slug: 'hiroshima-day-trips' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-hiroshima' },
    { name: 'Getting Around', slug: 'getting-around-hiroshima' },
    { name: '2-Day Itinerary', slug: 'hiroshima-2-day-itinerary' },
    { name: 'Hiroshima with Children', slug: 'hiroshima-with-children' },
    { name: 'Where to Stay in Hiroshima', slug: 'where-to-stay-in-hiroshima' },
];

const NARA_SIDEBAR = [
    { name: 'Best Tours in Nara', slug: 'best-tours-in-nara' },
    { name: 'Nara Deer Park', slug: 'nara-deer-park-guide' },
    { name: 'Todai-ji Temple', slug: 'todai-ji-temple-guide' },
    { name: 'Kasuga Taisha', slug: 'kasuga-taisha-guide' },
    { name: 'Naramachi Old Town', slug: 'naramachi-guide' },
    { name: 'Nara Food Guide', slug: 'nara-food-guide' },
    { name: 'Mount Yoshino Blossom', slug: 'mount-yoshino-cherry-blossom-guide' },
    { name: 'Getting Around', slug: 'getting-around-nara' },
    { name: 'Day Trip from Kyoto or Osaka', slug: 'nara-day-trip-from-kyoto-osaka' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-nara' },
    { name: 'Half-Day Itinerary', slug: 'nara-half-day-itinerary' },
    { name: 'Nara Workshops & Crafts', slug: 'nara-workshops-and-crafts' },
    { name: 'Stay Overnight in Nara?', slug: 'should-you-stay-overnight-in-nara' },
];

const NAGOYA_SIDEBAR = [
    { name: 'Best Tours in Nagoya', slug: 'best-tours-in-nagoya' },
    { name: 'Ghibli Park Guide', slug: 'ghibli-park-guide' },
    { name: 'Nagoya Castle', slug: 'nagoya-castle-guide' },
    { name: 'Castle Keep Closure', slug: 'nagoya-castle-keep-closure' },
    { name: 'Atsuta Shrine', slug: 'atsuta-shrine-guide' },
    { name: 'Toyota Museums', slug: 'toyota-museums-guide' },
    { name: 'Magome to Tsumago Walk', slug: 'nakasendo-magome-tsumago-guide' },
    { name: 'Nagoya Food Guide', slug: 'nagoya-food-guide' },
    { name: 'Day Trips', slug: 'nagoya-day-trips' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-nagoya' },
    { name: 'Getting Around', slug: 'getting-around-nagoya' },
    { name: '2-Day Itinerary', slug: 'nagoya-2-day-itinerary' },
    { name: 'Is Nagoya Worth Visiting?', slug: 'is-nagoya-worth-visiting' },
    { name: 'Where to Stay in Nagoya', slug: 'where-to-stay-in-nagoya' },
];

const HAKONE_SIDEBAR = [
    { name: 'Best Tours in Hakone', slug: 'best-tours-in-hakone' },
    { name: 'Owakudani & Black Eggs', slug: 'owakudani-black-eggs-guide' },
    { name: 'Open-Air Museum', slug: 'hakone-open-air-museum-guide' },
    { name: 'Yosegi Marquetry', slug: 'hakone-yosegi-marquetry-guide' },
    { name: 'Hakone Onsen Guide', slug: 'hakone-onsen-guide' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-hakone' },
    { name: 'Getting Around', slug: 'getting-around-hakone' },
    { name: '2-Day Itinerary', slug: 'hakone-2-day-itinerary' },
    { name: 'Where to Stay in Hakone', slug: 'where-to-stay-in-hakone' },
    { name: 'Hakone or Kawaguchiko?', slug: 'hakone-or-kawaguchiko-for-mount-fuji' },
];







const DUBAI_SIDEBAR = [
    { name: 'Best Tours in Dubai', slug: 'best-tours-in-dubai' },
    { name: 'Burj Khalifa Tickets', slug: 'burj-khalifa-tickets-guide' },
    { name: 'Desert Safari Guide', slug: 'dubai-desert-safari-guide' },
    { name: 'Yacht Charters', slug: 'dubai-yacht-charter-guide' },
    { name: 'Helicopter Tours', slug: 'dubai-helicopter-tours-guide' },
    { name: 'Water Sports', slug: 'dubai-water-sports-guide' },
    { name: 'Day Trips from Dubai', slug: 'day-trips-from-dubai' },
    { name: 'Old Dubai & the Souks', slug: 'old-dubai-and-the-souks-guide' },
    { name: 'Marina & the Palm', slug: 'dubai-marina-and-the-palm-guide' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-dubai' },
    { name: 'Getting Around', slug: 'getting-around-dubai' },
    { name: 'Dubai with Kids', slug: 'dubai-with-kids-guide' },
    { name: '2-Day Itinerary', slug: 'dubai-2-day-itinerary' },
];

const ABU_DHABI_SIDEBAR = [
    { name: 'Saadiyat Museums', slug: 'saadiyat-island-museums-guide' },
    { name: 'Abu Dhabi with Kids', slug: 'abu-dhabi-with-kids-guide' },
    { name: 'Getting Around', slug: 'getting-around-abu-dhabi' },
    { name: '2-Day Itinerary', slug: 'abu-dhabi-2-day-itinerary' },
    { name: 'Sheikh Zayed Grand Mosque', slug: 'sheikh-zayed-grand-mosque-guide' },
    { name: 'Louvre Abu Dhabi', slug: 'louvre-abu-dhabi-guide' },
    { name: 'Qasr Al Watan', slug: 'qasr-al-watan-guide' },
    { name: 'Yas Island Parks', slug: 'yas-island-parks-guide' },
    { name: 'Desert Safari Guide', slug: 'abu-dhabi-desert-safari-guide' },
    { name: 'Day Trip from Dubai', slug: 'abu-dhabi-day-trip-from-dubai' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-abu-dhabi' },
    { name: 'Abu Dhabi City Guide', slug: 'abu-dhabi-city-guide' },
];

const MOUNT_FUJI_SIDEBAR = [
    { name: 'Best Tours in Mount Fuji', slug: 'best-tours-in-mount-fuji' },
    { name: 'Climbing Mount Fuji', slug: 'climbing-mount-fuji-guide' },
    { name: 'Mount Fuji Viewpoints', slug: 'mount-fuji-viewpoints' },
    { name: 'Chureito Pagoda', slug: 'chureito-pagoda-guide' },
    { name: 'Kawaguchiko Guide', slug: 'kawaguchiko-guide' },
];

const SAPPORO_SIDEBAR = [
    { name: 'Best Tours in Sapporo', slug: 'best-tours-in-sapporo' },
    { name: 'Snow Festival Guide', slug: 'sapporo-snow-festival-guide' },
    { name: 'Furano & Biei', slug: 'furano-biei-guide' },
    { name: 'Noboribetsu Onsen', slug: 'noboribetsu-onsen-guide' },
    { name: 'Asahiyama Zoo', slug: 'asahiyama-zoo-guide' },
    { name: 'Lake Toya & Shikotsu', slug: 'lake-toya-shikotsu-guide' },
    { name: 'Beer & Chocolate Factories', slug: 'sapporo-beer-chocolate-factories' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-sapporo' },
    { name: 'Sapporo Food Guide', slug: 'sapporo-food-guide' },
    { name: 'Niseko & Hokkaido Ski', slug: 'niseko-and-hokkaido-ski-guide' },
    { name: 'Otaru Day Trip', slug: 'otaru-day-trip-from-sapporo' },
    { name: 'Getting Around', slug: 'getting-around-sapporo' },
    { name: '3-Day Itinerary', slug: 'sapporo-3-day-itinerary' },
    { name: 'Where to Stay in Sapporo', slug: 'where-to-stay-in-sapporo' },
    { name: 'Sapporo with Kids', slug: 'sapporo-with-kids' },
];


function renderIcon(name: string) {
    const props = { size: 20 };
    switch (name) {
        case 'Ticket': return <Ticket {...props} />;
        case 'Clock': return <Clock {...props} />;
        case 'Wallet': return <Wallet {...props} />;
        case 'Map': return <Map {...props} />;
        case 'AlertTriangle': return <AlertTriangle {...props} />;
        case 'Star': return <Star {...props} />;
        case 'CheckCircle2': return <CheckCircle2 {...props} />;
        case 'History': return <History {...props} />;
        default: return <Info {...props} />;
    }
}

function renderMarkdownText(text: string) {
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-black text-[#001A33]">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('[') && part.includes('](')) {
            const match = part.match(/\[(.*?)\]\((.*?)\)/);
            if (match) {
                return (
                    <Link key={i} href={match[2]} className="text-[#10B981] font-black border-b border-[#10B981]/30 hover:border-[#10B981] transition-all">
                        {match[1]}
                    </Link>
                );
            }
        }
        return part;
    });
}

export default function CityInfoClient({ country, city, slug, data = null }: Props) {
    const { t } = useLanguage();
    const router = useRouter();

    if (!data) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center p-6 text-center">
                <div>
                    <h1 className="text-2xl font-black text-[#001A33] mb-4">Content Not Identified</h1>
                    <button onClick={() => router.back()} className="text-[#10B981] font-bold">{t.backToSearch}</button>
                </div>
            </div>
        );
    }

    const SIDEBAR_MAP: Record<string, typeof AGRA_SIDEBAR> = {
        ...BALI_GUIDES,
        ...JAPAN_GUIDES,
        ...VIETNAM_GUIDES,
        agra: AGRA_SIDEBAR,
        delhi: DELHI_SIDEBAR,
        jaipur: JAIPUR_SIDEBAR,
        phuket: PHUKET_SIDEBAR,
        bangkok: BANGKOK_SIDEBAR,
        'chiang-mai': CHIANG_MAI_SIDEBAR,
        pattaya: PATTAYA_SIDEBAR,
        krabi: KRABI_SIDEBAR,
        'siem-reap': SIEM_REAP_SIDEBAR,
        'phnom-penh': PHNOM_PENH_SIDEBAR,
        colombo: COLOMBO_SIDEBAR,
        kandy: KANDY_SIDEBAR,
        sigiriya: SIGIRIYA_SIDEBAR,
        'ella': ELLA_SIDEBAR,
        galle: GALLE_SIDEBAR,
        negombo: NEGOMBO_SIDEBAR,
        'nuwara-eliya': NUWARA_ELIYA_SIDEBAR,
        bentota: BENTOTA_SIDEBAR,
        mirissa: MIRISSA_SIDEBAR,
        sapporo: SAPPORO_SIDEBAR,
        osaka: OSAKA_SIDEBAR,
        hiroshima: HIROSHIMA_SIDEBAR,
        nara: NARA_SIDEBAR,
        nagoya: NAGOYA_SIDEBAR,
        hakone: HAKONE_SIDEBAR,
        'mount-fuji': MOUNT_FUJI_SIDEBAR,
        dubai: DUBAI_SIDEBAR,
        'abu-dhabi': ABU_DHABI_SIDEBAR,
        'kuala-lumpur': KUALA_LUMPUR_SIDEBAR,
        penang: PENANG_SIDEBAR,
        langkawi: LANGKAWI_SIDEBAR,
        malacca: MALACCA_SIDEBAR,
        'kota-kinabalu': KOTA_KINABALU_SIDEBAR,
        beijing: BEIJING_SIDEBAR,
        shanghai: SHANGHAI_SIDEBAR,
        hongkong: HONG_KONG_SIDEBAR,
        taipei: TAIPEI_SIDEBAR,
        seoul: SEOUL_SIDEBAR,
        busan: BUSAN_SIDEBAR,
        istanbul: ISTANBUL_SIDEBAR,
        doha: DOHA_SIDEBAR,
        male: MALE_SIDEBAR,
        manila: MANILA_SIDEBAR,
        cebu: CEBU_SIDEBAR,
    };
    // No fallback to Agra: a Kandy page showing Taj Mahal links is worse than
    // a page with no sidebar. Cities without a map entry render none.
    // city arrives as a display name ('Mount Fuji'), not a slug, so it must be
    // slugified before any keyed lookup. Keying on toLowerCase() alone silently
    // dropped the sidebar on every two-word city: Chiang Mai, Nuwara Eliya,
    // Mount Fuji. Single-word cities hid the bug for months.
    const sidebarItems = SIDEBAR_MAP[urlSlug(city)] || [];

    return (
        <div className="min-h-screen bg-white">
            {/* JSON-LD moved to server component (app/[country]/[city]/[slug]/page.tsx) for guaranteed raw HTML rendering */}

            {/* Hero Section.
                The nav overlay sits OUTSIDE the clipping container: the hero itself needs
                overflow-hidden for the object-cover image, but the language dropdown opens
                downward and was being cut off by it (badly so on mobile, where the hero is
                only 40vh). Keeping the overlay as a sibling leaves the visuals identical. */}
            <div className="relative">
                <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
                    <img
                        /* Full-bleed hero, but never wider than a large screen.
                           Asking for the original pulled the untouched file. */
                        src={cloudinaryLoader({ src: data.heroImage, width: 1600 })}
                        alt={data.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001A33] via-[#001A33]/40 to-transparent" />

                    <div className="absolute bottom-8 left-0 right-0 px-6 max-w-6xl mx-auto">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 drop-shadow-2xl">
                            {data.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-white/90">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
                                <span className="text-[13px] font-black">{t.minRead}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
                                <span className="text-[13px] font-black">{t.verifiedIntel}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Overlays */}
                <div className="absolute top-0 left-0 right-0 z-30 p-5 flex justify-between items-center max-w-6xl mx-auto w-full">
                    <button
                        onClick={() => router.back()}
                        className="px-6 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all border border-white/20 font-black text-[12px] uppercase tracking-widest"
                    >
                        {t.back}
                    </button>
                    <div className="flex items-center gap-3 min-w-0">
                        {/* hidden on the narrowest screens: the badge is decorative, and at
                            375px it pushed the row wide enough to shove the language menu
                            off the right edge */}
                        <div className="hidden sm:block px-4 py-1.5 bg-[#10B981] rounded-full text-white text-[11px] font-black uppercase tracking-widest shadow-xl">
                            {fmt(t.authorityBadge, { city })}
                        </div>
                        <div className="text-white">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </div>

            {/* dir="ltr" is deliberate. The guide body is English (it comes from the
                content files, not the dictionary), and letting it inherit RTL from an
                Arabic <html dir> makes the bidi algorithm reorder mixed runs — "2 hours
                (฿130 bus)" was rendering as "hours (฿130 2 bus)". Pure-Arabic labels in
                here still shape correctly inside an LTR container. Revisit once the guide
                content itself is translated. */}
            <div dir="ltr" className="max-w-6xl mx-auto px-6 py-12">
                {/* Breadcrumbs with JSON-LD */}
                <Breadcrumbs country={country} city={city} tourTitle={data.title} slug={slug} />

                {/* Authority Header / AEO Box */}
                {data.fastFacts && (
                    <div className="mb-16 bg-[#F0FDF4] border border-[#DCFCE7] rounded-[2.5rem] p-8 md:p-12 shadow-sm border-b-4 border-b-[#10B981]">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10 pb-10 border-b border-[#DCFCE7]">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-[#10B981] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#10B981]/20 rotate-3">
                                    <ShieldCheck size={32} />
                                </div>
                                <div>
                                    <p className="text-[12px] font-black text-[#10B981] uppercase tracking-[0.3em] mb-1">{t.sourceAuthority}</p>
                                    <p className="text-[#064E3B] font-black text-2xl">{t.verifiedOfficialIntel}</p>
                                </div>
                            </div>
                            <div className="bg-white/60 backdrop-blur-md px-8 py-3 rounded-full border border-[#DCFCE7] flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
                                <p className="text-[#064E3B] font-black text-[12px] uppercase tracking-widest">
                                    {t.lastUpdated}: Feb 2026
                                </p>
                            </div>
                        </div>

                        {/* Fast Facts Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {data.fastFacts.map((fact, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-[#DCFCE7] hover:border-[#10B981] transition-all group hover:-translate-y-1">
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-[#F0FDF4] text-[#10B981] rounded-2xl flex items-center justify-center group-hover:bg-[#10B981] group-hover:text-white transition-all duration-300">
                                            {renderIcon(fact.icon)}
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{fact.label}</p>
                                            <p className="text-[#001A33] font-black text-[16px]">{fact.value}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Content Column */}
                    <div className="flex-1">
                        {/* Lead Paragraph */}
                        <div className="mb-12">
                            <p className="text-xl md:text-2xl text-gray-600 font-bold leading-relaxed border-l-4 border-[#10B981] pl-6">
                                {data.description}
                            </p>
                        </div>

                        {/* Content Body */}
                        <div className="space-y-16">
                            {data.sections.map((section: any, index: number) => {
                                if (section.isCTA) {
                                    return (
                                        <div key={index} className="bg-gradient-to-br from-[#001A33] to-[#003366] rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                                                {section.image && (
                                                    <div className="w-full md:w-[280px] aspect-[4/3] shrink-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group-hover:scale-[1.02] transition-transform duration-700">
                                                        <img src={cloudinaryLoader({ src: section.image, width: 640 })} alt={section.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                                    </div>
                                                )}
                                                <div className="flex-1 text-center md:text-left">
                                                    <h3 className="text-2xl md:text-4xl font-black mb-6 leading-tight">
                                                        {section.title}
                                                    </h3>
                                                    <p className="text-white/80 font-bold text-lg leading-relaxed max-w-xl mb-10">
                                                        {section.content}
                                                    </p>
                                                    {section.buttonLink && (
                                                        <Link
                                                            href={section.buttonLink}
                                                            className="inline-block px-10 py-5 bg-[#10B981] hover:bg-[#059669] text-white font-black rounded-2xl transition-all shadow-xl hover:scale-105 active:scale-95 text-[17px] whitespace-nowrap"
                                                        >
                                                            {section.buttonText}
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
                                        </div>
                                    );
                                }

                                return (
                                    <article key={index} className="group">
                                        <header className="mb-6">
                                            <span className="text-[#10B981] text-[12px] font-black uppercase tracking-[0.2em] mb-2 block">{t.part} 0{index + 1}</span>
                                            <div className="flex items-center gap-4">
                                                {section.icon && (
                                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F0FDF4] text-[#10B981] rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-[#DCFCE7]">
                                                        {renderIcon(section.icon)}
                                                    </div>
                                                )}
                                                <h2 className="text-2xl md:text-4xl font-black text-[#001A33] group-hover:text-[#10B981] transition-colors leading-tight">
                                                    {section.title}
                                                </h2>
                                            </div>
                                        </header>

                                        {section.image && (
                                            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                                <img
                                                    src={cloudinaryLoader({ src: section.image, width: 1080 })}
                                                    alt={section.title}
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="w-full h-auto object-cover max-h-[400px]"
                                                />
                                            </div>
                                        )}

                                        <div className="text-[17px] md:text-[18px] text-gray-700 leading-[1.6] font-medium space-y-6">
                                            {section.content.split('\n').map((para: string, pIdx: number) => {
                                                if (!para.trim()) return null;

                                                if (para.startsWith('### ')) {
                                                    return (
                                                        <h3 key={pIdx} className="text-[22px] md:text-[24px] font-black text-[#001A33] mt-10 mb-4 first:mt-0">
                                                            {para.replace('### ', '')}
                                                        </h3>
                                                    );
                                                }

                                                return (
                                                    <p key={pIdx}>
                                                        {renderMarkdownText(para)}
                                                    </p>
                                                );
                                            })}
                                        </div>

                                        {section.table && (
                                            <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                                                <table className="w-full text-left border-collapse">
                                                    <thead>
                                                        <tr className="bg-gray-50">
                                                            {section.table.headers.map((header: string, hIdx: number) => (
                                                                <th key={hIdx} className="p-4 text-[13px] font-black text-[#001A33] uppercase tracking-wider border-b border-gray-100">{header}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {section.table.rows.map((row: string[], rIdx: number) => (
                                                            <tr key={rIdx} className="hover:bg-gray-50/50 transition-colors">
                                                                {row.map((cell: string, cIdx: number) => (
                                                                    <td key={cIdx} className="p-4 text-[15px] font-medium text-gray-600 border-b border-gray-50">{cell}</td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}

                                        {/* GYG-style inline tour card */}
                                        {section.tourCard && (
                                            <Link
                                                href={`/${urlSlug(country)}/${urlSlug(city)}/${section.tourCard.slug}`}
                                                className="mt-10 flex flex-col sm:flex-row rounded-2xl border border-[#DCFCE7] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#10B981]/50 transition-all duration-300 group/card"
                                            >
                                                <div className="sm:w-[220px] h-[160px] sm:h-auto shrink-0 overflow-hidden bg-gray-100">
                                                    <img
                                                        /* 220x160 card, so do not pull the original. */
                                                        src={cloudinaryLoader({ src: section.tourCard.image || section.image || '/bangkok-hero.webp', width: 384 })}
                                                        alt={section.tourCard.title}
                                                        loading="lazy"
                                                        decoding="async" 
                                                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                                <div className="flex-1 p-6 bg-[#F0FDF4] group-hover/card:bg-white transition-colors duration-300">
                                                    <div className="flex items-start justify-between gap-3 mb-2">
                                                        <span className="text-[11px] font-black text-[#10B981] uppercase tracking-[0.25em]">{t.featuredTour}</span>
                                                        {section.tourCard.rating && (
                                                            <div className="flex items-center gap-1 shrink-0">
                                                                <Star size={13} fill="#F59E0B" className="text-[#F59E0B]" />
                                                                <span className="text-[13px] font-black text-gray-700">{section.tourCard.rating}</span>
                                                                {section.tourCard.reviews && (
                                                                    <span className="text-[12px] text-gray-400 font-medium">({section.tourCard.reviews})</span>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <h4 className="font-black text-[#001A33] text-[17px] mb-2 group-hover/card:text-[#10B981] transition-colors leading-snug">
                                                        {section.tourCard.title}
                                                    </h4>
                                                    <p className="text-gray-500 text-[14px] font-medium mb-5 leading-relaxed line-clamp-2">
                                                        {section.tourCard.description}
                                                    </p>
                                                    <div className="flex items-end justify-between gap-4">
                                                        <div>
                                                            {section.tourCard.price && (
                                                                <p className="text-[#001A33] font-black text-[18px]">{section.tourCard.price}</p>
                                                            )}
                                                            {section.tourCard.duration && (
                                                                <p className="text-gray-400 text-[13px] font-medium">{section.tourCard.duration}</p>
                                                            )}
                                                        </div>
                                                        <div className="px-6 py-3 bg-[#10B981] text-white font-black text-[14px] rounded-xl group-hover/card:bg-[#059669] transition-colors shadow-sm whitespace-nowrap">
                                                            Book Now →
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        )}
                                    </article>
                                );
                            })}
                        </div>

                        {/* FAQ Section */}
                        {data.faqs && data.faqs.length > 0 && (
                            <section className="mt-24">
                                <h2 className="text-3xl md:text-4xl font-black text-[#001A33] mb-12">
                                    Frequently Asked Questions
                                </h2>
                                <div className="space-y-6">
                                    {data.faqs.map((faq, fIdx) => (
                                        <div key={fIdx} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-[#10B981]/30 transition-all duration-300">
                                            <h3 className="text-xl font-black text-[#001A33] mb-4 flex gap-3">
                                                <span className="text-[#10B981]">Q.</span>
                                                {faq.q}
                                            </h3>
                                            <div className="text-gray-600 font-medium leading-relaxed pl-8 space-y-2">
                                                {faq.a.split('\n').map((line: string, lIdx: number) => (
                                                    <p key={lIdx}>
                                                        {renderMarkdownText(line)}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Recommended Tours — Internal linking from authority pages to tour pages */}
                        {CITY_RECOMMENDED_TOURS[urlSlug(city)] && (
                            <section className="mt-24">
                                <h2 className="text-3xl md:text-4xl font-black text-[#001A33] mb-4">
                                    {fmt(t.topRatedTours, { city })}
                                </h2>
                                <p className="text-gray-500 font-medium text-lg mb-10">
                                    Handpicked experiences with licensed local guides. Instant confirmation.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {CITY_RECOMMENDED_TOURS[urlSlug(city)]!.map((tour, idx) => (
                                        <Link
                                            key={idx}
                                            href={`/${urlSlug(country)}/${urlSlug(city)}/${tour.slug}`}
                                            className="group rounded-2xl border border-gray-100 overflow-hidden hover:border-[#10B981]/40 hover:shadow-xl transition-all duration-300 bg-white"
                                        >
                                            {tour.image ? (
                                                <div className="relative h-[180px] overflow-hidden">
                                                    <img
                                                        src={cloudinaryLoader({ src: tour.image, width: 640 })}
                                                        alt={tour.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                        loading="lazy"
                                                    />
                                                    {tour.rating && (
                                                        <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow-sm">
                                                            <Star size={12} fill="#F59E0B" className="text-[#F59E0B]" />
                                                            <span className="text-[13px] font-black text-gray-800">{tour.rating}</span>
                                                        </div>
                                                    )}
                                                    {tour.price && (
                                                        <div className="absolute bottom-3 right-3 bg-[#001A33]/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-[13px] font-black">
                                                            {tour.price}
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="h-[60px] bg-gradient-to-r from-[#F0FDF4] to-[#DCFCE7] flex items-center px-5">
                                                    <Ticket size={18} className="text-[#10B981]" />
                                                </div>
                                            )}
                                            <div className="p-5">
                                                <h3 className="font-black text-[#001A33] text-[15px] group-hover:text-[#10B981] transition-colors mb-1.5 leading-snug line-clamp-2">
                                                    {tour.title}
                                                </h3>
                                                <p className="text-gray-500 text-[13px] font-medium line-clamp-2">{tour.description}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Bottom CTA */}
                        <section className="mt-24 p-1 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-[40px]">
                            <div className="bg-[#001A33] rounded-[38px] p-8 md:p-12 text-white text-center">
                                <h2 className="text-3xl md:text-5xl font-black mb-4">{fmt(t.discoverTheReal, { city })}</h2>
                                <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-medium">
                                    {t.localMastery}
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <Link
                                        href={`/${urlSlug(country)}/${urlSlug(city)}`}
                                        className="w-full sm:w-auto px-10 py-5 bg-[#10B981] text-white font-black rounded-full hover:bg-white hover:text-[#10B981] transition-all duration-300 flex items-center justify-center text-xl shadow-xl hover:-translate-y-1 hover:scale-[1.05] active:scale-[0.95]"
                                    >
                                        {fmt(t.browseTours, { city: slug === 'taj-mahal' ? 'Taj Mahal' : city })}
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:w-[350px] shrink-0">
                        <div className="sticky top-32 space-y-8">
                            {/* Pillar Nav */}
                            <div className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-md">
                                <h4 className="text-lg font-black text-[#001A33] mb-6">{fmt(t.guideHub, { city })}</h4>
                                <div className="space-y-2">
                                    {sidebarItems.map((item, idx) => (
                                        <Link
                                            key={idx}
                                            href={`/${urlSlug(country)}/${urlSlug(city)}/${item.slug}`}
                                            className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${slug === item.slug
                                                ? 'bg-[#10B981] text-white shadow-lg shadow-[#10B981]/30 scale-[1.02] -translate-y-0.5'
                                                : 'bg-gray-50 hover:bg-white hover:shadow-md hover:border-[#10B981]/20 border border-transparent text-[#001A33] hover:-translate-y-1'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                {slug === item.slug && <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
                                                <span className="font-black text-[14px] tracking-tight">{item.name}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Support Widget */}
                            <div className="bg-[#10B981] rounded-[32px] p-8 text-white shadow-xl shadow-[#10B981]/20 relative overflow-hidden group/support">
                                <div className="relative z-10">
                                    <h4 className="text-lg font-black mb-4">{t.needHelp}</h4>
                                    <p className="text-white/80 font-bold text-sm mb-6">
                                        {fmt(t.messageGuide, { city })}
                                    </p>
                                    <Link
                                        href={`/${urlSlug(country)}/${urlSlug(city)}`}
                                        className="w-full py-4 bg-white text-[#10B981] font-black rounded-xl hover:bg-gray-50 transition-all text-[15px] shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
                                    >
                                        {fmt(t.browseTours, { city: slug === 'taj-mahal' ? 'Taj Mahal' : city })}
                                    </Link>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover/support:scale-150 transition-transform duration-700" />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
