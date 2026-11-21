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

    case "best-turtle-snorkeling-tour-mirissa":
      return {
        title: "Which Is the Best Turtle Snorkeling Tour in Mirissa?",
        description: "Compare real sea turtle snorkeling tours in Mirissa, a completely different activity from the morning whale-watching boat trip.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1472423/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Mirissa's shallow reefs are home to resident sea turtles, making this a reliable, calmer snorkeling activity you can do any time of day, unlike the early-morning, open-water whale trip.",
            tourCard: { slug: "mirissa-guided-snorkeling-tour-with-sea-turtle", title: "Mirissa: Guided Snorkeling Tour with Sea Turtle & Coral Reef", description: "A guided snorkeling tour with sea turtles and coral reef.", price: "From $42", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1472423/img0/1600.webp" },
          },
          {
            title: "Shorter/Cheaper Option: Turtle Snorkeling Tour with Gear",
            content: "A shorter, slightly cheaper version covering the same turtle snorkeling basics with equipment included.",
            tourCard: { slug: "mirissa-turtle-snorkeling-tour-with-gear", title: "Mirissa: Turtle Snorkeling Tour with Gear", description: "A turtle snorkeling tour with gear included.", price: "From $34", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1343070/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Turtle snorkeling is calm, shallow-water activity suitable for beginners and non-strong swimmers, unlike the rougher open-water whale trip." },
        ],
        faqs: [
          { q: "Is turtle snorkeling different from whale watching in Mirissa?", a: "Yes, it's a calmer, shallow-water activity you can do any time of day, unlike the early-morning open-water whale trip." },
        ],
      };

    case "is-scuba-diving-worth-it-mirissa":
      return {
        title: "Is Scuba Diving Worth It in Mirissa?",
        description: "Compare beginner scuba diving options in Mirissa — a standard beginner dive versus a premium version for both beginners and certified divers.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1176203/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Mirissa's reefs offer genuine scuba diving for beginners and certified divers alike, a more immersive alternative to snorkeling for seeing the area's marine life up close.",
            tourCard: { slug: "mirissa-scuba-diving-experience-for-beginner", title: "Mirissa: Scuba Diving Experience for Beginner & Professional", description: "A scuba diving experience for beginners and professionals.", price: "From $186", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1176203/img0/1600.webp" },
          },
          {
            title: "Alternative: Premium Scuba Dive for Beginners & Certified Divers",
            content: "A similarly structured option at a different price point, worth comparing on exact inclusions and operator.",
            tourCard: { slug: "mirissa-premium-scuba-dive-for-beginners", title: "Mirissa: Premium Scuba Dive for Beginners & Certified Divers", description: "A premium scuba dive experience for beginners and certified divers.", price: "From $119", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1450661/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "No certification is required for the beginner options — an instructor leads the dive throughout." },
        ],
        faqs: [
          { q: "Do I need certification to scuba dive in Mirissa?", a: "No, beginner options with an instructor are available alongside options for certified divers." },
        ],
      };

    case "is-mangrove-kayaking-worth-it-mirissa":
      return {
        title: "Is Mangrove or Lagoon Kayaking Worth It in Mirissa?",
        description: "Compare Mirissa's mangrove kayaking tour with the nearby lagoon kayaking option, both a quiet contrast to the open-water whale trip.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1422063/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Paddling through Mirissa's mangroves offers a calm, wildlife-focused activity at a completely different pace from the open-water whale boat — a good half-day option with transfer included.",
            tourCard: { slug: "mirissa-guided-mangrove-kayaking-tour-with", title: "Mirissa: Guided Mangrove Kayaking Tour with Transfer", description: "A guided mangrove kayaking tour with transfer.", price: "From $43", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1422063/img0/1600.webp" },
          },
          {
            title: "Alternative: Lagoon Kayaking Tour",
            content: "A similarly paced lagoon kayaking tour with an experienced local guide, worth comparing on exact route.",
            tourCard: { slug: "mirissa-lagoon-kayaking-tour-with-an-experienced", title: "Mirissa Lagoon Kayaking Tour with an Experienced Local Guide", description: "A lagoon kayaking tour with an experienced local guide.", price: "From $34", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1450709/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Morning paddles tend to have calmer water and more active birdlife than later in the day." },
        ],
        faqs: [
          { q: "Is mangrove kayaking worth it in Mirissa?", a: "Yes, as a calm, wildlife-focused change of pace from the open-water whale trip." },
        ],
      };

    case "is-sinharaja-rainforest-trek-worth-it-mirissa":
      return {
        title: "Is the Sinharaja Rainforest Trek Worth It from Mirissa?",
        description: "An honest look at the Sinharaja Forest Reserve guided trek, Sri Lanka's last significant area of primary rainforest.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1305989/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Sinharaja is a UNESCO World Heritage Site and Sri Lanka's last significant area of primary rainforest, home to endemic birds and wildlife found nowhere else — a genuinely different landscape from Mirissa's coastline.",
            tourCard: { slug: "mirissa-sinharaja-forest-reserve-guided-trek-tea", title: "Mirissa: Sinharaja Forest Reserve Guided Trek & Tea Tour", description: "A guided trek through Sinharaja Forest Reserve with a tea tour.", price: "From $161", duration: "12 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1305989/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This is a full-day commitment at 12 hours — plan for an early start given the drive inland from Mirissa." },
        ],
        faqs: [
          { q: "What is special about Sinharaja?", a: "It's Sri Lanka's last significant primary rainforest and a UNESCO World Heritage Site, home to endemic species." },
        ],
      };

    case "is-sri-lankan-cooking-class-worth-it-mirissa":
      return {
        title: "Is a Sri Lankan Cooking Class Worth It in Mirissa?",
        description: "An honest look at Mirissa's hands-on Sri Lankan cooking class with a local chef.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1434195/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This hands-on class teaches Sri Lankan dishes directly from a local chef, a relaxed cultural activity to pair with a beach or boat day.",
            tourCard: { slug: "mirissa-hands-on-sri-lankan-cooking-class-with", title: "Mirissa: Hands-On Sri Lankan Cooking Class with Local Chef", description: "A hands-on Sri Lankan cooking class with a local chef.", price: "From $77", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1434195/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A good evening activity after a morning whale-watching trip, since it doesn't require an early start." },
        ],
        faqs: [
          { q: "Is a Sri Lankan cooking class worth it in Mirissa?", a: "Yes, as a relaxed cultural activity, especially as an evening pairing with a morning whale trip." },
        ],
      };

    case "is-deep-sea-fishing-worth-it-mirissa":
      return {
        title: "Is Deep Sea Fishing Worth It in Mirissa?",
        description: "An honest look at Mirissa's private deep sea fishing boat tour with a local guide.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1174794/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Mirissa's harbour supports a genuine deep sea fishing tradition — this private tour with a local guide is worth it for travelers who want an active, hands-on activity rather than just watching from a whale-watching boat.",
            tourCard: { slug: "mirissa-private-deep-sea-fishing-boat-tour-with", title: "Mirissa: Private Deep Sea Fishing Boat Tour with Local Guide", description: "A private deep sea fishing boat tour with a local guide.", price: "From $246", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1174794/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Ask your operator what happens to any catch — some include a beachside cookout, others simply release everything." },
        ],
        faqs: [
          { q: "Is deep sea fishing worth it in Mirissa?", a: "Yes, for an active, hands-on alternative to the standard whale-watching boat trip." },
        ],
      };

    case "is-snake-conservation-farm-tour-worth-it-mirissa":
      return {
        title: "Is the Snake Conservation Farm Tour Worth It in Mirissa?",
        description: "An honest look at the snake conservation farm tour from Mirissa, a genuinely unique wildlife education stop distinct from the area's whale watching and beach activities.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1380098/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This tour visits a farm focused on snake conservation and education, a genuinely unique activity for a region otherwise dominated by whale watching and beach time — worth it specifically for travelers curious about Sri Lanka's reptile life.",
            tourCard: { slug: "from-mirissa-snake-conservation-farm-tour-with", title: "From Mirissa: Snake Conservation Farm Tour", description: "A tour of a snake conservation farm near Mirissa.", price: "From $34", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1380098/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This is a short, inexpensive add-on, good paired with another half-day activity rather than a standalone outing." },
        ],
        faqs: [
          { q: "Is the snake conservation farm tour worth it in Mirissa?", a: "Yes, for a genuinely unique wildlife education activity distinct from the area's usual whale watching and beach time." },
        ],
      };

    case "is-crocodile-watching-worth-it-mirissa":
      return {
        title: "Is the Nilwala River Crocodile Watching Tour Worth It from Mirissa?",
        description: "An honest look at the private Nilwala River crocodile watching boat tour from Mirissa, a freshwater wildlife activity distinct from the area's ocean whale watching.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1327673/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Spotting crocodiles along the Nilwala River is a genuinely different wildlife experience from Mirissa's ocean-based whale watching, a calmer freshwater activity for travelers wanting variety beyond the beach and boat scene.",
            tourCard: { slug: "from-mirissa-nilwala-river-private-crocodile", title: "From Mirissa: Nilwala River Private Crocodile Watching", description: "A private crocodile watching boat tour on the Nilwala River.", price: "From $85", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1327673/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Early morning or late afternoon gives the best chance of sightings, when crocodiles are most active near the riverbanks." },
        ],
        faqs: [
          { q: "Is the Nilwala River crocodile watching tour worth it from Mirissa?", a: "Yes, for a calmer freshwater wildlife experience genuinely different from the area's ocean-based whale watching." },
        ],
      };

    case "is-batik-workshop-worth-it-mirissa":
      return {
        title: "Is the Batik Factory Tour and Workshop Worth It in Mirissa?",
        description: "An honest look at Mirissa's batik factory tour and hands-on workshop, a traditional textile craft distinct from the area's whale watching and beach activities.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1379901/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Batik is a traditional wax-resist dyeing technique, and this tour shows the full process at a working factory before letting you make your own piece — a genuinely hands-on craft activity distinct from Mirissa's usual whale-watching and beach days.",
            tourCard: { slug: "mirissa-batik-factory-tour-and-workshop-with-your", title: "Mirissa: Batik Factory Tour and Workshop", description: "A batik factory tour and hands-on workshop in Mirissa.", price: "From $136", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1379901/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "You take your finished batik piece home as a genuine handmade souvenir, a nice change from the usual beach-town trinkets." },
        ],
        faqs: [
          { q: "Is the batik workshop worth it in Mirissa?", a: "Yes, for a genuinely hands-on traditional craft activity, a nice change of pace from the area's whale-watching and beach days." },
        ],
      };

    default:
      return null;
  }
}
