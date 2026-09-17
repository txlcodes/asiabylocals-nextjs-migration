// Nusa Penida authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getNusaPenidaInfoContent() -> getCityInfoContent().
// Tour cards are added after the Bali import lands and the slugs exist.
import type { CityInfoData } from './cityInfoContent';

const IMG = '/bali-hero.webp';

export function getNusaPenidaInfoContent(slug: string): CityInfoData | null {
  switch (slug) {

    case "getting-to-nusa-penida":
      return {
        title: "Getting to Nusa Penida: Which Harbour, Which Boat, and Why the Crossing Is Not Always Smooth",
        seoTitle: "How to Get to Nusa Penida 2026",
        description: "Sanur versus Padang Bai versus Kusamba, what a fast-boat crossing is really like, the wet walk to the boat, and the return that fills up by mid-afternoon.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/fast-boat-transfer-between-sanur-and-nusa-penida/img0/1600.webp",
        fastFacts: [
          { icon: "ship", label: "Main route", value: "Sanur to Sampalan or Toya Pakeh, about 45 minutes by fast boat" },
          { icon: "map", label: "Other ports", value: "Padang Bai from the east; Kusamba is a shorter, rougher crossing" },
          { icon: "clock", label: "First boats", value: "Around 7 to 7:30am; day-trippers want the earliest" },
          { icon: "waves", label: "Sea state", value: "Choppy in the dry-season afternoons; rough in wet-season swells" },
          { icon: "footprints", label: "Boarding", value: "Often wading from the beach with bags overhead" },
        ],
        sections: [
          {
            title: "Getting to Nusa Penida: Which Harbour, Which Boat, and Why the Crossing Is Not Always Smooth",
            icon: "ship",
            content: "Nusa Penida is the big, dry, cliff-edged island south-east of Bali, separated from it by a strait that fast boats cross in about forty-five minutes. Getting there is easy. Getting there well means knowing which harbour to leave from, what the boat is like, and that the sea between the islands has moods.",
            tourCard: {
              slug: "fast-boat-transfer-between-sanur-and-nusa-penida",
              title: "Fast-Boat Transfer between Sanur and Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 11.50",
              duration: "30 minutes",
              image: "https://images.asiabylocals.com/asiabylocals/tours/fast-boat-transfer-between-sanur-and-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "Sanur: the main route",
            icon: "map",
            content: "Most boats leave from Sanur on Bali's south-east coast, and Sanur has a proper harbour now rather than the old beach launch. Departures run from around seven in the morning through the afternoon, with the first boats full of day-trippers and the later ones of people staying over.\n\nSanur is forty-five minutes from Uluwatu or Seminyak in early traffic, about an hour from Canggu, and an hour or more from Ubud. For a day trip that is the number to build around: the 6am alarm is the price of the earliest boat, and the earliest boat is the difference between Kelingking with a hundred people and Kelingking with a thousand.",
            tourCard: {
              slug: "bali-sanur-snorkeling-day-trip-to-nusa-penida-3-sites-nusa-penida",
              title: "Bali Sanur: Snorkeling day trip to Nusa Penida 3 sites (Nusa Penida)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 153.00",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/bali-sanur-snorkeling-day-trip-to-nusa-penida-3-sites-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "Padang Bai and Kusamba",
            icon: "map",
            content: "Padang Bai, on the east coast, is the sensible port if you are coming from Amed, Candidasa or Sidemen, and it also serves Lombok and the Gilis. Kusamba, near Klungkung, is the shortest crossing, used by locals and some tour operators; the boats are smaller and the sea is felt more.\n\nAll three land you on Penida's north coast at Toya Pakeh, Sampalan or Buyuk, within a few kilometres of each other.",
            tourCard: {
              slug: "kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida",
              title: "Kelingking Beach, Broken Beach and Sunset Dinner in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 44.00",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "What the crossing is like",
            icon: "waves",
            content: "The fast boats are enclosed and seat forty to a hundred people. In the dry-season mornings the strait is usually calm; by afternoon the wind picks up and the return is bouncier. In the wet season, and on any day with a big southern swell, the crossing can be genuinely rough, and boats are occasionally cancelled.\n\nBoarding at some harbours still means wading in from the beach with your bag held up, and the crew will take luggage from you. Wear shoes that can get wet, keep phones and passports in a dry bag, and if you are prone to seasickness sit at the back and take something before, not after.",
            tourCard: {
              slug: "private-car-hire-with-driver-in-nusa-penida",
              title: "Private Car Hire with Driver in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 63.00",
              duration: "6 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/private-car-hire-with-driver-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "Booking the return",
            icon: "clock",
            content: "The return boats in the late afternoon fill with the day-trip crowd, and turning up at the harbour at four hoping for a seat is how people end up staying an unplanned night. Book the return when you book the outbound; the tours listed here for Penida do that, and include the mainland pickup so Sanur at 6:30 is not your problem.",
            tourCard: {
              slug: "nusa-penida-fast-boat-ticket",
              title: "Nusa Penida Fast Boat Ticket",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 17.00",
              duration: "Full day",
              image: "https://images.asiabylocals.com/asiabylocals/tours/nusa-penida-fast-boat-ticket/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "How long is the boat from Sanur to Nusa Penida?", a: "About forty-five minutes by fast boat. Boats run from around seven in the morning; the earliest ones are the day-trippers' boats." },
          { q: "Is the boat to Nusa Penida rough?", a: "Usually calm in dry-season mornings and choppier in the afternoons. In the wet season or on a big swell it can be rough and boats are occasionally cancelled." },
          { q: "Which harbour is best for Nusa Penida?", a: "Sanur for anyone based in the south or Ubud. Padang Bai if coming from east Bali. Kusamba is the shortest crossing but on smaller boats." },
          { q: "Do I need to book the return boat?", a: "Yes. Afternoon return boats fill with day-trippers. Book both directions together or use a tour that includes them." },
        ],
      };

    case "kelingking-beach-guide":
      return {
        title: "Kelingking Beach: The View Is Free, the Climb Down Is Not for Everyone",
        seoTitle: "Kelingking Beach Nusa Penida Guide 2026",
        description: "What you see from the top, what the descent to the sand actually involves, the swimming warning that is not an exaggeration, and when to arrive.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida/img0/1600.webp",
        fastFacts: [
          { icon: "camera", label: "The viewpoint", value: "The T-rex cliff; the famous photograph; a short walk from the car park" },
          { icon: "footprints", label: "The descent", value: "Steep, exposed, with bamboo handrails; 45 to 60 minutes down, longer up" },
          { icon: "alert", label: "Swimming", value: "Do not. The shore break and rip have taken lives here" },
          { icon: "clock", label: "Arrive", value: "Before 9am or after 3pm; the middle of the day is a queue" },
          { icon: "sun", label: "Shade and water", value: "None on the path; carry a litre per person" },
        ],
        sections: [
          {
            title: "Kelingking Beach: The View Is Free, the Climb Down Is Not for Everyone",
            icon: "camera",
            content: "Kelingking is the photograph of Nusa Penida: a headland shaped like a dinosaur's head and neck, with a white beach in the crook of it and blue water a couple of hundred metres below. The viewpoint is a few minutes from the car park along the cliff, and that view is genuinely as good as the pictures.\n\nThe beach at the bottom is a separate proposition, and the difference between the two is the thing to understand before you go.",
            tourCard: {
              slug: "kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida",
              title: "Kelingking Beach, Broken Beach and Sunset Dinner in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 44.00",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "The climb down",
            icon: "footprints",
            content: "The path to the sand runs down the spine of the headland: steep, loose, in places almost a scramble, with bamboo railings that are more suggestion than support and long stretches with a drop on one side. It takes most people forty-five minutes to an hour to go down and longer, in full sun, to come back up. There is no shade and no water on it.\n\nIt is doable for fit adults in proper shoes with a litre of water each. It is not for flip-flops, for small children, for anyone with knees that complain on stairs, or for the hour after lunch. Plenty of people start down, look at the second section, and sensibly turn round.",
            tourCard: {
              slug: "tembeling-beach-and-forest-kelingking-beach-broken-in-nusa-penida",
              title: "Tembeling beach and forest, kelingking beach broken in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 75.00",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tembeling-beach-and-forest-kelingking-beach-broken-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "The beach, and the sea",
            icon: "alert",
            content: "The sand is soft and white and the setting, enclosed by cliffs, is extraordinary. The sea is not for swimming. The beach faces the open Indian Ocean with no reef to break the swell, the shore break dumps hard, and there is a rip that pulls straight out. People have drowned here, most of them strong swimmers who went in to their waist. Paddle at the very edge if you must; do not go in.",
            tourCard: {
              slug: "kelingking-and-tembeling-beach-tour-in-nusa-penida",
              title: "Kelingking and Tembeling Beach Tour in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 99.50",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kelingking-and-tembeling-beach-tour-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "When to come",
            icon: "clock",
            content: "The viewpoint is on every day-trip route and by ten in the morning there is a queue for the photo spot and a car park full of vans. Before nine, or after three when the day-trippers head for the boat, it is calm and the light is better.\n\nStaying a night on the island is what makes the early hour possible without a 4am start on Bali. For a day trip, this is the stop to do first, before the others.",
            tourCard: {
              slug: "la-rossa-beach-club-food-and-drink-e-voucher-in-nusa-penida",
              title: "La Rossa Beach Club food and drink E-Voucher in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 19.50",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/la-rossa-beach-club-food-and-drink-e-voucher-in-nusa-penida/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Can you go down to Kelingking beach?", a: "Yes, by a steep, exposed path down the headland that takes about an hour down and longer up. It suits fit adults in proper shoes; many people wisely stop at the viewpoint." },
          { q: "Can you swim at Kelingking beach?", a: "No. The beach faces open ocean with a heavy shore break and a rip current, and there have been drownings. Look, paddle at the edge at most, do not swim." },
          { q: "What time should I visit Kelingking?", a: "Before nine in the morning or after three in the afternoon. In between, the viewpoint has a photo queue and the car park is full." },
          { q: "How long do you need at Kelingking?", a: "Thirty minutes for the viewpoint. Two to three hours if you go down to the beach and back." },
        ],
      };

    case "nusa-penida-west-vs-east":
      return {
        title: "Nusa Penida West or East: Two Different Days, and Why One Trip Cannot Do Both",
        seoTitle: "Nusa Penida West Tour vs East Tour 2026",
        description: "What is on each side of the island, how bad the roads are, and how to choose if you only have one day.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/nusa-penida-journey-to-atuh-diamond-beach-and-tree-house-tour-nusa-penida/img0/1600.webp",
        fastFacts: [
          { icon: "compass", label: "West", value: "Kelingking, Broken Beach, Angel's Billabong, Crystal Bay" },
          { icon: "compass", label: "East", value: "Diamond Beach, Atuh, the Thousand Islands viewpoint, Tree House" },
          { icon: "car", label: "Roads", value: "Narrow, potholed, steep; 30 km can take 90 minutes" },
          { icon: "clock", label: "One day", value: "One side, properly; both sides means seeing everything from a car" },
          { icon: "waves", label: "Swimming", value: "Crystal Bay in the west; Diamond and Atuh are viewpoints more than swims" },
        ],
        sections: [
          {
            title: "Nusa Penida West or East: Two Different Days, and Why One Trip Cannot Do Both",
            icon: "compass",
            content: "Every Penida tour is sold as 'west' or 'east', and the split is not marketing. The island is bigger than it looks from Bali, the roads between the two sides are slow and rough, and the sights on each side are clustered. A west day and an east day are each a full day. A 'west and east' day exists and is a long time in a van looking at things through a window.",
            tourCard: {
              slug: "nusa-penida-journey-to-atuh-diamond-beach-and-tree-house-tour-nusa-penida",
              title: "Nusa Penida Journey to Atuh Diamond Beach and Tree House Tour (Nusa Penida)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 117.00",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/nusa-penida-journey-to-atuh-diamond-beach-and-tree-house-tour-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "The west",
            icon: "map",
            content: "The west is the famous side. Kelingking's dinosaur cliff, then Broken Beach, a collapsed sea cave that has left a natural arch with the ocean flowing through it, and Angel's Billabong next door, a tidal rock pool that is safe to enter only at low tide in calm seas and lethal when swell comes over the lip. Crystal Bay finishes the day with an actual swimmable beach and sunset.\n\nIt is the day to do if you only have one, and it is the day everyone does, so start early.",
            tourCard: {
              slug: "kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida",
              title: "Kelingking Beach, Broken Beach and Sunset Dinner in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 44.00",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "The east",
            icon: "map",
            content: "The east is quieter and, for a lot of people, better. Diamond Beach is a white cove beneath limestone spires reached by a staircase carved into the cliff, with a swimming warning nearly as serious as Kelingking's. Atuh beach is the next cove along, with a warung on the sand. The Thousand Islands viewpoint looks over a string of rock islets from a cliff path, and the tree house nearby has become a photo stop in its own right.\n\nDrive times from the north-coast harbours are longer to the east, which is why the day-trip crowd mostly goes west.",
            tourCard: {
              slug: "3-day-diving-tour-at-nusa-penida-amed-and-tulamben",
              title: "3-Day Diving Tour at Nusa Penida, Amed, and Tulamben",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 533.50",
              duration: "3 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/3-day-diving-tour-at-nusa-penida-amed-and-tulamben/img0/1600.webp",
            },
          },
          {
            title: "The roads",
            icon: "car",
            content: "Penida's roads are the thing no brochure shows. Away from the north coast they are narrow, steeply cut into the hills, and broken up by potholes and washouts, and the vans that carry tours crawl through them. Thirty kilometres is an hour and a half. This is the reason a one-day tour covers one side, and it is the reason scooter rental here is more dangerous than on Bali: the surfaces catch out experienced riders every week.",
            tourCard: {
              slug: "tembeling-beach-and-forest-kelingking-beach-broken-in-nusa-penida",
              title: "Tembeling beach and forest, kelingking beach broken in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 75.00",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tembeling-beach-and-forest-kelingking-beach-broken-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "Choosing",
            icon: "lightbulb",
            content: "One day, first visit: west. Two days, staying over: west then east, with the early morning at Kelingking on the second day if you can face the road again. Snorkelling with mantas is a third kind of day, by boat around the south-west coast, and combines with a shortened west tour rather than a full one.\n\nThe tours listed here for Nusa Penida are split the same way, with named drivers who know which road washed out last week.",
            tourCard: {
              slug: "3-days-nusa-penida-tour-west-east-and-nusa-lembongan-nusa-penida",
              title: "3 Days Nusa Penida Tour: West, East and Nusa Lembongan (Nusa Penida)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 227.00",
              duration: "3 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/3-days-nusa-penida-tour-west-east-and-nusa-lembongan-nusa-penida/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is Nusa Penida west or east better?", a: "West for the famous sights, Kelingking and Broken Beach, and a swim at Crystal Bay. East for Diamond Beach and quieter viewpoints. First visit with one day: west." },
          { q: "Can you do Nusa Penida west and east in one day?", a: "It is sold, but it means most of the day in a van on rough roads and a few minutes at each stop. One side per day sees it properly." },
          { q: "Is Angel's Billabong safe to swim in?", a: "Only at low tide on a calm day, and only inside the pool. When swell comes over the lip it is extremely dangerous and people have been swept out." },
          { q: "How bad are the roads on Nusa Penida?", a: "Narrow, steep and broken outside the north coast. Thirty kilometres can take an hour and a half, which is why tours cover one side of the island per day." },
        ],
      };

    case "nusa-penida-manta-snorkelling-guide":
      return {
        title: "Snorkelling with Manta Rays at Nusa Penida: Where They Are, the Odds, and the Swell Problem",
        seoTitle: "Nusa Penida Manta Snorkelling Guide 2026",
        description: "The cleaning stations at Manta Point and Manta Bay, what a snorkelling trip visits, how often you actually see mantas, and the days the boats cannot go.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/manta-point-and-gamat-bay-snorkeling-tour-in-nusa-penida/img0/1600.webp",
        fastFacts: [
          { icon: "fish", label: "Where", value: "Manta Point and Manta Bay on the south-west coast; year round" },
          { icon: "ship", label: "Trips", value: "Half-day by boat, usually with Crystal Bay, Gamat Bay or Wall Point added" },
          { icon: "waves", label: "Conditions", value: "Manta Point takes open-ocean swell; trips are cancelled when it is big" },
          { icon: "thermometer", label: "Water", value: "Cool upwellings, sometimes low 20s°C; a rash vest or short wetsuit helps" },
          { icon: "alert", label: "Rules", value: "No touching, no chasing, no flash; stay off the cleaning station" },
        ],
        sections: [
          {
            title: "Snorkelling with Manta Rays at Nusa Penida: Where They Are, the Odds, and the Swell Problem",
            icon: "fish",
            content: "Reef manta rays live around Nusa Penida all year, and they come in to two spots on the island's south-west coast to be cleaned by small fish: Manta Point, under the cliffs at the southern tip, and Manta Bay, a little north. Because the cleaning stations are shallow, you can snorkel over them, which is rare, and it is the reason the boats go.",
            tourCard: {
              slug: "manta-point-and-gamat-bay-snorkeling-tour-in-nusa-penida",
              title: "Manta Point and Gamat Bay Snorkeling Tour in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 15.50",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/manta-point-and-gamat-bay-snorkeling-tour-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "The odds",
            icon: "fish",
            content: "Most days there are mantas at one station or the other, and on a good morning several will circle a few metres below you for as long as you care to float. It is not guaranteed. They are wild animals, and there are days when the boats sit over the station for half an hour and nothing comes.\n\nThe better operators go to Manta Point first and early, when the water is clearest and the crowd of boats smallest, and switch to Manta Bay if the first is empty.",
            tourCard: {
              slug: "nusa-penida-private-snorkeling-manta-rays-and-land-tour",
              title: "Nusa Penida Private Snorkeling, Manta Rays and Land Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 141.50",
              duration: "9 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/nusa-penida-private-snorkeling-manta-rays-and-land-tour/img0/1600.webp",
            },
          },
          {
            title: "The swell",
            icon: "waves",
            content: "Manta Point faces the open Indian Ocean and takes the same swell that makes the cliffs spectacular. On a big-swell day, common in the dry season and after storms in the wet, the boats cannot safely hold position and the trip goes to the more sheltered sites instead, or does not go. That is the operator's call on the morning and it is the right one; the stories of people thrown against the cliff here are true.\n\nThe water is also cold at times, fed by upwellings from deep water, and a rash vest or a thin wetsuit turns a shivering fifteen minutes into a comfortable forty.",
            tourCard: {
              slug: "nusa-penida-3-spot-manta-bay-snorkel-with-gopro",
              title: "Nusa Penida 3-Spot Manta Bay Snorkel with GoPro",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 38.50",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/nusa-penida-3-spot-manta-bay-snorkel-with-gopro/img0/1600.webp",
            },
          },
          {
            title: "The rest of the trip",
            icon: "map",
            content: "A snorkelling half day usually adds Crystal Bay for its coral and the chance of a mola mola in season, Gamat Bay for fish and clear water, and a drift along Wall Point or the mangrove reefs of Lembongan. Trips leave from the harbours on the north coast of Penida or from Sanur on Bali with the crossing built in, and the tours listed here cover both.",
            tourCard: {
              slug: "manta-rays-snorkeling-trip-in-nusa-penida",
              title: "Manta Rays Snorkeling Trip in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 34.50",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/manta-rays-snorkeling-trip-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "Behaving around mantas",
            icon: "alert",
            content: "Float still and let them come. Do not swim at them, do not dive down onto the cleaning station, do not touch, and turn the flash off. A manta that is harassed leaves the station, and the next boat sees nothing. Fins on, so you can hold position against current without flailing; the guides will tell you where the current runs.",
            tourCard: {
              slug: "nusa-penida-snorkeling-to-manta-point-and-manta-bay-nusa-penida",
              title: "Nusa Penida Snorkeling to Manta Point and Manta Bay (Nusa Penida)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 29.00",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/nusa-penida-snorkeling-to-manta-point-and-manta-bay-nusa-penida/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Can you see manta rays at Nusa Penida all year?", a: "Yes. Reef mantas are resident and use the cleaning stations at Manta Point and Manta Bay year round. Sightings are usual but never guaranteed." },
          { q: "Is the manta snorkelling safe?", a: "In calm conditions, yes, with a guide and a life jacket if you want one. On big-swell days Manta Point is dangerous and operators divert or cancel; trust that call." },
          { q: "How cold is the water at Manta Point?", a: "Often cooler than the rest of Bali because of deep-water upwellings, sometimes in the low twenties Celsius. A rash vest or short wetsuit is worth having." },
          { q: "What else is on a Nusa Penida snorkelling trip?", a: "Usually Crystal Bay, Gamat Bay and a drift at Wall Point or off Lembongan, in a half day by boat." },
        ],
      };

    case "best-time-to-visit-nusa-penida":
      return {
        title: "Best Time to Visit Nusa Penida: Sea Conditions Matter More Than Rain",
        seoTitle: "Best Time to Visit Nusa Penida 2026",
        description: "When the crossing is calm, when Angel's Billabong is safe, when the mola mola appear, and the dry island's surprisingly short wet season.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/private-nusa-penida-day-tour-with-jet-ski-and-sea-walker/img0/1600.webp",
        fastFacts: [
          { icon: "sun", label: "Dry season", value: "April to October; calm mornings, big afternoon swell on the south-west" },
          { icon: "umbrella", label: "Wet season", value: "December to February mainly; short on this dry island" },
          { icon: "fish", label: "Mola mola", value: "Roughly July to October at Crystal Bay and the deep sites" },
          { icon: "users", label: "Busiest", value: "July, August and the Christmas fortnight; weekends all year" },
          { icon: "moon", label: "Nyepi", value: "One day in March: no boats, no movement, whole island indoors" },
        ],
        sections: [
          {
            title: "Best Time to Visit Nusa Penida: Sea Conditions Matter More Than Rain",
            icon: "waves",
            content: "Penida is drier than Bali, with a wet season that is shorter and less soaking, so rain is rarely the thing that spoils a day here. The sea is. The crossing, the tidal pools, the manta sites and the beaches all depend on swell and tide, and those follow the seasons more reliably than the clouds do.",
            tourCard: {
              slug: "private-nusa-penida-day-tour-with-jet-ski-and-sea-walker",
              title: "Private Nusa Penida Day Tour with Jet Ski and Sea Walker",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 124.00",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/private-nusa-penida-day-tour-with-jet-ski-and-sea-walker/img0/1600.webp",
            },
          },
          {
            title: "Dry season, April to October",
            icon: "sun",
            content: "Mornings are calm and clear, which makes the early boat and the early Kelingking the right call. From mid-morning the trade wind builds and the south-west coast takes swell, so Angel's Billabong is often unsafe by lunch and Manta Point can be off for the afternoon. The mola mola, the huge sunfish, come up from deep water between roughly July and October and draw divers to Crystal Bay.\n\nJuly and August are the peak, and the viewpoints have queues.",
            tourCard: {
              slug: "nusa-penida-private-snorkeling-manta-rays-and-land-tour",
              title: "Nusa Penida Private Snorkeling, Manta Rays and Land Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 141.50",
              duration: "9 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/nusa-penida-private-snorkeling-manta-rays-and-land-tour/img0/1600.webp",
            },
          },
          {
            title: "Wet season, November to March",
            icon: "umbrella",
            content: "Rain comes as storms, mostly December to February, and the island stays browner and dustier than Bali between them. The strait can be rougher in the wet-season swells and crossings are occasionally cancelled, so build a spare day into a trip if the boat matters. Outside Christmas it is the quiet time, and Kelingking without a queue is worth a shower.",
            tourCard: {
              slug: "private-car-hire-with-driver-in-nusa-penida",
              title: "Private Car Hire with Driver in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 63.00",
              duration: "6 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/private-car-hire-with-driver-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "Nyepi",
            icon: "moon",
            content: "The Balinese day of silence in March applies to Penida as it does to Bali: no boats run, no one leaves their accommodation, no lights after dark, for twenty-four hours from six in the morning. The date moves each year. Do not plan a crossing on it, in either direction.",
            tourCard: {
              slug: "3-day-must-do-highlights-nature-and-culture-tour-in-nusa-penida",
              title: "3-Day Must-Do Highlights Nature and Culture Tour in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 401.00",
              duration: "3 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/3-day-must-do-highlights-nature-and-culture-tour-in-nusa-penida/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "When is the best time to visit Nusa Penida?", a: "May, June or September for calm dry-season mornings without the peak crowd. July to October if the mola mola sunfish are the goal." },
          { q: "Is Nusa Penida good in the rainy season?", a: "Better than Bali, because the island is dry and its wet season is short. The main risk is a rough or cancelled crossing on big-swell days." },
          { q: "When is Angel's Billabong safe?", a: "At low tide on a calm morning. In the dry season the afternoon swell often makes it unsafe by lunchtime; local guides make the call on the day." },
          { q: "Do boats run to Nusa Penida on Nyepi?", a: "No. Nothing moves on Nyepi, one day in March. Plan crossings on either side of it." },
        ],
      };

    case "nusa-penida-day-trip-or-overnight":
      return {
        title: "Nusa Penida: Day Trip or Stay the Night? The Honest Trade-off",
        seoTitle: "Nusa Penida Day Trip vs Overnight 2026",
        description: "What a day trip from Bali really costs in hours, what a night on the island buys you, and where to stay if you do.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/padi-open-water-package-with-2-night-stay-in-nusa-penida/img0/1600.webp",
        fastFacts: [
          { icon: "clock", label: "Day trip", value: "10 to 12 hours door to door from the south coast; more from Ubud or Canggu" },
          { icon: "moon", label: "Overnight", value: "Kelingking at dawn, both sides of the island, a calmer boat" },
          { icon: "map", label: "Where to stay", value: "North coast near the harbours for convenience; the west for the cliffs" },
          { icon: "car", label: "On the island", value: "A driver for the day or a scooter for confident riders only" },
          { icon: "wallet", label: "Cost", value: "A night on Penida is usually cheaper than a night on Bali" },
        ],
        sections: [
          {
            title: "Nusa Penida: Day Trip or Stay the Night? The Honest Trade-off",
            icon: "lightbulb",
            content: "Nusa Penida can be done as a day trip from Bali, and most people do it that way: early pickup, the boat, a van around the west side, the boat back, home by dark. It works. It is also the most tiring day most visitors spend in Bali, and it sees the island's best places at their worst hour.",
            tourCard: {
              slug: "padi-open-water-package-with-2-night-stay-in-nusa-penida",
              title: "PADI Open Water Package with 2 Night Stay in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 755.50",
              duration: "3 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/padi-open-water-package-with-2-night-stay-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "What the day trip involves",
            icon: "clock",
            content: "From the south coast, a 6am pickup, Sanur by seven, on the island by eight, and a van to Kelingking, Broken Beach, Angel's Billabong and Crystal Bay with lunch somewhere in between. Back on a late-afternoon boat, in the hotel by six or seven. From Ubud or Canggu, add an hour each way.\n\nYou arrive at Kelingking with everyone else who took the early boat and leave Crystal Bay before the light gets good. It is a lot of van. For a first look, it is fine, and the tours listed here do it with the boat and pickup included so the logistics are not yours.",
            tourCard: {
              slug: "nusa-penida-package-2-day-1-night-snorkeling-and-tour-island",
              title: "Nusa Penida Package 2-Day 1-Night : Snorkeling and Tour Island",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 271.00",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/nusa-penida-package-2-day-1-night-snorkeling-and-tour-island/img0/1600.webp",
            },
          },
          {
            title: "What a night buys",
            icon: "moon",
            content: "Staying one night, arriving on a midday boat and leaving the following afternoon, changes the trip. You do the west side in the late afternoon when the vans are leaving, sleep, and are at Kelingking before eight the next morning with the cliff to yourself. Then the east side, or the mantas, before the boat home. The crossing in the middle of the day is calmer than the afternoon return the day-trippers take.\n\nTwo nights adds the snorkelling and removes the rush entirely.",
            tourCard: {
              slug: "fun-dive-safari-2-days-1-night-4-dives-in-nusa-penida",
              title: "Fun Dive Safari 2 Days 1 Night (4 Dives) in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 405.50",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/fun-dive-safari-2-days-1-night-4-dives-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "Where to stay",
            icon: "map",
            content: "The north coast around Toya Pakeh and Sampalan has most of the guesthouses and is closest to the harbours and the good warungs. The west, near Crystal Bay and on the cliffs above Kelingking, has the views and the sunsets and longer drives to everything else. Accommodation is simpler and cheaper than Bali; a clean guesthouse with a view is the norm rather than a resort.",
            tourCard: {
              slug: "snorkel-tour-adventure-2-days-1-night-in-nusa-penida",
              title: "Snorkel + Tour Adventure 2 Days 1 Night in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 133.00",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/snorkel-tour-adventure-2-days-1-night-in-nusa-penida/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is Nusa Penida worth a day trip?", a: "Yes, for a first look at the west side. It is a ten-to-twelve-hour day with a lot of time in a van, and the sights are at their busiest when you reach them." },
          { q: "Is it better to stay overnight on Nusa Penida?", a: "For most people, yes. One night gives you Kelingking at dawn, both sides of the island, and calmer boats. It is also usually cheaper per night than Bali." },
          { q: "Where should I stay on Nusa Penida?", a: "North coast near the harbours for convenience and food; the west near Crystal Bay for views and sunsets." },
          { q: "How do you get around Nusa Penida?", a: "A driver for the day, arranged through the tour or your guesthouse. Scooters are cheap but the roads are rough and only suit confident, licensed riders." },
        ],
      };

    case "diamond-beach-and-atuh-guide":
      return {
        title: "Diamond Beach and Atuh Beach: The Cliff Steps, the Shore Break, and the Rest of Nusa Penida's East",
        seoTitle: "Diamond Beach Nusa Penida Guide 2026",
        description: "How the stairs down to Diamond Beach work, why it is a beach for the picture and not the swim, Atuh across the headland, the tree house and the Thousand Islands viewpoint, and the time the east side needs.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/nusa-penida-journey-to-atuh-diamond-beach-and-tree-house-tour-nusa-penida/img0/1600.webp",
        fastFacts: [
          { icon: "footprints", label: "Steps", value: "Cut into the cliff in 2018; 10 to 15 minutes down" },
          { icon: "droplet", label: "Sea", value: "Strong shore break; no lifeguard" },
          { icon: "map", label: "Atuh", value: "The next cove, reached by its own steps" },
          { icon: "camera", label: "Viewpoints", value: "Thousand Islands, Rumah Pohon tree house" },
          { icon: "car", label: "From the harbour", value: "About 1.5 hours on narrow roads" },
          { icon: "sun", label: "Best light", value: "Morning on the white cliffs" },
        ],
        sections: [
          {
            title: "Diamond Beach",
            icon: "camera",
            content: "Diamond Beach is a wedge of white sand at the foot of a limestone cliff on Nusa Penida's south-east corner, named for the pointed rock stacks off its end. Until 2018 it was viewed from above; then a staircase was cut into the cliff face, and it became possible to walk down. The view from the top of the steps, along the cliff to the stacks, is the photograph. The beach at the bottom is small, the sand is coarse, and the sea comes in with a shore break that knocks people over; there is no lifeguard and the currents beyond the break are strong. Go down for the walk and the base of the cliff, not for a swim.",
            tourCard: {
              slug: "nusa-penida-journey-to-atuh-diamond-beach-and-tree-house-tour-nusa-penida",
              title: "Nusa Penida Journey to Atuh Diamond Beach and Tree House Tour (Nusa Penida)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 117.00",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/nusa-penida-journey-to-atuh-diamond-beach-and-tree-house-tour-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "Atuh Beach",
            icon: "droplet",
            content: "Atuh is the next cove east, on the other side of the headland from Diamond Beach, and the two share the same car park area with the steps going down opposite sides. Atuh's beach is larger and more sheltered, with a few warungs under umbrellas selling coconuts and grilled fish, and the water is calmer at low tide, though the same care applies. The rock arch in the bay and the stacks make it as photogenic as its neighbour and it is usually less crowded. Coming down to one and up the other, with an hour on the sand, is a fair half-day.",
            tourCard: {
              slug: "kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida",
              title: "Kelingking Beach, Broken Beach and Sunset Dinner in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 43.64",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "The viewpoints",
            icon: "map",
            content: "Ten minutes from the beaches, the Thousand Islands viewpoint, Raja Lima, looks along the coast at a line of small rock islands in the sea, and the Rumah Pohon tree houses, wooden huts on stilts on the cliff edge, are the spot everyone photographs from. The tree houses are rented for the night and are otherwise a queue for the photo. A little further, the Teletubbies hills are rounded green hills that are worth a stop from the road and no more. Together with the beaches these are the east side, and they are an hour and a half from the harbour on roads that are narrow and poor.",
            tourCard: {
              slug: "tembeling-beach-and-forest-kelingking-beach-broken-in-nusa-penida",
              title: "Tembeling beach and forest, kelingking beach broken in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 74.52",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tembeling-beach-and-forest-kelingking-beach-broken-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "Fitting it in",
            icon: "clock",
            content: "The east does not fit into a day trip from Bali with the west side; it is a day of its own or the second morning of an overnight stay. Arrive early for the light on the white cliffs and to have the steps before the heat, and be off the beaches by noon. For how the two sides compare, see [west or east](/indonesia/nusa-penida/nusa-penida-west-vs-east); for whether to stay, [day trip or overnight](/indonesia/nusa-penida/nusa-penida-day-trip-or-overnight); and for the west side's own cliff, the [Kelingking guide](/indonesia/nusa-penida/kelingking-beach-guide).",
            tourCard: {
              slug: "kelingking-and-tembeling-beach-tour-in-nusa-penida",
              title: "Kelingking and Tembeling Beach Tour in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 99.18",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kelingking-and-tembeling-beach-tour-in-nusa-penida/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Can you swim at Diamond Beach?", a: "Not safely. The shore break is strong, there is no lifeguard and the currents beyond it are dangerous. Go down for the cliff and the view; paddle at the edge at most." },
          { q: "How do you get down to Diamond Beach?", a: "By a staircase cut into the cliff in 2018, ten to fifteen minutes down and a little more up. It is steep but has handrails on most sections." },
          { q: "Is Atuh Beach next to Diamond Beach?", a: "Yes, on the other side of the same headland, with its own steps from the same car park. Atuh is larger, more sheltered and has warungs." },
          { q: "Can I see Diamond Beach on a day trip from Bali?", a: "Only on a dedicated east-side day. Standard day trips do the west side; the east is an hour and a half from the harbour and needs its own day or an overnight." },
        ],
      };

    case "broken-beach-angels-billabong-guide":
      return {
        title: "Broken Beach and Angel's Billabong: The Arch, the Tide Pool, and the Tide That Decides Whether You Swim",
        seoTitle: "Broken Beach & Angel's Billabong Guide 2026",
        description: "What the two sites next to each other on Nusa Penida's west coast are, why Angel's Billabong is safe at one tide and dangerous at the other, and how they fit with Kelingking.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida/img0/1600.webp",
        fastFacts: [
          { icon: "landmark", label: "Broken Beach", value: "Collapsed sea cave leaving a natural arch; no way down" },
          { icon: "droplet", label: "Angel's Billabong", value: "Tide pool at the cliff foot; swim at low tide only" },
          { icon: "map", label: "Together", value: "Five minutes apart, same car park" },
          { icon: "clock", label: "Time", value: "30 to 45 minutes for both" },
          { icon: "car", label: "From Kelingking", value: "About 20 minutes" },
          { icon: "shield", label: "Danger", value: "Waves over the pool lip at high tide and in swell" },
        ],
        sections: [
          {
            title: "Broken Beach",
            icon: "landmark",
            content: "Pasih Uug, Broken Beach, is a circular cove on Nusa Penida's west coast where the roof of a sea cave fell in, leaving a bowl of cliff around a beach that the sea reaches through a natural arch in the wall. You walk around the rim of the bowl, look down at the beach and the turquoise water inside, and watch the swell push through the arch. There is no path down and no swimming; it is a viewpoint, a fine one, and it takes twenty minutes including the walk around. Manta rays are sometimes seen from the rim in the water below.",
            tourCard: {
              slug: "kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida",
              title: "Kelingking Beach, Broken Beach and Sunset Dinner in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 43.64",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "Angel's Billabong",
            icon: "droplet",
            content: "Five minutes on foot from Broken Beach, Angel's Billabong is a natural pool in the rock at the bottom of the cliff, filled by the sea at high tide and left as a clear green basin at low tide, with the open sea beyond a lip of rock. At low tide on a calm day people climb down and swim in it, and it is as good as it looks. At high tide, and at any tide when there is swell, waves come over the lip into the pool and have carried people out; there have been deaths here. The rule is simple: swim only at low tide in calm sea, stay away from the lip, and if the water is moving, look and leave.",
            tourCard: {
              slug: "tembeling-beach-and-forest-kelingking-beach-broken-in-nusa-penida",
              title: "Tembeling beach and forest, kelingking beach broken in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 74.52",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tembeling-beach-and-forest-kelingking-beach-broken-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "Reading the tide",
            icon: "clock",
            content: "Your driver will know the tide, and the warungs at the car park will tell you; there are also signs. Low tide falls at a different hour each day, so whether you swim is a matter of which day you come, not of planning. In the dry season, April to October, the sea is generally calmer; in the wet season the south-westerly swell makes the pool unsafe on more days. Do not let a photograph of someone else in the pool decide it for you.",
            tourCard: {
              slug: "island-beach-highlights-swim-and-hike-tour-in-nusa-penida",
              title: "Island Beach Highlights Swim and Hike Tour in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 37.77",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/island-beach-highlights-swim-and-hike-tour-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "With Kelingking",
            icon: "map",
            content: "These two sit twenty minutes from Kelingking and the three make up the standard west-side circuit, usually in the order Kelingking first for the light, then Broken Beach and Angel's Billabong, then Crystal Bay for a swim and lunch. See the [Kelingking guide](/indonesia/nusa-penida/kelingking-beach-guide) and the [Crystal Bay guide](/indonesia/nusa-penida/crystal-bay-guide); for how the west compares with the east, [west or east](/indonesia/nusa-penida/nusa-penida-west-vs-east).",
            tourCard: {
              slug: "kelingking-and-tembeling-beach-tour-in-nusa-penida",
              title: "Kelingking and Tembeling Beach Tour in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 99.18",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kelingking-and-tembeling-beach-tour-in-nusa-penida/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Can you swim at Angel's Billabong?", a: "Only at low tide in a calm sea. At high tide and in swell, waves come over the rock lip into the pool and have swept people out. Ask your driver about the tide and look before you climb down." },
          { q: "Can you go down to Broken Beach?", a: "No. There is no path to the beach inside the arch. It is viewed from the rim, which takes about twenty minutes to walk around." },
          { q: "How far is Broken Beach from Kelingking?", a: "About twenty minutes by car. Angel's Billabong is a five-minute walk from Broken Beach." },
          { q: "When is the sea calmest at Angel's Billabong?", a: "In the dry season, April to October, and at low tide. Wet-season swell makes the pool unsafe on many days." },
        ],
      };

    case "crystal-bay-guide":
      return {
        title: "Crystal Bay: The Swim, the Snorkel from the Beach, the Sunfish Season, and the Current",
        seoTitle: "Crystal Bay Nusa Penida Guide 2026",
        description: "Nusa Penida's easiest beach, what you see snorkelling straight off the sand, why divers come for the mola mola from July to October, and where the current runs.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida/img0/1600.webp",
        fastFacts: [
          { icon: "droplet", label: "Swim", value: "The calmest beach on Penida's west side" },
          { icon: "fish", label: "Snorkel", value: "Reef off the beach; boat trips go to the outer bay" },
          { icon: "sun", label: "Sunset", value: "West-facing; the best on the island" },
          { icon: "calendar", label: "Mola mola", value: "July to October, at depth, for divers" },
          { icon: "shield", label: "Current", value: "Strong outside the bay; stay inside the headlands" },
          { icon: "map", label: "From the harbour", value: "About 30 minutes" },
        ],
        sections: [
          {
            title: "The beach",
            icon: "sun",
            content: "Crystal Bay is a horseshoe of white sand on Nusa Penida's west coast, framed by two headlands with a small rock island in the mouth, and it is the one beach on the island where you can simply walk in and swim. Coconut palms, a few warungs with loungers, and the sun setting straight out of the bay make it the natural end to a west-side day. It is the busiest beach on Penida by mid-afternoon, which on Penida still means a few hundred people.",
            tourCard: {
              slug: "kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida",
              title: "Kelingking Beach, Broken Beach and Sunset Dinner in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 43.64",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "Snorkelling",
            icon: "fish",
            content: "Off the beach to the sides of the bay there is coral in two to six metres with the usual reef fish, and it is worth a mask for an hour at mid to high tide. The snorkelling boats that run the west coast use the outer bay as one of their three stops with Manta Point and Gamat Bay, where the coral is better and the water clearer. The current outside the headlands is strong and runs along the coast; snorkellers who drift out of the bay get into trouble, so stay inside the line of the headlands unless you are with a boat.",
            tourCard: {
              slug: "manta-point-and-gamat-bay-snorkeling-tour-in-nusa-penida",
              title: "Manta Point and Gamat Bay Snorkeling Tour in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 15.26",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/manta-point-and-gamat-bay-snorkeling-tour-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "The sunfish",
            icon: "calendar",
            content: "Crystal Bay is one of the few places in the world where the oceanic sunfish, mola mola, can be seen with some reliability. Between July and October, cold water wells up from the deep channel and the fish, which can be two metres across, rise to cleaning stations on the reef wall at 20 to 40 metres. It is a dive, not a snorkel, the water at depth can be 18 to 20°C, and the current on the wall is serious; it is for certified divers with an operator who knows the site. Dive days from Bali and Penida run to it through the season; see the [manta and snorkelling guide](/indonesia/nusa-penida/nusa-penida-manta-snorkelling-guide) for the boats.",
            tourCard: {
              slug: "manta-point-snorkel-boat-and-west-coast-tour-in-nusa-penida",
              title: "Manta Point Snorkel Boat and West Coast Tour in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 37.38",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/manta-point-snorkel-boat-and-west-coast-tour-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "Practical",
            icon: "map",
            content: "Thirty minutes from the harbour and twenty from Kelingking, so it closes the west-side loop; the standard day arrives here at about 2:00 for a swim and lunch. There is a small parking fee and the warungs rent loungers. Sunset is at about 6:15 and the last boats from the harbour leave earlier, so day-trippers see the afternoon, not the sunset; that is one of the arguments in the [day trip or overnight guide](/indonesia/nusa-penida/nusa-penida-day-trip-or-overnight).",
            tourCard: {
              slug: "nusa-penida-3-spot-manta-bay-snorkel-with-gopro",
              title: "Nusa Penida 3-Spot Manta Bay Snorkel with GoPro",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 38.14",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/nusa-penida-3-spot-manta-bay-snorkel-with-gopro/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is Crystal Bay safe for swimming?", a: "Inside the bay, yes; it is the calmest beach on Nusa Penida. The current outside the headlands is strong, so do not swim or snorkel beyond them." },
          { q: "Can you snorkel from the beach at Crystal Bay?", a: "Yes, there is coral off both sides of the bay in shallow water. The boat stops in the outer bay are better." },
          { q: "When can you see mola mola at Crystal Bay?", a: "July to October, on the reef wall at 20 to 40 metres. It is a dive for certified divers with an experienced operator, not a snorkel." },
          { q: "How far is Crystal Bay from Kelingking?", a: "About twenty minutes by car. It is usually the last stop of a west-side day, for a swim and lunch." },
        ],
      };

    case "nusa-lembongan-vs-nusa-penida":
      return {
        title: "Nusa Lembongan or Nusa Penida: Which Island for a Day, and Which for a Stay",
        seoTitle: "Nusa Lembongan vs Nusa Penida 2026",
        description: "The two islands off Bali's coast compared honestly: what each has, how they feel, the boats, and who should choose which.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/nusa-penida-journey-to-atuh-diamond-beach-and-tree-house-tour-nusa-penida/img0/1600.webp",
        fastFacts: [
          { icon: "ship", label: "Lembongan", value: "30 minutes from Sanur; small, flat, easy" },
          { icon: "ship", label: "Penida", value: "30 to 45 minutes from Sanur; big, rough, dramatic" },
          { icon: "map", label: "Between them", value: "A 10-minute boat, or the Yellow Bridge to Ceningan" },
          { icon: "droplet", label: "Snorkel", value: "Both reach Manta Point; Lembongan has Mangrove Point" },
          { icon: "bed", label: "Stay", value: "Lembongan for comfort, Penida for the sights" },
          { icon: "clock", label: "Both", value: "Two nights on Lembongan with a Penida day is the classic" },
        ],
        sections: [
          {
            title: "Two different islands",
            icon: "map",
            content: "Nusa Lembongan is eight square kilometres, flat enough to cycle, with a village, a strip of guesthouses and villas above Jungutbatu beach, mangroves on one side and cliffs on the other, and a bridge to tiny Nusa Ceningan. Nusa Penida is 200 square kilometres of limestone with cliffs on three sides, a handful of villages, roads that are still being built, and the sights that made it famous: Kelingking, Broken Beach, Diamond Beach, Manta Point. Lembongan is a place to stay; Penida is a place to see. They are twenty minutes apart by boat and most people, given the time, do both.",
            tourCard: {
              slug: "nusa-penida-journey-to-atuh-diamond-beach-and-tree-house-tour-nusa-penida",
              title: "Nusa Penida Journey to Atuh Diamond Beach and Tree House Tour (Nusa Penida)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 117.00",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/nusa-penida-journey-to-atuh-diamond-beach-and-tree-house-tour-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "What each has",
            icon: "droplet",
            content: "Lembongan: Devil's Tear, where the swell explodes through a rock shelf; Dream Beach and Sandy Bay; the mangrove channels by small boat; Mangrove Point drift snorkelling; the Yellow Bridge and Ceningan's Blue Lagoon; a surf break off Jungutbatu; and enough restaurants and bars for an evening. Penida: the cliffs and beaches of the [west](/indonesia/nusa-penida/kelingking-beach-guide) and [east](/indonesia/nusa-penida/diamond-beach-and-atuh-guide), Crystal Bay, the mantas, and quiet. Both islands' snorkelling boats go to Manta Point, and a Lembongan boat reaches it in twenty minutes.",
            tourCard: {
              slug: "nusa-lembongan-and-ceningan-ultimate-scooter-island-adventure-nusa-penida",
              title: "Nusa Lembongan and Ceningan: Ultimate Scooter Island Adventure (Nusa Penida)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 76.28",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/nusa-lembongan-and-ceningan-ultimate-scooter-island-adventure-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "Who should choose which",
            icon: "users",
            content: "A day trip from Bali: Penida, for Kelingking; nothing on Lembongan is a reason for a thirteen-hour day. One night: Penida, to do both sides. Two or three nights, with children, or wanting a pool and a good dinner at the end of the day: Lembongan, with a day trip across to Penida's west side by boat and car, which every Lembongan hotel arranges. Divers: either; the sites are shared. People who want the wild, empty coast: Penida, and go east.",
            tourCard: {
              slug: "nusa-lembongan-and-ceningan-island-day-tour",
              title: "Nusa Lembongan and Ceningan Island Day Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 135.80",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/nusa-lembongan-and-ceningan-island-day-tour/img0/1600.webp",
            },
          },
          {
            title: "Boats",
            icon: "ship",
            content: "Fast boats from Sanur serve both, 30 minutes to Lembongan and 30 to 45 to Penida, with the first departures around 7:00; Padang Bai also serves Penida. Between the islands, public boats cross in ten minutes from Lembongan's Jungutbatu to Penida's Toyapakeh several times a day, and hotels charter them. In a big swell both crossings are cancelled, more often in the wet season. Details on harbours and check-in are in [getting to Nusa Penida](/indonesia/nusa-penida/getting-to-nusa-penida).",
            tourCard: {
              slug: "nusa-lembongan-island-tour-with-lunch-and-transfers",
              title: "Nusa Lembongan Island Tour with Lunch and Transfers",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 87.74",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/nusa-lembongan-island-tour-with-lunch-and-transfers/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is Nusa Lembongan or Nusa Penida better?", a: "Penida for the sights, Lembongan for the stay. A day trip should be Penida; two or three nights are better spent on Lembongan with a day across to Penida." },
          { q: "How far apart are Nusa Lembongan and Nusa Penida?", a: "A ten-minute public boat between Jungutbatu on Lembongan and Toyapakeh on Penida, several times a day." },
          { q: "Can you see manta rays from Nusa Lembongan?", a: "Yes. Snorkelling boats from Lembongan reach Manta Point on Penida's south coast in about twenty minutes." },
          { q: "Which island is better for families?", a: "Lembongan: flat, small, with pools, calm beaches and restaurants. Penida's sights involve cliffs, steps and long drives." },
        ],
      };

    case "nusa-penida-2-day-itinerary":
      return {
        title: "Nusa Penida in Two Days: West Side, East Side, Mantas, and Where to Sleep",
        seoTitle: "Nusa Penida 2 Day Itinerary 2026",
        description: "A realistic two-day plan for Nusa Penida with one night on the island: the west side on arrival, the mantas and the east on day two, and the boat home.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida/img0/1600.webp",
        fastFacts: [
          { icon: "ship", label: "Day 1", value: "7:00 boat from Sanur; west side by car" },
          { icon: "sun", label: "Night", value: "Crystal Bay sunset; sleep near the harbour or the west" },
          { icon: "droplet", label: "Day 2", value: "Manta boat at 8:00, then the east side" },
          { icon: "ship", label: "Home", value: "Boat back at about 3:30 to 4:00" },
          { icon: "car", label: "Transport", value: "Car and driver both days; scooters only for the confident" },
          { icon: "ticket", label: "Budget", value: "Simple guesthouses; cash for everything" },
        ],
        sections: [
          {
            title: "Day one: the west",
            icon: "car",
            content: "Take the first boat from Sanur at about 7:00 and have a car and driver waiting at the harbour; every guesthouse arranges one. Kelingking first, by 9:00, for the light on the cliff and before the queue at the viewpoint; go down to the beach only if you have the legs and the time, and count on two hours if you do. Broken Beach and Angel's Billabong next, with the tide deciding the swim. Crystal Bay for lunch, an hour in the water, and the sunset, which day-trippers never see. Sleep in a guesthouse near Crystal Bay or the harbour villages; the island's accommodation is simple and the good places book out in high season.",
            tourCard: {
              slug: "kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida",
              title: "Kelingking Beach, Broken Beach and Sunset Dinner in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 43.64",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kelingking-beach-broken-beach-and-sunset-dinner-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "Day two: mantas and the east",
            icon: "droplet",
            content: "A snorkelling boat from the harbour at about 8:00 runs Manta Point, Gamat Bay and Crystal Bay's outer reef in three hours; the mantas are there year-round and the boat skips the point only if the swell is up. Back on land by 11:30, the car heads east: an hour and a half to Diamond Beach and Atuh, the steps down and up, the Thousand Islands viewpoint and the tree house, and back to the harbour for a boat at 3:30 or 4:00. It is a long second day and it is the one that shows you the island the day trips miss.",
            tourCard: {
              slug: "nusa-penida-journey-to-atuh-diamond-beach-and-tree-house-tour-nusa-penida",
              title: "Nusa Penida Journey to Atuh Diamond Beach and Tree House Tour (Nusa Penida)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 117.00",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/nusa-penida-journey-to-atuh-diamond-beach-and-tree-house-tour-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "Alternatives",
            icon: "map",
            content: "If the sea is rough and the manta boat is cancelled, do the east in the morning instead and take a later boat. If two days feel like too much driving, drop the east side, snorkel on day two and spend the afternoon at Crystal Bay again; nobody regrets that. With a third day, cross to Nusa Lembongan for the mangroves and Devil's Tear and take the boat to Sanur from there; see [Lembongan vs Penida](/indonesia/nusa-penida/nusa-lembongan-vs-nusa-penida).",
            tourCard: {
              slug: "tembeling-beach-and-forest-kelingking-beach-broken-in-nusa-penida",
              title: "Tembeling beach and forest, kelingking beach broken in Nusa Penida",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 74.52",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tembeling-beach-and-forest-kelingking-beach-broken-in-nusa-penida/img0/1600.webp",
            },
          },
          {
            title: "Practical",
            icon: "shield",
            content: "Bring cash; ATMs on Penida fail often and most warungs and drivers do not take cards. Book the car and driver through your guesthouse for both days, fix the price in advance, and give them the plan. The roads are narrow and the driving is slow, so a scooter is only for people who ride daily at home. Sun cover, reef-safe sunscreen and shoes with grip for the steps. For the individual sites, see the [Kelingking](/indonesia/nusa-penida/kelingking-beach-guide), [Broken Beach](/indonesia/nusa-penida/broken-beach-angels-billabong-guide), [Crystal Bay](/indonesia/nusa-penida/crystal-bay-guide) and [Diamond Beach](/indonesia/nusa-penida/diamond-beach-and-atuh-guide) guides, and [getting to Nusa Penida](/indonesia/nusa-penida/getting-to-nusa-penida) for the boats.",
            tourCard: {
              slug: "3-days-nusa-penida-tour-west-east-and-nusa-lembongan-nusa-penida",
              title: "3 Days Nusa Penida Tour: West, East and Nusa Lembongan (Nusa Penida)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 226.95",
              duration: "3 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/3-days-nusa-penida-tour-west-east-and-nusa-lembongan-nusa-penida/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is two days enough for Nusa Penida?", a: "Yes: the west side on day one with a Crystal Bay sunset, the manta snorkel and the east side on day two, and the afternoon boat home. It covers everything the island is known for." },
          { q: "Where should I stay on Nusa Penida?", a: "Near Crystal Bay or the harbour villages on the north-west coast, which keeps both days' driving shortest. Accommodation is simple; book ahead in high season." },
          { q: "Can you do mantas and the east side in one day?", a: "Yes: a three-hour snorkelling boat from 8:00, then the drive east from about 11:30, and the boat home at 3:30 to 4:00. It is a long day." },
          { q: "Do I need a driver on Nusa Penida?", a: "Yes unless you ride a scooter daily at home. The roads are narrow and poor. Guesthouses arrange a car and driver for a fixed daily price." },
        ],
      };

    default:
      return null;
  }
}
