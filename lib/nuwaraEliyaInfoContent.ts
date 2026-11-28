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
            table: {
              headers: ["Grade", "What it means", "Typical use"],
              rows: [["OP (Orange Pekoe)", "Long, wiry whole leaf", "Loose leaf, slow brew"], ["BOP (Broken OP)", "Broken leaf, smaller", "Loose leaf, faster and stronger"], ["Fannings", "Small particles", "Teabags"], ["Dust", "Smallest", "Teabags, very fast and strong"]],
            },
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
            content: "Factories close on poya days — the monthly full moon, a public holiday in Sri Lanka — and this catches out a lot of people. If your one free day is a poya, an estate walk with a plucker is the substitute and is arguably more interesting.\n\nPlucking happens in the morning. If you want to see the fields being worked rather than just looking at them, go before ten; by afternoon the slopes are empty.\n\nMost factories charge a small entry, a few hundred rupees, sometimes waived if you buy tea. Photography inside is usually restricted around the machinery.\n\nBuy at the factory. The grades sold on the main streets of Nuwara Eliya and Ella are sold at visitor prices, and factory shops carry the higher grades that never reach a tourist shelf. Silver tips and the better OP grades are worth carrying home; the cheap boxed tea in town is fannings.\n\nAsk which estate the tea in front of you actually came from. A good factory will tell you the elevation and the season, and Uva teas from the June-to-September dry wind period are distinct enough that tasters can identify them blind.\n\nMoving on from Nuwara Eliya, these make the drive part of the trip rather than dead time: [Ella via Gregory Lake and the Seetha Amman temple](/sri-lanka/nuwara-eliya/nuwara-eliya-to-ella-guided-transfer-with-gregory-lake-seetha-amman), [a day trip to Ella with a tea factory and the Nine Arch Bridge](/sri-lanka/nuwara-eliya/ella-day-trip-from-nuwara-eliya-with-a-tea-factory-and-the-nine-arch), and [a private transfer to Yala via Ella](/sri-lanka/nuwara-eliya/nuwara-eliya-to-yala-private-transfer-via-ella-and-the-nine-arch-bridge).",
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
            content: "Horton Plains is 32 kilometres from Nuwara Eliya and takes about an hour on a road that deteriorates in the last stretch. From Ella it is closer to two hours and means a 4am departure.\n\nThe cheaper approach is the train to Ohiya station and a tuk-tuk from there, about 11 kilometres, though at 5am arranging that reliably is harder than it sounds.\n\nMost people go with a driver from Nuwara Eliya, which is the sensible option and costs roughly what a half-day hire costs anywhere.\n\nThe honest question is whether it is worth it, and the answer depends on the sky. On a clear morning World's End is one of the great views in South Asia and the walk across the plateau is genuinely unlike anywhere else in the country. On a clouded one you have paid USD 30 and lost a morning's sleep to walk nine kilometres in the cold and see nothing.\n\nBest odds are January to March. October and November are the worst. And whatever the month, the difference between arriving at 6.30 and arriving at 9 is the difference between a view and a wall.\n\nGuided options: [the sunrise trek with an onward transfer to Haputale or Ella](/sri-lanka/nuwara-eliya/horton-plains-sunrise-trek-with-a-transfer-on-to-haputale-or-ella), [the trek combined with a tea factory and Ravana Falls](/sri-lanka/nuwara-eliya/horton-plains-trek-from-nuwara-eliya-with-a-tea-factory-and-ravana-falls), and for walkers who want the long version, [Pekoe Trail Stage 11 from Horton Plains to Udaweriya](/sri-lanka/nuwara-eliya/pekoe-trail-stage-11-guided-hike-horton-plains-to-udaweriya).",
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

    case "best-tours-in-nuwara-eliya":
      return {
        title: "Best Tours in Nuwara Eliya — 2026, Honestly Compared",
        seoTitle: "Best Tours in Nuwara Eliya 2026: Top-Rated Picks by Category",
        description: "The best Nuwara Eliya tours for 2026, picked by category — tea-estate transfers to Kandy and a guided transfer to Sigiriya with Dambulla — with real prices and an honest note on how we chose them.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375991/asiabylocals/tours/nuwaraeliya-or-nanu-oya-to-kandy-tour-tea-waterfalls-view/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "A **transfer from Nuwara Eliya to Kandy with tea plantations and Ramboda Falls** turns the drive into the main event — this stretch of road through Sri Lanka's hill country is one of the most scenic in the country, and worth stopping for rather than rushing through.",
            tourCard: { slug: "nuwara-eliya-to-kandy-transfer-with-tea-plantations-and-ramboda-falls", title: "Nuwara Eliya to Kandy Transfer with Tea Plantations and Ramboda Falls", description: "Bookable directly through AsiaByLocals, with a verified local operator.", price: "From USD 48.75", duration: "7 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375991/asiabylocals/tours/nuwaraeliya-or-nanu-oya-to-kandy-tour-tea-waterfalls-view/img0.jpg" },
          },
          {
            title: "Best for Continuing North: Sigiriya & Dambulla",
            content: "A **guided transfer to Sigiriya with Dambulla and tea estate stops** is the best way to continue from the hill country into the cultural triangle without wasting the drive as dead travel time.",
            tourCard: { slug: "nuwara-eliya-to-sigiriya-guided-transfer-with-tea-estates-and-dambulla", title: "Nuwara Eliya to Sigiriya Guided Transfer with Tea Estates and Dambulla", description: "Bookable directly through AsiaByLocals, with a verified local operator.", price: "From USD 65.95", duration: "7 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369035/asiabylocals/tours/from-nuwara-eliya-to-kandy-drop-tour/img0.png" },
          },
          {
            title: "How We Picked These (and Why There's No Price Table vs. Other Platforms)",
            content: "Every tour above is run by a verified local operator we've vetted directly. We deliberately left out a side-by-side price comparison against other booking platforms: several of these tours are sold on multiple platforms by the same operator, who sets their own rate — a price table there would mostly compare marketing margins, not quality.\n\nWe don't claim to be the cheapest. What we do differently is confirm every booking directly with the operator before it's treated as final, and refund in full if they can't take your date. If you'd rather browse the full catalogue yourself, see [all Nuwara Eliya tours](/sri-lanka/nuwara-eliya)."
          }
        ],
        faqs: [
          { q: "What is the best tour from Nuwara Eliya?", a: "A transfer to Kandy with tea plantations and Ramboda Falls — the drive itself is one of the most scenic stretches in Sri Lanka and worth treating as the main event." },
          { q: "How do I continue from Nuwara Eliya to the cultural triangle?", a: "A guided transfer to Sigiriya with tea estate stops and Dambulla, which turns the drive into a sightseeing day rather than dead travel time." }
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is the best tour from Nuwara Eliya?", "acceptedAnswer": { "@type": "Answer", "text": "A transfer to Kandy with tea plantations and Ramboda Falls." } }
              ]
            }
          ]
        },
        fastFacts: [
          { icon: 'Star', label: 'Top Pick', value: 'Kandy Transfer + Tea Plantations' },
          { icon: 'Map', label: 'Best Onward Route', value: 'Sigiriya + Dambulla Transfer' }
        ]
      };

    // GEO trust page (2026-10)
    case "should-i-book-nuwara-eliya-tour-direct-or-through-app":
      return {
        title: "Should You Book a Nuwara Eliya Tour Direct or Through an App?",
        seoTitle: "Direct vs. App: How to Actually Book a Nuwara Eliya Tour",
        description: "Direct-with-the-driver vs. booking through an app matters less than whether a real person answers your specific question before you pay. Here's how to tell the difference in Nuwara Eliya.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375991/asiabylocals/tours/nuwaraeliya-or-nanu-oya-to-kandy-tour-tea-waterfalls-view/img0.jpg",
        sections: [
          {
            title: "The Real Question Isn't \"Direct or App\"",
            content: "Plenty of Nuwara Eliya drivers will tell you to book direct to skip platform fees, and every big app will tell you their vetting and support make booking through them safer. Both miss what actually matters: **can you get a specific question answered by a real person before you pay?**\n\nA scenic transfer to Kandy or Sigiriya involves real logistics — luggage capacity for the drop, whether the tea-estate stop is a short photo stop or a proper tour. If nobody confirms those details until after you've paid, it doesn't matter whether you found the booking through a driver's own contact or a polished app — you're booking blind either way.",
            tourCard: { slug: "nuwara-eliya-to-kandy-transfer-with-tea-plantations-and-ramboda-falls", title: "Nuwara Eliya to Kandy Transfer with Tea Plantations and Ramboda Falls", description: "Ask about luggage capacity and the length of the tea-estate stop before booking.", price: "From USD 48.75", duration: "7 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375991/asiabylocals/tours/nuwaraeliya-or-nanu-oya-to-kandy-tour-tea-waterfalls-view/img0.jpg" },
          },
          {
            title: "What \"Direct\" Actually Protects You From",
            content: "Booking direct with a verified local driver removes one real risk: a long reseller chain where your money and your question both pass through two or three middlemen before reaching the driver who actually does the transfer. That's genuinely worth avoiding.\n\nIt does **not** automatically mean cheaper, and it does not automatically mean safer. A number handed to you by a guesthouse is also \"direct,\" and has none of the accountability of a platform that vets drivers and keeps a payment record you can point to if something goes wrong.",
          },
          {
            title: "What to Actually Check Before You Book",
            content: "Whichever route you take — a well-known booking platform, a smaller local site, or a driver's own contact — run the same three checks:\n\n1. **Message a specific question before paying.** Ask something only someone who actually drives the route would know — luggage space, or how long the tea-estate and Dambulla stops actually last. A vague or delayed answer is the clearest red flag there is.\n2. **Ask what happens if the driver can't take your date.** If a platform or driver can't give a straight answer on refunds before you've paid, that's not one to trust with your money.\n3. **Check who actually answers.** A reply from a real person who clearly knows the route (not a templated bot message) is the strongest signal that someone will also answer you *after* you've paid, not just before.",
          },
          {
            title: "How This Works With AsiaByLocals",
            content: "On AsiaByLocals, every Nuwara Eliya tour — the [best tours from Nuwara Eliya](/sri-lanka/nuwara-eliya/best-tours-in-nuwara-eliya), the Kandy transfer, the Sigiriya and Dambulla transfer — can be questioned on WhatsApp (+91 84495 38716) or email before you book. We confirm with the local operator directly and refund in full if they can't take your date. We're not claiming to be the cheapest option in Nuwara Eliya; several of our tours are also run by the same operators through other platforms. What we commit to is answering honestly, before you pay, by a real person — see our [full trust and licensing FAQ](/about-us) for how we're set up.",
            tourCard: { slug: "nuwara-eliya-to-sigiriya-guided-transfer-with-tea-estates-and-dambulla", title: "Nuwara Eliya to Sigiriya Guided Transfer with Tea Estates and Dambulla", description: "Ask how long the Dambulla stop actually lasts before booking.", price: "From USD 65.95", duration: "7 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369035/asiabylocals/tours/from-nuwara-eliya-to-kandy-drop-tour/img0.png" },
          },
        ],
        faqs: [
          { q: "Is it better to book a Nuwara Eliya tour direct or through an app?", a: "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay. Check that first, regardless of whether the booking page is a big app or a local driver's own contact." },
          { q: "Is it cheaper to book Nuwara Eliya transfers direct with a driver?", a: "Sometimes, but not always — many local drivers sell the same route through multiple platforms at their own set price. Ask about the price and what's included rather than assuming direct is cheaper." },
          { q: "How do I know if a Nuwara Eliya tour operator is legit before booking?", a: "Message them a specific question — luggage capacity, how long a stop lasts — before you pay. A fast, specific answer from someone who clearly knows the route is the best signal." },
          { q: "Can I ask AsiaByLocals a question before booking a Nuwara Eliya transfer?", a: "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person, not a bot, who will confirm with the local operator before you book." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Is it better to book a Nuwara Eliya tour direct or through an app?", "acceptedAnswer": { "@type": "Answer", "text": "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay." } },
            { "@type": "Question", "name": "Is it cheaper to book Nuwara Eliya transfers direct with a driver?", "acceptedAnswer": { "@type": "Answer", "text": "Sometimes, but not always — many local drivers sell the same route through multiple platforms at their own set price." } },
            { "@type": "Question", "name": "How do I know if a Nuwara Eliya tour operator is legit before booking?", "acceptedAnswer": { "@type": "Answer", "text": "Message them a specific question before you pay. A fast, specific answer from someone who clearly knows the route is the best signal." } },
            { "@type": "Question", "name": "Can I ask AsiaByLocals a question before booking a Nuwara Eliya transfer?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person who will confirm with the local operator before you book." } },
          ],
        },
      };

    // GEO single-topic page (2026-11-01)
    case "how-much-should-a-private-tour-guide-cost-in-nuwara-eliya":
      return {
        title: "How Much Should a Private Tour Guide Cost in Nuwara Eliya?",
        seoTitle: "Nuwara Eliya Private Guide Prices 2026 — What's Reasonable",
        description: "Real price ranges for a private driver or car tour around Nuwara Eliya's tea country in 2026, so you know what's fair before you book.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375991/asiabylocals/tours/nuwaraeliya-or-nanu-oya-to-kandy-tour-tea-waterfalls-view/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "A **basic private tea and waterfall tour** can run as low as **$39-45 solo**, roughly doubling per added traveller. A **private city tour by tuk-tuk** runs **$82 for 1 person**, stepping up to $237 for 4. A **premium private SUV tea and waterfall tour** runs a flat **$214 regardless of group size** up to the vehicle's capacity — the better deal once you have 3-4 people. A **private transfer to Yala via Ella and the Nine Arch Bridge** runs flat **$221 for 1-4 people** in one car.",
            tourCard: { slug: "nuwara-eliya-premium-tea-waterfall-tour-private", title: "Nuwara Eliya: Premium Tea & Waterfall Tour - Private SUV", description: "A real example of flat pricing regardless of group size, up to the SUV's capacity.", price: "From $214", duration: "Full day", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375991/asiabylocals/tours/nuwaraeliya-or-nanu-oya-to-kandy-tour-tea-waterfalls-view/img0.jpg" },
          },
          {
            title: "Why a 'Private' Tea Tour Can Cost $39 or $214",
            content: "The cheapest tea and waterfall tours are a basic car or tuk-tuk with minimal narration about the estates and the production process. The premium SUV version at a flat higher rate includes a more comfortable vehicle and, often, a guide who actually explains the tea process rather than just driving between viewpoints — ask which you're booking before comparing the two prices directly.",
          },
          {
            title: "Red Flags on Price",
            content: "A private tour quote dramatically below $39 for a full day often means a very short route with few stops, or a driver who doesn't actually explain the tea estates. For long transfers (to Yala, to Kandy), confirm the route and any scenic stops (the Nine Arch Bridge, waterfalls) are actually included, not just a direct drive.",
          },
          {
            title: "How to Get a Fair Price",
            content: "Ask the operator directly whether the quote is for a basic transfer or a narrated tour with stops, and what vehicle is included. On AsiaByLocals, every Nuwara Eliya tour's price breakdown can be questioned on WhatsApp (+91 84495 38716) or email before you book, and a real person will explain honestly what drives the cost. See our [full trust FAQ](/about-us) for how that works, or browse [all Nuwara Eliya tours](/sri-lanka/nuwara-eliya) to compare real, current prices directly.",
            tourCard: { slug: "nuwara-eliya-tea-tour-nature-experience-waterfall", title: "Nuwara Eliya Tea Tour - Nature Experience & Waterfall (Private)", description: "A real example of the cheaper, basic-format private tea and waterfall tour.", price: "From $39", duration: "Half day", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375991/asiabylocals/tours/nuwaraeliya-or-nanu-oya-to-kandy-tour-tea-waterfalls-view/img0.jpg" },
          },
        ],
        faqs: [
          { q: "How much does a private tour guide cost in Nuwara Eliya?", a: "A basic private tea and waterfall tour can run as low as $39-45 solo. A premium private SUV version runs a flat $214 regardless of group size up to the vehicle's capacity." },
          { q: "Why do Nuwara Eliya tea tour prices range from $39 to $214?", a: "The cheapest tours are a basic transfer with minimal narration; the premium version includes a more comfortable vehicle and a guide who actually explains the tea process." },
          { q: "Is a very cheap private tea tour quote in Nuwara Eliya a red flag?", a: "Often yes — it can mean a very short route with few stops or a driver who doesn't explain the estates." },
          { q: "What's usually included in a Nuwara Eliya private tour price?", a: "Typically the driver's fee and the vehicle. Entrance fees to specific tea factories or waterfalls are sometimes separate — ask for the full breakdown before comparing prices." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How much does a private tour guide cost in Nuwara Eliya?", "acceptedAnswer": { "@type": "Answer", "text": "A basic private tea and waterfall tour can run as low as $39-45 solo. A premium private SUV version runs a flat $214 regardless of group size." } },
            { "@type": "Question", "name": "Why do Nuwara Eliya tea tour prices range from $39 to $214?", "acceptedAnswer": { "@type": "Answer", "text": "The cheapest tours are a basic transfer; the premium version includes a better vehicle and a guide who explains the tea process." } },
            { "@type": "Question", "name": "Is a very cheap private tea tour quote in Nuwara Eliya a red flag?", "acceptedAnswer": { "@type": "Answer", "text": "Often yes — it can mean a very short route or a driver who doesn't explain the estates." } },
            { "@type": "Question", "name": "What's usually included in a Nuwara Eliya private tour price?", "acceptedAnswer": { "@type": "Answer", "text": "Typically the driver's fee and the vehicle; entrance fees to specific sites are sometimes separate." } },
          ],
        },
      };

    case "is-horseback-riding-worth-it-nuwara-eliya":
      return {
        title: "Is Horseback Riding Worth It in Nuwara Eliya?",
        description: "An honest look at Nuwara Eliya's guided horseback ride, a genuine way to see the hill-country landscape beyond the usual tea estate walk.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1444705/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Known as 'Little England' for its cool colonial-era hill-station character, Nuwara Eliya's rolling landscape suits a horseback ride well — a different pace from the tea factory and waterfall circuit.",
            tourCard: { slug: "nuwara-eliya-guided-horseback-ride-with-hotel", title: "Nuwara Eliya: Guided Horseback Ride with Hotel Pickup", description: "A guided horseback ride with hotel pickup.", price: "From $111", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1444705/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Nuwara Eliya's hill-country weather can turn cool and misty quickly — bring a light jacket even for a short ride." },
        ],
        faqs: [
          { q: "Is horseback riding worth it in Nuwara Eliya?", a: "Yes, as a different-paced way to see the hill-country landscape beyond tea estate walks." },
        ],
      };

    case "is-adams-peak-hike-worth-it-nuwara-eliya":
      return {
        title: "Is the Adam's Peak Sunrise Hike Worth It from Nuwara Eliya?",
        description: "An honest look at the Adam's Peak sunrise hike, a sacred pilgrimage climb venerated across multiple religions.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1391537/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Adam's Peak is a sacred mountain venerated by Buddhists, Hindus, Muslims, and Christians alike, each attributing a different meaning to the footprint-shaped mark at its summit — climbing through the night to catch sunrise at the top is a genuinely significant Sri Lankan experience, distinct from anything else in the hill country.",
            tourCard: { slug: "from-hatton-or-nuwara-eliya-adams-peak-sunrise", title: "From Hatton or Nuwara Eliya: Adam's Peak Sunrise Hike", description: "A sunrise hike up Adam's Peak.", price: "From $133", duration: "11 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1391537/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This is a serious overnight-into-early-morning climb with thousands of steps — good footwear and basic fitness matter, and it's typically done in the pilgrimage season (roughly December to May)." },
        ],
        faqs: [
          { q: "Why is Adam's Peak significant?", a: "It's a sacred mountain venerated by Buddhists, Hindus, Muslims, and Christians, each with a different interpretation of the summit's footprint-shaped mark." },
          { q: "When is Adam's Peak pilgrimage season?", a: "Roughly December to May." },
        ],
      };

    case "is-knuckles-range-tour-worth-it-nuwara-eliya":
      return {
        title: "Is the 2-Day Knuckles Mountain Range Tour Worth It from Nuwara Eliya?",
        description: "An honest look at the all-inclusive 2-day Knuckles Mountain Range tour from Nuwara Eliya, a UNESCO World Heritage mountain range distinct from Horton Plains and the tea-estate landscape.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-515139/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Knuckles Mountain Range is a UNESCO World Heritage forest reserve with jagged peaks resembling knuckles, genuinely different rugged terrain from Horton Plains' open grassland or Nuwara Eliya's manicured tea estates — a serious 2-day trek for travelers wanting a wilder hill-country landscape.",
            tourCard: { slug: "from-nuwara-eliyaall-inclusive-epic-knuckles", title: "From Nuwara Eliya: All-Inclusive Epic Knuckles Range Tour", description: "A 2-day all-inclusive tour of the Knuckles Mountain Range.", price: "From $626", duration: "2 days", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-515139/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This is a genuine multi-day trek requiring real hiking fitness, so come prepared with proper gear rather than expecting a scenic drive-up viewpoint." },
        ],
        faqs: [
          { q: "Is the Knuckles Range tour worth it from Nuwara Eliya?", a: "Yes, for travelers with genuine hiking fitness wanting a wilder, more rugged landscape than Horton Plains or the tea estates." },
        ],
      };

    case "is-tea-plucking-experience-worth-it-nuwara-eliya":
      return {
        title: "Is the Hands-On Tea Plucking & Tasting Experience Worth It in Nuwara Eliya?",
        description: "An honest look at the hands-on tea plucking and tasting experience in Nuwara Eliya, distinct from a standard factory tour.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1191049/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Actually picking tea leaves yourself, rather than just watching the factory process on a standard tour, gives a far more hands-on sense of the labor behind Ceylon tea, finished off with a genuine tasting session.",
            tourCard: { slug: "nuwara-eliya-hands-on-tea-plucking-tasting", title: "Nuwara Eliya Hands-On Tea Plucking & Tasting", description: "A hands-on tea plucking and tasting experience in Nuwara Eliya.", price: "From $56", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1191049/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Wear clothes you don't mind getting a little dirty, since you'll be out in the fields actually plucking leaves.",
          },
        ],
        faqs: [
          { q: "Is the hands-on tea plucking experience worth it in Nuwara Eliya?", a: "Yes, actually picking leaves yourself gives a far more hands-on sense of Ceylon tea's labor than a standard factory tour." },
        ],
      };

    case "is-cloud-forest-hike-worth-it-nuwara-eliya":
      return {
        title: "Is the Cloud Forest Hike with Cliff Views Worth It in Nuwara Eliya?",
        description: "An honest look at the cloud forest hike with cliff views near Nuwara Eliya.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1159370/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Hiking through genuine misty cloud forest to dramatic cliff viewpoints gives a different, moodier landscape than the open tea estates most visitors associate with Nuwara Eliya, a good pick for travelers wanting a real hike over a scenic drive.",
            tourCard: { slug: "nuwara-eliya-cloud-forest-hike-with-cliff-views", title: "Nuwara Eliya Cloud Forest Hike with Cliff Views", description: "A hiking tour through cloud forest to dramatic cliff viewpoints near Nuwara Eliya.", price: "From $111", duration: "6 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1159370/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Bring a light rain jacket — cloud forest conditions mean genuine mist and moisture, even without rain.",
          },
        ],
        faqs: [
          { q: "Is the cloud forest hike worth it in Nuwara Eliya?", a: "Yes, it offers a genuinely different, moodier landscape than the open tea estates, for travelers wanting a real hike." },
        ],
      };

    case "is-ramayana-temple-trail-worth-it-nuwara-eliya":
      return {
        title: "Is the Ramayana Temple Trail Worth It from Nuwara Eliya?",
        description: "An honest look at the Ramayana temple trail tour from Nuwara Eliya and Hatton, following sites tied to the Hindu epic.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-384951/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Sri Lanka's hill country holds several sites genuinely tied to the Ramayana epic, and this trail gives real spiritual and cultural significance for Hindu travelers or anyone interested in the story, distinct from the area's usual tea-estate sightseeing.",
            tourCard: { slug: "from-nuwara-eliyahatton-ramayana-temple-trail-by", title: "From Nuwara Eliya/Hatton: Ramayana Temple Trail", description: "A tour of Ramayana-linked temple sites from Nuwara Eliya and Hatton.", price: "From $162", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-384951/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This suits travelers with a genuine interest in the Ramayana story or Hindu pilgrimage sites, more than typical scenic sightseeing.",
          },
        ],
        faqs: [
          { q: "Is the Ramayana temple trail worth it from Nuwara Eliya?", a: "Yes, for travelers with genuine interest in the Ramayana epic, these sites carry real spiritual significance beyond typical sightseeing." },
        ],
      };

    case "is-rafting-ziplining-combo-worth-it-nuwara-eliya":
      return {
        title: "Is the Rafting, Ziplining & Lunch Combo Worth It from Nuwara Eliya?",
        description: "An honest look at the combined rafting and ziplining day trip with lunch from Nuwara Eliya and Hatton.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1178342/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Pairing white water rafting with ziplining in one day gives genuine double adrenaline value, a good fit for travelers wanting a serious adventure-sports day rather than splitting the two activities across separate trips.",
            tourCard: { slug: "nuwara-eliyahatton-rafting-ziplining-lunch-and", title: "Nuwara Eliya/Hatton: Rafting, Ziplining & Lunch", description: "A combined rafting and ziplining day trip with lunch from Nuwara Eliya and Hatton.", price: "From $162", duration: "10 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1178342/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This is a genuinely full, physically active day — come with reasonable fitness and a willingness to get wet.",
          },
        ],
        faqs: [
          { q: "Is the rafting and ziplining combo worth it from Nuwara Eliya?", a: "Yes, it gives genuine double adrenaline value in one day rather than splitting the activities across separate trips." },
        ],
      };

    case "is-labookellie-tea-factory-worth-it-nuwara-eliya":
      return {
        title: "Is the Labookellie Tea Factory Tour Worth It near Nuwara Eliya?",
        description: "An honest look at the Labookellie Tea Factory tour, one of the most visited and accessible tea factories on the Nuwara Eliya road.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1291965/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Labookellie is a specific, well-established factory right along the main road into Nuwara Eliya, making it one of the easiest and cheapest tea factory stops to add to an itinerary — a standard factory-and-tasting tour rather than the more hands-on plucking experience.",
            tourCard: { slug: "nuwara-eliya-labookellie-tea-factory-story-of", title: "Nuwara Eliya Labookellie Tea Factory Story of Ceylon Tea", description: "A guided tour of the Labookellie Tea Factory.", price: "From $10", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1291965/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "If you want to actually pick tea leaves yourself rather than just tour the factory, the separate hands-on tea plucking experience is the better fit — Labookellie's tour is more about the factory process and tasting.",
          },
        ],
        faqs: [
          { q: "Is the Labookellie Tea Factory tour worth it?", a: "Yes, it's one of the cheapest and most convenient tea factory stops near Nuwara Eliya, though it's a standard tour rather than a hands-on plucking experience." },
          { q: "Can I pick tea leaves at Labookellie?", a: "This specific tour is more about the factory process and tasting — for hands-on picking, look at the separate tea plucking experience instead." },
        ],
      };

    case "is-horton-plains-sunrise-hike-worth-it-nuwara-eliya":
      return {
        title: "Is the Horton Plains Sunrise Guided Hike Worth It from Nuwara Eliya?",
        description: "An honest look at the sunrise-timed guided hike through Horton Plains National Park, home to World's End viewpoint.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1361286/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Horton Plains' famous World's End cliff is reliably clear only in the early morning before clouds roll in, so a sunrise-timed guided hike is genuinely the right way to see it — arriving later in the day is a common mistake that leads to a clouded-over view.",
            tourCard: { slug: "from-nuwara-eliya-horton-plains-sunrise-guided", title: "From Nuwara Eliya: Horton Plains Sunrise Guided Hike", description: "A sunrise-timed guided hike through Horton Plains National Park.", price: "From $271", duration: "7 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1361286/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This means a genuinely early departure, often before dawn — confirm pickup time in advance, since missing the early slot defeats the point of the sunrise timing.",
          },
        ],
        faqs: [
          { q: "Is the Horton Plains sunrise hike worth it?", a: "Yes — World's End viewpoint is reliably clear only in the early morning, so the sunrise timing genuinely matters, unlike a later-in-the-day visit." },
          { q: "Why does timing matter at Horton Plains?", a: "Clouds typically roll in by mid-morning, obscuring the World's End viewpoint — arriving later is a common mistake." },
        ],
      };

    case "is-tea-field-cycling-worth-it-nuwara-eliya":
      return {
        title: "Is the Tea Field Cycling and Local Food Tour Worth It in Nuwara Eliya?",
        description: "An honest look at the tea field cycling and local food tour near Nuwara Eliya.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1459558/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Cycling through the tea estates gives a more active, ground-level view of the rolling plantations than a scenic drive or walk, and pairing it with a local food stop rounds it into more than just a workout.",
            tourCard: { slug: "tea-field-cycling-and-local-food-tour", title: "Tea field cycling and local food tour", description: "A cycling tour through tea fields with a local food stop.", price: "From $65", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1459558/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Nuwara Eliya's hill roads involve real elevation change — reasonable fitness helps, especially for longer uphill stretches between estates.",
          },
        ],
        faqs: [
          { q: "Is the tea field cycling tour worth it in Nuwara Eliya?", a: "Yes for a more active, ground-level way to see the tea estates, especially paired with a local food stop — just come with reasonable fitness for the hill roads." },
        ],
      };

    case "is-ramboda-waterfall-tuk-tuk-tour-worth-it-nuwara-eliya":
      return {
        title: "Is the Ramboda Waterfall & Tea Factory Tuk-Tuk Tour Worth It?",
        description: "An honest look at the Ramboda Waterfall and tea factory combination tour by tuk-tuk.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1422171/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This pairs a genuine waterfall stop with a tea factory visit in one tuk-tuk outing, a convenient, budget-friendly way to combine two of the area's main attractions rather than booking them separately.",
            tourCard: { slug: "nuwara-eliya-ramboda-waterfall-tea-factory-tour", title: "Nuwara Eliya Ramboda Waterfall & Tea Factory Tour by Tuk Tuk", description: "A combined Ramboda Waterfall and tea factory tour by tuk-tuk.", price: "From $34", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1422171/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "At this price point, it's a good budget-friendly way to tick off both the waterfall and a tea factory in one outing rather than arranging them as two separate trips.",
          },
        ],
        faqs: [
          { q: "Is the Ramboda Waterfall and tea factory tuk-tuk tour worth it?", a: "Yes, it's a convenient, budget-friendly way to combine two of the area's main attractions in one outing." },
        ],
      };

    case "is-pekoe-trail-stage11-worth-it-nuwara-eliya":
      return {
        title: "Is the Pekoe Trail Stage 11 Guided Hike Worth It?",
        description: "An honest look at the guided Pekoe Trail Stage 11 hike from Horton Plains to Udaweriya.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788463074/asiabylocals/tours/pekoe-trail-stage-11-guided-hike-horton-plains-udaweriya/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "This stage of the Pekoe Trail extends the standard Horton Plains visit into a genuine long-distance hike down to Udaweriya via the dramatic Devil's Staircase, worth it for travelers wanting serious trekking rather than the typical short World's End walk.",
            tourCard: { slug: "pekoe-trail-stage-11-guided-hike-horton-plains-to-udaweriya", title: "Pekoe Trail Stage 11 Guided Hike: Horton Plains to Udaweriya by the Devil's Staircase", description: "A guided hike along Pekoe Trail Stage 11, from Horton Plains to Udaweriya.", price: "From $195", duration: "8 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788463074/asiabylocals/tours/pekoe-trail-stage-11-guided-hike-horton-plains-udaweriya/img0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Wear sturdy hiking boots with good grip, since the Devil's Staircase section involves genuinely steep, uneven descent.",
          },
        ],
        faqs: [
          { q: "Is the Pekoe Trail Stage 11 guided hike worth it?", a: "Yes, for travelers wanting serious long-distance trekking beyond the typical short World's End walk at Horton Plains." },
        ],
      };

    case "is-kandy-ambuluwawa-fullday-worth-it-nuwara-eliya":
      return {
        title: "Is the Full Day to Kandy with Ambuluwawa Tower Worth It from Nuwara Eliya?",
        description: "An honest look at the full-day Kandy tour with Ambuluwawa Tower from Nuwara Eliya.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-892552/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Pairing Kandy's temple and city sights with a stop at the distinctive spiral Ambuluwawa Tower gives a genuinely varied day covering both heritage and a unique viewpoint, worth it for travelers heading toward Kandy from the hill country.",
            tourCard: { slug: "from-nuwara-eliya-full-day-to-kandy-with", title: "From Nuwara Eliya: Full Day to Kandy with Ambuluwawa Tower", description: "A full-day tour to Kandy with a stop at Ambuluwawa Tower from Nuwara Eliya.", price: "From $331", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-892552/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "The spiral climb up Ambuluwawa Tower is narrow and claustrophobic in parts, so skip it if you're uncomfortable in tight spaces.",
          },
        ],
        faqs: [
          { q: "Is the full day to Kandy with Ambuluwawa Tower worth it from Nuwara Eliya?", a: "Yes, for travelers wanting a genuinely varied day covering both Kandy's heritage sites and a unique spiral-tower viewpoint." },
        ],
      };

    case "is-belihuloya-safari-nature-worth-it-nuwara-eliya":
      return {
        title: "Is the Nuwara Eliya to Belihuloya Safari Day Tour Worth It?",
        description: "An honest look at the Nuwara Eliya to Belihuloya safari day tour covering nature and waterfalls.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1294257/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Belihuloya's jeep safaris and waterfalls offer a genuinely less-commercialized hill-country experience than the main Nuwara Eliya sights, worth it for travelers wanting a quieter nature day away from the tea-estate tourist circuit.",
            tourCard: { slug: "nuwara-eliya-to-belihuloya-safari-day-tour-nature", title: "Nuwara Eliya to Belihuloya Safari Day Tour Nature Waterfalls", description: "A day tour from Nuwara Eliya to Belihuloya covering nature and waterfalls.", price: "From $186", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1294257/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Pack a change of clothes if waterfall swimming is included, since the stops can get genuinely wet.",
          },
        ],
        faqs: [
          { q: "Is the Nuwara Eliya to Belihuloya safari day tour worth it?", a: "Yes, for travelers wanting a quieter, less-commercialized nature day away from the main tea-estate tourist circuit." },
        ],
      };

    case "is-negombo-transfer-kitulgala-rafting-worth-it-nuwara-eliya":
      return {
        title: "Is the Nuwara Eliya to Negombo Transfer with Kitulgala Rafting Worth It?",
        description: "An honest look at the Nuwara Eliya to Negombo transfer with white-water rafting at Kitulgala.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1394753/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Turning the long transfer from Nuwara Eliya to Negombo into a white-water rafting stop at Kitulgala makes genuinely good use of travel time that would otherwise be lost to a straight drive.",
            tourCard: { slug: "nuwara-eliya-to-negombo-transfer-with-rafting-in", title: "Nuwara Eliya to Negombo Transfer with Rafting in Kitulgala", description: "A transfer from Nuwara Eliya to Negombo including white-water rafting at Kitulgala.", price: "From $271", duration: "6 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1394753/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Bring a change of clothes and secure valuables, since you'll go straight from rafting back into transfer mode.",
          },
        ],
        faqs: [
          { q: "Is the Nuwara Eliya to Negombo transfer with Kitulgala rafting worth it?", a: "Yes, for travelers wanting to turn an otherwise wasted transfer day into a genuine white-water rafting experience." },
        ],
      };

    case "is-sita-eliya-cave-temple-worth-it-nuwara-eliya":
      return {
        title: "Is the Sita Eliya Cave and Temple Tour Worth It in Nuwara Eliya?",
        description: "An honest look at the Sita Eliya cave and temple tour, a site tied to the Ramayana epic near Nuwara Eliya.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1309804/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Sita Eliya is genuinely one of the sites associated with the Ramayana epic, giving real mythological and religious significance beyond Nuwara Eliya's usual tea estate and waterfall sightseeing, worth it for travelers with an interest in Hindu epic history.",
            tourCard: { slug: "nuwara-eliya-sita-eliya-cave-and-temple-tour", title: "Nuwara Eliya: Sita Eliya Cave and Temple Tour", description: "A tour of the Sita Eliya cave and temple site near Nuwara Eliya.", price: "From $2996", duration: "Full day", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1309804/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Read up on the Ramayana connection beforehand — the site's significance genuinely means more with that context in mind." },
        ],
        faqs: [
          { q: "Is the Sita Eliya cave and temple tour worth it in Nuwara Eliya?", a: "Yes, for travelers genuinely interested in the Ramayana epic's connection to Sri Lanka, beyond the area's usual tea and waterfall sightseeing." }
        ],
      };

    case "is-horse-riding-worth-it-nuwara-eliya":
      return {
        title: "Is Horse Riding Worth It in Nuwara Eliya?",
        description: "An honest look at horse riding in Nuwara Eliya, a scenic land-based activity amid the hill country's cooler climate.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-479453/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Riding through Nuwara Eliya's cool hill-country scenery gives a genuinely pleasant change of pace from the area's tea factory and waterfall tours, worth it for travelers wanting a relaxed outdoor activity suited to the area's cooler climate.",
            tourCard: { slug: "horse-riding-in-nuwara-eliya", title: "Horse Riding in Nuwara Eliya", description: "A horse riding experience in the hill country of Nuwara Eliya.", price: "From $154", duration: "1.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-479453/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Pack a light jacket — Nuwara Eliya's cooler mountain air genuinely makes riding more comfortable than in lowland Sri Lanka." },
        ],
        faqs: [
          { q: "Is horse riding worth it in Nuwara Eliya?", a: "Yes, for a genuinely pleasant, relaxed activity that suits the area's cool hill-country climate, a nice change from tea factory tours." }
        ],
      };

    case "is-horton-plains-strawberry-ambewela-worth-it-nuwara-eliya":
      return {
        title: "Is the Horton Plains, Strawberry and Ambewela Farm Tuk-Tuk Tour Worth It?",
        description: "An honest look at the Nuwara Eliya tuk-tuk tour combining Horton Plains, strawberry picking, and Ambewela Farm.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-908558/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Combining Horton Plains scenery with strawberry picking and a working farm visit gives a genuinely varied, family-friendly day, worth it for travelers wanting hands-on activity alongside the area's famous hiking destination.",
            tourCard: { slug: "nuwara-eliya-to-horton-plains-strawberry-ambewela", title: "Nuwara Eliya to Horton Plains, Strawberry & Ambewela Farm Tuk Tuk", description: "A tuk-tuk tour combining Horton Plains, strawberry picking, and Ambewela Farm.", price: "From $46", duration: "1 day", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-908558/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A genuinely good pick for families with kids, since strawberry picking and the farm visit add hands-on appeal beyond scenic viewpoints." },
        ],
        faqs: [
          { q: "Is the Horton Plains, strawberry and Ambewela Farm tuk-tuk tour worth it?", a: "Yes, for travelers wanting a genuinely varied, family-friendly day combining scenery with hands-on farm activities." }
        ],
      };

    case "is-bakers-bend-worth-it-nuwara-eliya":
      return {
        title: "Is Baker's Bend Worth It as a Day Trip from Nuwara Eliya?",
        description: "An honest look at the Nuwara Eliya to Baker's Bend adventure day tour, a lesser-known scenic spot in the hill country.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1294089/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Baker's Bend is genuinely far less visited than Nuwara Eliya's famous tea estates and Horton Plains, giving a quieter adventure day trip for travelers who've already covered the main hill-country sights.",
            tourCard: { slug: "nuwara-eliya-to-bakers-bend-adventure-day-tour", title: "Nuwara Eliya to Baker's Bend Adventure Day Tour", description: "An adventure day tour to Baker's Bend from Nuwara Eliya.", price: "From $220", duration: "1 day", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1294089/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Go in with flexible expectations, since the appeal here is genuinely the quiet and lesser-known setting rather than a famous landmark." },
        ],
        faqs: [
          { q: "Is Baker's Bend worth it as a day trip from Nuwara Eliya?", a: "Yes, for travelers who've already seen the main hill-country sights and want a genuinely quieter, less crowded spot." }
        ],
      };

    case "is-adams-peak-summit-bliss-worth-it-nuwara-eliya":
      return {
        title: "Is the Summit Bliss Adam's Peak Guided Hike Worth It from Nuwara Eliya?",
        description: "An honest look at the guided Adam's Peak hike from Nuwara Eliya, a pilgrimage climb to one of Sri Lanka's most sacred summits.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-559483/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Adam's Peak is genuinely one of Sri Lanka's most sacred pilgrimage climbs, and a guided hike with proper timing gives real odds of reaching the summit for a memorable sunrise, worth it for travelers prepared for a demanding overnight climb.",
            tourCard: { slug: "from-nuwara-eliya-summit-bliss-adams-peak-guided", title: "From Nuwara Eliya: Summit Bliss, Adam's Peak Guided Hike", description: "A guided hike up Adam's Peak from Nuwara Eliya.", price: "From $322", duration: "Overnight", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-559483/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Expect genuinely thousands of steps and a predawn start — proper footwear and fitness matter more here than on most day hikes." },
        ],
        faqs: [
          { q: "Is the Summit Bliss Adam's Peak hike worth it from Nuwara Eliya?", a: "Yes, for travelers prepared for a demanding overnight climb, with real odds of a memorable sacred sunrise at the summit." }
        ],
      };

    default:
      return null;
  }
}
