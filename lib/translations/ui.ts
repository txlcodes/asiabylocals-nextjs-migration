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

// City-page chrome. Every string below was hardcoded English inside
// CityPageClient, so a visitor on /fr/india/agra read a French H1 and French
// tour cards wrapped in "Starting from", "Show more" and "Sort by:". The page
// already resolves `lang` on the server, so it is passed down as a prop and the
// route decides the chrome — the localStorage switcher only governs the neutral
// English routes, where a crawler has no language to infer anyway.
export const CITY_UI: Record<Lang | 'en', Record<string, string>> = {
  en: {
    back: 'Back', noImage: 'No image', topRated: 'Top rated', startingFrom: 'Starting from',
    showMore: 'Show more', expanding: "We're currently expanding our offerings. Check back soon for new experiences!",
    refresh: 'Refresh Results', guidesBlurb: 'Researched guides on timing, tides, queues and what each place is really like.',
    dates: 'Dates', dayTrips: 'Day trips', multiDay: 'Multi-day', photography: 'Photography',
    sunrise: 'Sunrise', privateTours: 'Private tours', walkingTours: 'Walking tours', filters: 'Filters',
    sortBy: 'Sort by:', sortRecommended: 'Recommended', sortPriceLow: 'Price: Low to High',
    sortPriceHigh: 'Price: High to Low', noToursYet: 'No tours available yet',
    tryFilters: 'Try adjusting your filters',
  },
  fr: {
    back: 'Retour', noImage: 'Pas d’image', topRated: 'Les mieux notées', startingFrom: 'À partir de',
    showMore: 'Voir plus', expanding: 'Nous étoffons actuellement notre offre. Revenez bientôt pour de nouvelles expériences.',
    refresh: 'Actualiser les résultats', guidesBlurb: 'Des guides documentés sur les horaires, les marées, les files d’attente et ce que chaque lieu est vraiment.',
    dates: 'Dates', dayTrips: 'Excursions à la journée', multiDay: 'Plusieurs jours', photography: 'Photographie',
    sunrise: 'Lever du soleil', privateTours: 'Visites privées', walkingTours: 'Visites à pied', filters: 'Filtres',
    sortBy: 'Trier par :', sortRecommended: 'Recommandé', sortPriceLow: 'Prix : croissant',
    sortPriceHigh: 'Prix : décroissant', noToursYet: 'Aucune visite disponible pour l’instant',
    tryFilters: 'Essayez d’ajuster vos filtres',
  },
  de: {
    back: 'Zurück', noImage: 'Kein Bild', topRated: 'Bestbewertet', startingFrom: 'Ab',
    showMore: 'Mehr anzeigen', expanding: 'Wir bauen unser Angebot gerade aus. Schauen Sie bald wieder vorbei für neue Erlebnisse.',
    refresh: 'Ergebnisse aktualisieren', guidesBlurb: 'Recherchierte Reiseführer zu Zeiten, Gezeiten, Warteschlangen und dazu, wie jeder Ort wirklich ist.',
    dates: 'Termine', dayTrips: 'Tagesausflüge', multiDay: 'Mehrtägig', photography: 'Fotografie',
    sunrise: 'Sonnenaufgang', privateTours: 'Private Touren', walkingTours: 'Rundgänge', filters: 'Filter',
    sortBy: 'Sortieren nach:', sortRecommended: 'Empfohlen', sortPriceLow: 'Preis: aufsteigend',
    sortPriceHigh: 'Preis: absteigend', noToursYet: 'Noch keine Touren verfügbar',
    tryFilters: 'Passen Sie Ihre Filter an',
  },
  es: {
    back: 'Volver', noImage: 'Sin imagen', topRated: 'Mejor valorados', startingFrom: 'Desde',
    showMore: 'Ver más', expanding: 'Estamos ampliando nuestra oferta. Vuelva pronto para ver nuevas experiencias.',
    refresh: 'Actualizar resultados', guidesBlurb: 'Guías documentadas sobre horarios, mareas, colas y cómo es de verdad cada lugar.',
    dates: 'Fechas', dayTrips: 'Excursiones de un día', multiDay: 'Varios días', photography: 'Fotografía',
    sunrise: 'Amanecer', privateTours: 'Visitas privadas', walkingTours: 'Visitas a pie', filters: 'Filtros',
    sortBy: 'Ordenar por:', sortRecommended: 'Recomendado', sortPriceLow: 'Precio: de menor a mayor',
    sortPriceHigh: 'Precio: de mayor a menor', noToursYet: 'Aún no hay tours disponibles',
    tryFilters: 'Pruebe a ajustar los filtros',
  },
};

// The city name sits inside these rather than in front of them, so they are
// templates. "Aucune visite trouvée dans Agra" needs the preposition the
// language actually uses, and a results count needs its own plural.
export const CITY_TPL: Record<Lang | 'en', {
  noToursFound: (city: string) => string;
  everythingBefore: (city: string) => string;
  results: (n: number, city: string) => string;
  beTheFirst: (city: string) => string;
}> = {
  en: {
    noToursFound: c => `No tours found in ${c}`,
    everythingBefore: c => `Everything You Need to Know Before Visiting ${c}`,
    results: (n, c) => `${n} ${n === 1 ? 'result' : 'results'}: ${c}`,
    beTheFirst: c => `Be the first to create a tour in ${c}!`,
  },
  fr: {
    noToursFound: c => `Aucune visite trouvée à ${c}`,
    everythingBefore: c => `Tout ce qu’il faut savoir avant de visiter ${c}`,
    results: (n, c) => `${n} ${n === 1 ? 'résultat' : 'résultats'} : ${c}`,
    beTheFirst: c => `Soyez le premier à créer une visite à ${c} !`,
  },
  de: {
    noToursFound: c => `Keine Touren in ${c} gefunden`,
    everythingBefore: c => `Alles, was Sie vor einem Besuch in ${c} wissen sollten`,
    results: (n, c) => `${n} ${n === 1 ? 'Ergebnis' : 'Ergebnisse'}: ${c}`,
    beTheFirst: c => `Seien Sie der Erste, der eine Tour in ${c} erstellt!`,
  },
  es: {
    noToursFound: c => `No se han encontrado tours en ${c}`,
    everythingBefore: c => `Todo lo que hay que saber antes de visitar ${c}`,
    results: (n, c) => `${n} ${n === 1 ? 'resultado' : 'resultados'}: ${c}`,
    beTheFirst: c => `Sea el primero en crear un tour en ${c}.`,
  },
};
