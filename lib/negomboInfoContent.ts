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
            content: "Immediately south of the lagoon is Muthurajawela, a coastal marsh of about 6,000 hectares and one of the most important wetlands in Sri Lanka. It holds around 200 bird species, plus otters, purple-faced langurs and a large crocodile population. Boat trips run from the southern end of the lagoon and are quieter than the Negombo lagoon trips.\n\nThe name means Supreme Field of Pearls, and there is a good story attached: the Portuguese cut a channel that let salt water in and destroyed what had been productive rice land, which is how a paddy district became a marsh.\n\nWilpattu National Park is about three hours north and is the other reason to be based on this coast. It is the largest national park in Sri Lanka, dominated by natural sand-rimmed lakes called villus, and it is far quieter than Yala — a fraction of the jeeps for the same leopards, at considerably lower odds of seeing one. A full day, and worth it for anyone who prefers the park to the sighting.\n\nBentota and the Madu River mangroves are two hours south, which makes a longer boat-and-turtle day possible from here.",
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

    default:
      return null;
  }
}
