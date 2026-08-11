/**
 * Site-wide language switching.
 *
 * The site's copy lives inline in the page components and the tour content comes
 * straight out of the database, so there is no per-locale message catalogue to
 * switch between. Translation is therefore done by Google Translate's website
 * widget, which is driven entirely by the `googtrans` cookie: it holds
 * `/<source>/<target>` and the widget applies it on every page load.
 */

export interface SiteLanguage {
  /** Google Translate language code, also what goes in the cookie. */
  code: string;
  /** Short label shown next to the globe icon. */
  short: string;
  /** Name in the language itself. */
  native: string;
  /** English name, shown underneath so the list stays scannable. */
  english: string;
}

export const SOURCE_LANGUAGE = 'en';

export const LANGUAGES: SiteLanguage[] = [
  { code: 'en', short: 'EN', native: 'English', english: 'English' },
  { code: 'hi', short: 'HI', native: 'हिन्दी', english: 'Hindi' },
  { code: 'ja', short: 'JA', native: '日本語', english: 'Japanese' },
  { code: 'ko', short: 'KO', native: '한국어', english: 'Korean' },
  { code: 'zh-CN', short: '中文', native: '简体中文', english: 'Chinese (Simplified)' },
  { code: 'zh-TW', short: '繁中', native: '繁體中文', english: 'Chinese (Traditional)' },
  { code: 'th', short: 'TH', native: 'ไทย', english: 'Thai' },
  { code: 'vi', short: 'VI', native: 'Tiếng Việt', english: 'Vietnamese' },
  { code: 'id', short: 'ID', native: 'Bahasa Indonesia', english: 'Indonesian' },
  { code: 'ms', short: 'MS', native: 'Bahasa Melayu', english: 'Malay' },
  { code: 'es', short: 'ES', native: 'Español', english: 'Spanish' },
  { code: 'fr', short: 'FR', native: 'Français', english: 'French' },
  { code: 'de', short: 'DE', native: 'Deutsch', english: 'German' },
  { code: 'it', short: 'IT', native: 'Italiano', english: 'Italian' },
  { code: 'pt', short: 'PT', native: 'Português', english: 'Portuguese' },
  { code: 'ru', short: 'RU', native: 'Русский', english: 'Russian' },
  { code: 'ar', short: 'AR', native: 'العربية', english: 'Arabic' },
  { code: 'he', short: 'HE', native: 'עברית', english: 'Hebrew' },
  { code: 'nl', short: 'NL', native: 'Nederlands', english: 'Dutch' },
  { code: 'pl', short: 'PL', native: 'Polski', english: 'Polish' },
  { code: 'tr', short: 'TR', native: 'Türkçe', english: 'Turkish' },
];

export const DEFAULT_LANGUAGE = LANGUAGES[0];

const COOKIE_NAME = 'googtrans';

export function getLanguage(code: string | null | undefined): SiteLanguage {
  return LANGUAGES.find((lang) => lang.code === code) || DEFAULT_LANGUAGE;
}

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

/**
 * The cookie is written on every host variant Google might read it back from
 * (`www.asiabylocals.com`, `.asiabylocals.com`, …) so the choice survives both
 * a reload and a hop between the apex and www hosts.
 */
function cookieDomains(): (string | null)[] {
  if (typeof window === 'undefined') return [null];
  const host = window.location.hostname;
  const domains: (string | null)[] = [null, host];
  const parts = host.split('.');
  if (parts.length > 1 && !/^\d+(\.\d+)*$/.test(host)) {
    domains.push(`.${host}`);
    domains.push(`.${parts.slice(-2).join('.')}`);
  }
  return Array.from(new Set(domains));
}

function writeCookie(value: string | null) {
  const expiry = value === null
    ? 'Thu, 01 Jan 1970 00:00:00 GMT'
    : new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
  const cookieValue = value === null ? '' : encodeURIComponent(value);

  for (const domain of cookieDomains()) {
    document.cookie = `${COOKIE_NAME}=${cookieValue};expires=${expiry};path=/${domain ? `;domain=${domain}` : ''}`;
  }
}

/** Reads the language currently applied to the page, from the widget's cookie. */
export function getCurrentLanguageCode(): string {
  const raw = readCookie(COOKIE_NAME);
  if (!raw) return SOURCE_LANGUAGE;
  // Cookie format is `/en/ja`; older widget versions use `/auto/ja`.
  const target = raw.split('/').filter(Boolean).pop();
  return target && LANGUAGES.some((lang) => lang.code === target) ? target : SOURCE_LANGUAGE;
}

/**
 * Switches the page language.
 *
 * The widget renders a hidden `<select class="goog-te-combo">`; driving that
 * translates in place with no reload. When it has not loaded yet (or the user
 * is switching back to English, which the select cannot always undo cleanly) we
 * fall back to writing the cookie and reloading.
 */
export function setLanguage(code: string) {
  const language = getLanguage(code);

  if (language.code === SOURCE_LANGUAGE) {
    writeCookie(null);
    window.location.reload();
    return;
  }

  writeCookie(`/${SOURCE_LANGUAGE}/${language.code}`);

  const combo = document.querySelector<HTMLSelectElement>('select.goog-te-combo');
  if (combo) {
    combo.value = language.code;
    combo.dispatchEvent(new Event('change'));
    return;
  }

  window.location.reload();
}
