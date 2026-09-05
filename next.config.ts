import type { NextConfig } from 'next';
import { SLUG_REDIRECTS } from './lib/redirectedSlugs';

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
    // Trim the generated variant set to the widths the layout actually requests
    // (card grid, gallery, hero). Fewer variants = higher cache hit rate.
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [128, 160, 256, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
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

    return Object.entries(slugRedirects).map(([oldSlug, newSlug]) => ({
      source: `/:country/:city/${oldSlug}`,
      destination: `/:country/:city/${newSlug}`,
      permanent: true,
    }));
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
