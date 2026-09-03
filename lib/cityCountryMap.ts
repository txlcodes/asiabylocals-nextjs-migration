// Single source of truth for which country a city URL belongs under.
//
// Kept in its own module (rather than inside lib/constants.ts) so that
// middleware.ts can import it without pulling the whole constants file —
// with all of CITIES / ATTRACTIONS / the *_INFO_SLUGS arrays — into the
// Edge bundle. lib/constants.ts re-exports CITY_URL_MAP from here, so every
// existing `import { CITY_URL_MAP } from '@/lib/constants'` keeps working.

export const CITY_URL_MAP: Record<string, { country: string; city: string }> = {
  'agra': { country: 'india', city: 'agra' },
  'delhi': { country: 'india', city: 'delhi' },
  'jaipur': { country: 'india', city: 'jaipur' },
  'jodhpur': { country: 'india', city: 'jodhpur' },
  'bikaner': { country: 'india', city: 'bikaner' },
  'mathura': { country: 'india', city: 'mathura' },
  'varanasi': { country: 'india', city: 'varanasi' },
  'kolkata': { country: 'india', city: 'kolkata' },
  'khajuraho': { country: 'india', city: 'khajuraho' },
  'gwalior': { country: 'india', city: 'gwalior' },
  'mumbai': { country: 'india', city: 'mumbai' },
  'aurangabad': { country: 'india', city: 'aurangabad' },
  'goa': { country: 'india', city: 'goa' },
  'mysore': { country: 'india', city: 'mysore' },
  'bengaluru': { country: 'india', city: 'bengaluru' },
  // Indian cities that previously relied on getCityUrl()'s /india/ fallback.
  // Listing them explicitly keeps the fallback from being load-bearing.
  'udaipur': { country: 'india', city: 'udaipur' },
  'jaisalmer': { country: 'india', city: 'jaisalmer' },
  'amritsar': { country: 'india', city: 'amritsar' },
  'rishikesh': { country: 'india', city: 'rishikesh' },
  'leh-ladakh': { country: 'india', city: 'leh-ladakh' },
  'tokyo': { country: 'japan', city: 'tokyo' },
  'kyoto': { country: 'japan', city: 'kyoto' },
  'osaka': { country: 'japan', city: 'osaka' },
  'hiroshima': { country: 'japan', city: 'hiroshima' },
  'sapporo': { country: 'japan', city: 'sapporo' },
  'nara': { country: 'japan', city: 'nara' },
  'nagoya': { country: 'japan', city: 'nagoya' },
  'hakone': { country: 'japan', city: 'hakone' },
  'bali': { country: 'indonesia', city: 'ubud' },
  'yogyakarta': { country: 'indonesia', city: 'yogyakarta' },
  'bangkok': { country: 'thailand', city: 'bangkok' },
  'phuket': { country: 'thailand', city: 'phuket' },
  'chiang-mai': { country: 'thailand', city: 'chiang-mai' },
  'pattaya': { country: 'thailand', city: 'pattaya' },
  'krabi': { country: 'thailand', city: 'krabi' },
  'hanoi': { country: 'vietnam', city: 'hanoi' },
  'ho-chi-minh-city': { country: 'vietnam', city: 'ho-chi-minh-city' },
  'beijing': { country: 'china', city: 'beijing' },
  'shanghai': { country: 'china', city: 'shanghai' },
  'manila': { country: 'philippines', city: 'manila' },
  'cebu': { country: 'philippines', city: 'cebu' },
  'siem-reap': { country: 'cambodia', city: 'siem-reap' },
  'kathmandu': { country: 'nepal', city: 'kathmandu' },
  'yangon': { country: 'myanmar', city: 'yangon' },
  'colombo': { country: 'sri-lanka', city: 'colombo' },
  'kandy': { country: 'sri-lanka', city: 'kandy' },
  'galle': { country: 'sri-lanka', city: 'galle' },
  'sigiriya': { country: 'sri-lanka', city: 'sigiriya' },
  'ella': { country: 'sri-lanka', city: 'ella' },
  'nuwara-eliya': { country: 'sri-lanka', city: 'nuwara-eliya' },
  'negombo': { country: 'sri-lanka', city: 'negombo' },
  'bentota': { country: 'sri-lanka', city: 'bentota' },
  'mirissa': { country: 'sri-lanka', city: 'mirissa' },
  'pokhara': { country: 'nepal', city: 'pokhara' },
  'chitwan': { country: 'nepal', city: 'chitwan' },
  'bhaktapur': { country: 'nepal', city: 'bhaktapur' },
  'lumbini': { country: 'nepal', city: 'lumbini' },
  'penang': { country: 'malaysia', city: 'penang' },
  'kuala-lumpur': { country: 'malaysia', city: 'kuala-lumpur' },
  'busan': { country: 'south-korea', city: 'busan' },
  'seoul': { country: 'south-korea', city: 'seoul' },
  'kashmir': { country: 'india', city: 'kashmir' },
  'dubai': { country: 'uae', city: 'dubai' },
  'singapore': { country: 'singapore', city: 'singapore' },
  'hongkong': { country: 'hong-kong', city: 'hong-kong' },
  'taipei': { country: 'taiwan', city: 'taipei' },
};

/**
 * Every country segment that can legitimately appear in a /<country>/<city>
 * URL, derived from the map above so the two can never drift apart.
 */
export const VALID_COUNTRIES: ReadonlySet<string> = new Set(
  Object.values(CITY_URL_MAP).map(m => m.country)
);
