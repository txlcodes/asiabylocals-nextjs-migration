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

    default:
      return null;
  }
}
