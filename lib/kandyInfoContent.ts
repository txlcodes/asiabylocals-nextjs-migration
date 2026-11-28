// Kandy authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getKandyInfoContent() -> getCityInfoContent().
//
// Every tourCard slug is taken from the live tour list for this city.
import type { CityInfoData } from './cityInfoContent';

export function getKandyInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    case "temple-of-the-tooth-guide":
      return {
        title: "Temple of the Tooth, Kandy: What to See, When to Go and How the Puja Works",
        seoTitle: "Temple of the Tooth Kandy Guide",
        description: "A practical guide to the Sri Dalada Maligawa: the three daily pujas, what you can and cannot see, dress rules, ticket prices and the best time to arrive.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375809/asiabylocals/tours/from-kandy-all-inclusive-full-day-tour-in-kandy-private/img0.jpg",
        fastFacts: [
          { icon: "clock", label: "Puja times", value: "5.30am, 9.30am and 6.30pm daily" },
          { icon: "clock", label: "Opening hours", value: "Roughly 5.30am to 8pm" },
          { icon: "ticket", label: "Entry for foreign visitors", value: "Around LKR 2,000-2,500 (about USD 7-9), cash" },
          { icon: "shirt", label: "Dress code", value: "Shoulders and knees covered; shoes and hats off at the gate" },
          { icon: "clock", label: "How long to allow", value: "60-90 minutes, more during a puja" },
          { icon: "calendar-days", label: "Busiest", value: "Poya (full moon) days and the evening puja" },
        ],
        sections: [
          {
            title: "Temple of the Tooth, Kandy: What to See, When to Go and How the Puja Works",
            icon: "landmark",
            content: "The Sri Dalada Maligawa holds what Sri Lankan Buddhists believe is a tooth of the Buddha, and that single object explains most of Kandy's history. Possession of the relic was tied to the right to rule the island, which is why it moved with the court from Anuradhapura to Polonnaruwa and eventually here in the sixteenth century, and why the Portuguese claimed to have destroyed it and Sri Lankans maintain they did not. When the British took Kandy in 1815 they had to sign a convention guaranteeing the protection of Buddhism, largely because the relic was in the building.\n\nWhat this means for a visitor is that the temple is not a monument. It is a working religious site with a daily schedule, and the difference between seeing it and experiencing it comes down entirely to timing. Turn up at two in the afternoon and you will walk through a beautiful, quiet complex of painted ceilings and carved wood. Turn up at 6.30pm and you will be in a crowd of several hundred people, with drummers and horn players in the corridor and a moving queue past an open chamber.\n\nThe relic itself is never displayed. It sits inside a gold casket, which sits inside six more caskets, and what you see during a puja is the outermost one, from a distance of several metres, for a few seconds as the queue moves. Visitors who arrive expecting to see a tooth leave disappointed; visitors who come for the ritual around it usually rate it the best hour they spend in Sri Lanka.",
            tourCard: {
              slug: "kandy-full-day-private-tour-temple-of-the-tooth-peradeniya",
              title: "Kandy Full-Day Private Tour: Temple of the Tooth, Peradeniya and a Cultural Show",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 123.5",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375809/asiabylocals/tours/from-kandy-all-inclusive-full-day-tour-in-kandy-private/img0.jpg",
            },
          },
          {
            title: "The three daily pujas, and which one to pick",
            icon: "clock",
            content: "The relic chamber on the upper floor opens three times a day, and it is closed the rest of the time. The pujas run at 5.30am, 9.30am and 6.30pm, each lasting roughly an hour, and each accompanied by hevisi drumming in the corridor outside.\n\nThe evening puja at 6.30pm is the one most visitors choose and the one with the strongest atmosphere: the building is lit, the courtyard is full, the drumming carries through the complex, and the queue past the chamber is long. It is also the most crowded, and on a poya day it can take 45 minutes to move through.\n\nThe 5.30am puja is the opposite and is worth the alarm if you are willing. There are far fewer visitors, the people around you are almost entirely there to worship, and the light through the eastern windows at that hour is remarkable. The 9.30am puja sits between the two and is the practical compromise if you are fitting the temple into a day tour.\n\nOutside these windows the upper chamber is shut and you are visiting the building rather than the ritual, which is still worthwhile but a different experience. Arrive 20 to 30 minutes before a puja starts to get through security and find a position.",
            table: {
              headers: ["Puja", "Time", "What it is like"],
              rows: [["Morning", "5.30am", "Quietest; almost entirely worshippers"], ["Mid-morning", "9.30am", "The practical compromise on a day tour"], ["Evening", "6.30pm", "Busiest and best — lit, drummed, crowded"]],
            },
            tourCard: {
              slug: "kandy-city-highlights-private-day-tour-temple-viewpoints-and-gardens",
              title: "Kandy City Highlights Private Day Tour: Temple, Viewpoints and Gardens",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 26",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375536/asiabylocals/tours/kandy-city-tour-cover-13-places-within-a-single-day-free/img0.jpg",
            },
          },
          {
            title: "What you actually see inside",
            icon: "eye",
            content: "The complex is larger than the famous facade suggests. The octagonal Pattirippuwa, the tower you see in every photograph, was built in 1802 and originally used by the king to address crowds; it now holds a library of palm-leaf manuscripts. Beyond it are the main shrine, the drummers' courtyard, and an upper floor where the relic chamber sits behind a carved doorway.\n\nThe Alut Maligawa, a newer hall in the same compound, contains rows of donated Buddha statues from Buddhist countries around the world and a museum covering the relic's history. It also holds a permanent exhibit on the 1998 bombing of the temple by the LTTE, which killed sixteen people and damaged the facade; the restoration work is visible if you know where to look.\n\nThe Raja Tusker Museum in the same grounds is a small and genuinely odd thing: the preserved body of Raja, the tusker who carried the relic casket in the Perahera procession for around fifty years and was declared a national treasure. Sri Lankans visit it with real feeling.\n\nThe ceilings and the woodwork are the part people underrate. Kandyan craftsmanship is at its best here — painted panels, ivory inlay, and lacquered columns — and a guide is worth having simply to be told what the recurring motifs mean.",
            tourCard: {
              slug: "kandy-unesco-heritage-day-by-local-bus-with-a-kandyan-guide",
              title: "Kandy UNESCO Heritage Day by Local Bus with a Kandyan Guide",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 32.5",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375986/asiabylocals/tours/kandy-unesco-heritage-city-tour-experience-by-local-bus/img0.jpg",
            },
          },
          {
            title: "Dress code, security and practical rules",
            icon: "shirt",
            content: "Shoulders and knees must be covered, for men as well as women. Sarongs are rented at stalls outside the entrance for a small fee if you arrive unprepared, which many people do. Shoes come off before you enter the temple grounds proper and are left at a shoe deposit for a token charge; hats come off too.\n\nBring socks. The courtyard and interior floors are stone, and by mid-afternoon they are hot enough to be genuinely painful barefoot. This is the single piece of advice most guides omit and every visitor wishes they had heard.\n\nSecurity is real rather than performative: bags are searched, and there is a checkpoint on the approach. Large bags are best left at your hotel. Photography is allowed in most of the complex but not of the relic chamber during the puja, and posing with your back to a Buddha image for a photograph is a serious offence in Sri Lanka, not a quirk — tourists have been deported for it.\n\nEntry for foreign visitors is around LKR 2,000-2,500 and is paid in cash at the ticket office. Sri Lankan nationals enter free, which is why the queue you join may not be the one you first see.",
            tourCard: {
              slug: "kandy-city-highlights-private-day-tour-temple-viewpoints-and-gardens",
              title: "Kandy City Highlights Private Day Tour: Temple, Viewpoints and Gardens",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 26",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375536/asiabylocals/tours/kandy-city-tour-cover-13-places-within-a-single-day-free/img0.jpg",
            },
          },
          {
            title: "Poya days and the Esala Perahera",
            icon: "calendar-days",
            content: "Every full moon, or poya, is a public holiday in Sri Lanka and a major day at the temple. The complex fills with white-clad worshippers carrying lotus flowers, the atmosphere is at its best, and the queues are at their worst. If you want to see the temple at its most alive, aim for a poya. If you want to see it comfortably, avoid one.\n\nThe [Esala Perahera](/sri-lanka/kandy/kandy-esala-perahera-guide) in July or August is the temple's own festival and one of the great processions in Asia — ten nights of drummers, dancers, fire-twirlers and caparisoned elephants carrying a replica of the relic casket through the city. The dates move every year because they are set by the lunar calendar, so a guide that tells you it happens in a fixed week is guessing. Check the current year's dates before planning around it.\n\nDuring the Perahera, Kandy is full in a way it is not at any other time. Hotel rates multiply, rooms on the procession route are booked a year ahead, and the roads close in the evenings. It is worth attending and it is not worth arriving unprepared for.",
            tourCard: {
              slug: "kandy-full-day-private-tour-temple-of-the-tooth-peradeniya",
              title: "Kandy Full-Day Private Tour: Temple of the Tooth, Peradeniya and a Cultural Show",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 123.5",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375809/asiabylocals/tours/from-kandy-all-inclusive-full-day-tour-in-kandy-private/img0.jpg",
            },
          },
          {
            title: "Fitting the temple into a day in Kandy",
            icon: "map",
            content: "The temple sits at the northern end of Kandy lake, in the centre of town, and almost everything else worth seeing is within a few minutes of it. A sensible day puts the Bahirawakanda Buddha on the hill in the morning for the view, the Peradeniya botanic gardens in the middle of the day when the heat is worst and the shade is best, and the temple in the evening for the 6.30pm puja.\n\nIf you are day-tripping from Colombo, be realistic: it is three to four hours each way, and most day trips reach the temple in the early afternoon, between pujas. If the ritual is the reason you are coming, stay a night in Kandy instead. It costs one hotel night and changes the whole visit.\n\nA guided city day is worth it here more than in most Sri Lankan towns, because the individual sites are short and the connections between them are the interesting part. The Kandyan kingdom held out against three European powers for three centuries, and the layout of the town — the lake, the temple, the hills closing it in — is the reason why.",
            tourCard: {
              slug: "kandy-full-day-private-tour-temple-of-the-tooth-peradeniya",
              title: "Kandy Full-Day Private Tour: Temple of the Tooth, Peradeniya and a Cultural Show",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 123.5",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375809/asiabylocals/tours/from-kandy-all-inclusive-full-day-tour-in-kandy-private/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "Can you actually see the Buddha's tooth?", a: "No. The relic sits inside a series of seven nested caskets and is never displayed. During a puja the outermost gold casket is visible from a few metres away as the queue moves past. The relic itself has not been publicly shown in decades." },
          { q: "What time are the pujas at the Temple of the Tooth?", a: "5.30am, 9.30am and 6.30pm every day, each lasting about an hour. The upper relic chamber is only open during these three windows; at any other time you are visiting the building rather than the ceremony." },
          { q: "How much does it cost to enter?", a: "Around LKR 2,000-2,500 for foreign visitors, roughly USD 7-9, paid in cash at the ticket office. Sri Lankan nationals enter free. There is a small extra charge for the shoe deposit." },
          { q: "What should I wear to the Temple of the Tooth?", a: "Shoulders and knees covered, for men and women. Shoes and hats come off at the entrance. Take socks — the stone floors get painfully hot in the afternoon. Sarongs can be rented outside if you arrive underdressed." },
          { q: "How long do you need at the temple?", a: "Sixty to ninety minutes for the complex including the Alut Maligawa and the museum. Add another 30-45 minutes if you are attending a puja, and arrive well before it starts." },
          { q: "Is the Temple of the Tooth worth visiting for non-Buddhists?", a: "Yes, provided you come for a puja. Outside those windows it is a beautiful but quiet building. During one it is a working ceremony with drummers, hundreds of worshippers and a genuine sense of what the relic means to the country." },
          { q: "When is the Kandy Esala Perahera?", a: "July or August, but the exact dates move each year because they follow the lunar calendar. It runs for ten nights and ends on the Nikini poya. Check the current year's dates rather than assuming a fixed week, and book accommodation far ahead." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Can you actually see the Buddha's tooth?", acceptedAnswer: { "@type": "Answer", text: "No. The relic sits inside a series of seven nested caskets and is never displayed. During a puja the outermost gold casket is visible from a few metres away as the queue moves past. The relic itself has not been publicly shown in decades." } },
            { "@type": "Question", name: "What time are the pujas at the Temple of the Tooth?", acceptedAnswer: { "@type": "Answer", text: "5.30am, 9.30am and 6.30pm every day, each lasting about an hour. The upper relic chamber is only open during these three windows; at any other time you are visiting the building rather than the ceremony." } },
            { "@type": "Question", name: "How much does it cost to enter?", acceptedAnswer: { "@type": "Answer", text: "Around LKR 2,000-2,500 for foreign visitors, roughly USD 7-9, paid in cash at the ticket office. Sri Lankan nationals enter free. There is a small extra charge for the shoe deposit." } },
            { "@type": "Question", name: "What should I wear to the Temple of the Tooth?", acceptedAnswer: { "@type": "Answer", text: "Shoulders and knees covered, for men and women. Shoes and hats come off at the entrance. Take socks — the stone floors get painfully hot in the afternoon. Sarongs can be rented outside if you arrive underdressed." } },
            { "@type": "Question", name: "How long do you need at the temple?", acceptedAnswer: { "@type": "Answer", text: "Sixty to ninety minutes for the complex including the Alut Maligawa and the museum. Add another 30-45 minutes if you are attending a puja, and arrive well before it starts." } },
            { "@type": "Question", name: "Is the Temple of the Tooth worth visiting for non-Buddhists?", acceptedAnswer: { "@type": "Answer", text: "Yes, provided you come for a puja. Outside those windows it is a beautiful but quiet building. During one it is a working ceremony with drummers, hundreds of worshippers and a genuine sense of what the relic means to the country." } },
            { "@type": "Question", name: "When is the Kandy Esala Perahera?", acceptedAnswer: { "@type": "Answer", text: "July or August, but the exact dates move each year because they follow the lunar calendar. It runs for ten nights and ends on the Nikini poya. Check the current year's dates rather than assuming a fixed week, and book accommodation far ahead." } },
          ],
        },
      };

    case "kandy-to-ella-train-guide":
      return {
        title: "The Kandy to Ella Train: Tickets, Seats and What the Ride Is Actually Like",
        seoTitle: "Kandy to Ella Train Guide",
        description: "How to book the Kandy to Ella train, which class is worth it, which side to sit on, and the part most guides get wrong about reaching Nuwara Eliya.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375828/asiabylocals/tours/kandy-to-nanu-oya-drop-tea-tour-with-ella-train-tickets/img0.jpg",
        fastFacts: [
          { icon: "clock", label: "Journey time", value: "6-7 hours Kandy to Ella; the scenic half is Nanu Oya to Ella, about 4 hours" },
          { icon: "ticket", label: "Reserved seats", value: "Open 30 days ahead and sell out within hours in season" },
          { icon: "ticket", label: "Unreserved 2nd/3rd class", value: "Bought on the day, always available, standing room" },
          { icon: "map", label: "Which side", value: "Right-hand side travelling south from Kandy" },
          { icon: "calendar-days", label: "Busiest", value: "December to March, and around poya holidays" },
          { icon: "info", label: "Nuwara Eliya station", value: "There isn't one — the stop is Nanu Oya, about 10 km away" },
        ],
        sections: [
          {
            title: "The Kandy to Ella Train: Tickets, Seats and What the Ride Is Actually Like",
            icon: "train",
            content: "The line from Kandy up into the hill country and down to Ella is the reason a lot of people put Sri Lanka on a list in the first place, and almost all of the famous photographs — the blue carriages, the open doorways, the tea slopes falling away below — come from the last four hours of it.\n\nThe full run takes six to seven hours. The first two, out of Kandy through Peradeniya and Gampola, are pleasant but ordinary. The line only becomes remarkable once it climbs past Hatton and into the high estates, and the genuinely spectacular section is from Nanu Oya to Ella: tea on every slope, the track curving along the contours, and the Nine Arch bridge on the approach to Ella itself.\n\nThat is the practical fact that shapes every decision about this journey. If your day is tight, or if you want to stop in the tea country anyway, riding only the Nanu Oya to Ella section costs you nothing in scenery and saves you two to three hours. Plenty of travellers drive to Nanu Oya with stops at waterfalls and a tea factory, and pick up the train there.",
            tourCard: {
              slug: "kandy-to-nanu-oya-tea-country-transfer-with-ella-train-tickets-arranged",
              title: "Kandy to Nanu Oya Tea Country Transfer with Ella Train Tickets Arranged",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 39.04",
              duration: "6 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375828/asiabylocals/tours/kandy-to-nanu-oya-drop-tea-tour-with-ella-train-tickets/img0.jpg",
            },
          },
          {
            title: "Booking: reserved, unreserved, and what actually happens",
            icon: "ticket",
            content: "Reserved seats in first, second and third class open exactly 30 days before departure and, between December and March, sell out within hours of opening. If you want a guaranteed seat you need to be organised a month out, or go through an agent who books on your behalf. Booking three days ahead and finding nothing is the normal experience, not bad luck.\n\nUnreserved second and third class carriages are sold on the day at the station and are never sold out, because there is no seat limit — people simply stand. This sounds worse than it is. The unreserved carriages are where the open doorways are, where you can sit on the steps with your legs out, and where most of the photographs people come for are actually taken. A reserved seat by a sealed window in the observation car is more comfortable and, for the view, arguably worse.\n\nFirst class observation carriages have air conditioning and rear-facing windows and are the wrong choice for most people: sealed glass, no door access, and a view of where you have been. Second class reserved is the sweet spot if you can get it.\n\nBuy unreserved tickets shortly before departure at the station counter, and be on the platform early — 30 to 45 minutes ahead is not excessive if you want any chance of a seat.",
            tourCard: {
              slug: "kandy-to-nanu-oya-tea-country-transfer-with-ella-train-tickets-arranged",
              title: "Kandy to Nanu Oya Tea Country Transfer with Ella Train Tickets Arranged",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 39.04",
              duration: "6 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375828/asiabylocals/tours/kandy-to-nanu-oya-drop-tea-tour-with-ella-train-tickets/img0.jpg",
            },
          },
          {
            title: "Which side to sit on, and where the good bits are",
            icon: "map",
            content: "Travelling south from Kandy towards Ella, the right-hand side has the valley views for most of the route. Coming north from Ella to Kandy, sit on the left. This is worth getting right — the other side spends much of the journey looking at a cutting.\n\nThe stretch from Hatton to Nanu Oya climbs through the highest tea country on the island and is where the landscape first becomes properly dramatic. Between Nanu Oya and Haputale the line runs along open hillsides with long views south. The final approach to Ella crosses the Nine Arch bridge, a 30-metre stone viaduct built during the First World War, and the train usually slows across it.\n\nDoors on unreserved carriages stay open throughout, which is how the famous photographs happen and also how people get hurt. Hold on properly, keep your body inside on curves and in tunnels, and be aware that the track passes close to rock faces in several places. Every year somebody leaning out is injured on this line.",
            tourCard: {
              slug: "kandy-to-nuwara-eliya-or-ambewela-station-transfer-with-craft-workshop",
              title: "Kandy to Nuwara Eliya or Ambewela Station Transfer with Craft Workshop Stops",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 117",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375687/asiabylocals/tours/kandy-nuwara-eliya-or-ambewala-raiway-station-drop-tour/img0.jpg",
            },
          },
          {
            title: "The Nuwara Eliya problem",
            icon: "info",
            content: "Nuwara Eliya does not have a railway station, and this catches out more travellers than any other detail on this route. The stop for Nuwara Eliya is Nanu Oya, about 10 kilometres and a 20 to 30 minute drive from the town centre. Tuk-tuks and taxis wait at the station, and rates go up sharply when a train arrives.\n\nThis matters if you are planning to break the journey. A common and sensible pattern is to travel Kandy to Nanu Oya by road with stops — Ramboda Falls, a working tea factory, the estates — then stay in Nuwara Eliya, and pick up the train at Nanu Oya the next day for the best section down to Ella.\n\nThe other practical point is luggage. Unreserved carriages are crowded and there is nowhere sensible to put a large suitcase. If you are travelling with a driver, the standard arrangement is that the car takes your bags on to Ella by road while you ride the train with a day bag. That single change turns the journey from a logistics problem into the thing everybody photographs.",
            tourCard: {
              slug: "kandy-to-nanu-oya-tea-country-transfer-with-ella-train-tickets-arranged",
              title: "Kandy to Nanu Oya Tea Country Transfer with Ella Train Tickets Arranged",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 39.04",
              duration: "6 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375828/asiabylocals/tours/kandy-to-nanu-oya-drop-tea-tour-with-ella-train-tickets/img0.jpg",
            },
          },
          {
            title: "Timings, delays and what to bring",
            icon: "clock",
            content: "Several trains run daily in each direction, with the morning departures from Kandy being the popular ones. Sri Lanka Railways runs to a published timetable and frequently does not keep to it; delays of 30 to 90 minutes are routine and are not a sign anything has gone wrong. Do not plan a same-day flight connection around this train.\n\nThe hill country is cold, which surprises people who boarded in tropical Kandy. Nuwara Eliya sits at 1,900 metres and the carriages are open; a fleece or jacket is genuinely needed for the middle section, especially early in the morning or after rain.\n\nThere is no reliable food service. Vendors board at stations selling vadai, roti and tea, which is part of the fun, but bring water and something to eat rather than depending on it. Toilets exist and are basic.\n\nFinally, take the ride for what it is. It is slow, crowded, frequently late, and it is still one of the best train journeys anywhere. Travellers who treat it as transport are usually frustrated; travellers who treat it as the day's activity are almost never disappointed.\n\nIf you would rather have the train arranged around a drive that stops at things: [the Nanu Oya transfer with Ella train tickets](/sri-lanka/kandy/kandy-to-nuwara-eliya-or-nanu-oya-transfer-with-the-ella-train), [tea country to Nanu Oya with tickets arranged](/sri-lanka/kandy/kandy-to-nanu-oya-tea-country-transfer-with-ella-train-tickets-arranged), [Nuwara Eliya with a tea factory and Ramboda Falls](/sri-lanka/kandy/kandy-to-nuwara-eliya-guided-transfer-with-tea-factory-and-ramboda-falls), [the scenic transfer with an optional train leg](/sri-lanka/kandy/kandy-to-nuwara-eliya-scenic-transfer-with-an-optional-nanu-oya-train), [the private transfer with waterfall stops](/sri-lanka/kandy/private-kandy-nuwara-eliya-transfer-waterfall-tea-estate-stops), [Ambewela with a craft workshop](/sri-lanka/kandy/kandy-to-nuwara-eliya-or-ambewela-station-transfer-with-craft-workshop), [Ella via Peradeniya Gardens](/sri-lanka/kandy/kandy-to-ella-guided-transfer-with-peradeniya-gardens-and-ramboda-falls), [Ella with hill country stops](/sri-lanka/kandy/kandy-ella-transfer-hill-country-stops-nanu-oya-train), [the private tea country transfer](/sri-lanka/kandy/kandy-or-nuwara-eliya-to-ella-private-tea-country-transfer), [Trincomalee via Sigiriya](/sri-lanka/kandy/kandy-to-trincomalee-transfer-via-sigiriya-rock-and-the-dambulla-caves) and [a private car onward to Ella, Mirissa or Colombo](/sri-lanka/kandy/private-car-transfer-kandy-ella-mirissa-colombo-beyond).",
            tourCard: {
              slug: "kandy-to-nuwara-eliya-or-ambewela-station-transfer-with-craft-workshop",
              title: "Kandy to Nuwara Eliya or Ambewela Station Transfer with Craft Workshop Stops",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 117",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375687/asiabylocals/tours/kandy-nuwara-eliya-or-ambewala-raiway-station-drop-tour/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "How far in advance should I book the Kandy to Ella train?", a: "Reserved seats open 30 days before departure and sell out within hours between December and March. Book on the day they open, or go through an agent. Unreserved second and third class can always be bought on the day, but you will probably stand." },
          { q: "Which side of the train should I sit on?", a: "The right-hand side travelling south from Kandy to Ella, and the left-hand side coming back north. The valley views are on that side for most of the route." },
          { q: "Is first class worth it on this route?", a: "Usually not. The first class observation carriage has sealed windows, air conditioning and a rear-facing view, and you cannot access the open doorways. Second class reserved is the better booking, and unreserved second class is where the photographs actually get taken." },
          { q: "Which station serves Nuwara Eliya?", a: "Nanu Oya, about 10 km from the town and a 20-30 minute drive. Nuwara Eliya itself has no station. Tuk-tuks and taxis meet the trains, and fares rise when one arrives." },
          { q: "How long does the Kandy to Ella train take?", a: "Six to seven hours scheduled, and often longer. The genuinely scenic section is Nanu Oya to Ella, about four hours, which is why many travellers drive the first half with sightseeing stops and take the train only from Nanu Oya." },
          { q: "Is the train safe with the doors open?", a: "The doors on unreserved carriages stay open and people sit in them, which is normal here. Hold on properly, stay inside on curves and through tunnels, and be aware the track runs close to rock faces in places. Injuries on this line happen every year, almost always to someone leaning out." },
          { q: "What should I bring on the train?", a: "A warm layer for the hill country, water and food, and a day bag rather than a suitcase. If you have a driver, send your luggage ahead by road — there is nowhere to store a large bag in an unreserved carriage." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How far in advance should I book the Kandy to Ella train?", acceptedAnswer: { "@type": "Answer", text: "Reserved seats open 30 days before departure and sell out within hours between December and March. Book on the day they open, or go through an agent. Unreserved second and third class can always be bought on the day, but you will probably stand." } },
            { "@type": "Question", name: "Which side of the train should I sit on?", acceptedAnswer: { "@type": "Answer", text: "The right-hand side travelling south from Kandy to Ella, and the left-hand side coming back north. The valley views are on that side for most of the route." } },
            { "@type": "Question", name: "Is first class worth it on this route?", acceptedAnswer: { "@type": "Answer", text: "Usually not. The first class observation carriage has sealed windows, air conditioning and a rear-facing view, and you cannot access the open doorways. Second class reserved is the better booking, and unreserved second class is where the photographs actually get taken." } },
            { "@type": "Question", name: "Which station serves Nuwara Eliya?", acceptedAnswer: { "@type": "Answer", text: "Nanu Oya, about 10 km from the town and a 20-30 minute drive. Nuwara Eliya itself has no station. Tuk-tuks and taxis meet the trains, and fares rise when one arrives." } },
            { "@type": "Question", name: "How long does the Kandy to Ella train take?", acceptedAnswer: { "@type": "Answer", text: "Six to seven hours scheduled, and often longer. The genuinely scenic section is Nanu Oya to Ella, about four hours, which is why many travellers drive the first half with sightseeing stops and take the train only from Nanu Oya." } },
            { "@type": "Question", name: "Is the train safe with the doors open?", acceptedAnswer: { "@type": "Answer", text: "The doors on unreserved carriages stay open and people sit in them, which is normal here. Hold on properly, stay inside on curves and through tunnels, and be aware the track runs close to rock faces in places. Injuries on this line happen every year, almost always to someone leaning out." } },
            { "@type": "Question", name: "What should I bring on the train?", acceptedAnswer: { "@type": "Answer", text: "A warm layer for the hill country, water and food, and a day bag rather than a suitcase. If you have a driver, send your luggage ahead by road — there is nowhere to store a large bag in an unreserved carriage." } },
          ],
        },
      };

    case "kandy-esala-perahera-guide":
      return {
        title: "Kandy Esala Perahera: Dates, Where to Watch and What Actually Happens",
        seoTitle: "Kandy Esala Perahera Guide",
        description: "The Esala Perahera runs ten nights in July or August, on dates that move each year. How the procession works, where to watch it, and what a seat costs.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375809/asiabylocals/tours/from-kandy-all-inclusive-full-day-tour-in-kandy-private/img0.jpg",
        fastFacts: [
          { icon: "calendar-days", label: "When", value: "July or August — dates move yearly with the lunar calendar" },
          { icon: "calendar-days", label: "Length", value: "Ten nights, building each night to the final Randoli Perahera" },
          { icon: "clock", label: "Start time", value: "Usually around 8pm; arrive by 5-6pm for a good position" },
          { icon: "ticket", label: "Seating", value: "Roadside free; balcony and grandstand seats sold, often USD 20-60" },
          { icon: "info", label: "Book accommodation", value: "Six to twelve months ahead on the route" },
          { icon: "info", label: "Ends on", value: "The Nikini poya, with a daytime water-cutting ceremony after" },
        ],
        sections: [
          {
            title: "Kandy Esala Perahera: Dates, Where to Watch and What Actually Happens",
            icon: "sparkles",
            content: "The Esala Perahera is the procession that carries a replica of the Buddha's tooth relic casket through Kandy, and it is the largest Buddhist festival in Sri Lanka. It runs for ten consecutive nights, growing in scale each night, and ends on the Nikini full moon.\n\nThe first detail worth getting right is the date, because almost every generic article gets it wrong. The Perahera does not happen in a fixed week. Its dates are set by the lunar calendar and shift by up to a month between years — some years it falls entirely in July, some years entirely in August, some years across both. Anyone who tells you it is always the first week of August is repeating a guess. Check the current year's schedule before you build a trip around it.\n\nWhat happens is not a parade in the Western sense. It is a religious procession with a fixed order: whip-crackers clearing the route, flag bearers, drummers and horn players, dancers in Kandyan costume, fire-twirlers, and then the elephants — dozens of them, caparisoned in embroidered cloth and lit with strings of bulbs, with the Maligawa tusker carrying the relic casket at the centre. Four devale processions from the city's Hindu shrines join behind it.\n\nIt takes two to three hours to pass a given point on the later nights.",
            tourCard: {
              slug: "kandy-full-day-private-tour-temple-of-the-tooth-peradeniya",
              title: "Kandy Full-Day Private Tour: Temple of the Tooth, Peradeniya and a Cultural Show",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 123.5",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375809/asiabylocals/tours/from-kandy-all-inclusive-full-day-tour-in-kandy-private/img0.jpg",
            },
          },
          {
            title: "How the ten nights build",
            icon: "calendar-days",
            content: "The festival opens with the Kap Situveema, a private ceremony planting a sanctified young jackfruit tree, which the public does not attend. The first five nights are the Kumbal Perahera — shorter, smaller, fewer elephants, and much easier to watch. The last five are the Randoli Perahera, which is the version people picture: the full complement of elephants, the largest crowds, and the longest processions.\n\nThe final night is the biggest by a wide margin, and it is also the hardest to see anything at. If you have a choice, several Sri Lankans will tell you the same thing: go on one of the last Kumbal nights or the first Randoli night. You get most of the spectacle, the crowds are manageable, and you can get a position without paying for one.\n\nThe morning after the final night there is a daytime water-cutting ceremony at the Mahaweli river at Getambe, which almost no visitors attend and which is a genuinely different thing to see — quieter, less staged, and closer to the religious point of the whole festival.",
            tourCard: {
              slug: "kandy-city-highlights-private-day-tour-temple-viewpoints-and-gardens",
              title: "Kandy City Highlights Private Day Tour: Temple, Viewpoints and Gardens",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 26",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375536/asiabylocals/tours/kandy-city-tour-cover-13-places-within-a-single-day-free/img0.jpg",
            },
          },
          {
            title: "Where to watch, and what a seat costs",
            icon: "map",
            content: "The route runs from the [Temple of the Tooth](/sri-lanka/kandy/temple-of-the-tooth-guide) around the streets of central Kandy — Dalada Veediya, Yatinuwara Veediya, Kande Veediya and back. Anywhere on that loop works; the question is whether you sit or stand.\n\nRoadside standing is free and you can simply turn up, but on Randoli nights you need to be in position by five or six in the evening for a procession starting around eight. People bring mats and sit on the kerb for hours. It is hot, crowded and genuinely enjoyable if you go in expecting that.\n\nPaid seating is sold from balconies, shopfronts and temporary grandstands along the route, typically USD 20 to 60 per person depending on the night and the position, and often more on the final night. These are sold by hotels, agents and the buildings themselves. Quality varies a great deal — some are excellent elevated views, some are plastic chairs behind three rows of other plastic chairs. Ask specifically whether the seat is elevated and how far back it is.\n\nHotels on the route sell rooms with balcony views at large premiums and book out six to twelve months ahead.",
            tourCard: {
              slug: "kandy-unesco-heritage-day-by-local-bus-with-a-kandyan-guide",
              title: "Kandy UNESCO Heritage Day by Local Bus with a Kandyan Guide",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 32.5",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375986/asiabylocals/tours/kandy-unesco-heritage-city-tour-experience-by-local-bus/img0.jpg",
            },
          },
          {
            title: "Practicalities: crowds, roads and the elephants",
            icon: "info",
            content: "Kandy is full during the Perahera in a way it never is otherwise. Hotel rates multiply, availability collapses, and the roads in the centre close in the evenings — if you are staying outside town, work out in advance how close a vehicle can get you and how far you will walk.\n\nCome early, bring water, and expect to be sitting on a kerb. Pickpocketing is the main practical risk in the density of the crowd. It is a family occasion and the atmosphere is good-natured, but it is not a place to be moving around with a large bag.\n\nOn the elephants: they are a central part of the festival and they are also the part visitors most often ask about. The animals are temple elephants, they walk a city route at night under lights and drumming, and animal welfare organisations have criticised the practice for years, particularly after an elderly, visibly emaciated elephant named Tikiri drew international attention in 2019. Organisers have since introduced welfare checks. It is worth knowing this rather than being surprised by it, and it is a reasonable thing to weigh before attending.\n\nPhotography is difficult: it is dark, the subjects are moving, and flash is both useless at distance and unkind to the animals. A fast lens or a phone in night mode, braced on something solid, does better than most people expect.",
            tourCard: {
              slug: "kandy-night-street-photography-walk-with-a-local-photographer",
              title: "Kandy Night Street Photography Walk with a Local Photographer",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 104",
              duration: "2 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375980/asiabylocals/tours/kandy-night-street-photography-tour-with-photographer/img0.png",
            },
          },
          {
            title: "If you cannot make the Perahera",
            icon: "calendar-days",
            content: "The Perahera is ten nights of the year and Kandy is worth visiting on the other 355. The [Temple of the Tooth](/sri-lanka/kandy/temple-of-the-tooth-guide) runs three pujas daily with hevisi drumming, which is a much smaller version of the same tradition and available any evening. The cultural dance shows near the lake stage the Kandyan dance forms — the ves dance, the fire walk, the drumming — nightly, and while they are unambiguously staged for visitors, the drumming is real and the performers are trained in the same tradition.\n\nPoya days, the monthly full moons, are the closest thing to a Perahera atmosphere outside the festival. The temple fills with white-clad worshippers, the queues are long, and the whole complex feels alive.\n\nIf your dates are flexible and the festival matters to you, build the trip around the published dates for that year rather than assuming a month. If your dates are fixed and they miss it, do not reschedule Sri Lanka around it — Kandy has enough on any given week to justify two nights.",
            tourCard: {
              slug: "kandy-full-day-private-tour-temple-of-the-tooth-peradeniya",
              title: "Kandy Full-Day Private Tour: Temple of the Tooth, Peradeniya and a Cultural Show",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 123.5",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375809/asiabylocals/tours/from-kandy-all-inclusive-full-day-tour-in-kandy-private/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "When is the Kandy Esala Perahera?", a: "July or August, on dates set by the lunar calendar that move by up to a month between years. It runs ten nights and ends on the Nikini full moon. Always check the current year's published dates — there is no fixed week." },
          { q: "Which night of the Perahera should I attend?", a: "One of the last Kumbal nights or the first Randoli night. You get most of the elephants and the full procession without the crush of the final night, and you can usually find a roadside position without paying for a seat." },
          { q: "Do I need to buy a seat?", a: "No. Roadside standing is free if you are in position by 5-6pm. Paid balcony and grandstand seats run roughly USD 20-60 and more on the final night. If you buy one, ask specifically whether it is elevated and how many rows back." },
          { q: "How far ahead should I book a hotel for the Perahera?", a: "Six to twelve months for anything on or near the procession route. Rates multiply during the festival and rooms with balcony views are the first to go." },
          { q: "How long does the procession last?", a: "Two to three hours to pass a given point on the later nights, starting around 8pm. The earlier Kumbal nights are shorter. Add several hours of waiting beforehand if you want a good position." },
          { q: "Are the Perahera elephants treated well?", a: "This has been genuinely contested. Animal welfare groups have criticised the use of elephants in the procession, particularly after an emaciated elephant named Tikiri drew international attention in 2019, and organisers have since introduced welfare checks. It is worth deciding how you feel about it before you go rather than after." },
          { q: "Is there anything on the day after the final night?", a: "Yes — a daytime water-cutting ceremony at the Mahaweli river at Getambe, which very few visitors attend. It is quieter and closer to the religious purpose of the festival than the night processions." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "When is the Kandy Esala Perahera?", acceptedAnswer: { "@type": "Answer", text: "July or August, on dates set by the lunar calendar that move by up to a month between years. It runs ten nights and ends on the Nikini full moon. Always check the current year's published dates — there is no fixed week." } },
            { "@type": "Question", name: "Which night of the Perahera should I attend?", acceptedAnswer: { "@type": "Answer", text: "One of the last Kumbal nights or the first Randoli night. You get most of the elephants and the full procession without the crush of the final night, and you can usually find a roadside position without paying for a seat." } },
            { "@type": "Question", name: "Do I need to buy a seat?", acceptedAnswer: { "@type": "Answer", text: "No. Roadside standing is free if you are in position by 5-6pm. Paid balcony and grandstand seats run roughly USD 20-60 and more on the final night. If you buy one, ask specifically whether it is elevated and how many rows back." } },
            { "@type": "Question", name: "How far ahead should I book a hotel for the Perahera?", acceptedAnswer: { "@type": "Answer", text: "Six to twelve months for anything on or near the procession route. Rates multiply during the festival and rooms with balcony views are the first to go." } },
            { "@type": "Question", name: "How long does the procession last?", acceptedAnswer: { "@type": "Answer", text: "Two to three hours to pass a given point on the later nights, starting around 8pm. The earlier Kumbal nights are shorter. Add several hours of waiting beforehand if you want a good position." } },
            { "@type": "Question", name: "Are the Perahera elephants treated well?", acceptedAnswer: { "@type": "Answer", text: "This has been genuinely contested. Animal welfare groups have criticised the use of elephants in the procession, particularly after an emaciated elephant named Tikiri drew international attention in 2019, and organisers have since introduced welfare checks. It is worth deciding how you feel about it before you go rather than after." } },
            { "@type": "Question", name: "Is there anything on the day after the final night?", acceptedAnswer: { "@type": "Answer", text: "Yes — a daytime water-cutting ceremony at the Mahaweli river at Getambe, which very few visitors attend. It is quieter and closer to the religious purpose of the festival than the night processions." } },
          ],
        },
      };

    case "best-time-to-visit-kandy":
      return {
        title: "Best Time to Visit Kandy: Weather, Crowds and the Months That Actually Work",
        seoTitle: "Best Time to Visit Kandy",
        description: "Kandy sits between Sri Lanka's two monsoons and gets rain from both. A month-by-month guide to weather, the Perahera, and when to book what.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375687/asiabylocals/tours/kandy-nuwara-eliya-or-ambewala-raiway-station-drop-tour/img0.jpg",
        fastFacts: [
          { icon: "calendar-days", label: "Driest, most reliable", value: "January to March, and July to August" },
          { icon: "calendar-days", label: "Wettest", value: "October to December, and again in May" },
          { icon: "calendar-days", label: "Temperature", value: "Around 20-30C year-round; cooler than the coast" },
          { icon: "calendar-days", label: "Esala Perahera", value: "July or August, dates move yearly" },
          { icon: "calendar-days", label: "Busiest and priciest", value: "Perahera nights, and mid-December to mid-January" },
          { icon: "calendar-days", label: "Best value", value: "February to March, and late September" },
        ],
        sections: [
          {
            title: "Best Time to Visit Kandy: Weather, Crowds and the Months That Actually Work",
            icon: "calendar-days",
            content: "Kandy is the awkward one on any Sri Lankan weather chart, and articles that give the island a single rainy season are always wrong about it. The country has two monsoons arriving on opposite coasts at opposite times: the southwest, or Yala, monsoon soaks the west and south from about May to September, and the northeast, or Maha, monsoon soaks the east and north from about October to January.\n\nKandy sits inland at around 500 metres, on the edge of the central highlands, between the two systems. It gets rain from both, which means it has no long dry season in the way Colombo or Trincomalee do — but it also means it never has a season that is a complete write-off. The wettest stretch is October to December, when the second inter-monsoon and the northeast monsoon overlap.\n\nThe temperature is the real reason to be here. Kandy runs roughly 20 to 30 degrees, five or six degrees cooler than Colombo, and the nights are genuinely comfortable. After a few days on the coast the difference is immediately obvious, and it is why the Kandyan kings, and later the British, treated the hills as the good place to be.",
            tourCard: {
              slug: "kandy-city-highlights-private-day-tour-temple-viewpoints-and-gardens",
              title: "Kandy City Highlights Private Day Tour: Temple, Viewpoints and Gardens",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 26",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375536/asiabylocals/tours/kandy-city-tour-cover-13-places-within-a-single-day-free/img0.jpg",
            },
          },
          {
            title: "January to March: the clearest window",
            icon: "calendar-days",
            content: "These are the most reliable months. The northeast monsoon has finished with the interior, the southwest has not arrived, and Kandy gets bright mornings with the occasional short afternoon shower. Visibility from the hills around the town is at its best, which matters if you plan to walk the Hanthana ridge or go up to the Bahirawakanda Buddha for the view.\n\nIt is also when the rest of your likely route works: Colombo, Galle and the south coast are in their dry season, and the hill country south of Kandy is at its most walkable. If you are doing the standard anticlockwise loop, this is the window that suits every stop on it.\n\nThe cost is that mid-December to mid-January is the island's peak season, with the highest hotel rates and the fullest trains. February and March give you almost the same weather for noticeably less money, and February in particular is about as good as Kandy gets.",
            tourCard: {
              slug: "kandy-full-day-private-tour-temple-of-the-tooth-peradeniya",
              title: "Kandy Full-Day Private Tour: Temple of the Tooth, Peradeniya and a Cultural Show",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 123.5",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375809/asiabylocals/tours/from-kandy-all-inclusive-full-day-tour-in-kandy-private/img0.jpg",
            },
          },
          {
            title: "April and May: heat, New Year and the first monsoon",
            icon: "calendar-days",
            content: "April is hot by Kandy standards and humid, with building afternoon thunderstorms. It is still workable, but the middle of the month brings the Sinhala and Tamil New Year, the biggest holiday in the country. Kandy empties as people travel to family homes, a lot of small businesses close for several days, and long-distance transport is packed. It is atmospheric if you plan for it and frustrating if you do not.\n\nMay is the month to avoid if you have a choice. The southwest monsoon arrives, and while Kandy is not on the coast that takes the worst of it, the hills catch enough to make the roads slow and the views grey. Afternoon rain becomes near-daily rather than occasional.\n\nIf May is your only window, Kandy still works better than the west coast does — the town's attractions are largely indoors or short walks, and the temple, the museums and the workshops do not care about the weather.",
            tourCard: {
              slug: "kandyan-village-tour-from-kandy-with-a-rice-and-curry-cooking-class",
              title: "Kandyan Village Tour from Kandy with a Rice and Curry Cooking Class",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 33.8",
              duration: "6 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375840/asiabylocals/tours/from-kandy-traditional-eco-village-tour-with-cooking-class/img0.jpg",
            },
          },
          {
            title: "June to September: the surprisingly good second window",
            icon: "calendar-days",
            content: "This is the part most visitors do not expect. While the southwest monsoon is drenching Colombo and closing the south coast beaches, Kandy sits far enough inland to get away with it. July and August are among the drier months here, and they coincide with the [Esala Perahera](/sri-lanka/kandy/kandy-esala-perahera-guide), which is the single biggest reason to be in Kandy at all.\n\nIt is also the dry-season window for the cultural triangle to the north — Sigiriya, Dambulla, Polonnaruwa — and the months when the elephant gathering at Minneriya is at its peak, with herds concentrating on the reservoir bed as the water elsewhere disappears. Kandy is the natural base for all of that.\n\nThe trade-off is the Perahera itself: hotel rates in Kandy multiply for those ten nights and availability disappears months ahead. If you want July or August without the crowd, aim for the weeks either side of the festival.",
            tourCard: {
              slug: "kandy-to-trincomalee-transfer-via-sigiriya-rock-and-the-dambulla-caves",
              title: "Kandy to Trincomalee Transfer via Sigiriya Rock and the Dambulla Caves",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 78",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375702/asiabylocals/tours/kandy-sigiriya-rock-dambulla-temple-trincomalee-transfer/img0.jpg",
            },
          },
          {
            title: "October to December: the wet months",
            icon: "calendar-days",
            content: "October and November are Kandy's wettest and least predictable stretch. The second inter-monsoon brings thunderstorms that can arrive at any hour, and this is when tropical depressions in the Bay of Bengal are most likely to affect the island. Roads in the hills are slower, landslides occasionally close routes, and the hill-country train runs late more often than usual.\n\nIt is not a write-off. Rain here tends to come in heavy bursts rather than all-day drizzle, prices are at their annual low, and the town is quiet. If your trip is Kandy-focused rather than built around hiking and views, these months are good value.\n\nBy mid-December the pattern usually turns. Late November and early December can feel like a preview of the dry season at off-season prices, which makes them a reasonable gamble for a flexible traveller.",
            tourCard: {
              slug: "kandy-unesco-heritage-day-by-local-bus-with-a-kandyan-guide",
              title: "Kandy UNESCO Heritage Day by Local Bus with a Kandyan Guide",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 32.5",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375986/asiabylocals/tours/kandy-unesco-heritage-city-tour-experience-by-local-bus/img0.jpg",
            },
          },
          {
            title: "Matching Kandy to the rest of your route",
            icon: "map",
            content: "Almost nobody visits Kandy alone, so the practical question is how it fits the rest of the trip. If you are going west and south — Colombo, Bentota, Galle, Mirissa — then December to March is the window that suits everything, and Kandy is comfortably inside it.\n\nIf you are going east, to Trincomalee or Arugam Bay, the calendar inverts: those coasts are at their best from May to September, exactly when the southwest is wettest. Kandy works in that window too, which makes it a useful hinge in a monsoon-season itinerary.\n\nThe cultural triangle north of Kandy — Sigiriya, Dambulla, Polonnaruwa — is drier from May to September, and the Minneriya elephant gathering peaks in those months. The hill country south — Nuwara Eliya, Ella — gets rain from both monsoons and is cool and often cloudy year-round, which is part of its character rather than a problem.\n\nThe honest summary: Kandy is one of the few places in Sri Lanka that works in almost any month. Pick your dates for the coast or the parks you care about, and slot Kandy in wherever it lands.",
            tourCard: {
              slug: "kandy-to-nuwara-eliya-or-ambewela-station-transfer-with-craft-workshop",
              title: "Kandy to Nuwara Eliya or Ambewela Station Transfer with Craft Workshop Stops",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 117",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375687/asiabylocals/tours/kandy-nuwara-eliya-or-ambewala-raiway-station-drop-tour/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "What is the best month to visit Kandy?", a: "February, for the clearest weather and prices below the December-January peak. July and August are the other strong window, drier than most people expect and home to the Esala Perahera, though the festival itself pushes rates up sharply." },
          { q: "Does Sri Lanka have one rainy season?", a: "No, and this is the most common error in Sri Lankan travel advice. The southwest monsoon hits the west and south from roughly May to September; the northeast monsoon hits the east and north from roughly October to January. Kandy sits between the two and catches some of both." },
          { q: "Is Kandy cooler than Colombo?", a: "Yes, noticeably. Kandy sits at around 500 metres and runs roughly 20-30C, about five or six degrees cooler than the coast, with genuinely comfortable nights. It is the main reason the hills were the seat of power for so long." },
          { q: "When is the worst time to visit Kandy?", a: "October and November. The second inter-monsoon brings unpredictable thunderstorms, the hill roads slow down, and this is when Bay of Bengal depressions are most likely to affect the island. May is the other month to avoid if you have flexibility." },
          { q: "Should I plan my trip around the Esala Perahera?", a: "Only if the festival matters to you and your dates are flexible, because it moves each year with the lunar calendar and falls somewhere in July or August. Book six to twelve months ahead if you do. If your dates are fixed and they miss it, Kandy is still worth two nights on any week of the year." },
          { q: "How many days do you need in Kandy?", a: "Two nights covers the town properly: the Temple of the Tooth timed for a puja, the Peradeniya gardens, the lake and a viewpoint, with a second day for a hike or a village visit. One night is enough if you are passing through on a hill-country route." },
          { q: "Does the weather affect the Kandy to Ella train?", a: "Not the running of it, but heavily the view. In October and November the hill country is often in cloud, and the tea-slope views the journey is famous for can disappear entirely. January to March gives the most reliable visibility." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What is the best month to visit Kandy?", acceptedAnswer: { "@type": "Answer", text: "February, for the clearest weather and prices below the December-January peak. July and August are the other strong window, drier than most people expect and home to the Esala Perahera, though the festival itself pushes rates up sharply." } },
            { "@type": "Question", name: "Does Sri Lanka have one rainy season?", acceptedAnswer: { "@type": "Answer", text: "No, and this is the most common error in Sri Lankan travel advice. The southwest monsoon hits the west and south from roughly May to September; the northeast monsoon hits the east and north from roughly October to January. Kandy sits between the two and catches some of both." } },
            { "@type": "Question", name: "Is Kandy cooler than Colombo?", acceptedAnswer: { "@type": "Answer", text: "Yes, noticeably. Kandy sits at around 500 metres and runs roughly 20-30C, about five or six degrees cooler than the coast, with genuinely comfortable nights. It is the main reason the hills were the seat of power for so long." } },
            { "@type": "Question", name: "When is the worst time to visit Kandy?", acceptedAnswer: { "@type": "Answer", text: "October and November. The second inter-monsoon brings unpredictable thunderstorms, the hill roads slow down, and this is when Bay of Bengal depressions are most likely to affect the island. May is the other month to avoid if you have flexibility." } },
            { "@type": "Question", name: "Should I plan my trip around the Esala Perahera?", acceptedAnswer: { "@type": "Answer", text: "Only if the festival matters to you and your dates are flexible, because it moves each year with the lunar calendar and falls somewhere in July or August. Book six to twelve months ahead if you do. If your dates are fixed and they miss it, Kandy is still worth two nights on any week of the year." } },
            { "@type": "Question", name: "How many days do you need in Kandy?", acceptedAnswer: { "@type": "Answer", text: "Two nights covers the town properly: the Temple of the Tooth timed for a puja, the Peradeniya gardens, the lake and a viewpoint, with a second day for a hike or a village visit. One night is enough if you are passing through on a hill-country route." } },
            { "@type": "Question", name: "Does the weather affect the Kandy to Ella train?", acceptedAnswer: { "@type": "Answer", text: "Not the running of it, but heavily the view. In October and November the hill country is often in cloud, and the tea-slope views the journey is famous for can disappear entirely. January to March gives the most reliable visibility." } },
          ],
        },
      };

    case "kandy-city-guide":
      return {
        title: "Kandy City Guide: What to See, Where to Walk and How Long to Stay",
        seoTitle: "Kandy City Guide, Sri Lanka",
        description: "A guide to Kandy: the Temple of the Tooth, the lake, Udawattakele forest, the Peradeniya gardens and the craft streets, plus how long the town actually needs.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375536/asiabylocals/tours/kandy-city-tour-cover-13-places-within-a-single-day-free/img0.jpg",
        fastFacts: [
          { icon: "clock", label: "How long to stay", value: "Two nights covers it properly; one if passing through" },
          { icon: "map", label: "Altitude", value: "About 500 m — five to six degrees cooler than Colombo" },
          { icon: "landmark", label: "UNESCO listed", value: "Since 1988, as the last capital of the Sinhalese kings" },
          { icon: "map", label: "Kandy lake", value: "Dug in 1807 by the last king; a flat 3.5 km walk" },
          { icon: "map", label: "Udawattakele", value: "103 hectares of forest reserve behind the temple" },
          { icon: "info", label: "Fell to the British", value: "1815 — three centuries after the coast did" },
        ],
        sections: [
          {
            title: "Kandy City Guide: What to See, Where to Walk and How Long to Stay",
            icon: "landmark",
            content: "Kandy was the last independent kingdom in Sri Lanka. The Portuguese took the coast in the sixteenth century and the Dutch took it from them in the seventeenth, but neither could hold the hills — the approaches are narrow, the forest is thick, and the Kandyan kings simply withdrew and waited them out. The kingdom did not fall until 1815, and then largely through a negotiated convention rather than a battle.\n\nThat history is the reason the town feels different from anywhere on the coast. Colombo and Galle are layered with European building; Kandy is a Sinhalese capital that happens to have some British additions. The temple, the lake, the old audience hall and the craft traditions are continuous rather than imposed.\n\nIt is also small. The centre is walkable in an afternoon, the lake circuit is 3.5 flat kilometres, and almost everything worth seeing is within a couple of kilometres of the temple. What Kandy asks for is not a long list of sights but time in a small number of them, plus at least one evening, because the town at night — the lake lit, the drumming carrying from the temple, the air finally cool — is when it makes sense.",
            tourCard: {
              slug: "kandy-city-highlights-private-day-tour-temple-viewpoints-and-gardens",
              title: "Kandy City Highlights Private Day Tour: Temple, Viewpoints and Gardens",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 26",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375536/asiabylocals/tours/kandy-city-tour-cover-13-places-within-a-single-day-free/img0.jpg",
            },
          },
          {
            title: "The Temple of the Tooth and the royal precinct",
            icon: "landmark",
            content: "The Sri Dalada Maligawa is the centre of the town in every sense. It holds a relic of the Buddha, possession of which was historically tied to the right to rule the island, and it is why Kandy is UNESCO-listed. The relic chamber opens for three pujas a day, at 5.30am, 9.30am and 6.30pm, and outside those windows you are visiting a beautiful building rather than a ceremony.\n\nAround it is the rest of the royal compound: the octagonal Pattirippuwa tower from 1802, now a palm-leaf manuscript library; the Alut Maligawa with its rows of donated Buddha statues and a museum; and the Raja Tusker Museum, holding the preserved body of the elephant who carried the relic casket in the Perahera for around fifty years.\n\nAcross the road, the Kandy National Museum occupies part of the old royal palace and holds the Kandyan regalia, weapons and court objects. It is quiet, rarely busy, and worth an hour if the kingdom's history interests you at all.\n\nDress rules apply across the precinct: shoulders and knees covered, shoes off, and socks worth carrying because the stone gets painfully hot.",
            tourCard: {
              slug: "kandy-full-day-private-tour-temple-of-the-tooth-peradeniya",
              title: "Kandy Full-Day Private Tour: Temple of the Tooth, Peradeniya and a Cultural Show",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 123.5",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375809/asiabylocals/tours/from-kandy-all-inclusive-full-day-tour-in-kandy-private/img0.jpg",
            },
          },
          {
            title: "The lake, the viewpoints and Udawattakele",
            icon: "map",
            content: "Kandy lake was dug in 1807 by Sri Wickrama Rajasinha, the last king, on what had been paddy land — a decision unpopular enough at the time that he had objecting chiefs impaled on stakes in the lake bed. It is a flat 3.5 kilometre circuit, shaded in parts, and the standard early-morning or late-afternoon walk.\n\nThe Bahirawakanda Vihara Buddha stands on the hill directly above the town: a 27-metre white statue, reached by a steep road or a stiff walk, with the best free view over Kandy and the valley. Go at sunset.\n\nUdawattakele is the surprise. It is 103 hectares of genuine forest immediately behind the [Temple of the Tooth](/sri-lanka/kandy/temple-of-the-tooth-guide), protected as a reserve since 1856 and before that the royal forest garden, off limits to commoners. Inside there are made paths, Kandyan-period ponds, the Senkanda cave the city may be named after, and very good birding — Layard's parakeet, hanging parrots, babblers, and giant squirrels and purple-faced langurs in the canopy. Go at dawn.",
            tourCard: {
              slug: "udawattakele-bird-watching-morning-from-kandy-with-a-guide",
              title: "Udawattakele Bird Watching Morning from Kandy with a Guide",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 71.5",
              duration: "5 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375522/asiabylocals/tours/from-kandy-bird-watching-tour-to-udawatte-kele-sanctuary/img0.jpg",
            },
          },
          {
            title: "Peradeniya, the craft streets and the dance",
            icon: "sparkles",
            content: "The Royal Botanic Gardens at Peradeniya, six kilometres west of town, are 60 hectares inside a loop of the Mahaweli river and were laid out formally in 1821 on ground that had been a royal garden since the fourteenth century. The Cabbage Palm Avenue, planted in 1905, runs arrow-straight for a couple of hundred metres; the orchid house is genuinely good; and there is a single Javan fig whose canopy covers around 2,500 square metres of lawn. Allow two hours.\n\nKandy's craft tradition is still working rather than preserved. The woodcarvers, batik workshops, brass workers and gem cutters around Matale road and in the town supplied the court, and their descendants are in the same trades. Most workshops will let you watch and have a shop attached; there is never an obligation to buy, and the demonstrations are worth the stop regardless.\n\nThe Kandyan dance shows near the lake run nightly. They are staged for visitors and honest about it — an hour of the ves dance, mask forms, drumming and a fire walk. The drumming is the real article and the performers train in the same tradition that supplies the Perahera.",
            tourCard: {
              slug: "kandyan-village-tour-from-kandy-with-a-rice-and-curry-cooking-class",
              title: "Kandyan Village Tour from Kandy with a Rice and Curry Cooking Class",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 33.8",
              duration: "6 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375840/asiabylocals/tours/from-kandy-traditional-eco-village-tour-with-cooking-class/img0.jpg",
            },
          },
          {
            title: "Eating in Kandy",
            icon: "utensils",
            content: "Rice and curry is the meal, and it is badly named in English: not a curry served with rice, but six or seven separate dishes eaten together, each cooked its own way — a tempered dhal, a coconut sambol pounded with chilli and lime, a jackfruit or green bean cooked down in coconut milk, a fish or egg curry, and papadam. A good one costs a few dollars at a local place and three times that in a hotel, and the local one is usually better.\n\nKottu is the other thing to eat here: godamba roti chopped on a hot plate with egg, vegetables and meat, and the rhythmic clatter of the blades is audible down the street from about six in the evening. Kandy's kottu places run late.\n\nThe market in the centre is worth walking through even if you buy nothing — the fruit section alone covers a dozen things most visitors cannot name. Buffalo curd with treacle, sold in clay pots, is the standard dessert and is exactly as good as it sounds.\n\nFor a proper sit-down, the hotels above the lake do a colonial-era high tea with a view. It is a tourist thing and it is also genuinely pleasant at five in the afternoon.",
            tourCard: {
              slug: "kandyan-village-tour-from-kandy-with-a-rice-and-curry-cooking-class",
              title: "Kandyan Village Tour from Kandy with a Rice and Curry Cooking Class",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 33.8",
              duration: "6 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375840/asiabylocals/tours/from-kandy-traditional-eco-village-tour-with-cooking-class/img0.jpg",
            },
          },
          {
            title: "How long Kandy needs, and what to skip",
            icon: "clock",
            content: "Two nights is the right answer for most people. That gives you one full day for the town — Bahirawakanda in the morning, Peradeniya in the heat of the day, the lake in the late afternoon, and the 6.30pm puja — and a second day for something outside it: Udawattakele at dawn, a village day, the Hanthana ridge, or a run north to Sigiriya.\n\nOne night works if you are passing through on the standard loop and only want the temple and the lake. Three nights is worth it if you are hiking, because the Knuckles range and the first stage of the [Pekoe Trail](/sri-lanka/kandy/day-trips-from-kandy) both start from here and both need a full day each.\n\nWhat to skip: Pinnawala elephant orphanage divides opinion sharply and is on most day tours by default. It holds around eighty rescued animals and the rescue work is real; it is also heavily commercialised, with bathing sessions timed for coaches. Decide in advance rather than being driven there. The gem museums are fine as demonstrations and are attached to hard-sell shops. And a day trip to Kandy from Colombo is three to four hours each way for an afternoon in town — if the temple is the point, sleep here instead.\n\nIn and around the town: [a private highlights day with the temple and viewpoints](/sri-lanka/kandy/kandy-city-highlights-private-day-tour-temple-viewpoints-and-gardens), [the full-day private tour with Peradeniya](/sri-lanka/kandy/kandy-full-day-private-tour-temple-of-the-tooth-peradeniya), [a UNESCO heritage day by local bus](/sri-lanka/kandy/kandy-unesco-heritage-day-by-local-bus-with-a-kandyan-guide), [the Wakarewatta nature and city tuk-tuk day](/sri-lanka/kandy/wakarewatta-nature-and-kandy-city-tuk-tuk-tour-with-a-sri-lankan-lunch) and [a bird-watching morning in Udawattakele](/sri-lanka/kandy/udawattakele-bird-watching-morning-from-kandy-with-a-guide).\n\nCrafts and photography, which Kandy does better than anywhere else in the country: [an hour of wood carving](/sri-lanka/kandy/one-hour-kandy-wood-carving-workshop-with-tuk-tuk-transfers), [carving and hand-painting with an artisan](/sri-lanka/kandy/kandy-wood-carving-and-hand-painting-workshop-with-a-local-artisan), [a photography walk in Peradeniya Gardens](/sri-lanka/kandy/peradeniya-botanic-gardens-photography-walk-with-a-professional) and [a night street photography walk](/sri-lanka/kandy/kandy-night-street-photography-walk-with-a-local-photographer).",
            tourCard: {
              slug: "kandy-full-day-private-tour-temple-of-the-tooth-peradeniya",
              title: "Kandy Full-Day Private Tour: Temple of the Tooth, Peradeniya and a Cultural Show",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 123.5",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375809/asiabylocals/tours/from-kandy-all-inclusive-full-day-tour-in-kandy-private/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "How many days do you need in Kandy?", a: "Two nights. One full day covers the Temple of the Tooth, the Peradeniya gardens, the lake and a viewpoint; a second gives you Udawattakele at dawn, a village day or a hike. Add a third night if you want the Knuckles range or a Pekoe Trail stage." },
          { q: "Is Kandy worth visiting?", a: "Yes, and for a specific reason: it is the last Sinhalese capital and the only major Sri Lankan town that is not primarily a European colonial creation. It is also cooler than the coast, walkable, and the base for the hill country, the cultural triangle and the Ella train." },
          { q: "Can you do Kandy as a day trip from Colombo?", a: "You can, and it is three to four hours each way. Most day trips arrive in the early afternoon, between pujas, so you miss the one thing the temple is for. If the Temple of the Tooth matters to you, stay a night." },
          { q: "What is Udawattakele and is it worth it?", a: "A 103-hectare forest reserve directly behind the Temple of the Tooth, protected since 1856 and formerly the royal forest garden. It is excellent for birds and quiet at dawn, with made paths and gentle gradients. Very few visitors go, which is part of the appeal." },
          { q: "Is Pinnawala elephant orphanage worth visiting?", a: "It divides people. It holds around eighty rescued elephants and the rescue work is genuine, but it is heavily commercialised with bathing sessions timed for tour groups. Decide before you book, because it is on most Kandy day tours by default and can usually be swapped out." },
          { q: "What should I eat in Kandy?", a: "Rice and curry at a local place rather than a hotel — it arrives as six or seven separate dishes, not one. Kottu in the evening, buffalo curd with treacle for dessert, and a walk through the central market whether or not you buy anything." },
          { q: "Is Kandy cold at night?", a: "Cool rather than cold, around 18-20C, which after the coast feels like a considerable relief. You do not need a jacket in Kandy itself, but you will if you go on to Nuwara Eliya at 1,900 metres." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How many days do you need in Kandy?", acceptedAnswer: { "@type": "Answer", text: "Two nights. One full day covers the Temple of the Tooth, the Peradeniya gardens, the lake and a viewpoint; a second gives you Udawattakele at dawn, a village day or a hike. Add a third night if you want the Knuckles range or a Pekoe Trail stage." } },
            { "@type": "Question", name: "Is Kandy worth visiting?", acceptedAnswer: { "@type": "Answer", text: "Yes, and for a specific reason: it is the last Sinhalese capital and the only major Sri Lankan town that is not primarily a European colonial creation. It is also cooler than the coast, walkable, and the base for the hill country, the cultural triangle and the Ella train." } },
            { "@type": "Question", name: "Can you do Kandy as a day trip from Colombo?", acceptedAnswer: { "@type": "Answer", text: "You can, and it is three to four hours each way. Most day trips arrive in the early afternoon, between pujas, so you miss the one thing the temple is for. If the Temple of the Tooth matters to you, stay a night." } },
            { "@type": "Question", name: "What is Udawattakele and is it worth it?", acceptedAnswer: { "@type": "Answer", text: "A 103-hectare forest reserve directly behind the Temple of the Tooth, protected since 1856 and formerly the royal forest garden. It is excellent for birds and quiet at dawn, with made paths and gentle gradients. Very few visitors go, which is part of the appeal." } },
            { "@type": "Question", name: "Is Pinnawala elephant orphanage worth visiting?", acceptedAnswer: { "@type": "Answer", text: "It divides people. It holds around eighty rescued elephants and the rescue work is genuine, but it is heavily commercialised with bathing sessions timed for tour groups. Decide before you book, because it is on most Kandy day tours by default and can usually be swapped out." } },
            { "@type": "Question", name: "What should I eat in Kandy?", acceptedAnswer: { "@type": "Answer", text: "Rice and curry at a local place rather than a hotel — it arrives as six or seven separate dishes, not one. Kottu in the evening, buffalo curd with treacle for dessert, and a walk through the central market whether or not you buy anything." } },
            { "@type": "Question", name: "Is Kandy cold at night?", acceptedAnswer: { "@type": "Answer", text: "Cool rather than cold, around 18-20C, which after the coast feels like a considerable relief. You do not need a jacket in Kandy itself, but you will if you go on to Nuwara Eliya at 1,900 metres." } },
          ],
        },
      };

    case "getting-around-kandy":
      return {
        title: "Getting Around Kandy: Tuk-Tuks, Buses, Trains and What Things Should Cost",
        seoTitle: "Getting Around Kandy",
        description: "How to move around Kandy and out of it: tuk-tuk fares and the meter question, the local bus network, the railway station, and driving times to everywhere.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375986/asiabylocals/tours/kandy-unesco-heritage-city-tour-experience-by-local-bus/img0.jpg",
        fastFacts: [
          { icon: "car", label: "Tuk-tuk in town", value: "LKR 100-150 per km; insist on the meter where fitted" },
          { icon: "bus", label: "Local bus", value: "LKR 20-60 for most town routes" },
          { icon: "train", label: "Kandy to Colombo by train", value: "About 3 hours; scenic and cheap" },
          { icon: "car", label: "Kandy to Colombo by road", value: "115 km, 3-4 hours — the road bends the whole way" },
          { icon: "car", label: "Kandy to Sigiriya", value: "90 km, about 2.5 hours" },
          { icon: "car", label: "Car with driver", value: "Roughly USD 55-75 a day including fuel" },
        ],
        sections: [
          {
            title: "Getting Around Kandy: Tuk-Tuks, Buses, Trains and What Things Should Cost",
            icon: "car",
            content: "Kandy is small enough that the centre is walkable and hilly enough that you will not want to walk all of it. The lake circuit, the temple, the market and the main streets are all within a flat kilometre or so of each other. Everything else — Bahirawakanda on the hill, Peradeniya six kilometres west, Udawattakele up behind the temple — needs wheels or a serious climb.\n\nThe practical hierarchy is simple. Walk the centre. Take a tuk-tuk for anything up a hill or out of town. Use the local bus if you want the cheapest option and do not mind crowds. Take the train for Colombo or the hill country, because the road alternatives are slower and less interesting.\n\nTraffic in the centre is worse than the town's size suggests, particularly around the market and the clock tower at rush hour, and the one-way system means a short hop can take a surprisingly long time. Factor that in rather than being caught by it.",
            tourCard: {
              slug: "kandy-unesco-heritage-day-by-local-bus-with-a-kandyan-guide",
              title: "Kandy UNESCO Heritage Day by Local Bus with a Kandyan Guide",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 32.5",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375986/asiabylocals/tours/kandy-unesco-heritage-city-tour-experience-by-local-bus/img0.jpg",
            },
          },
          {
            title: "Tuk-tuks: fares, meters and the honest rate",
            icon: "car",
            content: "Tuk-tuks are the default way to get around. Many in Kandy have meters, and the metered rate runs roughly LKR 100-150 per kilometre with a minimum fare. Drivers who approach you outside the temple or at the station will often quote a flat price several times the meter rate; drivers you flag down in the street are usually fairer.\n\nThe simple rule: ask for the meter first. If there is no meter, agree the fare before you get in, not at the destination. A short hop within the centre should be a few hundred rupees; Peradeniya gardens from the centre is realistically LKR 800-1,200 one way.\n\nRide-hailing apps operate in Kandy and price tuk-tuks automatically, which removes the negotiation entirely and is usually cheaper than a street quote. It is the easiest solution if you have a local SIM, and a local SIM costs a few dollars at the airport.\n\nHiring a tuk-tuk and driver for a half or full day is common and good value — expect roughly USD 25-40 for a full day around the town and its edges. The driver becomes a de facto guide, which in Kandy is usually a bonus.",
            tourCard: {
              slug: "kandy-city-highlights-private-day-tour-temple-viewpoints-and-gardens",
              title: "Kandy City Highlights Private Day Tour: Temple, Viewpoints and Gardens",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 26",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375536/asiabylocals/tours/kandy-city-tour-cover-13-places-within-a-single-day-free/img0.jpg",
            },
          },
          {
            title: "Local buses",
            icon: "bus",
            content: "Kandy's bus network is dense, cheap and completely unmarked in English. Fares are LKR 20-60 for anything within the town and its suburbs, buses are frequent, and they go everywhere including up to Bahirawakanda and out to Peradeniya.\n\nThey are also crowded, hot, loud and run to a logic that is not written down. Conductors call destinations out of the door, routes are numbered but the numbers are not much help without knowing the corridors, and buses do not always come to a complete stop. None of this is dangerous; it is simply not a system you can decode on your own on day one.\n\nWith a guide, the bus becomes one of the better things to do in Kandy rather than a way to save money — you spend the day among people going to work rather than among other visitors, and you see parts of the town no car tour stops in.\n\nThe main bus stations are the Goods Shed terminal, for long-distance services including Colombo and Nuwara Eliya, and the Clock Tower stand for local routes.",
            tourCard: {
              slug: "kandy-unesco-heritage-day-by-local-bus-with-a-kandyan-guide",
              title: "Kandy UNESCO Heritage Day by Local Bus with a Kandyan Guide",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 32.5",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375986/asiabylocals/tours/kandy-unesco-heritage-city-tour-experience-by-local-bus/img0.jpg",
            },
          },
          {
            title: "Trains from Kandy",
            icon: "train",
            content: "Kandy railway station sits a few minutes west of the centre and is the reason a lot of people come here at all.\n\nColombo to Kandy takes about three hours and is a good ride in its own right, climbing through Rambukkana and the Kadugannawa pass. It is cheaper than a car and often faster in traffic, and reserved seats are worth booking ahead in season.\n\nSouth to the hill country, the line runs Kandy to Nanu Oya, Haputale, Ella and eventually Badulla. This is the famous one, and the scenic half is Nanu Oya to Ella. Reserved seats open 30 days ahead and sell out within hours between December and March; unreserved second and third class are sold on the day and always available, standing.\n\nOne detail catches people out constantly: there is no Nuwara Eliya station. The stop is Nanu Oya, about 10 kilometres and 20-30 minutes from the town.\n\nSri Lanka Railways runs late routinely. Do not build a same-day flight connection around a hill-country train.",
            tourCard: {
              slug: "kandy-to-nanu-oya-tea-country-transfer-with-ella-train-tickets-arranged",
              title: "Kandy to Nanu Oya Tea Country Transfer with Ella Train Tickets Arranged",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 39.04",
              duration: "6 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375828/asiabylocals/tours/kandy-to-nanu-oya-drop-tea-tour-with-ella-train-tickets/img0.jpg",
            },
          },
          {
            title: "Driving times out of Kandy",
            icon: "map",
            content: "Sri Lanka is small on the map and slow on the ground, and Kandy is the clearest example of it. Nothing on this list should be estimated from distance.\n\nColombo is 115 km and three to four hours — the road climbs and bends continuously and there is no expressway for most of it. Sigiriya and Dambulla are 90 km and about two and a half hours north. Nuwara Eliya is 80 km and a full three hours, because the road gains 1,400 metres. Ella is 140 km and four to five hours. Trincomalee on the east coast is around five hours. Galle on the south coast is six or more.\n\nA car with a driver runs roughly USD 55-75 a day including fuel and the driver's own costs, which for two or more people is close to what individual transfers cost and saves hours. Agree the itinerary and the daily rate in writing before you start, including who pays park entry for the vehicle.\n\nSelf-driving is legal with a temporary permit and is a poor first-visit choice: the mountain roads are narrow, the buses overtake on blind corners as a matter of course, and night driving is genuinely hazardous.",
            table: {
              headers: ["From Kandy to", "Distance", "Driving time"],
              rows: [["Colombo", "115 km", "3-4 hours"], ["Sigiriya / Dambulla", "90 km", "2.5 hours"], ["Nuwara Eliya", "80 km", "3 hours"], ["Ella", "140 km", "4-5 hours"], ["Trincomalee", "180 km", "~5 hours"], ["Galle", "270 km", "6+ hours"]],
            },
            tourCard: {
              slug: "kandy-to-nuwara-eliya-or-ambewela-station-transfer-with-craft-workshop",
              title: "Kandy to Nuwara Eliya or Ambewela Station Transfer with Craft Workshop Stops",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 117",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375687/asiabylocals/tours/kandy-nuwara-eliya-or-ambewala-raiway-station-drop-tour/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "How much should a tuk-tuk cost in Kandy?", a: "Roughly LKR 100-150 per kilometre on the meter, with a minimum fare. A short hop in the centre is a few hundred rupees; Peradeniya gardens is realistically LKR 800-1,200 one way. Ask for the meter first, and agree a price before getting in if there is not one." },
          { q: "Is there a ride-hailing app in Kandy?", a: "Yes, and it is the easiest way to avoid negotiating. Apps price tuk-tuks automatically and are usually cheaper than a street quote. You need a local SIM, which costs a few dollars at the airport." },
          { q: "How long does Colombo to Kandy take?", a: "Three to four hours by road for 115 km — the road climbs and bends the whole way and there is no expressway for most of it. The train takes about three hours and is more pleasant." },
          { q: "Which station serves Nuwara Eliya?", a: "Nanu Oya, about 10 km and 20-30 minutes from the town. There is no station in Nuwara Eliya itself. This catches out more travellers than any other detail on the hill line." },
          { q: "Do I need a car and driver in Sri Lanka?", a: "For a multi-stop itinerary, it is the practical option at roughly USD 55-75 a day including fuel — close to what separate transfers cost for two people, and it removes the logistics. Trains cover Colombo-Kandy-Ella well; almost nothing else on a standard route is well served by public transport." },
          { q: "Are Kandy's local buses usable for visitors?", a: "Cheap and frequent, at LKR 20-60 a ride, but unmarked in English and run to a logic that is not written down anywhere. Perfectly usable with a guide, and a genuinely good way to see the town; difficult to decode alone on your first day." },
          { q: "Is it safe to drive yourself around Kandy?", a: "Legal with a temporary permit, but a poor first-visit choice. The hill roads are narrow, buses overtake on blind corners routinely, and night driving is hazardous. Almost every visitor is better off with a driver." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How much should a tuk-tuk cost in Kandy?", acceptedAnswer: { "@type": "Answer", text: "Roughly LKR 100-150 per kilometre on the meter, with a minimum fare. A short hop in the centre is a few hundred rupees; Peradeniya gardens is realistically LKR 800-1,200 one way. Ask for the meter first, and agree a price before getting in if there is not one." } },
            { "@type": "Question", name: "Is there a ride-hailing app in Kandy?", acceptedAnswer: { "@type": "Answer", text: "Yes, and it is the easiest way to avoid negotiating. Apps price tuk-tuks automatically and are usually cheaper than a street quote. You need a local SIM, which costs a few dollars at the airport." } },
            { "@type": "Question", name: "How long does Colombo to Kandy take?", acceptedAnswer: { "@type": "Answer", text: "Three to four hours by road for 115 km — the road climbs and bends the whole way and there is no expressway for most of it. The train takes about three hours and is more pleasant." } },
            { "@type": "Question", name: "Which station serves Nuwara Eliya?", acceptedAnswer: { "@type": "Answer", text: "Nanu Oya, about 10 km and 20-30 minutes from the town. There is no station in Nuwara Eliya itself. This catches out more travellers than any other detail on the hill line." } },
            { "@type": "Question", name: "Do I need a car and driver in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "For a multi-stop itinerary, it is the practical option at roughly USD 55-75 a day including fuel — close to what separate transfers cost for two people, and it removes the logistics. Trains cover Colombo-Kandy-Ella well; almost nothing else on a standard route is well served by public transport." } },
            { "@type": "Question", name: "Are Kandy's local buses usable for visitors?", acceptedAnswer: { "@type": "Answer", text: "Cheap and frequent, at LKR 20-60 a ride, but unmarked in English and run to a logic that is not written down anywhere. Perfectly usable with a guide, and a genuinely good way to see the town; difficult to decode alone on your first day." } },
            { "@type": "Question", name: "Is it safe to drive yourself around Kandy?", acceptedAnswer: { "@type": "Answer", text: "Legal with a temporary permit, but a poor first-visit choice. The hill roads are narrow, buses overtake on blind corners routinely, and night driving is hazardous. Almost every visitor is better off with a driver." } },
          ],
        },
      };

    case "day-trips-from-kandy":
      return {
        title: "Day Trips from Kandy: What Is Actually Doable in a Day",
        seoTitle: "Day Trips from Kandy",
        description: "Sigiriya, Nuwara Eliya, Kitulgala rafting, the Knuckles range and the Pekoe Trail — with honest driving times and which trips are too far to be worth it.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375702/asiabylocals/tours/kandy-sigiriya-rock-dambulla-temple-trincomalee-transfer/img0.jpg",
        fastFacts: [
          { icon: "map", label: "Sigiriya and Dambulla", value: "90 km, 2.5 hours each way — very doable" },
          { icon: "map", label: "Nuwara Eliya", value: "80 km but 3 hours each way — long but workable" },
          { icon: "map", label: "Kitulgala rafting", value: "2 hours each way; half-day versions exist" },
          { icon: "map", label: "Knuckles range", value: "1.5 hours to the trailhead; a full day on foot" },
          { icon: "info", label: "Too far for a day", value: "Ella, Galle, Yala, Trincomalee" },
          { icon: "clock", label: "Start early", value: "Anything north needs a 5-6am departure" },
        ],
        sections: [
          {
            title: "Day Trips from Kandy: What Is Actually Doable in a Day",
            icon: "map",
            content: "Kandy sits in the middle of Sri Lanka, which makes it the best day-trip base on the island and also creates the standard trap: because everything is theoretically reachable, operators sell trips that are eleven hours of driving for two hours on the ground.\n\nThe honest dividing line is about two and a half hours each way. Inside that, a day trip works and you get real time at the destination. Beyond it, you are buying a car journey with a stop in the middle.\n\nThat puts Sigiriya, Dambulla, Kitulgala, the Knuckles range, Pekoe Trail stages and Ambuluwawa comfortably in range. It puts Nuwara Eliya at the edge — three hours each way, workable but long. And it puts Ella, Galle, Yala and Trincomalee outside it, whatever the listings say.\n\nThe other rule that matters here: for the places on your onward route, a guided one-way transfer with stops costs less than a day trip and saves you the return leg entirely. If you are going to Nuwara Eliya or Ella next anyway, do not day-trip there — move there, with the sightseeing built into the drive.",
            tourCard: {
              slug: "kandy-to-trincomalee-transfer-via-sigiriya-rock-and-the-dambulla-caves",
              title: "Kandy to Trincomalee Transfer via Sigiriya Rock and the Dambulla Caves",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 78",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375702/asiabylocals/tours/kandy-sigiriya-rock-dambulla-temple-trincomalee-transfer/img0.jpg",
            },
          },
          {
            title: "Sigiriya and Dambulla: the essential one",
            icon: "landmark",
            content: "Ninety kilometres north, about two and a half hours, and the best day trip from Kandy by a distance. Sigiriya is a fifth-century royal citadel on top of a 200-metre granite plug, reached by 1,200 steps past the mirror wall frescoes and the lion's paws, with symmetrical water gardens below that still function after fifteen hundred years. Dambulla, fifteen minutes south, is five caves under a granite overhang painted floor to ceiling for two thousand years, holding around 150 Buddha images.\n\nStart early — most operators leave Kandy between 5am and 6am — because the rock becomes genuinely unpleasant to climb after about ten in the morning and there is no shade above the frescoes.\n\nEntrance fees are the main extra cost and they are significant: around USD 30-35 for Sigiriya and USD 10 for Dambulla, cash at the gate. Pidurangala, the smaller rock opposite Sigiriya, is much cheaper, ends in a boulder scramble, and gives you the view of Sigiriya rather than from it — a real choice rather than a downgrade if you are there for photographs.\n\nMany versions add an afternoon jeep safari at Minneriya, where elephants gather on the reservoir bed from roughly June to September. That makes it a twelve-hour day.",
            tourCard: {
              slug: "kandy-to-trincomalee-transfer-via-sigiriya-rock-and-the-dambulla-caves",
              title: "Kandy to Trincomalee Transfer via Sigiriya Rock and the Dambulla Caves",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 78",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375702/asiabylocals/tours/kandy-sigiriya-rock-dambulla-temple-trincomalee-transfer/img0.jpg",
            },
          },
          {
            title: "The hill country: Nuwara Eliya and the tea",
            icon: "map",
            content: "Nuwara Eliya is 80 kilometres away and a full three hours, because the road gains 1,400 metres through Gampola, Pussellawa and Ramboda. As a day trip it means six hours in a car, which is the honest cost. What you get is the drive itself — one of the best on the island — plus Ramboda Falls, a working tea factory, and a hill station the British built and never quite finished making English, complete with racecourse, golf course and stocked trout streams.\n\nThe tea factory is the part that justifies it. A working plant takes the leaf from the withering troughs through rolling, oxidation and firing to the grading table in about forty-five minutes, and it is the single best explanation of why one bush produces six different products.\n\nIf Nuwara Eliya or Ella is your next stop, take the one-way guided transfer instead. Same stops, half the driving, and you end the day where you are sleeping. This is the single most useful piece of planning advice for a Kandy stay.\n\nAmbuluwawa, an hour southwest towards Gampola, is the half-day alternative: a 48-metre spire on a hilltop with a spiral staircase up the outside that narrows alarmingly near the top, plus a tea factory. Back by lunchtime.",
            tourCard: {
              slug: "kandy-to-nuwara-eliya-or-ambewela-station-transfer-with-craft-workshop",
              title: "Kandy to Nuwara Eliya or Ambewela Station Transfer with Craft Workshop Stops",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 117",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375687/asiabylocals/tours/kandy-nuwara-eliya-or-ambewala-raiway-station-drop-tour/img0.jpg",
            },
          },
          {
            title: "Adventure: Kitulgala, the Knuckles and the Pekoe Trail",
            icon: "mountain",
            content: "Kitulgala is two hours southwest, on a stretch of the Kelani river graded 2 to 3, and is where almost all of Sri Lanka's white water rafting happens. No experience is needed, the guides are in the boat with you, and half-day versions get you back to Kandy by early afternoon. The river runs strongest May to July and November to December; in a dry month the rapids soften considerably.\n\nThe Knuckles range is an hour and a half northeast and is a UNESCO-listed conservation area of montane cloud forest and grassland sitting where the wet and dry zones meet. A full-day guided hike covers ten to twelve kilometres with real ascent, endemic birds, and usually a waterfall pool cold enough to be a shock. It needs proper shoes and moderate fitness, and leeches are standard in the wet season.\n\nThe Pekoe Trail is the newer option — a 300-kilometre waymarked route through the tea country opened in 2023, built on estate paths that already existed. Stage 1 starts on the Hanthana ridge twenty minutes from Kandy and runs to Galaha; Stage 3 starts at Loolkandura, where James Taylor planted Ceylon's first commercial tea in 1867. Both are one-way walks of roughly 14-15 km with the vehicle meeting you at the far end.\n\nCloser in, the Hanthana ridge itself gives a shorter version — eight to ten kilometres, a waterfall to swim in, and the best view back over Kandy.",
            tourCard: {
              slug: "knuckles-range-full-day-guided-hike-from-kandy-with-a-farmhouse-lunch",
              title: "Knuckles Range Full-Day Guided Hike from Kandy with a Farmhouse Lunch",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 115.7",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375863/asiabylocals/tours/kandy-knuckles-mountain-range-full-day-hike-with-lunch/img0.jpg",
            },
          },
          {
            title: "Villages, rivers and the quieter days",
            icon: "leaf",
            content: "The countryside around Kandy is smallholding country, and the village days are consistently rated higher by travellers than the big-ticket trips. You walk out through paddy with a local host, the tank-and-channel irrigation system gets explained — Sri Lanka has been running it for two thousand years — and you cook a full rice and curry over a wood fire and eat it with the family. Heeloya and Heel Oya east of Kandy are the usual bases.\n\nMeemure is the far version of the same idea: a village inside the Knuckles valley that had no road until the 1990s and mains electricity only from 2016, three hours away with the last stretch by jeep, plus a hike to the Diyakarella waterfall. It is a ten-hour day and it goes somewhere almost nobody goes.\n\nUdawattakele, the 103-hectare forest reserve directly behind the [Temple of the Tooth](/sri-lanka/kandy/temple-of-the-tooth-guide), is the shortest trip on this page and needs no driving at all. A dawn birding walk there is finished by mid-morning and is the best-value half day available in Kandy.",
            tourCard: {
              slug: "meemure-village-day-trip-from-kandy-with-the-diyakarella-waterfall-hike",
              title: "Meemure Village Day Trip from Kandy with the Diyakarella Waterfall Hike",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 143",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375548/asiabylocals/tours/kandy-meemure-village-day-trip-hidden-mountain-village/img0.jpg",
            },
          },
          {
            title: "What is too far, and what to do instead",
            icon: "info",
            content: "Ella is 140 kilometres and four to five hours each way. Sold as a day trip, it is ten hours of driving for a few hours on the ground, most of them spent walking to the Nine Arch bridge. Do it as a one-way transfer on the day you move, or give Ella two nights of its own.\n\nGalle is six hours away across the island. Yala is five. Trincomalee is five. None of these are day trips from Kandy in any meaningful sense, and listings that offer them are selling a very long car journey.\n\nAnuradhapura and Polonnaruwa are the borderline cases. Polonnaruwa is about three hours and works as a long day, particularly paired with a Minneriya safari on the way back. Anuradhapura is closer to four and is better done from a base in Sigiriya or Dambulla, or as a stop while moving north.\n\nThe pattern worth internalising: from Kandy, go north for culture, south for tea, east for hills and forest, and west only if you are leaving. Anything requiring more than five hours in a car should become part of your route rather than a day out of it.\n\n**What we run from Kandy.** Cultural Triangle: [Sigiriya and Pidurangala by tuk-tuk](/sri-lanka/kandy/sigiriya-and-pidurangala-rock-day-trip-from-kandy-by-tuk-tuk), [the private Sigiriya and Dambulla tuk-tuk day](/sri-lanka/kandy/private-sigiriya-and-dambulla-tuk-tuk-day-trip-from-kandy), [Sigiriya and Dambulla with an elephant safari](/sri-lanka/kandy/sigiriya-and-dambulla-group-day-tour-from-kandy-with-an-elephant-safari), [the private version with a spice garden](/sri-lanka/kandy/private-sigiriya-day-tour-from-kandy-with-an-elephant-safari-and-spice), [Sigiriya and Dambulla with an evening return](/sri-lanka/kandy/sigiriya-rock-and-dambulla-caves-day-tour-from-kandy-with-evening), [Sigiriya, Pidurangala and a jeep safari](/sri-lanka/kandy/sigiriya-pidurangala-and-a-jeep-safari-from-kandy-by-tuk-tuk), [Sigiriya with Polonnaruwa](/sri-lanka/kandy/sigiriya-rock-and-polonnaruwa-ancient-city-day-trip-from-kandy), [the long three-site day](/sri-lanka/kandy/sigiriya-dambulla-and-polonnaruwa-long-cultural-triangle-day-from-kandy), [Sigiriya, Dambulla and Anuradhapura](/sri-lanka/kandy/sigiriya-dambulla-and-anuradhapura-three-site-day-tour-from-kandy), [Polonnaruwa with a Minneriya safari](/sri-lanka/kandy/private-polonnaruwa-day-tour-from-kandy-with-a-minneriya-jeep-safari).\n\nHill country: [Nuwara Eliya by tuk-tuk with a tea factory](/sri-lanka/kandy/nuwara-eliya-day-trip-from-kandy-by-tuk-tuk-with-a-tea-factory-visit), [the full Nuwara Eliya day with Ramboda Falls](/sri-lanka/kandy/nuwara-eliya-full-day-tour-from-kandy-with-ramboda-falls-and-lunch), [Ella via Nuwara Eliya](/sri-lanka/kandy/ella-day-trip-from-kandy-via-nuwara-eliya-ramboda-falls-and-a-tea) and [the Ambuluwawa Tower half-day](/sri-lanka/kandy/ambuluwawa-tower-and-tea-factory-half-day-tour-from-kandy).\n\nAdventure and walking: [Kitulgala rafting by tuk-tuk](/sri-lanka/kandy/kitulgala-white-water-rafting-day-trip-from-kandy-by-tuk-tuk), [rafting with hotel transfers](/sri-lanka/kandy/kitulgala-white-water-rafting-from-kandy-with-hotel-transfers), [the private Kitulgala rafting and trekking day](/sri-lanka/kandy/private-kitulgala-adventure-day-from-kandy-rafting-trekking), [Kelani river rafting](/sri-lanka/kandy/kelani-river-rafting-day-from-kandy-with-guides-and-transfers), [the private five-rapid Kelani day](/sri-lanka/kandy/private-kelani-river-rafting-day-trip-from-kandy-five-major-rapids), [the Knuckles Range full-day hike](/sri-lanka/kandy/knuckles-range-full-day-guided-hike-from-kandy-with-a-farmhouse-lunch), [the Hanthana ridge hike](/sri-lanka/kandy/hanthana-ridge-and-katusukonda-hike-from-kandy-with-tea-estates), [Pekoe Trail Stage 1](/sri-lanka/kandy/pekoe-trail-stage-1-guided-hike-from-kandy-hanthana-to-galaha), [Stage 3](/sri-lanka/kandy/pekoe-trail-stage-3-guided-hike-from-kandy-loolkandura-to-tawalantenne) and [the Adam's Peak overnight climb](/sri-lanka/kandy/adams-peak-overnight-guided-climb-from-kandy-with-sunrise-at-the-summit).\n\nVillages and the quieter days: [the eco village and spice trail](/sri-lanka/kandy/kandyan-eco-village-and-spice-trail-half-day-tour-from-kandy), [a village day with a rice and curry class](/sri-lanka/kandy/kandyan-village-tour-from-kandy-with-a-rice-and-curry-cooking-class), [Heel Oya village](/sri-lanka/kandy/heel-oya-village-day-from-kandy-with-a-home-cooked-sri-lankan-lunch), [the full Heeloya farming day](/sri-lanka/kandy/heeloya-village-full-day-tour-from-kandy-with-organic-farming-and-lunch), [Meemure with the Diyakarella waterfall](/sri-lanka/kandy/meemure-village-day-trip-from-kandy-with-the-diyakarella-waterfall-hike) and [the Sorabora Lake sunrise day](/sri-lanka/kandy/sorabora-lake-sunrise-and-waterfalls-day-trip-from-kandy-with-a-village).",
            tourCard: {
              slug: "kandy-to-trincomalee-transfer-via-sigiriya-rock-and-the-dambulla-caves",
              title: "Kandy to Trincomalee Transfer via Sigiriya Rock and the Dambulla Caves",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 78",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375702/asiabylocals/tours/kandy-sigiriya-rock-dambulla-temple-trincomalee-transfer/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "What is the best day trip from Kandy?", a: "Sigiriya and Dambulla. Two and a half hours each way, two UNESCO sites, and an early start makes it comfortable. Add a Minneriya jeep safari in the afternoon between June and September when the elephant herds gather." },
          { q: "Can you day trip to Ella from Kandy?", a: "Not sensibly. Ella is four to five hours each way, so a day trip is ten hours of driving for a couple of hours on the ground. Take a one-way guided transfer on the day you move instead, or give Ella two nights." },
          { q: "Is Nuwara Eliya doable as a day trip from Kandy?", a: "Yes, but it is three hours each way for 80 km because the road climbs 1,400 metres. If Nuwara Eliya or Ella is your next stop, the one-way transfer with the same stops costs less and saves you six hours in a car." },
          { q: "Where can you go white water rafting near Kandy?", a: "Kitulgala, two hours southwest on the Kelani river. Grade 2-3 water, no experience needed, and half-day versions get you back to Kandy by early afternoon. The river is strongest May to July and November to December." },
          { q: "What is the Pekoe Trail?", a: "A 300 km waymarked walking route through Sri Lanka's tea country, opened in 2023 on estate paths that already existed. Stage 1 starts on the Hanthana ridge twenty minutes from Kandy; Stage 3 starts at Loolkandura, where Ceylon's first commercial tea was planted in 1867. Both are day-length one-way walks." },
          { q: "How early do Sigiriya day trips leave Kandy?", a: "Between 5am and 6am. That is not padding — the rock is a two-and-a-half hour drive and the 1,200-step climb becomes genuinely unpleasant after about 10am, with no shade above the frescoes." },
          { q: "Is Polonnaruwa worth a day trip from Kandy?", a: "Yes, at about three hours each way, particularly paired with a Minneriya safari on the return. Anuradhapura at closer to four hours is better done from Sigiriya or as a stop while heading north." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What is the best day trip from Kandy?", acceptedAnswer: { "@type": "Answer", text: "Sigiriya and Dambulla. Two and a half hours each way, two UNESCO sites, and an early start makes it comfortable. Add a Minneriya jeep safari in the afternoon between June and September when the elephant herds gather." } },
            { "@type": "Question", name: "Can you day trip to Ella from Kandy?", acceptedAnswer: { "@type": "Answer", text: "Not sensibly. Ella is four to five hours each way, so a day trip is ten hours of driving for a couple of hours on the ground. Take a one-way guided transfer on the day you move instead, or give Ella two nights." } },
            { "@type": "Question", name: "Is Nuwara Eliya doable as a day trip from Kandy?", acceptedAnswer: { "@type": "Answer", text: "Yes, but it is three hours each way for 80 km because the road climbs 1,400 metres. If Nuwara Eliya or Ella is your next stop, the one-way transfer with the same stops costs less and saves you six hours in a car." } },
            { "@type": "Question", name: "Where can you go white water rafting near Kandy?", acceptedAnswer: { "@type": "Answer", text: "Kitulgala, two hours southwest on the Kelani river. Grade 2-3 water, no experience needed, and half-day versions get you back to Kandy by early afternoon. The river is strongest May to July and November to December." } },
            { "@type": "Question", name: "What is the Pekoe Trail?", acceptedAnswer: { "@type": "Answer", text: "A 300 km waymarked walking route through Sri Lanka's tea country, opened in 2023 on estate paths that already existed. Stage 1 starts on the Hanthana ridge twenty minutes from Kandy; Stage 3 starts at Loolkandura, where Ceylon's first commercial tea was planted in 1867. Both are day-length one-way walks." } },
            { "@type": "Question", name: "How early do Sigiriya day trips leave Kandy?", acceptedAnswer: { "@type": "Answer", text: "Between 5am and 6am. That is not padding — the rock is a two-and-a-half hour drive and the 1,200-step climb becomes genuinely unpleasant after about 10am, with no shade above the frescoes." } },
            { "@type": "Question", name: "Is Polonnaruwa worth a day trip from Kandy?", acceptedAnswer: { "@type": "Answer", text: "Yes, at about three hours each way, particularly paired with a Minneriya safari on the return. Anuradhapura at closer to four hours is better done from Sigiriya or as a stop while heading north." } },
          ],
        },
      };

    case "kandy-2-day-itinerary":
      return {
        title: "Two Days in Kandy: An Itinerary That Uses the Evenings Properly",
        seoTitle: "Kandy 2-Day Itinerary",
        description: "A realistic two-day Kandy plan built around the 6.30pm puja and a dawn start, with the town on day one and a choice of hike, village or cultural triangle on day two.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375536/asiabylocals/tours/kandy-city-tour-cover-13-places-within-a-single-day-free/img0.jpg",
        fastFacts: [
          { icon: "clock", label: "Day 1", value: "Bahirawakanda, Peradeniya, the lake, the 6.30pm puja" },
          { icon: "clock", label: "Day 2", value: "Dawn start — Udawattakele, a hike, a village, or Sigiriya" },
          { icon: "clock", label: "Key timings", value: "Pujas at 5.30am, 9.30am and 6.30pm" },
          { icon: "ticket", label: "Budget for entries", value: "About USD 25-30 per person over two days" },
          { icon: "info", label: "Take socks", value: "Temple floors are stone and get painfully hot" },
          { icon: "map", label: "Stay", value: "Near the lake — everything on day 1 is walkable from there" },
        ],
        sections: [
          {
            title: "Two Days in Kandy: An Itinerary That Uses the Evenings Properly",
            icon: "clock",
            content: "Two nights is the right length for Kandy, and the plan below is built around two fixed points rather than a list of sights: the 6.30pm puja at the [Temple of the Tooth](/sri-lanka/kandy/temple-of-the-tooth-guide) on the first evening, and an early start on the second morning.\n\nThose two decisions are what separate a good Kandy stay from an average one. The temple outside puja hours is a beautiful, quiet building; during the evening puja it is drummers, several hundred worshippers and an open relic chamber. And almost everything worth doing around Kandy — the forest, the ridges, the rock at Sigiriya — is a dawn activity that becomes unpleasant by mid-morning.\n\nThe rest of the schedule works around the heat. Peradeniya gardens go in the middle of the day because they are the one place where shade is guaranteed. The lake goes late in the afternoon when it cools. Nothing strenuous happens between eleven and three.\n\nStay near the lake. Everything on day one is walkable from there, and the walk back after the evening puja is one of the better parts of the day.",
            tourCard: {
              slug: "kandy-city-highlights-private-day-tour-temple-viewpoints-and-gardens",
              title: "Kandy City Highlights Private Day Tour: Temple, Viewpoints and Gardens",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 26",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375536/asiabylocals/tours/kandy-city-tour-cover-13-places-within-a-single-day-free/img0.jpg",
            },
          },
          {
            title: "Day 1, morning: the hill and the view",
            icon: "sunrise",
            content: "Start at the Bahirawakanda Vihara Buddha, the 27-metre white statue on the hill directly above the town. It is a steep road up and most people take a tuk-tuk; the view over Kandy, the lake and the surrounding hills is the best free thing in the city and it is clearest in the morning before the haze builds. Shoes off on the platform.\n\nCome back down through the town and walk the central streets while it is still tolerable — the market, the clock tower, the colonial-era shopfronts along Dalada Veediya. The market is worth twenty minutes even if you buy nothing; the fruit section alone has a dozen things most visitors cannot name.\n\nIf the Kandyan kingdom interests you, the National Museum next to the temple occupies part of the old royal palace and holds the regalia, court weapons and the 1815 convention that ended the kingdom. It is quiet, rarely busy, and a much better use of an hour than most people expect.",
            tourCard: {
              slug: "kandy-city-highlights-private-day-tour-temple-viewpoints-and-gardens",
              title: "Kandy City Highlights Private Day Tour: Temple, Viewpoints and Gardens",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 26",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375536/asiabylocals/tours/kandy-city-tour-cover-13-places-within-a-single-day-free/img0.jpg",
            },
          },
          {
            title: "Day 1, midday: Peradeniya",
            icon: "leaf",
            content: "The Royal Botanic Gardens are six kilometres west, about twenty minutes by tuk-tuk, and they are the right place to be between noon and three when Kandy is at its hottest. Sixty hectares inside a loop of the Mahaweli river, laid out formally in 1821 on what had been a royal garden since the fourteenth century.\n\nThe things to actually find: the Cabbage Palm Avenue, planted in 1905 and running arrow-straight for a couple of hundred metres; the orchid house; the Cook pine grove; and the great Javan fig, a single tree whose canopy covers around 2,500 square metres of lawn and which is almost impossible to photograph well without thinking about it first.\n\nAllow two hours. Entry is around USD 10 for foreign visitors, paid at the gate in cash. There is a café inside, and the lawns are the coolest place in the Kandy area at that hour.",
            tourCard: {
              slug: "kandy-city-highlights-private-day-tour-temple-viewpoints-and-gardens",
              title: "Kandy City Highlights Private Day Tour: Temple, Viewpoints and Gardens",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 26",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375536/asiabylocals/tours/kandy-city-tour-cover-13-places-within-a-single-day-free/img0.jpg",
            },
          },
          {
            title: "Day 1, evening: the lake and the puja",
            icon: "sparkles",
            content: "Back in town by four, walk the lake. It is a flat 3.5 kilometre circuit dug in 1807 by the last king of Kandy, shaded in parts, and busiest with locals rather than visitors in the late afternoon. Start on the temple side and go anticlockwise so you finish where you need to be.\n\nBe at the [Temple of the Tooth](/sri-lanka/kandy/temple-of-the-tooth-guide) by six for the 6.30pm puja. Shoulders and knees covered, shoes off at the gate, socks on if you have them because the courtyard stone stays hot. Security is real: bags are searched, so travel light. Entry is around LKR 2,000-2,500 in cash.\n\nThe puja lasts about an hour. Hevisi drummers play in the corridor, the upper relic chamber opens, and a queue moves past the outermost gold casket — the relic itself is never displayed. Around you will be several hundred people in white carrying lotus flowers. It is the hour that makes the trip.\n\nAfterwards, kottu somewhere in town. The clatter of the blades on the hot plate is audible down the street from about six, and Kandy's kottu places run late.",
            tourCard: {
              slug: "kandy-full-day-private-tour-temple-of-the-tooth-peradeniya",
              title: "Kandy Full-Day Private Tour: Temple of the Tooth, Peradeniya and a Cultural Show",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 123.5",
              duration: "10 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375809/asiabylocals/tours/from-kandy-all-inclusive-full-day-tour-in-kandy-private/img0.jpg",
            },
          },
          {
            title: "Day 2, option A: dawn in the forest, then the tea road",
            icon: "sunrise",
            content: "The gentlest second day. Udawattakele opens early and is at its best at dawn — 103 hectares of forest reserve directly behind the temple, protected since 1856, formerly the royal forest garden and closed to commoners. A guided birding walk finds Layard's parakeet, hanging parrots and babblers, mostly by call, and giant squirrels and purple-faced langurs are common. Made paths, gentle gradients, finished by mid-morning.\n\nThat leaves the afternoon for Ambuluwawa, an hour southwest: a 48-metre spire on a hilltop with a spiral staircase running up the outside, narrowing to about one foot's width near the top. It is a genuinely alarming climb and there is no shame in stopping halfway — the view is already worth it. A working tea factory nearby completes the half day.\n\nBack in Kandy by late afternoon with time for the cultural dance show near the lake, which is staged for visitors and honest about it, and where the drumming is the real article.",
            tourCard: {
              slug: "udawattakele-bird-watching-morning-from-kandy-with-a-guide",
              title: "Udawattakele Bird Watching Morning from Kandy with a Guide",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 71.5",
              duration: "5 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375522/asiabylocals/tours/from-kandy-bird-watching-tour-to-udawatte-kele-sanctuary/img0.jpg",
            },
          },
          {
            title: "Day 2, option B: the big day out",
            icon: "mountain",
            content: "If two days is all you have in central Sri Lanka, spend the second one going somewhere.\n\nSigiriya and Dambulla is the standard and the best of them: leave at 5am, climb the rock before the heat, see the cave temples, and be back by evening. Two UNESCO sites and about five hours of driving. Add a Minneriya jeep safari between June and September when the elephants gather on the reservoir bed.\n\nFor walking, the Knuckles range is a full-day guided hike through cloud forest and grassland with a waterfall pool at the turn, or [Pekoe Trail](/sri-lanka/kandy/day-trips-from-kandy) Stage 1 from the Hanthana ridge to Galaha — fifteen kilometres of estate paths with Kandy laid out below for the first hour.\n\nFor something slower, a village day east of Kandy: paddy fields, the two-thousand-year-old irrigation system explained by someone who farms with it, and a rice and curry cooked over a wood fire that you help make and then eat with the family. Travellers consistently rate these above the big-ticket trips.\n\nWhichever you pick, book it the day before and start early. Nothing around Kandy is improved by leaving at nine.",
            tourCard: {
              slug: "knuckles-range-full-day-guided-hike-from-kandy-with-a-farmhouse-lunch",
              title: "Knuckles Range Full-Day Guided Hike from Kandy with a Farmhouse Lunch",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 115.7",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375863/asiabylocals/tours/kandy-knuckles-mountain-range-full-day-hike-with-lunch/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "Is two days enough for Kandy?", a: "Yes for the town itself. One full day covers the Temple of the Tooth, Peradeniya, the lake and a viewpoint; the second gives you a hike, a village day or a run north to Sigiriya. Add a third night only if you want both the Knuckles range and the cultural triangle." },
          { q: "What time should I go to the Temple of the Tooth?", a: "The 6.30pm puja, arriving by six. That is when the relic chamber opens and the drummers play. The 5.30am puja is quieter and equally good if you can face the alarm; outside those windows the upper chamber is closed." },
          { q: "How much should I budget for entrance fees in Kandy?", a: "Around USD 25-30 per person over two days: roughly USD 7-9 for the Temple of the Tooth, USD 10 for Peradeniya gardens, a few dollars for Udawattakele or the museum, and about USD 5 for a cultural show. Carry rupees — cards are not accepted at gates." },
          { q: "Where should I stay in Kandy?", a: "Near the lake. Everything on the first day is walkable from there, tuk-tuks are easy to find, and the walk back after the evening puja is one of the better parts of the stay. Hotels on the hills above town have better views and need a vehicle for everything." },
          { q: "What should I do on my second day in Kandy?", a: "Either a dawn walk in Udawattakele followed by Ambuluwawa in the afternoon, or a full day out — Sigiriya and Dambulla, a Knuckles range hike, a Pekoe Trail stage, or a village day east of town. All of them need an early start." },
          { q: "Can I see the Esala Perahera on a two-day trip?", a: "Only if your dates happen to fall in the ten nights of the festival, which move each year with the lunar calendar and land somewhere in July or August. If they do, book accommodation six to twelve months ahead and expect much higher rates." },
          { q: "Is Kandy walkable?", a: "The centre and the lake circuit are, comfortably. Bahirawakanda on the hill, Peradeniya six kilometres west and Udawattakele's upper trails all need a tuk-tuk or a serious climb. Budget a few hundred rupees a hop within town." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Is two days enough for Kandy?", acceptedAnswer: { "@type": "Answer", text: "Yes for the town itself. One full day covers the Temple of the Tooth, Peradeniya, the lake and a viewpoint; the second gives you a hike, a village day or a run north to Sigiriya. Add a third night only if you want both the Knuckles range and the cultural triangle." } },
            { "@type": "Question", name: "What time should I go to the Temple of the Tooth?", acceptedAnswer: { "@type": "Answer", text: "The 6.30pm puja, arriving by six. That is when the relic chamber opens and the drummers play. The 5.30am puja is quieter and equally good if you can face the alarm; outside those windows the upper chamber is closed." } },
            { "@type": "Question", name: "How much should I budget for entrance fees in Kandy?", acceptedAnswer: { "@type": "Answer", text: "Around USD 25-30 per person over two days: roughly USD 7-9 for the Temple of the Tooth, USD 10 for Peradeniya gardens, a few dollars for Udawattakele or the museum, and about USD 5 for a cultural show. Carry rupees — cards are not accepted at gates." } },
            { "@type": "Question", name: "Where should I stay in Kandy?", acceptedAnswer: { "@type": "Answer", text: "Near the lake. Everything on the first day is walkable from there, tuk-tuks are easy to find, and the walk back after the evening puja is one of the better parts of the stay. Hotels on the hills above town have better views and need a vehicle for everything." } },
            { "@type": "Question", name: "What should I do on my second day in Kandy?", acceptedAnswer: { "@type": "Answer", text: "Either a dawn walk in Udawattakele followed by Ambuluwawa in the afternoon, or a full day out — Sigiriya and Dambulla, a Knuckles range hike, a Pekoe Trail stage, or a village day east of town. All of them need an early start." } },
            { "@type": "Question", name: "Can I see the Esala Perahera on a two-day trip?", acceptedAnswer: { "@type": "Answer", text: "Only if your dates happen to fall in the ten nights of the festival, which move each year with the lunar calendar and land somewhere in July or August. If they do, book accommodation six to twelve months ahead and expect much higher rates." } },
            { "@type": "Question", name: "Is Kandy walkable?", acceptedAnswer: { "@type": "Answer", text: "The centre and the lake circuit are, comfortably. Bahirawakanda on the hill, Peradeniya six kilometres west and Udawattakele's upper trails all need a tuk-tuk or a serious climb. Budget a few hundred rupees a hop within town." } },
          ],
        },
      };

    case "leaving-kandy-onward-transfers":
      return {
        title: "Leaving Kandy: The Routes Out, and Why the Drive Is the Day",
        seoTitle: "Kandy Onward Transfers Guide 2026",
        description: "Kandy to Nuwara Eliya, Ella, Sigiriya and Trincomalee — driving times, why a guided transfer is not a taxi, and how to combine the road with the hill country train.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375809/asiabylocals/tours/from-kandy-all-inclusive-full-day-tour-in-kandy-private/img0.jpg",
        fastFacts: [
          { icon: "car", label: "Kandy to Nuwara Eliya", value: "About 3 hours, a full day with tea stops" },
          { icon: "train", label: "Kandy to Ella", value: "7 hours by train, about 5 by road" },
          { icon: "landmark", label: "Kandy to Sigiriya", value: "About 3 hours north" },
          { icon: "waves", label: "Kandy to Trincomalee", value: "5 to 6 hours, usually via Sigiriya" },
          { icon: "clock", label: "Leave by", value: "7am. Hill roads are slow and get slower" },
        ],
        sections: [
          {
            title: "A guided transfer is not a taxi",
            icon: "car",
            content: "This is the thing that costs people a day, and it is worth being blunt about.\n\nIn Sri Lanka a **guided transfer** means a private car with a driver-guide that leaves in the morning, stops at three or four genuine places along the route, and delivers you to your next hotel in the evening. You are buying the day, not the kilometres. A plain airport-style taxi does the same drive with nothing in it, for not much less.\n\nOn the Kandy routes the stops are the reason to go: Peradeniya Botanical Gardens, Ramboda Falls, a working tea factory, the Nanu Oya railway. Our [transfer to Nuwara Eliya with a tea factory and Ramboda Falls](/sri-lanka/kandy/kandy-to-nuwara-eliya-guided-transfer-with-tea-factory-and-ramboda-falls) and the [Ella transfer via Peradeniya Gardens and Ramboda](/sri-lanka/kandy/kandy-to-ella-guided-transfer-with-peradeniya-gardens-and-ramboda-falls) are both built this way.\n\nPractical consequence: **do not book early check-in at your next hotel.** You will arrive in the evening, and that is correct.",
          },
          {
            title: "South to tea country, and the train problem solved",
            icon: "train",
            content: "The Kandy to Ella railway is one of the world's great train journeys and also **seven hours** of it, unreserved unless you book well ahead.\n\nThe answer most people actually want is to **do the good stretch by rail and the rest by car**. The scenic section runs from around Nanu Oya to Ella, not from Kandy, so the smart move is to drive the first half and pick the train up in tea country.\n\nThat is exactly what our [Kandy to Nanu Oya transfer with Ella train tickets arranged](/sri-lanka/kandy/kandy-to-nanu-oya-tea-country-transfer-with-ella-train-tickets-arranged) does, and the [Nuwara Eliya or Nanu Oya transfer with the Ella train](/sri-lanka/kandy/kandy-to-nuwara-eliya-or-nanu-oya-transfer-with-the-ella-train) is the same idea. The [scenic transfer with an optional Nanu Oya train](/sri-lanka/kandy/kandy-to-nuwara-eliya-scenic-transfer-with-an-optional-nanu-oya-train) lets you decide on the day.\n\nIf you would rather stay on the road the whole way, the [private tea country transfer to Ella](/sri-lanka/kandy/kandy-or-nuwara-eliya-to-ella-private-tea-country-transfer) covers it. Our [Kandy to Ella train guide](/sri-lanka/kandy/kandy-to-ella-train-guide) has the booking detail.",
          },
          {
            title: "North to the Cultural Triangle and the east coast",
            icon: "landmark",
            content: "Kandy is the gateway to the ancient cities, and the drive north is short enough that the stops make the day rather than pad it.\n\n**Sigiriya and Dambulla** are about three hours away. Doing them as a transfer rather than a day trip is the move if you are heading onward anyway, because you see the rock and end up in the right place instead of driving back to Kandy tired.\n\n**Trincomalee** on the east coast is five to six hours, and the sensible version goes via Sigiriya: our [Kandy to Trincomalee transfer via Sigiriya Rock and the Dambulla caves](/sri-lanka/kandy/kandy-to-trincomalee-transfer-via-sigiriya-rock-and-the-dambulla-caves) turns a long drive into a day with two UNESCO sites in it.\n\nIf you are going a long way in one go, there is a [private car for Kandy to Ella, Mirissa, Colombo and beyond](/sri-lanka/kandy/private-car-transfer-kandy-ella-mirissa-colombo-beyond) priced by the route rather than the stop list.",
          },
          {
            title: "Things that change the day",
            icon: "clock",
            content: "**Leave at 7am, not 9am.** Hill country roads are slow by design, full of bends and lorries, and every hour you start late is an hour of stops you lose at the other end.\n\n**Distance lies here more than anywhere.** Kandy to Nuwara Eliya is about 80 km and takes three hours. Plan by time, never by the map.\n\n**Your luggage stays in the car.** That is the real advantage over the train, and it is why the hybrid road-plus-rail options exist: you ride the scenic stretch with a day bag while the car meets you.\n\n**Name the exact hotel when you book.** One-way pricing already includes the driver getting home; changing the drop point afterwards usually changes the fare.\n\nIf you are still working out how long to give Kandy first, our [two-day Kandy itinerary](/sri-lanka/kandy/kandy-2-day-itinerary) is the honest minimum, and [day trips from Kandy](/sri-lanka/kandy/day-trips-from-kandy) covers what to do if you are staying put.",
          },
        ],
      };

    case "is-ambuluwawa-tower-tour-worth-it-kandy":
      return {
        title: "Is the Ambuluwawa Tower Tour Worth It from Kandy?",
        description: "An honest look at Ambuluwawa Tower, a distinctive multi-faith spiral tower and viewpoint near Kandy.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-867280/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Ambuluwawa Tower is a strikingly unusual spiral structure combining Buddhist, Hindu, Muslim, and Christian elements in one building, with a narrow climb to a 360-degree viewpoint over the surrounding hills — a genuinely different sight from Kandy's temples and lake.",
            tourCard: { slug: "from-kandy-ambuluwawa-full-day-tour-with-local", title: "From Kandy: Ambuluwawa Full-Day Tour with Local Guide", description: "A full-day tour to Ambuluwawa Tower with a local guide.", price: "From $41", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-867280/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "The tower's spiral staircase is narrow and can feel claustrophobic — those uncomfortable with tight, high spaces should know this before climbing." },
        ],
        faqs: [
          { q: "What is Ambuluwawa Tower?", a: "A distinctive spiral tower combining Buddhist, Hindu, Muslim, and Christian architectural elements, with a 360-degree viewpoint at the top." },
        ],
      };

    case "is-botanical-garden-tour-worth-it-kandy":
      return {
        title: "Is the Pinnawala & Royal Botanical Garden Tour Worth It from Kandy?",
        description: "An honest look at combining the Pinnawala Elephant Orphanage with Peradeniya's Royal Botanical Garden from Kandy.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-582886/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Royal Botanical Garden at Peradeniya, one of Asia's finest, holds a vast orchid house and giant bamboo and fig trees — pairing it with the Pinnawala Elephant Orphanage makes for a well-rounded half-day covering both nature and wildlife.",
            tourCard: { slug: "from-kandy-pinnawala-and-botanical-garden-tour-by", title: "From Kandy: Pinnawala and Botanical Garden Tour By Tuk Tuk", description: "A tuk-tuk tour combining Pinnawala Elephant Orphanage and the Royal Botanical Garden.", price: "From $99", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-582886/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Wear comfortable shoes — the botanical garden is large, and seeing the highlights involves a fair amount of walking." },
        ],
        faqs: [
          { q: "What is notable about Peradeniya's Royal Botanical Garden?", a: "It's considered one of Asia's finest, with a vast orchid house and giant bamboo and fig trees." },
        ],
      };

    case "is-cultural-dance-show-worth-it-kandy":
      return {
        title: "Is the Kandy Cultural Dance Show Worth It?",
        description: "An honest look at the Kandy Cultural Dance Show, a traditional Kandyan dance and fire-walking performance.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1359979/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This evening show features traditional Kandyan dance, drumming, and often fire-walking — a genuine cultural tradition performed nightly for visitors, and a good way to spend an evening after a day of temple and city sightseeing.",
            tourCard: { slug: "kandy-cultural-dance-show-ticket-premium-reserved", title: "Kandy Cultural Dance Show Ticket - Premium Reserved Seating", description: "A premium reserved-seating ticket to the Kandy Cultural Dance Show.", price: "From $17", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1359979/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Arrive a little early for the best seating even with a reserved ticket, since the venue fills up close to showtime." },
        ],
        faqs: [
          { q: "What is in the Kandy Cultural Dance Show?", a: "Traditional Kandyan dance, drumming, and often a fire-walking segment." },
        ],
      };

    case "is-tea-factory-tour-worth-it-kandy":
      return {
        title: "Is a Tea Factory Tour Worth It from Kandy?",
        description: "An honest look at the Kandy tea factory tour with tasting, including a tuk-tuk ride.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1326164/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Sri Lanka's tea industry is a defining part of the country's identity — this factory tour with tasting and a tuk-tuk ride gives a hands-on look at the process, from leaf to cup.",
            tourCard: { slug: "kandy-tea-factory-tour-with-tasting-and-tuk-tuk", title: "Kandy: Tea Factory Tour with Tasting and Tuk-Tuk Ride", description: "A tea factory tour with tasting and a tuk-tuk ride.", price: "From $11", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1326164/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "At a very low price, this is one of Kandy's most affordable half-day activities, worth adding even on a tight budget." },
        ],
        faqs: [
          { q: "Is a tea factory tour worth it in Kandy?", a: "Yes, it's affordable and gives genuine insight into Sri Lanka's defining tea industry." },
        ],
      };

    case "is-vedda-village-tour-worth-it-kandy":
      return {
        title: "Is the Dambulla Waterfalls and Vedda Village Tour Worth It from Kandy?",
        description: "An honest look at the Dambulla waterfalls and Vedda village day tour from Kandy, visiting Sri Lanka's indigenous Vedda community, distinct from the city's temple and botanical garden sightseeing.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1193819/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Vedda are Sri Lanka's indigenous people, and this tour gives genuine insight into their traditional way of life alongside Dambulla's waterfalls — a completely different cultural subject from Kandy's Temple of the Tooth and botanical garden sightseeing.",
            tourCard: { slug: "dambulla-waterfalls-and-vedda-village-with-kandy", title: "Dambulla Waterfalls and Vedda Village with Kandy", description: "A day tour to Dambulla's waterfalls and a Vedda indigenous village from Kandy.", price: "From $500", duration: "14 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1193819/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This is a long day given the multiple stops, so budget the full day and approach the village visit with genuine cultural respect and curiosity." },
        ],
        faqs: [
          { q: "Is the Vedda village tour worth it from Kandy?", a: "Yes, for genuine insight into Sri Lanka's indigenous Vedda culture, a completely different subject from Kandy's usual temple sightseeing." },
        ],
      };

    case "is-ella-scenic-train-worth-it-kandy":
      return {
        title: "Is the Ella Scenic Train from Kandy Worth It?",
        description: "An honest look at the scenic second-class train ticket from Kandy to Ella, widely considered one of the world's most beautiful train journeys.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-866801/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Kandy-to-Ella train ride passes through Sri Lanka's tea-country hills, waterfalls, and the famous Nine Arch Bridge, often ranked among the world's most scenic train journeys — a genuinely different way to travel the hill country compared to a private car.",
            tourCard: { slug: "ella-second-class-scenic-train-ticket-tofrom-kandy", title: "Ella: Second-Class Scenic Train Ticket to/from Kandy", description: "A second-class scenic train ticket between Kandy and Ella.", price: "From $185", duration: "10 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-866801/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Book seats in advance for the best window views, and keep in mind the journey itself takes most of a day, so plan it as the day's main activity." },
        ],
        faqs: [
          { q: "Is the Kandy to Ella train worth it?", a: "Yes, it's widely considered one of the world's most scenic train journeys, genuinely different from driving the same route." },
        ],
      };

    case "is-knuckles-7-falls-hike-worth-it-kandy":
      return {
        title: "Is the Knuckles Range 7 Falls Hiking Tour Worth It from Kandy?",
        description: "An honest look at the 7 falls hiking tour in the Knuckles mountain range near Kandy.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-956692/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Knuckles range is a genuinely rugged, less-touristed mountain area, and hiking to seven separate waterfalls in one outing gives a serious nature-focused day distinct from Kandy's temple and lake sightseeing.",
            tourCard: { slug: "kandy-7-falls-hiking-tour-in-the-knuckles", title: "Kandy 7 Falls Hiking Tour in the Knuckles", description: "A hiking tour to seven waterfalls in the Knuckles mountain range near Kandy.", price: "From $203", duration: "6.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-956692/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Come with real hiking fitness and proper footwear — this is a genuine multi-waterfall trek, not a casual walk.",
          },
        ],
        faqs: [
          { q: "Is the Knuckles 7 falls hike worth it from Kandy?", a: "Yes, it's a genuinely rugged, serious nature hike distinct from Kandy's usual temple and lake sightseeing." },
        ],
      };

    case "is-kelani-river-rafting-worth-it-kandy":
      return {
        title: "Is the Kelani River White Water Rafting Day Trip Worth It from Kandy?",
        description: "An honest look at the white water rafting day trip on the Kelani River near Kandy.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-866670/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Kelani River is Sri Lanka's genuine white water rafting destination, and this full-day trip gives a real adrenaline activity distinct from Kandy's cultural sightseeing circuit, worth the drive for travelers specifically seeking adventure sports.",
            tourCard: { slug: "from-kandy-kelani-river-white-water-rafting-day", title: "From Kandy: Kelani River White Water Rafting Day Trip", description: "A white water rafting day trip on the Kelani River from Kandy.", price: "From $296", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-866670/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "No prior rafting experience is needed, but come prepared to get thoroughly wet and bring a change of clothes.",
          },
        ],
        faqs: [
          { q: "Is the Kelani River rafting trip worth it from Kandy?", a: "Yes, it's Sri Lanka's genuine white water rafting destination, a real adrenaline activity worth the drive from Kandy." },
        ],
      };

    case "is-cooking-class-worth-it-kandy":
      return {
        title: "Is the Authentic Sri Lankan Cooking Class Worth It in Kandy?",
        description: "An honest look at the authentic Sri Lankan cooking class in Kandy, a hands-on introduction to the island's cuisine.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-668452/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Learning hands-on Sri Lankan cooking technique gives genuine insight beyond just eating rice and curry at a restaurant, and at 3 hours and a modest price it's an easy, affordable addition to a day of temple sightseeing.",
            tourCard: { slug: "authentic-sri-lankan-cooking-class-in-kandy-by", title: "Authentic Sri Lankan Cooking Class in Kandy", description: "A hands-on authentic Sri Lankan cooking class in Kandy.", price: "From $60", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-668452/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Come hungry — you'll be eating what you cook, and Sri Lankan meals are traditionally served as a generous, multi-dish spread.",
          },
        ],
        faqs: [
          { q: "Is the Sri Lankan cooking class worth it in Kandy?", a: "Yes, it gives genuine hands-on insight into the island's cuisine beyond just eating at a restaurant." },
        ],
      };

    case "is-nanuoya-scenic-train-worth-it-kandy":
      return {
        title: "Is the Nanuoya First-Class Scenic Train Worth It from Kandy?",
        description: "An honest look at the first-class scenic train ticket to/from Nanuoya, the gateway station for Nuwara Eliya.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-731614/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Nanuoya is the station serving Nuwara Eliya, a genuinely different destination from the more famous Kandy-to-Ella route, and booking first class guarantees a window seat and more comfort for the scenic hill-country journey.",
            tourCard: { slug: "nanuoya-first-class-scenic-train-ticket-tofrom", title: "Nanuoya First-Class Scenic Train Ticket", description: "A first-class scenic train ticket to/from Nanuoya station near Kandy.", price: "From $161", duration: "10 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-731614/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "First class guarantees a reserved window seat, genuinely worth the upgrade over unreserved second or third class on this popular route.",
          },
        ],
        faqs: [
          { q: "Is the Nanuoya scenic train worth it from Kandy?", a: "Yes, first class guarantees a reserved window seat for the scenic hill-country journey toward Nuwara Eliya." },
        ],
      };

    case "best-tuk-tuk-city-tour-kandy":
      return {
        title: "Which Is the Best Tuk-Tuk City Tour in Kandy?",
        description: "Kandy has by far the largest tuk-tuk tour selection of any Sri Lankan city — here's how the real options actually differ.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-847720/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Nearly all Kandy tuk-tuk tours cover the same core stops — Temple of the Tooth, the lake, a viewpoint, maybe a spice or gem workshop — over a full day with hotel pickup. The real differences are whether entrance fees are bundled into the price and how large a group you're sharing the tuk-tuk with.",
            tourCard: { slug: "kandy-city-tour-by-tuk-tuk-with-hotel-pickup", title: "Kandy City Tour by Tuk Tuk with hotel Pickup and Dropoff", description: "A standard full-day Kandy city tour by tuk-tuk.", price: "From $4", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-847720/img0/1600.webp" },
          },
          {
            title: "Cheapest: Standard Tour with Hotel Pickup",
            content: "At $4, this is about as low as Kandy tuk-tuk tours go — entrance fees to sites like the Temple of the Tooth are paid separately on the day.",
            tourCard: { slug: "kandy-city-tour-by-tuk-tuk-with-hotel-pickup", title: "Kandy City Tour by Tuk Tuk with hotel Pickup and Dropoff", description: "The budget full-day city tour.", price: "From $4", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-847720/img0/1600.webp" },
          },
          {
            title: "Best for No Surprises: All Entrance Fees Included",
            content: "This version bundles entrance fees for the sites visited directly into the upfront price — worth it if you'd rather know the total cost before you go, since Temple of the Tooth and botanical garden entry fees for foreigners add up.",
            tourCard: { slug: "kandy-city-tour-by-tuk-tuk-with-all-entrance", title: "Kandy: City Tour by Tuk Tuk with All Entrance Fees Included", description: "A Kandy city tour with all entrance fees bundled into the price.", price: "From $120", duration: "6 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-847720/img0/1600.webp" },
          },
          {
            title: "Best Private Option: Private Tuk-Tuk with Hotel Pickup",
            content: "For travellers who don't want to share the tuk-tuk with strangers, this private version covers similar ground at a similarly low price.",
            tourCard: { slug: "kandy-private-tuk-tuk-tour-with-hotel-pickup-and", title: "Kandy: Private Tuk-Tuk Tour with Hotel Pickup and Drop-Off", description: "A private tuk-tuk tour of Kandy.", price: "From $4", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1330644/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Check whether entrance fees are included before booking — the headline price alone can be misleading, since the cheapest tours leave fees for you to pay separately at each site.",
          },
        ],
        faqs: [
          { q: "What is the best tuk-tuk city tour in Kandy?", a: "A standard tour with hotel pickup suits most budgets; pick the all-inclusive version if you want entrance fees bundled into one upfront price." },
          { q: "Are entrance fees included in Kandy tuk-tuk tours?", a: "It varies — the cheapest options leave fees for you to pay separately, while pricier versions bundle them in." },
        ],
      };

    case "is-gem-museum-workshop-worth-it-kandy":
      return {
        title: "Is the Kandy Gem Museum & Lapidary Tour Worth It?",
        description: "An honest look at the guided gem museum and lapidary tour with a Mahaweli River stop near Kandy.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1394716/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Sri Lanka is genuinely known for gemstones, and this gives a behind-the-scenes look at lapidary (gem-cutting) work alongside a museum visit, paired with a river stop to break up the afternoon.",
            tourCard: { slug: "kandy-guided-gem-museum-lapidary-tour-mahaweli", title: "Kandy: Guided Gem Museum & Lapidary Tour + Mahaweli River", description: "A guided gem museum and lapidary tour with a river stop.", price: "From $6", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1394716/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "There's commonly a sales element at the end of gem/jewelry workshop tours in Sri Lanka — go in aware there's no obligation to buy.",
          },
        ],
        faqs: [
          { q: "Is the Kandy gem museum tour worth it?", a: "Yes for a genuine look at Sri Lankan gem-cutting craft, especially combined with the river stop — just expect a sales pitch at the end." },
        ],
      };

    case "is-night-temple-tour-worth-it-kandy":
      return {
        title: "Is the Kandy Night Tour with Temple of the Sacred Tooth Relic Worth It?",
        description: "An honest look at the evening version of the Temple of the Tooth visit, distinct from a standard daytime tour.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1215594/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The temple holds evening puja ceremonies with a different atmosphere from the daytime crowds, and this tour is timed specifically around that — a good pick if your schedule allows an evening slot and you want to see the ritual rather than just the building.",
            tourCard: { slug: "kandy-night-tour-with-temple-of-the-sacred-tooth", title: "Kandy: Night Tour with Temple of the Sacred Tooth Relic", description: "An evening tour timed around the Temple of the Tooth's puja ceremony.", price: "From $6", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1215594/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Modest dress (shoulders and knees covered, shoes off inside) is required regardless of day or night — the same dress code as the daytime visit applies.",
          },
        ],
        faqs: [
          { q: "Is the Kandy night temple tour worth it?", a: "Yes if you want to see an evening puja ceremony rather than just visiting during the day — it's a genuinely different atmosphere." },
          { q: "Is there a dress code for the night temple tour?", a: "Yes, the same modest dress code as the daytime visit — shoulders and knees covered, shoes removed inside." },
        ],
      };

    case "is-sacred-forest-hike-worth-it-kandy":
      return {
        title: "Is the Kandy Sacred Forest Sanctuary Hike Worth It?",
        description: "An honest look at the Sacred Forest Sanctuary hike with a secret vista stop by tuk-tuk from Kandy.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1475895/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This is a genuine hiking/nature outing rather than a sightseeing tour, built around a forest sanctuary and a lesser-known viewpoint — a good pick for travellers who've already done the standard temple-and-lake circuit and want something more active.",
            tourCard: { slug: "kandy-sacred-forest-sanctuary-hike-secret-vista", title: "Kandy: Sacred Forest Sanctuary Hike, Secret Vista by Tuk-Tuk", description: "A hike through a sacred forest sanctuary with a secret viewpoint stop.", price: "From $8", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1475895/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "At a full 8 hours, this is a proper day out rather than a quick add-on — bring proper footwear and water for the hiking portion.",
          },
        ],
        faqs: [
          { q: "Is the Sacred Forest Sanctuary hike worth it from Kandy?", a: "Yes for travellers wanting a more active, nature-focused alternative to the standard temple-and-lake city circuit." },
          { q: "How long is the Sacred Forest Sanctuary hike?", a: "A full day, about 8 hours including transport by tuk-tuk." },
        ],
      };

    case "is-udawatta-kele-nature-walk-worth-it-kandy":
      return {
        title: "Is the Udawatta Kele Sanctuary Nature Walk Worth It in Kandy?",
        description: "An honest look at the guided nature walk and birdwatching tour at Udawatta Kele Sanctuary in Kandy.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1463854/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Udawatta Kele is a genuine forest reserve right at the edge of the city, and a guided walk here gives real birdwatching and nature time without leaving Kandy, a welcome break from the temple-and-tuk-tuk sightseeing circuit.",
            tourCard: { slug: "udawatta-kele-sanctuary-guided-nature-walk", title: "Udawatta Kele Sanctuary Guided Nature Walk & Birdwatching", description: "A guided nature walk and birdwatching tour in Udawatta Kele Sanctuary.", price: "From $23", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1463854/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Bring binoculars if you have them and go early morning, when birdwatching conditions are best.",
          },
        ],
        faqs: [
          { q: "Is the Udawatta Kele nature walk worth it in Kandy?", a: "Yes, for a genuine forest and birdwatching experience right at the city's edge, a good break from temple sightseeing." },
        ],
      };

    case "is-nelligala-temple-tour-worth-it-kandy":
      return {
        title: "Is the Nelligala International Buddhist Center Tour Worth It from Kandy?",
        description: "An honest look at the Nelligala International Buddhist Center morning temple tour.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1459346/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Nelligala is a striking modern temple complex perched on a hilltop with genuinely good panoramic views, distinct from the Temple of the Tooth's historic relic-centered draw — a good complement if you want a second, architecturally different temple visit.",
            tourCard: { slug: "nelligala-international-buddhist-center-morning", title: "Nelligala International Buddhist Center Morning Temple Tour", description: "A morning tour of the Nelligala International Buddhist Center.", price: "From $17", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1459346/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Go in the morning as the tour name suggests — the light and the panoramic views are best earlier in the day.",
          },
        ],
        faqs: [
          { q: "Is the Nelligala temple tour worth it from Kandy?", a: "Yes, for a striking modern hilltop temple with genuinely good views, a good complement to the historic Temple of the Tooth." },
        ],
      };

    case "is-pinnawala-elephants-tour-worth-it-kandy":
      return {
        title: "Is the Pinnawala Elephants Watching Tour Worth It from Kandy?",
        description: "An honest look at the private guided Pinnawala elephants watching tour from Kandy.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1305594/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Pinnawala is home to one of the largest herds of captive elephants in the world, and watching them at the river bathing or at the orphanage gives a genuine wildlife encounter distinct from Kandy's temple-focused sightseeing — worth researching the specific operator's elephant welfare practices before booking.",
            tourCard: { slug: "pinnawala-elephants-watching-private-guided-tour", title: "Pinnawala Elephants Watching Private Guided Tour from Kandy", description: "A private guided tour to watch elephants at Pinnawala.", price: "From $21", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1305594/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Ask your operator specifically about the facility's elephant welfare practices before booking, since standards vary across different elephant venues in Sri Lanka.",
          },
        ],
        faqs: [
          { q: "Is the Pinnawala elephants tour worth it from Kandy?", a: "Yes, for a genuine wildlife encounter distinct from Kandy's temple sightseeing — confirm the specific facility's welfare practices first." },
        ],
      };

    case "is-village-walk-cooking-experience-worth-it-kandy":
      return {
        title: "Is the Village Walk and Cooking Experience with a Local Family Worth It in Kandy?",
        description: "An honest look at Kandy's village walk and cooking experience with a local family.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1306091/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Walking through a rural village before cooking with a local family gives genuine everyday-life context that a standalone cooking class doesn't — a more immersive, home-based format distinct from the city's other cooking class.",
            tourCard: { slug: "kandy-village-walk-cooking-experience-with-local", title: "Kandy: Village Walk & Cooking Experience with Local Family", description: "A village walk paired with a cooking experience in a local family's home.", price: "From $26", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1306091/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Come with an appetite and be ready to help with the cooking — this is a hands-on, home-based experience, not a restaurant demo.",
          },
        ],
        faqs: [
          { q: "Is the village walk and cooking experience worth it in Kandy?", a: "Yes, for a more immersive, home-based alternative to the city's standalone cooking class, with genuine everyday village life context." },
        ],
      };

    case "is-wood-carving-workshop-worth-it-kandy":
      return {
        title: "Is the Kandy Wood Carving and Hand-Painting Workshop Worth It?",
        description: "An honest look at the Kandy wood carving and hand-painting workshop with a local artisan.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1306091/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Kandy is one of Sri Lanka's traditional craft centers, and this workshop teaches genuine wood carving and hand-painting technique from a local artisan, worth it for travelers wanting a real hands-on craft skill and a tangible souvenir rather than buying a finished piece from a shop.",
            tourCard: { slug: "kandy-wood-carving-and-hand-painting-workshop-with-a-local-artisan", title: "Kandy Wood Carving and Hand-Painting Workshop with a Local Artisan", description: "A hands-on wood carving and hand-painting workshop with a local Kandy artisan.", price: "From $35", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1306091/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Your finished piece needs time to dry before packing — ask the artisan how long to wait before wrapping it for travel.",
          },
        ],
        faqs: [
          { q: "Is the wood carving workshop worth it in Kandy?", a: "Yes, for a genuine hands-on craft skill and a real souvenir, rather than buying a finished carving from a shop." },
        ],
      };

    case "is-hanthana-pekoe-trail-hike-worth-it-kandy":
      return {
        title: "Is the Hanthana Pekoe Trail to Galaha Hiking Tour Worth It in Kandy?",
        description: "An honest look at the Hanthana Pekoe Trail to Galaha hiking tour from Kandy.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1306091/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This stretch of the Pekoe Trail from Hanthana to Galaha covers tea-estate ridgelines close to Kandy itself, worth it specifically for travelers who want a real hiking day without the longer commitment of the Knuckles range or a full Pekoe Trail stage further out.",
            tourCard: { slug: "from-kandy-hanthana-pekoe-trail-to-galaha-hiking", title: "From Kandy: Hanthana Pekoe Trail to Galaha Hiking Tour", description: "A guided hike along the Hanthana Pekoe Trail from Kandy to Galaha.", price: "From $43", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1306091/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Wear sturdy footwear with grip — the tea-estate terrain can be uneven and slippery after rain.",
          },
        ],
        faqs: [
          { q: "Is the Hanthana Pekoe Trail hike worth it from Kandy?", a: "Yes, specifically for travelers wanting a real but manageable hiking day close to the city, without the longer Knuckles range commitment." },
        ],
      };

    case "is-village-hiking-waterfalls-worth-it-kandy":
      return {
        title: "Is the Kandy Village Hiking Tour with Waterfalls Worth It?",
        description: "An honest look at the Kandy village hiking tour covering waterfalls and local encounters.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1306091/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Combining a village hike with waterfall stops and genuine local encounters gives a fuller, more active day than the village walk and cooking experience alone, worth it specifically for travelers who want real physical activity alongside the cultural contact.",
            tourCard: { slug: "kandy-village-hiking-tour-waterfalls-local", title: "Kandy Village Hiking Tour: Waterfalls & Local Encounters", description: "A guided village hiking tour covering waterfalls and local encounters near Kandy.", price: "From $43", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1306091/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Pack a swimsuit and a change of clothes if you want to get in the water at the waterfall stops.",
          },
        ],
        faqs: [
          { q: "Is the village hiking tour with waterfalls worth it in Kandy?", a: "Yes, for travelers wanting real physical activity alongside genuine local village contact, more active than the standard village walk." },
        ],
      };

    case "is-roti-cooking-class-worth-it-kandy":
      return {
        title: "Is the Sri Lankan Roti Cooking Class and Tasting Experience Worth It in Kandy?",
        description: "An honest look at the Sri Lankan roti cooking class and tasting experience in Kandy.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1306091/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This class focuses specifically on Sri Lankan roti varieties rather than a full rice-and-curry spread, worth it for travelers who want to learn one specific, repeatable dish they can actually recreate at home rather than a broader but shallower cooking lesson.",
            tourCard: { slug: "kandy-sri-lankan-roti-cooking-class-tasting", title: "Kandy: Sri Lankan Roti Cooking Class & Tasting Experience", description: "A focused Sri Lankan roti cooking class and tasting experience in Kandy.", price: "From $34", duration: "6 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1306091/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "If you want a broader introduction to Sri Lankan cuisine beyond roti, the city's standard rice-and-curry cooking class is the better fit instead.",
          },
        ],
        faqs: [
          { q: "Is the roti cooking class worth it in Kandy?", a: "Yes, specifically for travelers wanting to learn one dish well enough to recreate it at home, rather than a broader but shallower lesson." },
        ],
      };

    case "is-night-wildlife-tea-plantation-worth-it-kandy":
      return {
        title: "Is the Night Wildlife Adventure with Tea Plantation Visit Worth It?",
        description: "An honest look at the Kandy night wildlife adventure with tea plantation visit.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1479320/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Spotting nocturnal wildlife on a guided night walk, paired with a daytime tea plantation visit, gives a genuinely different angle on the hill country's ecosystem than the standard daytime safari or temple circuit, worth it for travelers curious about what comes out after dark.",
            tourCard: { slug: "kandy-night-wildlife-adventure-with-tea", title: "Kandy: Night Wildlife Adventure with Tea Plantation Visit", description: "A night wildlife adventure combined with a tea plantation visit in Kandy.", price: "From $1014", duration: "Full day", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1479320/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Wear dark, insect-repellent-treated clothing for the night walk, and bring a light jacket for the cooler plantation air.",
          },
        ],
        faqs: [
          { q: "Is the night wildlife adventure with tea plantation visit worth it in Kandy?", a: "Yes, for travelers curious about nocturnal wildlife, giving a genuinely different angle than the standard daytime safari or temple circuit." },
        ],
      };

    case "is-train-photography-experience-worth-it-kandy":
      return {
        title: "Is the Iconic Train Photography Experience Worth It from Kandy?",
        description: "An honest look at the Kandy iconic train photography experience to/from Ella.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1256815/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Getting positioned at the right spots along the Kandy-Ella railway for the classic shots of the train winding through tea country gives a genuinely more deliberate, photo-focused experience than just riding the train yourself, worth it for travelers chasing specific iconic shots.",
            tourCard: { slug: "kandy-iconic-train-photography-experience-tofrom", title: "Kandy: Iconic Train Photography Experience To/From Ella", description: "A train photography experience along the Kandy-Ella railway route.", price: "From $1013", duration: "Full day", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1256815/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Bring a zoom lens if you have one, since the best train shots are often taken from a distance across the tea estates.",
          },
        ],
        faqs: [
          { q: "Is the train photography experience worth it from Kandy?", a: "Yes, for travelers specifically chasing the classic iconic shots of the train in tea country, beyond just riding it themselves." },
        ],
      };

    case "is-wilpattu-safari-worth-it-kandy":
      return {
        title: "Is the Wilpattu Safari Worth It from Kandy?",
        description: "An honest look at the all-inclusive half/full day Wilpattu Safari from Kandy.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1179564/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Wilpattu, Sri Lanka's largest national park, gets a fraction of Yala's crowds while offering genuine leopard sighting potential around its natural lakes, worth it for travelers wanting a quieter safari alternative to the more commercialized parks closer to the south coast.",
            tourCard: { slug: "from-kandy-all-inclusive-halffull-day-wilpattu", title: "From Kandy: All Inclusive Half/Full Day Wilpattu Safari", description: "An all-inclusive half or full day Wilpattu Safari from Kandy.", price: "From $528", duration: "Full day", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1179564/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Choose the full-day option if sightings matter to you, since more time in the park genuinely improves your odds.",
          },
        ],
        faqs: [
          { q: "Is the Wilpattu Safari worth it from Kandy?", a: "Yes, for travelers wanting a quieter, less crowded safari alternative to Yala with genuine leopard sighting potential." },
        ],
      };

    case "is-8day-floating-resort-luxury-tour-worth-it-kandy":
      return {
        title: "Is the 8-Day Luxury Sri Lanka Tour with Floating Resort Stay Worth It?",
        description: "An honest look at the 8-day luxury Sri Lanka tour with a floating resort stay.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1327364/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "A night at a floating resort is a genuinely unusual accommodation experience that few Sri Lanka itineraries include, making this 8-day luxury tour stand out from standard hotel-based packages at a similar price point.",
            tourCard: { slug: "sri-lanka-8-day-luxury-tour-with-floating-resort", title: "Sri Lanka: 8-Day Luxury Tour with Floating Resort Stay", description: "An 8-day luxury Sri Lanka tour including a stay at a floating resort.", price: "From $6760", duration: "8 days", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1327364/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Confirm exactly how many nights are spent at the floating resort versus standard hotels, since it's the standout feature of this particular package.",
          },
        ],
        faqs: [
          { q: "Is the 8-day luxury tour with floating resort stay worth it?", a: "Yes, for travelers wanting a genuinely unusual accommodation experience that distinguishes this package from standard hotel-based luxury tours." },
        ],
      };

    case "is-10day-peaks-beaks-tour-worth-it-kandy":
      return {
        title: "Is the Sri Lanka 10-Day Peaks & Beaks Tour Worth It?",
        description: "An honest look at the 10-day Peaks & Beaks tour with entry and adventure fees included.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-947552/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This 10-day tour combines hill-country peaks with birdwatching ('beaks') stops, a genuinely different framing than the standard cultural-triangle-and-beach itinerary, with entry and adventure fees already bundled in.",
            tourCard: { slug: "sri-lanka10-day-peaks-beaks-tour-entry-adventures", title: "Sri Lanka:10-Day Peaks & Beaks Tour -Entry & Adventures Fees", description: "A 10-day tour combining hill-country peaks and birdwatching, with entry and adventure fees included.", price: "From $3443", duration: "10 days", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-947552/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Bring binoculars if birdwatching genuinely interests you, since the itinerary's birding stops reward travelers who come prepared.",
          },
        ],
        faqs: [
          { q: "Is the 10-day Peaks & Beaks tour worth it?", a: "Yes, for travelers wanting a genuinely different mix of hill-country peaks and birdwatching, with fees already bundled into the price." },
        ],
      };

    case "is-3day-mahiyanganaya-wildlife-yala-worth-it-kandy":
      return {
        title: "Is the 3-Day Mahiyanganaya Wildlife, Waterfalls & Culture Tour Worth It?",
        description: "An honest look at the 3-day Mahiyanganaya wildlife, waterfalls, and culture tour with a Yala drop-off.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1186213/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Mahiyanganaya's wildlife and waterfalls sit well off the standard Kandy-to-south-coast route, and ending with a Yala drop-off makes productive use of what would otherwise be a transfer day.",
            tourCard: { slug: "3-day-mahiyanganaya-wildlife-waterfalls-culture", title: "3-Day Mahiyanganaya Wildlife, Waterfalls, Culture, Yala Drop", description: "A 3-day tour covering Mahiyanganaya's wildlife, waterfalls, and culture, ending with a Yala drop-off.", price: "From $1657", duration: "3 days", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1186213/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Confirm the exact Yala drop-off timing if you have a safari booked there afterward, so the connection lines up.",
          },
        ],
        faqs: [
          { q: "Is the 3-day Mahiyanganaya wildlife and waterfalls tour worth it?", a: "Yes, for travelers wanting a genuinely off-route stop with wildlife and waterfalls, while making productive use of the transfer to Yala." },
        ],
      };

    case "is-9day-ceylon-honeymoon-worth-it-kandy":
      return {
        title: "Is the Ceylon 9-Day Budget Hill Country & Tropical Beach Honeymoon Worth It?",
        description: "An honest look at the 9-day budget Ceylon honeymoon covering hill country and tropical beaches.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1249752/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Covering both the cool hill country and warm tropical beaches in one 9-day honeymoon, at a genuinely budget-conscious price point, makes this a practical option for couples who want range without the luxury-tour price tag.",
            tourCard: { slug: "ceylon-9-day-budget-hill-country-tropical-beach", title: "Ceylon: 9-Day Budget Hill Country & Tropical Beach Honeymoon", description: "A 9-day budget honeymoon covering Sri Lanka's hill country and tropical beaches.", price: "From $2419", duration: "9 days", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1249752/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Check which hotels are included at the budget tier, since 'budget' honeymoon packages can vary significantly in comfort level between operators.",
          },
        ],
        faqs: [
          { q: "Is the 9-day budget Ceylon honeymoon worth it?", a: "Yes, for couples wanting both hill country and tropical beaches covered at a genuinely budget-conscious price point." },
        ],
      };

    case "is-snakehead-fishing-worth-it-kandy":
      return {
        title: "Is the Snakehead Fishing Tour at Deduru Oya Worth It from Kandy?",
        description: "An honest look at the full-day snakehead fishing tour at Deduru Oya, a niche fishing activity outside Kandy's usual hiking and temple circuit.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1433296/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This is a genuinely specialized fishing trip targeting snakehead, a prized catch among anglers, worth it specifically for fishing enthusiasts wanting a real sporting activity rather than another hike or temple visit from Kandy.",
            tourCard: { slug: "kandy-full-day-snakehead-fishing-tour-at-deduru", title: "Kandy: Full-Day Snakehead Fishing Tour at Deduru Oya", description: "A full-day snakehead fishing tour at Deduru Oya from Kandy.", price: "From $331", duration: "1 day", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1433296/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Confirm whether gear is provided or you need your own, since equipment requirements can vary genuinely by operator." },
        ],
        faqs: [
          { q: "Is the snakehead fishing tour worth it from Kandy?", a: "Yes, for genuine fishing enthusiasts wanting a specialized sporting activity, distinct from the area's usual hikes and temple visits." }
        ],
      };

    case "is-sembuwatta-hunas-falls-worth-it-kandy":
      return {
        title: "Is the Sembuwatta Lake and Hunas Falls Tuk-Tuk Tour Worth It from Kandy?",
        description: "An honest look at the private tuk-tuk tour to Sembuwatta Lake and Hunas Falls, a scenic highland combination outside Kandy.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1379027/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Sembuwatta Lake's turquoise water and Hunas Falls' cascading drop give a genuinely scenic highland pairing, and doing it by private tuk-tuk adds an authentically local, open-air way to travel between the two that a closed vehicle can't match.",
            tourCard: { slug: "kandy-sembuwatta-lake-hunas-falls-private-tuk-tuk", title: "Kandy: Sembuwatta Lake & Hunas Falls Private Tuk-Tuk Tour", description: "A private tuk-tuk tour to Sembuwatta Lake and Hunas Falls from Kandy.", price: "From $288", duration: "Half day", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1379027/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Bring a light jacket — the highland elevation around Sembuwatta genuinely runs cooler than Kandy itself." },
        ],
        faqs: [
          { q: "Is the Sembuwatta Lake and Hunas Falls tuk-tuk tour worth it from Kandy?", a: "Yes, for a genuinely scenic highland pairing experienced the authentic, open-air way by tuk-tuk." }
        ],
      };

    case "is-hidden-tea-heritage-tuktuk-worth-it-kandy":
      return {
        title: "Is the Hidden Tea & Heritage Tuk-Tuk Tour Worth It in Kandy?",
        description: "An honest look at Kandy's hidden tea and heritage tuk-tuk tour, a locally driven route to lesser-known tea estates and heritage sites.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1376176/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This genuinely bypasses the big-name tea factories most visitors see, routing instead to lesser-known estates and heritage stops by tuk-tuk, worth it for travelers wanting a more local, off-the-main-track tea country experience.",
            tourCard: { slug: "kandy-hidden-tea-heritage-tuk-tuk-tour", title: "Kandy: Hidden Tea & Heritage Tuk-Tuk Tour", description: "A tuk-tuk tour to lesser-known tea estates and heritage sites around Kandy.", price: "From $305", duration: "Half day", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1376176/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Ask your driver about the estates' harvest season if tea picking itself is something you want to genuinely witness." },
        ],
        faqs: [
          { q: "Is the hidden tea and heritage tuk-tuk tour worth it in Kandy?", a: "Yes, for travelers wanting a genuinely more local, off-the-main-track alternative to the big-name tea factory visits." }
        ],
      };

    case "is-mountain-biking-tea-trails-worth-it-kandy":
      return {
        title: "Is Mountain Biking Around the Tea Trails Worth It in Kandy?",
        description: "An honest look at the mountain biking tour through Kandy's surrounding tea trails, an active alternative to standard tea country sightseeing.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1065259/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Covering the tea trails by mountain bike gives a genuinely more active, immersive way to experience the hills than a seated vehicle tour, worth it for travelers wanting a physical, outdoor activity woven into Kandy's tea-growing scenery.",
            tourCard: { slug: "mountain-biking-around-tea-trails-tour-in-kandy", title: "Mountain Biking Around Tea Trails Tour in Kandy", description: "A mountain biking tour through tea trails around Kandy.", price: "From $389", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1065259/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A reasonable fitness level genuinely helps here, since the terrain includes real hill climbs through the tea estates." },
        ],
        faqs: [
          { q: "Is mountain biking around the tea trails worth it in Kandy?", a: "Yes, for travelers wanting a genuinely more active, immersive way to experience the tea-growing hills than a seated vehicle tour." }
        ],
      };

    case "is-kanawiddagala-yahangala-worth-it-kandy":
      return {
        title: "Is the Kanawiddagala and Yahangala Twin Peak Hike Worth It from Kandy?",
        description: "An honest look at the Kanawiddagala and Yahangala twin peak hike, a lesser-known trekking alternative to the heavily trafficked Knuckles routes.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sl-1008052/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "These twin peaks see genuinely far fewer trekkers than the popular Knuckles Mountain Range routes, giving a quieter hiking experience with real summit views, worth it for travelers wanting a less crowded alternative to Kandy's best-known hikes.",
            tourCard: { slug: "from-kandy-kanawiddagala-and-yahangala-twin-peak", title: "From Kandy: Kanawiddagala and Yahangala Twin Peak Hike", description: "A guided twin peak hike to Kanawiddagala and Yahangala from Kandy.", price: "From $426", duration: "1 day", image: "https://images.asiabylocals.com/asiabylocals/tours/sl-1008052/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Expect a genuinely demanding full-day hike — confirm your fitness level matches the trek's difficulty before booking." },
        ],
        faqs: [
          { q: "Is the Kanawiddagala and Yahangala twin peak hike worth it from Kandy?", a: "Yes, for hikers wanting a genuinely quieter, less crowded alternative to Kandy's popular Knuckles Mountain Range routes." }
        ],
      };

    case "is-gombaniya-peak-hike-worth-it-kandy":
      return {
        title: "Is the Gombaniya Peak Knuckles Range Guided Hike Worth It from Kandy?",
        description: "An honest look at the Gombaniya Peak guided hike in the Knuckles Range from Kandy.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, for hikers wanting another genuinely quiet summit option within the Knuckles Range beyond the more commonly booked routes — Gombaniya Peak sees far less traffic than the main Knuckles trails while still delivering real mountain views.",
            tourCard: { slug: "from-kandy-gombaniya-peak-knuckles-range-guided", title: "From Kandy: Gombaniya Peak Knuckles range guided hike.", description: "A guided hike to Gombaniya Peak in the Knuckles Range from Kandy.", price: "From $314", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg" },
          },
          {
            title: "Practical Tips",
            content: "As with other Knuckles routes, this is a genuinely demanding day hike — confirm fitness expectations with the guide before booking." },
        ],
        faqs: [
          { q: "Is the Gombaniya Peak hike worth it from Kandy?", a: "Yes, for hikers wanting a quieter Knuckles Range summit hike with fewer other trekkers on the trail." }
        ],
      };

    case "is-tedo-7-waterfalls-hike-worth-it-kandy":
      return {
        title: "Is the Tedo 7 Waterfalls Peak Adventure Worth It from Kandy?",
        description: "An honest look at the Tedo 7 Waterfalls Peak Adventure in the Knuckles Mountain Range.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, if chasing multiple waterfalls in one hike appeals — this route strings together seven separate waterfalls along a single trail in the Knuckles range, a genuinely different structure from the single-peak summit hikes most Knuckles tours offer.",
            tourCard: { slug: "tedo-7-waterfalls-peak-adventure-knuckles", title: "Tedo 7 Waterfalls Peak Adventure – Knuckles Mountain Range", description: "A guided hike through seven waterfalls in the Knuckles Mountain Range.", price: "From $415", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Trail conditions near waterfalls get slippery, especially in wet season, so proper hiking footwear matters more here than on dry ridge routes." },
        ],
        faqs: [
          { q: "Is the Tedo 7 Waterfalls hike worth it from Kandy?", a: "Yes, for hikers wanting a waterfall-focused route through the Knuckles range rather than a single-summit hike." }
        ],
      };

    case "is-kitulgala-abseiling-worth-it-kandy":
      return {
        title: "Is the Kandy Kitulgala Abseiling Adventure Worth It?",
        description: "An honest look at Kandy's Kitulgala abseiling adventure with a Nuwara Eliya drop-off.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, if abseiling down a genuine waterfall sounds appealing — Kitulgala is known for white-water rafting, but this tour swaps that for abseiling down its waterfalls, a distinctly different adrenaline activity, with a convenient drop-off in Nuwara Eliya afterward.",
            tourCard: { slug: "kandy-kitulgala-abseiling-adventure-nuwara-eliya", title: "Kandy: Kitulgala Abseiling Adventure & Nuwara Eliya Drop-off", description: "An abseiling adventure at Kitulgala's waterfalls with a Nuwara Eliya drop-off.", price: "From $314", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg" },
          },
          {
            title: "Practical Tips",
            content: "The Nuwara Eliya drop-off makes this ideal if you're heading into the hill country next rather than returning to Kandy, so plan your route accordingly." },
        ],
        faqs: [
          { q: "Is the Kitulgala abseiling adventure worth it from Kandy?", a: "Yes, for travelers wanting a waterfall abseiling thrill distinct from Kitulgala's more commonly booked white-water rafting." }
        ],
      };

    case "is-exclusive-knuckles-camping-worth-it-kandy":
      return {
        title: "Is the Exclusive Knuckles Camping Tour Worth It from Kandy?",
        description: "An honest look at the exclusive overnight camping tour in the Knuckles Mountain Range from Kandy.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, if you want to actually sleep in the Knuckles range rather than hike it in a single day — camping overnight means sunrise and sunset views most day-hikers never see, plus a genuinely quieter mountain experience after other visitors leave.",
            tourCard: { slug: "exclusive-knuckles-camping-tour-from-kandy", title: "Exclusive knuckles Camping Tour from kandy", description: "An overnight camping tour in the Knuckles Mountain Range from Kandy.", price: "From $372", duration: "Overnight", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Nights in the Knuckles range get genuinely cold even though Sri Lanka is tropical, so pack warmer layers than you'd expect to need." },
        ],
        faqs: [
          { q: "Is the exclusive Knuckles camping tour worth it from Kandy?", a: "Yes, for travelers wanting sunrise and sunset views in the Knuckles range and a quieter overnight mountain experience." }
        ],
      };

    case "is-ayurvedic-wellness-tuktuk-worth-it-kandy":
      return {
        title: "Is the Kandy Ayurvedic Wellness Tour by Tuk-Tuk Worth It?",
        description: "An honest look at Kandy's Ayurvedic wellness tour, traveling by tuk-tuk between stops.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, if you want genuine traditional Sri Lankan wellness practices rather than a generic spa day — this tour covers Ayurvedic treatments and knowledge specifically, getting between stops by tuk-tuk for a more local, relaxed pace than a standard car tour.",
            tourCard: { slug: "kandy-ayurvedic-wellness-tour-by-tuk-tuk", title: "Kandy: Ayurvedic Wellness Tour by Tuk-Tuk", description: "An Ayurvedic wellness tour in Kandy, traveling by tuk-tuk.", price: "From $240", duration: "Half day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Mention any specific health concerns to your guide in advance, since genuine Ayurvedic consultations can be tailored to individual needs.",
          },
        ],
        faqs: [
          { q: "Is the Ayurvedic wellness tour by tuk-tuk worth it in Kandy?", a: "Yes, for travelers wanting genuine traditional Sri Lankan wellness practices at a relaxed, local pace." },
        ],
      };

    case "is-train-pool-club-day-tour-worth-it-kandy":
      return {
        title: "Is the Kandy Train and Pool Club Day Tour Worth It?",
        description: "An honest look at Kandy's day tour combining a scenic train ride with a pool club visit.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, if you want to pair scenic sightseeing with genuine relaxation — this combines a train ride through the hill country with time at a pool club, a far more laid-back day than Kandy's usual temple-and-hike circuit.",
            tourCard: { slug: "from-kandy-train-and-pool-club-day-tour-with", title: "From kandy Train, and Pool Club Day Tour with Pickup", description: "A day tour combining a scenic train ride with a pool club visit from Kandy, with pickup included.", price: "From $254", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Bring a swimsuit and towel for the pool club portion, and check the train schedule in advance since Sri Lanka's rail network runs limited departures.",
          },
        ],
        faqs: [
          { q: "Is the train and pool club day tour worth it in Kandy?", a: "Yes, for travelers wanting a relaxed mix of scenic train sightseeing and genuine downtime, distinct from the usual temple-and-hike pace." },
        ],
      };

    case "is-hanthana-lizards-back-hike-worth-it-kandy":
      return {
        title: "Is the Kandy Hanthana Lizard's Back Hike Worth It?",
        description: "An honest look at the Hanthana Lizard's Back ridge hike near Kandy.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, for hikers wanting a genuinely close, lesser-known trek without traveling far from the city — Lizard's Back is a distinctive rocky ridge formation in the Hanthana range, offering real summit views within easy reach of Kandy.",
            tourCard: { slug: "kandy-hanthana-lizards-back-hike", title: "Kandy: Hanthana Lizard's Back Hike", description: "A guided hike to the Lizard's Back ridge in the Hanthana range near Kandy.", price: "From $203", duration: "Half day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg" },
          },
          {
            title: "Practical Tips",
            content: "The ridge's distinctive rock formation makes for a genuinely good photo spot, so bring a camera for the summit.",
          },
        ],
        faqs: [
          { q: "Is the Hanthana Lizard's Back hike worth it from Kandy?", a: "Yes, for hikers wanting a genuinely close, distinctive ridge hike without traveling far from the city." },
        ],
      };

    case "is-five-peaks-cloud-forest-worth-it-kandy":
      return {
        title: "Is the Kandy Five Peaks Cloud Forest Adventure Worth It?",
        description: "An honest look at Kandy's Five Peaks cloud forest adventure trek.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, for hikers wanting genuine cloud forest scenery across multiple summits — this adventure covers five distinct peaks in a misty, high-altitude forest setting, a longer and more demanding trek than Kandy's shorter ridge hikes.",
            tourCard: { slug: "kandy-five-peaks-cloud-forest-adventure", title: "Kandy: Five Peaks Cloud Forest Adventure", description: "A multi-peak cloud forest trek near Kandy.", price: "From $246", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Pack layers — cloud forest conditions mean genuinely cool, often misty weather even when Kandy itself is warm." },
        ],
        faqs: [
          { q: "Is the Five Peaks cloud forest adventure worth it in Kandy?", a: "Yes, for hikers wanting a longer, more demanding trek across genuine multi-peak cloud forest terrain." }
        ],
      };

    default:
      return null;
  }
}
