// Nuwara-Eliya authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getNuwaraEliyaInfoContent() -> getCityInfoContent().
//
// Every tourCard slug is taken from the live tour list for this city.
import type { CityInfoData } from './cityInfoContent';

export function getNuwaraEliyaInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    case "nuwara-eliya-tea-guide":
      return {
        title: "Ceylon Tea at Nuwara Eliya: How a Factory Visit Works and What the Grades Mean",
        seoTitle: "Nuwara Eliya Tea Factory Guide",
        description: "What actually happens inside a working tea factory, why one bush yields six graded products, and the estate history most tours leave out.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375991/asiabylocals/tours/nuwaraeliya-or-nanu-oya-to-kandy-tour-tea-waterfalls-view/img0.jpg",
        fastFacts: [
          { icon: "clock", label: "Factory tour", value: "About 45 minutes, ending with a tasting" },
          { icon: "calendar-days", label: "Closed on", value: "Poya (full moon) days — every month" },
          { icon: "clock", label: "Plucking happens", value: "Mornings; the slopes are empty by afternoon" },
          { icon: "map", label: "Altitude", value: "Nuwara Eliya sits at about 1,900 m" },
          { icon: "info", label: "High-grown tea", value: "Above 1,200 m — lighter, brisker, most prized" },
          { icon: "info", label: "First planted", value: "1867, at Loolkandura near Kandy" },
        ],
        sections: [
          {
            title: "Ceylon Tea at Nuwara Eliya: How a Factory Visit Works and What the Grades Mean",
            icon: "leaf",
            content: "Sri Lanka was a coffee island until the 1860s, when a leaf blight destroyed the crop almost completely. James Taylor planted the first commercial tea at Loolkandura near Kandy in 1867, on nineteen acres, and within thirty years tea had covered the highlands.\n\nNuwara Eliya sits at about 1,900 metres, which puts it in the high-grown category — above 1,200 metres — and high-grown Ceylon is the most prized. Altitude slows growth, the leaf develops more slowly, and the resulting tea is lighter in colour and brisker in taste than the low-grown teas from the south.\n\nA factory visit here is genuinely worth the forty-five minutes it takes, and not because of the tasting at the end. It is because the process explains something you cannot see from the road: that the plucked leaf from a single bush becomes six or more graded products selling at wildly different prices, and the difference is made almost entirely in the building.\n\nMost visitors arrive thinking tea grades describe quality. They mostly describe leaf size.",
            tourCard: {
              slug: "nuwara-eliya-to-kandy-transfer-with-tea-plantations-and-ramboda-falls",
              title: "Nuwara Eliya to Kandy Transfer with Tea Plantations and Ramboda Falls",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 48.75",
              duration: "7 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375991/asiabylocals/tours/nuwaraeliya-or-nanu-oya-to-kandy-tour-tea-waterfalls-view/img0.jpg",
            },
          },
          {
            title: "What happens inside",
            icon: "settings",
            content: "**Withering.** The plucked leaf — two leaves and a bud, taken by hand — is spread on long troughs and air is blown through it for twelve to sixteen hours. It loses about half its moisture and becomes limp enough to roll without shattering.\n\n**Rolling.** Machines twist and crush the withered leaf, breaking the cell walls so the juices come to the surface. This is where oxidation begins and where the leaf takes the shape it will keep.\n\n**Oxidation.** The rolled leaf is spread out in a cool humid room and left. It turns from green to coppery brown over one to three hours, and the whole character of the finished tea is decided here. Stop it early and you get something lighter; leave it and you get something darker and stronger. Green tea skips this stage entirely — same plant, different decision.\n\n**Firing.** Hot air kills the oxidation dead and dries the leaf to about three percent moisture.\n\n**Grading.** Mesh sieves sort by particle size, and this is what the letters mean. OP is a long wiry whole leaf. BOP is broken orange pekoe, smaller. Fannings and dust are smaller still and go into teabags, where the higher surface area brews fast and strong.\n\nBigger leaf is not better tea. It is slower tea.",
            tourCard: {
              slug: "nuwara-eliya-kandy-sightseeing-transfer",
              title: "Nuwara Eliya to Kandy Sightseeing Transfer",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 46.37",
              duration: "6 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369035/asiabylocals/tours/from-nuwara-eliya-to-kandy-drop-tour/img0.png",
            },
          },
          {
            title: "The estates, and the people on them",
            icon: "info",
            content: "This is the part factory tours skip and it is worth knowing.\n\nThe British could not persuade Sinhalese villagers to work the plantations, so from the 1830s they brought labourers from Tamil Nadu in southern India — hundreds of thousands of them, walked in over the mountains, with high mortality on the journey. Their descendants, the Malaiyaha or Up-Country Tamils, are still the estate workforce today, living in the line rooms you pass on every hill road.\n\nAt independence in 1948 they were stripped of citizenship and effectively stateless for decades; the last of that was only resolved in 2003. Wages on the estates remain among the lowest in the country and have been the subject of repeated strikes.\n\nPlucking is done by hand, almost entirely by women, who carry the leaf in bags supported from the head and must meet a daily weight quota. Watching it for ten minutes changes how the hillside looks.\n\nNone of this is a reason not to visit a factory. It is a reason to buy your tea at the factory rather than in a tourist shop, and to tip the person who shows you round.",
            tourCard: {
              slug: "nuwara-eliya-to-kandy-transfer-with-tea-plantations-and-ramboda-falls",
              title: "Nuwara Eliya to Kandy Transfer with Tea Plantations and Ramboda Falls",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 48.75",
              duration: "7 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375991/asiabylocals/tours/nuwaraeliya-or-nanu-oya-to-kandy-tour-tea-waterfalls-view/img0.jpg",
            },
          },
          {
            title: "Practicalities",
            icon: "clock",
            content: "Factories close on poya days — the monthly full moon, a public holiday in Sri Lanka — and this catches out a lot of people. If your one free day is a poya, an estate walk with a plucker is the substitute and is arguably more interesting.\n\nPlucking happens in the morning. If you want to see the fields being worked rather than just looking at them, go before ten; by afternoon the slopes are empty.\n\nMost factories charge a small entry, a few hundred rupees, sometimes waived if you buy tea. Photography inside is usually restricted around the machinery.\n\nBuy at the factory. The grades sold on the main streets of Nuwara Eliya and Ella are sold at visitor prices, and factory shops carry the higher grades that never reach a tourist shelf. Silver tips and the better OP grades are worth carrying home; the cheap boxed tea in town is fannings.\n\nAsk which estate the tea in front of you actually came from. A good factory will tell you the elevation and the season, and Uva teas from the June-to-September dry wind period are distinct enough that tasters can identify them blind.",
            tourCard: {
              slug: "nuwara-eliya-to-sigiriya-guided-transfer-with-tea-estates-and-dambulla",
              title: "Nuwara Eliya to Sigiriya Guided Transfer with Tea Estates and Dambulla",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 65.95",
              duration: "7 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375886/asiabylocals/tours/nuwara-eliya-to-sigiriya-transfer-with-temples-tea-tour/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "What happens on a tea factory tour?", a: "Withering the plucked leaf for 12-16 hours, rolling it to break the cell walls, oxidising it for one to three hours, firing it dry, and grading it by particle size. About 45 minutes, ending with a tasting. The process is what decides the finished tea, not the bush." },
          { q: "What do tea grades like OP and BOP mean?", a: "Mostly leaf size, not quality. OP is a long wiry whole leaf, BOP is broken orange pekoe and smaller, and fannings and dust are smaller again — they go into teabags because the higher surface area brews fast and strong. Bigger leaf is slower tea, not better tea." },
          { q: "When are tea factories closed?", a: "On poya days, the monthly full moon, which is a public holiday in Sri Lanka. This catches out a lot of visitors. If your free day is a poya, take an estate walk with a plucker instead — arguably more interesting anyway." },
          { q: "What time should I visit a tea estate?", a: "Before ten in the morning if you want to see plucking. It is done by hand, almost entirely by women working to a daily weight quota, and by afternoon the slopes are empty." },
          { q: "Is Nuwara Eliya tea different from other Ceylon tea?", a: "Yes. At about 1,900 m it is high-grown — above 1,200 m — where altitude slows growth and the leaf develops more slowly. High-grown Ceylon is lighter in colour and brisker in taste than the low-grown teas from the south, and it is the most prized." },
          { q: "Where should I buy Ceylon tea?", a: "At a factory, not in a tourist shop. Factory shops carry the higher grades that never reach a visitor shelf, and the boxed tea sold on the main streets of Nuwara Eliya and Ella is usually fannings at visitor prices." },
          { q: "Who works on the tea estates?", a: "The Malaiyaha or Up-Country Tamils, descendants of labourers brought from Tamil Nadu from the 1830s because the British could not recruit Sinhalese villagers. They were left effectively stateless at independence until 2003, and estate wages remain among the lowest in the country." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What happens on a tea factory tour?", acceptedAnswer: { "@type": "Answer", text: "Withering the plucked leaf for 12-16 hours, rolling it to break the cell walls, oxidising it for one to three hours, firing it dry, and grading it by particle size. About 45 minutes, ending with a tasting. The process is what decides the finished tea, not the bush." } },
            { "@type": "Question", name: "What do tea grades like OP and BOP mean?", acceptedAnswer: { "@type": "Answer", text: "Mostly leaf size, not quality. OP is a long wiry whole leaf, BOP is broken orange pekoe and smaller, and fannings and dust are smaller again — they go into teabags because the higher surface area brews fast and strong. Bigger leaf is slower tea, not better tea." } },
            { "@type": "Question", name: "When are tea factories closed?", acceptedAnswer: { "@type": "Answer", text: "On poya days, the monthly full moon, which is a public holiday in Sri Lanka. This catches out a lot of visitors. If your free day is a poya, take an estate walk with a plucker instead — arguably more interesting anyway." } },
            { "@type": "Question", name: "What time should I visit a tea estate?", acceptedAnswer: { "@type": "Answer", text: "Before ten in the morning if you want to see plucking. It is done by hand, almost entirely by women working to a daily weight quota, and by afternoon the slopes are empty." } },
            { "@type": "Question", name: "Is Nuwara Eliya tea different from other Ceylon tea?", acceptedAnswer: { "@type": "Answer", text: "Yes. At about 1,900 m it is high-grown — above 1,200 m — where altitude slows growth and the leaf develops more slowly. High-grown Ceylon is lighter in colour and brisker in taste than the low-grown teas from the south, and it is the most prized." } },
            { "@type": "Question", name: "Where should I buy Ceylon tea?", acceptedAnswer: { "@type": "Answer", text: "At a factory, not in a tourist shop. Factory shops carry the higher grades that never reach a visitor shelf, and the boxed tea sold on the main streets of Nuwara Eliya and Ella is usually fannings at visitor prices." } },
            { "@type": "Question", name: "Who works on the tea estates?", acceptedAnswer: { "@type": "Answer", text: "The Malaiyaha or Up-Country Tamils, descendants of labourers brought from Tamil Nadu from the 1830s because the British could not recruit Sinhalese villagers. They were left effectively stateless at independence until 2003, and estate wages remain among the lowest in the country." } },
          ],
        },
      };

    case "horton-plains-guide":
      return {
        title: "Horton Plains and World's End: The 5am Start and Why It Matters",
        seoTitle: "Horton Plains World's End Guide",
        description: "A 9 km loop across montane grassland to a 870 m cliff edge — but only if you get there before the cloud does. Timing, entry fees and what to wear.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369035/asiabylocals/tours/from-nuwara-eliya-to-kandy-drop-tour/img0.png",
        fastFacts: [
          { icon: "clock", label: "Be at the gate", value: "6am — the cliff clouds over by 9-10am" },
          { icon: "mountain", label: "The loop", value: "About 9 km, 3-4 hours, mostly flat" },
          { icon: "ticket", label: "Entry, foreign visitor", value: "Roughly USD 25-30 including taxes" },
          { icon: "map", label: "From Nuwara Eliya", value: "32 km, about an hour on a rough road" },
          { icon: "info", label: "World's End drop", value: "About 870 m, sheer" },
          { icon: "info", label: "Altitude", value: "Around 2,100-2,300 m — genuinely cold at dawn" },
        ],
        sections: [
          {
            title: "Horton Plains and World's End: The 5am Start and Why It Matters",
            icon: "mountain",
            content: "Horton Plains is a plateau of montane grassland and cloud forest at around 2,100 to 2,300 metres, and it is unlike anywhere else in Sri Lanka: open, wind-scoured, cold, and with a landscape that looks more like Scotland than the tropics.\n\nThe reason people come is World's End, a point where the southern escarpment simply stops and drops about 870 metres in a sheer face, with the plain and, on a clear morning, the south coast visible far below.\n\nThe timing is the entire trip. World's End faces south, warm air rises off the plain during the morning, and by nine or ten the cliff is inside a cloud with nothing visible at all. People who arrive at eleven see a white wall and drive back.\n\nSo: leave Nuwara Eliya at 5am, be at the gate when it opens at six, walk anticlockwise, and be at World's End by around 7.30. That is the whole plan and there is no flexible version of it.\n\nThe loop is about nine kilometres and takes three to four hours, mostly flat with some rocky sections. It is a walk rather than a hike.",
            tourCard: {
              slug: "nuwara-eliya-kandy-sightseeing-transfer",
              title: "Nuwara Eliya to Kandy Sightseeing Transfer",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 46.37",
              duration: "6 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369035/asiabylocals/tours/from-nuwara-eliya-to-kandy-drop-tour/img0.png",
            },
          },
          {
            title: "The loop, in order",
            icon: "map",
            content: "From the car park the trail splits and you should go anticlockwise — this reaches Little World's End and then World's End first, before the cloud, and saves Baker's Falls for the way back.\n\n**Little World's End** comes at about 1.5 km, a drop of around 270 metres and a good preview.\n\n**World's End** is at roughly 3.5 km. The escarpment ends and the ground falls 870 metres. There is no barrier at the edge beyond a low rail in places, and the wind here is strong. Stay back from the lip — people have died here.\n\n**Baker's Falls** is at about 5.5 km on the return leg, a 20-metre falls reached down a rocky side path. Slippery, and worth the detour.\n\nThe rest of the loop crosses open grassland with patches of cloud forest, and the ecology is the quiet pleasure of the walk: dwarfed, wind-shaped trees hung with moss and lichen, and endemic species that exist only in this altitude band.\n\nSambar deer are common and largely unbothered by people. Purple-faced langurs in the forest sections. The Sri Lankan leopard is present and essentially never seen.",
            tourCard: {
              slug: "nuwara-eliya-to-kandy-transfer-with-tea-plantations-and-ramboda-falls",
              title: "Nuwara Eliya to Kandy Transfer with Tea Plantations and Ramboda Falls",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 48.75",
              duration: "7 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375991/asiabylocals/tours/nuwaraeliya-or-nanu-oya-to-kandy-tour-tea-waterfalls-view/img0.jpg",
            },
          },
          {
            title: "Cold, cost and the rules",
            icon: "info",
            content: "It is cold. At 2,300 metres before dawn, Horton Plains regularly sits near freezing, and ground frost is common between December and February. Visitors arrive from the coast in shorts and regret it within ten minutes. Bring a fleece, a windproof layer, and long trousers.\n\nEntry for foreign visitors runs roughly USD 25-30 once taxes and vehicle charges are added, paid in cash at the gate. It is expensive by Sri Lankan standards and non-negotiable.\n\nPlastic is heavily restricted. Bags are searched at the entrance and plastic bottles and wrappers may be confiscated or tagged; carry water in a reusable bottle and take everything out with you. This is enforced properly, and it is the reason the plateau is as clean as it is.\n\nStay on the marked trail. The grassland is fragile and the fines are real.\n\nDo not feed the sambar deer, however tame they look. They are habituated enough already.\n\nThere are basic toilets at the visitor centre and nothing on the loop.",
            tourCard: {
              slug: "nuwara-eliya-to-sigiriya-guided-transfer-with-tea-estates-and-dambulla",
              title: "Nuwara Eliya to Sigiriya Guided Transfer with Tea Estates and Dambulla",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 65.95",
              duration: "7 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375886/asiabylocals/tours/nuwara-eliya-to-sigiriya-transfer-with-temples-tea-tour/img0.jpg",
            },
          },
          {
            title: "Getting there, and whether to bother",
            icon: "car",
            content: "Horton Plains is 32 kilometres from Nuwara Eliya and takes about an hour on a road that deteriorates in the last stretch. From Ella it is closer to two hours and means a 4am departure.\n\nThe cheaper approach is the train to Ohiya station and a tuk-tuk from there, about 11 kilometres, though at 5am arranging that reliably is harder than it sounds.\n\nMost people go with a driver from Nuwara Eliya, which is the sensible option and costs roughly what a half-day hire costs anywhere.\n\nThe honest question is whether it is worth it, and the answer depends on the sky. On a clear morning World's End is one of the great views in South Asia and the walk across the plateau is genuinely unlike anywhere else in the country. On a clouded one you have paid USD 30 and lost a morning's sleep to walk nine kilometres in the cold and see nothing.\n\nBest odds are January to March. October and November are the worst. And whatever the month, the difference between arriving at 6.30 and arriving at 9 is the difference between a view and a wall.",
            tourCard: {
              slug: "nuwara-eliya-kandy-sightseeing-transfer",
              title: "Nuwara Eliya to Kandy Sightseeing Transfer",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 46.37",
              duration: "6 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369035/asiabylocals/tours/from-nuwara-eliya-to-kandy-drop-tour/img0.png",
            },
          },
        ],
        faqs: [
          { q: "What time should I arrive at Horton Plains?", a: "At the gate for 6am opening, which means leaving Nuwara Eliya around 5am. World's End faces south and clouds over by nine or ten as warm air rises off the plain — arrive at eleven and you see a white wall." },
          { q: "How long is the Horton Plains walk?", a: "About 9 km and three to four hours, mostly flat with some rocky sections. Walk anticlockwise: that reaches Little World's End and World's End first, before the cloud, and leaves Baker's Falls for the return." },
          { q: "How much does Horton Plains cost?", a: "Roughly USD 25-30 for foreign visitors once taxes and vehicle charges are added, paid in cash at the gate. It is expensive by Sri Lankan standards and non-negotiable." },
          { q: "How cold is Horton Plains?", a: "At 2,300 m before dawn it regularly sits near freezing, with ground frost common from December to February. Bring a fleece, a windproof layer and long trousers — visitors who arrive from the coast in shorts regret it within ten minutes." },
          { q: "Can I take plastic into Horton Plains?", a: "Plastic is heavily restricted and bags are searched at the entrance. Bottles and wrappers may be confiscated or tagged. Carry water in a reusable bottle and take everything out with you — the rule is enforced, and it is why the plateau is so clean." },
          { q: "How do I get to Horton Plains from Nuwara Eliya?", a: "32 km and about an hour by road, with the last stretch rough. Most people hire a driver for the morning. The cheaper route is the train to Ohiya and a tuk-tuk for the last 11 km, though arranging that reliably at 5am is harder than it sounds." },
          { q: "Is Horton Plains worth it?", a: "On a clear morning, yes — World's End is one of the great views in South Asia and the plateau is unlike anywhere else in Sri Lanka. On a clouded morning you have paid USD 30 and lost a night's sleep to see nothing. Best odds are January to March; worst are October and November." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What time should I arrive at Horton Plains?", acceptedAnswer: { "@type": "Answer", text: "At the gate for 6am opening, which means leaving Nuwara Eliya around 5am. World's End faces south and clouds over by nine or ten as warm air rises off the plain — arrive at eleven and you see a white wall." } },
            { "@type": "Question", name: "How long is the Horton Plains walk?", acceptedAnswer: { "@type": "Answer", text: "About 9 km and three to four hours, mostly flat with some rocky sections. Walk anticlockwise: that reaches Little World's End and World's End first, before the cloud, and leaves Baker's Falls for the return." } },
            { "@type": "Question", name: "How much does Horton Plains cost?", acceptedAnswer: { "@type": "Answer", text: "Roughly USD 25-30 for foreign visitors once taxes and vehicle charges are added, paid in cash at the gate. It is expensive by Sri Lankan standards and non-negotiable." } },
            { "@type": "Question", name: "How cold is Horton Plains?", acceptedAnswer: { "@type": "Answer", text: "At 2,300 m before dawn it regularly sits near freezing, with ground frost common from December to February. Bring a fleece, a windproof layer and long trousers — visitors who arrive from the coast in shorts regret it within ten minutes." } },
            { "@type": "Question", name: "Can I take plastic into Horton Plains?", acceptedAnswer: { "@type": "Answer", text: "Plastic is heavily restricted and bags are searched at the entrance. Bottles and wrappers may be confiscated or tagged. Carry water in a reusable bottle and take everything out with you — the rule is enforced, and it is why the plateau is so clean." } },
            { "@type": "Question", name: "How do I get to Horton Plains from Nuwara Eliya?", acceptedAnswer: { "@type": "Answer", text: "32 km and about an hour by road, with the last stretch rough. Most people hire a driver for the morning. The cheaper route is the train to Ohiya and a tuk-tuk for the last 11 km, though arranging that reliably at 5am is harder than it sounds." } },
            { "@type": "Question", name: "Is Horton Plains worth it?", acceptedAnswer: { "@type": "Answer", text: "On a clear morning, yes — World's End is one of the great views in South Asia and the plateau is unlike anywhere else in Sri Lanka. On a clouded morning you have paid USD 30 and lost a night's sleep to see nothing. Best odds are January to March; worst are October and November." } },
          ],
        },
      };

    default:
      return null;
  }
}
