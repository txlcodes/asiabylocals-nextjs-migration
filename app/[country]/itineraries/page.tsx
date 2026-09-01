import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getItinerary, getItinerarySlugs } from '@/lib/japanItineraries';
import { ChevronRight, MapPin, Clock } from 'lucide-react';

export const revalidate = 3600;

interface Props {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return [{ country: 'japan' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const label = country.charAt(0).toUpperCase() + country.slice(1);
  return {
    title: `${label} Itineraries: 3 to 10 Days, Planned Properly | AsiaByLocals`,
    description: `Honest ${label} itineraries for 3, 5, 7 and 10 days — real train times, what fits and what does not, and the tours worth booking on each day.`,
    alternates: { canonical: `https://www.asiabylocals.com/${country.toLowerCase()}/itineraries` },
  };
}

export default async function ItinerariesHub({ params }: Props) {
  const { country } = await params;
  const slugs = getItinerarySlugs(country);
  if (slugs.length === 0) notFound();

  const label = country.charAt(0).toUpperCase() + country.slice(1);
  const items = slugs.map(s => ({ slug: s, data: getItinerary(country, s) })).filter(x => x.data);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <nav className="flex items-center gap-2 text-[13px] font-bold text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#10B981]">Home</Link>
          <ChevronRight size={14} />
          <Link href={`/${country}`} className="hover:text-[#10B981]">{label}</Link>
          <ChevronRight size={14} />
          <span className="text-[#001A33]">Itineraries</span>
        </nav>

        <h1 className="text-[32px] sm:text-[44px] font-black text-[#001A33] leading-[1.1] tracking-tight mb-4">
          {label} Itineraries, From Three Days to Ten
        </h1>
        <p className="text-[17px] text-gray-700 leading-relaxed mb-10 max-w-2xl">
          Every length below is a route we would actually travel, with real train
          times and an honest word about what does not fit. Pick the number of
          days you have.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map(({ slug, data }) => (
            <Link
              key={slug}
              href={`/${country}/itineraries/${slug}`}
              className="group p-5 bg-white border border-gray-200 rounded-2xl hover:border-[#10B981]/40 hover:shadow-lg transition-all"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#10B981]/10 text-[#047857] rounded-full text-[12px] font-black mb-3">
                <Clock size={13} /> {data!.days} days
              </div>
              <h2 className="text-[18px] font-black text-[#001A33] group-hover:text-[#10B981] leading-snug mb-2">
                {data!.title}
              </h2>
              <div className="flex items-start gap-2 text-[13px] text-gray-500 font-semibold">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                <span>{data!.routeSummary}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
