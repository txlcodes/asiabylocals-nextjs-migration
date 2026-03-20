'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  DollarSign,
  Shield,
  RefreshCw,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  Globe,
  Building2,
  Users,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import {
  HERO_CONTENT,
  COMPARISON_TABLE_DATA,
  PLATFORM_REVIEWS,
  USP_BLOCKS,
  FEATURED_TOURS,
  REDDIT_QUOTES,
  PRICE_COMPARISONS,
  FAQ_ITEMS,
  INTRO_TEXT,
} from '@/lib/comparisonPageContent';

const ICON_MAP: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-7 h-7" />,
  DollarSign: <DollarSign className="w-7 h-7" />,
  Shield: <Shield className="w-7 h-7" />,
  RefreshCw: <RefreshCw className="w-7 h-7" />,
};

export default function ComparisonPageClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="AsiaByLocals"
              className="h-10 w-auto"
              width={80}
              height={40}
            />
          </Link>
          <Link
            href="/"
            className="bg-emerald-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors"
          >
            Browse Tours
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001A33] via-[#002B50] to-[#001A33] text-white py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span className="text-gray-200">Honest Platform Comparison — Updated March 2026</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            {HERO_CONTENT.headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            {HERO_CONTENT.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={HERO_CONTENT.ctaLink}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-bold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              {HERO_CONTENT.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#comparison"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold text-lg transition-colors inline-flex items-center justify-center"
            >
              See Full Comparison
            </a>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {INTRO_TEXT.split('\n\n').map((paragraph, i) => (
            <p
              key={i}
              className="text-gray-700 text-lg leading-relaxed mb-5 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section id="comparison" className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-3 text-gray-900">
            How Does AsiaByLocals Compare?
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            A side-by-side comparison of what matters most when booking tours in Asia.
          </p>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-white">
                  <th className="text-left p-4 font-bold text-gray-500 text-sm uppercase tracking-wider w-1/5">
                    Feature
                  </th>
                  <th className="p-4 font-bold text-sm uppercase tracking-wider w-1/5 bg-emerald-50 text-emerald-700 border-x-2 border-emerald-200">
                    AsiaByLocals
                  </th>
                  <th className="p-4 font-bold text-gray-500 text-sm uppercase tracking-wider w-1/5">
                    GetYourGuide
                  </th>
                  <th className="p-4 font-bold text-gray-500 text-sm uppercase tracking-wider w-1/5">
                    Viator
                  </th>
                  <th className="p-4 font-bold text-gray-500 text-sm uppercase tracking-wider w-1/5">
                    Klook
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE_DATA.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="p-4 font-semibold text-gray-800 text-sm">
                      {row.feature}
                    </td>
                    <td className="p-4 text-sm font-medium text-emerald-700 bg-emerald-50/50 border-x-2 border-emerald-200">
                      {row.asiabylocals}
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {row.gyg}
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {row.viator}
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {row.klook}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {COMPARISON_TABLE_DATA.map((row, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm"
              >
                <h3 className="font-bold text-gray-900 text-sm mb-3">
                  {row.feature}
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-start bg-emerald-50 rounded-lg px-3 py-2">
                    <span className="text-xs font-bold text-emerald-700 uppercase">
                      AsiaByLocals
                    </span>
                    <span className="text-xs text-emerald-700 text-right max-w-[60%]">
                      {row.asiabylocals}
                    </span>
                  </div>
                  <div className="flex justify-between items-start px-3 py-2">
                    <span className="text-xs font-bold text-gray-500 uppercase">
                      GYG
                    </span>
                    <span className="text-xs text-gray-600 text-right max-w-[60%]">
                      {row.gyg}
                    </span>
                  </div>
                  <div className="flex justify-between items-start px-3 py-2">
                    <span className="text-xs font-bold text-gray-500 uppercase">
                      Viator
                    </span>
                    <span className="text-xs text-gray-600 text-right max-w-[60%]">
                      {row.viator}
                    </span>
                  </div>
                  <div className="flex justify-between items-start px-3 py-2">
                    <span className="text-xs font-bold text-gray-500 uppercase">
                      Klook
                    </span>
                    <span className="text-xs text-gray-600 text-right max-w-[60%]">
                      {row.klook}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform In-Depth Reviews */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-3 text-gray-900">
            In-Depth Platform Reviews
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            An honest look at what each platform does well — and where they fall short for Asia travel.
          </p>

          <div className="space-y-12">
            {PLATFORM_REVIEWS.map((platform) => (
              <PlatformReviewCard key={platform.slug} platform={platform} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Local Guides */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-[#001A33] to-[#002B50] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-3">
            Why Book With Licensed Local Guides?
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-xl mx-auto">
            The platforms above are middlemen. Here&apos;s what changes when you book directly.
          </p>

          {/* USP Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {USP_BLOCKS.map((usp, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  {ICON_MAP[usp.icon]}
                </div>
                <h3 className="text-lg font-bold mb-2">{usp.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Featured Tours */}
          <h3 className="text-xl font-bold text-center mb-8">
            Popular Tours on AsiaByLocals
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED_TOURS.slice(0, 3).map((tour) => (
              <Link
                key={tour.slug}
                href={`/${tour.country}/${tour.city}/${tour.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-900 px-2.5 py-1 rounded-lg text-xs font-bold">
                    {tour.price}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-emerald-600 transition-colors">
                    {tour.title}
                  </h4>
                  <p className="text-gray-500 text-xs mb-3 line-clamp-2">
                    {tour.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                      {tour.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {tour.city.charAt(0).toUpperCase() + tour.city.slice(1)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold transition-colors"
            >
              View All Tours
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reddit Social Proof */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-3 text-gray-900">
            What Real Travelers Are Saying
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Unfiltered opinions from Reddit about booking tours through large platforms vs. local guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {REDDIT_QUOTES.map((q, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border-l-4 shadow-sm"
                style={{ borderLeftColor: '#FF4500' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle
                    className="w-4 h-4"
                    style={{ color: '#FF4500' }}
                  />
                  <span className="text-xs font-bold" style={{ color: '#FF4500' }}>
                    {q.subreddit}
                  </span>
                </div>
                <blockquote className="text-gray-700 text-sm italic leading-relaxed mb-3">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <p className="text-gray-400 text-xs">{q.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-3 text-gray-900">
            Real Price Comparison
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Same tour, same type of guide — different prices. The markup adds up fast.
          </p>

          <div className="space-y-4">
            {PRICE_COMPARISONS.map((pc, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-gray-900">{pc.tour}</h3>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {pc.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 md:gap-5">
                    <div className="text-center bg-emerald-50 rounded-lg px-4 py-2 border-2 border-emerald-200">
                      <p className="text-xs font-bold text-emerald-700 uppercase">
                        AsiaByLocals
                      </p>
                      <p className="text-xl font-black text-emerald-600">
                        {pc.asiabylocals}
                      </p>
                    </div>
                    <div className="text-center px-3 py-2">
                      <p className="text-xs font-bold text-gray-400 uppercase">
                        GYG
                      </p>
                      <p className="text-lg font-bold text-gray-400 line-through">
                        {pc.gyg}
                      </p>
                    </div>
                    <div className="text-center px-3 py-2">
                      <p className="text-xs font-bold text-gray-400 uppercase">
                        Viator
                      </p>
                      <p className="text-lg font-bold text-gray-400 line-through">
                        {pc.viator}
                      </p>
                    </div>
                    <div className="hidden sm:block bg-emerald-100 text-emerald-700 rounded-full px-3 py-1 text-xs font-bold">
                      {pc.savings}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-xs text-center mt-6">
            * Prices are approximate and based on similar tour types across platforms as of March 2026.
            Actual prices may vary.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-3 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Everything you need to know about switching from GetYourGuide, Viator, or Klook.
          </p>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, i) => (
              <FaqAccordion key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-4">
            Ready to Book With Real Local Guides?
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">
            Skip the middleman markup. Book directly with licensed guides who know Asia
            like the back of their hand.
          </p>
          <Link
            href="/"
            className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors inline-flex items-center gap-2"
          >
            Browse All Tours
            <ArrowRight className="w-5 h-5" />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-200" />
              Free Cancellation
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-200" />
              Licensed Local Guides
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-200" />
              1 Business Day Refunds
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Sub-components ─── */

function PlatformReviewCard({ platform }: { platform: (typeof PLATFORM_REVIEWS)[number] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Colored top bar */}
      <div className="h-1.5" style={{ backgroundColor: platform.color }} />

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
          <div>
            <h3 className="text-2xl font-black text-gray-900">{platform.name}</h3>
            <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                {platform.monthlyVisits} monthly visits
              </span>
              <span className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                {platform.headquarters}
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" />
                Founded {platform.founded}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {platform.description}
        </p>

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-emerald-50/50 rounded-xl p-4">
            <h4 className="font-bold text-emerald-700 text-sm mb-3 uppercase tracking-wider">
              Pros
            </h4>
            <ul className="space-y-2">
              {platform.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50/50 rounded-xl p-4">
            <h4 className="font-bold text-red-700 text-sm mb-3 uppercase tracking-wider">
              Cons
            </h4>
            <ul className="space-y-2">
              {platform.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Verdict */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
          <h4 className="font-bold text-amber-800 text-sm mb-1">Our Verdict</h4>
          <p className="text-gray-700 text-sm leading-relaxed">{platform.verdict}</p>
        </div>

        {/* Expandable detailed review */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          {expanded ? 'Read less' : 'Read full review'}
          {expanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            {platform.detailedReview.split('\n\n').map((p, i) => (
              <p
                key={i}
                className="text-gray-600 text-sm leading-relaxed mb-4 last:mb-0"
              >
                {p}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FaqAccordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="font-semibold text-gray-900 text-sm pr-4">{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0">
          <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
