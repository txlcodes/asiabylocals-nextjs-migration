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

/** Slugs we publish, shortest first. Also drives the sitemap and the hub page. */
export const JAPAN_ITINERARY_SLUGS = [
  '3-days', '4-days', '5-days', '6-days', '7-days', '8-days', '9-days', '10-days',
];

export function getJapanItinerary(slug: string): ItineraryData | null {
  return JAPAN_ITINERARIES[slug] ?? null;
}

/** Country -> itinerary set. Only Japan for now; Thailand is the obvious next. */
export function getItinerary(country: string, slug: string): ItineraryData | null {
  if (country.toLowerCase() === 'japan') return getJapanItinerary(slug);
  return null;
}

export function getItinerarySlugs(country: string): string[] {
  if (country.toLowerCase() === 'japan') return JAPAN_ITINERARY_SLUGS;
  return [];
}
