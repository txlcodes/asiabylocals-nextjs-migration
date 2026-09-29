import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Clock, MapPin } from 'lucide-react';
import { cloudinaryLoader } from '@/lib/cloudinaryLoader';
import { DUPLICATE_CANONICAL_MAP } from '@/lib/duplicateCanonical';
import { canonicalFor, alternatesFor } from '@/lib/translations';

// The Golden Triangle hub.
//
// The 80 Delhi/Agra/Jaipur package tours were only ever reachable from the
// Delhi city page, filed under whichever city the operator happened to start
// from. Nothing on the site addressed the route as one thing, so "golden
// triangle tour" drew 49 impressions in 90 days and no clicks: there was
// nothing to rank.
//
// India only. `generateStaticParams` returns one country and anything else
// 404s, so /thailand/golden-triangle cannot become an empty 200 the way
// /<country>/<anything> once did.

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';
const CITIES = ['Delhi', 'Agra', 'Jaipur'];

export const revalidate = 3600;

interface Props {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return [{ country: 'india' }];
}

type Tour = {
  id: number | string;
  title: string;
  slug: string;
  city: string;
  duration?: string | null;
  pricePerPerson?: number | string | null;
  currency?: string | null;
  images?: unknown;
  shortDescription?: string | null;
};

/** Trip length in days, read from the title, which is the only place it is
 *  stated consistently. "7D/6N" and "7-Day" and "7 Days" all mean seven. */
function daysOf(title: string): number | null {
  const dn = title.match(/\b(\d{1,2})\s*d\s*\/\s*\d{1,2}\s*n\b/i);
  if (dn) return parseInt(dn[1], 10);
  const d = title.match(/\b(\d{1,2})\s*[-\s]?(?:day|days)\b/i);
  if (d) return parseInt(d[1], 10);
  const n = title.match(/\b(\d{1,2})\s*[-\s]?(?:night|nights)\b/i);
  if (n) return parseInt(n[1], 10) + 1;
  return null;
}

/** A tour belongs on this page if it says Golden Triangle, or if it is a
 *  multi-day trip naming at least two of the three cities. The second test
 *  catches the operators who describe the route without naming it. */
function isGoldenTriangle(t: Tour): boolean {
  const title = t.title || '';
  if (/golden triangle/i.test(title)) return true;
  const named = CITIES.filter(c => new RegExp(c, 'i').test(title)).length;
  return named >= 2 && daysOf(title) !== null;
}

function firstImage(images: unknown): string | undefined {
  if (Array.isArray(images)) return images[0] as string | undefined;
  if (typeof images === 'string') {
    if (images.startsWith('[')) {
      try { return JSON.parse(images)[0]; } catch { return undefined; }
    }
    return images || undefined;
  }
  return undefined;
}

async function getTours(): Promise<Tour[]> {
  const lists = await Promise.all(CITIES.map(async city => {
    try {
      const res = await fetch(
        `${API_URL}/api/public/tours?country=India&city=${encodeURIComponent(city)}&status=approved`,
        { next: { revalidate: 3600 } }
      );
      if (!res.ok) return [];
      const data = await res.json();
      if (!data?.success) return [];
      const list = Array.isArray(data.tours) ? data.tours
        : Array.isArray(data.tours?.tours) ? data.tours.tours : [];
      return list as Tour[];
    } catch {
      return [];
    }
  }));

  const seen = new Set<string>();
  const out: Tour[] = [];
  for (const t of lists.flat()) {
    if (!t?.slug || seen.has(t.slug)) continue;
    // A page that canonicalises elsewhere must not be linked as its own tour.
    if (DUPLICATE_CANONICAL_MAP[t.slug]) continue;
    if (!isGoldenTriangle(t)) continue;
    seen.add(t.slug);
    out.push(t);
  }
  return out;
}

const TITLE = 'Golden Triangle Tours: Delhi, Agra & Jaipur';
const DESCRIPTION =
  'Golden Triangle tours from two to ten days, with the real driving distances '
  + 'between Delhi, Agra and Jaipur and an honest word on what each length fits in.';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  if (country.toLowerCase() !== 'india') return {};
  const path = '/india/golden-triangle';
  return {
    title: `${TITLE} | AsiaByLocals`,
    description: DESCRIPTION,
    alternates: { canonical: canonicalFor(null, path), languages: alternatesFor(path) },
    openGraph: {
      title: `${TITLE} | AsiaByLocals`,
      description: DESCRIPTION,
      url: `https://www.asiabylocals.com${path}`,
      siteName: 'AsiaByLocals',
      type: 'website',
    },
  };
}

/** What each trip length honestly buys you. Written per length because "3 day
 *  golden triangle tour" and "5 day golden triangle tour" are separate
 *  searches by people with genuinely different questions. */
const LENGTH_NOTE: Record<number, string> = {
  2: 'Two days covers Delhi and Agra properly, or Agra and Jaipur. It does not cover all three without spending the trip in a car, so most two-day trips drop one corner on purpose.',
  3: 'Three days is the shortest version of the full loop that works: a day in Delhi, the Taj at sunrise on day two, Jaipur on day three. Every drive is done in daylight.',
  4: 'The fourth day is usually given to Jaipur, which needs it. Amber Fort, the City Palace and Jantar Mantar are a full day on their own without rushing any of them.',
  5: 'Five days is the first length with slack in it. Fatehpur Sikri fits on the Agra to Jaipur leg, and a morning is free somewhere for whatever you liked most.',
  6: 'Six days usually adds a fourth stop. Ranthambore for tigers is the common one, and it has to be booked around the park rather than the other way round.',
  7: 'A week lets the triangle breathe and reach further, most often to Udaipur or Varanasi. The driving days stop being the shape of the trip.',
  8: 'Eight days and up are really a north India trip that happens to include the triangle, with the extra days going to Rajasthan or the Ganges.',
  10: 'Ten days covers the triangle and a second region without a single rushed morning. This is the length people pick when it is their only trip to India.',
};

export default async function GoldenTrianglePage({ params }: Props) {
  const { country } = await params;
  if (country.toLowerCase() !== 'india') notFound();

  const tours = await getTours();
  if (tours.length === 0) notFound();

  const groups = new Map<number, Tour[]>();
  const unsized: Tour[] = [];
  for (const t of tours) {
    const d = daysOf(t.title || '');
    if (d === null) { unsized.push(t); continue; }
    if (!groups.has(d)) groups.set(d, []);
    groups.get(d)!.push(t);
  }
  const lengths = [...groups.keys()].sort((a, b) => a - b);

  const card = (t: Tour) => {
    const img = firstImage(t.images);
    const price = Number(t.pricePerPerson);
    const cur = t.currency === 'INR' ? '₹' : '$';
    return (
      <Link
        key={t.slug}
        href={`/india/${t.city.toLowerCase()}/${t.slug}`}
        className="group block bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
      >
        {img && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={cloudinaryLoader({ src: img, width: 640 })}
            alt={t.title}
            loading="lazy"
            className="w-full h-44 object-cover"
          />
        )}
        <div className="p-4">
          <h3 className="text-[15px] font-black text-[#001A33] leading-snug line-clamp-2 group-hover:text-[#10B981]">
            {t.title}
          </h3>
          <div className="flex items-center gap-3 text-[12px] text-gray-500 font-semibold mt-2">
            <span className="inline-flex items-center gap-1"><MapPin size={13} />{t.city}</span>
            {t.duration && <span className="inline-flex items-center gap-1"><Clock size={13} />{t.duration}</span>}
          </div>
          {!isNaN(price) && price > 0 && (
            <p className="text-[14px] font-black text-[#001A33] mt-3">
              From {cur}{price.toLocaleString()} per person
            </p>
          )}
        </div>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <nav className="flex items-center gap-2 text-[13px] font-bold text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#10B981]">Home</Link>
          <ChevronRight size={14} />
          <Link href="/india" className="hover:text-[#10B981]">India</Link>
          <ChevronRight size={14} />
          <span className="text-[#001A33]">Golden Triangle</span>
        </nav>

        <h1 className="text-[32px] sm:text-[44px] font-black text-[#001A33] leading-[1.1] tracking-tight mb-4">
          {TITLE}
        </h1>

        <div className="text-[17px] text-gray-700 leading-relaxed space-y-4 max-w-3xl mb-10">
          <p>
            The Golden Triangle is three cities and roughly 750 kilometres of road.
            Delhi to Agra is about 230 km on the Yamuna Expressway, Agra to Jaipur
            about 240 km, and Jaipur back to Delhi about 280 km. Those three drives
            are the whole shape of the trip, and the number of days you have decides
            how much of each city you actually see rather than pass through.
          </p>
          <p>
            Below are {tours.length} trips grouped by length, from two days to ten.
            Each one is run by a local operator and priced per person. Pick the
            length first, because that is the decision that matters, and the rest
            follows from it.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {lengths.map(d => (
            <a
              key={d}
              href={`#days-${d}`}
              className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-[13px] font-bold text-[#001A33] transition-colors"
            >
              {d} {d === 1 ? 'day' : 'days'} ({groups.get(d)!.length})
            </a>
          ))}
        </div>

        {lengths.map(d => (
          <section key={d} id={`days-${d}`} className="mb-14 scroll-mt-24">
            <h2 className="text-[24px] sm:text-[30px] font-black text-[#001A33] mb-3">
              {d}-Day Golden Triangle Tours
            </h2>
            {LENGTH_NOTE[d] && (
              <p className="text-[16px] text-gray-700 leading-relaxed max-w-3xl mb-6">
                {LENGTH_NOTE[d]}
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {groups.get(d)!.map(card)}
            </div>
          </section>
        ))}

        {unsized.length > 0 && (
          <section className="mb-14">
            <h2 className="text-[24px] sm:text-[30px] font-black text-[#001A33] mb-6">
              More Golden Triangle Trips
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {unsized.map(card)}
            </div>
          </section>
        )}

        <section className="border-t border-gray-200 pt-10">
          <h2 className="text-[24px] font-black text-[#001A33] mb-4">The three cities on their own</h2>
          <p className="text-[16px] text-gray-700 leading-relaxed max-w-3xl mb-5">
            If you are only taking one corner of the triangle, each city has its own
            day tours, guides and tickets.
          </p>
          <div className="flex flex-wrap gap-3">
            {CITIES.map(c => (
              <Link
                key={c}
                href={`/india/${c.toLowerCase()}`}
                className="px-5 py-3 rounded-2xl bg-[#001A33] text-white text-[14px] font-black hover:bg-[#10B981] transition-colors"
              >
                Tours in {c}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
