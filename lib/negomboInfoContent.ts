// Negombo authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getNegomboInfoContent() -> getCityInfoContent().
//
// Every tourCard slug is taken from the live tour list for this city.
import type { CityInfoData } from './cityInfoContent';

export function getNegomboInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    case "negombo-airport-guide":
      return {
        title: "Negombo or Colombo on Arrival: Which to Choose After a Long Flight",
        seoTitle: "Negombo Airport Guide",
        description: "Negombo is 10 km from Bandaranaike airport and Colombo is 35. Why almost everyone should sleep in Negombo on the first and last night, and what it costs.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369182/asiabylocals/tours/negombo-lagoon-mangrove-boat-excursion/img0.jpg",
        fastFacts: [
          { icon: "map", label: "Negombo to the airport", value: "10 km, about 20 minutes" },
          { icon: "map", label: "Colombo to the airport", value: "35 km, 45-90 minutes" },
          { icon: "car", label: "Airport taxi to Negombo", value: "Roughly LKR 3,000-4,500" },
          { icon: "clock", label: "Fish market", value: "From about 5am, finished by eight" },
          { icon: "info", label: "Best for", value: "Arrival and departure nights, not a long stay" },
          { icon: "waves", label: "Beach", value: "Long and usable; not the south coast" },
        ],
        sections: [
          {
            title: "Negombo or Colombo on Arrival: Which to Choose After a Long Flight",
            icon: "plane",
            content: "Bandaranaike International is at Katunayake, which is 10 kilometres from Negombo and 35 from Colombo. That single fact answers most of the question.\n\nIf you land in the evening, or land tired, or are flying out early, Negombo is the sensible choice. Twenty minutes from the gate to a hotel, against 45 to 90 minutes into Colombo depending on traffic, which on a bad afternoon is genuinely 90.\n\nIf your reason for being in Sri Lanka includes Colombo itself — the museums, the food, the markets, the city as a working capital — then stay in Colombo and give it a day. It rewards one.\n\nThe pattern most travellers end up preferring is Negombo on the first night, Colombo properly later in the trip or on the way back, and Negombo again on the last night if the flight is early. That way the long-haul arrival is a twenty-minute transfer, and Colombo gets a real day rather than a jet-lagged half one.\n\nNegombo is not a destination in the way Galle or Ella is. It is a comfortable, well-equipped, pleasant town that happens to be next to the airport, and taken as that it does its job very well.",
            tourCard: {
              slug: "negombo-colombo-city-tour-tuk-tuk",
              title: "Negombo and Colombo City Tour by Tuk Tuk",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 75.4",
              duration: "6 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369162/asiabylocals/tours/negombo-and-colombo-city-tour-with-ceylon-tuk-tuk/img0.jpg",
            },
          },
          {
            title: "Getting from the airport",
            icon: "car",
            content: "Airport taxis to Negombo run roughly LKR 3,000-4,500 and are booked at the official counters in arrivals. Prepaid is simplest at 3am.\n\nRide-hailing apps operate from the airport and are usually cheaper, but you need a working SIM. Local SIMs are sold in arrivals for a few dollars with generous data, and buying one there is the single most useful thing to do before leaving the terminal — it makes transport, maps and communication straightforward for the rest of the trip.\n\nMost Negombo hotels will arrange a pickup, which for a night arrival is worth the small premium: a named driver holding a sign is a better first twenty minutes than negotiating at 2am.\n\nTo Colombo, expect LKR 5,000-8,000 by taxi, or the airport expressway bus which is cheap and runs to the city centre.\n\nThere is no railway station at the airport. Negombo has one on the coastal line and it is a slow, cheap way south, but with luggage after a long flight it is not the move.",
            tourCard: {
              slug: "negombo-colombo-city-tour-tuk-tuk",
              title: "Negombo and Colombo City Tour by Tuk Tuk",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 75.4",
              duration: "6 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369162/asiabylocals/tours/negombo-and-colombo-city-tour-with-ceylon-tuk-tuk/img0.jpg",
            },
          },
          {
            title: "The fish market at dawn",
            icon: "sunrise",
            content: "This is the one thing in Negombo genuinely worth setting an alarm for, and jet lag makes it easy.\n\nThe Lellama fish market runs from around five in the morning and is essentially finished by eight. It is one of the largest in the country, and it is a working auction rather than an attraction: outrigger canoes and oruwa boats coming in, the catch laid out on the sand, buyers shouting, ice, gulls, and the whole thing packed up before the heat.\n\nWhat you see depends on the day and the season — tuna, seer, prawns, crab, and racks of small fish drying in the sun along the beach.\n\nGo early, wear shoes you do not mind, and ask before photographing people at work. It is not arranged for visitors and that is the point.\n\nThe Dutch canal running through the town is the other early-morning walk. Built in the eighteenth century to move cinnamon to Colombo, it still carries small boats and is lined with churches — Negombo has a large Catholic population, a legacy of Portuguese missionary work, and locals sometimes call it Little Rome.",
            tourCard: {
              slug: "negombo-lagoon-mangrove-boat-excursion-dutch-canal-fish-market",
              title: "Negombo Lagoon and Mangrove Boat Excursion with Dutch Canal and Fish Market",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 156",
              duration: "Half day",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369182/asiabylocals/tours/negombo-lagoon-mangrove-boat-excursion/img0.jpg",
            },
          },
          {
            title: "What there is to do",
            icon: "map",
            content: "The [lagoon](/sri-lanka/negombo/negombo-lagoon-guide) is the main attraction and it is a good one. Boat trips run through mangrove channels and out to Monkey Island, with kingfishers, monitor lizards, water birds and the fishing communities that work the lagoon with stake nets. Two hours, calm water, and a genuine ecosystem rather than a scenic loop.\n\nThe beach is long, sandy and usable, and it is not the south coast — the water is flatter and less scenic, and the strip behind it is hotels and restaurants. Fine for a swim and a sunset, not a reason to stay a week.\n\nThe Dutch fort ruins, the canal and the churches make a walkable hour in the old town.\n\nDay trips out of Negombo work well because you are on the western side of the island: Colombo is 45 minutes, Bentota and the Madu River mangroves are two hours south, Wilpattu National Park is about three hours north, and Kandy is three hours inland.\n\nMost people give Negombo one night and take a lagoon trip or the fish market. That is about right.",
            tourCard: {
              slug: "negombo-lagoon-boat-trip-monkey-island",
              title: "Negombo Lagoon Boat Trip to Monkey Island",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 88.62",
              duration: "2 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369172/asiabylocals/tours/lagoon-tour-to-monkey-island-in-negombo/img0.jpg",
            },
          },
          {
            title: "How long, and when",
            icon: "clock",
            content: "One night on arrival, one on departure. Two nights if you want the fish market and a [lagoon](/sri-lanka/negombo/negombo-lagoon-guide) trip without rushing either.\n\nNegombo is on the west coast, so it follows the southwest monsoon: driest and calmest from roughly December to March, wettest May to September. The rain in the monsoon comes as heavy afternoon bursts rather than all-day grey, and it does not affect the fish market, the canal or the town.\n\nSwimming follows the same pattern as the rest of the west coast — calm in the dry season, rough with real currents from May to September.\n\nThe practical case for Negombo does not change with the weather, though. It is 10 kilometres from the airport in every month of the year, and after a fourteen-hour flight that is the argument that wins.\n\nIf you have a very early flight out, the twenty-minute transfer is worth more than anything Colombo offers the night before.",
            tourCard: {
              slug: "wilpattu-national-park-full-day-leopard-safari",
              title: "Wilpattu National Park Full Day Leopard Safari",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 116.39",
              duration: "Full day",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368898/asiabylocals/tours/wilpattu-national-park-full-day-safari-06-00-18-00/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "Should I stay in Negombo or Colombo when I arrive in Sri Lanka?", a: "Negombo, if you land in the evening, land tired, or fly out early — it is 10 km from the airport against Colombo's 35, which on a bad afternoon is 90 minutes. Give Colombo a proper day later in the trip rather than a jet-lagged half one." },
          { q: "How far is Negombo from the airport?", a: "About 10 km and twenty minutes. An airport taxi runs roughly LKR 3,000-4,500 from the official counters in arrivals, and most hotels will arrange a pickup, which for a night arrival is worth the small premium." },
          { q: "What time is the Negombo fish market?", a: "From about 5am, and essentially finished by eight. It is a working auction rather than an attraction — boats landing, the catch on the sand, buyers shouting, and everything packed up before the heat. Jet lag makes the early start easy." },
          { q: "Is Negombo worth visiting?", a: "As a destination in its own right, not especially. As the place to spend your first and last nights, very much — it is comfortable, well equipped and twenty minutes from the gate. The lagoon trip and the dawn fish market are both genuinely good." },
          { q: "How many days should I spend in Negombo?", a: "One night on arrival and one on departure. Two if you want both the fish market and a lagoon boat trip without rushing. It is not a place that rewards a long stay." },
          { q: "Can you swim at Negombo beach?", a: "In the dry season, roughly December to March, yes. From May to September the southwest monsoon builds the sea here as it does along the whole west coast, and currents strengthen. The beach is long and usable but it is not the south coast." },
          { q: "What is there to do in Negombo?", a: "The dawn fish market, a lagoon boat trip through the mangroves to Monkey Island, the eighteenth-century Dutch canal and the churches in the old town. Day trips reach Colombo in 45 minutes, Bentota in two hours and Wilpattu in about three." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Should I stay in Negombo or Colombo when I arrive in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Negombo, if you land in the evening, land tired, or fly out early — it is 10 km from the airport against Colombo's 35, which on a bad afternoon is 90 minutes. Give Colombo a proper day later in the trip rather than a jet-lagged half one." } },
            { "@type": "Question", name: "How far is Negombo from the airport?", acceptedAnswer: { "@type": "Answer", text: "About 10 km and twenty minutes. An airport taxi runs roughly LKR 3,000-4,500 from the official counters in arrivals, and most hotels will arrange a pickup, which for a night arrival is worth the small premium." } },
            { "@type": "Question", name: "What time is the Negombo fish market?", acceptedAnswer: { "@type": "Answer", text: "From about 5am, and essentially finished by eight. It is a working auction rather than an attraction — boats landing, the catch on the sand, buyers shouting, and everything packed up before the heat. Jet lag makes the early start easy." } },
            { "@type": "Question", name: "Is Negombo worth visiting?", acceptedAnswer: { "@type": "Answer", text: "As a destination in its own right, not especially. As the place to spend your first and last nights, very much — it is comfortable, well equipped and twenty minutes from the gate. The lagoon trip and the dawn fish market are both genuinely good." } },
            { "@type": "Question", name: "How many days should I spend in Negombo?", acceptedAnswer: { "@type": "Answer", text: "One night on arrival and one on departure. Two if you want both the fish market and a lagoon boat trip without rushing. It is not a place that rewards a long stay." } },
            { "@type": "Question", name: "Can you swim at Negombo beach?", acceptedAnswer: { "@type": "Answer", text: "In the dry season, roughly December to March, yes. From May to September the southwest monsoon builds the sea here as it does along the whole west coast, and currents strengthen. The beach is long and usable but it is not the south coast." } },
            { "@type": "Question", name: "What is there to do in Negombo?", acceptedAnswer: { "@type": "Answer", text: "The dawn fish market, a lagoon boat trip through the mangroves to Monkey Island, the eighteenth-century Dutch canal and the churches in the old town. Day trips reach Colombo in 45 minutes, Bentota in two hours and Wilpattu in about three." } },
          ],
        },
      };

    case "negombo-lagoon-guide":
      return {
        title: "Negombo Lagoon: Mangroves, Stake Nets and Monkey Island",
        seoTitle: "Negombo Lagoon Boat Trip Guide",
        description: "What a Negombo lagoon trip actually covers: mangrove channels, the fishing communities that work the lagoon, the birds, and how long to allow.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369182/asiabylocals/tours/negombo-lagoon-mangrove-boat-excursion/img0.jpg",
        fastFacts: [
          { icon: "clock", label: "Trip length", value: "2-3 hours; half-day versions add the fish market" },
          { icon: "clock", label: "Best time", value: "Early morning or late afternoon for birds" },
          { icon: "map", label: "Lagoon size", value: "About 35 km², shallow and brackish" },
          { icon: "info", label: "What you see", value: "Mangrove tunnels, stake-net fishing, kingfishers, monitors" },
          { icon: "info", label: "Water", value: "Calm — suitable for children and non-swimmers" },
          { icon: "map", label: "Connects to", value: "The 18th-century Dutch canal to Colombo" },
        ],
        sections: [
          {
            title: "Negombo Lagoon: Mangroves, Stake Nets and Monkey Island",
            icon: "waves",
            content: "The Negombo lagoon is a shallow brackish body of about 35 square kilometres behind the town, fringed with mangrove and fed by the Dandugam Oya. It is one of the most productive fishing grounds in Sri Lanka and it has been worked the same way for centuries.\n\nWhat makes it worth a couple of hours is that it is a working place. The channels are lined with stake nets — brush-pile traps and fixed nets set into the lagoon floor — and the boats you pass are catching prawns and crab rather than carrying visitors. The oruwa outrigger canoes still in use here are essentially unchanged in design for hundreds of years.\n\nThe mangroves themselves are the other half. The boat cuts into narrow channels where the canopy closes overhead, and the ecosystem is genuinely intact: mangrove roots holding the bank, crabs on the mud, and the nursery function that makes the whole fishery possible.\n\nIt is calm water throughout, which makes it suitable for children, non-swimmers and anyone who did not enjoy the sea.\n\nThe lagoon connects to the Dutch canal, built in the eighteenth century to move cinnamon down to Colombo, which is still navigable in parts.",
            tourCard: {
              slug: "negombo-lagoon-mangrove-boat-excursion-dutch-canal-fish-market",
              title: "Negombo Lagoon and Mangrove Boat Excursion with Dutch Canal and Fish Market",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 156",
              duration: "Half day",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369182/asiabylocals/tours/negombo-lagoon-mangrove-boat-excursion/img0.jpg",
            },
          },
          {
            title: "What you will see",
            icon: "eye",
            content: "Birds are the reliable part. Kingfishers — white-throated, common and stork-billed — are almost guaranteed along the channels. Egrets, herons, cormorants and, in the migratory season from about November to March, waders on the mudflats. Brahminy kites overhead.\n\nWater monitors are common on the banks, some of them large, and they swim well. Mudskippers on the flats at low water.\n\nMonkey Island is a small mangrove island in the lagoon with a resident troop of macaques, and most trips stop there. It is a genuine population rather than a feeding station, though visitors do feed them, which is the usual mistake — keep food packed away.\n\nThe fishing is the part people remember. Depending on the hour you will see stake nets being cleared, crab pots lifted, and prawn boats working. Guides on these trips are usually from the fishing families and can explain what is being caught and how, which turns a boat ride into something more useful.\n\nDolphins occasionally enter the lagoon mouth. Do not count on it.",
            tourCard: {
              slug: "negombo-lagoon-boat-trip-monkey-island",
              title: "Negombo Lagoon Boat Trip to Monkey Island",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 88.62",
              duration: "2 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369172/asiabylocals/tours/lagoon-tour-to-monkey-island-in-negombo/img0.jpg",
            },
          },
          {
            title: "Timing, and what to bring",
            icon: "clock",
            content: "Early morning is best: the birds are active, the light is good, the fishing is happening, and it is not yet hot. Late afternoon is the second choice and gives you sunset over the water.\n\nMidday trips are the least rewarding — birds are quiet, the light is flat and the boat has no shade in most cases.\n\nTwo to three hours is the standard length. Half-day versions pair the lagoon with the dawn fish market, which is the best combination available in Negombo and gets you back for a late breakfast.\n\nBring sun protection above all: there is little or no shade on most boats and the water reflects. A hat, sunscreen and sunglasses are not optional.\n\nInsect repellent for the mangrove channels, binoculars if you have them, and a bag you can keep closed around the macaques.\n\nThe boats are small and open. Life jackets should be provided; ask if they are not offered. The water is shallow and calm, but this is still a boat.",
            tourCard: {
              slug: "negombo-lagoon-mangrove-boat-excursion-dutch-canal-fish-market",
              title: "Negombo Lagoon and Mangrove Boat Excursion with Dutch Canal and Fish Market",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 156",
              duration: "Half day",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369182/asiabylocals/tours/negombo-lagoon-mangrove-boat-excursion/img0.jpg",
            },
          },
          {
            title: "The wider area: Muthurajawela and Wilpattu",
            icon: "map",
            content: "Immediately south of the lagoon is Muthurajawela, a coastal marsh of about 6,000 hectares and one of the most important wetlands in Sri Lanka. It holds around 200 bird species, plus otters, purple-faced langurs and a large crocodile population. Boat trips run from the southern end of the lagoon and are quieter than the Negombo lagoon trips.\n\nThe name means Supreme Field of Pearls, and there is a good story attached: the Portuguese cut a channel that let salt water in and destroyed what had been productive rice land, which is how a paddy district became a marsh.\n\nWilpattu National Park is about three hours north and is the other reason to be based on this coast. It is the largest national park in Sri Lanka, dominated by natural sand-rimmed lakes called villus, and it is far quieter than Yala — a fraction of the jeeps for the same leopards, at considerably lower odds of seeing one. A full day, and worth it for anyone who prefers the park to the sighting.\n\nBentota and the Madu River mangroves are two hours south, which makes a longer boat-and-turtle day possible from here.\n\nThat day exists as [a full day to Bentota with the Madu River safari and a turtle hatchery](/sri-lanka/negombo/bentota-full-day-trip-negombo-madu-river-safari-turtle-hatcher).",
            tourCard: {
              slug: "wilpattu-national-park-full-day-leopard-safari",
              title: "Wilpattu National Park Full Day Leopard Safari",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 116.39",
              duration: "Full day",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368898/asiabylocals/tours/wilpattu-national-park-full-day-safari-06-00-18-00/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "How long is a Negombo lagoon boat trip?", a: "Two to three hours as standard. Half-day versions pair the lagoon with the dawn fish market, which is the best combination available in Negombo and gets you back for a late breakfast." },
          { q: "What is the best time of day for the lagoon?", a: "Early morning — birds are active, the fishing is happening and it is not yet hot. Late afternoon is the second choice and gives you sunset over the water. Midday is the least rewarding." },
          { q: "What will I see on the Negombo lagoon?", a: "Kingfishers almost certainly, plus egrets, herons and cormorants, and migratory waders from November to March. Water monitors on the banks, mudskippers at low water, stake-net and crab fishing being worked, and macaques at Monkey Island." },
          { q: "Is the lagoon trip suitable for children?", a: "Yes. The water is shallow and calm throughout, unlike the sea on this coast. Boats are small and open — ask for life jackets if they are not offered, and keep food packed away around the macaques." },
          { q: "What should I bring on a lagoon trip?", a: "Sun protection above all, since most boats have no shade and the water reflects — hat, sunscreen, sunglasses. Insect repellent for the mangrove channels, binoculars if you have them, and a bag that closes." },
          { q: "What is Muthurajawela?", a: "A 6,000-hectare coastal marsh immediately south of the lagoon, holding around 200 bird species plus otters and a large crocodile population. Boat trips from the southern end are quieter than the Negombo lagoon ones. It became a marsh after the Portuguese cut a channel that let salt water into what had been rice land." },
          { q: "Is Wilpattu worth visiting from Negombo?", a: "About three hours north, and worth it if you prefer a quiet park to a guaranteed sighting. Wilpattu is Sri Lanka's largest national park and holds leopards, but with a fraction of Yala's jeeps and correspondingly lower odds of seeing one. It is a full day." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How long is a Negombo lagoon boat trip?", acceptedAnswer: { "@type": "Answer", text: "Two to three hours as standard. Half-day versions pair the lagoon with the dawn fish market, which is the best combination available in Negombo and gets you back for a late breakfast." } },
            { "@type": "Question", name: "What is the best time of day for the lagoon?", acceptedAnswer: { "@type": "Answer", text: "Early morning — birds are active, the fishing is happening and it is not yet hot. Late afternoon is the second choice and gives you sunset over the water. Midday is the least rewarding." } },
            { "@type": "Question", name: "What will I see on the Negombo lagoon?", acceptedAnswer: { "@type": "Answer", text: "Kingfishers almost certainly, plus egrets, herons and cormorants, and migratory waders from November to March. Water monitors on the banks, mudskippers at low water, stake-net and crab fishing being worked, and macaques at Monkey Island." } },
            { "@type": "Question", name: "Is the lagoon trip suitable for children?", acceptedAnswer: { "@type": "Answer", text: "Yes. The water is shallow and calm throughout, unlike the sea on this coast. Boats are small and open — ask for life jackets if they are not offered, and keep food packed away around the macaques." } },
            { "@type": "Question", name: "What should I bring on a lagoon trip?", acceptedAnswer: { "@type": "Answer", text: "Sun protection above all, since most boats have no shade and the water reflects — hat, sunscreen, sunglasses. Insect repellent for the mangrove channels, binoculars if you have them, and a bag that closes." } },
            { "@type": "Question", name: "What is Muthurajawela?", acceptedAnswer: { "@type": "Answer", text: "A 6,000-hectare coastal marsh immediately south of the lagoon, holding around 200 bird species plus otters and a large crocodile population. Boat trips from the southern end are quieter than the Negombo lagoon ones. It became a marsh after the Portuguese cut a channel that let salt water into what had been rice land." } },
            { "@type": "Question", name: "Is Wilpattu worth visiting from Negombo?", acceptedAnswer: { "@type": "Answer", text: "About three hours north, and worth it if you prefer a quiet park to a guaranteed sighting. Wilpattu is Sri Lanka's largest national park and holds leopards, but with a fraction of Yala's jeeps and correspondingly lower odds of seeing one. It is a full day." } },
          ],
        },
      };

    case "best-tours-in-negombo":
      return {
        title: "Best Tours in Negombo — 2026, Honestly Compared",
        seoTitle: "Best Tours in Negombo 2026: Top-Rated Picks by Category",
        description: "The best Negombo tours for 2026, picked by category — a tuk-tuk city tour, a lagoon and mangrove boat excursion, and the Monkey Island boat trip — with real prices and an honest note on how we chose them.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369162/asiabylocals/tours/negombo-and-colombo-city-tour-with-ceylon-tuk-tuk/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "A **Negombo and Colombo city tour by tuk-tuk** is the easiest way to see both cities, good for a first or last day near the airport without needing to arrange your own transport between them.",
            tourCard: { slug: "negombo-colombo-city-tour-tuk-tuk", title: "Negombo and Colombo City Tour by Tuk Tuk", description: "Bookable directly through AsiaByLocals, with a verified local operator.", price: "From USD 75.4", duration: "6 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369162/asiabylocals/tours/negombo-and-colombo-city-tour-with-ceylon-tuk-tuk/img0.jpg" },
          },
          {
            title: "Best Nature Experience: Lagoon & Mangroves",
            content: "A **Negombo Lagoon and mangrove boat excursion**, with stops at the Dutch Canal and fish market, covers the quieter, local-life side of Negombo that the beach strip doesn't show.",
            tourCard: { slug: "negombo-lagoon-mangrove-boat-excursion-dutch-canal-fish-market", title: "Negombo Lagoon and Mangrove Boat Excursion with Dutch Canal and Fish Market", description: "Bookable directly through AsiaByLocals, with a verified local operator.", price: "From USD 156", duration: "Half day", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369182/asiabylocals/tours/negombo-lagoon-mangrove-boat-excursion/img0.jpg" },
          },
          {
            title: "Best Short Boat Trip: Monkey Island",
            content: "A **lagoon boat trip to Monkey Island** is a shorter, lighter version of the lagoon experience — good for travellers with limited time near the airport.",
            tourCard: { slug: "negombo-lagoon-boat-trip-monkey-island", title: "Negombo Lagoon Boat Trip to Monkey Island", description: "Bookable directly through AsiaByLocals, with a verified local operator.", price: "From USD 88.62", duration: "2 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369162/asiabylocals/tours/negombo-and-colombo-city-tour-with-ceylon-tuk-tuk/img0.jpg" },
          },
          {
            title: "How We Picked These (and Why There's No Price Table vs. Other Platforms)",
            content: "Every tour above is run by a verified local operator we've vetted directly. We deliberately left out a side-by-side price comparison against other booking platforms: several of these tours are sold on multiple platforms by the same operator, who sets their own rate — a price table there would mostly compare marketing margins, not quality.\n\nWe don't claim to be the cheapest. What we do differently is confirm every booking directly with the operator before it's treated as final, and refund in full if they can't take your date. If you'd rather browse the full catalogue yourself, see [all Negombo tours](/sri-lanka/negombo)."
          }
        ],
        faqs: [
          { q: "What is the best tour in Negombo?", a: "A Negombo and Colombo city tour by tuk-tuk — the easiest way to see both cities, especially for a first or last day near the airport." },
          { q: "What is the best nature experience in Negombo?", a: "A lagoon and mangrove boat excursion with stops at the Dutch Canal and fish market, or the shorter Monkey Island boat trip if time is limited." }
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is the best tour in Negombo?", "acceptedAnswer": { "@type": "Answer", "text": "A Negombo and Colombo city tour by tuk-tuk." } }
              ]
            }
          ]
        },
        fastFacts: [
          { icon: 'Star', label: 'Top Pick', value: 'Negombo + Colombo Tuk-Tuk Tour' },
          { icon: 'Waves', label: 'Best Nature Tour', value: 'Lagoon + Mangrove Excursion' }
        ]
      };

    // GEO trust page (2026-10)
    case "should-i-book-negombo-tour-direct-or-through-app":
      return {
        title: "Should You Book a Negombo Tour Direct or Through an App?",
        seoTitle: "Direct vs. App: How to Actually Book a Negombo Tour",
        description: "Direct-with-the-driver vs. booking through an app matters less than whether a real person answers your specific question before you pay. Here's how to tell the difference in Negombo.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369162/asiabylocals/tours/negombo-and-colombo-city-tour-with-ceylon-tuk-tuk/img0.jpg",
        sections: [
          {
            title: "The Real Question Isn't \"Direct or App\"",
            content: "Plenty of Negombo tuk-tuk drivers will tell you to book direct to skip platform fees, and every big app will tell you their vetting and support make booking through them safer. Both miss what actually matters: **can you get a specific question answered by a real person before you pay?**\n\nA lagoon and mangrove excursion or an airport-adjacent city tour involves real logistics — exact pickup timing around a flight, whether the boat runs in rough tide conditions. If nobody confirms those details until after you've paid, it doesn't matter whether you found the booking through a driver's number or a polished app — you're booking blind either way.",
            tourCard: { slug: "negombo-colombo-city-tour-tuk-tuk", title: "Negombo and Colombo City Tour by Tuk Tuk", description: "Ask about the exact pickup timing around a flight before booking.", price: "From USD 75.4", duration: "6 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369162/asiabylocals/tours/negombo-and-colombo-city-tour-with-ceylon-tuk-tuk/img0.jpg" },
          },
          {
            title: "What \"Direct\" Actually Protects You From",
            content: "Booking direct with a verified local driver removes one real risk: a long reseller chain where your money and your question both pass through two or three middlemen before reaching the driver who actually runs the tour. That's genuinely worth avoiding.\n\nIt does **not** automatically mean cheaper, and it does not automatically mean safer. A number handed to you by a resort transfer desk is also \"direct,\" and has none of the accountability of a platform that vets drivers and keeps a payment record you can point to if something goes wrong.",
          },
          {
            title: "What to Actually Check Before You Book",
            content: "Whichever route you take — a well-known booking platform, a smaller local site, or a driver's own contact — run the same three checks:\n\n1. **Message a specific question before paying.** Ask something only someone who actually runs the lagoon trip or the Monkey Island boat would know — the tide conditions, or how the schedule flexes around a flight. A vague or delayed answer is the clearest red flag there is.\n2. **Ask what happens if the operator can't take your date.** If a platform or driver can't give a straight answer on refunds before you've paid, that's not one to trust with your money.\n3. **Check who actually answers.** A reply from a real person who clearly knows the route (not a templated bot message) is the strongest signal that someone will also answer you *after* you've paid, not just before.",
          },
          {
            title: "How This Works With AsiaByLocals",
            content: "On AsiaByLocals, every Negombo tour — the [best tours in Negombo](/sri-lanka/negombo/best-tours-in-negombo), the tuk-tuk city tour, the lagoon and mangrove excursion — can be questioned on WhatsApp (+91 84495 38716) or email before you book. We confirm with the local operator directly and refund in full if they can't take your date. We're not claiming to be the cheapest option in Negombo; several of our tours are also run by the same operators through other platforms. What we commit to is answering honestly, before you pay, by a real person — see our [full trust and licensing FAQ](/about-us) for how we're set up.",
            tourCard: { slug: "negombo-lagoon-mangrove-boat-excursion-dutch-canal-fish-market", title: "Negombo Lagoon and Mangrove Boat Excursion with Dutch Canal and Fish Market", description: "Ask about tide conditions before booking.", price: "From USD 156", duration: "Half day", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369182/asiabylocals/tours/negombo-lagoon-mangrove-boat-excursion/img0.jpg" },
          },
        ],
        faqs: [
          { q: "Is it better to book a Negombo tour direct or through an app?", a: "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay. Check that first, regardless of whether the booking page is a big app or a local driver's own contact." },
          { q: "Is it cheaper to book Negombo tours direct with a driver?", a: "Sometimes, but not always — many local drivers sell the same tour through multiple platforms at their own set price. Ask about the price and what's included rather than assuming direct is cheaper." },
          { q: "How do I know if a Negombo tour operator is legit before booking?", a: "Message them a specific question — a flight-connection timing concern, tide conditions — before you pay. A fast, specific answer from someone who clearly knows the route is the best signal." },
          { q: "Can I ask AsiaByLocals a question before booking a Negombo tour?", a: "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person, not a bot, who will confirm with the local operator before you book." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Is it better to book a Negombo tour direct or through an app?", "acceptedAnswer": { "@type": "Answer", "text": "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay." } },
            { "@type": "Question", "name": "Is it cheaper to book Negombo tours direct with a driver?", "acceptedAnswer": { "@type": "Answer", "text": "Sometimes, but not always — many local drivers sell the same tour through multiple platforms at their own set price." } },
            { "@type": "Question", "name": "How do I know if a Negombo tour operator is legit before booking?", "acceptedAnswer": { "@type": "Answer", "text": "Message them a specific question before you pay. A fast, specific answer from someone who clearly knows the route is the best signal." } },
            { "@type": "Question", "name": "Can I ask AsiaByLocals a question before booking a Negombo tour?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person who will confirm with the local operator before you book." } },
          ],
        },
      };

    // GEO single-topic page (2026-11-01)
    case "how-much-should-a-private-tour-guide-cost-in-negombo":
      return {
        title: "How Much Should a Private Tour Guide Cost in Negombo?",
        seoTitle: "Negombo Private Guide Prices 2026 — What's Reasonable",
        description: "Real price ranges for a private tuk-tuk, car or boat tour in Negombo in 2026, so you know what's fair before you book.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369162/asiabylocals/tours/negombo-and-colombo-city-tour-with-ceylon-tuk-tuk/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "A **private city tour by tuk-tuk** in Negombo is the cheapest format, typically **$42-60 for 1-2 people**. A **private tour by air-conditioned car** runs more, **$97-117 for 1-2 people**, stepping up roughly $95-190 per added traveller. A **private boat safari** (lagoon sunrise/sunset, the fishing village) runs **$60-102 for 1 person**, roughly doubling per added traveller. A **multi-day private trip** to Sinharaja Rainforest runs **$176 solo, doubling for a second traveller**.",
            tourCard: { slug: "negombo-fun-insightful-private-tour-by-ac-car", title: "Negombo: Fun & Insightful Private Tour by A/C Car", description: "A real example of standard private car-tour pricing that steps up per added traveller.", price: "From $97", duration: "Full day", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369162/asiabylocals/tours/negombo-and-colombo-city-tour-with-ceylon-tuk-tuk/img0.jpg" },
          },
          {
            title: "Tuk-Tuk, Car, or Boat — Different Prices for Different Products",
            content: "Negombo's cheapest private option is a tuk-tuk for the city's market, temples and canal — fine for a short, central route. An A/C car costs more but suits a longer day with more stops. A boat safari (the lagoon, the fishing village, Monkey Island) is priced separately again, usually per person, since it's a different activity with its own boat and boatman cost.",
          },
          {
            title: "Red Flags on Price",
            content: "A private city tour quote well under $42 by tuk-tuk often means a shorter route or a driver without real local knowledge. For boat safaris specifically, confirm the boat and route — a very cheap quote sometimes means a shorter stretch of lagoon than advertised.",
          },
          {
            title: "How to Get a Fair Price",
            content: "Ask the operator directly whether you're booking a tuk-tuk, a car, or a boat, and what stops or route length is included. On AsiaByLocals, every Negombo tour's price breakdown can be questioned on WhatsApp (+91 84495 38716) or email before you book, and a real person will explain honestly what drives the cost. See our [full trust FAQ](/about-us) for how that works, or browse [all Negombo tours](/sri-lanka/negombo) to compare real, current prices directly.",
            tourCard: { slug: "negombo-private-city-lagoon-sunrise-or-sunset", title: "Negombo Private City-Lagoon: Sunrise or Sunset Kayaking Tour", description: "A real example of per-person boat/kayak pricing, a different product from a tuk-tuk or car tour.", price: "From $102", duration: "Half day", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369162/asiabylocals/tours/negombo-and-colombo-city-tour-with-ceylon-tuk-tuk/img0.jpg" },
          },
        ],
        faqs: [
          { q: "How much does a private tour guide cost in Negombo?", a: "A private tuk-tuk city tour typically runs $42-60 for 1-2 people. A private A/C car tour runs $97-117 for 1-2 people, and a boat safari runs $60-102 for 1 person." },
          { q: "Is a tuk-tuk, car or boat tour better value in Negombo?", a: "A tuk-tuk is cheapest for a short central route; a car suits a longer multi-stop day; a boat is a different activity priced separately for lagoon or fishing-village trips." },
          { q: "Is a very cheap private tuk-tuk tour quote in Negombo a red flag?", a: "Often yes — it can mean a shorter route or a driver without real local knowledge." },
          { q: "What's usually included in a Negombo private tour price?", a: "Typically the driver or boatman's fee and the vehicle or boat. Entrance fees and meals are usually listed separately — ask for the full breakdown before comparing prices." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How much does a private tour guide cost in Negombo?", "acceptedAnswer": { "@type": "Answer", "text": "A private tuk-tuk city tour typically runs $42-60 for 1-2 people. A private A/C car tour runs $97-117 for 1-2 people." } },
            { "@type": "Question", "name": "Is a tuk-tuk, car or boat tour better value in Negombo?", "acceptedAnswer": { "@type": "Answer", "text": "A tuk-tuk is cheapest for a short route; a car suits a longer day; a boat is a separate activity priced on its own." } },
            { "@type": "Question", "name": "Is a very cheap private tuk-tuk tour quote in Negombo a red flag?", "acceptedAnswer": { "@type": "Answer", "text": "Often yes — it can mean a shorter route or a driver without real local knowledge." } },
            { "@type": "Question", "name": "What's usually included in a Negombo private tour price?", "acceptedAnswer": { "@type": "Answer", "text": "Typically the driver or boatman's fee and the vehicle or boat; entrance fees and meals are usually separate." } },
          ],
        },
      };

    case "is-scuba-diving-worth-it-negombo":
      return {
        title: "Is Scuba Diving Worth It in Negombo?",
        description: "An honest look at Negombo's scuba diving experience, including nearby wreck sites.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1251154/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Negombo offers genuine scuba diving, including access to wreck sites nearby, a different water activity from the city's usual lagoon boat safaris.",
            tourCard: { slug: "scuba-diving-in-negombo", title: "Scuba Diving in Negombo", description: "A scuba diving experience in Negombo.", price: "From $177", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1251154/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Ask your operator which wreck or reef site is included, since conditions and visibility vary by location." },
        ],
        faqs: [
          { q: "Is scuba diving worth it in Negombo?", a: "Yes, for travelers who want a water activity beyond the lagoon boat safaris, including nearby wreck sites." },
        ],
      };

    case "is-sri-lankan-cooking-class-worth-it-negombo":
      return {
        title: "Is a Sri Lankan Cooking Class Worth It in Negombo?",
        description: "An honest look at Negombo's cooking class, which includes a local market visit before cooking.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1276829/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This class pairs a visit to a local market with hands-on cooking, giving context on fresh ingredients before you cook with them — a good lower-key cultural pairing with Negombo's lagoon and beach activities.",
            tourCard: { slug: "negombo-sri-lankan-cooking-class-with-market-visit", title: "Negombo: Sri Lankan Cooking Class with Market Visit", description: "A Sri Lankan cooking class with a local market visit.", price: "From $102", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1276829/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A good activity for a layover day near the airport, since it's short and doesn't require venturing far." },
        ],
        faqs: [
          { q: "Is a Negombo cooking class worth it?", a: "Yes, the market visit adds useful context before the hands-on cooking session." },
        ],
      };

    case "is-dolphin-whale-watching-worth-it-negombo":
      return {
        title: "Is Dolphin and Whale Watching Worth It in Negombo?",
        description: "An honest look at Negombo's dolphin and whale watching boat trip, a marine wildlife activity distinct from the lagoon boat safaris and beach activities.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-481302/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Negombo's coastal waters offer a chance to spot dolphins and whales, a genuine open-ocean wildlife experience distinct from the sheltered lagoon boat safaris most Negombo activities focus on.",
            tourCard: { slug: "dolphin-and-whale-watching-in-negombo", title: "Dolphin and Whale Watching in Negombo", description: "A dolphin and whale watching boat trip off Negombo's coast.", price: "From $151", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-481302/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Sightings depend on the season and ocean conditions, so ask your operator about recent sighting rates before booking." },
        ],
        faqs: [
          { q: "Is dolphin and whale watching worth it in Negombo?", a: "Yes, for a genuine open-ocean wildlife experience distinct from the area's sheltered lagoon boat safaris." },
        ],
      };

    case "is-muthurajawela-wetland-tour-worth-it-negombo":
      return {
        title: "Is the Muthurajawela Wetland Sunset Boat Tour Worth It in Negombo?",
        description: "An honest look at the Muthurajawela wetland sunset boat tour from Negombo, a mangrove marsh ecosystem distinct from the lagoon and beach sightseeing.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1424269/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Muthurajawela is a large coastal marsh and mangrove ecosystem near Negombo, home to varied birdlife and distinct from the area's more familiar lagoon and beach activities — a quiet, nature-focused sunset boat ride.",
            tourCard: { slug: "from-negombo-muthurajawela-wetland-sunset-boat", title: "From Negombo: Muthurajawela Wetland Sunset Boat Tour", description: "A sunset boat tour through the Muthurajawela wetland marsh.", price: "From $169", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1424269/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Bring binoculars if you have them — the marsh's birdlife is best appreciated with a closer look than the naked eye gives." },
        ],
        faqs: [
          { q: "Is the Muthurajawela wetland tour worth it in Negombo?", a: "Yes, for a quiet, nature-focused boat ride through a distinct marsh ecosystem, good for birdwatchers." },
        ],
      };

    case "is-wilpattu-safari-worth-it-negombo":
      return {
        title: "Is the Wilpattu National Park Safari Worth It from Negombo?",
        description: "An honest look at the Wilpattu National Park safari from Negombo, Sri Lanka's largest national park, distinct from the more commonly visited Yala and Udawalawe.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1016424/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Wilpattu, Sri Lanka's largest national park, is known for its distinctive natural lakes (villus) and generally sees fewer crowds than the more famous Yala and Udawalawe — a genuinely different safari experience for travelers wanting a quieter park.",
            tourCard: { slug: "from-negombo-wilpattu-national-park-safari-with", title: "From Negombo: Wilpattu National Park Safari", description: "A safari in Wilpattu National Park from Negombo.", price: "From $440", duration: "10 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1016424/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This is a long day trip given Wilpattu's distance from Negombo, so budget the full day for the safari and travel time." },
        ],
        faqs: [
          { q: "Is the Wilpattu safari worth it from Negombo?", a: "Yes, for a quieter, less-crowded safari experience than the more famous Yala and Udawalawe parks." },
        ],
      };

    case "is-sunset-lagoon-safari-worth-it-negombo":
      return {
        title: "Is the Negombo Sunset Lagoon Safari with Fishermen Worth It?",
        description: "An honest look at the sunset lagoon safari with local fishermen in Negombo.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-974576/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Joining genuine local fishermen on the lagoon at sunset gives real insight into Negombo's traditional fishing culture, a far more authentic angle than a standard tourist boat ride, with the sunset lighting as a genuine bonus.",
            tourCard: { slug: "negombo-sunset-lagoon-safari-with-fishermen", title: "Negombo Sunset Lagoon Safari with Fishermen", description: "A sunset lagoon safari joining local fishermen in Negombo.", price: "From $97", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-974576/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Timing matters here — book the slot that lines up with actual sunset for the best lighting and fishing activity.",
          },
        ],
        faqs: [
          { q: "Is the Negombo sunset lagoon safari worth it?", a: "Yes, joining genuine local fishermen gives real insight into the city's traditional fishing culture, beyond a standard boat ride." },
        ],
      };

    case "is-paramotoring-worth-it-negombo":
      return {
        title: "Is Paramotoring Worth It in Negombo?",
        description: "An honest look at paramotoring in Negombo, a genuine aerial adrenaline activity over the lagoon and coast.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1065966/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Seeing Negombo's lagoon, canals, and coastline from a paramotor gives a genuinely unique aerial perspective that no boat tour can match, and at just 15 minutes it's a quick, memorable adrenaline fix.",
            tourCard: { slug: "paramotoring-in-negombo", title: "Paramotoring in Negombo", description: "A paramotoring flight over Negombo's lagoon and coastline.", price: "From $172", duration: "15 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1065966/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "No prior experience is needed — you fly tandem with a certified pilot, so this is accessible even for complete beginners.",
          },
        ],
        faqs: [
          { q: "Is paramotoring worth it in Negombo?", a: "Yes, it gives a genuinely unique aerial view of the lagoon and coastline that no boat tour can match." },
        ],
      };

    case "is-catamaran-sailing-worth-it-negombo":
      return {
        title: "Is the Negombo Catamaran Sailing Experience Worth It?",
        description: "An honest look at the catamaran sailing experience with traditional elements in Negombo.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-636198/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Sailing on a genuine catamaran, with traditional elements incorporated into the experience, gives a more relaxed, premium feel than a standard motorboat lagoon tour, worth the higher price for travelers wanting a more comfortable sailing experience.",
            tourCard: { slug: "negombo-catamaran-sailing-with-traditional", title: "Negombo Catamaran Sailing with Traditional Elements", description: "A catamaran sailing experience with traditional elements in Negombo.", price: "From $267", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-636198/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This is priced as a genuine premium experience, so it suits special occasions or travelers wanting extra comfort over a basic boat tour.",
          },
        ],
        faqs: [
          { q: "Is the Negombo catamaran sailing experience worth it?", a: "Yes, for a more relaxed, premium feel than a standard motorboat lagoon tour, worth it for special occasions." },
        ],
      };

    case "is-ayurvedic-massage-worth-it-negombo":
      return {
        title: "Is the Negombo Ayurvedic Massage & Spa Rituals Experience Worth It?",
        description: "An honest look at the Ayurvedic massage and spa rituals experience in Negombo.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1396749/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Ayurveda is a genuine, centuries-old Sri Lankan wellness tradition, and at a notably low price for 30 minutes, this is an easy, affordable way to try it, especially useful as a relaxing wind-down before or after a flight given Negombo's proximity to the airport.",
            tourCard: { slug: "negombo-ayurvedic-massage-and-spa-rituals", title: "Negombo Ayurvedic Massage & Spa Rituals", description: "An Ayurvedic massage and spa rituals experience in Negombo.", price: "From $19", duration: "30 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1396749/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A genuinely good pick right before a flight out, given Negombo's proximity to the airport and the short session length.",
          },
        ],
        faqs: [
          { q: "Is the Ayurvedic massage worth it in Negombo?", a: "Yes, at a notably low price, it's an easy, affordable way to try Sri Lanka's genuine wellness tradition, good right before a flight." },
        ],
      };

    case "is-jewelry-workshop-worth-it-negombo":
      return {
        title: "Is the Negombo Ring-Making Jewelry Workshop Worth It?",
        description: "An honest look at the make-your-own-ring jewelry workshop in Negombo.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1454030/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "At a very low price and just 2 hours, this is a quick, hands-on craft activity that gives you a tangible souvenir you've made yourself — a nice, low-commitment add-on alongside a lagoon or city tour rather than a day's main activity.",
            tourCard: { slug: "negombo-make-your-own-ring-jewelry-workshop", title: "Negombo: Make Your Own Ring - Jewelry Workshop", description: "A hands-on ring-making jewelry workshop in Negombo.", price: "From $8", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1454030/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Given the low price and short time, this pairs well as a half-day add-on alongside a lagoon boat safari or city tour rather than standing alone.",
          },
        ],
        faqs: [
          { q: "Is the Negombo jewelry workshop worth it?", a: "Yes, it's cheap, quick, and gives you a handmade souvenir — a good add-on alongside another Negombo activity." },
        ],
      };

    case "is-bicycle-city-tour-worth-it-negombo":
      return {
        title: "Is the Negombo Bicycle City Tour Worth It?",
        description: "An honest look at the guided bicycle city tour of Negombo.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1448822/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Cycling covers more ground than walking while staying slower-paced than a tuk-tuk, letting you stop more freely at the fishing village, markets, and canal-side spots that make up Negombo's local life.",
            tourCard: { slug: "negombo-explore-the-city-by-bicycle-with-a-local", title: "Negombo: Explore the City by Bicycle with a Local Guide", description: "A guided bicycle tour of Negombo with a local guide.", price: "From $43", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1448822/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Mornings are more comfortable for cycling before the midday heat sets in — ask if an early start is available.",
          },
        ],
        faqs: [
          { q: "Is the Negombo bicycle city tour worth it?", a: "Yes if you want a slower, more flexible pace than a tuk-tuk tour while still covering more ground than walking." },
        ],
      };

    case "is-snorkeling-worth-it-negombo":
      return {
        title: "Is Snorkeling Worth It in Negombo?",
        description: "An honest look at the snorkeling experience in Negombo, a lighter-weight alternative to the area's scuba diving.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-481287/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Negombo isn't primarily known as a reef destination the way the south coast is, so expectations matter — this suits travelers wanting a casual snorkel without the certification and commitment scuba diving requires, rather than those seeking the area's best reef life.",
            tourCard: { slug: "snorkeling-in-negombo", title: "Snorkeling in Negombo", description: "A guided snorkeling experience in Negombo.", price: "From $88", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-481287/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "If reef quality is your priority, the south coast (Mirissa, Galle) is generally considered the stronger snorkeling destination — pick Negombo's version for convenience near the airport, not for the best reef in Sri Lanka.",
          },
        ],
        faqs: [
          { q: "Is snorkeling worth it in Negombo?", a: "Yes for a casual, no-certification-needed water activity, though the south coast generally has stronger reef life if that's your main priority." },
        ],
      };

    case "is-scooter-ride-worth-it-negombo":
      return {
        title: "Is the Negombo Scooter City Ride Worth It?",
        description: "An honest look at the self-ride scooter tour through Negombo's best spots.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1100354/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Like the bicycle tour, this covers Negombo's sights at your own pace rather than being driven, but with a motor doing the work — a faster, less physically demanding way to cover the same kind of ground.",
            tourCard: { slug: "negombo-by-scooty-ride-through-the-citys-best", title: "Negombo by Scooty: Ride Through the City's Best Spots", description: "A self-ride scooter tour through Negombo.", price: "From $68", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1100354/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This suits confident riders comfortable with Sri Lankan traffic — if you'd rather be driven, the tuk-tuk city tours are the better fit.",
          },
        ],
        faqs: [
          { q: "Is the Negombo scooter ride worth it?", a: "Yes for confident riders who want to explore at their own pace without the effort of cycling — if you'd rather be driven, go with a tuk-tuk tour instead." },
        ],
      };

    case "is-fishing-village-fish-market-tour-worth-it-negombo":
      return {
        title: "Is the Fishing Village and Fish Market Tuk-Tuk Tour Worth It in Negombo?",
        description: "An honest look at the fishing village, fish market, and lagoon tuk-tuk tour in Negombo.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1438353/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Negombo's working fish market and fishing village give a genuine, lively look at the town's actual livelihood, distinct from a generic city sightseeing tour, and the tuk-tuk format lets you weave through narrow lanes a car couldn't reach.",
            tourCard: { slug: "negombo-fishing-village-fish-market-lagoon-tuk", title: "Negombo: Fishing Village, Fish Market & Lagoon Tuk-Tuk Tour", description: "A tuk-tuk tour of Negombo's fishing village, fish market, and lagoon.", price: "From $43", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1438353/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Go in the morning when the fish market is genuinely active — it's quieter and less interesting later in the day.",
          },
        ],
        faqs: [
          { q: "Is the fishing village and fish market tour worth it in Negombo?", a: "Yes, for a genuine, lively look at the town's actual working life, best done in the morning when the market is active." },
        ],
      };

    case "is-dutch-canal-sunset-boat-tour-worth-it-negombo":
      return {
        title: "Is the Negombo Lagoon and Dutch Canal Sunset Boat Tour Worth It?",
        description: "An honest look at the Negombo Lagoon and Dutch Canal sunset boat tour.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1150788/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Dutch Canal is a genuine colonial-era waterway distinct from the natural lagoon, and pairing it with a sunset boat tour gives both a historical angle and good evening light, a different combination from the standard lagoon-and-mangrove wildlife tours.",
            tourCard: { slug: "negombo-lagoon-dutch-canal-sunset-boat-tour", title: "Negombo Lagoon & Dutch Canal Sunset Boat Tour", description: "A sunset boat tour covering the Negombo Lagoon and Dutch Canal.", price: "From $128", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1150788/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Check the sunset time before booking so the timing lines up with the best evening light over the water.",
          },
        ],
        faqs: [
          { q: "Is the Dutch Canal sunset boat tour worth it in Negombo?", a: "Yes, for a genuine historical angle via the colonial-era canal, paired with good evening light, distinct from standard wildlife-focused lagoon tours." },
        ],
      };

    case "is-sunset-kayaking-worth-it-negombo":
      return {
        title: "Is Sunset Kayaking Worth It in Negombo?",
        description: "An honest look at sunset kayaking in Negombo.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-595006/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Paddling your own kayak at sunset gives a genuinely quieter, more active alternative to the motorized lagoon boat safaris, with good evening light and a slower pace that lets you actually take in the surroundings.",
            tourCard: { slug: "sunset-kayaking-in-negombo", title: "Sunset Kayaking in Negombo", description: "A sunset kayaking experience in Negombo.", price: "From $62", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-595006/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A reasonable fitness level helps for the paddling, though the pace is generally relaxed rather than a workout.",
          },
        ],
        faqs: [
          { q: "Is sunset kayaking worth it in Negombo?", a: "Yes, for a quieter, more active alternative to motorized boat safaris, with good evening light." },
        ],
      };

    case "is-local-friend-lagoon-tour-worth-it-negombo":
      return {
        title: "Is the Negombo Life, Lagoon and Hidden Gems Tour with a Local Friend Worth It?",
        description: "An honest look at the Negombo life, lagoon, and hidden gems tour with a local friend.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1350903/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The 'local friend' framing of this tour suggests a more personal, conversational format than a standard scripted guide tour, aiming to show hidden spots and everyday life a typical city tour wouldn't cover — worth it specifically for travelers who want a genuine local perspective over a checklist of sights.",
            tourCard: { slug: "negombo-life-lagoon-hidden-gems-tour-with-a-local", title: "Negombo Life, Lagoon & Hidden Gems Tour with a Local Friend", description: "A personal, local-guided tour of Negombo life, lagoon, and hidden gems.", price: "From $67", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1350903/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Come with questions about local life — the format is built around genuine conversation, not just sightseeing stops.",
          },
        ],
        faqs: [
          { q: "Is the local friend lagoon tour worth it in Negombo?", a: "Yes, specifically for travelers wanting a genuine, conversational local perspective rather than a scripted sightseeing checklist." },
        ],
      };

    case "is-anawilundawa-bird-sanctuary-worth-it-negombo":
      return {
        title: "Is the Anawilundawa Bird Sanctuary Bird Watching Tour Worth It from Negombo?",
        description: "An honest look at the Anawilundawa Bird Sanctuary bird watching tour from Negombo.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1406190/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Anawilundawa's Ramsar-listed wetlands draw genuine migratory bird diversity in a quieter setting than the better-known Muthurajawela wetland closer to the city, worth it for serious birdwatchers willing to go a bit further.",
            tourCard: { slug: "from-negombo-anawilundawa-bird-sanctuary-bird", title: "From Negombo: Anawilundawa Bird Sanctuary Bird Watching Tour", description: "A bird watching tour of the Anawilundawa Bird Sanctuary wetlands from Negombo.", price: "From $169", duration: "6 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1406190/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Bring binoculars and visit during the winter migratory season for the best variety of bird sightings.",
          },
        ],
        faqs: [
          { q: "Is the Anawilundawa Bird Sanctuary tour worth it from Negombo?", a: "Yes, for serious birdwatchers wanting a quieter wetland than Muthurajawela, with genuine migratory bird diversity." },
        ],
      };

    case "is-sinharaja-2day-rainforest-worth-it-negombo":
      return {
        title: "Is the Negombo 2-Day Sinharaja Rainforest Private Trip Worth It?",
        description: "An honest look at the 2-day private trip to Sinharaja Rainforest from Negombo.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1341592/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Sinharaja is Sri Lanka's last major primary rainforest and a UNESCO World Heritage site, and a 2-day trip gives real time to explore its trails rather than rushing through on a single day, worth it for travelers with a genuine interest in rainforest biodiversity.",
            tourCard: { slug: "negombo-2-day-sinharaja-rainforest-private-trip", title: "Negombo: 2-Day Sinharaja Rainforest Private Trip", description: "A 2-day private trip to Sinharaja Rainforest from Negombo.", price: "From $176", duration: "2 days", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1341592/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Wear sturdy, waterproof hiking shoes, since Sinharaja's trails are genuinely muddy and leech-prone given the rainforest's high rainfall.",
          },
        ],
        faqs: [
          { q: "Is the 2-day Sinharaja Rainforest trip worth it from Negombo?", a: "Yes, for travelers with a genuine interest in rainforest biodiversity, giving real time to explore rather than rushing through in a single day." },
        ],
      };

    case "is-4day-ayurveda-wellness-retreat-worth-it-negombo":
      return {
        title: "Is the Sri Lanka 4-Day Ayurveda and Wellness Retreat Worth It?",
        description: "An honest look at the 4-day Ayurveda and wellness retreat with meals in Sri Lanka.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1366356/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Four days gives genuine time to experience authentic Ayurvedic treatments and meals rather than a single rushed spa session, worth it for travelers with real interest in wellness who want to properly unwind rather than squeeze treatments between sightseeing.",
            tourCard: { slug: "sri-lanka-4-day-ayurveda-and-wellness-retreat", title: "Sri Lanka: 4-Day Ayurveda and Wellness Retreat with Meals", description: "A 4-day Ayurveda and wellness retreat with meals included.", price: "From $1268", duration: "4 days", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1366356/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Mention any health conditions to the Ayurvedic practitioner in advance, since treatments are often tailored to individual constitution.",
          },
        ],
        faqs: [
          { q: "Is the 4-day Ayurveda and wellness retreat worth it?", a: "Yes, for travelers with genuine interest in wellness wanting real time for authentic treatments, rather than squeezing a rushed spa session between sightseeing." },
        ],
      };

    case "is-lagoon-boat-safari-fruit-tasting-worth-it-negombo":
      return {
        title: "Is the Negombo City Tour & Lagoon Boat Safari with Fruit Tasting Worth It?",
        description: "An honest look at the half-day Negombo city tour and lagoon boat safari with fruit tasting.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1395791/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, if you want genuine variety across city, water, and food in one half-day — pairing a Negombo city tour with a lagoon boat safari and fruit tasting gives real breadth beyond just the dawn fish market and Dutch canal walk most visitors stick to.",
            tourCard: { slug: "negombo-city-tour-lagoon-boat-safari-with-fruit", title: "Negombo City Tour & Lagoon Boat Safari with Fruit Tasting", description: "A half-day Negombo city tour and lagoon boat safari with fruit tasting.", price: "From $254", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1395791/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Come with an appetite for the fruit tasting portion — tropical fruit varieties on these tours are often ones travelers haven't tried before.",
          },
        ],
        faqs: [
          { q: "Is the Negombo lagoon boat safari with fruit tasting worth it?", a: "Yes, for travelers wanting genuine variety across city sightseeing, a lagoon boat safari, and local fruit tasting in one half-day." },
        ],
      };

    default:
      return null;
  }
}
