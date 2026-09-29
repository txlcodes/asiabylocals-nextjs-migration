import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
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
  options?: unknown;
};

/**
 * What one traveller is actually charged.
 *
 * `pricePerPerson` cannot be trusted for this: on 513 of the 805 live Golden
 * Triangle rows it sits below the first pricing tier, sometimes far below. Tour
 * 7026 stores 2.35 while its ladder charges 45 for one person. The floors that
 * were applied to the ladders never propagated back to this column, so it is
 * stale rather than wrong by design. A card reading "From $2.35" that becomes
 * $45 at checkout loses the booking and deserves to.
 *
 * So read the ladder first, exactly as the city page does, and fall back to the
 * column only when there is no ladder to read.
 */
function fromPrice(t: Tour): number | null {
  const opts = Array.isArray(t.options) ? (t.options as any[]) : [];
  let best: number | null = null;
  for (const o of opts) {
    let tiers = o?.groupPricingTiers;
    if (typeof tiers === 'string') {
      try { tiers = JSON.parse(tiers); } catch { tiers = null; }
    }
    if (!Array.isArray(tiers) || tiers.length === 0) continue;
    const sorted = [...tiers].sort((a, b) => Number(a.minPeople) - Number(b.minPeople));
    const first = sorted[0];
    const heads = Math.max(1, Number(first.minPeople) || 1);
    const per = Number(first.price) / heads;
    if (isFinite(per) && per > 0 && (best === null || per < best)) best = per;
  }
  if (best !== null) return Math.ceil(best);
  const pp = Number(t.pricePerPerson);
  return isFinite(pp) && pp > 0 ? Math.ceil(pp) : null;
}

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

  // Deliberately the same card as the city pages, down to the class names: this
  // hub sits next to /india/agra and /india/jaipur in the same journey, and a
  // card that looks different reads as a different site. Row on mobile, column
  // on desktop, hover zoom, price on its own rule at the bottom.
  const card = (t: Tour, index: number) => {
    const img = firstImage(t.images);
    const price = fromPrice(t);
    const cur = t.currency === 'INR' ? '₹' : t.currency === 'JPY' ? '¥' : '$';
    return (
      <Link
        key={t.slug}
        href={`/india/${t.city.toLowerCase()}/${t.slug}`}
        className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all group flex flex-row md:flex-col"
      >
        <div className="relative h-32 w-36 min-w-[144px] md:h-56 md:w-full md:min-w-0 overflow-hidden">
          {/* A plain img, not next/image. This page is a Server Component, and
              `loader={cloudinaryLoader}` is a function prop, which cannot cross
              into a Client Component: it typechecks and then 500s at request
              time. The city grid gets away with it because CityPageClient is
              already a client component. Resolving the URL here gives the same
              R2 file without the boundary. */}
          {img ? (
            <img
              src={cloudinaryLoader({ src: img, width: 640 })}
              alt={`${t.title} — Golden Triangle tour`}
              width={400}
              height={208}
              loading={index < 4 ? 'eager' : 'lazy'}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#10B981]/20 to-[#1E3A5F]/20 flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">No image</span>
            </div>
          )}
        </div>

        <div className="p-3 md:p-4 flex-1 flex flex-col justify-between">
          <h3 className="text-[13px] md:text-[16px] font-bold md:font-black text-[#001A33] mb-1 md:mb-3 line-clamp-2 group-hover:text-[#10B981] transition-colors leading-tight">
            {t.title}
          </h3>

          <div className="text-[11px] md:text-[12px] text-gray-500 font-semibold mb-1 md:mb-3">
            {t.city}{t.duration ? ` · ${t.duration}` : ''}
          </div>

          {price !== null && (
            <div className="flex items-center justify-between pt-0 md:pt-2 border-t-0 md:border-t border-gray-100">
              <div className="text-right w-full">
                <div className="text-[14px] md:text-[18px] font-black text-[#001A33]">
                  Starting from {cur}{price.toLocaleString()}
                </div>
              </div>
            </div>
          )}
        </div>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <nav className="flex items-center gap-2 text-[13px] font-bold text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#10B981]">Home</Link>
          <ChevronRight size={14} />
          <Link href="/india" className="hover:text-[#10B981]">India</Link>
          <ChevronRight size={14} />
          <span className="text-[#001A33]">Golden Triangle</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-black text-[#001A33] mb-8">
          {TITLE}
        </h1>

        <div className="mb-10 space-y-4 text-[16px] text-gray-700 font-semibold leading-relaxed max-w-4xl">
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
              className="shrink-0 px-4 py-2 rounded-full text-[14px] font-semibold border bg-white text-[#001A33] border-gray-300 hover:border-[#10B981] hover:text-[#10B981] transition-colors whitespace-nowrap"
            >
              {d} {d === 1 ? 'day' : 'days'} ({groups.get(d)!.length})
            </a>
          ))}
        </div>

        {lengths.map(d => (
          <section key={d} id={`days-${d}`} className="mb-14 scroll-mt-24">
            <h2 className="text-3xl font-black text-[#001A33] mb-3">
              {d}-Day Golden Triangle Tours
            </h2>
            {LENGTH_NOTE[d] && (
              <p className="text-[16px] text-gray-700 font-semibold leading-relaxed max-w-4xl mb-6">
                {LENGTH_NOTE[d]}
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8">
              {groups.get(d)!.map((t, i) => card(t, i))}
            </div>
          </section>
        ))}

        {unsized.length > 0 && (
          <section className="mb-14">
            <h2 className="text-3xl font-black text-[#001A33] mb-6">
              More Golden Triangle Trips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8">
              {unsized.map((t, i) => card(t, i))}
            </div>
          </section>
        )}

        <section className="border-t border-gray-200 pt-10">
          <h2 className="text-3xl font-black text-[#001A33] mb-4">The three cities on their own</h2>
          <p className="text-[16px] text-gray-700 font-semibold leading-relaxed max-w-4xl mb-5">
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
