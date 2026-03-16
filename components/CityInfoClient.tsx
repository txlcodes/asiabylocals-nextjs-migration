'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    Clock,
    Ticket,
    Info,
    CheckCircle2,
    AlertTriangle,
    Star,
    History,
    ShieldCheck,
    Map,
    Wallet
} from 'lucide-react';
import { getCityInfoContent, CityInfoData } from '@/lib/cityInfoContent';
import Breadcrumbs from '@/components/Breadcrumbs';

interface Props {
    country: string;
    city: string;
    slug: string;
}

const AGRA_SIDEBAR = [
    { name: 'Things to Do', slug: 'things-to-do-in-agra' },
    { name: 'Places Guide', slug: 'places-to-visit-in-agra' },
    { name: '1-Day Itinerary', slug: '1-day-agra-itinerary' },
    { name: 'Pricing 2026', slug: 'taj-mahal-ticket-price-2026' },
    { name: 'Opening Times', slug: 'taj-mahal-opening-time' },
    { name: 'Friday Strategy', slug: 'is-taj-mahal-closed-on-friday' },
    { name: 'Master Guide', slug: 'agra-travel-guide-2026' },
];

const DELHI_SIDEBAR = [
    { name: 'Delhi Travel Guide', slug: 'delhi-travel-guide-2026' },
    { name: 'Red Fort', slug: 'red-fort' },
    { name: 'Qutub Minar', slug: 'qutub-minar' },
    { name: "Humayun's Tomb", slug: 'humayuns-tomb' },
    { name: 'India Gate', slug: 'india-gate' },
    { name: 'Things to Do', slug: 'things-to-do-in-delhi' },
    { name: '1-Day Itinerary', slug: 'delhi-1-day-itinerary' },
];

const JAIPUR_SIDEBAR = [
    { name: 'Things to Do', slug: 'things-to-do-in-jaipur' },
    { name: 'Travel Guide 2026', slug: 'jaipur-travel-guide-2026' },
    { name: '1-Day Itinerary', slug: '1-day-jaipur-itinerary' },
    { name: 'Amber Fort', slug: 'amber-fort' },
    { name: 'Hawa Mahal', slug: 'hawa-mahal' },
    { name: 'City Palace', slug: 'city-palace-jaipur' },
    { name: 'Nahargarh Fort', slug: 'nahargarh-fort' },
    { name: 'Places to Visit', slug: 'places-to-visit-in-jaipur' },
];

// Recommended tour links for internal linking from authority pages to tour pages (SEO: pass link juice)
const CITY_RECOMMENDED_TOURS: Record<string, { title: string; slug: string; description: string }[]> = {
    'agra': [
        { title: 'Book Official Tour Guide for Taj Mahal', slug: 'taj-mahal-official-guided-tour', description: 'Licensed ASI-certified guide with skip-the-line entry' },
        { title: 'Taj Mahal Entry Ticket Assistance', slug: 'taj-mahal-entry-ticket', description: 'Pre-booked tickets with preferred time slot secured' },
        { title: 'Taj Mahal Sunrise Tour', slug: 'taj-mahal-sunrise-tour', description: 'Early morning visit with golden light photography' },
        { title: 'Agra Friday Tour (Taj Closed Alternative)', slug: 'agra-friday-tour-taj-closed-alternative', description: 'Agra Fort, Baby Taj & Mehtab Bagh sunset itinerary' },
        { title: 'Book Tour Guide for Fatehpur Sikri', slug: 'fatehpur-sikri-guided-tour', description: 'Explore Akbar\'s abandoned ghost capital with a historian' },
        { title: 'Agra City Highlights Tour', slug: 'agra-city-highlights-tour', description: 'Full-day heritage tour covering all major monuments' },
    ],
    'delhi': [
        { title: 'Explore Old & New Delhi by Luxury Car', slug: 'explore-old-new-delhi-city-luxury-car-tour', description: 'Premium guided tour covering Red Fort, India Gate & more' },
        { title: 'Delhi Guided Shopping Tour with Female Expert', slug: 'delhi-guided-shopping-tour-female-expert', description: 'Local markets, textiles & spices with a female guide' },
        { title: 'Golden Triangle 3-Day Tour', slug: 'golden-triangle-3-day-tour', description: 'Delhi, Agra & Jaipur in 3 days with expert guides' },
        { title: 'India Gate Guided Tour', slug: 'india-gate-guided-tour', description: 'Historical walking tour of India Gate & Rajpath' },
    ],
    'jaipur': [
        { title: 'Amber Fort Official Guided Tour', slug: 'amber-fort-official-guided-tour', description: 'Licensed guide for the magnificent hilltop fortress' },
        { title: 'Hawa Mahal Private Tour', slug: 'hawa-mahal-private-tour', description: 'Palace of Winds with historical commentary' },
        { title: 'Jaipur Shopping Tour', slug: 'jaipur-shopping-tour', description: 'Gems, textiles & handicrafts with a local expert' },
        { title: 'Jaipur City Highlights with Amber Fort & Hawa Mahal', slug: 'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal', description: 'Full-day tour of the Pink City\'s top attractions' },
    ],
};

const BANGKOK_SIDEBAR = [
    { name: 'Things to Do', slug: 'things-to-do-in-bangkok' },
    { name: 'Travel Guide 2026', slug: 'bangkok-travel-guide-2026' },
    { name: 'Grand Palace', slug: 'grand-palace-bangkok' },
    { name: 'Wat Pho', slug: 'wat-pho' },
    { name: 'Wat Arun', slug: 'wat-arun' },
    { name: '1-Day Itinerary', slug: '1-day-bangkok-itinerary' },
    { name: 'Floating Market', slug: 'floating-market-bangkok' },
    { name: 'Canal Tour', slug: 'bangkok-canal-tour' },
    { name: 'Chatuchak Market', slug: 'chatuchak-weekend-market' },
    { name: 'Places to Visit', slug: 'places-to-visit-in-bangkok' },
];

const PHUKET_SIDEBAR = [
    { name: 'Phuket Travel Guide', slug: 'phuket-travel-guide-2026' },
    { name: 'Things to Do', slug: 'things-to-do-in-phuket' },
    { name: 'Phi Phi Islands', slug: 'phi-phi-islands' },
    { name: 'Phang Nga Bay', slug: 'phang-nga-bay' },
    { name: 'Big Buddha', slug: 'big-buddha-phuket' },
    { name: 'Wat Chalong', slug: 'wat-chalong' },
    { name: 'Old Town', slug: 'phuket-old-town' },
    { name: '1-Day Itinerary', slug: 'phuket-1-day-itinerary' },
    { name: 'James Bond Island', slug: 'james-bond-island-phuket' },
    { name: 'Island Hopping', slug: 'phuket-island-hopping' },
    { name: 'Muay Thai Training', slug: 'muay-thai-training-phuket' },
];

function renderIcon(name: string) {
    const props = { size: 20 };
    switch (name) {
        case 'Ticket': return <Ticket {...props} />;
        case 'Clock': return <Clock {...props} />;
        case 'Wallet': return <Wallet {...props} />;
        case 'Map': return <Map {...props} />;
        case 'AlertTriangle': return <AlertTriangle {...props} />;
        case 'Star': return <Star {...props} />;
        case 'CheckCircle2': return <CheckCircle2 {...props} />;
        case 'History': return <History {...props} />;
        default: return <Info {...props} />;
    }
}

function renderMarkdownText(text: string) {
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-black text-[#001A33]">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('[') && part.includes('](')) {
            const match = part.match(/\[(.*?)\]\((.*?)\)/);
            if (match) {
                return (
                    <Link key={i} href={match[2]} className="text-[#10B981] font-black border-b border-[#10B981]/30 hover:border-[#10B981] transition-all">
                        {match[1]}
                    </Link>
                );
            }
        }
        return part;
    });
}

export default function CityInfoClient({ country, city, slug }: Props) {
    const router = useRouter();
    const data = getCityInfoContent(slug);

    if (!data) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center p-6 text-center">
                <div>
                    <h1 className="text-2xl font-black text-[#001A33] mb-4">Content Not Identified</h1>
                    <button onClick={() => router.back()} className="text-[#10B981] font-bold">Back to Search</button>
                </div>
            </div>
        );
    }

    const SIDEBAR_MAP: Record<string, typeof AGRA_SIDEBAR> = {
        agra: AGRA_SIDEBAR,
        delhi: DELHI_SIDEBAR,
        jaipur: JAIPUR_SIDEBAR,
        phuket: PHUKET_SIDEBAR,
        bangkok: BANGKOK_SIDEBAR,
    };
    const sidebarItems = SIDEBAR_MAP[city.toLowerCase()] || AGRA_SIDEBAR;

    return (
        <div className="min-h-screen bg-white">
            {/* JSON-LD moved to server component (app/[country]/[city]/[slug]/page.tsx) for guaranteed raw HTML rendering */}

            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
                <img
                    src={data.heroImage}
                    alt={data.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001A33] via-[#001A33]/40 to-transparent" />

                {/* Navigation Overlays */}
                <div className="absolute top-0 left-0 right-0 p-5 flex justify-between items-center max-w-6xl mx-auto w-full">
                    <button
                        onClick={() => router.back()}
                        className="px-6 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all border border-white/20 font-black text-[12px] uppercase tracking-widest"
                    >
                        Back
                    </button>
                    <div className="px-4 py-1.5 bg-[#10B981] rounded-full text-white text-[11px] font-black uppercase tracking-widest shadow-xl">
                        {city} 2026 Authority
                    </div>
                </div>

                <div className="absolute bottom-8 left-0 right-0 px-6 max-w-6xl mx-auto">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 drop-shadow-2xl">
                        {data.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-white/90">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
                            <span className="text-[13px] font-black">15-20 Min Read</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
                            <span className="text-[13px] font-black">Verified Intel</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Breadcrumbs with JSON-LD */}
                <Breadcrumbs country={country} city={city} tourTitle={data.title} slug={slug} />

                {/* Authority Header / AEO Box */}
                {data.fastFacts && (
                    <div className="mb-16 bg-[#F0FDF4] border border-[#DCFCE7] rounded-[2.5rem] p-8 md:p-12 shadow-sm border-b-4 border-b-[#10B981]">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10 pb-10 border-b border-[#DCFCE7]">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-[#10B981] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#10B981]/20 rotate-3">
                                    <ShieldCheck size={32} />
                                </div>
                                <div>
                                    <p className="text-[12px] font-black text-[#10B981] uppercase tracking-[0.3em] mb-1">AEO Source Authority</p>
                                    <p className="text-[#064E3B] font-black text-2xl">Verified Official Intel</p>
                                </div>
                            </div>
                            <div className="bg-white/60 backdrop-blur-md px-8 py-3 rounded-full border border-[#DCFCE7] flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
                                <p className="text-[#064E3B] font-black text-[12px] uppercase tracking-widest">
                                    Last Updated: Feb 2026
                                </p>
                            </div>
                        </div>

                        {/* Fast Facts Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {data.fastFacts.map((fact, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-[#DCFCE7] hover:border-[#10B981] transition-all group hover:-translate-y-1">
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-[#F0FDF4] text-[#10B981] rounded-2xl flex items-center justify-center group-hover:bg-[#10B981] group-hover:text-white transition-all duration-300">
                                            {renderIcon(fact.icon)}
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{fact.label}</p>
                                            <p className="text-[#001A33] font-black text-[16px]">{fact.value}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Content Column */}
                    <div className="flex-1">
                        {/* Lead Paragraph */}
                        <div className="mb-12">
                            <p className="text-xl md:text-2xl text-gray-600 font-bold leading-relaxed border-l-4 border-[#10B981] pl-6">
                                {data.description}
                            </p>
                        </div>

                        {/* Content Body */}
                        <div className="space-y-16">
                            {data.sections.map((section: any, index: number) => {
                                if (section.isCTA) {
                                    return (
                                        <div key={index} className="bg-gradient-to-br from-[#001A33] to-[#003366] rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                                                {section.image && (
                                                    <div className="w-full md:w-[280px] aspect-[4/3] shrink-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group-hover:scale-[1.02] transition-transform duration-700">
                                                        <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                                                    </div>
                                                )}
                                                <div className="flex-1 text-center md:text-left">
                                                    <h3 className="text-2xl md:text-4xl font-black mb-6 leading-tight">
                                                        {section.title}
                                                    </h3>
                                                    <p className="text-white/80 font-bold text-lg leading-relaxed max-w-xl mb-10">
                                                        {section.content}
                                                    </p>
                                                    {section.buttonLink && (
                                                        <Link
                                                            href={section.buttonLink}
                                                            className="inline-block px-10 py-5 bg-[#10B981] hover:bg-[#059669] text-white font-black rounded-2xl transition-all shadow-xl hover:scale-105 active:scale-95 text-[17px] whitespace-nowrap"
                                                        >
                                                            {section.buttonText}
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
                                        </div>
                                    );
                                }

                                return (
                                    <article key={index} className="group">
                                        <header className="mb-6">
                                            <span className="text-[#10B981] text-[12px] font-black uppercase tracking-[0.2em] mb-2 block">Part 0{index + 1}</span>
                                            <div className="flex items-center gap-4">
                                                {section.icon && (
                                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F0FDF4] text-[#10B981] rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-[#DCFCE7]">
                                                        {renderIcon(section.icon)}
                                                    </div>
                                                )}
                                                <h2 className="text-2xl md:text-4xl font-black text-[#001A33] group-hover:text-[#10B981] transition-colors leading-tight">
                                                    {section.title}
                                                </h2>
                                            </div>
                                        </header>

                                        {section.image && (
                                            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                                <img
                                                    src={section.image}
                                                    alt={section.title}
                                                    className="w-full h-auto object-cover max-h-[400px]"
                                                />
                                            </div>
                                        )}

                                        <div className="text-[17px] md:text-[18px] text-gray-700 leading-[1.6] font-medium space-y-6">
                                            {section.content.split('\n').map((para: string, pIdx: number) => {
                                                if (!para.trim()) return null;

                                                if (para.startsWith('### ')) {
                                                    return (
                                                        <h3 key={pIdx} className="text-[22px] md:text-[24px] font-black text-[#001A33] mt-10 mb-4 first:mt-0">
                                                            {para.replace('### ', '')}
                                                        </h3>
                                                    );
                                                }

                                                return (
                                                    <p key={pIdx}>
                                                        {renderMarkdownText(para)}
                                                    </p>
                                                );
                                            })}
                                        </div>

                                        {section.table && (
                                            <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                                                <table className="w-full text-left border-collapse">
                                                    <thead>
                                                        <tr className="bg-gray-50">
                                                            {section.table.headers.map((header: string, hIdx: number) => (
                                                                <th key={hIdx} className="p-4 text-[13px] font-black text-[#001A33] uppercase tracking-wider border-b border-gray-100">{header}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {section.table.rows.map((row: string[], rIdx: number) => (
                                                            <tr key={rIdx} className="hover:bg-gray-50/50 transition-colors">
                                                                {row.map((cell: string, cIdx: number) => (
                                                                    <td key={cIdx} className="p-4 text-[15px] font-medium text-gray-600 border-b border-gray-50">{cell}</td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                    </article>
                                );
                            })}
                        </div>

                        {/* FAQ Section */}
                        {data.faqs && data.faqs.length > 0 && (
                            <section className="mt-24">
                                <h2 className="text-3xl md:text-4xl font-black text-[#001A33] mb-12">
                                    Frequently Asked Questions
                                </h2>
                                <div className="space-y-6">
                                    {data.faqs.map((faq, fIdx) => (
                                        <div key={fIdx} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-[#10B981]/30 transition-all duration-300">
                                            <h3 className="text-xl font-black text-[#001A33] mb-4 flex gap-3">
                                                <span className="text-[#10B981]">Q.</span>
                                                {faq.q}
                                            </h3>
                                            <div className="text-gray-600 font-medium leading-relaxed pl-8 space-y-2">
                                                {faq.a.split('\n').map((line: string, lIdx: number) => (
                                                    <p key={lIdx}>
                                                        {renderMarkdownText(line)}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Recommended Tours — Internal linking from authority pages to tour pages */}
                        {CITY_RECOMMENDED_TOURS[city.toLowerCase()] && (
                            <section className="mt-24">
                                <h2 className="text-3xl md:text-4xl font-black text-[#001A33] mb-4">
                                    Top-Rated {city} Tours to Book
                                </h2>
                                <p className="text-gray-500 font-medium text-lg mb-10">
                                    Handpicked experiences with licensed local guides. Instant confirmation.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {CITY_RECOMMENDED_TOURS[city.toLowerCase()]!.map((tour, idx) => (
                                        <Link
                                            key={idx}
                                            href={`/${country.toLowerCase()}/${city.toLowerCase()}/${tour.slug}`}
                                            className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#10B981]/40 hover:shadow-lg transition-all duration-300 group"
                                        >
                                            <div className="w-10 h-10 bg-[#F0FDF4] text-[#10B981] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                                                <Ticket size={18} />
                                            </div>
                                            <div>
                                                <h3 className="font-black text-[#001A33] text-[15px] group-hover:text-[#10B981] transition-colors mb-1">
                                                    {tour.title}
                                                </h3>
                                                <p className="text-gray-500 text-sm font-medium">{tour.description}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Bottom CTA */}
                        <section className="mt-24 p-1 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-[40px]">
                            <div className="bg-[#001A33] rounded-[38px] p-8 md:p-12 text-white text-center">
                                <h2 className="text-3xl md:text-5xl font-black mb-4">Discover the real {city}.</h2>
                                <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-medium">
                                    Experience the difference of local mastery. Our licensed guides ensure you see the soul of the city.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <Link
                                        href={`/${country.toLowerCase()}/${city.toLowerCase()}`}
                                        className="w-full sm:w-auto px-10 py-5 bg-[#10B981] text-white font-black rounded-full hover:bg-white hover:text-[#10B981] transition-all duration-300 flex items-center justify-center text-xl shadow-xl hover:-translate-y-1 hover:scale-[1.05] active:scale-[0.95]"
                                    >
                                        Browse {slug === 'taj-mahal' ? 'Taj Mahal' : city} Tours
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:w-[350px] shrink-0">
                        <div className="sticky top-32 space-y-8">
                            {/* Pillar Nav */}
                            <div className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-md">
                                <h4 className="text-lg font-black text-[#001A33] mb-6">{city} Guide Hub</h4>
                                <div className="space-y-2">
                                    {sidebarItems.map((item, idx) => (
                                        <Link
                                            key={idx}
                                            href={`/${country.toLowerCase()}/${city.toLowerCase()}/${item.slug}`}
                                            className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${slug === item.slug
                                                ? 'bg-[#10B981] text-white shadow-lg shadow-[#10B981]/30 scale-[1.02] -translate-y-0.5'
                                                : 'bg-gray-50 hover:bg-white hover:shadow-md hover:border-[#10B981]/20 border border-transparent text-[#001A33] hover:-translate-y-1'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                {slug === item.slug && <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
                                                <span className="font-black text-[14px] tracking-tight">{item.name}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Support Widget */}
                            <div className="bg-[#10B981] rounded-[32px] p-8 text-white shadow-xl shadow-[#10B981]/20 relative overflow-hidden group/support">
                                <div className="relative z-10">
                                    <h4 className="text-lg font-black mb-4">Need Help?</h4>
                                    <p className="text-white/80 font-bold text-sm mb-6">
                                        Message a certified {city} guide to plan your perfect route.
                                    </p>
                                    <Link
                                        href={`/${country.toLowerCase()}/${city.toLowerCase()}`}
                                        className="w-full py-4 bg-white text-[#10B981] font-black rounded-xl hover:bg-gray-50 transition-all text-[15px] shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
                                    >
                                        Browse {slug === 'taj-mahal' ? 'Taj Mahal' : city} Tours
                                    </Link>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover/support:scale-150 transition-transform duration-700" />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
