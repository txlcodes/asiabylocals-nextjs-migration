'use client';

import { useEffect } from 'react';
import {
  LANGUAGE_STORAGE_KEY,
  isLanguage,
  getLanguageOption,
} from '@/lib/i18n';

/**
 * Applies the stored language to <html lang> and <html dir> on every page.
 *
 * The LanguageSwitcher used to be the only thing doing this, which meant a
 * reader who chose Arabic on the homepage lost RTL the moment they opened a
 * tour or guide page — those pages don't render the switcher. Mounting this in
 * the root layout makes the choice apply site-wide.
 */
export default function LanguageBoot() {
  useEffect(() => {
    const apply = (code: string) => {
      if (!isLanguage(code)) return;
      const opt = getLanguageOption(code);
      document.documentElement.lang = code;
      document.documentElement.dir = opt.rtl ? 'rtl' : 'ltr';
    };

    try {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (stored) apply(stored);
    } catch {
      /* storage blocked — stay on the server-rendered default */
    }

    const onChange = (e: Event) => apply((e as CustomEvent<string>).detail);
    window.addEventListener('abl:languagechange', onChange);
    return () => window.removeEventListener('abl:languagechange', onChange);
  }, []);

  return null;
}
