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
    // Every (image, width, format) pair Cloudinary has to build is a billable
    // transformation, and those were 20,615 of the 57.8 credits that took the
    // account over its limit. Nine widths across 8,650 photos generated 13,991
    // derived files. These four cover what the layout actually asks for:
    // 384 for card thumbnails, 640 for phones, 1080 for the gallery, 1600 for
    // the hero on a large screen. 1920 was only ever serving pixels nobody can
    // see on a photo that started at 0.73 MB.
    deviceSizes: [640, 1080, 1600],
    imageSizes: [384],
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
