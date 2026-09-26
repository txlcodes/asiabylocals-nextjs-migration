// Old slug -> champion slug. Single source of truth for both the 308s in
// next.config.ts and the sitemap's exclusion filter.
//
// These slugs used to sit in BOTH the redirect map and app/sitemap.ts's
// hardcoded arrays, so the sitemap advertised six URLs that immediately
// redirected — Google asks you not to submit those: it burns crawl budget and
// says "index this" while the server says "it moved". Keeping one map means
// adding a redirect automatically drops the slug from the sitemap.
export const SLUG_REDIRECTS: Record<string, string> = {
  // GSC 404 cleanup (2026-09-18): renamed tours still in Google's index
  'sapporo-chauffeured-full-day-tour': 'sapporo-culture-full-day-tour',
  'chicken-island-guided-tour': 'chicken-island-boat-tour',
  'hong-island-private-tour': 'hong-island-boat-tour',
  // Agra
  'agra-walking-sunrise-tour': 'taj-mahal-sunrise-skip-the-line-tour',
  'taj-mahal-sunrise-sunrise-tour': 'private-sunrise-taj-mahal-agra-fort-tour',
  'agra-gatimaan-entry-ticket': 'delhi-agra-round-trip-gatimaan-train',
  'agra-same-guided-tour': 'same-day-delhi-to-agra-tour',
  'taj-mahal-delhi-guided-tour': 'taj-mahal-same-day-tour-from-delhi',
  'female-guide-for-taj-mahal': 'taj-mahal-tour-with-female-guide',
  // Delhi
  'agra-fort-sunrise-tour': 'taj-mahal-sunrise-elephant-conservation-tour',
  'agra-fort-express-tour': 'taj-mahal-same-day-express-train-tour',
  'india-gate-inclusive-guided-tour': 'golden-triangle-tour-delhi-agra-jaipur',
  'india-gate-guided-tour-heritage': 'old-new-delhi-guided-tour',
  'india-gate-triangle-guided-tour': '6-days-golden-triangle-tour-from-delhi',
  'delhi-luxury-premium-tour': 'taj-mahal-agra-day-trip-luxury-car',
  'delhi-golden-guided-tour': '5-days-golden-triangle-tour-from-delhi',
  'agra-overnight-tour': 'delhi-to-agra-overnight-tour',
  // Jaipur
  'elepahnt-village-walking-tour': 'elephant-village-tour-jaipur',
  'hawa-mahal-food-tour': 'jaipur-same-day-tour-with-cooking-class',
  'hawa-mahal-full-day-tour': 'jaipur-private-full-day-sightseeing-by-car',
  'hawa-mahal-private-tour': 'jaipur-full-day-sightseeing-tour-by-car',
  'amber-fort-guided-tour': 'jaipur-city-tour-with-official-guide',
  'jaipur-enjoy-private-tour': 'jaipur-to-agra-taj-mahal-day-trip',
  'city-palace-experience-guided-tour': 'jaipur-city-tour-with-official-guide',
  // Fixed duplicate "mahal" slugs
  'taj-mahal-mahal-guided-tour': 'taj-mahal-guided-tour-from-agra',
  'taj-mahal-mahal-full-day-tour': 'same-day-taj-mahal-tour-by-car-from-delhi',
  // Fixed Delhi bad slugs
  'golden-triangle-3-day-tour': 'golden-triangle-3-day-tour-from-delhi',
  'delhi-old-new-delhi-private-half-day-tour': 'old-new-delhi-private-tour',
  'jaipur-royal-private-tour': 'delhi-to-jaipur-royal-private-day-tour',
  // Agra — deleted tour redirects
  'agra-mahal-sunrise-tour': 'taj-mahal-sunrise-tour',
  // Deleted duplicates stuck in year-long ISR stale-while-revalidate (regen
  // fails on missing tour, so the canonical fix never renders) — 308 to their
  // champions instead, which bypasses the route cache entirely (2026-08-28).
  'same-day-agra-tour-from-delhi': 'taj-mahal-return-guided-tour',
  'taj-mahal-fatehpur-guided-tour': 'taj-mahal-fatehpur-full-day-tour',
  // Delhi — deleted tour redirects
  'delhi-mahal-private-tour': 'old-new-delhi-private-tour',
  // Phuket — deleted tour redirects
  'phi-phi-islands-premium-boat-tour': 'phi-phi-islands-speedboat-tour-maya-bay-snorkeling',
  'phi-phi-islands-half-day-tour': 'phi-phi-islands-speedboat-tour-maya-bay-snorkeling',
  // Phuket — cooking class slug fixes
  'phuket-kata-karon-food-tour': 'thai-cooking-class-phuket-kata',
  'cooking-class-food-tour': 'seasoning-thai-cooking-class-phuket-cherngtalay',
  'patong-beach-optional-photography-tour': 'elephant-beach-experience-patong-phuket',
  // Jaipur — the block printing workshop was taken down on 2026-09-23 after a
  // copyright complaint about its images, so both it and the slug that used to
  // redirect into it now land on the city's guided tour instead.
  'jaipur-block-printing-workshop': 'jaipur-city-tour-with-official-guide',

  // Taken off the site 2026-09-26: the source had nothing bookable on any date,
  // so these pages were selling something nobody could actually supply. Each one
  // points at the same product from an operator who is still running it, rather
  // than leaving the traffic on a dead end.
  'furano-and-biei-1-day-tour-with-melon-and-blue-pond': 'hokkaido-biei-furano-flower-sea-tour-blue-pond',
  'private-walking-shore-excursion-kobe-kyoto-nara-osaka': 'private-walking-shore-excursion-kyoto-osaka-nara-kobe',
  '3-day-wildlife-photography-experience-in-son-tra-in-da-nang': 'son-tra-wildlife-experience-in-da-nang',
  'halong-bay-2-day-overnight-with-5-star-or-high-end-cruise-ha-long': '2-day-halong-and-bai-tu-long-bay-5-star-cruise',
  'badminton-in-osaka-and-kyoto-with-locals-by-local-operator': 'pickleball-in-osaka-kobe-and-kyoto-with-locals-by-local-operator',
  'private-snorkeling-trip-to-blue-lagoon-and-tanjung-jepun-in-ubud': 'blue-lagoon-and-tanjung-jepun-snorkeling-tour-in-ubud',
  'ubud-kuber-atv-adventure-with-waterfall-long-tunnel-and-lunch-ubud': 'kuber-atv-quad-bike-with-long-tunnel-and-waterfall-in-ubud',
  'carnival-magic-phuket-ticket-with-transfer': 'carnival-magic-entry-ticket-with-optional-transfer-in-phuket',
  'koh-daeng-sunset-included-bioluminescent-plankton-in-krabi': 'daeng-island-sunset-and-bioluminescent-plankton-in-krabi',
  'japanese-calligraphy-workshop-in-kyoto': 'japanese-calligraphy-workshop-with-a-calligrapher-in-kyoto',
  'tenryu-ji-bamboo-grove-kinkaku-ji-and-fushimi-inari': 'fushimi-inari-kinkakuji-bamboo-grove-1-day-bus-tour',
  '2-day-sapa-fansipan-peak-and-trek-and-ha-giang-bus': 'sapa-trek-villages-and-fansipan-peak-3-day-2-night',
  'carnival-magic-show-royal-seat-with-dinner-in-phuket': 'carnival-magic-experience-with-dinner-and-show-in-phuket',
  'mt-fuji-5th-station-group-bus-tour-with-english-guide': 'mount-fuji-private-tour-with-english-guide-3-2',
  'sticky-waterfall-half-day-tour-in-chiang-mai': '225cc-atv-zipline-and-sticky-waterfall-day-trip-in-chiang-mai',
  'phang-nga-bay-trip-to-hong-panak-james-bond-island': 'james-bond-phang-nga-bay-and-hong-island-tour-from-phuket-krabi',
  'private-lantern-boat-ride-and-floating-lantern-release-in-hoi-an': 'hoi-an-city-tour-with-boat-ride-and-lantern-release',
  'sea-of-mount-fuji-hakone-ropeway-wakudani-enoshima': 'mt-fuji-and-hakone-ropeway-small-group-day-tour-from-tokyo-mount-fuji',
  'chiang-mai-sky-lantern-festival-experience-with-transfer-by-local-operator': 'chiang-mai-yi-peng-sky-lantern-festival-ticket-by-local-operator',
  'nam-cang-2-day-1-night-tour-villages-and-terraced-rice-fields-in-sapa': 'villages-and-rice-fields-private-half-day-car-tour-in-sapa',
  'kyoto-customized-guided-private-tour-by-local-operator': 'kyoto-customized-private-tour-in-1-day-with-licensed-guide-by-local-operator',
  'rafting-atv-adventure-and-jungle-experience-in-phuket': 'rafting-atv-zipline-and-jungle-tour-in-phuket',
  'red-temple-golden-triangle-boat-trip-with-lunch-in-chiang-mai': '3-temples-golden-triangle-boat-trip-in-chiang-mai',
  'carnival-magic-ticket-with-dinner-and-transfer-in-phuket': 'carnival-magic-entry-ticket-with-optional-transfer-in-phuket',
  'half-day-private-city-tour-by-car-in-ho-chi-minh-city': 'mui-ne-best-day-trip-in-ho-chi-minh-city',
  'lantern-boat-trip-and-release-lantern-in-hoi-an': 'private-lantern-boat-with-lantern-release-in-hoi-an',
  'cu-chi-tunnels-and-mekong-delta-river-tour-by-canoe': 'cu-chi-tunnels-and-mekong-delta-2-day-tour',
  'doi-suthep-wat-umong-and-hmong-village-tour': 'doi-suthep-and-hmong-village-half-day-tour',
  'the-mystical-land-show-in-ho-chi-minh-city-by-local-operator': 'ho-chi-minh-city-half-day-with-loa-loa-show-by-local-operator',
  'noboribetsu-hell-valley-and-lake-toya-day-trip': 'toya-lake-and-noboribetsu-hell-valley-tour',
  'nikko-autumn-kegon-falls-lake-chuzenji-and-toshogu': 'kegon-falls-lake-chuzenji-and-toshogu-temple-in-tokyo',

  // Bangkok — slug fixes
  'learn-hands-on-photography-skills': 'bangkok-photography-class-workshop',
  'bangkok-phography-photo-walk-with': 'bangkok-private-photography-tour',
  'pak-khlong-talat-flower-market-evening-tour': 'bangkok-street-food-tuk-tuk-night-tour',
  'bangkok-ancient-city-erawan-museum-tickets': 'bangkok-ancient-city-erawan-museum-tour',
};

export const REDIRECTED_SLUGS: ReadonlySet<string> = new Set(Object.keys(SLUG_REDIRECTS));
