// Hiroshima authority pages (2026-08). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getHiroshimaInfoContent() -> getCityInfoContent().
import type { CityInfoData } from './cityInfoContent';

export function getHiroshimaInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case 'best-time-to-visit-hiroshima':
            return {
        title: 'Best Time to Visit Hiroshima: Weather, Cherry Blossoms, Oyster Season & When to Avoid the Crowds',
        seoTitle: 'Best Time to Visit Hiroshima (2026)',
        description: 'Month-by-month guide to visiting Hiroshima: cherry blossom dates, the August 6 Peace Memorial Ceremony, winter oyster season and typhoon timing.',
        fastFacts: [
          { icon: 'flower-2', label: 'Cherry blossoms', value: 'Late Mar - early Apr (2026 full bloom ~Mar 29-31)' },
          { icon: 'sun', label: 'Best overall windows', value: 'Late Mar-May & Oct-early Dec' },
          { icon: 'utensils', label: 'Oyster season', value: 'Oct-Mar, peak Dec-Feb' },
          { icon: 'cloud-rain', label: 'Wettest / riskiest', value: 'Rainy season Jun-mid Jul; typhoons peak Aug-Sep' },
        ],
        sections: [
          {
            title: 'The short answer: late March to May, or October to early December',
            icon: 'calendar-days',
            content: 'Hiroshima is at its best in two windows. Spring (late March through May) brings mild 15-22°C days, cherry blossoms along the rivers that thread through the city, and comfortable walking weather for the Peace Memorial Park and Miyajima. Autumn (October to early December) delivers crisp air, stable skies and maple color — Miyajima\'s Momijidani (\'Maple Valley\') Park is genuinely one of the best autumn-leaf spots in western Japan, usually peaking mid-to-late November.\n\nIf we had to pick one week, it would be the first week of April (blossoms at or just past full bloom, before Golden Week crowds) or the third week of November (peak maples on Miyajima). Both windows are popular, so book Hiroshima and especially Miyajima accommodation 2-3 months ahead.\n\nThe honest downside seasons: June is rainy season (tsuyu) with persistent drizzle, and mid-July through August is hot and humid — regularly 32-35°C with heavy air. Hiroshima is still very visitable in summer, but plan Peace Park early in the morning and save indoor time (the museum, Okonomimura) for midday.',
            tourCard: {
              slug: 'hiroshima-walking-tour',
              title: 'Hiroshima Untold: Why the Atomic Bomb Fell — Guided History Walk',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 33.14',
              duration: '2.5 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830475/asiabylocals/tours/hiroshima-hiroshima-untold-why-the-atomic-bomb-fell-guided-history-walk/img0.jpg',
            },
          },
          {
            title: 'Cherry blossom timing in Hiroshima',
            icon: 'flower-2',
            content: 'Hiroshima\'s cherry blossoms typically open in the second half of March and hit full bloom around the end of March to early April. For 2026, forecasters called first bloom for roughly March 19-22 with full bloom around March 29-31 — a fairly typical year. Full bloom lasts about a week if the weather holds; a rainy, windy day can strip the trees fast, so build a day or two of flexibility into a blossom-focused trip.\n\nThe best hanami spots are free and central: the riverbanks of Peace Memorial Park (the contrast of blossoms against the A-Bomb Dome is quietly powerful), Hiroshima Castle\'s moat, and Hijiyama Park east of the center. On Miyajima, the blossoms around the Five-Storied Pagoda and along the Omotesando approach bloom on roughly the same schedule as the city.\n\nOne warning: Golden Week (April 29 to May 5) is Japan\'s biggest domestic holiday cluster. Hotels double in price and Miyajima\'s ferries and ropeway run long queues. If your dates are flexible, finish your trip before April 28.',
            tourCard: {
              slug: 'miyajima-guided-tour',
              title: 'Hiroshima & Miyajima in One Day: A-Bomb Dome & Itsukushima with a Local',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 237.26',
              duration: '7 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830513/asiabylocals/tours/hiroshima-hiroshima-miyajima-in-one-day-a-bomb-dome-itsukushima-with-a-local/img0.jpg',
            },
          },
          {
            title: 'August 6: the Peace Memorial Ceremony',
            icon: 'flame',
            content: 'Every August 6 the Peace Memorial Ceremony is held in Peace Memorial Park from 6:30 to 8:50 in the morning, marking the moment of the 1945 atomic bombing at 8:15am. It is open to everyone — no ticket, no registration — with the public standing in the lawn areas and walkways around the Cenotaph. The 2026 ceremony drew around 50,000 people, including delegations from over 120 countries. In the evening, thousands of paper lanterns are floated down the Motoyasu River past the A-Bomb Dome, which is one of the most moving sights in Japan.\n\nShould you plan your trip around it? If you want to witness it, absolutely — but go in with clear expectations. Hotels across the city sell out months in advance and prices spike; early August is also the hottest, most humid stretch of the year, and the Peace Memorial Museum runs extended August hours (7:30am-8:00pm) precisely because demand peaks. If your interest is a quiet, reflective visit to the park and museum, you will honestly have a better experience in October or November, when you can stand at the Cenotaph in near silence.\n\nAugust 6 is a day of mourning, not a festival. Dress modestly, keep voices low during the ceremony, and don\'t fly drones or livestream through the crowd.',
            tourCard: {
              slug: 'hiroshima-walking-tour',
              title: 'Hiroshima Untold: Why the Atomic Bomb Fell — Guided History Walk',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 33.14',
              duration: '2.5 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830475/asiabylocals/tours/hiroshima-hiroshima-untold-why-the-atomic-bomb-fell-guided-history-walk/img0.jpg',
            },
          },
          {
            title: 'Winter: oyster season, and the case for the off-season',
            icon: 'snowflake',
            content: 'Hiroshima produces more oysters than any other prefecture in Japan, and the harvest runs from about October to March, peaking December through February when the oysters are at their plumpest. Winter is when you\'ll find grilled-oyster shacks on Miyajima in full swing and kaki (oyster) specials on every izakaya menu. Miyajima\'s dedicated Oyster Festival is traditionally held the second weekend of February — though note the 2026 edition was cancelled because organisers couldn\'t secure enough oysters, so check the Miyajima Tourist Association calendar before planning around it.\n\nWinter weather is cold but dry and clear — daytime highs around 8-10°C, with snow rare in the city. Crowds are the thinnest of the year outside New Year\'s week, hotel prices drop, and the Peace Memorial Museum (which closes earlier, at 6:00pm December-February) is at its least congested. For travelers who prioritise atmosphere over blossoms, January is an underrated month here.',
            tourCard: {
              slug: 'hiroshima-evening-tour',
              title: 'Hiroshima After Dark: Food & Culture Evening Walk with Local Dinner',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 132.01',
              duration: '3 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830500/asiabylocals/tours/hiroshima-hiroshima-after-dark-food-culture-evening-walk-with-local-dinner/img0.jpg',
            },
          },
          {
            title: 'Rainy season and typhoons: what actually gets disrupted',
            icon: 'cloud-rain',
            content: 'Rainy season hits Hiroshima from roughly early June to mid-July — expect grey skies and regular rain rather than all-day downpours. It\'s workable with an umbrella, and the museum, Okonomimura and covered Hondori shopping arcade fill rainy half-days easily.\n\nTyphoon season runs May through October and peaks in August and September. Most typhoons brush the region rather than hit it directly, but a direct approach can suspend Miyajima ferries, the Mt. Misen ropeway, and Shinkansen services for a day. Forecasters expected an above-average 2026 season (around 28 storms versus a long-term average of about 25), so if you\'re travelling in late August or September, keep one flexible day in your itinerary and don\'t book Miyajima as your final morning before an international flight.\n\nPractical rule: typhoon tracks are forecast 3-5 days out with good accuracy. Check the Japan Meteorological Agency forecast when you\'re a few days from Hiroshima and simply swap your Miyajima day if a storm is inbound.',
          },
        ],
        faqs: [
          { q: 'What is the single best month to visit Hiroshima?', a: 'November. You get stable, crisp weather, peak autumn color in Miyajima\'s Momijidani Park (usually mid-to-late November), the start of oyster season, and far thinner crowds than cherry blossom season. Early April is the runner-up if blossoms are your priority.' },
          { q: 'When do cherry blossoms bloom in Hiroshima?', a: 'Typically the last week of March through the first week of April. In 2026, first bloom was forecast around March 19-22 with full bloom around March 29-31. The riverbanks of Peace Memorial Park and Hiroshima Castle\'s moat are the top viewing spots.' },
          { q: 'Can tourists attend the August 6 Peace Memorial Ceremony?', a: 'Yes — it\'s open to everyone, free, with no ticket or registration. It runs 6:30-8:50am in Peace Memorial Park, with a moment of silence at 8:15am. Around 50,000 people attend, so arrive very early and book your hotel months in advance. The evening lantern floating on the Motoyasu River is equally worth staying for.' },
          { q: 'Is summer a bad time to visit Hiroshima?', a: 'Not bad, but demanding: expect 32-35°C with high humidity in July and August, plus typhoon risk peaking August-September. Do Peace Park at 8am, take the museum and Okonomimura in the midday heat, and keep one flexible day in case a typhoon suspends Miyajima ferries.' },
          { q: 'When is oyster season in Hiroshima?', a: 'Roughly October to March, with the peak December through February. Hiroshima is Japan\'s largest oyster producer, and winter is when Miyajima\'s grilled-oyster stalls and the city\'s oyster restaurants are at their best.' },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is the single best month to visit Hiroshima?", "acceptedAnswer": {"@type": "Answer", "text": "November. You get stable, crisp weather, peak autumn color in Miyajima's Momijidani Park (usually mid-to-late November), the start of oyster season, and far thinner crowds than cherry blossom season. Early April is the runner-up if blossoms are your priority."}}, {"@type": "Question", "name": "When do cherry blossoms bloom in Hiroshima?", "acceptedAnswer": {"@type": "Answer", "text": "Typically the last week of March through the first week of April. In 2026, first bloom was forecast around March 19-22 with full bloom around March 29-31. The riverbanks of Peace Memorial Park and Hiroshima Castle's moat are the top viewing spots."}}, {"@type": "Question", "name": "Can tourists attend the August 6 Peace Memorial Ceremony?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — it's open to everyone, free, with no ticket or registration. It runs 6:30-8:50am in Peace Memorial Park, with a moment of silence at 8:15am. Around 50,000 people attend, so arrive very early and book your hotel months in advance. The evening lantern floating on the Motoyasu River is equally worth staying for."}}, {"@type": "Question", "name": "Is summer a bad time to visit Hiroshima?", "acceptedAnswer": {"@type": "Answer", "text": "Not bad, but demanding: expect 32-35°C with high humidity in July and August, plus typhoon risk peaking August-September. Do Peace Park at 8am, take the museum and Okonomimura in the midday heat, and keep one flexible day in case a typhoon suspends Miyajima ferries."}}, {"@type": "Question", "name": "When is oyster season in Hiroshima?", "acceptedAnswer": {"@type": "Answer", "text": "Roughly October to March, with the peak December through February. Hiroshima is Japan's largest oyster producer, and winter is when Miyajima's grilled-oyster stalls and the city's oyster restaurants are at their best."}}]}]},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830475/asiabylocals/tours/hiroshima-hiroshima-untold-why-the-atomic-bomb-fell-guided-history-walk/img0.jpg',
      };

        case 'hiroshima-2-day-itinerary':
            return {
        title: 'Hiroshima in 2 Days: A Realistic Itinerary for Peace Memorial Park, the City and Miyajima',
        seoTitle: 'Hiroshima 2-Day Itinerary (2026)',
        description: 'A tested two-day Hiroshima plan: Peace Memorial Park, museum and okonomiyaki on day one, Miyajima\'s floating torii and Mt. Misen on day two, with real timings.',
        fastFacts: [
          { icon: 'clock', label: 'Time needed', value: '2 full days (city + Miyajima)' },
          { icon: 'ticket', label: 'Museum entry', value: '¥200, opens 7:30am' },
          { icon: 'ship', label: 'City to Miyajima', value: '~70-90 min via JR + ferry (¥400 + ¥100 tax)' },
          { icon: 'mountain', label: 'Mt. Misen ropeway', value: '¥2,000 round trip + 30-min summit hike' },
        ],
        sections: [
          {
            title: 'How this itinerary works',
            icon: 'map',
            content: 'Two days is the right amount of time for Hiroshima — one full day for the city centered on Peace Memorial Park, one full day for Miyajima. Travelers who try to cram both into a single day end up doing the museum at a jog and reaching Miyajima as the shrine closes; don\'t do that to yourself.\n\nThe logistics are simple: everything on day one is walkable or a short tram ride from the center, and Miyajima is about 70-90 minutes door-to-door from downtown (tram or JR train to Miyajimaguchi, then a 10-minute ferry). Base yourself anywhere near Hondori, Hatchobori or Hiroshima Station and both days work.\n\nBefore you start, grab an ICOCA or other IC card (or use the Mobiry digital passes) — the ¥240 flat-fare trams, the Miyajima ferry gates and most convenience stores all take a tap. If you hold a Japan Rail Pass, note that it covers the JR Sanyo Line to Miyajimaguchi, the JR ferry to the island, and even the meipuru-pu sightseeing loop bus in the city — you may not need any other transport ticket at all.',
          },
          {
            title: 'Day 1 morning: Peace Memorial Park and the museum (8:30am-1:00pm)',
            icon: 'landmark',
            content: 'Start at the A-Bomb Dome around 8:30am, before the tour groups. The skeletal dome — left exactly as the 1945 blast left it — is most affecting in soft morning light from across the Motoyasu River. Cross into the park and walk the axis: the Children\'s Peace Monument draped in thousands of folded paper cranes, then the Cenotaph, whose arch frames the Flame of Peace and the Dome in a single line of sight.\n\nEnter the Peace Memorial Museum by about 9:30-10:00am. Admission is just ¥200 for adults (¥100 for high schoolers, free for younger children) and the museum opens at 7:30am year-round — one of the earliest-opening major museums in Japan, which is a gift for beating crowds. Allow a genuine 1.5 to 2 hours; the East Building\'s context exhibits and the Main Building\'s personal artifacts deserve unhurried attention. It is heavy, important, and the reason most people come to this city — schedule nothing tightly after it, because you\'ll want decompression time.\n\nAfterward, walk 10 minutes to Hondori arcade for lunch. This is the moment for your first Hiroshima-style okonomiyaki — see the food guide, but Okonomimura\'s 24 stalls (11:00am open) are a five-minute walk from Hondori\'s east end.',
            tourCard: {
              slug: 'hiroshima-walking-tour',
              title: 'Hiroshima Untold: Why the Atomic Bomb Fell — Guided History Walk',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 33.14',
              duration: '2.5 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830475/asiabylocals/tours/hiroshima-hiroshima-untold-why-the-atomic-bomb-fell-guided-history-walk/img0.jpg',
            },
          },
          {
            title: 'Day 1 afternoon and evening: castle, gardens and the food scene (1:30pm-late)',
            icon: 'building-2',
            content: 'With the emotional heavyweight done, spend the afternoon on lighter Hiroshima. Hiroshima Castle (a 15-minute walk north of Hondori) is a 1958 reconstruction — be honest with yourself about whether castle museums are your thing; the grounds and moat are free and pleasant even if you skip the keep. Nearby Shukkeien Garden is the better stop: a compact 1620s strolling garden with a central pond, arched bridge and teahouses, lovely in any season.\n\nAlternatively, ride the meipuru-pu loop bus (¥240 a ride, ¥600 day pass, free with a JR Pass) — its Orange and Lemon routes link the station, castle area, museum district and Peace Park, useful if your legs are done.\n\nIn the evening, head to the Nagarekawa/Shintenchi district, Hiroshima\'s compact nightlife quarter. Do a proper okonomiyaki dinner if you had something else for lunch, or go the izakaya route — in autumn and winter, grilled Hiroshima oysters are non-negotiable. The city is relaxed and walkable at night; finish with the A-Bomb Dome illuminated across the river if you want a quiet closing note.',
            tourCard: {
              slug: 'hiroshima-evening-tour',
              title: 'Hiroshima After Dark: Food & Culture Evening Walk with Local Dinner',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 132.01',
              duration: '3 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830500/asiabylocals/tours/hiroshima-hiroshima-after-dark-food-culture-evening-walk-with-local-dinner/img0.jpg',
            },
          },
          {
            title: 'Day 2: Miyajima — ferries, shrine, and Mt. Misen (8:00am-6:00pm)',
            icon: 'torii-gate',
            content: 'Leave the city by 8:00-8:30am. Fastest route: JR Sanyo Line from Hiroshima Station to Miyajimaguchi (about 28 minutes, covered by JR Pass), then the JR ferry (10 minutes, ¥200 one way, also JR Pass-covered). The tram (Hiroden Line 2) does the same run in about 70 minutes for ¥240 — cheaper, slower, and it works well one-way if you buy the ¥1,000 one-day tram+ferry pass. Everyone pays Miyajima\'s ¥100 visitor tax on entry (cash; ¥500 buys a one-year pass).\n\nBefore you go, check the tide table — this is the single biggest factor in your Miyajima day. The torii \'floats\' when the tide is above 250cm and you can walk out to its base when it drops below 100cm; the two states are about six hours apart, so a full day often lets you see both. Time your Itsukushima Shrine visit (¥300 admission, opens 6:30am) for higher water if you can.\n\nMid-morning, ride the Miyajima Ropeway toward Mt. Misen\'s summit (¥2,000 round trip; runs 9:00am-5:00pm, last ascent 4:30pm). From the upper station it\'s still a real 30-minute hike each way to the actual summit and its panorama over the Seto Inland Sea — wear proper shoes. Back down by mid-afternoon, graze along Omotesando: grilled oysters, momiji manju (try one deep-fried), and the island\'s famously pushy deer, who will eat your paper map if you let them. Ferries run until late, but aim to head back by 5:30-6:00pm — the island empties and dinner options are far better in the city.',
            tourCard: {
              slug: 'miyajima-guided-tour',
              title: 'Hiroshima & Miyajima in One Day: A-Bomb Dome & Itsukushima with a Local',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 237.26',
              duration: '7 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830513/asiabylocals/tours/hiroshima-hiroshima-miyajima-in-one-day-a-bomb-dome-itsukushima-with-a-local/img0.jpg',
            },
          },
          {
            title: 'If you have a third day, or want to swap something out',
            icon: 'route',
            content: 'With a third day, the best add-ons in order: Iwakuni\'s Kintai Bridge (a five-arch wooden masterpiece 45 minutes away by local JR train, ¥310 to cross), Okunoshima \'Rabbit Island\' (half a day minimum — about 1.5 hours to Tadanoumi plus a 15-minute ferry), or Sandankyo Gorge for hikers. Our day-trips guide ranks all of them honestly.\n\nTwo worthwhile swaps within the two-day frame: paddlers can replace the standard ferry-out-ferry-back with a sea-kayak tour that glides directly under the great torii at high water — genuinely a different experience of the same icon. And if a travel day eats your first morning, the Peace Park + museum block compresses to three focused hours (8:00-11:00am) without feeling butchered; it\'s the afternoon extras that should give way, never the museum.\n\nA note on the direct boat: Aqua Net\'s \'World Heritage Sea Route\' runs from the Peace Park pier straight to Miyajima in 45 minutes (¥2,400 one way, roughly every 30 minutes from 8:30am). It\'s pricey versus ¥400-odd by train and ferry, but linking the two World Heritage Sites by water is a genuinely pleasant way to start day two — worth it if the budget allows, skippable if not.',
            tourCard: {
              slug: 'miyajima-heritage-tour',
              title: 'Miyajima Great Torii Kayak Tour: Paddle a World Heritage Bay',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 124.28',
              duration: '2 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830558/asiabylocals/tours/hiroshima-miyajima-great-torii-kayak-tour-paddle-a-world-heritage-bay/img0.jpg',
            },
          },
        ],
        faqs: [
          { q: 'Is 2 days enough for Hiroshima and Miyajima?', a: 'Yes — it\'s the ideal length. Day one covers Peace Memorial Park, the museum and the city; day two gives Miyajima the full day it deserves, including Mt. Misen and both tide states of the torii. One day for both is possible but rushed and not recommended.' },
          { q: 'How long should I allow for the Peace Memorial Museum?', a: '1.5 to 2 hours inside, plus another 45-60 minutes for the park\'s monuments. The museum opens at 7:30am and costs only ¥200, and going early (before 10am) makes an enormous difference to crowd levels.' },
          { q: 'Should I do Miyajima on day 1 or day 2?', a: 'Either works, but check the tide table first and anchor your Miyajima day to it — the torii floats above 250cm of tide and is walkable below 100cm. If a typhoon or heavy rain is forecast for one of your days, make that your museum/city day.' },
          { q: 'Does the Japan Rail Pass cover this itinerary?', a: 'Almost entirely. It covers the Shinkansen to Hiroshima, the JR Sanyo Line to Miyajimaguchi, the JR ferry to Miyajima, and the meipuru-pu city loop bus. You\'d only pay for trams (¥240 flat), the ¥100 Miyajima visitor tax, and attraction entries.' },
          { q: 'Where should I stay for this itinerary?', a: 'Near Hondori/Hatchobori for walkability to Peace Park and nightlife, or near Hiroshima Station for fastest Miyajima and Shinkansen access. Staying overnight on Miyajima itself is a lovely splurge — the island is magical after the day-trippers leave — but do it on the night between your two days, not your last night before onward travel.' },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is 2 days enough for Hiroshima and Miyajima?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — it's the ideal length. Day one covers Peace Memorial Park, the museum and the city; day two gives Miyajima the full day it deserves, including Mt. Misen and both tide states of the torii. One day for both is possible but rushed and not recommended."}}, {"@type": "Question", "name": "How long should I allow for the Peace Memorial Museum?", "acceptedAnswer": {"@type": "Answer", "text": "1.5 to 2 hours inside, plus another 45-60 minutes for the park's monuments. The museum opens at 7:30am and costs only ¥200, and going early (before 10am) makes an enormous difference to crowd levels."}}, {"@type": "Question", "name": "Should I do Miyajima on day 1 or day 2?", "acceptedAnswer": {"@type": "Answer", "text": "Either works, but check the tide table first and anchor your Miyajima day to it — the torii floats above 250cm of tide and is walkable below 100cm. If a typhoon or heavy rain is forecast for one of your days, make that your museum/city day."}}, {"@type": "Question", "name": "Does the Japan Rail Pass cover this itinerary?", "acceptedAnswer": {"@type": "Answer", "text": "Almost entirely. It covers the Shinkansen to Hiroshima, the JR Sanyo Line to Miyajimaguchi, the JR ferry to Miyajima, and the meipuru-pu city loop bus. You'd only pay for trams (¥240 flat), the ¥100 Miyajima visitor tax, and attraction entries."}}, {"@type": "Question", "name": "Where should I stay for this itinerary?", "acceptedAnswer": {"@type": "Answer", "text": "Near Hondori/Hatchobori for walkability to Peace Park and nightlife, or near Hiroshima Station for fastest Miyajima and Shinkansen access. Staying overnight on Miyajima itself is a lovely splurge — the island is magical after the day-trippers leave — but do it on the night between your two days, not your last night before onward travel."}}]}]},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830475/asiabylocals/tours/hiroshima-hiroshima-untold-why-the-atomic-bomb-fell-guided-history-walk/img0.jpg',
      };

        case 'getting-around-hiroshima':
            return {
        title: 'Getting Around Hiroshima: Trams, Passes, Loop Buses and the Ferries to Miyajima',
        seoTitle: 'Getting Around Hiroshima: Trams & Ferries',
        description: 'How Hiroshima transport actually works: Hiroden tram fares, day passes, the meipuru-pu loop bus, JR Pass coverage and choosing your Miyajima ferry.',
        fastFacts: [
          { icon: 'tram-front', label: 'Tram fare', value: '¥240 flat, any distance' },
          { icon: 'ticket', label: 'Best-value pass', value: '¥1,000 tram + Miyajima ferry (24h digital)' },
          { icon: 'ship', label: 'Miyajima ferry', value: '¥200 one way + ¥100 visitor tax' },
          { icon: 'bus', label: 'Loop bus', value: 'meipuru-pu ¥600/day, free with JR Pass' },
        ],
        sections: [
          {
            title: 'The Hiroden streetcar: Hiroshima\'s moving museum',
            icon: 'tram-front',
            content: 'Hiroshima runs Japan\'s largest surviving streetcar network, and the Hiroden tram is how you\'ll do most city travel. The fare system could not be simpler: a flat ¥240 for adults (¥120 for children) anywhere in the city network, including all the central lines, and the same flat fare applies on the Miyajima Line out to Miyajimaguchi. Board by any door, tap an IC card on entry and exit (or pay cash to the driver when leaving), and you\'re done.\n\nThe fleet itself is half the fun — sleek modern Green Mover units share the rails with creaking mid-century cars, including a couple of 1940s survivors that were repaired and returned to service after the atomic bombing. Locals call the system a \'moving museum.\'\n\nThe lines you\'ll actually use: Line 2 or 6 from Hiroshima Station to Genbaku Dome-mae (A-Bomb Dome, about 15-20 minutes), Line 1 toward Hondori and the port, and Line 2 all the way to Miyajimaguchi (about 70 minutes — scenic but slow; the JR train does it in 28). Trams run roughly 6am to 11pm at intervals of a few minutes in the center.',
          },
          {
            title: 'Day passes: when they pay off',
            icon: 'ticket',
            content: 'Hiroden sells a One-Day Pass for ¥700 (child ¥350) covering unlimited rides on the whole tram network, and a tram + Miyajima ferry pass for ¥1,000 (child ¥550) that adds the Miyajimaguchi-Miyajima crossing on the Hiroden-affiliated ferry. Both are also sold as digital tickets through Hiroden\'s MOBIRY TRAVEL platform — the digital version runs 24 hours from activation rather than expiring at midnight, which is strictly better if you activate mid-morning.\n\nDo the math before buying, though. At a ¥240 flat fare, the ¥700 day pass needs three tram rides to break even — easy on a packed city day, marginal on a relaxed one. The ¥1,000 tram+ferry version is the sleeper deal for a Miyajima day without a JR Pass: tram to Miyajimaguchi (¥240 value), ferry both ways (¥400 value), tram home (¥240) already beats paying as you go, and every extra hop is free.\n\nOne thing that no longer exists as such: the old \'Visit Hiroshima Peace Pass\' style paper products have largely been folded into these Mobiry digital tickets, so if an older blog mentions a pass you can\'t find, this is why. An ordinary ICOCA/Suica IC card with no pass at all remains a perfectly rational choice for most two-day visits.',
          },
          {
            title: 'The meipuru-pu loop bus — free with a JR Pass',
            icon: 'bus',
            content: 'The meipuru-pu is a tourist loop bus run by JR Bus that circles Hiroshima\'s sights from the Shinkansen exit of Hiroshima Station: Peace Park, the A-Bomb Dome, the castle area, Shukkeien Garden and the museum district, spread across three color-coded routes (Orange, Green and Lemon) with buses every 15-30 minutes and English announcements.\n\nFares are ¥240 per ride or ¥600 for a day pass — but the headline feature is that it\'s completely free with a Japan Rail Pass or eligible JR West regional passes; just show your pass to the driver as you board. If you\'re on a JR Pass, the meipuru-pu quietly replaces most tram journeys you\'d otherwise pay for, and it solves the slightly awkward 2km gap between Hiroshima Station and Peace Park without a transfer.\n\nIts limitation: it\'s a loop, so some return journeys go the long way round, and it stops running early evening. Treat it as your daytime sightseeing shuttle and fall back on trams (¥240) or a taxi at night.',
            tourCard: {
              slug: 'hiroshima-walking-tour',
              title: 'Hiroshima Untold: Why the Atomic Bomb Fell — Guided History Walk',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 33.14',
              duration: '2.5 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830475/asiabylocals/tours/hiroshima-hiroshima-untold-why-the-atomic-bomb-fell-guided-history-walk/img0.jpg',
            },
          },
          {
            title: 'Getting to Miyajima: JR ferry vs Matsudai vs the direct boat',
            icon: 'ship',
            content: 'Miyajima requires a short sea crossing from Miyajimaguchi pier, and you have two near-identical ferry choices: the JR West Miyajima Ferry and the Matsudai (Miyajima Matsudai Kisen) ferry. Both take about 10 minutes, both charge ¥200 one way for adults, both leave every 10-15 minutes from the same terminal building. The differences that matter: the JR ferry is covered by the Japan Rail Pass, and on daytime outbound crossings it swings wide toward the great torii for the classic photo approach; the Matsudai ferry is the one included in Hiroden\'s ¥1,000 tram+ferry pass. Pick whichever your pass covers; with no pass, take JR outbound for the torii view.\n\nSince autumn 2023, everyone entering the island also pays a ¥100 Miyajima visitor tax, collected separately at the terminal (cash; ¥500 for a one-year pass; small children exempt). Budget for it and don\'t be surprised by the extra gate.\n\nThe third option is Aqua Net\'s \'World Heritage Sea Route\': a direct 45-minute boat from the Motoyasu River pier beside Peace Park straight to Miyajima, roughly every 30 minutes from 8:30am to 5:30pm, at ¥2,400 one way / ¥4,400 return. It\'s six times the train+ferry price, but it links the A-Bomb Dome and Itsukushima Shrine — two World Heritage Sites — in a single scenic ride with zero transfers, and seats should be reserved rather than counted on at the pier. Worth doing once, in one direction.',
            tourCard: {
              slug: 'miyajima-guided-tour',
              title: 'Hiroshima & Miyajima in One Day: A-Bomb Dome & Itsukushima with a Local',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 237.26',
              duration: '7 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830513/asiabylocals/tours/hiroshima-hiroshima-miyajima-in-one-day-a-bomb-dome-itsukushima-with-a-local/img0.jpg',
            },
          },
          {
            title: 'IC cards, taxis and a note on the JR Pass',
            icon: 'credit-card',
            content: 'Get an IC card if you don\'t have one — ICOCA is the local JR West card, but Suica and Pasmo from Tokyo work identically here. It taps onto trams, JR trains, city buses, both Miyajima ferries and convenience-store payments, and it removes all fare-fumbling from your trip. Mobile Suica on a phone works too.\n\nTaxis are plentiful, metered and honest, with flagfall around ¥700 — fine for a late-night return or a rain dash, unnecessary otherwise. The city center is genuinely walkable: Peace Park to Hondori to Okonomimura is a 15-minute stroll.\n\nJR Pass holders, here\'s your Hiroshima cheat sheet: covered — Shinkansen to/from the city, Sanyo Line to Miyajimaguchi, the JR Miyajima ferry, and the meipuru-pu loop bus. Not covered — Hiroden trams, the Matsudai ferry, the ¥100 Miyajima tax, and the Aqua Net direct boat. Structured right, a JR Pass day trip to Miyajima can cost you exactly ¥100 out of pocket.',
          },
        ],
        faqs: [
          { q: 'How much does the Hiroshima tram cost?', a: 'A flat ¥240 per ride for adults (¥120 children) anywhere on the city network, paid by IC card tap or cash on exit. A one-day pass costs ¥700, or ¥1,000 including the Miyajima ferry — the latter is the best-value pass for a no-JR-Pass Miyajima day.' },
          { q: 'Does the JR Pass work in Hiroshima?', a: 'Yes, extensively: it covers the Shinkansen, the JR Sanyo Line to Miyajimaguchi, the JR Miyajima ferry, and the meipuru-pu sightseeing loop bus. It does not cover Hiroden trams, the ¥100 Miyajima visitor tax, or the Aqua Net direct boat.' },
          { q: 'Which ferry to Miyajima should I take — JR or Matsudai?', a: 'They\'re the same price (¥200), speed (10 minutes) and frequency. Take JR if you hold a JR Pass and for its torii-side outbound route in the daytime; take Matsudai if you bought Hiroden\'s ¥1,000 tram+ferry day pass. Everyone pays the ¥100 island visitor tax on top.' },
          { q: 'What\'s the fastest way from Hiroshima Station to the Peace Park?', a: 'The meipuru-pu loop bus (free with a JR Pass) or tram Line 2/6 to Genbaku Dome-mae, both around 15-20 minutes. A taxi does it in under 10 minutes for roughly ¥1,500.' },
          { q: 'Do I need to book any transport in advance?', a: 'Only the Aqua Net Peace Park-Miyajima direct boat, which should be reserved ahead. Trams, JR trains, loop buses and both Miyajimaguchi ferries are turn-up-and-go.' },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How much does the Hiroshima tram cost?", "acceptedAnswer": {"@type": "Answer", "text": "A flat ¥240 per ride for adults (¥120 children) anywhere on the city network, paid by IC card tap or cash on exit. A one-day pass costs ¥700, or ¥1,000 including the Miyajima ferry — the latter is the best-value pass for a no-JR-Pass Miyajima day."}}, {"@type": "Question", "name": "Does the JR Pass work in Hiroshima?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, extensively: it covers the Shinkansen, the JR Sanyo Line to Miyajimaguchi, the JR Miyajima ferry, and the meipuru-pu sightseeing loop bus. It does not cover Hiroden trams, the ¥100 Miyajima visitor tax, or the Aqua Net direct boat."}}, {"@type": "Question", "name": "Which ferry to Miyajima should I take — JR or Matsudai?", "acceptedAnswer": {"@type": "Answer", "text": "They're the same price (¥200), speed (10 minutes) and frequency. Take JR if you hold a JR Pass and for its torii-side outbound route in the daytime; take Matsudai if you bought Hiroden's ¥1,000 tram+ferry day pass. Everyone pays the ¥100 island visitor tax on top."}}, {"@type": "Question", "name": "What's the fastest way from Hiroshima Station to the Peace Park?", "acceptedAnswer": {"@type": "Answer", "text": "The meipuru-pu loop bus (free with a JR Pass) or tram Line 2/6 to Genbaku Dome-mae, both around 15-20 minutes. A taxi does it in under 10 minutes for roughly ¥1,500."}}, {"@type": "Question", "name": "Do I need to book any transport in advance?", "acceptedAnswer": {"@type": "Answer", "text": "Only the Aqua Net Peace Park-Miyajima direct boat, which should be reserved ahead. Trams, JR trains, loop buses and both Miyajimaguchi ferries are turn-up-and-go."}}]}]},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830475/asiabylocals/tours/hiroshima-hiroshima-untold-why-the-atomic-bomb-fell-guided-history-walk/img0.jpg',
      };

        case 'peace-memorial-park-guide':
            return {
        title: 'Hiroshima Peace Memorial Park: A Visitor\'s Guide to the Museum, A-Bomb Dome and Monuments',
        seoTitle: 'Peace Memorial Park Guide, Hiroshima',
        description: 'Complete guide to Hiroshima Peace Memorial Park: museum hours and the ¥200 ticket, A-Bomb Dome, Children\'s Peace Monument, Cenotaph, etiquette and timing.',
        fastFacts: [
          { icon: 'ticket', label: 'Museum admission', value: '¥200 adult / ¥100 high school' },
          { icon: 'clock', label: 'Museum hours', value: '7:30am-7pm (Aug to 8pm, Dec-Feb to 6pm)' },
          { icon: 'landmark', label: 'A-Bomb Dome', value: 'Free, open 24h, UNESCO since 1996' },
          { icon: 'hourglass', label: 'Time needed', value: '3+ hours (park + museum)' },
        ],
        sections: [
          {
            title: 'What this place is, and how much time to allow',
            icon: 'landmark',
            content: 'Peace Memorial Park occupies the delta island that was, until 8:15am on August 6, 1945, Hiroshima\'s busiest downtown district. The atomic bomb detonated almost directly overhead, and rather than rebuild on the site, the city turned it into a park dedicated to the memory of the victims and the abolition of nuclear weapons. Today it holds the A-Bomb Dome, the Peace Memorial Museum, the Cenotaph, and dozens of smaller monuments among the trees.\n\nAllow a minimum of three hours: roughly 45-60 minutes walking the park and its monuments, 1.5-2 hours inside the museum, and some quiet time after — most visitors find they need it. If you can only give it half a day of your Japan trip, give it the morning; the museum opens at 7:30am, remarkably early, and the park at 8am is calm in a way it won\'t be again until dusk.\n\nGo in knowing the museum is genuinely harrowing. It presents the human consequences of the bombing through personal artifacts — a child\'s tricycle, burned school uniforms, watches stopped at 8:15 — and it does not soften them. It is also, by broad consensus of people who visit, one of the most important museum experiences in the world. Bring children at your own judgment; Japanese school groups attend from elementary age.',
            tourCard: {
              slug: 'hiroshima-walking-tour',
              title: 'Hiroshima Untold: Why the Atomic Bomb Fell — Guided History Walk',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 33.14',
              duration: '2.5 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830475/asiabylocals/tours/hiroshima-hiroshima-untold-why-the-atomic-bomb-fell-guided-history-walk/img0.jpg',
            },
          },
          {
            title: 'The Peace Memorial Museum: hours, tickets and how to visit well',
            icon: 'ticket',
            content: 'Admission is ¥200 for adults, ¥100 for high school students, and free for junior high age and under — a deliberately nominal price so cost is never a barrier. Opening hours run 7:30am to 7:00pm from March through November (extended to 8:00pm in August, around the anniversary), and 7:30am to 6:00pm December through February, with last entry 30 minutes before closing. The museum closes only December 30-31.\n\nCrowds are real: midday queues can stretch long in spring and around August 6, and entry is metered when the building fills. The fix is simple — arrive at or near 7:30am, or book a timed ticket online in advance, and you\'ll walk the exhibits at your own pace. Aim to move through the East Building\'s historical context first, then the Main Building\'s personal-effects galleries, which are the emotional core.\n\nAudio guides are available in multiple languages and worth the small extra fee. Photography is permitted in most areas but flash is not; many visitors find they stop taking photos partway through anyway.',
            tourCard: {
              slug: 'hiroshima-walking-tour',
              title: 'Hiroshima Untold: Why the Atomic Bomb Fell — Guided History Walk',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 33.14',
              duration: '2.5 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830475/asiabylocals/tours/hiroshima-hiroshima-untold-why-the-atomic-bomb-fell-guided-history-walk/img0.jpg',
            },
          },
          {
            title: 'The A-Bomb Dome',
            icon: 'building',
            content: 'The Genbaku (A-Bomb) Dome, across the Motoyasu River at the park\'s north end, was the Hiroshima Prefectural Industrial Promotion Hall — a handsome 1915 European-style building whose position almost directly beneath the detonation point meant its walls partially survived the near-vertical blast while everyone inside died instantly. The city chose to preserve the ruin exactly as it stood, and it became a UNESCO World Heritage Site in 1996.\n\nYou view it from outside a low fence; there is no entry, no ticket, and no closing time. The classic vantage points are across the river on the park side, from Aioi Bridge (the T-shaped bridge that was the bomb\'s actual aiming point), and up close on the east bank. It\'s illuminated at night, and an evening visit — with the ruin lit against the dark river — is worth building into your plans even if you saw it by day.\n\nVolunteer guides, some of them second- and third-generation hibakusha (survivor families), often gather near the Dome offering free English explanations. Taking twenty minutes with one is one of the most valuable free things you can do in Japan.',
            tourCard: {
              slug: 'hiroshima-walking-tour',
              title: 'Hiroshima Untold: Why the Atomic Bomb Fell — Guided History Walk',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 33.14',
              duration: '2.5 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830475/asiabylocals/tours/hiroshima-hiroshima-untold-why-the-atomic-bomb-fell-guided-history-walk/img0.jpg',
            },
          },
          {
            title: 'The Children\'s Peace Monument, Cenotaph and Flame of Peace',
            icon: 'bird',
            content: 'Walking south from the Dome into the park proper, you reach the Children\'s Peace Monument — a bronze statue of a girl holding aloft a folded crane, inspired by Sadako Sasaki, who was two when the bomb fell and died of radiation-induced leukemia at twelve after famously folding paper cranes in hospital. The glass cases around it hold millions of cranes sent from schoolchildren worldwide, replenished continuously; ringing the monument\'s bell is welcomed.\n\nFurther south stands the Memorial Cenotaph, a concrete saddle-shaped arch sheltering a stone chest with the register of every known victim\'s name — over 340,000 names now, with new ones added each August 6 as survivors pass away. Stand directly before it: the arch perfectly frames the Flame of Peace and, beyond it, the A-Bomb Dome in a single axis. The flame has burned since 1964 and will be extinguished, by design, only when the last nuclear weapon on earth is dismantled.\n\nQuieter corners deserve a few minutes too: the burial mound holding the ashes of tens of thousands of unidentified victims, the Korean victims\' memorial, and the underground National Peace Memorial Hall, which is free and holds survivor testimonies.',
            tourCard: {
              slug: 'hiroshima-walking-tour',
              title: 'Hiroshima Untold: Why the Atomic Bomb Fell — Guided History Walk',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 33.14',
              duration: '2.5 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830475/asiabylocals/tours/hiroshima-hiroshima-untold-why-the-atomic-bomb-fell-guided-history-walk/img0.jpg',
            },
          },
          {
            title: 'Etiquette, and how to fit the park into your day',
            icon: 'heart-handshake',
            content: 'The park is both a public green space and a functioning memorial where survivors and bereaved families still come to pray. The etiquette that follows from that is mostly common sense: keep voices moderate near the Cenotaph and monuments, don\'t picnic or play music beside them, don\'t pose playfully (peace signs, jumping shots) in front of the Cenotaph or Dome, and ask before photographing anyone praying. Drones are prohibited. Smoking is restricted to designated areas.\n\nGetting there is easy: tram Lines 2 and 6 stop at Genbaku Dome-mae directly beside the Dome (¥240 flat fare from the station, 15-20 minutes), and all three meipuru-pu loop-bus routes serve the park — free with a JR Pass. From Hondori\'s shopping arcade it\'s a five-minute walk.\n\nSequence suggestion: start at the Dome, walk the park\'s monuments north to south, then finish in the museum — the reverse order leaves you processing the museum\'s weight while sightseeing, which serves neither. Afterward, the riverside cafes north of Aioi Bridge or the Hondori arcade give you somewhere gentle to land. Guided peace walks with local storytellers add survivor-family perspectives that plaques can\'t.',
            tourCard: {
              slug: 'hiroshima-walking-tour',
              title: 'Hiroshima Untold: Why the Atomic Bomb Fell — Guided History Walk',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 33.14',
              duration: '2.5 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830475/asiabylocals/tours/hiroshima-hiroshima-untold-why-the-atomic-bomb-fell-guided-history-walk/img0.jpg',
            },
          },
        ],
        faqs: [
          { q: 'How much does the Hiroshima Peace Memorial Museum cost?', a: '¥200 for adults, ¥100 for high school students, free for junior high students and younger. It opens at 7:30am daily (closing 7pm March-November, 8pm in August, 6pm December-February; last entry 30 minutes before close).' },
          { q: 'How long do I need at Peace Memorial Park?', a: 'Three hours minimum: 45-60 minutes for the park and monuments, 1.5-2 hours in the museum, plus decompression time. Arriving when the museum opens at 7:30am is the best way to avoid queues.' },
          { q: 'Can you go inside the A-Bomb Dome?', a: 'No — it\'s preserved as a fenced ruin viewed from outside, free and accessible 24 hours. The best views are from across the Motoyasu River, from Aioi Bridge, and lit up at night.' },
          { q: 'Is the museum appropriate for children?', a: 'It\'s graphic and emotionally heavy — it shows the human toll honestly. Japanese school groups visit from elementary age with preparation. Use your judgment; the park and monuments themselves are suitable for all ages.' },
          { q: 'Do I need to book museum tickets in advance?', a: 'Not required, but timed online tickets are recommended for spring, holidays and early August, when midday entry is metered and queues form. Going right at 7:30am opening usually removes the problem entirely.' },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How much does the Hiroshima Peace Memorial Museum cost?", "acceptedAnswer": {"@type": "Answer", "text": "¥200 for adults, ¥100 for high school students, free for junior high students and younger. It opens at 7:30am daily (closing 7pm March-November, 8pm in August, 6pm December-February; last entry 30 minutes before close)."}}, {"@type": "Question", "name": "How long do I need at Peace Memorial Park?", "acceptedAnswer": {"@type": "Answer", "text": "Three hours minimum: 45-60 minutes for the park and monuments, 1.5-2 hours in the museum, plus decompression time. Arriving when the museum opens at 7:30am is the best way to avoid queues."}}, {"@type": "Question", "name": "Can you go inside the A-Bomb Dome?", "acceptedAnswer": {"@type": "Answer", "text": "No — it's preserved as a fenced ruin viewed from outside, free and accessible 24 hours. The best views are from across the Motoyasu River, from Aioi Bridge, and lit up at night."}}, {"@type": "Question", "name": "Is the museum appropriate for children?", "acceptedAnswer": {"@type": "Answer", "text": "It's graphic and emotionally heavy — it shows the human toll honestly. Japanese school groups visit from elementary age with preparation. Use your judgment; the park and monuments themselves are suitable for all ages."}}, {"@type": "Question", "name": "Do I need to book museum tickets in advance?", "acceptedAnswer": {"@type": "Answer", "text": "Not required, but timed online tickets are recommended for spring, holidays and early August, when midday entry is metered and queues form. Going right at 7:30am opening usually removes the problem entirely."}}]}]},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830475/asiabylocals/tours/hiroshima-hiroshima-untold-why-the-atomic-bomb-fell-guided-history-walk/img0.jpg',
      };

        case 'miyajima-island-guide':
            return {
        title: 'Miyajima Island Guide: The Floating Torii, Itsukushima Shrine, Mt. Misen and the Deer',
        seoTitle: 'Miyajima Island Guide (2026)',
        description: 'Everything for a Miyajima day: ferry costs, tide timing for the floating torii, Itsukushima Shrine hours and fees, the Mt. Misen ropeway, deer, oysters and momiji manju.',
        fastFacts: [
          { icon: 'ship', label: 'Ferry', value: '10 min, ¥200 one way + ¥100 island tax' },
          { icon: 'waves', label: 'Tide rule', value: 'Floats >250cm; walkable <100cm' },
          { icon: 'torii-gate', label: 'Shrine entry', value: '¥300, from 6:30am' },
          { icon: 'mountain', label: 'Misen ropeway', value: '¥2,000 return + 30-min summit hike' },
        ],
        sections: [
          {
            title: 'Getting there: ferries, costs and the ¥100 island tax',
            icon: 'ship',
            content: 'Miyajima (officially Itsukushima) sits in the Seto Inland Sea about an hour from central Hiroshima. The standard route: JR Sanyo Line from Hiroshima Station to Miyajimaguchi (about 28 minutes, JR Pass covered) or Hiroden tram Line 2 (about 70 minutes, ¥240), then a 10-minute ferry crossing. Two ferry companies run side by side from the same terminal — JR West Miyajima Ferry and Matsudai — both ¥200 one way, both every 10-15 minutes from early morning until around 10pm. JR Pass holders ride the JR boat free, and its daytime outbound sailings detour toward the great torii for the classic arrival view.\n\nSince October 2023, every visitor also pays a ¥100 Miyajima visitor tax on entry, collected at the terminal — keep a coin handy, as it\'s cash-based, or buy the ¥500 annual pass if you\'ll return.\n\nThe scenic alternative is Aqua Net\'s World Heritage Sea Route, a direct 45-minute boat from the Peace Park pier to Miyajima (¥2,400 one way, roughly half-hourly 8:30am-5:30pm, reserve ahead). Splurge-worthy in one direction; take the train back.',
            tourCard: {
              slug: 'miyajima-guided-tour',
              title: 'Hiroshima & Miyajima in One Day: A-Bomb Dome & Itsukushima with a Local',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 237.26',
              duration: '7 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830513/asiabylocals/tours/hiroshima-hiroshima-miyajima-in-one-day-a-bomb-dome-itsukushima-with-a-local/img0.jpg',
            },
          },
          {
            title: 'The floating torii and the tide table that rules your day',
            icon: 'waves',
            content: 'Miyajima\'s great torii — the vermilion gate standing in the sea before Itsukushima Shrine — is Japan\'s most photographed view, but what you actually see depends entirely on the tide. Two numbers matter: above roughly 250cm of tide, the gate and shrine \'float\' on the water; below about 100cm, the seabed dries out and you can walk across the sand to stand under the 16-meter gate and touch its camphor-wood legs, barnacles and all.\n\nHigh and low tide alternate roughly every six hours and shift about 50 minutes later each day, so many full-day visits catch both states — genuinely the ideal Miyajima experience. Check a Miyajima tide table for your exact date before you fix ferry times, and plan the shrine (and photos) around high water, with the walk-out at low water.\n\nAn honest take on the debate: high tide is the postcard and the reason the shrine exists as it does; low tide is the more memorable physical experience, especially for kids. If your schedule forces a choice, choose whichever state occurs in soft morning or late-afternoon light over a midday version of the other. For something entirely different, sea-kayak tours paddle directly beneath the torii at high water — the one way to see the floating gate from sea level.',
            tourCard: {
              slug: 'miyajima-heritage-tour',
              title: 'Miyajima Great Torii Kayak Tour: Paddle a World Heritage Bay',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 124.28',
              duration: '2 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830558/asiabylocals/tours/hiroshima-miyajima-great-torii-kayak-tour-paddle-a-world-heritage-bay/img0.jpg',
            },
          },
          {
            title: 'Itsukushima Shrine: hours, fees and what you\'re looking at',
            icon: 'torii-gate',
            content: 'Itsukushima Shrine, founded in the 6th century and rebuilt in its present pier-and-corridor form in the 12th century under Taira no Kiyomori, is built over the water because the whole island was held sacred — commoners historically couldn\'t set foot on it, so they worshipped from structures above the sea. The shrine, with the torii, has been a UNESCO World Heritage Site since 1996.\n\nAdmission is ¥300 for adults (¥200 high school, ¥100 elementary/junior high), or ¥500 combined with the Treasure Hall. It opens at 6:30am year-round, closing 6:00pm from March to mid-October, 5:30pm mid-October through November, and 5:00pm in winter. Early morning — before the day-trip wave lands around 10am — is when the vermilion corridors are quiet and the light is best.\n\nBeyond the main shrine, don\'t skip: the Five-Storied Pagoda and the vast wooden hall of Senjokaku (\'pavilion of 1,000 mats\', ¥100) on the hill above, and Daisho-in temple at the foot of Mt. Misen — Miyajima\'s most atmospheric temple and inexplicably uncrowded.',
            tourCard: {
              slug: 'miyajima-guided-tour',
              title: 'Hiroshima & Miyajima in One Day: A-Bomb Dome & Itsukushima with a Local',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 237.26',
              duration: '7 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830513/asiabylocals/tours/hiroshima-hiroshima-miyajima-in-one-day-a-bomb-dome-itsukushima-with-a-local/img0.jpg',
            },
          },
          {
            title: 'Mt. Misen: ropeway or hike',
            icon: 'mountain',
            content: 'Mt. Misen (535m) is Miyajima\'s sacred mountain, and its summit panorama over the island-studded Seto Inland Sea is the second-best reason to come. The Miyajima Ropeway runs from Momijidani Park in two stages to Shishiiwa Station (9:00am-5:00pm, last ascent 4:30pm; ¥2,000 round trip adult, ¥1,000 child). Crucial detail most visitors miss: from the top ropeway station it is still a genuine 30-minute uphill hike each way to the true summit, past the Reikado Hall where a sacred flame has reputedly burned for over 1,200 years (it lit Hiroshima\'s Flame of Peace). Wear real shoes and carry water.\n\nHikers can skip the ropeway entirely: the Momijidani, Daisho-in and Omoto courses each take roughly 1.5-2 hours up. The Daisho-in course is the most rewarding, with stone steps, statuary and sea views most of the way.\n\nBudget half a day for Misen all-in (queue, ropeway, summit hike, descent). In peak season the ropeway queue can add 30-60 minutes each way — one more argument for arriving on the island early. Last descent is 5:30pm; miss it and you\'re hiking down in fading light.',
            tourCard: {
              slug: 'miyajima-guided-tour',
              title: 'Hiroshima & Miyajima in One Day: A-Bomb Dome & Itsukushima with a Local',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 237.26',
              duration: '7 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830513/asiabylocals/tours/hiroshima-hiroshima-miyajima-in-one-day-a-bomb-dome-itsukushima-with-a-local/img0.jpg',
            },
          },
          {
            title: 'Deer, oysters, momiji manju — and why you should stay past sunset',
            icon: 'utensils',
            content: 'Miyajima\'s several hundred wild sika deer roam the streets freely and have zero fear of humans. They\'re charming and photogenic, and they will eat your map, ferry ticket or shopping bag given half a second — keep paper out of reach and don\'t feed them; it\'s discouraged for their health and your fingers.\n\nEating your way down Omotesando shopping street is half the day\'s fun. The island specialties: grilled oysters in the shell (Hiroshima Bay farms Japan\'s biggest harvest; stalls sell two-piece servings, best October-March), anago-meshi (conger eel over rice — the venerable Ueno by Miyajimaguchi station is the famous one), and momiji manju, the maple-leaf-shaped cakes filled with red bean, custard or chocolate, sold warm off the machines for around ¥100-150 apiece. Get the age-momiji — deep-fried on a stick — at least once.\n\nFinally, the island\'s best-kept non-secret: stay for evening, or better, overnight in a ryokan. The day-trip crowds evaporate by 5pm, the torii is illuminated after dusk, and the lantern-lit shrine approach with deer drifting through it feels like a different island. Ferries run late enough (roughly 10pm) that even day-trippers can linger for the lights.',
            tourCard: {
              slug: 'hiroshima-evening-tour',
              title: 'Hiroshima After Dark: Food & Culture Evening Walk with Local Dinner',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 132.01',
              duration: '3 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830500/asiabylocals/tours/hiroshima-hiroshima-after-dark-food-culture-evening-walk-with-local-dinner/img0.jpg',
            },
          },
        ],
        faqs: [
          { q: 'How much does a Miyajima day trip cost from Hiroshima?', a: 'Transport can be as little as ¥100 with a JR Pass (just the visitor tax) or about ¥1,000-1,100 without one (tram/train + ¥200 ferry each way + ¥100 tax). Add ¥300 for Itsukushima Shrine and ¥2,000 if you ride the Mt. Misen ropeway.' },
          { q: 'When can I walk out to the floating torii?', a: 'When the tide drops below about 100cm — the sand flats open and you can walk to the gate\'s base. It appears to float above roughly 250cm. The two states alternate about six hours apart; check a Miyajima tide table for your date and plan around it.' },
          { q: 'What are Itsukushima Shrine\'s hours and entry fee?', a: 'Open from 6:30am daily; closes 6pm March to mid-October, 5:30pm in late autumn, 5pm in winter. Entry is ¥300 (¥500 combined with the Treasure Hall). Go before 10am to beat the day-trip wave.' },
          { q: 'Is the Mt. Misen ropeway worth ¥2,000?', a: 'Yes if you want the Seto Inland Sea panorama without a 2-hour climb — but know the summit is still a 30-minute hike beyond the top station. Fit hikers can take the Daisho-in trail up in about 2 hours and pocket the fare.' },
          { q: 'Should I stay overnight on Miyajima?', a: 'If your budget allows, it\'s the single best upgrade to a Hiroshima trip. After 5pm the crowds leave, the torii is lit after dark, and mornings on the island are serene. Even without staying, linger past sunset — ferries run until around 10pm.' },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How much does a Miyajima day trip cost from Hiroshima?", "acceptedAnswer": {"@type": "Answer", "text": "Transport can be as little as ¥100 with a JR Pass (just the visitor tax) or about ¥1,000-1,100 without one (tram/train + ¥200 ferry each way + ¥100 tax). Add ¥300 for Itsukushima Shrine and ¥2,000 if you ride the Mt. Misen ropeway."}}, {"@type": "Question", "name": "When can I walk out to the floating torii?", "acceptedAnswer": {"@type": "Answer", "text": "When the tide drops below about 100cm — the sand flats open and you can walk to the gate's base. It appears to float above roughly 250cm. The two states alternate about six hours apart; check a Miyajima tide table for your date and plan around it."}}, {"@type": "Question", "name": "What are Itsukushima Shrine's hours and entry fee?", "acceptedAnswer": {"@type": "Answer", "text": "Open from 6:30am daily; closes 6pm March to mid-October, 5:30pm in late autumn, 5pm in winter. Entry is ¥300 (¥500 combined with the Treasure Hall). Go before 10am to beat the day-trip wave."}}, {"@type": "Question", "name": "Is the Mt. Misen ropeway worth ¥2,000?", "acceptedAnswer": {"@type": "Answer", "text": "Yes if you want the Seto Inland Sea panorama without a 2-hour climb — but know the summit is still a 30-minute hike beyond the top station. Fit hikers can take the Daisho-in trail up in about 2 hours and pocket the fare."}}, {"@type": "Question", "name": "Should I stay overnight on Miyajima?", "acceptedAnswer": {"@type": "Answer", "text": "If your budget allows, it's the single best upgrade to a Hiroshima trip. After 5pm the crowds leave, the torii is lit after dark, and mornings on the island are serene. Even without staying, linger past sunset — ferries run until around 10pm."}}]}]},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830475/asiabylocals/tours/hiroshima-hiroshima-untold-why-the-atomic-bomb-fell-guided-history-walk/img0.jpg',
      };

        case 'hiroshima-food-guide':
            return {
        title: 'What to Eat in Hiroshima: Okonomiyaki, Oysters, Tsukemen and Momiji Manju',
        seoTitle: 'Hiroshima Food Guide: What to Eat',
        description: 'Hiroshima\'s food, honestly ranked: layered okonomiyaki (and how it differs from Osaka\'s), Okonomimura, winter oysters, spicy tsukemen and momiji manju.',
        fastFacts: [
          { icon: 'chef-hat', label: 'Signature dish', value: 'Layered okonomiyaki with soba, ¥800-1,500' },
          { icon: 'store', label: 'Okonomimura', value: '24 stalls, 11am-10pm, cash preferred' },
          { icon: 'shell', label: 'Oyster season', value: 'Oct-Mar, peak Dec-Feb' },
          { icon: 'cookie', label: 'Sweet souvenir', value: 'Momiji manju, ~¥100-150 apiece' },
        ],
        sections: [
          {
            title: 'Hiroshima-style okonomiyaki: layered, not mixed',
            icon: 'chef-hat',
            content: 'Start with the essential distinction, because locals genuinely care: Osaka-style okonomiyaki mixes its ingredients into one batter and grills it as a thick pancake. Hiroshima-style is layered — a paper-thin crepe of batter, then a mountain of shredded cabbage, bean sprouts, pork belly, and crucially a layer of grilled soba (or udon) noodles, all crowned with a thin fried egg and painted with sweet-savory sauce. The cook flips and compresses the stack on the teppan in front of you over 15-20 minutes; the result is lighter, crispier and more textured than the Osaka version. Never call it \'Hiroshima-yaki\' to a local, and absolutely never say it\'s a variant of Osaka\'s — here it is simply okonomiyaki, and the city has well over a thousand shops serving it.\n\nHow to eat it: properly, straight off the teppan griddle with a hera (metal spatula), cutting bites from the edge. Counter seats facing the grill are the best seats in the house.\n\nExpect to pay ¥800-1,500 for a standard pork-and-soba version, up to around ¥1,800-2,200 with premium toppings — the local move is adding fresh Hiroshima oysters in winter, or ika-ten (fried squid crackers) year-round for crunch.',
            tourCard: {
              slug: 'hiroshima-evening-tour',
              title: 'Hiroshima After Dark: Food & Culture Evening Walk with Local Dinner',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 132.01',
              duration: '3 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830500/asiabylocals/tours/hiroshima-hiroshima-after-dark-food-culture-evening-walk-with-local-dinner/img0.jpg',
            },
          },
          {
            title: 'Okonomimura and where to actually eat it',
            icon: 'store',
            content: 'The famous starting point is Okonomimura (\'Okonomiyaki Village\') in Shintenchi, just off Hondori: a purpose-built food theme park stacking 24 independent okonomiyaki stalls across floors 2-4 of one building, open 11am to 10pm. Each stall seats a dozen-odd people around its own teppan; wander until a grandmother waves you in. It\'s touristy, yes, but tourists and locals genuinely coexist here, quality is consistently good, and for a first-timer the atmosphere — smoke, sizzle, sauce in the air — is the point. Bring cash; many stalls don\'t take cards, and no one takes reservations.\n\nBeyond Okonomimura, two honest recommendations: Hassei and Nagata-ya (near the Peace Park) are the standing-queue favorites with English menus, while the third floor of Hiroshima Station\'s ekie complex hosts a row of respected shops — ideal before a Shinkansen. Serious eaters can detour to Micchan Sohonten, founded by the man widely credited with codifying the modern layered style after the war, when okonomiyaki grew out of cheap \'issen yoshoku\' crepes that fed a devastated city. That history — a survival food that became civic identity — is why this dish matters here.\n\nIf you want the full story with your dinner, a guided evening food walk through Shintenchi\'s alleys pairs the dish with its history better than any menu can.',
            tourCard: {
              slug: 'hiroshima-evening-tour',
              title: 'Hiroshima After Dark: Food & Culture Evening Walk with Local Dinner',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 132.01',
              duration: '3 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830500/asiabylocals/tours/hiroshima-hiroshima-after-dark-food-culture-evening-walk-with-local-dinner/img0.jpg',
            },
          },
          {
            title: 'Oysters: Japan\'s oyster capital',
            icon: 'shell',
            content: 'Hiroshima Bay produces more oysters than every other Japanese prefecture combined — the calm, nutrient-rich Seto Inland Sea and 450 years of cultivation history have made kaki the region\'s signature seafood. Season runs October to March with the December-February peak, when the oysters are at their creamiest; that\'s when to plan an oyster-focused visit.\n\nHow to eat them, in rough order of merit: kaki-yaki (grilled in the shell over charcoal — the smoky seawater hit is the definitive version, best at the rustic stalls on Miyajima and at winter oyster huts), kaki-furai (panko-fried, standard winter teishoku lunch), oyster okonomiyaki (Hiroshima\'s two icons in one), dote-nabe (oysters simmered in miso hot pot), and raw — though note Japanese oyster culture leans cooked, and many casual places don\'t serve them raw at all.\n\nOn Miyajima, Kakiya on Omotesando is the well-known specialist; in the city, the riverside oyster boats and Ekinishi\'s izakaya alley do them well. Out of season you\'ll still find oysters on menus (some are farmed for summer), but the quality gap is real — if you\'re visiting in July, put your appetite elsewhere.',
            tourCard: {
              slug: 'hiroshima-evening-tour',
              title: 'Hiroshima After Dark: Food & Culture Evening Walk with Local Dinner',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 132.01',
              duration: '3 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830500/asiabylocals/tours/hiroshima-hiroshima-after-dark-food-culture-evening-walk-with-local-dinner/img0.jpg',
            },
          },
          {
            title: 'Tsukemen, anago and the rest of the local table',
            icon: 'soup',
            content: 'Hiroshima\'s second noodle obsession is tsukemen — but not the rich pork-broth Tokyo kind. Hiroshima-style tsukemen is cold: chilled noodles, a pile of cabbage and cucumber, boiled pork, and a fiery chili-laced soy dipping sauce whose heat you order by level, from timid to genuinely punishing. Bakudanya (\'bomb shop\') is the local chain that popularized it and a reliable first stop; a bowl runs under ¥1,000. It\'s at its best on a humid summer evening, exactly when okonomiyaki feels too heavy.\n\nAlso on the list: anago-meshi, saltwater conger eel grilled over rice — lighter and less fatty than freshwater unagi, and at its most famous at Ueno in Miyajimaguchi, where the century-old bento is worth the queue. Hiroshima ramen (shoyu-tonkotsu, thin noodles) is a solid late-night option, and the city\'s citrus pride — lemons from the Setouchi islands — shows up in everything from lemon sours to lemon-dressed karaage.\n\nDistricts to graze: Hondori and Shintenchi for okonomiyaki and izakaya, Nagarekawa for nightlife eating, Ekinishi (the alleys west of Hiroshima Station) for the young local izakaya scene.',
            tourCard: {
              slug: 'hiroshima-evening-tour',
              title: 'Hiroshima After Dark: Food & Culture Evening Walk with Local Dinner',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 132.01',
              duration: '3 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830500/asiabylocals/tours/hiroshima-hiroshima-after-dark-food-culture-evening-walk-with-local-dinner/img0.jpg',
            },
          },
          {
            title: 'Momiji manju and sweet souvenirs',
            icon: 'cookie',
            content: 'Momiji manju — soft castella-style cakes shaped like maple leaves, born on Miyajima in the early 1900s in homage to Momijidani\'s maples — are the region\'s inescapable sweet, and deservedly so. Classic filling is smooth red bean (koshian), but shops now run custard, chocolate, cheese, matcha and seasonal flavors; individual cakes cost roughly ¥100-150, and watching the automated griddle lines stamp them out in Miyajima\'s Omotesando shopfronts is free entertainment.\n\nTwo upgrades worth knowing. Age-momiji is a momiji manju battered and deep-fried on a stick, served hot — invented by Miyajima shop Kimura-ya and now the island\'s definitive walking snack. And nama-momiji is the modern refrigerated version with a soft mochi-like skin, a Hiroshima-only souvenir that travels well for a day or two.\n\nBoxed momiji manju from the big names (Nishiki-do, Yamadaya, Fujii-ya) are sold at Hiroshima Station and make the standard omiyage. Buy them last thing before your train — they\'re best within about a week — and grab one hot single cake for yourself while you wait.',
            tourCard: {
              slug: 'miyajima-guided-tour',
              title: 'Hiroshima & Miyajima in One Day: A-Bomb Dome & Itsukushima with a Local',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 237.26',
              duration: '7 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830513/asiabylocals/tours/hiroshima-hiroshima-miyajima-in-one-day-a-bomb-dome-itsukushima-with-a-local/img0.jpg',
            },
          },
        ],
        faqs: [
          { q: 'What\'s the difference between Hiroshima and Osaka okonomiyaki?', a: 'Osaka mixes everything into one batter; Hiroshima layers it — thin crepe, cabbage, pork, grilled soba noodles and a fried egg, built on the teppan. Hiroshima\'s version is crispier and includes noodles. Locals consider it simply \'okonomiyaki\', not a variant.' },
          { q: 'Is Okonomimura worth visiting or is it a tourist trap?', a: 'Worth it, especially for a first okonomiyaki. It\'s 24 independent stalls over three floors (11am-10pm), quality is consistently good, and the teppan-counter atmosphere is the experience. Bring cash. For a quieter alternative, try Nagata-ya near Peace Park or the shops in Hiroshima Station.' },
          { q: 'When is the best time to eat oysters in Hiroshima?', a: 'October to March, peaking December-February. Hiroshima is Japan\'s biggest oyster producer, and grilled-in-the-shell kaki-yaki at a Miyajima stall or winter oyster hut is the definitive way to try them.' },
          { q: 'How much should I budget for food in Hiroshima?', a: 'It\'s a cheap city to eat brilliantly in: okonomiyaki ¥800-1,500, Hiroshima tsukemen under ¥1,000, a grilled-oyster snack ¥500-800, momiji manju around ¥100-150 each. ¥3,000-4,000 a day covers excellent eating without trying.' },
          { q: 'What is Hiroshima-style tsukemen?', a: 'Cold noodles with cabbage and pork, dipped in a spicy chili-soy sauce — completely different from Tokyo\'s hot, thick tsukemen. You choose your chili level when ordering; Bakudanya is the classic local chain to try it.' },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What's the difference between Hiroshima and Osaka okonomiyaki?", "acceptedAnswer": {"@type": "Answer", "text": "Osaka mixes everything into one batter; Hiroshima layers it — thin crepe, cabbage, pork, grilled soba noodles and a fried egg, built on the teppan. Hiroshima's version is crispier and includes noodles. Locals consider it simply 'okonomiyaki', not a variant."}}, {"@type": "Question", "name": "Is Okonomimura worth visiting or is it a tourist trap?", "acceptedAnswer": {"@type": "Answer", "text": "Worth it, especially for a first okonomiyaki. It's 24 independent stalls over three floors (11am-10pm), quality is consistently good, and the teppan-counter atmosphere is the experience. Bring cash. For a quieter alternative, try Nagata-ya near Peace Park or the shops in Hiroshima Station."}}, {"@type": "Question", "name": "When is the best time to eat oysters in Hiroshima?", "acceptedAnswer": {"@type": "Answer", "text": "October to March, peaking December-February. Hiroshima is Japan's biggest oyster producer, and grilled-in-the-shell kaki-yaki at a Miyajima stall or winter oyster hut is the definitive way to try them."}}, {"@type": "Question", "name": "How much should I budget for food in Hiroshima?", "acceptedAnswer": {"@type": "Answer", "text": "It's a cheap city to eat brilliantly in: okonomiyaki ¥800-1,500, Hiroshima tsukemen under ¥1,000, a grilled-oyster snack ¥500-800, momiji manju around ¥100-150 each. ¥3,000-4,000 a day covers excellent eating without trying."}}, {"@type": "Question", "name": "What is Hiroshima-style tsukemen?", "acceptedAnswer": {"@type": "Answer", "text": "Cold noodles with cabbage and pork, dipped in a spicy chili-soy sauce — completely different from Tokyo's hot, thick tsukemen. You choose your chili level when ordering; Bakudanya is the classic local chain to try it."}}]}]},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830475/asiabylocals/tours/hiroshima-hiroshima-untold-why-the-atomic-bomb-fell-guided-history-walk/img0.jpg',
      };

        case 'hiroshima-day-trips':
            return {
        title: 'The Best Day Trips from Hiroshima, Honestly Ranked: Miyajima, Iwakuni, Rabbit Island and Sandankyo',
        seoTitle: 'Best Day Trips from Hiroshima',
        description: 'Hiroshima\'s day trips ranked honestly: Miyajima, Iwakuni\'s Kintai Bridge, Okunoshima Rabbit Island logistics and Sandankyo Gorge — which deserve your time.',
        fastFacts: [
          { icon: 'trophy', label: 'Top pick', value: 'Miyajima — a full day, always' },
          { icon: 'landmark', label: 'Best half-day', value: 'Kintai Bridge, ¥310 crossing' },
          { icon: 'rabbit', label: 'Rabbit Island', value: '~2h each way + ¥720 ferry' },
          { icon: 'trees', label: 'Sandankyo bus', value: '¥1,440, ~80 min, few departures' },
        ],
        sections: [
          {
            title: 'How we\'d rank them',
            icon: 'list-ordered',
            content: 'If you\'re deciding where your limited days go, here\'s our straight ranking: 1) Miyajima — unmissable, in a different class from everything else on this list; 2) Iwakuni\'s Kintai Bridge — the best half-day trip, low effort and high reward; 3) Okunoshima \'Rabbit Island\' — delightful if rabbits genuinely excite you, a long haul if they don\'t; 4) Sandankyo Gorge — superb for hikers in autumn, skippable otherwise.\n\nThe honest framework behind that ranking is time-cost versus payoff. Miyajima is 40-70 minutes away and world-class. Iwakuni is 45-60 minutes away for a genuine masterpiece of wooden engineering. Okunoshima costs you roughly four hours of round-trip travel for a two-to-three-hour experience. Sandankyo\'s public-transport access is thin enough (one well-timed bus a day) that it only makes sense as a deliberate choice, not a whim.\n\nOne structural tip: Iwakuni lies south-west of Hiroshima on the same JR Sanyo Line as Miyajimaguchi, so ambitious travelers combine Kintai Bridge in the morning with Miyajima in the afternoon and evening — a long but spectacular day.',
          },
          {
            title: 'Miyajima: the obvious number one',
            icon: 'torii-gate',
            content: 'We cover Miyajima fully in its own guide, so here\'s just the day-trip math. It\'s the easiest trip on this list — 28 minutes by JR train (or 70 by tram) to Miyajimaguchi plus a 10-minute, ¥200 ferry, with boats every 10-15 minutes and a ¥100 visitor tax on arrival — and the only one that belongs on every Hiroshima itinerary without qualification: the floating torii, Itsukushima Shrine (¥300), Mt. Misen\'s ropeway and summit views, street food and semi-tame deer add up to a full, varied day.\n\nGive it a whole day rather than an afternoon: the tide cycle means arriving early and leaving late often shows you both the floating gate and the walk-out-to-it seabed, and the island after 5pm — crowds gone, torii illuminated — is its best self.\n\nIf you\'ve somehow already done Miyajima, that\'s when the rest of this list gets interesting.',
            tourCard: {
              slug: 'miyajima-guided-tour',
              title: 'Hiroshima & Miyajima in One Day: A-Bomb Dome & Itsukushima with a Local',
              description: 'A top-rated Hiroshima experience, bookable directly through AsiaByLocals.',
              price: 'From USD 237.26',
              duration: '7 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830513/asiabylocals/tours/hiroshima-hiroshima-miyajima-in-one-day-a-bomb-dome-itsukushima-with-a-local/img0.jpg',
            },
          },
          {
            title: 'Iwakuni and the Kintai Bridge: best half-day',
            icon: 'landmark',
            content: 'The Kintai Bridge at Iwakuni, just over the border in Yamaguchi Prefecture, is a 200-meter series of five steep wooden arches leaping the Nishiki River — first built in 1673, engineered without a single load-bearing nail in its arch structure, and rebuilt to the original methods after a 1950 typhoon. Photos undersell it; walking up and over the humped arches, with the river running clear below, does not.\n\nLogistics are easy: JR Sanyo Line local train from Hiroshima to Iwakuni Station (about 45-50 minutes, covered by JR Pass), then a 20-minute bus to the bridge. (The Shinkansen to Shin-Iwakuni plus a 15-minute bus is faster on paper but rarely worth the transfer.) Crossing costs ¥310 round trip — note a fee revision takes effect September 1, 2026, so expect a slightly different price after that date. On the far bank, Kikko Park leads to a ropeway up to Iwakuni Castle and, in a nice one-two of local flavor, shops selling Iwakuni\'s oddball soft-serve stands with over 100 flavors.\n\nAllow four to five hours door to door. Best in cherry-blossom season, when the riverbanks bloom, and at dusk. This is the trip we recommend to anyone with one spare half-day after Miyajima.',
          },
          {
            title: 'Okunoshima \'Rabbit Island\': logistics first, cuteness second',
            icon: 'rabbit',
            content: 'Okunoshima is a small island in the Inland Sea overrun by several hundred feral rabbits that swarm visitors for food — the internet\'s \'Rabbit Island\'. It has a darker layer: the island was erased from maps while it secretly produced poison gas for the Japanese military from 1929 to 1945, and the ruined gas-storage bunkers and a small Poison Gas Museum still stand among the rabbits, an eerie and genuinely interesting combination.\n\nBe clear-eyed about the journey: from Hiroshima Station it\'s roughly 1.5 hours on the JR Kure Line to Tadanoumi (around ¥1,170; some routings via Mihara), a 5-minute walk to the port, then a 15-minute ferry — ¥720 round trip. All-in, budget about four hours of travel for the day. Ferries run roughly every 30-45 minutes; check the seasonal timetable and note the last boats back (early-to-mid evening, earlier in winter).\n\nBring rabbit food (pellets or vegetables) from a shop before the ferry — nothing is sold on the island, and hungry rabbits are the entire show. Verdict: a genuine delight for rabbit people, families and photographers, and the gas-museum history gives it unexpected weight; but if you have only two or three Hiroshima days, it shouldn\'t displace Miyajima or Iwakuni.',
          },
          {
            title: 'Sandankyo Gorge: for hikers, in the right season',
            icon: 'trees',
            content: 'Sandankyo is a designated Special Place of Scenic Beauty — a 13km ravine of clear green pools, cliffs and waterfalls in the mountains of Akiota, north-west of the city. The signature stretch involves short river crossings on tiny hand-pulled ferryboats (about ¥500) to reach the Kurobuchi and Sarutobi narrows, where the gorge closes to a few meters wide — a genuinely special sight, especially under November\'s red maples.\n\nThe catch is access. Buses leave from the Hiroshima Bus Center / Hiroshima Station: the express takes about 75-80 minutes (¥1,440 one way) but runs on a skeleton timetable — think one usable morning departure (around 8:18am from the station) and a mid-afternoon return (around 3:00pm), which fixes your day\'s shape for you. Local buses exist but take over two hours. Miss the return and you have a problem. Some facilities and trail sections also close for maintenance or storm damage, so check current conditions before committing.\n\nVerdict: in late October-November foliage, or midsummer when the city swelters and the gorge runs cool, this is a wonderful day for walkers — flat riverside trail, minimal fitness needed, almost no foreign tourists. Outside those windows, or if the bus times don\'t suit, spend the day on Miyajima\'s Mt. Misen trails instead. With a rental car, Sandankyo jumps a place in the rankings.',
          },
        ],
        faqs: [
          { q: 'What is the best day trip from Hiroshima?', a: 'Miyajima, without question — it\'s under an hour away and world-class. After that, Iwakuni\'s Kintai Bridge is the best half-day (45-50 minutes by JR train plus a short bus), followed by Okunoshima Rabbit Island and Sandankyo Gorge for more specific tastes.' },
          { q: 'How do I get to Rabbit Island (Okunoshima) from Hiroshima?', a: 'JR Kure Line to Tadanoumi Station (about 1.5 hours, ~¥1,170), walk 5 minutes to the port, then a 15-minute ferry (¥720 round trip). Buy rabbit food before boarding — none is sold on the island — and check the last return ferry time.' },
          { q: 'Is the Kintai Bridge worth a day trip?', a: 'Yes — it\'s the best effort-to-reward trip after Miyajima. About 45-50 minutes by JR local train to Iwakuni plus a 20-minute bus; crossing the five wooden arches costs ¥310 round trip (price revision from September 1, 2026). Half a day covers it, and it pairs well with Miyajima on the same line.' },
          { q: 'Can I combine Iwakuni and Miyajima in one day?', a: 'Yes — both sit on the JR Sanyo Line south-west of Hiroshima. Do Kintai Bridge in the morning (it\'s quick), then get off at Miyajimaguchi on the way back for Miyajima\'s afternoon, sunset and illuminated torii. It\'s a long day but one of the best in western Japan.' },
          { q: 'Is Sandankyo Gorge hard to reach without a car?', a: 'It\'s reachable but rigid: the express bus (about 75-80 min, ¥1,440) runs very few services — effectively one morning departure around 8:18am and a 3pm return. It\'s excellent for autumn foliage hiking; with flexible transport it\'s even better, but don\'t attempt it as a casual half-day.' },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is the best day trip from Hiroshima?", "acceptedAnswer": {"@type": "Answer", "text": "Miyajima, without question — it's under an hour away and world-class. After that, Iwakuni's Kintai Bridge is the best half-day (45-50 minutes by JR train plus a short bus), followed by Okunoshima Rabbit Island and Sandankyo Gorge for more specific tastes."}}, {"@type": "Question", "name": "How do I get to Rabbit Island (Okunoshima) from Hiroshima?", "acceptedAnswer": {"@type": "Answer", "text": "JR Kure Line to Tadanoumi Station (about 1.5 hours, ~¥1,170), walk 5 minutes to the port, then a 15-minute ferry (¥720 round trip). Buy rabbit food before boarding — none is sold on the island — and check the last return ferry time."}}, {"@type": "Question", "name": "Is the Kintai Bridge worth a day trip?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — it's the best effort-to-reward trip after Miyajima. About 45-50 minutes by JR local train to Iwakuni plus a 20-minute bus; crossing the five wooden arches costs ¥310 round trip (price revision from September 1, 2026). Half a day covers it, and it pairs well with Miyajima on the same line."}}, {"@type": "Question", "name": "Can I combine Iwakuni and Miyajima in one day?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — both sit on the JR Sanyo Line south-west of Hiroshima. Do Kintai Bridge in the morning (it's quick), then get off at Miyajimaguchi on the way back for Miyajima's afternoon, sunset and illuminated torii. It's a long day but one of the best in western Japan."}}, {"@type": "Question", "name": "Is Sandankyo Gorge hard to reach without a car?", "acceptedAnswer": {"@type": "Answer", "text": "It's reachable but rigid: the express bus (about 75-80 min, ¥1,440) runs very few services — effectively one morning departure around 8:18am and a 3pm return. It's excellent for autumn foliage hiking; with flexible transport it's even better, but don't attempt it as a casual half-day."}}]}]},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1787830475/asiabylocals/tours/hiroshima-hiroshima-untold-why-the-atomic-bomb-fell-guided-history-walk/img0.jpg',
      };

        default:
            return null;
    }
}
