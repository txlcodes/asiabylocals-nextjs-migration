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

    case "best-water-sports-tour-bentota":
      return {
        title: "Which Is the Best Water Sport in Bentota?",
        description: "Compare Bentota's water sports — jet skiing, water skiing/wakeboarding, windsurfing, and tandem paramotoring — Sri Lanka's main water sports hub.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1333020/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Bentota is Sri Lanka's main water sports hub, with Bentota River meeting the ocean creating calm conditions ideal for a range of activities — a quick jet ski ride is the easiest starting point.",
            tourCard: { slug: "bentota-high-speed-jet-ski-ride-with-safety", title: "Bentota: High-Speed Jet Ski Ride with Safety Briefing", description: "A high-speed jet ski ride with safety briefing.", price: "From $98", duration: "30 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1333020/img0/1600.webp" },
          },
          {
            title: "For Balance and Skill: Water Skiing and Wakeboarding",
            content: "An instructor-led session for those wanting a more skill-based water sport over a simple jet ski ride.",
            tourCard: { slug: "bentota-water-skiing-and-wakeboarding-with", title: "Bentota: Water Skiing and Wakeboarding with Instructor", description: "A water skiing and wakeboarding session with an instructor.", price: "From $42", duration: "30 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1337593/img0/1600.webp" },
          },
          {
            title: "For a Longer Lesson: Private Windsurfing Course",
            content: "A longer, more involved windsurfing course with safety gear, for those wanting an actual skill rather than a one-off ride.",
            tourCard: { slug: "bentota-private-windsurfing-course-with-safety", title: "Bentota: Private Windsurfing Course with Safety Gear", description: "A private windsurfing course with safety gear.", price: "From $219", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1337460/img0/1600.webp" },
          },
          {
            title: "For a Different Kind of Thrill: Tandem Paramotoring",
            content: "This takes you airborne over the coastline in a tandem paramotor, a completely different water-adjacent thrill from anything on the water itself.",
            tourCard: { slug: "bentota-paramotoring-tandem-discovery-paragliding", title: "Bentota: Paramotoring Tandem Discovery-Paragliding Flight", description: "A tandem paramotoring flight over Bentota's coastline.", price: "From $364", duration: "15 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-867761/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Morning sessions tend to have calmer water, especially for beginners trying jet skiing or water skiing for the first time." },
        ],
        faqs: [
          { q: "Why is Bentota known for water sports?", a: "The Bentota River meets the ocean here, creating calm conditions ideal for a wide range of water sports." },
          { q: "What is the best water sport for a first-timer in Bentota?", a: "A jet ski ride is the easiest starting point; water skiing and windsurfing require more instruction." },
        ],
      };

    case "is-udawalawe-safari-worth-it-bentota":
      return {
        title: "Is the Udawalawe National Park Safari Worth It from Bentota?",
        description: "An honest look at the Udawalawe elephant safari day tour from Bentota, Sri Lanka's most reliable park for elephant sightings.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1254100/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Udawalawe National Park is widely considered Sri Lanka's most reliable park for elephant sightings, with large, visible herds year-round — a more elephant-focused alternative to Yala's broader wildlife safari.",
            tourCard: { slug: "bentota-to-udawalawe-national-park-elephant", title: "Bentota to Udawalawe National Park Elephant Safari Day Tour", description: "An elephant safari day tour to Udawalawe National Park from Bentota.", price: "From $338", duration: "10 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1254100/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "If elephants specifically are your priority over broader wildlife variety, choose Udawalawe over Yala." },
        ],
        faqs: [
          { q: "Is Udawalawe or Yala better for elephants?", a: "Udawalawe is considered more reliable specifically for elephant sightings; Yala offers broader wildlife variety including leopards." },
        ],
      };

    case "is-yala-safari-worth-it-bentota":
      return {
        title: "Is the Yala National Park Safari Worth It from Bentota?",
        description: "An honest look at the Yala National Park safari day tour from Bentota, Sri Lanka's most famous park for leopard sightings.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1254113/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Yala National Park has one of the highest leopard densities anywhere in the world, alongside elephants, sloth bears, and varied birdlife — this day tour from Bentota adds a sunset viewing stop.",
            tourCard: { slug: "bentota-to-yala-national-park-safari-day-tour", title: "Bentota To Yala National Park Safari Day Tour & Sunset View", description: "A safari day tour to Yala National Park with sunset viewing.", price: "From $415", duration: "10 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1254113/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This is a long day trip given Yala's distance from Bentota — consider an overnight stay near the park if you want more than one game drive." },
        ],
        faqs: [
          { q: "What is Yala known for?", a: "One of the highest leopard densities in the world, alongside elephants, sloth bears, and varied birdlife." },
        ],
      };

    case "is-cooking-class-worth-it-bentota":
      return {
        title: "Is a Cooking Class Worth It in Bentota?",
        description: "An honest look at Bentota's cooking class, teaching Sri Lankan dishes with a lunch or dinner option.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1143558/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This hands-on class teaches Sri Lankan cooking with the flexibility of a lunch or dinner session, a relaxed cultural activity to pair with Bentota's water sports and safari days.",
            tourCard: { slug: "bentota-cooking-class-with-lunch-or-dinner", title: "Bentota: Cooking Class with Lunch or Dinner", description: "A cooking class with a lunch or dinner option.", price: "From $56", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1143558/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Book the dinner option if you want it as your evening meal rather than an additional activity on top of dinner plans." },
        ],
        faqs: [
          { q: "Is a cooking class worth it in Bentota?", a: "Yes, as a relaxed cultural activity, and the lunch/dinner flexibility lets it double as a meal." },
        ],
      };

    case "best-madu-river-safari-tour-bentota":
      return {
        title: "Which Is the Best Madu River Safari Tour in Bentota?",
        description: "An honest look at the Madu River Safari and Turtle Hatchery tour, Bentota's signature mangrove boat safari.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1468042/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Madu River safari winds through a maze of mangrove channels, cinnamon islands, and a turtle hatchery stop — Bentota's signature nature activity, genuinely different from its beach and water sports side.",
            tourCard: { slug: "bentota-madu-river-safari-and-turtle-hatchery-tour", title: "Bentota: Madu River Safari and Turtle Hatchery Tour", description: "A Madu River safari with a turtle hatchery stop.", price: "From $169", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1468042/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "The turtle hatchery stop lets you see and sometimes help release baby turtles, depending on the season and hatchery's current activity." },
        ],
        faqs: [
          { q: "What is the Madu River safari?", a: "A boat safari through mangrove channels and cinnamon islands, with a turtle hatchery stop." },
        ],
      };

    case "is-bawa-garden-richmond-castle-tour-worth-it-bentota":
      return {
        title: "Is the Bawa Garden and Richmond Castle Heritage Tour Worth It in Bentota?",
        description: "An honest look at Bentota's Bawa Garden and Richmond Castle heritage tour, exploring architectural history distinct from the area's river safari and turtle hatchery activities.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1478338/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This tour covers colonial-era architectural heritage, including Richmond Castle's eclectic design, a genuinely different cultural subject from Bentota's usual river safaris and turtle hatchery activities — good for travelers interested in architecture and history.",
            tourCard: { slug: "bentota-bawa-garden-richmond-castle-heritage-tour", title: "Bentota: Bawa Garden and Richmond Castle Heritage Tour", description: "A heritage tour of Bawa Garden and Richmond Castle in Bentota.", price: "From $68", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1478338/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A good full-day option for travelers wanting architectural and cultural history instead of another river safari or beach day." },
        ],
        faqs: [
          { q: "Is the Bawa Garden and Richmond Castle tour worth it in Bentota?", a: "Yes, for travelers interested in architecture and colonial history, a different subject from the area's river safaris and beach activities." },
        ],
      };

    case "is-paramotoring-worth-it-bentota":
      return {
        title: "Is Paramotoring Worth It in Bentota?",
        description: "An honest look at paramotoring in Bentota, a genuine aerial adrenaline activity over the coastline.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-480250/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Seeing Bentota's coastline, rivers, and lagoons from a paramotor gives a genuinely unique aerial perspective that no boat tour or beach walk can match, and at just 15 minutes it's a quick, affordable adrenaline fix.",
            tourCard: { slug: "paramotoring-in-bentota", title: "Paramotoring in Bentota", description: "A paramotoring flight over Bentota's coastline.", price: "From $176", duration: "15 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-480250/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "No prior experience is needed — you fly tandem with a certified pilot, so this is accessible even for complete beginners.",
          },
        ],
        faqs: [
          { q: "Is paramotoring worth it in Bentota?", a: "Yes, it gives a genuinely unique aerial view of the coastline and rivers that no boat tour or beach walk can match." },
        ],
      };

    case "is-surfing-lesson-worth-it-bentota":
      return {
        title: "Is the Bentota Surfing Lesson Worth It?",
        description: "An honest look at the surfing lesson with instructor and equipment in Bentota.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1117626/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "A proper lesson with an instructor and equipment included gives genuine structured progress for first-time surfers, a good active alternative to the area's river safaris for travelers specifically wanting to be in the ocean.",
            tourCard: { slug: "bentota-surfing-lesson-with-instructor-and", title: "Bentota Surfing Lesson with Instructor & Equipment", description: "A surfing lesson with instructor and equipment included in Bentota.", price: "From $423", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1117626/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "No prior surfing experience is needed — the lesson starts from the basics with full equipment provided.",
          },
        ],
        faqs: [
          { q: "Is the Bentota surfing lesson worth it?", a: "Yes, a proper instructor and equipment give genuine structured progress for first-time surfers." },
        ],
      };

    case "is-ayurvedic-massage-worth-it-bentota":
      return {
        title: "Is the Traditional Ayurvedic Massage Worth It in Bentota?",
        description: "An honest look at the traditional Ayurvedic massage experience in Bentota, Sri Lanka's genuine wellness tradition.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1232214/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Ayurveda is a genuine, centuries-old Sri Lankan wellness tradition, not a modern spa invention, and a proper multi-hour session gives real therapeutic benefit beyond a quick tourist-resort rubdown.",
            tourCard: { slug: "bentota-traditional-2hr-ayurvedic-massage-1hr", title: "Bentota Traditional Ayurvedic Massage Experience", description: "A traditional Ayurvedic massage experience in Bentota.", price: "From $389", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1232214/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Book for later in the day after beach or safari activities, since this works well as a genuine recovery session.",
          },
        ],
        faqs: [
          { q: "Is the Ayurvedic massage worth it in Bentota?", a: "Yes, Ayurveda is a genuine centuries-old Sri Lankan tradition, and a proper multi-hour session gives real therapeutic benefit." },
        ],
      };

    case "is-hikkaduwa-snorkeling-worth-it-bentota":
      return {
        title: "Is the Hikkaduwa Snorkeling & Coral Reef Tour Worth It from Bentota?",
        description: "An honest look at the Hikkaduwa coral reef snorkeling day trip from Bentota.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1243166/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Hikkaduwa has one of Sri Lanka's most accessible coral reefs, a genuinely good snorkeling destination close to Bentota, giving travelers a reliable marine wildlife day without needing to travel as far as the south coast's bigger dive sites.",
            tourCard: { slug: "from-bentota-hikkaduwa-snorkeling-coral-reef", title: "From Bentota: Hikkaduwa Snorkeling & Coral Reef Tour", description: "A snorkeling day trip to Hikkaduwa's coral reef from Bentota.", price: "From $186", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1243166/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Reef-safe sunscreen is a good idea here, since Hikkaduwa's reef is a genuinely protected marine area.",
          },
        ],
        faqs: [
          { q: "Is the Hikkaduwa snorkeling tour worth it from Bentota?", a: "Yes, it's one of Sri Lanka's most accessible coral reefs, a reliable marine wildlife day close to Bentota." },
        ],
      };

    case "is-banana-boat-worth-it-bentota":
      return {
        title: "Is the Bentota Banana Boat Ride Worth It?",
        description: "An honest look at the banana boat ride in Bentota, a casual group water activity distinct from the area's jet ski and wakeboarding options.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1332733/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This is the lowest-effort, most sociable option among Bentota's water sports — no skill or instruction needed, just hang on while a boat tows an inflatable banana full of riders through the surf.",
            tourCard: { slug: "bentota-fun-banana-boat-ride-with-ocean-splashes", title: "Bentota: Fun Banana Boat Ride with Ocean Splashes", description: "A towed inflatable banana boat ride in Bentota.", price: "From $21", duration: "30 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1332733/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A good pick for groups or families with mixed ages and swimming ability, since it needs no prior skill, unlike water skiing or windsurfing.",
          },
        ],
        faqs: [
          { q: "Is the Bentota banana boat ride worth it?", a: "Yes for a fun, no-skill-needed group activity — the most accessible of Bentota's water sports for mixed-ability groups." },
        ],
      };

    case "is-fly-fish-worth-it-bentota":
      return {
        title: "Is the Bentota Fly Fish Water Sports Ride Worth It?",
        description: "An honest look at the fly fish ride in Bentota, a more airborne alternative to the banana boat.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1337168/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Fly fish is similar to a banana boat ride but designed to lift riders briefly out of the water as the boat speeds up, giving a bit more of a thrill than the steadier banana boat for a similar low-skill, group-friendly format.",
            tourCard: { slug: "bentota-fly-fish-water-sports-ride-with-safety", title: "Bentota: Fly Fish Water Sports Ride with Safety Equipment", description: "A towed fly fish water sports ride in Bentota.", price: "From $39", duration: "30 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1337168/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Expect a bumpier, more airborne ride than the banana boat — a better pick if your group wants more thrill than a gentle tow.",
          },
        ],
        faqs: [
          { q: "Is the fly fish ride worth it in Bentota?", a: "Yes if you want more of a thrill than the banana boat — it briefly lifts riders out of the water as the boat speeds up." },
        ],
      };

    case "is-lagoon-fishing-worth-it-bentota":
      return {
        title: "Is the Bentota Private Lagoon Fishing Tour with a Local Fisherman Worth It?",
        description: "An honest look at the private lagoon fishing tour with a local fisherman in Bentota.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1405828/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This pairs an actual fishing experience with the chance to learn from someone who fishes the lagoon for a living, a more authentic, slower-paced activity than the area's adrenaline water sports or wildlife-watching boat safaris.",
            tourCard: { slug: "bentota-private-lagoon-fishing-tour-with-a-local", title: "Bentota: Private Lagoon Fishing Tour with a Local Fisherman", description: "A private lagoon fishing experience with a local fisherman.", price: "From $127", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1405828/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A good pick if you want a genuine cultural exchange and a slower pace, rather than another fast-paced water sport or wildlife checklist tour.",
          },
        ],
        faqs: [
          { q: "Is the Bentota lagoon fishing tour worth it?", a: "Yes for a genuine, slower-paced cultural experience with a working local fisherman, distinct from the area's adrenaline water sports." },
        ],
      };

    case "is-speed-boat-ride-worth-it-bentota":
      return {
        title: "Is the Bentota Speed Boat Ride Worth It?",
        description: "An honest look at the standalone speed boat ride in Bentota.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1065592/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This is a straightforward, short joyride on open water rather than a towed activity like the banana boat or fly fish — a good pick if you just want the sensation of speed without a specific sport attached to it.",
            tourCard: { slug: "speed-boat-ride-in-bentota", title: "Speed Boat Ride in Bentota", description: "A standalone speed boat joyride in Bentota.", price: "From $138", duration: "15 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1065592/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "At 15 minutes, this is a short add-on rather than a main activity — pair it with another water sport or a river safari to fill out the day.",
          },
        ],
        faqs: [
          { q: "Is the Bentota speed boat ride worth it?", a: "Yes for a quick speed thrill on open water — just note it's a short 15-minute ride best paired with another activity." },
        ],
      };

    case "is-river-kayaking-worth-it-bentota":
      return {
        title: "Is the Guided River Kayaking Tour Worth It in Bentota?",
        description: "An honest look at the guided river kayaking tour with refreshments in Bentota.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1273139/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Paddling your own kayak gives a genuinely more active, self-powered way to explore Bentota's river than the motorized mangrove boat safaris that dominate most river tours here, with a quieter, slower pace that lets wildlife come closer.",
            tourCard: { slug: "bentota-guided-river-kayaking-tour-with", title: "Bentota: Guided River Kayaking Tour with Refreshments", description: "A guided river kayaking tour with refreshments in Bentota.", price: "From $33", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1273139/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A reasonable fitness level helps for the paddling, though the pace is generally relaxed rather than strenuous.",
          },
        ],
        faqs: [
          { q: "Is the river kayaking tour worth it in Bentota?", a: "Yes, for a more active, self-powered alternative to the motorized mangrove boat safaris, with a quieter pace for spotting wildlife." },
        ],
      };

    case "is-polgampola-waterfall-tour-worth-it-bentota":
      return {
        title: "Is the Polgampola Waterfall Tour by Tuk-Tuk Worth It from Bentota?",
        description: "An honest look at the Polgampola waterfall tour by tuk-tuk from the Bentota area.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1173962/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Polgampola Waterfall is a genuinely less-visited inland escape from Bentota's river-and-beach circuit, and reaching it by tuk-tuk gives a more local, open-air approach than a standard air-conditioned van tour.",
            tourCard: { slug: "polgampola-waterfall-tour-by-tuk-tuks-from", title: "Polgampola Waterfall Tour by Tuk Tuks From Bentota area", description: "A tuk-tuk tour to Polgampola Waterfall from the Bentota area.", price: "From $102", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1173962/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Bring a swimsuit — the waterfall is generally swimmable, and a cool dip is one of the trip's main draws.",
          },
        ],
        faqs: [
          { q: "Is the Polgampola waterfall tour worth it from Bentota?", a: "Yes, for a genuinely less-visited inland escape from the river-and-beach circuit, with a swimmable waterfall as the payoff." },
        ],
      };

    case "is-private-village-tour-worth-it-bentota":
      return {
        title: "Is the Private All-Inclusive Village Tour Worth It in Bentota?",
        description: "An honest look at the private all-inclusive village tour in Bentota.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-819222/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This gives a genuine look at everyday rural Sri Lankan village life, distinct from Bentota's river-safari-and-beach tourist circuit, with the all-inclusive private format removing the hassle of arranging transport and stops separately.",
            tourCard: { slug: "bentota-private-village-tour-all-inclusive", title: "Bentota Private Village Tour All-Inclusive", description: "A private, all-inclusive village tour in Bentota.", price: "From $77", duration: "6 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-819222/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A good pick for travelers who've already done the river safari and want genuine everyday village life instead.",
          },
        ],
        faqs: [
          { q: "Is the private village tour worth it in Bentota?", a: "Yes, for a genuine look at everyday rural life, distinct from the river-safari-and-beach tourist circuit." },
        ],
      };

    case "is-beruwala-lighthouse-snorkeling-cruise-worth-it-bentota":
      return {
        title: "Is the Snorkeling Boat Cruise to Beruwala Lighthouse Worth It from Bentota?",
        description: "An honest look at the snorkeling boat cruise to Beruwala Lighthouse from Bentota.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1338416/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Beruwala Lighthouse gives a genuine landmark destination for the boat trip, pairing open-water snorkeling with a scenic stop, distinct from the river-based mangrove and wildlife boat safaris that dominate most Bentota water tours.",
            tourCard: { slug: "bentota-snorkeling-boat-cruise-to-beruwala", title: "Bentota: Snorkeling Boat Cruise to Beruwala Lighthouse", description: "A snorkeling boat cruise to Beruwala Lighthouse from Bentota.", price: "From $192", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1338416/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Check sea conditions before booking, since open-water snorkeling here depends more on weather than the calmer river-based tours.",
          },
        ],
        faqs: [
          { q: "Is the Beruwala Lighthouse snorkeling cruise worth it from Bentota?", a: "Yes, for a genuine open-water landmark destination, distinct from the river-based mangrove and wildlife boat tours." },
        ],
      };

    default:
      return null;
  }
}
