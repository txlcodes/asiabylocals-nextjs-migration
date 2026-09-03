// Bentota authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getBentotaInfoContent() -> getCityInfoContent().
//
// Every tourCard slug is taken from the live tour list for this city.
import type { CityInfoData } from './cityInfoContent';

export function getBentotaInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    case "madu-river-safari-guide":
      return {
        title: "Madu River Boat Safari: Mangrove Tunnels, Cinnamon Island and What to Watch For",
        seoTitle: "Madu River Safari Guide, Bentota",
        description: "What a Madu Ganga boat safari actually covers — mangrove tunnels, a working cinnamon island, fish spas — and the parts worth declining.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375894/asiabylocals/tours/from-bentota-kalutara-magical-journey-to-kandy-pinnawala/img0.jpg",
        fastFacts: [
          { icon: "clock", label: "Trip length", value: "2-3 hours" },
          { icon: "clock", label: "Best time", value: "Early morning for birds and calm water" },
          { icon: "map", label: "The wetland", value: "About 900 hectares, 64 islands, Ramsar-listed" },
          { icon: "info", label: "Mangrove species", value: "Around 14, one of the last intact stands in Sri Lanka" },
          { icon: "waves", label: "Water", value: "Flat and calm — suits children and non-swimmers" },
          { icon: "map", label: "From Bentota", value: "About 20 minutes to Balapitiya" },
        ],
        sections: [
          {
            title: "Madu River Boat Safari: Mangrove Tunnels, Cinnamon Island and What to Watch For",
            icon: "waves",
            content: "The Madu Ganga is a shallow coastal wetland of about 900 hectares behind Balapitiya, twenty minutes south of Bentota, and it holds one of the last substantially intact mangrove stands in Sri Lanka — around fourteen species, which is a high count anywhere. It is Ramsar-listed, and the sixty-four islands in it range from a few square metres to inhabited villages.\n\nA boat safari here is two to three hours in a small outboard, and the good part is genuinely good: the boat cuts into channels where the mangrove canopy closes overhead and the light goes green, and the roots and the crabs and the kingfishers are right beside you.\n\nWhat the trip has also accumulated, over twenty years of tourism, is a set of stops that range from worthwhile to grim. A working cinnamon island where bark is peeled by hand is the former. A caged monkey on a jetty is the latter.\n\nKnowing which is which before you get on the boat is the difference between a good morning and an uncomfortable one, and the section below says so plainly.",
            tourCard: {
              slug: "kandy-and-pinnawala-day-trip-from-bentota-with-the-temple-of-the-tooth",
              title: "Kandy and Pinnawala Day Trip from Bentota with the Temple of the Tooth",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 143",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375894/asiabylocals/tours/from-bentota-kalutara-magical-journey-to-kandy-pinnawala/img0.jpg",
            },
          },
          {
            title: "The mangroves, and why they matter here",
            icon: "leaf",
            content: "Mangroves are the nursery for the coastal fishery: the root systems shelter juvenile fish and prawns until they are large enough to move out to sea. Strip them and the fishery collapses within a decade, which has happened along much of the Sri Lankan coast.\n\nMadu Ganga survived largely because the water is brackish and the land was not worth converting to shrimp ponds at the moment when much of the rest was.\n\nThe 2004 tsunami is the other part of the story. Villages behind intact mangrove took measurably less damage than those behind cleared shoreline, and that observation drove a national replanting effort afterwards — some of it well done, a lot of it planted in the wrong places with the wrong species and now dead. Your boatman will usually point out both.\n\nIn the channels themselves, look for water monitors on the roots, mudskippers on the banks at low water, and kingfishers — white-throated, common and stork-billed are all here. Early morning is when they are active; a midday trip sees a fraction of it.",
            tourCard: {
              slug: "sigiriya-rock-dambulla-caves-small-group-day-tour",
              title: "Sigiriya Rock and Dambulla Caves Small Group Day Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 123.5",
              duration: "16 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368995/asiabylocals/tours/sigiriya-and-dambulla-day-tour-from-kaluthara/img0.jpg",
            },
          },
          {
            title: "Cinnamon island: the stop worth taking",
            icon: "sparkles",
            content: "Sri Lanka produces most of the world's true cinnamon, and the process has not changed in centuries. On the cinnamon islands in the Madu Ganga you watch it done: the branch is cut, the outer bark scraped off with a curved knife, the inner bark loosened by rubbing with a brass rod, and then peeled off in sheets that curl into quills as they dry.\n\nIt takes about ten minutes to watch and it is the best explanation anyone will give you of why real Ceylon cinnamon costs several times what supermarket cinnamon does. Most of what is sold as cinnamon in Europe and America is cassia, a different plant with a coarser, harsher flavour and much higher coumarin content.\n\nThe peelers are skilled workers, and a good peeler is paid accordingly. Buying a bundle directly here costs a fraction of a tourist shop and the money goes to the person who made it.\n\nThere is usually a small stall. You are not obliged to buy and nobody pushes hard, which is not something you can say about every stop on this river.",
            tourCard: {
              slug: "kandy-and-pinnawala-day-trip-from-bentota-with-the-temple-of-the-tooth",
              title: "Kandy and Pinnawala Day Trip from Bentota with the Temple of the Tooth",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 143",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375894/asiabylocals/tours/from-bentota-kalutara-magical-journey-to-kandy-pinnawala/img0.jpg",
            },
          },
          {
            title: "The stops to decline",
            icon: "info",
            content: "This is the part most guides leave out, and it is the reason to read anything about this trip at all.\n\n**The fish spa.** A floating platform where you dip your feet into a tank of garra rufa fish that nibble dead skin. It is harmless to you and unpleasant for the fish, which are kept in high densities in a hot open tank. Skip it; nobody minds.\n\n**Caged animals.** Some jetties keep a monkey, a python or a monitor lizard on a chain for photographs. This is not part of the wetland and it exists purely because people pay for the picture. Not paying is the entire solution.\n\n**The temple island.** Kothduwa temple on a small island is a genuine Buddhist site and worth the stop. It is not the same category as the above.\n\n**Feeding.** Do not let the boatman feed monitors or birds to bring them closer. It works, and it is how wild animals become dependent and then a problem.\n\nA good operator will not include the spa or the caged animals at all. If yours does, say you would rather stay on the boat — you will not be the first.",
            tourCard: {
              slug: "sigiriya-rock-dambulla-caves-small-group-day-tour",
              title: "Sigiriya Rock and Dambulla Caves Small Group Day Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 123.5",
              duration: "16 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368995/asiabylocals/tours/sigiriya-and-dambulla-day-tour-from-kaluthara/img0.jpg",
            },
          },
          {
            title: "Practicalities",
            icon: "clock",
            content: "Boats leave from Balapitiya, about twenty minutes south of Bentota and an hour and a half from Colombo. Trips run two to three hours and are usually booked as part of a south-coast day rather than alone.\n\nGo early. Birds are active at first light, the water is calmest, and the middle of the day is hot with no shade on most boats.\n\nWhat to bring: sun protection above all, because there is little shade and the water reflects. Insect repellent for the mangrove channels. Binoculars if you have them. A bag that closes, because the boat can throw spray.\n\nLife jackets should be provided. The water is shallow and flat throughout, which makes this suitable for children and for anyone who did not enjoy the sea on this coast.\n\nThe trip runs year-round. Unlike the beaches twenty minutes away, the lagoon is unaffected by the southwest monsoon, which makes it one of the few genuinely all-season activities on this stretch of coast.",
            tourCard: {
              slug: "kandy-and-pinnawala-day-trip-from-bentota-with-the-temple-of-the-tooth",
              title: "Kandy and Pinnawala Day Trip from Bentota with the Temple of the Tooth",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 143",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375894/asiabylocals/tours/from-bentota-kalutara-magical-journey-to-kandy-pinnawala/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "How long is a Madu River boat safari?", a: "Two to three hours from Balapitiya, about twenty minutes south of Bentota. Most people book it as part of a south-coast day rather than on its own." },
          { q: "What is the best time for the Madu River?", a: "Early morning. Birds are active at first light, the water is calmest and there is little shade on the boats, so the middle of the day is hot and much less productive." },
          { q: "Is the cinnamon island worth it?", a: "Yes — it is the best stop on the river. You watch bark cut, scraped, loosened with a brass rod and peeled into quills, which explains why real Ceylon cinnamon costs several times what supermarket cassia does. Buying directly costs a fraction of a tourist shop." },
          { q: "Should I do the fish spa on the Madu River?", a: "No. It is harmless to you and unpleasant for the fish, which are kept at high density in a hot open tank. Declining it is completely normal and nobody minds." },
          { q: "Are there caged animals on the Madu River trip?", a: "Some jetties keep a monkey, python or monitor on a chain for photographs. It has nothing to do with the wetland and exists only because visitors pay for the picture. A good operator does not stop there; if yours does, stay on the boat." },
          { q: "Is the Madu River safari suitable for children?", a: "Yes. The water is shallow and flat throughout, unlike the sea on this coast, and the trip is calm. Life jackets should be provided — ask if they are not offered." },
          { q: "Does the Madu River trip run in the monsoon?", a: "Yes, year-round. The lagoon is unaffected by the southwest monsoon that closes the beaches twenty minutes away, which makes it one of the few all-season activities on this coast." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How long is a Madu River boat safari?", acceptedAnswer: { "@type": "Answer", text: "Two to three hours from Balapitiya, about twenty minutes south of Bentota. Most people book it as part of a south-coast day rather than on its own." } },
            { "@type": "Question", name: "What is the best time for the Madu River?", acceptedAnswer: { "@type": "Answer", text: "Early morning. Birds are active at first light, the water is calmest and there is little shade on the boats, so the middle of the day is hot and much less productive." } },
            { "@type": "Question", name: "Is the cinnamon island worth it?", acceptedAnswer: { "@type": "Answer", text: "Yes — it is the best stop on the river. You watch bark cut, scraped, loosened with a brass rod and peeled into quills, which explains why real Ceylon cinnamon costs several times what supermarket cassia does. Buying directly costs a fraction of a tourist shop." } },
            { "@type": "Question", name: "Should I do the fish spa on the Madu River?", acceptedAnswer: { "@type": "Answer", text: "No. It is harmless to you and unpleasant for the fish, which are kept at high density in a hot open tank. Declining it is completely normal and nobody minds." } },
            { "@type": "Question", name: "Are there caged animals on the Madu River trip?", acceptedAnswer: { "@type": "Answer", text: "Some jetties keep a monkey, python or monitor on a chain for photographs. It has nothing to do with the wetland and exists only because visitors pay for the picture. A good operator does not stop there; if yours does, stay on the boat." } },
            { "@type": "Question", name: "Is the Madu River safari suitable for children?", acceptedAnswer: { "@type": "Answer", text: "Yes. The water is shallow and flat throughout, unlike the sea on this coast, and the trip is calm. Life jackets should be provided — ask if they are not offered." } },
            { "@type": "Question", name: "Does the Madu River trip run in the monsoon?", acceptedAnswer: { "@type": "Answer", text: "Yes, year-round. The lagoon is unaffected by the southwest monsoon that closes the beaches twenty minutes away, which makes it one of the few all-season activities on this coast." } },
          ],
        },
      };

    case "bentota-guide":
      return {
        title: "Bentota Guide: The Beach, the River and How Long to Stay",
        seoTitle: "Bentota Guide, Sri Lanka",
        description: "Bentota is the resort strip between Colombo and Galle — a long beach, a river for mangrove safaris, water sports, and an honest word on when the sea is safe.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368995/asiabylocals/tours/sigiriya-and-dambulla-day-tour-from-kaluthara/img0.jpg",
        fastFacts: [
          { icon: "map", label: "From Colombo airport", value: "About 100 km, 1.5-2 hours on the E01" },
          { icon: "map", label: "From Galle", value: "About 60 km, an hour" },
          { icon: "calendar-days", label: "Swimmable", value: "Roughly November to April" },
          { icon: "calendar-days", label: "Rough sea", value: "May to September — strong rip currents" },
          { icon: "clock", label: "How long to stay", value: "Two or three nights; it is a beach stop" },
          { icon: "waves", label: "Best for", value: "Water sports, the river, and a soft first or last stop" },
        ],
        sections: [
          {
            title: "Bentota Guide: The Beach, the River and How Long to Stay",
            icon: "waves",
            content: "Bentota sits about ninety minutes south of Colombo airport on the southwest coast, at the point where the Bentota Ganga meets the sea. It is the most developed resort strip in Sri Lanka and it is honest about that: large hotels, a long sandy beach, water sports on the river, and very little pretence of being undiscovered.\n\nWhat it is good at is being easy. It is the shortest transfer from the airport to a proper beach in the country, the sea is gentler here than further south for most of the season, and everything a resort holiday needs is within a few hundred metres.\n\nWhat it is not is characterful. Galle Fort, an hour further south, has four hundred years of history you can walk through. Bentota has hotels.\n\nThe combination that works is using Bentota as the soft end of a trip — the first two nights while jet lag wears off, or the last two before a flight — and giving the character to somewhere else. Used that way it does its job very well.\n\nTwo or three nights is right. A week here is a lot of the same beach.",
            tourCard: {
              slug: "sigiriya-rock-dambulla-caves-small-group-day-tour",
              title: "Sigiriya Rock and Dambulla Caves Small Group Day Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 123.5",
              duration: "16 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368995/asiabylocals/tours/sigiriya-and-dambulla-day-tour-from-kaluthara/img0.jpg",
            },
          },
          {
            title: "The river, which is better than the beach",
            icon: "leaf",
            content: "The Bentota Ganga and the Madu Ganga twenty minutes south are the reason to be here rather than at any other resort strip.\n\nThe Madu is the bigger draw: a 900-hectare Ramsar-listed wetland with sixty-four islands and around fourteen mangrove species, one of the last substantially intact stands in the country. Boat safaris cut into channels where the canopy closes overhead, and stop at a working cinnamon island where bark is still peeled by hand.\n\nThe Bentota river itself carries the water sports — jet skis, banana boats, wakeboarding, and a good deal of noise. It is calm water, which makes it safe and popular, and it is also the reason the river is not a quiet wildlife experience in the way the Madu is.\n\nBoth are unaffected by the monsoon that closes the sea from May to September, which makes them the thing to do here in the months when the beach is off.\n\nTurtle hatcheries along this stretch vary a great deal — the better ones release hatchlings the same night rather than keeping them in tanks for photographs. Ask before you pay.",
            tourCard: {
              slug: "kandy-and-pinnawala-day-trip-from-bentota-with-the-temple-of-the-tooth",
              title: "Kandy and Pinnawala Day Trip from Bentota with the Temple of the Tooth",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 143",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375894/asiabylocals/tours/from-bentota-kalutara-magical-journey-to-kandy-pinnawala/img0.jpg",
            },
          },
          {
            title: "The sea, and when not to get in",
            icon: "info",
            content: "Bentota's beach is long, sandy and looks inviting all year, which is the problem.\n\nFrom roughly November to April the sea here is calm enough to swim and this is the season the resorts are built around. From May to September the southwest monsoon builds the surf, rip currents strengthen sharply, and swimming becomes genuinely dangerous on days that look fine from a sun lounger.\n\nSome of the larger hotels employ lifeguards on their own stretch. Most of the beach has none.\n\nRed flags mean what they say. So does an empty sea on a hot afternoon — locals on this coast know which days are dangerous, and their absence from the water is information.\n\nIf you are caught in a rip, do not swim against it. Swim parallel to the beach until you are out of the pull, then come in.\n\nIn the monsoon months the honest answer is to use the hotel pool and the river, or to be on the east coast instead, where Trincomalee and Arugam Bay are dry and calm from May to September.",
            tourCard: {
              slug: "sigiriya-rock-dambulla-caves-small-group-day-tour",
              title: "Sigiriya Rock and Dambulla Caves Small Group Day Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 123.5",
              duration: "16 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368995/asiabylocals/tours/sigiriya-and-dambulla-day-tour-from-kaluthara/img0.jpg",
            },
          },
          {
            title: "What to do from here",
            icon: "map",
            content: "Bentota's real advantage is position. It sits between Colombo and Galle, which puts a lot within a day.\n\nGalle Fort is an hour south — a walled Dutch town of 1663 that people still live in, best walked on the ramparts in the late afternoon. Hikkaduwa and its reef are forty minutes. Mirissa, for whale watching between November and April, is about two hours.\n\nInland, the cultural sites are further than they look. Kandy is four hours, Sigiriya five and a half, and both are done from here as very long days — if either matters to you, move rather than day-trip.\n\nCloser in: Brief Garden, the estate landscaped by Bevis Bawa over decades and open to visitors, is twenty minutes away and almost nobody goes. Lunuganga, his brother Geoffrey Bawa's country estate, is near Bentota too and is the more significant of the two — Geoffrey Bawa essentially invented tropical modernism and this was his laboratory.\n\nThose two gardens are the most interesting thing in the area and they are not on most itineraries.",
            tourCard: {
              slug: "kandy-and-pinnawala-day-trip-from-bentota-with-the-temple-of-the-tooth",
              title: "Kandy and Pinnawala Day Trip from Bentota with the Temple of the Tooth",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 143",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375894/asiabylocals/tours/from-bentota-kalutara-magical-journey-to-kandy-pinnawala/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "How far is Bentota from Colombo airport?", a: "About 100 km and 1.5 to 2 hours on the E01 expressway, which makes it the shortest transfer from the airport to a proper beach in Sri Lanka." },
          { q: "When can you swim at Bentota?", a: "Roughly November to April. From May to September the southwest monsoon builds the surf and strengthens rip currents, and swimming becomes genuinely dangerous even on days that look calm. Most of the beach has no lifeguard." },
          { q: "How many days should I spend in Bentota?", a: "Two or three nights. It works best as the soft end of a trip — the first nights while jet lag wears off, or the last before a flight. A week is a lot of the same beach." },
          { q: "Is Bentota or Galle better?", a: "Different things. Bentota is a resort strip with a long beach, water sports and the rivers; Galle is a walled Dutch town with four hundred years of history you can walk through. Many trips use Bentota for the beach and give Galle a day or a night." },
          { q: "What is there to do in Bentota besides the beach?", a: "The Madu Ganga boat safari through mangrove channels and a working cinnamon island, water sports on the Bentota river, and — the thing almost nobody does — Lunuganga and Brief Garden, the estates of Geoffrey and Bevis Bawa, twenty minutes away." },
          { q: "Are the turtle hatcheries near Bentota ethical?", a: "They vary a great deal. The better ones release hatchlings the same night they emerge; the worse ones keep them in tanks for visitor photographs, which sharply reduces survival odds. Ask what happens to the hatchlings before you pay." },
          { q: "Can I visit Kandy or Sigiriya from Bentota?", a: "Kandy is about four hours each way and Sigiriya five and a half, so both are very long days. If either matters to you, move rather than day-trip — the cultural triangle deserves a night of its own." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How far is Bentota from Colombo airport?", acceptedAnswer: { "@type": "Answer", text: "About 100 km and 1.5 to 2 hours on the E01 expressway, which makes it the shortest transfer from the airport to a proper beach in Sri Lanka." } },
            { "@type": "Question", name: "When can you swim at Bentota?", acceptedAnswer: { "@type": "Answer", text: "Roughly November to April. From May to September the southwest monsoon builds the surf and strengthens rip currents, and swimming becomes genuinely dangerous even on days that look calm. Most of the beach has no lifeguard." } },
            { "@type": "Question", name: "How many days should I spend in Bentota?", acceptedAnswer: { "@type": "Answer", text: "Two or three nights. It works best as the soft end of a trip — the first nights while jet lag wears off, or the last before a flight. A week is a lot of the same beach." } },
            { "@type": "Question", name: "Is Bentota or Galle better?", acceptedAnswer: { "@type": "Answer", text: "Different things. Bentota is a resort strip with a long beach, water sports and the rivers; Galle is a walled Dutch town with four hundred years of history you can walk through. Many trips use Bentota for the beach and give Galle a day or a night." } },
            { "@type": "Question", name: "What is there to do in Bentota besides the beach?", acceptedAnswer: { "@type": "Answer", text: "The Madu Ganga boat safari through mangrove channels and a working cinnamon island, water sports on the Bentota river, and — the thing almost nobody does — Lunuganga and Brief Garden, the estates of Geoffrey and Bevis Bawa, twenty minutes away." } },
            { "@type": "Question", name: "Are the turtle hatcheries near Bentota ethical?", acceptedAnswer: { "@type": "Answer", text: "They vary a great deal. The better ones release hatchlings the same night they emerge; the worse ones keep them in tanks for visitor photographs, which sharply reduces survival odds. Ask what happens to the hatchlings before you pay." } },
            { "@type": "Question", name: "Can I visit Kandy or Sigiriya from Bentota?", acceptedAnswer: { "@type": "Answer", text: "Kandy is about four hours each way and Sigiriya five and a half, so both are very long days. If either matters to you, move rather than day-trip — the cultural triangle deserves a night of its own." } },
          ],
        },
      };

    default:
      return null;
  }
}
