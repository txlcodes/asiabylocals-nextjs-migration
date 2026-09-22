'use client';
// Inside /fr, /de, /es: keep visitors in the translated folder. The shared
// client components build root-relative links (/india/agra/...); rather than
// touch 150 call sites, rewrite the hrefs after render and on DOM changes.
// Only destination-style paths are prefixed; app routes (booking, supplier,
// support...) stay language-neutral.
import { useEffect } from 'react';

const SKIP = /^\/(?:api|_next|about|about-us|admin|become-a-supplier|booking|booking-confirmation|email-verification-waiting|explore|getyourguide-viator-alternative|payment-callback|privacy-policy|review|safety-guidelines|secure-panel-abl|supplier|support|terms-and-conditions|tour|verify-email|fr|de|es)(?:\/|$)/;

export default function LangLinks({ lang }: { lang: string }) {
  useEffect(() => {
    const fix = () => {
      document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]').forEach((a) => {
        const h = a.getAttribute('href') || '';
        if (h === '/' || SKIP.test(h) || h.startsWith(`/${lang}/`)) return;
        a.setAttribute('href', `/${lang}${h}`);
      });
    };
    fix();
    const mo = new MutationObserver(() => fix());
    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, [lang]);
  return null;
}
