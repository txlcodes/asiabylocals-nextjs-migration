// Old slug -> champion slug. Single source of truth for both the 308s in
// next.config.ts and the sitemap's exclusion filter.
//
// These slugs used to sit in BOTH the redirect map and app/sitemap.ts's
// hardcoded arrays, so the sitemap advertised six URLs that immediately
// redirected — Google asks you not to submit those: it burns crawl budget and
// says "index this" while the server says "it moved". Keeping one map means
// adding a redirect automatically drops the slug from the sitemap.
export const SLUG_REDIRECTS: Record<string, string> = {
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
  'city-palace-experience-guided-tour': 'jaipur-block-printing-workshop',
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
  // Bangkok — slug fixes
  'learn-hands-on-photography-skills': 'bangkok-photography-class-workshop',
  'bangkok-phography-photo-walk-with': 'bangkok-private-photography-tour',
  'pak-khlong-talat-flower-market-evening-tour': 'bangkok-street-food-tuk-tuk-night-tour',
  'bangkok-ancient-city-erawan-museum-tickets': 'bangkok-ancient-city-erawan-museum-tour',
};

export const REDIRECTED_SLUGS: ReadonlySet<string> = new Set(Object.keys(SLUG_REDIRECTS));
