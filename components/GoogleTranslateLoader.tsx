'use client';

import Script from 'next/script';
import { SOURCE_LANGUAGE } from '@/lib/languages';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

/**
 * Mounts Google Translate's website widget once for the whole app.
 *
 * The visible gadget is hidden by CSS (see `app/globals.css`) — the header's
 * LanguageSwitcher is the UI. The widget only needs to exist so that the
 * `googtrans` cookie it reads on load is actually applied to the page, and so
 * the hidden `select.goog-te-combo` is available for in-place switching.
 */
export default function GoogleTranslateLoader() {
  return (
    <>
      <div id="google_translate_element" aria-hidden="true" />
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          window.googleTranslateElementInit = function () {
            if (!window.google || !window.google.translate) return;
            new window.google.translate.TranslateElement(
              {
                pageLanguage: '${SOURCE_LANGUAGE}',
                autoDisplay: false,
              },
              'google_translate_element'
            );
          };
        `}
      </Script>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
