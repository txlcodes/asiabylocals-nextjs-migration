'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Check, Globe } from 'lucide-react';
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  getCurrentLanguageCode,
  getLanguage,
  setLanguage,
} from '@/lib/languages';

/**
 * The globe control in the site header. Opens a list of languages and applies
 * the chosen one to the whole page via the Google Translate widget mounted in
 * the root layout.
 */
export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [activeCode, setActiveCode] = useState(DEFAULT_LANGUAGE.code);
  const containerRef = useRef<HTMLDivElement>(null);

  // Read on the client only — the cookie is not available while rendering on
  // the server, and reading it during render would desync hydration.
  useEffect(() => {
    setActiveCode(getCurrentLanguageCode());
  }, []);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const active = getLanguage(activeCode);

  const handleSelect = useCallback((code: string) => {
    setOpen(false);
    if (code === getCurrentLanguageCode()) return;
    setActiveCode(code);
    setLanguage(code);
  }, []);

  return (
    // `notranslate` keeps the widget from translating the language names — a
    // list where every entry reads "English" would be useless.
    <div ref={containerRef} className="relative notranslate" translate="no">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Change language — currently ${active.english}`}
        className={`flex flex-col items-center gap-0.5 sm:gap-1 p-1.5 sm:p-2 min-w-[44px] min-h-[44px] justify-center rounded-lg transition-colors ${open ? 'text-[#10B981] bg-[#10B981]/10' : 'hover:text-[#10B981]'
          }`}
      >
        <Globe size={18} className="sm:w-5 sm:h-5" />
        <span className="hidden lg:block text-[11px]">{active.short}</span>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Select a language"
          className="absolute right-0 top-full mt-2 z-[60] w-60 max-h-[min(70vh,420px)] overflow-y-auto rounded-xl bg-white shadow-2xl border border-gray-100 py-2"
        >
          <div className="px-4 pb-2 mb-1 border-b border-gray-100">
            <div className="text-[13px] font-bold text-[#001A33]">Language</div>
            <div className="text-[11px] font-medium text-gray-400">
              Translated automatically
            </div>
          </div>

          {LANGUAGES.map((language) => {
            const isActive = language.code === active.code;
            return (
              <button
                key={language.code}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => handleSelect(language.code)}
                className={`w-full flex items-center justify-between gap-2 text-left px-4 py-2 hover:bg-[#10B981]/10 transition-colors ${isActive ? 'text-[#10B981]' : 'text-[#001A33]'
                  }`}
              >
                <span className="min-w-0">
                  <span className="block text-[13px] font-semibold truncate">
                    {language.native}
                  </span>
                  {language.native !== language.english && (
                    <span className="block text-[11px] font-medium text-gray-400 truncate">
                      {language.english}
                    </span>
                  )}
                </span>
                {isActive && <Check size={15} className="flex-shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
