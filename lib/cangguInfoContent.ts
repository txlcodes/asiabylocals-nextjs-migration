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

    default:
      return null;
  }
}
