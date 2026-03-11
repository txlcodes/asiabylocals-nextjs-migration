import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Keep all URLs identical — no trailing slashes added
  trailingSlash: false,

  images: {
    // Serve AVIF first (50% smaller), fall back to WebP — applies to all Next.js <Image> components
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'www.asiabylocals.com' },
    ],
  },

  // Pass API URL to the client safely
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001',
  },

  // 301 Redirects: Old slugs → New SEO-friendly slugs
  async redirects() {
    const slugRedirects: Record<string, string> = {
      // Agra
      'agra-walking-sunrise-tour': 'taj-mahal-sunrise-skip-the-line-tour',
      'taj-mahal-sunrise-sunrise-tour': 'private-sunrise-taj-mahal-agra-fort-tour',
      'agra-gatimaan-entry-ticket': 'delhi-agra-round-trip-gatimaan-train',
      'agra-same-guided-tour': 'same-day-delhi-to-agra-tour',
      'taj-mahal-delhi-guided-tour': 'taj-mahal-same-day-tour-from-delhi',
      'female-guide-for-taj-mahal': 'taj-mahal-tour-with-female-guide',
      // Delhi
      'agra-fort-sunrise-tour': 'taj-mahal-sunrise-elephant-conservation-tour',
      'agra-fort-express-tour': 'taj-mahal-same-day-express-train-tour',
      'india-gate-inclusive-guided-tour': 'golden-triangle-tour-delhi-agra-jaipur',
      'india-gate-guided-tour-heritage': 'old-new-delhi-guided-tour',
      'india-gate-triangle-guided-tour': '6-days-golden-triangle-tour-from-delhi',
      'delhi-luxury-premium-tour': 'taj-mahal-agra-day-trip-luxury-car',
      'delhi-golden-guided-tour': '5-days-golden-triangle-tour-from-delhi',
      'agra-overnight-tour': 'delhi-to-agra-overnight-tour',
      // Jaipur
      'elepahnt-village-walking-tour': 'elephant-village-tour-jaipur',
      'hawa-mahal-food-tour': 'jaipur-same-day-tour-with-cooking-class',
      'hawa-mahal-full-day-tour': 'jaipur-private-full-day-sightseeing-by-car',
      'hawa-mahal-private-tour': 'jaipur-full-day-sightseeing-tour-by-car',
      'amber-fort-guided-tour': 'jaipur-city-tour-with-official-guide',
      'jaipur-enjoy-private-tour': 'jaipur-to-agra-taj-mahal-day-trip',
      'city-palace-experience-guided-tour': 'jaipur-block-printing-workshop',
      // Fixed duplicate "mahal" slugs
      'taj-mahal-mahal-guided-tour': 'taj-mahal-guided-tour-from-agra',
      'taj-mahal-mahal-full-day-tour': 'same-day-taj-mahal-tour-by-car-from-delhi',
      // Fixed Delhi bad slugs
      'delhi-old-new-delhi-private-half-day-tour': 'old-new-delhi-private-tour',
      'jaipur-royal-private-tour': 'delhi-to-jaipur-royal-private-day-tour',
    };

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
    ];
  },
};

export default nextConfig;
