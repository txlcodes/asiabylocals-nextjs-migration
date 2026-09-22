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

import { FR_TOURS, FR_PAGES, FR_CITIES } from './fr';
import { DE_TOURS, DE_PAGES, DE_CITIES } from './de';
import { ES_TOURS, ES_PAGES, ES_CITIES } from './es';

const TOURS: Record<Lang, Record<string, TourT>> = { fr: FR_TOURS, de: DE_TOURS, es: ES_TOURS };
const PAGES: Record<Lang, Record<string, PageT>> = { fr: FR_PAGES, de: DE_PAGES, es: ES_PAGES };
const CITIES: Record<Lang, Record<string, CityT>> = { fr: FR_CITIES, de: DE_CITIES, es: ES_CITIES };

export const tourT = (lang: Lang | null | undefined, slug: string): TourT | null => (lang && TOURS[lang][slug]) || null;
export const pageT = (lang: Lang | null | undefined, slug: string): PageT | null => (lang && PAGES[lang][slug]) || null;
export const cityT = (lang: Lang | null | undefined, key: string): CityT | null => (lang && CITIES[lang][key]) || null;

// Which languages actually have copy for a destination path. Paths:
// /country -> CITIES["country:x"], /country/city -> CITIES[city],
// /country/city/slug -> TOURS[slug] or PAGES[slug]. Untranslated paths render
// English under /fr etc, so they must NOT be declared as alternates or listed
// in the sitemap, and they canonicalise back to the English URL.
export const translatedLangs = (path: string): Lang[] => {
  const parts = path.split('/').filter(Boolean);
  if (parts.length === 0) return [];
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
