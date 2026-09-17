// Canggu authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getCangguInfoContent() -> getCityInfoContent().
// Tour cards are added after the Bali import lands and the slugs exist.
import type { CityInfoData } from './cityInfoContent';

const IMG = '/bali-hero.webp';

export function getCangguInfoContent(slug: string): CityInfoData | null {
  switch (slug) {

    case "canggu-surf-guide":
      return {
        title: "Surfing in Canggu: Which Beach for Which Level, the Seasons, and What a Lesson Actually Covers",
        seoTitle: "Canggu Surf Guide 2026: Beaches & Lessons",
        description: "Batu Bolong for first-timers, Berawa and Echo Beach for the rest, when the swell is big, and how to tell a real surf school from a board hire with a man attached.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/kuta-beach-surfing-lesson-2-hours-local-instructor/img0/1600.webp",
        fastFacts: [
          { icon: "waves", label: "Beginners", value: "Batu Bolong: soft, slow, long rides on a longboard" },
          { icon: "waves", label: "Intermediate and up", value: "Berawa and Echo Beach; faster, hollower, more crowded in the line-up" },
          { icon: "sun", label: "Bigger swell", value: "Dry season, roughly April to October, from the south-west" },
          { icon: "clock", label: "Best sessions", value: "Dawn and the last two hours before sunset; offshore wind mornings" },
          { icon: "alert", label: "Hazards", value: "Rip currents, reef at low tide on some breaks, boards in a crowded line-up" },
        ],
        sections: [
          {
            title: "Surfing in Canggu: Which Beach for Which Level, the Seasons, and What a Lesson Actually Covers",
            icon: "waves",
            content: "Canggu is a run of black-sand beaches on Bali's south-west coast, and it became what it is because the surf works for almost everyone. The breaks are close together, the water is warm year round, and on the same morning a first-timer can stand up on a longboard at one end while a good surfer is getting barrelled a kilometre up the beach.\n\nThat range is the point. Knowing which beach is which saves a beginner from a bad first day and saves an experienced surfer from an hour in whitewater.",
            tourCard: {
              slug: "kuta-beach-surfing-lesson-2-hours-local-instructor",
              title: "Kuta Beach Surfing Lesson (2 Hours, Local Instructor)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 29.00",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kuta-beach-surfing-lesson-2-hours-local-instructor/img0/1600.webp",
            },
          },
          {
            title: "Batu Bolong: where lessons happen",
            icon: "waves",
            content: "Batu Bolong, in front of the old temple of the same name, is the beginner beach. The wave breaks over sand and deep reef a long way out, rolls in slowly, and gives long, forgiving rides on a big board. It is where nearly every surf school in Canggu teaches, and on a good morning the line-up is a hundred people wide, most of them on foam boards.\n\nIt is crowded, and that is part of the deal: crowded and safe, with instructors and lifeguards within shouting distance. Go at dawn for the emptiest version of it.",
            tourCard: {
              slug: "surf-lesson-in-batu-bolong-canggu-with-certified-instructor-canggu",
              title: "Surf lesson in Batu Bolong Canggu with certified instructor (Canggu)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 38.50",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/surf-lesson-in-batu-bolong-canggu-with-certified-instructor-canggu/img0/1600.webp",
            },
          },
          {
            title: "Berawa and Echo Beach",
            icon: "waves",
            content: "Berawa, a few hundred metres south, is a beach break that gets faster and steeper than Batu Bolong and suits people who can already paddle into a wave and turn. Echo Beach, to the north, is the serious one: a reef and sand break that can hold real size in the dry season and has a crowd of locals and regulars who know each other. Respect the line-up, do not drop in, and if it is over head height and you are not confident, watch from the warungs.\n\nFurther north again the coast gets emptier and the breaks get less forgiving.",
            tourCard: {
              slug: "private-sunset-photoshoot-experience-at-seminyak-beach",
              title: "Private Sunset Photoshoot Experience at Seminyak Beach",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 76.50",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/private-sunset-photoshoot-experience-at-seminyak-beach/img0/1600.webp",
            },
          },
          {
            title: "Seasons and tides",
            icon: "sun",
            content: "The dry season, April to October, brings the biggest and most consistent south-west swell to this coast. That is prime time for anyone above beginner, and it is also when Batu Bolong is at its most powerful for lessons; instructors will keep beginners on the inside.\n\nThe wet season, November to March, has smaller, cleaner waves in the mornings before the wind turns, and is actually the easier time to learn. Afternoons are often blown out or rained off.\n\nTide matters on every break here. Mid to high tide is friendlier at Batu Bolong and safer over the reef; low tide exposes rock at Echo Beach. A school or a board-rental shack will tell you the day's window if you ask.",
            tourCard: {
              slug: "kuta-beach-surfing-lesson-with-instructor",
              title: "Kuta Beach Surfing Lesson with Instructor",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 19.50",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kuta-beach-surfing-lesson-with-instructor/img0/1600.webp",
            },
          },
          {
            title: "What a real lesson includes",
            icon: "users",
            content: "A proper two-hour lesson for a first-timer includes a beach briefing on how to pop up and where the rips are, an instructor in the water with you pushing you into waves, and a board and rash vest. Small group or private makes a big difference; one instructor to six students means most of your session is waiting.\n\nThe tours listed on this site for Canggu surfing are with named schools, not a rental with a man attached. Rash vest, reef shoes if you are going anywhere with reef, and sunscreen on the back of the legs, which is where every first-timer burns.",
            tourCard: {
              slug: "kuta-beach-surfing-lesson-1-hour-local-instructor",
              title: "Kuta Beach Surfing Lesson (1 Hour, Local Instructor)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 14.50",
              duration: "1 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kuta-beach-surfing-lesson-1-hour-local-instructor/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Which beach in Canggu is best for beginner surfers?", a: "Batu Bolong. The wave is slow and breaks a long way out over sand, giving long rides on a longboard, and it is where the surf schools teach." },
          { q: "When is the best time to surf in Canggu?", a: "For size, the dry season from April to October. For learning, the wet season mornings from November to March are smaller and cleaner. Dawn is the best session in any month." },
          { q: "Is Canggu surf dangerous?", a: "Batu Bolong is forgiving. Berawa and Echo Beach have rips and reef at low tide and get serious in the dry season. Surf with a school when starting out and respect the local line-up at Echo." },
          { q: "How long is a surf lesson in Canggu?", a: "Usually two hours: a beach briefing, then in the water with an instructor pushing you into waves. Board and rash vest are included with a real school." },
        ],
      };

    case "tanah-lot-guide":
      return {
        title: "Tanah Lot from Canggu: The Tide Decides Everything",
        seoTitle: "Tanah Lot Temple Guide 2026",
        description: "Why the same temple is an island at one hour and a walk at another, the sunset crowd, and how long the trip from Canggu really takes.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/tanah-lot-jatiluwih-terrace-and-ulun-danu-beratan-tour/img0/1600.webp",
        fastFacts: [
          { icon: "map", label: "From Canggu", value: "About 30 to 45 minutes, more at sunset" },
          { icon: "waves", label: "Low tide", value: "You can walk to the rock and be blessed at the spring" },
          { icon: "waves", label: "High tide", value: "The temple is an island; the classic photograph" },
          { icon: "sun", label: "Sunset", value: "The main event and the main crowd; arrive 90 minutes early" },
          { icon: "ticket", label: "Entry", value: "Fee at the gate; the inner temple is for worshippers only" },
        ],
        sections: [
          {
            title: "Tanah Lot from Canggu: The Tide Decides Everything",
            icon: "waves",
            content: "Tanah Lot is a sea temple on a rock just off the coast north of Canggu, one of a chain of temples that ring the island, and the most photographed sunset in Bali. Whether you get the postcard or something else depends almost entirely on the tide, and most people arrive without having checked it.\n\nAt high tide the rock is an island with surf breaking around it, which is the image on every brochure. At low tide there is a path across the sand, you can walk to the base of the rock, and a priest at the freshwater spring in the cliff will sprinkle you with holy water and press rice to your forehead for a small donation. Both are worth seeing; they are different visits.",
            tourCard: {
              slug: "tanah-lot-jatiluwih-terrace-and-ulun-danu-beratan-tour",
              title: "Tanah Lot, Jatiluwih Terrace, and Ulun Danu Beratan Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 75.50",
              duration: "7 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tanah-lot-jatiluwih-terrace-and-ulun-danu-beratan-tour/img0/1600.webp",
            },
          },
          {
            title: "Timing the visit",
            icon: "clock",
            content: "Sunset is what the coaches come for, and by an hour before it the clifftop viewpoints are full. If sunset is the goal, arrive ninety minutes early, pick a spot on the cliff to the south of the temple where the sun sets behind the rock, and accept the company.\n\nEarly morning is the other version: almost empty, soft light on the sea, and if the tide is out, the chance to cross to the rock with no queue at the spring. It is the better visit and almost nobody does it.\n\nFrom Canggu the drive is half an hour on a good day and can be an hour in the sunset rush along the coast road.",
            tourCard: {
              slug: "ulun-danu-beratan-jatiluwih-and-tanah-lot-private-tour-canggu",
              title: "Ulun Danu Beratan, Jatiluwih, and Tanah Lot Private Tour (Canggu)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 114.50",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ulun-danu-beratan-jatiluwih-and-tanah-lot-private-tour-canggu/img0/1600.webp",
            },
          },
          {
            title: "What you can and cannot enter",
            icon: "landmark",
            content: "The temple itself is closed to non-Hindus; you see it from the base of the rock or from the cliffs. What is open is the whole clifftop complex, with its walkways, smaller shrines, the cave with the sea snakes that guides will show you, and a long strip of stalls and cafes on the way in that you can walk past quickly.\n\nBatu Bolong temple, the smaller sea temple on the next headland, has a natural rock arch and is much quieter; it is included in the entry and worth the five-minute walk.",
            tourCard: {
              slug: "north-bali-ulundanu-waterfall-and-sunset-tanah-lot-temple-canggu",
              title: "North Bali: Ulundanu, Waterfall and Sunset tanah lot Temple (Canggu)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 114.50",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/north-bali-ulundanu-waterfall-and-sunset-tanah-lot-temple-canggu/img0/1600.webp",
            },
          },
          {
            title: "Combining it",
            icon: "compass",
            content: "Tanah Lot sits naturally at the end of a day. A common pairing from Canggu is the Jatiluwih rice terraces and the lake temple at Ulun Danu Beratan in the highlands, coming back down to the coast for sunset; that is a full day. A shorter version is an afternoon at the temple with a beach or beach club before it.\n\nThe tours listed here for Tanah Lot are driver-based and will time the arrival to the tide and the light, which is the part that makes or breaks the visit.",
            tourCard: {
              slug: "royal-temple-coffee-tasting-and-tanah-lot-cliffside",
              title: "Royal Temple, Coffee Tasting and Tanah Lot Cliffside",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 61.50",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/royal-temple-coffee-tasting-and-tanah-lot-cliffside/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Can you walk to Tanah Lot temple?", a: "At low tide, yes, across the sand to the base of the rock, where a priest gives blessings at the spring. At high tide the rock is an island and you see it from the cliffs." },
          { q: "What time should I get to Tanah Lot for sunset?", a: "About ninety minutes before sunset. The clifftop viewpoints fill from an hour before and the road from Canggu slows down at the same time." },
          { q: "Can tourists go inside Tanah Lot temple?", a: "No. The temple on the rock is for Hindu worshippers. The surrounding clifftop complex, shrines and the base of the rock at low tide are open to everyone with a ticket." },
          { q: "How far is Tanah Lot from Canggu?", a: "Around thirty to forty-five minutes by car, up to an hour in the pre-sunset traffic on the coast road." },
        ],
      };

    case "canggu-beach-clubs-guide":
      return {
        title: "Canggu Beach Clubs: Minimum Spends, Sunset Timing, and the Black Sand Nobody Mentions",
        seoTitle: "Canggu Beach Clubs Guide 2026",
        description: "How the day-bed and minimum-spend system works, which stretch of beach each club sits on, and what the coast is actually like underfoot.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/ubud-highlights-tour-w-canggu-black-sand-beach-chill/img0/1600.webp",
        fastFacts: [
          { icon: "wallet", label: "Day beds", value: "Reserved against a minimum spend, redeemed on food and drink" },
          { icon: "sun", label: "Sunset", value: "The reason the clubs exist; book beds for 3pm onwards" },
          { icon: "map", label: "Where", value: "Berawa and Batu Bolong beachfront, plus a few on the cliffs north" },
          { icon: "waves", label: "The beach", value: "Black volcanic sand, strong surf, not a swimming beach" },
          { icon: "users", label: "Crowd", value: "Loud and full at weekends; weekday afternoons are the calm version" },
        ],
        sections: [
          {
            title: "Canggu Beach Clubs: Minimum Spends, Sunset Timing, and the Black Sand Nobody Mentions",
            icon: "sun",
            content: "Canggu's beach clubs are the second thing the town is known for after the surf, and they run on a system that is not obvious from outside. A day bed by the pool or on the sand is reserved against a minimum spend, which is then redeemed on whatever you order. Prices vary a lot between clubs and between a weekday bean bag on the sand and a weekend cabana by the pool, so ask for the current figure rather than trusting a blog from last year.\n\nWalk-ins for a table or the bar are usually free of minimum spend; the beds are where the money is.",
            tourCard: {
              slug: "ubud-highlights-tour-w-canggu-black-sand-beach-chill",
              title: "Ubud Highlights Tour w/ Canggu Black Sand Beach Chill",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 83.00",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ubud-highlights-tour-w-canggu-black-sand-beach-chill/img0/1600.webp",
            },
          },
          {
            title: "What the beach is really like",
            icon: "waves",
            content: "This is a black-sand coast with a shore break, not a lagoon. The sand is dark volcanic grit that gets very hot by midday, the surf is strong enough that the clubs' pools exist for a reason, and swimming in the sea is for confident swimmers on a calm day, between the flags where there are any.\n\nNone of that makes the coast less beautiful at sunset. It just means that if what you want is a turquoise swim, that is Nusa Penida or the east coast, and Canggu is for the wave and the evening.",
            tourCard: {
              slug: "private-sunset-photoshoot-experience-at-seminyak-beach",
              title: "Private Sunset Photoshoot Experience at Seminyak Beach",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 76.50",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/private-sunset-photoshoot-experience-at-seminyak-beach/img0/1600.webp",
            },
          },
          {
            title: "Timing",
            icon: "clock",
            content: "The clubs are quiet through the morning, fill from mid-afternoon, and peak in the hour around sunset when the beachfront is a line of people facing west. If you want a front-row bed for sunset, reserve it for three o'clock onwards; if you want the pool and a calm afternoon, arrive at eleven and leave by four.\n\nFriday to Sunday most clubs run DJs into the night and the character changes completely after dark. Weekday afternoons are the version most people are picturing when they book.",
            tourCard: {
              slug: "private-north-bali-tour-with-tanah-lot-sunset",
              title: "Private North Bali Tour with Tanah Lot Sunset",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 72.50",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/private-north-bali-tour-with-tanah-lot-sunset/img0/1600.webp",
            },
          },
          {
            title: "Getting between them",
            icon: "car",
            content: "The beachfront clubs on Berawa and Batu Bolong are walkable from one another along the sand at low tide. The ones on the cliffs further north need a vehicle, and Canggu traffic on the few roads that reach the coast is slow in the late afternoon. Plan one club per evening rather than a crawl.",
            tourCard: {
              slug: "north-bali-ulundanu-waterfall-and-sunset-tanah-lot-temple-canggu",
              title: "North Bali: Ulundanu, Waterfall and Sunset tanah lot Temple (Canggu)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 114.50",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/north-bali-ulundanu-waterfall-and-sunset-tanah-lot-temple-canggu/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "How do minimum spends work at Canggu beach clubs?", a: "You reserve a day bed against a set amount, then order food and drink up to that amount at no extra cost. Walking in for a table or the bar usually carries no minimum." },
          { q: "Can you swim at Canggu beach?", a: "It is a surf beach with black sand and a shore break. Confident swimmers on calm days, between flags where there are any; most visitors use the club pools." },
          { q: "What time is sunset at Canggu?", a: "Around six in the evening year round, give or take twenty minutes. Beds facing the sunset are in demand from about three o'clock." },
          { q: "Are Canggu beach clubs family-friendly?", a: "Weekday afternoons, generally yes; most have pools and food. Weekend evenings are a DJ crowd and not aimed at children." },
        ],
      };

    case "best-time-to-visit-canggu":
      return {
        title: "Best Time to Visit Canggu: Surf Season Versus Sunshine, and the March Day When Everything Shuts",
        seoTitle: "Best Time to Visit Canggu 2026",
        description: "When the waves are biggest, when the beach is best, when the town is fullest, and the one fixed-date closure to plan around.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/bali-private-surf-lesson-with-surf-photos-and-videos/img0/1600.webp",
        fastFacts: [
          { icon: "sun", label: "Dry season", value: "April to October; bigger surf, less rain" },
          { icon: "umbrella", label: "Wet season", value: "November to March; afternoon storms, smaller cleaner mornings" },
          { icon: "users", label: "Fullest", value: "July, August, Christmas and New Year, Easter" },
          { icon: "moon", label: "Nyepi", value: "One day in March: airport closed, no one outside, no lights" },
          { icon: "thermometer", label: "Temperature", value: "28 to 32°C in the day year round; humidity is the variable" },
        ],
        sections: [
          {
            title: "Best Time to Visit Canggu: Surf Season Versus Sunshine, and the March Day When Everything Shuts",
            icon: "sun",
            content: "Canggu is warm all year and the sea is always warm enough, so the question is not temperature. It is whether you want the biggest surf, the driest skies, or the smallest crowds, because they do not line up.\n\nAnd there is one day a year when none of it matters because the entire island stops.",
            tourCard: {
              slug: "bali-private-surf-lesson-with-surf-photos-and-videos",
              title: "Bali: Private Surf Lesson with Surf Photos and Videos",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 19.50",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/bali-private-surf-lesson-with-surf-photos-and-videos/img0/1600.webp",
            },
          },
          {
            title: "Nyepi",
            icon: "moon",
            content: "Nyepi, the Balinese day of silence, falls in March on a date that moves with the lunar calendar. For twenty-four hours from six in the morning the airport closes, nobody may leave their accommodation, the beaches and roads are empty and patrolled, and lights and noise are forbidden. Beach clubs, surf schools and restaurants are closed, and hotel guests stay inside the grounds.\n\nThe night before is the ogoh-ogoh parade, when villages carry giant papier-mâché demons through the streets and burn them, and it is one of the best things to see on the island. But a flight timed to land on Nyepi will not land, and a two-day stay that includes it is one day of hotel. Check the date before booking March.",
            tourCard: {
              slug: "making-canang-sanskrit-lesson-and-farming-village-tour-in-canggu",
              title: "Making Canang, Sanskrit Lesson and Farming Village Tour in Canggu",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 115.00",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/making-canang-sanskrit-lesson-and-farming-village-tour-in-canggu/img0/1600.webp",
            },
          },
          {
            title: "Dry season, April to October",
            icon: "sun",
            content: "This is the surf season for anyone above beginner, with consistent south-west swell, and it is also the driest and least humid stretch. Mornings are usually offshore and glassy.\n\nJuly and August are peak: the town is full, prices are up, and the beginner line-up at Batu Bolong is at its widest. May, June and September have the same weather with more room.",
            tourCard: {
              slug: "sanur-surf-lesson-for-all-levels-canggu",
              title: "Sanur Surf Lesson for All Levels (Canggu)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 55.00",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sanur-surf-lesson-for-all-levels-canggu/img0/1600.webp",
            },
          },
          {
            title: "Wet season, November to March",
            icon: "umbrella",
            content: "Rain comes mostly as an afternoon or evening storm, often heavy and short, with bright mornings. The surf is smaller and cleaner early, which suits learning. Humidity is high and the beach can carry debris washed out of the rivers after big storms, especially in January and February.\n\nOutside the Christmas fortnight it is the quietest and cheapest time to be here.",
            tourCard: {
              slug: "kuta-beach-surfing-lesson-2-hours-local-instructor",
              title: "Kuta Beach Surfing Lesson (2 Hours, Local Instructor)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 29.00",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kuta-beach-surfing-lesson-2-hours-local-instructor/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "What is the best month to visit Canggu?", a: "May, June or September: dry season surf and skies without the July and August crowd. For learning to surf, wet-season mornings from November to March are smaller and easier." },
          { q: "Does it rain a lot in Canggu?", a: "In the wet season, November to March, expect an afternoon or evening storm most days with bright mornings. The dry season, April to October, sees little rain." },
          { q: "Is Canggu open during Nyepi?", a: "No. On Nyepi, one day in March, everything closes: beach clubs, restaurants, roads, the airport. Guests stay inside their accommodation for 24 hours. The parade the evening before is worth being here for." },
          { q: "When is Canggu most crowded?", a: "July, August, the Christmas and New Year fortnight and Easter. Weekends are busier than weekdays all year because of visitors from the south of the island." },
        ],
      };

    case "day-trips-from-canggu":
      return {
        title: "Day Trips from Canggu: The Highlands Loop, Ubud, Uluwatu, and Why Nusa Penida Starts at Sanur",
        seoTitle: "Day Trips from Canggu 2026",
        description: "The routes that work from the west coast, real drive times through Bali traffic, and which trips are better done with an overnight.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sanur-village-e-bike-tour-canggu/img0/1600.webp",
        fastFacts: [
          { icon: "mountain", label: "Highlands loop", value: "Jatiluwih, Ulun Danu Beratan, back via Tanah Lot: a full day" },
          { icon: "map", label: "Ubud", value: "About an hour; rice terraces, temples and waterfalls in a day" },
          { icon: "landmark", label: "Uluwatu", value: "1 to 1.5 hours; temple, Kecak at sunset, cliff beaches" },
          { icon: "ship", label: "Nusa Penida", value: "Drive to Sanur, then a 45-minute fast boat; a long day" },
          { icon: "car", label: "Traffic", value: "Leaving Canggu before 7am saves an hour on almost every route" },
        ],
        sections: [
          {
            title: "Day Trips from Canggu: The Highlands Loop, Ubud, Uluwatu, and Why Nusa Penida Starts at Sanur",
            icon: "compass",
            content: "Canggu is a good base for the west and centre of the island and a poor one for the far east. The limiting factor on every trip is the road out: the lanes that connect Canggu to the main roads are narrow and jammed from mid-morning, so the difference between leaving at 6:30 and leaving at 9 is often an hour on the day.",
            tourCard: {
              slug: "sanur-village-e-bike-tour-canggu",
              title: "Sanur Village E-bike Tour (Canggu)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 62.50",
              duration: "2.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sanur-village-e-bike-tour-canggu/img0/1600.webp",
            },
          },
          {
            title: "North: the highlands loop and Tanah Lot",
            icon: "mountain",
            content: "The most natural day from Canggu goes north into the hills. Jatiluwih's terraces, UNESCO-listed and vast, are about an hour and a half away and are best walked before the heat. From there it is forty minutes up to Ulun Danu Beratan, the lake temple with the pagodas that appear to float, which is cool, often misty, and busy from late morning.\n\nCome back down to the coast for the end of the day at Tanah Lot, timed for the tide and the sunset. It is a long day and a complete one.",
            tourCard: {
              slug: "north-bali-ulundanu-waterfall-and-sunset-tanah-lot-temple-canggu",
              title: "North Bali: Ulundanu, Waterfall and Sunset tanah lot Temple (Canggu)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 114.50",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/north-bali-ulundanu-waterfall-and-sunset-tanah-lot-temple-canggu/img0/1600.webp",
            },
          },
          {
            title: "Ubud in a day",
            icon: "map",
            content: "Ubud is an hour east and the standard day there from the coast covers the Tegallalang terraces, a temple or two along the Pakerisan river, the Monkey Forest, and a waterfall. It works. It is also a lot, and it means arriving at the popular sites in the same mid-morning window as everyone else.\n\nIf Ubud is a priority, one night there beats a day trip: you get the early hours at the terraces and the temples before the coaches, which is when they are best.",
            tourCard: {
              slug: "sanur-surf-lesson-for-all-levels-canggu",
              title: "Sanur Surf Lesson for All Levels (Canggu)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 55.00",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sanur-surf-lesson-for-all-levels-canggu/img0/1600.webp",
            },
          },
          {
            title: "South: Uluwatu",
            icon: "landmark",
            content: "Uluwatu is an hour to an hour and a half south, longer through the airport bottleneck in the afternoon. The classic evening is the clifftop temple at golden hour and the Kecak fire dance as the sun goes down, with a cliff beach in the afternoon before it.\n\nBecause the payoff is at sunset, it makes sense to leave Canggu after lunch and come back after dark, when the roads have cleared.",
            tourCard: {
              slug: "sanur-highlights-and-turtle-conservation-tour-with-lunch",
              title: "Sanur Highlights and Turtle Conservation Tour with Lunch",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 105.50",
              duration: "5.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sanur-highlights-and-turtle-conservation-tour-with-lunch/img0/1600.webp",
            },
          },
          {
            title: "Nusa Penida",
            icon: "ship",
            content: "Boats to Nusa Penida leave from Sanur on the east side of the south coast, which from Canggu is forty-five minutes to an hour before you have even left the mainland. Add the 45-minute boat and the day on the island's rough roads, and it is a twelve-hour outing with a 6am start.\n\nIt is worth doing. It is more worth doing with a night on the island, and the tours listed here for Penida include both day-trip and overnight versions for that reason.",
            tourCard: {
              slug: "sanur-cycling-tour-with-market-ritual-and-rice-fields",
              title: "Sanur Cycling Tour with Market, Ritual and Rice Fields",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 71.50",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sanur-cycling-tour-with-market-ritual-and-rice-fields/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "How far is Ubud from Canggu?", a: "About an hour by car, longer from mid-morning. A day trip covers the main sites; a night in Ubud lets you see them early, before the crowds." },
          { q: "What is the best day trip from Canggu?", a: "The highlands loop: Jatiluwih rice terraces and Ulun Danu Beratan lake temple, returning to Tanah Lot for sunset. It is a full day and covers three of the island's best sights." },
          { q: "How do I get to Nusa Penida from Canggu?", a: "Drive to Sanur harbour, about 45 minutes to an hour, then a 45-minute fast boat. Door to door it is a twelve-hour day; an overnight on the island is the better version." },
          { q: "Is Uluwatu a day trip from Canggu?", a: "Yes, an hour to an hour and a half each way. Go after lunch for a cliff beach, the temple at golden hour and the Kecak dance at sunset, and return after dark when the roads are clear." },
        ],
      };

    case "getting-around-canggu":
      return {
        title: "Getting Around Canggu: The Traffic, the Shortcut, Scooters and Apps",
        seoTitle: "Getting Around Canggu 2026",
        description: "Why a three-kilometre trip can take forty minutes, what the Shortcut is, and which transport actually works here as opposed to Ubud.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/full-day-instagram-highlights-tour-in-canggu/img0/1600.webp",
        fastFacts: [
          { icon: "car", label: "The problem", value: "A handful of narrow lanes carry all the traffic; gridlock from late morning" },
          { icon: "bike", label: "Scooters", value: "The local default; an international permit with a motorcycle category is legally required" },
          { icon: "phone", label: "Apps", value: "Ride-hailing works in Canggu, unlike central Ubud" },
          { icon: "footprints", label: "Walking", value: "Fine along the beach; unpleasant on the lanes" },
          { icon: "plane", label: "Airport", value: "45 minutes at dawn, up to 2 hours in the afternoon" },
        ],
        sections: [
          {
            title: "Getting Around Canggu: The Traffic, the Shortcut, Scooters and Apps",
            icon: "car",
            content: "Canggu grew from rice fields into a town in about a decade and the roads did not grow with it. Almost everything sits along three or four lanes running down to the beach, connected by a single-lane farm track known locally as the Shortcut, and from late morning to evening they all move at walking pace. This is the defining fact of getting around here, and every other choice follows from it.",
            tourCard: {
              slug: "full-day-instagram-highlights-tour-in-canggu",
              title: "Full-Day Instagram Highlights Tour in Canggu",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 90.00",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/full-day-instagram-highlights-tour-in-canggu/img0/1600.webp",
            },
          },
          {
            title: "Scooters, and the licence",
            icon: "bike",
            content: "Scooters are how the town moves, because they fit through gaps that a car does not. Rentals are everywhere and cheap by the day or week.\n\nThe legal position is the same as everywhere on the island: an international driving permit with a motorcycle category. Police stop foreigners on the main roads out of Canggu and fine those without it, and travel insurance will not pay out for an unlicensed rider's accident. The lanes here are narrow, the Shortcut has a drop on one side, and evening riders have been drinking. If you are not already a rider, a scooter is not the place to become one.",
            tourCard: {
              slug: "canggu-silver-brass-and-gold-plating-jewelry-making",
              title: "Canggu Silver, Brass and Gold Plating Jewelry Making",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 48.50",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/canggu-silver-brass-and-gold-plating-jewelry-making/img0/1600.webp",
            },
          },
          {
            title: "Apps and drivers",
            icon: "phone",
            content: "Ride-hailing apps work normally in Canggu, for both scooter and car pickups, which makes it easier than Ubud in this one respect. A scooter-taxi through the app is the fastest way across town in the afternoon.\n\nFor day trips, a private driver for eight to ten hours is the standard, at a flat rate that includes fuel. Every driver-based tour on this site works that way, with a named operator and a fixed price rather than a meter and a guess.",
            tourCard: {
              slug: "tanah-lot-jatiluwih-terrace-and-ulun-danu-beratan-tour",
              title: "Tanah Lot, Jatiluwih Terrace, and Ulun Danu Beratan Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 75.50",
              duration: "7 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tanah-lot-jatiluwih-terrace-and-ulun-danu-beratan-tour/img0/1600.webp",
            },
          },
          {
            title: "Airport transfers",
            icon: "plane",
            content: "The airport is close on the map and far in practice. Before seven in the morning it is forty-five minutes; in the afternoon and early evening it can be two hours through the traffic on the bypass. Book a transfer for a fixed price rather than trusting the app at the arrivals hall, and give yourself the long estimate on the way out.",
            tourCard: {
              slug: "bali-spa-experience-with-transfers-at-lluvia-spa",
              title: "Bali Spa Experience with Transfers at Lluvia Spa",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 145.00",
              duration: "1.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/bali-spa-experience-with-transfers-at-lluvia-spa/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is traffic in Canggu really that bad?", a: "Yes. The town runs on a few narrow lanes and one single-track shortcut, and from late morning to evening they crawl. Leave early for anything outside town." },
          { q: "Do Grab and Gojek work in Canggu?", a: "Yes, for both scooter and car rides, unlike central Ubud where pickups are restricted. A scooter taxi is the quickest way across town in traffic." },
          { q: "Do I need a licence for a scooter in Canggu?", a: "Legally, an international driving permit with a motorcycle category. Police checkpoints fine foreigners without one and insurance does not cover unlicensed riders." },
          { q: "How long is the airport transfer to Canggu?", a: "Forty-five minutes at dawn, up to two hours in afternoon and evening traffic. Pre-book a fixed-price car." },
        ],
      };

    case "canggu-or-seminyak-or-uluwatu":
      return {
        title: "Canggu, Seminyak or Uluwatu: Which Part of South Bali to Base Yourself In",
        seoTitle: "Canggu vs Seminyak vs Uluwatu 2026",
        description: "The honest differences in beach, price, pace and traffic between the three places most first-time visitors choose between, and who each one suits.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/horse-riding-adventure-on-seminyak-beach/img0/1600.webp",
        fastFacts: [
          { icon: "waves", label: "Canggu", value: "Surf, cafes, beach clubs, black sand; younger and busier" },
          { icon: "shopping", label: "Seminyak", value: "Boutiques, restaurants, sunset bars; the polished version" },
          { icon: "mountain", label: "Uluwatu", value: "Cliffs, white-sand coves, world-class surf; spread out and quiet at night" },
          { icon: "car", label: "Between them", value: "Canggu to Seminyak 20 to 40 min; either to Uluwatu 1 to 1.5 hours" },
          { icon: "plane", label: "Airport", value: "Seminyak closest, Uluwatu next, Canggu furthest in traffic" },
        ],
        sections: [
          {
            title: "Canggu, Seminyak or Uluwatu: Which Part of South Bali to Base Yourself In",
            icon: "compass",
            content: "These three are next to each other on the map and different enough in character that people who love one often dislike the others. All are on the south coast within ninety minutes of the airport, all have good hotels at every price, and none is a bad choice. The difference is what you walk out of the door into.",
            tourCard: {
              slug: "horse-riding-adventure-on-seminyak-beach",
              title: "Horse Riding Adventure on Seminyak Beach",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 57.50",
              duration: "30 minutes",
              image: "https://images.asiabylocals.com/asiabylocals/tours/horse-riding-adventure-on-seminyak-beach/img0/1600.webp",
            },
          },
          {
            title: "Canggu",
            icon: "waves",
            content: "Canggu is the surf-and-cafe town: a black-sand beach with breaks for every level, a dense strip of brunch places, co-working spaces, gyms and beach clubs, and a crowd skewed young and long-stay. It is lively every night of the week and loud at weekends.\n\nChoose it for surfing, for the food scene, and for being somewhere with energy. Avoid it if traffic infuriates you or you want a beach you can swim off.",
            tourCard: {
              slug: "private-sunset-photoshoot-experience-at-seminyak-beach",
              title: "Private Sunset Photoshoot Experience at Seminyak Beach",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 76.50",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/private-sunset-photoshoot-experience-at-seminyak-beach/img0/1600.webp",
            },
          },
          {
            title: "Seminyak",
            icon: "shopping",
            content: "Seminyak, twenty minutes south, is Canggu's older, more polished neighbour: wider streets, boutique shopping, a long stretch of restaurants, sunset bars on a beach that is sandier and a little more swimmable, and a crowd that is older and on shorter holidays. It is the most convenient of the three for the airport and for getting to Ubud or Uluwatu.\n\nChoose it for restaurants, shopping and an easy first visit. It has less surf identity and less of the raw edge of Canggu.",
            tourCard: {
              slug: "seminyak-private-beach-horse-ride-at-sunrise-or-sunset",
              title: "Seminyak Private Beach Horse Ride at Sunrise or Sunset",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 112.00",
              duration: "1 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/seminyak-private-beach-horse-ride-at-sunrise-or-sunset/img0/1600.webp",
            },
          },
          {
            title: "Uluwatu and the Bukit",
            icon: "mountain",
            content: "Uluwatu is the limestone peninsula at the island's southern tip: cliffs, small white-sand coves reached by steep steps, some of the best surf in the world for those who can ride it, the clifftop temple and its sunset fire dance, and resorts spread across a large area with no single town centre. Evenings are quiet and you will drive to dinner.\n\nChoose it for the coves and the views, for serious surf, and for a calmer stay. Avoid it if you want to walk to a choice of restaurants or if you plan a lot of day trips north; everything is an hour further from here.",
            tourCard: {
              slug: "full-day-instagram-highlights-tour-in-canggu",
              title: "Full-Day Instagram Highlights Tour in Canggu",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 90.00",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/full-day-instagram-highlights-tour-in-canggu/img0/1600.webp",
            },
          },
          {
            title: "A practical answer",
            icon: "lightbulb",
            content: "First visit, a week, want a bit of everything: split it, three or four nights in Canggu or Seminyak and three in Uluwatu, with a night or two in Ubud if you can. The south coast and the interior are different islands in feel, and staying in one place for the whole trip means seeing the others in the worst possible way, from a car in the middle of the day.",
            tourCard: {
              slug: "canggu-silver-brass-and-gold-plating-jewelry-making",
              title: "Canggu Silver, Brass and Gold Plating Jewelry Making",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 48.50",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/canggu-silver-brass-and-gold-plating-jewelry-making/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is Canggu or Seminyak better?", a: "Canggu for surf, cafes and a younger, livelier scene; Seminyak for restaurants, shopping, a more swimmable beach and easier access to the airport and the rest of the island." },
          { q: "Is Uluwatu far from Canggu?", a: "An hour to an hour and a half by car, more in afternoon traffic through the airport area. They are different enough that many visitors split their stay between them." },
          { q: "Which is closest to the airport?", a: "Seminyak, at around thirty to forty-five minutes. Uluwatu is similar in the morning; Canggu is the furthest in traffic." },
          { q: "Can you swim at the beach in Canggu or Seminyak?", a: "Seminyak is somewhat more swimmable on calm days. Both are surf beaches with strong shore breaks. For calm turquoise water, Uluwatu's coves at high tide or Nusa Penida are the real answer." },
        ],
      };

    case "canggu-to-ubud-day-trip":
      return {
        title: "Ubud in a Day from Canggu: The Route That Works, the Traffic, and What to Leave Out",
        seoTitle: "Canggu to Ubud Day Trip Guide 2026",
        description: "How to see the best of Ubud in one day from Canggu, the order that beats the coaches, the 60 to 90 minute drive, and what a single day cannot fit.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/full-day-instagram-highlights-tour-in-canggu/img0/1600.webp",
        fastFacts: [
          { icon: "car", label: "Drive", value: "60 to 90 minutes each way; longer after 9:00" },
          { icon: "clock", label: "Leave Canggu", value: "By 7:00 to reach Tegallalang before the crowd" },
          { icon: "map", label: "Stops", value: "Terraces, a temple, a waterfall, Monkey Forest; pick four" },
          { icon: "ticket", label: "Entry fees", value: "Small, paid at each site unless all-inclusive" },
          { icon: "sun", label: "Return", value: "Sunset traffic into Canggu is heavy; aim to be back by 5:30" },
          { icon: "users", label: "Group or private", value: "Private car is the usual format" },
        ],
        sections: [
          {
            title: "The drive, and why the order matters",
            icon: "car",
            content: "Canggu to Ubud is only about 30 kilometres but the roads through Denpasar's northern edge are slow, and the drive is an hour at 6:30 and closer to ninety minutes at 9:00. That single fact decides the day: leave early, do the furthest and most crowded stop first, and come back through the closer ones. The furthest stop is Tegallalang, twenty minutes beyond Ubud town, and it is also the one that is ruined by ten o'clock, so the day starts there.\n\nA driver for the day is the format, either a private car with an English-speaking driver or a small-group tour with fixed stops. The private car is not much more expensive for two or more and lets you drop a stop when you are tired.",
            tourCard: {
              slug: "full-day-instagram-highlights-tour-in-canggu",
              title: "Full-Day Instagram Highlights Tour in Canggu",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 89.64",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/full-day-instagram-highlights-tour-in-canggu/img0/1600.webp",
            },
          },
          {
            title: "The route",
            icon: "map",
            content: "Tegallalang at about 8:15, walking down into the terraces rather than looking from the cafes. Tirta Empul by 9:30, before the tour groups, for the water temple and, if you want it, the purification. Then a waterfall: Tegenungan is the closest to the road home, Tibumana the better swim. Lunch in Ubud town, and the Monkey Forest at about two, which is hot but manageable in the shade of the trees, before the drive back.\n\nThat is four stops and a lunch, and it is a full day. Adding a swing, a coffee stop or Gunung Kawi is possible if you drop something else; adding all three is how people arrive back at seven o'clock hating Ubud.",
            tourCard: {
              slug: "canggu-silver-brass-and-gold-plating-jewelry-making",
              title: "Canggu Silver, Brass and Gold Plating Jewelry Making",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 48.44",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/canggu-silver-brass-and-gold-plating-jewelry-making/img0/1600.webp",
            },
          },
          {
            title: "What a day cannot fit",
            icon: "clock",
            content: "The Mount Batur sunrise trek, which needs a 2am departure from Canggu; east Bali and Lempuyang, which are two hours beyond Ubud; Kintamani and Penglipuran, which are a day of their own. The Campuhan ridge walk needs early morning or late afternoon light that a day trip does not have. If any of these is the reason you want Ubud, take two nights there instead; the [how many days in Ubud guide](/indonesia/ubud/how-many-days-in-ubud) sets out what each length gets you.",
            tourCard: {
              slug: "tanah-lot-jatiluwih-terrace-and-ulun-danu-beratan-tour",
              title: "Tanah Lot, Jatiluwih Terrace, and Ulun Danu Beratan Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 75.14",
              duration: "7 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tanah-lot-jatiluwih-terrace-and-ulun-danu-beratan-tour/img0/1600.webp",
            },
          },
          {
            title: "Practical",
            icon: "shield",
            content: "Sarongs are provided at Tirta Empul and are needed for entry. Bring a towel and a change of clothes if you plan to bathe. Entry fees at each site are small and paid in cash unless the tour says all-inclusive; carry rupiah in small notes. The heat in the terraces by mid-morning is real, so water and a hat. For the coast-side days that pair with this, see the [day trips from Canggu guide](/indonesia/canggu/day-trips-from-canggu) and the [Tanah Lot guide](/indonesia/canggu/tanah-lot-guide).",
            tourCard: {
              slug: "silver-and-brass-jewelry-class-with-gold-plating-option-in-canggu",
              title: "Silver and Brass Jewelry Class with Gold Plating Option in Canggu",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 48.44",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/silver-and-brass-jewelry-class-with-gold-plating-option-in-canggu/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "How far is Ubud from Canggu?", a: "About 30 kilometres, but 60 to 90 minutes by car because of the roads through north Denpasar. Leave by 7:00 to have the first stop before the crowds." },
          { q: "What can you see in Ubud in one day from Canggu?", a: "Tegallalang terraces, Tirta Empul, one waterfall and the Monkey Forest, with lunch in town. Four stops is a full day; Batur, Lempuyang and Kintamani do not fit." },
          { q: "Is a private driver or a group tour better for a Canggu to Ubud day?", a: "A private car for two or more people: the price is similar and you can change the order or drop a stop. Group tours have fixed stops and timings." },
          { q: "What time should I return to Canggu from Ubud?", a: "Aim to leave Ubud by 4:00 and be back by 5:30. Sunset traffic into Canggu is the worst of the day." },
        ],
      };

    case "canggu-rice-field-walks-guide":
      return {
        title: "Rice Field Walks Around Canggu: Where the Paddies Still Are and When to Walk Them",
        seoTitle: "Canggu Rice Field Walks Guide 2026",
        description: "The rice fields left between the villas, the shortcut paths locals use, the early hour that makes them worth it, and the villages where the fields are still whole.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/tanah-lot-jatiluwih-terrace-and-ulun-danu-beratan-tour/img0/1600.webp",
        fastFacts: [
          { icon: "footprints", label: "The shortcut", value: "Batu Bolong to Berawa across the paddies, 20 minutes" },
          { icon: "sun", label: "Best time", value: "6:30 to 8:00, or the hour before sunset" },
          { icon: "map", label: "Whole fields", value: "Pererenan, Cemagi and Kedungu, north of Canggu" },
          { icon: "leaf", label: "Rice cycle", value: "Green for months, then cut stubble; ask what stage" },
          { icon: "shield", label: "Paths", value: "Narrow bunds; give way to farmers and motorbikes" },
          { icon: "ticket", label: "Cost", value: "Free; donations where a farmer asks" },
        ],
        sections: [
          {
            title: "What is left",
            icon: "leaf",
            content: "Canggu was rice fields until about 2010, and the villas have eaten most of them; the paddies that survive are the gaps between developments, and each year there are fewer. But the gaps are real, they are still farmed, and the network of raised bunds and concrete paths that farmers use to reach them is walkable. The best known is the Canggu shortcut, the narrow path between Batu Bolong and Berawa that motorbikes and walkers share, with fields on both sides for most of its length. It is a twenty-minute walk and a fair picture of what the whole area looked like.",
            tourCard: {
              slug: "tanah-lot-jatiluwih-terrace-and-ulun-danu-beratan-tour",
              title: "Tanah Lot, Jatiluwih Terrace, and Ulun Danu Beratan Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 75.14",
              duration: "7 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tanah-lot-jatiluwih-terrace-and-ulun-danu-beratan-tour/img0/1600.webp",
            },
          },
          {
            title: "Where the fields are whole",
            icon: "map",
            content: "For fields that go to the horizon, go north. Pererenan, the next village up the coast, still has broad paddies behind the beach with the mountains behind them on a clear morning. Cemagi and Kedungu, ten to twenty minutes further, are proper farming villages with the subak channels running between the plots, the shrines at the corners of the fields and almost no visitors. A morning walk through Kedungu's fields to its black-sand beach, or a guided village walk in Cemagi, is the closest to the rural Bali that the postcards mean without driving to Ubud.",
            tourCard: {
              slug: "sanur-cycling-tour-with-market-ritual-and-rice-fields",
              title: "Sanur Cycling Tour with Market, Ritual and Rice Fields",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 71.50",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sanur-cycling-tour-with-market-ritual-and-rice-fields/img0/1600.webp",
            },
          },
          {
            title: "When, and how to behave",
            icon: "sun",
            content: "Early. Between 6:30 and 8:00 the light is low, the farmers are out, ducks are being herded along the channels, and the air is cool; by nine the fields are bright, hot and empty. The hour before sunset is the second window. On the paths, step aside for farmers and for the motorbikes that use the bunds as roads, do not walk on the field edges when the rice is young, and expect a farmer occasionally to ask a few thousand rupiah for crossing their land, which is fair. Ask before photographing people at work; most say yes.\n\nFor the same landscape at scale, Jatiluwih and Tegallalang are covered in the [day trips from Canggu guide](/indonesia/canggu/day-trips-from-canggu) and the [Ubud terraces guide](/indonesia/ubud/tegallalang-rice-terrace-guide).",
            tourCard: {
              slug: "full-day-tegallalang-monkey-forest-and-tanah-lot-tour",
              title: "Full-Day Tegallalang, Monkey Forest and Tanah Lot Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 21.20",
              duration: "1 hour",
              image: "https://images.asiabylocals.com/asiabylocals/tours/full-day-tegallalang-monkey-forest-and-tanah-lot-tour/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Are there still rice fields in Canggu?", a: "Yes, in the gaps between villas, especially along the Canggu shortcut between Batu Bolong and Berawa, and in whole fields north at Pererenan, Cemagi and Kedungu." },
          { q: "When is the best time to walk the rice fields in Canggu?", a: "6:30 to 8:00 in the morning, when the light is low and the farmers are working, or the hour before sunset." },
          { q: "Is the Canggu shortcut walkable?", a: "Yes. It is a narrow path shared with motorbikes, about twenty minutes end to end, with rice fields on both sides for most of it." },
          { q: "Do I need a guide to walk the rice fields?", a: "Not for the shortcut or Pererenan. For a village walk in Cemagi or Kedungu with the subak system explained, a local guide adds a lot." },
        ],
      };

    case "north-bali-day-trip-from-canggu":
      return {
        title: "North Bali from Canggu: Jatiluwih, Ulun Danu Beratan, Handara Gate and a Waterfall in One Day",
        seoTitle: "North Bali Day Trip from Canggu 2026",
        description: "The highlands loop north of Canggu: the UNESCO terraces, the lake temple at Bedugul, the Handara Gate photo stop, Wanagiri's swings and a north Bali waterfall, in the order the weather allows.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/tanah-lot-jatiluwih-terrace-and-ulun-danu-beratan-tour/img0/1600.webp",
        fastFacts: [
          { icon: "car", label: "Drive", value: "Canggu to Jatiluwih about 1.5 hours; whole loop 9 to 10 hours" },
          { icon: "thermometer", label: "Bedugul", value: "1,200 m; 8 to 10 degrees cooler, often misty by 1:00" },
          { icon: "landmark", label: "Ulun Danu Beratan", value: "Lake temple of 1633; small entry fee" },
          { icon: "camera", label: "Handara Gate", value: "A gate on a golf course road; fee for the photo" },
          { icon: "droplet", label: "Waterfalls", value: "Banyumala or Leke Leke; Sekumpul is too far for one day" },
          { icon: "sun", label: "Order", value: "Terraces first, temple by 11:00, waterfall after lunch" },
        ],
        sections: [
          {
            title: "The loop",
            icon: "map",
            content: "North of Canggu the road climbs through Tabanan to the central highlands, and a day up there strings together four or five stops that sit within an hour of each other. Jatiluwih, the largest rice terrace on Bali and the centrepiece of the UNESCO subak listing, comes first because it is lowest and clearest in the morning. Then the road climbs to Bedugul, 1,200 metres up, where Ulun Danu Beratan temple stands on the shore of Lake Bratan. The Handara Gate is a few minutes on, the Wanagiri viewpoints and swings above the twin lakes a few minutes beyond, and a waterfall, Banyumala or Leke Leke, is the afternoon.\n\nThe drive back down to Canggu is about two hours, so it is a nine to ten hour day, and it is the best-value single day out of the south.",
            tourCard: {
              slug: "tanah-lot-jatiluwih-terrace-and-ulun-danu-beratan-tour",
              title: "Tanah Lot, Jatiluwih Terrace, and Ulun Danu Beratan Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 75.14",
              duration: "7 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tanah-lot-jatiluwih-terrace-and-ulun-danu-beratan-tour/img0/1600.webp",
            },
          },
          {
            title: "Why the order is fixed",
            icon: "sun",
            content: "Cloud. The highlands are clear in the morning and misty by early afternoon most days of the year, and Ulun Danu Beratan on a misty day is a temple you cannot see across the lake. Jatiluwih at 8:30 has the light across the terraces and the walking paths to yourself; the temple by 11:00 gets the shrines against the water before the cloud; and the waterfall after lunch does not care about cloud. Tours that run the loop the other way, because the waterfall is closer to the coast, deliver a temple in fog.",
            tourCard: {
              slug: "ulun-danu-beratan-jatiluwih-and-tanah-lot-private-tour-canggu",
              title: "Ulun Danu Beratan, Jatiluwih, and Tanah Lot Private Tour (Canggu)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 114.43",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ulun-danu-beratan-jatiluwih-and-tanah-lot-private-tour-canggu/img0/1600.webp",
            },
          },
          {
            title: "The stops, honestly",
            icon: "landmark",
            content: "Jatiluwih is worth an hour on the paths; the entry fee is modest and there is no queue. Ulun Danu Beratan is a working temple in landscaped gardens, busy but not crowded, and takes forty minutes. The Handara Gate is a split gate at the entrance road of a golf resort; it photographs beautifully with the hills behind and there is a fee and a short queue for the picture, and that is all it is. The Wanagiri swings are the same idea as the Ubud ones with a lake view. Banyumala is a wide twin fall with a swimmable pool at the end of a steep twenty-minute path; Leke Leke is a single tall fall reached by a flatter walk. Sekumpul, the biggest, is another hour north and does not fit.",
            tourCard: {
              slug: "kanto-lampo-waterfall-art-market-cretya-and-tanah-lot",
              title: "Kanto Lampo Waterfall, Art Market, Cretya and Tanah Lot",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 71.02",
              duration: "7 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kanto-lampo-waterfall-art-market-cretya-and-tanah-lot/img0/1600.webp",
            },
          },
          {
            title: "Practical",
            icon: "shield",
            content: "Bring a layer: Bedugul is cold by Bali standards and it rains up there more than on the coast. Sarongs for the temple are provided. Lunch is usually at a restaurant near the lake or at a strawberry farm on the road. A private driver is the right format for the loop because the order and the pace matter; group tours run it too but cannot skip the fog. For the other big days out, see the [day trips from Canggu guide](/indonesia/canggu/day-trips-from-canggu) and the [Tanah Lot guide](/indonesia/canggu/tanah-lot-guide), which can be added on the way home if the tide is right.",
            tourCard: {
              slug: "north-bali-ulundanu-waterfall-and-sunset-tanah-lot-temple-canggu",
              title: "North Bali: Ulundanu, Waterfall and Sunset tanah lot Temple (Canggu)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 114.43",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/north-bali-ulundanu-waterfall-and-sunset-tanah-lot-temple-canggu/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "How long is the north Bali day trip from Canggu?", a: "Nine to ten hours: about 1.5 hours to Jatiluwih, an hour between each of the stops, and two hours back down to Canggu." },
          { q: "Is the Handara Gate worth visiting?", a: "As a five-minute photo stop on the way past, yes. It is the entrance gate of a golf resort with a fee and a queue for the picture; it is not a temple." },
          { q: "When is Ulun Danu Beratan clear?", a: "Mornings, usually until about 11:00 or noon. The highlands cloud over by early afternoon most days, so the temple is the mid-morning stop." },
          { q: "Which waterfall fits in a north Bali day from Canggu?", a: "Banyumala or Leke Leke after lunch. Sekumpul is another hour north and needs its own day." },
        ],
      };

    case "canggu-nusa-penida-day-trip":
      return {
        title: "Nusa Penida in a Day from Canggu: The Early Boat, the West Side, and Whether the Day Is Too Long",
        seoTitle: "Nusa Penida Day Trip from Canggu 2026",
        description: "How the Canggu to Sanur to Penida day runs hour by hour, why you see one side of the island, the snorkelling add-on, and the case for staying a night instead.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/kuta-beach-surfing-lesson-1-hour-local-instructor/img0/1600.webp",
        fastFacts: [
          { icon: "car", label: "Canggu to Sanur", value: "45 to 60 minutes; pickups from 5:30" },
          { icon: "ship", label: "Boat", value: "Sanur to Penida 30 to 45 minutes, first boats around 7:00" },
          { icon: "map", label: "One side", value: "West side: Kelingking, Broken Beach, Angel's Billabong" },
          { icon: "droplet", label: "Snorkel", value: "Manta Point add-on when the swell allows" },
          { icon: "clock", label: "Back in Canggu", value: "Around 7:00pm; a 13-hour day" },
          { icon: "moon", label: "Better", value: "One night on Penida, back the next afternoon" },
        ],
        sections: [
          {
            title: "The day, hour by hour",
            icon: "clock",
            content: "Pickup in Canggu between 5:30 and 6:00, Sanur harbour by 7:00 for a fast boat that crosses in 30 to 45 minutes. On Penida a car and driver meet the boat and run the west side: Kelingking viewpoint by about 9:30, Broken Beach and Angel's Billabong, a beach stop at Crystal Bay or a lunch warung, then back to the harbour for a boat around 3:30 or 4:00, Sanur by 4:45 and Canggu in the evening traffic by about 7:00. It is a thirteen-hour day of which around five are spent in cars and boats, and it is still the most-booked day trip from the south coast, because Kelingking is Kelingking.",
            tourCard: {
              slug: "kuta-beach-surfing-lesson-1-hour-local-instructor",
              title: "Kuta Beach Surfing Lesson (1 Hour, Local Instructor)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 14.50",
              duration: "1 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/kuta-beach-surfing-lesson-1-hour-local-instructor/img0/1600.webp",
            },
          },
          {
            title: "One side, not both",
            icon: "map",
            content: "Penida's roads are narrow, and the east side, Diamond Beach, Atuh and the tree house, is an hour and a half from the west side on them. Day trips from Bali do the west; anyone selling both sides in one day from Canggu is selling four hours in a car and ten minutes at each stop. The [west vs east guide](/indonesia/nusa-penida/nusa-penida-west-vs-east) explains what each side is, and the honest advice is that the east needs a night on the island.",
            tourCard: {
              slug: "hill-side-lemukih-treeking-with-amazing-view-in-canggu",
              title: "Hill Side Lemukih Treeking with Amazing view in Canggu",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 72.66",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hill-side-lemukih-treeking-with-amazing-view-in-canggu/img0/1600.webp",
            },
          },
          {
            title: "The snorkelling add-on",
            icon: "droplet",
            content: "Many day trips combine the land tour with a snorkelling boat to Manta Point, Gamat Bay and Crystal Bay, either before the land tour from the harbour or in place of one land stop. The mantas at Manta Point are there year-round but the site is on the exposed south coast and boats skip it when the swell is up, so it is never guaranteed. With snorkelling the day is longer still, and the land stops shrink to viewpoints. If the mantas are the reason you are going, book a snorkelling-only day or stay over; see the [manta snorkelling guide](/indonesia/nusa-penida/nusa-penida-manta-snorkelling-guide).",
            tourCard: {
              slug: "bali-surfing-lessons-at-kedungu-beach-with-private-transfer-canggu",
              title: "Bali Surfing Lessons at Kedungu Beach with Private Transfer (Canggu)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 99.18",
              duration: "6 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/bali-surfing-lessons-at-kedungu-beach-with-private-transfer-canggu/img0/1600.webp",
            },
          },
          {
            title: "The case for a night",
            icon: "moon",
            content: "From Canggu specifically, a night on Penida removes three hours of driving and lets you do the west side in the afternoon light and the east side the next morning before the boat back. Accommodation on the island is simple and cheap, and the difference in the day is large. If you have only the one day, take it, leave on the first boat, and accept that it is long; the [day trip or overnight guide](/indonesia/nusa-penida/nusa-penida-day-trip-or-overnight) sets the two against each other in detail, and [getting to Nusa Penida](/indonesia/nusa-penida/getting-to-nusa-penida) covers the harbours and boats.",
            tourCard: {
              slug: "night-street-food-walking-tour-in-canggu",
              title: "Night Street Food Walking Tour in Canggu",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 83.92",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/night-street-food-walking-tour-in-canggu/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "How long is a Nusa Penida day trip from Canggu?", a: "About thirteen hours door to door: pickup around 5:30, the 7:00 boat from Sanur, the west side of the island, a boat back at 3:30 to 4:00 and Canggu by about 7:00pm." },
          { q: "Can you see both sides of Nusa Penida in one day from Canggu?", a: "Not sensibly. The east side is an hour and a half from the west on narrow roads. Day trips do the west; the east needs a night on the island." },
          { q: "Which harbour do Penida boats leave from for Canggu?", a: "Sanur, 45 to 60 minutes from Canggu. Boats take 30 to 45 minutes and the first departures are around 7:00." },
          { q: "Is it better to stay a night on Nusa Penida?", a: "From Canggu, yes if you can: it removes three hours of driving and lets you see both sides. A day trip works if you leave on the first boat." },
        ],
      };

    default:
      return null;
  }
}
