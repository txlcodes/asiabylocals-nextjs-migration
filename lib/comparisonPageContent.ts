// Content data for /getyourguide-viator-alternative authority page
// All ~3000 words of content separated from the component

export const HERO_CONTENT = {
  headline: 'The Best GetYourGuide & Viator Alternative for Asia Travel',
  subtitle:
    'Book with licensed local guides in India, Thailand, and across Asia. Lower commissions. Free cancellation. Refunds in 1 business day.',
  cta: 'Browse Asia Tours',
  ctaLink: '/',
};

export interface ComparisonRow {
  feature: string;
  asiabylocals: string;
  gyg: string;
  viator: string;
  klook: string;
}

export const COMPARISON_TABLE_DATA: ComparisonRow[] = [
  {
    feature: 'Asia Specialization',
    asiabylocals: '100% Asia-focused',
    gyg: 'Global — 190+ countries',
    viator: 'Global — 190+ countries',
    klook: 'Asia-strong, but expanding globally',
  },
  {
    feature: 'Guided Tours by Licensed Locals',
    asiabylocals: 'Yes — government-certified guides',
    gyg: 'Varies by operator',
    viator: 'Varies by operator',
    klook: 'Mostly tickets & passes',
  },
  {
    feature: 'Pricing Model',
    asiabylocals: '20% commission — lower than competitors',
    gyg: '25–30% platform commission',
    viator: '25–30% platform commission',
    klook: '20–25% commission on tours',
  },
  {
    feature: 'Free Cancellation',
    asiabylocals: 'Yes — up to 24 hours before',
    gyg: 'Yes — most bookings',
    viator: 'Yes — most bookings',
    klook: 'Limited — many non-refundable',
  },
  {
    feature: 'Refund Speed',
    asiabylocals: '1 business day',
    gyg: '5–10 business days',
    viator: '5–10 business days',
    klook: '7–14 business days',
  },
  {
    feature: 'Booking Fees',
    asiabylocals: 'None',
    gyg: 'None (built into price)',
    viator: 'None (built into price)',
    klook: 'None (built into price)',
  },
  {
    feature: 'Guide Vetting',
    asiabylocals: 'Personally verified & licensed',
    gyg: 'Operator self-listed',
    viator: 'Operator self-listed',
    klook: 'Operator self-listed',
  },
  {
    feature: 'Customer Support',
    asiabylocals: 'Direct WhatsApp + email',
    gyg: 'Email & chat support',
    viator: 'Email & chat support',
    klook: 'In-app chat support',
  },
];

export interface PlatformReview {
  name: string;
  slug: string;
  color: string;
  monthlyVisits: string;
  founded: string;
  headquarters: string;
  description: string;
  pros: string[];
  cons: string[];
  verdict: string;
  detailedReview: string;
}

export const PLATFORM_REVIEWS: PlatformReview[] = [
  {
    name: 'GetYourGuide',
    slug: 'getyourguide',
    color: '#FF5533',
    monthlyVisits: '36.9M',
    founded: '2009',
    headquarters: 'Berlin, Germany',
    description:
      'GetYourGuide is one of the largest online travel activity platforms in the world, founded in Berlin in 2009. With over 300,000 activities listed across 190+ countries and 36.9 million monthly visitors, it has become a go-to marketplace for travelers booking tours, skip-the-line tickets, and day trips.',
    pros: [
      'Massive inventory of activities — over 300,000 worldwide',
      'Clean, intuitive interface that makes browsing and booking easy',
      'Strong cancellation policy — free cancellation up to 24 hours on most bookings',
      'Excellent coverage for European destinations',
      'Verified reviews from real travelers',
    ],
    cons: [
      'Spread thin across 190+ countries — Asia coverage lacks depth and local expertise',
      'High 25–30% platform commission inflates prices above what local operators would otherwise charge',
      'Tours are often resold from local operators — you\'re paying a middleman',
      'Generic customer support with no local presence in most Asian cities',
      'One-size-fits-all approach doesn\'t account for cultural nuances of Asian travel',
    ],
    verdict:
      'GetYourGuide is a solid platform for European travel. But for Asia, the lack of specialization shows. You\'re paying more for tours that are often just resold from the same local operators you could book with directly. If you\'re heading to Thailand, India, or anywhere in Asia, a platform that actually knows the region will give you better guides, better prices, and a more authentic experience.',
    detailedReview:
      'GetYourGuide has earned its reputation as a reliable booking platform — and for good reason. The interface is polished, search filters work well, and the sheer volume of options means you\'ll almost always find something in your destination. For cities like Barcelona, Rome, or Paris, it\'s hard to beat.\n\nBut here\'s the issue for Asia-bound travelers: GetYourGuide treats Bangkok the same way it treats Barcelona. The platform doesn\'t have dedicated local teams curating experiences in Agra, Phuket, or Jaipur. Instead, it relies on operators to self-list their tours, which means quality varies wildly. You might book a "local food tour in Bangkok" and end up with a generic tourist group led by someone who reads from a script.\n\nThe bigger problem is pricing. GetYourGuide takes a 25–30% commission from operators — among the highest in the industry. To maintain their margins, operators simply raise prices on the platform. A platform with a lower commission rate allows guides to keep prices competitive without cutting into their own earnings. Reddit users have caught onto this — as one user put it: "I avoid buying from this type of company because I think it\'s just a layer of cost on top of the local operators."\n\nFor European travelers doing a quick city break, GetYourGuide delivers convenience that justifies the markup. But for Asia — where the best experiences come from deeply local, culturally informed guides — a specialized platform is worth considering.',
  },
  {
    name: 'Viator',
    slug: 'viator',
    color: '#2D9B8A',
    monthlyVisits: '19.3M',
    founded: '1999',
    headquarters: 'San Francisco, USA',
    description:
      'Viator is one of the oldest and most established tour booking platforms, founded in 1999 and acquired by TripAdvisor (now Tripadvisor Group) in 2014. With 19.3 million monthly visits and deep TripAdvisor integration, it\'s a familiar name for North American travelers booking activities worldwide.',
    pros: [
      'Huge catalog of tours and activities across 190+ countries',
      'Backed by TripAdvisor — massive review database and brand trust',
      'Free cancellation on most bookings up to 24 hours before',
      'Loyalty rewards through the TripAdvisor ecosystem',
      'Strong mobile app experience',
    ],
    cons: [
      'Corporate middleman — owned by Tripadvisor Group, with a 25–30% commission on operators',
      'Tours are frequently resold — the operator you book through may not be the one running the tour',
      'Asia tours lack depth — generic descriptions that don\'t reflect local cultural knowledge',
      'Refund processing takes 5–10 business days',
      'Customer support is centralized, not local — no on-the-ground help if something goes wrong in Bangkok or Agra',
    ],
    verdict:
      'Viator is the platform most travelers default to because of TripAdvisor. It\'s reliable, has a massive selection, and the reviews help you feel confident. But for Asia travel specifically, you\'re paying a premium for tours that are often just repackaged local offerings. When a Reddit user says "it\'s just a layer of cost on top of the local operators," they\'re talking about platforms like Viator.',
    detailedReview:
      'Viator\'s biggest strength is also its biggest weakness: scale. With hundreds of thousands of listings, you\'ll find tours in almost any city on Earth. The TripAdvisor integration means reviews are plentiful, and the brand name gives first-time bookers confidence.\n\nBut that scale comes at a cost — literally. Viator is a marketplace, not a tour company. It doesn\'t employ guides or design experiences. It connects travelers with local operators and takes a 25–30% cut — one of the highest commission rates in the industry. For the operator, that means either eating the commission or raising prices. Most raise prices. A platform with a lower commission lets guides price more competitively.\n\nThe "owned by TripAdvisor" factor cuts both ways. On one hand, you get a massive review database. On the other, you\'re booking through a publicly-traded corporation that optimizes for volume over curation. The Bangkok food tour with 500 reviews might be perfectly fine — but it\'s not the hidden-gem experience that a local guide passionate about their city would design.\n\nOne frequent complaint from travelers is the "resold tour" problem. You book through Viator, but the actual tour is run by a local company you\'ve never heard of. If something goes wrong — a no-show guide, a changed itinerary — Viator\'s centralized customer support in San Francisco isn\'t much help when you\'re standing outside the Grand Palace in Bangkok.\n\nFor mainstream European and American destinations, Viator works fine. For Asia, where the magic is in the local connections, a direct-booking platform with vetted local guides delivers a fundamentally better experience.',
  },
  {
    name: 'Klook',
    slug: 'klook',
    color: '#FF6B00',
    monthlyVisits: '48.3M',
    founded: '2014',
    headquarters: 'Hong Kong',
    description:
      'Klook is the largest Asia-focused travel activity platform, founded in Hong Kong in 2014. With 48.3 million monthly visits, it dominates the transport tickets, theme park passes, and activity booking space — particularly in East and Southeast Asia.',
    pros: [
      'Strong Asia presence — originally built for the Asian market',
      'Excellent for transport tickets, theme parks, and attraction passes',
      'Often the cheapest option for tickets and fixed-price activities',
      'Great last-minute deals and bundle packages',
      'Smooth mobile app with QR-code-based entry tickets',
    ],
    cons: [
      'Focused on tickets and passes, not guided cultural experiences',
      'Limited free cancellation — many bookings are non-refundable once confirmed',
      'Refund processing is slow: 7–14 business days when available',
      'Guide quality is inconsistent — tours are listed by operators without rigorous vetting',
      'More of a "ticket marketplace" than a curated tour experience platform',
    ],
    verdict:
      'Klook is excellent at what it does best: selling tickets and passes for attractions, transport, and theme parks across Asia. But if you\'re looking for a guided cultural experience — a licensed local guide walking you through the history of Wat Pho, or a food expert taking you through Bangkok\'s hidden street food alleys — Klook isn\'t designed for that. And the limited cancellation policy is a significant downside compared to platforms that offer free cancellation.',
    detailedReview:
      'Klook occupies an interesting position in the market. As an Asia-born platform headquartered in Hong Kong, it understands the Asian travel market better than GetYourGuide or Viator. It\'s the platform of choice for millions of East Asian travelers booking rail passes, theme park tickets, and airport transfers.\n\nBut Klook\'s DNA is transactional, not experiential. The platform is optimized for selling tickets — Disneyland Hong Kong passes, JR Rail passes in Japan, Grab airport transfers in Bangkok. When it comes to guided tours with local cultural experts, Klook\'s offerings are thin. The "tours" listed are often the same generic group tours you\'d find on any platform, without the curation that makes an experience memorable.\n\nThe cancellation policy is where Klook falls short for many travelers. Unlike GetYourGuide and Viator, which generally offer free cancellation up to 24 hours before, many Klook bookings are non-refundable once confirmed. If your plans change — and they often do in Asia, especially during monsoon season or festival periods — you\'re stuck. And when refunds are available, the 7–14 business day processing time is the slowest among major platforms.\n\nFor ticket purchases and transport bookings, Klook is hard to beat. But for guided tours in India and Thailand — where the guide\'s knowledge, personality, and local connections make or break the experience — a platform that specializes in vetting and curating local guides is a better choice.',
  },
];

export interface UspBlock {
  icon: string;
  title: string;
  description: string;
}

export const USP_BLOCKS: UspBlock[] = [
  {
    icon: 'MapPin',
    title: '100% Asia-Specialized',
    description:
      'We don\'t try to cover 190 countries. We go deep in Asia — India, Thailand, and expanding — with curated experiences designed by people who live there. Every tour reflects genuine local knowledge, not a generic template copied across continents.',
  },
  {
    icon: 'DollarSign',
    title: 'Lower Commissions, Better Prices',
    description:
      'We charge a 20% commission — lower than GetYourGuide and Viator\'s 25–30%. That means guides can price their tours more competitively without sacrificing their earnings. The result? You pay less for the same quality experience.',
  },
  {
    icon: 'Shield',
    title: 'Licensed & Personally Vetted Guides',
    description:
      'Every guide on AsiaByLocals holds a government-issued license. Our founder personally vets operators in India — because he grew up guiding tourists in Agra. This isn\'t a faceless marketplace. We know our guides by name.',
  },
  {
    icon: 'RefreshCw',
    title: 'Free Cancellation + 1-Day Refunds',
    description:
      'Cancel up to 24 hours before your tour at no cost. And when you do cancel, your money is back within 1 business day — not the 5–14 days you\'d wait with GetYourGuide, Viator, or Klook.',
  },
];

export interface FeaturedTour {
  title: string;
  slug: string;
  city: string;
  country: string;
  description: string;
  image: string;
  price: string;
  rating: string;
  duration: string;
}

export const FEATURED_TOURS: FeaturedTour[] = [
  {
    title: 'Taj Mahal Official Guided Tour',
    slug: 'taj-mahal-official-guided-tour',
    city: 'agra',
    country: 'india',
    description:
      'Skip-the-line entry with a government-licensed guide. Explore the Taj Mahal\'s history, architecture, and hidden details most tourists miss.',
    image:
      'https://res.cloudinary.com/dx2fxyaft/image/upload/v1769953944/tours/agra/tours/agra_1769953943959_0.jpg',
    price: 'From $25',
    rating: '4.9',
    duration: '2 hours',
  },
  {
    title: 'Grand Palace, Wat Pho & Wat Arun Guided Tour',
    slug: 'bangkok-grand-palace-wat-pho-wat-arun-guided-tour',
    city: 'bangkok',
    country: 'thailand',
    description:
      'Visit Bangkok\'s three iconic temples with a licensed local guide. Includes hotel pickup and all entrance fees.',
    image:
      'https://res.cloudinary.com/dx2fxyaft/image/upload/v1773710349/tours/bangkok-grand-palace/hq_1.jpg',
    price: 'From $49',
    rating: '4.8',
    duration: '5 hours',
  },
  {
    title: 'Bangkok Chinatown Food Tour — 15 Tastings',
    slug: 'bangkok-chinatown-food-tour-15-tastings-michelin-stops',
    city: 'bangkok',
    country: 'thailand',
    description:
      'Taste 15+ dishes including Michelin-recommended street food. Led by a local food expert through Yaowarat\'s best hidden stalls.',
    image:
      'https://res.cloudinary.com/dx2fxyaft/image/upload/v1773776051/tours/bangkok/chefs_tour_6_1773776050893.jpg',
    price: 'From $39',
    rating: '4.9',
    duration: '3 hours',
  },
  {
    title: 'Jaipur City Tour — Amber Fort, Hawa Mahal & City Palace',
    slug: 'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal',
    city: 'jaipur',
    country: 'india',
    description:
      'Full-day private tour covering Jaipur\'s top landmarks with a certified local guide. Includes Amber Fort elephant ramp area.',
    image:
      'https://res.cloudinary.com/dx2fxyaft/image/upload/v1771770878/tours/jaipur/tours/jaipur_1771770877736_0.jpg',
    price: 'From $35',
    rating: '4.9',
    duration: '8 hours',
  },
  {
    title: 'Phuket Island Hopping — Phi Phi & Maya Bay',
    slug: 'phi-phi-islands-speedboat-tour-maya-bay-snorkeling',
    city: 'phuket',
    country: 'thailand',
    description:
      'Speedboat tour to Phi Phi Islands and Maya Bay with snorkeling stops. Small group with local Thai boat captain.',
    image:
      'https://res.cloudinary.com/dx2fxyaft/image/upload/v1772835263/tours/phuket/phi-phi-islands-speedboat-tour-maya-bay-snorkeling-0.jpg',
    price: 'From $55',
    rating: '4.8',
    duration: '8 hours',
  },
];

export interface RedditQuote {
  quote: string;
  context: string;
  subreddit: string;
}

export const REDDIT_QUOTES: RedditQuote[] = [
  {
    quote:
      'I avoid buying from this type of company because I think it\'s just a layer of cost on top of the local operators. I always try to find the natives.',
    context: 'Discussing GetYourGuide and similar booking platforms',
    subreddit: 'r/viagens',
  },
  {
    quote:
      'Try book direct with the guides is the best way. I really like Spring Saigon Tours, I think you can find them on IG or just googling.',
    context: 'Advice on booking tours in Southeast Asia',
    subreddit: 'r/VietNam',
  },
  {
    quote:
      'Some attractions are more expensive through it than buying through official channels. Just pay attention to the reviews and what\'s included.',
    context: 'Reviewing experience with major tour booking platforms',
    subreddit: 'r/viagens',
  },
  {
    quote:
      'If it\'s tickets for an attraction, I try to buy them on the official website. If it\'s a tour, I look for a local travel agency that organizes it.',
    context: 'Sharing personal booking strategy',
    subreddit: 'r/viagens',
  },
];

export interface PriceComparison {
  tour: string;
  location: string;
  asiabylocals: string;
  gyg: string;
  viator: string;
  savings: string;
}

export const PRICE_COMPARISONS: PriceComparison[] = [
  {
    tour: 'Taj Mahal Guided Tour (2 hrs)',
    location: 'Agra, India',
    asiabylocals: '$25',
    gyg: '$42',
    viator: '$45',
    savings: 'Save 40–44%',
  },
  {
    tour: 'Grand Palace & Temples Tour (5 hrs)',
    location: 'Bangkok, Thailand',
    asiabylocals: '$49',
    gyg: '$78',
    viator: '$85',
    savings: 'Save 37–42%',
  },
  {
    tour: 'Street Food Tour with Local (3 hrs)',
    location: 'Bangkok, Thailand',
    asiabylocals: '$39',
    gyg: '$59',
    viator: '$65',
    savings: 'Save 34–40%',
  },
  {
    tour: 'Full-Day City Tour (8 hrs)',
    location: 'Jaipur, India',
    asiabylocals: '$35',
    gyg: '$55',
    viator: '$60',
    savings: 'Save 36–42%',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question:
      'Is AsiaByLocals a legitimate alternative to GetYourGuide and Viator?',
    answer:
      'Yes. AsiaByLocals is a registered tour booking platform specializing in Asia. Unlike global platforms that list 300,000+ activities across 190 countries, we focus exclusively on curated experiences in India and Thailand with licensed local guides. Every guide is personally vetted, and our founder grew up as a tour guide in Agra — this isn\'t a faceless marketplace.',
  },
  {
    question:
      'How does AsiaByLocals offer lower prices than Viator or GetYourGuide?',
    answer:
      'GetYourGuide and Viator charge operators a 25–30% commission. Operators raise their listed prices to compensate. AsiaByLocals charges a lower 20% commission, which means guides can offer more competitive pricing. Combined with our Asia-only focus and lower operating costs, the same tour often costs significantly less on our platform.',
  },
  {
    question:
      'What is the cancellation policy compared to Klook?',
    answer:
      'AsiaByLocals offers free cancellation up to 24 hours before your tour on all bookings. Klook, by contrast, has many bookings marked as non-refundable once confirmed. When you do cancel on AsiaByLocals, your refund is processed within 1 business day — compared to Klook\'s 7–14 business days.',
  },
  {
    question: 'Are the local guides on AsiaByLocals licensed and vetted?',
    answer:
      'Yes. All guides on AsiaByLocals hold government-issued tourism licenses. In India, this means they\'re certified by the Ministry of Tourism or relevant state tourism authority. In Thailand, guides hold TAT (Tourism Authority of Thailand) certification. Our founder personally verifies credentials for all Indian operators.',
  },
  {
    question: 'Does AsiaByLocals cover destinations outside Asia?',
    answer:
      'Currently, AsiaByLocals operates in India (Agra, Delhi, Jaipur, and more) and Thailand (Bangkok, Phuket). We\'re expanding to Vietnam, Cambodia, Indonesia, and Japan. Our focus is depth over breadth — we\'d rather offer 50 exceptional tours in Bangkok than 50,000 mediocre ones worldwide.',
  },
  {
    question:
      'How do I know I\'m not getting a resold tour?',
    answer:
      'On GetYourGuide and Viator, it\'s common for the operator listed on the platform to outsource the actual tour to someone else. On AsiaByLocals, the guide or company you book is the one who shows up. We display the operator\'s name and credentials upfront — no intermediaries, no surprises.',
  },
  {
    question: 'What payment methods does AsiaByLocals accept?',
    answer:
      'We accept all major credit and debit cards (Visa, Mastercard, American Express) through our secure Stripe payment gateway. All transactions are processed in USD with bank-level encryption.',
  },
  {
    question:
      'What happens if my tour is cancelled by the operator?',
    answer:
      'In the rare event an operator cancels, you receive a full refund within 1 business day. We also offer to rebook you with an alternative guide at no extra cost. Our direct relationship with every guide means we can resolve issues faster than centralized support teams at global platforms.',
  },
];

// Intro paragraph for the page (appears below hero, before comparison table)
export const INTRO_TEXT = `Every year, millions of travelers book tours through GetYourGuide, Viator, and Klook. These platforms are convenient, well-designed, and have massive catalogs. But convenience comes at a cost — literally.

Behind every tour listed on these platforms is a local operator who set a price, then watched the platform add a 25–30% commission on top. Operators raise their prices to compensate — and you end up paying more.

We built AsiaByLocals because we saw this firsthand. Our founder grew up as a licensed tour guide in Agra, India — and watched as global platforms took large commissions while offering generic, one-size-fits-all customer support from offices thousands of miles away. We charge a lower 20% commission, so guides can offer better prices while still earning fairly.

This page is an honest comparison. We'll break down what GetYourGuide, Viator, and Klook do well, where they fall short for Asia travel, and why a specialized Asia platform with lower commissions and vetted local guides delivers a better experience.`;
