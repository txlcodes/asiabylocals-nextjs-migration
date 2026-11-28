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

    case "is-whale-watching-tour-worth-it-mirissa":
      return {
        title: "Is the Mirissa Whale Watching Boat Tour Worth It?",
        description: "An honest look at the whale watching boat tour with breakfast in Mirissa, one of the world's best spots for blue whale sightings.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1422108/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Mirissa is genuinely one of the world's best places to see blue whales, the largest animal on Earth, and this morning tour with breakfast included combines a real chance at a life-changing wildlife sighting with practical comfort for what can be a long few hours at sea.",
            tourCard: { slug: "mirissa-whale-watching-boat-tour-with-breakfast", title: "Mirissa Whale Watching Boat Tour with Breakfast", description: "A whale watching boat tour in Mirissa with breakfast included.", price: "From $129", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1422108/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Take seasickness precautions in advance if you're prone to it — the open ocean swells can be significant even on calm days.",
          },
        ],
        faqs: [
          { q: "Is the Mirissa whale watching tour worth it?", a: "Yes, Mirissa is genuinely one of the world's best spots for blue whale sightings, and this tour gives a real chance at seeing them." },
        ],
      };

    case "is-sunset-catamaran-worth-it-mirissa":
      return {
        title: "Is the Mirissa Sunset Catamaran Sailing Tour Worth It?",
        description: "An honest look at the sunset catamaran sailing boat tour in Mirissa, a relaxed premium evening on the water.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-819588/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Sailing on a genuine catamaran at sunset is a far more relaxed, premium experience than a standard motorboat tour, and the price reflects a smoother ride and more spacious deck for watching the sun go down over the Indian Ocean.",
            tourCard: { slug: "mirissa-sunset-catamaran-sailing-boat-tour-with", title: "Mirissa Sunset Catamaran Sailing Boat Tour", description: "A sunset catamaran sailing boat tour in Mirissa.", price: "From $761", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-819588/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This is priced as a genuine premium experience, so it suits special occasions or travelers wanting a more comfortable sailing experience over a basic boat tour.",
          },
        ],
        faqs: [
          { q: "Is the Mirissa sunset catamaran tour worth it?", a: "Yes, for a far more relaxed, premium experience than a standard motorboat, the catamaran's smoother ride and space justify the cost for special occasions." },
        ],
      };

    case "is-village-cooking-experience-worth-it-mirissa":
      return {
        title: "Is the Traditional Sri Lankan Village Cooking Experience Worth It in Mirissa?",
        description: "An honest look at the traditional village cooking experience in Mirissa, distinct from a standard chef-led cooking class.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1475966/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Cooking in a genuine village household setting, rather than a dedicated cooking-school kitchen, gives this experience a more authentic, home-cooked feel, a good complement to the area's whale-watching and beach-focused days.",
            tourCard: { slug: "mirissa-traditional-sri-lankan-village-cooking", title: "Mirissa Traditional Sri Lankan Village Cooking Experience", description: "A traditional Sri Lankan cooking experience in a village household setting in Mirissa.", price: "From $77", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1475966/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Come hungry — you'll be eating what you cook, and village-style meals are traditionally generous.",
          },
        ],
        faqs: [
          { q: "Is the village cooking experience worth it in Mirissa?", a: "Yes, cooking in a genuine village household setting gives a more authentic, home-cooked feel than a standard cooking-school class." },
        ],
      };

    case "is-kayak-floating-dinner-worth-it-mirissa":
      return {
        title: "Is the Mirissa Kayak Tour with Floating Dinner Worth It?",
        description: "An honest look at the Mirissa kayak tour with a day or night option and floating dinner experience.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1458066/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Pairing a kayak paddle with a genuinely novel floating dinner setup gives this a more memorable, Instagram-worthy evening than a standard restaurant meal, and choosing between day or night options adds real flexibility.",
            tourCard: { slug: "mirissa-kayak-tours-day-night-floating-dinner", title: "Mirissa Kayak Tours: Day/Night with Floating Dinner", description: "A kayak tour in Mirissa with day or night options and a floating dinner experience.", price: "From $85", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1458066/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Book the night option specifically if the floating dinner setup and lighting are the main draw for you.",
          },
        ],
        faqs: [
          { q: "Is the kayak floating dinner tour worth it in Mirissa?", a: "Yes, it's a genuinely novel, memorable evening setup, more distinctive than a standard restaurant meal." },
        ],
      };

    case "is-nordic-sauna-worth-it-mirissa":
      return {
        title: "Is the Mirissa Nordic Sauna & Ice Bath Experience Worth It?",
        description: "An honest look at the Nordic sauna and ice bath experience in Mirissa, a wellness activity distinct from the area's beach and marine-life tours.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1252500/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "A genuinely unexpected offering for a tropical beach town — a proper Nordic-style sauna paired with a cold ice bath, the contrast therapy trend brought to Sri Lanka's south coast.",
            tourCard: { slug: "mirissa-nordic-sauna-ice-bath-experience-with", title: "Mirissa: Nordic Sauna & Ice Bath Experience with TukTuk Ride", description: "A Nordic sauna and ice bath contrast therapy session in Mirissa.", price: "From $60", duration: "1.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1252500/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "If you have a heart condition or are pregnant, check with the operator first — cold-water immersion isn't suitable for everyone.",
          },
        ],
        faqs: [
          { q: "Is the Mirissa Nordic sauna experience worth it?", a: "Yes for travelers interested in contrast therapy wellness — it's a genuinely unusual offering for a tropical beach destination." },
          { q: "Is the ice bath safe for everyone?", a: "Check with the operator if you have a heart condition or are pregnant — cold-water immersion isn't suitable for everyone." },
        ],
      };

    case "is-night-snorkeling-worth-it-mirissa":
      return {
        title: "Is Night Snorkeling Worth It in Mirissa?",
        description: "An honest look at the night snorkeling tour in Mirissa, focused on nocturnal marine life.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1232445/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Different marine species are active at night, so this gives a genuinely different view of the reef than the daytime turtle-snorkeling tours that dominate Mirissa's water activities — with dive lights revealing creatures rarely seen in daylight.",
            tourCard: { slug: "night-snorkeling-in-mirissa-discover-nocturnal", title: "Night Snorkeling in Mirissa: Discover Nocturnal Marine Life", description: "A guided night snorkeling tour focused on nocturnal marine life.", price: "From $111", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1232445/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Comfortable open-water swimming ability matters more here than for a calm daytime turtle swim, since visibility is lower and you're relying on a dive light.",
          },
        ],
        faqs: [
          { q: "Is night snorkeling worth it in Mirissa?", a: "Yes for a genuinely different view of the reef — nocturnal species that daytime turtle-snorkeling tours won't show you." },
          { q: "Do I need diving experience for night snorkeling?", a: "No, but comfortable open-water swimming matters more than for a calm daytime swim, given lower visibility." },
        ],
      };

    case "best-water-sports-mirissa":
      return {
        title: "Which Water Sport Is Best to Try in Mirissa?",
        description: "Mirissa's beach runs a full lineup of short motorized water sports — here's how the real options compare.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-945828/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "All of these are short (around 15-minute) motorized rides from the same stretch of beach — the real choice is which thrill you're after: speed and control (jet ski, water skiing), balance (wakeboarding), or a goofy group ride (donut tube).",
            tourCard: { slug: "mirissa-jet-ski-experience", title: "Mirissa: Jet Ski Experience", description: "A jet ski ride in Mirissa.", price: "From $145", duration: "15 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-945828/img0/1600.webp" },
          },
          {
            title: "Most Independent: Jet Ski",
            content: "At $145, this is the priciest of the group, but it's the one where you're actually driving rather than being towed.",
            tourCard: { slug: "mirissa-jet-ski-experience", title: "Mirissa: Jet Ski Experience", description: "A self-driven jet ski ride.", price: "From $145", duration: "15 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-945828/img0/1600.webp" },
          },
          {
            title: "Best for Balance & Skill: Wakeboarding or Water Skiing",
            content: "Both are towed behind a boat and roughly the same price — wakeboarding uses a single board, water skiing uses two skis. Pick based on which skill you'd rather attempt.",
            tourCard: { slug: "wake-boarding-in-mirissa", title: "Wake Boarding in Mirissa", description: "A towed wakeboarding ride.", price: "From $103", duration: "15 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-917739/img0/1600.webp" },
          },
          {
            title: "Cheapest & Most Fun in a Group: Donut Tube Ride",
            content: "At $29, this is by far the cheapest option and the easiest for non-athletic travelers or small groups riding together.",
            tourCard: { slug: "donut-tube-ride-in-mirissa", title: "Donut Tube Ride in Mirissa", description: "A towed inflatable donut tube ride.", price: "From $29", duration: "15 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-916918/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "All of these run in short 15-minute slots — book two or three back to back if you want a fuller water-sports afternoon rather than just one ride.",
          },
        ],
        faqs: [
          { q: "What's the best water sport to try in Mirissa?", a: "Jet ski if you want to drive yourself, wakeboarding or water skiing for a skill challenge, or the donut tube for the cheapest and most group-friendly option." },
          { q: "How long do Mirissa's water sport rides last?", a: "Typically 15 minutes each — book multiple rides back to back for a longer session." },
        ],
      };

    case "is-ayurvedic-retreat-worth-it-mirissa":
      return {
        title: "Is the Mirissa 2-Day Ayurvedic Wellness Retreat Worth It?",
        description: "An honest look at the 2-day Ayurvedic wellness retreat with meals in Mirissa.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1432937/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This is a genuine multi-day wellness commitment rather than a single spa session — Sri Lanka has a long Ayurvedic medicine tradition, and a 2-day retreat with meals included gives a proper, immersive taste of it rather than a quick treatment.",
            tourCard: { slug: "mirissa-2-day-ayurvedic-wellness-retreat-with", title: "Mirissa: 2-Day Ayurvedic Wellness Retreat with Meals", description: "A 2-day Ayurvedic wellness retreat with meals included.", price: "From $231", duration: "2 days", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1432937/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This is a real time commitment — block out 2 full days in your itinerary rather than treating it as a quick add-on activity.",
          },
        ],
        faqs: [
          { q: "Is the Mirissa Ayurvedic retreat worth it?", a: "Yes for travelers wanting a genuine, immersive taste of Ayurvedic tradition rather than a quick spa treatment — just budget 2 full days for it." },
        ],
      };

    case "is-cinnamon-garden-tour-worth-it-mirissa":
      return {
        title: "Is the Cinnamon Garden Tour with Peeling Class Worth It in Mirissa?",
        description: "An honest look at the cinnamon garden tour with a hands-on peeling class in Mirissa.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1240829/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Sri Lanka is genuinely one of the world's top cinnamon producers, and learning to peel the bark by hand gives real insight into a globally significant local industry, a distinctly different activity from the beach and boat tours that dominate Mirissa.",
            tourCard: { slug: "mirissa-cinnamon-garden-tour-with-peeling-class", title: "Mirissa: Cinnamon Garden Tour with Peeling Class", description: "A cinnamon garden tour with a hands-on bark-peeling class.", price: "From $42", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1240829/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Ask about how Ceylon cinnamon differs from the cassia cinnamon most people are used to — it's a genuinely distinct, milder variety.",
          },
        ],
        faqs: [
          { q: "Is the cinnamon garden tour worth it in Mirissa?", a: "Yes, for genuine insight into a globally significant local industry, distinct from the town's beach and boat tours." },
        ],
      };

    case "is-crazy-ufo-water-sport-worth-it-mirissa":
      return {
        title: "Is the Crazy UFO High-Speed Water Sport Worth It in Mirissa?",
        description: "An honest look at the Crazy UFO high-speed water sport ride in Mirissa.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-916136/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Crazy UFO is a genuinely fast, bouncy inflatable towed ride, giving a group-friendly adrenaline hit distinct from solo jet skiing or paddle boarding — a short, fun activity best enjoyed with others rather than alone.",
            tourCard: { slug: "mirissa-crazy-ufo-high-speed-water-sport", title: "Mirissa: Crazy UFO High-speed Water Sport", description: "A high-speed inflatable UFO water sport ride in Mirissa.", price: "From $29", duration: "15 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-916136/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Go with a group — this ride is genuinely more fun shared with others than done solo.",
          },
        ],
        faqs: [
          { q: "Is the Crazy UFO ride worth it in Mirissa?", a: "Yes, for a fast, group-friendly adrenaline hit, best enjoyed with others rather than solo." },
        ],
      };

    case "is-jet-skiing-worth-it-mirissa":
      return {
        title: "Is Jet Skiing Worth It in Mirissa?",
        description: "An honest look at jet skiing in Mirissa.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-917125/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Jet skiing gives a genuine solo-driven speed thrill distinct from the group-oriented inflatable rides like the Crazy UFO, worth it specifically for travelers who want to actually drive rather than just be towed along.",
            tourCard: { slug: "jet-skiing-in-mirissa", title: "Jet Skiing in Mirissa", description: "A jet skiing session in Mirissa.", price: "From $93", duration: "15 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-917125/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Confirm whether you'll be driving solo or riding with an instructor before booking, since the experience differs significantly.",
          },
        ],
        faqs: [
          { q: "Is jet skiing worth it in Mirissa?", a: "Yes, specifically for travelers who want to drive rather than be towed, for a more hands-on, solo thrill." },
        ],
      };

    case "is-paddle-boarding-worth-it-mirissa":
      return {
        title: "Is the Paddle Boarding Experience Worth It in Mirissa?",
        description: "An honest look at the paddle boarding experience in Mirissa.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-929676/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Paddle boarding gives a genuinely calm, low-impact way to be on the water, a good lower-adrenaline alternative to jet skiing or the Crazy UFO for travelers who want a relaxed, balance-focused activity instead of a speed thrill.",
            tourCard: { slug: "mirissa-paddle-boarding-experience", title: "Mirissa: Paddle Boarding Experience", description: "A paddle boarding experience in Mirissa.", price: "From $28", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-929676/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "No prior experience is needed — calm mornings generally give the easiest conditions for first-timers.",
          },
        ],
        faqs: [
          { q: "Is paddle boarding worth it in Mirissa?", a: "Yes, for a calm, low-impact water activity, a good alternative to the town's speed-focused water sports." },
        ],
      };

    case "is-full-body-relaxation-wellness-worth-it-mirissa":
      return {
        title: "Is the Full Body Relaxation & Recovery Wellness Experience Worth It?",
        description: "An honest look at the full body relaxation and recovery wellness experience in Mirissa.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-929676/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This wellness session focuses on genuine physical recovery rather than the Nordic sauna's cold-exposure format, worth it specifically for travelers wanting a straightforward massage-and-relaxation experience after active days of surfing, whale watching, or snorkeling.",
            tourCard: { slug: "mirissa-full-body-relaxation-recovery-wellness", title: "Mirissa: Full Body Relaxation & Recovery Wellness Experience", description: "A full body relaxation and recovery wellness experience in Mirissa.", price: "From $51", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-929676/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Book for the evening after an active day — this is a genuine recovery session, not an adrenaline activity.",
          },
        ],
        faqs: [
          { q: "Is the full body relaxation wellness experience worth it in Mirissa?", a: "Yes, for travelers wanting genuine physical recovery after active days, a more straightforward option than the Nordic sauna's cold-exposure format." },
        ],
      };

    case "is-road-gravel-bike-tour-worth-it-mirissa":
      return {
        title: "Is the Guided Road or Gravel Bike Tour Worth It in Mirissa?",
        description: "An honest look at the guided road or gravel bike tour with refreshments in Mirissa.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-929676/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Covering Mirissa's coastal roads and backroads by bike gives genuine physical activity and a different pace than the town's water-focused tours, worth it specifically for travelers wanting exercise alongside the scenery rather than another boat trip.",
            tourCard: { slug: "mirissa-guided-road-or-gravel-bike-tour-with", title: "Mirissa: Guided Road or Gravel Bike Tour with Refreshments", description: "A guided road or gravel bike tour with refreshments in Mirissa.", price: "From $68", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-929676/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Choose the gravel option if you want to see more rural backroads, or road if you'd rather stick to paved coastal routes.",
          },
        ],
        faqs: [
          { q: "Is the road or gravel bike tour worth it in Mirissa?", a: "Yes, for travelers wanting genuine exercise and a different pace than the town's water-focused tours." },
        ],
      };

    case "is-seafood-platter-experience-worth-it-mirissa":
      return {
        title: "Is the Premium Sri Lankan Seafood Platter Experience Worth It?",
        description: "An honest look at the premium Sri Lankan seafood platter experience in Mirissa.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-929676/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This dedicated seafood platter experience focuses specifically on fresh local catch rather than the broader cooking-class format, worth it specifically for travelers who want to eat well rather than cook, prioritizing a quality meal over a learning activity.",
            tourCard: { slug: "mirissa-premium-sri-lankan-seafood-platter", title: "Mirissa: Premium Sri Lankan Seafood Platter Experience", description: "A premium Sri Lankan seafood platter experience in Mirissa.", price: "From $77", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-929676/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Mention any shellfish allergies in advance, since the platter typically includes a wide variety of fresh catch.",
          },
        ],
        faqs: [
          { q: "Is the premium seafood platter experience worth it in Mirissa?", a: "Yes, specifically for travelers wanting a quality seafood meal rather than a hands-on cooking class." },
        ],
      };

    case "is-private-beach-birthday-celebration-worth-it-mirissa":
      return {
        title: "Is the Private Beach Birthday Celebration & Dinner Worth It?",
        description: "An honest look at the private beach birthday celebration and dinner in Mirissa.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-929676/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Having a private setup and dinner handled on the beach takes the planning out of celebrating a birthday while traveling, worth it specifically for travelers wanting a genuinely special occasion marked without arranging decorations or a venue themselves.",
            tourCard: { slug: "mirissa-private-beach-birthday-celebration-dinner", title: "Mirissa: Private Beach Birthday Celebration & Dinner", description: "A private beach birthday celebration with dinner in Mirissa.", price: "From $88", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-929676/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Confirm the exact setup and menu details with the operator in advance so there are no surprises on the day.",
          },
        ],
        faqs: [
          { q: "Is the private beach birthday celebration worth it in Mirissa?", a: "Yes, for travelers wanting a genuinely special occasion marked on the beach without arranging the setup and dinner themselves." },
        ],
      };

    case "is-sail-lanka-overnight-cruise-worth-it-mirissa":
      return {
        title: "Is the Sail Lanka Charter Overnight Cruise Worth It in Mirissa?",
        description: "An honest look at the Sail Lanka Charter one-night cruise in Mirissa, an overnight sailing experience.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-831541/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Sleeping aboard a sailing yacht for the night gives a genuinely different experience than Mirissa's usual day-trip whale watching and fishing tours, worth it for travelers wanting the novelty of overnight life on the water rather than returning to a hotel each evening.",
            tourCard: { slug: "sail-lanka-charter-01-night-cruise-in-mirissa", title: "Sail Lanka Charter - 01 Night Cruise In Mirissa", description: "A one-night overnight sailing cruise in Mirissa.", price: "From $467", duration: "1 night", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-831541/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Pack light and expect genuinely compact cabin space, since this trades hotel comfort for a real sailing experience." },
        ],
        faqs: [
          { q: "Is the Sail Lanka Charter overnight cruise worth it in Mirissa?", a: "Yes, for travelers wanting the genuine novelty of sleeping aboard a sailing yacht, distinct from the area's usual day-trip tours." }
        ],
      };

    case "is-booze-cruise-worth-it-mirissa":
      return {
        title: "Is the Evening Booze Cruise Worth It in Mirissa?",
        description: "An honest look at Mirissa's evening booze cruise with wine and food, a social sailing alternative to the daytime whale-watching trips.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1436283/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "An evening cruise with wine and food included gives a genuinely social, relaxed alternative to Mirissa's usual early-morning whale-watching trips, worth it for travelers wanting a party atmosphere on the water rather than another wildlife-spotting outing.",
            tourCard: { slug: "mirissa-evening-booze-cruise-with-wine-and-food", title: "Mirissa: Evening Booze Cruise with Wine and Food", description: "An evening booze cruise with wine and food in Mirissa.", price: "From $1182", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1436283/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Book this for an evening when you don't need an early morning afterward — it's genuinely a social, later-paced outing." },
        ],
        faqs: [
          { q: "Is the evening booze cruise worth it in Mirissa?", a: "Yes, for travelers wanting a genuinely social, relaxed evening on the water, distinct from the area's early-morning whale-watching trips." }
        ],
      };

    case "is-marine-wildlife-photography-worth-it-mirissa":
      return {
        title: "Is the Private Marine Wildlife Photography Tour Worth It in Mirissa?",
        description: "An honest look at Mirissa's private marine wildlife photography and snorkeling tour, aimed at travelers wanting genuine photo-quality results.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1326218/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This tour is genuinely built around getting quality marine wildlife photos rather than just a general sighting, worth it specifically for travelers serious about photography who want a guide focused on positioning and timing rather than a standard group tour.",
            tourCard: { slug: "mirissa-private-marine-wildlife-photography", title: "Mirissa: Private Marine Wildlife Photography & Snorkeling", description: "A private marine wildlife photography and snorkeling tour in Mirissa.", price: "From $288", duration: "Half day", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1326218/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Bring your own underwater camera gear if you have it — guides genuinely help with positioning, but equipment quality still matters." },
        ],
        faqs: [
          { q: "Is the marine wildlife photography tour worth it in Mirissa?", a: "Yes, for travelers genuinely serious about photography, with a guide focused on positioning and timing rather than a standard group sighting tour." }
        ],
      };

    case "is-romantic-sunset-seafood-dinner-worth-it-mirissa":
      return {
        title: "Is the Romantic Sunset Seafood Dinner for Two Worth It in Mirissa?",
        description: "An honest look at Mirissa's romantic sunset seafood dinner for two, a dedicated couples dining experience.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1470877/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "A dedicated seafood dinner timed to the sunset gives a genuinely romantic, low-effort evening for couples, worth it specifically for anniversaries or honeymoon travelers wanting the setting and timing handled rather than arranging their own beachfront table.",
            tourCard: { slug: "mirissa-romantic-sunset-seafood-dinner-for-two", title: "Mirissa: Romantic Sunset Seafood Dinner For Two", description: "A romantic sunset seafood dinner for two in Mirissa.", price: "From $195", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1470877/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Book the specific sunset time slot in advance — the timing genuinely matters more here than the menu itself." },
        ],
        faqs: [
          { q: "Is the romantic sunset seafood dinner worth it in Mirissa?", a: "Yes, for couples wanting a genuinely romantic, low-effort evening with the setting and timing already handled." }
        ],
      };

    case "is-night-snorkel-safari-worth-it-mirissa":
      return {
        title: "Is the Epic Night Snorkel Safari Worth It in Mirissa?",
        description: "An honest look at Mirissa's night snorkel safari with GoPro video, a nocturnal marine activity distinct from daytime snorkeling tours.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1434312/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Snorkeling at night reveals genuinely different marine life behavior than daytime trips, with bioluminescence and nocturnal species adding a real sense of adventure, and the included GoPro video makes this worth it for travelers wanting footage of the experience.",
            tourCard: { slug: "mirissa-epic-night-snorkel-safari-gopro-video", title: "Mirissa: Epic Night Snorkel Safari & GoPro Video", description: "A night snorkeling safari with GoPro video included in Mirissa.", price: "From $136", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1434312/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Comfort with swimming in darker water genuinely matters here — it's a different sensation than daytime snorkeling, even with a guide." },
        ],
        faqs: [
          { q: "Is the night snorkel safari worth it in Mirissa?", a: "Yes, for travelers wanting a genuinely different nocturnal marine experience, with included GoPro footage as a bonus." }
        ],
      };

    case "is-traditional-fishing-trip-breakfast-worth-it-mirissa":
      return {
        title: "Is the Traditional Fishing Trip with Breakfast Worth It in Mirissa?",
        description: "An honest look at the half-day traditional fishing trip with a local fisherman and breakfast in Mirissa.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1489150/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, if you want a genuine hands-on fishing experience rather than just watching from shore — joining a local fisherman to actually fish gives real insight into traditional Sri Lankan fishing methods, with breakfast afterward rounding out the morning.",
            tourCard: { slug: "mirissa-traditional-fishing-trip-with-breakfast", title: "Mirissa: Traditional Fishing Trip with Breakfast", description: "A half-day traditional fishing trip with a local fisherman and breakfast in Mirissa.", price: "From $575", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1489150/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This is a hands-on fishing trip, not a whale watching tour — set expectations accordingly if marine wildlife sightings are your priority.",
          },
        ],
        faqs: [
          { q: "Is the traditional fishing trip with breakfast worth it in Mirissa?", a: "Yes, for travelers wanting genuine hands-on insight into traditional Sri Lankan fishing methods, not a wildlife-watching tour." },
        ],
      };

    case "is-vip-turtle-snorkeling-pool-training-worth-it-mirissa":
      return {
        title: "Is the VIP Turtle Snorkeling with Pool Training Worth It in Mirissa?",
        description: "An honest look at this turtle snorkeling tour's added pool training session, aimed at nervous or first-time snorkelers.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1415048/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The pool training session before heading into open water removes the biggest barrier for nervous swimmers, worth it for first-time snorkelers who want to practice breathing through a mask in a calm pool before trying it with moving sea turtles.",
            tourCard: { slug: "mirissa-vip-turtle-snorkeling-pool-training-gopro", title: "Mirissa VIP Turtle Snorkeling: Pool Training & GoPro Video", description: "A turtle snorkeling tour in Mirissa with pool training beforehand and a GoPro video.", price: "From $50", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1415048/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Use the pool session to get fully comfortable breathing through the snorkel, it genuinely makes the open-water part far less stressful." },
        ],
        faqs: [
          { q: "Is the VIP turtle snorkeling with pool training worth it in Mirissa?", a: "Yes, for first-time or nervous snorkelers who want a confidence-building pool session before swimming with sea turtles." }
        ],
      };

    case "is-garadu-lagoon-mangrove-kayaking-worth-it-mirissa":
      return {
        title: "Is the Guided Garadu Lagoon Mangrove Kayaking Experience Worth It in Mirissa?",
        description: "An honest look at this guided kayaking trip through Garadu Lagoon's mangroves, a quieter paddle than Mirissa's whale-watching boat tours.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1270976/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Paddling yourself through the mangrove channels gives a slower, quieter view of the lagoon's birdlife than a motorized boat safari, worth it for travelers who want an active, low-key morning as a change of pace from Mirissa's whale and dolphin cruises.",
            tourCard: { slug: "mirissa-guided-garadu-lagoon-mangrove-kayaking", title: "Mirissa: Guided Garadu Lagoon Mangrove Kayaking Experience", description: "A guided kayaking trip through Garadu Lagoon's mangroves in Mirissa.", price: "From $50", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1270976/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Go early morning for the calmest water and the best chance of spotting birds before the day heats up." },
        ],
        faqs: [
          { q: "Is the guided Garadu Lagoon mangrove kayaking experience worth it in Mirissa?", a: "Yes, for travelers wanting a quieter, active paddle through mangroves as a change of pace from the usual whale-watching cruises." }
        ],
      };

    case "is-deniyaya-rainforest-day-trip-worth-it-mirissa":
      return {
        title: "Is the Deniyaya Rainforest Day Trip Worth It from Mirissa or Weligama?",
        description: "An honest look at the long day trip to Sinharaja's Lankagama entrance near Deniyaya, a rainforest alternative to Mirissa's usual coastal and marine activities.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1374421/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This is a genuinely long 12-hour day trading beach and whale-watching time for a proper rainforest trek into Sinharaja via its quieter Lankagama entrance, worth it only for travelers with a real interest in rainforest wildlife who have a day to spare away from the coast.",
            tourCard: { slug: "from-mirissa-or-weligama-deniyaya-rainforest-day", title: "From Mirissa or Weligama: Deniyaya Rainforest Day Trip", description: "A full-day rainforest trip to Sinharaja's Lankagama entrance from Mirissa or Weligama.", price: "From $203", duration: "12 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1374421/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Wear proper trekking shoes and bring leech socks, the rainforest trails are genuinely muddy and leeches are common." },
        ],
        faqs: [
          { q: "Is the Deniyaya rainforest day trip worth it from Mirissa or Weligama?", a: "Yes, but only for travelers genuinely interested in rainforest wildlife and willing to give up a full day away from the coast." }
        ],
      };

    default:
      return null;
  }
}
