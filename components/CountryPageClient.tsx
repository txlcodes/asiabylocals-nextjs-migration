'use client';

import Link from 'next/link';
import { ChevronRight, MapPin, Star, Clock } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

interface City {
  name: string;
  slug: string;
  image: string;
  tagline: string;
}

interface Tour {
  id: number;
  title: string;
  slug: string;
  city: string;
  country: string;
  duration: string;
  pricePerPerson: number;
  currency: string;
  images: string[];
}

interface CountryPageClientProps {
  country: string;
  countrySlug: string;
  cities: City[];
  cityTours: Record<string, Tour[]>;
}

const INDIA_FAQS = [
  {
    question: 'What is the Golden Triangle tour in India?',
    answer: 'The Golden Triangle is India\'s most iconic travel circuit connecting Delhi, Agra, and Jaipur. It covers India\'s 1,000-year imperial history in Delhi, the Taj Mahal and Mughal masterpieces in Agra, and the stunning Rajput palaces and forts of Jaipur. Most travelers complete it in 3-5 days with licensed local guides.',
  },
  {
    question: 'What is the best time to visit India?',
    answer: 'The best time to visit most of India is October to March, when temperatures are pleasant (15-25°C) and rainfall is minimal. This is peak season for the Golden Triangle cities (Delhi, Agra, Jaipur). Avoid May-June when temperatures exceed 45°C. The monsoon season (July-September) brings heavy rains but lush green landscapes.',
  },
  {
    question: 'Do I need a visa to visit India?',
    answer: 'Most international visitors need an e-Visa, which can be applied for online at the official Indian government portal. The e-Tourist Visa is valid for 30 days, 1 year, or 5 years depending on the type. Processing typically takes 3-5 business days. Citizens of Nepal and Bhutan do not need a visa.',
  },
  {
    question: 'Is India safe for solo travelers?',
    answer: 'India is generally safe for travelers, including solo and female travelers, especially in major tourist cities like Delhi, Agra, and Jaipur. Standard travel precautions apply: use verified guides, book through reputable platforms like AsiaByLocals, avoid isolated areas at night, and use app-based transport (Uber/Ola).',
  },
  {
    question: 'How many days do I need for India?',
    answer: 'For the Golden Triangle (Delhi, Agra, Jaipur), plan 5-7 days. Add Varanasi for a spiritual dimension (2-3 days), Rajasthan\'s desert cities like Jodhpur and Jaisalmer (3-4 days), or Goa for beaches (3-4 days). A comprehensive first trip to India typically takes 10-14 days.',
  },
  {
    question: 'What currency is used in India?',
    answer: 'India uses the Indian Rupee (INR/₹). As of 2026, 1 USD ≈ 85 INR. Credit cards are widely accepted in hotels, restaurants, and shops in major cities. ATMs are plentiful. For street markets and smaller vendors, carry cash. UPI digital payments (Google Pay, PhonePe) are ubiquitous across India.',
  },
];

const THAILAND_FAQS = [
  {
    question: 'What is the best time to visit Thailand?',
    answer: 'The best time to visit Thailand is November to February (cool and dry season). Bangkok and Phuket are pleasant year-round, but the monsoon season (June-October) brings heavy rains to the Andaman coast (Phuket). The hot season (March-May) sees temperatures above 35°C.',
  },
  {
    question: 'Do I need a visa for Thailand?',
    answer: 'Citizens of most Western countries get visa-free entry for 30-60 days. Check the Thai Immigration website for your specific nationality. Passport must be valid for at least 6 months.',
  },
];

export default function CountryPageClient({ country, countrySlug, cities, cityTours }: CountryPageClientProps) {
  const faqs = countrySlug === 'india' ? INDIA_FAQS : countrySlug === 'thailand' ? THAILAND_FAQS : [];

  // Featured cities (first 3) vs other cities
  const featuredCities = cities.slice(0, 3);
  const otherCities = cities.slice(3);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Asia By Locals" className="h-10" />
            <span className="text-xl font-black text-[#001A33] hidden sm:inline">AsiaByLocals</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-gray-500 hover:text-[#10B981] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </Link>
            <Link href="/" className="text-gray-500 hover:text-[#10B981] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#001A33] via-[#002B50] to-[#001A33] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10B981] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <Breadcrumbs country={country} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mt-6 mb-6 leading-tight">
            Explore <span className="text-[#10B981]">{country}</span> with Local Guides
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed font-medium">
            {countrySlug === 'india'
              ? 'From the Taj Mahal at sunrise to the pink palaces of Jaipur and the spiritual ghats of Varanasi — experience India through the eyes of licensed local experts who know every hidden alley, secret temple, and legendary food stall.'
              : `Discover ${country}'s most incredible destinations with expert local guides who share authentic, off-the-beaten-path experiences.`
            }
          </p>
          {countrySlug === 'india' && (
            <div className="flex flex-wrap gap-3 mt-8">
              {['Golden Triangle', 'Heritage & Culture', 'Spiritual India', 'Rajasthan Desert', 'Beach & Coastal'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Featured Cities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-[#001A33] mb-3">
            {countrySlug === 'india' ? 'The Golden Triangle & Beyond' : `Top Destinations in ${country}`}
          </h2>
          <p className="text-gray-600 font-medium mb-8 max-w-2xl">
            {countrySlug === 'india'
              ? 'Start with India\'s most legendary cities — each one a world of its own.'
              : `Explore ${country}'s most popular destinations with expert local guides.`
            }
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {featuredCities.map(city => (
              <Link
                key={city.slug}
                href={`/${countrySlug}/${city.slug}`}
                className="group relative rounded-2xl overflow-hidden h-80 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <img
                  src={city.image}
                  alt={`${city.name} tours - ${city.tagline}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[#10B981] text-sm font-bold uppercase tracking-wider mb-1">{city.tagline}</p>
                  <h3 className="text-2xl font-black text-white mb-2">{city.name}</h3>
                  <p className="text-white/80 text-sm font-medium">
                    {cityTours[city.slug]?.length || 0}+ tours available
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[#10B981] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore {city.name} <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Tours by City Sections */}
        {featuredCities.map(city => {
          const tours = cityTours[city.slug] || [];
          if (tours.length === 0) return null;

          return (
            <section key={city.slug} className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-black text-[#001A33]">
                    Popular Tours in {city.name}
                  </h2>
                  <p className="text-gray-500 font-medium text-sm mt-1">{city.tagline}</p>
                </div>
                <Link
                  href={`/${countrySlug}/${city.slug}`}
                  className="hidden md:flex items-center gap-1 text-[#10B981] font-bold text-sm hover:underline"
                >
                  View all {city.name} tours <ChevronRight size={16} />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {tours.map(tour => (
                  <Link
                    key={tour.id}
                    href={`/${countrySlug}/${city.slug.toLowerCase()}/${tour.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#10B981]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-44 overflow-hidden">
                      {tour.images?.[0] ? (
                        <img
                          src={tour.images[0]}
                          alt={tour.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <MapPin className="text-gray-400" size={32} />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-[#001A33] text-[15px] leading-snug line-clamp-2 group-hover:text-[#10B981] transition-colors">
                        {tour.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                        {tour.duration && (
                          <span className="flex items-center gap-1">
                            <Clock size={13} /> {tour.duration}
                          </span>
                        )}
                      </div>
                      {tour.pricePerPerson > 0 && (
                        <p className="mt-3 text-right font-black text-[#001A33]">
                          Starting from <span className="text-lg">${tour.pricePerPerson}</span>
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href={`/${countrySlug}/${city.slug}`}
                className="md:hidden mt-4 flex items-center justify-center gap-1 text-[#10B981] font-bold text-sm py-3 border border-[#10B981]/20 rounded-xl hover:bg-[#10B981]/5 transition-colors"
              >
                View all {city.name} tours <ChevronRight size={16} />
              </Link>
            </section>
          );
        })}

        {/* More Destinations Grid */}
        {otherCities.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-black text-[#001A33] mb-3">
              More Destinations in {country}
            </h2>
            <p className="text-gray-600 font-medium mb-8">
              Go beyond the Golden Triangle — discover {country}'s hidden gems.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {otherCities.map(city => (
                <Link
                  key={city.slug}
                  href={`/${countrySlug}/${city.slug}`}
                  className="group relative rounded-2xl overflow-hidden h-48 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={city.image}
                    alt={`${city.name} - ${city.tagline}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[#10B981] text-xs font-bold uppercase tracking-wider">{city.tagline}</p>
                    <h3 className="text-lg font-black text-white">{city.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Authority Links for India */}
        {countrySlug === 'india' && (
          <section className="mb-16">
            <h2 className="text-3xl font-black text-[#001A33] mb-8">
              Essential India Travel Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Things to Do in Agra', href: '/india/agra/things-to-do-in-agra', image: '/things-to-do/agra-taj-mahal-garden.webp' },
                { title: 'Things to Do in Delhi', href: '/india/delhi/things-to-do-in-delhi', image: '/things-to-do/delhi-city-tour.webp' },
                { title: 'Things to Do in Jaipur', href: '/india/jaipur/things-to-do-in-jaipur', image: '/things-to-do/jaipur-hawa-mahal.webp' },
                { title: 'Agra Travel Guide 2026', href: '/india/agra/agra-travel-guide-2026', image: '/agra-hero.webp' },
                { title: 'Delhi Travel Guide 2026', href: '/india/delhi/delhi-travel-guide-2026', image: '/delhi-home.webp' },
                { title: 'Jaipur Travel Guide 2026', href: '/india/jaipur/jaipur-travel-guide-2026', image: '/jaipur-hero.webp' },
                { title: '1-Day Agra Itinerary', href: '/india/agra/1-day-agra-itinerary', image: '/agra-itinerary-hero.webp' },
                { title: 'Taj Mahal Ticket Price 2026', href: '/india/agra/taj-mahal-ticket-price-2026', image: '/things-to-do/agra-taj-ticket.webp' },
                { title: 'Amber Fort Guide', href: '/india/jaipur/amber-fort', image: '/things-to-do/jaipur-amber-fort.webp' },
              ].map((guide, idx) => (
                <Link
                  key={idx}
                  href={guide.href}
                  className="flex items-center justify-between p-4 md:p-5 bg-white border border-gray-100 rounded-2xl hover:border-[#10B981]/30 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] transition-all duration-300 group relative overflow-hidden active:scale-[0.98] hover:-translate-y-1.5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 group-hover:scale-105 transition-all duration-300 shadow-sm">
                      <img src={guide.image} alt={guide.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <span className="font-black text-[#001A33] group-hover:text-[#10B981] transition-colors text-[17px] tracking-tight">{guide.title}</span>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#10B981]/10 transition-colors">
                    <ChevronRight size={18} className="text-gray-300 group-hover:text-[#10B981] transition-all duration-300 transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQs Section */}
        {faqs.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-black text-[#001A33] mb-6">
              FAQs About Traveling in {country}
            </h2>
            <div className="space-y-6 max-w-3xl">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="text-[18px] font-black text-[#001A33] mb-2">{faq.question}</h3>
                  <p className="text-gray-700 text-[16px] leading-relaxed font-medium">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'CollectionPage',
                  name: `Tours in ${country}`,
                  description: `Discover the best tours across ${country} with licensed local guides.`,
                  url: `https://www.asiabylocals.com/${countrySlug}`,
                  isPartOf: { '@type': 'WebSite', name: 'AsiaByLocals', url: 'https://www.asiabylocals.com' },
                },
                {
                  '@type': 'FAQPage',
                  mainEntity: faqs.map(faq => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: faq.answer,
                    },
                  })),
                },
                {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.asiabylocals.com' },
                    { '@type': 'ListItem', position: 2, name: country, item: `https://www.asiabylocals.com/${countrySlug}` },
                  ],
                },
              ],
            }),
          }}
        />
      </div>

    </div>
  );
}
