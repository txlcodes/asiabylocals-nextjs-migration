'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Anchor, ChevronRight, Clock, MapPin } from 'lucide-react';
import StaticPageHeader from './StaticPageHeader';
import { cloudinaryLoader } from '@/lib/cloudinaryLoader';
import type { CruiseCollection, CruiseTour } from '@/lib/cruiseCollection';

function TourCard({ tour }: { tour: CruiseTour }) {
  return (
    <Link
      href={`/${tour.countrySlug}/${tour.citySlug}/${tour.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#10B981]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <div className="relative h-40 sm:h-44 overflow-hidden">
        {tour.image ? (
          <img
            src={cloudinaryLoader({ src: tour.image, width: 640 })}
            alt={tour.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <Anchor className="text-gray-400" size={32} />
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="flex items-center gap-1 text-xs font-semibold text-gray-500 mb-1.5">
          <MapPin size={12} /> {tour.city}
        </span>
        <h3 className="font-bold text-[#001A33] text-[15px] leading-snug line-clamp-2 group-hover:text-[#10B981] transition-colors">
          {tour.title}
        </h3>
        <div className="flex items-center justify-between gap-3 mt-auto pt-3 text-sm text-gray-500">
          {tour.duration ? (
            <span className="flex items-center gap-1"><Clock size={13} /> {tour.duration}</span>
          ) : <span />}
          {tour.pricePerPerson > 0 && (
            <span className="font-black text-[#001A33]">
              From <span className="text-lg">${tour.pricePerPerson}</span>
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function CruisesPageClient({ collection }: { collection: CruiseCollection }) {
  const [selected, setSelected] = useState<string>('all');
  const visible = selected === 'all'
    ? collection.countries
    : collection.countries.filter(c => c.slug === selected);

  return (
    <>
      <StaticPageHeader />
      <main className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
        <section className="mb-10">
          <p className="flex items-center gap-2 text-[#10B981] font-bold text-sm uppercase tracking-widest mb-3">
            <Anchor size={16} /> On the water
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-[#001A33] leading-tight mb-4" style={{ textWrap: 'balance' }}>
            Cruises &amp; Yacht Tours Across Asia
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
            {collection.total.toLocaleString()} boat cruises, private yacht charters, dhow dinners, catamaran sails and
            island-hopping days in {collection.countries.length} countries, each run by a local operator we book with directly.
            Prices are the operator&apos;s own.
          </p>
        </section>

        {collection.total === 0 ? (
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-10 text-center text-gray-600">
            No cruise or yacht tours are listed right now. Check back soon or <Link href="/explore" className="text-[#10B981] font-bold hover:underline">browse all destinations</Link>.
          </div>
        ) : (
          <>
            <div className="sticky top-24 sm:top-28 md:top-32 z-40 -mx-4 px-4 py-3 bg-white/95 backdrop-blur border-b border-gray-100 mb-10">
              <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
                <FilterChip label={`All (${collection.total})`} active={selected === 'all'} onClick={() => setSelected('all')} />
                {collection.countries.map(c => (
                  <FilterChip
                    key={c.slug}
                    label={`${c.name} (${c.count})`}
                    active={selected === c.slug}
                    onClick={() => setSelected(c.slug)}
                  />
                ))}
              </div>
            </div>

            {visible.map(country => (
              <section key={country.slug} className="mb-14" id={country.slug}>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-2xl font-black text-[#001A33]">
                    {country.name}
                    <span className="ml-2 text-base font-bold text-gray-400">{country.count}</span>
                  </h2>
                  <Link
                    href={`/${country.slug}`}
                    className="flex items-center gap-1 text-[#10B981] font-bold text-sm hover:underline"
                  >
                    All {country.name} tours <ChevronRight size={16} />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {country.tours.map(tour => <TourCard key={tour.id} tour={tour} />)}
                </div>
              </section>
            ))}
          </>
        )}
      </main>
    </>
  );
}

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-bold border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] ${
        active
          ? 'bg-[#001A33] text-white border-[#001A33]'
          : 'bg-white text-[#001A33] border-gray-200 hover:border-[#10B981] hover:text-[#10B981]'
      }`}
    >
      {label}
    </button>
  );
}
