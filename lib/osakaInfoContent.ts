// Osaka authority pages (2026-08). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getOsakaInfoContent() -> getCityInfoContent().
import type { CityInfoData } from './cityInfoContent';

export function getOsakaInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case 'best-time-to-visit-osaka':
            return {
        title: 'Best Time to Visit Osaka: A Season-by-Season Guide',
        seoTitle: 'Best Time to Visit Osaka (2026) - Weather, Crowds & Sakura Guide',
        description: 'When to visit Osaka by season, with real weather numbers, cherry blossom and autumn foliage windows, and honest advice on when crowds and prices peak.',
        fastFacts: [
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Peak months: April (sakura) and November (foliage, lowest rainfall)',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Rainy season: early June to mid-July',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Winter lows: around 4°C (39°F)',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Summer highs: up to 35°C (95°F) with high humidity',
          },
        ],
        sections: [
          {
            title: 'The two sweet spots: April and November',
            icon: 'calendar-check',
            content: 'If you can only pick two months, make them April and November. April brings cherry blossoms and mild 15-20°C days; November brings Osaka\'s lowest rainfall of the year, comfortable temperatures, and autumn foliage without spring-level crowds. Both are also the most expensive and most booked-out months, so lock in flights and hotels 3+ months ahead if you\'re set on these windows.',
          },
          {
            title: 'Spring (March-May): blossoms and crowds',
            icon: 'flower',
            content: 'Average temperatures run 14-24°C. Sakura typically peaks in late March to early April, and Osaka Castle Park is one of the best free viewing spots in the city, with illuminated night viewing when the trees are in bloom. The trade-off is real: this is peak tourist season, with premium hotel rates and packed castle grounds.',
            tourCard: {
              slug: 'osaka-castle-guided-tour',
              title: '2hrs Guided tour Osaka Castle and Shrine with Local Guide',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 52.8',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671582/asiabylocals/tours/osaka-2hrs-guided-tour-osaka-castle-and-shrine-with-local-guide/img0.jpg',
            },
          },
          {
            title: 'Summer (June-August): hot, humid, and worth it for festivals',
            icon: 'sun',
            content: 'Summer runs 27-32°C with high humidity, and the tsuyu rainy season (early June to mid-July) brings frequent showers and around 207mm of rain in a typical month. It\'s the least comfortable season for walking tours, but summer fireworks festivals and beer gardens are a genuine upside if you don\'t mind the heat.',
            tourCard: {
              slug: 'osaka-night-evening-tour',
              title: 'Osaka: Private Night Cruise Through the City of Water',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 224.02',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671633/asiabylocals/tours/osaka-osaka-private-night-cruise-through-the-city-of-water/img0.png',
            },
          },
          {
            title: 'Autumn (September-November): the quiet favorite',
            icon: 'leaf',
            content: 'October is arguably the single most pleasant month in Osaka: sunny, 18-22°C, low humidity, minimal rain. Autumn foliage (koyo) peaks in late November, painting Osaka Castle Park and Kuromon-area gardens in red and gold.',
          },
          {
            title: 'Winter (December-February): cold but crowd-free',
            icon: 'snowflake',
            content: 'Winter highs sit around 11°C with lows near 4°C, and occasional light snow is possible but rarely sticks. This is the cheapest, least crowded time to visit indoor experiences like tea ceremonies, kimono studios, and sumo shows — all of which run rain or shine.\n\nOnce your dates are locked, plan the days themselves with our [3-day Osaka itinerary](/japan/osaka/osaka-3-day-itinerary) and sort transport with the [getting around Osaka guide](/japan/osaka/getting-around-osaka).',
            tourCard: {
              slug: 'osaka-sumo-guided-tour',
              title: 'Sumo Experience Only Plan',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 10800',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671607/asiabylocals/tours/osaka-sumo-experience-only-plan/img1.jpg',
            },
          },
        ],
        faqs: [
          {
            q: 'What is the single best month to visit Osaka?',
            a: 'November, for the combination of low rainfall, comfortable temperatures, and autumn color, without quite reaching April\'s peak crowd and price levels.',
          },
          {
            q: 'Is Osaka too hot to visit in summer?',
            a: 'It\'s hot and humid (27-32°C with high humidity), which makes outdoor walking tours tougher, but indoor experiences and evening activities remain comfortable and summer festivals are a real draw.',
          },
          {
            q: 'When does cherry blossom season happen in Osaka?',
            a: 'Typically late March into early-to-mid April, though exact bloom dates shift year to year — check current-year forecasts closer to your trip.',
          },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
                    {
                              "@type": "FAQPage",
                              "mainEntity": [
                                        {
                                                  "@type": "Question",
                                                  "name": "What is the single best month to visit Osaka?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "November, for the combination of low rainfall, comfortable temperatures, and autumn color, without quite reaching April's peak crowd and price levels."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Is Osaka too hot to visit in summer?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "It's hot and humid (27-32°C with high humidity), which makes outdoor walking tours tougher, but indoor experiences and evening activities remain comfortable and summer festivals are a real draw."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "When does cherry blossom season happen in Osaka?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Typically late March into early-to-mid April, though exact bloom dates shift year to year — check current-year forecasts closer to your trip."
                                                  }
                                        }
                              ]
                    }
          ]
},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671644/asiabylocals/tours/osaka-full-day-private-osaka-walking-tour/img0.jpg',
      };

        case 'osaka-3-day-itinerary':
            return {
        title: 'The Perfect 3-Day Osaka Itinerary',
        seoTitle: 'Osaka 3-Day Itinerary (2026) - Castle, Dotonbori, Food & Day Trip',
        description: 'A realistic 3-day Osaka plan balancing Osaka Castle, Dotonbori nightlife, street food, and one optional day trip to Nara or Kyoto.',
        fastFacts: [
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Osaka Castle: ¥1,200 adult, 9am-5pm daily',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'JR Special Rapid to Kyoto: ~29 min, ¥580',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Kintetsu to Nara: ~36 min',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Most sights within 20-30 min subway ride of each other',
          },
        ],
        sections: [
          {
            title: 'Day 1: Osaka Castle and central Osaka',
            icon: 'landmark',
            content: 'Start at Osaka Castle — the keep opens 9:00-17:00 (last entry 16:30) with adult admission around ¥1,200, though the 106-hectare park around it is free and open 24 hours. Spend the afternoon around Umeda, then head to Shinsekai for kushikatsu at sunset under Tsutenkaku Tower.',
            tourCard: {
              slug: 'osaka-castle-guided-tour',
              title: '2hrs Guided tour Osaka Castle and Shrine with Local Guide',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 52.8',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671582/asiabylocals/tours/osaka-2hrs-guided-tour-osaka-castle-and-shrine-with-local-guide/img0.jpg',
            },
          },
          {
            title: 'Day 2: Dotonbori, Namba, and street food',
            icon: 'utensils',
            content: 'Devote the day to Minami — Dotonbori\'s canal, the Glico Man sign (best viewed from Ebisu Bridge at night), Kuromon Ichiba Market for takoyaki and fresh seafood by day, then Hozenji Yokocho\'s lantern-lit alley in the evening.',
            tourCard: {
              slug: 'osaka-food-tour',
              title: 'Osaka Street Food Tour: Takoyaki, Okonomiyaki & Local Flavor',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 452.4',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671622/asiabylocals/tours/osaka-osaka-street-food-tour-takoyaki-okonomiyaki-local-flavor/img0.webp',
            },
          },
          {
            title: 'Day 3: A day trip or deep dive',
            icon: 'train',
            content: 'Most visitors use day 3 for a side trip: Nara (about 30-45 minutes each way by Kintetsu or JR) for the deer park and Todai-ji\'s giant Buddha, or Kyoto (13-29 minutes by JR Special Rapid or Shinkansen) for temples. If you\'d rather stay in Osaka, add Universal Studios Japan or the Osaka Aquarium instead.',
            tourCard: {
              slug: 'osaka-treasures-guided-tour',
              title: 'Secret Spots & Local Treasures Tour',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 9000',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671610/asiabylocals/tours/osaka-secret-spots-local-treasures-tour/img0.webp',
            },
          },
          {
            title: 'Getting the most from a short trip',
            icon: 'map',
            content: 'Osaka is compact enough that most of the highlights sit within a 20-30 minute subway ride of each other, so 3 days is genuinely enough to hit the essentials without feeling rushed — unlike Tokyo or Kyoto, where distances eat more of the day.\n\nFor deeper detail on the stops in this plan, see our [Osaka Castle guide](/japan/osaka/osaka-castle-guide), the [Dotonbori guide](/japan/osaka/dotonbori-guide), and the [Osaka food guide](/japan/osaka/osaka-food-guide). Adding a fourth day? The [Nara day trip guide](/japan/osaka/osaka-to-nara-day-trip) is the classic pick.',
          },
        ],
        faqs: [
          {
            q: 'Is 3 days enough for Osaka?',
            a: 'Yes — Osaka\'s core sights are compact and well-connected by subway, so 3 days covers Osaka Castle, Dotonbori/Namba, and one day trip comfortably.',
          },
          {
            q: 'Should I stay in Osaka or day-trip from Kyoto instead?',
            a: 'Either works since the two cities are 13-29 minutes apart by train, but basing in Osaka usually means cheaper hotels and easier access to Universal Studios and Kansai Airport.',
          },
          {
            q: 'What\'s the one thing I shouldn\'t skip?',
            a: 'Dotonbori at night — it\'s the most photographed street scene in the city and free to walk.',
          },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
                    {
                              "@type": "FAQPage",
                              "mainEntity": [
                                        {
                                                  "@type": "Question",
                                                  "name": "Is 3 days enough for Osaka?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Yes — Osaka's core sights are compact and well-connected by subway, so 3 days covers Osaka Castle, Dotonbori/Namba, and one day trip comfortably."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Should I stay in Osaka or day-trip from Kyoto instead?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Either works since the two cities are 13-29 minutes apart by train, but basing in Osaka usually means cheaper hotels and easier access to Universal Studios and Kansai Airport."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "What's the one thing I shouldn't skip?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Dotonbori at night — it's the most photographed street scene in the city and free to walk."
                                                  }
                                        }
                              ]
                    }
          ]
},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671644/asiabylocals/tours/osaka-full-day-private-osaka-walking-tour/img0.jpg',
      };

        case 'getting-around-osaka':
            return {
        title: 'Getting Around Osaka: Subway, ICOCA, and the Osaka Amazing Pass',
        seoTitle: 'Getting Around Osaka (2026) - ICOCA Card vs Osaka Amazing Pass',
        description: 'How to actually navigate Osaka\'s subway and rail network, when the Osaka Amazing Pass pays for itself, and why you probably need an ICOCA card regardless.',
        fastFacts: [
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'ICOCA works across Kansai\'s entire rail/bus network',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Osaka Amazing Pass: ¥3,300/day, ¥5,500/2-day, digital QR only',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Amazing Pass excludes JR lines',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Pass includes 40+ attraction entries incl. Osaka Castle',
          },
        ],
        sections: [
          {
            title: 'ICOCA card: get one on arrival, no exceptions',
            icon: 'credit-card',
            content: 'The ICOCA is a rechargeable IC card that works on Osaka Metro, JR trains, Hankyu, Hanshin, Nankai, Kintetsu, Keihan lines, buses, convenience stores, and most vending machines. Tap in, tap out, no ticket-buying per ride. Nearly every visitor should have one regardless of what other passes they buy.',
          },
          {
            title: 'Osaka Amazing Pass: worth it on a heavy sightseeing day',
            icon: 'ticket',
            content: 'As of 2026 the pass is fully digital (QR code, no physical card) and costs ¥3,300 for one day or ¥5,500 for two. It includes unlimited subway rides plus free entry to 40+ attractions including Osaka Castle and the Dotonbori River Cruise — but it does not cover JR lines, including the JR Loop Line. It pays off once you\'re hitting 3+ paid attractions in a day.',
          },
          {
            title: 'Don\'t confuse the two',
            icon: 'help-circle',
            content: 'The ICOCA and Amazing Pass solve different problems and most visitors should use both: ICOCA for ordinary point-to-point travel across your whole trip, and the Amazing Pass for one or two intensive sightseeing days where you\'re stacking paid attractions.',
          },
          {
            title: 'Walking is often faster than it looks',
            icon: 'footprints',
            content: 'Central Osaka\'s core — Umeda, Namba, Dotonbori, Shinsaibashi — is dense enough that many stops are a 15-20 minute walk apart, sometimes faster than waiting for a train and changing lines.\n\nWith ICOCA in hand, day trips get easy - see our [Osaka to Kyoto](/japan/osaka/osaka-to-kyoto-day-trip) and [Osaka to Nara](/japan/osaka/osaka-to-nara-day-trip) guides - and time your whole visit with the [best time to visit Osaka guide](/japan/osaka/best-time-to-visit-osaka).',
            tourCard: {
              slug: 'osaka-walking-tour',
              title: 'Osaka: Main Sights and Hidden Spots Guided Walking Tour',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 69.7',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671498/asiabylocals/tours/osaka-osaka-main-sights-and-hidden-spots-guided-walking-tour/img0.png',
            },
          },
        ],
        faqs: [
          {
            q: 'Do I need both ICOCA and the Osaka Amazing Pass?',
            a: 'Most visitors benefit from both — ICOCA for everyday travel, the Amazing Pass only on days packed with paid attractions.',
          },
          {
            q: 'Does the Osaka Amazing Pass cover JR trains?',
            a: 'No, JR-operated lines including the Osaka Loop Line are excluded — it covers Osaka Metro subway and bus plus attraction entry.',
          },
          {
            q: 'How much is the Osaka Amazing Pass?',
            a: '¥3,300 for one day or ¥5,500 for two days, delivered digitally as a QR code as of 2026.',
          },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
                    {
                              "@type": "FAQPage",
                              "mainEntity": [
                                        {
                                                  "@type": "Question",
                                                  "name": "Do I need both ICOCA and the Osaka Amazing Pass?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Most visitors benefit from both — ICOCA for everyday travel, the Amazing Pass only on days packed with paid attractions."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Does the Osaka Amazing Pass cover JR trains?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "No, JR-operated lines including the Osaka Loop Line are excluded — it covers Osaka Metro subway and bus plus attraction entry."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "How much is the Osaka Amazing Pass?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "¥3,300 for one day or ¥5,500 for two days, delivered digitally as a QR code as of 2026."
                                                  }
                                        }
                              ]
                    }
          ]
},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671644/asiabylocals/tours/osaka-full-day-private-osaka-walking-tour/img0.jpg',
      };

        case 'osaka-castle-guide':
            return {
        title: 'Osaka Castle: Complete Visitor Guide',
        seoTitle: 'Osaka Castle Guide (2026) - Hours, Tickets, History & Tips',
        description: 'Everything to know before visiting Osaka Castle: hours, ticket prices, what\'s actually inside, and how much time to budget.',
        fastFacts: [
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Adult ticket: ¥1,200',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Hours: 9am-5pm daily (last entry 4:30pm)',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Park: free, open 24/7',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Built by Toyotomi Hideyoshi in 1583; current keep rebuilt 1931',
          },
        ],
        sections: [
          {
            title: 'Hours and tickets',
            icon: 'clock',
            content: 'The keep is open daily 9:00-17:00 with last entry at 16:30, closed only December 28-January 1. Adult admission is ¥1,200, covering both the main keep and the Stone Wall Museum; children under 16 enter free with ID. During cherry blossom illuminations (roughly March 20-April 12), hours extend to 21:00.',
            tourCard: {
              slug: 'osaka-castle-guided-tour',
              title: '2hrs Guided tour Osaka Castle and Shrine with Local Guide',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 52.8',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671582/asiabylocals/tours/osaka-2hrs-guided-tour-osaka-castle-and-shrine-with-local-guide/img0.jpg',
            },
          },
          {
            title: 'The park itself is free',
            icon: 'trees',
            content: 'The 106-hectare grounds surrounding the castle are free to enter and open 24 hours a day — you don\'t need a ticket to walk the moats, stone walls, and gardens, only to enter the keep\'s museum floors.',
          },
          {
            title: 'What\'s inside',
            icon: 'building',
            content: 'The keep, rebuilt in ferro-concrete in 1931 after the original was destroyed, houses a museum on the castle\'s history and Toyotomi Hideyoshi, who built the original fortress in 1583. An observation deck near the top gives panoramic views over central Osaka.',
          },
          {
            title: 'How much time to budget',
            icon: 'timer',
            content: 'Plan 1.5-2.5 hours for the keep and immediate grounds, longer if you\'re doing a full guided walking tour that also covers the surrounding shrine and park.\n\nThe castle slots neatly into day one of our [3-day Osaka itinerary](/japan/osaka/osaka-3-day-itinerary), and cherry blossom timing around the park is covered in the [best time to visit Osaka guide](/japan/osaka/best-time-to-visit-osaka).',
          },
        ],
        faqs: [
          {
            q: 'How much does Osaka Castle cost to enter?',
            a: '¥1,200 for adults, covering the keep and Stone Wall Museum; the surrounding park is free.',
          },
          {
            q: 'What are Osaka Castle\'s hours?',
            a: 'Daily 9:00-17:00 (last entry 16:30), extended to 21:00 during spring cherry blossom illuminations, closed Dec 28-Jan 1.',
          },
          {
            q: 'Is Osaka Castle worth visiting?',
            a: 'Yes for the grounds and stone walls even without paying entry — the keep museum adds historical context but is a reconstruction, not the original 16th-century structure.',
          },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
                    {
                              "@type": "FAQPage",
                              "mainEntity": [
                                        {
                                                  "@type": "Question",
                                                  "name": "How much does Osaka Castle cost to enter?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "¥1,200 for adults, covering the keep and Stone Wall Museum; the surrounding park is free."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "What are Osaka Castle's hours?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Daily 9:00-17:00 (last entry 16:30), extended to 21:00 during spring cherry blossom illuminations, closed Dec 28-Jan 1."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Is Osaka Castle worth visiting?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Yes for the grounds and stone walls even without paying entry — the keep museum adds historical context but is a reconstruction, not the original 16th-century structure."
                                                  }
                                        }
                              ]
                    }
          ]
},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671644/asiabylocals/tours/osaka-full-day-private-osaka-walking-tour/img0.jpg',
      };

        case 'dotonbori-guide':
            return {
        title: 'Dotonbori Guide: Osaka\'s Neon Heart',
        seoTitle: 'Dotonbori Guide (2026) - Glico Sign, Food & Best Photo Spots',
        description: 'How to see Dotonbori right: the best time of day, where the Glico sign photo spot actually is, and what to eat along the canal.',
        fastFacts: [
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Glico sign: ~20m tall, ~150,000 LEDs',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Best photo spot: Ebisu Bridge',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Nearest stations: Namba, Shinsaibashi',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Peak crowd time: 9-11pm Fri/Sat',
          },
        ],
        sections: [
          {
            title: 'The Glico sign, explained',
            icon: 'camera',
            content: 'The Glico Man sign is a 20-meter neon billboard depicting a runner crossing a finish line, put up by confectionery company Ezaki Glico near Ebisu Bridge. The current version is the first LED iteration, built from roughly 150,000 LED lights. The best photo spot is Ebisu Bridge itself, or the promenade beneath it looking up.',
          },
          {
            title: 'When to go',
            icon: 'moon',
            content: 'Evening is when Dotonbori earns its reputation — the neon signage comes alive after dark. October through April is the most comfortable season to walk it at length, thanks to cooler, drier weather.',
            tourCard: {
              slug: 'osaka-night-evening-tour',
              title: 'Osaka: Private Night Cruise Through the City of Water',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 224.02',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671633/asiabylocals/tours/osaka-osaka-private-night-cruise-through-the-city-of-water/img0.png',
            },
          },
          {
            title: 'What to eat along the canal',
            icon: 'utensils',
            content: 'Dotonbori is Osaka\'s most concentrated street-food strip: takoyaki, okonomiyaki, and kushikatsu stalls line the canal, alongside the giant 3D crab and other oversized restaurant signage that\'s become as photographed as the Glico sign itself.',
            tourCard: {
              slug: 'osaka-food-tour',
              title: 'Osaka Street Food Tour: Takoyaki, Okonomiyaki & Local Flavor',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 452.4',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671622/asiabylocals/tours/osaka-osaka-street-food-tour-takoyaki-okonomiyaki-local-flavor/img0.webp',
            },
          },
          {
            title: 'Getting there',
            icon: 'train',
            content: 'Namba and Shinsaibashi subway stations both put you a short walk from the canal, making Dotonbori one of the easiest Osaka landmarks to combine with other Minami-district stops like Kuromon Market or Hozenji Yokocho.\n\nCome hungry - the [Osaka food guide](/japan/osaka/osaka-food-guide) covers what to order stall by stall - and if the neon leaves you wanting more, the [Osaka nightlife guide](/japan/osaka/osaka-nightlife-guide) picks up where Dotonbori ends. For the retro southern counterpart, see the [Shinsekai guide](/japan/osaka/shinsekai-guide).',
            tourCard: {
              slug: 'osaka-walking-tour',
              title: 'Osaka: Main Sights and Hidden Spots Guided Walking Tour',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 69.7',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671498/asiabylocals/tours/osaka-osaka-main-sights-and-hidden-spots-guided-walking-tour/img0.png',
            },
          },
        ],
        faqs: [
          {
            q: 'Where\'s the best spot to photograph the Glico sign?',
            a: 'Ebisu Bridge, or the riverside promenade just beneath it looking up at the sign.',
          },
          {
            q: 'What time is Dotonbori busiest?',
            a: 'It reaches full intensity around 8pm, with peak crowds 9-11pm on Friday and Saturday nights.',
          },
          {
            q: 'Which station is closest to Dotonbori?',
            a: 'Namba or Shinsaibashi stations, both a short walk away.',
          },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
                    {
                              "@type": "FAQPage",
                              "mainEntity": [
                                        {
                                                  "@type": "Question",
                                                  "name": "Where's the best spot to photograph the Glico sign?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Ebisu Bridge, or the riverside promenade just beneath it looking up at the sign."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "What time is Dotonbori busiest?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "It reaches full intensity around 8pm, with peak crowds 9-11pm on Friday and Saturday nights."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Which station is closest to Dotonbori?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Namba or Shinsaibashi stations, both a short walk away."
                                                  }
                                        }
                              ]
                    }
          ]
},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671644/asiabylocals/tours/osaka-full-day-private-osaka-walking-tour/img0.jpg',
      };

        case 'osaka-food-guide':
            return {
        title: 'Osaka Food Guide: Takoyaki, Okonomiyaki & Kuromon Market',
        seoTitle: 'Osaka Food Guide (2026) - What to Eat & Where',
        description: 'Osaka calls itself Japan\'s kitchen. Here\'s what that actually means on a plate — takoyaki, okonomiyaki, kushikatsu — and where locals actually eat it.',
        fastFacts: [
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Kuromon Market: ~150 stalls, 600m, 190+ years old',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Nearest station to Kuromon: Nippombashi (3-5 min walk)',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Kushikatsu rule: one dip only, shared sauce',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Osaka-style okonomiyaki mixes ingredients into batter (unlike Hiroshima-style)',
          },
        ],
        sections: [
          {
            title: 'Takoyaki: the signature snack',
            icon: 'circle',
            content: 'Ball-shaped batter filled with diced octopus, tempura scraps, and pickled ginger, topped with a dark savory sauce, mayo, and bonito flakes. Freshest and best straight off a street grill rather than pre-packaged.',
            tourCard: {
              slug: 'osaka-food-tour',
              title: 'Osaka Street Food Tour: Takoyaki, Okonomiyaki & Local Flavor',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 452.4',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671622/asiabylocals/tours/osaka-osaka-street-food-tour-takoyaki-okonomiyaki-local-flavor/img0.webp',
            },
          },
          {
            title: 'Okonomiyaki: Osaka\'s savory pancake',
            icon: 'circle-dot',
            content: 'A cabbage, meat, and batter mix grilled on an iron plate, topped with sauce, mayo, and bonito flakes. Osaka-style mixes everything into the batter before cooking, distinct from Hiroshima\'s layered version.',
            tourCard: {
              slug: 'osaka-food-tour',
              title: 'Osaka Street Food Tour: Takoyaki, Okonomiyaki & Local Flavor',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 452.4',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671622/asiabylocals/tours/osaka-osaka-street-food-tour-takoyaki-okonomiyaki-local-flavor/img0.webp',
            },
          },
          {
            title: 'Kuromon Ichiba Market: Osaka\'s kitchen for 190 years',
            icon: 'shopping-basket',
            content: 'A 600-meter covered market with around 150 stalls near Nippombashi Station (3-5 minute walk), mixing fresh seafood, produce, and ready-to-eat stalls. Come hungry and graze rather than sit — it\'s built for walking and eating.',
            tourCard: {
              slug: 'osaka-food-tour',
              title: 'Osaka Street Food Tour: Takoyaki, Okonomiyaki & Local Flavor',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 452.4',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671622/asiabylocals/tours/osaka-osaka-street-food-tour-takoyaki-okonomiyaki-local-flavor/img0.webp',
            },
          },
          {
            title: 'Kushikatsu in Shinsekai',
            icon: 'utensils',
            content: 'Deep-fried skewers of meat, vegetables, and seafood, dipped once in a shared sauce (double-dipping is a real faux pas at most stalls). Shinsekai\'s Janjan Yokocho alley is the classic place to eat it, under the neon glow of Tsutenkaku Tower.\n\nEat your way through the city\'s two great food districts with our [Dotonbori guide](/japan/osaka/dotonbori-guide) and [Shinsekai guide](/japan/osaka/shinsekai-guide), and fit it all together with the [3-day Osaka itinerary](/japan/osaka/osaka-3-day-itinerary).',
            tourCard: {
              slug: 'osaka-food-tour',
              title: 'Osaka Street Food Tour: Takoyaki, Okonomiyaki & Local Flavor',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 452.4',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671622/asiabylocals/tours/osaka-osaka-street-food-tour-takoyaki-okonomiyaki-local-flavor/img0.webp',
            },
          },
        ],
        faqs: [
          {
            q: 'What\'s the difference between takoyaki and okonomiyaki?',
            a: 'Takoyaki is small ball-shaped snacks with octopus inside; okonomiyaki is a larger savory pancake with cabbage and other ingredients mixed into the batter.',
          },
          {
            q: 'How do I get to Kuromon Ichiba Market?',
            a: 'It\'s a 3-5 minute walk from Nippombashi Station on the Sakaisuji and Sennichimae subway lines.',
          },
          {
            q: 'Can I double-dip kushikatsu sauce?',
            a: 'No — most kushikatsu stalls use a shared sauce pot and expect one dip per skewer; use the provided cabbage to scoop extra sauce instead.',
          },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
                    {
                              "@type": "FAQPage",
                              "mainEntity": [
                                        {
                                                  "@type": "Question",
                                                  "name": "What's the difference between takoyaki and okonomiyaki?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Takoyaki is small ball-shaped snacks with octopus inside; okonomiyaki is a larger savory pancake with cabbage and other ingredients mixed into the batter."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "How do I get to Kuromon Ichiba Market?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "It's a 3-5 minute walk from Nippombashi Station on the Sakaisuji and Sennichimae subway lines."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Can I double-dip kushikatsu sauce?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "No — most kushikatsu stalls use a shared sauce pot and expect one dip per skewer; use the provided cabbage to scoop extra sauce instead."
                                                  }
                                        }
                              ]
                    }
          ]
},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671644/asiabylocals/tours/osaka-full-day-private-osaka-walking-tour/img0.jpg',
      };

        case 'osaka-to-nara-day-trip':
            return {
        title: 'Osaka to Nara Day Trip: Deer Park, Todai-ji & the Great Buddha',
        seoTitle: 'Osaka to Nara Day Trip Guide (2026) - Trains, Deer Park, Todai-ji',
        description: 'How to do Nara from Osaka in a day: train times, what to actually see, and how many deer you should expect to meet.',
        fastFacts: [
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Kintetsu Rapid Express: 30-45 min from Osaka',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Distance: ~28km',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Great Buddha height: 15m (49ft)',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Deer population in Nara Park: 1,200+',
          },
        ],
        sections: [
          {
            title: 'Getting there',
            icon: 'train',
            content: 'The Kintetsu Rapid Express takes 30-45 minutes one-way depending on your departure station in Osaka, and is the fastest non-JR option. With a JR Pass, the JR Yamatoji Rapid takes 45-55 minutes and is fully covered. Nara sits about 28km from Osaka.',
            tourCard: {
              slug: 'osaka-treasures-guided-tour',
              title: 'Secret Spots & Local Treasures Tour',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 9000',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671610/asiabylocals/tours/osaka-secret-spots-local-treasures-tour/img0.webp',
            },
          },
          {
            title: 'Nara Park and the deer',
            icon: 'paw-print',
            content: 'Over 1,200 semi-wild deer roam freely through Nara Park, considered messengers of the gods in local Shinto tradition. Deer crackers (shika senbei) are sold throughout the park for feeding them — bow to a deer and many will bow back before taking a cracker.',
          },
          {
            title: 'Todai-ji Temple and the Great Buddha',
            icon: 'landmark',
            content: 'Todai-ji houses the Daibutsu, a bronze Great Buddha statue standing 15 meters tall — the largest of its kind in the world. It\'s about a 10-minute walk from the station to the park entrance, with more walking to reach Todai-ji itself.',
          },
          {
            title: 'Budgeting your day',
            icon: 'timer',
            content: 'A full day trip to Nara typically runs about 10 hours door to door: roughly 2 hours total on trains and 5-7 hours to actually explore the park, Todai-ji, Kasuga Taisha Shrine, and Kofuku-ji Temple.\n\nNara is one of two classic day trips from Osaka - the other is covered in our [Osaka to Kyoto guide](/japan/osaka/osaka-to-kyoto-day-trip) - and train logistics for both are in the [getting around Osaka guide](/japan/osaka/getting-around-osaka).',
          },
        ],
        faqs: [
          {
            q: 'How long does it take to get from Osaka to Nara?',
            a: 'About 30-45 minutes each way on the Kintetsu Rapid Express, or 45-55 minutes on JR (covered by a JR Pass).',
          },
          {
            q: 'Is Nara doable as a half-day or do I need a full day?',
            a: 'A full day trip (around 10 hours including transit) lets you comfortably see the deer park, Todai-ji, and one or two additional temples; a half-day covers just the deer park and Todai-ji.',
          },
          {
            q: 'Are the deer safe to feed?',
            a: 'Generally yes, though they can nip or headbutt for crackers if you tease them — hold crackers flat and be ready for an enthusiastic deer.',
          },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
                    {
                              "@type": "FAQPage",
                              "mainEntity": [
                                        {
                                                  "@type": "Question",
                                                  "name": "How long does it take to get from Osaka to Nara?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "About 30-45 minutes each way on the Kintetsu Rapid Express, or 45-55 minutes on JR (covered by a JR Pass)."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Is Nara doable as a half-day or do I need a full day?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "A full day trip (around 10 hours including transit) lets you comfortably see the deer park, Todai-ji, and one or two additional temples; a half-day covers just the deer park and Todai-ji."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Are the deer safe to feed?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Generally yes, though they can nip or headbutt for crackers if you tease them — hold crackers flat and be ready for an enthusiastic deer."
                                                  }
                                        }
                              ]
                    }
          ]
},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671644/asiabylocals/tours/osaka-full-day-private-osaka-walking-tour/img0.jpg',
      };

        case 'osaka-to-kyoto-day-trip':
            return {
        title: 'Osaka to Kyoto Day Trip: Trains, Cost & Which to Pick',
        seoTitle: 'Osaka to Kyoto Day Trip (2026) - Train Times & Fares Compared',
        description: 'Osaka and Kyoto are close enough that the Shinkansen usually isn\'t worth it. Here\'s the actual math on your train options.',
        fastFacts: [
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Shinkansen: 13-15 min, ¥2,920 reserved',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'JR Special Rapid: ~29 min, ¥580',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Hankyu Ltd Express: 43 min, ¥410',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Keihan Express: ~50 min, ¥430 (best for Gion/Fushimi Inari)',
          },
        ],
        sections: [
          {
            title: 'Skip the Shinkansen for a day trip',
            icon: 'train-front',
            content: 'The Shinkansen from Shin-Osaka to Kyoto takes just 13-15 minutes but costs ¥2,920 reserved. The JR Special Rapid covers Osaka Station to Kyoto Station in about 29 minutes for ¥580 — a 15-minute time difference rarely justifies a 5x price jump for most travelers.',
          },
          {
            title: 'Alternative routes for specific sights',
            icon: 'route',
            content: 'Hankyu\'s Kyoto Limited Express runs Umeda to Kawaramachi in 43 minutes for ¥410, useful if you\'re staying near Umeda. Keihan Express (¥430, ~50 min) is the better pick if your day is focused on eastern Kyoto — Gion and Fushimi Inari specifically.',
          },
          {
            title: 'What to prioritize on a one-day visit',
            icon: 'map-pin',
            content: 'With round-trip transit eating under an hour of your day either way, most day-trippers focus on 2-3 major sights rather than trying to cover all of Kyoto — Fushimi Inari\'s torii gates, Kinkaku-ji, or the Gion district are the classic picks depending on your route in.',
          },
          {
            title: 'Basing in Osaka vs Kyoto',
            icon: 'hotel',
            content: 'Given trains run 13-50 minutes depending on route, many visitors base themselves in Osaka for cheaper hotels and easier Kansai Airport access, day-tripping into Kyoto rather than the reverse.\n\nOnce you\'re in Kyoto, our dedicated Kyoto guides take over: the [3-day Kyoto itinerary](/japan/kyoto/kyoto-3-day-itinerary), the [Fushimi Inari guide](/japan/kyoto/fushimi-inari-guide), and the [Gion geisha district guide](/japan/kyoto/gion-geisha-district-guide). Prefer to stay closer? [Nara](/japan/osaka/osaka-to-nara-day-trip) is the shorter hop.',
          },
        ],
        faqs: [
          {
            q: 'Is the Shinkansen worth it for Osaka to Kyoto?',
            a: 'Usually not for a day trip — it saves only about 15 minutes over the JR Special Rapid but costs roughly 5 times as much.',
          },
          {
            q: 'What\'s the cheapest way from Osaka to Kyoto?',
            a: 'The Hankyu Kyoto Limited Express at ¥410, though the JR Special Rapid (¥580, 29 min) is faster for similar cost.',
          },
          {
            q: 'Can I use ICOCA for these trains?',
            a: 'Yes, ICOCA works on JR, Hankyu, and Keihan lines for tap-in tap-out travel without buying individual tickets.',
          },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
                    {
                              "@type": "FAQPage",
                              "mainEntity": [
                                        {
                                                  "@type": "Question",
                                                  "name": "Is the Shinkansen worth it for Osaka to Kyoto?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Usually not for a day trip — it saves only about 15 minutes over the JR Special Rapid but costs roughly 5 times as much."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "What's the cheapest way from Osaka to Kyoto?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "The Hankyu Kyoto Limited Express at ¥410, though the JR Special Rapid (¥580, 29 min) is faster for similar cost."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Can I use ICOCA for these trains?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Yes, ICOCA works on JR, Hankyu, and Keihan lines for tap-in tap-out travel without buying individual tickets."
                                                  }
                                        }
                              ]
                    }
          ]
},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671644/asiabylocals/tours/osaka-full-day-private-osaka-walking-tour/img0.jpg',
      };

        case 'shinsekai-guide':
            return {
        title: 'Shinsekai Guide: Osaka\'s Retro Downtown',
        seoTitle: 'Shinsekai Osaka Guide (2026) - Tsutenkaku Tower & Kushikatsu',
        description: 'Shinsekai is Osaka at its most unpolished and fun — a Showa-era retro district built around a 1912 tower, cheap kushikatsu, and pinball parlors.',
        fastFacts: [
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Tsutenkaku Tower height: 103m, built 1912',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Janjan Yokocho: ~50 shops along 130m alley',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Signature dish: kushikatsu (one dip only)',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Mascot: Billiken — rub his feet for luck',
          },
        ],
        sections: [
          {
            title: 'Tsutenkaku Tower',
            icon: 'tower-control',
            content: 'Built in 1912 and modeled half on the Eiffel Tower, half on Coney Island, the 103-meter Tsutenkaku is Shinsekai\'s centerpiece. Its color-changing lights double as an informal weather forecast for the neighborhood, and the observation deck plus rooftop \'Tenbo Paradise\' offer views over southern Osaka.',
          },
          {
            title: 'Billiken, the wish-granting mascot',
            icon: 'smile',
            content: 'Tsutenkaku\'s mascot, Billiken, is a grinning statue believed to grant wishes if you rub the soles of his feet — a quirky, low-key ritual most first-time visitors don\'t expect but enjoy once they learn about it.',
          },
          {
            title: 'Kushikatsu and Janjan Yokocho',
            icon: 'utensils',
            content: 'Shinsekai is the spiritual home of kushikatsu — deep-fried skewers dipped once in shared sauce. Janjan Yokocho, a 130-meter alley lined with roughly 50 shops, is the classic strip for it, alongside doteyaki stalls and old-school go and shogi parlors.',
            tourCard: {
              slug: 'osaka-food-tour',
              title: 'Osaka Street Food Tour: Takoyaki, Okonomiyaki & Local Flavor',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 452.4',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671622/asiabylocals/tours/osaka-osaka-street-food-tour-takoyaki-okonomiyaki-local-flavor/img0.webp',
            },
          },
          {
            title: 'The retro vibe, honestly assessed',
            icon: 'sparkles',
            content: 'Shinsekai deliberately leans into its nostalgic, slightly rough Showa-era look rather than polish — retro game centers and older buildings sit alongside newer additions like the 2022 Tower Slider. It\'s genuinely a different mood from Dotonbori\'s glossier neon, worth the contrast if you\'re doing both in one trip.\n\nShinsekai\'s kushikatsu is only one chapter of the city\'s food story - the rest is in our [Osaka food guide](/japan/osaka/osaka-food-guide) - and the district pairs well with an evening plan from the [Osaka nightlife guide](/japan/osaka/osaka-nightlife-guide).',
            tourCard: {
              slug: 'osaka-walking-tour',
              title: 'Osaka: Main Sights and Hidden Spots Guided Walking Tour',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 69.7',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671498/asiabylocals/tours/osaka-osaka-main-sights-and-hidden-spots-guided-walking-tour/img0.png',
            },
          },
        ],
        faqs: [
          {
            q: 'What is Tsutenkaku Tower?',
            a: 'A 103-meter observation tower built in 1912, the visual centerpiece of the Shinsekai district, with an observation deck and rooftop area.',
          },
          {
            q: 'What should I eat in Shinsekai?',
            a: 'Kushikatsu (deep-fried skewers) is the signature dish, best found along Janjan Yokocho alley.',
          },
          {
            q: 'Is Shinsekai worth visiting or is it too touristy?',
            a: 'It\'s touristy in parts but retains a genuinely different, grittier retro character from Dotonbori — worth a visit for contrast, especially in the early evening.',
          },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
                    {
                              "@type": "FAQPage",
                              "mainEntity": [
                                        {
                                                  "@type": "Question",
                                                  "name": "What is Tsutenkaku Tower?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "A 103-meter observation tower built in 1912, the visual centerpiece of the Shinsekai district, with an observation deck and rooftop area."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "What should I eat in Shinsekai?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Kushikatsu (deep-fried skewers) is the signature dish, best found along Janjan Yokocho alley."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Is Shinsekai worth visiting or is it too touristy?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "It's touristy in parts but retains a genuinely different, grittier retro character from Dotonbori — worth a visit for contrast, especially in the early evening."
                                                  }
                                        }
                              ]
                    }
          ]
},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671644/asiabylocals/tours/osaka-full-day-private-osaka-walking-tour/img0.jpg',
      };

        case 'osaka-nightlife-guide':
            return {
        title: 'Osaka Nightlife Guide: Dotonbori, Namba & Beyond',
        seoTitle: 'Osaka Nightlife Guide (2026) - Bars, Alleys & Best Districts',
        description: 'Where Osaka actually drinks after dark — from tourist-thronged Dotonbori to the cheap standing bars locals prefer in Ura-Namba.',
        fastFacts: [
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Dotonbori canal: ~400m of neon',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Tachinomi drinks: ¥300-500',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Peak nightlife hours: 9pm-1am Fri/Sat',
          },
          {
            icon: 'Info',
            label: 'Fast fact',
            value: 'Hozenji Yokocho: best for a quiet, atmospheric drink',
          },
        ],
        sections: [
          {
            title: 'Dotonbori: the postcard version',
            icon: 'sparkles',
            content: 'The 400-meter neon canal reaches full intensity around 8pm, with peak crowds 9-11pm on Friday and Saturday. It\'s touristy by design — go for the photos and the energy, not for quiet drinks.',
            tourCard: {
              slug: 'osaka-night-evening-tour',
              title: 'Osaka: Private Night Cruise Through the City of Water',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 224.02',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671633/asiabylocals/tours/osaka-osaka-private-night-cruise-through-the-city-of-water/img0.png',
            },
          },
          {
            title: 'Ura-Namba: where locals actually go',
            icon: 'beer',
            content: 'The area between Namba Station and Sennichimae is wall-to-wall standing bars (tachinomi) and izakaya, with a noticeably more local, less tourist-heavy crowd than Dotonbori proper. Peak time runs 10pm-1am.',
          },
          {
            title: 'Standing bar culture (tachinomi)',
            icon: 'wine',
            content: 'Osaka has a strong tachinomi tradition — no-frills standing-room bars where a beer or highball runs ¥300-500. They\'re fast, cheap, and a good way to bar-hop several spots in one night without committing to a sit-down tab anywhere.',
          },
          {
            title: 'Hozenji Yokocho for atmosphere over volume',
            icon: 'lamp',
            content: 'A narrow, lantern-lit alley named after a small moss-covered temple, lined with small old-school restaurants and bars. It\'s the closest Osaka gets to a classic, atmospheric Japanese drinking alley — better for a couple of quiet drinks than a big night out.\n\nStart the evening with street food using our [Dotonbori guide](/japan/osaka/dotonbori-guide), and if you\'re structuring a full visit, the [3-day Osaka itinerary](/japan/osaka/osaka-3-day-itinerary) weaves the night districts into each day.',
            tourCard: {
              slug: 'osaka-walking-tour',
              title: 'Osaka: Main Sights and Hidden Spots Guided Walking Tour',
              description: 'A top-rated Osaka experience, bookable directly through AsiaByLocals.',
              price: 'From USD 69.7',
              duration: 'See tour page for details',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671498/asiabylocals/tours/osaka-osaka-main-sights-and-hidden-spots-guided-walking-tour/img0.png',
            },
          },
        ],
        faqs: [
          {
            q: 'What\'s the difference between Dotonbori and Ura-Namba for nightlife?',
            a: 'Dotonbori is the flashy, tourist-heavy canal strip; Ura-Namba (between Namba Station and Sennichimae) has a more local standing-bar and izakaya scene.',
          },
          {
            q: 'What is a tachinomi bar?',
            a: 'A standing-room-only bar, typically cheap (¥300-500 a drink) and fast-paced, common throughout Osaka.',
          },
          {
            q: 'When does Osaka nightlife peak?',
            a: 'Around 9-11pm on Friday and Saturday in Dotonbori; Ura-Namba runs later, into the 10pm-1am range.',
          },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
                    {
                              "@type": "FAQPage",
                              "mainEntity": [
                                        {
                                                  "@type": "Question",
                                                  "name": "What's the difference between Dotonbori and Ura-Namba for nightlife?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Dotonbori is the flashy, tourist-heavy canal strip; Ura-Namba (between Namba Station and Sennichimae) has a more local standing-bar and izakaya scene."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "What is a tachinomi bar?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "A standing-room-only bar, typically cheap (¥300-500 a drink) and fast-paced, common throughout Osaka."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "When does Osaka nightlife peak?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Around 9-11pm on Friday and Saturday in Dotonbori; Ura-Namba runs later, into the 10pm-1am range."
                                                  }
                                        }
                              ]
                    }
          ]
},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787671644/asiabylocals/tours/osaka-full-day-private-osaka-walking-tour/img0.jpg',
      };

        default:
            return null;
    }
}
