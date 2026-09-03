// Mirissa authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getMirissaInfoContent() -> getCityInfoContent().
//
// Every tourCard slug is taken from the live tour list for this city.
import type { CityInfoData } from './cityInfoContent';

export function getMirissaInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    case "mirissa-guide":
      return {
        title: "Mirissa Guide: The Whales, the Beach and the Months That Matter",
        seoTitle: "Mirissa Guide, Sri Lanka",
        description: "Mirissa is a whale harbour with a beach attached. When the boats run, what else is here, and why the season decides everything.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369139/asiabylocals/tours/mirissa-whale-dolphin-watching-cruise-with-geeth-s-crew/img0.jpg",
        fastFacts: [
          { icon: "calendar-days", label: "Whale season", value: "Roughly November to April" },
          { icon: "clock", label: "Boats leave", value: "6.00-6.30am, back by about 11am" },
          { icon: "calendar-days", label: "Sea calm and swimmable", value: "November to April" },
          { icon: "calendar-days", label: "Rough and dangerous", value: "May to September" },
          { icon: "map", label: "From Galle", value: "About 40 minutes" },
          { icon: "clock", label: "How long to stay", value: "Two nights: one for the boat, one for nothing" },
        ],
        sections: [
          {
            title: "Mirissa Guide: The Whales, the Beach and the Months That Matter",
            icon: "waves",
            content: "Mirissa is a small crescent bay on the south coast, forty minutes east of Galle, and it exists in the minds of most visitors for one reason: the blue whales.\n\nThe continental shelf comes unusually close to shore off Sri Lanka's southern tip, which puts deep water within a few kilometres of this harbour. Blue whales — the largest animal that has ever lived — pass along that edge, and a resident population appears to stay in the area. In most of the world, seeing one means a long offshore trip and poor odds. Here the boats are often in position within an hour of leaving.\n\nThat is the whole argument for Mirissa, and it is a good one. It is also entirely seasonal: the boats run roughly November to April and largely stop when the southwest monsoon makes the sea rough.\n\nThe town itself is a beach, a headland with a coconut-tree hill that gets photographed a great deal, a strip of restaurants, and a working harbour. It is smaller and prettier than Weligama next door and considerably busier than it was ten years ago.\n\nTwo nights is right: one for the boat, and one for doing nothing, which after a Sri Lankan loop is the point of the south coast.",
            tourCard: {
              slug: "mirissa-whale-dolphin-watching-boat-trip-breakfast",
              title: "Mirissa Whale and Dolphin Watching Boat Trip with Breakfast",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 28.85",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369139/asiabylocals/tours/mirissa-whale-dolphin-watching-cruise-with-geeth-s-crew/img0.jpg",
            },
          },
          {
            title: "The whale trip, honestly",
            icon: "clock",
            content: "Boats leave the harbour between six and six-thirty in the morning and are back between ten and eleven. Hotel pickup is earlier than that, which effectively means staying in Mirissa or Weligama the night before.\n\nThe first hour is the run out to the shelf edge. Then the boat slows and everyone scans, which can go on for a while — a whale trip is mostly open water, and the sighting when it comes is a blow on the horizon before it is anything else. A blue whale surfaces to breathe several times over a few minutes and then dives, and the fluke coming up is the shot people want.\n\nDolphins are more reliable and more immediate. Spinner pods here run into the hundreds and will ride the bow.\n\nSighting rates in season are high but nothing is guaranteed, and an operator promising a whale is promising something they cannot control. The honest ones offer a free repeat trip instead.\n\nThe swell off this coast is real and the boats are not large. Seasickness is common enough that operators carry bags as standard — take a tablet an hour before boarding rather than when you start feeling it, sit outside and low, and watch the horizon.",
            tourCard: {
              slug: "mirissa-whale-dolphin-watching-boat-trip-breakfast",
              title: "Mirissa Whale and Dolphin Watching Boat Trip with Breakfast",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 28.85",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369139/asiabylocals/tours/mirissa-whale-dolphin-watching-cruise-with-geeth-s-crew/img0.jpg",
            },
          },
          {
            title: "Choosing a boat, and the crowding problem",
            icon: "info",
            content: "Mirissa's whale watching grew fast and the regulation has not fully kept up. On a busy morning in season, twenty or more boats can converge on the same animal.\n\nSri Lankan guidelines require boats to stay at least 100 metres from a whale, approach from the side rather than head-on, and not cut across an animal's path. Plenty of operators observe this. Some do not, and there have been documented incidents of boats crowding and striking whales off this coast.\n\nWhat to look for: a smaller boat with a limited passenger count; a stated commitment to the distance rules; a naturalist on board rather than only a skipper; and an operator who offers a free second trip rather than a guarantee.\n\nWhat to do on board: if your boat is racing others or pushing close, say so. Paying passengers asking a skipper to back off works more often than people expect.\n\nAvoid the cheapest, latest-departing boats. They are usually the most crowded and the most aggressive, because they are behind everyone else.",
            tourCard: {
              slug: "mirissa-whale-dolphin-watching-boat-trip-breakfast",
              title: "Mirissa Whale and Dolphin Watching Boat Trip with Breakfast",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 28.85",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369139/asiabylocals/tours/mirissa-whale-dolphin-watching-cruise-with-geeth-s-crew/img0.jpg",
            },
          },
          {
            title: "The rest of Mirissa",
            icon: "map",
            content: "Coconut Tree Hill is the headland at the eastern end of the beach, and it is the most photographed spot on the south coast. It is a working coconut grove on private land, it gets crowded from mid-morning, and there have been repeated problems with visitors damaging the trees and trespassing. Go early, stay on the path, and do not climb anything.\n\nParrot Rock is a small outcrop in the bay you can walk to at low tide and climb in a few minutes for a view back over the beach.\n\nSurfing is at Weligama next door rather than here — a wide shallow bay with a sand bottom and a dozen surf schools, and the best place in Sri Lanka to learn.\n\nThe harbour itself is worth ten minutes in the early morning when the fishing boats come in.\n\nSnorkelling and diving run out of Mirissa in season, though the reef here is not the draw that Hikkaduwa's is.\n\nAnd the beach, which is a proper crescent of sand and is genuinely good from November to April and genuinely dangerous outside it.",
            tourCard: {
              slug: "mirissa-or-weligama-to-ella-transfer-with-an-optional-udawalawe-safari",
              title: "Mirissa or Weligama to Ella Transfer with an Optional Udawalawe Safari",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 97.5",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788463066/asiabylocals/tours/mirissa-or-weligama-to-ella-drop-tour/img0.jpg",
            },
          },
          {
            title: "When to come, and when not to",
            icon: "calendar-days",
            content: "November to April: whale boats running, sea calm enough to swim, and the town at its busiest and most expensive. January to March is the reliable core of it.\n\nMay to September: the southwest monsoon. Most whale operators stop, the sea builds, rip currents strengthen, and swimming becomes genuinely dangerous even on days that look fine. Much of the town quietens down.\n\nIf your dates fall in the monsoon and whales matter to you, the answer is Trincomalee on the east coast, which runs blue whale trips from roughly May to September in the exact mirror of Mirissa's season and is far less crowded.\n\nIf your dates fall in the monsoon and the beach matters, the answer is the same coast — Trincomalee, Pasikuda or Arugam Bay are dry and calm when the south is not.\n\nSri Lanka has two monsoons hitting opposite coasts at opposite times, which means there is no month that is bad for the whole island. There are only months that are bad for the half you happened to book.",
            tourCard: {
              slug: "mirissa-or-weligama-to-ella-transfer-with-an-optional-udawalawe-safari",
              title: "Mirissa or Weligama to Ella Transfer with an Optional Udawalawe Safari",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 97.5",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788463066/asiabylocals/tours/mirissa-or-weligama-to-ella-drop-tour/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "When is whale watching season in Mirissa?", a: "Roughly November to April, with January to March the reliable core. From May to September the southwest monsoon makes the sea rough and most operators stop running. Trincomalee on the east coast takes over in those months." },
          { q: "What time do the boats leave Mirissa?", a: "Between 6 and 6.30am, back between 10 and 11. Hotel pickup is earlier, so staying in Mirissa or Weligama the night before is effectively required." },
          { q: "Are whale sightings guaranteed?", a: "No, and any operator promising one is promising something they cannot control. Sighting rates in season are high; the honest operators offer a free repeat trip instead of a guarantee." },
          { q: "How do I pick a responsible whale watching boat?", a: "A smaller boat with limited passengers, a stated commitment to the 100-metre distance rule, a naturalist on board rather than only a skipper, and a free second trip rather than a guarantee. Avoid the cheapest, latest-departing boats — they are the most crowded and the most aggressive." },
          { q: "How many days do you need in Mirissa?", a: "Two nights: one for the whale boat, which needs an early night before it, and one for doing nothing. After the standard Sri Lankan loop, that second day is the point of the south coast." },
          { q: "Is Coconut Tree Hill worth visiting?", a: "Go early. It is the most photographed spot on the south coast, it is a working coconut grove on private land, and it gets crowded from mid-morning. Stay on the path and do not climb the trees — there have been repeated problems with visitors damaging them." },
          { q: "Where should I go if I visit in the southwest monsoon?", a: "The east coast. Trincomalee runs blue whale trips from roughly May to September in the exact mirror of Mirissa's season, and Trincomalee, Pasikuda and Arugam Bay are dry and calm when the south coast is rough." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "When is whale watching season in Mirissa?", acceptedAnswer: { "@type": "Answer", text: "Roughly November to April, with January to March the reliable core. From May to September the southwest monsoon makes the sea rough and most operators stop running. Trincomalee on the east coast takes over in those months." } },
            { "@type": "Question", name: "What time do the boats leave Mirissa?", acceptedAnswer: { "@type": "Answer", text: "Between 6 and 6.30am, back between 10 and 11. Hotel pickup is earlier, so staying in Mirissa or Weligama the night before is effectively required." } },
            { "@type": "Question", name: "Are whale sightings guaranteed?", acceptedAnswer: { "@type": "Answer", text: "No, and any operator promising one is promising something they cannot control. Sighting rates in season are high; the honest operators offer a free repeat trip instead of a guarantee." } },
            { "@type": "Question", name: "How do I pick a responsible whale watching boat?", acceptedAnswer: { "@type": "Answer", text: "A smaller boat with limited passengers, a stated commitment to the 100-metre distance rule, a naturalist on board rather than only a skipper, and a free second trip rather than a guarantee. Avoid the cheapest, latest-departing boats — they are the most crowded and the most aggressive." } },
            { "@type": "Question", name: "How many days do you need in Mirissa?", acceptedAnswer: { "@type": "Answer", text: "Two nights: one for the whale boat, which needs an early night before it, and one for doing nothing. After the standard Sri Lankan loop, that second day is the point of the south coast." } },
            { "@type": "Question", name: "Is Coconut Tree Hill worth visiting?", acceptedAnswer: { "@type": "Answer", text: "Go early. It is the most photographed spot on the south coast, it is a working coconut grove on private land, and it gets crowded from mid-morning. Stay on the path and do not climb the trees — there have been repeated problems with visitors damaging them." } },
            { "@type": "Question", name: "Where should I go if I visit in the southwest monsoon?", acceptedAnswer: { "@type": "Answer", text: "The east coast. Trincomalee runs blue whale trips from roughly May to September in the exact mirror of Mirissa's season, and Trincomalee, Pasikuda and Arugam Bay are dry and calm when the south coast is rough." } },
          ],
        },
      };

    default:
      return null;
  }
}
