import type { NextConfig } from 'next';
import { SLUG_REDIRECTS } from './lib/redirectedSlugs';
import { CITY_URL_MAP } from './lib/cityCountryMap';

const nextConfig: NextConfig = {
  // Keep all URLs identical — no trailing slashes added
  trailingSlash: false,

  images: {
    // Skip on-demand optimization in dev only — optimizing many remote images live
    // hangs `next dev`. Production keeps optimization (pre-cached at the edge).
    unoptimized: process.env.NODE_ENV === 'development',
    // Serve AVIF first (50% smaller), fall back to WebP — applies to all Next.js <Image> components
    formats: ['image/avif', 'image/webp'],
    // Tour photos never change once uploaded to Cloudinary, so cache each optimized
    // variant for a year instead of re-optimizing on the default 60s TTL. This is the
    // main lever that keeps image cost/latency flat as the catalogue grows.
    minimumCacheTTL: 31536000,
    // These must stay identical to the WIDTHS ladder in lib/cloudinaryLoader.ts.
    // Every stored width is a file on R2 and, while still on Cloudinary, a
    // billable transformation. A width that next/image asks for but the ladder
    // does not hold gets rounded up, so 1080 here would quietly serve the
    // 1600 file on every phone-sized gallery image.
    // 128 avatars, 384 card thumbnails, 640 cards and phones, 1600 heroes.
    deviceSizes: [640, 1600],
    imageSizes: [128, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      // Pre-resized WebP on Cloudflare R2, addressed by the Cloudinary
      // public_id. See lib/cloudinaryLoader.ts and NEXT_PUBLIC_IMAGE_HOST.
      { protocol: 'https', hostname: 'images.asiabylocals.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'www.asiabylocals.com' },
      { protocol: 'https', hostname: 'cdn.getyourguide.com' },
    ],
  },

  // Pass API URL to the client safely
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001',
  },

  // 301 Redirects: Old slugs → New SEO-friendly slugs
  async redirects() {
    const slugRedirects = SLUG_REDIRECTS;

    // Redirects have to fire under /fr, /de and /es as well. Every source
    // below starts with a literal country segment, so a translated duplicate
    // such as /fr/india/agra/<old-slug> never matched: it stayed live with its
    // own canonical while the English original had 308'd away months earlier,
    // and Google filed the pair as duplicates. That is the bulk of the
    // translated URLs sitting in "Crawled - currently not indexed".
    //
    // An optional :lang? param reads better but breaks the destination: with
    // the param absent, "/:lang/india/agra/x" renders as "//india/agra/x".
    // Each rule is therefore emitted twice, plain and language-prefixed.
    type Rule = { source: string; destination: string; permanent: boolean };
    const inEveryLanguage = (rules: Rule[]): Rule[] =>
      rules.flatMap(r => [
        r,
        {
          ...r,
          source: `/:lang(fr|de|es)${r.source}`,
          // /explore has no translated route, so those land on the English page.
          destination: r.destination.startsWith('/explore')
            ? r.destination
            : `/:lang${r.destination}`,
        },
      ]);

    return inEveryLanguage([
      // "Bali" is the island, not a city: its hub is the country page.
      { source: '/indonesia/bali', destination: '/indonesia', permanent: true },
      { source: '/bali', destination: '/indonesia', permanent: true },
      { source: '/bali/:path*', destination: '/indonesia/:path*', permanent: true },
      // Agra guide slugs once leaked under other cities' paths (GSC 404s since March).
      { source: '/:country(japan|thailand|sri-lanka|vietnam|uae|nepal|indonesia)/:city/:slug(taj-mahal-ticket-price-2026|taj-mahal-opening-time|is-taj-mahal-closed-on-friday|1-day-agra-itinerary|delhi-to-agra|places-to-visit-in-agra|things-to-do-in-agra|same-day-agra-tour-from-delhi|best-time-to-visit-agra|agra-travel-guide-2026)', destination: '/india/agra/:slug', permanent: true },
      // Deleted tours with no close replacement: send the visitor to the city page rather than a 404.
      { source: '/thailand/chiang-mai/:slug(huai-kaeo-waterfall-guided-tour|bua-tong-sticky-waterfall-adventure-tour)', destination: '/thailand/chiang-mai', permanent: true },
      { source: '/thailand/phuket/:slug(panak-island-guided-tour|phuket-kathu-food-tour)', destination: '/thailand/phuket', permanent: true },
      { source: '/thailand/bangkok/ancient-city-and-erawan-museum-entrance-tickets-entry-ticket', destination: '/thailand/bangkok', permanent: true },
      { source: '/india/agra/:slug(taj-mahal-tour-with-female-guide|female-guide-for-taj-mahal|taj-mahal-food-tour|agra-fort-guided-tour|heritage-walk-in-agra|taj-mahal-sunrise-secrets-with-a-professional-historian|taj-mahal-agra-sunrise-tour|undefined)', destination: '/india/agra', permanent: true },
      { source: '/india/delhi/:slug(india-gate-half-day-tour|india-gate-private-tour|india-gate-india-guided-tour|delhi-mahal-evening-tour|undefined)', destination: '/india/delhi', permanent: true },
      { source: '/india/jaipur/:slug(hawa-mahal-evening-tour|hawa-mahal-sightseeing-guided-tour)', destination: '/india/jaipur', permanent: true },
      // A non-Indian city under /india/ (Phuket guides were indexed at /india/phuket/*).
      ...Object.entries(CITY_URL_MAP)
        .filter(([slug, m]) => m.country !== 'india' && slug === m.city)
        .flatMap(([slug, m]) => [
          { source: `/india/${slug}`, destination: `/${m.country}/${slug}`, permanent: true },
          { source: `/india/${slug}/:path*`, destination: `/${m.country}/${slug}/:path*`, permanent: true },
        ]),
      // Country pages that never existed but were linked from an old homepage list.
      { source: '/:c(cambodia|china|macau|hong-kong|taiwan|philippines|malaysia|myanmar|singapore|south-korea)', destination: '/explore', permanent: true },
      { source: '/:c(cambodia|china|macau|hong-kong|taiwan|philippines|malaysia|myanmar|singapore|south-korea)/:path*', destination: '/explore', permanent: true },
      // City hubs with no supply (GSC held 25 of them as noindex for months). Send them to
      // the live country page until they get tours; delete the line when a city launches.
      { source: '/india/:c(bangalore|leh-ladakh|mysore)', destination: '/india', permanent: true },
      { source: '/thailand/:c(ko-lanta|hua-hin|ayutthaya|ko-samui)', destination: '/thailand', permanent: true },
      { source: '/indonesia/yogyakarta', destination: '/indonesia', permanent: true },
      { source: '/nepal/:c(lumbini|chitwan)', destination: '/nepal', permanent: true },
      ...Object.entries(slugRedirects).map(([oldSlug, newSlug]) => ({
        source: `/:country/:city/${oldSlug}`,
        destination: `/:country/:city/${newSlug}`,
        permanent: true,
      })),
    ]);
  },

  // Headers for SEO & security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        // Static art (logo, hero banners, city photos) is versioned by filename,
        // so it can be cached immutably instead of revalidated on every page view.
        source: '/:path*.(webp|avif|png|jpg|jpeg|svg|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
