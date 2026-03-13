import { Metadata } from 'next';
import HomepageClient from '@/components/HomepageClient';

export const metadata: Metadata = {
  title: 'AsiaByLocals - Authentic Local Tours & Cultural Experiences Across Asia | Expert Local Guides',
  description: 'Discover authentic local tours and cultural experiences across Asia. Book tours with verified local guides in India, Japan, Thailand, Vietnam, Indonesia, and more. Expert-led cultural experiences, food tours, heritage walks, and immersive travel adventures.',
  alternates: {
    canonical: 'https://www.asiabylocals.com',
  },
};

export default function HomePage() {
  // Server-side JSON-LD — guaranteed in raw HTML for all crawlers (Googlebot, ChatGPT, Perplexity, Gemini)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.asiabylocals.com/#organization',
        name: 'AsiaByLocals',
        url: 'https://www.asiabylocals.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.asiabylocals.com/logo.png',
          width: 600,
          height: 300,
        },
        description: 'AsiaByLocals connects travelers with verified, licensed local guides across Asia. Book authentic cultural experiences, heritage walks, food tours, and private day trips in India, Thailand, Japan, Vietnam, Indonesia, and more.',
        foundingDate: '2024',
        areaServed: [
          { '@type': 'Country', name: 'India' },
          { '@type': 'Country', name: 'Thailand' },
          { '@type': 'Country', name: 'Japan' },
          { '@type': 'Country', name: 'Vietnam' },
          { '@type': 'Country', name: 'Indonesia' },
        ],
        knowsAbout: ['Guided Tours', 'Cultural Experiences', 'Heritage Walks', 'Food Tours', 'Local Guides', 'Asia Travel'],
        sameAs: [
          'https://www.instagram.com/asiabylocals',
          'https://www.facebook.com/asiabylocals',
          'https://www.tiktok.com/@asiabylocals',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          availableLanguage: ['English'],
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.asiabylocals.com/#website',
        name: 'AsiaByLocals',
        url: 'https://www.asiabylocals.com',
        description: 'Discover authentic local tours and cultural experiences across Asia with verified local guides.',
        publisher: { '@id': 'https://www.asiabylocals.com/#organization' },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.asiabylocals.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomepageClient />
    </>
  );
}
