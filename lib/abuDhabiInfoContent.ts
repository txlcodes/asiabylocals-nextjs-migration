// Abu Dhabi authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getAbuDhabiInfoContent() -> getCityInfoContent().
//
// Every tourCard slug is taken from the live tour list for this city.
import type { CityInfoData } from './cityInfoContent';

const IMG = 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788400000/asiabylocals/tours/abu-dhabi-grand-mosque-qasr-al-watan-and-etihad-towers-tour/img0.jpg';

export function getAbuDhabiInfoContent(slug: string): CityInfoData | null {
  switch (slug) {

    case "sheikh-zayed-grand-mosque-guide":
      return {
        title: "Sheikh Zayed Grand Mosque: Dress Code, Opening Hours and the Friday Closure",
        seoTitle: "Sheikh Zayed Grand Mosque Guide 2026",
        description: "Free to enter, strict on dress, and closed to visitors on Friday mornings — everything to get right before you go.",
        heroImage: IMG,
        fastFacts: [
          { icon: "ticket", label: "Entry", value: "Free for everyone" },
          { icon: "shirt", label: "Dress code", value: "Shoulders and knees covered; nothing tight or sheer" },
          { icon: "shirt", label: "Abaya", value: "Provided free at the entrance for women" },
          { icon: "calendar-days", label: "Friday", value: "Closed to visitors in the morning" },
          { icon: "clock", label: "Allow", value: "90 minutes to two hours" },
        ],
        sections: [
          {
            title: "Sheikh Zayed Grand Mosque: Dress Code, Opening Hours and the Friday Closure",
            icon: "landmark",
            content: "The mosque holds forty thousand people and is the reason most visitors come to Abu Dhabi at all. It is also free, which surprises people who assume the most photographed building in the UAE must have a ticket.\n\nWhat you are paying for on a tour is transport, a guide who can explain what you are looking at, and the timing being handled — not access.\n\nThe scale reads differently in person. The main prayer hall holds the largest hand-knotted carpet in the world, made in Iran and laid in one piece. The courtyard's floral marble inlay runs across an area most visitors walk over without looking down, and it is arguably better than the domes above it. The reflecting pools along the flanks are the shot everybody takes, and they work best in the last hour before sunset.\n\nAllow ninety minutes minimum. People routinely plan forty and stay two hours.",
            tourCard: {
              slug: "abu-dhabi-grand-mosque-qasr-al-watan-and-etihad-towers-tour",
              title: "Abu Dhabi Grand Mosque, Qasr Al Watan and Etihad Towers Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 85",
              duration: "6 hours",
              image: IMG,
            },
          },
          {
            title: "The dress code, which is enforced",
            icon: "shirt",
            content: "This catches out more visitors than anything else, and it applies to everyone, men included.\n\nShoulders and knees must be covered. Clothing must not be tight or transparent. That rules out shorts, sleeveless tops, leggings as trousers, and anything sheer. Men in three-quarter length shorts are turned away regularly.\n\nWomen must cover their hair. An abaya with a hood is provided free at the entrance and returned afterwards — there is no need to buy or bring one, though a light scarf of your own is more comfortable in summer.\n\nShoes come off before entering the prayer halls, and the marble outside can be extremely hot by midday. Socks are worth having.\n\nThe staff at the entrance are polite about it and will send you to the abaya counter rather than turning you away, but a group with two people in shorts loses twenty minutes sorting it out.",
          },
          {
            title: "When to go, and the Friday problem",
            icon: "calendar-days",
            content: "⚠️ The mosque does not admit visitors on Friday mornings. Friday is the congregational prayer day and the building belongs to worshippers until the early afternoon. Every year a large number of visitors arrive on a Friday morning and are turned away.\n\nIf your Abu Dhabi day falls on a Friday, plan the mosque for the afternoon and something else for the morning — Qasr Al Watan and the Louvre both open normally.\n\nOtherwise the best hours are early morning, when it is cool and empty and the light is soft, or the last ninety minutes before sunset, when the white marble goes gold and then the exterior lighting comes on. That lighting system shifts with the phases of the moon, which is a detail worth knowing while you are looking at it.\n\nRamadan changes the hours substantially and the mosque is at its most atmospheric during it — check the dates for your travel year.",
          },
        ],
      };

    case "louvre-abu-dhabi-guide":
      return {
        title: "Louvre Abu Dhabi: The Dome, the Monday Closure, and How Long You Need",
        seoTitle: "Louvre Abu Dhabi Guide 2026",
        description: "Why the building is the exhibit, how the collection is hung, and the closure day that catches out most visitors to Saadiyat Island.",
        heroImage: IMG,
        fastFacts: [
          { icon: "calendar-days", label: "Closed", value: "Mondays — the single most common mistake" },
          { icon: "landmark", label: "The dome", value: "7,850 metal stars in eight layers" },
          { icon: "clock", label: "Allow", value: "Two to three hours" },
          { icon: "sun", label: "Best light", value: "Middle of a bright day, for the rain of light" },
          { icon: "map", label: "Where", value: "Saadiyat Island, ~20 minutes from the city centre" },
        ],
        sections: [
          {
            title: "Louvre Abu Dhabi: The Dome, the Monday Closure, and How Long You Need",
            icon: "landmark",
            content: "Jean Nouvel's dome is why most people come and it earns that. Nearly eight thousand metal stars in eight overlapping layers, floating on supports you cannot see from underneath, dropping a shifting pattern the architects called the rain of light onto the plazas below.\n\nIt changes hour by hour, and it is at its most dramatic in the middle of a bright day rather than late afternoon — which inverts the usual advice about visiting museums at the quiet end of the day.\n\nSpend some of your visit outside on the plazas rather than all of it in the galleries. The dome is the exhibit as much as anything hanging beneath it, and a surprising number of visitors go straight in, see the collection, and leave without standing under it properly.\n\n⚠️ **The museum is closed on Mondays.** This catches out more visitors to Saadiyat Island than anything else, particularly people on a fixed-date cruise call.",
            tourCard: {
              slug: "louvre-abu-dhabi-general-admission-ticket",
              title: "Louvre Abu Dhabi General Admission Ticket",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 16",
              duration: "2-3 hours",
              image: IMG,
            },
          },
          {
            title: "How the collection is hung, and why it matters",
            icon: "sparkles",
            content: "This is not a satellite of the Paris Louvre showing borrowed highlights. It is arranged on a genuinely different principle, and if you do not know that, you will walk through it as though it were a normal museum and miss the point.\n\nThe galleries run chronologically across civilisations rather than being divided by country or culture. A Chinese bronze, a Greek one and a Mesopotamian one from the same century share a room, so what you see is what humanity was doing simultaneously in different places. It is an argument about shared history, made in objects.\n\nThat argument only lands if somebody makes it, which is why the express guided tour is worth the small extra — forty-five minutes with a museum educator covering the highlights, on headsets so it works in a full gallery.\n\n⚠️ Note that the guided tour does **not** include your entry ticket. Both must be booked; arriving with only the tour will not get you through the door.",
            tourCard: {
              slug: "louvre-abu-dhabi-express-guided-tour",
              title: "Louvre Abu Dhabi Express Guided Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 18",
              duration: "45 minutes",
              image: IMG,
            },
          },
          {
            title: "The view most visitors never get",
            icon: "waves",
            content: "The museum sits over water on purpose and its outdoor installations run down to the sea, which means there is a whole side of the building designed to be seen from the water and almost nobody sees it.\n\nGuided kayak tours circle the dome at eye level, close enough to see how the lattice is assembled, while the visitors inside look out at you. An hour, on flat sheltered water, with no experience needed. There is also a small electric catamaran you drive yourself, which is near-silent — and silence matters here, because the sound under that dome is part of the design and an outboard engine destroys it.\n\nDo the water first and the galleries after, not the other way round.\n\nBoth are best at either end of the day between June and September; an hour on open water at an Abu Dhabi midday is harder work than it sounds and there is no shade out there.",
            tourCard: {
              slug: "abu-dhabi-guided-kayak-tour-around-the-louvre",
              title: "Abu Dhabi Guided Kayak Tour around the Louvre",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 45",
              duration: "1 hour",
              image: IMG,
            },
          },
        ],
      };

    case "qasr-al-watan-guide":
      return {
        title: "Qasr Al Watan: Visiting a Working Presidential Palace",
        seoTitle: "Qasr Al Watan Abu Dhabi Guide",
        description: "What is on the public route, the evening light show, and the short-notice closures that no amount of planning can predict.",
        heroImage: IMG,
        fastFacts: [
          { icon: "landmark", label: "What it is", value: "A working presidential palace, not a former one" },
          { icon: "landmark", label: "Great Hall dome", value: "37 metres across" },
          { icon: "clock", label: "Allow", value: "Two hours, more with the evening show" },
          { icon: "shirt", label: "Dress", value: "Modest — standards close to the mosque" },
          { icon: "triangle-alert", label: "Closures", value: "At short notice for state functions" },
        ],
        sections: [
          {
            title: "Qasr Al Watan: Visiting a Working Presidential Palace",
            icon: "landmark",
            content: "Most palaces open to the public are former palaces. This one is not. Qasr Al Watan is where the UAE's government receives heads of state and where the Federal Supreme Council meets, and it opens the rest of itself to visitors around that.\n\nThat distinction is the reason to come, and it is also the reason for the one frustration attached to the place: it closes at short notice when it is needed, and those closures are not published far in advance.\n\nThe public route is generous. The Great Hall sits under a dome thirty-seven metres across, entirely white and gold, and is considerably larger in person than photographs suggest. The House of Knowledge holds manuscripts including early Arabic works on astronomy and mathematics. The Presidential Banquet hall and the Spirit of Collaboration room are both on the route, along with the collection of gifts given by visiting states.\n\nYour ticket covers all of it, plus the gardens and the visitor centre.",
            tourCard: {
              slug: "qasr-al-watan-palace-and-garden-entry-ticket-abu-dhabi",
              title: "Qasr Al Watan Palace and Garden Entry Ticket, Abu Dhabi",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 21",
              duration: "2 hours",
              image: IMG,
            },
          },
          {
            title: "Timing it, and the evening show",
            icon: "clock",
            content: "The palace is floodlit after dark and there is a projection show on the façade in the evening — the building itself becomes the screen. If you can arrange your day so the palace comes last, that is the version to see.\n\nThe practical order for a full Abu Dhabi day is the mosque in the morning while it is cool, the Louvre or lunch in the middle, and Qasr Al Watan in the late afternoon running into the show.\n\nDress modestly. The standards here are close to those at the Grand Mosque, though the abaya requirement does not apply.\n\n⚠️ Before booking anything built around this palace, confirm it is open on your date. A tour that includes it can usually be reshaped if it closes, but if the palace is the whole reason for the trip, it is worth checking rather than hoping. Tell us your date and we will check with the operator before you pay.",
          },
          {
            title: "Combining it with the mosque",
            icon: "map",
            content: "The Grand Mosque and Qasr Al Watan are the two buildings that between them explain how Abu Dhabi sees itself, and they sit close enough to do in a single half day.\n\nDoing it privately rather than on a coach makes a real difference at the mosque, which rewards being lingered in and where coach schedules rarely allow it. A private transfer with entry tickets to both included costs less than most people expect, particularly split between three or four.\n\nIf you are arriving by cruise ship at Zayed Port or have a long layover at the airport, there are tours built specifically around those pickups with the timing arranged to your ship or flight rather than a fixed departure. That is the version to take when you have one shot and no margin for error.",
            tourCard: {
              slug: "abu-dhabi-grand-mosque-and-qasr-al-watan-private-transfer-tour",
              title: "Abu Dhabi Grand Mosque and Qasr Al Watan Private Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 85",
              duration: "Half day",
              image: IMG,
            },
          },
        ],
      };

    case "yas-island-parks-guide":
      return {
        title: "Yas Island Theme Parks: Which Ones, Which Order, and the Summer Rule",
        seoTitle: "Yas Island Parks Guide: Ferrari World, SeaWorld, Warner Bros",
        description: "Four parks within walking distance, why the multi-park pass costs less, and which are indoors when it matters.",
        heroImage: IMG,
        fastFacts: [
          { icon: "ticket", label: "The four", value: "Ferrari World, SeaWorld, Warner Bros. World, Yas Waterworld" },
          { icon: "wind", label: "Fully indoors", value: "Ferrari World, SeaWorld, Warner Bros. World" },
          { icon: "sun", label: "Outdoors", value: "Yas Waterworld — brutal June to September" },
          { icon: "wallet", label: "Multi-park pass", value: "Cheaper than separate tickets, valid several days" },
          { icon: "car", label: "Parking", value: "Free, with a shuttle between parks" },
        ],
        sections: [
          {
            title: "Yas Island Theme Parks: Which Ones, Which Order, and the Summer Rule",
            icon: "ticket",
            content: "Four major parks sit within walking distance of each other on Yas Island, which is unusual anywhere in the world, and buying them separately costs considerably more than a combined pass.\n\nFerrari World holds Formula Rossa, which reaches around 240 km/h in under five seconds and is the fastest rollercoaster on earth — fast enough that riders are issued protective goggles, because at that speed an insect does damage. It also has Flying Aces, the steepest non-inverted coaster drop anywhere.\n\nSeaWorld Abu Dhabi is the largest indoor marine-life park in the world, built around a research and rescue centre with eight realms and a huge multi-level aquarium at the centre.\n\nWarner Bros. World is six themed lands and twenty-nine rides, all under one roof.\n\nYas Waterworld is Emirati-themed and outdoors, which is the single most important fact about it.",
            tourCard: {
              slug: "yas-island-multi-park-pass-abu-dhabi-two-three-or-four-parks",
              title: "Yas Island Multi-Park Pass: Two, Three or Four Parks in Abu Dhabi",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 137",
              duration: "Valid several days",
              image: IMG,
            },
          },
          {
            title: "The summer rule, which locals follow and visitors ignore",
            icon: "sun",
            content: "Between June and September, three of these four parks are entirely indoors and air-conditioned, including every queue, and one is not.\n\nThat is not a small distinction. An Abu Dhabi July afternoon at an outdoor waterpark is an endurance event by eleven in the morning, and residents simply do not do it — they take their children to Warner Bros. World, which never sees the sun, or to SeaWorld.\n\nIn winter the position reverses and Yas Waterworld becomes the one to prioritise, because it is the only one whose appeal depends on the weather.\n\nSo the order for a summer trip is Warner Bros. World and SeaWorld, with Ferrari World for the coaster people. For a December trip, put the waterpark first while it is pleasant and keep the indoor parks for whichever day is dusty or windy.",
            tourCard: {
              slug: "warner-bros-world-abu-dhabi-entry-ticket",
              title: "Warner Bros. World Abu Dhabi Entry Ticket",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 109",
              duration: "Full day",
              image: IMG,
            },
          },
          {
            title: "The circuit, and what else is on the island",
            icon: "car",
            content: "Yas Marina Circuit hosts the Abu Dhabi Grand Prix and, outside race weekends, lets the public onto it — which very few Formula 1 circuits do.\n\nThere are three levels of that. Driving a single-seat Formula Yas 3000 yourself is the serious version and the expensive one. A Caterham Seven is the affordable way to actually drive the track: light, low, with nothing between you and the road, three laps, and far more fun at legal speeds than a supercar would be. And the drift taxi puts you in the passenger seat beside a professional while he takes two laps largely sideways, which needs no licence at all.\n\nAll three require a booking rather than a walk-up, and the driving options need a physical driving licence.\n\nteamLab Phenomena on Saadiyat is worth pairing with a Yas day if you have an evening spare — different island, twenty minutes away, and a completely different kind of attraction.",
            tourCard: {
              slug: "ferrari-world-abu-dhabi-entry-ticket",
              title: "Ferrari World Abu Dhabi Entry Ticket",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 109",
              duration: "Full day",
              image: IMG,
            },
          },
        ],
      };

    case "abu-dhabi-day-trip-from-dubai":
      return {
        title: "Abu Dhabi Day Trip from Dubai: What Fits in One Day, and What Does Not",
        seoTitle: "Abu Dhabi Day Trip from Dubai Guide",
        description: "Ninety minutes each way, three things that fit comfortably, and the two closures that can ruin the plan.",
        heroImage: IMG,
        fastFacts: [
          { icon: "car", label: "Distance", value: "About 90 minutes each way from Dubai" },
          { icon: "clock", label: "Realistic", value: "Three major sites, not five" },
          { icon: "calendar-days", label: "Avoid", value: "Friday mornings — the mosque is closed" },
          { icon: "calendar-days", label: "Avoid", value: "Mondays if the Louvre is on your list" },
          { icon: "shirt", label: "Bring", value: "Clothing that covers shoulders and knees" },
        ],
        sections: [
          {
            title: "Abu Dhabi Day Trip from Dubai: What Fits in One Day, and What Does Not",
            icon: "car",
            content: "Abu Dhabi is about ninety minutes down the coast from Dubai, and a day trip works well — provided the plan is honest about the arithmetic.\n\nThree hours of the day are spent in the car. That leaves roughly seven for the city, and inside those seven hours three major sites fit comfortably, four is tight, and five is a list rather than a day.\n\nThe combinations that work:\n\nThe classic — Sheikh Zayed Grand Mosque, Qasr Al Watan, and the Corniche with the Etihad Towers observation deck. This is the one to take if it is your only visit.\n\nThe cultural — the Grand Mosque and Louvre Abu Dhabi, with two hours at each rather than the twenty-minute stops a general city tour gives them. Better if you actually want to look at things.\n\nThe family — Yas Island for one of the theme parks, which is a full day on its own and does not combine with the mosque.\n\nPick one. Trying to blend them is how people end up seeing four car parks.",
            tourCard: {
              slug: "abu-dhabi-full-day-tour-from-dubai-with-grand-mosque-and-corniche",
              title: "Abu Dhabi Full-Day Tour from Dubai with the Grand Mosque and Corniche",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 51",
              duration: "Full day",
              image: IMG,
            },
          },
          {
            title: "The two closures that ruin the plan",
            icon: "calendar-days",
            content: "⚠️ The Sheikh Zayed Grand Mosque does not admit visitors on Friday mornings. If your only free day is a Friday, the mosque has to be the afternoon and something else takes the morning.\n\n⚠️ Louvre Abu Dhabi is closed on Mondays. Every Monday, all day.\n\nBetween them these two catch out an extraordinary number of day trippers, because a day trip has no second chance — you are not staying in the city and cannot come back tomorrow.\n\nQasr Al Watan adds a third, less predictable risk: it closes at short notice for state functions, and that is not published in advance.\n\nWhen you book with us we check all three against your actual date with the operator before you pay. That sounds like a small thing and it is the single most useful part of booking a day trip rather than driving yourself.",
          },
          {
            title: "Doing it the other way round",
            icon: "map",
            content: "One thing worth saying plainly: if Abu Dhabi is genuinely the reason for your trip, stay in Abu Dhabi rather than day-tripping to it.\n\nThree hours of driving buys you a lot when it is spent in the city instead — the mosque at sunrise, the Louvre in the quiet hour before closing, the palace lit up in the evening. Those are the versions worth having and a day trip from Dubai reaches none of them.\n\nFor anyone already in Abu Dhabi, or arriving by cruise at Zayed Port, or stuck with a long layover at the airport, there are half-day tours built around those pickups with timing arranged to your ship or flight rather than a fixed departure.\n\nAnd if you are travelling in the other direction — based in Abu Dhabi and wanting Dubai for a day — the same arithmetic applies in reverse: pick one half of Dubai, not both.",
            tourCard: {
              slug: "abu-dhabi-half-day-tour-with-airport-or-cruise-port-pickup",
              title: "Abu Dhabi Half-Day Tour with Airport or Cruise Port Pickup",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 118",
              duration: "5 hours",
              image: IMG,
            },
          },
        ],
      };

    case "best-time-to-visit-abu-dhabi":
      return {
        title: "Best Time to Visit Abu Dhabi: Weather, Prices and the Grand Prix Weekend",
        seoTitle: "Best Time to Visit Abu Dhabi 2026",
        description: "The season that works, the months that do not, and the one weekend a year when the city doubles its prices.",
        heroImage: IMG,
        fastFacts: [
          { icon: "sun", label: "Best months", value: "November to March" },
          { icon: "thermometer", label: "Summer", value: "June-September, 40-48C with high humidity" },
          { icon: "calendar-days", label: "Grand Prix", value: "Usually late November or early December" },
          { icon: "wallet", label: "Cheapest", value: "July and August" },
          { icon: "moon", label: "Ramadan", value: "Moves ~11 days earlier each year" },
        ],
        sections: [
          {
            title: "Best Time to Visit Abu Dhabi: Weather, Prices and the Grand Prix Weekend",
            icon: "sun",
            content: "November to March, and the reasoning is the same as Dubai's with one local difference: Abu Dhabi sits further out into the Gulf and is noticeably more humid, which makes the shoulder months harder here than they are ninety minutes up the coast.\n\nDecember to February is the peak — daytime around 24 to 28C, evenings cool enough for a layer, and everything outdoors genuinely pleasant. November and March are warm but manageable.\n\nApril and October are the honest shoulders: fine in the morning, uncomfortable after two in the afternoon.\n\nJune to September is severe. Temperatures reach the high forties and the humidity off the water makes the felt temperature worse. The city is entirely built for it — the malls, the museums and three of the four Yas Island parks are indoors and connected — but a plan built around the Corniche, kayaking or a waterpark will not survive the middle of the day.\n\nIf you must travel in summer, front-load everything outdoors before nine in the morning.",
          },
          {
            title: "The Formula 1 weekend",
            icon: "car",
            content: "The Abu Dhabi Grand Prix is usually the season finale, in late November or early December, and it is the one weekend a year when the city's hotel market changes shape completely.\n\nRates double or worse. Availability disappears months ahead, and the effect spills into Dubai, which fills with people commuting down for the race. Restaurant tables, taxis and tours all tighten.\n\nIf you are going for the race, none of that is a problem and the city at that moment is the best it gets — the circuit runs into the evening under lights and the whole island is a festival.\n\nIf you are not, check the date before you book and move a week either side. The same trip costs half as much and the city is quieter.\n\nThe circuit itself is open to the public outside race weekends, which is when to go if driving it rather than watching it is the appeal.",
          },
          {
            title: "Ramadan, and what it changes here",
            icon: "moon",
            content: "Ramadan shifts about eleven days earlier each year, so check the dates for your travel year rather than assuming.\n\nEating, drinking and smoking in public during daylight is restricted, live music pauses, and attraction hours shift — often opening later and running much later into the night. Hotels continue to serve guests throughout the day, usually in a screened area, and visitors are not expected to fast.\n\nThe Grand Mosque during Ramadan is the most atmospheric it ever is, and iftar — the meal breaking the fast at sunset — is the most sociable hour of the Emirati year. Hotel iftar buffets are genuinely one of the better things to do in the country.\n\nRates are lower than the equivalent week outside Ramadan.\n\nIt is not a reason to cancel a trip. It is a reason to shift your day later — which, in a city this hot, most visitors end up doing anyway.",
          },
        ],
      };

    case "abu-dhabi-desert-safari-guide":
      return {
        title: "Abu Dhabi Desert Safari: Emptier Dunes, and How It Differs from Dubai's",
        seoTitle: "Abu Dhabi Desert Safari Guide",
        description: "Higher dunes, fewer vehicles, working camel farms — what the Abu Dhabi version does differently and who should skip the dune bashing.",
        heroImage: IMG,
        fastFacts: [
          { icon: "car", label: "Dunes", value: "Higher and considerably emptier than Dubai's" },
          { icon: "clock", label: "Half day", value: "About 4 hours, morning or evening" },
          { icon: "clock", label: "Evening", value: "About 6-7 hours with camp dinner" },
          { icon: "shirt", label: "Bring", value: "A jacket — cold after dark, November to February" },
          { icon: "triangle-alert", label: "Not for", value: "Pregnancy, back or neck problems, motion sickness" },
        ],
        sections: [
          {
            title: "Abu Dhabi Desert Safari: Emptier Dunes, and How It Differs from Dubai's",
            icon: "sun",
            content: "The desert outside Abu Dhabi is a different landscape from the one outside Dubai, and the safari reflects it.\n\nThe dunes here run higher and the camps sit further from the city, which means far fewer vehicles on the same sand. A Dubai evening safari in season can put several hundred 4x4s across one dune field; the Abu Dhabi equivalent is a fraction of that.\n\nThe other difference is what gets included. Abu Dhabi safaris more often visit a working camel farm rather than offering a roadside camel ride — a farm where the animals are actually kept and worked, which is a rarer and more interesting thing to see than three minutes on a saddle.\n\nWhat is the same: the tyres come down at the dune line, there is half an hour of dune driving, then sandboarding, then sunset, then a camp with dinner and shows for the evening version.",
            tourCard: {
              slug: "abu-dhabi-desert-safari-with-camel-farm-and-bedouin-camp-dinner",
              title: "Abu Dhabi Desert Safari with Camel Farm and Bedouin Camp Dinner",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 91",
              duration: "6 hours",
              image: IMG,
            },
          },
          {
            title: "Morning or evening, and which suits what",
            icon: "clock",
            content: "The morning safari is cooler, quieter and better for photographs. The sand is ridged and untouched, the light is low, and there are almost no other vehicles. It suits photographers, families with small children, and anyone who wants the desert rather than the party.\n\nThe evening safari gives you the sunset over the dunes and the camp afterwards — barbecue dinner, tanoura and fire shows, shisha, and a genuinely dark sky. It is the more sociable version and the one most people book.\n\nA four-hour half-day covers the driving, sandboarding and the camel farm without the camp evening. Six to seven hours adds the camp and dinner.\n\nQuad biking is almost always an optional extra rather than part of the headline price. Decide at the option stage, because it is the single most common reason a cheap safari turns out to cost more than expected.",
            tourCard: {
              slug: "abu-dhabi-dune-bashing-safari-with-camel-farm-visit",
              title: "Abu Dhabi Dune Bashing Safari with a Camel Farm Visit",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 84",
              duration: "4 hours",
              image: IMG,
            },
          },
          {
            title: "Who should not do it",
            icon: "shield",
            content: "Dune bashing is deliberately rough. The driver takes the vehicle up dune faces and across them at an angle, and the lateral movement is real rather than theatrical.\n\nIf anyone in your group is pregnant, has back or neck problems, or is prone to motion sickness, tell us when booking. Every operator will run a gentler line on request and nobody is obliged to do the hard version — but it needs saying in advance rather than halfway up a dune.\n\nVery young children are generally better on a morning safari without the dune driving, or not at all.\n\nTwo other practical notes. Between November and February the desert gets genuinely cold after dark and the camps are open-sided; a jacket makes the difference between enjoying the last two hours and enduring them. And alcohol is usually neither included nor available at the camps, which surprises people expecting a bar.",
          },
        ],
      };

    case "abu-dhabi-city-guide":
      return {
        title: "Abu Dhabi City Guide: What the Capital Is Actually For",
        seoTitle: "Abu Dhabi City Guide 2026",
        description: "How the emirate differs from Dubai, what is worth your time across the islands, and how long you really need.",
        heroImage: IMG,
        fastFacts: [
          { icon: "map", label: "Layout", value: "Spread across islands — Yas, Saadiyat, the city, Reem" },
          { icon: "clock", label: "Minimum", value: "Two days to do it properly" },
          { icon: "landmark", label: "Don't miss", value: "Grand Mosque, Qasr Al Watan, Louvre" },
          { icon: "car", label: "Getting about", value: "Taxis are cheap; no metro" },
        ],
        sections: [
          {
            title: "Abu Dhabi City Guide: What the Capital Is Actually For",
            icon: "landmark",
            content: "Abu Dhabi is the capital, holds most of the country's oil, and has spent the last two decades building the cultural infrastructure that Dubai did not — the Louvre, the Guggenheim under construction, teamLab, a national museum. Where Dubai built commerce and spectacle, Abu Dhabi built institutions.\n\nThe practical result is a city that rewards a slower visit. It is quieter, greener and more spread out, and its best things are buildings you walk around rather than experiences you queue for.\n\nIt is also spread across islands, which catches out visitors who assume everything is central. Yas Island holds the theme parks and the circuit. Saadiyat holds the museums and the best beaches. Reem is residential with parkland and kayaking. The city proper holds the Corniche, the Grand Mosque and Qasr Al Watan.\n\nTwo days is the honest minimum. One day, done from Dubai, sees three things well and that is all.",
            tourCard: {
              slug: "abu-dhabi-half-day-city-tour-with-grand-mosque-and-heritage-village",
              title: "Abu Dhabi Half-Day City Tour with the Grand Mosque and Heritage Village",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 62",
              duration: "5 hours",
              image: IMG,
            },
          },
          {
            title: "The Corniche, the Heritage Village and the old city",
            icon: "waves",
            content: "The Corniche runs eight kilometres along the waterfront with a cycle path, public beaches and the skyline behind it. It is where the city actually goes in the evening, and in winter it is genuinely pleasant to walk.\n\nThe Heritage Village on the breakwater is the counterweight to all the glass: a reconstructed oasis settlement with a working souq, metalworkers and potters, and the clearest straight-on view of the Corniche skyline across the water. The dates market nearby is a local stop rather than a staged one, and dates here are taken as seriously as wine is elsewhere.\n\nQasr Al Hosn, the old fort, is the oldest stone building in the city and the point the whole settlement grew from.\n\nNone of these need a tour, but a guided half day strings them together with the mosque and saves the taxi arithmetic.",
          },
          {
            title: "The water, which is underused",
            icon: "ship",
            content: "Abu Dhabi has more accessible water than Dubai and far fewer people using it.\n\nReem Central Park's waterways run through the middle of the city and are almost silent once you are paddling — flat water, stable kayaks, no experience needed, and the towers visible above the planted banks. It is a genuinely good option for anyone who has done the mosque and the malls and wants something that is neither.\n\nThe mangroves are the other one. Abu Dhabi has extensive mangrove forest inside the city limits, which is unusual for a Gulf capital, and kayaking through the channels is quiet in a way nothing else here is.\n\nAnd around Saadiyat, the Louvre's dome from the water is the perspective the building was designed for.\n\nAll of these are best early or late between June and September. There is no shade on open water and an Abu Dhabi midday is not the time to find that out.",
            tourCard: {
              slug: "abu-dhabi-reem-central-park-guided-kayak-tour",
              title: "Abu Dhabi Reem Central Park Guided Kayak Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 55",
              duration: "2 hours",
              image: IMG,
            },
          },
        ],
      };

    case "saadiyat-island-museums-guide":
      return {
        title: "Saadiyat Island Museums: Which Ones, In What Order, and How Long",
        seoTitle: "Saadiyat Island Museums Guide 2026",
        description: "The Louvre, Zayed National Museum, the Natural History Museum and teamLab Phenomena — how they differ, how much time each needs, and why doing all four in a day does not work.",
        heroImage: IMG,
        fastFacts: [
          { icon: "landmark", label: "Louvre Abu Dhabi", value: "2 to 3 hours. The one to do if you do one" },
          { icon: "building", label: "Zayed National Museum", value: "The story of the UAE itself" },
          { icon: "bone", label: "Natural History Museum", value: "Meteorites, fossils, deep time" },
          { icon: "sparkles", label: "teamLab Phenomena", value: "Digital art. Not a museum in the usual sense" },
          { icon: "calendar", label: "Quietest", value: "Weekday mornings. Avoid Friday and Saturday" },
        ],
        sections: [
          {
            title: "They are not variations on the same thing",
            icon: "landmark",
            content: "Saadiyat's cultural district puts four very different institutions within walking distance, and people book them as if they were interchangeable.\n\nThe **Louvre Abu Dhabi** is a chronological world museum: one timeline, objects from every civilisation placed side by side rather than separated by region. Jean Nouvel's perforated dome is half the experience and the reason to be there in daylight. Two to three hours, and the [express guided tour](/uae/abu-dhabi/louvre-abu-dhabi-express-guided-tour) exists because the collection is easy to wander aimlessly.\n\nThe **Zayed National Museum** is about the UAE specifically — the founding, the falconry, the pearl trade, the making of a country from seven emirates. It is the one that explains the place you are standing in, and it is wasted if you rush it after something else.\n\nThe **Natural History Museum** is deep time: meteorites, fossils, the geology of Arabia. It is the one children reliably like.\n\n**teamLab Phenomena** is not a museum. It is a large immersive digital artwork you walk through, and it is either the highlight of the trip or completely not your thing.",
          },
          {
            title: "How many can you actually do in a day",
            icon: "clock",
            content: "Two properly. Three if you are disciplined and start early. Four is a corridor march and you will remember none of them.\n\nA sensible full day is the **Louvre in the morning** when the dome light is at its best and the crowds have not arrived, lunch, then **one other** in the afternoon. Which second one depends on who you are with: Zayed National if you want to understand the country, Natural History if there are children, [teamLab](/uae/abu-dhabi/teamlab-phenomena-abu-dhabi-entry-ticket) if you want something that is not looking at objects in cases.\n\nBudget **30 to 40 minutes between venues** even though they are close, because tickets, bag checks and finding the entrance all take longer than the walk.\n\nIf you are coming from Dubai for the day, one museum is realistic alongside the Grand Mosque, not two. Our [Louvre and Grand Mosque day trip](/uae/dubai/louvre-abu-dhabi-and-grand-mosque-day-trip-from-dubai) is built to that limit deliberately.",
          },
          {
            title: "Tickets, timing and the things worth knowing",
            icon: "ticket",
            content: "Each museum is ticketed separately. There is no single pass covering all of them, so book the ones you actually intend to visit rather than assuming a combined ticket exists.\n\n**Book a time slot** for the Louvre and for teamLab in particular. Walk-up is possible on a quiet weekday and unpleasant on a weekend.\n\n**Weekday mornings are markedly quieter.** Friday and Saturday are the local weekend and the difference is not subtle.\n\nPhotography without flash is fine in most spaces. Large bags go to the cloakroom.\n\nThe Louvre is **cold** inside — genuinely cold, for conservation. Take a layer even in August, when the temptation is to arrive with nothing but a t-shirt.\n\nThe [general admission ticket](/uae/abu-dhabi/louvre-abu-dhabi-general-admission-ticket) covers the permanent collection; temporary exhibitions are sometimes separate, which is worth checking if a specific show is the reason you are going.",
          },
          {
            title: "Getting there, and seeing it from the water",
            icon: "waves",
            content: "Saadiyat is a 20-minute drive from central Abu Dhabi and about 90 minutes from Dubai. There is parking, and taxis are plentiful; public transport is workable but not quick.\n\nThe underrated approach is **from the sea**. The Louvre's dome sits over the water and the architecture reads completely differently from below. A [guided kayak around the Louvre](/uae/abu-dhabi/abu-dhabi-guided-kayak-tour-around-the-louvre) or the quieter [electric catamaran ride](/uae/abu-dhabi/abu-dhabi-electric-catamaran-ride-at-the-louvre) both do this, and both are best in the late afternoon when the heat has dropped and the light is coming in low under the dome.\n\nThat is a genuinely different photograph from the one everybody takes in the courtyard, and it takes an hour.",
          },
        ],
      };

    case "abu-dhabi-with-kids-guide":
      return {
        title: "Abu Dhabi with Kids: The Parks, the Passes and the Heat",
        seoTitle: "Abu Dhabi with Kids 2026",
        description: "Ferrari World, Warner Bros, SeaWorld and Yas Waterworld compared by age, when a multi-park pass saves money, and how to plan around the temperature.",
        heroImage: IMG,
        fastFacts: [
          { icon: "ferris-wheel", label: "Ferrari World", value: "Thrill rides. Best from about age 8" },
          { icon: "wand", label: "Warner Bros World", value: "Fully indoor and air-conditioned" },
          { icon: "fish", label: "SeaWorld", value: "Indoor, and the most educational of the four" },
          { icon: "waves", label: "Yas Waterworld", value: "Outdoor. Summer means shade planning" },
          { icon: "ticket", label: "Multi-park pass", value: "Worth it from two parks, clearly worth it at three" },
        ],
        sections: [
          {
            title: "Four parks, four different ages",
            icon: "ferris-wheel",
            content: "They are all on Yas Island within a few minutes of each other, and they are not aimed at the same child.\n\n**Ferrari World** is built around thrill rides, including the fastest rollercoaster in the world. There is a junior section, but a family with under-eights will spend the day watching rather than riding. From about eight upwards it is the standout. [Entry ticket](/uae/abu-dhabi/ferrari-world-abu-dhabi-entry-ticket).\n\n**Warner Bros World** is the one that works for the widest age range, and it is **entirely indoors**. On a July afternoon that is not a detail, it is the whole argument. Younger children get Looney Tunes and Scooby-Doo; older ones get the DC side. [Entry ticket](/uae/abu-dhabi/warner-bros-world-abu-dhabi-entry-ticket).\n\n**SeaWorld** is indoor, newer, and heavier on aquarium and conservation than on rides. It suits curious children and adults who have had enough of queueing for coasters. [Entry ticket](/uae/abu-dhabi/seaworld-abu-dhabi-general-admission-ticket).\n\n**Yas Waterworld** is outdoor and the most physically tiring. Brilliant in winter, a shade-management exercise in summer. [Entry ticket](/uae/abu-dhabi/yas-waterworld-abu-dhabi-entry-ticket).",
          },
          {
            title: "When the multi-park pass is actually cheaper",
            icon: "ticket",
            content: "Single tickets to these parks are priced closely enough that the arithmetic is simple: a [two, three or four park pass](/uae/abu-dhabi/yas-island-multi-park-pass-abu-dhabi-two-three-or-four-parks) starts saving money at two parks and saves a lot at three.\n\nThe catch is not the price, it is the **stamina**. Two full park days in a row is a great deal on paper and a hard sell to a seven-year-old on the second afternoon. A pass valid across several days is far more usable than one that expects consecutive days, so check the validity window before assuming you will get through it.\n\nA realistic pattern for a family: one park day, one slower day (Corniche, a museum, the pool), one park day. That is what the three-park pass is actually good for.",
          },
          {
            title: "Planning around the heat, honestly",
            icon: "thermometer",
            content: "From **June to September** the outdoor parks are only comfortable early morning and after about 4pm. The middle of the day is 40C plus, and small children stop enjoying themselves well before adults admit it.\n\nThis is why the indoor parks matter so much in summer. Warner Bros World and SeaWorld are fully air-conditioned and can absorb a whole afternoon that would be miserable anywhere else.\n\nIn **winter, November to March**, the calculation reverses: Yas Waterworld and the beaches are lovely, and the indoor parks are the wet-weather option you probably will not need.\n\nWhatever the month, take more water than you think and reapply sunscreen on the water park day. Shaded seating at Yas Waterworld goes early in the morning and is the difference between a good day and a short one.",
          },
          {
            title: "The non-park days worth keeping",
            icon: "compass",
            content: "Two days of theme parks is plenty for most families, and Abu Dhabi has better answers for the rest of the trip than another queue.\n\nThe **[Natural History Museum](/uae/abu-dhabi/natural-history-museum-abu-dhabi-entry-ticket)** is the reliable one — meteorites and fossils work on almost every child, and it is indoors and cool.\n\nA **[morning desert drive with a camel ride and sandboarding](/uae/abu-dhabi/abu-dhabi-morning-desert-drive-with-camel-ride-and-sandboarding)** is a better shape than an evening safari for young children: it is over before the heat, and there is no long dinner to sit through at the end.\n\nA **[kayak in Reem Central Park](/uae/abu-dhabi/abu-dhabi-reem-central-park-guided-kayak-tour)** is calm flat water in the middle of the city and suits families who want to be outdoors without a full excursion.\n\nAnd the **Grand Mosque** is genuinely worth taking children to, as long as you go early and treat it as a short visit rather than a long one. Dress code applies to children too from around puberty; younger ones are relaxed about it.",
          },
        ],
      };

    case "getting-around-abu-dhabi":
      return {
        title: "Getting Around Abu Dhabi: Taxis, the Islands, and the Distances Nobody Mentions",
        seoTitle: "Getting Around Abu Dhabi 2026",
        description: "Why Abu Dhabi is not a walking city, what a taxi actually costs, how the islands are laid out, and when a private driver is the cheaper option.",
        heroImage: IMG,
        fastFacts: [
          { icon: "car", label: "Taxis", value: "Metered, cheap by Gulf standards, everywhere" },
          { icon: "map", label: "Layout", value: "Several islands, not one centre. Distances are real" },
          { icon: "bus", label: "Buses", value: "Cheap and clean, but slow for visitors" },
          { icon: "train", label: "Metro", value: "None. This is not Dubai" },
          { icon: "plane", label: "Airport to centre", value: "About 30 minutes" },
        ],
        sections: [
          {
            title: "The single thing to understand: it is islands",
            icon: "map",
            content: "Abu Dhabi is not a city centre with suburbs. It is a set of islands with the attractions spread across them, and the map flatters the distances badly.\n\n**Abu Dhabi Island** holds the Corniche, the old city and most hotels. **Saadiyat** has the museums. **Yas** has the theme parks and the F1 circuit. The **Grand Mosque** sits on its own near the mainland bridges.\n\nSaadiyat to Yas is 20 minutes by road. Corniche to the Grand Mosque is 20 minutes. Yas to the Grand Mosque is closer to 30. None of these are walkable and none of them are on the way to each other.\n\nPlan a day around **one island plus one stop**, not around a list of sights. That single decision does more for an Abu Dhabi itinerary than any transport choice.",
          },
          {
            title: "Taxis, and why the meter is your friend",
            icon: "car",
            content: "Abu Dhabi taxis are **metered, regulated and genuinely cheap** compared with most of the Gulf. There is a minimum fare, and typical cross-island trips run to a modest amount rather than an alarming one.\n\nThey can be hailed on the street, found at every mall and hotel, or booked through the usual apps. Silver taxis are the standard fleet; there are also women-driver taxis with a pink roof, which women and families can request.\n\nCards are widely accepted but not universally, so keep some cash.\n\nThe practical warning is the **return leg**. Getting a taxi to the Grand Mosque or a museum is easy. Getting one back from a quieter spot at an odd hour is less so, and this is where visitors end up waiting in the heat. Ask your driver to come back, or book the return before you need it.",
          },
          {
            title: "When a driver for the day is cheaper than taxis",
            icon: "wallet",
            content: "For a day with three or more stops across different islands, a **private car with a driver often costs less than the taxis**, and it removes the waiting.\n\nThe maths tips fast: four separate cross-island taxi journeys plus two long waits in 40C is not obviously better than one vehicle that stays with you.\n\nIt is also the answer for the Grand Mosque, where the drop-off and pick-up points are far apart and the walk between them is exposed.\n\nMost of our Abu Dhabi city tours are built this way for exactly this reason — the [Grand Mosque, Qasr Al Watan and Etihad Towers tour](/uae/abu-dhabi/abu-dhabi-grand-mosque-qasr-al-watan-and-etihad-towers-tour) and the [private transfer tour](/uae/abu-dhabi/abu-dhabi-grand-mosque-and-qasr-al-watan-private-transfer-tour) are as much about the car as the commentary.\n\nIf you are arriving by air or cruise, a [half-day tour with airport or cruise port pickup](/uae/abu-dhabi/abu-dhabi-half-day-tour-with-airport-or-cruise-port-pickup) removes the worst transfer of the trip.",
          },
          {
            title: "Buses, walking and the heat",
            icon: "thermometer",
            content: "There is **no metro**. Visitors who know Dubai arrive expecting one and plan accordingly, which does not work.\n\nCity buses are cheap, air-conditioned and clean, and they require a Hafilat card rather than cash. They are perfectly usable if you have time and are staying a while. For a two or three day visit they will cost you more in waiting than they save.\n\nWalking is pleasant in exactly two places and two seasons: the **Corniche** and the **Saadiyat cultural district**, between **November and March**. The Corniche has a proper promenade, shade and beaches along it, and an evening walk there is one of the nicer free things to do in the emirate.\n\nFrom June to September, plan on being in a vehicle or indoors between about 11am and 4pm. That is not caution, it is just what 45C does to a day.",
          },
        ],
      };

    case "abu-dhabi-2-day-itinerary":
      return {
        title: "Two Days in Abu Dhabi: A Plan That Accounts for the Driving",
        seoTitle: "Abu Dhabi 2-Day Itinerary 2026",
        description: "A realistic two-day plan built around the island distances, with the Grand Mosque timed properly and one park day that does not eat the whole trip.",
        heroImage: IMG,
        fastFacts: [
          { icon: "calendar", label: "Day 1", value: "Grand Mosque, Qasr Al Watan, Corniche" },
          { icon: "landmark", label: "Day 2", value: "Saadiyat museums or Yas parks — not both" },
          { icon: "clock", label: "Grand Mosque", value: "Go early. It is busiest late afternoon" },
          { icon: "shirt", label: "Dress code", value: "Ankles and shoulders covered, hair covered for women" },
          { icon: "car", label: "Assume", value: "20-30 minutes between anything and anything else" },
        ],
        sections: [
          {
            title: "Day one: the mosque, the palace and the water",
            icon: "landmark",
            content: "Start at the **Sheikh Zayed Grand Mosque** and start early. It opens in the morning, entry is free, and the difference between 9am and 4pm is the difference between space and crowds. Allow 90 minutes including the security and dress-code queue.\n\nDress code is enforced at the door for everyone: **ankles and shoulders covered**, and hair covered for women. Abayas are lent free at the entrance but that queue is its own delay in high season.\n\nFrom there, **Qasr Al Watan** — the presidential palace, open to visitors, and more interesting than \"palace tour\" suggests: the library and the great hall are the parts people remember. Two hours.\n\nEnd on the **Corniche** in the late afternoon when it cools. Walk a stretch of the promenade, eat somewhere along it, and let the day finish slowly.\n\nOur [Grand Mosque, Qasr Al Watan and Etihad Towers tour](/uae/abu-dhabi/abu-dhabi-grand-mosque-qasr-al-watan-and-etihad-towers-tour) is this day with the driving handled. The cheaper [half-day city tour with the Heritage Village](/uae/abu-dhabi/abu-dhabi-half-day-city-tour-with-grand-mosque-and-heritage-village) covers the mosque and the old city instead.",
          },
          {
            title: "Day two, version one: Saadiyat",
            icon: "building",
            content: "If you would rather look at things than queue for rides, give day two to **Saadiyat**.\n\nThe [Louvre Abu Dhabi](/uae/abu-dhabi/louvre-abu-dhabi-general-admission-ticket) in the morning, when the light through the dome is at its best. Two to three hours, and the [express guided tour](/uae/abu-dhabi/louvre-abu-dhabi-express-guided-tour) is worth it if you would otherwise drift.\n\nLunch on the island, then **one** other museum — the Zayed National Museum if you want the story of the country, [teamLab Phenomena](/uae/abu-dhabi/teamlab-phenomena-abu-dhabi-entry-ticket) if you want something completely different, the [Natural History Museum](/uae/abu-dhabi/natural-history-museum-abu-dhabi-entry-ticket) if there are children.\n\nIf there is time and energy left, a [kayak around the Louvre](/uae/abu-dhabi/abu-dhabi-guided-kayak-tour-around-the-louvre) in the late afternoon shows you the building from the water, which is the version most visitors never see. More on all of this in our [Saadiyat museums guide](/uae/abu-dhabi/saadiyat-island-museums-guide).",
          },
          {
            title: "Day two, version two: Yas Island",
            icon: "ferris-wheel",
            content: "If you are travelling with children, day two is **Yas**, and it is one park, not two.\n\n[Ferrari World](/uae/abu-dhabi/ferrari-world-abu-dhabi-entry-ticket) for thrill-ride ages, [Warner Bros World](/uae/abu-dhabi/warner-bros-world-abu-dhabi-entry-ticket) for a wider age range and full air conditioning, [SeaWorld](/uae/abu-dhabi/seaworld-abu-dhabi-general-admission-ticket) for a calmer day, [Yas Waterworld](/uae/abu-dhabi/yas-waterworld-abu-dhabi-entry-ticket) in winter.\n\nA [multi-park pass](/uae/abu-dhabi/yas-island-multi-park-pass-abu-dhabi-two-three-or-four-parks) only makes sense if you are staying longer than two days — see our [Abu Dhabi with kids guide](/uae/abu-dhabi/abu-dhabi-with-kids-guide) for when the arithmetic works.\n\nPark days are long. Do not put an evening desert safari on the end of one.",
          },
          {
            title: "If you have an evening spare",
            icon: "moon",
            content: "The two things worth adding to a two-day trip, in order.\n\nA **desert evening**. Abu Dhabi's dunes are bigger and emptier than Dubai's and the drive out is shorter than people expect. The [safari with a camel farm and Bedouin camp dinner](/uae/abu-dhabi/abu-dhabi-desert-safari-with-camel-farm-and-bedouin-camp-dinner) is the full version; the [BBQ and Tanoura show safari](/uae/abu-dhabi/abu-dhabi-desert-safari-with-bbq-and-tanoura-shows) is the livelier one. Both finish late, so put them on the night before a slow morning.\n\nAn **Emirati meal**. Genuinely local food is harder to find here than it should be, and a [dining experience](/uae/abu-dhabi/abu-dhabi-emirati-dining-experience) is the straightforward way to eat something other than international hotel food.\n\nWhat not to add: a Dubai day trip. It is 90 minutes each way and it turns a two-day Abu Dhabi trip into a day and a half. If Dubai matters, give it its own nights.",
          },
        ],
      };

    default:
      return null;
  }
}
