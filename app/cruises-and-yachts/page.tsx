import { Metadata } from 'next';
import CruisesPageClient from '@/components/CruisesPageClient';
import { fetchCruiseTours } from '@/lib/cruiseCollection';

// Inventory changes by script, not by deploy, so this must revalidate on its own.
export const revalidate = 3600;

const PAGE_URL = 'https://www.asiabylocals.com/cruises-and-yachts';
const TITLE = 'Cruises & Yacht Tours Across Asia | AsiaByLocals';
const DESCRIPTION =
  'Book boat cruises, private yacht charters, dhow dinners, catamaran sails and island-hopping trips across Asia and the Middle East, run by verified local operators in over 30 countries.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'AsiaByLocals',
    images: [{ url: 'https://www.asiabylocals.com/og-image.jpg', width: 1200, height: 630, alt: 'Cruises and yacht tours across Asia' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

export default async function CruisesAndYachtsPage() {
  const collection = await fetchCruiseTours();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Cruises & Yacht Tours Across Asia',
        description: DESCRIPTION,
        url: PAGE_URL,
        isPartOf: { '@type': 'WebSite', name: 'AsiaByLocals', url: 'https://www.asiabylocals.com' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.asiabylocals.com' },
          { '@type': 'ListItem', position: 2, name: 'Cruises & Yachts', item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CruisesPageClient collection={collection} />
    </>
  );
}
