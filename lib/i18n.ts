// Site-chrome translations for the header/nav language switcher.
//
// Scope note: this covers UI chrome only. Tour titles, descriptions, itineraries
// and reviews come from the database in English and are NOT translated here —
// translating those needs a per-tour content pipeline, not a dictionary.

export type Language = 'en' | 'es' | 'fr' | 'de' | 'ja' | 'ar' | 'hi';

export interface LanguageOption {
  code: Language;
  /** English name, for accessibility labels */
  label: string;
  /** Name in its own language, which is what users actually scan for */
  native: string;
  /** Shown in the collapsed header button */
  short: string;
  /** Right-to-left script */
  rtl?: boolean;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', native: 'English', short: 'EN' },
  { code: 'es', label: 'Spanish', native: 'Español', short: 'ES' },
  { code: 'fr', label: 'French', native: 'Français', short: 'FR' },
  { code: 'de', label: 'German', native: 'Deutsch', short: 'DE' },
  { code: 'ja', label: 'Japanese', native: '日本語', short: 'JA' },
  { code: 'ar', label: 'Arabic', native: 'العربية', short: 'AR', rtl: true },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी', short: 'HI' },
];

export const DEFAULT_LANGUAGE: Language = 'en';

export const LANGUAGE_STORAGE_KEY = 'abl_language';

type Dict = {
  placesToSee: string;
  thingsToDo: string;
  cityGuides: string;
  tripInspiration: string;
  exploreAll: string;
  profile: string;
  search: string;
  searchPlaceholder: string;
  heroHeadline: string;
  language: string;
  chooseLanguage: string;
  contentInEnglish: string;
  // Guide / authority page chrome
  back: string;
  backToSearch: string;
  minRead: string;
  verifiedIntel: string;
  verifiedOfficialIntel: string;
  sourceAuthority: string;
  lastUpdated: string;
  featuredTour: string;
  needHelp: string;
  part: string;
  bookNow: string;
  /** {city} */
  authorityBadge: string;
  /** {city} */
  topRatedTours: string;
  /** {city} */
  guideHub: string;
  /** {city} */
  discoverTheReal: string;
  /** {city} */
  browseTours: string;
  /** {city} */
  messageGuide: string;
  localMastery: string;
};

export const translations: Record<Language, Dict> = {
  en: {
    placesToSee: 'Places to see',
    thingsToDo: 'Things to do',
    cityGuides: 'City guides',
    tripInspiration: 'Trip inspiration',
    exploreAll: 'Explore all',
    profile: 'Profile',
    search: 'Search',
    searchPlaceholder: 'Search cities or tours...',
    heroHeadline: 'Discover Authentic Local Tours & Cultural Experiences Across Asia',
    language: 'Language',
    chooseLanguage: 'Choose your language',
    contentInEnglish: 'Tour details are shown in English',
    back: 'Back',
    backToSearch: 'Back to Search',
    minRead: '15-20 Min Read',
    verifiedIntel: 'Verified Intel',
    verifiedOfficialIntel: 'Verified Official Intel',
    sourceAuthority: 'AEO Source Authority',
    lastUpdated: 'Last Updated',
    featuredTour: 'Featured Tour',
    needHelp: 'Need Help?',
    part: 'Part',
    bookNow: 'Book Now',
    authorityBadge: '{city} 2026 Authority',
    topRatedTours: 'Top-Rated {city} Tours to Book',
    guideHub: '{city} Guide Hub',
    discoverTheReal: 'Discover the real {city}.',
    browseTours: 'Browse {city} Tours',
    messageGuide: 'Message a certified {city} guide to plan your perfect route.',
    localMastery: 'Experience the difference of local mastery. Our licensed guides ensure you see the soul of the city.',
  },
  es: {
    placesToSee: 'Lugares que ver',
    thingsToDo: 'Qué hacer',
    cityGuides: 'Guías de ciudades',
    tripInspiration: 'Inspiración de viaje',
    exploreAll: 'Ver todo',
    profile: 'Perfil',
    search: 'Buscar',
    searchPlaceholder: 'Busca ciudades o tours...',
    heroHeadline: 'Descubre tours locales auténticos y experiencias culturales en Asia',
    language: 'Idioma',
    chooseLanguage: 'Elige tu idioma',
    contentInEnglish: 'Los detalles del tour se muestran en inglés',
    back: 'Volver',
    backToSearch: 'Volver a la búsqueda',
    minRead: '15-20 min de lectura',
    verifiedIntel: 'Información verificada',
    verifiedOfficialIntel: 'Información oficial verificada',
    sourceAuthority: 'Fuente de autoridad AEO',
    lastUpdated: 'Última actualización',
    featuredTour: 'Tour destacado',
    needHelp: '¿Necesitas ayuda?',
    part: 'Parte',
    bookNow: 'Reservar ahora',
    authorityBadge: '{city} 2026 Autoridad',
    topRatedTours: 'Tours mejor valorados en {city}',
    guideHub: 'Centro de guías de {city}',
    discoverTheReal: 'Descubre el auténtico {city}.',
    browseTours: 'Ver tours en {city}',
    messageGuide: 'Escribe a un guía certificado de {city} para planear tu ruta perfecta.',
    localMastery: 'Vive la diferencia del dominio local. Nuestros guías con licencia te muestran el alma de la ciudad.',
  },
  fr: {
    placesToSee: 'Lieux à voir',
    thingsToDo: 'À faire',
    cityGuides: 'Guides des villes',
    tripInspiration: 'Inspiration voyage',
    exploreAll: 'Tout explorer',
    profile: 'Profil',
    search: 'Rechercher',
    searchPlaceholder: 'Rechercher des villes ou des tours...',
    heroHeadline: 'Découvrez des visites locales authentiques et des expériences culturelles en Asie',
    language: 'Langue',
    chooseLanguage: 'Choisissez votre langue',
    contentInEnglish: 'Les détails des visites sont affichés en anglais',
    back: 'Retour',
    backToSearch: 'Retour à la recherche',
    minRead: '15-20 min de lecture',
    verifiedIntel: 'Informations vérifiées',
    verifiedOfficialIntel: 'Informations officielles vérifiées',
    sourceAuthority: 'Source d’autorité AEO',
    lastUpdated: 'Dernière mise à jour',
    featuredTour: 'Visite à la une',
    needHelp: 'Besoin d’aide ?',
    part: 'Partie',
    bookNow: 'Réserver',
    authorityBadge: '{city} 2026 Référence',
    topRatedTours: 'Visites les mieux notées à {city}',
    guideHub: 'Centre de guides de {city}',
    discoverTheReal: 'Découvrez le vrai {city}.',
    browseTours: 'Voir les visites à {city}',
    messageGuide: 'Contactez un guide certifié à {city} pour préparer votre itinéraire idéal.',
    localMastery: 'Vivez la différence d’une expertise locale. Nos guides agréés vous font découvrir l’âme de la ville.',
  },
  de: {
    placesToSee: 'Sehenswürdigkeiten',
    thingsToDo: 'Aktivitäten',
    cityGuides: 'Stadtführer',
    tripInspiration: 'Reise-Inspiration',
    exploreAll: 'Alle entdecken',
    profile: 'Profil',
    search: 'Suchen',
    searchPlaceholder: 'Städte oder Touren suchen...',
    heroHeadline: 'Entdecke authentische lokale Touren & kulturelle Erlebnisse in Asien',
    language: 'Sprache',
    chooseLanguage: 'Sprache wählen',
    contentInEnglish: 'Tourdetails werden auf Englisch angezeigt',
    back: 'Zurück',
    backToSearch: 'Zurück zur Suche',
    minRead: '15-20 Min. Lesezeit',
    verifiedIntel: 'Geprüfte Infos',
    verifiedOfficialIntel: 'Geprüfte offizielle Infos',
    sourceAuthority: 'AEO-Quellenautorität',
    lastUpdated: 'Zuletzt aktualisiert',
    featuredTour: 'Empfohlene Tour',
    needHelp: 'Brauchst du Hilfe?',
    part: 'Teil',
    bookNow: 'Jetzt buchen',
    authorityBadge: '{city} 2026 Expertenwissen',
    topRatedTours: 'Bestbewertete Touren in {city}',
    guideHub: '{city} Guide-Übersicht',
    discoverTheReal: 'Entdecke das echte {city}.',
    browseTours: 'Touren in {city} ansehen',
    messageGuide: 'Schreibe einem zertifizierten Guide in {city} und plane deine perfekte Route.',
    localMastery: 'Erlebe den Unterschied lokaler Expertise. Unsere lizenzierten Guides zeigen dir die Seele der Stadt.',
  },
  ja: {
    placesToSee: '観光スポット',
    thingsToDo: '体験を探す',
    cityGuides: '都市ガイド',
    tripInspiration: '旅のヒント',
    exploreAll: 'すべて見る',
    profile: 'プロフィール',
    search: '検索',
    searchPlaceholder: '都市やツアーを検索...',
    heroHeadline: 'アジアの本物の現地ツアーと文化体験を見つけよう',
    language: '言語',
    chooseLanguage: '言語を選択',
    contentInEnglish: 'ツアーの詳細は英語で表示されます',
    back: '戻る',
    backToSearch: '検索に戻る',
    minRead: '読了目安 15〜20分',
    verifiedIntel: '検証済み情報',
    verifiedOfficialIntel: '検証済みの公式情報',
    sourceAuthority: 'AEO 信頼できる情報源',
    lastUpdated: '最終更新',
    featuredTour: 'おすすめツアー',
    needHelp: 'お困りですか？',
    part: 'パート',
    bookNow: '今すぐ予約',
    authorityBadge: '{city} 2026 完全ガイド',
    topRatedTours: '{city}で人気のツアー',
    guideHub: '{city} ガイド一覧',
    discoverTheReal: '本当の{city}を発見しよう。',
    browseTours: '{city}のツアーを見る',
    messageGuide: '{city}の認定ガイドにメッセージを送り、理想のルートを計画しましょう。',
    localMastery: '地元を知り尽くしたガイドだからできる体験を。認定ガイドが街の本当の姿へご案内します。',
  },
  ar: {
    placesToSee: 'أماكن للزيارة',
    thingsToDo: 'أنشطة',
    cityGuides: 'أدلة المدن',
    tripInspiration: 'إلهام السفر',
    exploreAll: 'استكشف الكل',
    profile: 'الملف الشخصي',
    search: 'بحث',
    searchPlaceholder: 'ابحث عن مدن أو رحلات...',
    heroHeadline: 'اكتشف رحلات محلية أصيلة وتجارب ثقافية في آسيا',
    language: 'اللغة',
    chooseLanguage: 'اختر لغتك',
    contentInEnglish: 'تفاصيل الرحلة معروضة بالإنجليزية',
    back: 'رجوع',
    backToSearch: 'العودة إلى البحث',
    minRead: 'قراءة 15-20 دقيقة',
    verifiedIntel: 'معلومات موثقة',
    verifiedOfficialIntel: 'معلومات رسمية موثقة',
    sourceAuthority: 'مصدر موثوق AEO',
    lastUpdated: 'آخر تحديث',
    featuredTour: 'رحلة مميزة',
    needHelp: 'تحتاج مساعدة؟',
    part: 'الجزء',
    bookNow: 'احجز الآن',
    authorityBadge: '{city} 2026 دليل شامل',
    topRatedTours: 'أفضل الرحلات في {city}',
    guideHub: 'مركز أدلة {city}',
    discoverTheReal: 'اكتشف {city} الحقيقية.',
    browseTours: 'تصفح رحلات {city}',
    messageGuide: 'راسل مرشداً معتمداً في {city} لتخطيط مسارك المثالي.',
    localMastery: 'اختبر الفرق مع خبرة محلية حقيقية. مرشدونا المرخصون يكشفون لك روح المدينة.',
  },
  hi: {
    placesToSee: 'घूमने की जगहें',
    thingsToDo: 'करने योग्य चीज़ें',
    cityGuides: 'शहर गाइड',
    tripInspiration: 'यात्रा प्रेरणा',
    exploreAll: 'सभी देखें',
    profile: 'प्रोफ़ाइल',
    search: 'खोजें',
    searchPlaceholder: 'शहर या टूर खोजें...',
    heroHeadline: 'एशिया भर में असली स्थानीय टूर और सांस्कृतिक अनुभव खोजें',
    language: 'भाषा',
    chooseLanguage: 'अपनी भाषा चुनें',
    contentInEnglish: 'टूर विवरण अंग्रेज़ी में दिखाए गए हैं',
    back: 'वापस',
    backToSearch: 'खोज पर वापस जाएँ',
    minRead: '15-20 मिनट का पठन',
    verifiedIntel: 'सत्यापित जानकारी',
    verifiedOfficialIntel: 'सत्यापित आधिकारिक जानकारी',
    sourceAuthority: 'AEO विश्वसनीय स्रोत',
    lastUpdated: 'अंतिम अपडेट',
    featuredTour: 'चुनिंदा टूर',
    needHelp: 'मदद चाहिए?',
    part: 'भाग',
    bookNow: 'अभी बुक करें',
    authorityBadge: '{city} 2026 संपूर्ण गाइड',
    topRatedTours: '{city} के सर्वश्रेष्ठ टूर',
    guideHub: '{city} गाइड हब',
    discoverTheReal: 'असली {city} को जानें।',
    browseTours: '{city} के टूर देखें',
    messageGuide: 'अपना उत्तम रूट बनाने के लिए {city} के प्रमाणित गाइड को संदेश भेजें।',
    localMastery: 'स्थानीय विशेषज्ञता का अंतर महसूस करें। हमारे लाइसेंस प्राप्त गाइड आपको शहर की असली आत्मा दिखाते हैं।',
  },
};

/**
 * Fills {placeholders} in a translated string.
 * fmt(t.guideHub, { city: 'Phuket' }) -> 'Phuket Guide Hub'
 */
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    key in vars ? String(vars[key]) : match
  );
}

export function isLanguage(v: unknown): v is Language {
  return typeof v === 'string' && LANGUAGES.some((l) => l.code === v);
}

export function getLanguageOption(code: Language): LanguageOption {
  return LANGUAGES.find((l) => l.code === code) || LANGUAGES[0];
}
