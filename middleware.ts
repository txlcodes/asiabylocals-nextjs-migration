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


// Tours that were filed under the wrong city and have since been moved. These
// URLs were live and in the sitemap, so they must redirect rather than 404.
//
// Hakone was being used as a catch-all for the whole Mt Fuji area: summit
// climbs from Fujinomiya and Subashiri, Kawaguchiko day tours, the Chureito
// Pagoda, Aokigahara. A Kawaguchiko guide spotted it on his own listing within
// minutes of us contacting him, which is how it surfaced. These now live under
// /japan/mount-fuji/.
const MOVED_CITY: Record<string, { from: string; to: string }> = {
  'mount-fuji-signature-private-day-tour-kawaguchiko': { from: 'hakone', to: 'mount-fuji' },
  'kawaguchiko-to-hakone-private-guided-transfer': { from: 'hakone', to: 'mount-fuji' },
  'mount-fuji-private-car-day-tour-from-tokyo': { from: 'hakone', to: 'mount-fuji' },
  'mount-fuji-fifth-station-private-day-tour': { from: 'hakone', to: 'mount-fuji' },
  'mount-fuji-summit-climb-fujinomiya-route-2-days': { from: 'hakone', to: 'mount-fuji' },
  'mount-fuji-summit-climb-subashiri-route-2-days': { from: 'hakone', to: 'mount-fuji' },
  'mount-fuji-sunrise-summit-climb-2-days': { from: 'hakone', to: 'mount-fuji' },
  'mount-fuji-prince-route-private-climb-2-days': { from: 'hakone', to: 'mount-fuji' },
  'aokigahara-lava-forest-guided-nature-walk': { from: 'hakone', to: 'mount-fuji' },
  'mount-hoei-crater-day-trek-fuji': { from: 'hakone', to: 'mount-fuji' },
  'mount-fuji-chureito-pagoda-oshino-hakkai-day-tour': { from: 'hakone', to: 'mount-fuji' },
};

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length < 2) return NextResponse.next();

  const [countrySegment, citySegment, ...rest] = segments;
  const country = countrySegment.toLowerCase();
  const city = citySegment.toLowerCase();

  if (RESERVED_TOP_LEVEL.has(country)) return NextResponse.next();

  // A tour that has been recategorised: keep its old URL working.
  const moved = rest.length === 1 ? MOVED_CITY[rest[0]] : undefined;
  if (moved && city === moved.from) {
    return NextResponse.redirect(
      new URL(['', country, moved.to, rest[0]].join('/') + search, request.url), 308);
  }

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
