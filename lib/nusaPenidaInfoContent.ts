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

    default:
      return null;
  }
}
