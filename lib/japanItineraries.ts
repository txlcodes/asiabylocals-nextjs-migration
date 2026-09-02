// Country-level multi-day itineraries: the pages that target "7 day Japan
// itinerary" and friends. They exist to catch a much larger search than any
// single tour page can, and to send that traffic into tours we already sell.
//
// Content lives in japanItinerariesData.ts, generated from our live tour list
// so every day links to something real. Nothing here is invented: if a day has
// no suitable tour in inventory, it links nothing rather than a made-up URL.

export interface ItineraryDay {
  day: number;
  base: string;
  heading: string;
  narrative: string;
  tours: string[];
  travel: string | null;
  tip: string;
  /**
   * A hard scheduling constraint for this day, called out separately from the
   * ordinary tip. India needs it: the Taj Mahal is closed every Friday, and an
   * itinerary that quietly puts Agra on a Friday is simply wrong. Buried in
   * prose it gets skimmed past, so it gets its own red block.
   */
  friday_note?: string | null;
}

export interface ItineraryLogisticsBlock {
  heading: string;
  content: string;
}

export interface ItineraryData {
  days: number;
  /**
   * A direct, ~60-word answer to "what should I do in N days in Japan".
   *
   * This exists for the machines. Our itinerary pages already rank position
   * 4-5 and take almost no clicks, because an AI summary answers the question
   * above the results. If the answer is going to be lifted either way, it
   * should be lifted from us, with our name on it — so the page leads with a
   * self-contained, quotable answer rather than burying it in prose.
   */
  quickAnswer?: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  routeSummary: string;
  intro: string;
  bestFor: string;
  days_detail: ItineraryDay[];
  logistics: ItineraryLogisticsBlock[];
  faqs: { question: string; answer: string }[];
}

import { JAPAN_ITINERARIES } from './japanItinerariesData';
import { INDIA_ITINERARIES } from './indiaItinerariesData';
import { THAILAND_ITINERARIES } from './thailandItinerariesData';

/** Slugs we publish, shortest first. Also drives the sitemap and the hub page. */
export const ITINERARY_SLUGS = [
  '3-days', '4-days', '5-days', '6-days', '7-days', '8-days', '9-days', '10-days',
];

/** Countries that have an itinerary set. Adding one is data, not code. */
const BY_COUNTRY: Record<string, Record<string, ItineraryData>> = {
  japan: JAPAN_ITINERARIES,
  india: INDIA_ITINERARIES,
  thailand: THAILAND_ITINERARIES,
};

export const ITINERARY_COUNTRIES = Object.keys(BY_COUNTRY);

export function getItinerary(country: string, slug: string): ItineraryData | null {
  return BY_COUNTRY[country.toLowerCase()]?.[slug] ?? null;
}

export function getItinerarySlugs(country: string): string[] {
  const set = BY_COUNTRY[country.toLowerCase()];
  if (!set) return [];
  // Only advertise a length we actually wrote.
  return ITINERARY_SLUGS.filter(s => set[s]);
}
