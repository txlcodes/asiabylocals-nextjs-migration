// Sapporo authority pages (2026-08). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getSapporoInfoContent() -> getCityInfoContent().
import type { CityInfoData } from './cityInfoContent';

export function getSapporoInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case 'best-time-to-visit-sapporo':
            return {
        title: 'The Best Time to Visit Sapporo: An Honest Season-by-Season Guide',
        seoTitle: 'Best Time to Visit Sapporo',
        description: 'Snow depth, festival dates, lavender timing and the cheapest weeks — an honest month-by-month guide to when Sapporo is actually worth visiting.',
        fastFacts: [
          { icon: 'snowflake', label: 'Annual snowfall', value: 'About 4.7-5 m cumulative; ground depth peaks 80-100 cm in February' },
          { icon: 'calendar', label: 'Snow Festival 2027', value: '4-11 February, Odori and Susukino sites' },
          { icon: 'flower', label: 'Furano lavender', value: 'Late June to about 20 July, peak mid-July' },
          { icon: 'wallet', label: 'Cheapest months', value: 'Late April-May and late November; mid-January for cheap real winter' },
        ],
        sections: [
          {
            title: 'Sapporo Is a Winter City First — Everything Else Is Secondary',
            icon: 'snowflake',
            content: 'Most Japanese cities are best in spring or autumn. Sapporo is the exception. It sits at 43 degrees north on the leeward side of the Sea of Japan, and the same weather system that dumps snow on the Niseko ski fields buries the city too. Sapporo takes roughly 4.7 to 5 metres of cumulative snowfall in an average season — one of the heaviest totals of any city of two million people anywhere on earth.\n\nThat number gets misread constantly, so be clear about what it means. Cumulative snowfall is not standing depth. The city ploughs relentlessly, and actual ground depth peaks around 80 to 100 cm in mid-February, having built from near zero in early December. You will not be wading through five metres of powder. You will be walking on hard-packed, well-cleared, and frequently very slippery streets.\n\nSnow reliably lies on the ground from roughly early December to late March. January and February are the deepest and coldest months, with daily highs often staying below freezing. If snow is the reason you are coming to Hokkaido — and for most visitors it should be — those are your months.',
            tourCard: {
              slug: 'sapporo-morning-tour',
              title: 'Sapporo Golden Route: Morning Walk Past the Clock Tower and TV Tower',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 50.45',
              duration: '2 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015029/asiabylocals/tours/sapporo-sapporo-golden-route-morning-walk-past-the-clock-tower-and-tv-tower/img0.jpg',
            },
          },
          {
            title: 'Winter: December to March, and the Snow Festival Spike',
            icon: 'calendar-days',
            content: 'December is the quiet bargain. Snow is arriving, the city is lit for Christmas, the Sapporo White Illumination runs through Odori Park, and hotel rates are still sane. Ground cover is thin early in the month and builds to 30 to 40 cm by New Year. The one thing to dodge is the Japanese New Year holiday, roughly 29 December to 3 January, when domestic travel collapses supply and closures are widespread.\n\nJanuary is the coldest, snowiest, most authentically Hokkaido month, and it is also the cheapest deep-winter window because the crowds have not arrived yet. If you want Sapporo winter without paying festival prices, mid-to-late January is the smartest booking on this page.\n\nEarly February is the exception to everything. The Sapporo Snow Festival runs 4 to 11 February 2027, and central hotel rates routinely double or triple against a normal February week. Rooms near Odori and Sapporo Station sell out six to nine months ahead. March is the underrated month: the snow is still deep at the ski resorts, the city is thawing, lift passes drop sharply from around 1 March, and prices are back to normal.',
            tourCard: {
              slug: 'sapporo-morning-tour',
              title: 'Sapporo Golden Route: Morning Walk Past the Clock Tower and TV Tower',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 50.45',
              duration: '2 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015029/asiabylocals/tours/sapporo-sapporo-golden-route-morning-walk-past-the-clock-tower-and-tv-tower/img0.jpg',
            },
          },
          {
            title: 'Summer: The Reason Japan Itself Comes to Hokkaido',
            icon: 'sun',
            content: 'While Tokyo and Osaka sit at 35 degrees and brutal humidity, Sapporo in July and August runs in the mid-20s with genuinely comfortable evenings. This is not a secret — it is why domestic tourism floods Hokkaido in summer, and why August hotel prices are the second peak of the year after the Snow Festival.\n\nThe headline draw is the Furano lavender, roughly two and a half hours inland. The bloom window is tighter than most people plan for: late June to mid-July, with the dominant Okamurasaki variety peaking mid-July and the showiest decorative varieties holding deep colour from about 15 to 31 July. Farm Tomita\'s separate Lavender East field is scheduled to open 20 June to 20 July. If you arrive in August expecting purple fields, you will find green stubble and disappointment.\n\nIn the city itself, the Odori Park Beer Garden takes over the park through late July and August, and the Yosakoi Soran dance festival fills the streets in early to mid-June. Summer Sapporo is pleasant rather than spectacular — the spectacle is in the countryside.',
            tourCard: {
              slug: 'sapporo-food-tour',
              title: 'Sapporo Local Food Crawl: Ten-Plus Dishes Across Four Venues',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 120.47',
              duration: '4 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015045/asiabylocals/tours/sapporo-sapporo-local-food-crawl-ten-plus-dishes-across-four-venues/img0.jpg',
            },
          },
          {
            title: 'Spring and Autumn: The Honest Shoulder-Season Verdict',
            icon: 'leaf',
            content: 'April and May are Sapporo\'s genuinely weak months, and we would rather say so than sell you a trip. The snow has gone dirty and receded, the ski resorts have closed, the ground is brown, and the famous flower landscapes have not started. Sapporo\'s cherry blossom arrives very late by Japanese standards — typically around the start of May in Maruyama Park — and it is a modest event compared with Kyoto or Tokyo. May\'s compensation is simply that it is the cheapest and emptiest time of year to be in the city.\n\nAutumn is the better shoulder. Hokkaido colours first in Japan: Jozankei Onsen, an hour from downtown, peaks around mid-October, and the golden ginkgo avenue at Hokkaido University peaks at the end of October, when the university holds its Golden Leaves Festival. Forecasters were calling the 2026 Hokkaido colour season unusually late, so check the current forecast rather than trusting a fixed date.\n\nOur honest ranking for a first-time visitor: late January or early March for the true Hokkaido experience, mid-July if you want lavender and mild weather, mid-October if you want colour and low prices, and April if you want to save money and do not mind that the landscape is doing nothing at all.',
            tourCard: {
              slug: 'sapporo-full-day-tour',
              title: 'Hokkaido Day Trip from Sapporo: Asahiyama Zoo, Blue Pond & Shirahige Falls',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 56.92',
              duration: '9 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788014991/asiabylocals/tours/sapporo-hokkaido-day-trip-from-sapporo-asahiyama-zoo-blue-pond-shirahige-falls/img0.jpg',
            },
          },
          {
            title: 'When Sapporo Is Cheapest',
            icon: 'wallet',
            content: 'Cheapest overall: late April through May, and again in late November before the snow properly settles. Hotels in central Sapporo are at their weakest and you can often walk into good restaurants without booking.\n\nCheapest while still getting real winter: mid-to-late January, excluding the New Year holiday, and the second half of March. Both give you snow on the ground and functioning ski resorts without the February surcharge.\n\nMost expensive: the Snow Festival week in early February, the New Year holiday, and Obon in mid-August. If your dates are movable, shifting even three days off the Snow Festival week can halve your accommodation bill while the city still looks exactly as snowy.\n\nOne practical note that trips people up regardless of season: flights into New Chitose Airport can be disrupted by snow in January and February. If you have a tight international connection out of Tokyo, do not book it for the same day as your Hokkaido departure.',
          },
        ],
        faqs: [
          { q: 'How cold does Sapporo actually get in winter?', a: 'In January and February daytime highs often sit at or below freezing and nights commonly drop to minus 7 to minus 12 Celsius. It is a dry, still cold rather than a wind-driven one, so it feels more manageable than the numbers suggest — but you need a proper insulated coat, gloves, and above all shoes with grip. Locals wear winter boots with a soft rubber sole; smooth-soled city shoes are genuinely dangerous on polished ice.' },
          { q: 'Is it worth visiting Sapporo outside the Snow Festival?', a: 'Yes, and often it is the better call. The city is snow-covered from December to March, the ski resorts run all season, and everything except the sculptures themselves is identical. You save on hotels, you can get a table at the ramen and jingisukan places without queuing an hour, and the streets are walkable. Come for the festival if the sculptures are the point of the trip; skip it if snow, food and skiing are the point.' },
          { q: 'When can I see the Furano lavender?', a: 'Late June to mid-July, peaking around 15 to 20 July for most varieties. Farm Tomita\'s Lavender East field runs roughly 20 June to 20 July. By early August the harvest is done. It is a day trip of about two and a half hours each way from Sapporo, so treat it as a full day.' },
          { q: 'Does Sapporo have cherry blossoms?', a: 'Yes, but very late — usually around the start of May, weeks after Honshu. Maruyama Park and Hokkaido Shrine are the main spots, and locals traditionally combine hanami with a jingisukan barbecue rather than a picnic. It is pleasant, but it is not a reason to choose Sapporo over Kyoto or Tokyo for blossom season.' },
          { q: 'How many days do I need in Sapporo?', a: 'Three full days covers the city plus one day trip comfortably. Add two more if you want to ski Niseko or Rusutsu properly, or if you are heading to Furano or Biei in summer. Two days is enough only if you are treating Sapporo as a stopover.' },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How cold does Sapporo actually get in winter?", "acceptedAnswer": {"@type": "Answer", "text": "In January and February daytime highs often sit at or below freezing and nights commonly drop to minus 7 to minus 12 Celsius. It is a dry, still cold rather than a wind-driven one, so it feels more manageable than the numbers suggest — but you need a proper insulated coat, gloves, and above all shoes with grip. Locals wear winter boots with a soft rubber sole; smooth-soled city shoes are genuinely dangerous on polished ice."}}, {"@type": "Question", "name": "Is it worth visiting Sapporo outside the Snow Festival?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, and often it is the better call. The city is snow-covered from December to March, the ski resorts run all season, and everything except the sculptures themselves is identical. You save on hotels, you can get a table at the ramen and jingisukan places without queuing an hour, and the streets are walkable. Come for the festival if the sculptures are the point of the trip; skip it if snow, food and skiing are the point."}}, {"@type": "Question", "name": "When can I see the Furano lavender?", "acceptedAnswer": {"@type": "Answer", "text": "Late June to mid-July, peaking around 15 to 20 July for most varieties. Farm Tomita's Lavender East field runs roughly 20 June to 20 July. By early August the harvest is done. It is a day trip of about two and a half hours each way from Sapporo, so treat it as a full day."}}, {"@type": "Question", "name": "Does Sapporo have cherry blossoms?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, but very late — usually around the start of May, weeks after Honshu. Maruyama Park and Hokkaido Shrine are the main spots, and locals traditionally combine hanami with a jingisukan barbecue rather than a picnic. It is pleasant, but it is not a reason to choose Sapporo over Kyoto or Tokyo for blossom season."}}, {"@type": "Question", "name": "How many days do I need in Sapporo?", "acceptedAnswer": {"@type": "Answer", "text": "Three full days covers the city plus one day trip comfortably. Add two more if you want to ski Niseko or Rusutsu properly, or if you are heading to Furano or Biei in summer. Two days is enough only if you are treating Sapporo as a stopover."}}]}]},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015029/asiabylocals/tours/sapporo-sapporo-golden-route-morning-walk-past-the-clock-tower-and-tv-tower/img0.jpg',
      };

        case 'sapporo-snow-festival-guide':
            return {
        title: 'Sapporo Snow Festival 2027: Dates, the Three Sites, and Whether It\'s Worth the Price Spike',
        seoTitle: 'Sapporo Snow Festival 2027 Guide',
        description: 'Sapporo Snow Festival 2027 runs 4-11 February. Site-by-site guide, what\'s free, crowd timings, hotel booking windows and an honest cost verdict.',
        fastFacts: [
          { icon: 'calendar', label: '2027 dates', value: '4-11 February (Odori and Susukino); Tsudome runs a slightly earlier window' },
          { icon: 'ticket', label: 'Admission', value: 'Free at all three sites' },
          { icon: 'clock', label: 'Illumination', value: 'Odori until 22:00; Susukino ice until 23:00' },
          { icon: 'bed-double', label: 'Book hotels', value: '8-10 months ahead; rates double or triple' },
        ],
        sections: [
          {
            title: 'Dates, and What Actually Happens Where',
            icon: 'map-pin',
            content: 'The 2027 Sapporo Snow Festival runs 4 to 11 February at three separate sites. They are not variations on the same thing, and people who treat them as interchangeable waste a lot of time on the subway.\n\nThe Odori Site is the festival. It occupies the full 1.5 km length of Odori Park in the centre of the city, running from around 10th Avenue to the TV Tower. The showpiece sculptures are enormous — up to about 25 metres wide and 15 metres high, typically a mix of a famous building, an anime property and a sponsored piece — surrounded by more than a hundred smaller statues carved by community teams and international entrants. The big sculptures are lit until 22:00 each night.\n\nThe Susukino Site is one subway stop south, in the nightlife district, and it is ice rather than snow: around 100 carved ice sculptures down the middle of Ekimae-dori, many with seafood frozen inside them, lit until 23:00 and until 22:00 on the final day. It takes 30 to 40 minutes to walk and is best combined with dinner.\n\nThe Tsudome Site is the family venue out at Sakaemachi, open 10:00 to 16:00, with snow slides, snow rafting and indoor food halls. It is a 15-minute walk from Sakaemachi Station or a 200 yen shuttle bus. Tsudome usually opens a few days earlier than the other two sites and closes earlier, so verify its window separately before you plan around it.',
            tourCard: {
              slug: 'sapporo-morning-tour',
              title: 'Sapporo Golden Route: Morning Walk Past the Clock Tower and TV Tower',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 50.45',
              duration: '2 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015029/asiabylocals/tours/sapporo-sapporo-golden-route-morning-walk-past-the-clock-tower-and-tv-tower/img0.jpg',
            },
          },
          {
            title: 'What\'s Free and What Isn\'t',
            icon: 'ticket',
            content: 'Entry to all three sites is free. There is no ticket, no gate and no wristband. That surprises people who have seen the hotel prices and assumed there must be an admission fee somewhere.\n\nYou pay for three things. First, food and drink: the Odori site runs a large food zone of Hokkaido stalls — scallops, crab, grilled corn, potato butter, soup curry, hot sake — where you should budget 2,000 to 3,000 yen per person for a proper graze. Second, the paid activities at Tsudome, where the tube slides and snow rafting carry small per-ride fees. Third, viewpoints: the Sapporo TV Tower observatory at the east end of Odori charges 1,200 yen, or 1,700 yen for a combined day-and-night ticket.\n\nOur view on the TV Tower: it is the single best photograph of the festival, looking straight down the illuminated axis of the park, and it is also the most crowded 40 minutes of your evening. Go around 16:30 to catch the blue hour transition, or skip it and shoot from ground level at the 4th Avenue crossings instead.',
            tourCard: {
              slug: 'sapporo-morning-tour',
              title: 'Sapporo Golden Route: Morning Walk Past the Clock Tower and TV Tower',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 50.45',
              duration: '2 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015029/asiabylocals/tours/sapporo-sapporo-golden-route-morning-walk-past-the-clock-tower-and-tv-tower/img0.jpg',
            },
          },
          {
            title: 'Crowds, and the Timings That Actually Work',
            icon: 'users',
            content: 'The festival draws crowds in the millions across eight days, and Odori Park in the evening is genuinely shoulder-to-shoulder. The park is one-way in practice: you shuffle. Photographing a large sculpture without a hundred heads in frame is not realistic between 18:00 and 21:00 on a weekend.\n\nThe fix is boring and it works. Visit Odori in daylight, between about 09:00 and 11:00, when the sculptures are empty and you can see the carving detail properly. Then return for the illumination on a weekday evening, ideally the Monday, Tuesday or Wednesday of the festival week. The Friday and Saturday nights are the worst by a wide margin.\n\nThe first two days also carry a hidden risk: sculptures are still being finished, and warm spells or rain can visibly degrade them by the final days. The middle of the run is the sweet spot for condition. And go to Susukino late — after 21:00 the ice sculptures thin out considerably while still being lit, and the surrounding bars are the point of being in that district anyway.',
            tourCard: {
              slug: 'sapporo-hopping-experience',
              title: 'Sapporo After Dark: Bar Hopping Three Local Spots with a Guide',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 135.52',
              duration: '3 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015057/asiabylocals/tours/sapporo-sapporo-after-dark-bar-hopping-three-local-spots-with-a-guide/img0.jpg',
            },
          },
          {
            title: 'Booking: How Far Ahead, and Where to Sleep',
            icon: 'bed-double',
            content: 'This is the part that decides whether your trip is enjoyable or expensive. Central Sapporo rooms for festival week sell out roughly six to nine months in advance, and rates in the centre routinely double or triple against a normal February week. Three months out, the well-located hotels near Odori and Sapporo Station are essentially gone; by December, so are most of the mediocre ones.\n\nBook eight to ten months ahead if you want both a fair price and a good location. Book at three to six months and you are choosing between the two. Note also that the final nights of the run are the most expensive and the first to sell out — arriving Wednesday and leaving Monday costs noticeably less than the reverse for the same number of festival evenings.\n\nIf central Sapporo has priced you out, the workable fallbacks are: stay one or two subway stops out on the Namboku or Toho line, where rates fall sharply and you are still ten minutes from Odori; stay near Shin-Sapporo and ride the Tozai line in; or base in Otaru, 30 minutes by JR, which has its own Snow Light Path festival running 6 to 13 February 2027 and overlapping the Sapporo dates. Chitose, near the airport, is a last resort — it is cheap but you will spend two hours a day on trains.',
            tourCard: {
              slug: 'sapporo-chauffeured-full-day-tour',
              title: 'Otaru Your Way: Private Chauffeured Day Trip from Sapporo',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 596.4',
              duration: '10 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015071/asiabylocals/tours/sapporo-otaru-your-way-private-chauffeured-day-trip-from-sapporo/img0.jpg',
            },
          },
          {
            title: 'Is It Worth the Price Spike? An Honest Answer',
            icon: 'scale',
            content: 'For a lot of travellers, no — and this is not the answer most festival guides will give you.\n\nThe case against: the festival is free, but it makes the entire week two to three times more expensive. You are paying a large premium for sculptures you will view in a dense crowd, in cold that limits how long you can stand still, over roughly one evening\'s worth of actual content. Everything else you came to Hokkaido for — the snow, the ramen, the jingisukan, the powder skiing, the day trip to Otaru — is available in mid-January or March at a third of the accommodation cost, with restaurants you can walk into.\n\nThe case for: the scale of the large sculptures genuinely does not photograph. They are architectural, and standing under a 15-metre snow castle lit against a black February sky is a real experience. If you are the sort of traveller who wants the definitive version of a place\'s signature event, this is Japan\'s best winter festival and it earns its reputation.\n\nOur practical compromise: if you want the festival, come for it, but keep it to two or three nights and put the rest of the trip in the cheaper week either side. If snow and food are what you actually want, go in late January and spend the money you saved on better meals.',
          },
        ],
        faqs: [
          { q: 'Do I need tickets for the Sapporo Snow Festival?', a: 'No. All three sites are free to enter. You only pay for food, souvenirs, the paid rides at the Tsudome site, and optional viewpoints like the Sapporo TV Tower observatory at 1,200 yen.' },
          { q: 'What time are the snow sculptures lit up?', a: 'The large Odori sculptures are illuminated until 22:00 nightly. The Susukino ice sculptures are lit until 23:00, and until 22:00 on the final day. The Tsudome family site is daytime only, 10:00 to 16:00.' },
          { q: 'Which site should I visit if I only have one evening?', a: 'Odori, without hesitation. It has the large sculptures, the food stalls and the illumination. Walk it from the TV Tower end westward, then continue south for ten minutes into Susukino for the ice sculptures and dinner. Skip Tsudome unless you are travelling with children — it is a 40-minute round trip for slides and rafting.' },
          { q: 'How far in advance should I book a hotel?', a: 'Eight to ten months for a good price in a good location. Rooms sell out six to nine months out and central rates double or triple. If you are booking inside three months, expect to stay a few subway stops from the centre or in Otaru.' },
          { q: 'Is the Otaru Snow Light Path worth combining with it?', a: 'Yes, and it is the best-value add-on of the week. The 2027 dates are 6 to 13 February, overlapping Sapporo\'s run, with lanterns lit 17:00 to 21:00. It is quieter, more atmospheric and more photogenic than the Odori crowds, and it is only 30 minutes away by JR for 800 yen.' },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do I need tickets for the Sapporo Snow Festival?", "acceptedAnswer": {"@type": "Answer", "text": "No. All three sites are free to enter. You only pay for food, souvenirs, the paid rides at the Tsudome site, and optional viewpoints like the Sapporo TV Tower observatory at 1,200 yen."}}, {"@type": "Question", "name": "What time are the snow sculptures lit up?", "acceptedAnswer": {"@type": "Answer", "text": "The large Odori sculptures are illuminated until 22:00 nightly. The Susukino ice sculptures are lit until 23:00, and until 22:00 on the final day. The Tsudome family site is daytime only, 10:00 to 16:00."}}, {"@type": "Question", "name": "Which site should I visit if I only have one evening?", "acceptedAnswer": {"@type": "Answer", "text": "Odori, without hesitation. It has the large sculptures, the food stalls and the illumination. Walk it from the TV Tower end westward, then continue south for ten minutes into Susukino for the ice sculptures and dinner. Skip Tsudome unless you are travelling with children — it is a 40-minute round trip for slides and rafting."}}, {"@type": "Question", "name": "How far in advance should I book a hotel?", "acceptedAnswer": {"@type": "Answer", "text": "Eight to ten months for a good price in a good location. Rooms sell out six to nine months out and central rates double or triple. If you are booking inside three months, expect to stay a few subway stops from the centre or in Otaru."}}, {"@type": "Question", "name": "Is the Otaru Snow Light Path worth combining with it?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, and it is the best-value add-on of the week. The 2027 dates are 6 to 13 February, overlapping Sapporo's run, with lanterns lit 17:00 to 21:00. It is quieter, more atmospheric and more photogenic than the Odori crowds, and it is only 30 minutes away by JR for 800 yen."}}]}]},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015029/asiabylocals/tours/sapporo-sapporo-golden-route-morning-walk-past-the-clock-tower-and-tv-tower/img0.jpg',
      };

        case 'getting-around-sapporo':
            return {
        title: 'Getting Around Sapporo: Subway, Streetcar, JR and the Underground City',
        seoTitle: 'Getting Around Sapporo: Transport',
        description: 'Sapporo subway fares, the Donichika weekend pass, streetcar loop, JR to Otaru and the airport, IC cards, and whether you need a car in winter.',
        fastFacts: [
          { icon: 'train-front', label: 'Subway fare', value: '210-380 yen adult, distance-based; 3 lines meeting at Odori' },
          { icon: 'credit-card', label: 'Donichika pass', value: '520 yen unlimited subway, weekends and holidays only' },
          { icon: 'plane', label: 'Airport train', value: '1,230 yen, 33-37 min, up to 6 per hour' },
          { icon: 'footprints', label: 'Chi-Ka-Ho', value: '520 m heated underground walkway, Sapporo Station to Odori, about 10 min' },
        ],
        sections: [
          {
            title: 'The Subway: Three Lines, and That\'s the Whole City',
            icon: 'train-front',
            content: 'Sapporo\'s subway is refreshingly simple after Tokyo. Three lines, colour-coded, all crossing at Odori Station in the centre. The Namboku line (green) runs north-south through Sapporo Station, Odori and Susukino — it is the line you will use most. The Tozai line (orange) runs east-west through Odori and out to Maruyama Park and Shin-Sapporo. The Toho line (blue) runs from Sakaemachi in the north, past Sapporo Station and Odori, south to Fukuzumi.\n\nFares are distance-based, from 210 yen for the shortest hops up to 380 yen for the longest, with children at 110 to 190 yen. In practice almost every tourist journey inside the central area costs 210 or 250 yen. Trains run roughly 06:00 to just after midnight and are frequent enough that you never check a timetable.\n\nOne quirk worth knowing: Sapporo\'s subway trains run on rubber tyres on a concrete guideway rather than steel wheels on rails, which is why they are unusually quiet and why they cope with the winter climate so well. Practically, it means the subway is the one transport mode in Sapporo that snow never disrupts.',
          },
          {
            title: 'Day Passes: The Weekend Ticket Is the Real Deal',
            icon: 'credit-card',
            content: 'The Donichika Card is the best-value transport ticket in the city and most visitors have never heard of it. It costs 520 yen for adults and 260 yen for children, gives unlimited rides on all three subway lines for one calendar day, and is valid on Saturdays, Sundays and Japanese public holidays only. Given a single central journey costs 210 yen, it pays for itself on your third ride — which you will hit before lunch.\n\nThe weekday equivalent, the standard subway One-Day Card, is 830 yen for adults and 420 yen for children. That is a much weaker deal: you need four or five journeys to break even, and a typical Sapporo day involves three. On weekdays, most visitors are better off just tapping an IC card and paying per ride.\n\nThere are also combined subway-streetcar-bus day passes and a separate streetcar one-day pass, but unless you are specifically doing a streetcar-heavy day around Mount Moiwa, they rarely beat the Donichika. Buy the Donichika from any subway station ticket machine — switch the machine to English, choose the commuter/special ticket menu, and it is one screen deep.',
          },
          {
            title: 'IC Cards, the Streetcar Loop and Buses',
            icon: 'tram-front',
            content: 'Your Suica, PASMO, ICOCA, PiTaPa, manaca, TOICA, nimoca, SUGOCA or Hayakaken from elsewhere in Japan works on Sapporo\'s subway, streetcar and city buses. If you already have one, bring it and do not buy anything local.\n\nIf you do not, the two local options are Kitaca, issued by JR Hokkaido and usable nationwide at IC-enabled stations, and SAPICA, the city transport card. SAPICA earns points on the subway but has a real limitation: it cannot be used outside Hokkaido. Buy Kitaca if you are continuing to Honshu, SAPICA only if Sapporo is the whole trip.\n\nThe streetcar is a single loop line running south and west from Susukino, out past Nakajima Park and around the base of Mount Moiwa. It is a flat 230 yen for adults and 120 yen for children, pay on exit. Its main practical uses are reaching the Mount Moiwa ropeway base — get off at Ropeway Iriguchi — and simply riding it in the snow, which is one of the more pleasant cheap things to do in a Sapporo winter. City buses are useful for Moerenuma Park and the Tsudome festival site but are otherwise not needed.',
            tourCard: {
              slug: 'sapporo-morning-tour',
              title: 'Sapporo Golden Route: Morning Walk Past the Clock Tower and TV Tower',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 50.45',
              duration: '2 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015029/asiabylocals/tours/sapporo-sapporo-golden-route-morning-walk-past-the-clock-tower-and-tv-tower/img0.jpg',
            },
          },
          {
            title: 'JR: The Airport, Otaru and Everything Beyond',
            icon: 'plane',
            content: 'JR Hokkaido handles everything outside the city, and the workhorse is the Rapid Airport service, which runs the single line from Otaru through Sapporo to New Chitose Airport.\n\nNew Chitose Airport to Sapporo Station takes about 33 to 37 minutes and costs 1,230 yen for a non-reserved seat, with departures up to six times an hour through the day. It is faster and more reliable than the airport bus in winter and it drops you directly under Sapporo Station. Pay the small extra for a reserved U-Seat carriage only if you are travelling with large luggage at peak times.\n\nSapporo to Otaru is 800 yen and about 30 minutes on the rapid train, or 45 minutes on the local — which is worth taking at least one way, because the local hugs the coastline through Zenibako and the sea views in winter are the best free thing on the route. Sit on the left side heading to Otaru.\n\nOtaru through to New Chitose Airport directly takes around 70 minutes for 2,040 yen, which makes an Otaru-then-airport departure day perfectly practical. For longer trips — Hakodate, Asahikawa, Furano — you are on limited express trains and should look at whether a JR Hokkaido Rail Pass covers your route before buying point-to-point tickets.',
            tourCard: {
              slug: 'sapporo-chauffeured-full-day-tour',
              title: 'Otaru Your Way: Private Chauffeured Day Trip from Sapporo',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 596.4',
              duration: '10 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015071/asiabylocals/tours/sapporo-otaru-your-way-private-chauffeured-day-trip-from-sapporo/img0.jpg',
            },
          },
          {
            title: 'Winter Walking, the Underground City, and Whether to Rent a Car',
            icon: 'footprints',
            content: 'Sapporo has built an answer to its own weather. The Chi-Ka-Ho underground walkway runs about 520 metres directly beneath Ekimae-dori, linking Sapporo Station to Odori Station, takes roughly ten minutes to walk, and connects onward into the Aurora Town and Pole Town underground shopping arcades. In practice you can cross the entire core of downtown — station, Odori, and on toward Susukino — without ever putting on your coat. There are benches, free Wi-Fi, cafes and rotating art installations along the way. In January, this is not a novelty, it is the route locals actually use.\n\nAbove ground, the danger is not cold, it is ice. Compacted snow polishes to a mirror on pavements and at crossings, and falls are the most common injury visitors report. Wear boots with soft rubber lugged soles, take short flat steps, and use the handrails on station stairs. Clip-on ice grippers are sold cheaply in every convenience store and drugstore in the city and are worth 1,000 yen of your budget.\n\nOn cars: do not rent one for Sapporo itself. Downtown is a one-way grid with heavy no-parking enforcement, coin lots are expensive, and the subway goes everywhere you need. A rental only makes sense if you are touring Hokkaido beyond the city — Furano, Biei, Shiretoko, the Shakotan coast — where public transport genuinely thins out. If you do rent in winter, note that Hokkaido rentals from November to April come fitted with studless snow tyres as standard, ask for 4WD, and accept that you should drive at roughly half the posted limit on snow-covered roads. Inexperienced snow drivers should take the bus to the ski resorts instead.',
          },
        ],
        faqs: [
          { q: 'Can I use my Suica or ICOCA card in Sapporo?', a: 'Yes. All ten major Japanese IC cards — Suica, PASMO, ICOCA, PiTaPa, manaca, TOICA, nimoca, SUGOCA, Hayakaken and Kitaca — work on the Sapporo subway, streetcar and city buses. The only card that does not travel in the other direction is the local SAPICA, which is not accepted outside Hokkaido.' },
          { q: 'Is the Donichika subway pass worth buying?', a: 'On a Saturday, Sunday or public holiday, almost always. At 520 yen it beats paying per ride from your third journey onward. The weekday One-Day Card at 830 yen is much harder to justify — on weekdays just tap an IC card unless you are planning five or more trips.' },
          { q: 'How do I get from New Chitose Airport to central Sapporo?', a: 'Take the JR Rapid Airport train from directly beneath the terminal. It is 1,230 yen, about 33 to 37 minutes to Sapporo Station, and runs up to six times an hour. It is the fastest option and, unlike the highway bus, it is not affected by snow-related traffic delays.' },
          { q: 'Do I need a car in Sapporo in winter?', a: 'No, and we would actively advise against it for a city stay. Parking is scarce and expensive, the grid is one-way heavy, and the subway is immune to snow. Rent only if you are touring rural Hokkaido, and only if you are comfortable driving on packed snow — rentals include studless winter tyres from November to April, but the tyres do not drive the car for you.' },
          { q: 'How do I avoid slipping on the ice?', a: 'Wear boots with soft, lugged rubber soles rather than hard smooth ones, walk with short flat-footed steps, and buy a pair of clip-on ice cleats from any convenience store for around 1,000 yen. Where possible use the Chi-Ka-Ho underground walkway and the connected shopping arcades to cross downtown without going outside at all.' },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I use my Suica or ICOCA card in Sapporo?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All ten major Japanese IC cards — Suica, PASMO, ICOCA, PiTaPa, manaca, TOICA, nimoca, SUGOCA, Hayakaken and Kitaca — work on the Sapporo subway, streetcar and city buses. The only card that does not travel in the other direction is the local SAPICA, which is not accepted outside Hokkaido."}}, {"@type": "Question", "name": "Is the Donichika subway pass worth buying?", "acceptedAnswer": {"@type": "Answer", "text": "On a Saturday, Sunday or public holiday, almost always. At 520 yen it beats paying per ride from your third journey onward. The weekday One-Day Card at 830 yen is much harder to justify — on weekdays just tap an IC card unless you are planning five or more trips."}}, {"@type": "Question", "name": "How do I get from New Chitose Airport to central Sapporo?", "acceptedAnswer": {"@type": "Answer", "text": "Take the JR Rapid Airport train from directly beneath the terminal. It is 1,230 yen, about 33 to 37 minutes to Sapporo Station, and runs up to six times an hour. It is the fastest option and, unlike the highway bus, it is not affected by snow-related traffic delays."}}, {"@type": "Question", "name": "Do I need a car in Sapporo in winter?", "acceptedAnswer": {"@type": "Answer", "text": "No, and we would actively advise against it for a city stay. Parking is scarce and expensive, the grid is one-way heavy, and the subway is immune to snow. Rent only if you are touring rural Hokkaido, and only if you are comfortable driving on packed snow — rentals include studless winter tyres from November to April, but the tyres do not drive the car for you."}}, {"@type": "Question", "name": "How do I avoid slipping on the ice?", "acceptedAnswer": {"@type": "Answer", "text": "Wear boots with soft, lugged rubber soles rather than hard smooth ones, walk with short flat-footed steps, and buy a pair of clip-on ice cleats from any convenience store for around 1,000 yen. Where possible use the Chi-Ka-Ho underground walkway and the connected shopping arcades to cross downtown without going outside at all."}}]}]},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015029/asiabylocals/tours/sapporo-sapporo-golden-route-morning-walk-past-the-clock-tower-and-tv-tower/img0.jpg',
      };

        case 'sapporo-food-guide':
            return {
        title: 'What to Eat in Sapporo: Miso Ramen, Jingisukan, Soup Curry and the Seafood Question',
        seoTitle: 'Sapporo Food Guide: What to Eat',
        description: 'Sapporo\'s four signature dishes, what they cost in 2026, where locals actually eat, and an honest warning about the Nijo Market seafood bowls.',
        fastFacts: [
          { icon: 'utensils', label: 'Miso ramen', value: '900-1,500 yen; invented in Sapporo around 1954' },
          { icon: 'flame', label: 'Beer Garden jingisukan', value: 'About 3,800 yen all-you-can-eat, 100-minute limit' },
          { icon: 'soup', label: 'Soup curry', value: '1,200-1,800 yen; a 1970s Sapporo invention' },
          { icon: 'fish', label: 'Nijo Market kaisendon', value: 'About 1,480-3,800 yen; go before 10:00' },
        ],
        sections: [
          {
            title: 'Miso Ramen: The Dish Sapporo Invented',
            icon: 'utensils',
            content: 'Miso ramen is not an old Japanese tradition. It was invented in Sapporo, in living memory, at a small Susukino shop called Aji no Sanpei. Founder Morito Omiya was serving a pork-and-vegetable miso soup and began putting noodles in it; the modern miso ramen is generally dated to around 1954. Omiya himself pushed back on the popular story that a drunk customer asked for noodles in his miso soup — his own account is that miso soup was simply the inspiration.\n\nThe Sapporo style is built for a Hokkaido winter. Thick, curly, yellow egg noodles that hold heat; a heavy miso-and-pork broth; and a layer of rendered lard on the surface that seals the heat in, so the bowl is still scalding fifteen minutes later. Standard toppings are stir-fried bean sprouts, minced pork, onion and often sweetcorn and a slab of butter. The corn-and-butter version is not a tourist invention — it is Hokkaido dairy and Hokkaido corn, and it is what locals order.\n\nBudget 900 to 1,500 yen for a bowl in 2026; Aji no Sanpei\'s miso ramen starts around 1,000 yen. Most serious shops are cash-friendly, seat under fifteen people, and have a ticket machine at the door. Order, sit, eat, leave — a bowl is a twenty-minute transaction, not an evening.',
            tourCard: {
              slug: 'sapporo-food-tour',
              title: 'Sapporo Local Food Crawl: Ten-Plus Dishes Across Four Venues',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 120.47',
              duration: '4 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015045/asiabylocals/tours/sapporo-sapporo-local-food-crawl-ten-plus-dishes-across-four-venues/img0.jpg',
            },
          },
          {
            title: 'Where to Actually Eat Ramen (and Where Not To)',
            icon: 'map-pin',
            content: 'Ganso Ramen Yokocho in Susukino is the famous one — a narrow lane of about 17 tiny shops that has been going since 1951, more than seventy years of continuous ramen. It is genuinely atmospheric, especially in falling snow at 23:00 with steam pouring out of every doorway, and it is also the most touristed ramen in Hokkaido. Some shops in the alley are excellent; several coast on the address. Our honest position: go once, late, for the experience and the photographs, and pick the shop with the most Japanese customers rather than the loudest English menu.\n\nFor the food itself, locals more often go elsewhere. Aji no Sanpei in Chuo-ku for the historical original. Menya Saimi, out at Misono on the Toho line, is routinely ranked the best miso ramen in the city by Japanese diners and has the queue to prove it — arrive before it opens or after 14:00. Ramen Shingen and Sumire are the two big names most Sapporo residents will actually name if you ask them.\n\nThe Ramen Republic on the tenth floor of Esta above Sapporo Station is a food-court arrangement of eight shops. It is convenient, it is fine, and it is not where you should spend your one great ramen meal.',
            tourCard: {
              slug: 'sapporo-food-tour',
              title: 'Sapporo Local Food Crawl: Ten-Plus Dishes Across Four Venues',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 120.47',
              duration: '4 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015045/asiabylocals/tours/sapporo-sapporo-local-food-crawl-ten-plus-dishes-across-four-venues/img0.jpg',
            },
          },
          {
            title: 'Jingisukan: Lamb, Smoke, and the Beer Garden',
            icon: 'flame',
            content: 'Jingisukan — Genghis Khan — is grilled mutton and lamb cooked on a domed cast-iron skillet with a hole-punched surface, vegetables piled around the rim so the fat runs down into them. It is Hokkaido\'s defining communal meal, born out of a state push into sheep farming in the early twentieth century, and it is the food locals eat for celebrations, cherry blossom parties and end-of-year drinking.\n\nThe headline venue is the Sapporo Beer Garden, in the red-brick 1890s malt house beside the Sapporo Beer Museum. All-you-can-eat jingisukan runs around 3,800 yen for adults with a 100-minute limit, with all-you-can-drink alcohol at about 1,800 yen or soft drinks at 800 yen on top. It is a large, loud, tourist-heavy hall — and it is still worth doing once, because the building is magnificent and the ventilation is better than anywhere else in the city.\n\nIf you want the local version instead, go to Daruma in Susukino. It is tiny, decades old, standing-room-adjacent, and the lamb is markedly better. Expect to queue and expect your clothes to smell of smoke afterwards — that is the correct outcome. Two practical notes: raw lamb here is genuinely fresh, so do not overcook it, and if you have a good coat, most jingisukan places will give you a plastic bag for it. Use it.',
            tourCard: {
              slug: 'sapporo-food-tour',
              title: 'Sapporo Local Food Crawl: Ten-Plus Dishes Across Four Venues',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 120.47',
              duration: '4 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015045/asiabylocals/tours/sapporo-sapporo-local-food-crawl-ten-plus-dishes-across-four-venues/img0.jpg',
            },
          },
          {
            title: 'Soup Curry: The Local Dish Visitors Skip',
            icon: 'soup',
            content: 'Soup curry was invented in Sapporo in the 1970s and is the one signature dish most foreign visitors never try, which is a mistake. It is not Japanese curry rice with extra liquid — it is a thin, aromatic, heavily spiced broth, closer to a South Asian or Sri Lankan soup, served with a mound of rice on the side and a bowl full of whole roasted vegetables: a chicken leg, a half potato, a wedge of pumpkin, lotus root, okra, a boiled egg, aubergine.\n\nThe ordering is customisable and slightly intimidating on a Japanese-only menu. You pick a base — chicken leg is the classic, and it will be falling off the bone — then a spice level, usually on a numbered scale where the middle is genuinely hot, then optional toppings. Prices run 1,200 to 1,800 yen depending on the protein.\n\nSuage+ and Garaku, both near Odori, are the two most reliably good places for first-timers and both have picture menus. Both queue at lunch. Eat it the day you arrive on a winter afternoon and you will understand immediately why a city this cold invented it.',
            tourCard: {
              slug: 'sapporo-food-tour',
              title: 'Sapporo Local Food Crawl: Ten-Plus Dishes Across Four Venues',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 120.47',
              duration: '4 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015045/asiabylocals/tours/sapporo-sapporo-local-food-crawl-ten-plus-dishes-across-four-venues/img0.jpg',
            },
          },
          {
            title: 'Seafood, Uni and Crab: The Nijo Market Reality Check',
            icon: 'fish',
            content: 'Hokkaido seafood deserves its reputation. Hairy crab, king crab, snow crab, scallops, salmon roe and above all Hokkaido uni — the sea urchin from Rishiri and the Shakotan coast is the best in Japan and the summer season from roughly June to August is when it peaks.\n\nNijo Market, a block east of the Tanukikoji arcade, is the century-old central market and the place every guide sends you. Here is the honest version. Kaisendon — a rice bowl heaped with sashimi — runs roughly 1,480 to 3,800 yen depending on the toppings, with uni and king crab pushing you to the top of that range. The quality is good. The pricing is tourist pricing, some stalls are aggressive about calling you in, and the crab you are shown on ice is not necessarily local Hokkaido crab out of season. Go early, around 08:00 to 10:00, when it is a working market rather than a performance, and choose a shop with prices posted clearly in numerals.\n\nThe better-value alternatives: Curb Market (Sapporo Jogai Ichiba) near Nijuyonken Station on the Tozai line, where locals shop and the same bowls cost noticeably less; the basement food halls of the Daimaru and Tokyu department stores at Sapporo Station for immaculate takeaway sashimi; and if you are going to Otaru anyway, the sushi restaurants on Sushiya-dori are better value than anything in central Sapporo. For crab specifically, a kani specialist restaurant with a set course will treat you better than a market stall, and you should expect to pay 6,000 yen and up for a proper one. Cheap crab in Hokkaido is a warning sign, not a bargain.',
            tourCard: {
              slug: 'sapporo-food-tour',
              title: 'Sapporo Local Food Crawl: Ten-Plus Dishes Across Four Venues',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 120.47',
              duration: '4 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015045/asiabylocals/tours/sapporo-sapporo-local-food-crawl-ten-plus-dishes-across-four-venues/img0.jpg',
            },
          },
        ],
        faqs: [
          { q: 'What is Sapporo\'s most famous food?', a: 'Miso ramen, which was invented in the city in the mid-1950s at Aji no Sanpei. The Sapporo style uses thick curly noodles, a rich pork-and-miso broth and a lard seal to keep it hot, usually topped with stir-fried bean sprouts, minced pork and often corn and butter. Expect to pay 900 to 1,500 yen.' },
          { q: 'What is jingisukan and where should I eat it?', a: 'Grilled lamb and mutton cooked on a domed iron skillet with vegetables around the rim. The Sapporo Beer Garden does an all-you-can-eat version at about 3,800 yen for 100 minutes in a historic red-brick malt house. For better meat in a smaller, more local setting, Daruma in Susukino is the standard recommendation — expect a queue and expect to smell of smoke afterwards.' },
          { q: 'Is Nijo Market worth visiting?', a: 'Yes, but with realistic expectations. It is atmospheric and the seafood is fresh, but prices are aimed at tourists — kaisendon runs about 1,480 to 3,800 yen. Go early in the morning, choose stalls with clearly posted prices, and consider Curb Market near Nijuyonken Station or the department store food halls for the same quality at lower cost.' },
          { q: 'When is the best season for Hokkaido uni and crab?', a: 'Uni peaks in summer, roughly June to August, when the Rishiri and Shakotan harvests come in — that is when it is worth paying for. Crab is available year-round, but hairy crab is at its best in spring and snow crab in winter. Be sceptical of very cheap crab at any time of year.' },
          { q: 'Do Sapporo restaurants take credit cards?', a: 'Larger restaurants, department stores and the Beer Garden do. Small ramen shops, market stalls and old Susukino izakayas frequently do not, and many operate ticket machines that take cash only. Carry 10,000 to 15,000 yen in cash for a day of eating properly.' },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is Sapporo's most famous food?", "acceptedAnswer": {"@type": "Answer", "text": "Miso ramen, which was invented in the city in the mid-1950s at Aji no Sanpei. The Sapporo style uses thick curly noodles, a rich pork-and-miso broth and a lard seal to keep it hot, usually topped with stir-fried bean sprouts, minced pork and often corn and butter. Expect to pay 900 to 1,500 yen."}}, {"@type": "Question", "name": "What is jingisukan and where should I eat it?", "acceptedAnswer": {"@type": "Answer", "text": "Grilled lamb and mutton cooked on a domed iron skillet with vegetables around the rim. The Sapporo Beer Garden does an all-you-can-eat version at about 3,800 yen for 100 minutes in a historic red-brick malt house. For better meat in a smaller, more local setting, Daruma in Susukino is the standard recommendation — expect a queue and expect to smell of smoke afterwards."}}, {"@type": "Question", "name": "Is Nijo Market worth visiting?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, but with realistic expectations. It is atmospheric and the seafood is fresh, but prices are aimed at tourists — kaisendon runs about 1,480 to 3,800 yen. Go early in the morning, choose stalls with clearly posted prices, and consider Curb Market near Nijuyonken Station or the department store food halls for the same quality at lower cost."}}, {"@type": "Question", "name": "When is the best season for Hokkaido uni and crab?", "acceptedAnswer": {"@type": "Answer", "text": "Uni peaks in summer, roughly June to August, when the Rishiri and Shakotan harvests come in — that is when it is worth paying for. Crab is available year-round, but hairy crab is at its best in spring and snow crab in winter. Be sceptical of very cheap crab at any time of year."}}, {"@type": "Question", "name": "Do Sapporo restaurants take credit cards?", "acceptedAnswer": {"@type": "Answer", "text": "Larger restaurants, department stores and the Beer Garden do. Small ramen shops, market stalls and old Susukino izakayas frequently do not, and many operate ticket machines that take cash only. Carry 10,000 to 15,000 yen in cash for a day of eating properly."}}]}]},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015029/asiabylocals/tours/sapporo-sapporo-golden-route-morning-walk-past-the-clock-tower-and-tv-tower/img0.jpg',
      };

        case 'otaru-day-trip-from-sapporo':
            return {
        title: 'Otaru Day Trip from Sapporo: Canal, Glass, Sushi and the Snow Light Path',
        seoTitle: 'Otaru Day Trip from Sapporo',
        description: 'Otaru in 30 minutes and 800 yen from Sapporo: the canal, Sakaimachi glassworks, Sushiya-dori, and whether to time it for the Snow Light Path.',
        fastFacts: [
          { icon: 'train-front', label: 'From Sapporo', value: '800 yen, 30 min rapid / 45 min local' },
          { icon: 'clock', label: 'Time needed', value: '5-6 hours, timed to end at dusk' },
          { icon: 'flame', label: 'Snow Light Path 2027', value: '6-13 February, 17:00-21:00, free' },
          { icon: 'gem', label: 'Free to enter', value: 'Music Box Museum, steam clock, Kitaichi Glass halls' },
        ],
        sections: [
          {
            title: 'Getting There: Take the Local Train One Way',
            icon: 'train-front',
            content: 'Otaru is 800 yen and about 30 minutes from Sapporo Station on the JR Rapid Airport service, or 45 minutes on the local train along the same Hakodate Main Line. Trains run several times an hour and no reservation is needed.\n\nTake the local at least one way. Between Zenibako and Otaru the line runs directly along the Sea of Japan, close enough that in winter you get spray on the windows and a grey, dramatic, entirely free coastal ride. Sit on the left-hand side heading toward Otaru. The rapid train saves fifteen minutes and shows you considerably less.\n\nThere are two useful stations. Otaru Station is the main one and puts you at the top of the hill above the canal. Minami-Otaru, one stop earlier, drops you at the far end of Sakaimachi Street near the glassworks and music box museum. The efficient plan is to get off at Minami-Otaru, walk downhill through Sakaimachi to the canal, and leave from Otaru Station — you avoid backtracking entirely.\n\nIf Otaru is your last stop before flying home, note that direct trains run from Otaru through to New Chitose Airport in about 70 minutes for 2,040 yen, which makes a canal-then-airport departure day genuinely practical.',
            tourCard: {
              slug: 'sapporo-chauffeured-full-day-tour',
              title: 'Otaru Your Way: Private Chauffeured Day Trip from Sapporo',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 596.4',
              duration: '10 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015071/asiabylocals/tours/sapporo-otaru-your-way-private-chauffeured-day-trip-from-sapporo/img0.jpg',
            },
          },
          {
            title: 'The Canal: Twenty Minutes, and That\'s Fine',
            icon: 'camera',
            content: 'The Otaru Canal is the image on every Hokkaido poster: a curve of water lined with stone warehouses, cast-iron gas lamps and a wide brick promenade. It was built in 1923 to unload cargo from ships anchored offshore, went obsolete within decades, and was half filled in during the 1980s after a long public fight between developers who wanted a road and residents who wanted the canal. The compromise is what you see — narrower than the original, with a walkway where the other half used to be.\n\nBe realistic about scale. The photogenic stretch is a few hundred metres and you will walk it in twenty minutes. This is not a Venice; it is one very good view. What makes it worth the trip is the timing rather than the duration.\n\nThe gas lamps are lit at dusk, and the warehouses opposite are illuminated. In winter, with snow on the roofs and the water black, the 30 minutes either side of sunset is one of the best photographs in Hokkaido — which in December and January means around 16:00, absurdly early. Plan your day backwards from that. Daytime, in flat light, with tour groups arriving by the coachload from 10:00, the canal is much less than its reputation.',
            tourCard: {
              slug: 'sapporo-chauffeured-full-day-tour',
              title: 'Otaru Your Way: Private Chauffeured Day Trip from Sapporo',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 596.4',
              duration: '10 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015071/asiabylocals/tours/sapporo-otaru-your-way-private-chauffeured-day-trip-from-sapporo/img0.jpg',
            },
          },
          {
            title: 'Sakaimachi Street: Glass, Music Boxes and a Steam Clock',
            icon: 'gem',
            content: 'Sakaimachi is the preserved merchant street running roughly a kilometre from near Minami-Otaru Station down toward the canal, and it is where Otaru\'s day actually happens. It is also comprehensively commercial — this is a shopping street with heritage architecture, not a museum.\n\nGlass is Otaru\'s craft. The industry started making oil lamps and glass floats for the herring fishing fleet, and when both trades died the workshops pivoted to decorative glass. Kitaichi Glass is the big name: several buildings of shop space plus Kitaichi Hall, a cafe lit entirely by around 167 oil lamps that staff light by hand each morning at 09:00 — worth timing for, and worth the price of a coffee.\n\nThe Otaru Music Box Museum sits at the end of the street and is free to enter. It is Japan\'s largest music box retailer, holding thousands of designs across a beautiful 1912 brick-and-timber merchant building. Outside it stands a 5.5-metre, 1.5-tonne steam clock built by Canadian clockmaker Raymond Saunders, which whistles and vents steam every fifteen minutes. It is charming, it is completely free, and it is the most reliably crowded three square metres in Otaru.\n\nAlso on the street: LeTAO for cheesecake, several sake breweries offering free tasting, and a steady run of seafood-grilling stalls. Budget two to three hours for Sakaimachi if you shop, ninety minutes if you do not.',
            tourCard: {
              slug: 'sapporo-chauffeured-full-day-tour',
              title: 'Otaru Your Way: Private Chauffeured Day Trip from Sapporo',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 596.4',
              duration: '10 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015071/asiabylocals/tours/sapporo-otaru-your-way-private-chauffeured-day-trip-from-sapporo/img0.jpg',
            },
          },
          {
            title: 'Sushiya-dori: Better Value Than Sapporo',
            icon: 'utensils',
            content: 'Otaru was a herring port before it was anything else, and it still eats like one. Sushiya-dori — Sushi Street — is a two-to-three-hundred-metre run of somewhere between fifteen and twenty sushi restaurants near the canal, ranging from famous, expensive, reservation-only counters to modest family shops.\n\nThe honest comparison with Sapporo: for sushi specifically, Otaru is better value. A lunch omakase set that would be a serious dinner price in central Sapporo is a reasonable midday spend here, and the sourcing is closer. Lunch sets in the 2,000 to 4,000 yen range are common and good; dinner counters climb quickly from there.\n\nThe practical advice is to eat at 11:30, not 13:00. The street fills with day-trippers off the Sapporo trains between noon and 14:00, and the good shops put out waiting lists. If a place has an English menu in the window and a member of staff outside calling to passers-by, keep walking one more door.\n\nMasazushi is the historic name on the street and takes reservations. If you would rather not plan, walk in early at any shop with a posted lunch set and you will eat well.',
            tourCard: {
              slug: 'sapporo-food-tour',
              title: 'Sapporo Local Food Crawl: Ten-Plus Dishes Across Four Venues',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 120.47',
              duration: '4 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015045/asiabylocals/tours/sapporo-sapporo-local-food-crawl-ten-plus-dishes-across-four-venues/img0.jpg',
            },
          },
          {
            title: 'The Snow Light Path: Worth Timing For, With One Caveat',
            icon: 'flame',
            content: 'The Otaru Snow Light Path — Yuki Akari no Michi — runs 6 to 13 February 2027, with the venues lit daily from 17:00 to 21:00. Volunteers fill the canal and the disused Temiya rail line with thousands of small candle lanterns, floating glass buoys on the water and hollowing snow into lamp shells. There is no admission fee.\n\nOur straightforward verdict: it is better than the Sapporo Snow Festival for atmosphere, and considerably worse for scale. Where Odori Park is monumental and packed, Otaru is small, quiet, hand-made and lit by actual flame. If you only care about photographs and mood, Otaru wins outright. If you want the giant sculptures, it does not compete and is not trying to.\n\nThe caveat is scheduling. The 2027 dates overlap the Sapporo Snow Festival, which runs 4 to 11 February, meaning the same week carries both events — and the same week carries doubled Sapporo hotel prices and a heavy day-trip flow from the city into Otaru each evening. Two consequences follow. First, if you are in Sapporo for the festival, going to Otaru on the 6th to 11th is easy and you should do it. Second, if you are choosing dates purely for Otaru, the 12th and 13th of February 2027 are the smart nights: the lanterns are still lit and the Sapporo festival has ended, taking most of the crowd and the hotel surcharge with it.\n\nA winter practicality: the canal promenade and the Temiya line get very icy underfoot after dark. Wear grippy boots and take it slowly.',
            tourCard: {
              slug: 'sapporo-chauffeured-full-day-tour',
              title: 'Otaru Your Way: Private Chauffeured Day Trip from Sapporo',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 596.4',
              duration: '10 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015071/asiabylocals/tours/sapporo-otaru-your-way-private-chauffeured-day-trip-from-sapporo/img0.jpg',
            },
          },
        ],
        faqs: [
          { q: 'How do I get from Sapporo to Otaru?', a: 'JR from Sapporo Station: 800 yen, about 30 minutes on the Rapid Airport service or 45 minutes on the local train, several departures an hour. Take the local at least one way for the coastal stretch between Zenibako and Otaru, sitting on the left side heading north.' },
          { q: 'How long do I need in Otaru?', a: 'Five to six hours covers it properly: about ninety minutes to three hours on Sakaimachi Street, a sushi lunch, and the canal at dusk. A rushed three-hour visit works but you will miss the lamp-lighting, which is the best part. Get off at Minami-Otaru, walk downhill to the canal, and depart from Otaru Station to avoid backtracking.' },
          { q: 'What time should I visit the Otaru Canal?', a: 'Late afternoon, timed for the gas lamps being lit at dusk. In December and January that means around 16:00; in summer, closer to 19:00. Daytime canal photographs are flat and the promenade is at its busiest with coach groups from about 10:00 to 14:00.' },
          { q: 'Is the Otaru Snow Light Path worth planning around?', a: 'Yes if you value atmosphere over scale — thousands of hand-lit candle lanterns along the canal and the old Temiya railway, free to attend, 17:00 to 21:00. The 2027 run is 6 to 13 February. If you can, aim for the 12th or 13th, after the Sapporo Snow Festival ends on the 11th, when the crowds and hotel rates drop but the lanterns are still burning.' },
          { q: 'Is Otaru better for sushi than Sapporo?', a: 'For value, yes. Sushiya-dori has fifteen to twenty shops in a short stretch and lunch sets commonly run 2,000 to 4,000 yen for quality that costs noticeably more in central Sapporo. Eat at 11:30 before the day-trip wave arrives, and avoid the shops with staff touting outside.' },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How do I get from Sapporo to Otaru?", "acceptedAnswer": {"@type": "Answer", "text": "JR from Sapporo Station: 800 yen, about 30 minutes on the Rapid Airport service or 45 minutes on the local train, several departures an hour. Take the local at least one way for the coastal stretch between Zenibako and Otaru, sitting on the left side heading north."}}, {"@type": "Question", "name": "How long do I need in Otaru?", "acceptedAnswer": {"@type": "Answer", "text": "Five to six hours covers it properly: about ninety minutes to three hours on Sakaimachi Street, a sushi lunch, and the canal at dusk. A rushed three-hour visit works but you will miss the lamp-lighting, which is the best part. Get off at Minami-Otaru, walk downhill to the canal, and depart from Otaru Station to avoid backtracking."}}, {"@type": "Question", "name": "What time should I visit the Otaru Canal?", "acceptedAnswer": {"@type": "Answer", "text": "Late afternoon, timed for the gas lamps being lit at dusk. In December and January that means around 16:00; in summer, closer to 19:00. Daytime canal photographs are flat and the promenade is at its busiest with coach groups from about 10:00 to 14:00."}}, {"@type": "Question", "name": "Is the Otaru Snow Light Path worth planning around?", "acceptedAnswer": {"@type": "Answer", "text": "Yes if you value atmosphere over scale — thousands of hand-lit candle lanterns along the canal and the old Temiya railway, free to attend, 17:00 to 21:00. The 2027 run is 6 to 13 February. If you can, aim for the 12th or 13th, after the Sapporo Snow Festival ends on the 11th, when the crowds and hotel rates drop but the lanterns are still burning."}}, {"@type": "Question", "name": "Is Otaru better for sushi than Sapporo?", "acceptedAnswer": {"@type": "Answer", "text": "For value, yes. Sushiya-dori has fifteen to twenty shops in a short stretch and lunch sets commonly run 2,000 to 4,000 yen for quality that costs noticeably more in central Sapporo. Eat at 11:30 before the day-trip wave arrives, and avoid the shops with staff touting outside."}}]}]},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015029/asiabylocals/tours/sapporo-sapporo-golden-route-morning-walk-past-the-clock-tower-and-tv-tower/img0.jpg',
      };

        case 'niseko-and-hokkaido-ski-guide':
            return {
        title: 'Skiing from Sapporo: Niseko, Rusutsu, Kiroro and Teine Compared',
        seoTitle: 'Niseko & Hokkaido Ski Guide',
        description: 'Hokkaido\'s four main ski resorts compared on snow, price and access, with 2026-27 lift pass costs and an honest verdict on Niseko\'s crowds.',
        fastFacts: [
          { icon: 'snowflake', label: 'Niseko snowfall', value: 'About 15 m a season; Rusutsu and Kiroro around 12 m' },
          { icon: 'ticket', label: 'Peak day pass', value: 'Niseko 13,500 yen; Teine 8,400 yen online; Rusutsu from about 5,750 yen' },
          { icon: 'calendar', label: 'Powder window', value: 'Late December to late February, peaking in January' },
          { icon: 'bus', label: 'Airport to Niseko', value: '2.5-3 hours, about 2,600 yen one way in winter' },
        ],
        sections: [
          {
            title: 'Why Hokkaido Snow Is Different',
            icon: 'snowflake',
            content: 'The reason Hokkaido became a global ski destination is a specific piece of geography. Cold Siberian air crosses the relatively warm Sea of Japan, picks up moisture, and dumps it the moment it hits the mountains of western Hokkaido. The result is snow that falls in extraordinary volume at consistently low temperatures, which means very low moisture content — the light, dry, bottomless powder that gets called Japow.\n\nThe numbers are not marketing. Niseko averages roughly 15 metres of snowfall a season on long-run Japan Meteorological Agency records, with some seasons pushing 20. Rusutsu and Kiroro sit at around 12 metres. For comparison, a very good season in the European Alps or Colorado is a fraction of that.\n\nThe trade-off nobody mentions in the brochures: all that snowfall means cloud. Bluebird days in January are rare, visibility in the trees is often poor, and if your ideal ski holiday is sunshine on groomed pistes, Hokkaido in deep winter is the wrong choice. You are trading views for snow depth, and it is a trade most powder skiers make happily.\n\nThe reliable powder window is roughly late December to late February, with January the peak month by a clear margin. December is building base — good, but variable. March skis well and is far cheaper, but the light dry snow starts turning heavier toward the end.',
            tourCard: {
              slug: 'sapporo-inclusive-private-tour',
              title: 'Sapporo Teine Powder Day: All-Inclusive Private Ski or Snowboard Class',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 175.67',
              duration: '6 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015052/asiabylocals/tours/sapporo-sapporo-teine-powder-day-all-inclusive-private-ski-or-snowboard-class/img0.jpg',
            },
          },
          {
            title: 'The Four Resorts, Honestly Compared',
            icon: 'mountain-snow',
            content: 'Niseko United is four interconnected resorts — Grand Hirafu, Hanazono, Niseko Village and Annupuri — on one mountain, about two and a half to three hours from New Chitose Airport. It has the most terrain, the most reliable snow, the only genuinely international village with proper restaurants and bars, and by far the most English-speaking instructors. It is also the busiest and most expensive skiing in Japan, and in peak January the Hirafu base lifts have real queues.\n\nRusutsu, about two hours from the airport and roughly ninety minutes from Sapporo, is the connoisseur\'s pick. Three mountains, outstanding tree skiing that stays untracked far longer than Niseko\'s, and around 12 metres of snow. The resort is a self-contained complex rather than a village, which means limited dining outside the hotels and a slightly odd bubble atmosphere, but the skiing is arguably better value than Niseko\'s.\n\nKiroro is the snowiest-feeling of the group and the quietest of the big three, roughly 90 minutes from Sapporo. Excellent for intermediates, strict about backcountry gate access, and with almost no nightlife. It is the choice if you want deep snow and early nights.\n\nSapporo Teine is the outlier: it is inside Sapporo\'s city limits, about 40 to 60 minutes from downtown, and it is where locals ski after work. Two zones — a gentle Olympia area and a steeper Highland area with genuine terrain from the 1972 Olympics — and a view down over the city and the sea that none of the others can match. It gets less snow than the resorts inland and it is not a destination mountain, but as a day trip from a Sapporo hotel it is unbeatable on convenience.',
            tourCard: {
              slug: 'sapporo-inclusive-private-tour',
              title: 'Sapporo Teine Powder Day: All-Inclusive Private Ski or Snowboard Class',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 175.67',
              duration: '6 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015052/asiabylocals/tours/sapporo-sapporo-teine-powder-day-all-inclusive-private-ski-or-snowboard-class/img0.jpg',
            },
          },
          {
            title: 'Lift Pass Prices for 2026-27',
            icon: 'ticket',
            content: 'Niseko United\'s all-mountain day pass for 2026-27 is 13,500 yen in peak season, defined as 24 December 2026 to 28 February 2027. Regular season, covering mid-December and most of March, is 12,600 yen; the early and spring windows drop to 8,800 yen and then 6,300 yen into the final weeks. Buying through Niseko United\'s own online store shaves roughly five percent off — about 12,800 yen for a peak day — plus a one-time 500 yen fee for the reusable gate card, versus a 1,000 yen deposit if you buy in person.\n\nTwo Niseko pricing traps are worth naming. The Hanazono-Hirafu two-resort ticket is 12,500 yen at peak — only 1,000 yen less than the full all-mountain pass, for roughly 60 percent of the terrain. Almost nobody should buy it. And teenagers aged 13 to 15 pay 11,500 yen, close to the adult rate; only ages 4 to 12 get the child price of 8,100 yen. Families budgeting on the assumption that teens ski cheap will be unpleasantly surprised.\n\nThe alternatives are meaningfully cheaper. Annupuri alone, at the quiet end of the Niseko massif, has sold standalone day passes around 7,000 yen — real value for beginners who will never use the far side of the mountain. Rusutsu day passes have run roughly 5,750 to 7,400 yen depending on date and advance purchase. Sapporo Teine is 8,400 yen online or 9,400 yen at the counter in regular season, dropping to 6,200 yen online from mid-March. Kiroro releases its season pricing in September, and its webstore typically discounts around five percent.\n\nThe pattern is clear: skiing Niseko costs roughly double skiing Rusutsu or Teine for snow that is better but not twice as good.',
            tourCard: {
              slug: 'sapporo-inclusive-private-tour',
              title: 'Sapporo Teine Powder Day: All-Inclusive Private Ski or Snowboard Class',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 175.67',
              duration: '6 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015052/asiabylocals/tours/sapporo-sapporo-teine-powder-day-all-inclusive-private-ski-or-snowboard-class/img0.jpg',
            },
          },
          {
            title: 'Getting There from Sapporo and the Airport',
            icon: 'bus',
            content: 'You do not need a car for any of these, and in winter you are usually better off without one.\n\nFor Niseko, the winter resort buses run December to March from New Chitose Airport to the Grand Hirafu area, taking around two and a half to three hours, at roughly 2,600 yen one way or 4,500 yen return, with some services stopping at Rusutsu en route. Book ahead in January; these fill. Private transfers and shared vans cost considerably more but save you the terminal wait.\n\nRusutsu runs its own shuttle from New Chitose in about 120 minutes, priced around 5,500 yen one way at the counter or 5,000 yen booked online, plus a separate Sapporo shuttle on a similar two-hour run. There is also a Niseko-to-Rusutsu powder day-trip shuttle in midwinter, around 45 minutes each way, if you are based in Niseko and want a day on quieter trees.\n\nKiroro is the easiest day trip from Sapporo at roughly 90 minutes by resort shuttle, and Teine is a 40 to 60 minute run by shuttle bus or by JR to Teine Station plus a connecting bus. Both are realistic as day trips from a Sapporo hotel, which is the single biggest argument for basing in the city rather than at a resort.\n\nOn renting a car: Hokkaido rentals from November to April come with studless winter tyres by law and practice, and most agencies offer 4WD. But mountain roads to Niseko and Rusutsu are frequently snow-covered and occasionally closed, and safe speeds are around half the posted limit. If you have never driven on packed snow, take the bus.',
            tourCard: {
              slug: 'sapporo-inclusive-private-tour',
              title: 'Sapporo Teine Powder Day: All-Inclusive Private Ski or Snowboard Class',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 175.67',
              duration: '6 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015052/asiabylocals/tours/sapporo-sapporo-teine-powder-day-all-inclusive-private-ski-or-snowboard-class/img0.jpg',
            },
          },
          {
            title: 'Which One Should You Actually Book?',
            icon: 'scale',
            content: 'First-time visitor to Japan, skiing with family, wants English-speaking ski school and restaurants that are open at 21:00: Niseko. You will pay for it and you will queue, but it is the only resort here built for international visitors end to end, and the ski schools are genuinely good.\n\nStrong intermediate or advanced skier chasing untracked snow: Rusutsu. Better tree skiing, fewer people fighting you for it, and a day pass at roughly half Niseko\'s price. Kiroro is the same argument with even fewer people and less to do in the evening.\n\nOn a budget, or only have one or two ski days inside a Sapporo city trip: Teine. You can leave a downtown hotel after breakfast, ski a full day with a view over Ishikari Bay, and be back for ramen in Susukino by 19:00. No transfer costs, no resort accommodation premium.\n\nComplete beginner: Annupuri or Kiroro, not Hirafu. The terrain is gentler, the lift queues shorter, and you are not paying 13,500 yen a day for expert terrain you will not touch.\n\nOur honest position on Niseko\'s reputation: the snow deserves it, the prices have outrun it. The resort is now priced as an international luxury destination and a peak-January week there will cost more than the equivalent week in most of the Alps. The snow is still world-class, and if the powder is the whole point of your trip, it is defensible. But a traveller who books Rusutsu or Kiroro instead gets 80 to 90 percent of the snow quality, more of it untracked, for close to half the daily cost — and can spend the difference on a few more days in Sapporo.',
            tourCard: {
              slug: 'sapporo-inclusive-private-tour',
              title: 'Sapporo Teine Powder Day: All-Inclusive Private Ski or Snowboard Class',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 175.67',
              duration: '6 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015052/asiabylocals/tours/sapporo-sapporo-teine-powder-day-all-inclusive-private-ski-or-snowboard-class/img0.jpg',
            },
          },
        ],
        faqs: [
          { q: 'When is the best time to ski in Hokkaido?', a: 'January, without much debate — it is the coldest, driest and snowiest month, and Niseko has recorded January totals ranging from about 160 cm to 460 cm over the past decade. Late December has a good base and a festive atmosphere but more variability. February still skis very well. March is cheaper and sunnier but the snow gets heavier toward the end.' },
          { q: 'How much is a Niseko lift pass in 2026-27?', a: 'The all-mountain adult day pass is 13,500 yen during peak season, 24 December 2026 to 28 February 2027, dropping to 12,600 yen in regular season and 8,800 yen or less in the early and spring windows. Buying via the official online store saves about five percent, with a one-off 500 yen card fee. Children aged 4 to 12 pay 8,100 yen; note that 13 to 15 year olds pay 11,500 yen, close to adult price.' },
          { q: 'Can I ski as a day trip from Sapporo?', a: 'Yes. Sapporo Teine is 40 to 60 minutes from downtown and Kiroro about 90 minutes, both easily done as day trips from a city hotel. Rusutsu at roughly two hours is possible but a long day. Niseko at two and a half to three hours is not sensible as a day trip — stay there if you want to ski it properly.' },
          { q: 'Is Niseko too crowded?', a: 'In peak January, the Hirafu base lifts genuinely queue and fresh snow gets tracked out fast by mid-morning. It is not crowded by European or North American standards, but it is by Japanese ones. If untracked snow matters more to you than nightlife and dining, Rusutsu and Kiroro deliver similar snow with far less pressure and about half the lift pass price.' },
          { q: 'Do I need a car to reach the ski resorts?', a: 'No. Winter resort buses connect New Chitose Airport and Sapporo to all four resorts — Niseko from about 2,600 yen one way, Rusutsu around 5,000 to 5,500 yen. Rentals do include studless winter tyres from November to April, but mountain roads are snow-covered and demand roughly half the posted speed. If you have not driven on packed snow before, take the bus.' },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "When is the best time to ski in Hokkaido?", "acceptedAnswer": {"@type": "Answer", "text": "January, without much debate — it is the coldest, driest and snowiest month, and Niseko has recorded January totals ranging from about 160 cm to 460 cm over the past decade. Late December has a good base and a festive atmosphere but more variability. February still skis very well. March is cheaper and sunnier but the snow gets heavier toward the end."}}, {"@type": "Question", "name": "How much is a Niseko lift pass in 2026-27?", "acceptedAnswer": {"@type": "Answer", "text": "The all-mountain adult day pass is 13,500 yen during peak season, 24 December 2026 to 28 February 2027, dropping to 12,600 yen in regular season and 8,800 yen or less in the early and spring windows. Buying via the official online store saves about five percent, with a one-off 500 yen card fee. Children aged 4 to 12 pay 8,100 yen; note that 13 to 15 year olds pay 11,500 yen, close to adult price."}}, {"@type": "Question", "name": "Can I ski as a day trip from Sapporo?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Sapporo Teine is 40 to 60 minutes from downtown and Kiroro about 90 minutes, both easily done as day trips from a city hotel. Rusutsu at roughly two hours is possible but a long day. Niseko at two and a half to three hours is not sensible as a day trip — stay there if you want to ski it properly."}}, {"@type": "Question", "name": "Is Niseko too crowded?", "acceptedAnswer": {"@type": "Answer", "text": "In peak January, the Hirafu base lifts genuinely queue and fresh snow gets tracked out fast by mid-morning. It is not crowded by European or North American standards, but it is by Japanese ones. If untracked snow matters more to you than nightlife and dining, Rusutsu and Kiroro deliver similar snow with far less pressure and about half the lift pass price."}}, {"@type": "Question", "name": "Do I need a car to reach the ski resorts?", "acceptedAnswer": {"@type": "Answer", "text": "No. Winter resort buses connect New Chitose Airport and Sapporo to all four resorts — Niseko from about 2,600 yen one way, Rusutsu around 5,000 to 5,500 yen. Rentals do include studless winter tyres from November to April, but mountain roads are snow-covered and demand roughly half the posted speed. If you have not driven on packed snow before, take the bus."}}]}]},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015029/asiabylocals/tours/sapporo-sapporo-golden-route-morning-walk-past-the-clock-tower-and-tv-tower/img0.jpg',
      };

        case 'sapporo-3-day-itinerary':
            return {
        title: '3 Days in Sapporo: A Realistic Itinerary That Actually Works',
        seoTitle: '3 Days in Sapporo: Itinerary',
        description: 'A tested three-day Sapporo plan with real timings, transport costs and winter and summer variants — including Otaru and a ski or day-trip option.',
        fastFacts: [
          { icon: 'clock', label: 'Ideal length', value: '3 full days: 2 city, 1 day trip' },
          { icon: 'wallet', label: 'Daily budget', value: '8,000-12,000 yen per person excluding hotel' },
          { icon: 'sunset', label: 'Winter sunset', value: 'About 16:10 in early January - plan around it' },
          { icon: 'mountain', label: 'Mt Moiwa ropeway', value: '2,100 yen return; streetcar 230 yen to the base' },
        ],
        sections: [
          {
            title: 'How to Use This Plan',
            icon: 'compass',
            content: 'Three full days is the right length for Sapporo: two days for the city, one for a day trip. Anything less and you are choosing between Otaru and the food; anything more and you should be adding Furano, Noboribetsu or a ski resort rather than stretching the city.\n\nA few assumptions built into the timings. Distances in central Sapporo are short — the entire core is a fifteen-minute walk or a 210 yen subway hop — so we have not padded transit. Winter days are short: sunset in early January is around 16:10, and any outdoor sightseeing needs to happen before 15:30. And Hokkaido restaurants close earlier than Tokyo ones, with many ramen and soup curry shops shutting by 21:00, so dinner is planned at 18:30 rather than 20:30.\n\nIf your days fall on a weekend, buy the 520 yen Donichika subway pass each morning. On weekdays just tap an IC card — the 830 yen weekday pass rarely pays back.\n\nWhere winter and summer diverge substantially, we have flagged both versions rather than pretending one plan works year-round. It does not.',
          },
          {
            title: 'Day 1: The Centre, Odori, and Susukino at Night',
            icon: 'sunset',
            content: '09:00 — Start at Nijo Market while it is still a working market rather than a queue. A kaisendon here runs roughly 1,480 to 3,800 yen depending on whether you go for uni and crab; a cheaper option is to graze on grilled scallops and eat properly later. Allow an hour.\n\n10:30 — Walk ten minutes west to the Former Hokkaido Government Office, the red-brick 1888 building, then the Sapporo Clock Tower. Be warned about the Clock Tower: it is Japan\'s most famously underwhelming landmark, a small wooden building hemmed in by offices, and it takes twelve minutes. Go, take the photograph, move on.\n\n12:00 — Lunch is soup curry, ideally at Suage+ or Garaku near Odori. Budget 1,200 to 1,800 yen and expect to queue 20 to 30 minutes at peak. Choose a mid-range spice level; the scale is not decorative.\n\n13:30 — Odori Park, the 1.5 km green spine of the city. In winter this is the Snow Festival or White Illumination site; in summer it is fountains and the Beer Garden. Go up the Sapporo TV Tower at the east end for 1,200 yen, or 1,700 yen for a day-and-night combined ticket — the second option is genuinely good value in winter because dusk arrives before you have finished the rest of the day.\n\n15:30 — Tanukikoji, the covered seven-block shopping arcade, which is the correct place to be when it is snowing. It runs directly into the northern end of Susukino.\n\n18:30 — Dinner: jingisukan. Daruma in Susukino for the small, smoky, local version, or the Sapporo Beer Garden for the all-you-can-eat hall at about 3,800 yen for 100 minutes. Then walk the Susukino neon, and finish with a bowl at Ganso Ramen Yokocho around 22:00 — late-night ramen after drinking is the local custom, not a tourist stunt.',
            tourCard: {
              slug: 'sapporo-food-tour',
              title: 'Sapporo Local Food Crawl: Ten-Plus Dishes Across Four Venues',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 120.47',
              duration: '4 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015045/asiabylocals/tours/sapporo-sapporo-local-food-crawl-ten-plus-dishes-across-four-venues/img0.jpg',
            },
          },
          {
            title: 'Day 2: Otaru, and the Canal at Dusk',
            icon: 'train-front',
            content: 'Give the whole day to Otaru. Trying to squeeze it into an afternoon is the single most common mistake on a Sapporo trip.\n\n09:30 — JR from Sapporo Station, 800 yen. Take the local train, 45 minutes, and sit on the left for the coastal stretch. Get off at Minami-Otaru rather than Otaru Station.\n\n10:30 — Walk down Sakaimachi Street from the Minami-Otaru end. Kitaichi Glass first, including Kitaichi Hall, the cafe lit by around 167 oil lamps that staff light by hand each morning at 09:00. Then the Otaru Music Box Museum, which is free, and the 5.5-metre steam clock outside it that whistles every fifteen minutes.\n\n11:45 — Sushi lunch on Sushiya-dori, deliberately early. Lunch sets commonly run 2,000 to 4,000 yen for quality that costs more in central Sapporo, and the street fills with Sapporo day-trippers from about 12:30.\n\n13:30 — Sake tasting at Tanaka Shuzo Kikkogura, free, then the Bank of Japan Otaru Museum in the old financial district, also free, which explains why a fishing town has this much stone architecture.\n\n15:30 — The canal. Time your arrival so you are there when the gas lamps are lit at dusk — around 16:00 in midwinter, closer to 19:00 in summer. Twenty minutes of walking, but the right twenty minutes.\n\n17:30 — Return from Otaru Station. If you are visiting between 6 and 13 February 2027, stay instead for the Snow Light Path, lit 17:00 to 21:00, and take a later train back.',
            tourCard: {
              slug: 'sapporo-chauffeured-full-day-tour',
              title: 'Otaru Your Way: Private Chauffeured Day Trip from Sapporo',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 596.4',
              duration: '10 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015071/asiabylocals/tours/sapporo-otaru-your-way-private-chauffeured-day-trip-from-sapporo/img0.jpg',
            },
          },
          {
            title: 'Day 3, Winter Version: Snow, a Mountain, and a View',
            icon: 'snowflake',
            content: 'The third day should get you out of the downtown grid, and in winter that means either skiing or a hot spring.\n\nOption A, skiing: Sapporo Teine is 40 to 60 minutes from downtown by shuttle or JR plus bus, and a day pass is 8,400 yen bought online versus 9,400 yen at the counter in regular season. You can leave your hotel at 08:30, ski a full day with a view over Ishikari Bay, and be back in Susukino for dinner. Rental gear is available on site. This is the best-value ski day in Japan for a city-based traveller.\n\nOption B, onsen: Jozankei is about an hour by bus from Sapporo Station, a hot spring valley in a gorge that is spectacular under snow. Day-use bathing at the larger ryokan typically costs 1,000 to 2,000 yen. Go in the morning, return mid-afternoon.\n\nOption C, city winter: Shiroi Koibito Park in the west of the city, a slightly surreal chocolate factory built as a European fantasy village, then the Sapporo Beer Museum in the afternoon — the guided premium tour with two tastings needs advance booking.\n\nWhichever you choose, end the same way: the Mount Moiwa ropeway at dusk. The combined ropeway and mini cable car round trip is 2,100 yen for adults and 1,050 yen for children, reached via the streetcar loop to Ropeway Iriguchi for a flat 230 yen. The night view over Sapporo from the summit is the best single sight in the city and it is at its best in winter, when the snow reflects the lights. Go up about 40 minutes before sunset so you see the transition, not just the dark.',
            tourCard: {
              slug: 'sapporo-inclusive-private-tour',
              title: 'Sapporo Teine Powder Day: All-Inclusive Private Ski or Snowboard Class',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 175.67',
              duration: '6 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015052/asiabylocals/tours/sapporo-sapporo-teine-powder-day-all-inclusive-private-ski-or-snowboard-class/img0.jpg',
            },
          },
          {
            title: 'Day 3, Summer Version, and Practical Adjustments',
            icon: 'sun',
            content: 'In summer the third day belongs outside the city.\n\nIf you are here between late June and about 20 July, spend it on Furano and Biei. It is roughly two and a half hours each way, so this is a genuinely full day — leave by 07:30 and expect to be back after 19:00. The reward is Farm Tomita\'s lavender at peak, plus the patchwork hills around Biei. Outside that window the trip is much weaker; do not make it in August expecting flowers.\n\nIf lavender is out of season, the better summer day is Moerenuma Park in the morning — Isamu Noguchi\'s landscape sculpture park, with its glass pyramid and artificial mountain, which is one of the most underrated things in Hokkaido — followed by an afternoon at Maruyama Park and Hokkaido Shrine, and an evening at the Odori Park Beer Garden, which fills the whole park through late July and August.\n\nA few adjustments that apply in any season. Sapporo restaurants close early, so eat dinner by 19:00 rather than 21:00. Museums and the market are closed on scattered Wednesdays — check before building a day around one. In winter, add 30 percent to every walking estimate for ice and clothing, and use the Chi-Ka-Ho underground walkway between Sapporo Station and Odori rather than the surface. And keep cash on you: small ramen shops, market stalls and older izakayas frequently do not take cards, whatever their window sticker says.\n\nFinally, if you have a fourth day, spend it on Noboribetsu Onsen rather than more city. Sapporo rewards three days well and a fifth day poorly.',
            tourCard: {
              slug: 'sapporo-full-day-tour',
              title: 'Hokkaido Day Trip from Sapporo: Asahiyama Zoo, Blue Pond & Shirahige Falls',
              description: 'A top-rated Sapporo experience, bookable directly through AsiaByLocals.',
              price: 'From USD 56.92',
              duration: '9 hours',
              image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788014991/asiabylocals/tours/sapporo-hokkaido-day-trip-from-sapporo-asahiyama-zoo-blue-pond-shirahige-falls/img0.jpg',
            },
          },
        ],
        faqs: [
          { q: 'Is three days enough for Sapporo?', a: 'Yes, for the city plus one day trip. Two days forces you to choose between Otaru and doing the city properly. Beyond three days you should be adding Noboribetsu, Furano or a ski resort rather than looking for more downtown sights — the central attractions are compact and you will run out of them.' },
          { q: 'What should I skip in Sapporo?', a: 'The Clock Tower deserves twelve minutes, not an hour — it is famously underwhelming and surrounded by office blocks. The Ramen Republic food court above Sapporo Station is convenient but should not be your one great ramen meal. And unless you are travelling with children, the Tsudome Snow Festival site is a 40-minute round trip for snow slides.' },
          { q: 'How much should I budget per day?', a: 'Excluding accommodation, a comfortable day runs about 8,000 to 12,000 yen per person: 3,000 to 5,000 on food, around 1,000 on transport, and 2,000 to 3,000 on one paid attraction such as the TV Tower at 1,200 yen or the Mount Moiwa ropeway at 2,100 yen. A ski day or a Furano trip pushes that day well past 20,000 yen.' },
          { q: 'What time does it get dark in Sapporo in winter?', a: 'Around 16:10 in early January, which is much earlier than most visitors plan for. Finish outdoor sightseeing by 15:30, and treat 16:00 to 17:00 as your illumination window rather than a gap in the day — the Mount Moiwa ropeway and the Otaru Canal are both best in exactly that hour.' },
          { q: 'Can I do this itinerary without a car?', a: 'Entirely. Everything here is reachable by subway, streetcar, JR or resort shuttle, and in winter that is safer and faster than driving. The Donichika weekend subway pass at 520 yen covers a full day of city travel, Otaru is 800 yen each way by JR, and both Teine and Jozankei have direct bus services from central Sapporo.' },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is three days enough for Sapporo?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, for the city plus one day trip. Two days forces you to choose between Otaru and doing the city properly. Beyond three days you should be adding Noboribetsu, Furano or a ski resort rather than looking for more downtown sights — the central attractions are compact and you will run out of them."}}, {"@type": "Question", "name": "What should I skip in Sapporo?", "acceptedAnswer": {"@type": "Answer", "text": "The Clock Tower deserves twelve minutes, not an hour — it is famously underwhelming and surrounded by office blocks. The Ramen Republic food court above Sapporo Station is convenient but should not be your one great ramen meal. And unless you are travelling with children, the Tsudome Snow Festival site is a 40-minute round trip for snow slides."}}, {"@type": "Question", "name": "How much should I budget per day?", "acceptedAnswer": {"@type": "Answer", "text": "Excluding accommodation, a comfortable day runs about 8,000 to 12,000 yen per person: 3,000 to 5,000 on food, around 1,000 on transport, and 2,000 to 3,000 on one paid attraction such as the TV Tower at 1,200 yen or the Mount Moiwa ropeway at 2,100 yen. A ski day or a Furano trip pushes that day well past 20,000 yen."}}, {"@type": "Question", "name": "What time does it get dark in Sapporo in winter?", "acceptedAnswer": {"@type": "Answer", "text": "Around 16:10 in early January, which is much earlier than most visitors plan for. Finish outdoor sightseeing by 15:30, and treat 16:00 to 17:00 as your illumination window rather than a gap in the day — the Mount Moiwa ropeway and the Otaru Canal are both best in exactly that hour."}}, {"@type": "Question", "name": "Can I do this itinerary without a car?", "acceptedAnswer": {"@type": "Answer", "text": "Entirely. Everything here is reachable by subway, streetcar, JR or resort shuttle, and in winter that is safer and faster than driving. The Donichika weekend subway pass at 520 yen covers a full day of city travel, Otaru is 800 yen each way by JR, and both Teine and Jozankei have direct bus services from central Sapporo."}}]}]},
        heroImage: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788015029/asiabylocals/tours/sapporo-sapporo-golden-route-morning-walk-past-the-clock-tower-and-tv-tower/img0.jpg',
      };

        default:
            return null;
    }
}
