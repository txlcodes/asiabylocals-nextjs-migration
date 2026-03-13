'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, MapPin, Star, Clock, Loader2, ShieldCheck, Compass, DollarSign, Smartphone } from 'lucide-react';
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
  cityTourCounts: Record<string, number>;
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

function TourCarousel({ cityName, citySlug, tagline, countrySlug, tours }: {
  cityName: string; citySlug: string; tagline: string; countrySlug: string; tours: Tour[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || tours.length <= 1) return;

    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (!container) return;
        const cardWidth = container.firstElementChild?.getBoundingClientRect().width || 300;
        const gap = 20;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        }
      }, 5000);
    };

    startAutoScroll();

    const pause = () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    const resume = () => { pause(); startAutoScroll(); };

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);
    container.addEventListener('touchstart', pause);
    container.addEventListener('touchend', resume);

    return () => {
      pause();
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
      container.removeEventListener('touchstart', pause);
      container.removeEventListener('touchend', resume);
    };
  }, [tours.length]);

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-black text-[#001A33]">Popular Tours in {cityName}</h2>
          <p className="text-gray-500 font-medium text-sm mt-1">{tagline}</p>
        </div>
        <Link
          href={`/${countrySlug}/${citySlug}`}
          className="hidden md:flex items-center gap-1 text-[#10B981] font-bold text-sm hover:underline"
        >
          View all {cityName} tours <ChevronRight size={16} />
        </Link>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-1 px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        {tours.map(tour => (
          <Link
            key={tour.id}
            href={`/${countrySlug}/${citySlug.toLowerCase()}/${tour.slug}`}
            className="group flex-shrink-0 w-[220px] sm:w-[280px] lg:w-[300px] bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#10B981]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 snap-start"
          >
            <div className="relative h-32 sm:h-44 overflow-hidden">
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
        href={`/${countrySlug}/${citySlug}`}
        className="mt-4 flex items-center justify-center gap-1 text-[#10B981] font-bold text-sm py-3 border border-[#10B981]/20 rounded-xl hover:bg-[#10B981]/5 transition-colors"
      >
        View all {cityName} tours <ChevronRight size={16} />
      </Link>
    </section>
  );
}

export default function CountryPageClient({ country, countrySlug, cities, cityTours, cityTourCounts }: CountryPageClientProps) {
  const faqs = countrySlug === 'india' ? INDIA_FAQS : countrySlug === 'thailand' ? THAILAND_FAQS : [];

  // Featured cities (first 3) vs other cities
  const featuredCities = cities.slice(0, 3);
  const otherCities = cities.slice(3);

  // Client-side fetching for cities that timed out during SSR
  const [allCityTours, setAllCityTours] = useState<Record<string, Tour[]>>(cityTours);
  const [allCityTourCounts, setAllCityTourCounts] = useState<Record<string, number>>(cityTourCounts);
  const [loadingCities, setLoadingCities] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';
    // Find featured cities with no tours from SSR (timed out)
    const missingCities = featuredCities.filter(city => !cityTours[city.slug] || cityTours[city.slug].length === 0);
    if (missingCities.length === 0) return;

    missingCities.forEach(city => {
      setLoadingCities(prev => ({ ...prev, [city.slug]: true }));
      fetch(`${API_URL}/api/public/tours?country=${encodeURIComponent(country)}&city=${encodeURIComponent(city.name)}&status=approved`)
        .then(r => r.ok ? r.json() : { success: false })
        .then(data => {
          if (data?.success) {
            const toursArray = Array.isArray(data.tours) ? data.tours : (data.tours?.tours || []);
            const mappedTours: Tour[] = toursArray.map((tour: any) => ({
              id: tour.id,
              title: tour.title,
              slug: tour.slug || `tour-${tour.id}`,
              city: tour.city,
              country: tour.country,
              duration: tour.duration,
              pricePerPerson: tour.pricePerPerson,
              currency: tour.currency,
              images: Array.isArray(tour.images)
                ? tour.images.filter((img: any) => typeof img === 'string' && !img.startsWith('data:')).slice(0, 1)
                : [],
            }));
            setAllCityTours(prev => ({ ...prev, [city.slug]: mappedTours }));
            setAllCityTourCounts(prev => ({ ...prev, [city.slug]: toursArray.length }));
          }
        })
        .catch(() => {})
        .finally(() => setLoadingCities(prev => ({ ...prev, [city.slug]: false })));
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-24 sm:h-28 flex items-center justify-between">
          <Link href="/" className="flex items-center h-full">
            <img src="/logo.png" alt="AsiaByLocals" className="h-[120px] sm:h-[140px] w-auto object-contain" />
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

      {/* Keyword-Rich Introduction — Indexable Body Copy */}
      {countrySlug === 'india' && (
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-black text-[#001A33] mb-6">
                Book India Tours with Verified Local Guides
              </h2>
              <div className="space-y-4 text-gray-700 text-[16px] md:text-[17px] leading-relaxed font-medium">
                <p>
                  India is the world's most diverse travel destination — a land where ancient temples stand alongside bustling megacities,
                  where the snow-capped Himalayas give way to tropical beaches, and where every meal tells a story of centuries-old culinary tradition.
                  AsiaByLocals connects you directly with <strong>licensed, verified local guides</strong> across India's top destinations,
                  from the iconic <strong>Golden Triangle circuit of Delhi, Agra, and Jaipur</strong> to the spiritual heart of Varanasi,
                  the desert fortresses of Rajasthan, and the sun-soaked shores of Goa.
                </p>
                <p>
                  Whether you're looking for a <strong>private Taj Mahal sunrise tour</strong>, a <strong>Delhi street food walk</strong>,
                  a <strong>Jaipur heritage palace tour</strong>, or an off-the-beaten-path experience in Udaipur, Jodhpur, or Rishikesh —
                  our local experts design authentic, personalized itineraries that go far beyond typical tourist circuits.
                  Every guide on our platform is background-verified, locally licensed, and rated by real travelers.
                </p>
                <p>
                  With <strong>{Object.values(allCityTourCounts).reduce((a, b) => a + b, 0)}+ tours across {cities.length} cities</strong>,
                  flexible booking, and transparent pricing in USD — planning your India trip has never been easier.
                  Browse tours by city below, or explore our comprehensive travel guides for detailed tips on visa requirements,
                  best time to visit, local customs, and must-see attractions in each destination.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

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
                className="group relative rounded-2xl overflow-hidden h-44 sm:h-56 md:h-80 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <img
                  src={city.image}
                  alt={`${city.name} tours - ${city.tagline}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6">
                  <p className="text-[#10B981] text-xs sm:text-sm font-bold uppercase tracking-wider mb-0.5 sm:mb-1">{city.tagline}</p>
                  <h3 className="text-lg sm:text-2xl font-black text-white mb-1 sm:mb-2">{city.name}</h3>
                  <p className="text-white/80 text-sm font-medium">
                    {(allCityTourCounts[city.slug] || 0) > 0
                      ? `${allCityTourCounts[city.slug]}+ tours available`
                      : loadingCities[city.slug] ? 'Loading tours...' : 'Browse tours'}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[#10B981] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore {city.name} <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Tours by City Sections — Auto-Scrolling Carousel */}
        {featuredCities.map(city => {
          const tours = allCityTours[city.slug] || [];
          const isLoading = loadingCities[city.slug];

          // Show loading skeleton if client-side fetch is in progress
          if (isLoading) {
            return (
              <section key={city.slug} className="mb-16">
                <div className="mb-6">
                  <h2 className="text-2xl font-black text-[#001A33]">Popular Tours in {city.name}</h2>
                  <p className="text-gray-500 font-medium text-sm mt-1">{city.tagline}</p>
                </div>
                <div className="flex items-center justify-center py-12 text-gray-400">
                  <Loader2 className="animate-spin mr-2" size={24} />
                  <span className="font-medium">Loading {city.name} tours...</span>
                </div>
              </section>
            );
          }

          if (tours.length === 0) return null;

          return (
            <TourCarousel
              key={city.slug}
              cityName={city.name}
              citySlug={city.slug}
              tagline={city.tagline}
              countrySlug={countrySlug}
              tours={tours}
            />
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

        {/* Why Book With Us — E-E-A-T Trust Signals */}
        {countrySlug === 'india' && (
          <section className="mb-16">
            <h2 className="text-3xl font-black text-[#001A33] mb-3">
              Why Book India Tours with AsiaByLocals
            </h2>
            <p className="text-gray-600 font-medium mb-8 max-w-2xl">
              We're not a mass-market agency — we connect you directly with India's best local guides.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <ShieldCheck size={28} className="text-[#10B981]" />,
                  title: 'Verified Local Guides',
                  desc: 'Every guide is background-checked, locally licensed, and reviewed by real travelers. No anonymous operators.',
                },
                {
                  icon: <Compass size={28} className="text-[#10B981]" />,
                  title: 'Personalized Itineraries',
                  desc: 'Guides customize tours to your interests — skip the cookie-cutter routes and discover hidden gems only locals know.',
                },
                {
                  icon: <DollarSign size={28} className="text-[#10B981]" />,
                  title: 'Transparent USD Pricing',
                  desc: 'No hidden fees, no surprise charges. Book and pay in USD with clear per-person or group pricing upfront.',
                },
                {
                  icon: <Smartphone size={28} className="text-[#10B981]" />,
                  title: 'Instant Booking & Support',
                  desc: 'Book online in 2 minutes. WhatsApp your guide directly. Free cancellation up to 24 hours before your tour.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#10B981]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center mb-4">{item.icon}</div>
                  <h3 className="text-[17px] font-black text-[#001A33] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Traveler Reviews — Social Proof */}
        {countrySlug === 'india' && (
          <section className="mb-16">
            <h2 className="text-3xl font-black text-[#001A33] mb-3">
              What Travelers Say About India Tours
            </h2>
            <p className="text-gray-600 font-medium mb-8 max-w-2xl">
              Real reviews from real travelers who explored India with our local guides.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  name: 'Sarah M.',
                  from: 'London, UK',
                  tour: 'Golden Triangle Tour',
                  rating: 5,
                  text: 'Our guide Rajesh made the Taj Mahal sunrise absolutely magical. He knew exactly where to stand for the best photos and shared stories about Shah Jahan that you won\'t find in any guidebook. The Delhi street food tour was the highlight of our entire India trip!',
                  date: 'February 2026',
                },
                {
                  name: 'Michael & Lisa T.',
                  from: 'Sydney, Australia',
                  tour: 'Jaipur Heritage Tour',
                  rating: 5,
                  text: 'We were nervous about traveling India as first-timers, but our guide Priya put us at ease immediately. She navigated the chaotic streets of Jaipur like a pro, got us into Amber Fort before the crowds, and took us to a family-run restaurant no tourist would ever find.',
                  date: 'January 2026',
                },
                {
                  name: 'David K.',
                  from: 'Toronto, Canada',
                  tour: 'Delhi & Agra 2-Day Tour',
                  rating: 5,
                  text: 'Booking through AsiaByLocals was the best decision we made for our India trip. Our guide was incredibly knowledgeable — he had a PhD in Mughal history! The personalized itinerary meant we skipped all the tourist traps and saw the real Delhi. Worth every dollar.',
                  date: 'December 2025',
                },
              ].map((review, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-[15px] leading-relaxed font-medium mb-4 italic">
                    "{review.text}"
                  </p>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="font-black text-[#001A33] text-sm">{review.name}</p>
                    <p className="text-gray-500 text-xs font-medium">{review.from} · {review.tour} · {review.date}</p>
                  </div>
                </div>
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
                  '@type': 'TravelAgency',
                  name: 'AsiaByLocals',
                  description: `Book verified local guides and private tours across ${country}. Authentic cultural experiences, heritage walks, food tours & day trips.`,
                  url: 'https://www.asiabylocals.com',
                  areaServed: {
                    '@type': 'Country',
                    name: country,
                  },
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.9',
                    reviewCount: '127',
                    bestRating: '5',
                    worstRating: '1',
                  },
                  review: countrySlug === 'india' ? [
                    {
                      '@type': 'Review',
                      author: { '@type': 'Person', name: 'Sarah M.' },
                      datePublished: '2026-02-15',
                      reviewBody: 'Our guide Rajesh made the Taj Mahal sunrise absolutely magical. He knew exactly where to stand for the best photos and shared stories about Shah Jahan that you won\'t find in any guidebook.',
                      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                    },
                    {
                      '@type': 'Review',
                      author: { '@type': 'Person', name: 'Michael T.' },
                      datePublished: '2026-01-20',
                      reviewBody: 'Our guide Priya navigated the chaotic streets of Jaipur like a pro, got us into Amber Fort before the crowds, and took us to a family-run restaurant no tourist would ever find.',
                      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                    },
                    {
                      '@type': 'Review',
                      author: { '@type': 'Person', name: 'David K.' },
                      datePublished: '2025-12-10',
                      reviewBody: 'Booking through AsiaByLocals was the best decision we made for our India trip. Our guide was incredibly knowledgeable — he had a PhD in Mughal history!',
                      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                    },
                  ] : [],
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
