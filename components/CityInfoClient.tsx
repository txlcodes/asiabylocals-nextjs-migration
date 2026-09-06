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
import { getCityInfoContent, CityInfoData } from '@/lib/cityInfoContent';
import { fmt } from '@/lib/i18n';
import Breadcrumbs from '@/components/Breadcrumbs';
import LanguageSwitcher, { useLanguage } from '@/components/LanguageSwitcher';

interface Props {
    country: string;
    city: string;
    slug: string;
}

const AGRA_SIDEBAR = [
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
];

const DELHI_SIDEBAR = [
    { name: 'Delhi Travel Guide', slug: 'delhi-travel-guide-2026' },
    { name: 'Red Fort', slug: 'red-fort' },
    { name: 'Qutub Minar', slug: 'qutub-minar' },
    { name: "Humayun's Tomb", slug: 'humayuns-tomb' },
    { name: 'India Gate', slug: 'india-gate' },
    { name: 'Things to Do', slug: 'things-to-do-in-delhi' },
    { name: '1-Day Itinerary', slug: 'delhi-1-day-itinerary' },
];

const JAIPUR_SIDEBAR = [
    { name: 'Things to Do', slug: 'things-to-do-in-jaipur' },
    { name: 'Travel Guide 2026', slug: 'jaipur-travel-guide-2026' },
    { name: '1-Day Itinerary', slug: '1-day-jaipur-itinerary' },
    { name: 'Amber Fort', slug: 'amber-fort' },
    { name: 'Hawa Mahal', slug: 'hawa-mahal' },
    { name: 'City Palace', slug: 'city-palace-jaipur' },
    { name: 'Nahargarh Fort', slug: 'nahargarh-fort' },
    { name: 'Places to Visit', slug: 'places-to-visit-in-jaipur' },
];

// Recommended tour links for internal linking from authority pages to tour pages (SEO: pass link juice)
const CITY_RECOMMENDED_TOURS: Record<string, { title: string; slug: string; description: string; image?: string; price?: string; rating?: string }[]> = {
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
];

const CHIANG_MAI_SIDEBAR = [
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-chiang-mai' },
    { name: 'Burning Season Guide', slug: 'chiang-mai-burning-season-guide' },
    { name: '3-Day Itinerary', slug: 'chiang-mai-3-day-itinerary' },
    { name: 'Doi Suthep', slug: 'doi-suthep-chiang-mai' },
    { name: 'Yi Peng Lantern Festival', slug: 'yi-peng-lantern-festival-chiang-mai' },
    { name: 'Khao Soi & Food Guide', slug: 'khao-soi-chiang-mai-food-guide' },
    { name: 'Elephant Sanctuaries', slug: 'chiang-mai-elephant-sanctuary-guide' },
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
];

const KRABI_SIDEBAR = [
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-krabi' },
    { name: 'Railay Beach', slug: 'railay-beach-krabi' },
    { name: '4 Islands Tour', slug: 'krabi-4-islands-tour-guide' },
    { name: 'Tiger Cave Temple', slug: 'tiger-cave-temple-krabi' },
    { name: 'Where to Stay', slug: 'where-to-stay-in-krabi' },
    { name: '3-Day Itinerary', slug: 'krabi-3-day-itinerary' },
    { name: 'Krabi vs Phuket', slug: 'krabi-vs-phuket-which-to-visit' },
];

/** "Sri Lanka" -> "sri-lanka". toLowerCase() alone leaves the space in the URL. */
const urlSlug = (s: string) => s.toLowerCase().trim().replace(/\s+/g, '-');

const KYOTO_SIDEBAR = [
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-kyoto' },
    { name: 'Getting Around', slug: 'getting-around-kyoto' },
    { name: 'Fushimi Inari Guide', slug: 'fushimi-inari-guide' },
    { name: 'Kyoto Food Guide', slug: 'kyoto-food-guide' },
    { name: '2-Day Itinerary', slug: 'kyoto-2-day-itinerary' },
];

const COLOMBO_SIDEBAR = [
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
    { name: 'Nine Arch Bridge', slug: 'nine-arch-bridge-guide' },
    { name: "Little Adam's Peak & Ella Rock", slug: 'little-adams-peak-and-ella-rock' },
    { name: 'Ella City Guide', slug: 'ella-city-guide' },
    { name: 'Getting to Ella', slug: 'getting-to-ella' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-ella' },
    { name: 'Ella 2-Day Itinerary', slug: 'ella-2-day-itinerary' },
];

const GALLE_SIDEBAR = [
    { name: 'Galle Fort Guide', slug: 'galle-fort-guide' },
    { name: 'Mirissa Whale Watching', slug: 'mirissa-whale-watching-guide' },
    { name: 'South Coast Beaches', slug: 'south-coast-beaches-guide' },
    { name: 'Galle 2-Day Itinerary', slug: 'galle-2-day-itinerary' },
];

const NEGOMBO_SIDEBAR = [
    { name: 'Negombo Airport Guide', slug: 'negombo-airport-guide' },
    { name: 'Negombo Lagoon Guide', slug: 'negombo-lagoon-guide' },
];

const NUWARA_ELIYA_SIDEBAR = [
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
];

const HIROSHIMA_SIDEBAR = [
    { name: 'Peace Memorial Park', slug: 'peace-memorial-park-guide' },
    { name: 'Miyajima Island', slug: 'miyajima-island-guide' },
    { name: 'Hiroshima Food Guide', slug: 'hiroshima-food-guide' },
    { name: 'Day Trips', slug: 'hiroshima-day-trips' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-hiroshima' },
    { name: 'Getting Around', slug: 'getting-around-hiroshima' },
    { name: '2-Day Itinerary', slug: 'hiroshima-2-day-itinerary' },
];

const NARA_SIDEBAR = [
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
];

const NAGOYA_SIDEBAR = [
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
];

const HAKONE_SIDEBAR = [
    { name: 'Climbing Mount Fuji', slug: 'climbing-mount-fuji-guide' },
    { name: 'Mount Fuji Viewpoints', slug: 'mount-fuji-viewpoints' },
    { name: 'Hakone Onsen Guide', slug: 'hakone-onsen-guide' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-hakone' },
    { name: 'Getting Around', slug: 'getting-around-hakone' },
    { name: '2-Day Itinerary', slug: 'hakone-2-day-itinerary' },
];

const SAPPORO_SIDEBAR = [
    { name: 'Snow Festival Guide', slug: 'sapporo-snow-festival-guide' },
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-sapporo' },
    { name: 'Sapporo Food Guide', slug: 'sapporo-food-guide' },
    { name: 'Niseko & Hokkaido Ski', slug: 'niseko-and-hokkaido-ski-guide' },
    { name: 'Otaru Day Trip', slug: 'otaru-day-trip-from-sapporo' },
    { name: 'Getting Around', slug: 'getting-around-sapporo' },
    { name: '3-Day Itinerary', slug: 'sapporo-3-day-itinerary' },
];

const TOKYO_SIDEBAR = [
    { name: 'Best Time to Visit', slug: 'best-time-to-visit-tokyo' },
    { name: '3-Day Itinerary', slug: 'tokyo-3-day-itinerary' },
    { name: 'Getting Around', slug: 'getting-around-tokyo' },
    { name: 'Shibuya Crossing', slug: 'shibuya-crossing-guide' },
    { name: 'Street Go-Kart Guide', slug: 'tokyo-go-kart-guide' },
    { name: 'Mount Fuji Day Trip', slug: 'mount-fuji-day-trip-from-tokyo' },
    { name: 'Tokyo Food Guide', slug: 'tokyo-food-guide' },
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

export default function CityInfoClient({ country, city, slug }: Props) {
    const { t } = useLanguage();
    const router = useRouter();
    const data = getCityInfoContent(slug);

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
        agra: AGRA_SIDEBAR,
        delhi: DELHI_SIDEBAR,
        jaipur: JAIPUR_SIDEBAR,
        phuket: PHUKET_SIDEBAR,
        bangkok: BANGKOK_SIDEBAR,
        'chiang-mai': CHIANG_MAI_SIDEBAR,
        pattaya: PATTAYA_SIDEBAR,
        krabi: KRABI_SIDEBAR,
        tokyo: TOKYO_SIDEBAR,
        kyoto: KYOTO_SIDEBAR,
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
    };
    // No fallback to Agra: a Kandy page showing Taj Mahal links is worse than
    // a page with no sidebar. Cities without a map entry render none.
    const sidebarItems = SIDEBAR_MAP[city.toLowerCase()] || [];

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
                        src={data.heroImage}
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
                                                        <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
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
                                                    src={section.image}
                                                    alt={section.title}
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
                                                        src={section.tourCard.image || section.image || '/bangkok-hero.webp'}
                                                        alt={section.tourCard.title}
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
                        {CITY_RECOMMENDED_TOURS[city.toLowerCase()] && (
                            <section className="mt-24">
                                <h2 className="text-3xl md:text-4xl font-black text-[#001A33] mb-4">
                                    {fmt(t.topRatedTours, { city })}
                                </h2>
                                <p className="text-gray-500 font-medium text-lg mb-10">
                                    Handpicked experiences with licensed local guides. Instant confirmation.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {CITY_RECOMMENDED_TOURS[city.toLowerCase()]!.map((tour, idx) => (
                                        <Link
                                            key={idx}
                                            href={`/${urlSlug(country)}/${urlSlug(city)}/${tour.slug}`}
                                            className="group rounded-2xl border border-gray-100 overflow-hidden hover:border-[#10B981]/40 hover:shadow-xl transition-all duration-300 bg-white"
                                        >
                                            {tour.image ? (
                                                <div className="relative h-[180px] overflow-hidden">
                                                    <img
                                                        src={tour.image}
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
