// Canonical map for duplicate tour pages. Duplicates stay live and bookable
// but declare their intent's champion as canonical, pooling ranking signals
// instead of splitting them. Champions and genuinely distinct tours are NOT
// mapped. Imported by the tour page (for the canonical tag) and by the
// sitemap, which must never submit a URL that canonicals somewhere else.
export const DUPLICATE_CANONICAL_MAP: Record<string, string> = {
  // Sri Lanka. Only one genuine clone so far: Nelum Holidays listed the same
  // private Udawalawe day trip twice on the source platform — both full day, both
  // private, both max 6 — at $247 and $156. The cheaper page is the one a
  // reader should land on.
  //
  // NOT mapped: the two Apple Vacations Colombo tuk-tuk tours look like clones
  // by title, but one is Private and the other Group. Different products.
  'private-udawalawe-elephant-safari-day-trip-transit-home-visit':
    'udawalawe-elephant-safari-transit-home-private-day-trip',
  // Second clone: Ranweli Tours lists the same private Yala day trip from Ella
  // twice. Same operator, same park, same origin, same lead photo — only the
  // stated duration and price differ ($286/8h vs $260/10h). Cheaper and longer
  // wins the canonical.
  'private-yala-national-park-safari-day-trip-from-ella-and-back':
    'private-yala-safari-from-ella-with-a-dedicated-jeep-and-tracker',
  // sunrise intent → taj-mahal-sunrise-guided-tour
  'taj-mahal-sunrise-tour': 'taj-mahal-sunrise-guided-tour',
  'taj-mahal-sunrise-tour-experience': 'taj-mahal-sunrise-guided-tour',
  'taj-mahal-sunrise-tour-tour': 'taj-mahal-sunrise-guided-tour',
  'agra-royal-sunrise-tour': 'taj-mahal-sunrise-guided-tour',
  'agra-professional-sunrise-tour': 'taj-mahal-sunrise-guided-tour',
  'taj-mahal-sunrise-skip-the-line-tour': 'taj-mahal-sunrise-guided-tour',
  'private-sunrise-taj-mahal-agra-fort-tour': 'taj-mahal-sunrise-guided-tour',
  // same-day-from-Delhi intent → taj-mahal-return-guided-tour
  'same-day-delhi-to-agra-tour': 'taj-mahal-return-guided-tour',
  'same-day-agra-tour-from-delhi': 'taj-mahal-return-guided-tour',
  'taj-mahal-same-day-tour-from-delhi': 'taj-mahal-return-guided-tour',
  'same-day-taj-mahal-tour-by-car-from-delhi': 'taj-mahal-return-guided-tour',
  'taj-mahal-full-day-tour': 'taj-mahal-return-guided-tour',
  'taj-mahal-delhi-guided-tour': 'taj-mahal-return-guided-tour',
  'sunrise-taj-mahal-and-agra-tour-by-car': 'taj-mahal-return-guided-tour',
  // generic guided / private-guide intent → taj-mahal-official-guided-tour
  'taj-mahal-guided-tour': 'taj-mahal-official-guided-tour',
  'taj-mahal-guided-tour-from-agra': 'taj-mahal-official-guided-tour',
  'taj-mahal-express-tour': 'taj-mahal-official-guided-tour',
  'taj-mahal-mahal-private-tour': 'taj-mahal-official-guided-tour',
  'taj-mahal-approved-private-tour': 'taj-mahal-official-guided-tour',
  'taj-mahal-pickup-private-tour': 'taj-mahal-official-guided-tour',
  // Gatimaan intent → delhi-agra-round-trip-gatimaan-train
  'agra-gatimaan-express-tour': 'delhi-agra-round-trip-gatimaan-train',
  'agra-gatimaan-entry-ticket': 'delhi-agra-round-trip-gatimaan-train',
  // Fatehpur day-trip intent → taj-mahal-fatehpur-full-day-tour
  'taj-mahal-fatehpur-guided-tour': 'taj-mahal-fatehpur-full-day-tour',

  // ---- SWEEP (2026-09-16): title-similarity pass over every city, then read
  // by hand. Only same-product pages are mapped; different day counts,
  // opposite transfer directions, sunrise vs sunset, and different boats in a
  // cruise fleet all stay unmapped. Cheaper page wins unless the other is an
  // owned tour.
  // Da Nang: Marble Mountain + Monkey Mountain + Am Phu Cave, three listings
  'marble-mountain-monkey-mountain-and-am-phu-cave-tour-in-da-nang':
    'monkey-mountain-marble-mountain-am-phu-cave-in-da-nang',
  'marble-mountain-am-phu-cave-monkey-mountain-in-da-nang':
    'monkey-mountain-marble-mountain-am-phu-cave-in-da-nang',
  // Hoi An: My Son + Marble Mountains day trip, $60 vs $29
  'marble-mountains-and-my-son-sanctuary-day-trip-in-hoi-an':
    'my-son-sanctuary-and-marble-mountains-guided-tour-in-hoi-an',
  // HCMC: Cu Chi + Mekong + coconut village
  'cu-chi-tunnels-and-mekong-delta-with-coconut-village-tour-ho-chi-minh-city':
    'hcm-cu-chi-tunnels-mekong-delta-and-coconut-village-tour-ho-chi-minh-city',
  // Hanoi: TripBestie listed the same 3-day Ha Giang loop twice
  '3-day-ha-giang-loop-w-safe-rider-max-8pax':
    '3-day-ha-giang-loop-with-safe-rider-max-8-pax-3-3',
  // Ha Long: same operator, same 3-day 6-star cruise, listed twice
  'hanoi-ninh-binh-halong-bay-6-star-cruise-3-days':
    '3-days-hanoi-ninh-binh-halong-lan-ha-bay-6-star-cruise-ha-long-bay',
  // Sapa: Lao Chai + Ta Van full-day trek
  'full-day-trekking-tour-to-lao-chai-and-ta-van-villages-in-sapa':
    'trekking-to-y-linh-ho-lao-chai-and-ta-van-villages-in-sapa',
  // Agra: Friday special (Taj closed) -> the owned tour
  'agra-fort-sunset-tour': 'agra-friday-tour-taj-closed-alternative',
  // Delhi: Taj sunrise + Elephant SOS, two operators
  // Chain fix 2026-09-27: this pointed at delhi-agra-sunrise-tour, which is
  // itself a duplicate of taj-mahal-delhi-sunrise-tour. Google does not
  // follow a canonical to a second canonical, so the signal was going
  // nowhere. Points at the end of the chain now.
  'taj-mahal-sunrise-elephant-conservation-tour': 'taj-mahal-delhi-sunrise-tour',
  // Delhi: one more Old+New Delhi city tour the 2026-08-25 pass missed
  'india-gate-full-day-tour': 'explore-old-new-delhi-city-luxury-car-tour',
  // Mumbai: same-day and overnight Taj by flight, two operators each
  'same-day-taj-mahal-tour-from-mumbai-by-flight': 'same-day-taj-mahal-tour-from-mumbai',
  'taj-mahal-overnight-tour-from-mumbai-by-flight': 'overnight-taj-mahal-tour-from-mumbai',
  // Udaipur: private full-day sightseeing with guide, $80 vs $29
  'city-palace-sightseeing-full-day-tour': 'lake-pichola-full-day-tour',
  // Colombo: Yala day trip, two operators
  'yala-national-park-leopard-safari-day-trip-colombo':
    'yala-national-park-private-jeep-safari-day-trip-colombo',
  // Nara: early-morning coach from Kyoto, $94 vs $73
  'kasuga-taisha-morning-tour': 'nara-park-morning-morning-tour',

  // ---- UAE (2026-09-16): 101 tours; clones crept back in after launch. Only
  // genuine same-product pages are mapped. Same intent but a different
  // product (quad-included full-day safari, sunset-specific cruise, Louvre
  // add-on day trip) stays unmapped. Champion = keyword-bearing title and the
  // fuller itinerary; price gaps inside a cluster are a few dollars.
  // Dubai evening desert safari → red-dune evening safari (OceanAir, $40)
  'fort-lisaili-desert-safari-with-camp-dinner-and-shows':
    'dubai-red-dune-evening-safari-with-camel-ride-and-bbq-camp',
  'dubai-desert-safari-with-camel-ride-and-optional-hatta-extension':
    'dubai-red-dune-evening-safari-with-camel-ride-and-bbq-camp',
  // Abu Dhabi Grand Mosque + Qasr Al Watan from Abu Dhabi → the Etihad Towers itinerary
  'abu-dhabi-grand-mosque-and-qasr-al-watan-private-transfer-tour':
    'abu-dhabi-grand-mosque-qasr-al-watan-and-etihad-towers-tour',
  // Shared Marina BBQ cruise → Xclusive Yachts breakfast-or-BBQ ($33)
  'dubai-marina-luxury-yacht-cruise-with-onboard-barbecue':
    'dubai-marina-yacht-tour-with-breakfast-or-barbecue',
  // Abu Dhabi evening desert safari → camel farm + Bedouin camp dinner
  'abu-dhabi-dune-bashing-safari-with-camel-farm-visit':
    'abu-dhabi-desert-safari-with-camel-farm-and-bedouin-camp-dinner',
  'abu-dhabi-desert-safari-with-bbq-and-tanoura-shows':
    'abu-dhabi-desert-safari-with-camel-farm-and-bedouin-camp-dinner',
  // Self-drive quad/buggy session → the $31 session (vs $44)
  'dubai-red-dunes-self-drive-quad-or-buggy-with-camel-ride':
    'dubai-quad-bike-or-dune-buggy-session-with-optional-transfer',

  // ---- DELHI (2026-08-25): 39/42 tour pages invisible; champions = the 5 owned tours ----
  // Old/New Delhi city-tour intent → explore-old-new-delhi-city-luxury-car-tour (owned)
  'old-delhi-new-delhi-trails-private-tour': 'explore-old-new-delhi-city-luxury-car-tour',
  'delhi-old-new-delhi-private-full-half-day-tour': 'explore-old-new-delhi-city-luxury-car-tour',
  'old-new-delhi-private-half-day-tour': 'explore-old-new-delhi-city-luxury-car-tour',
  'old-new-delhi-guided-tour': 'explore-old-new-delhi-city-luxury-car-tour',
  'old-new-delhi-private-tour': 'explore-old-new-delhi-city-luxury-car-tour',
  'delhi-full-day-guided-tour': 'explore-old-new-delhi-city-luxury-car-tour',
  'delhi-sightseeing-half-day-tour': 'explore-old-new-delhi-city-luxury-car-tour',
  'delhi-same-day-sightseeing-tour': 'explore-old-new-delhi-city-luxury-car-tour',
  // Taj-from-Delhi-by-car intent → private-taj-mahal-tour-from-delhi (owned)
  'delhi-agra-private-tour': 'private-taj-mahal-tour-from-delhi',
  'private-taj-mahal-agra-day-tour-from-delhi': 'private-taj-mahal-tour-from-delhi',
  'taj-mahal-agra-day-trip-luxury-car': 'private-taj-mahal-tour-from-delhi',
  // Taj-by-train intent → taj-mahal-tour-by-train-gatimaan (owned)
  'taj-mahal-same-day-express-train-tour': 'taj-mahal-tour-by-train-gatimaan',
  'hazrat-nizamuddin-railway-station-delhi-express-tour': 'taj-mahal-tour-by-train-gatimaan',
  // Sunrise-from-Delhi intent → taj-mahal-delhi-sunrise-tour (crowned; no owned equivalent)
  'delhi-agra-sunrise-tour': 'taj-mahal-delhi-sunrise-tour',
  'sunrise-taj-mahal-tour-delhi-all-inclusive': 'taj-mahal-delhi-sunrise-tour',
  // Golden Triangle generic → golden-triangle-3-day-tour-from-delhi (owned; day-count and
  // safari variants are distinct products and stay unmapped)
  'golden-triangle-tour-delhi-agra-jaipur': 'golden-triangle-3-day-tour-from-delhi',
  // India Gate intent → india-gate-guided-tour (airport-layover variant stays — distinct)
  'india-gate-approved-guided-tour': 'india-gate-guided-tour',
  'india-gate-triangle-guided-tour': 'india-gate-guided-tour',
  // Delhi→Jaipur day trip → delhi-to-jaipur-same-day-tour-by-car
  'delhi-to-jaipur-royal-private-day-tour': 'delhi-to-jaipur-same-day-tour-by-car',

  // ---- JAIPUR (2026-08-25): 20/23 invisible; champions = proven performers ----
  // City sightseeing intent → jaipur-city-highlights-tour-with-amber-fort-hawa-mahal
  'jaipur-sightseeing-tour': 'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'jaipur-same-day-sightseeing-tour': 'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'jaipur-private-full-day-sightseeing-tour': 'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'jaipur-full-day-sightseeing-tour-by-car': 'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  // Hawa Mahal sightseeing dups → city highlights champion (Chokhi Dhani combo stays — distinct)
  'hawa-mahal-full-full-day-tour': 'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'hawa-mahal-full-day-tour': 'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'hawa-mahal-half-day-tour': 'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'hawa-mahal-landmarks-guided-tour': 'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  // Shopping junk-slug dup → jaipur-shopping-tour
  'shopping-tour-shopping-tour': 'jaipur-shopping-tour',
  // From-Delhi day trip → jaipur-same-day-tour-from-delhi
  'delhi-jaipur-same-day-tour-by-car': 'jaipur-same-day-tour-from-delhi',

  // ---- JAPAN (2026-08-28): Kyoto/Osaka 0 GSC presence, Tokyo 2/20 — same
  // slug-collision clones as Agra (food-food, evening-evening, crossing-crossing).
  // Champions = cleanest slug per intent; distinct routes/formats stay unmapped.
  // Tokyo
  'shibuya-crossing-crossing-photography-tour': 'shibuya-crossing-photography-tour',
  'shibuya-crossing-premium-tour': 'shibuya-crossing-photography-tour',
  'tokyo-tower-premium-tour': 'tokyo-tower-bike-tour',
  // Kyoto — 6 private-tour clones → kyoto-private-tour
  'kyoto-private-tour-heritage': 'kyoto-private-tour',
  'kyoto-people-private-tour-heritage': 'kyoto-private-tour',
  'kyoto-people-private-tour': 'kyoto-private-tour',
  'kyoto-kansai-private-tour': 'kyoto-private-tour',
  'kyoto-nissan-private-tour': 'kyoto-private-tour',
  // Kyoto — evening cluster → kyoto-evening-tour (higashiyama stays: district-specific;
  // kyoto-night-evening-tour and kyoto-walking-evening-tour unmapped 2026-08-28 —
  // they're Fushimi Inari night products with 260+ real reviews, not evening-food dupes)
  'kyoto-evening-evening-tour': 'kyoto-evening-tour',
  'kyoto-photoshoot-photography-tour': 'kyoto-photography-tour',
  'kyoto-food-food-tour': 'kyoto-food-tour',
  'kyoto-around-bike-tour': 'kyoto-bike-tour',
  // Osaka — food clones → osaka-food-tour (osaka-flavors-group-tour unmapped
  // 2026-08-28: 326-review distinct GYG product, not a clone)
  'osaka-food-food-tour': 'osaka-food-tour',
  'osaka-food-tour-tour': 'osaka-food-tour',
  'osaka-foodie-food-tour': 'osaka-food-tour',
  'osaka-walking-walking-tour': 'osaka-walking-tour',
  'osaka-photoshoot-photography-tour': 'osaka-photography-tour',
  'osaka-session-photography-tour': 'osaka-photography-tour',
  // Hiroshima — M2N runs two identically-titled "History of Hiroshima Group
  // Walking Tour" GYG listings; both were imported. One champion. The rest of
  // the Hiroshima catalog was curated at build time — no other genuine dupes.
  'hiroshima-remembered-walking-tour': 'hiroshima-history-walking-tour',

  // ---- THAILAND (2026-08-28): per-city intent consolidation. Champions picked
  // by GSC impressions + proven bookings; branded/distinct products stay unmapped.
  // Bangkok — floating/railway market: 5 pages competed; champion = the proven
  // seller (3 real bookings). Its page is untouched — it only receives signals.
  'damnoen-saduak-market-and-maeklong-railway-market': 'bangkok-maeklong-railway-damnoen-saduak-dragon-temple-tour',
  'floating-market-and-train-market-experience': 'bangkok-maeklong-railway-damnoen-saduak-dragon-temple-tour',
  'maeklong-railway-market-shopping-tour': 'bangkok-maeklong-railway-damnoen-saduak-dragon-temple-tour',
  'bangkok-floating-market-railway-market-day-trip-boat-ride': 'bangkok-maeklong-railway-damnoen-saduak-dragon-temple-tour',
  // Bangkok — Chinatown food-walk clones → the Michelin 15-tastings champion
  'backstreets-food-tour-with-15-tastings': 'bangkok-chinatown-food-tour-15-tastings-michelin-stops',
  'bangkok-authentic-tasting-thai-chinatown-walking-food-tour': 'bangkok-chinatown-food-tour-15-tastings-michelin-stops',
  // Bangkok — tuk-tuk night food cluster
  'bangkok-tuk-tuk-chinatown-street-food-temple-night-tour': 'bangkok-street-food-tuk-tuk-night-tour',
  'song-wat-road-evening-tour': 'bangkok-street-food-tuk-tuk-night-tour',
  // Bangkok — Death Railway/Kanchanaburi same-intent pair
  'kanchanaburi-guided-tour': 'bangkok-death-railway-bridge-river-kwai-hellfire-pass',
  // Bangkok — longtail canal cruise pair
  'museum-siam-boat-tour': 'bangkok-longtail-boat-canal-cruise-hidden-temples',
  // Bangkok — Golden Mount ticket/tour same-product pair
  'wat-saket-entry-ticket': 'wat-saket-guided-tour',
  // Phuket — James Bond Island day-tour clones (private + evening stay: distinct)
  'hong-island-guided-tour': 'james-bond-island-speedboat-tour-phuket',
  // Phuket — bioluminescent Phang Nga pair (89i page is champion)
  'panak-island-boat-tour': 'panak-island-guided-tour',
  // Phuket — Phi Phi day-trip clones (private yacht + Khai variant stay)
  'maya-bay-full-day-tour': 'phi-phi-islands-speedboat-tour-maya-bay-snorkeling',
  'maya-bay-speedboat-boat-tour': 'phi-phi-islands-speedboat-tour-maya-bay-snorkeling',
  // Phuket — same reserve, AM/PM variants
  'hidden-forest-elephant-reserve-afternoon-tour': 'hidden-forest-elephant-reserve-guided-tour',
  // Phuket — identical-title duplicate
  'phuket-amulet-market-painting-walking-tour': 'phuket-amulet-market-walking-tour',
  // Phuket — city/old-town tour pair (half-day → full-day champion)
  'old-town-phuket-guided-tour': 'phuket-old-town-full-day-tour',
  // Pattaya — Koh Larn pair
  'koh-larn-coral-island-guided-tour': 'koh-larn-coral-island-full-day-tour',
  // Krabi — four-islands cluster (premium catamaran + sunset variants stay)
  'chicken-island-guided-tour': 'chicken-island-boat-tour',
  'phra-nang-cave-beach-afternoon-tour': 'chicken-island-boat-tour',
  'phra-nang-cave-beach-boat-tour': 'chicken-island-boat-tour',
  // Krabi — Ao Thalane kayak pair
  'ao-thalane-bay-half-day-tour': 'ao-thalane-guided-tour',
  // Krabi — Hong Island day-tour pair (private + sunset stay)
  'hong-island-boat-tour': 'hong-island-full-day-tour',
  // Krabi — Phi Phi from Krabi pair (sunrise variant stays)
  'maya-bay-adventure-boat-tour': 'maya-bay-islands-full-day-tour',
  // Krabi — four-islands sunset pair (dinner cruise + 7-islands BBQ stay distinct)
  'ao-nang-sunset-sunset-tour': 'chicken-island-sunset-tour',
  // Gap-fills (2026-08-31): three clones the first Thailand pass missed
  'chicken-island-sunset-sunset-tour': 'chicken-island-sunset-tour',
  'bangkok-ayutthaya-day-trip': 'ayutthaya-ancient-temples-day-trip-bangkok-thai-lunch',
  'bangkok-canal-tour': 'bangkok-longtail-boat-canal-cruise-hidden-temples',
  // ---- BALI (2026-09-17): the only true clones in the 934-tour batch are two
  // same-operator double listings (Bali paradise tour) with identical titles.
  // Same-title pages from different operators are left alone.
  'bangli-hidden-gems-waterfall-tour-in-ubud-2': 'bangli-hidden-gems-waterfall-tour-in-ubud',
  'ubud-hidden-gems-waterfall-tour-ubud-2': 'ubud-hidden-gems-waterfall-tour-ubud',
  // ---- JAPAN density batch (2026-09-18): one same-operator double listing.
  'hiroshima-and-miyajima-day-trip-by-bullet-train-2': 'miyajima-trip-full-day-tour',


  // ---- AGRA / DELHI / JAIPUR CANNIBALISATION SWEEP (2026-09-27) ----
  // 805 live pages across the three cities had grown into 95 clusters all
  // chasing the same handful of queries. Most of the duplicates are legacy
  // import slugs whose names no longer describe the product at all
  // (india-gate-historical-heritage-tour is a 5-day Golden Triangle), so the
  // slug was never a safe signal; every pair below was matched on the live
  // title and then read by hand. Champions: an owned tour where one exists,
  // otherwise the page whose slug still matches its own title.
  // Guards that keep products APART: sunrise/sunset/night, private/group,
  // day count, route cities, train/flight/car, ticket-only, food, photo,
  // walking, cycling, tuk-tuk, safari, metro, Mehtab Bagh, Baby Taj.
  // NOT mapped by hand: the Baby Taj + Mehtab Bagh sunset tour (the Friday
  // Special champion also covers Agra Fort, so it is a different itinerary),
  // and the overnight and Fatehpur-only day trips that title-matching tried
  // to fold into the owned Agra & Fatehpur Sikri day trip.
  // Agra: 2 pages on one intent -> agra-delhi-sunrise-tour
  'from-delhi-taj-mahal-sunrise-tour-with-skip-the':
    'agra-delhi-sunrise-tour',
  // Agra: 2 pages on one intent -> agra-fort-expert-guided-tour
  'full-agra-day-city-tour-by-tuk-tuk-w':
    'agra-fort-expert-guided-tour',
  // Agra: 2 pages on one intent -> agra-old-agra-market-street-food-tour-by-tuk
  'agra-street-food-tour-with-spice-market-tuk-tuk':
    'agra-old-agra-market-street-food-tour-by-tuk',
  // Agra: 3 pages on one intent -> agra-skip-the-line-taj-mahal-agra-fort-tour
  'agra-taj-mahal-and-mausoleum-guided-tour-with-skip':
    'agra-skip-the-line-taj-mahal-agra-fort-tour',
  'agra-taj-mahal-mausoleum-skip-the-line-tour-with':
    'agra-skip-the-line-taj-mahal-agra-fort-tour',
  // Agra: 2 pages on one intent -> agra-street-food-spice-bazaars-walking-tour-tuk-tu
  'kinari-bazaar-food-tour':
    'agra-street-food-spice-bazaars-walking-tour-tuk-tu',
  // Agra: 2 pages on one intent -> agra-sunset-tour-of-taj-mahal-with-skip-the
  'taj-mahal-sunset-sunset-tour':
    'agra-sunset-tour-of-taj-mahal-with-skip-the',
  // Agra: 2 pages on one intent -> agra-taj-mahal-agra-fort-baby-taj-guided-day
  'agra-taj-mahal-agra-fort-and-baby-taj-guided':
    'agra-taj-mahal-agra-fort-baby-taj-guided-day',
  // Agra: 2 pages on one intent -> agra-taj-mahal-express-entry-ticket-28-hour
  'agra-taj-mahal-express-entry-ticket':
    'agra-taj-mahal-express-entry-ticket-28-hour',
  // Agra: 2 pages on one intent -> agra-taj-mahal-fast-track-entry-tour-with-expert
  'from-agra-taj-mahal-guided-tour-with-fast-track':
    'agra-taj-mahal-fast-track-entry-tour-with-expert',
  // Agra: 3 pages on one intent -> agra-taj-mahal-skip-the-line-agra-fort-baby
  'agra-skip-the-line-taj-mahal-agra-fort-baby':
    'agra-taj-mahal-skip-the-line-agra-fort-baby',
  'agra-taj-mahal-skip-the-line-agra-fort-and':
    'agra-taj-mahal-skip-the-line-agra-fort-baby',
  // Agra: 3 pages on one intent -> agra-taj-mahal-tour-with-professional-photographer
  'agra-taj-mahal-tour-with-expert-photographer-and-t':
    'agra-taj-mahal-tour-with-professional-photographer',
  'from-agra-taj-mahal-tour-professional-photographer':
    'agra-taj-mahal-tour-with-professional-photographer',
  // Agra: 2 pages on one intent -> agra-taj-mahal-tour-with-professional-photoshoot
  'from-agra-taj-mahal-tour-with-professional-photogr':
    'agra-taj-mahal-tour-with-professional-photoshoot',
  // Agra: 2 pages on one intent -> from-agra-fatehpur-sikri-sightseeing-by-private-ca
  'from-agra-fatehpur-sikri-sightseeing-tour-by-priva':
    'from-agra-fatehpur-sikri-sightseeing-by-private-ca',
  // Agra: 3 pages on one intent -> from-delhi-agra-overnight-tour-with-fatehpur-sikri
  'from-delhi-overnight-agrataj-mahal-tour-with-fateh':
    'from-delhi-agra-overnight-tour-with-fatehpur-sikri',
  'from-delhi-overnight-tajmahalagra-tour-with-fatehp':
    'from-delhi-agra-overnight-tour-with-fatehpur-sikri',
  // Agra: 4 pages on one intent -> from-delhi-private-taj-mahal-agra-tour-with-5
  'agra-mahal-full-day-tour':
    'from-delhi-private-taj-mahal-agra-tour-with-5',
  'from-delhi-private-agra-taj-mahal-tour-with-5lunch':
    'from-delhi-private-taj-mahal-agra-tour-with-5',
  'from-delhi-taj-mahal-agra-private-day-tour-with':
    'from-delhi-private-taj-mahal-agra-tour-with-5',
  // Agra: 3 pages on one intent -> from-delhi-same-day-taj-mahal-tour-by-car
  'from-delhi-all-inclusive-same-day-taj-mahal-tour':
    'from-delhi-same-day-taj-mahal-tour-by-car',
  'from-delhi-taj-mahal-day-trip-with-traditional-ind':
    'from-delhi-same-day-taj-mahal-tour-by-car',
  // Agra: 2 pages on one intent -> from-delhi-same-day-taj-mahal-tour-by-gatiman
  'taj-mahal-tour-from-delhi-by-superfast-train-gatim':
    'from-delhi-same-day-taj-mahal-tour-by-gatiman',
  // Agra: 2 pages on one intent -> from-delhi-same-day-taj-mahal-trip-by-indias
  'taj-mahal-fastest-guided-tour':
    'from-delhi-same-day-taj-mahal-trip-by-indias',
  // Agra: 6 pages on one intent -> from-delhi-taj-mahal-agra-day-tour-with-fatehpur
  'agra-delhi-guided-tour':
    'from-delhi-taj-mahal-agra-day-tour-with-fatehpur',
  'agra-sikri-guided-tour':
    'from-delhi-taj-mahal-agra-day-tour-with-fatehpur',
  'from-delhi-taj-mahal-agra-fort-fatehpur-sikri-in':
    'from-delhi-taj-mahal-agra-day-tour-with-fatehpur',
  'from-delhi-taj-mahal-tour-with-agra-fort-fatehpur':
    'from-delhi-taj-mahal-agra-day-tour-with-fatehpur',
  'from-delhiagra-taj-mahal-agra-fort-fatehpur-sikri-':
    'from-delhi-taj-mahal-agra-day-tour-with-fatehpur',
  // Agra: 4 pages on one intent -> from-delhi-taj-mahal-agra-day-trip-by-superfast
  'agra-mahal-guided-tour':
    'from-delhi-taj-mahal-agra-day-trip-by-superfast',
  'from-delhi-taj-mahal-and-agra-day-tour-by':
    'from-delhi-taj-mahal-agra-day-trip-by-superfast',
  'taj-mahal-superfast-full-day-tour':
    'from-delhi-taj-mahal-agra-day-trip-by-superfast',
  // Agra: 4 pages on one intent -> from-delhi-taj-mahal-agra-private-tour-by-fast
  'from-delhi-private-taj-mahal-agra-tour-by-express':
    'from-delhi-taj-mahal-agra-private-tour-by-fast',
  'from-delhi-private-taj-mahal-agra-tour-by-superfas':
    'from-delhi-taj-mahal-agra-private-tour-by-fast',
  'from-delhi-private-taj-mahal-and-agra-tour-by':
    'from-delhi-taj-mahal-agra-private-tour-by-fast',
  // Agra: 2 pages on one intent -> from-delhi-taj-mahal-agra-tour-with-5-lunch
  'from-delhi-taj-mahal-agra-car-tour-with-guide':
    'from-delhi-taj-mahal-agra-tour-with-5-lunch',
  // Agra: 4 pages on one intent -> from-delhi-taj-mahal-agra-trip-by-gatimaan-express
  'agra-mahal-express-tour':
    'from-delhi-taj-mahal-agra-trip-by-gatimaan-express',
  'from-delhi-taj-mahal-agra-tour-by-gatimaan-express':
    'from-delhi-taj-mahal-agra-trip-by-gatimaan-express',
  'taj-mahal-delhi-express-tour':
    'from-delhi-taj-mahal-agra-trip-by-gatimaan-express',
  // Agra: 2 pages on one intent -> from-delhi-taj-mahal-mathura-vrindavan-private-day
  'taj-mahal-vrindavan-full-day-tour':
    'from-delhi-taj-mahal-mathura-vrindavan-private-day',
  // Agra: 3 pages on one intent -> from-delhi-taj-mahal-sunrise-agra-fort-all-inclusi
  'from-delhi-sunrise-taj-mahal-agra-fort-tour-skip':
    'from-delhi-taj-mahal-sunrise-agra-fort-all-inclusi',
  'from-delhi-taj-mahal-sunrise-agra-fort-tour-skip':
    'from-delhi-taj-mahal-sunrise-agra-fort-all-inclusi',
  // Agra: 3 pages on one intent -> from-delhi-taj-mahal-sunrise-and-agra-fort-private
  'from-delhi-private-taj-mahal-agra-tour-sunrise-opt':
    'from-delhi-taj-mahal-sunrise-and-agra-fort-private',
  'sunrise-taj-mahal-agra-fort-private-tour-from-delh':
    'from-delhi-taj-mahal-sunrise-and-agra-fort-private',
  // Agra: 2 pages on one intent -> from-jaipur-taj-mahal-agra-fort-tour-and-drop
  'from-delhiagrajaipur-taj-mahal-agra-tour-with-opti':
    'from-jaipur-taj-mahal-agra-fort-tour-and-drop',
  // Agra: 2 pages on one intent -> moonlight-taj-mahal-tour-from-yamuna-river-side
  'taj-mahal-moonlight-viewing-tour-from-the-yamuna-r':
    'moonlight-taj-mahal-tour-from-yamuna-river-side',
  // Agra: 2 pages on one intent -> private-same-day-agra-tour-from-mumbai-by-flight
  'agra-fort-mumbai-private-tour':
    'private-same-day-agra-tour-from-mumbai-by-flight',
  // Agra: 2 pages on one intent -> taj-mahal-agra-fort-baby-taj-full-day-trip
  'agra-royal-trip-taj-mahal-agra-fort-baby-taj':
    'taj-mahal-agra-fort-baby-taj-full-day-trip',
  // Agra: 2 pages on one intent -> taj-mahal-agra-private-day-tour-with-lunch
  'agra-taj-mahal-agra-fort-private-tour-with-5lunch':
    'taj-mahal-agra-private-day-tour-with-lunch',
  // Agra: 2 pages on one intent -> taj-mahal-entry-tickets
  'book-entrance-tickets-of-taj-mahal-with-express-en':
    'taj-mahal-entry-tickets',
  // Agra: 4 pages on one intent -> taj-mahal-fatehpur-full-day-tour
  'agra-guided-tour-of-taj-mahal-agra-fort-and':
    'taj-mahal-fatehpur-full-day-tour',
  'agra-taj-mahal-agra-fort-fatehpur-sikri-guided-tou':
    'taj-mahal-fatehpur-full-day-tour',
  'from-agra-half-day-fatehpur-sikri-guided-tour':
    'taj-mahal-fatehpur-full-day-tour',
  // Agra: 2 pages on one intent -> taj-mahal-guided-tour-with-skip-the-line-entry
  'agra-entry-entry-ticket':
    'taj-mahal-guided-tour-with-skip-the-line-entry',
  // Agra: 12 pages on one intent -> taj-mahal-official-guided-tour
  'agra-skip-the-line-taj-mahal-agra-fort-private':
    'taj-mahal-official-guided-tour',
  'agra-skip-the-line-taj-mahal-agra-fort-private-1790336921566-ow4vbn':
    'taj-mahal-official-guided-tour',
  'agra-skip-the-line-taj-mahal-agra-fort-private-experience':
    'taj-mahal-official-guided-tour',
  'agra-skip-the-line-taj-mahal-agra-fort-private-tour':
    'taj-mahal-official-guided-tour',
  'agra-skip-the-line-taj-mahal-agra-private-tour':
    'taj-mahal-official-guided-tour',
  'agra-skip-the-line-taj-mahal-agra-private-tour-tour':
    'taj-mahal-official-guided-tour',
  'agra-taj-mahal-agra-fort-skip-the-line-private':
    'taj-mahal-official-guided-tour',
  'agra-taj-mahal-and-agra-fort-skip-the-line':
    'taj-mahal-official-guided-tour',
  'agra-taj-mahal-skip-the-line-guided-private-3':
    'taj-mahal-official-guided-tour',
  'from-agra-private-taj-mahal-agra-fort-skip-the':
    'taj-mahal-official-guided-tour',
  'taj-mahal-agra-fort-guided-tour':
    'taj-mahal-official-guided-tour',
  // Agra: 16 pages on one intent -> taj-mahal-return-guided-tour
  // was -> taj-mahal-official-guided-tour
  'agra-same-guided-tour':
    'taj-mahal-return-guided-tour',
  'all-inclusive-private-taj-mahal-agra-day-tour-from':
    'taj-mahal-return-guided-tour',
  'from-delhi-agra-private-taj-mahal-fort-day-tour':
    'taj-mahal-return-guided-tour',
  'from-delhi-all-inclusive-agra-taj-mahal-same-day':
    'taj-mahal-return-guided-tour',
  'from-delhi-all-inclusive-taj-mahal-day-tour-with':
    'taj-mahal-return-guided-tour',
  'from-delhi-private-full-day-taj-mahal-agra-city':
    'taj-mahal-return-guided-tour',
  'from-delhi-private-taj-mahal-agra-tour-by-choice':
    'taj-mahal-return-guided-tour',
  'from-delhi-private-taj-mahal-and-agra-day-tour':
    'taj-mahal-return-guided-tour',
  'from-delhi-private-taj-mahal-and-agra-day-trip':
    'taj-mahal-return-guided-tour',
  'from-delhi-same-day-taj-mahal-agra-day-tour':
    'taj-mahal-return-guided-tour',
  'from-delhi-same-day-taj-mahal-agra-day-tour-tour':
    'taj-mahal-return-guided-tour',
  'from-delhi-taj-mahal-agra-fort-private-tour-with':
    'taj-mahal-return-guided-tour',
  'from-delhi-taj-mahal-agra-private-day-trip-w':
    'taj-mahal-return-guided-tour',
  'taj-mahal-delhi-full-day-tour':
    'taj-mahal-return-guided-tour',
  'taj-mahal-meal-guided-tour':
    'taj-mahal-return-guided-tour',
  // Agra: 2 pages on one intent -> taj-mahal-same-guided-tour
  'from-delhi-luxury-same-day-taj-mahal-tour-by':
    'taj-mahal-same-guided-tour',
  // Agra: 2 pages on one intent -> taj-mahal-sunrise-agra-fort-baby-taj-tour-all
  'all-inclusive-sunrise-taj-mahal-agra-fort-baby-taj':
    'taj-mahal-sunrise-agra-fort-baby-taj-tour-all',
  // Agra: 4 pages on one intent -> taj-mahal-sunrise-guided-tour
  'sunrise-taj-mahal-guided-tour-with-skip-the-line':
    'taj-mahal-sunrise-guided-tour',
  'sunrise-taj-mahal-guided-tour-with-skip-the-line-1790335869780-1v9i2d':
    'taj-mahal-sunrise-guided-tour',
  'sunrise-taj-mahal-tour-from-delhi':
    'taj-mahal-sunrise-guided-tour',
  // Delhi: 2 pages on one intent -> 5-day-golden-triangle-tour-with-ranthambore-safari
  'golden-triangle-tour-with-ranthambore-tiger-safari':
    '5-day-golden-triangle-tour-with-ranthambore-safari',
  // Delhi: 3 pages on one intent -> 5-day-historical-golden-triangle-tour-of-india-all
  'delhi-inclusive-heritage-tour':
    '5-day-historical-golden-triangle-tour-of-india-all',
  'india-gate-historical-heritage-tour':
    '5-day-historical-golden-triangle-tour-of-india-all',
  // Delhi: 3 pages on one intent -> 5-days-golden-triangle-tour-delhi-agra-jaipur-high
  'from-delhi-5-days-delhi-agra-jaipur-golden-triangl':
    '5-days-golden-triangle-tour-delhi-agra-jaipur-high',
  'golden-triangle-tour-india-5-days-delhi-agra-and':
    '5-days-golden-triangle-tour-delhi-agra-jaipur-high',
  // Delhi: 2 pages on one intent -> 5-days-golden-triangle-tour-from-delhi
  'classic-golden-triangle-tour-from-delhi-5-days-4':
    '5-days-golden-triangle-tour-from-delhi',
  // Delhi: 2 pages on one intent -> 6-day-private-golden-triangle-varanasi-tour-from-d
  'delhi-varanasi-private-tour':
    '6-day-private-golden-triangle-varanasi-tour-from-d',
  // Delhi: 2 pages on one intent -> 6-days-golden-triangle-tour-explore-delhi-agra-jai
  'golden-triangle-india-tour-6-days-delhi-agra-jaipu':
    '6-days-golden-triangle-tour-explore-delhi-agra-jai',
  // Delhi: 7 pages on one intent -> 6-days-golden-triangle-tour-from-delhi
  '6-day-golden-triangle-tour-delhi-agra-jaipur-highl':
    '6-days-golden-triangle-tour-from-delhi',
  'delhi-6-day-golden-triangle-delhi-agra-and-jaipur':
    '6-days-golden-triangle-tour-from-delhi',
  'delhi-agra-jaipur-6-day-india-golden-triangle-tour':
    '6-days-golden-triangle-tour-from-delhi',
  'delhi-golden-guided-tour':
    '6-days-golden-triangle-tour-from-delhi',
  'delhi-triangle-guided-tour':
    '6-days-golden-triangle-tour-from-delhi',
  'from-delhi-6-day-golden-triangle-tour-delhi-agra':
    '6-days-golden-triangle-tour-from-delhi',
  // Delhi: 2 pages on one intent -> delhi-3-day-private-golden-triangle-experience-wit
  'from-delhi-private-3-day-golden-triangle-tour-with':
    'delhi-3-day-private-golden-triangle-experience-wit',
  // Delhi: 5 pages on one intent -> delhi-4-day-golden-triangle-delhi-agra-and-jaipur
  '4-day-delhi-agra-and-jaipur-tour-india-golden':
    'delhi-4-day-golden-triangle-delhi-agra-and-jaipur',
  '4-day-golden-triangle-tour-delhiagrajaipur':
    'delhi-4-day-golden-triangle-delhi-agra-and-jaipur',
  'delhi-agra-and-jaipur-in-4-days-golden-triangle':
    'delhi-4-day-golden-triangle-delhi-agra-and-jaipur',
  'from-delhi-4-day-golden-triangle-tour-delhi-agra':
    'delhi-4-day-golden-triangle-delhi-agra-and-jaipur',
  // Delhi: 2 pages on one intent -> delhi-akshardham-temple-tour-with-magical-water-sh
  'delhi-akshardham-temple-tour-with-light-and-water-':
    'delhi-akshardham-temple-tour-with-magical-water-sh',
  // Delhi: 6 pages on one intent -> delhi-guided-shopping-tour-female-expert
  'chandni-chowk-shopping-tour':
    'delhi-guided-shopping-tour-female-expert',
  'delhi-guided-shopping-tour-experience-with-expert-':
    'delhi-guided-shopping-tour-female-expert',
  'delhi-guided-shopping-tour-experience-with-female-':
    'delhi-guided-shopping-tour-female-expert',
  'delhi-guided-shopping-tour-with-a-female-expert':
    'delhi-guided-shopping-tour-female-expert',
  'delhi-guided-shopping-tour-with-local-female-exper':
    'delhi-guided-shopping-tour-female-expert',
  // Delhi: 4 pages on one intent -> delhi-private-4-day-golden-triangle-luxury-tour
  'delhi-private-4-day-golden-triangle-tour-with-taj':
    'delhi-private-4-day-golden-triangle-luxury-tour',
  'from-delhi-private-4-day-golden-triangle-luxury-to':
    'delhi-private-4-day-golden-triangle-luxury-tour',
  'from-delhi-private-4-day-golden-triangle-tour-with':
    'delhi-private-4-day-golden-triangle-luxury-tour',
  // Delhi: 2 pages on one intent -> delhi-red-fort-humayuns-tomb-skip-the-line-guided
  'skip-the-line-guided-tour-of-delhis-iconic-red':
    'delhi-red-fort-humayuns-tomb-skip-the-line-guided',
  // Delhi: 2 pages on one intent -> delhi-red-fort-skip-the-line-entry-ticket-guided
  'new-delhi-red-fort-guided-tour-with-entry-ticket':
    'delhi-red-fort-skip-the-line-entry-ticket-guided',
  // Delhi: 2 pages on one intent -> delhi-skip-the-line-humayuns-tomb-tour-with-transf
  'humayuns-tomb-transfers-mini-tour':
    'delhi-skip-the-line-humayuns-tomb-tour-with-transf',
  // Delhi: 2 pages on one intent -> delhi-taj-mahal-sunrise-private-tour-skip-the-line
  'delhi-mahal-sunrise-tour':
    'delhi-taj-mahal-sunrise-private-tour-skip-the-line',
  // Delhi: 2 pages on one intent -> delhi-to-agra-private-day-tour-with-taj-mahal
  'delhi-private-taj-mahalagra-day-tour-with-express-':
    'delhi-to-agra-private-day-tour-with-taj-mahal',
  // Delhi: 7 pages on one intent -> explore-old-new-delhi-city-luxury-car-tour
  'all-inclusive-old-and-new-delhi-full-day-private':
    'explore-old-new-delhi-city-luxury-car-tour',
  'delhi-old-new-delhi-full-day-private-tour-with':
    'explore-old-new-delhi-city-luxury-car-tour',
  'delhi-old-new-delhi-private-full-or-half-day':
    'explore-old-new-delhi-city-luxury-car-tour',
  'delhi-private-full-day-city-tour-of-old-and':
    'explore-old-new-delhi-city-luxury-car-tour',
  'delhi-private-full-or-half-day-old-and-new':
    'explore-old-new-delhi-city-luxury-car-tour',
  'exclusive-private-full-day-guided-tour-of-old-and':
    'explore-old-new-delhi-city-luxury-car-tour',
  // Delhi: 3 pages on one intent -> from-delhi-3-day-all-inclusive-private-golden-tria
  'from-delhi-private-3-day-golden-triangle-luxury-to':
    'from-delhi-3-day-all-inclusive-private-golden-tria',
  'from-delhi-private-3-day-golden-triangle-tour-by':
    'from-delhi-3-day-all-inclusive-private-golden-tria',
  // Delhi: 2 pages on one intent -> from-delhi-delhi-taj-mahal-varanasi-4-day-tour
  'from-delhi-delhi-taj-mahal-varanasi-4-day-tour-1790356869656-0rwcsv':
    'from-delhi-delhi-taj-mahal-varanasi-4-day-tour',
  // Delhi: 6 pages on one intent -> golden-triangle-3-day-tour-from-delhi
  '3-day-delhi-agra-and-jaipur-tour-india-golden':
    'golden-triangle-3-day-tour-from-delhi',
  '3-days-delhi-agra-and-jaipur-tour-india-golden':
    'golden-triangle-3-day-tour-from-delhi',
  'delhi-jaipur-guided-tour':
    'golden-triangle-3-day-tour-from-delhi',
  'from-delhi-3-day-golden-triangle-tour-delhi-agra':
    'golden-triangle-3-day-tour-from-delhi',
  'golden-triangle-tour-delhi-agra-jaipur-in-3-days':
    'golden-triangle-3-day-tour-from-delhi',
  // Delhi: 5 pages on one intent -> golden-triangle-ranthambore-tiger-safari-4-days
  'delhi-4-day-golden-triangle-ranthambore-tiger-safa':
    'golden-triangle-ranthambore-tiger-safari-4-days',
  'delhi-ranthambore-guided-tour':
    'golden-triangle-ranthambore-tiger-safari-4-days',
  'delhi-safari-guided-tour':
    'golden-triangle-ranthambore-tiger-safari-4-days',
  'from-delhi-4-day-golden-triangle-ranthambore-tiger':
    'golden-triangle-ranthambore-tiger-safari-4-days',
  // Delhi: 2 pages on one intent -> mumbai-to-taj-mahal-3-day-trip-with-jaipur
  'mumbai-3-days-taj-mahal-agra-jaipur-sightseeing-to':
    'mumbai-to-taj-mahal-3-day-trip-with-jaipur',
  // Delhi: 2 pages on one intent -> old-delhi-spiritual-sites-temples-private-6-hour-t
  'delhi-temples-tour-5-hour-private-spiritual-experi':
    'old-delhi-spiritual-sites-temples-private-6-hour-t',
  // Delhi: 2 pages on one intent -> taj-mahal-highlights-full-day-tour
  'new-delhi-taj-mahal-day-trip-agra-highlights-with':
    'taj-mahal-highlights-full-day-tour',
  // Delhi: 2 pages on one intent -> taj-mahal-tour-by-train-gatimaan
  'delhi-taj-mahalagra-luxury-tour-by-gatimaan-expres':
    'taj-mahal-tour-by-train-gatimaan',
  // Jaipur: 2 pages on one intent -> from-delhi-all-inclusive-jaipur-tour-with-lunch-tr
  'jaipur-inclusive-guided-tour':
    'from-delhi-all-inclusive-jaipur-tour-with-lunch-tr',
  // Jaipur: 2 pages on one intent -> from-delhi-jaipur-day-tour-by-superfast-train
  'from-delhi-jaipur-day-tour-by-superfast-train-1790460843533-4hzzmc':
    'from-delhi-jaipur-day-tour-by-superfast-train',
  // Jaipur: 7 pages on one intent -> from-delhi-jaipur-day-trip-by-private-car
  'from-delhi-jaipur-day-trip-with-private-car-and':
    'from-delhi-jaipur-day-trip-by-private-car',
  'from-delhi-jaipur-private-guided-day-tour':
    'from-delhi-jaipur-day-trip-by-private-car',
  'from-delhi-private-same-day-jaipur-city-tour-by':
    'from-delhi-jaipur-day-trip-by-private-car',
  'full-day-jaipur-tour-from-delhi-private-all-inclus':
    'from-delhi-jaipur-day-trip-by-private-car',
  'jaipur-day-tour-from-delhi-by-private-car-pink':
    'from-delhi-jaipur-day-trip-by-private-car',
  'private-jaipur-city-tour-from-delhi-by-car':
    'from-delhi-jaipur-day-trip-by-private-car',
  // Jaipur: 2 pages on one intent -> from-delhi-jaipur-private-tour-with-guide-hotel-tr
  'from-delhi-jaipur-private-tour-with-guide-hotel-pi':
    'from-delhi-jaipur-private-tour-with-guide-hotel-tr',
  // Jaipur: 2 pages on one intent -> from-jaipur-private-ranthambore-day-trip-with-tige
  'from-jaipur-private-ranthambore-park-trip-with-tig':
    'from-jaipur-private-ranthambore-day-trip-with-tige',
  // Jaipur: 3 pages on one intent -> from-jaipur-ranthambore-national-park-day-trip-wit
  'park-ranthambore-full-day-tour':
    'from-jaipur-ranthambore-national-park-day-trip-wit',
  'ranthambore-full-day-tour':
    'from-jaipur-ranthambore-national-park-day-trip-wit',
  // Jaipur: 2 pages on one intent -> jaipur-amber-fort-private-tour-with-skip-the-line
  'amber-fort-amber-private-tour':
    'jaipur-amber-fort-private-tour-with-skip-the-line',
  // Jaipur: 2 pages on one intent -> jaipur-amer-fort-jal-mahal-hawa-mahal-half-day
  'jaipur-amer-fort-hawa-mahal-and-jal-mahal-tour':
    'jaipur-amer-fort-jal-mahal-hawa-mahal-half-day',
  // Jaipur: 17 pages on one intent -> jaipur-city-highlights-tour-with-amber-fort-hawa-mahal
  'full-day-jaipur-tour':
    'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'jaipur-city-sightseeing-tour-same-day-trip-by-car':
    'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'jaipur-full-day-city-sightseeing-tour-with-car-and':
    'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'jaipur-fullhalf-day-private-sightseeing-with-guide':
    'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'jaipur-guided-full-day-private-sightseeing-tour-by':
    'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'jaipur-private-full-day-city-sightseeing-tour-with':
    'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'jaipur-private-full-day-sightseeing-by-car':
    'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'jaipur-private-full-day-sightseeing-tour-by-car-wi':
    'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'jaipur-private-full-day-sightseeing-tour-with-car-':
    'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'jaipur-private-full-or-half-day-sightseeing-tour-b':
    'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'jaipur-private-half-day-sightseeing-tour-by-car-wi':
    'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'jaipur-private-halffull-day-sightseeing-by-car-wit':
    'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'jaipur-private-halffull-day-sightseeing-with-car-a':
    'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'jaipur-private-sightseeing-day-tour-with-guide-by-':
    'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'jaipur-sightseeing-full-day-tour':
    'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  'jaipur-sightseeing-half-day-tour':
    'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
  // Jaipur: 2 pages on one intent -> jaipur-cooking-class-with-a-local-family
  'jaipur-authentic-home-cooking-class-with-a-local-f':
    'jaipur-cooking-class-with-a-local-family',
  // Jaipur: 2 pages on one intent -> jaipur-evening-tour-chokhi-dhani-village-culture-w
  'jaipur-cultural-evening-tour-with-dinner-at-chokhi':
    'jaipur-evening-tour-chokhi-dhani-village-culture-w',
  // Jaipur: 2 pages on one intent -> jaipur-guided-shopping-tour-experience-with-female
  'jaipur-shopping-experience-with-female-shopping-ex':
    'jaipur-guided-shopping-tour-experience-with-female',
  // Jaipur: 2 pages on one intent -> jaipur-heritage-walk-street-food-tour
  'heritage-walk-street-food-tasting-in-jaipur':
    'jaipur-heritage-walk-street-food-tour',
  // Jaipur: 4 pages on one intent -> jaipur-private-full-day-sightseeing-tour-by-tuk-tu
  'jaipur-full-day-private-sightseeing-tour-by-tuk-tu':
    'jaipur-private-full-day-sightseeing-tour-by-tuk-tu',
  'jaipur-private-full-day-sightseeing-tour-by-car-or':
    'jaipur-private-full-day-sightseeing-tour-by-tuk-tu',
  'jaipur-private-half-full-day-sightseeing-tour-by-t':
    'jaipur-private-full-day-sightseeing-tour-by-tuk-tu',
  // Jaipur: 6 pages on one intent -> jaipur-private-luxury-full-day-city-tour-by-car
  'jaipur-full-or-half-day-private-city-tour-with':
    'jaipur-private-luxury-full-day-city-tour-by-car',
  'jaipur-private-full-or-half-day-city-tour-by':
    'jaipur-private-luxury-full-day-city-tour-by-car',
  'jaipur-private-half-day-or-full-day-jaipur-city':
    'jaipur-private-luxury-full-day-city-tour-by-car',
  'jaipur-private-jaipur-full-or-half-day-guided-tour':
    'jaipur-private-luxury-full-day-city-tour-by-car',
  'jaipur-private-jaipur-guided-full-or-half-day-tour':
    'jaipur-private-luxury-full-day-city-tour-by-car',
  // Jaipur: 3 pages on one intent -> jaipur-same-day-tour-from-delhi
  'from-delhi-all-inclusive-same-day-jaipur-tour-by':
    'jaipur-same-day-tour-from-delhi',
  'from-delhi-jaipur-same-day-tour':
    'jaipur-same-day-tour-from-delhi',
  // Jaipur: 2 pages on one intent -> jaipur-wild-leopard-safari-in-jhalana-or-amagarh-b
  'jaipur-jhalana-amagarh-leopard-reserve-44-jeep-saf':
    'jaipur-wild-leopard-safari-in-jhalana-or-amagarh-b',
  // Jaipur: 4 pages on one intent -> private-full-day-jaipur-city-tour-with-hotel-pick
  'jaipur-private-city-guided-tour-with-hotel-pick-up':
    'private-full-day-jaipur-city-tour-with-hotel-pick',
  'jaipur-private-city-tour-with-hotel-pick-up-drop':
    'private-full-day-jaipur-city-tour-with-hotel-pick',
  'jaipur-private-guided-city-tour-with-hotel-pickup-':
    'private-full-day-jaipur-city-tour-with-hotel-pick',
};

export const canonicalSlugFor = (slug: string) => DUPLICATE_CANONICAL_MAP[slug] || slug;
export const isDuplicateSlug = (slug: string) => slug in DUPLICATE_CANONICAL_MAP;
