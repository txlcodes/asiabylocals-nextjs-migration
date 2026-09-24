import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getItinerary, getItinerarySlugs, ITINERARY_COUNTRIES } from '@/lib/japanItineraries';
import { ChevronRight, MapPin, Clock } from 'lucide-react';
import { countryDisplayName } from '@/lib/countryName';
import { isLang, itineraryT, mergeItinerary, canonicalFor, alternatesFor, ITIN_UI, countryNameT, type Lang } from '@/lib/translations';

// The hub's own headline and blurb, per language. The itinerary cards below it
// take their titles from the translated itinerary data itself.
const HUB: Record<Lang | 'en', { h1: (c: string) => string; blurb: string; seoTitle: (c: string) => string; seoDesc: (c: string) => string }> = {
  en: { h1: c => `${c} Itineraries, From Three Days to Ten`, blurb: 'Every length below is a route we would actually travel, with real train times and an honest word about what does not fit. Pick the number of days you have.', seoTitle: c => `${c} Itineraries: 3 to 10 Days, Planned Properly | AsiaByLocals`, seoDesc: c => `Honest ${c} itineraries for 3, 5, 7 and 10 days with real train times, what fits and what does not, and the tours worth booking on each day.` },
  fr: { h1: c => `Itinéraires en ${c}, de trois à dix jours`, blurb: 'Chaque durée ci-dessous correspond à un trajet que nous ferions vraiment, avec de vrais horaires de train et un mot honnête sur ce qui ne tient pas. Choisissez le nombre de jours dont vous disposez.', seoTitle: c => `Itinéraires en ${c} : de 3 à 10 jours, bien préparés | AsiaByLocals`, seoDesc: c => `Des itinéraires honnêtes en ${c} pour 3, 5, 7 et 10 jours : horaires de train réels, ce qui tient et ce qui ne tient pas, et les visites à réserver chaque jour.` },
  de: { h1: c => `${c}: Reiserouten von drei bis zehn Tagen`, blurb: 'Jede Länge unten ist eine Route, die wir selbst fahren würden, mit echten Zugzeiten und einem ehrlichen Wort dazu, was nicht hineinpasst. Wählen Sie die Anzahl der Tage, die Sie haben.', seoTitle: c => `${c} Reiserouten: 3 bis 10 Tage, richtig geplant | AsiaByLocals`, seoDesc: c => `Ehrliche Reiserouten für ${c} über 3, 5, 7 und 10 Tage: echte Zugzeiten, was hineinpasst und was nicht, und die Touren, die sich an jedem Tag lohnen.` },
  es: { h1: c => `Itinerarios por ${c}, de tres a diez días`, blurb: 'Cada duración de abajo es una ruta que haríamos de verdad, con horarios de tren reales y una palabra honesta sobre lo que no cabe. Elige los días que tengas.', seoTitle: c => `Itinerarios por ${c}: de 3 a 10 días, bien planificados | AsiaByLocals`, seoDesc: c => `Itinerarios honestos por ${c} de 3, 5, 7 y 10 días: horarios de tren reales, lo que cabe y lo que no, y los tours que vale la pena reservar cada día.` },
};

export const revalidate = 3600;

interface Props {
  params: Promise<{ country: string; lang?: string }>;
}

export async function generateStaticParams() {
  return ITINERARY_COUNTRIES.map(country => ({ country }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, lang: langParam } = await params;
  const lang: Lang | null = langParam && isLang(langParam) ? langParam : null;
  const label = countryNameT(lang, country, countryDisplayName(country));
  const h = HUB[lang || 'en'];
  const path = `/${country.toLowerCase()}/itineraries`;
  return {
    title: h.seoTitle(label),
    description: h.seoDesc(label),
    alternates: { canonical: canonicalFor(lang, path), languages: alternatesFor(path) },
  };
}

export default async function ItinerariesHub({ params }: Props) {
  const { country, lang: langParam } = await params;
  const lang: Lang | null = langParam && isLang(langParam) ? langParam : null;
  const slugs = getItinerarySlugs(country);
  if (slugs.length === 0) notFound();

  const label = countryNameT(lang, country, countryDisplayName(country));
  const t = ITIN_UI[lang || 'en'];
  const h = HUB[lang || 'en'];
  const pre = lang ? `/${lang}` : '';
  const items = slugs
    .map(s => ({ slug: s, data: getItinerary(country, s) }))
    .filter(x => x.data)
    .map(x => ({ slug: x.slug, data: mergeItinerary(x.data!, itineraryT(lang, country, x.slug)) }));

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <nav className="flex items-center gap-2 text-[13px] font-bold text-gray-500 mb-6">
          <Link href={pre || '/'} className="hover:text-[#10B981]">{t.home}</Link>
          <ChevronRight size={14} />
          <Link href={`${pre}/${country}`} className="hover:text-[#10B981]">{label}</Link>
          <ChevronRight size={14} />
          <span className="text-[#001A33]">{t.itineraries}</span>
        </nav>

        <h1 className="text-[32px] sm:text-[44px] font-black text-[#001A33] leading-[1.1] tracking-tight mb-4">
          {h.h1(label)}
        </h1>
        <p className="text-[17px] text-gray-700 leading-relaxed mb-10 max-w-2xl">
          {h.blurb}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map(({ slug, data }) => (
            <Link
              key={slug}
              href={`${pre}/${country}/itineraries/${slug}`}
              className="group p-5 bg-white border border-gray-200 rounded-2xl hover:border-[#10B981]/40 hover:shadow-lg transition-all"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#10B981]/10 text-[#047857] rounded-full text-[12px] font-black mb-3">
                <Clock size={13} /> {data!.days} {t.days}
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
