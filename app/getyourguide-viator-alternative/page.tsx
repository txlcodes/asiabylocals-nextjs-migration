import { Metadata } from 'next';
import ComparisonPageClient from '@/components/ComparisonPageClient';
import { FAQ_ITEMS } from '@/lib/comparisonPageContent';

export const metadata: Metadata = {
  title: 'Best GetYourGuide & Viator Alternative for Asia | AsiaByLocals',
  description:
    'Compare AsiaByLocals vs GetYourGuide, Viator & Klook. Book with licensed local guides in India & Thailand. Lower commissions, free cancellation, 1 business day refunds.',
  alternates: {
    canonical: 'https://www.asiabylocals.com/getyourguide-viator-alternative',
  },
  openGraph: {
    type: 'article',
    title: 'Best GetYourGuide & Viator Alternative for Asia | AsiaByLocals',
    description:
      'Compare AsiaByLocals vs GetYourGuide, Viator & Klook. Book with licensed local guides in India & Thailand. Lower commissions, free cancellation, 1 business day refunds.',
    url: 'https://www.asiabylocals.com/getyourguide-viator-alternative',
    siteName: 'AsiaByLocals',
    images: [
      {
        url: 'https://www.asiabylocals.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AsiaByLocals vs GetYourGuide vs Viator vs Klook — Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best GetYourGuide & Viator Alternative for Asia | AsiaByLocals',
    description:
      'Book direct with licensed local guides. Lower prices, free cancellation, 1 business day refunds.',
  },
};

// JSON-LD structured data (server-rendered for crawlers)
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Best GetYourGuide & Viator Alternative for Asia Travel',
  description:
    'An honest comparison of GetYourGuide, Viator, and Klook for booking tours in Asia. Why booking directly with licensed local guides offers better prices, better experiences, and faster refunds.',
  author: {
    '@type': 'Organization',
    name: 'AsiaByLocals',
    url: 'https://www.asiabylocals.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'AsiaByLocals',
    url: 'https://www.asiabylocals.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.asiabylocals.com/logo.png',
    },
  },
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  url: 'https://www.asiabylocals.com/getyourguide-viator-alternative',
  image: 'https://www.asiabylocals.com/og-image.jpg',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.asiabylocals.com/getyourguide-viator-alternative',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.asiabylocals.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'GetYourGuide & Viator Alternative',
      item: 'https://www.asiabylocals.com/getyourguide-viator-alternative',
    },
  ],
};

export default function GetYourGuideViatorAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ComparisonPageClient />
    </>
  );
}
