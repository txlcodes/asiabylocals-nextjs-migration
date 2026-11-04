'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// Change the number here only. Digits with country code, no "+" or spaces.
const WHATSAPP_NUMBER = '918449538716';

// Pages where a "chat with us" button is noise (account, checkout, admin).
const HIDDEN_PREFIXES = ['/admin', '/supplier', '/booking', '/payment', '/verify', '/review', '/email-waiting'];

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Floating WhatsApp button, mounted once in the root layout.
 *
 * The message carries the page the visitor was on, so whoever answers knows
 * which tour or city they asked about. Sits above the mobile "Book now" bar on
 * tour pages (bottom-24 on small screens, bottom-6 from lg up). Each click is
 * sent to GA4 as `whatsapp_click` so leads can be counted per page.
 */
export default function WhatsAppButton() {
  const pathname = usePathname() || '/';
  const [href, setHref] = useState(`https://wa.me/${WHATSAPP_NUMBER}`);

  useEffect(() => {
    const title = document.title.replace(/\s*\|\s*AsiaByLocals\s*$/i, '').trim();
    const text = `Hi! I have a question about this page: ${title ? title + ' - ' : ''}${window.location.href}`;
    setHref(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`);
  }, [pathname]);

  if (HIDDEN_PREFIXES.some((p) => pathname.startsWith(p))) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onClick={() => {
        try {
          window.gtag?.('event', 'whatsapp_click', { page_path: pathname });
        } catch {
          /* analytics must never block the chat */
        }
      }}
      className="fixed right-4 bottom-24 lg:bottom-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe5a] transition-colors px-4 py-3"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.6-5.3A8.4 8.4 0 1 1 21 11.5z" />
      </svg>
      <span className="hidden sm:inline text-sm font-bold">Chat on WhatsApp</span>
    </a>
  );
}
