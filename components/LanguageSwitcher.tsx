'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Globe, Check } from 'lucide-react';
import {
  LANGUAGES,
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  isLanguage,
  getLanguageOption,
  translations,
  type Language,
} from '@/lib/i18n';

/**
 * Reads the stored language. Kept as a hook so the header button and any
 * translated strings stay in sync without a provider — the value lives in
 * localStorage and changes broadcast via a custom event.
 */
export function useLanguage() {
  const [lang, setLang] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (isLanguage(stored)) setLang(stored);
    } catch {
      /* storage blocked — fall back to English */
    }

    const onChange = (e: Event) => {
      const next = (e as CustomEvent<Language>).detail;
      if (isLanguage(next)) setLang(next);
    };
    window.addEventListener('abl:languagechange', onChange);
    return () => window.removeEventListener('abl:languagechange', onChange);
  }, []);

  const setLanguage = (next: Language) => {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    const opt = getLanguageOption(next);
    document.documentElement.lang = next;
    document.documentElement.dir = opt.rtl ? 'rtl' : 'ltr';
    window.dispatchEvent(new CustomEvent('abl:languagechange', { detail: next }));
    setLang(next);
  };

  return { lang, setLanguage, t: translations[lang] };
}

export default function LanguageSwitcher() {
  const { lang, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  // apply stored direction/lang on first mount
  useEffect(() => {
    const opt = getLanguageOption(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = opt.rtl ? 'rtl' : 'ltr';
  }, [lang]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const current = getLanguageOption(lang);

  return (
    <div className="relative" ref={boxRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.language}: ${current.label}`}
        className="flex flex-col items-center gap-0.5 sm:gap-1 hover:text-[#10B981] p-1.5 sm:p-2 min-w-[44px] min-h-[44px] justify-center"
      >
        <Globe size={18} className="sm:w-5 sm:h-5" />
        <span className="hidden lg:block text-[11px]">{current.short}</span>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t.chooseLanguage}
          // max-w keeps the panel inside the viewport on narrow screens, where the
          // trigger can sit close enough to the right edge that a fixed 14rem overflows.
          className="absolute right-0 top-full mt-2 z-[60] w-56 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-2xl border border-gray-100 py-2"
        >
          <div className="px-4 pt-1 pb-2 text-[11px] font-bold uppercase tracking-wide text-gray-400">
            {t.chooseLanguage}
          </div>

          {LANGUAGES.map((opt) => {
            const active = opt.code === lang;
            return (
              <button
                key={opt.code}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  setLanguage(opt.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left text-[13px] hover:bg-[#10B981]/10 ${
                  active ? 'text-[#10B981] font-semibold' : 'text-[#001A33]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-gray-400 w-6">{opt.short}</span>
                  <span dir={opt.rtl ? 'rtl' : 'ltr'}>{opt.native}</span>
                </span>
                {active && <Check size={14} className="shrink-0" />}
              </button>
            );
          })}

          <div className="mt-1 border-t border-gray-100 px-4 pt-2 text-[11px] leading-snug text-gray-400">
            {t.contentInEnglish}
          </div>
        </div>
      )}
    </div>
  );
}
