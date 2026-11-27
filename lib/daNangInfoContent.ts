// Da Nang authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getDaNangInfoContent() -> getCityInfoContent().
import type { CityInfoData } from './cityInfoContent';

const IMG = 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201269/asiabylocals/tours/ba-na-hills-and-golden-bridge-cable-car-ticket-in-da-nang/img0.jpg';

export function getDaNangInfoContent(slug: string): CityInfoData | null {
  switch (slug) {

    case "ba-na-hills-golden-bridge-guide":
      return {
        title: "Ba Na Hills and the Golden Bridge: Crowds, Timing and What It Really Is",
        seoTitle: "Ba Na Hills Golden Bridge Guide 2026",
        description: "How to get the bridge without the queue, what the rest of the hilltop is, and why the weather up there is a different day.",
        heroImage: IMG,
        fastFacts: [
          { icon: "cable-car", label: "Getting up", value: "Cable car; among the longest non-stop systems in the world" },
          { icon: "clock", label: "Go early", value: "First cars up, before roughly 9am" },
          { icon: "thermometer", label: "Up top", value: "Often 8-10°C cooler than Da Nang" },
          { icon: "cloud", label: "Visibility", value: "Cloud sits on the hill often; mornings are clearer" },
          { icon: "users", label: "Expect", value: "A theme park, not a quiet viewpoint" },
        ],
        sections: [
          {
            title: "Ba Na Hills and the Golden Bridge: Crowds, Timing and What It Really Is",
            icon: "cable-car",
            content: "The Golden Bridge, held up by two enormous stone hands, is the most photographed object in central Vietnam and it is a short walkway at the top of a hill resort.\n\nThat is worth knowing before you go, because a lot of people arrive expecting a remote mountain structure and find a French-themed village with rides, restaurants and a great many other visitors.\n\nIf you take it for what it is, it is a genuinely good day out and the cable car ride is remarkable on its own. If you are only there for one photograph, understand that hundreds of other people are there for the same one.",
            tourCard: {
              slug: "bana-hills-and-golden-bridge-small-group-tour-in-da-nang",
              title: "Ba Na Hills and Golden Bridge Small-Group Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 26",
              duration: "8.5 hours",
              image: IMG,
            },
          },
          {
            title: "Timing, which decides the whole day",
            icon: "clock",
            content: "⚠️ The bridge is at its emptiest in the first hour after opening and effectively never empty after mid-morning.\n\nThe tours that leave Da Nang early and go straight up are worth the earlier start. Tours that stop somewhere first arrive into the queue.\n\nCloud is the other reason mornings win. The hill makes its own weather and by afternoon it is frequently inside a cloud, which means no view from the bridge at all and a cable car ride through white.\n\nWeekends and Vietnamese public holidays are substantially busier than weekdays. A Tuesday in a shoulder month is a different experience from a Saturday in July.",
          },
          {
            title: "What to bring up the hill",
            icon: "shirt",
            content: "It is meaningfully colder at the top, often eight to ten degrees below Da Nang, and windier. People go up in beach clothes and regret it.\n\nTake a layer, and something waterproof in the wet season, because a shower up there arrives without warning.\n\nAllow more time than you expect. The cable car queue at peak times can be long in both directions, and the descent queue late in the afternoon is the one that catches people with an evening flight.",
          },
        ],
      };

    case "marble-mountains-guide":
      return {
        title: "The Marble Mountains: The Lift, the Caves and Which Peak to Climb",
        seoTitle: "Marble Mountains Da Nang Guide 2026",
        description: "Five limestone hills between Da Nang and Hoi An, the one you actually climb, and the cave that is worth the extra ticket.",
        heroImage: IMG,
        fastFacts: [
          { icon: "mountain", label: "The hills", value: "Five peaks named for the elements; one is open to visitors" },
          { icon: "arrow-up", label: "Getting up", value: "A lift, or a long staircase" },
          { icon: "flashlight", label: "Am Phu cave", value: "A separate ticket; the Buddhist hell cave" },
          { icon: "clock", label: "Allow", value: "Two to three hours for the main peak" },
          { icon: "thermometer", label: "Inside", value: "Caves are cool; the steps outside are not" },
        ],
        sections: [
          {
            title: "The Marble Mountains: The Lift, the Caves and Which Peak to Climb",
            icon: "mountain",
            content: "Five marble and limestone hills rise straight out of flat coastal land between Da Nang and Hoi An, each named after one of the five elements. Only Thuy Son, the water mountain, is developed for visitors, and it is the one every tour means.\n\nInside it are caves that have been used as Buddhist and Hindu shrines for centuries, with pagodas built into the rock and openings in the ceiling that drop shafts of light onto altars.\n\nIt is a short visit with a lot in it, and it works well as a half day paired with something else rather than as a day on its own.",
            tourCard: {
              slug: "marble-mountain-monkey-mountain-and-am-phu-cave-tour-in-da-nang",
              title: "Marble Mountain, Monkey Mountain and Am Phu Cave Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 30",
              duration: "4.5 hours",
              image: IMG,
            },
          },
          {
            title: "The lift, and whether to take it",
            icon: "arrow-up",
            content: "There is a lift up the side of Thuy Son and there is a staircase. The lift costs a small extra fee and saves a climb of well over a hundred steps in heat.\n\nTaking the lift up and walking down is the arrangement most people are happiest with. The descent passes several shrines the lift skips and is much easier than the ascent.\n\nThere are still steps once you are up there, including narrow and uneven ones inside the caves, so the lift removes the worst of it rather than all of it. Shoes with grip help: the marble underfoot is polished by centuries of feet and is slippery when damp.",
          },
          {
            title: "Am Phu cave, which is a separate thing",
            icon: "flashlight",
            content: "Am Phu is at the base rather than the top and needs its own ticket, which is why some tours include it and some do not.\n\nIt is a depiction of the Buddhist hell, laid out as a descent into the dark past scenes of judgment and punishment, with a climb back up towards the light. It is genuinely atmospheric and a little unnerving, and it is unlike anything else at the site.\n\nIt is dark and uneven. A phone torch is worth having, and it is not the right place for anyone unsteady on their feet.",
          },
        ],
      };

    case "getting-around-da-nang":
      return {
        title: "Getting Around Da Nang and On to Hoi An",
        seoTitle: "Da Nang Transport Guide 2026",
        description: "The 45 minutes between Da Nang and Hoi An, the Hai Van Pass, and how the two cities split a trip.",
        heroImage: IMG,
        fastFacts: [
          { icon: "car", label: "Da Nang to Hoi An", value: "About 45 minutes by road" },
          { icon: "plane", label: "The airport", value: "Inside the city, about 10 minutes from the beach strip" },
          { icon: "mountain", label: "Hai Van Pass", value: "North towards Hue; the scenic route, not the fast one" },
          { icon: "train", label: "By rail", value: "The Da Nang to Hue line is one of Vietnam's best rides" },
          { icon: "bike", label: "In the city", value: "Ride-hailing apps work well and are cheap" },
        ],
        sections: [
          {
            title: "Getting Around Da Nang and On to Hoi An",
            icon: "car",
            content: "Da Nang and Hoi An are forty-five minutes apart and most visitors use one as a base and day-trip to the other. Which way round is worth thinking about.\n\nDa Nang is a modern coastal city: a long beach, big hotels, bridges lit at night, and an international airport inside the city. It is easy and it is not especially characterful.\n\nHoi An is the old town, smaller, prettier and busier in the evenings, with its own beaches a short ride away.\n\nMost people who have done both say stay in Hoi An and day-trip to Da Nang, unless you want a resort beach holiday, in which case reverse it.",
            tourCard: {
              slug: "transfer-from-da-nang-to-hoian-or-vice-versa",
              title: "Transfer Between Da Nang and Hoi An",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 19",
              duration: "45 minutes",
              image: IMG,
            },
          },
          {
            title: "The Hai Van Pass",
            icon: "mountain",
            content: "The pass climbs over the mountains between Da Nang and Hue and is one of the great coastal roads anywhere. There is now a tunnel underneath it, which is what buses and most traffic use, so the pass itself is quieter than it used to be.\n\nThat means a transfer to Hue can go either way, and the fast way misses the entire point. If you are moving between the two cities, pay for the route over the top.\n\nThe train takes a lower line along the coast and is a genuinely spectacular ride in its own right, arguably better than the road for scenery and much better for not watching the road.\n\nCloud sits on the pass often. A clear day is luck rather than planning.",
          },
          {
            title: "Getting around the city itself",
            icon: "bike",
            content: "Ride-hailing apps work throughout Da Nang and are inexpensive, which makes them the default for most visitors. Car and motorbike options both appear in the same apps.\n\nThe beach strip is long and the distances along it are further than they look on a map, so walking from one end to the other is not the plan it appears to be.\n\nThe Dragon Bridge breathes fire and water on weekend evenings. It is a short show, it draws a crowd, and the bridge closes to traffic around it, which is worth knowing if you are trying to cross the river at that hour.",
          },
        ],
      };

    case "best-time-to-visit-da-nang":
      return {
        title: "Best Time to Visit Da Nang: The Dry Months, the October Floods, Beach Season, and the Hai Van Pass in Cloud",
        seoTitle: "Best Time to Visit Da Nang 2026",
        description: "Central Vietnam's weather is its own, out of step with Hanoi and Saigon. The dry season from February to August, the typhoon and flood months, sea conditions for My Khe, and when Ba Na and the pass are clear.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/da-nang-or-hue-hai-van-pass-scenic-train-ticket-by-local-operator/img0/1600.webp",
        fastFacts: [
          { icon: "sun", label: "Dry season", value: "February to August" },
          { icon: "cloud", label: "Wet season", value: "September to January; October and November wettest" },
          { icon: "thermometer", label: "Hottest", value: "June to August, 33 to 36 degrees" },
          { icon: "droplet", label: "Sea", value: "Calm March to August; rough and red-flagged Oct to Feb" },
          { icon: "calendar", label: "Sweet spot", value: "February to April" },
          { icon: "wind", label: "Typhoons", value: "September to November" },
        ],
        sections: [

          {
            title: "A different calendar",
            icon: "sun",
            content: "Da Nang sits on the central coast, where the weather runs opposite to the north and south: the dry, hot season is February to August, and the rain arrives in September and peaks in October and November, when typhoons and the north-east monsoon bring days of continuous rain and the Thu Bon and Han rivers flood. Hanoi and Saigon guides will tell you December is dry; in Da Nang it is grey and cool with a rough sea. Plan central Vietnam by its own clock.",
            tourCard: {
              slug: "da-nang-or-hue-hai-van-pass-scenic-train-ticket-by-local-operator",
              title: "Da Nang or Hue: Hai Van Pass Scenic Train Ticket by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 31.50",
              duration: "3.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/da-nang-or-hue-hai-van-pass-scenic-train-ticket-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Month by month",
            icon: "calendar",
            content: "February to April: the best months, 24 to 30 degrees, dry, the sea calming, the rice green, Ba Na and the pass mostly clear. May to August: hot (33 to 36) and sunny, the beach season, with domestic holiday crowds in June and July and the fire on the Dragon Bridge every weekend night. September: the change, with the first typhoon risk. October and November: the wettest months in Vietnam, flooding in Hoi An's old town some years, Ba Na in cloud, Cham Island closed. December and January: cooler (20 to 25), drizzly, the sea unswimmable, but the town quiet and the pass dramatic on clear days.",
            tourCard: {
              slug: "hai-van-pass-easy-rider-motorbike-with-swimming-in-da-nang",
              title: "Hai Van Pass Easy Rider Motorbike with Swimming in Da Nang",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 155.50",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hai-van-pass-easy-rider-motorbike-with-swimming-in-da-nang/img0/1600.webp",
            },
          },
          {
            title: "What the weather changes",
            icon: "map",
            content: "The beach and Cham Island are a March-to-August proposition. Ba Na Hills at 1,400 metres is often inside cloud from October to January, when the Golden Bridge photographs are grey; the [Ba Na guide](/vietnam/da-nang/ba-na-hills-golden-bridge-guide) covers it. The Hai Van Pass is clearest in the dry months and spectacular in cloud, which is a matter of taste. The Marble Mountains and the city are fine in any month with a rain jacket. Hoi An's lantern evenings run year-round.",
            tourCard: {
              slug: "hai-van-pass-and-hue-city-explore-1-day-tour-da-nang",
              title: "HAI VAN PASS and HUE CITY EXPLORE 1 DAY TOUR (Da Nang)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 72.50",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hai-van-pass-and-hue-city-explore-1-day-tour-da-nang/img0/1600.webp",
            },
          },
          {
            title: "Crowds and prices",
            icon: "users",
            content: "The tourist peak is February to April, with Vietnamese holiday crowds at the beach in June and July and around the 30 April and 1 May holidays. Hotel rates drop sharply from October to January, when the weather is the reason. Tet (late January or February) brings the domestic holiday and closures. The [getting around](/vietnam/da-nang/getting-around-da-nang) page has the transport for any month.",
            tourCard: {
              slug: "hue-imperial-city-royal-tomb-and-hai-van-pass-full-day-tour-da-nang",
              title: "Hue Imperial City, Royal Tomb and Hai Van Pass Full-Day Tour (Da Nang)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 70.50",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hue-imperial-city-royal-tomb-and-hai-van-pass-full-day-tour-da-nang/img0/1600.webp",
            },
          },
          {
            title: "Booking sense",
            icon: "clock",
            content: "February to April for the classic trip, May to August for the beach with early starts, September to January only with a rain plan and no beach expectations. Tours run in all months; Cham Island boats and Ba Na cable car close only in storms. If a typhoon is forecast the operators reschedule and refund, and Da Nang airport is the one that closes, so keep a day of slack in October and November.",
            tourCard: {
              slug: "easy-rider-expedition-via-hai-van-pass-and-ho-chi-minh-trails-da-nang",
              title: "Easy Rider Expedition via Hai Van Pass and Ho Chi Minh Trails (Da Nang)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 77.00",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/easy-rider-expedition-via-hai-van-pass-and-ho-chi-minh-trails-da-nang/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "What is the best month to visit Da Nang?", a: "February to April: dry, warm, calm sea and clear mountains. May to August is hotter and is the beach season." },
          { q: "When is the rainy season in Da Nang?", a: "September to January, with October and November the wettest months, typhoons and flooding possible." },
          { q: "Can you swim in Da Nang in December?", a: "Usually not. The sea is rough and often red-flagged from October to February; swimming season is March to August." },
          { q: "Is Ba Na Hills clear in winter?", a: "Often not: at 1,400 metres it sits in cloud much of October to January. February to August gives the best chance of a clear Golden Bridge." },
        ],
      };

    case "hai-van-pass-guide":
      return {
        title: "The Hai Van Pass: Driving It, Riding It Pillion, the Bunkers on the Summit, and Whether to Go One Way to Hue",
        seoTitle: "Hai Van Pass Guide 2026",
        description: "The cloud pass between Da Nang and Hue: its history, the 20 km of hairpins, the French and American bunkers, Lang Co below, the motorbike and car options, the one-way transfer trick, and the weather that makes or breaks it.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/da-nang-or-hue-hai-van-pass-scenic-train-ticket-by-local-operator/img0/1600.webp",
        fastFacts: [
          { icon: "mountain", label: "Height", value: "496 m at the summit gate" },
          { icon: "map", label: "Route", value: "Da Nang to Lang Co, about 21 km of pass road" },
          { icon: "clock", label: "Time", value: "2 hours over the pass with stops; Da Nang to Hue 4 to 5 hours by motorbike" },
          { icon: "bike", label: "Format", value: "Pillion with an Easy Rider, self-drive, or private car" },
          { icon: "ticket", label: "Price", value: "USD 45 to 80 pillion one-way to Hue; car USD 60 to 110" },
          { icon: "cloud", label: "Name", value: "Hai Van means sea cloud; often in mist" },
        ],
        sections: [

          {
            title: "What it is",
            icon: "mountain",
            content: "The Hai Van Pass is the spur of the Truong Son mountains that runs into the sea between Da Nang and Hue, the historic border between Champa and Dai Viet and the climate line between the tropical south and the cooler north. The old Highway 1 climbs it in 20 kilometres of hairpins to a 496-metre gate, with the bay of Da Nang on one side and the Lang Co lagoon on the other; since the 2005 tunnel took the trucks, the pass road is quiet, and a British motoring programme's visit in 2008 made it famous. It is the best drive in Vietnam by a distance.",
            tourCard: {
              slug: "da-nang-or-hue-hai-van-pass-scenic-train-ticket-by-local-operator",
              title: "Da Nang or Hue: Hai Van Pass Scenic Train Ticket by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 31.50",
              duration: "3.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/da-nang-or-hue-hai-van-pass-scenic-train-ticket-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "The summit",
            icon: "landmark",
            content: "At the top stand the Hai Van Quan gate, built in 1826 by Emperor Minh Mang and restored in 2024, and the concrete bunkers the French built and the Americans reused, pocked with bullet holes, which you can climb for the view both ways. On a clear day you see Da Nang's whole bay to the south and the lagoon and the railway threading the cliffs to the north. Vendors sell coffee and coconuts. Cloud can close in within minutes; the name is the warning.",
            tourCard: {
              slug: "hai-van-pass-and-hue-city-explore-1-day-tour-da-nang",
              title: "HAI VAN PASS and HUE CITY EXPLORE 1 DAY TOUR (Da Nang)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 72.50",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hai-van-pass-and-hue-city-explore-1-day-tour-da-nang/img0/1600.webp",
            },
          },
          {
            title: "Pillion, car or self-drive",
            icon: "bike",
            content: "The Easy Rider format, riding pillion behind a local driver on a motorbike, is the classic: the wind, the stops wherever you like, the Lang Co seafood lunch. A private car does the same road in comfort and is better in rain or for families. Self-drive rentals are everywhere in Hoi An and Da Nang, but a motorcycle licence and a 1968-convention international permit are legally required and travel insurance will not cover you without them; the police check at the pass. The pillion or car keeps it simple.",
            tourCard: {
              slug: "private-hue-trip-via-hai-van-pass",
              title: "Private Hue Trip via Hai Van Pass",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 86.00",
              duration: "12 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/private-hue-trip-via-hai-van-pass/img0/1600.webp",
            },
          },
          {
            title: "One way to Hue",
            icon: "map",
            content: "The pass is the road from Da Nang or Hoi An to Hue, and the best way to do it is one-way with luggage: your bags go ahead in a car (or on the support vehicle of an Easy Rider company), you ride the pass with stops at the summit, Lang Co beach and the Elephant Springs, and arrive in Hue by mid-afternoon. Round trips from Da Nang or Hoi An are fine but repeat the road. The [Da Nang day trips](/vietnam/da-nang/marble-mountains-guide) alternative is the Marble Mountains half day if the weather is bad.",
            tourCard: {
              slug: "private-hue-day-trip-with-imperial-via-hai-van-pass",
              title: "Private Hue Day Trip with Imperial Via Hai Van Pass",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 99.00",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/private-hue-day-trip-with-imperial-via-hai-van-pass/img0/1600.webp",
            },
          },
          {
            title: "Weather and practical",
            icon: "cloud",
            content: "February to August gives the clearest days; October to January the pass is often in cloud and rain, which is atmospheric on a good day and pointless on a bad one. Bring a jacket, it is 5 degrees cooler on top. Helmets are provided and compulsory; closed shoes and long trousers for pillion. The [best time to visit](/vietnam/da-nang/best-time-to-visit-da-nang) page has the months. The train from Da Nang to Hue runs the cliff line below the pass and is the alternative view for USD 5.",
            tourCard: {
              slug: "hue-imperial-city-royal-tomb-and-hai-van-pass-full-day-tour-da-nang",
              title: "Hue Imperial City, Royal Tomb and Hai Van Pass Full-Day Tour (Da Nang)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 70.50",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hue-imperial-city-royal-tomb-and-hai-van-pass-full-day-tour-da-nang/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Can I drive the Hai Van Pass myself?", a: "Legally only with a motorcycle licence and a 1968-convention international permit; without them insurance is void and police check at the pass. Riding pillion with an Easy Rider driver or taking a private car avoids the issue." },
          { q: "How long does the Hai Van Pass take?", a: "About two hours over the pass with stops; Da Nang or Hoi An to Hue with the pass, Lang Co and lunch takes four to six hours." },
          { q: "Is the Hai Van Pass worth it?", a: "Yes, it is the best road in Vietnam: hairpins over the sea, bunkers on the summit and the lagoon beyond. Go one-way to Hue with your luggage sent ahead." },
          { q: "When is the Hai Van Pass clear?", a: "Most often from February to August. In October to January it is frequently in cloud and rain." },
        ],
      };

    case "da-nang-beaches-and-water-sports":
      return {
        title: "Da Nang's Beaches: My Khe, Non Nuoc, Son Tra's Coves, the Swimming Season, and Water Sports",
        seoTitle: "Da Nang Beaches & Water Sports 2026",
        description: "Which stretch of Da Nang's 30 km of sand to use, the flags and rip currents, the March to August swimming season, the quiet coves under Son Tra, and what the water-sports operators actually offer.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/son-tra-peninsula-sunrise-or-sunset-jeep-tour-in-da-nang/img0/1600.webp",
        fastFacts: [
          { icon: "sun", label: "Main beach", value: "My Khe, 10 km of sand along the city" },
          { icon: "droplet", label: "Swimming", value: "March to August; rough and flagged Oct to Feb" },
          { icon: "map", label: "Quiet", value: "Son Tra's coves: Bai But, Bai Rang, Tien Sa" },
          { icon: "users", label: "Lifeguards", value: "On My Khe in season, flags and zones" },
          { icon: "ship", label: "Sports", value: "Jet ski, parasailing, SUP, surfing lessons in the off-season swell" },
          { icon: "clock", label: "Best hours", value: "Before 9:00 and after 16:00 in summer" },
        ],
        sections: [

          {
            title: "The coast",
            icon: "sun",
            content: "Da Nang's beach runs 30 kilometres from the Son Tra peninsula south to the Marble Mountains and on to Hoi An, and My Khe is the city's stretch: wide, white, backed by a promenade and the resort strip, with lifeguards, showers and rows of umbrellas from the Pham Van Dong end southwards. Non Nuoc, below the Marble Mountains, is the resort beach. Between them the sand is continuous and mostly empty on a weekday morning. The water is clean; the sand gets hot by ten.",
            tourCard: {
              slug: "son-tra-peninsula-sunrise-or-sunset-jeep-tour-in-da-nang",
              title: "Son Tra Peninsula Sunrise or Sunset Jeep Tour in Da Nang",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 227.50",
              duration: "4.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/son-tra-peninsula-sunrise-or-sunset-jeep-tour-in-da-nang/img0/1600.webp",
            },
          },
          {
            title: "The season and the flags",
            icon: "droplet",
            content: "From March to August the sea is calm and warm and the beach is the reason to be in Da Nang. From October to February the north-east monsoon brings big swell, rips and red flags, and swimming is banned on the flagged days; the sand is still walkable and the surfers come. Swim between the flags and near the lifeguard towers on My Khe; the rips off the empty stretches have caught strong swimmers. Early morning and late afternoon are the Vietnamese beach hours, when the city comes down to exercise and swim.",
            tourCard: {
              slug: "sunrise-photo-tour-and-discover-da-nang-city-by-local-operator",
              title: "Sunrise Photo Tour and Discover Da Nang City by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 67.50",
              duration: "7 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sunrise-photo-tour-and-discover-da-nang-city-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Son Tra's coves",
            icon: "map",
            content: "The Son Tra peninsula north of the city is a forested nature reserve with the Lady Buddha at Linh Ung pagoda, the last red-shanked douc langurs, and small coves reached by the coast road: Bai But with its beach club, Bai Rang, and the Tien Sa area. They are quieter than My Khe, some with snorkelling on calm days, and a motorbike or taxi ride of 20 to 30 minutes. The road loops the peninsula with viewpoints over the whole bay; combine it with the pagoda for a half day.",
            tourCard: {
              slug: "3-day-wildlife-photography-experience-in-son-tra-in-da-nang",
              title: "3-Day Wildlife Photography Experience in Son Tra in Da Nang",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 376.00",
              duration: "3 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/3-day-wildlife-photography-experience-in-son-tra-in-da-nang/img0/1600.webp",
            },
          },
          {
            title: "Water sports",
            icon: "ship",
            content: "My Khe's operators run jet skis, parasailing, banana boats and stand-up paddleboards from the central beach in season, priced per 15 or 30 minutes; agree the price and time before starting. Surfing is an off-season sport here, with lessons on the smaller days from October to March. Snorkelling and diving are done from Cham Island out of Hoi An, not from Da Nang's beaches. Sunset SUP sessions on the calm summer evenings are the pleasant one.",
            tourCard: {
              slug: "son-tra-peninsula-explorer-classic-us-army-jeep-adventure-in-da-nang",
              title: "Son Tra Peninsula Explorer: Classic US Army Jeep Adventure in Da Nang",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 153.50",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/son-tra-peninsula-explorer-classic-us-army-jeep-adventure-in-da-nang/img0/1600.webp",
            },
          },
          {
            title: "Practical",
            icon: "clock",
            content: "Sunbeds and umbrellas are rented by the day along the resort stretch; the public stretch north of it is free. Change and shower at the beach facilities on the promenade. In summer keep midday for the pool or the [Marble Mountains](/vietnam/da-nang/marble-mountains-guide) caves. The [best time to visit](/vietnam/da-nang/best-time-to-visit-da-nang) page covers the months, and Hoi An's An Bang beach is the calmer family option 25 km south.",
            tourCard: {
              slug: "son-tra-peninsula-sea-adventure-and-nature-tour-in-da-nang",
              title: "Son Tra Peninsula Sea Adventure and Nature Tour in Da Nang",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 199.50",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/son-tra-peninsula-sea-adventure-and-nature-tour-in-da-nang/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Which is the best beach in Da Nang?", a: "My Khe for facilities and lifeguards, Non Nuoc for the resorts, and the Son Tra coves for quiet. All are on the same 30 km strip." },
          { q: "When can you swim in Da Nang?", a: "March to August. From October to February the sea is rough with rips and red flags most days." },
          { q: "Are there lifeguards on My Khe beach?", a: "Yes, in season, with flagged swimming zones near the towers. Swim between the flags; rips off the empty stretches are dangerous." },
          { q: "What water sports are there in Da Nang?", a: "Jet ski, parasailing, banana boats and SUP on My Khe in summer; surfing lessons in the off-season swell; snorkelling from Cham Island out of Hoi An." },
        ],
      };

    case "hue-day-trip-from-da-nang":
      return {
        title: "Hue from Da Nang: The Imperial City, Which Tombs to Choose, Thien Mu, and Doing It in a Day over the Pass",
        seoTitle: "Hue Day Trip from Da Nang 2026",
        description: "How to see the Nguyen capital in a day from Da Nang or Hoi An: the citadel's layout and entry, the three tombs worth the drive and which one to pick, the pagoda on the river, the Hai Van route, food, and when a night in Hue is better.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hue-imperial-citadel-tombs-perfume-river-boat-tour-and-van-da-nang/img0/1600.webp",
        fastFacts: [
          { icon: "landmark", label: "Imperial City", value: "Nguyen capital 1802 to 1945, UNESCO 1993" },
          { icon: "map", label: "From Da Nang", value: "100 km, 2.5 hours via the Hai Van Pass, 2 by the tunnel" },
          { icon: "ticket", label: "Entry", value: "Citadel around 200,000 dong; each tomb 100,000 to 150,000" },
          { icon: "clock", label: "Day length", value: "10 to 12 hours round trip" },
          { icon: "utensils", label: "Eat", value: "Bun bo Hue, banh khoai, the imperial small dishes" },
          { icon: "calendar", label: "Weather", value: "Wetter and cooler than Da Nang; October to January is the rain" },
        ],
        sections: [

          {
            title: "Hue in a day",
            icon: "landmark",
            content: "Hue was the capital of the Nguyen emperors from 1802 until Bao Dai abdicated in 1945, and its Imperial City, a walled palace complex inside the citadel on the Perfume River modelled on Beijing's Forbidden City, was largely destroyed in the 1968 Tet Offensive and is being rebuilt hall by hall. A day trip from Da Nang or Hoi An is standard: two to three hours each way, and six hours in Hue for the citadel, one or two tombs, the pagoda and lunch. It is a long day and a rewarding one; a night in Hue is better if the itinerary allows.",
            tourCard: {
              slug: "hue-imperial-citadel-tombs-perfume-river-boat-tour-and-van-da-nang",
              title: "Hue Imperial Citadel, Tombs, Perfume River Boat Tour and Van (Da Nang)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 21.50",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hue-imperial-citadel-tombs-perfume-river-boat-tour-and-van-da-nang/img0/1600.webp",
            },
          },
          {
            title: "The citadel",
            icon: "map",
            content: "Enter by the Ngo Mon gate, cross to the Thai Hoa throne hall, then the ruined and restored courtyards behind: the Forbidden Purple City's foundations, the To Mieu temple with the nine dynastic urns, the restored Kien Trung palace (reopened 2024), and the Royal Theatre, where a short court-music performance runs a few times a day. Two hours with a guide, who is worth having here more than anywhere in Vietnam because so much is absent and needs explaining. Shoulders and knees covered inside the temples.",
            tourCard: {
              slug: "hue-imperial-city-royal-tombs-and-thien-mu-pagoda",
              title: "Hue Imperial City, Royal Tombs and Thien Mu Pagoda",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 73.00",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hue-imperial-city-royal-tombs-and-thien-mu-pagoda/img0/1600.webp",
            },
          },
          {
            title: "The tombs",
            icon: "landmark",
            content: "Seven Nguyen emperors built tombs along the river south of the city, each to his own taste, and a day allows two. Tu Duc's, the most beautiful, is a lakeside park of pavilions where the emperor wrote poetry; Khai Dinh's, up 127 steps, is a 1920s concrete-and-mosaic extravagance, small and startling; Minh Mang's is the most classically composed, symmetrical along a lake. Tu Duc and Khai Dinh are the usual pair and sit close together. Each has its own ticket; combined citadel-and-tombs tickets save a little.",
            tourCard: {
              slug: "hue-imperial-city-royal-tomb-and-hai-van-pass-full-day-tour-da-nang",
              title: "Hue Imperial City, Royal Tomb and Hai Van Pass Full-Day Tour (Da Nang)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 70.50",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hue-imperial-city-royal-tomb-and-hai-van-pass-full-day-tour-da-nang/img0/1600.webp",
            },
          },
          {
            title: "Thien Mu and the river",
            icon: "ship",
            content: "Thien Mu pagoda, the seven-storey tower on the riverbank west of the city, is Hue's symbol and the home of the Austin car that carried Thich Quang Duc to his 1963 self-immolation in Saigon. Dragon-boat rides on the Perfume River from the city to the pagoda are the pleasant half hour between the citadel and the tombs; tours include them or a taxi. The [Hai Van Pass guide](/vietnam/da-nang/hai-van-pass-guide) covers the road there.",
            tourCard: {
              slug: "han-river-night-boat-trip-with-show-on-weekends-in-da-nang",
              title: "Han River Night Boat Trip with Show on Weekends in Da Nang",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 9.00",
              duration: "1.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/han-river-night-boat-trip-with-show-on-weekends-in-da-nang/img0/1600.webp",
            },
          },
          {
            title: "Practical",
            icon: "calendar",
            content: "Group day tours from Da Nang or Hoi An with lunch run USD 45 to 80 per person via the tunnel; private cars USD 90 to 150 for the day, more via the pass. Take the pass one way at least. Hue is 3 to 5 degrees cooler and much wetter than the coast from October to January, so pack a jacket and a rain layer. Bun bo Hue, the beef and lemongrass noodle soup, is the lunch; the imperial small dishes (banh beo, banh nam, banh loc) are the afternoon snack. The [best time to visit Da Nang](/vietnam/da-nang/best-time-to-visit-da-nang) page has the seasons.",
            tourCard: {
              slug: "da-nang-or-hue-hai-van-pass-scenic-train-ticket-by-local-operator",
              title: "Da Nang or Hue: Hai Van Pass Scenic Train Ticket by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 31.50",
              duration: "3.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/da-nang-or-hue-hai-van-pass-scenic-train-ticket-by-local-operator/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Can you do Hue as a day trip from Da Nang?", a: "Yes: 2 to 2.5 hours each way and six hours in Hue for the citadel, two tombs, Thien Mu pagoda and lunch. It is a 10- to 12-hour day; a night in Hue is better if you have it." },
          { q: "Which Hue tombs are best?", a: "Tu Duc for the setting, Khai Dinh for the mosaics; they are close together and are the usual pair. Minh Mang for classical symmetry if you have time for a third." },
          { q: "How much is the Hue Imperial City ticket?", a: "Around 200,000 dong for the citadel; each tomb 100,000 to 150,000. Combined tickets save a little." },
          { q: "Should I go via the Hai Van Pass or the tunnel?", a: "The pass at least one way: it is the best road in Vietnam. The tunnel is 30 minutes faster and the choice in heavy rain." },
        ],
      };

    case "da-nang-2-day-itinerary":
      return {
        title: "Two Days in Da Nang: Marble Mountains, Son Tra and Lady Buddha, Ba Na Hills, the Beach, and the Dragon Bridge",
        seoTitle: "Da Nang 2-Day Itinerary 2026",
        description: "A realistic two-day plan for Da Nang: the sights in the order that beats the heat and the crowds, when to do Ba Na, the fire-breathing bridge, where to eat, and how Hoi An and Hue fit around it.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/marble-mountains-lady-buddha-and-am-phu-cave-tour-da-nang/img0/1600.webp",
        fastFacts: [
          { icon: "clock", label: "Day 1", value: "Marble Mountains early, Son Tra and Lady Buddha, beach, Dragon Bridge night" },
          { icon: "ticket", label: "Day 2", value: "Ba Na Hills from opening, or the Hai Van Pass" },
          { icon: "map", label: "Base", value: "My Khe beach strip or the Han river side" },
          { icon: "utensils", label: "Eat", value: "Mi quang, banh xeo, seafood on the beach road" },
          { icon: "calendar", label: "Dragon fire", value: "Saturday and Sunday nights, 21:00" },
          { icon: "sun", label: "Beach", value: "March to August" },
        ],
        sections: [

          {
            title: "Day 1: mountains, peninsula, beach",
            icon: "map",
            content: "Start at the Marble Mountains at 7:30, before the heat: the lift or the steps up Thuy Son, the Huyen Khong cave with its shaft of light, the pagodas and the view over the coast, ninety minutes. Then the Son Tra peninsula by taxi or motorbike: the 67-metre Lady Buddha at Linh Ung pagoda, the coast road viewpoints, and if you are lucky the red-shanked douc langurs in the trees. Lunch on the beach road, the afternoon on My Khe in season or at the pool, and the [Marble Mountains guide](/vietnam/da-nang/marble-mountains-guide) has the caves in detail.",
            tourCard: {
              slug: "marble-mountains-lady-buddha-and-am-phu-cave-tour-da-nang",
              title: "Marble Mountains, Lady Buddha and Am Phu Cave Tour (Da Nang)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 33.00",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/marble-mountains-lady-buddha-and-am-phu-cave-tour-da-nang/img0/1600.webp",
            },
          },
          {
            title: "Day 1 evening: the river",
            icon: "moon",
            content: "Da Nang's night is the Han river: the Dragon Bridge breathes fire and water at 21:00 on Saturday and Sunday nights (crowds line the east bank from 20:30), the Love Bridge and the carp statue beside it, the night market on the east bank, and the rooftop bars on the west side for the lit bridges. Seafood restaurants along the beach road and the Han Market's food stalls cover dinner; mi quang, the turmeric noodle of the province, is the local dish.",
            tourCard: {
              slug: "han-river-night-boat-trip-with-show-on-weekends-in-da-nang",
              title: "Han River Night Boat Trip with Show on Weekends in Da Nang",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 9.00",
              duration: "1.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/han-river-night-boat-trip-with-show-on-weekends-in-da-nang/img0/1600.webp",
            },
          },
          {
            title: "Day 2: Ba Na Hills or the pass",
            icon: "ticket",
            content: "Ba Na Hills is a full day: leave at 7:00 to ride the cable car at opening, see the Golden Bridge before 9:00 when it is still walkable, then the French village, the gardens and the Fantasy Park, and come down after lunch when the crowds are thickest going up. The [Ba Na guide](/vietnam/da-nang/ba-na-hills-golden-bridge-guide) has tickets and timing. The alternative for people who dislike theme parks is the [Hai Van Pass](/vietnam/da-nang/hai-van-pass-guide) to Lang Co and back, or one-way to Hue.",
            tourCard: {
              slug: "tien-sa-port-marble-mountain-and-ba-na-hills-golden-bridge-da-nang",
              title: "Tien Sa Port: Marble Mountain and Ba Na Hills - Golden Bridge (Da Nang)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 99.00",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tien-sa-port-marble-mountain-and-ba-na-hills-golden-bridge-da-nang/img0/1600.webp",
            },
          },
          {
            title: "Fitting in Hoi An and Hue",
            icon: "calendar",
            content: "Hoi An is 30 km south and most people sleep there rather than in Da Nang; the two-day plan above works from either base, with a 45-minute transfer. Hue is a [day trip](/vietnam/da-nang/hue-day-trip-from-da-nang) or, better, the next stop over the pass. A third day goes to Cham Island in season or to a cooking class. The [getting around](/vietnam/da-nang/getting-around-da-nang) page covers taxis, Grab and the airport.",
            tourCard: {
              slug: "da-nang-beach-and-hue-heritage-3-day-all-inclusive-tour-by-local-operator",
              title: "Da Nang Beach and Hue Heritage: 3-Day All-Inclusive Tour by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 491.50",
              duration: "3 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/da-nang-beach-and-hue-heritage-3-day-all-inclusive-tour-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Practical",
            icon: "sun",
            content: "Da Nang is hot from May to August, so the order matters: outdoor sights before 10:00, water or indoors at midday, the beach and the river after 16:00. From October to January bring a rain layer and expect Ba Na in cloud. Grab is cheap and everywhere; a private car with driver for a day runs USD 50 to 90 and removes the waiting. The [best time to visit](/vietnam/da-nang/best-time-to-visit-da-nang) page decides the month.",
            tourCard: {
              slug: "marble-mountains-monkey-mountains-and-lady-buddha",
              title: "Marble Mountains, Monkey Mountains, and Lady Buddha",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 31.50",
              duration: "4.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/marble-mountains-monkey-mountains-and-lady-buddha/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is two days enough for Da Nang?", a: "Yes: one day for the Marble Mountains, Son Tra and the beach with the Dragon Bridge at night, one for Ba Na Hills or the Hai Van Pass. Hoi An and Hue are separate days." },
          { q: "When does the Dragon Bridge breathe fire?", a: "At 21:00 on Saturday and Sunday nights; stand on the east bank from 20:30. It sprays water after the fire, so the near end gets wet." },
          { q: "Should I stay in Da Nang or Hoi An?", a: "Hoi An for atmosphere and evenings, Da Nang for the beach and city convenience; they are 30 km apart and the itinerary works from either." },
          { q: "What is the best order for Da Nang sights?", a: "Marble Mountains first thing, Son Tra mid-morning, beach or pool in the afternoon, the river at night; Ba Na from cable-car opening on the second day." },
        ],
      };

    case "is-son-tra-wildlife-tour-worth-it-da-nang":
      return {
        title: "Is the Son Tra Wildlife Experience Worth It in Da Nang?",
        description: "An honest look at Son Tra Peninsula's wildlife-focused tour, home to the endangered red-shanked douc langur.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/son-tra-wildlife-experience-in-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Son Tra Peninsula is home to the endangered red-shanked douc langur, found almost nowhere else — this wildlife-focused tour goes beyond the standard Lady Buddha photo stop most Son Tra visits are limited to.",
            tourCard: { slug: "son-tra-wildlife-experience-in-da-nang", title: "Son Tra Wildlife Experience in Da Nang", description: "A wildlife-focused experience on Son Tra Peninsula.", price: "From $90", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/son-tra-wildlife-experience-in-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Early morning is the best time for wildlife sightings, when the langurs are most active before the day heats up.",
          },
        ],
        faqs: [
          { q: "What is the red-shanked douc langur?", a: "An endangered primate species found on Son Tra Peninsula, rare almost everywhere else." },
          { q: "Is the Son Tra wildlife tour worth it?", a: "Yes, for travelers who want more than the standard Lady Buddha photo stop." },
        ],
      };

    case "is-vietnamese-cooking-class-worth-it-da-nang":
      return {
        title: "Is a Vietnamese Cooking Class Worth It in Da Nang?",
        description: "An honest look at Da Nang's hands-on Vietnamese cooking class, including transportation.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201381/asiabylocals/tours/vietnamese-cooking-class-with-transportation-in-da-nang/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "This hands-on cooking class teaches classic Vietnamese dishes with transportation included, a good lower-key cultural activity to pair with a day of beach or mountain sightseeing.",
            tourCard: { slug: "vietnamese-cooking-class-with-transportation-in-da-nang", title: "Vietnamese Cooking Class with Transportation in Da Nang", description: "A hands-on Vietnamese cooking class with transportation included.", price: "From $60", duration: "3 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201381/asiabylocals/tours/vietnamese-cooking-class-with-transportation-in-da-nang/img0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Market visits are often included before the cooking session — ask your operator if a market stop is part of the format you book.",
          },
        ],
        faqs: [
          { q: "Is a Vietnamese cooking class worth it in Da Nang?", a: "Yes, as a relaxed cultural activity to pair with beach or mountain sightseeing days." },
        ],
      };

    case "is-herbal-head-spa-worth-it-da-nang":
      return {
        title: "Is the Herbal Head Spa Worth It in Da Nang?",
        description: "An honest look at Da Nang's herbal head spa near Dragon Bridge, a short relaxation stop distinct from the city's beach and mountain day trips.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/90-minute-herbal-head-spa-near-dragon-bridge-in-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This 90-minute herbal head spa near Dragon Bridge is a quick, affordable way to recover after a Ba Na Hills day or a beach day in the sun, rather than a destination activity on its own.",
            tourCard: { slug: "90-minute-herbal-head-spa-near-dragon-bridge-in-da-nang", title: "90-Minute Herbal Head Spa Near Dragon Bridge in Da Nang", description: "A 90-minute herbal head spa treatment near Dragon Bridge.", price: "From $36", duration: "1.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/90-minute-herbal-head-spa-near-dragon-bridge-in-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Book this for the evening after a full day of sightseeing rather than at the start of your trip, when it's most useful.",
          },
        ],
        faqs: [
          { q: "Is the herbal head spa worth it in Da Nang?", a: "Yes, as an affordable recovery activity after a full day of sightseeing or beach time." },
        ],
      };

    case "is-street-food-scooter-tour-worth-it-da-nang":
      return {
        title: "Is the Street Food and Craft Beer Scooter Tour Worth It in Da Nang?",
        description: "An honest look at Da Nang's street food and craft beer tour by scooter with a local lady rider, a flavor-first evening activity distinct from the city's sightseeing day trips.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/12-street-foods-and-6-craft-beers-by-scooter-with-a-lady-rider-in-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Riding behind a local guide on a scooter between street food stalls and craft beer stops packs several tastes and local-life moments into three hours — a genuinely different format from the city's usual guided walking or bus-based sightseeing.",
            tourCard: { slug: "12-street-foods-and-6-craft-beers-by-scooter-with-a-lady-rider-in-da-nang", title: "12 Street Foods and 6 Craft Beers by Scooter with a Lady Rider in Da Nang", description: "A scooter tour of street food stalls and craft beer stops with a local guide.", price: "From $34", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/12-street-foods-and-6-craft-beers-by-scooter-with-a-lady-rider-in-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Come hungry but not full — the format is many small tastes across several stops rather than one sit-down meal.",
          },
        ],
        faqs: [
          { q: "Is the street food scooter tour worth it in Da Nang?", a: "Yes, for a flavor-first, local-life way to see the city by night, genuinely different from standard walking or bus tours." },
        ],
      };

    case "is-ba-na-hills-tour-worth-it-da-nang":
      return {
        title: "Is the Ba Na Hills Tour Worth It from Da Nang?",
        description: "An honest look at the Ba Na Hills tour with cable car, a hilltop theme park famous for the Golden Bridge's giant stone hand sculptures.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/ba-na-hills-tour-with-cable-car/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Ba Na Hills is a hilltop theme park reached by one of the world's longest cable car rides, home to the famous Golden Bridge with its giant hand sculptures, a genuinely different, more theme-park-like day than Da Nang's beaches and bridges.",
            tourCard: { slug: "ba-na-hills-tour-with-cable-car", title: "Ba Na Hills Tour with Cable Car", description: "A tour to Ba Na Hills with cable car access.", price: "From $63", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/ba-na-hills-tour-with-cable-car/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This gets genuinely crowded, especially on weekends — go on a weekday and arrive early for the best shot at the Golden Bridge without a packed crowd.",
          },
        ],
        faqs: [
          { q: "Is Ba Na Hills worth visiting from Da Nang?", a: "Yes, for the famous Golden Bridge and a genuinely different theme-park-style day, though it gets crowded — go early on a weekday." },
        ],
      };

    case "is-marble-mountains-tour-worth-it-da-nang":
      return {
        title: "Is the Marble Mountains Tour Worth It in Da Nang?",
        description: "An honest look at the Marble Mountains, Am Phu Cave, and Monkey Mountain sunset trip, a cluster of limestone peaks with Buddhist shrines and cave temples.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/am-phu-cave-marble-mountains-and-monkey-mountain-sunset-trip-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Marble Mountains are a cluster of five limestone peaks with cave temples and Buddhist shrines carved into the rock, a genuinely different kind of sight from Da Nang's beaches, and this tour pairs them with a sunset stop at Monkey Mountain.",
            tourCard: { slug: "am-phu-cave-marble-mountains-and-monkey-mountain-sunset-trip-da-nang", title: "Am Phu Cave, Marble Mountains & Monkey Mountain Sunset", description: "A tour of the Marble Mountains, Am Phu Cave, and a Monkey Mountain sunset.", price: "From $36", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/am-phu-cave-marble-mountains-and-monkey-mountain-sunset-trip-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "There are genuine stairs and climbing involved to reach the cave temples — wear real shoes, not sandals.",
          },
        ],
        faqs: [
          { q: "Are the Marble Mountains worth visiting in Da Nang?", a: "Yes, for cave temples and Buddhist shrines carved into limestone peaks, a genuinely different sight from the city's beaches." },
        ],
      };

    case "is-mang-den-highland-tour-worth-it-da-nang":
      return {
        title: "Is the Mang Den Highland Tour Worth It from Da Nang?",
        description: "An honest look at the 2-day Mang Den highland tour, a cool-climate mountain retreat genuinely different from Da Nang's coastal heat.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/2-day-private-mang-den-highland-tour-by-car-in-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Mang Den is a cool-climate highland retreat, sometimes called a 'mini Da Lat', offering genuinely different pine forest scenery and cooler air than Da Nang's coastal heat, worth the 2-day commitment for travelers wanting a real change of pace.",
            tourCard: { slug: "2-day-private-mang-den-highland-tour-by-car-in-da-nang", title: "2-Day Private Mang Den Highland Tour by Car", description: "A 2-day private tour to the Mang Den highlands.", price: "From $447", duration: "2 days", image: "https://images.asiabylocals.com/asiabylocals/tours/2-day-private-mang-den-highland-tour-by-car-in-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Pack a light jacket — the highland altitude makes Mang Den noticeably cooler than coastal Da Nang, especially in the evenings." ,
          },
        ],
        faqs: [
          { q: "Is Mang Den worth visiting from Da Nang?", a: "Yes, for genuinely cooler highland air and pine forest scenery, a real change of pace from the coastal heat, though it's a 2-day commitment." },
        ],
      };

    case "is-charming-da-nang-show-worth-it":
      return {
        title: "Is the Charming Da Nang Show Worth It?",
        description: "An honest look at the Charming Da Nang show, a cultural and historical performance blending traditional Vietnamese art forms with modern staging.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/charming-da-nang-show-ticket/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This show blends traditional Vietnamese art forms with modern staging to tell Da Nang's cultural and historical story, a good indoor evening activity distinct from the city's usual beach and bridge sightseeing.",
            tourCard: { slug: "charming-da-nang-show-ticket", title: "Charming Da Nang Show Ticket", description: "A ticket to the Charming Da Nang cultural performance.", price: "From $31", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/charming-da-nang-show-ticket/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A good rainy-day or evening activity to pair with a day otherwise spent at the beach or sightseeing.",
          },
        ],
        faqs: [
          { q: "Is the Charming Da Nang show worth it?", a: "Yes, as a good indoor evening activity blending traditional Vietnamese art with modern staging, distinct from beach and bridge sightseeing." },
        ],
      };

    case "is-surf-retreat-worth-it-da-nang":
      return {
        title: "Is the Da Nang Surf Retreat Worth It?",
        description: "An honest look at the 10-day surf retreat with 1-on-1 coaching, a serious commitment distinct from a casual single surf lesson.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/10-day-surf-retreat-with-1-on-1-coaching-in-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This 10-day program with 1-on-1 coaching is a genuine skill-building commitment, aimed at travelers who want to actually improve as surfers over an extended stay rather than try the sport once on a casual single lesson.",
            tourCard: { slug: "10-day-surf-retreat-with-1-on-1-coaching-in-da-nang", title: "10-Day Surf Retreat with 1-on-1 Coaching in Da Nang", description: "A 10-day surf retreat with personalized coaching.", price: "From $520", duration: "10 days", image: "https://images.asiabylocals.com/asiabylocals/tours/10-day-surf-retreat-with-1-on-1-coaching-in-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This is a real time and money commitment aimed at skill progression — a single casual lesson is the better fit if you just want to try surfing once." ,
          },
        ],
        faqs: [
          { q: "Is the surf retreat worth it in Da Nang?", a: "Yes, but only for travelers wanting genuine skill progression over an extended stay, not a casual first-time try." },
        ],
      };

    case "is-hue-day-trip-worth-it-da-nang":
      return {
        title: "Is a Hue Day Trip Worth It from Da Nang?",
        description: "An honest look at the day trip to Hue's Imperial City, royal tombs, and Thien Mu Pagoda from Da Nang.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hue-imperial-city-royal-tombs-and-thien-mu-pagoda/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Hue's Imperial City, royal tombs, and Thien Mu Pagoda pack in a different kind of sightseeing than Da Nang's beaches and mountains, and at 8 hours the day trip is a reasonable way to see Vietnam's former imperial capital without needing to overnight there.",
            tourCard: { slug: "hue-imperial-city-royal-tombs-and-thien-mu-pagoda", title: "Hue Imperial City, Royal Tombs & Thien Mu Pagoda", description: "A day trip from Da Nang to Hue's Imperial City, royal tombs, and Thien Mu Pagoda.", price: "From $73", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/hue-imperial-city-royal-tombs-and-thien-mu-pagoda/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "It's a long day with a lot of driving each way, so this suits travelers who want to see Hue's history without committing an extra overnight stay.",
          },
        ],
        faqs: [
          { q: "Is a Hue day trip worth it from Da Nang?", a: "Yes, it covers Hue's Imperial City, royal tombs, and Thien Mu Pagoda in a single long day without needing to overnight there." },
        ],
      };

    case "is-hai-van-pass-train-worth-it-da-nang":
      return {
        title: "Is the Hai Van Pass Scenic Train Worth It from Da Nang?",
        description: "An honest look at the scenic train ride over the Hai Van Pass between Da Nang and Hue, a relaxed alternative to the motorbike version.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/da-nang-or-hue-hai-van-pass-scenic-train-ticket-by-local-operator/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The train over the Hai Van Pass gives you the same dramatic coastal mountain views as the famous motorbike crossing, but without driving yourself or riding pillion — a relaxed option for travelers who'd rather sit back and watch the coastline go by.",
            tourCard: { slug: "da-nang-or-hue-hai-van-pass-scenic-train-ticket-by-local-operator", title: "Da Nang/Hue Hai Van Pass Scenic Train Ticket", description: "A scenic train ride over the Hai Van Pass between Da Nang and Hue.", price: "From $31", duration: "3.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/da-nang-or-hue-hai-van-pass-scenic-train-ticket-by-local-operator/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Book a window seat on the mountain side for the best views, and check the schedule in advance since departures are limited.",
          },
        ],
        faqs: [
          { q: "Is the Hai Van Pass train worth it from Da Nang?", a: "Yes, it delivers the same dramatic coastal views as the motorbike crossing without any of the driving." },
        ],
      };

    case "is-pottery-workshop-worth-it-da-nang":
      return {
        title: "Is the Pottery Workshop & Craft Village Tour Worth It in Da Nang?",
        description: "An honest look at the pottery workshop paired with a craft village visit near Da Nang.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/pottery-workshop-with-craft-village-tour-in-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Pairing a hands-on pottery lesson with a visit to a working craft village gives this a bit more depth than a typical souvenir-shop stop, and at 3 hours and a modest price it's an easy add-on to a beach or city day in Da Nang.",
            tourCard: { slug: "pottery-workshop-with-craft-village-tour-in-da-nang", title: "Pottery Workshop with Craft Village Tour", description: "A hands-on pottery workshop paired with a craft village visit near Da Nang.", price: "From $31", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/pottery-workshop-with-craft-village-tour-in-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Wear clothes you don't mind getting a little messy, since you'll be working with wet clay for part of the session.",
          },
        ],
        faqs: [
          { q: "Is the pottery workshop worth it in Da Nang?", a: "Yes, visiting a real working craft village alongside the hands-on lesson gives it more depth than a typical souvenir stop." },
        ],
      };

    case "is-surfing-lesson-worth-it-da-nang":
      return {
        title: "Is a Private Surfing Lesson Worth It in Da Nang?",
        description: "An honest look at taking a single private surfing lesson at My Khe Beach in Da Nang, distinct from the multi-day surf retreat.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/private-surfing-lesson-with-instructor-in-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "A single 1.5-hour private lesson at My Khe Beach is the right call if you just want to try surfing once rather than commit to the multi-day surf retreat — one-on-one coaching means faster progress standing up than a group class.",
            tourCard: { slug: "private-surfing-lesson-with-instructor-in-da-nang", title: "Private Surfing Lesson with Instructor", description: "A private one-on-one surfing lesson at My Khe Beach in Da Nang.", price: "From $120", duration: "1.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/private-surfing-lesson-with-instructor-in-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "My Khe Beach's waves are generally gentle and beginner-friendly, so this works well even with zero prior surfing experience.",
          },
        ],
        faqs: [
          { q: "Is a private surfing lesson worth it in Da Nang?", a: "Yes, for a first-time try, one-on-one coaching gets you standing up faster than a group lesson, without the commitment of the multi-day retreat." },
        ],
      };

    case "is-woodblock-printing-workshop-worth-it-da-nang":
      return {
        title: "Is the Woodblock Printing Workshop and Craft Village Visit Worth It in Da Nang?",
        description: "An honest look at the woodblock printing workshop and craft village visit in Da Nang.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/woodblock-printing-workshop-and-craft-village-visit-in-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Woodblock printing is a genuine traditional Vietnamese craft, and pairing a hands-on session with a visit to an actual craft village gives real context for where the technique is still practiced today, distinct from a generic souvenir-shop stop.",
            tourCard: { slug: "woodblock-printing-workshop-and-craft-village-visit-in-da-nang", title: "Woodblock Printing Workshop and Craft Village Visit in Da Nang", description: "A hands-on woodblock printing workshop with a craft village visit.", price: "From $22", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/woodblock-printing-workshop-and-craft-village-visit-in-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "You take home the print you make — a genuinely handmade souvenir rather than a factory-made one.",
          },
        ],
        faqs: [
          { q: "Is the woodblock printing workshop worth it in Da Nang?", a: "Yes, for a genuine traditional craft with real village context, distinct from a generic souvenir-shop stop." },
        ],
      };

    case "is-mi-quang-noodle-show-worth-it-da-nang":
      return {
        title: "Is the Mi Quang Noodle Show and Cultural Experience Worth It in Da Nang?",
        description: "An honest look at the Mi Quang noodle show and cultural experience in Da Nang.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/mi-quang-noodle-show-and-cultural-experience-in-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Mi Quang is a genuinely regional Quang Nam specialty noodle dish, and this show-style format combines watching the dish prepared with a cultural presentation, a more theatrical angle than a standard cooking class or street food stop.",
            tourCard: { slug: "mi-quang-noodle-show-and-cultural-experience-in-da-nang", title: "Mi Quang Noodle Show and Cultural Experience in Da Nang", description: "A show-style presentation of Mi Quang noodles paired with cultural elements.", price: "From $25", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/mi-quang-noodle-show-and-cultural-experience-in-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A good short, low-commitment add-on if you want a taste of regional cuisine without a full cooking class.",
          },
        ],
        faqs: [
          { q: "Is the Mi Quang noodle show worth it in Da Nang?", a: "Yes, for a genuine regional specialty presented in a more theatrical, cultural format than a standard street food stop." },
        ],
      };

    case "is-do-paper-workshop-worth-it-da-nang":
      return {
        title: "Is the Dó Paper Making Workshop Worth It in Da Nang?",
        description: "An honest look at the Dó paper and Dó paper notebook making workshop in Da Nang.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/workshop-on-making-d-paper-and-d-paper-notebooks-in-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Dó paper, made from the bark of the dó tree, is a genuine centuries-old Vietnamese papermaking tradition historically used for royal documents and folk art, and making your own notebook from it gives real hands-on context for a craft that's otherwise easy to overlook.",
            tourCard: { slug: "workshop-on-making-d-paper-and-d-paper-notebooks-in-da-nang", title: "Workshop on making Dó paper and Dó paper notebooks in Da Nang", description: "A hands-on Dó paper and notebook making workshop.", price: "From $31", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/workshop-on-making-d-paper-and-d-paper-notebooks-in-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "You take home the notebook you make — a genuinely unique, historically rooted souvenir unlike a typical gift-shop item.",
          },
        ],
        faqs: [
          { q: "Is the Dó paper making workshop worth it in Da Nang?", a: "Yes, for a genuine centuries-old craft tradition and a historically rooted souvenir you make yourself." },
        ],
      };

    case "is-nui-than-tai-hot-springs-worth-it-da-nang":
      return {
        title: "Is Nui Than Tai Hot Springs Park Worth It in Da Nang?",
        description: "An honest look at Nui Than Tai Hot Springs Park near Da Nang.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/nui-than-tai-hot-springs-park-entry-ticket-in-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Nui Than Tai offers genuine natural mineral hot spring pools plus a water park section, giving a relaxing, resort-like day distinct from Da Nang's beach-and-mountain sightseeing circuit, with options for both soaking and more active play.",
            tourCard: { slug: "nui-than-tai-hot-springs-park-entry-ticket-in-da-nang", title: "Nui Than Tai Hot Springs Park Entry Ticket in Da Nang", description: "Entry ticket to Nui Than Tai Hot Springs Park.", price: "From $36", duration: "Flexible", image: "https://images.asiabylocals.com/asiabylocals/tours/nui-than-tai-hot-springs-park-entry-ticket-in-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Bring a swimsuit and towel — this is a genuine soak-and-play day, not a quick sightseeing stop.",
          },
        ],
        faqs: [
          { q: "Is Nui Than Tai Hot Springs Park worth it in Da Nang?", a: "Yes, for a relaxing, resort-like day combining natural mineral pools with a water park, distinct from the city's sightseeing circuit." },
        ],
      };

    case "is-perfume-making-workshop-worth-it-da-nang":
      return {
        title: "Is the Perfume Making Workshop Worth It in Da Nang?",
        description: "An honest look at the perfume making workshop with a local instructor in Da Nang.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201283/asiabylocals/tours/perfume-making-workshop-with-local-instructor-in-da-nang/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "A relaxed, personal craft activity where you blend and bottle your own custom fragrance under a local instructor's guidance, worth it as a short, low-key stop between beach and mountain sightseeing rather than a major cultural experience.",
            tourCard: { slug: "perfume-making-workshop-with-local-instructor-in-da-nang", title: "Perfume Making Workshop with Local Instructor in Da Nang", description: "A hands-on custom perfume making workshop with a local instructor.", price: "From $29", duration: "1.5 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201283/asiabylocals/tours/perfume-making-workshop-with-local-instructor-in-da-nang/img0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Check airline liquid restrictions before flying home with your finished bottle.",
          },
        ],
        faqs: [
          { q: "Is the perfume making workshop worth it in Da Nang?", a: "Yes, as a relaxed, personal craft activity that's a nice low-key break from the city's beach and mountain sightseeing." },
        ],
      };

    case "is-night-squid-fishing-worth-it-da-nang":
      return {
        title: "Is the Danang Night Squid Fishing Experience Worth It?",
        description: "An honest look at the Danang night squid fishing experience.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/danang-night-squid-fishing-experience-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Squid fishing at night, with the lights drawing them to the boat, is a genuinely different evening activity from Da Nang's usual sunset cruises or city tours, worth it for travelers who want a hands-on local fishing experience rather than just watching from a cruise deck.",
            tourCard: { slug: "danang-night-squid-fishing-experience-da-nang", title: "Danang Night Squid Fishing Experience", description: "A hands-on night squid fishing experience in Da Nang.", price: "From $37", duration: "4.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/danang-night-squid-fishing-experience-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Wear clothes you don't mind getting a bit wet or smelling of the sea — this is genuine fishing, not a staged photo-op.",
          },
        ],
        faqs: [
          { q: "Is the Danang night squid fishing experience worth it?", a: "Yes, for a genuinely hands-on local fishing activity, distinct from the city's usual sunset cruises." },
        ],
      };

    case "is-natural-dyeing-fan-painting-worth-it-da-nang":
      return {
        title: "Is the Natural Dyeing and Fabric Fan Painting Workshop Worth It?",
        description: "An honest look at the natural dyeing and fabric fan painting workshop in Da Nang.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/natural-dyeing-and-free-fabric-fan-painting-workshop-in-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This workshop teaches natural plant-based dyeing techniques alongside a fabric fan painting activity, worth it for travelers who want a genuinely hands-on craft experience that produces two distinct take-home souvenirs in one booking.",
            tourCard: { slug: "natural-dyeing-and-free-fabric-fan-painting-workshop-in-da-nang", title: "Natural Dyeing and Free Fabric Fan Painting Workshop in Da Nang", description: "A hands-on natural dyeing and fabric fan painting workshop.", price: "From $44", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/natural-dyeing-and-free-fabric-fan-painting-workshop-in-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Wear clothes you don't mind getting a bit of dye on, even with aprons provided.",
          },
        ],
        faqs: [
          { q: "Is the natural dyeing and fabric fan painting workshop worth it in Da Nang?", a: "Yes, it's a genuinely hands-on craft session producing two distinct souvenirs — a dyed piece and a painted fan — in one booking." },
        ],
      };

    case "is-speedboat-fishing-experience-worth-it-da-nang":
      return {
        title: "Is the Small-Group Speedboat and Fishing Experience Worth It?",
        description: "An honest look at the small-group speedboat and fishing experience in Da Nang.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/small-group-speedboat-and-fishing-experience-in-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "A short, active speedboat outing combined with a fishing stop, worth it for travelers wanting a quick, high-energy water activity in a small group setting rather than the longer Cham Island snorkeling day trip.",
            tourCard: { slug: "small-group-speedboat-and-fishing-experience-in-da-nang", title: "Small-Group Speedboat and Fishing Experience in Da Nang", description: "A speedboat and fishing experience in a small group setting.", price: "From $46", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/small-group-speedboat-and-fishing-experience-in-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Bring sun protection — most of this experience happens out on open water with little shade.",
          },
        ],
        faqs: [
          { q: "Is the small-group speedboat and fishing experience worth it in Da Nang?", a: "Yes, for a quick, active water outing in a small group, a good shorter alternative to the longer Cham Island day trip." },
        ],
      };

    case "is-cham-island-speedboat-snorkeling-worth-it-da-nang":
      return {
        title: "Is the Cham Island Speedboat & Snorkeling Day Tour Worth It?",
        description: "An honest look at the Cham Island speedboat and snorkeling day tour from Da Nang.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/small-group-speedboat-and-fishing-experience-in-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Cham Island's marine protected waters give genuinely clearer snorkeling than most mainland beach spots, worth it specifically for travelers wanting a real snorkeling destination rather than the shorter speedboat-and-fishing outing closer to the city.",
            tourCard: { slug: "cham-island-speedboat-snorkeling-day-tour", title: "Cham Island Speedboat & Snorkeling Day Tour", description: "A speedboat and snorkeling day tour to Cham Island from Da Nang.", price: "From $59", duration: "7 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/small-group-speedboat-and-fishing-experience-in-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Book earlier in your trip in case rough seas force a reschedule — this is a longer day than the shorter speedboat-and-fishing outing closer to shore.",
          },
        ],
        faqs: [
          { q: "Is the Cham Island speedboat and snorkeling tour worth it from Da Nang?", a: "Yes, specifically for travelers wanting genuinely clear marine-protected waters rather than a shorter, closer-to-shore speedboat outing." },
        ],
      };

    case "is-dong-giang-heaven-gate-tour-worth-it-da-nang":
      return {
        title: "Is the Dong Giang Heaven Gate Tour with Lunch Worth It?",
        description: "An honest look at the Dong Giang Heaven Gate tour with lunch from Da Nang.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/small-group-speedboat-and-fishing-experience-in-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Dong Giang's mountain pass and 'Heaven Gate' viewpoint give a completely different highland landscape than Da Nang's beaches and city sights, worth it specifically for travelers wanting genuine mountain scenery without the longer drive out to Hue or Bach Ma.",
            tourCard: { slug: "dong-giang-heaven-gate-tour-with-lunch-in-da-nang", title: "Dong Giang Heaven Gate Tour with Lunch in Da Nang", description: "A tour to Dong Giang's Heaven Gate viewpoint with lunch, from Da Nang.", price: "From $70", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/small-group-speedboat-and-fishing-experience-in-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Bring a light jacket — the higher elevation at Heaven Gate can be noticeably cooler than Da Nang's coastline.",
          },
        ],
        faqs: [
          { q: "Is the Dong Giang Heaven Gate tour worth it from Da Nang?", a: "Yes, for travelers wanting genuine mountain scenery closer to the city, without the longer drive out to Hue or Bach Ma." },
        ],
      };

    case "is-private-fitness-class-worth-it-da-nang":
      return {
        title: "Is the Fitness Class with a Private Personal Trainer Worth It?",
        description: "An honest look at the private personal trainer fitness class in Da Nang.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/small-group-speedboat-and-fishing-experience-in-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "A private trainer session lets you keep up a real fitness routine while traveling, worth it specifically for travelers who don't want to lose momentum on their workout habits during a trip focused on sightseeing and food.",
            tourCard: { slug: "fitness-class-private-personal-trainer-all-levels-in-da-nang", title: "Fitness Class, Private Personal Trainer - All Levels in Da Nang", description: "A private personal trainer fitness class for all levels in Da Nang.", price: "From $51", duration: "1.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/small-group-speedboat-and-fishing-experience-in-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Mention your fitness level and any goals beforehand, since the session is tailored to all levels rather than a fixed format.",
          },
        ],
        faqs: [
          { q: "Is the private personal trainer fitness class worth it in Da Nang?", a: "Yes, for travelers wanting to keep up a real fitness routine while traveling, rather than losing momentum during a sightseeing-heavy trip." },
        ],
      };

    case "is-night-motorbike-han-cruise-worth-it-da-nang":
      return {
        title: "Is the Night City Motorbike and Han Cruise by Aodai Riders Worth It?",
        description: "An honest look at the night city motorbike tour and Han River cruise by Aodai Riders in Da Nang.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/small-group-speedboat-and-fishing-experience-in-da-nang/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Pairing a night motorbike tour with a Han River cruise covers both the city's illuminated streets and the Dragon Bridge from the water, worth it specifically for travelers wanting both perspectives on Da Nang after dark in one booking.",
            tourCard: { slug: "da-nang-night-city-motorbike-and-han-cruise-by-aodai-riders-da-nang", title: "Da Nang Night City Motorbike and Han Cruise by Aodai Riders", description: "A night motorbike tour and Han River cruise with Aodai-dressed riders.", price: "From $62", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/small-group-speedboat-and-fishing-experience-in-da-nang/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Bring a light layer — riding on the back of a motorbike at night can feel cooler than walking the same streets.",
          },
        ],
        faqs: [
          { q: "Is the night motorbike and Han cruise tour worth it in Da Nang?", a: "Yes, for travelers wanting both the city's illuminated streets and a river view of the Dragon Bridge covered in one evening booking." },
        ],
      };

    default:
      return null;
  }
}
