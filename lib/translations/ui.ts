// Chrome strings with no data behind them, split out of index.ts so a client
// component can import them without dragging fr.ts/de.ts/es.ts into the browser
// bundle. index.ts re-exports everything here, so server code is unaffected.
export const LANGS = ['fr', 'de', 'es'] as const;
export type Lang = (typeof LANGS)[number];
export const isLang = (s: string): s is Lang => (LANGS as readonly string[]).includes(s);
export const LANG_LOCALE: Record<Lang | 'en', string> = { en: 'en', fr: 'fr', de: 'de', es: 'es' };

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


// The city page's H1 was hardcoded English, so every /fr /de /es city page
// carried "Guided Tours & Things to Do in Hanoi" as its one H1 while its title
// tag and its tour cards were translated. A per-city h1 in CityT still wins;
// this is the fallback so no translated city page is left with an English H1.
export const CITY_H1: Record<Lang | 'en', (city: string) => string> = {
  en: c => `Guided Tours & Things to Do in ${c}`,
  fr: c => `Visites guidées et activités à ${c}`,
  de: c => `Geführte Touren und Aktivitäten in ${c}`,
  es: c => `Tours guiados y actividades en ${c}`,
};
