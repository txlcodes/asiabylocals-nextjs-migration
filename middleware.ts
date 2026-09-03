import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { CITY_URL_MAP } from '@/lib/cityCountryMap';

// The /<country>/<city> route accepts ANY country segment, so the same city
// page was reachable — and indexable — under every country. Google indexed
// /india/phuket/phuket-beaches-guide and /india/phuket/phuket-diving-snorkeling-guide,
// each self-canonicalising to the wrong-country URL, which split them off from
// the real /thailand/phuket/ pages entirely (those two had zero impressions
// while their clones took all of them). /banana/agra/taj-mahal returned 200 too.
//
// Middleware runs before routing, so it can answer with a real 308 (which Google
// follows and consolidates) rather than a canonical tag the duplicate overrides.

// Top-level app/ directories. A first segment that is one of these is a real
// route, not a country, and must be left completely alone.
const RESERVED_TOP_LEVEL = new Set([
  'about',
  'about-us',
  'admin',
  'become-a-supplier',
  'booking',
  'booking-confirmation',
  'email-verification-waiting',
  'getyourguide-viator-alternative',
  'payment-callback',
  'privacy-policy',
  'review',
  'safety-guidelines',
  'secure-panel-abl',
  'supplier',
  'support',
  'terms-and-conditions',
  'tour',
  'verify-email',
]);

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length < 2) return NextResponse.next();

  const [countrySegment, citySegment, ...rest] = segments;
  const country = countrySegment.toLowerCase();
  const city = citySegment.toLowerCase();

  if (RESERVED_TOP_LEVEL.has(country)) return NextResponse.next();

  // A city we know about, sitting under the wrong country → send it home.
  const mapping = CITY_URL_MAP[city];
  if (mapping && mapping.country !== country) {
    const correctPath = ['', mapping.country, mapping.city, ...rest].join('/');
    return NextResponse.redirect(new URL(correctPath + search, request.url), 308);
  }

  // The unknown-country case (/<anything>/<anything> rendering 200) is handled
  // in app/[country]/[city]/page.tsx via notFound(), so it gets the real styled
  // 404 page instead of the bare response middleware could return here.
  return NextResponse.next();
}

export const config = {
  // Skip Next internals, the API, and anything with a file extension
  // (sitemap.xml, robots.txt, llms.txt, images, fonts …).
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)'],
};
