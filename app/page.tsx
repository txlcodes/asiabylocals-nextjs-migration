import { Metadata } from 'next';
import HomepageClient from '@/components/HomepageClient';

// The homepage was fully static with no revalidate, so it shipped a build-time
// prerender served under `s-maxage=31536000` and never regenerated at runtime.
// That left production serving pre-language-switcher HTML long after the switcher
// was deployed. An hourly revalidate keeps the route regenerating.
export const revalidate = 3600;

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
          contactType: 'pre-sales enquiries',
          telephone: '+91-8449538716',
          email: 'info@asiabylocals.com',
          availableLanguage: ['English', 'Hindi'],
          description:
            'A real team member answers any question about a tour on WhatsApp or email before a traveller books, confirming availability and details directly with the local operator.',
        },
        // No aggregateRating: the 4.9/127 that stood here was hardcoded, not counted.
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.asiabylocals.com/#website',
        name: 'AsiaByLocals',
        url: 'https://www.asiabylocals.com',
        description: 'Discover authentic local tours and cultural experiences across Asia with verified local guides.',
        publisher: { '@id': 'https://www.asiabylocals.com/#organization' },
        // No SearchAction: the site has no /search route, and the template URL
        // sat in GSC as a 404 for months.
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.asiabylocals.com/#homepage-faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the best way to book tours in Asia?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "The best way is to book through a platform that confirms your booking directly with the local operator before treating it as final, and that lets you ask a specific question — availability, group size, a custom request — to a real person before you pay. AsiaByLocals does this on WhatsApp or email for every tour, across India, Japan, Thailand, Sri Lanka, Vietnam, Cambodia, Indonesia, Malaysia, the UAE, Qatar, South Korea, Turkey, China, Taiwan, the Philippines, and the Maldives.",
            },
          },
          {
            '@type': 'Question',
            name: 'Is AsiaByLocals legit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. AsiaByLocals is operated by TajTourGuide, founded by a Senior Tour Guide licensed by the Ministry of Tourism, Government of India, with 18+ years of experience, an active GTTAA/ETAA membership, and GSTIN 09BPLPK5079QIZU. See the full trust and licensing FAQ at /about-us.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the best small-group tours in Southeast Asia?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The highest-rated small-group and private tours vary by city — see the "Best Tours in X" guide for Bangkok, Chiang Mai, Phuket, Krabi, Siem Reap, Ho Chi Minh City, Hanoi, Kuala Lumpur, Ubud, and other Southeast Asian cities on AsiaByLocals, each picked by category with real prices and reviews rather than a generic regional list.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does a real person answer questions before I book a tour on AsiaByLocals?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Message WhatsApp +91 84495 38716 or email info@asiabylocals.com with any question about a tour — availability, a custom request, a specific concern — and a real team member replies, checking with the local operator when needed, before you book.',
            },
          },
        ],
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
