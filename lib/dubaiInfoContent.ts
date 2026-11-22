// Dubai authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getDubaiInfoContent() -> getCityInfoContent().
//
// Every tourCard slug is taken from the live tour list for this city.
import type { CityInfoData } from './cityInfoContent';

const IMG = 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788400000/asiabylocals/tours/dubai-red-dune-evening-safari-with-camel-ride-and-bbq-camp/img0.jpg';

export function getDubaiInfoContent(slug: string): CityInfoData | null {
  switch (slug) {

    case "burj-khalifa-tickets-guide":
      return {
        title: "Burj Khalifa Tickets: Which Level, Which Time Slot, and What It Actually Costs",
        seoTitle: "Burj Khalifa Tickets Guide 2026",
        description: "Levels 124/125 versus 148, why the time slot matters more than the level, what sunset really costs, and how long to allow.",
        heroImage: IMG,
        fastFacts: [
          { icon: "landmark", label: "Height", value: "828 m, 163 floors — the tallest building in the world" },
          { icon: "ticket", label: "Levels 124 & 125", value: "About 452 m. The standard ticket" },
          { icon: "ticket", label: "Level 148 (Sky)", value: "About 555 m. Roughly double the price" },
          { icon: "clock", label: "Allow", value: "90 minutes including security and the mall walk" },
          { icon: "calendar-days", label: "Book ahead", value: "Sunset slots go weeks in advance" },
        ],
        sections: [
          {
            title: "Burj Khalifa Tickets: Which Level, Which Time Slot, and What It Actually Costs",
            icon: "landmark",
            content: "There are two decisions to make and most visitors get the second one wrong.\n\nThe first is the level. Levels 124 and 125 sit at around 452 metres and have the outdoor terrace — you can stand in the open air with the city below, which is the thing people remember. Level 148, marketed as the Sky level, is at about 555 metres, is enclosed, includes a lounge and refreshments, and costs roughly double. Higher is not automatically better: past a certain altitude the city stops reading as a city and becomes a map, and the outdoor terrace on 124/125 is a more physical experience than the glass on 148.\n\nThe second decision is the time slot, and this matters more. Your ticket admits you at a fixed time chosen when you book. Sunset slots cost a premium and sell out weeks ahead. Mid-morning is quiet, clear and the cheapest tier. Early afternoon in summer is frequently lost to haze — you pay full price for a white view.\n\nIf the budget is fixed, take 124/125 at a good hour rather than 148 at a bad one.",
            tourCard: {
              slug: "burj-khalifa-124-125-and-dubai-aquarium-combo-ticket",
              title: "Burj Khalifa Levels 124 & 125 and Dubai Aquarium Combo Ticket",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 100",
              duration: "Flexible",
              image: IMG,
            },
          },
          {
            title: "The practical part: security, timing and the walk",
            icon: "clock",
            content: "Entry is through Dubai Mall, at the lower ground level, and the walk from the mall entrance to the queue is longer than anyone expects — the building is enormous and so is the mall. Allow twenty minutes just to get from a taxi to the security line.\n\nEntry is strictly at your booked time. Arriving early does not get you in early; arriving late can cost you the slot entirely.\n\nSecurity is airport-style. Large bags, tripods and drones are refused. The lift to 124 takes about a minute.\n\nOnce up, most people spend thirty to forty minutes. There is no time limit, so if the light is improving it is worth waiting rather than leaving on schedule.\n\nAllow ninety minutes for the whole thing, and do not book anything tight immediately afterwards — the mall exit at peak hour is its own event.",
          },
          {
            title: "The view from the bottom, which is free",
            icon: "sparkles",
            content: "The Dubai Fountain performs on Burj Lake at the base of the tower every half hour through the evening, and watching from the promenade costs nothing. The jets reach around 140 metres and the whole thing lasts a few minutes.\n\nThe promenade gets three deep well before each show. The alternatives are a table at one of the lakeside restaurants, which requires a reservation and a minimum spend, or a boat on the lake itself — a traditional wooden abra runs across Burj Lake during the shows, which puts you inside the arc of the fountain rather than behind a railing, and costs a fraction of a restaurant table.\n\nIf you are doing the tower at sunset, the fountain immediately afterwards is the natural pairing and needs no extra planning.",
            tourCard: {
              slug: "dubai-fountain-abra-lake-ride-at-the-burj-khalifa",
              title: "Dubai Fountain Abra Lake Ride at the Burj Khalifa",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 24",
              duration: "30 minutes",
              image: IMG,
            },
          },
        ],
      };

    case "dubai-desert-safari-guide":
      return {
        title: "Dubai Desert Safari: How to Choose One, and What the Cheap Ones Leave Out",
        seoTitle: "Dubai Desert Safari Guide 2026",
        description: "Morning versus evening versus overnight, what dune bashing is actually like, which inclusions are real and which are add-ons, and who should not go.",
        heroImage: IMG,
        fastFacts: [
          { icon: "clock", label: "Evening safari", value: "About 6 hours, pickup mid-afternoon" },
          { icon: "clock", label: "Overnight", value: "About 17 hours, with a tent" },
          { icon: "car", label: "Dune bashing", value: "30-45 minutes, deliberately rough" },
          { icon: "shirt", label: "Bring", value: "A jacket — the desert is cold after dark, Nov-Feb" },
          { icon: "calendar-days", label: "Best months", value: "October to March" },
        ],
        sections: [
          {
            title: "Dubai Desert Safari: How to Choose One, and What the Cheap Ones Leave Out",
            icon: "sun",
            content: "The desert safari is the single most-booked thing in Dubai and the listings are almost indistinguishable from one another, which is exactly why people end up disappointed. The differences are real, they are just not in the headline.\n\nThe base of every safari is the same: a 4x4 collects you, the tyres are deflated at the edge of the Al Lahbab red dunes, and there is half an hour of dune driving. After that comes a camp with dinner and shows. What separates a thirty-dollar safari from a ninety-dollar one is the camp, the food and the crowd.\n\nThe cheap tier puts several hundred people in one camp with a single buffet line. The premium tier at somewhere like Al Khayma has separate buffets, seating away from the crush, and enough time that you are not eating and leaving.\n\nQuad biking and dune buggies are almost never included in the headline price. They are add-ons chosen at the option stage, and that is where a cheap safari quietly becomes an expensive one.",
            tourCard: {
              slug: "dubai-red-dune-evening-safari-with-camel-ride-and-bbq-camp",
              title: "Dubai Red Dune Evening Safari with Camel Ride and Camp Dinner",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 40",
              duration: "About 6 hours",
              image: IMG,
            },
          },
          {
            title: "Morning, evening or overnight",
            icon: "clock",
            content: "Evening is what almost everyone books, and it is the right default: you get the dunes, the sunset, and a camp evening with dinner and shows.\n\nMorning safaris are cooler and much quieter, with the sand ridged and untouched and far fewer vehicles about. They suit photographers and anyone travelling with small children, and they do not include the camp dinner.\n\nOvernight is the one people underrate. Everybody else leaves the camp around ten o'clock; if you stay, the generators go quiet and the sky over the Al Lahbab dunes turns into something you cannot see anywhere near the city. You sleep in a tent and get sunrise over the dunes, which almost nobody sees.\n\nIf you have one evening in Dubai, take the standard evening safari. If you have a spare night, the overnight is a completely different trip for not much more money.",
            tourCard: {
              slug: "dubai-overnight-desert-safari-with-private-tent-and-stargazing",
              title: "Dubai Overnight Desert Safari with a Private Tent and Stargazing",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 181",
              duration: "17 hours",
              image: IMG,
            },
          },
          {
            title: "Who should not do the dune bashing, and what to bring",
            icon: "shield",
            content: "Dune bashing is deliberately rough — the driver takes the vehicle up and across dune faces at an angle and it is closer to a rollercoaster than to a drive. If anyone in your group is pregnant, has back or neck problems, or is prone to motion sickness, say so when booking. Every operator will take a gentler line on request and nobody is obliged to do the hard version. Saying it in advance is better than saying it halfway up a dune.\n\nBring a jacket. Between November and February the desert loses its heat the moment the sun goes down, the camps are open-sided, and people who arrived in shorts spend the last two hours cold and distracted.\n\nAlcohol is generally not included and often not available at all at the camps.\n\nAnd take the sunset seriously as a reason to be punctual: the light over red sand lasts about twenty minutes and a late pickup costs you the best part of the day.",
          },
        ],
      };

    case "best-time-to-visit-dubai":
      return {
        title: "Best Time to Visit Dubai: Month by Month, and the Two Weeks to Avoid",
        seoTitle: "Best Time to Visit Dubai 2026",
        description: "What each season actually feels like, why November to March is not one single season, and how Ramadan changes a visit.",
        heroImage: IMG,
        fastFacts: [
          { icon: "sun", label: "Best months", value: "November to March" },
          { icon: "thermometer", label: "Summer", value: "June-September, 40-48C and very humid" },
          { icon: "wallet", label: "Cheapest", value: "July and August — for good reason" },
          { icon: "calendar-days", label: "Busiest", value: "Christmas, New Year and February half-term" },
          { icon: "moon", label: "Ramadan", value: "Moves ~11 days earlier each year" },
        ],
        sections: [
          {
            title: "Best Time to Visit Dubai: Month by Month, and the Two Weeks to Avoid",
            icon: "sun",
            content: "November to March is the answer, and inside that window there are meaningful differences.\n\nNovember and March are the shoulders: warm rather than hot, around 25 to 30C, and the best value of the good season. December to February is the peak — comfortable, occasionally cool enough for a jacket in the evening, and priced accordingly. Hotel rates over Christmas and New Year can be triple the same room in October.\n\nApril and October are transitional. Still pleasant in the morning, uncomfortable by mid-afternoon, and a good compromise if the dates are fixed.\n\nMay through September is genuinely hard. July and August routinely reach 45C with humidity off the Gulf that makes it worse, and anything outdoors — desert safaris, waterparks, walking tours — becomes an endurance test between ten in the morning and six in the evening. The city is built for it: everything is air-conditioned and connected. But if your plan is outdoors, this is not the time.",
          },
          {
            title: "What Ramadan changes, and what it does not",
            icon: "moon",
            content: "Ramadan moves about eleven days earlier each year, so check the dates for your travel year rather than assuming.\n\nWhat changes: eating, drinking and smoking in public during daylight hours is restricted, live music is generally paused, and many attractions and businesses run shorter or shifted hours. Alcohol service is reduced.\n\nWhat does not change: hotels continue to serve food and drink to guests throughout the day, usually in a screened area, and tourists are not expected to fast. Malls, the Burj Khalifa and most attractions stay open.\n\nAnd there is a genuine upside. Iftar, the meal that breaks the fast at sunset, is the most sociable hour of the Emirati year, and hotel iftar buffets during Ramadan are one of the better things you can do in Dubai. Rates are also lower than the equivalent week outside Ramadan.\n\nIf you are comfortable adjusting your daytime habits, it is not a reason to cancel.",
          },
          {
            title: "The dates worth actively avoiding",
            icon: "calendar-days",
            content: "Christmas week and New Year: the highest prices of the year and every restaurant booked out. Beautiful weather, genuinely difficult logistics.\n\nUK and European February half-term: a surge of family traffic that fills the waterparks and the theme parks.\n\nThe Formula 1 weekend in Abu Dhabi, usually late November or early December: it fills hotels across both cities and doubles rates in Abu Dhabi. Wonderful if you are going for the race, expensive if you are not.\n\nMajor trade fairs, which Dubai hosts constantly, empty the hotel supply without warning. If room rates for your dates look strange, that is usually why.\n\nOne planning note that applies year round: the working week here runs Monday to Friday, with Saturday and Sunday the weekend, so attractions are busiest at weekends exactly as they are elsewhere.",
          },
        ],
      };

    case "getting-around-dubai":
      return {
        title: "Getting Around Dubai: Metro, Taxis, and When to Just Book a Car",
        seoTitle: "Getting Around Dubai: Transport Guide",
        description: "How the Nol card works, what the metro actually covers, why taxis are cheaper than you expect, and the distances that catch people out.",
        heroImage: IMG,
        fastFacts: [
          { icon: "train", label: "Metro", value: "Two lines, Red and Green. Driverless, air-conditioned" },
          { icon: "credit-card", label: "Nol card", value: "Needed for metro, tram and bus. Buy at any station" },
          { icon: "car", label: "Taxis", value: "Metered, plentiful and cheap by European standards" },
          { icon: "clock", label: "Metro hours", value: "Roughly 5am to midnight, later at weekends" },
          { icon: "map", label: "Watch for", value: "Distances — Dubai is far bigger than it looks" },
        ],
        sections: [
          {
            title: "Getting Around Dubai: Metro, Taxis, and When to Just Book a Car",
            icon: "train",
            content: "Dubai is long. It runs roughly seventy kilometres along the coast, and the two things you most want to see — Downtown with the Burj Khalifa, and the Marina with the Palm — are about half an hour apart on a good day. Almost every visitor underestimates this and builds a plan that has them crossing the city three times.\n\nThe metro solves most of it. Two driverless lines, entirely air-conditioned, clean and punctual, and the Red Line runs the length of Sheikh Zayed Road connecting the airport, Downtown, the Marina and Expo City. If your plan sits along that spine, the metro is faster than a car at rush hour and costs a fraction.\n\nYou need a Nol card to use it — a rechargeable card sold at every station. One card can be shared by a group for buses and trams but not through metro gates, so buy one each.\n\nWhat the metro does not reach: the Palm Jumeirah interior, most of Jumeirah's beach strip, and the desert. For those, take a taxi.",
          },
          {
            title: "Taxis, Careem and the airport",
            icon: "car",
            content: "Taxis are metered, regulated, everywhere, and cheap compared with European or American cities. You can hail one on the street, pick one up at any mall or hotel rank, or book through the RTA app. Careem and Uber both operate; Careem is the local one and usually has more cars.\n\nA cross-city trip that feels like it should be expensive — Downtown to the Marina, say — is usually reasonable outside peak hours. Rush hour on Sheikh Zayed Road is the exception, and it is severe: the same journey can double in time between five and seven in the evening.\n\nFrom the airport, both terminals have a taxi rank and the metro's Red Line runs from Terminals 1 and 3. With luggage and a hotel far from a station, take the taxi.\n\nOne detail worth knowing: the pink-roofed taxis are driven by women and reserved for women and families. They are the same fare.",
          },
          {
            title: "When a private car is worth it",
            icon: "map",
            content: "For anything outside the city — the desert, Abu Dhabi, the east coast at Fujairah — a booked vehicle with a driver is not a luxury, it is the only sensible option. Abu Dhabi is ninety minutes away; the east coast is two hours across the country. Taxis will do these trips but the meter makes them expensive and you have no vehicle waiting when you want to come back.\n\nThe same applies to any day with three or more stops in different districts. By the third taxi and the second wait, a car for the day has usually cost less and saved an hour.\n\nHiring and driving yourself is straightforward — the roads are excellent and well signposted — but the interchanges are large and unforgiving of a missed exit, and parking at the popular spots is genuinely difficult. For a short trip, most people are better off not driving.",
            tourCard: {
              slug: "abu-dhabi-full-day-tour-from-dubai-with-grand-mosque-and-corniche",
              title: "Abu Dhabi Full-Day Tour from Dubai with the Grand Mosque and Corniche",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 51",
              duration: "Full day",
              image: IMG,
            },
          },
        ],
      };

    case "old-dubai-and-the-souks-guide":
      return {
        title: "Old Dubai: Al Fahidi, the Creek and the Souks, and How to See Them Properly",
        seoTitle: "Old Dubai and the Souks Guide",
        description: "The half of the city that existed before the towers — the wind-tower quarter, the one-dirham abra, and how to shop the gold and spice souks without being fleeced.",
        heroImage: IMG,
        fastFacts: [
          { icon: "landmark", label: "Al Fahidi", value: "Wind-tower quarter, built by pearl merchants" },
          { icon: "ship", label: "Abra crossing", value: "1 dirham for locals — the cheapest ride in Dubai" },
          { icon: "clock", label: "Allow", value: "Half a day, or three hours with a guide" },
          { icon: "calendar-days", label: "Best time", value: "October to April, and mornings" },
          { icon: "wallet", label: "Souks", value: "Bargaining expected; nothing has a fixed price" },
        ],
        sections: [
          {
            title: "Old Dubai: Al Fahidi, the Creek and the Souks, and How to See Them Properly",
            icon: "landmark",
            content: "Before the oil and the towers, Dubai was a pearling and trading port on a creek, and that town still exists on both banks about twenty minutes from Downtown.\n\nAl Fahidi is the surviving quarter of it: narrow lanes of coral-and-gypsum houses topped with barjeel, the wind towers that caught the breeze and pushed it down into the rooms below. They work — the lanes are noticeably cooler than the street outside, which is the entire point of the architecture and the thing photographs never convey.\n\nThe quarter holds the Dubai Museum in the old Al Fahidi Fort, several small galleries, and courtyard cafes that are pleasant precisely because nothing about them is engineered.\n\nAcross the water is Deira, and the crossing between them is the best value in the city: a wooden abra, the same design that has run this route for decades, for one dirham. Not a tourist boat. A commuter ferry that tourists happen to also use.",
            tourCard: {
              slug: "old-dubai-walking-tour-with-souks-street-food-and-abra-ride",
              title: "Old Dubai Walking Tour with the Souks, Street Food and an Abra Ride",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 22",
              duration: "About 3 hours",
              image: IMG,
            },
          },
          {
            title: "The gold and spice souks, and how not to be fleeced",
            icon: "wallet",
            content: "The Gold Souk in Deira holds an extraordinary quantity of stock in open windows — tonnes of it, in a covered lane. Gold here is sold by weight at a rate published daily and the same for everyone; what you negotiate is the making charge on top. Ask for the day rate, ask for the making charge separately, and the conversation becomes straightforward. Every piece sold legally is hallmarked.\n\nThe Spice Souk nearby is smaller and this is where a guide earns their fee. Saffron is the thing to be careful with: real saffron is expensive everywhere and what is offered cheaply in bulk is usually safflower, which looks similar and is not the same thing at all. Smell it, and be suspicious of a bargain.\n\nBargaining is expected in both. Starting at about half the asking price is normal and nobody is offended.\n\nGo in the morning. By afternoon in the warmer months the covered lanes are hot and the crowds are heavy.",
          },
          {
            title: "Fitting it into a Dubai trip",
            icon: "clock",
            content: "Old Dubai is the part of the city most likely to be skipped and most likely to be remembered, and it needs half a day rather than an hour squeezed between the mall and the beach.\n\nThe natural route is Al Fahidi first while it is cool, then the abra across the creek, then the souks, then back. Three hours at a walking pace, longer if you stop to eat — and the food in Deira is where the city's South Asian and Iranian communities actually eat, which is a different and better proposition than the mall food courts.\n\nA guide is worth it here more than almost anywhere else in Dubai, not for access but for context: without one, the souks are shops and the wind towers are decoration.\n\nPair it with the Dubai Frame, a few minutes away in Zabeel Park, which frames the old city on one side of its viewing deck and the new skyline on the other. It is the single clearest way to understand what happened to this place in fifty years.",
            tourCard: {
              slug: "dubai-frame-tickets-with-old-town-creek-and-blue-mosque-tour",
              title: "Dubai Frame Tickets with Old Town, Creek and Blue Mosque Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 36",
              duration: "Half day",
              image: IMG,
            },
          },
        ],
      };

    case "dubai-2-day-itinerary":
      return {
        title: "Two Days in Dubai: A Route That Does Not Cross the City Four Times",
        seoTitle: "Dubai 2-Day Itinerary",
        description: "A realistic two-day plan built around Dubai's geography rather than a list of attractions, with the desert on the right evening.",
        heroImage: IMG,
        fastFacts: [
          { icon: "map", label: "Day 1", value: "Downtown, Old Dubai and the Creek" },
          { icon: "sun", label: "Day 2", value: "Marina, the Palm and the desert" },
          { icon: "clock", label: "Key constraint", value: "Downtown to Marina is ~30 minutes" },
          { icon: "calendar-days", label: "Book ahead", value: "Burj Khalifa slot and the desert safari" },
        ],
        sections: [
          {
            title: "Two Days in Dubai: A Route That Does Not Cross the City Four Times",
            icon: "map",
            content: "Two days is enough for Dubai if the route respects the geography. The city is seventy kilometres long and the classic mistake is a plan that bounces between Downtown and the Marina repeatedly, losing two hours a day to Sheikh Zayed Road.\n\nThe fix is simple: give each day one end of the city.\n\nDay one is the eastern half — Downtown, Old Dubai and the Creek, all within twenty minutes of each other. Day two is the western half — the Marina, the Palm, the beach — with the desert in the evening, because the desert pickup comes to you and does not care where you started.\n\nEverything below assumes November to March. In summer, move the outdoor parts to early morning and put the middle of the day indoors.",
          },
          {
            title: "Day one: Downtown, the Creek and the souks",
            icon: "landmark",
            content: "Start early at Al Fahidi, while the lanes are cool and empty. An hour in the quarter, then the abra across the creek and into the souks — gold first, then spice — and lunch in Deira where the food is better and a third of the price of Downtown.\n\nEarly afternoon: the Dubai Frame in Zabeel Park, between the two halves of the city both literally and thematically.\n\nLate afternoon into evening: Downtown. Book the Burj Khalifa for roughly ninety minutes before sunset, so you go up in daylight and come down into the lit city. Then the Dubai Fountain at the base — free from the promenade, or from a boat on the lake, which is the better version.\n\nDinner in Souk Al Bahar rather than the mall, for the terrace over the lake.\n\nBook the Burj Khalifa slot before you fly. Sunset sells out weeks out and there is no walk-up alternative at that hour.",
            tourCard: {
              slug: "burj-khalifa-124-125-and-dubai-aquarium-combo-ticket",
              title: "Burj Khalifa Levels 124 & 125 and Dubai Aquarium Combo Ticket",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 100",
              duration: "Flexible",
              image: IMG,
            },
          },
          {
            title: "Day two: the Marina, the water and the desert",
            icon: "sun",
            content: "Morning on the water. An hour on a yacht or a speedboat out of Dubai Marina is the only way to see the Palm as the shape it was designed to be, and the light is better before eleven. A speedboat is quicker and cheaper; a yacht is more comfortable and has shade.\n\nMidday at JBR — the beach, lunch on The Walk, and out of the sun.\n\nMid-afternoon: the desert safari collects you from wherever you are. Six hours: dune bashing, sunset over the red dunes, then a camp with dinner and shows. You are back around nine.\n\nThat is the whole day and it is the right shape — water in the morning, shade at noon, sand in the evening.\n\nIf you have a third day, use it for Abu Dhabi: the Grand Mosque and Qasr Al Watan are ninety minutes away and are the best single day trip from Dubai.",
            tourCard: {
              slug: "dubai-red-dune-evening-safari-with-camel-ride-and-bbq-camp",
              title: "Dubai Red Dune Evening Safari with Camel Ride and Camp Dinner",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 40",
              duration: "About 6 hours",
              image: IMG,
            },
          },
        ],
      };

    case "dubai-with-kids-guide":
      return {
        title: "Dubai with Kids: What Works in Summer, and What to Skip",
        seoTitle: "Dubai with Kids: Family Guide",
        description: "The indoor attractions that save a summer trip, which waterpark suits which age, and the things that are not worth the ticket with young children.",
        heroImage: IMG,
        fastFacts: [
          { icon: "sun", label: "Summer rule", value: "Outdoors before 10am, indoors 10am-5pm" },
          { icon: "ticket", label: "Best all-ages", value: "The Green Planet and the Dubai Aquarium" },
          { icon: "waves", label: "Waterpark", value: "Aquaventure — has separate zones for small children" },
          { icon: "train", label: "Getting about", value: "Metro is free for children under five" },
        ],
        sections: [
          {
            title: "Dubai with Kids: What Works in Summer, and What to Skip",
            icon: "sun",
            content: "Dubai is one of the easier cities in the world to visit with children — everything is air-conditioned, connected, spotless and set up for families — with one enormous caveat, which is the heat.\n\nBetween June and September, outdoor plans with young children do not work between about ten in the morning and five in the evening. This is not a matter of stamina; the temperature is genuinely dangerous for small bodies. Plan around it rather than through it: outdoors early, indoors in the middle, outdoors again at dusk.\n\nThe good news is that Dubai has more genuinely good indoor attractions than almost anywhere, and several of them are better for children than for adults.",
          },
          {
            title: "The indoor list, ranked by how long it actually holds them",
            icon: "ticket",
            content: "The Green Planet in City Walk is a sealed bio-dome with a working rainforest inside it — sloths, free-flying birds, reptiles, and the largest man-made indoor tree in the world. Roughly an hour and a quarter, and the feeding sessions through the day are the best part; ask at the desk when you arrive and plan around them.\n\nThe Dubai Aquarium in Dubai Mall has a walk-through tunnel with rays and sharks overhead, an Underwater Zoo arranged by habitat, and penguins. About an hour. It also happens to sit inside the mall, so it combines with everything else there.\n\nAYA Universe at WAFI is twelve rooms of interactive light and sound — floors that respond to footsteps, walls that answer touch. Ninety minutes, and it works equally on adults, which is a short list.\n\nAll three are fully air-conditioned, which in July is the only specification that matters.",
            tourCard: {
              slug: "the-green-planet-dubai-indoor-rainforest-ticket",
              title: "The Green Planet Dubai: Indoor Rainforest Entry Ticket",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 41",
              duration: "About 75 minutes",
              image: IMG,
            },
          },
          {
            title: "Water, and what to skip",
            icon: "waves",
            content: "Atlantis Aquaventure on the Palm is the big one — over a hundred slides, a private beach, and, crucially, separate Splashers zones for younger children so families are not trying to do both at once. The Lost Chambers Aquarium is included in the pass and is where to go in the middle of the day when the slides are queued and the sun is worst. Arrive at opening in summer.\n\nWhat to skip with young children: the Burj Khalifa, which is a queue followed by a view they will look at for four minutes; the desert safari, where the dune bashing is too rough for under-fives and the camp evening runs late; and the long day trips to Abu Dhabi or the east coast, which are three hours in a car before anything happens.\n\nSave the desert for a family with teenagers, where it becomes the best thing in the trip.",
            tourCard: {
              slug: "atlantis-aquaventure-waterpark-day-pass-dubai",
              title: "Atlantis Aquaventure Waterpark Day Pass, Dubai",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 90",
              duration: "Full day",
              image: IMG,
            },
          },
        ],
      };

    case "dubai-marina-and-the-palm-guide":
      return {
        title: "Dubai Marina and the Palm: Yachts, Speedboats and Which Cruise Is Worth It",
        seoTitle: "Dubai Marina and Palm Jumeirah Guide",
        description: "Why the skyline reads better from the water, the difference between a speedboat hour and a yacht afternoon, and what the cheap cruises leave out.",
        heroImage: IMG,
        fastFacts: [
          { icon: "ship", label: "Speedboat", value: "60-90 minutes, fast, you will get spray" },
          { icon: "ship", label: "Yacht", value: "1-3 hours, shade, air-conditioned lounge" },
          { icon: "clock", label: "Best light", value: "Before 11am, or the sunset hour" },
          { icon: "map", label: "Departure", value: "Dubai Marina or Dubai Harbour — no hotel pickup" },
        ],
        sections: [
          {
            title: "Dubai Marina and the Palm: Yachts, Speedboats and Which Cruise Is Worth It",
            icon: "ship",
            content: "The Palm Jumeirah is a road system when you drive it and a shape in the distance from an observation deck. It only becomes the thing it was drawn as from the water or the air, and the water is a great deal cheaper.\n\nDubai Marina is where almost everything leaves from — a canal district of towers built around a man-made waterway, which is itself one of the better sights in the city at night.\n\nThe standard route out of the Marina runs past Bluewaters and Ain Dubai, along the Palm's outer crescent with Atlantis at the end of it, and stops off the Burj Al Arab, which sits on its own island and only makes sense from the sea.\n\nWhat you choose is not really about the route, which is much the same everywhere. It is about the boat.",
          },
          {
            title: "Speedboat versus yacht",
            icon: "waves",
            content: "A speedboat is the better sightseeing hour. It sits low, moves quickly between the landmarks, holds position at each for photographs, and costs less. It is also open, loud and wet — you will take spray, phones need a pouch, and there is no shade. Sixty to ninety minutes is about right, and it is the best value on the water in Dubai.\n\nA yacht is the better afternoon. Deck space rather than seats, an air-conditioned lower lounge for when the sun is high, refreshments, and time to actually sit. The larger boats add a swim stop with a ladder down, which is the single feature most worth paying for and the one most cruises quietly omit.\n\nSo: an hour with a camera, take the speedboat. Half a day with company, take the yacht. If it is a special occasion, take the one with the swim stop.\n\nHotel pickup is almost never included with either. Make your own way to the berth; a taxi to the Marina is straightforward.",
            tourCard: {
              slug: "dubai-speedboat-tour-marina-palm-atlantis-and-burj-al-arab",
              title: "Dubai Speedboat Tour: Marina, Palm, Atlantis and Burj Al Arab",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 53",
              duration: "60-90 minutes",
              image: IMG,
            },
          },
          {
            title: "The sunset question, and reading the option carefully",
            icon: "sun",
            content: "Dubai faces west into the Gulf, so the sun sets over open water with the skyline behind you rather than in front. From a boat, the towers change colour for about twenty minutes and then the lights come on all at once. It is the best hour of the day here and the sunset sailings sell out first — book further ahead than feels necessary.\n\nSunset also moves a long way across the year, from around half past five in December to past seven in June. Check the actual departure time of what you are booking rather than assuming an evening slot.\n\nAnd read the inclusions properly, because this is where dinner cruises catch people out. On several boats the barbecue only runs on the longer routes; on others, the standard ticket buys deck access with no table, and a seated dinner is a different, dearer ticket. If a meal is the reason you are booking, confirm which option includes it before you pay rather than at the gangway.",
            tourCard: {
              slug: "dubai-sunset-yacht-cruise-with-snacks-and-drinks",
              title: "Dubai Sunset Yacht Cruise with Snacks and Drinks",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 27",
              duration: "1 hour",
              image: IMG,
            },
          },
        ],
      };

    case "dubai-yacht-charter-guide":
      return {
        title: "Dubai Yacht Charters: What You Are Actually Paying For",
        seoTitle: "Dubai Yacht Charter Guide 2026",
        description: "Shared cruise versus private charter, why the Marina and the Palm are different trips, what the hourly rate leaves out, and when the swim stop is worth it.",
        heroImage: IMG,
        fastFacts: [
          { icon: "ship", label: "Shared cruise", value: "From about USD 40 per person" },
          { icon: "anchor", label: "Private charter", value: "Priced per boat per hour, not per head" },
          { icon: "clock", label: "Usual minimum", value: "2 hours, and 2 hours is genuinely short" },
          { icon: "sun", label: "Best light", value: "The 4pm and sunset slots" },
          { icon: "wind", label: "Rough months", value: "Occasional cancellations December to February" },
        ],
        sections: [
          {
            title: "Shared cruise or private charter",
            icon: "ship",
            content: "These are two different products sold under the same word.\n\nA **shared cruise** puts you on a large boat with fifty to two hundred other people, usually with a buffet and a show, priced per person. It is the cheap way onto the water and it is fine for what it is. Our [dinner cruise with a chef-designed menu](/uae/dubai/dubai-dinner-cruise-with-a-chef-designed-menu-and-live-music) and the [superyacht cruise with a DJ and open bar](/uae/dubai/dubai-superyacht-cruise-with-live-dj-swim-stop-and-open-bar) sit here.\n\nA **private charter** is the whole boat, priced by the hour regardless of how many of you there are. Four people on a private boat costs the same as ten. This is why the per-person maths flips completely once you are a group: a [private yacht for up to twelve guests](/uae/dubai/dubai-private-yacht-hire-for-up-to-twelve-guests) can work out cheaper per head than a shared ticket.\n\nIf you are two people and want the water, take a shared cruise. If you are six or more, price the private option before you assume it is out of reach.",
          },
          {
            title: "The Marina and the Palm are not the same trip",
            icon: "map-pin",
            content: "Almost every Dubai charter leaves from Dubai Marina or Dubai Harbour, and where it goes from there decides what you actually see.\n\nA **Marina loop** keeps you inside the canal among the towers. It is dense, dramatic and best after dark when the whole thing is lit. It is also the shortest run, which is why two-hour charters usually stay here.\n\nGoing **out to the Palm and the Burj Al Arab** means leaving the breakwater into open water. That is the postcard: Atlantis, the Palm's fronds, the Burj Al Arab from the sea. It needs at least three hours to be unhurried, and it is the reason [a charter around the Palm](/uae/dubai/private-yacht-charter-around-the-palm-jumeirah) is priced above a Marina-only run.\n\nAsk which one your booking covers. \"Yacht tour Dubai\" is sold for both.",
          },
          {
            title: "What the hourly rate leaves out",
            icon: "wallet",
            content: "The advertised rate is the boat and the crew. Read what else is listed before you compare two quotes.\n\nCommonly extra: **food beyond light snacks**, alcohol, a DJ, water-sports toys, and fuel surcharges on longer runs. Commonly included: soft drinks, water, ice, towels, and a Bluetooth sound system.\n\nBoarding is usually 15 minutes before departure and the clock starts at the scheduled time, not when you arrive. A late group loses that time from their own charter, not from the next one.\n\nOne genuinely useful upgrade is the **swim stop**. The boat anchors in calm water off the Palm and you get in. It is the part people remember, and it needs a boat with a ladder and a crew willing to stop, so check it is on the itinerary rather than assuming. Our [private cruise with a swim stop](/uae/dubai/dubai-private-cruise-with-a-swim-stop-and-sunbathing) is built around it.",
          },
          {
            title: "When to go, and when the sea says no",
            icon: "sun",
            content: "**October to April** is the season. Outside it, midday on an open deck in Dubai is genuinely unpleasant and the sunset slot is the only comfortable one.\n\nThe **4pm and sunset departures** are the best value in any month: you get the last of the daylight on the towers and then the whole skyline lit on the way back. Morning runs are calmer water and better for swimming.\n\nBetween **December and February** the Gulf occasionally gets rough enough that the coastguard restricts small craft. Charters are cancelled rather than sailed, usually the morning of. Operators refund or move the booking, but if you have one evening in Dubai, do not make it the one thing on your itinerary.\n\nNew Year is its own event. Boats position off the Palm and Burj Khalifa for the fireworks and sell out months ahead at several times the normal rate: the [New Year's Eve megayacht cruise](/uae/dubai/dubai-new-years-eve-megayacht-cruise-with-dinner-and-fireworks) is not priced like an ordinary evening because it is not one.",
          },
        ],
      };

    case "dubai-helicopter-tours-guide":
      return {
        title: "Dubai Helicopter Tours: Twelve Minutes, Seventeen, or Twenty-Five",
        seoTitle: "Dubai Helicopter Tour Guide 2026",
        description: "What each flight length actually covers, why the seat you get is not guaranteed, weight rules nobody mentions, and whether it beats the Burj Khalifa for the money.",
        heroImage: IMG,
        fastFacts: [
          { icon: "helicopter", label: "Shortest flight", value: "12 minutes — the Palm and Burj Al Arab" },
          { icon: "clock", label: "Longest standard", value: "About 25 minutes, adds the Burj Khalifa and old Dubai" },
          { icon: "map-pin", label: "Departure", value: "Atlantis helipad or the Palm, not the airport" },
          { icon: "users", label: "Weight rules", value: "Declared per passenger; over ~100 kg often costs a second seat" },
          { icon: "camera", label: "Windows", value: "Do not open. Bring a lens hood, not a flash" },
        ],
        sections: [
          {
            title: "What each flight length actually gives you",
            icon: "helicopter",
            content: "Flights are sold in minutes and the difference is real, not marketing.\n\n**Around 12 minutes** is a loop over the Palm Jumeirah, Atlantis and the Burj Al Arab. It is the cheapest way into a helicopter in Dubai and it covers the images most people came for. It is also over quickly, and the first two minutes are spent climbing.\n\n**Around 17 minutes** adds Dubai Marina and the coastline north.\n\n**Around 25 minutes** is the one that reaches the **Burj Khalifa, Downtown and the creek** — old Dubai, the Frame, the whole spine of the city. If seeing the Burj Khalifa from the air is the point, check the duration before booking, because the short loops do not go there. Our [tour over the Palm and Burj Al Arab](/uae/dubai/dubai-helicopter-tour-over-the-palm-and-burj-al-arab) is the classic short run; the [flight paired with an old town walk](/uae/dubai/dubai-helicopter-flight-with-old-town-walking-tour-and-abra) covers the other half of the city on foot.",
          },
          {
            title: "The seat is not guaranteed, and it matters",
            icon: "users",
            content: "Seating in a helicopter is assigned by the pilot for weight and balance, not by who booked first or paid most. On a shared flight you may get a middle seat with a partial view.\n\nIf the window seat matters, the only reliable answer is a **private charter** of the whole aircraft, which is sold separately and costs several times a shared seat.\n\nRelated and rarely mentioned: operators ask for **each passenger's weight at booking** and it is not a formality. Passengers over roughly 100 kg are often required to buy a second seat, and it is checked at the helipad. Declare it honestly when you book rather than being told at the pad, where there is no time to fix it.",
          },
          {
            title: "Is it better value than an observation deck?",
            icon: "wallet",
            content: "A helicopter flight costs several times a Burj Khalifa ticket for a fraction of the time, so the honest comparison is what each one is for.\n\nThe **Burj Khalifa** gives you a long, still, elevated view and time to look at it. A **helicopter** gives you the shape of the city — the Palm as an actual palm, the coastline, how thin the developed strip really is against the desert. You cannot get that from any building, and you cannot linger on it either.\n\nIf you have one splurge and you want photographs, the helicopter wins. If you want an experience you can sit with, [the tower](/uae/dubai/burj-khalifa-tickets-guide) is better value.\n\nA useful middle path is the combined day: our [helicopter flight with a desert safari](/uae/dubai/dubai-helicopter-flight-and-desert-safari-combined-day) puts the two halves of the emirate, the built and the empty, into one booking.",
          },
          {
            title: "Practicalities that catch people out",
            icon: "clock",
            content: "**Arrive 45 minutes early.** There is a security check and a safety briefing, and the flight leaves on its slot whether or not you are through them.\n\n**Departure is from the Atlantis helipad or Palm Jumeirah**, not from the airport. It is a real journey from Downtown and a common cause of missed slots.\n\n**Windows do not open** and the glass is curved. Shoot without a flash, keep the lens close to the glass to kill reflections, and accept that phone photos through a helicopter window will not match the brochure.\n\n**Wind cancels flights** more often than rain does, particularly between December and February. Operators rebook rather than refund where they can, so leave the flight early in your trip rather than on the last afternoon.",
          },
        ],
      };

    case "day-trips-from-dubai":
      return {
        title: "Day Trips from Dubai: Which Ones Are Worth the Drive",
        seoTitle: "Best Day Trips from Dubai 2026",
        description: "Abu Dhabi, Al Ain, the east coast and Musandam compared by driving time, what each one is actually for, and the border rule that catches people out.",
        heroImage: IMG,
        fastFacts: [
          { icon: "car", label: "Abu Dhabi", value: "About 1.5 hours each way" },
          { icon: "mountain", label: "Al Ain", value: "About 1.5 hours — oasis, camel market, Jebel Hafeet" },
          { icon: "waves", label: "Fujairah & Khorfakkan", value: "About 2 hours — the Gulf of Oman coast" },
          { icon: "passport", label: "Musandam", value: "Oman. Passport required, and it is a real border" },
          { icon: "sun", label: "Best season", value: "October to April for anything outdoors" },
        ],
        sections: [
          {
            title: "Abu Dhabi: the one most people should do",
            icon: "landmark",
            content: "Ninety minutes down the E11 and it is a genuinely different city — lower, greener, slower, and built around one of the most impressive buildings in the region.\n\nThe **Sheikh Zayed Grand Mosque** is the reason to go and it is free to enter. Dress code is enforced at the door: ankles and shoulders covered for everyone, hair covered for women. Abayas are lent at the entrance but the queue for them is long.\n\nThe honest trap is trying to add a theme park. Our [day trip with the Grand Mosque and a theme park](/uae/dubai/abu-dhabi-day-trip-from-dubai-with-grand-mosque-and-a-theme-park) works because the park is the afternoon and nothing else is squeezed in. Mosque plus Louvre plus Qasr Al Watan plus Ferrari World in one day is a coach schedule, not a visit.\n\nIf art is the draw, the [Louvre and Grand Mosque pairing](/uae/dubai/louvre-abu-dhabi-and-grand-mosque-day-trip-from-dubai) is the better shape of day. The [full-day tour with the Corniche](/uae/dubai/abu-dhabi-full-day-tour-from-dubai-with-grand-mosque-and-corniche) is the cheapest way to see the city at all.",
          },
          {
            title: "Al Ain: the desert city, and the least touristy day out",
            icon: "mountain",
            content: "Inland on the Omani border, Al Ain is where Emiratis go in summer because it is dry rather than humid, and several degrees cooler at altitude.\n\nWhat makes it worth a day is that it is **not** a built-from-nothing skyline. The **oasis** is a working falaj irrigation system that is a UNESCO site and genuinely old. The **camel market** is a real livestock market, loud and unpolished, and not arranged for visitors. **Jebel Hafeet** is a 1,240 m mountain with a road to the top and the best view in the country at sunset.\n\nIt is the day to take if you have already done Dubai's set pieces and want the UAE that existed before them. Our [Al Ain day trip](/uae/dubai/al-ain-day-trip-from-dubai-oasis-camel-market-and-jebel-hafeet) covers all three.\n\nOne caution: parts of the road up Jebel Hafeet cross into Omani territory on some maps and the drive is steep and hot. Do it with a driver rather than a rental if you are not used to mountain roads.",
          },
          {
            title: "The east coast: the sea on the other side",
            icon: "waves",
            content: "Two hours east across the Hajar mountains and you reach the **Gulf of Oman**, which is a different sea from the one Dubai sits on: clearer, cooler, and with actual reefs.\n\n**Khorfakkan** has a proper beach and an amphitheatre carved into the hillside. **Fujairah** has the oldest mosque in the country. The drive itself, through the mountains, is the part most people underestimate.\n\nThis is the day for snorkelling. The water off **Dibba** and Snoopy Island is the best accessible reef in the UAE, and our [Dibba snorkelling day trip](/uae/dubai/dibba-fujairah-snorkelling-day-trip-from-dubai) goes for that rather than the sightseeing. For the coast and the towns, the [east coast tour with Khor Fakkan](/uae/dubai/fujairah-east-coast-day-tour-from-dubai-with-khor-fakkan) is the general version.\n\nExpect four hours of driving in total. It is a long day and worth it in winter, punishing in July.",
          },
          {
            title: "Musandam is Oman, and that changes the day",
            icon: "passport",
            content: "The dhow cruise through Musandam's fjords is the most scenic day trip from Dubai and the one with a genuine catch: **it is in Oman, and you cross an international border.**\n\nYou need your **passport**, not an Emirates ID or a copy. Depending on nationality you may need an Omani visa arranged in advance, and some nationalities cannot get one at the Dibba crossing at all. Operators will tell you what applies to your passport, but ask before booking rather than after.\n\nBudget for the crossing itself: it adds time at both ends and the queue is unpredictable.\n\nWhat you get for it is limestone cliffs dropping into still green water, dolphins more often than not, and a swim stop in a fjord. There is nothing like it in the UAE. Our [Musandam dhow cruise](/uae/dubai/musandam-dibba-dhow-cruise-day-trip-from-dubai) is a full day and it earns the length.",
          },
        ],
      };

    case "dubai-water-sports-guide":
      return {
        title: "Water Sports in Dubai: Jet Skis, Kayaks, Diving and the Rules",
        seoTitle: "Dubai Water Sports Guide 2026",
        description: "Where jet skis are actually allowed near the Burj Al Arab, what a first dive involves, why night kayaking is the underrated one, and the licence and age rules.",
        heroImage: IMG,
        fastFacts: [
          { icon: "waves", label: "Jet ski", value: "30 minutes to 2 hours, guided, from about USD 60" },
          { icon: "anchor", label: "First-time diving", value: "No certification needed for a discover dive" },
          { icon: "moon", label: "Night kayaking", value: "Clear kayaks with lights, Marina and Palm" },
          { icon: "fish", label: "Deep-sea fishing", value: "Half day, private boat, catch often cooked for you" },
          { icon: "sun", label: "Sea temperature", value: "Around 22C in winter, over 33C in August" },
        ],
        sections: [
          {
            title: "Jet skis: guided, and not where you think",
            icon: "waves",
            content: "Free-roaming jet ski hire is not a thing in Dubai. Rides are **guided in a convoy** with a lead rider, along an approved route, and that is a coastguard rule rather than an operator preference.\n\nWhat this means in practice is good: you are taken to the views rather than left to find them. The standard route runs from the Marina out past the **Burj Al Arab** and towards **Atlantis and the Palm**, which is where the photographs come from. Our [one-hour ride to Atlantis and the Palm](/uae/dubai/dubai-one-hour-jet-ski-tour-to-atlantis-and-the-palm) is that route.\n\n**30 minutes is too short.** A good part of it is spent getting out of the Marina at low speed. An hour is the sensible minimum if you want time at the landmarks.\n\nYou do not need a licence. Minimum age to drive is usually 16, with younger children allowed as passengers. Photographs are almost always sold separately, and a [ride with an onboard sound system](/uae/dubai/dubai-guided-jet-ski-ride-with-onboard-sound-system) is the same route with better company.",
          },
          {
            title: "Diving without a certificate",
            icon: "anchor",
            content: "A **discover scuba** session lets an uncertified beginner dive to about 12 metres with an instructor, after a pool or shallow-water briefing. It is not a course and does not certify you, but it is a real dive.\n\nThe honest part: **Dubai is not a great dive destination.** The Gulf side is shallow, warm and often low on visibility, and the marine life is modest. The east coast at Fujairah is markedly better and that is where serious divers go.\n\nWhat a [first dive in Dubai](/uae/dubai/discover-scuba-diving-in-dubai-first-dive) is genuinely good for is finding out whether you like breathing underwater before committing to a course elsewhere. Treat it as that and it is excellent value. Expect two to three hours in total for perhaps 30 minutes underwater.\n\nDo not fly within 18 hours of diving. This catches people on the last day of a trip more often than anything else on this page.",
          },
          {
            title: "The underrated one: kayaking at night",
            icon: "moon",
            content: "Clear-bottomed kayaks with LED lights, paddled around the Marina or the Palm after dark. It sounds like a gimmick and it is the trip people talk about afterwards.\n\nThe reason it works is temperature. Dubai's water is a bathtub for eight months of the year and the sun is the limiting factor, not the sea. Removing the sun removes the problem, and the skyline lit from water level is a better view than any deck.\n\nIt is calm-water paddling with no experience required, and it suits people who would not book a jet ski. Our [night kayaking session](/uae/dubai/dubai-night-kayaking-with-illuminated-kayaks-and-skyline-views) runs from the Marina.\n\nIf you want the adrenaline version instead, a [flyboard session off the Burj Al Arab](/uae/dubai/dubai-flyboard-session-with-instructor-off-the-burj-al-arab) is thirty minutes of falling over followed by about five of actually flying, which is the honest ratio for a first attempt.",
          },
          {
            title: "Fishing, and what the season does",
            icon: "fish",
            content: "Deep-sea fishing out of Dubai is a private-boat product, priced per boat by the hour like a yacht charter rather than per person. Four hours is the usual minimum and it is mostly trolling and bottom fishing for kingfish, queenfish, barracuda and grouper.\n\nThe good operators will **cook your catch** on the way back or arrange for a restaurant to. That is worth confirming, because it changes the day from a boat ride into a meal you caught. Our [deep-sea trip with your catch grilled](/uae/dubai/dubai-private-deep-sea-fishing-trip-with-your-catch-grilled) is built that way; the [four-hour trolling and casting trip](/uae/dubai/dubai-four-hour-deep-sea-fishing-trolling-and-casting) is the fishing-first version.\n\n**October to April** is the season for both fish and comfort. Summer trips run but the heat on an open deck at midday is not a small thing.\n\nCatch is never guaranteed, and any operator promising it is telling you something about themselves.",
          },
        ],
      };

    case "best-tours-in-dubai":
      return {
        title: "Best Tours in Dubai — 2026, Honestly Compared",
        seoTitle: "Best Tours in Dubai 2026: Top-Rated Picks by Category",
        description: "The best Dubai tours for 2026, picked by category — Burj Khalifa, desert safari, marina speedboat, yacht cruise, Old Dubai and an Abu Dhabi day trip — with real prices and an honest note on how we chose them.",
        heroImage: IMG,
        sections: [
          {
            title: "The Short Answer",
            content: "Dubai rewards picking **one iconic sight and one experience that doesn't exist back home** — the Burj Khalifa observation deck covers the first, and a desert safari at sunset covers the second. Most first-timers regret trying to cram in more than two major bookings on the same day given how spread out the city is.\n\nBelow is our honest, by-category breakdown — real tours, real prices, no inflated ratings.",
            tourCard: {
              slug: "burj-khalifa-124-125-and-dubai-aquarium-combo-ticket",
              title: "Burj Khalifa Levels 124 & 125 and Dubai Aquarium Combo Ticket",
              description: "The world's tallest building plus the aquarium at its base, on one combo ticket.",
              price: "From USD 100",
              duration: "Flexible",
              image: IMG,
            },
          },
          {
            title: "Best Desert Safari",
            content: "A **red-dune evening safari** is the single most-booked Dubai experience for a reason: dune bashing in a 4x4, a camel ride, sandboarding and a BBQ camp dinner under the desert sky, all inside one afternoon-into-evening block with hotel pickup included. If you have an extra night to spare, the overnight version with a private tent and stargazing is the upgrade worth paying for.",
            tourCard: {
              slug: "dubai-red-dune-evening-safari-with-camel-ride-and-bbq-camp",
              title: "Dubai Red Dune Evening Safari with Camel Ride and Camp Dinner",
              description: "Dune bashing, camel ride, sandboarding and a BBQ dinner camp — the classic Dubai desert evening.",
              price: "From USD 40",
              duration: "About 6 hours",
              image: IMG,
            },
          },
          {
            title: "Best Marina & Skyline Views",
            content: "A **speedboat tour** past the Marina, Palm Jumeirah, Atlantis and the Burj Al Arab is the fastest way to see Dubai's whole modern skyline from the water in under 90 minutes — and considerably cheaper than a yacht charter if photos are the goal rather than lounging.",
            tourCard: {
              slug: "dubai-speedboat-tour-marina-palm-atlantis-and-burj-al-arab",
              title: "Dubai Speedboat Tour: Marina, Palm, Atlantis and Burj Al Arab",
              description: "90 minutes past Dubai's four most photographed landmarks, by speedboat.",
              price: "From USD 53",
              duration: "60-90 minutes",
              image: IMG,
            },
          },
          {
            title: "Best Way to Slow Down: Old Dubai",
            content: "Old Dubai, around the Creek, is the side of the city the glass towers make you forget exists — gold and spice souks, a traditional abra crossing, and street food that has nothing to do with brunch buffets. A guided walking tour here is the best-value few hours in the whole city.",
            tourCard: {
              slug: "old-dubai-walking-tour-with-souks-street-food-and-abra-ride",
              title: "Old Dubai Walking Tour with the Souks, Street Food and an Abra Ride",
              description: "Gold and spice souks, a traditional abra ride across the Creek, and real street food — the Dubai before the skyline.",
              price: "From USD 22",
              duration: "About 3 hours",
              image: IMG,
            },
          },
          {
            title: "Best Day Trip from Dubai",
            content: "**Abu Dhabi**, 90 minutes south, is the best full-day trip from Dubai — the Sheikh Zayed Grand Mosque and the Corniche cover both the religious and the modern faces of the capital in one day, without needing to change hotels.",
            tourCard: {
              slug: "abu-dhabi-full-day-tour-from-dubai-with-grand-mosque-and-corniche",
              title: "Abu Dhabi Full-Day Tour from Dubai with the Grand Mosque and Corniche",
              description: "The UAE capital's biggest sights in one day trip from Dubai, no hotel change required.",
              price: "From USD 51",
              duration: "Full day",
              image: IMG,
            },
          },
          {
            title: "How We Picked These (and Why There's No Price Table vs. Other Platforms)",
            content: "Every tour above is run by a verified local operator we've vetted directly. We deliberately left out a side-by-side price comparison against other booking platforms: several of these tours are sold on multiple platforms by the same operator, who sets their own rate — a price table there would mostly compare marketing margins, not quality.\n\nWe don't claim to be the cheapest. What we do differently is confirm every booking directly with the operator before it's treated as final, and refund in full if they can't take your date. If you'd rather browse the full catalogue yourself, see [all Dubai tours](/uae/dubai)."
          }
        ],
        faqs: [
          { q: "What is the best tour in Dubai?", a: "For a first visit, pair the Burj Khalifa observation deck with a desert safari at sunset — one covers the iconic skyline view, the other covers the experience you can't get back home." },
          { q: "What is the best desert safari in Dubai?", a: "A red-dune evening safari with dune bashing, camel ride, sandboarding and a BBQ camp dinner rates highest for a first-timer. An overnight version with a private tent and stargazing is the upgrade if you have the extra night." },
          { q: "What is the best way to see the Dubai skyline?", a: "A marina speedboat tour past the Palm, Atlantis and Burj Al Arab covers the whole modern skyline from the water in under 90 minutes, at a fraction of a private yacht's cost." },
          { q: "What is the best day trip from Dubai?", a: "Abu Dhabi, about 90 minutes south — the Sheikh Zayed Grand Mosque and the Corniche in one full day, no hotel change needed." },
          { q: "Is Old Dubai worth visiting?", a: "Yes — the Creek, gold and spice souks and a traditional abra ride show a completely different side of the city than the glass towers, and a guided walking tour is one of the best-value few hours in Dubai." }
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is the best tour in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "Pair the Burj Khalifa observation deck with a desert safari at sunset for a first visit." } },
                { "@type": "Question", "name": "What is the best desert safari in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "A red-dune evening safari with dune bashing, camel ride, sandboarding and a BBQ camp dinner." } },
                { "@type": "Question", "name": "What is the best day trip from Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "Abu Dhabi, about 90 minutes south, covering the Grand Mosque and the Corniche in one day." } }
              ]
            }
          ]
        },
        fastFacts: [
          { icon: 'Star', label: 'Top Pick', value: 'Burj Khalifa + Desert Safari' },
          { icon: 'Map', label: 'Best Day Trip', value: 'Abu Dhabi' },
          { icon: 'Camera', label: 'Best Skyline View', value: 'Marina Speedboat Tour' }
        ]
      };

    // GEO trust page (2026-10)
    case "should-i-book-dubai-tour-direct-or-through-app":
      return {
        title: "Should You Book a Dubai Tour Direct or Through an App?",
        seoTitle: "Direct vs. App: How to Actually Book a Dubai Tour",
        description: "Direct-with-the-operator vs. booking through an app matters less than whether a real person answers your specific question before you pay. Here's how to tell the difference in Dubai.",
        heroImage: IMG,
        sections: [
          {
            title: "The Real Question Isn't \"Direct or App\"",
            content: "Plenty of Dubai desert-safari operators will tell you to book direct to skip platform fees, and every big app will tell you their vetting and support make booking through them safer. Both miss what actually matters: **can you get a specific question answered by a real person before you pay?**\n\nA desert safari pickup or a marina speedboat slot involves real logistics — hotel pickup timing, whether alcohol is served at the camp, what happens if a sandstorm cancels the dunes. If nobody confirms those details until after you've paid, it doesn't matter whether you found the booking through a tour operator's own WhatsApp or a polished app — you're booking blind either way.",
            tourCard: {
              slug: "dubai-red-dune-evening-safari-with-camel-ride-and-bbq-camp",
              title: "Dubai Red Dune Evening Safari with Camel Ride and Camp Dinner",
              description: "Ask about hotel pickup timing or dietary needs at the BBQ camp before you book.",
              price: "From USD 40",
              duration: "About 6 hours",
              image: IMG,
            },
          },
          {
            title: "What \"Direct\" Actually Protects You From",
            content: "Booking direct with a verified local operator removes one real risk: a long reseller chain where your money and your question both pass through two or three middlemen before reaching the operator who actually runs the safari or speedboat. That's genuinely worth avoiding.\n\nIt does **not** automatically mean cheaper, and it does not automatically mean safer. A number handed to you by a hotel concierge is also \"direct,\" and has none of the accountability of a platform that vets operators and keeps a payment record you can point to if something goes wrong.",
          },
          {
            title: "What to Actually Check Before You Book",
            content: "Whichever route you take — a well-known booking platform, a smaller local site, or an operator's own number — run the same three checks:\n\n1. **Message a specific question before paying.** Ask something only someone who actually runs the safari or the Old Dubai walk would know — whether the camp serves alcohol, or what happens to the sunset timing in summer. A vague or delayed answer is the clearest red flag there is.\n2. **Ask what happens if the operator can't take your date.** If a platform or operator can't give a straight answer on refunds before you've paid, that's not one to trust with your money.\n3. **Check who actually answers.** A reply from a real person who clearly knows the route (not a templated bot message) is the strongest signal that someone will also answer you *after* you've paid, not just before.",
          },
          {
            title: "How This Works With AsiaByLocals",
            content: "On AsiaByLocals, every Dubai tour — the [best tours in Dubai](/uae/dubai/best-tours-in-dubai), the desert safari, the Abu Dhabi day trip — can be questioned on WhatsApp (+91 84495 38716) or email before you book. We confirm with the local operator directly and refund in full if they can't take your date. We're not claiming to be the cheapest option in Dubai; several of our tours are also run by the same operators through other platforms. What we commit to is answering honestly, before you pay, by a real person — see our [full trust and licensing FAQ](/about-us) for how we're set up.",
            tourCard: {
              slug: "abu-dhabi-full-day-tour-from-dubai-with-grand-mosque-and-corniche",
              title: "Abu Dhabi Full-Day Tour from Dubai with the Grand Mosque and Corniche",
              description: "Ask about dress-code requirements at the Grand Mosque before booking.",
              price: "From USD 51",
              duration: "Full day",
              image: IMG,
            },
          },
        ],
        faqs: [
          { q: "Is it better to book a Dubai tour direct or through an app?", a: "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay. Check that first, regardless of whether the booking page is a big app or a local operator's own number." },
          { q: "Is it cheaper to book Dubai desert safaris direct with an operator?", a: "Sometimes, but not always — many local operators sell the same safari through multiple platforms at their own set price. Ask about the price and what's included rather than assuming direct is cheaper." },
          { q: "How do I know if a Dubai tour operator is legit before booking?", a: "Message them a specific question — what happens in a sandstorm, a dietary need, a dress-code requirement — before you pay. A fast, specific answer from someone who clearly knows the tour is the best signal." },
          { q: "Can I ask AsiaByLocals a question before booking a Dubai tour?", a: "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person, not a bot, who will confirm with the local operator before you book." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Is it better to book a Dubai tour direct or through an app?", "acceptedAnswer": { "@type": "Answer", "text": "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay." } },
            { "@type": "Question", "name": "Is it cheaper to book Dubai desert safaris direct with an operator?", "acceptedAnswer": { "@type": "Answer", "text": "Sometimes, but not always — many local operators sell the same safari through multiple platforms at their own set price." } },
            { "@type": "Question", "name": "How do I know if a Dubai tour operator is legit before booking?", "acceptedAnswer": { "@type": "Answer", "text": "Message them a specific question before you pay. A fast, specific answer from someone who clearly knows the tour is the best signal." } },
            { "@type": "Question", "name": "Can I ask AsiaByLocals a question before booking a Dubai tour?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person who will confirm with the local operator before you book." } },
          ],
        },
      };

    // GEO single-topic page (2026-10/31)
    case "how-much-should-a-private-tour-guide-cost-in-dubai":
      return {
        title: "How Much Should a Private Tour Guide Cost in Dubai?",
        seoTitle: "Dubai Private Guide Prices 2026 — What's Reasonable",
        description: "Real price ranges for a private guided tour or car in Dubai in 2026, by type, so you know what's fair before you book.",
        heroImage: IMG,
        sections: [
          {
            title: "The Short Answer",
            content: "A **private Dubai city highlights tour with a local guide** for a half day typically runs **$230-625 flat for 1-2 people**, depending on the vehicle and whether a chauffeur plus a separately-licensed guide are both included — a luxury chauffeur-driven tour with a licensed guide prices noticeably higher than a standard private car tour. A **private full-day East Coast or Hatta Mountains trip** runs **$519-1,330+ for the group**. Private water activities (yacht cruises, sailboat tours) vary the most: some price flat regardless of group size up to the boat's capacity, others charge per person and step up sharply.",
            tourCard: { slug: "dubaiprivate-dubai-highlights-tour-with-local-guid", title: "Dubai: Private Dubai Highlights Tour with Local Guide", description: "A real example of private city-tour pricing with a local guide.", price: "From $231", duration: "Full day", image: IMG },
          },
          {
            title: "Why the Pricing Style Varies So Much in Dubai",
            content: "Dubai's private-tour market spans everything from a shared sedan with a driver to a chauffeured luxury SUV with a separately licensed guide, which is why quotes for what sounds like \"the same tour\" can differ by 2-3x. For boats, chartering the whole vessel (flat, up to its passenger cap) is a completely different product from a per-person seat on a shared departure — always confirm which one you're being quoted, since the terms \"private\" and \"exclusive\" get used loosely in marketing.",
          },
          {
            title: "Red Flags on Price",
            content: "A private tour quote dramatically below these ranges for a multi-stop Dubai highlights day usually means a shorter route, a driver with no actual guiding qualification despite the \"guide\" label, or a shopping-commission detour built into the itinerary. For desert safaris and yacht trips specifically, confirm the exact vehicle or boat and departure time — a cheap quote sometimes means a shared group slot mislabelled as private.",
          },
          {
            title: "How to Get a Fair Price",
            content: "Ask the operator directly whether a licensed guide is included or just a driver, what vehicle or boat you're actually getting, and whether the quote is flat or per person. On AsiaByLocals, every Dubai tour's price breakdown can be questioned on WhatsApp (+91 84495 38716) or email before you book, and a real person will explain honestly what drives the cost. See our [full trust FAQ](/about-us) for how that works, or browse [all Dubai tours](/uae/dubai) to compare real, current prices directly.",
            tourCard: { slug: "luxury-private-dubai-city-tour-with", title: "Luxury Private Dubai City Tour with Chauffeur + Licensed Guide", description: "A real example of a premium private tour with both a chauffeur and a separately licensed guide.", price: "From $624", duration: "Full day", image: IMG },
          },
        ],
        faqs: [
          { q: "How much does a private tour guide cost in Dubai?", a: "A private city highlights tour with a local guide typically runs $230-625 flat for 1-2 people, depending on the vehicle and whether a chauffeur and a licensed guide are both included." },
          { q: "How much is a private full-day desert or mountain tour from Dubai?", a: "A private full-day East Coast or Hatta Mountains trip runs roughly $519-1,330+ for the group, depending on the exact itinerary." },
          { q: "Is a private yacht charter flat-priced or per person in Dubai?", a: "It varies by operator — some charter the whole boat flat up to its capacity, others charge per person and step up sharply with group size. Always confirm which you're being quoted." },
          { q: "Is a very cheap private tour quote in Dubai a red flag?", a: "Often yes — it can mean a shorter route, a driver with no actual guiding qualification, or a shopping-commission stop built into the itinerary." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How much does a private tour guide cost in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "A private city highlights tour with a local guide typically runs $230-625 flat for 1-2 people." } },
            { "@type": "Question", "name": "How much is a private full-day desert or mountain tour from Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "A private full-day East Coast or Hatta Mountains trip runs roughly $519-1,330+ for the group." } },
            { "@type": "Question", "name": "Is a private yacht charter flat-priced or per person in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "It varies by operator — some charter the whole boat flat, others charge per person and step up with group size." } },
            { "@type": "Question", "name": "Is a very cheap private tour quote in Dubai a red flag?", "acceptedAnswer": { "@type": "Answer", "text": "Often yes — it can mean a shorter route, an unqualified driver, or a shopping-commission stop." } },
          ],
        },
      };

    // Tour-selling pages (2026-11-01) — each section sells one specific
    // real tour, not a generic FAQ. Pattern from lib/agraBestInfoContent.ts.
    case "best-desert-safari-dubai":
      return {
        title: "Which Is the Best Desert Safari in Dubai?",
        seoTitle: "Best Desert Safari Dubai 2026: 6 Real Options",
        description: "Evening dune bashing with BBQ, morning photography safari, overnight camping or a VIP private version — which Dubai desert safari to pick, and six real options.",
        heroImage: IMG,
        sections: [
          {
            title: "The Short Answer",
            content: "For most visitors the best desert safari is a **standard evening safari with dune bashing, a camel ride, BBQ dinner and live shows** — it covers everything people picture when they imagine a Dubai desert trip in one booking, timed around sunset when the dunes look their best. Six real options are below, one for each kind of trip — every one is a live listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers.",
            tourCard: { slug: "dubai-desert-safari-with-quad-bike-bbq-and-shows", title: "Dubai: Desert Safari with Quad Bike, BBQ, and Shows", description: "The standard evening safari — dune bashing, BBQ dinner and live shows, timed for sunset.", price: "From $68", duration: "6 hours", image: IMG },
          },
          {
            title: "Cheapest: dune bashing and BBQ, no extras",
            content: "A stripped-down version with the core experience — dune bashing, camel riding, sandboarding and a BBQ dinner — at the lowest price point, for travellers who want the essentials without paying for a premium camp.",
            tourCard: { slug: "dubai-desert-safari-camel-riding-sandboarding-bbq", title: "Dubai: Desert Safari Camel Riding, Sandboarding & BBQ Dinner", description: "The essentials at the lowest price — dune bashing, camel ride, sandboarding and BBQ.", price: "From $36", duration: "7 hours", image: IMG },
          },
          {
            title: "If mornings suit you better: the photography safari",
            content: "A morning safari is cooler, far quieter, and the sand is untouched and freshly rippled — genuinely better for photos than the busier evening version, though it skips the camp dinner since it finishes before midday.",
            tourCard: { slug: "premium-dubai-morning-desert-safari-dune-bashing-c", title: "Premium Dubai Morning Desert Safari Dune Bashing, Camel Ride", description: "Cooler, quieter, and the dunes are untouched — the best option for photos.", price: "From $83", duration: "4 hours", image: IMG },
          },
          {
            title: "If you want it premium and private",
            content: "Private seating and a smaller, more exclusive camp setup is worth it if you don't want to share dinner tables and shows with dozens of other visitors — a genuinely different evening from the standard group safari at the same dunes.",
            tourCard: { slug: "dubai-vip-desert-safari-with-private-seating-and-live-shows", title: "Dubai VIP Desert Safari with Private Seating and Live Shows", description: "A smaller, more exclusive camp with private seating.", price: "From $524", duration: "Flexible", image: IMG },
          },
          {
            title: "If one evening isn't enough: stay overnight",
            content: "Everyone else leaves the camp around 10pm; staying overnight means the generators go quiet and you get the Al Lahbab dunes' night sky with none of the light pollution Dubai city has, plus sunrise over the dunes almost nobody else sees.",
            tourCard: { slug: "dubai-overnight-desert-safari-with-private-tent-and-stargazing", title: "Dubai Overnight Desert Safari with a Private Tent and Stargazing", description: "Stay past when everyone else leaves — a genuinely different night under the stars.", price: "From $181", duration: "Flexible", image: IMG },
          },
          {
            title: "If you want it combined with the city",
            content: "Pairing the safari with a Dubai city tour in one booking is efficient if the desert is one of several things you want to fit into a single day rather than a dedicated evening.",
            tourCard: { slug: "dubai-city-tour-desert-safari-bbq-dinner", title: "Dubai City Tour & Desert Safari BBQ Dinner", description: "The city highlights and the desert evening in one combined day.", price: "From $116", duration: "5 hours", image: IMG },
          },
          {
            title: "What actually varies between $36 and $524 quotes",
            content: "At the low end you're getting the genuine core experience — dune bashing, camel ride, BBQ — just without the camp upgrades. At the high end you're paying for a smaller, more private group, better food, and sometimes a nicer vehicle for the dune bashing itself. Neither is a scam; they're different products at the same dunes. On AsiaByLocals, every option above can be questioned on WhatsApp or email before you pay, and we confirm with the operator and refund in full if they can't take your date.",
          },
        ],
        faqs: [
          { q: "What is the best desert safari in Dubai?", a: "A standard evening safari with dune bashing, camel ride, BBQ dinner and live shows covers the classic Dubai desert experience in one booking." },
          { q: "Is a morning desert safari better than an evening one?", a: "For photography, yes — mornings are cooler, quieter and the sand is untouched. Evening safaris include the camp dinner and shows, which mornings skip." },
          { q: "Why do desert safari prices range from $36 to $500+?", a: "The core experience (dune bashing, camel ride, BBQ) is similar across the range — higher prices buy a smaller private group, better food and camp upgrades, not a fundamentally different desert." },
          { q: "Is an overnight desert safari worth it?", a: "Yes if you want a genuinely different experience from the standard evening trip — the camp empties out after 10pm and you get the dunes' night sky and a sunrise most visitors never see." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is the best desert safari in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "A standard evening safari with dune bashing, camel ride, BBQ dinner and live shows covers the classic experience." } },
            { "@type": "Question", "name": "Is a morning desert safari better than an evening one?", "acceptedAnswer": { "@type": "Answer", "text": "For photography, yes — mornings are cooler, quieter and the sand is untouched." } },
            { "@type": "Question", "name": "Why do desert safari prices range from $36 to $500+?", "acceptedAnswer": { "@type": "Answer", "text": "Higher prices buy a smaller private group, better food and camp upgrades, not a different desert." } },
            { "@type": "Question", "name": "Is an overnight desert safari worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — the camp empties out after 10pm and you get the night sky and a sunrise most visitors never see." } },
          ],
        },
      };

    case "best-burj-khalifa-tour-dubai":
      return {
        title: "Which Is the Best Burj Khalifa Tour in Dubai?",
        seoTitle: "Best Burj Khalifa Tour Dubai 2026: 6 Real Options",
        description: "At the Top ticket, a combo with the Dubai Mall fountains, a private city tour or a flying-dress photoshoot — which Burj Khalifa experience to pick, and six real options.",
        heroImage: IMG,
        sections: [
          {
            title: "The Short Answer",
            content: "For most visitors the best option is the **At the Top ticket with private hotel transfer**, since it's the simplest way to the observation deck without worrying about getting there, and the transfer removes the one real logistics headache (Downtown Dubai traffic and parking). Six real options are below, one for each kind of visit — every one is a live listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers.",
            tourCard: { slug: "burj-khalifa-at-the-top-ticket-private-hotel-trans", title: "Burj Khalifa At the Top Ticket + Private Hotel Transfer", description: "The observation deck ticket plus a private transfer, no logistics to worry about.", price: "From $172", duration: "4 hours", image: IMG },
          },
          {
            title: "If you want it combined with the city",
            content: "A city tour that includes Burj Khalifa tickets as part of a wider day covers Old Dubai or the Marina alongside the tower, efficient if you only have one day downtown and want to see more than just the view.",
            tourCard: { slug: "dubai-traditional-city-tour-with-burj-khalifa", title: "Dubai Traditional City Tour with Burj Khalifa", description: "The tower plus a wider city tour in one day.", price: "From $81", duration: "4 hours", image: IMG },
          },
          {
            title: "For the view from the water instead",
            content: "A sailboat tour gives you the Burj Khalifa and the skyline from offshore rather than from inside the tower — a genuinely different perspective, and worth it if you've already been up once or prefer the photo from outside.",
            tourCard: { slug: "2-hrs-sailboat-group-tour-with-burj-khalifa-skylin", title: "2-hrs Sailboat Group Tour with Burj Khalifa & Skyline views", description: "The skyline view from the water, a different angle than the observation deck.", price: "From $162", duration: "2 hours", image: IMG },
          },
          {
            title: "If photos are the actual goal",
            content: "A dedicated photoshoot at the Burj Khalifa with a photographer handling the shots is worth it over a quick phone photo from the deck if you actually want professional images from the trip, not just the memory of going up.",
            tourCard: { slug: "dubai-private-photoshoot-at-the-burj-khalifa", title: "Dubai: Private Photoshoot at the Burj Khalifa", description: "A professional photographer-led session at the tower.", price: "From $151", duration: "30 minutes", image: IMG },
          },
          {
            title: "If you want it private and flexible",
            content: "A private city tour that includes Burj Khalifa Levels 124/125 means your own schedule and pace rather than a group tour's fixed timing — worth it for families or anyone who wants to linger.",
            tourCard: { slug: "dubai-private-city-tour-with-burj-khalifa-levels-1", title: "Dubai: Private City Tour with Burj Khalifa Levels 124/125", description: "Your own schedule, with access to the higher 124/125 floors.", price: "From $207", duration: "6 hours", image: IMG },
          },
          {
            title: "If you want something more dramatic",
            content: "A flying-dress videography shoot at the Burj Khalifa is a specific, planned production for travellers who want a dramatic, shareable video, not just a standard visit — book this knowing it's a photo/video session first, a tower visit second.",
            tourCard: { slug: "dubai-burj-khalifa-flying-dress-videography-shoot", title: "Dubai: Burj Khalifa Flying Dress Videography Shoot", description: "A dramatic, produced video shoot at the tower.", price: "From $392", duration: "1 hour", image: IMG },
          },
          {
            title: "Timing matters more than which ticket",
            content: "Book a sunset time slot if you can — the transition from daylight to the city's lights coming on is the single most photographed moment from the deck, and slots do sell out in peak season. On AsiaByLocals, every option above can be questioned on WhatsApp or email before you pay, and we confirm with the operator and refund in full if they can't take your date.",
          },
        ],
        faqs: [
          { q: "What is the best Burj Khalifa tour in Dubai?", a: "The At the Top ticket with private hotel transfer is simplest for most visitors — it removes the Downtown Dubai traffic and parking logistics." },
          { q: "What time should I book for the Burj Khalifa?", a: "Sunset slots are the most popular, since you see the transition from daylight to the city lights coming on. Book ahead in peak season as these sell out." },
          { q: "Is there a way to see the Burj Khalifa without going up it?", a: "Yes — a sailboat tour gives you the tower and skyline from the water, a different perspective than the observation deck." },
          { q: "Can I combine the Burj Khalifa with other Dubai sights in one day?", a: "Yes — several tours combine Burj Khalifa tickets with a wider city tour of Old Dubai or the Marina in a single booking." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is the best Burj Khalifa tour in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "The At the Top ticket with private hotel transfer is simplest for most visitors." } },
            { "@type": "Question", "name": "What time should I book for the Burj Khalifa?", "acceptedAnswer": { "@type": "Answer", "text": "Sunset slots are most popular and sell out in peak season." } },
            { "@type": "Question", "name": "Is there a way to see the Burj Khalifa without going up it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — a sailboat tour gives you the tower and skyline from the water." } },
            { "@type": "Question", "name": "Can I combine the Burj Khalifa with other Dubai sights in one day?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — several tours combine Burj Khalifa tickets with a wider city tour." } },
          ],
        },
      };

    case "atlantis-aquaventure-waterpark-guide":
      return {
        title: "Atlantis Aquaventure Waterpark Guide 2026 (Dubai)",
        description: "Atlantis Aquaventure, on Palm Jumeirah, is one of the world's biggest waterparks — here's what to expect and how to book it.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/uae-1436307/img0/1600.webp",
        sections: [
          {
            title: "What's There",
            content: "Aquaventure Waterpark combines record-breaking slides, a private beach, and a lazy river across Atlantis The Palm's grounds — a full-day destination on its own, not a quick add-on.",
            tourCard: { slug: "dubai-atlantis-aquaventure-waterpark-entry-suv-tra", title: "Dubai: Atlantis Aquaventure Waterpark Entry & SUV Transfer", description: "Entry to Atlantis Aquaventure Waterpark with SUV transfer.", price: "From $778", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/uae-1436307/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Plan for a full day here rather than squeezing it in alongside other sightseeing — the park rewards unhurried visits.",
          },
        ],
        faqs: [
          { q: "Is Atlantis Aquaventure worth a full day?", a: "Yes, it's designed as a full-day destination with slides, a private beach, and a lazy river." },
        ],
      };

    case "dubai-aquarium-underwater-zoo-guide":
      return {
        title: "Dubai Aquarium & Underwater Zoo Guide 2026",
        description: "The Dubai Aquarium and Underwater Zoo inside Dubai Mall is one of the world's largest indoor aquariums, with sharks and rays visible through a massive viewing panel.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788878397/asiabylocals/tours/dubai-aquarium-and-underwater-zoo-ticket/img1.jpg",
        sections: [
          {
            title: "What's There",
            content: "Set inside Dubai Mall, the aquarium's main tank holds thousands of marine animals including sharks, visible through one of the world's largest viewing panels — an easy add-on to any Dubai Mall or Burj Khalifa visit.",
            tourCard: { slug: "dubai-aquarium-and-underwater-zoo-ticket", title: "Dubai Aquarium and Underwater Zoo Entry Ticket", description: "Entry ticket to the Dubai Aquarium and Underwater Zoo.", price: "From $74", duration: "Flexible", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788878397/asiabylocals/tours/dubai-aquarium-and-underwater-zoo-ticket/img1.jpg" },
          },
          {
            title: "Practical Tips",
            content: "This pairs naturally with a Dubai Mall visit and the Burj Khalifa, since all three are in the same complex.",
          },
        ],
        faqs: [
          { q: "Where is the Dubai Aquarium located?", a: "Inside Dubai Mall, making it easy to combine with a Burj Khalifa visit." },
        ],
      };

    case "museum-of-the-future-dubai-frame-guide":
      return {
        title: "Museum of the Future & Dubai Frame Guide 2026",
        description: "Compare two of Dubai's most distinctive modern landmarks — the Museum of the Future and the Dubai Frame — often combined into one tour.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/uae-539600/img0/1600.webp",
        sections: [
          {
            title: "What's Included",
            content: "This combined tour covers the Museum of the Future's immersive exhibits, the Dubai Frame's panoramic viewing deck (framing old and new Dubai in one photo), and a stop at the Burj Al Arab.",
            tourCard: { slug: "dubai-future-museum-burj-al-arab-and-dubai-frame", title: "Dubai: Future Museum, Burj Al Arab, and Dubai Frame Tour", description: "A combined tour of the Museum of the Future, Burj Al Arab, and Dubai Frame.", price: "From $65", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/uae-539600/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "The Museum of the Future is one of Dubai's most talked-about modern buildings — book ahead, as its distinctive design makes it a popular stop." ,
          },
        ],
        faqs: [
          { q: "What is the Dubai Frame?", a: "A giant picture-frame-shaped structure with a viewing deck that frames both old and new Dubai in one view." },
        ],
      };

    case "global-village-dubai-guide":
      return {
        title: "Global Village Dubai Guide 2026",
        description: "Global Village is Dubai's seasonal multicultural theme park, combining pavilions from dozens of countries with rides, shows, and shopping.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/uae-521634/img0/1600.webp",
        sections: [
          {
            title: "What's There",
            content: "Global Village runs seasonally (typically October through April) and combines pavilions representing dozens of countries with carnival rides, live shows, and shopping — a very different experience from Dubai's usual luxury-mall shopping.",
            tourCard: { slug: "dubai-global-village-entry-ticket-with-hotel", title: "Dubai: Global Village Entry Ticket with Hotel Transfers", description: "Entry to Global Village with hotel transfers.", price: "From $93", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/uae-521634/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Check the season before planning your trip around this, since Global Village doesn't run year-round." ,
          },
        ],
        faqs: [
          { q: "Does Global Village run year-round?", a: "No, it's seasonal, typically running from October through April." },
        ],
      };

    case "img-worlds-of-adventure-guide":
      return {
        title: "IMG Worlds of Adventure Guide 2026 (Dubai)",
        description: "IMG Worlds of Adventure is one of the world's largest indoor theme parks, with Marvel and Cartoon Network-themed zones.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/uae-1446559/img0/1600.webp",
        sections: [
          {
            title: "What's There",
            content: "Being fully indoor and climate-controlled, IMG Worlds is a good choice regardless of Dubai's outdoor heat, with themed zones based on Marvel characters and Cartoon Network shows.",
            tourCard: { slug: "dubai-img-worlds-adventure-tickets-with-gmc-yukon-", title: "Dubai: IMG Worlds Adventure Tickets with GMC YUKON Transfer", description: "Tickets to IMG Worlds of Adventure with transfer.", price: "From $527", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/uae-1446559/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A good option on a very hot day or with kids, since the entire park is indoors and air-conditioned.",
          },
        ],
        faqs: [
          { q: "Is IMG Worlds of Adventure indoors?", a: "Yes, fully indoor and air-conditioned, a good option regardless of outdoor heat." },
        ],
      };

    case "dubai-jet-ski-burj-al-arab-guide":
      return {
        title: "Dubai Jet Ski Tour of Burj Al Arab & Atlantis Guide 2026",
        description: "A jet ski tour is one of the best ways to see the Burj Al Arab and Atlantis The Palm from the water, with no building access required.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/uae-448422/img0/1600.webp",
        sections: [
          {
            title: "What's Included",
            content: "Riding your own jet ski past the Burj Al Arab and Atlantis The Palm gives a dramatic sea-level view of Dubai's most photographed landmarks, with photos typically included.",
            tourCard: { slug: "dubai-jet-ski-tour-of-burj-al-arab-atlantis", title: "Dubai: Jet Ski Tour of Burj Al Arab & Atlantis the Palm", description: "A jet ski tour past Burj Al Arab and Atlantis The Palm.", price: "From $251", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/uae-448422/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "No jet ski experience is required — guides lead the route, so this suits first-timers as well as experienced riders.",
          },
        ],
        faqs: [
          { q: "Do I need jet ski experience for this tour?", a: "No, guides lead the route and it suits first-timers as well as experienced riders." },
        ],
      };

    case "is-miracle-garden-worth-it-dubai":
      return {
        title: "Is Dubai Miracle Garden Worth It?",
        description: "An honest look at Dubai Miracle Garden, one of the world's largest natural flower gardens, built in the middle of the desert.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788892214/asiabylocals/tours/dubai-miracle-garden-entry-ticket-with-hotel-transfer/img1.png",
        sections: [
          {
            title: "What's There",
            content: "Dubai Miracle Garden holds tens of millions of flowers arranged into elaborate shapes and structures, including a flower-covered Airbus A380 replica — genuinely striking given it's built in the middle of the desert with no natural flower-growing climate.",
            tourCard: { slug: "dubai-miracle-garden-entry-ticket-with-hotel-transfer", title: "Dubai Miracle Garden Entry Ticket with Hotel Transfer", description: "Entry to Dubai Miracle Garden with hotel transfer.", price: "From $93", duration: "Flexible", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788892214/asiabylocals/tours/dubai-miracle-garden-entry-ticket-with-hotel-transfer/img1.png" },
          },
          {
            title: "Practical Tips",
            content: "The garden closes during Dubai's hottest summer months, since the flowers can't survive peak heat — check it's open before planning your visit date." },
        ],
        faqs: [
          { q: "Is Dubai Miracle Garden open year-round?", a: "No, it typically closes during the hottest summer months when flowers can't survive the heat." },
        ],
      };

    case "is-topgolf-worth-it-dubai":
      return {
        title: "Is TopGolf Worth It in Dubai?",
        description: "An honest look at Dubai's one-hour TopGolf game, an indoor-adjacent entertainment activity distinct from the city's desert safaris and skyline attractions.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/uae-738994/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "TopGolf combines golf with a tech-driven scoring game, a relaxed, air-conditioned activity that's a good break from Dubai's heat-heavy desert safaris and outdoor sightseeing — fun for groups regardless of actual golf skill.",
            tourCard: { slug: "dubai-1-hour-topgolf-game", title: "Dubai: 1-Hour TopGolf Game", description: "A one-hour TopGolf game session in Dubai.", price: "From $21", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/uae-738994/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "No golf experience is needed — the game format rewards accuracy and fun over technical skill, so it works for complete beginners in a group.",
          },
        ],
        faqs: [
          { q: "Is TopGolf worth it in Dubai?", a: "Yes, as a relaxed, air-conditioned group activity that's a good break from the city's heat-heavy outdoor sightseeing." },
        ],
      };

    case "is-al-ain-day-trip-worth-it-dubai":
      return {
        title: "Is the Al Ain Day Trip Worth It from Dubai?",
        description: "An honest look at the Al Ain day trip from Dubai covering the oasis, camel market, and Jebel Hafeet, a genuinely different inland emirate from Dubai's coastal skyline.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788902283/asiabylocals/tours/al-ain-day-trip-from-dubai-oasis-camel-market-and-jebel-hafeet/img1.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Al Ain, the UAE's 'Garden City,' combines a historic oasis, a working camel market, and the mountain drive up Jebel Hafeet — a genuinely different inland emirate landscape from Dubai's coastal skyline and desert dunes, worth it for travelers wanting UAE heritage beyond the city.",
            tourCard: { slug: "al-ain-day-trip-from-dubai-oasis-camel-market-and-jebel-hafeet", title: "Al Ain Day Trip from Dubai: Oasis, Camel Market, and Jebel Hafeet", description: "A day trip to Al Ain covering the oasis, camel market, and Jebel Hafeet mountain.", price: "From $637", duration: "Flexible", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788902283/asiabylocals/tours/al-ain-day-trip-from-dubai-oasis-camel-market-and-jebel-hafeet/img1.jpg" },
          },
          {
            title: "Practical Tips",
            content: "This is a long day trip given the distance from Dubai, so budget the full day rather than combining it with other activities.",
          },
        ],
        faqs: [
          { q: "Is the Al Ain day trip worth it from Dubai?", a: "Yes, for travelers wanting genuine UAE heritage and inland landscape beyond Dubai's coastal skyline." },
        ],
      };

    case "is-discover-scuba-diving-worth-it-dubai":
      return {
        title: "Is Discover Scuba Diving Worth It in Dubai?",
        description: "An honest look at Dubai's Discover Scuba Diving experience, an instructor-led introductory dive distinct from the city's jet ski and flyboard water activities.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/uae-95049/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This Discover Scuba Diving session is built for complete beginners, with an instructor guiding every step from basic skills to a real dive, no certification required — a genuine underwater experience rather than the motorized thrills of jet skis or flyboarding.",
            tourCard: { slug: "discover-scuba-diving-in-dubai", title: "Discover Scuba Diving in Dubai", description: "An instructor-led introductory scuba dive in Dubai, no certification required.", price: "From $162", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/uae-95049/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "No prior diving certification is needed, though being a comfortable swimmer helps with the confined-water training portion.",
          },
        ],
        faqs: [
          { q: "Is Discover Scuba Diving worth it in Dubai?", a: "Yes, for a genuine instructor-led underwater experience with no certification needed, different from the city's motorized water sports." },
        ],
      };

    case "is-desert-safari-worth-it-dubai":
      return {
        title: "Is the Dubai Desert Safari Worth It?",
        description: "An honest look at Dubai's desert safari with camel ride, sandboarding, and dune bashing, the city's single most popular tour category.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/uae-1064824/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This is by far Dubai's most-booked tour category, combining a 4x4 dune-bashing ride, sandboarding, and a camel ride into one affordable half-day, usually finishing with a desert camp dinner and entertainment.",
            tourCard: { slug: "desert-safari-dubai-with-camel-ride-sandboarding-d", title: "Desert Safari Dubai with Camel Ride and Sandboarding", description: "A desert safari with dune bashing, camel ride, and sandboarding.", price: "From $47", duration: "7 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/uae-1064824/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Dune bashing is a genuinely rough, bumpy ride — skip it if you're prone to motion sickness or traveling with very young children.",
          },
        ],
        faqs: [
          { q: "Is the Dubai desert safari worth it?", a: "Yes, it's the city's single most popular tour for good reason, packing dune bashing, sandboarding, and a camel ride into one affordable half-day." },
        ],
      };

    case "is-burj-khalifa-worth-it-dubai":
      return {
        title: "Is the Burj Khalifa Observation Deck Worth It?",
        description: "An honest look at the Burj Khalifa 'At the Top' ticket, reaching an observation deck on the world's tallest building.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/uae-7259/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Burj Khalifa is the world's tallest building, and its observation deck gives genuinely unmatched views over Dubai's skyline, desert, and coastline, a must-do for most first-time visitors rather than an optional extra.",
            tourCard: { slug: "burj-khalifa-at-the-top-ticket-private-hotel-trans", title: "Burj Khalifa At the Top Ticket with Private Hotel Transfer", description: "A ticket to the Burj Khalifa observation deck with hotel transfer.", price: "From $172", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/uae-7259/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Book a sunset time slot specifically if you want both daylight views and the city's lights coming on, all in one visit.",
          },
        ],
        faqs: [
          { q: "Is the Burj Khalifa worth it?", a: "Yes, it's the world's tallest building with genuinely unmatched views over Dubai, a must-do for most first-time visitors." },
        ],
      };

    case "is-dhow-cruise-worth-it-dubai":
      return {
        title: "Is the Dubai Marina Dhow Cruise Worth It?",
        description: "An honest look at Dubai's traditional dhow dinner cruise, a relaxed way to see the Marina or Creek skyline from the water.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/uae-756114/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "A dhow is a traditional wooden Gulf sailing boat, and cruising Dubai Marina or the Creek on one at sunset gives a genuinely relaxed, different view of the city's skyline than from land, with dinner included for a fuller evening.",
            tourCard: { slug: "dubai-best-luxurious-5-star-dhow-cruise-sea-lounge", title: "Dubai Best Luxurious 5-Star Dhow Cruise, Sea Lounge", description: "A luxury dhow dinner cruise in Dubai.", price: "From $23", duration: "1.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/uae-756114/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Book a sunset departure specifically for the best skyline photos as the city's lights come on over the water.",
          },
        ],
        faqs: [
          { q: "Is the Dubai dhow cruise worth it?", a: "Yes, for a relaxed, different-angle view of the skyline from the water, especially at sunset." },
        ],
      };

    case "is-atlantis-aquaventure-worth-it-dubai":
      return {
        title: "Is Atlantis Aquaventure Worth It in Dubai?",
        description: "An honest look at Atlantis Aquaventure, one of the region's largest water parks, with record-breaking slides and a private beach.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/uae-651147/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Aquaventure is one of the region's largest water parks, with record-breaking slides and a private beach attached to the Atlantis resort, a genuine full-day theme-park alternative to Dubai's malls and desert tours, especially good for families.",
            tourCard: { slug: "dubai-atlantis-aquaventure-tickets-with-hotel-tran", title: "Dubai Atlantis Aquaventure Tickets with Hotel Transfer", description: "Entry tickets to Atlantis Aquaventure water park with hotel transfer.", price: "From $461", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/uae-651147/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "The price is steep but includes a full day of access — budget the whole day here rather than treating it as a quick stop to get full value.",
          },
        ],
        faqs: [
          { q: "Is Atlantis Aquaventure worth it in Dubai?", a: "Yes, especially for families, as one of the region's largest water parks with record-breaking slides and a private beach." },
        ],
      };

    case "is-abu-dhabi-day-trip-worth-it-dubai":
      return {
        title: "Is the Abu Dhabi Day Trip Worth It from Dubai?",
        description: "An honest look at the Abu Dhabi day trip with the Grand Mosque and a theme park, reaching the UAE capital's biggest landmarks in one day.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788892174/asiabylocals/tours/abu-dhabi-day-trip-from-dubai-with-grand-mosque-and-a-theme-park/img1.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Abu Dhabi's Sheikh Zayed Grand Mosque is one of the most architecturally significant mosques in the world, and pairing it with a theme park stop gives a genuine mix of culture and entertainment in a single day trip from Dubai.",
            tourCard: { slug: "abu-dhabi-day-trip-from-dubai-with-grand-mosque-and-a-theme-park", title: "Abu Dhabi Day Trip from Dubai with Grand Mosque and a Theme Park", description: "A day trip to Abu Dhabi covering the Grand Mosque and a theme park.", price: "From $124", duration: "Flexible", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788892174/asiabylocals/tours/abu-dhabi-day-trip-from-dubai-with-grand-mosque-and-a-theme-park/img1.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Dress modestly for the Grand Mosque visit — full-length clothing is required and robes are available to borrow if needed." ,
          },
        ],
        faqs: [
          { q: "Is an Abu Dhabi day trip worth it from Dubai?", a: "Yes, for one of the world's most architecturally significant mosques paired with genuine entertainment, all in a single day." },
        ],
      };

    case "is-hot-air-balloon-worth-it-dubai":
      return {
        title: "Is the Dubai Sunrise Hot Air Balloon Tour Worth It?",
        description: "An honest look at the sunrise hot air balloon tour over the Dubai desert.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/25663a730df9eab6d7617ac8f8a3fd1cffa4a502b88fd719b90d83df5e9fdaeb.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Floating silently over the desert dunes at sunrise gives a genuinely different perspective than any ground-based safari, and the calm, gentle flight contrasts sharply with the adrenaline-focused dune bashing most desert tours emphasize.",
            tourCard: { slug: "dubai-sunrise-hot-air-balloon-tour-over-the-desert", title: "Dubai Sunrise Hot Air Balloon Tour over the Desert", description: "A sunrise hot air balloon tour over the Dubai desert.", price: "From $364", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/25663a730df9eab6d7617ac8f8a3fd1cffa4a502b88fd719b90d83df5e9fdaeb.jpg" },
          },
          {
            title: "Practical Tips",
            content: "This requires a genuinely early pre-dawn start to catch the right wind conditions and sunrise timing — plan your night before accordingly.",
          },
        ],
        faqs: [
          { q: "Is the Dubai hot air balloon tour worth it?", a: "Yes, floating silently over the dunes at sunrise gives a genuinely different, calmer perspective than ground-based desert safaris." },
        ],
      };

    case "is-museum-of-the-future-tour-worth-it-dubai":
      return {
        title: "Is the Skip-the-Line Museum of the Future Private Tour Worth It?",
        description: "An honest look at the private skip-the-line tour of Dubai's Museum of the Future.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0f654dd34bfc99fa22892ece19460b9a99e1bfe6162916dc5b432d38985534c2.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "The Museum of the Future is one of Dubai's most popular attractions with genuinely long queues, so skip-the-line access with a private guide saves real time and adds context to its immersive, speculative exhibits.",
            tourCard: { slug: "skip-the-line-museum-of-the-future-dubai-private", title: "Skip-the-Line Museum of the Future Private Tour", description: "A private skip-the-line tour of the Museum of the Future in Dubai.", price: "From $467", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0f654dd34bfc99fa22892ece19460b9a99e1bfe6162916dc5b432d38985534c2.jpg" },
          },
          {
            title: "Practical Tips",
            content: "This is priced as a premium private experience specifically to avoid the museum's famously long public queues.",
          },
        ],
        faqs: [
          { q: "Is the Museum of the Future private tour worth it in Dubai?", a: "Yes, skip-the-line access saves real time at one of Dubai's most popular, longest-queued attractions." },
        ],
      };

    case "is-flying-dress-experience-worth-it-dubai":
      return {
        title: "Is the Flying Dress Experience Worth It in Dubai?",
        description: "An honest look at the flying dress photoshoot experience in Dubai, a dramatic desert or city backdrop photo session.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/349fc3e15f4e08a1f81184c1986cf872af003291c8efbc18da3975f3e3469280.jpeg",
        sections: [
          {
            title: "The Short Answer",
            content: "Wearing a dramatic, oversized flowing dress for a professionally shot photoshoot against Dubai's desert or skyline backdrop gives genuinely striking, shareable photos that are hard to replicate with a standard tourist snapshot.",
            tourCard: { slug: "the-ultimate-flying-dress-experience-in-dubai", title: "The Ultimate Flying Dress Experience in Dubai", description: "A flying dress photoshoot experience in Dubai.", price: "From $478", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/349fc3e15f4e08a1f81184c1986cf872af003291c8efbc18da3975f3e3469280.jpeg" },
          },
          {
            title: "Practical Tips",
            content: "This is priced as a genuine premium photoshoot experience, so it suits travelers specifically wanting professional, shareable photos as a souvenir.",
          },
        ],
        faqs: [
          { q: "Is the flying dress experience worth it in Dubai?", a: "Yes, for genuinely striking, shareable photos against Dubai's desert or skyline backdrop, hard to replicate with a standard snapshot." },
        ],
      };

    case "is-hatta-bab-al-shams-tour-worth-it-dubai":
      return {
        title: "Is the Hatta Mountains & Bab Al Shams Sunset Tour Worth It?",
        description: "An honest look at the private tour combining Hatta's mountains with a Bab Al Shams desert sunset.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3350822e23da1ba6688c8deee6a09a39247856f741de02213b2f973d920d0b64.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Pairing Hatta's rugged mountain scenery, genuinely different from Dubai's urban skyline, with a sunset stop at the desert resort area of Bab Al Shams gives this day two distinct, photogenic landscapes without needing separate trips.",
            tourCard: { slug: "dubai-private-hatta-mountains-bab-al-shams-sunset", title: "Dubai Private Hatta Mountains & Bab Al Shams Sunset Tour", description: "A private tour combining Hatta's mountains with a Bab Al Shams desert sunset.", price: "From $519", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3350822e23da1ba6688c8deee6a09a39247856f741de02213b2f973d920d0b64.jpg" },
          },
          {
            title: "Practical Tips",
            content: "A full day commitment, so plan for significant drive time between the mountains and the desert sunset stop.",
          },
        ],
        faqs: [
          { q: "Is the Hatta Mountains and Bab Al Shams tour worth it from Dubai?", a: "Yes, it combines two genuinely distinct, photogenic landscapes — mountains and desert — without needing separate trips." },
        ],
      };

    default:
      return null;
  }
}
