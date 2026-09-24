// Translated content for the /fr, /de, /es folders. English stays at /.
// Everything here is a keyed map: a missing key means the page renders the
// English content under the translated URL (hreflang still declares it), so
// a language can roll out page by page.
export const LANGS = ['fr', 'de', 'es'] as const;
export type Lang = (typeof LANGS)[number];
export const isLang = (s: string): s is Lang => (LANGS as readonly string[]).includes(s);
export const LANG_LOCALE: Record<Lang | 'en', string> = { en: 'en', fr: 'fr', de: 'de', es: 'es' };

// `options` is keyed by the option's ENGLISH optionTitle rather than by id or
// index: an option reordered or re-added in the admin keeps its title, while a
// rewritten title simply misses the lookup and falls back to English. Never key
// on position, or a translated description can end up beside the wrong price.
export interface TourOptionT { title: string; description?: string }
export interface TourT { title: string; shortDescription?: string; fullDescription?: string; highlights?: string[]; included?: string[]; notIncluded?: string[]; faqs?: { question: string; answer: string }[]; metaTitle?: string; metaDescription?: string; options?: Record<string, TourOptionT> }
export interface PageT { title: string; seoTitle?: string; description: string; fastFacts?: { icon: string; label: string; value: string }[]; sections?: { title: string; icon?: string; content: string }[]; faqs?: { q: string; a: string }[] }
export interface CityT { title: string; description: string; h1?: string; intro?: string }
// Itineraries are keyed "<country>:<slug>" because every country reuses the
// same slugs (3-days, 7-days...). Keying on the slug alone would serve India's
// French copy on Japan's page. The three arrays are index-aligned with the
// English ItineraryData, so a count mismatch is a build error, not a fallback.
export interface ItineraryDayT { day?: number; base?: string; heading?: string; narrative?: string; travel?: string | null; tip?: string; friday_note?: string | null }
export interface ItineraryT {
  title: string; metaTitle?: string; metaDescription?: string; routeSummary?: string;
  intro?: string; bestFor?: string; quickAnswer?: string | null;
  days_detail?: ItineraryDayT[];
  logistics?: { heading: string; content: string }[];
  faqs?: { question: string; answer: string }[];
}

import { FR_TOURS, FR_PAGES, FR_CITIES, FR_ITINERARIES } from './fr';
import { DE_TOURS, DE_PAGES, DE_CITIES, DE_ITINERARIES } from './de';
import { ES_TOURS, ES_PAGES, ES_CITIES, ES_ITINERARIES } from './es';

const TOURS: Record<Lang, Record<string, TourT>> = { fr: FR_TOURS, de: DE_TOURS, es: ES_TOURS };
const PAGES: Record<Lang, Record<string, PageT>> = { fr: FR_PAGES, de: DE_PAGES, es: ES_PAGES };
const CITIES: Record<Lang, Record<string, CityT>> = { fr: FR_CITIES, de: DE_CITIES, es: ES_CITIES };
const ITINS: Record<Lang, Record<string, ItineraryT>> = { fr: FR_ITINERARIES, de: DE_ITINERARIES, es: ES_ITINERARIES };

export const tourT = (lang: Lang | null | undefined, slug: string): TourT | null => (lang && TOURS[lang][slug]) || null;
export const pageT = (lang: Lang | null | undefined, slug: string): PageT | null => (lang && PAGES[lang][slug]) || null;
export const cityT = (lang: Lang | null | undefined, key: string): CityT | null => (lang && CITIES[lang][key]) || null;
export const itineraryT = (lang: Lang | null | undefined, country: string, slug: string): ItineraryT | null =>
  (lang && ITINS[lang][`${country.toLowerCase()}:${slug}`]) || null;
// The hub at /<country>/itineraries counts as translated once any itinerary in
// that country is, so the hub never links to pages that do not exist yet.
const hubTranslated = (l: Lang, country: string) =>
  Object.keys(ITINS[l]).some(k => k.startsWith(`${country.toLowerCase()}:`));

/**
 * Overlay translated copy on the English itinerary, field by field.
 *
 * Only prose is replaced. `tours`, `day` numbers and the array lengths stay
 * exactly as the English data has them, so a day can never end up pointing at
 * another day's tours: the generator already refuses to build when an array
 * length differs, and this merge reads positionally only within that guarantee.
 */
export function mergeItinerary<T extends Record<string, any>>(en: T, t: ItineraryT | null): T {
  if (!t) return en;
  const pick = <V,>(a: V | undefined | null, b: V) => (a === undefined || a === null || a === '' ? b : a);
  return {
    ...en,
    title: pick(t.title, en.title),
    metaTitle: pick(t.metaTitle, en.metaTitle),
    metaDescription: pick(t.metaDescription, en.metaDescription),
    routeSummary: pick(t.routeSummary, en.routeSummary),
    intro: pick(t.intro, en.intro),
    bestFor: pick(t.bestFor, en.bestFor),
    quickAnswer: pick(t.quickAnswer, en.quickAnswer),
    days_detail: en.days_detail.map((d: any, i: number) => {
      const td = t.days_detail?.[i];
      if (!td) return d;
      return {
        ...d,
        base: pick(td.base, d.base),
        heading: pick(td.heading, d.heading),
        narrative: pick(td.narrative, d.narrative),
        travel: td.travel === undefined ? d.travel : td.travel,
        tip: pick(td.tip, d.tip),
        friday_note: td.friday_note === undefined ? d.friday_note : td.friday_note,
      };
    }),
    logistics: en.logistics.map((l: any, i: number) => t.logistics?.[i] ?? l),
    faqs: en.faqs.map((f: any, i: number) => t.faqs?.[i] ?? f),
  };
}

// Which languages actually have copy for a destination path. Paths:
// /country -> CITIES["country:x"], /country/city -> CITIES[city],
// /country/city/slug -> TOURS[slug] or PAGES[slug]. Untranslated paths render
// English under /fr etc, so they must NOT be declared as alternates or listed
// in the sitemap, and they canonicalise back to the English URL.
export const translatedLangs = (path: string): Lang[] => {
  const parts = path.split('/').filter(Boolean);
  if (parts.length === 0) return [];
  // /<country>/itineraries and /<country>/itineraries/<slug> sit at the same
  // depths as a city and a tour, so they have to be matched before those.
  if (parts[1] === 'itineraries') {
    if (parts.length === 2) return LANGS.filter(l => hubTranslated(l, parts[0]));
    if (parts.length === 3) return LANGS.filter(l => !!ITINS[l][`${parts[0].toLowerCase()}:${parts[2]}`]);
  }
  const key = parts.length === 1 ? `country:${parts[0]}` : parts.length === 2 ? parts[1] : parts[2];
  return LANGS.filter(l => parts.length <= 2 ? !!CITIES[l][key] : !!(TOURS[l][key] || PAGES[l][key]));
};
export const hasTranslation = (lang: Lang | null | undefined, path: string) => !!lang && translatedLangs(path).includes(lang);

// hreflang set for a path such as "/india/agra/taj-mahal-sunrise-tour":
// English plus only the languages that have a translation.
export const alternatesFor = (path: string) => {
  const base = 'https://www.asiabylocals.com';
  const p = path.startsWith('/') ? path : '/' + path;
  const languages: Record<string, string> = { en: base + p, 'x-default': base + p };
  for (const l of translatedLangs(p)) languages[l] = `${base}/${l}${p}`;
  return languages;
};
// Canonical for a page rendered under /<lang>: itself when translated, else the English URL.
export const canonicalFor = (lang: Lang | null | undefined, path: string) => {
  const p = path.startsWith('/') ? path : '/' + path;
  return `https://www.asiabylocals.com${hasTranslation(lang, p) ? `/${lang}` : ''}${p}`;
};

// Small UI strings for the translated folders (chrome inside server components).
export const UI: Record<Lang, Record<string, string>> = {
  fr: { from: 'À partir de', perPerson: 'par personne', tours: 'excursions', bookNow: 'Réserver', freeCancellation: 'Annulation gratuite', verifiedOperator: 'Opérateur local vérifié', guides: 'Guides pratiques', faq: 'Questions fréquentes', reviews: 'Avis', included: 'Inclus', notIncluded: 'Non inclus', duration: 'Durée', meetingPoint: 'Point de rendez-vous', highlights: 'Points forts', readInEnglish: 'Lire en anglais' },
  de: { from: 'Ab', perPerson: 'pro Person', tours: 'Touren', bookNow: 'Jetzt buchen', freeCancellation: 'Kostenlose Stornierung', verifiedOperator: 'Geprüfter lokaler Anbieter', guides: 'Reiseführer', faq: 'Häufige Fragen', reviews: 'Bewertungen', included: 'Inklusive', notIncluded: 'Nicht inklusive', duration: 'Dauer', meetingPoint: 'Treffpunkt', highlights: 'Highlights', readInEnglish: 'Auf Englisch lesen' },
  es: { from: 'Desde', perPerson: 'por persona', tours: 'tours', bookNow: 'Reservar', freeCancellation: 'Cancelación gratuita', verifiedOperator: 'Operador local verificado', guides: 'Guías', faq: 'Preguntas frecuentes', reviews: 'Opiniones', included: 'Incluido', notIncluded: 'No incluido', duration: 'Duración', meetingPoint: 'Punto de encuentro', highlights: 'Lo más destacado', readInEnglish: 'Leer en inglés' },
};

// Country names per language. Without this a French page says "3 jours India",
// because countryDisplayName only title-cases the slug.
const COUNTRY_NAME: Record<Lang, Record<string, string>> = {
  fr: { india: 'Inde', thailand: 'Thaïlande', japan: 'Japon', 'sri-lanka': 'Sri Lanka', vietnam: 'Vietnam', indonesia: 'Indonésie', uae: 'Émirats arabes unis', nepal: 'Népal' },
  de: { india: 'Indien', thailand: 'Thailand', japan: 'Japan', 'sri-lanka': 'Sri Lanka', vietnam: 'Vietnam', indonesia: 'Indonesien', uae: 'VAE', nepal: 'Nepal' },
  es: { india: 'India', thailand: 'Tailandia', japan: 'Japón', 'sri-lanka': 'Sri Lanka', vietnam: 'Vietnam', indonesia: 'Indonesia', uae: 'EAU', nepal: 'Nepal' },
};
/** Localised country name, or the caller's English label when we have none. */
export const countryNameT = (lang: Lang | null | undefined, slug: string, fallback: string) =>
  (lang && COUNTRY_NAME[lang][slug.toLowerCase()]) || fallback;

// Strings that need the number or the country inside them rather than glued to
// the front: "3 Itinéraire de jours" is what concatenation produces.
export const ITIN_TPL: Record<Lang | 'en', { crumb: (n: number) => string; atAGlance: (n: number, c: string) => string }> = {
  en: { crumb: n => `${n}-Day Itinerary`, atAGlance: (n, c) => `${n} days in ${c} at a glance` },
  fr: { crumb: n => `Itinéraire de ${n} jours`, atAGlance: (n, c) => `${n} jours en ${c} en un coup d\u2019œil` },
  de: { crumb: n => `Reiseroute für ${n} Tage`, atAGlance: (n, c) => `${n} Tage ${c} auf einen Blick` },
  es: { crumb: n => `Itinerario de ${n} días`, atAGlance: (n, c) => `${n} días en ${c} de un vistazo` },
};

// Chrome for the itinerary pages. Held here rather than in the client so the
// server components and ItineraryClient read the same strings. `en` is present
// so the component needs no branch when no language is set.
export const ITIN_UI: Record<Lang | 'en', Record<string, string>> = {
  en: { home: 'Home', days: 'days', basedIn: 'Based in', whatYouDo: 'What you do', gettingThere: 'Getting there', bestFor: 'Best for', differentTime: 'Have a different amount of time?', day: 'Day', planning: 'Planning this trip', faq: 'Frequently Asked Questions', bookTitle: 'Book the guided parts of this trip', bookSub: 'Every tour above runs with a verified local operator.', itineraries: 'Itineraries' },
  fr: { home: 'Accueil', days: 'jours', basedIn: 'Base', whatYouDo: 'Au programme', gettingThere: 'Trajet', bestFor: 'Idéal pour', differentTime: 'Vous avez plus ou moins de temps ?', day: 'Jour', planning: 'Préparer ce voyage', faq: 'Questions fréquentes', bookTitle: 'Réservez les visites guidées de ce voyage', bookSub: 'Chaque excursion ci-dessus est assurée par un opérateur local vérifié.', itineraries: 'Itinéraires' },
  de: { home: 'Startseite', days: 'Tage', basedIn: 'Standort', whatYouDo: 'Programm', gettingThere: 'Anreise', bestFor: 'Ideal für', differentTime: 'Haben Sie mehr oder weniger Zeit?', day: 'Tag', planning: 'Diese Reise planen', faq: 'Häufige Fragen', bookTitle: 'Buchen Sie die geführten Teile dieser Reise', bookSub: 'Jede Tour oben wird von einem geprüften lokalen Anbieter durchgeführt.', itineraries: 'Reiserouten' },
  es: { home: 'Inicio', days: 'días', basedIn: 'Base', whatYouDo: 'Qué haces', gettingThere: 'Cómo llegar', bestFor: 'Ideal para', differentTime: '¿Tienes más o menos tiempo?', day: 'Día', planning: 'Planificar este viaje', faq: 'Preguntas frecuentes', bookTitle: 'Reserva las partes guiadas de este viaje', bookSub: 'Cada tour de arriba lo opera un operador local verificado.', itineraries: 'Itinerarios' },
};

// Translated title/description for one bookable option, falling back to the
// English text the API returned.
export function optionT(lang: Lang | null | undefined, slug: string | undefined,
  title: string | undefined, description: string | undefined): { title: string; description: string } {
  const en = { title: title || '', description: description || '' };
  if (!lang || !slug || !title) return en;
  const t = TOURS[lang][slug]?.options?.[title];
  if (!t) return en;
  return { title: t.title || en.title, description: t.description || en.description };
}
