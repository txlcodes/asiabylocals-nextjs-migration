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
  'taj-mahal-fatehpur-guided-tour':
    'agra-guided-tour-of-taj-mahal-agra-fort-and',

  // ---- SWEEP (2026-09-16): title-similarity pass over every city, then read
  // by hand. Only same-product pages are mapped; different day counts,
  // opposite transfer directions, sunrise vs sunset, and different boats in a
  // cruise fleet all stay unmapped. Cheaper page wins unless the other is an
  // owned tour.
  // Da Nang: Marble Mountain + Monkey Mountain + Am Phu Cave, three listings
  // Hoi An: My Son + Marble Mountains day trip, $60 vs $29
  'marble-mountains-and-my-son-sanctuary-day-trip-in-hoi-an':
    'my-son-sanctuary-and-marble-mountains-guided-tour-in-hoi-an',
  // HCMC: Cu Chi + Mekong + coconut village
  'cu-chi-tunnels-and-mekong-delta-with-coconut-village-tour-ho-chi-minh-city':
    'hcm-cu-chi-tunnels-mekong-delta-and-coconut-village-tour-ho-chi-minh-city',
  // Hanoi: TripBestie listed the same 3-day Ha Giang loop twice
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
  'taj-mahal-sunrise-elephant-conservation-tour':
    'sunrise-taj-mahal-tour-delhi-all-inclusive',
  // Delhi: one more Old+New Delhi city tour the 2026-08-25 pass missed
  'india-gate-full-day-tour':
    'old-new-delhi-private-tour',
  // Mumbai: same-day and overnight Taj by flight, two operators each
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
  'old-delhi-new-delhi-trails-private-tour':
    'old-new-delhi-private-tour',
  'delhi-old-new-delhi-private-full-half-day-tour':
    'old-new-delhi-private-tour',
  'old-new-delhi-private-half-day-tour':
    'old-new-delhi-private-tour',
  'old-new-delhi-guided-tour':
    'old-new-delhi-private-tour',
  'delhi-full-day-guided-tour':
    'old-new-delhi-private-tour',
  'delhi-sightseeing-half-day-tour':
    'old-new-delhi-private-tour',
  'delhi-same-day-sightseeing-tour':
    'old-new-delhi-private-tour',
  // Taj-from-Delhi-by-car intent → private-taj-mahal-tour-from-delhi (owned)
  'delhi-agra-private-tour': 'private-taj-mahal-tour-from-delhi',
  'private-taj-mahal-agra-day-tour-from-delhi': 'private-taj-mahal-tour-from-delhi',
  'taj-mahal-agra-day-trip-luxury-car': 'private-taj-mahal-tour-from-delhi',
  // Taj-by-train intent → taj-mahal-tour-by-train-gatimaan (owned)
  'taj-mahal-same-day-express-train-tour': 'taj-mahal-tour-by-train-gatimaan',
  'hazrat-nizamuddin-railway-station-delhi-express-tour': 'taj-mahal-tour-by-train-gatimaan',
  // Sunrise-from-Delhi intent → taj-mahal-delhi-sunrise-tour (crowned; no owned equivalent)
  'delhi-agra-sunrise-tour':
    'sunrise-taj-mahal-tour-delhi-all-inclusive',
  // Golden Triangle generic → golden-triangle-3-day-tour-from-delhi (owned; day-count and
  // safari variants are distinct products and stay unmapped)
  'golden-triangle-tour-delhi-agra-jaipur': 'golden-triangle-3-day-tour-from-delhi',
  // India Gate intent → india-gate-guided-tour (airport-layover variant stays — distinct)
  'india-gate-approved-guided-tour': 'india-gate-guided-tour',
  'india-gate-triangle-guided-tour': 'india-gate-guided-tour',
  // Delhi→Jaipur day trip → delhi-to-jaipur-same-day-tour-by-car

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
  // Phuket — James Bond Island day-tour clones (private + evening stay: distinct)
  'hong-island-guided-tour': 'james-bond-island-speedboat-tour-phuket',
  // Phuket — bioluminescent Phang Nga pair (89i page is champion)
  // Phuket — Phi Phi day-trip clones (private yacht + Khai variant stay)
  'maya-bay-full-day-tour': 'phi-phi-islands-speedboat-tour-maya-bay-snorkeling',
  'maya-bay-speedboat-boat-tour': 'phi-phi-islands-speedboat-tour-maya-bay-snorkeling',
  // Phuket — same reserve, AM/PM variants
  // Phuket — identical-title duplicate
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
  // Agra: 2 pages on one intent -> taj-mahal-entry-tickets
  'book-entrance-tickets-of-taj-mahal-with-express-en':
    'taj-mahal-entry-tickets',
  // Agra: 4 pages on one intent -> taj-mahal-fatehpur-full-day-tour
  'agra-taj-mahal-agra-fort-fatehpur-sikri-guided-tou':
    'agra-guided-tour-of-taj-mahal-agra-fort-and',
  'from-agra-half-day-fatehpur-sikri-guided-tour':
    'agra-guided-tour-of-taj-mahal-agra-fort-and',
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
    'old-new-delhi-private-tour',
  'delhi-old-new-delhi-full-day-private-tour-with':
    'old-new-delhi-private-tour',
  'delhi-old-new-delhi-private-full-or-half-day':
    'old-new-delhi-private-tour',
  'delhi-private-full-day-city-tour-of-old-and':
    'old-new-delhi-private-tour',
  'delhi-private-full-or-half-day-old-and-new':
    'old-new-delhi-private-tour',
  'exclusive-private-full-day-guided-tour-of-old-and':
    'old-new-delhi-private-tour',
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
    'from-delhi-4-day-golden-triangle-ranthambore-tiger',
  'delhi-ranthambore-guided-tour':
    'from-delhi-4-day-golden-triangle-ranthambore-tiger',
  'delhi-safari-guided-tour':
    'from-delhi-4-day-golden-triangle-ranthambore-tiger',
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

  // ---- CATALOGUE-WIDE SWEEP (2026-09-27) ----
  // Same pass as the Agra/Delhi/Jaipur one, run over all 6,420 live tours.
  // 126 duplicates across Vietnam, Indonesia, Japan, Thailand and Sri Lanka.
  // Two guards did most of the work here. A proper-noun guard keeps products
  // apart when either title carries a distinctive name the other lacks, which
  // is what separates Le Journey from Amanda in the Ha Long fleet and the
  // Colosseum cabaret from Tiffany's in Pattaya. A feature guard does the same
  // for swing, monkey forest, snowmobile, yacht, watersports, Cat Ba, quad,
  // rafting, diving, onsen, and a guide who speaks a named language.
  // 15 more pairs were dropped by hand after reading all 141 candidates:
  // star ratings inside one fleet, 60 vs 90 minute spas, 4 vs 24 hour bus
  // passes, opposite transfer directions, and one itinerary that adds Cu Chi.
  // Nothing absorbed here has a review or a booking on it.
  // Indonesia / Nusa Penida: 2 pages -> nusa-penida-day-tour-and-snorkeling
  'nusa-penida-snorkeling-day-trip':
    'nusa-penida-day-tour-and-snorkeling',
  // Indonesia / Ubud: 2 pages -> bangli-hidden-gems-waterfall-tour-in-ubud
  'bangli-hidden-gems-waterfall-tour-in-ubud-2':
    'bangli-hidden-gems-waterfall-tour-in-ubud',
  // Indonesia / Ubud: 2 pages -> east-bali-private-tour-with-lempuyang-temple-2
  'east-bali-private-tour-with-lempuyang-temple':
    'east-bali-private-tour-with-lempuyang-temple-2',
  // Indonesia / Ubud: 2 pages -> jungle-swing-rice-terrace-and-waterfall-experience-in-ubud
  'ubud-jungle-swing-rice-terrace-and-waterfall-tour':
    'jungle-swing-rice-terrace-and-waterfall-experience-in-ubud',
  // Indonesia / Ubud: 2 pages -> kuber-atv-quad-bike-with-long-tunnel-and-waterfall-in-ubud
  'ubud-bali-kuber-atv-quad-bike-with-long-tunnel-and-waterfalls-ubud':
    'kuber-atv-quad-bike-with-long-tunnel-and-waterfall-in-ubud',
  // Indonesia / Ubud: 2 pages -> mount-agung-sunrise-trekking-all-inclusive-tour-in-ubud
  'mount-agung-sunrise-trekking-tour-in-ubud':
    'mount-agung-sunrise-trekking-all-inclusive-tour-in-ubud',
  // Indonesia / Ubud: 2 pages -> mount-agung-sunrise-trekking-with-breakfast-all-inclusive-in-ubud
  'mount-agung-sunrise-trekking-with-breakfast-in-ubud':
    'mount-agung-sunrise-trekking-with-breakfast-all-inclusive-in-ubud',
  // Indonesia / Ubud: 2 pages -> mount-batur-sunrise-trekking-and-breakfast-tour
  'mount-batur-sunrise-jeep-trekking-or-combo-with-breakfast-ubud':
    'mount-batur-sunrise-trekking-and-breakfast-tour',
  // Indonesia / Ubud: 3 pages -> snorkeling-at-blue-lagoon-and-tanjung-jepun-all-inclusive-in-ubud
  'all-inclusive-blue-lagoon-and-tanjung-jepun-snorkeling-in-ubud':
    'snorkeling-at-blue-lagoon-and-tanjung-jepun-all-inclusive-in-ubud',
  'blue-lagoon-and-tanjung-jepun-snorkeling-tour-in-ubud':
    'snorkeling-at-blue-lagoon-and-tanjung-jepun-all-inclusive-in-ubud',
  // Indonesia / Ubud: 3 pages -> snorkeling-at-blue-lagoon-and-waterfall-all-inclusive-in-ubud
  'blue-lagoon-snorkeling-temple-and-waterfall-tour-in-ubud':
    'snorkeling-at-blue-lagoon-and-waterfall-all-inclusive-in-ubud',
  'blue-lagoon-snorkeling-with-option-waterfall-and-temple-in-ubud':
    'snorkeling-at-blue-lagoon-and-waterfall-all-inclusive-in-ubud',
  // Indonesia / Ubud: 2 pages -> snorkeling-menjangan-island-tours-in-ubud
  'menjangan-island-snorkeling-tour-with-transport-in-ubud':
    'snorkeling-menjangan-island-tours-in-ubud',
  // Indonesia / Ubud: 3 pages -> tirta-empul-purification-ritual-and-temple-tour-in-ubud
  'tirta-empul-temple-purification-ritual-with-guide-in-ubud':
    'tirta-empul-purification-ritual-and-temple-tour-in-ubud',
  'tirta-empul-temple-tour-and-sacred-purification-ritual-in-ubud':
    'tirta-empul-purification-ritual-and-temple-tour-in-ubud',
  // Indonesia / Ubud: 2 pages -> ubud-hidden-gems-waterfall-tour-ubud
  'ubud-hidden-gems-waterfall-tour-ubud-2':
    'ubud-hidden-gems-waterfall-tour-ubud',
  // Indonesia / Ubud: 2 pages -> ubud-private-tour-swing-rice-terrace-temple-and-waterfalls-ubud
  'private-tour-to-3-waterfalls-rice-terrace-and-swing-in-ubud':
    'ubud-private-tour-swing-rice-terrace-temple-and-waterfalls-ubud',
  // Indonesia / Ubud: 4 pages -> ubud-private-tour-with-waterfall-and-rice-terrace-ubud
  'private-tour-with-rice-terrace-temple-and-waterfall-in-ubud':
    'ubud-private-tour-with-waterfall-and-rice-terrace-ubud',
  'ubud-private-tour-with-waterfall-temple-and-rice-terrace-ubud':
    'ubud-private-tour-with-waterfall-and-rice-terrace-ubud',
  'ubud-temple-waterfalls-and-rice-terrace-private-to':
    'ubud-private-tour-with-waterfall-and-rice-terrace-ubud',
  // Indonesia / Ubud: 3 pages -> waterfall-rice-terrace-temple-and-monkey-forest-tour-in-ubud
  'monkey-forest-temple-waterfall-and-rice-terrace-tour-in-ubud':
    'waterfall-rice-terrace-temple-and-monkey-forest-tour-in-ubud',
  'monkey-forest-waterfall-and-rice-terrace-tour-in-ubud':
    'waterfall-rice-terrace-temple-and-monkey-forest-tour-in-ubud',
  // Indonesia / Uluwatu: 3 pages -> uluwatu-temple-and-kecak-fire-dance-sunset-experience-uluwatu
  'uluwatu-temple-sunset-tour-with-kecak-fire-dance':
    'uluwatu-temple-and-kecak-fire-dance-sunset-experience-uluwatu',
  'uluwatu-temple-tour-with-sunset-kecak-fire-dance':
    'uluwatu-temple-and-kecak-fire-dance-sunset-experience-uluwatu',
  // Japan / Hiroshima: 2 pages -> miyajima-trip-full-day-tour
  'hiroshima-and-miyajima-day-trip-by-bullet-train-2-2':
    'miyajima-trip-full-day-tour',
  // Japan / Kyoto: 2 pages -> amanohashidate-and-ine-funaya-and-ine-bay-day-tour-in-kyoto
  'amanohashidate-and-ine-funaya-day-tour-in-kyoto':
    'amanohashidate-and-ine-funaya-and-ine-bay-day-tour-in-kyoto',
  // Japan / Kyoto: 2 pages -> fushimi-sake-brewery-tour-18-tastings-in-2-5-hours
  'fushimi-sake-tour-with-brewery-visit-and-tastings':
    'fushimi-sake-brewery-tour-18-tastings-in-2-5-hours',
  // Japan / Kyoto: 2 pages -> gion-hidden-gems-and-geisha-culture-tour
  'gion-hidden-gems-and-geisha-culture-guided-tour':
    'gion-hidden-gems-and-geisha-culture-tour',
  // Japan / Kyoto: 2 pages -> gion-private-photoshoot-professional-and-guided-tour
  'gion-private-professional-photoshoot':
    'gion-private-photoshoot-professional-and-guided-tour',
  // Japan / Kyoto: 2 pages -> ring-making-workshop-with-vintage-coin-in-kyoto
  'vintage-coin-ring-making-workshop-with-in-kyoto':
    'ring-making-workshop-with-vintage-coin-in-kyoto',
  // Japan / Mount Fuji: 2 pages -> mount-fuji-private-tour-with-english-guide-3-2
  'mount-fuji-english-private-tour':
    'mount-fuji-private-tour-with-english-guide-3-2',
  // Japan / Nagoya: 2 pages -> takayama-and-shirakawa-go-day-tour-from-nagoya-by-local-operator
  'shirakawa-go-and-takayama-day-tour-from-nagoya-by-local-operator':
    'takayama-and-shirakawa-go-day-tour-from-nagoya-by-local-operator',
  // Japan / Nara: 2 pages -> great-buddha-kasuga-shrine-and-sacred-deer-tour-in-nara
  'great-buddha-kasuga-shrine-and-deer-park-tour-in-nara':
    'great-buddha-kasuga-shrine-and-sacred-deer-tour-in-nara',
  // Japan / Nara: 2 pages -> kyoto-and-nara-small-group-tour-with-temples-and-deer-park
  'kyoto-temples-and-nara-deer-park-small-group-tour':
    'kyoto-and-nara-small-group-tour-with-temples-and-deer-park',
  // Japan / Osaka: 2 pages -> katsuo-ji-temple-kobe-and-arima-onsen-day-trip-2
  'temple-katsuo-full-day-tour':
    'katsuo-ji-temple-kobe-and-arima-onsen-day-trip-2',
  // Japan / Tokyo: 2 pages -> asakusa-walking-tour-with-sensoji-temple-visit
  'asakusa-and-sensoji-walking-tour':
    'asakusa-walking-tour-with-sensoji-temple-visit',
  // Japan / Tokyo: 2 pages -> imperial-palace-and-shogun-walking-tour-in-tokyo
  'imperial-palace-and-shogun-walking-tour-with-a-local-guide-in-tokyo':
    'imperial-palace-and-shogun-walking-tour-in-tokyo',
  // Japan / Tokyo: 2 pages -> sushi-making-with-pro-chef-and-tsukiji-fish-market-tour
  'tsukiji-fish-market-sushi-making-class-with-pro-chef':
    'sushi-making-with-pro-chef-and-tsukiji-fish-market-tour',
  // Japan / Tokyo: 2 pages -> tokyo-tsukiji-fish-market-street-food-and-walking-tour-by-local-operator-2
  'tokyo-tower-walking-food-tour':
    'tokyo-tsukiji-fish-market-street-food-and-walking-tour-by-local-operator-2',
  // Sri Lanka / Colombo: 2 pages -> udawalawe-elephant-safari-transit-home-private-day-trip
  'private-udawalawe-elephant-safari-day-trip-transit-home-visit':
    'udawalawe-elephant-safari-transit-home-private-day-trip',
  // Thailand / Bangkok: 2 pages -> bangkok-grand-palace-wat-pho-wat-arun-guided-tour
  'grand-palace-wat-arun-and-wat-pho-guided-tour':
    'bangkok-grand-palace-wat-pho-wat-arun-guided-tour',
  // Thailand / Bangkok: 2 pages -> golden-dome-cabaret-show-entry-ticket-in-bangkok-2
  'bangkok-cabaret-entry-ticket':
    'golden-dome-cabaret-show-entry-ticket-in-bangkok-2',
  // Thailand / Bangkok: 2 pages -> royal-princess-river-dinner-cruise-with-live-music-in-bangkok-2
  'bangkok-royal-boat-tour':
    'royal-princess-river-dinner-cruise-with-live-music-in-bangkok-2',
  // Thailand / Chiang Mai: 2 pages -> white-temple-blue-red-temples-and-lalitta-cafe-in-chiang-mai
  'lalitta-cafe-and-white-blue-red-temples-tour-in-chiang-mai':
    'white-temple-blue-red-temples-and-lalitta-cafe-in-chiang-mai',
  // Thailand / Krabi: 2 pages -> phi-phi-island-tour-by-speedboat-with-buffet-lunch
  'phi-phi-islands-speedboat-tour-with-buffet-lunch':
    'phi-phi-island-tour-by-speedboat-with-buffet-lunch',
  // Thailand / Pattaya: 2 pages -> pattaya-sina-floating-beach-club-experience
  'sina-floating-beach-club-in-pattaya':
    'pattaya-sina-floating-beach-club-experience',
  // Thailand / Pattaya: 2 pages -> the-sanctuary-of-truth-admission-ticket-in-pattaya-2
  'sanctuary-of-truth-sanctuary-entry-ticket':
    'the-sanctuary-of-truth-admission-ticket-in-pattaya-2',
  // Thailand / Phuket: 2 pages -> all-inclusive-cheow-lan-lake-cave-kayak-and-lunch-in-phuket-2
  'phuket-cheow-guided-tour':
    'all-inclusive-cheow-lan-lake-cave-kayak-and-lunch-in-phuket-2',
  // Thailand / Phuket: 2 pages -> james-bond-and-sea-cave-canoeing-by-big-boat
  'james-bond-island-by-big-boat-with-sea-cave-canoeing':
    'james-bond-and-sea-cave-canoeing-by-big-boat',
  // Thailand / Phuket: 2 pages -> james-bond-island-and-phang-nga-bay-by-speedboat
  'james-bond-and-phang-nga-bay-tour-by-speedboat':
    'james-bond-island-and-phang-nga-bay-by-speedboat',
  // Thailand / Phuket: 3 pages -> james-bond-island-speedboat-tour-phuket
  'james-bond-island-by-speedboat-w-canoeing-and-lunch':
    'james-bond-island-speedboat-tour-phuket',
  'james-bond-island-canoeing-tour-by-speedboat-lunch':
    'james-bond-island-speedboat-tour-phuket',
  // Thailand / Phuket: 2 pages -> phi-phi-maya-bay-and-khai-islands-day-trip
  'phi-phi-maya-bay-and-khai-island-speedboat-day-tour':
    'phi-phi-maya-bay-and-khai-islands-day-trip',
  // Thailand / Phuket: 2 pages -> racha-islands-day-tour-with-snorkel-beach-and-lunch-2
  'patong-beach-islands-guided-tour':
    'racha-islands-day-tour-with-snorkel-beach-and-lunch-2',
  // Vietnam / Da Nang: 3 pages -> ba-na-hills-and-golden-bridge-day-trip
  'ba-na-hills-and-golden-bridge-day-trip-2':
    'ba-na-hills-and-golden-bridge-day-trip',
  'golden-bridge-ba-na-hills-day-tour-in-da-nang':
    'ba-na-hills-and-golden-bridge-day-trip',
  // Vietnam / Da Nang: 2 pages -> ba-na-hills-golden-bridge-and-marble-mountains
  'golden-bridge-ba-na-hills-and-marble-mountains-in-da-nang':
    'ba-na-hills-golden-bridge-and-marble-mountains',
  // Vietnam / Da Nang: 3 pages -> best-tours-transfer-to-bana-hills-and-golden-bridge-da-nang-2
  'best-tours-transfer-to-bana-hills-and-golden-bridg':
    'best-tours-transfer-to-bana-hills-and-golden-bridge-da-nang-2',
  'bridge-transfer-guided-tour':
    'best-tours-transfer-to-bana-hills-and-golden-bridge-da-nang-2',
  // Vietnam / Da Nang: 5 pages -> marble-mountain-am-phu-cave-and-lady-buddha
  'lady-buddha-marble-mountains-am-phu-cave-tour':
    'marble-mountain-am-phu-cave-and-lady-buddha',
  'lady-buddha-marble-mountains-and-am-phu-cave-in-da-nang':
    'marble-mountain-am-phu-cave-and-lady-buddha',
  'marble-mountains-lady-buddha-and-am-phu-cave':
    'marble-mountain-am-phu-cave-and-lady-buddha',
  'marble-mountains-lady-buddha-and-am-phu-cave-tour-da-nang':
    'marble-mountain-am-phu-cave-and-lady-buddha',
  // Vietnam / Da Nang: 3 pages -> monkey-mountain-marble-mountain-am-phu-cave-in-da-nang
  'marble-mountain-am-phu-cave-monkey-mountain-in-da-nang':
    'monkey-mountain-marble-mountain-am-phu-cave-in-da-nang',
  'marble-mountain-monkey-mountain-and-am-phu-cave-tour-in-da-nang':
    'monkey-mountain-marble-mountain-am-phu-cave-in-da-nang',
  // Vietnam / Ha Long: 2 pages -> 2-day-lan-ha-bay-cruise-with-meals-and-activities
  'lan-ha-bay-2-day-cruise-with-meals-and-activities':
    '2-day-lan-ha-bay-cruise-with-meals-and-activities',
  // Vietnam / Ha Long: 2 pages -> 2-day-ninh-binh-and-ha-long-bay-all-inclusive
  'combo-ninh-binh-tour-and-ha-long-bay-tour-in-2-day':
    '2-day-ninh-binh-and-ha-long-bay-all-inclusive',
  // Vietnam / Ha Long: 2 pages -> 2-days-lan-ha-bay-cruise-cat-ba-island
  '2day-lan-ha-bay-cruise-cat-ba-island':
    '2-days-lan-ha-bay-cruise-cat-ba-island',
  // Vietnam / Ha Long: 3 pages -> 2-days-lan-ha-bay-hiking-biking-kayaking-2
  '2-days-lan-ha-bay-hiking-biking-kayaking':
    '2-days-lan-ha-bay-hiking-biking-kayaking-2',
  'ha-long-kayaking-adventure-tour':
    '2-days-lan-ha-bay-hiking-biking-kayaking-2',
  // Vietnam / Ha Long: 3 pages -> 3-day-lan-ha-bay-cruise-cat-ba-island
  '3-day-cat-ba-island-and-lan-ha-bay-cruise-with-meals':
    '3-day-lan-ha-bay-cruise-cat-ba-island',
  'lan-ha-bay-and-cat-ba-island-3-day-boat-cruise':
    '3-day-lan-ha-bay-cruise-cat-ba-island',
  // Vietnam / Ha Long: 2 pages -> cat-ba-island-and-lan-ha-bay-day-trip-with-cruise
  'ha-long-bay-to-lan-ha-bay-cat-ba-island-day-tour':
    'cat-ba-island-and-lan-ha-bay-day-trip-with-cruise',
  // Vietnam / Ha Long: 2 pages -> ha-long-bay-1-or-2-day-5-star-cruise
  '2-days-ha-long-bay-5-star-cruise':
    'ha-long-bay-1-or-2-day-5-star-cruise',
  // Vietnam / Ha Long: 2 pages -> ha-long-bay-2-day-1-night-or-3-day-2-night-on-a-luxury-cruise
  'ha-long-bay-on-a-luxury-6-star-cruise-2-day-1-night-and-3-day-2-night':
    'ha-long-bay-2-day-1-night-or-3-day-2-night-on-a-luxury-cruise',
  // Vietnam / Ha Long: 2 pages -> ha-long-bay-day-trip-luxury-cruise
  'ha-long-bay-day-trip-with-luxury-cruise':
    'ha-long-bay-day-trip-luxury-cruise',
  // Vietnam / Ha Long: 3 pages -> ha-long-bay-day-trip-luxury-cruise-and-buffet-lunch-2
  'ha-long-bay-day-trip-luxury-cruise-and-buffet':
    'ha-long-bay-day-trip-luxury-cruise-and-buffet-lunch-2',
  'ha-long-luxury-full-day-tour':
    'ha-long-bay-day-trip-luxury-cruise-and-buffet-lunch-2',
  // Vietnam / Ha Long: 2 pages -> ha-long-bay-luxury-cruise-cave-kayak-and-titop-island-by-local-operator
  'ha-long-bay-luxury-day-cruise-with-cave-kayak-titop-island-by-local-operator':
    'ha-long-bay-luxury-cruise-cave-kayak-and-titop-island-by-local-operator',
  // Vietnam / Ha Long: 2 pages -> halong-bay-2-day-1-night-cruise
  '2-day-and-1-night-halong-bay-tour':
    'halong-bay-2-day-1-night-cruise',
  // Vietnam / Ha Long: 3 pages -> luxury-lan-ha-bay-cruise-on-2-day-1-night-or-3-day-2-night
  'ha-long-bay-and-lan-ha-bay-2-day-1-night-or-3-day-2-night-with-a-luxury-cruise':
    'luxury-lan-ha-bay-cruise-on-2-day-1-night-or-3-day-2-night',
  'ha-long-bay-and-lan-ha-bay-luxury-cruise-2-days-1-night':
    'luxury-lan-ha-bay-cruise-on-2-day-1-night-or-3-day-2-night',
  // Vietnam / Ha Long: 2 pages -> my-son-sanctuary-thu-bon-river-cruise-from-hoi-an-ha-long
  'my-son-sanctuary-and-thu-bon-river-cruise-from-hoi-an-ha-long':
    'my-son-sanctuary-thu-bon-river-cruise-from-hoi-an-ha-long',
  // Vietnam / Ha Long: 2 pages -> visit-ha-long-bay-on-a-luxury-6-star-cruise-for-2-day-1-night-or-3-day-2-night
  'ha-long-bay-2-day-1-night-or-3-day-2-night-with-a-6-star-cruise':
    'visit-ha-long-bay-on-a-luxury-6-star-cruise-for-2-day-1-night-or-3-day-2-night',
  // Vietnam / Ha Long: 2 pages -> water-puppet-show-and-luxury-dinner-cruise-experience-in-ha-long
  'water-puppet-show-and-dinner-cruise-in-ha-long':
    'water-puppet-show-and-luxury-dinner-cruise-experience-in-ha-long',
  // Vietnam / Hanoi: 2 pages -> 3-day-ha-giang-loop-with-safe-rider-max-8-pax-3-3
  '3-day-ha-giang-loop-w-safe-rider-max-8pax':
    '3-day-ha-giang-loop-with-safe-rider-max-8-pax-3-3',
  // Vietnam / Hanoi: 2 pages -> 4-day-ha-giang-loop-w-safe-rider-max-8pax-in-hanoi
  '4-day-ha-giang-loop-w-safe-rider-max-8-pax-2-2':
    '4-day-ha-giang-loop-w-safe-rider-max-8pax-in-hanoi',
  // Vietnam / Hanoi: 2 pages -> guided-street-food-tour-with-train-street-experience-in-hanoi
  'guided-food-tour-with-train-street-visit-in-hanoi':
    'guided-street-food-tour-with-train-street-experience-in-hanoi',
  // Vietnam / Hanoi: 2 pages -> vegan-local-street-food-and-train-street-in-hanoi
  'hanoi-vegan-street-food-and-train-street-tour-hanoi':
    'vegan-local-street-food-and-train-street-in-hanoi',
  // Vietnam / Hanoi: 2 pages -> water-puppet-show-tickets-skip-the-line-in-hanoi
  'water-puppet-show-skip-the-line-entry-ticket-in-hanoi':
    'water-puppet-show-tickets-skip-the-line-in-hanoi',
  // Vietnam / Ho Chi Minh City: 2 pages -> city-highlights-and-unseen-tour-in-ho-chi-minh-city
  'city-unseen-highlights-2h-tour-in-ho-chi-minh-city':
    'city-highlights-and-unseen-tour-in-ho-chi-minh-city',
  // Vietnam / Ho Chi Minh City: 2 pages -> cu-chi-tunnels-and-mekong-delta-day-trip
  'cu-chi-tunnels-and-mekong-delta-day-tour':
    'cu-chi-tunnels-and-mekong-delta-day-trip',
  // Vietnam / Ho Chi Minh City: 2 pages -> cu-chi-tunnels-and-mekong-delta-history-river-life-and-culture-ho-chi-minh-city
  'cu-chi-tunnels-and-mekong-delta-history-culture-and-river-life-ho-chi-minh-city':
    'cu-chi-tunnels-and-mekong-delta-history-river-life-and-culture-ho-chi-minh-city',
  // Vietnam / Ho Chi Minh City: 2 pages -> cu-chi-tunnels-guided-tour-2
  'cu-chi-tunnels-tunnels-guided-tour':
    'cu-chi-tunnels-guided-tour-2',
  // Vietnam / Ho Chi Minh City: 2 pages -> discover-cu-chi-tunnels-morning-afternoon-tour-ho-chi-minh-city
  'cu-chi-tunnels-morning-or-afternoon-tour-in-ho-chi-minh-city':
    'discover-cu-chi-tunnels-morning-afternoon-tour-ho-chi-minh-city',
  // Vietnam / Ho Chi Minh City: 2 pages -> hcm-mekong-delta-my-tho-and-ben-tre-coconut-village-ho-chi-minh-city
  'hcm-mekong-delta-my-tho-and-ben-tre-coconut':
    'hcm-mekong-delta-my-tho-and-ben-tre-coconut-village-ho-chi-minh-city',
  // Vietnam / Ho Chi Minh City: 2 pages -> ho-chi-minh-city-history-and-culture-half-day-tour-by-local-operator
  'ho-chi-minh-city-half-day-tour-markets-history-and-culture-by-local-operator':
    'ho-chi-minh-city-history-and-culture-half-day-tour-by-local-operator',
  // Vietnam / Ho Chi Minh City: 3 pages -> kisstour-in-ho-chi-minh-city-3
  'cu-chi-tunnels-kisstour-guided-tour':
    'kisstour-in-ho-chi-minh-city-3',
  'ho-chi-minh-city-minh-guided-tour':
    'kisstour-in-ho-chi-minh-city-3',
  // Vietnam / Ho Chi Minh City: 2 pages -> mekong-delta-tour-with-lunch-and-boat-ride
  'mekong-delta-boat-tour-with-local-lunch':
    'mekong-delta-tour-with-lunch-and-boat-ride',
  // Vietnam / Hoi An: 2 pages -> ba-na-hills-and-golden-bridge-day-trip-from-da-nang-hoi-an-by-local-operator
  'ba-na-hills-and-golden-bridge-day-trip-from-da-nang-or-hoi-an-by-local-operator':
    'ba-na-hills-and-golden-bridge-day-trip-from-da-nang-hoi-an-by-local-operator',
  // Vietnam / Hoi An: 2 pages -> ba-na-hills-and-golden-bridge-full-day-tour
  'golden-bridge-ba-na-hills-full-day-tour-in-hoi-an':
    'ba-na-hills-and-golden-bridge-full-day-tour',
  // Vietnam / Hoi An: 3 pages -> ba-na-hills-and-golden-bridge-tour-from-hoi-an-da-nang-by-local-operator
  'ba-na-hills-and-golden-bridge-tour-from-da-nang-hoi-an-by-local-operator':
    'ba-na-hills-and-golden-bridge-tour-from-hoi-an-da-nang-by-local-operator',
  'from-da-nang-or-hoi-an-ba-na-hills-golden-bridge-tour-by-local-operator':
    'ba-na-hills-and-golden-bridge-tour-from-hoi-an-da-nang-by-local-operator',
  // Vietnam / Hoi An: 2 pages -> basket-boat-ride-cooking-class-by-hangcoconut-in-hoi-an
  'market-tour-basket-boat-ride-and-cooking-class-by-hangcoconut-in-hoi-an':
    'basket-boat-ride-cooking-class-by-hangcoconut-in-hoi-an',
  // Vietnam / Hoi An: 2 pages -> cham-island-snorkeling-experience
  'cham-island-daily-tour-with-snorkeling':
    'cham-island-snorkeling-experience',
  // Vietnam / Hoi An: 2 pages -> cham-islands-snorkeling-trip-by-speedboat-with-lunch
  'cham-islands-snorkeling-trip-with-lunch':
    'cham-islands-snorkeling-trip-by-speedboat-with-lunch',
  // Vietnam / Hoi An: 2 pages -> coconut-forest-basket-boat-ride-with-pickup-in-hoi-an
  'basket-boat-ride-with-local-guide-in-coconut-forest-in-hoi-an':
    'coconut-forest-basket-boat-ride-with-pickup-in-hoi-an',
  // Vietnam / Hoi An: 3 pages -> hoai-river-boat-trip-by-night-and-floating-lantern-in-hoi-an-2
  'hoai-river-night-boat-trip-and-floating-lantern-in-hoi-an':
    'hoai-river-boat-trip-by-night-and-floating-lantern-in-hoi-an-2',
  'hoi-an-night-evening-tour':
    'hoai-river-boat-trip-by-night-and-floating-lantern-in-hoi-an-2',
  // Vietnam / Hoi An: 2 pages -> hoi-an-hidden-food-adventure-by-local-operator
  'hoi-an-food-tour-by-local-operator':
    'hoi-an-hidden-food-adventure-by-local-operator',
  // Vietnam / Hoi An: 2 pages -> hoi-an-memories-land-entry-ticket-with-show-by-local-operator
  'hoi-an-memories-show-and-land-entry-ticket-by-local-operator':
    'hoi-an-memories-land-entry-ticket-with-show-by-local-operator',
  // Vietnam / Hoi An: 2 pages -> marble-and-monkey-mountains-with-am-phu-cave-in-hoi-an
  'marble-mountain-am-phu-cave-and-monkey-mountain-in-hoi-an':
    'marble-and-monkey-mountains-with-am-phu-cave-in-hoi-an',
  // Vietnam / Hoi An: 6 pages -> marble-mountains-am-phu-cave-and-lady-buddha
  'lady-buddha-marble-mountains-am-phu-cave-tour-2':
    'marble-mountains-am-phu-cave-and-lady-buddha',
  'marble-mountain-am-phu-cave-and-lady-buddha-2':
    'marble-mountains-am-phu-cave-and-lady-buddha',
  'marble-mountain-am-phu-cave-lady-buddha-tour':
    'marble-mountains-am-phu-cave-and-lady-buddha',
  'marble-mountains-am-phu-cave-lady-buddha':
    'marble-mountains-am-phu-cave-and-lady-buddha',
  'marble-mountains-lady-buddha-and-am-phu-cave-tour':
    'marble-mountains-am-phu-cave-and-lady-buddha',
  // Vietnam / Hoi An: 2 pages -> market-tour-basket-boat-ride-cooking-class-in-hoi-an
  'cooking-class-market-visit-and-basket-boat-ride-in-hoi-an':
    'market-tour-basket-boat-ride-cooking-class-in-hoi-an',
  // Vietnam / Hoi An: 2 pages -> my-son-sanctuary-guided-half-day-tour
  'my-son-sanctuary-half-day-tour':
    'my-son-sanctuary-guided-half-day-tour',
  // Vietnam / Hoi An: 2 pages -> snorkeling-or-scuba-diving-in-cham-islands
  'cham-island-snorkeling-and-scuba-diving':
    'snorkeling-or-scuba-diving-in-cham-islands',
  // Vietnam / Sapa: 2 pages -> 2-day-sapa-tour-trekking-and-homestay-experience
  '2-day-sapa-trekking-tour-with-homestay-and-meals':
    '2-day-sapa-tour-trekking-and-homestay-experience',
  // Vietnam / Sapa: 2 pages -> 4-day-trekking-tour-with-homestay-in-sapa
  '4-day-trekking-tour-with-homestay-and-meals-in-sapa':
    '4-day-trekking-tour-with-homestay-in-sapa',
  // Vietnam / Sapa: 2 pages -> sapa-trekking-tour-overnight-in-ta-van-village-2-days
  'sapa-tour-overnight-in-ta-van-village-all-in-one-2-days':
    'sapa-trekking-tour-overnight-in-ta-van-village-2-days',
  // Vietnam / Sapa: 3 pages -> trekking-to-y-linh-ho-lao-chai-and-ta-van-villages-in-sapa
  'sapa-trekking-adventure-tour':
    'trekking-to-y-linh-ho-lao-chai-and-ta-van-villages-in-sapa',
  'y-linh-ho-lao-chai-and-ta-van-trekking-tour-in-sapa-2':
    'trekking-to-y-linh-ho-lao-chai-and-ta-van-villages-in-sapa',
  // ---- Golden Triangle consolidation, 2026-09-29 ----
  // From GT_DUPLICATE_PROPOSAL.md, confident clusters only. Four candidates
  // were held back because Google already shows them and shows nothing for
  // their champion; folding those in would trade a known signal for none.
  // 9 pages -> taj-mahal-agra-fort-baby-taj-full-day-trip
  'from-delhi-or-jaipur-taj-mahal-agra-fort-private':
    'taj-mahal-agra-fort-baby-taj-full-day-trip',
  'from-delhiagra-taj-mahal-tour-with-rental-saree-ex':
    'taj-mahal-agra-fort-baby-taj-full-day-trip',
  'from-delhi-taj-mahal-agra-tour-with-5-star':
    'taj-mahal-agra-fort-baby-taj-full-day-trip',
  'from-delhi-taj-mahal-agra-city-tour-with-tickets':
    'taj-mahal-agra-fort-baby-taj-full-day-trip',
  'from-delhi-private-taj-mahal-agra-fort-baby-taj':
    'taj-mahal-agra-fort-baby-taj-full-day-trip',
  'from-delhi-taj-mahal-agra-fort-tour-with-metro':
    'taj-mahal-agra-fort-baby-taj-full-day-trip',
  'from-delhi-taj-mahal-and-agra-day-tour-with':
    'taj-mahal-agra-fort-baby-taj-full-day-trip',
  'from-delhi-taj-mahal-fort-tour-w-elephant-conserva':
    'taj-mahal-agra-fort-baby-taj-full-day-trip',
  'from-delhi-taj-mahal-baby-taj-agra-fort-with':
    'taj-mahal-agra-fort-baby-taj-full-day-trip',
  // 6 pages -> agra-taj-mahal-agra-fort-baby-taj-guided-day
  'vip-taj-mahal-agra-fort-tour-with-suv-5':
    'agra-taj-mahal-agra-fort-baby-taj-guided-day',
  'agra-taj-mahal-agra-fort-skip-the-line-tour':
    'agra-taj-mahal-agra-fort-baby-taj-guided-day',
  'private-agra-tour-akbar-tomb-agra-fort-and-baby':
    'agra-taj-mahal-agra-fort-baby-taj-guided-day',
  'agra-fort-baby-taj-mehtab-bagh-guided-tour-with':
    'agra-taj-mahal-agra-fort-baby-taj-guided-day',
  'taj-mahal-and-fort-visits-private-tour-with-guide':
    'agra-taj-mahal-agra-fort-baby-taj-guided-day',
  'taj-mahal-agra-fort-tou-with-elephant-sanctuary-vi':
    'agra-taj-mahal-agra-fort-baby-taj-guided-day',
  // 9 pages -> from-delhi-taj-mahal-sunrise-and-agra-fort-private
  'from-delhi-sunrise-taj-mahal-baby-taj-agra-fort':
    'from-delhi-taj-mahal-sunrise-and-agra-fort-private',
  'from-delhi-sunrise-taj-mahal-agra-tour-with-5':
    'from-delhi-taj-mahal-sunrise-and-agra-fort-private',
  'from-delhi-taj-mahal-sunrise-agra-fort-akbars-tomb':
    'from-delhi-taj-mahal-sunrise-and-agra-fort-private',
  'from-delhi-taj-mahal-sunrise-agra-day-tour-with':
    'from-delhi-taj-mahal-sunrise-and-agra-fort-private',
  'from-delhi-all-inclusive-taj-mahal-sunrise-photogr':
    'from-delhi-taj-mahal-sunrise-and-agra-fort-private',
  'from-delhi-sunrise-taj-agra-fort-baby-taj-with':
    'from-delhi-taj-mahal-sunrise-and-agra-fort-private',
  'taj-mahal-sunrise-and-agra-trip-from-delhi-with':
    'from-delhi-taj-mahal-sunrise-and-agra-fort-private',
  'from-delhi-private-taj-mahal-sunrise-tour-with-bre':
    'from-delhi-taj-mahal-sunrise-and-agra-fort-private',
  'from-delhi-agra-sunrise-yoga-class-with-taj-mahal':
    'from-delhi-taj-mahal-sunrise-and-agra-fort-private',
  // 3 pages -> jaipur-guided-shopping-tour-experience-with-female
  'jaipur-shopping-tour-with-blue-poetry-art-by-femal':
    'jaipur-guided-shopping-tour-experience-with-female',
  'mumbaijaipurdelhi-guided-shopping-tour-with-female':
    'jaipur-guided-shopping-tour-experience-with-female',
  'jaipur-private-shopping-tour-with-local-guide':
    'jaipur-guided-shopping-tour-experience-with-female',
  // 6 pages -> jaipur-elephant-sanctuary-tour-with-pick-up-and-dr
  'jaipur-elephant-sanctuary-experience-with-transfer':
    'jaipur-elephant-sanctuary-tour-with-pick-up-and-dr',
  'jaipur-elephant-sanctuary-local-village-experience':
    'jaipur-elephant-sanctuary-tour-with-pick-up-and-dr',
  'jaipur-elephant-jungle-sanctuary-feed-and-shower-t':
    'jaipur-elephant-sanctuary-tour-with-pick-up-and-dr',
  'jaipur-ethical-elephant-care-sanctuary-experience':
    'jaipur-elephant-sanctuary-tour-with-pick-up-and-dr',
  'elefun-elephant-sanctuary-tour-in-jaipur':
    'jaipur-elephant-sanctuary-tour-with-pick-up-and-dr',
  'jaipur-elefantastic-elephant-sanctuary-tour':
    'jaipur-elephant-sanctuary-tour-with-pick-up-and-dr',
  // 5 pages -> jaipur-amber-fort-private-tour-with-skip-the-line
  'jaipur-amber-fort-guided-walking-tour':
    'jaipur-amber-fort-private-tour-with-skip-the-line',
  'jaipur-amer-fort-guided-tour-with-local-guide':
    'jaipur-amber-fort-private-tour-with-skip-the-line',
  'jaipur-stepwell-amber-fort-old-city-markets-tour-l':
    'jaipur-amber-fort-private-tour-with-skip-the-line',
  'jaipur-amber-fort-light-sound-show-with-dinner':
    'jaipur-amber-fort-private-tour-with-skip-the-line',
  'jaipur-city-tour-with-amber-fort-ayurvedic-massage':
    'jaipur-amber-fort-private-tour-with-skip-the-line',
  // 2 pages -> agra-taj-mahal-tour-with-professional-photoshoot
  'agra-taj-mahal-tour-with-photoshoot-saree-henna-ar':
    'agra-taj-mahal-tour-with-professional-photoshoot',
  'taj-mahal-with-professional-photoshoot-tour':
    'agra-taj-mahal-tour-with-professional-photoshoot',
  // 5 pages -> from-delhi-taj-mahal-agra-trip-by-gatimaan-express
  'taj-mahalagra-day-tour-from-delhi-by-indias-fastes':
    'from-delhi-taj-mahal-agra-trip-by-gatimaan-express',
  'from-delhi-all-inclusive-taj-mahal-tour-by-gatimaa':
    'from-delhi-taj-mahal-agra-trip-by-gatimaan-express',
  'from-delhi-taj-mahal-agra-tour-by-luxury-superfast':
    'from-delhi-taj-mahal-agra-trip-by-gatimaan-express',
  'taj-mahal-tour-from-delhi-by-superfast-train-all':
    'from-delhi-taj-mahal-agra-trip-by-gatimaan-express',
  'from-delhi-agra-same-day-trip-by-gatimaan-express':
    'from-delhi-taj-mahal-agra-trip-by-gatimaan-express',
  // 2 pages -> jaipur-cooking-class-with-a-local-family
  'jaipur-rajasthani-food-cooking-experience-with-loc':
    'jaipur-cooking-class-with-a-local-family',
  'jaipur-traditional-cooking-class-and-storytelling-':
    'jaipur-cooking-class-with-a-local-family',
  // 3 pages -> delhi-to-agra-private-day-tour-with-taj-mahal
  'delhi-same-day-taj-mahal-agra-fort-tour-with':
    'delhi-to-agra-private-day-tour-with-taj-mahal',
  'delhi-all-inclusive-taj-mahal-agra-fort-baby-taj':
    'delhi-to-agra-private-day-tour-with-taj-mahal',
  'delhi-all-inclusive-day-trip-to-taj-mahal-with':
    'delhi-to-agra-private-day-tour-with-taj-mahal',
  // 4 pages -> from-jaipur-taj-mahal-agra-fort-tour-and-drop
  'from-jaipurdelhiagra-taj-mahal-day-touroptional-tr':
    'from-jaipur-taj-mahal-agra-fort-tour-and-drop',
  'from-jaipur-taj-mahal-agra-fort-baby-taj-day':
    'from-jaipur-taj-mahal-agra-fort-tour-and-drop',
  'from-jaipur-taj-mahal-agra-fort-baby-taj-private':
    'from-jaipur-taj-mahal-agra-fort-tour-and-drop',
  'from-jaipur-taj-mahal-agra-private-guided-day-tour':
    'from-jaipur-taj-mahal-agra-fort-tour-and-drop',
  // 3 pages -> from-delhi-jaipur-day-tour-by-superfast-train
  'from-delhi-jaipur-same-day-tour-by-train-or':
    'from-delhi-jaipur-day-tour-by-superfast-train',
  'jaipur-day-tour-from-delhi-by-express-train-pink':
    'from-delhi-jaipur-day-tour-by-superfast-train',
  'private-jaipur-city-tour-from-delhi-by-express-tra':
    'from-delhi-jaipur-day-tour-by-superfast-train',
  // 2 pages -> jaipur-wild-leopard-safari-in-jhalana-or-amagarh-b
  'jaipur-jhalana-leopard-safari-tour-with-hotel-pick':
    'jaipur-wild-leopard-safari-in-jhalana-or-amagarh-b',
  'jaipur-jhalanaamagarh-leopard-safari-private-tour':
    'jaipur-wild-leopard-safari-in-jhalana-or-amagarh-b',
  // 1 pages -> from-delhi-taj-mahal-agra-day-tour-with-fatehpur
  'from-delhi-skip-the-line-taj-mahal-tour-with':
    'from-delhi-taj-mahal-agra-day-tour-with-fatehpur',
  // 2 pages -> private-same-day-agra-tour-from-mumbai-by-flight
  'from-mumbai-taj-mahal-agra-fort-tour-with-same':
    'private-same-day-agra-tour-from-mumbai-by-flight',
  'from-mumbai-taj-mahal-private-day-tour-by-return':
    'private-same-day-agra-tour-from-mumbai-by-flight',
};

export const canonicalSlugFor = (slug: string) => DUPLICATE_CANONICAL_MAP[slug] || slug;
export const isDuplicateSlug = (slug: string) => slug in DUPLICATE_CANONICAL_MAP;
