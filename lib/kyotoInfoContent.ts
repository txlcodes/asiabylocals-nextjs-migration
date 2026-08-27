// Kyoto authority pages (2026-08). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getKyotoInfoContent() -> getCityInfoContent().
import type { CityInfoData } from './cityInfoContent';

export function getKyotoInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "best-time-to-visit-kyoto":
            return {
        title: "Best Time to Visit Kyoto: A Season-by-Season Guide to Weather, Cherry Blossoms & Autumn Colors",
        seoTitle: "Best Time to Visit Kyoto | Weather & Season Guide",
        description: "Plan your Kyoto trip around real JMA climate data, historical cherry blossom timing, and peak autumn foliage weeks - plus the exact weeks to avoid.",
        fastFacts: [
          {
            icon: "Thermometer",
            label: "Hottest month",
            value: "August, ~34°C avg high",
          },
          {
            icon: "Snowflake",
            label: "Coldest month",
            value: "January, ~1.5°C avg low",
          },
          {
            icon: "Flower2",
            label: "Cherry blossom peak",
            value: "Late March - early April",
          },
          {
            icon: "Leaf",
            label: "Autumn foliage peak",
            value: "Mid-late November",
          },
        ],
        sections: [
          {
            title: "Why Kyoto's Weather Is More Extreme Than Tokyo's",
            icon: "MapPin",
            content: "Kyoto sits in a basin, ringed by mountains on three sides, and this geography is the single biggest reason its climate feels harsher than Tokyo's despite being further south. The surrounding hills trap heat and humidity in summer and trap cold air in winter, so Kyoto reliably runs hotter in summer and colder in winter than Tokyo, even though the two cities are at similar latitudes. Locals openly joke that Kyoto has the worst weather of any major Japanese city for exactly this reason.\n\nIn practice this means: expect Kyoto's July-August humidity to feel noticeably heavier than Tokyo's, expect winter mornings (especially January) to carry a damp, penetrating cold, and expect very little snow accumulation in the city center itself - but light dustings on temple roofs do happen a few times most winters. If you're comparing a Tokyo-then-Kyoto itinerary, pack for a wider temperature swing than you would for Tokyo alone.",
          },
          {
            title: "Kyoto Weather Month by Month",
            icon: "Cloud",
            content: "Based on Japan Meteorological Agency climate normals for the Kyoto observation station, here is what to expect (average high / average low / approximate monthly rainfall):\n\nWinter (Dec-Feb): ~9-12°C highs, ~1-4°C lows, drier than summer but damp and raw. Least crowded season; illuminated temple gardens run in December.\n\nSpring (Mar-May): Temperatures climb quickly from ~14°C highs in March to ~24°C by May. March and April carry moderate rain; this is cherry blossom season, and the single busiest tourist window of the year.\n\nSummer (Jun-Aug): June is the rainy season (tsuyu), with the heaviest monthly rainfall of the year - often 200mm+. July and August are hot and humid, with highs regularly hitting 33-35°C and overnight lows staying near 24°C, giving little relief.\n\nAutumn (Sep-Nov): September stays warm and can bring typhoon-related rain; October and November cool rapidly and offer the year's most comfortable, driest sightseeing conditions, culminating in peak foliage.",
          },
          {
            title: "Cherry Blossom Season in Kyoto",
            icon: "Flower2",
            content: "Kyoto's someiyoshino cherry trees historically reach first bloom around March 26-29 and full bloom around April 1-5, based on multi-decade JMA averages - typically a few days to about a week later than Tokyo. Actual dates shift year to year with spring temperatures, so treat any single-year forecast as provisional until the Japan Weather Association's rolling forecasts are issued and revised as the season approaches.\n\nPeak viewing (mankai) typically lasts only 4-7 days before petals begin falling, though the following 'sakura snow' period along the Philosopher's Path and Kamo River is its own draw. Key spots: Maruyama Park and Gion-Shirakawa for evening illuminations, the Philosopher's Path for a quieter canal-side walk, and Arashiyama for blossoms framed against the bamboo grove and river.\n\nBook accommodation 3-6 months ahead for the last week of March through the first week of April - hotel rates in Kyoto during peak bloom are among the highest of the year.",
          },
          {
            title: "Autumn Koyo (Fall Foliage) Season",
            icon: "Leaf",
            content: "Kyoto's fall foliage (koyo) is widely considered on par with, or better than, its cherry blossoms for photography, thanks to the way maple reds pair with temple architecture. Peak color typically runs from mid-to-late November, with many of the most famous gardens - Tofuku-ji, Eikando, Kiyomizu-dera, and the Arashiyama hillsides - often holding vivid color into early December.\n\nAs with cherry blossoms, the exact peak shifts with autumn temperatures, so treat 'mid-to-late November' as a reliable planning anchor rather than a fixed date. Late-October color starts in the higher elevations around Kyoto (Kurama, Takao) before working down into the city center through November.\n\nNight illuminations at temples like Kodai-ji and Eikando during peak koyo draw crowds comparable to peak sakura season - arrive at temple gates before opening if you want photos without crowds in frame.",
          },
          {
            title: "Weeks to Avoid (or Plan Around)",
            icon: "Calendar",
            content: "Three windows turn Kyoto from busy into genuinely difficult to navigate:\n\nGolden Week (April 29 - May 5): A cluster of four national holidays means most of Japan travels domestically at once. Expect standing-room-only buses and inflated hotel rates.\n\nObon (mid-August, typically around August 13-16): A major holiday for family visits. Combined with peak summer heat, this week brings crowded trains and the famous Gozan no Okuribi bonfire ceremony (August 16), which draws huge crowds to viewing spots.\n\nNew Year (roughly December 29 - January 3): Many shops and restaurants close for several days; major shrines like Fushimi Inari and Yasaka become extremely crowded with hatsumode (first shrine visit) crowds, especially January 1-3.\n\nIf your dates are flexible, shoulder weeks just before or after these windows often deliver 80% of the appeal with a fraction of the crowds.\n\nOnce your dates are set, our [3-day Kyoto itinerary](/japan/kyoto/kyoto-3-day-itinerary) maps the sights day by day, and the [getting around Kyoto guide](/japan/kyoto/getting-around-kyoto) covers the buses and IC cards you'll rely on once you land.",
            tourCard: {
              slug: "kyoto-best-guided-tour",
              title: "Best of Kyoto Day Tour",
              description: "A full-day small-group tour hitting Kyoto's headline sites in one outing.",
              price: "From USD 202.80",
              duration: "9.5 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1787497351/asiabylocals/tours/kyoto-best-of-kyoto-day-tour/img0.jpg",
            },
          },
        ],
        faqs: [
          {
            q: "What is the single best month to visit Kyoto?",
            a: "November is often cited as the best all-round month: comfortable temperatures, low rainfall, and peak autumn foliage in the second half of the month. Early-to-mid April (post-peak-bloom, pre-Golden-Week) is a close second for spring.",
          },
          {
            q: "Is Kyoto colder than Tokyo in winter?",
            a: "Yes. Kyoto's basin geography traps cold air, and its winter lows are typically a few degrees colder and feel damper than Tokyo's, despite Kyoto being at a similar or slightly lower latitude.",
          },
          {
            q: "How hot does Kyoto get in summer?",
            a: "Kyoto is regularly among the hottest cities in mainland Japan during July and August, with average highs commonly reaching the low-to-mid 30s°C and high humidity that makes it feel hotter than the number suggests.",
          },
          {
            q: "When exactly do the cherry blossoms bloom in Kyoto?",
            a: "Historically, first bloom lands around late March and full bloom about a week later, typically a few days to a week behind Tokyo. Exact dates vary by year, so check the current year's forecast closer to your travel dates.",
          },
          {
            q: "Is rainy season (tsuyu) in June a reason to avoid Kyoto?",
            a: "It's Kyoto's wettest month, but not necessarily a dealbreaker - rain tends to come in bursts, temples are far less crowded, and moss gardens are famously at their best right after rain. Pack a compact umbrella and it's a workable window.",
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
                                                  "name": "What is the single best month to visit Kyoto?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "November is often cited as the best all-round month: comfortable temperatures, low rainfall, and peak autumn foliage in the second half of the month. Early-to-mid April (post-peak-bloom, pre-Golden-Week) is a close second for spring."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Is Kyoto colder than Tokyo in winter?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Yes. Kyoto's basin geography traps cold air, and its winter lows are typically a few degrees colder and feel damper than Tokyo's, despite Kyoto being at a similar or slightly lower latitude."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "How hot does Kyoto get in summer?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Kyoto is regularly among the hottest cities in mainland Japan during July and August, with average highs commonly reaching the low-to-mid 30s°C and high humidity that makes it feel hotter than the number suggests."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "When exactly do the cherry blossoms bloom in Kyoto?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Historically, first bloom lands around late March and full bloom about a week later, typically a few days to a week behind Tokyo. Exact dates vary by year, so check the current year's forecast closer to your travel dates."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Is rainy season (tsuyu) in June a reason to avoid Kyoto?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "It's Kyoto's wettest month, but not necessarily a dealbreaker - rain tends to come in bursts, temples are far less crowded, and moss gardens are famously at their best right after rain. Pack a compact umbrella and it's a workable window."
                                                  }
                                        }
                              ]
                    }
          ]
},
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1787497351/asiabylocals/tours/kyoto-best-of-kyoto-day-tour/img0.jpg",
      };

        case "getting-around-kyoto":
            return {
        title: "Getting Around Kyoto: Buses, Subway, IC Cards & Taxis Explained",
        seoTitle: "Getting Around Kyoto: Bus, Subway & IC Card Guide",
        description: "A practical guide to Kyoto's city bus network, limited subway lines, ICOCA/Suica IC cards, day passes, taxis, and the best way to reach Arashiyama, Fushimi Inari and Higashiyama.",
        fastFacts: [
          {
            icon: "Bus",
            label: "Primary transit mode",
            value: "Kyoto City Bus network",
          },
          {
            icon: "Train",
            label: "Subway lines",
            value: "2 lines: Karasuma & Tozai",
          },
          {
            icon: "CreditCard",
            label: "IC cards accepted",
            value: "ICOCA, Suica & other nationwide IC cards",
          },
          {
            icon: "MapPin",
            label: "Fushimi Inari access",
            value: "JR Nara Line, 2 stops / ~5 min from Kyoto Station",
          },
        ],
        sections: [
          {
            title: "Bus vs Subway: Why Buses Do the Heavy Lifting in Kyoto",
            icon: "Bus",
            content: "Unlike Tokyo or Osaka, Kyoto never built out an extensive subway network - historic preservation concerns and the shallow, temple-dense street grid limited underground construction. The result is just two subway lines: the north-south Karasuma Line (running from Kokusaikaikan through Kyoto Station down to Takeda) and the east-west Tozai Line (crossing central Kyoto near Higashiyama).\n\nThat leaves huge swaths of the city's most-visited sightseeing districts - Higashiyama's temple lanes, Kinkaku-ji, Ginkaku-ji, much of Arashiyama - without direct subway access. The extensive Kyoto City Bus network, along with private operators like Kyoto Bus, fills this gap and is genuinely the backbone of tourist transit in the city. Most first-time visitors will use buses far more than the subway, particularly the 100 and 206 series routes that loop past major Higashiyama sights.\n\nThe tradeoff is that buses run in mixed traffic and get seriously congested at peak season, especially around Kyoto Station, Kiyomizu-dera, and Gion. Budget extra time, and consider walking or the subway for city-center hops where a direct rail option exists.",
          },
          {
            title: "Day Passes: What's Changed",
            icon: "Ticket",
            content: "Kyoto has historically offered day passes bundling unlimited bus and/or subway rides, and these remain a good value if you're taking 3+ rides in a day. However, Kyoto City discontinued its long-standing bus-only one-day pass in spring 2023, citing overcrowding on tourist bus routes and a push to shift visitors toward the subway and trains instead. A bus/subway combined day pass has continued to be sold as the main alternative.\n\nDo not treat any specific yen figure as current - pass pricing and structure have changed multiple times in recent years. Verify current pass names, coverage, and pricing directly on the Kyoto City Bus/Subway official site or at a tourist information counter (Kyoto Station has a well-staffed one) before buying. As a rule of thumb: if your day includes only 2 short rides, tapping an IC card per-ride is often cheaper than a day pass; heavier multi-stop sightseeing days favor the pass.",
          },
          {
            title: "IC Cards: ICOCA, Suica, and Tap-to-Ride",
            icon: "CreditCard",
            content: "ICOCA is JR West's regional IC card (the Kansai/Kyoto-Osaka equivalent of Tokyo's Suica), but thanks to nationwide IC card interoperability, Suica, Pasmo, and other major regional IC cards all work interchangeably on Kyoto's buses, subway, and JR/private rail lines - you don't need to buy ICOCA specifically if you already have Suica from a Tokyo leg of your trip.\n\nFor most visitors, an IC card is simpler than paper tickets: tap on, tap off, and the fare is deducted automatically. Cards can be loaded and topped up at station machines and many convenience stores. Mobile wallet versions (Apple Pay Suica, etc.) work identically and let you top up without finding a machine.\n\nOne Kyoto-specific note: because bus fares within the city are largely flat-rate, tapping is simple, but if a route crosses into a distance-based fare zone (some longer suburban routes), tap on and off is required - watch what other passengers do, or ask the driver.",
          },
          {
            title: "Taxis: When They're Worth It",
            icon: "Car",
            content: "Taxis are widely available in central Kyoto - there are almost always cabs queued at Kyoto Station, and they're easy to hail or find at taxi stands near Gion, Kawaramachi, and major hotels. Fares are metered and start with a base charge. Ride-hailing apps such as GO work well in Kyoto for summoning a cab without waiting at a stand, particularly late at night.\n\nTaxis make the most sense for: early morning or late evening travel when bus frequency drops, trips with heavy luggage (especially to/from Kyoto Station), groups of 3-4 where the per-person cost rivals transit fares, and reaching sights with poor bus connections. For straightforward point-to-point sightseeing during the day, transit or walking is usually faster and cheaper given Kyoto's traffic congestion in tourist season.",
          },
          {
            title: "Reaching Arashiyama, Fushimi Inari & Higashiyama",
            icon: "MapPin",
            content: "Arashiyama: The fastest and most reliable option is the JR Sagano (San-in) Line from Kyoto Station to Saga-Arashiyama Station, around 15-20 minutes. Alternatives include the scenic Randen (Keifuku) tram and the Hankyu Arashiyama Line from Katsura. Buses reach Arashiyama too but are slower and more exposed to traffic.\n\nFushimi Inari Taisha: This is Kyoto's easiest major sight to reach - JR Nara Line to Inari Station is just 2 stops (~5 minutes) from Kyoto Station, putting you right at the shrine's entrance. The Keihan Main Line's Fushimi Inari Station is a similarly short walk away. No bus or taxi needed here - rail is unambiguously the best option.\n\nHigashiyama (Kiyomizu-dera, Gion, Yasaka Shrine, Kodai-ji): This is bus-and-foot territory. The Tozai subway line gets you close (Higashiyama Station) but the classic sightseeing route through the preserved lanes is really a walking circuit best started via bus routes 100 or 206, or by walking up from the Keihan Kiyomizu-Gojo or Gion-Shijo stations.\n\nWith transport sorted, see when to actually come in our [best time to visit Kyoto guide](/japan/kyoto/best-time-to-visit-kyoto), or jump straight to planning your days with the [3-day Kyoto itinerary](/japan/kyoto/kyoto-3-day-itinerary).",
            tourCard: {
              slug: "kyoto-private-tour",
              title: "Kyoto Private Day Tour",
              description: "Skip the transit puzzle entirely with a private English-speaking driver for the day.",
              price: "From JPY 65,000+",
              duration: "6-10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1787497402/asiabylocals/tours/kyoto-kyoto-private-day-tour/img0.jpg",
            },
          },
        ],
        faqs: [
          {
            q: "Should I take the subway or bus in Kyoto?",
            a: "Use the subway (Karasuma or Tozai lines) when your route happens to align with one of the two lines - it's fast and rarely crowded. For most sightseeing, especially Higashiyama, Kinkaku-ji, and Ginkaku-ji, the bus network is unavoidable since the subway doesn't reach them directly.",
          },
          {
            q: "Is the Kyoto bus day pass still available?",
            a: "Kyoto discontinued its old bus-only one-day pass in 2023 due to overcrowding on tourist routes; a bus/subway combined pass has been the main replacement. Pass names and pricing change periodically, so confirm current options at Kyoto Station's tourist information counter before your trip.",
          },
          {
            q: "Can I use my Tokyo Suica card in Kyoto?",
            a: "Yes. Suica, ICOCA, Pasmo, and the other major Japanese IC cards are interoperable nationwide, including on Kyoto's buses, subway, and rail lines. You don't need a separate Kyoto-specific card.",
          },
          {
            q: "What's the fastest way to Fushimi Inari from Kyoto Station?",
            a: "The JR Nara Line to Inari Station, which is only 2 stops and about 5 minutes from Kyoto Station, dropping you right at the shrine entrance. It's faster and cheaper than a taxi for this specific trip.",
          },
          {
            q: "Do I need a private car or tour to see Kyoto, or is public transit enough?",
            a: "Public transit (bus, subway, and JR/private rail) comfortably covers Kyoto's major sights on your own. Private taxi or van tours add convenience for time-limited visitors or for consolidating a cluster of stops in one area, but they're a comfort upgrade rather than a necessity.",
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
                                                  "name": "Should I take the subway or bus in Kyoto?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Use the subway (Karasuma or Tozai lines) when your route happens to align with one of the two lines - it's fast and rarely crowded. For most sightseeing, especially Higashiyama, Kinkaku-ji, and Ginkaku-ji, the bus network is unavoidable since the subway doesn't reach them directly."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Is the Kyoto bus day pass still available?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Kyoto discontinued its old bus-only one-day pass in 2023 due to overcrowding on tourist routes; a bus/subway combined pass has been the main replacement. Pass names and pricing change periodically, so confirm current options at Kyoto Station's tourist information counter before your trip."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Can I use my Tokyo Suica card in Kyoto?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Yes. Suica, ICOCA, Pasmo, and the other major Japanese IC cards are interoperable nationwide, including on Kyoto's buses, subway, and rail lines. You don't need a separate Kyoto-specific card."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "What's the fastest way to Fushimi Inari from Kyoto Station?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "The JR Nara Line to Inari Station, which is only 2 stops and about 5 minutes from Kyoto Station, dropping you right at the shrine entrance. It's faster and cheaper than a taxi for this specific trip."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Do I need a private car or tour to see Kyoto, or is public transit enough?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Public transit (bus, subway, and JR/private rail) comfortably covers Kyoto's major sights on your own. Private taxi or van tours add convenience for time-limited visitors or for consolidating a cluster of stops in one area, but they're a comfort upgrade rather than a necessity."
                                                  }
                                        }
                              ]
                    }
          ]
},
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1787497402/asiabylocals/tours/kyoto-kyoto-private-day-tour/img0.jpg",
      };

        case "kyoto-3-day-itinerary":
            return {
        title: "The Perfect Kyoto 3-Day Itinerary: A Local's Route Through Higashiyama, Arashiyama, and Fushimi Inari",
        seoTitle: "Kyoto 3-Day Itinerary: Best Route & Local Tips",
        description: "A realistic 3-day Kyoto itinerary covering Higashiyama, Arashiyama, and Fushimi Inari with real timing, transit notes, and lesser-known local spots.",
        sections: [
          {
            title: "Day 1: Higashiyama, Gion & Kiyomizu-dera",
            icon: "MapPin",
            content: "Start at Kiyomizu-dera by 8am when the temple opens - its wooden veranda jutting over the hillside is genuinely crowd-free for the first hour, and the walk up Matsubara-dori and Sannenzaka/Ninenzaka (the stone-stepped lanes below the temple) is far more atmospheric before the tour buses arrive around 10am. Budget 90 minutes for the temple grounds plus the approach streets.\n\nFrom Kiyomizu-dera, walk north through Higashiyama - a 20-30 minute stroll through Ninenzaka into Yasaka Shrine and Gion, all walkable. Cut through Kodai-ji temple's bamboo grove and rock garden (a quieter alternative to Arashiyama's) before rejoining the main path.\n\nFor lunch, look for a small teishoku (set-meal) counter one block off Ninenzaka - Higashiyama is full of 8-10 seat family-run spots serving obanzai set lunches for ¥1,200-1,800.\n\nEnd the day in Gion around 5-6pm, walking Hanami-koji street and the Shirakawa canal area - this is when teahouses light up and you have the best respectful chance of spotting a geiko or maiko heading to an appointment. Do not chase or photograph them up close; it's now legally restricted on private lanes.",
          },
          {
            title: "Day 2: Arashiyama, Kinkaku-ji & Ryoan-ji",
            icon: "Camera",
            content: "Arashiyama is on the opposite side of the city - take the JR Sagano/San-in Line from Kyoto Station to Saga-Arashiyama Station (about 15-20 minutes). Arrive at the Bamboo Grove by 8am; it's free and a short walk-through, but becomes a shoulder-to-shoulder photo queue by mid-morning.\n\nNext door is Tenryu-ji, a UNESCO-listed Zen temple with one of Kyoto's best strolling gardens - pay the small extra fee to enter the garden itself. Most visitors skip Iwatayama Monkey Park because of the uphill hike, which is exactly why it's worth doing - free-roaming macaques and a panoramic view over the Katsura River.\n\nFor lunch, Arashiyama's riverside area has several yudofu (hot tofu) specialty restaurants - the traditional local dish, tied to the area's temple history.\n\nIn the afternoon, head across town to Kinkaku-ji (Golden Pavilion) - go later (2:30-4pm) when the morning rush has thinned. Finish at Ryoan-ji, home to Japan's most famous rock garden - sit on the veranda for at least 10 minutes rather than just photographing it.",
          },
          {
            title: "Day 3: Fushimi Inari, Nishiki Market & Day Trip Option",
            icon: "Sunrise",
            content: "This is the most important early start of the trip. Take the JR Nara Line to Inari Station (5 minutes) and arrive by 6:30-7am. Fushimi Inari is open 24/7 and free, and the difference between arriving at 7am versus 10am is having the torii tunnels to yourself versus shuffling through crowds. Most visitors only walk the first 20 minutes to the Okusha Okumiya viewpoint and turn back, missing the quieter upper mountain paths entirely.\n\nBy late morning, head to Nishiki Market (\"Kyoto's Kitchen\"), a covered arcade of food stalls - good for a grazing lunch of skewered wagyu, tamagoyaki, fresh yuba, and pickles. Go before noon; it gets packed by early afternoon.\n\nWith the rest of the day, choose one: Nara (JR Nara Line, ~45 minutes) for Todai-ji's Great Buddha Hall and free-roaming deer, or the quieter Uji (~20 minutes), home to Byodo-in Temple and some of Japan's best matcha. Uji is the better pick if you want a genuinely local, uncrowded afternoon.",
          },
          {
            title: "Getting Around: Transit Notes",
            icon: "Clock",
            content: "Kyoto's historic core (Higashiyama, Gion) is walkable and best explored on foot. Arashiyama and Fushimi Inari require the JR Sagano and JR Nara lines respectively, both covered by a standard IC card (ICOCA/Suica) or a Kyoto City Bus & Subway one-day pass if you're combining bus travel. Kinkaku-ji is not on a rail line, so budget for a bus (City Bus 101/205) or taxi. Avoid renting a car - parking is scarce and traffic in the historic districts is often slower than walking.",
          },
          {
            title: "Practical Tips Most Guides Skip",
            icon: "Star",
            content: "Coin lockers at Kyoto Station (multiple sizes, ¥300-700) let you drop luggage before heading out for the day. Convenience store breakfasts (7-Eleven, Lawson, FamilyMart) are genuinely good and let you start walking by 6:30am. Many temples close ticket counters 10-30 minutes before stated closing time - don't cut it close. Finally, cash still matters: small restaurants, temple donation boxes, and market stalls are often cash-only, so carry ¥5,000-10,000 in small bills.\n\nFor deeper dives on the headline stops in this itinerary, see our [Fushimi Inari guide](/japan/kyoto/fushimi-inari-guide), the [Arashiyama bamboo forest guide](/japan/kyoto/arashiyama-bamboo-forest-guide), and the [Gion geisha district guide](/japan/kyoto/gion-geisha-district-guide).",
            tourCard: {
              slug: "kyoto-classic-guided-tour",
              title: "KYOTO Classic Tour",
              description: "The efficient, first-timer-friendly route covering Kyoto's three essential sights in one day.",
              price: "From JPY 36,300",
              duration: "7 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1787497411/asiabylocals/tours/kyoto-kyoto-classic-tour/img0.jpg",
            },
          },
        ],
        faqs: [
          {
            q: "Is 3 days enough to see Kyoto?",
            a: "Three days covers Kyoto's essential sights well if you start early each day and accept you won't see everything - the city has over 1,600 temples. This itinerary prioritizes the highest-value areas (Higashiyama, Arashiyama, Fushimi Inari) and leaves Day 3's afternoon flexible for a day trip to Nara or Uji.",
          },
          {
            q: "What is the best order to do a Kyoto itinerary in?",
            a: "Group sights by geography, not by fame. Higashiyama's temples cluster together and are walkable; Arashiyama and Kinkaku-ji sit on the west/northwest side; Fushimi Inari is south near Kyoto Station. Doing them out of order wastes hours in transit.",
          },
          {
            q: "Do I need reservations for Kyoto temples?",
            a: "Most major temples (Kiyomizu-dera, Kinkaku-ji, Ryoan-ji, Tenryu-ji, Fushimi Inari) don't require advance reservations and are pay-on-entry.",
          },
          {
            q: "What's the best way to avoid crowds in Kyoto?",
            a: "Arrive at major sites within 30 minutes of opening (or by 7am for Fushimi Inari, since it's always open). Tour buses and day-trippers typically arrive between 10am and 2pm.",
          },
          {
            q: "Should I do Nara or Uji as a day trip from Kyoto?",
            a: "Nara is the classic choice for its Great Buddha and free-roaming deer. Uji is quieter, less touristy, and known for matcha and the Byodo-in Temple - a better fit for a calmer afternoon.",
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
                                                  "name": "Is 3 days enough to see Kyoto?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Three days covers Kyoto's essential sights well if you start early each day and accept you won't see everything - the city has over 1,600 temples. This itinerary prioritizes the highest-value areas (Higashiyama, Arashiyama, Fushimi Inari) and leaves Day 3's afternoon flexible for a day trip to Nara or Uji."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "What is the best order to do a Kyoto itinerary in?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Group sights by geography, not by fame. Higashiyama's temples cluster together and are walkable; Arashiyama and Kinkaku-ji sit on the west/northwest side; Fushimi Inari is south near Kyoto Station. Doing them out of order wastes hours in transit."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Do I need reservations for Kyoto temples?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Most major temples (Kiyomizu-dera, Kinkaku-ji, Ryoan-ji, Tenryu-ji, Fushimi Inari) don't require advance reservations and are pay-on-entry."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "What's the best way to avoid crowds in Kyoto?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Arrive at major sites within 30 minutes of opening (or by 7am for Fushimi Inari, since it's always open). Tour buses and day-trippers typically arrive between 10am and 2pm."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Should I do Nara or Uji as a day trip from Kyoto?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Nara is the classic choice for its Great Buddha and free-roaming deer. Uji is quieter, less touristy, and known for matcha and the Byodo-in Temple - a better fit for a calmer afternoon."
                                                  }
                                        }
                              ]
                    }
          ]
},
        fastFacts: [
          {
            icon: "Clock",
            label: "Ideal Trip Length",
            value: "3 full days",
          },
          {
            icon: "MapPin",
            label: "Core Districts",
            value: "Higashiyama, Arashiyama, Fushimi",
          },
          {
            icon: "Sunrise",
            label: "Best Start Time",
            value: "7-8am daily",
          },
          {
            icon: "Train",
            label: "Getting Around",
            value: "Walk + JR/subway, no car needed",
          },
        ],
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1787497411/asiabylocals/tours/kyoto-kyoto-classic-tour/img0.jpg",
      };

        case "fushimi-inari-guide":
            return {
        title: "Fushimi Inari Taisha: The Complete Guide to Kyoto's Mountain of Torii Gates",
        seoTitle: "Fushimi Inari Guide: Hike, History & Best Times",
        description: "A complete guide to Fushimi Inari Taisha - the Mt. Inari hike, torii gate history, best times to avoid crowds, and nearby sake-district sights.",
        sections: [
          {
            title: "History: The Shrine of Inari, God of Rice and Business",
            icon: "Star",
            content: "Fushimi Inari Taisha was founded in 711 AD, well over 1,300 years old, and sits at the base of Mt. Inari in southern Kyoto. It's the head shrine of some 30,000 Inari shrines across Japan, dedicated to Inari, the Shinto deity of rice, agriculture, and business. Each torii gate is donated by an individual or company as an offering for success in business, a tradition that continues today - donors' names and dates are inscribed in black ink on the back of each gate.\n\nThe fox (kitsune) statues throughout the grounds are considered Inari's messengers, not deities themselves, which is why they're depicted holding a key or a jewel rather than being worshipped directly. The main shrine buildings near the entrance date largely from 1499, rebuilt after a 15th-century conflict.",
          },
          {
            title: "The Full Hike: What Most Visitors Miss",
            icon: "Mountain",
            content: "The famous torii tunnels begin immediately behind the main shrine buildings, and this is where most visitors turn around - usually within the first 20-30 minutes, having reached the Okusha Okumiya inner shrine and left. That's a mistake, because it means most people never see the mountain the shrine is built on.\n\nThe complete hike to the summit of Mt. Inari (233 meters) and back is roughly 4 kilometers round trip, taking approximately 2-3 hours at a comfortable pace. Past the Okusha Okumiya, the crowds thin dramatically within another 10-15 minutes of climbing, the gates become older and more weathered, and the path opens into forest with occasional views over Kyoto. Small sub-shrines and teahouses are scattered the entire way up.\n\nThe path is stone steps and paved inclines, moderately strenuous but manageable in normal walking shoes; comfortable closed-toe shoes are recommended, especially after rain when steps get slick.",
          },
          {
            title: "The Yotsutsuji Intersection: The Best Viewpoint",
            icon: "Camera",
            content: "About 30-45 minutes into the climb, roughly halfway to the summit, you reach the Yotsutsuji intersection - a four-way junction with the single best panoramic view on the mountain, overlooking Kyoto city and, on clear days, out toward Osaka.\n\nIf you only have time for a partial hike, Yotsutsuji is the realistic turnaround point that rewards the extra effort - far enough to have shed nearly all the crowds and gives you the payoff view, without the full 2-3 hour round trip to the summit. The summit itself is anticlimactic - a small shrine with no view, enclosed by forest. The journey and the Yotsutsuji view are the real destination.",
          },
          {
            title: "Best Time to Visit: Early Morning or Evening",
            icon: "Sunrise",
            content: "Fushimi Inari is open 24 hours a day, 365 days a year, and admission is free - no gates, tickets, or opening hours to work around. Arrive between 6-7am and the first several hundred meters of torii tunnels, normally packed by mid-morning, will be nearly empty.\n\nThe shrine is also excellent in the evening, particularly around sunset - the lower gates are lit and the atmosphere turns quieter, though the upper mountain paths get dark quickly and aren't well-lit, so evening visits are best kept to the lower shrine complex. Midday (10am-3pm), especially on weekends and during cherry blossom or autumn foliage season, is the busiest window.",
          },
          {
            title: "Nearby Food: The Birthplace of Inari-zushi",
            icon: "Utensils",
            content: "The area around Fushimi Inari is closely tied to inari-zushi - sushi rice wrapped in sweet, seasoned fried tofu pouches - which takes its name directly from this shrine, since foxes are traditionally said to favor fried tofu. Several small shops along the approach to the shrine and near Inari Station sell inari-zushi and kitsune udon, one of the more thematically fitting meals you can eat anywhere in Kyoto.",
          },
          {
            title: "Extend Your Visit: The Fushimi Sake District",
            icon: "MapPin",
            content: "Fushimi is one of Japan's three great sake-brewing regions, thanks to its exceptionally soft, mineral-rich groundwater. About a 20-25 minute walk south of the shrine, the historic Fushimi sake district is worth combining into the same day.\n\nThe centerpiece is the Gekkeikan Okura Sake Museum, housed in a preserved Edo/Meiji-era brewery building, with a tasting of several Gekkeikan varieties. Nearby, the Horikawa/Fushimi canal, lined with white-walled sake warehouses, is a genuinely photogenic and quiet walk, with occasional sightseeing boats still running along the historic waterway.\n\nPair the shrine with an evening in the old town using our [Gion geisha district guide](/japan/kyoto/gion-geisha-district-guide), and slot both into the [3-day Kyoto itinerary](/japan/kyoto/kyoto-3-day-itinerary).",
            tourCard: {
              slug: "kyoto-walking-evening-tour",
              title: "Kyoto Fushimi-Inari Night Walking Tour",
              description: "See the torii gates lantern-lit after the daytime crowds are long gone.",
              price: "From USD 39.23",
              duration: "2 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1787497318/asiabylocals/tours/kyoto-kyoto-fushimi-inari-night-walking-tour/img0.jpg",
            },
          },
        ],
        faqs: [
          {
            q: "How long does it take to hike Fushimi Inari?",
            a: "The full round trip to the summit of Mt. Inari and back is roughly 4 kilometers and takes about 2-3 hours at a relaxed pace. If you only want the highlight views, the Yotsutsuji intersection halfway up is about 30-45 minutes each way.",
          },
          {
            q: "Is Fushimi Inari free to enter?",
            a: "Yes. Fushimi Inari Taisha has no admission fee and no ticket gates, and it's open 24 hours a day, every day of the year.",
          },
          {
            q: "How many torii gates are at Fushimi Inari?",
            a: "The exact number is often debated and changes over time as gates are added, replaced, or removed. What's certain is that there are thousands of gates forming continuous tunnels up the mountain, each donated as an offering to Inari.",
          },
          {
            q: "Do I need to hike all the way to the top?",
            a: "No. Most visitors only walk the first 20-30 minutes and never see the crowds thin out. The Yotsutsuji intersection about halfway up is a realistic, rewarding turnaround point. The actual summit has no view since it's enclosed by forest.",
          },
          {
            q: "What should I wear or bring for the Fushimi Inari hike?",
            a: "Comfortable closed-toe walking shoes, since the path is stone steps and paved inclines that can get slippery after rain. Teahouses along the route sell drinks and snacks. Layers help, since the forested upper paths are noticeably cooler.",
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
                                                  "name": "How long does it take to hike Fushimi Inari?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "The full round trip to the summit of Mt. Inari and back is roughly 4 kilometers and takes about 2-3 hours at a relaxed pace. If you only want the highlight views, the Yotsutsuji intersection halfway up is about 30-45 minutes each way."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Is Fushimi Inari free to enter?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Yes. Fushimi Inari Taisha has no admission fee and no ticket gates, and it's open 24 hours a day, every day of the year."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "How many torii gates are at Fushimi Inari?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "The exact number is often debated and changes over time as gates are added, replaced, or removed. What's certain is that there are thousands of gates forming continuous tunnels up the mountain, each donated as an offering to Inari."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Do I need to hike all the way to the top?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "No. Most visitors only walk the first 20-30 minutes and never see the crowds thin out. The Yotsutsuji intersection about halfway up is a realistic, rewarding turnaround point. The actual summit has no view since it's enclosed by forest."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "What should I wear or bring for the Fushimi Inari hike?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Comfortable closed-toe walking shoes, since the path is stone steps and paved inclines that can get slippery after rain. Teahouses along the route sell drinks and snacks. Layers help, since the forested upper paths are noticeably cooler."
                                                  }
                                        }
                              ]
                    }
          ]
},
        fastFacts: [
          {
            icon: "Clock",
            label: "Full Hike Round Trip",
            value: "~2-3 hours, 4km",
          },
          {
            icon: "Sunrise",
            label: "Best Visiting Hours",
            value: "Open 24/7, free entry",
          },
          {
            icon: "Mountain",
            label: "Summit Elevation",
            value: "233 meters",
          },
          {
            icon: "MapPin",
            label: "Key Viewpoint",
            value: "Yotsutsuji intersection",
          },
        ],
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1787497318/asiabylocals/tours/kyoto-kyoto-fushimi-inari-night-walking-tour/img0.jpg",
      };

        case "arashiyama-bamboo-forest-guide":
            return {
        title: "Arashiyama Bamboo Forest Guide: Sagano Bamboo Grove, Tenryu-ji & Beyond",
        seoTitle: "Arashiyama Bamboo Forest Guide (Sagano Bamboo Grove)",
        description: "Complete Arashiyama guide: when to visit the free Sagano Bamboo Grove, Tenryu-ji Temple, Iwatayama Monkey Park, the Romantic Train, and how to pair it with Kinkaku-ji.",
        fastFacts: [
          {
            icon: "Clock",
            label: "Bamboo Grove Hours",
            value: "24/7, Free",
          },
          {
            icon: "Star",
            label: "Best Time",
            value: "Before 8:00 AM",
          },
          {
            icon: "MapPin",
            label: "District",
            value: "Western Kyoto, Sagano",
          },
          {
            icon: "Camera",
            label: "Must-See",
            value: "Togetsukyo Bridge",
          },
        ],
        sections: [
          {
            title: "Sagano Bamboo Grove: Why It's Free and Open 24/7",
            icon: "Clock",
            content: "The Sagano Bamboo Grove - locally called Chikurin no Michi (\"the path of bamboo\") - isn't a ticketed attraction or a park with gates. It's a public path that cuts through a working bamboo forest, which is why it costs nothing and never closes. There's no entrance, no ticket booth, and no official closing time. The grove itself is a roughly 500-meter stretch running between the Tenryu-ji Temple's north gate and the Okochi Sanso Villa entrance, with stalks rising 20+ meters overhead that filter light into a green-gold haze. Because it's unmanaged tourist infrastructure, it also means there's no crowd control. By mid-morning on any day between March and November, the path becomes a slow-moving single-file shuffle of tour groups, rickshaws, and photographers. The trade-off for the \"free and open\" nature is that you're managing your own experience: arrive early, or accept the crowds. There are no restrooms directly on the path itself - the nearest are at Tenryu-ji Temple or near Arashiyama Station.",
          },
          {
            title: "Best Time to Visit: Beat the Crowds Before 8 AM",
            icon: "Star",
            content: "If you take away one thing from this guide: be on the bamboo path by 7:30-8:00 AM. Tour buses and rickshaw operators start bringing groups through around 9-9:30 AM, and by 10 AM the main stretch near the Tenryu-ji north gate can be genuinely difficult to photograph without dozens of people in frame. Arriving at dawn gets you a nearly empty path, softer light filtering through the stalks, and a much quieter walk. Early morning also means Tenryu-ji Temple opens right around 8:30 AM in most seasons, so you can walk the grove, then be first in line at the temple gate. If early mornings aren't realistic, the next-best window is late afternoon, roughly 4:30-5:30 PM, when day-trip crowds start heading back toward Kyoto Station. Avoid weekends and Japanese national holidays if you can - Golden Week and autumn foliage season (mid-to-late November) turn the path into standing-room-only. Winter is the quietest season overall, though the bamboo canopy is equally striking year-round since it's evergreen.",
          },
          {
            title: "Tenryu-ji Temple: UNESCO Garden Just Steps Away",
            icon: "MapPin",
            content: "Tenryu-ji sits directly at the entrance to the bamboo grove and is one of Kyoto's five great Zen temples (the Kyoto Gozan), plus a UNESCO World Heritage Site. The main draw is the Sogenchi Garden, a strolling pond garden designed in the 14th century by the priest-gardener Muso Soseki - one of the very few Japanese gardens from that era that survives essentially in its original layout. The pond uses \"borrowed scenery\" (shakkei), framing the wooded slopes of Arashiyama and Mt. Ogura behind it so the garden appears to extend into the mountains. Entry to the garden runs roughly ¥500, with an additional small fee if you want to walk inside the temple's main hall buildings - most visitors find the garden-only ticket sufficient. Budget 30-45 minutes for a proper walk around the pond loop. There's also a north gate that opens directly onto the bamboo grove, meaning you can combine both in a single loop without backtracking.",
          },
          {
            title: "Togetsukyo Bridge and Iwatayama Monkey Park",
            icon: "Camera",
            content: "Togetsukyo Bridge (\"Moon Crossing Bridge\") spans the Katsura River about a 10-minute walk south of the bamboo grove and is the postcard image of Arashiyama - wooden-railed bridge with forested mountains as backdrop. It's a functioning road/pedestrian bridge, free to cross, busiest at midday. Right at the south end of the bridge is the trailhead for Iwatayama Monkey Park, home to around 120 wild Japanese macaques. It's a genuine hike - about 20 minutes uphill on a dirt path - but it delivers one of Kyoto's best skyline views at the top. The twist here is the \"reverse zoo\" setup: monkeys roam freely outside, while visitors buy small bags of food and feed them from inside a wire-mesh feeding hut. Entry is roughly ¥550 for adults. Note the park sometimes closes with short notice during monkey mating/birthing season, so it's worth checking same-day.",
          },
          {
            title: "Sagano Romantic Train and the Hozugawa River Boat Return",
            icon: "MapPin",
            content: "The Sagano Scenic Railway (often called the \"Romantic Train\") is a slow, open-window sightseeing train that runs about 25 minutes one-way from Torokko Saga Station to Torokko Kameoka Station, tracing the Hozugawa river gorge - spectacular in autumn color and cherry blossom season. Tickets run around ¥880 one-way and should be booked in advance during peak seasons. The classic way to do this as a loop: ride the train to Kameoka, then take the Hozugawa River Boat Ride back - a roughly 2-hour, 16-km traditional wooden boat trip poled and rowed by boatmen back down the same gorge to a dock near Togetsukyo Bridge. The boat ride costs more (around ¥6,000-6,800 per adult) and takes longer, but it's a genuinely different, more immersive experience. Combining train-up, boat-down easily fills a 3-hour block.",
          },
          {
            title: "Combining Arashiyama with Kinkaku-ji and Ryoan-ji",
            icon: "Users",
            content: "Arashiyama sits in western Kyoto, and Kinkaku-ji (the Golden Pavilion) and Ryoan-ji (the famous rock garden) are both in the northwest - close enough to chain into one day, but not walkable between each other. The most efficient sequence: start at Arashiyama at dawn (bamboo grove, then Tenryu-ji as it opens), spend the mid-morning on the monkey park or river area, then take a taxi or bus (roughly 20-30 minutes) to Ryoan-ji first, since its rock garden is best appreciated without crowds, then finish at Kinkaku-ji. Public transit between the two zones is doable via Kyoto City Bus but a taxi is far more time-efficient - expect ¥2,000-3,000 and about 20 minutes. Realistically, budget a full day (8+ hours) for this combination. Trying to add Fushimi Inari or Gion on top of this same day is overly ambitious.\n\nArashiyama pairs naturally with a food-focused afternoon back in town - see the [Kyoto food guide](/japan/kyoto/kyoto-food-guide) - and timing the grove for an empty walk is covered in our [best time to visit Kyoto guide](/japan/kyoto/best-time-to-visit-kyoto).",
            tourCard: {
              slug: "kyoto-around-bike-tour",
              title: "Cycle Around Kyoto 1-Day Private E-Bike Tour with Hotel Pickup",
              description: "A full-day e-bike route through Higashiyama, Gion and Arashiyama's bamboo grove.",
              price: "From JPY 20,000+",
              duration: "~6 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1787497404/asiabylocals/tours/kyoto-cycle-around-kyoto-1-day-private-e-bike-tour-with-hotel-pick/img0.jpg",
            },
          },
        ],
        faqs: [
          {
            q: "Is the Sagano Bamboo Grove really free to visit?",
            a: "Yes. The Bamboo Grove (Chikurin no Michi) is a public walking path with no entrance fee and no set hours - it's open 24 hours a day, every day. You only pay if you enter adjacent attractions like Tenryu-ji Temple.",
          },
          {
            q: "What time should I arrive to avoid crowds at Arashiyama?",
            a: "Arrive by 7:30-8:00 AM for a near-empty bamboo path. Crowds build steadily from 9 AM onward and peak from late morning through mid-afternoon, especially on weekends and during cherry blossom and fall foliage seasons.",
          },
          {
            q: "How long does it take to walk through the Bamboo Grove?",
            a: "The main path is about 500 meters and takes 10-15 minutes to walk at a relaxed pace. Most visitors spend 20-30 minutes total once you factor in photos and slower crowd-shuffle pace during busier hours.",
          },
          {
            q: "Do I need to book the Sagano Romantic Train in advance?",
            a: "During cherry blossom and autumn foliage seasons, yes - tickets frequently sell out days ahead. Outside peak seasons you can often buy same-day, but booking online in advance is safer year-round.",
          },
          {
            q: "Can I visit Arashiyama and Kinkaku-ji in the same day?",
            a: "Yes, they're both in western/northwest Kyoto and are commonly combined. Start at Arashiyama early morning, then taxi or bus to Ryoan-ji and Kinkaku-ji by early-to-mid afternoon.",
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
                                                  "name": "Is the Sagano Bamboo Grove really free to visit?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Yes. The Bamboo Grove (Chikurin no Michi) is a public walking path with no entrance fee and no set hours - it's open 24 hours a day, every day. You only pay if you enter adjacent attractions like Tenryu-ji Temple."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "What time should I arrive to avoid crowds at Arashiyama?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Arrive by 7:30-8:00 AM for a near-empty bamboo path. Crowds build steadily from 9 AM onward and peak from late morning through mid-afternoon, especially on weekends and during cherry blossom and fall foliage seasons."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "How long does it take to walk through the Bamboo Grove?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "The main path is about 500 meters and takes 10-15 minutes to walk at a relaxed pace. Most visitors spend 20-30 minutes total once you factor in photos and slower crowd-shuffle pace during busier hours."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Do I need to book the Sagano Romantic Train in advance?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "During cherry blossom and autumn foliage seasons, yes - tickets frequently sell out days ahead. Outside peak seasons you can often buy same-day, but booking online in advance is safer year-round."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Can I visit Arashiyama and Kinkaku-ji in the same day?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Yes, they're both in western/northwest Kyoto and are commonly combined. Start at Arashiyama early morning, then taxi or bus to Ryoan-ji and Kinkaku-ji by early-to-mid afternoon."
                                                  }
                                        }
                              ]
                    }
          ]
},
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1787497404/asiabylocals/tours/kyoto-cycle-around-kyoto-1-day-private-e-bike-tour-with-hotel-pick/img0.jpg",
      };

        case "gion-geisha-district-guide":
            return {
        title: "Gion Geisha District Guide: Geiko, Maiko & Kyoto Etiquette You Need to Know",
        seoTitle: "Gion Geisha District Guide: Geiko & Maiko Etiquette",
        description: "A culturally accurate Gion guide covering geiko vs maiko, Hanamikoji-dori, ochaya culture, Kyoto's photography restrictions, and where to respectfully spot geiko heading to appointments.",
        fastFacts: [
          {
            icon: "Users",
            label: "Correct Terms",
            value: "Geiko & Maiko",
          },
          {
            icon: "MapPin",
            label: "Main Street",
            value: "Hanamikoji-dori",
          },
          {
            icon: "Clock",
            label: "Best Sighting Time",
            value: "5:30-6:30 PM",
          },
          {
            icon: "AlertCircle",
            label: "Photo Rule",
            value: "No photos on private alleys",
          },
        ],
        sections: [
          {
            title: "Geiko vs Maiko: The Correct Kyoto Terms",
            icon: "Users",
            content: "The word \"geisha\" is the general Japanese term, but Kyoto has its own dialect - and locally, a fully trained professional entertainer is called a geiko, not a geisha. An apprentice, typically training for several years before becoming a geiko, is called a maiko. This distinction matters and using the correct terms shows real respect for the culture. Maiko are usually the more visually elaborate of the two - longer, more colorful kimono with trailing sleeves, an elaborately styled wig with ornate kanzashi hairpins, and distinctive okobo (tall wooden sandals). Geiko dress more subtly, with simpler kimono and a more understated presentation reflecting their senior status. Both geiko and maiko are highly trained professional artists - skilled in traditional dance, shamisen, tea ceremony, and conversation - who are hired to entertain at private banquets called ozashiki. They are not sex workers, performers-for-hire on the street, or tourist photo subjects, and treating them as such is one of the most common and damaging misunderstandings visitors bring to Gion.",
          },
          {
            title: "Hanamikoji-dori and the Ochaya Teahouse System",
            icon: "MapPin",
            content: "Hanamikoji-dori is Gion's main preserved street, running roughly north-south between Shijo-dori and Kenninji Temple, lined with traditional wooden machiya buildings, many of them ochaya (teahouses) where geiko and maiko entertain guests. This street, along with the parallel Shirakawa canal area, is what most people picture when they think of \"old Kyoto.\" The reason tourists can't simply walk into an ochaya is that these are members-only, appointment-based establishments running on a trust system built over years - bookings are traditionally made only through an existing relationship with the house, not by walking up as a stranger. This isn't snobbery so much as a business model built on privacy and long-term relationships with regular patrons. A small number of ochaya and tea-culture experiences have opened English-language, prepaid tourist programs in recent years that offer a legitimate, bookable evening with tea, refreshments, and an entertainment segment - but these are distinct, purpose-built tourist products, not the same as the private ozashiki system locals use.",
          },
          {
            title: "Kyoto's Photography Restrictions: What You Need to Know",
            icon: "AlertCircle",
            content: "Following years of complaints about tourists grabbing, blocking, chasing, and aggressively photographing maiko and geiko on their way to appointments, the Gion district introduced local restrictions on private streets and alleys (as opposed to the main public thoroughfares). The rule bans photography on certain narrow private lanes within Gion - violators can be fined and asked to leave by patrolling wardens. The restriction applies specifically to those posted private alleys, not to the whole neighborhood - Hanamikoji-dori itself and other public streets remain open to photography, though harassing or blocking a geiko/maiko anywhere is treated as unacceptable behavior regardless of the exact street. The broader, safe guidance is unambiguous: never touch, block, chase, or photograph a geiko/maiko up close without permission, treat every sighting as watching a professional going to work, and keep a respectful distance. Always check current posted signage in Gion, as exact rules and boundaries can be updated.",
          },
          {
            title: "Where and When to Legitimately Spot Geiko and Maiko",
            icon: "Clock",
            content: "The most reliable and respectful way to see a real geiko or maiko is by chance, in the early evening, as they walk briskly from their okiya (lodging house) to an ozashiki appointment. The best window is roughly 5:30-6:30 PM, when appointments typically begin. Good spots to simply be present include the Shirakawa canal area near Tatsumi Bridge - a quieter, picturesque stretch with willow trees - and the public sections of Hanamikoji-dori itself. They move quickly and purposefully because they're on a schedule, so a genuine sighting typically lasts seconds, not minutes. Respectful etiquette: never step in front of them, never touch or grab their kimono, never use flash, keep any photo taken from a distance, and never ask them to pose. If a geiko or maiko waves you off or asks you to stop, comply immediately. Weekday evenings tend to have more genuine sightings and fewer crowds than weekends.",
          },
          {
            title: "Yasaka Shrine: Gion's Anchor Landmark",
            icon: "MapPin",
            content: "Yasaka Shrine sits at the eastern end of Shijo-dori, right where Gion effectively begins, and functions as the neighborhood's spiritual and geographic anchor. It's free to enter, open 24 hours, and its vermillion gate and lantern-lined main hall are lit beautifully at night. The shrine is the home of the Gion Matsuri, one of Japan's most famous festivals, held throughout July with its climax in the massive float processions on July 17 and 24. Just behind and above the shrine sits Maruyama Park, Kyoto's oldest public park, popular for cherry blossom viewing in spring, centered on a large weeping cherry tree illuminated at night during the bloom. Practically, Yasaka Shrine is a useful orientation point for a Gion evening walk: start there around sunset, then work west along Shijo-dori and down into Hanamikoji-dori and the Shirakawa canal area as dusk sets in.",
          },
          {
            title: "Real Geiko Sightings vs. Paid Kimono/Maiko Transformation Experiences",
            icon: "Camera",
            content: "One of the biggest sources of confusion in Gion is that the vast majority of kimono-clad women tourists see walking around midday are not geiko or maiko at all - they're tourists who've paid for a maiko/kimono transformation experience at one of dozens of studios in the area. These studios apply full traditional-style makeup and hairstyling and rent an elaborate kimono for a few hours, letting visitors walk around Gion or pose for professional photos looking like a maiko. There's nothing wrong with this experience, but the volume of tourists doing it is exactly why real sightings have become both rarer to spot and more disruptive when they happen. Simple ways to tell the difference: real geiko and maiko move quickly and purposefully with clear destinations and rarely stop for photos; they're usually alone or with one companion, not in groups; and they're most commonly seen only in the early-evening appointment window, not midday, when almost all kimono-clad people in Gion are tourists in a rented outfit.\n\nGion is at its best in the evening after a day at [Fushimi Inari](/japan/kyoto/fushimi-inari-guide), and the surrounding lanes hold some of the city's best eating - see the [Kyoto food guide](/japan/kyoto/kyoto-food-guide).",
            tourCard: {
              slug: "kyoto-photoshoot-photography-tour",
              title: "Gion Kyoto Maiko Geisha Photoshoot",
              description: "Full maiko-style makeup, kimono and a tatami-room photoshoot in a genuine Taisho-era teahouse.",
              price: "From JPY 18,100",
              duration: "2 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1787497397/asiabylocals/tours/kyoto-gion-kyoto-maiko-geisha-photoshoot/img0.jpg",
            },
          },
        ],
        faqs: [
          {
            q: "Is 'geisha' the wrong word to use in Kyoto?",
            a: "It's understood everywhere, but Kyoto's own term for a fully trained entertainer is 'geiko,' with 'maiko' for an apprentice. Using the local terms is a small but meaningful sign of respect when discussing the culture in Kyoto specifically.",
          },
          {
            q: "Can tourists visit an ochaya (teahouse) in Gion?",
            a: "Traditional ochaya operate on an appointment-only, introduction-based system and generally aren't open to walk-in tourists. A small number of tea houses now offer separate, prepaid English-language tourist programs.",
          },
          {
            q: "Is it true you can be fined for taking photos in Gion?",
            a: "Kyoto introduced local restrictions banning photography on certain private alleys in Gion after complaints about tourists harassing geiko and maiko, with fines for violators. Treat any private, narrow alley as off-limits for photos and check posted signage for current rules.",
          },
          {
            q: "What's the best time to see a real geiko or maiko in Gion?",
            a: "Early evening, roughly 5:30-6:30 PM, when they're walking from their okiya to an ozashiki appointment. Good areas to simply be present in include Hanamikoji-dori and the Shirakawa canal near Tatsumi Bridge. Sightings are brief - never block or chase them.",
          },
          {
            q: "How do I know if I'm looking at a real geiko or a tourist in costume?",
            a: "Most kimono-clad women seen in Gion during the day are tourists who paid for a maiko transformation experience. Real geiko and maiko are typically seen only in the early evening, move quickly with purpose, and rarely stop for photos.",
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
                                                  "name": "Is 'geisha' the wrong word to use in Kyoto?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "It's understood everywhere, but Kyoto's own term for a fully trained entertainer is 'geiko,' with 'maiko' for an apprentice. Using the local terms is a small but meaningful sign of respect when discussing the culture in Kyoto specifically."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Can tourists visit an ochaya (teahouse) in Gion?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Traditional ochaya operate on an appointment-only, introduction-based system and generally aren't open to walk-in tourists. A small number of tea houses now offer separate, prepaid English-language tourist programs."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Is it true you can be fined for taking photos in Gion?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Kyoto introduced local restrictions banning photography on certain private alleys in Gion after complaints about tourists harassing geiko and maiko, with fines for violators. Treat any private, narrow alley as off-limits for photos and check posted signage for current rules."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "What's the best time to see a real geiko or maiko in Gion?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Early evening, roughly 5:30-6:30 PM, when they're walking from their okiya to an ozashiki appointment. Good areas to simply be present in include Hanamikoji-dori and the Shirakawa canal near Tatsumi Bridge. Sightings are brief - never block or chase them."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "How do I know if I'm looking at a real geiko or a tourist in costume?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Most kimono-clad women seen in Gion during the day are tourists who paid for a maiko transformation experience. Real geiko and maiko are typically seen only in the early evening, move quickly with purpose, and rarely stop for photos."
                                                  }
                                        }
                              ]
                    }
          ]
},
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1787497397/asiabylocals/tours/kyoto-gion-kyoto-maiko-geisha-photoshoot/img0.jpg",
      };

        case "kyoto-food-guide":
            return {
        title: "The Complete Kyoto Food Guide: What to Eat in Kyoto, From Nishiki Market to Kaiseki",
        seoTitle: "Kyoto Food Guide 2026: What to Eat in Kyoto",
        description: "A local's Kyoto food guide covering Nishiki Market stalls, kaiseki and shojin ryori, yudofu in Arashiyama, obanzai cooking, and Uji matcha - with real prices and neighborhoods.",
        sections: [
          {
            title: "Nishiki Market: The Kitchen of Kyoto",
            icon: "ShoppingBag",
            content: "Stretching about 400 meters through a narrow, covered arcade one block north of Shijo-dori, Nishiki Market has earned its nickname 'Kyoto's Kitchen' over centuries of trading in the city's freshest ingredients. It began as a wholesale fish market and has since evolved into a dense strip of stalls selling ready-to-eat street food alongside pickles, knives, and dried goods.\n\nLook for tako tamago - a whole baby octopus stuffed with a quail egg, skewered and glazed. Yuba (fresh tofu skin) shows up plain, dipped in soy, and folded into skewered bites. For something sweet, stalls sell matcha soft-serve, matcha dango, and warabimochi dusted in kinako. Go mid-morning on a weekday to beat crowds and catch stalls before popular items sell out.",
          },
          {
            title: "Kaiseki: Kyoto's Tea-Ceremony Cuisine",
            icon: "Star",
            content: "Kaiseki is Kyoto's signature contribution to Japanese haute cuisine, rooted in the tea ceremony. The earliest form, cha-kaiseki, was a modest light meal served before formal tea, designed to settle the stomach ahead of matcha's bitterness. It evolved into today's multi-course fine dining: appetizer, sashimi, a simmered dish, a grilled dish, steamed course, rice with pickles, and a seasonal dessert, plated to reflect the exact week of the year.\n\nKyoto kaiseki leans on kyo-yasai (heirloom vegetables), local tofu and yuba, and Kyoto's soft groundwater, which shapes the delicate dashi under nearly every course. Reserve well in advance for the respected counters in Gion and Pontocho.",
          },
          {
            title: "Shojin Ryori: Buddhist Temple Vegetarian Cooking",
            icon: "Coffee",
            content: "Shojin ryori is Kyoto's Buddhist temple cuisine - entirely plant-based, developed by Zen monks under precepts that forbid killing and pungent alliums like garlic and onion. It relies on tofu, seasonal vegetables, wild mountain plants, seaweed, and kombu dashi to build flavor without meat, fish, or animal stock.\n\nThe best place to try it is at or near the temples themselves. Tenryu-ji in Arashiyama has a well-known shojin ryori restaurant overlooking its Sogenchi Pond garden. Temples around Nanzen-ji and northern Higashiyama also have shojin-affiliated restaurants nearby. Portions are deliberately modest and mindful rather than filling.",
          },
          {
            title: "Yudofu: Simmered Tofu in Arashiyama and Nanzen-ji",
            icon: "Utensils",
            content: "Yudofu - blocks of tofu gently simmered tableside in a kombu-dashi hot pot and dipped in ponzu with scallion and bonito - is Kyoto's most understated specialty. Kyoto's soft groundwater is credited with producing an unusually delicate, silky tofu, and monks at Zen temples adopted it as a protein-rich staple compatible with Buddhist dietary restrictions.\n\nTwo neighborhoods are the classic settings: the approach to Nanzen-ji has a cluster of yudofu restaurants along the tree-lined path to the temple gate, several with garden seating; and Arashiyama, especially around Tenryu-ji and the bamboo grove, serves yudofu as part of a set course with river or garden views.",
          },
          {
            title: "Obanzai: Kyoto Home Cooking",
            icon: "Utensils",
            content: "Obanzai is Kyoto's everyday home cooking - built on using every part of a vegetable and wasting nothing. A typical spread is a table of small shared dishes: simmered kabocha squash, sesame-dressed greens, hijiki seaweed, nishin with eggplant, and tsukemono pickles, rotating daily based on what's in season.\n\nObanzai restaurants, many clustered around Pontocho, Kiyamachi-dori, and the backstreets of Nishijin, typically let you point at dishes on display or pick from a printed list - one of the more affordable, approachable ways to eat well in Kyoto without a reservation.",
          },
          {
            title: "Matcha Culture, Pontocho Nightlife, and Practical Dining Notes",
            icon: "MapPin",
            content: "Just south of Kyoto, the town of Uji is widely regarded as one of Japan's foremost matcha-producing regions, supplying much of the ceremonial-grade matcha used in Kyoto's cafes and sweets. Matcha shows up in parfaits, soft-serve, and traditional wagashi sweets served with a bowl of whisked tea.\n\nFor dinner and drinks, Pontocho - a narrow lantern-lit alley between Shijo and Sanjo along the Kamo River - and neighboring Kiyamachi-dori have Kyoto's densest concentration of izakaya and riverside dining, including seasonal kawadoko platforms over the river in summer.\n\nTipping is not customary in Japan. For budgeting: a casual meal runs roughly ¥1,000-2,000; a solid mid-range dinner ¥3,000-6,000; and a formal kaiseki dinner ¥10,000-30,000+ per person.\n\nWork these stops into your days with the [3-day Kyoto itinerary](/japan/kyoto/kyoto-3-day-itinerary), and use the [getting around Kyoto guide](/japan/kyoto/getting-around-kyoto) to hop between food neighborhoods without losing time.",
            tourCard: {
              slug: "kyoto-food-tour",
              title: "Kyoto: Nishiki Market and Depachika Food Tour",
              description: "A guided tasting walk through Kyoto's Kitchen and a department-store food hall.",
              price: "From USD 49.27",
              duration: "2 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1787497333/asiabylocals/tours/kyoto-kyoto-nishiki-market-and-depachika-food-tour/img0.jpg",
            },
          },
        ],
        faqs: [
          {
            q: "What is the best food to try in Kyoto?",
            a: "Prioritize yudofu (simmered tofu) near Nanzen-ji or Arashiyama, a kaiseki or shojin ryori set meal, obanzai home-style dishes in Pontocho, and street snacks like tako tamago and yuba at Nishiki Market.",
          },
          {
            q: "Is Nishiki Market worth visiting for food?",
            a: "Yes - it's a roughly 400-meter covered arcade of specialty food stalls where you can sample small bites like tako tamago, yuba, and matcha sweets without committing to a full sit-down meal. Go on a weekday morning to avoid the heaviest crowds.",
          },
          {
            q: "What is the difference between kaiseki and shojin ryori?",
            a: "Kaiseki is a multi-course fine-dining format rooted in the tea ceremony and can include fish and meat; shojin ryori is strictly Buddhist temple vegetarian cuisine, avoiding meat, fish, and pungent alliums, typically eaten at or near temples.",
          },
          {
            q: "Do you tip at restaurants in Kyoto?",
            a: "No. Tipping is not customary in Japan and is not expected at restaurants, izakaya, or even high-end kaiseki establishments.",
          },
          {
            q: "Where is the best area in Kyoto for dinner and drinks?",
            a: "Pontocho alley and neighboring Kiyamachi-dori, both near the Kamo River, have Kyoto's densest concentration of izakaya and riverside dining, including seasonal kawadoko platforms over the river in summer.",
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
                                                  "name": "What is the best food to try in Kyoto?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Prioritize yudofu (simmered tofu) near Nanzen-ji or Arashiyama, a kaiseki or shojin ryori set meal, obanzai home-style dishes in Pontocho, and street snacks like tako tamago and yuba at Nishiki Market."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Is Nishiki Market worth visiting for food?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Yes - it's a roughly 400-meter covered arcade of specialty food stalls where you can sample small bites like tako tamago, yuba, and matcha sweets without committing to a full sit-down meal. Go on a weekday morning to avoid the heaviest crowds."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "What is the difference between kaiseki and shojin ryori?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Kaiseki is a multi-course fine-dining format rooted in the tea ceremony and can include fish and meat; shojin ryori is strictly Buddhist temple vegetarian cuisine, avoiding meat, fish, and pungent alliums, typically eaten at or near temples."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Do you tip at restaurants in Kyoto?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "No. Tipping is not customary in Japan and is not expected at restaurants, izakaya, or even high-end kaiseki establishments."
                                                  }
                                        },
                                        {
                                                  "@type": "Question",
                                                  "name": "Where is the best area in Kyoto for dinner and drinks?",
                                                  "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Pontocho alley and neighboring Kiyamachi-dori, both near the Kamo River, have Kyoto's densest concentration of izakaya and riverside dining, including seasonal kawadoko platforms over the river in summer."
                                                  }
                                        }
                              ]
                    }
          ]
},
        fastFacts: [
          {
            icon: "MapPin",
            label: "Nishiki Market length",
            value: "~400m covered arcade",
          },
          {
            icon: "Utensils",
            label: "Signature dish",
            value: "Yudofu (simmered tofu)",
          },
          {
            icon: "Coffee",
            label: "Nearby matcha region",
            value: "Uji",
          },
          {
            icon: "Star",
            label: "Mid-range dinner",
            value: "¥3,000-6,000 / person",
          },
        ],
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1787497333/asiabylocals/tours/kyoto-kyoto-nishiki-market-and-depachika-food-tour/img0.jpg",
      };
        default:
            return null;
    }
}
