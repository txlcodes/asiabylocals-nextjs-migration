// Uluwatu authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getUluwatuInfoContent() -> getCityInfoContent().
// Tour cards are added after the Bali import lands and the slugs exist.
import type { CityInfoData } from './cityInfoContent';

const IMG = '/bali-hero.webp';

export function getUluwatuInfoContent(slug: string): CityInfoData | null {
  switch (slug) {

    case "uluwatu-temple-kecak-guide":
      return {
        title: "Uluwatu Temple and the Kecak Fire Dance: Timing, Seats, and the Monkeys on the Cliff",
        seoTitle: "Uluwatu Temple & Kecak Dance Guide 2026",
        description: "How the sunset performance works, when to arrive for a seat that faces the sun, what the dance is actually telling, and the monkeys that take glasses.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/uluwatu-temple-tour-with-sunset-kecak-fire-dance/img0/1600.webp",
        fastFacts: [
          { icon: "clock", label: "Kecak", value: "Daily at sunset, about 6pm; arrive by 5 for a good seat" },
          { icon: "ticket", label: "Tickets", value: "Temple entry and the dance are separate; sarong included with entry" },
          { icon: "mountain", label: "The cliff", value: "About 70 m straight down to the sea; the walkway runs along the edge" },
          { icon: "alert", label: "Monkeys", value: "Take sunglasses, hats and phones; keep everything zipped" },
          { icon: "users", label: "Crowd", value: "Several hundred at the dance every evening; larger in high season" },
        ],
        sections: [
          {
            title: "Uluwatu Temple and the Kecak Fire Dance: Timing, Seats, and the Monkeys on the Cliff",
            icon: "landmark",
            content: "Pura Luhur Uluwatu is one of Bali's six directional temples, set on the very tip of the Bukit peninsula on a cliff seventy metres above the Indian Ocean. The temple itself is small and closed to non-worshippers; what you come for is the clifftop walk, the view down the coast, and the Kecak performance in the open-air amphitheatre next to it as the sun goes into the sea.\n\nIt is one of the most reliably good evenings on the island, and it is also one where a little planning makes a large difference.",
            tourCard: {
              slug: "uluwatu-temple-tour-with-sunset-kecak-fire-dance",
              title: "Uluwatu Temple Tour with Sunset Kecak Fire Dance",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 22.50",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/uluwatu-temple-tour-with-sunset-kecak-fire-dance/img0/1600.webp",
            },
          },
          {
            title: "The Kecak, and what you are watching",
            icon: "music",
            content: "The Kecak is a chorus of fifty or more men sitting in concentric rings, chanting a rhythmic 'cak' in interlocking patterns with no instruments, while dancers act out an episode from the Ramayana: Rama, Sita, the golden deer, the demon king Ravana, and Hanuman's monkey army setting fire to Lanka. The fire at the end is real, and Hanuman kicks it around the arena.\n\nThe form is Balinese but the staging as a tourist performance dates from the 1930s. That does not make it less worth seeing; the chant with the sun going down behind it is a genuinely strange and stirring hour.\n\nThe performance runs about an hour and starts around six, timed to the sunset. Tickets are sold at the amphitheatre entrance and are separate from temple entry; on busy evenings they sell out, which is one reason the tours here include them.",
            tourCard: {
              slug: "uluwatu-temple-sunset-tour-with-kecak-fire-dance",
              title: "Uluwatu Temple Sunset Tour with Kecak Fire Dance",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 97.27",
              duration: "6 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/uluwatu-temple-sunset-tour-with-kecak-fire-dance/img0/1600.webp",
            },
          },
          {
            title: "Where to sit and when to arrive",
            icon: "clock",
            content: "The amphitheatre is a semicircle of stone tiers with the sea and the sunset behind the stage. The seats on the left as you enter, on the north side, face the sun and the cliff; the right side faces the performers with the sunset out of frame. Left side, high up, is where you want to be, and those seats go first.\n\nBe through the temple gate by half past four, walk the cliff path while the light is good, and be in the amphitheatre by five. In July and August, earlier.",
            tourCard: {
              slug: "surfing-class-tanah-lot-and-kecak-dance-sunset-tour",
              title: "Surfing Class, Tanah Lot and Kecak Dance Sunset Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 76.32",
              duration: "7 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/surfing-class-tanah-lot-and-kecak-dance-sunset-tour/img0/1600.webp",
            },
          },
          {
            title: "The monkeys",
            icon: "alert",
            content: "The temple's macaques have learned that sunglasses, hats and phones can be traded back for food, and they take them off people's heads with real skill. Glasses go in a zipped bag before you pass the gate; hats come off; phones are held with two hands or not at all. Do not feed them, do not tease them, and if one takes something, a temple attendant with a banana is the way to get it back, not a chase.",
            tourCard: {
              slug: "uluwatu-temple-naughty-monkeys-and-beaches-tour-with-pickup",
              title: "Uluwatu Temple, Naughty Monkeys, and Beaches Tour with Pickup",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 64.84",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/uluwatu-temple-naughty-monkeys-and-beaches-tour-with-pickup/img0/1600.webp",
            },
          },
          {
            title: "Dress and entry",
            icon: "shirt",
            content: "A sarong and sash are required and provided with the entry ticket. Shoulders covered. The inner temple is for Hindu worshippers, and the walkway along the cliff, the outer courtyards and the amphitheatre are open to everyone.\n\nThe tours listed on this site for Uluwatu pair the temple and dance with an afternoon at one of the cliff beaches and a driver who knows the parking, which at sunset is the other thing worth having sorted.",
            tourCard: {
              slug: "kecak-fire-dance-show-and-uluwatu-temple-entry-ticket",
              title: "Kecak Fire Dance Show and Uluwatu Temple Entry Ticket",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 29.37",
              duration: "1 hour",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kecak-fire-dance-show-and-uluwatu-temple-entry-ticket/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "What time is the Kecak dance at Uluwatu?", a: "Around six in the evening, daily, timed to sunset. Arrive at the amphitheatre by five for a seat on the left side that faces the sun." },
          { q: "How much is the Uluwatu Kecak dance?", a: "The dance ticket is separate from temple entry and sold at the amphitheatre. Both together are a modest sum in rupiah; on busy evenings the dance sells out, which is why tours include it." },
          { q: "Are the monkeys at Uluwatu dangerous?", a: "They are thieves rather than attackers. They take sunglasses, hats and phones. Keep everything zipped away before the gate and do not feed or tease them." },
          { q: "Can you go inside Uluwatu temple?", a: "The inner temple is for worshippers only. The clifftop walkway, outer courtyards and amphitheatre are open with a ticket, and a sarong is provided." },
        ],
      };

    case "uluwatu-beaches-guide":
      return {
        title: "Uluwatu's Cliff Beaches: Padang Padang, Bingin, Suluban, Balangan and the Tide That Hides Them",
        seoTitle: "Uluwatu Beaches Guide 2026",
        description: "Which cove suits swimming, which is for surfers, how many steps each one costs you, and why the same beach can be sand at 9am and gone by noon.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/turtle-island-melasti-beach-uluwatu-and-kecak-sunset/img0/1600.webp",
        fastFacts: [
          { icon: "waves", label: "Swimming", value: "Padang Padang and Balangan at mid to high tide; Bingin at high tide" },
          { icon: "waves", label: "Surf", value: "Uluwatu, Padang Padang, Bingin, Impossibles: reef breaks for experienced surfers" },
          { icon: "footprints", label: "Access", value: "Cliff stairs at every beach; 100 to 200 steps is typical" },
          { icon: "clock", label: "Tide", value: "Several beaches all but disappear at high tide; check before you climb down" },
          { icon: "sun", label: "Shade", value: "Little to none; warungs on the sand rent umbrellas" },
        ],
        sections: [
          {
            title: "Uluwatu's Cliff Beaches: Padang Padang, Bingin, Suluban, Balangan and the Tide That Hides Them",
            icon: "waves",
            content: "The Bukit peninsula is a limestone plateau with its edges eaten into coves, and the beaches are at the bottom of the cliffs: small, white-sand, reached by staircases cut into the rock, and utterly unlike the long black-sand surf beaches further north. They are the most beautiful beaches on the mainland of Bali and the ones with the most conditions attached.\n\nThe biggest condition is the tide. Several of these coves are wide sand at low tide and a strip of rock and foam at high; the reef that makes the surf famous is also what makes a wrong-time swim dangerous.",
            tourCard: {
              slug: "turtle-island-melasti-beach-uluwatu-and-kecak-sunset",
              title: "Turtle Island, Melasti Beach, Uluwatu and Kecak Sunset",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 106.81",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/turtle-island-melasti-beach-uluwatu-and-kecak-sunset/img0/1600.webp",
            },
          },
          {
            title: "Padang Padang",
            icon: "waves",
            content: "The famous one, reached through a narrow cleft in the rock and down a staircase past macaques. Small, sheltered, sandy, and swimmable at mid to high tide when the water over the reef is deep enough. At low tide the reef is exposed and it is a rock pool. It is also a world-class surf break in the dry season, with a left-hander that draws professionals, and on those days the beach is a spectator stand.\n\nIt gets full. Go early, or in the last two hours of light.",
            tourCard: {
              slug: "gwk-park-dreamland-beach-and-melasti-sunset-kecak-tour-in-uluwatu",
              title: "GWK Park, Dreamland Beach, and Melasti Sunset Kecak Tour in Uluwatu",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 90.78",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/gwk-park-dreamland-beach-and-melasti-sunset-kecak-tour-in-uluwatu/img0/1600.webp",
            },
          },
          {
            title: "Bingin and Suluban",
            icon: "waves",
            content: "Bingin is a long, steep staircase down through a cluster of cliffside guesthouses and warungs to a narrow beach with a reef break in front of it. At high tide there is almost no sand and the swimming is between waves; at low tide it is a shelf of rock. It is a surfers' beach that happens to be lovely to sit above with a drink.\n\nSuluban, under the cliffs near the temple, is the Uluwatu surf break's beach: a cave passage down to a sliver of sand that vanishes at high tide, and the best place on the island to watch serious surfing from the cliff bars above.",
            tourCard: {
              slug: "uluwatu-sunset-magic-kecak-padang-padang-cliff-and-dinner-uluwatu",
              title: "Uluwatu Sunset Magic: Kecak, Padang Padang Cliff and Dinner (Uluwatu)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 75.53",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/uluwatu-sunset-magic-kecak-padang-padang-cliff-and-dinner-uluwatu/img0/1600.webp",
            },
          },
          {
            title: "Balangan and Melasti",
            icon: "sun",
            content: "Balangan is the swimmer's answer: longer, wider and sandier than the others, with a gentler reef, warungs with sunbeds, and a cliff viewpoint at the north end that is one of the peninsula's best. Mid to high tide for swimming.\n\nMelasti, on the south coast of the Bukit, is reached by a road cut down through the cliff rather than stairs, which makes it the accessible choice, and its wide sand and clear shallows at low tide suit families. It has beach clubs now and a fee at the road.",
            tourCard: {
              slug: "beaches-uluwatu-sunset-kecak-and-romantic-beach-dinner",
              title: "Beaches, Uluwatu, Sunset Kecak and Romantic Beach Dinner",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 118.30",
              duration: "7 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/beaches-uluwatu-sunset-kecak-and-romantic-beach-dinner/img0/1600.webp",
            },
          },
          {
            title: "Practicalities",
            icon: "footprints",
            content: "Every beach except Melasti is a staircase, and climbing back up at three in the afternoon in full sun is the part people forget. Carry water down. Shade on the sand is rented from the warungs. Reef shoes are worth having anywhere you will walk in the water at low tide.\n\nCheck the tide before you commit to a cove, or let a driver who knows the peninsula choose the beach for the hour; the tours listed here for Uluwatu are built that way.",
            tourCard: {
              slug: "padang-padang-beach-uluwatu-temple-and-kecak-dance-tour",
              title: "Padang Padang Beach, Uluwatu Temple and Kecak Dance Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 30.90",
              duration: "2.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/padang-padang-beach-uluwatu-temple-and-kecak-dance-tour/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Which Uluwatu beach is best for swimming?", a: "Balangan at mid to high tide, or Melasti at low tide for calm shallows. Padang Padang is swimmable at mid to high tide when the reef is covered." },
          { q: "Can you swim at Padang Padang?", a: "At mid to high tide, yes, in the sheltered cove. At low tide the reef is exposed and it is not a swimming beach. In dry-season surf it is a spectator beach." },
          { q: "How many steps down to Bingin beach?", a: "A long, steep descent through the cliffside guesthouses, on the order of a couple of hundred steps. The climb back up in the afternoon heat is the hard part." },
          { q: "Is Uluwatu beach the same as Uluwatu temple?", a: "No. The temple is on the cliff at the tip of the peninsula. Suluban, below the surf bars near it, is the beach usually meant by 'Uluwatu beach', and it is a surf break with very little sand at high tide." },
        ],
      };

    case "uluwatu-surf-guide":
      return {
        title: "Surfing Uluwatu: Reef Breaks for People Who Already Surf, and What Beginners Should Do Instead",
        seoTitle: "Uluwatu Surf Guide 2026",
        description: "The breaks along the Bukit, why they are not for learning, the dry-season swell, and where a beginner on this side of the island should actually go.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/beginner-and-intermediate-surf-lesson-with-equipment-in-uluwatu/img0/1600.webp",
        fastFacts: [
          { icon: "waves", label: "The breaks", value: "Uluwatu, Padang Padang, Impossibles, Bingin, Dreamland, Balangan" },
          { icon: "alert", label: "Bottom", value: "Sharp limestone reef at every one; wax, booties, and know the tide" },
          { icon: "sun", label: "Season", value: "Dry season, April to October, for the classic left-hand reef waves" },
          { icon: "users", label: "Beginners", value: "Not here. Lessons happen at Kuta, Legian, Seminyak or Canggu" },
          { icon: "compass", label: "Access", value: "Cliff stairs and caves; a boat is used at Uluwatu on big days" },
        ],
        sections: [
          {
            title: "Surfing Uluwatu: Reef Breaks for People Who Already Surf, and What Beginners Should Do Instead",
            icon: "waves",
            content: "The Bukit's west coast is one of the world's great stretches of surf: a chain of left-hand reef breaks facing the dry-season swell from the Indian Ocean, from the long walls of Uluwatu itself through Padang Padang's barrel to the friendlier reefs at Dreamland and Balangan. It is why the peninsula has a surf town on it at all.\n\nIt is also, without exception, reef. Every wave here breaks over sharp limestone, the paddle-outs are through caves and channels, and the crowd is experienced and international. This page is honest about who it is for.",
            tourCard: {
              slug: "beginner-and-intermediate-surf-lesson-with-equipment-in-uluwatu",
              title: "Beginner and Intermediate Surf Lesson with Equipment in Uluwatu",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 45.01",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/beginner-and-intermediate-surf-lesson-with-equipment-in-uluwatu/img0/1600.webp",
            },
          },
          {
            title: "The breaks, roughly north to south",
            icon: "map",
            content: "Balangan and Dreamland are the softer end: reef breaks that work at smaller sizes and take an intermediate surfer who can already read a wave. Bingin is a short, mechanical, hollow left that photographs beautifully and closes out on the reef if you are late. Impossibles is a long, fast wall between Bingin and Padang Padang that lives up to the name when it is big.\n\nPadang Padang is the famous barrel, a tube over shallow reef that only works on a real swell and is contested by very good surfers when it does. Uluwatu, under the temple cliff, is a set of breaks from the Peak down to Racetracks that hold everything from head-high to well overhead and have a paddle-out through a sea cave.",
            tourCard: {
              slug: "bali-cruise-private-customizable-shore-excursion-north-and-south-uluwatu",
              title: "Bali Cruise Private Customizable Shore Excursion North and South (Uluwatu)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 110.62",
              duration: "6 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/bali-cruise-private-customizable-shore-excursion-north-and-south-uluwatu/img0/1600.webp",
            },
          },
          {
            title: "Season and tide",
            icon: "sun",
            content: "April to October is the season, with the largest and most consistent swells from June to September. Mornings are offshore and clean; afternoons pick up wind. The wet season has surf, smaller and less reliable, and the east coast of the island takes over as the wind switches.\n\nTide changes everything on reef. Low tide exposes rock at Bingin and Padang Padang and makes Uluwatu's inside section unrideable; mid tide is the usual window. Ask at the board shops on the cliff at Suluban; they know the day.",
            tourCard: {
              slug: "semi-private-surf-lesson-with-surf-photos-and-videos-in-uluwatu",
              title: "Semi Private Surf Lesson with Surf Photos and Videos in Uluwatu",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 57.21",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/semi-private-surf-lesson-with-surf-photos-and-videos-in-uluwatu/img0/1600.webp",
            },
          },
          {
            title: "If you are learning",
            icon: "users",
            content: "Do not learn here. The beach breaks with sand bottoms, lifeguards and surf schools are Kuta, Legian and Seminyak, twenty to forty minutes north, and Canggu further up the coast. That is where every school on the island teaches, and the lessons listed on this site are at those beaches for that reason.\n\nCome to Uluwatu to watch. The cliff bars above Suluban look straight down onto the Peak, and an afternoon there with the swell running is one of the best free things on the island.",
            tourCard: {
              slug: "beginner-advanced-surf-lesson-with-instructor-in-uluwatu",
              title: "Beginner-advanced Surf Lesson with Instructor in Uluwatu",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 99.18",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/beginner-advanced-surf-lesson-with-instructor-in-uluwatu/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Can beginners surf in Uluwatu?", a: "No. Every break on the Bukit is a reef break for experienced surfers. Beginners learn at the sand-bottom beaches of Kuta, Legian, Seminyak or Canggu, where the surf schools are." },
          { q: "When is surf season in Uluwatu?", a: "April to October, with the biggest and most consistent swell from June to September. Mornings are offshore." },
          { q: "What is the best surf break in Uluwatu?", a: "Uluwatu itself, under the temple, for length and size; Padang Padang for the barrel on a big swell; Balangan and Dreamland for intermediate surfers." },
          { q: "Do you need reef boots in Uluwatu?", a: "They are strongly advised. Every break is over sharp limestone and the walk-outs at low tide are across it." },
        ],
      };

    case "best-time-to-visit-uluwatu":
      return {
        title: "Best Time to Visit Uluwatu: Dry Season Surf, Wet Season Calm, and the Cliff Sunsets Either Way",
        seoTitle: "Best Time to Visit Uluwatu 2026",
        description: "How the Bukit's seasons differ from the rest of Bali, the swimming-versus-surf trade-off, and the March closure to book around.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/beginner-and-intermediate-surf-lesson-with-equipment-in-uluwatu/img0/1600.webp",
        fastFacts: [
          { icon: "sun", label: "Dry season", value: "April to October; big surf, clear skies, busy" },
          { icon: "umbrella", label: "Wet season", value: "November to March; calmer seas, better swimming, afternoon storms" },
          { icon: "thermometer", label: "Drier than the north", value: "The Bukit is the driest corner of the island" },
          { icon: "moon", label: "Nyepi", value: "One day in March: airport closed, everyone indoors, no lights" },
          { icon: "sun", label: "Sunset", value: "Faces west; good all year, best with dry-season clarity" },
        ],
        sections: [
          {
            title: "Best Time to Visit Uluwatu: Dry Season Surf, Wet Season Calm, and the Cliff Sunsets Either Way",
            icon: "sun",
            content: "The Bukit peninsula is the driest part of Bali, a limestone plateau that catches less rain than the volcanic interior, so the wet-season difference here is smaller than in Ubud. What changes more through the year is the sea: the dry season brings the big swell that makes the surf famous, and the wet season brings calmer water that makes the coves swimmable.\n\nWhich is better depends on whether you are here to ride the waves or to sit in the sea beneath them.",
            tourCard: {
              slug: "beginner-and-intermediate-surf-lesson-with-equipment-in-uluwatu",
              title: "Beginner and Intermediate Surf Lesson with Equipment in Uluwatu",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 45.01",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/beginner-and-intermediate-surf-lesson-with-equipment-in-uluwatu/img0/1600.webp",
            },
          },
          {
            title: "Nyepi",
            icon: "moon",
            content: "Nyepi is the Balinese day of silence in March, on a date that moves with the lunar calendar. For twenty-four hours from six in the morning the airport closes, everyone stays inside, roads and beaches are empty, and lights and noise are forbidden. The temple, the dance and the beach clubs are all closed. The parade of ogoh-ogoh demon effigies the night before is spectacular and worth being here for; a flight timed to land on the day itself will not. Check the date before booking March.",
            tourCard: {
              slug: "semi-private-surf-lesson-with-surf-photos-and-videos-in-uluwatu",
              title: "Semi Private Surf Lesson with Surf Photos and Videos in Uluwatu",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 57.21",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/semi-private-surf-lesson-with-surf-photos-and-videos-in-uluwatu/img0/1600.webp",
            },
          },
          {
            title: "Dry season, April to October",
            icon: "sun",
            content: "Clear skies, low humidity, and the swell that draws surfers from everywhere. Sunsets at the temple are at their sharpest. The coves are for surfing and spectating rather than swimming when the sets are running, and July and August fill the peninsula's villas and the Kecak amphitheatre.\n\nMay, June and September are the best of it: same weather, more room.",
            tourCard: {
              slug: "beginner-advanced-surf-lesson-with-instructor-in-uluwatu",
              title: "Beginner-advanced Surf Lesson with Instructor in Uluwatu",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 99.18",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/beginner-advanced-surf-lesson-with-instructor-in-uluwatu/img0/1600.webp",
            },
          },
          {
            title: "Wet season, November to March",
            icon: "umbrella",
            content: "The Bukit gets afternoon storms rather than all-day rain, and fewer of them than the rest of the island. The sea calms, the coves at Padang Padang and Balangan become swimming beaches on many days, and outside the Christmas fortnight the villas and the dance are quieter and cheaper. Cloud can take the sunset some evenings; the Kecak runs regardless.",
            tourCard: {
              slug: "surf-lesson-with-local-instructor-in-uluwatu",
              title: "Surf Lesson with Local Instructor in Uluwatu",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 51.12",
              duration: "1.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/surf-lesson-with-local-instructor-in-uluwatu/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "When is the best time to visit Uluwatu?", a: "May, June or September for dry-season clarity and surf without the peak crowd. November to March if swimming in the coves matters more than surf; the seas are calmer then." },
          { q: "Does Uluwatu get much rain?", a: "Less than the rest of Bali. The Bukit is the island's driest corner. Wet-season rain comes as afternoon storms, mostly December to February." },
          { q: "Is the Kecak dance on during the wet season?", a: "Yes, daily year round, weather permitting. Cloud can hide the sunset on some wet-season evenings; the performance goes ahead." },
          { q: "Is Uluwatu open during Nyepi?", a: "No. On Nyepi, one day in March, the whole island closes for 24 hours: airport, roads, temple, beaches and businesses. The parade the evening before is worth seeing." },
        ],
      };

    case "day-trips-from-uluwatu":
      return {
        title: "Day Trips from Uluwatu: Nusa Penida by Boat, the Sea Temple Circuit, and Getting to Ubud",
        seoTitle: "Day Trips from Uluwatu 2026",
        description: "What is close to the Bukit, what is deceptively far, and the boat crossing to Nusa Penida that works better from here than from anywhere north.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/underwater-sea-walk-uluwatu-temple-and-kecak-dance/img0/1600.webp",
        fastFacts: [
          { icon: "ship", label: "Nusa Penida", value: "Sanur is 45 minutes away; the boat 45 more; the closest mainland base for it" },
          { icon: "landmark", label: "Sea temples", value: "Uluwatu is one of six; Tanah Lot is 1.5 hours north" },
          { icon: "map", label: "Ubud", value: "1.5 to 2 hours; a long day trip, better as an overnight" },
          { icon: "waves", label: "On the peninsula", value: "Beaches, the temple, Garuda Wisnu Kencana; no driving needed" },
          { icon: "car", label: "Traffic", value: "The airport bottleneck north of the Bukit adds an hour from noon on" },
        ],
        sections: [
          {
            title: "Day Trips from Uluwatu: Nusa Penida by Boat, the Sea Temple Circuit, and Getting to Ubud",
            icon: "compass",
            content: "Uluwatu is at the bottom of the island, which makes it the best mainland base for Nusa Penida and the worst for the north. Everything north of the airport passes through the same congested roads, and by midday that adds an hour to any trip. Plan the peninsula's own sights for the middle of the day and leave early for anything beyond it.",
            tourCard: {
              slug: "underwater-sea-walk-uluwatu-temple-and-kecak-dance",
              title: "Underwater Sea Walk, Uluwatu Temple, and Kecak Dance",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 30.90",
              duration: "45 minutes",
              image: "https://images.asiabylocals.com/asiabylocals/tours/underwater-sea-walk-uluwatu-temple-and-kecak-dance/img0/1600.webp",
            },
          },
          {
            title: "Nusa Penida",
            icon: "ship",
            content: "Fast boats to Penida leave from Sanur, about forty-five minutes from Uluwatu in the early morning, and the crossing is about forty-five minutes more. From the Bukit that makes a Penida day trip a ten-hour outing rather than the twelve it is from Ubud or Canggu.\n\nThe standard day covers the west of the island: Kelingking's T-rex cliff, Broken Beach, Angel's Billabong and Crystal Bay for a swim. Snorkelling trips to the manta cleaning station are the other version. The tours listed here for Penida include the transfer from the peninsula so the 6am start is someone else's driving.",
            tourCard: {
              slug: "surfing-class-tanah-lot-and-kecak-dance-sunset-tour",
              title: "Surfing Class, Tanah Lot and Kecak Dance Sunset Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 76.32",
              duration: "7 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/surfing-class-tanah-lot-and-kecak-dance-sunset-tour/img0/1600.webp",
            },
          },
          {
            title: "The peninsula itself",
            icon: "waves",
            content: "Half the point of staying in Uluwatu is that the best things are already here. A day of beaches, the temple and Kecak at sunset, and the Garuda Wisnu Kencana cultural park with its 120-metre statue needs no long drive. Jimbaran's fish grills on the sand for dinner are twenty minutes away.\n\nBuild those into the days you do not want to spend in a car.",
            tourCard: {
              slug: "bukit-peninsula-2-hour-surf-experience-at-uluwatu-beach-uluwatu",
              title: "Bukit Peninsula: 2-Hour Surf Experience at Uluwatu Beach (Uluwatu)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 41.89",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/bukit-peninsula-2-hour-surf-experience-at-uluwatu-beach-uluwatu/img0/1600.webp",
            },
          },
          {
            title: "Ubud and the interior",
            icon: "map",
            content: "Ubud is an hour and a half to two hours away, and a day trip from Uluwatu means arriving at the rice terraces and temples in the mid-morning peak and leaving before the evening calm. It can be done. A night in Ubud does it properly and lets you see the terraces at dawn, which is the whole reason to go.\n\nThe same applies to Batur: a sunrise trek from Uluwatu means a midnight pickup. Stay in Ubud the night before.",
            tourCard: {
              slug: "kecak-fire-dance-show-and-uluwatu-temple-entry-ticket",
              title: "Kecak Fire Dance Show and Uluwatu Temple Entry Ticket",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 29.37",
              duration: "1 hour",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kecak-fire-dance-show-and-uluwatu-temple-entry-ticket/img0/1600.webp",
            },
          },
          {
            title: "Tanah Lot and the west",
            icon: "landmark",
            content: "Tanah Lot, the other famous sea temple, is an hour and a half north on the west coast. The two are often paired as a 'temple day' with the Kecak at Uluwatu for the finish, and it works if you leave the Bukit by mid-morning, do Tanah Lot at low tide, and return for the dance. Check the tide; at high tide Tanah Lot is a view rather than a visit.",
            tourCard: {
              slug: "gwk-cultural-park-beach-and-sunset-temple-in-uluwatu",
              title: "GWK Cultural Park, Beach and Sunset Temple in Uluwatu",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 83.92",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/gwk-cultural-park-beach-and-sunset-temple-in-uluwatu/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "How do I get to Nusa Penida from Uluwatu?", a: "Drive to Sanur harbour, about 45 minutes early in the morning, then a 45-minute fast boat. Uluwatu is the closest mainland base for Penida; it is a ten-hour day rather than twelve from Ubud." },
          { q: "How far is Ubud from Uluwatu?", a: "An hour and a half to two hours, more in traffic through the airport area. A day trip is possible; an overnight is much better." },
          { q: "What can you do in Uluwatu without a long drive?", a: "The cliff beaches, the temple and Kecak at sunset, the GWK statue park, and Jimbaran's seafood on the sand, all within twenty minutes." },
          { q: "Can you combine Uluwatu and Tanah Lot in a day?", a: "Yes. Leave by mid-morning, visit Tanah Lot at low tide, and return to Uluwatu for the Kecak at sunset. The two are about an hour and a half apart." },
        ],
      };

    case "getting-around-uluwatu":
      return {
        title: "Getting Around Uluwatu: There Is No Centre, and That Changes Everything",
        seoTitle: "Getting Around Uluwatu 2026",
        description: "Why the Bukit needs wheels, the scooter and licence reality, what a driver day costs, and the airport run that is short in the morning and long by afternoon.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/kecak-fire-dance-show-and-uluwatu-temple-entry-ticket/img0/1600.webp",
        fastFacts: [
          { icon: "map", label: "Layout", value: "Villas, beaches and restaurants spread across a large plateau; nothing is walkable to much else" },
          { icon: "bike", label: "Scooters", value: "The local default; an international permit with a motorcycle category is required by law" },
          { icon: "car", label: "Driver day", value: "Roughly USD 40 to 60 for 8 to 10 hours, fuel included" },
          { icon: "phone", label: "Apps", value: "Work for pickups across the peninsula, with waits in the evening" },
          { icon: "plane", label: "Airport", value: "30 to 40 minutes early; over an hour from midday" },
        ],
        sections: [
          {
            title: "Getting Around Uluwatu: There Is No Centre, and That Changes Everything",
            icon: "map",
            content: "Uluwatu is not a town. It is a name applied to a plateau of villas, cliff resorts, surf camps and restaurants strung along a few roads above the coves, with the temple at the far tip. There is no main street to walk down and no cluster of things within a stroll of each other. Everything is a ride, and the ride is the first thing to plan.",
            tourCard: {
              slug: "kecak-fire-dance-show-and-uluwatu-temple-entry-ticket",
              title: "Kecak Fire Dance Show and Uluwatu Temple Entry Ticket",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 29.37",
              duration: "1 hour",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kecak-fire-dance-show-and-uluwatu-temple-entry-ticket/img0/1600.webp",
            },
          },
          {
            title: "Scooters",
            icon: "bike",
            content: "Most people who stay more than a couple of days rent a scooter, and the roads here are quieter and better than Canggu's, which makes it a more reasonable choice for a competent rider. The legal requirement is unchanged: an international driving permit with a motorcycle category. Police checkpoints on the main road onto the Bukit stop foreigners, and an unlicensed rider's accident is uninsured.\n\nThe descents to the beaches are steep and the car parks at the top are where the scooter stays; the last part is on foot.",
            tourCard: {
              slug: "beginner-and-intermediate-surf-lesson-with-equipment-in-uluwatu",
              title: "Beginner and Intermediate Surf Lesson with Equipment in Uluwatu",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 45.01",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/beginner-and-intermediate-surf-lesson-with-equipment-in-uluwatu/img0/1600.webp",
            },
          },
          {
            title: "Drivers and apps",
            icon: "car",
            content: "Ride-hailing apps work across the peninsula for cars and scooter taxis, with longer waits in the evening when everyone is heading to dinner. For a day of beaches and the temple, or any trip off the Bukit, a private driver for eight to ten hours at a flat rate is simpler and the way every driver-based tour on this site is arranged.",
            tourCard: {
              slug: "full-day-private-or-shared-uluwatu-highlights-tour",
              title: "Full-Day Private or Shared Uluwatu Highlights Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 30.90",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/full-day-private-or-shared-uluwatu-highlights-tour/img0/1600.webp",
            },
          },
          {
            title: "Airport",
            icon: "plane",
            content: "The airport is thirty to forty minutes away first thing in the morning and can be well over an hour from midday, when the roads north of the Bukit jam. Book a fixed-price transfer both ways and allow the long estimate for the departure.",
            tourCard: {
              slug: "all-inclusive-combo-adventure-ticket-with-transfer-in-uluwatu",
              title: "All-Inclusive Combo Adventure Ticket with Transfer in Uluwatu",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 52.64",
              duration: "6.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/all-inclusive-combo-adventure-ticket-with-transfer-in-uluwatu/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is Uluwatu walkable?", a: "No. It is a spread-out plateau of villas and beaches with no centre. Every beach, restaurant and the temple is a short ride from wherever you stay." },
          { q: "Do you need a scooter in Uluwatu?", a: "Wheels of some kind, yes. Scooters are the local choice for licensed riders; ride-hailing apps and private drivers cover everyone else." },
          { q: "How much is a driver for a day in Uluwatu?", a: "Around forty to sixty US dollars for eight to ten hours, fuel and parking included, for the car." },
          { q: "How long from the airport to Uluwatu?", a: "Thirty to forty minutes early in the morning, over an hour from midday onwards." },
        ],
      };

    default:
      return null;
  }
}
