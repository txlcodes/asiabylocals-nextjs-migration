'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Clock, Train, Lightbulb, ChevronRight, AlertTriangle } from 'lucide-react';
import type { ItineraryData } from '@/lib/japanItineraries';

interface Props {
  data: ItineraryData;
  country: string;
  slug: string;
  tourMap: Record<string, any>;
  allSlugs: string[];
}

function cloudinaryLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (!src.includes('res.cloudinary.com')) return src;
  return src.replace('/upload/', `/upload/f_auto,q_${quality || 70},w_${width}/`);
}

export default function ItineraryClient({ data, country, slug, tourMap, allSlugs }: Props) {
  const countryLabel = country.charAt(0).toUpperCase() + country.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[13px] font-bold text-gray-500 mb-6 flex-wrap">
          <Link href="/" className="hover:text-[#10B981]">Home</Link>
          <ChevronRight size={14} />
          <Link href={`/${country}`} className="hover:text-[#10B981]">{countryLabel}</Link>
          <ChevronRight size={14} />
          <span className="text-[#001A33]">{data.days}-Day Itinerary</span>
        </nav>

        <h1 className="text-[32px] sm:text-[44px] font-black text-[#001A33] leading-[1.1] tracking-tight mb-4">
          {data.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#10B981]/10 text-[#047857] rounded-full text-[13px] font-black">
            <Clock size={14} /> {data.days} days
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-[#001A33] rounded-full text-[13px] font-black">
            <MapPin size={14} /> {data.routeSummary}
          </span>
        </div>

        {/* The answer, stated plainly and early. An AI summary is going to
            answer this question with or without us; leading with a clean,
            self-contained paragraph is what gets us quoted instead of skipped. */}
        {data.quickAnswer && (
          <div className="p-5 sm:p-6 bg-[#001A33] rounded-2xl mb-8">
            <div className="text-[12px] font-black text-[#10B981] uppercase tracking-wide mb-2">
              Short answer
            </div>
            <p className="text-[17px] text-white leading-relaxed font-semibold">
              {data.quickAnswer}
            </p>
          </div>
        )}

        {/* At a glance — a real table, which is the most extractable thing on
            the page for both featured snippets and AI crawlers. */}
        <div className="mb-10 overflow-x-auto">
          <h2 className="text-[20px] font-black text-[#001A33] mb-3">
            {data.days} days in {countryLabel} at a glance
          </h2>
          <table className="w-full text-left border-collapse text-[14px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2 pr-3 font-black text-[#001A33]">Day</th>
                <th className="py-2 pr-3 font-black text-[#001A33]">Based in</th>
                <th className="py-2 pr-3 font-black text-[#001A33]">What you do</th>
                <th className="py-2 font-black text-[#001A33]">Getting there</th>
              </tr>
            </thead>
            <tbody>
              {data.days_detail.map(d => (
                <tr key={d.day} className="border-b border-gray-100 align-top">
                  <td className="py-2.5 pr-3 font-black text-[#10B981] whitespace-nowrap">{d.day}</td>
                  <td className="py-2.5 pr-3 font-bold text-[#001A33] whitespace-nowrap">{d.base}</td>
                  <td className="py-2.5 pr-3 text-gray-700">{d.heading.replace(/^Day \d+\s*[—-]\s*/, '')}</td>
                  <td className="py-2.5 text-gray-500">{d.travel ? d.travel.split(/[;.]/)[0] : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Intro */}
        <div className="prose-lg mb-6">
          {data.intro.split('\n\n').map((p, i) => (
            <p key={i} className="text-[17px] text-gray-700 leading-relaxed mb-4">{p}</p>
          ))}
        </div>

        <div className="p-5 bg-[#10B981]/5 border border-[#10B981]/20 rounded-2xl mb-12">
          <div className="text-[13px] font-black text-[#047857] uppercase tracking-wide mb-1">Best for</div>
          <p className="text-[16px] text-[#001A33] font-semibold">{data.bestFor}</p>
        </div>

        {/* Other lengths — the whole ladder, cross-linked */}
        <div className="mb-12">
          <div className="text-[13px] font-black text-gray-500 uppercase tracking-wide mb-3">
            Have a different amount of time?
          </div>
          <div className="flex flex-wrap gap-2">
            {allSlugs.map(s => {
              const n = s.replace('-days', '');
              const active = s === slug;
              return (
                <Link
                  key={s}
                  href={`/${country}/itineraries/${s}`}
                  className={`px-4 py-2 rounded-xl text-[14px] font-black transition-colors ${
                    active
                      ? 'bg-[#001A33] text-white'
                      : 'bg-gray-100 text-[#001A33] hover:bg-[#10B981]/10 hover:text-[#047857]'
                  }`}
                >
                  {n} days
                </Link>
              );
            })}
          </div>
        </div>

        {/* Day by day */}
        <div className="space-y-10 mb-16">
          {data.days_detail.map(day => (
            <div key={day.day} className="border-l-2 border-[#10B981]/30 pl-5 sm:pl-7 relative">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-[#10B981] text-white text-[12px] font-black flex items-center justify-center">
                {day.day}
              </div>

              <div className="text-[12px] font-black text-[#10B981] uppercase tracking-wide mb-1">
                Day {day.day} · {day.base}
              </div>
              <h2 className="text-[24px] sm:text-[28px] font-black text-[#001A33] leading-tight mb-3">
                {day.heading}
              </h2>

              {day.travel && (
                <div className="inline-flex items-start gap-2 px-3 py-2 bg-blue-50 text-blue-900 rounded-xl text-[14px] font-semibold mb-4">
                  <Train size={16} className="shrink-0 mt-0.5" />
                  <span>{day.travel}</span>
                </div>
              )}

              {day.narrative.split('\n\n').map((p, i) => (
                <p key={i} className="text-[16px] text-gray-700 leading-relaxed mb-3">{p}</p>
              ))}

              {/* Real tours for this day */}
              {day.tours.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
                  {day.tours.map(url => {
                    const s = url.split('/').pop() || '';
                    const t = tourMap[s];
                    if (!t) return null;
                    const img = (t.images && t.images[0]) || null;
                    return (
                      <Link
                        key={url}
                        href={url}
                        className="group flex gap-3 p-3 bg-white border border-gray-200 rounded-2xl hover:border-[#10B981]/40 hover:shadow-lg transition-all"
                      >
                        {img && (
                          <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                            <Image
                              src={img}
                              loader={cloudinaryLoader}
                              alt={t.title}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="min-w-0">
                          <div className="text-[14px] font-black text-[#001A33] group-hover:text-[#10B981] leading-snug line-clamp-2">
                            {t.title}
                          </div>
                          <div className="text-[12px] text-gray-500 font-semibold mt-1">
                            {t.duration}
                          </div>
                          <div className="text-[14px] font-black text-[#10B981] mt-1">
                            From ${t.pricePerPerson}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}

              {day.friday_note && (
                <div className="flex items-start gap-2 p-3.5 bg-red-50 border border-red-200 rounded-xl mb-3">
                  <AlertTriangle size={17} className="text-red-600 shrink-0 mt-0.5" />
                  <p className="text-[14px] text-red-900 font-bold">{day.friday_note}</p>
                </div>
              )}

              {day.tip && (
                <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-100 rounded-xl">
                  <Lightbulb size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-[14px] text-amber-900 font-semibold">{day.tip}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Logistics */}
        {data.logistics.length > 0 && (
          <div className="mb-16">
            <h2 className="text-[28px] font-black text-[#001A33] mb-6">
              Planning this trip
            </h2>
            <div className="space-y-6">
              {data.logistics.map((b, i) => (
                <div key={i} className="p-5 bg-gray-50 rounded-2xl">
                  <h3 className="text-[18px] font-black text-[#001A33] mb-2">{b.heading}</h3>
                  {b.content.split('\n\n').map((p, j) => (
                    <p key={j} className="text-[15px] text-gray-700 leading-relaxed mb-2 last:mb-0">{p}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {data.faqs.length > 0 && (
          <div className="mb-12">
            <h2 className="text-[28px] font-black text-[#001A33] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {data.faqs.map((f, i) => (
                <details key={i} className="group border border-gray-200 rounded-2xl p-4">
                  <summary className="font-black text-[#001A33] cursor-pointer list-none flex items-start justify-between gap-3">
                    <span className="text-[16px]">{f.question}</span>
                    <ChevronRight
                      size={18}
                      className="shrink-0 mt-1 text-gray-400 transition-transform group-open:rotate-90"
                    />
                  </summary>
                  <p className="text-[15px] text-gray-700 leading-relaxed mt-3">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        <div className="p-6 bg-[#001A33] rounded-2xl text-center">
          <h2 className="text-[22px] font-black text-white mb-2">
            Book the guided parts of this trip
          </h2>
          <p className="text-[15px] text-white/70 font-semibold mb-4">
            Every tour above runs with a verified local operator.
          </p>
          <Link
            href={`/${country}`}
            className="inline-block px-6 py-3 bg-[#10B981] text-white font-black rounded-xl hover:bg-[#059669] transition-colors"
          >
            Browse all {countryLabel} tours
          </Link>
        </div>
      </div>
    </div>
  );
}
