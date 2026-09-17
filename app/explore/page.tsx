import type { Metadata } from 'next';
import Link from 'next/link';
import * as C from '@/lib/constants';
import { CITY_URL_MAP } from '@/lib/cityCountryMap';
import { BALI_GUIDES } from '@/lib/baliGuides';
import { countryDisplayName } from '@/lib/countryName';

export const metadata: Metadata = {
  title: 'Explore Every Destination and Guide | AsiaByLocals',
  description: 'Every country, city and travel guide on AsiaByLocals on one page: tours by verified local operators across India, Japan, Thailand, Sri Lanka, Vietnam, Indonesia, the UAE and Nepal.',
  alternates: { canonical: 'https://www.asiabylocals.com/explore' },
};

// An HTML index of the whole site, linked from the footer, so every city and
// guide page is two clicks from anywhere. Google was leaving deep pages
// (Colombo tours, Japan guides, small Indian cities) as "discovered, not
// crawled" because nothing high in the site pointed at them.
const label = (s: string) => s.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());

export default function ExplorePage() {
  const guides: Record<string, string[]> = { ...Object.fromEntries(Object.entries(BALI_GUIDES).map(([c, g]) => [c, g.map((x) => x.slug)])) };
  for (const [k, v] of Object.entries(C)) {
    if (k.endsWith('_INFO_SLUGS') && Array.isArray(v)) {
      const city = k.replace('_INFO_SLUGS', '').toLowerCase().replace(/_/g, '-');
      if (!guides[city]) guides[city] = v as string[];
    }
  }
  const byCountry: Record<string, string[]> = {};
  for (const [slug, { country, city }] of Object.entries(CITY_URL_MAP)) {
    if (slug !== city) continue; // aliases like 'bali' point at a real city
    (byCountry[country] ??= []).push(city);
  }
  const order = ['india', 'japan', 'thailand', 'indonesia', 'sri-lanka', 'vietnam', 'uae', 'nepal'];
  const countries = [...order.filter((c) => byCountry[c]), ...Object.keys(byCountry).filter((c) => !order.includes(c))];

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-[#001A33] mb-3">Explore AsiaByLocals</h1>
      <p className="text-gray-600 mb-10 max-w-3xl">Every destination and travel guide on the site. Each city page lists all of its tours, run by local operators we message directly.</p>
      {countries.map((country) => (
        <section key={country} className="mb-12">
          <h2 className="text-2xl font-black text-[#001A33] mb-4">
            <Link href={`/${country}`} className="hover:text-[#10B981]">{country === 'indonesia' ? 'Bali (Indonesia)' : countryDisplayName(country)}</Link>
            {' '}<Link href={`/${country}/itineraries`} className="text-[14px] font-semibold text-[#10B981] ml-3">Itineraries</Link>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {byCountry[country].sort().map((city) => (
              <div key={city}>
                <Link href={`/${country}/${city}`} className="font-black text-[#001A33] hover:text-[#10B981]">{label(city)} tours</Link>
                {guides[city] && guides[city].length > 0 && (
                  <ul className="mt-1 text-[13px] text-gray-600 space-y-0.5">
                    {guides[city].map((g) => (
                      <li key={g}><Link href={`/${country}/${city}/${g}`} className="hover:text-[#10B981]">{label(g)}</Link></li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
