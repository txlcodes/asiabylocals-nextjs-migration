// Ella authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getEllaInfoContent() -> getCityInfoContent().
//
// Every tourCard slug is taken from the live tour list for this city.
import type { CityInfoData } from './cityInfoContent';


const TOUR_CARD_ELLA_SAFARI = {
  slug: "yala-national-park-leopard-safari-day-trip-from-ella",
  title: "Yala National Park Leopard Safari Day Trip from Ella",
  price: 70,
  image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788462418/asiabylocals/tours/from-ella-yala-national-park-leopard-safari-tour/img0.jpg",
};

export function getEllaInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    case "nine-arch-bridge-guide":
      return {
        title: "The Nine Arch Bridge, Ella: How to Get There and When the Train Crosses",
        seoTitle: "Nine Arch Bridge Ella Guide",
        description: "Where to walk in from, what the train timetable actually is, the best viewpoints, and the story about the bridge being built without steel.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368885/asiabylocals/tours/from-ella-waterfalls-abseiling-adventure-thrill-nature/img0.jpg",
        fastFacts: [
          { icon: "map", label: "Walk from Ella town", value: "About 20-25 minutes downhill through tea" },
          { icon: "train", label: "Trains cross", value: "Roughly every 2 hours; ask at Ella station for the day's times" },
          { icon: "ticket", label: "Cost", value: "Free — there is no ticket" },
          { icon: "info", label: "Built", value: "During the First World War, in stone and brick" },
          { icon: "mountain", label: "Span", value: "About 91 m long, 24 m high, nine arches" },
          { icon: "clock", label: "Best time", value: "Before 8am — after that it is busy" },
        ],
        sections: [
          {
            title: "The Nine Arch Bridge, Ella: How to Get There and When the Train Crosses",
            icon: "train",
            content: "The Nine Arch Bridge is a 91-metre stone viaduct standing 24 metres above a gorge between Ella and Demodara, and it is the single most photographed structure in Sri Lanka.\n\nThe reason it is made of stone and brick rather than steel is the interesting part, and the version most guides tell is roughly true. Construction began under the British around 1919, and the steel that had been earmarked for the bridge was requisitioned for the war effort in Europe. Rather than wait, the work was completed in solid stone, brick and cement, with no steel in the structure at all. A local builder named P. K. Appuhami is widely credited with leading the work, and Sri Lankans tell the story with some pride.\n\nIt still carries the daily trains on the Badulla line, which is what makes it worth standing under rather than just looking at. A train crossing a stone viaduct in the middle of tea country, with jungle on both sides, is the image that put Ella on most people's list.\n\nThere is no ticket and no official viewing area. You walk in, stand where you like, and wait.",
            tourCard: {
              slug: "ella-waterfall-abseiling-adventure-hotel-pickup",
              title: "Ella Waterfall Abseiling Adventure with Hotel Pickup",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 57.71",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368885/asiabylocals/tours/from-ella-waterfalls-abseiling-adventure-thrill-nature/img0.jpg",
            },
          },
          {
            title: "Getting there: three routes in",
            icon: "map",
            content: "The usual walk starts in Ella town near the Kithalella road and drops through tea and jungle for about 20 to 25 minutes. It is downhill on the way in, which means it is uphill on the way back, in heat — worth knowing before you set off in flip-flops.\n\nThe second route is from the Demodara side, which is quieter and comes out at the far end of the bridge. Tuk-tuks will run you there for a few hundred rupees and it saves the climb back.\n\nThe third is along the railway track itself from Ella station, which many people do and which is technically walking on a live line. Trains are infrequent and slow here and locals use the track as a footpath, but it is not risk-free and it is not something to do with children or headphones on.\n\nThere are cafés on the hillside above the bridge with terraces overlooking it. They charge for a drink rather than for the view, and on a hot morning that is a fair trade.\n\nThe path gets slippery in the wet season. Trainers rather than sandals.",
            tourCard: {
              slug: "ella-to-kandy-guided-transfer-with-nuwara-eliya-ramboda-falls",
              title: "Ella to Kandy Guided Transfer with Nuwara Eliya, Ramboda Falls and Peradeniya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 60.67",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375678/asiabylocals/tours/ella-to-kandy-transfer-with-lakes-falls-botanical-garden/img0.jpg",
            },
          },
          {
            title: "When the train actually crosses",
            icon: "clock",
            content: "This is the question everyone gets wrong, because the published timetable and reality are different things.\n\nTrains cross roughly every two hours through the day on the Badulla line, and Sri Lanka Railways runs late as a matter of routine — delays of 30 to 90 minutes are normal rather than exceptional. Any blog post listing exact crossing times is quoting a timetable, not observing the bridge.\n\nThe reliable method is to ask at Ella station on the morning you plan to go. Staff will tell you what is expected and roughly how late it is running, and locals near the bridge track it too. Allow a generous margin and treat the wait as part of the visit.\n\nEarly morning is the best window for two reasons: the light comes across the valley rather than into your lens, and the crowds are small. By ten there can be several hundred people on and around the bridge, plus drone operators, and the atmosphere changes completely.\n\nIf you are riding the train from Nanu Oya, you cross the bridge on the way into Ella. You cannot photograph it from on board in any useful way — that is what the walk is for.",
            tourCard: {
              slug: "ella-to-kandy-transfer-with-the-hill-country-train-ride-and-nuwara-eliya",
              title: "Ella to Kandy Transfer with the Hill Country Train Ride and Nuwara Eliya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 65.95",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375778/asiabylocals/tours/ella-kandy-transfer-with-train-ride-nuwara-eliya-tour/img0.jpg",
            },
          },
          {
            title: "Where to stand, and drones",
            icon: "eye",
            content: "There are three positions and they give different pictures.\n\nUnder the bridge, on the grass at the base of the arches, gives you the scale and the classic upward shot with the train small along the top. This is where most people end up.\n\nOn the hillside above the northern end, where the cafés are, you get the full nine-arch profile with the train crossing left to right and jungle behind. This is the postcard.\n\nOn the bridge itself is the one people should think twice about. You can walk across it and people do, but it is a working railway with no walkway and no railing, and the deck is narrow. When a train comes, there is very little room. Every year there are close calls here, and there have been deaths on Sri Lankan railway lines involving people photographing themselves. Get off well before the train arrives, not as it does.\n\nDrone use is common and is not clearly regulated at the bridge. It also ruins the experience for everyone standing underneath, and locals have started objecting. If you fly one, fly it briefly and early.",
            tourCard: {
              slug: "ella-waterfall-abseiling-adventure-hotel-pickup",
              title: "Ella Waterfall Abseiling Adventure with Hotel Pickup",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 57.71",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368885/asiabylocals/tours/from-ella-waterfalls-abseiling-adventure-thrill-nature/img0.jpg",
            },
          },
          {
            title: "What else is within an hour",
            icon: "map",
            content: "The bridge takes an hour including the walk and the wait, so pair it with the rest of Ella rather than making a morning of it alone.\n\n[Little Adam's Peak](/sri-lanka/ella/little-adams-peak-and-ella-rock) is the other essential and the easier of the two walks — about 45 minutes up a stepped path with the best view in the area, out through the gap in the hills towards the southern plain. Go at dawn; by nine it is a queue for the same photograph.\n\nElla Rock is the harder one: three hours return, badly signed, and genuinely easy to get lost on. Take a guide or take Little Adam's Peak.\n\nRavana Falls is ten minutes south by tuk-tuk, a broad 25-metre cascade beside the road named after the demon king of the Ramayana who is said to have hidden Sita in the caves above it. Abseiling operators run down waterfalls in the same valley.\n\nThe Demodara Loop, where the line spirals under itself to gain height, is a genuine piece of engineering curiosity a few minutes further on and almost nobody visits it.",
            tourCard: {
              slug: "udawalawe-to-kandy-private-transfer-via-ella-the-nine-arch-bridge",
              title: "Udawalawe to Kandy Private Transfer via Ella, the Nine Arch Bridge and Nuwara Eliya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 98.93",
              duration: "12 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375996/asiabylocals/tours/from-udawalawe-to-kandy-transfer-with-sightseeing-stops/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "How do you get to the Nine Arch Bridge from Ella?", a: "A 20-25 minute walk downhill from Ella town through tea and jungle — which means uphill on the way back, in heat. A tuk-tuk to the Demodara side is quieter and saves the climb. Walking the railway track from Ella station is common but it is a live line." },
          { q: "What time does the train cross the Nine Arch Bridge?", a: "Roughly every two hours, but Sri Lanka Railways runs 30-90 minutes late as a matter of routine, so any blog quoting exact times is quoting a timetable rather than reality. Ask at Ella station on the morning — staff will tell you what is expected and how late it is." },
          { q: "Is there an entrance fee for the Nine Arch Bridge?", a: "No. There is no ticket and no official viewing area — you walk in and stand where you like. Cafés on the hillside above charge for a drink rather than the view." },
          { q: "Can you walk on the Nine Arch Bridge?", a: "People do, but it is a working railway with no walkway and no railing, and the deck is narrow. Get off well before a train is due rather than as it arrives. There have been deaths on Sri Lankan lines involving people photographing themselves." },
          { q: "Why was the Nine Arch Bridge built without steel?", a: "Construction began around 1919 and the steel earmarked for it was requisitioned for the First World War effort. Rather than wait, the builders completed it in solid stone, brick and cement with no steel in the structure. A local builder, P. K. Appuhami, is widely credited with leading the work." },
          { q: "What is the best time to visit the Nine Arch Bridge?", a: "Before 8am. The light comes across the valley rather than into your lens, and by ten there can be several hundred people on and around it. The path is also cooler and less slippery early." },
          { q: "How long does a visit take?", a: "About an hour including the walk in, the wait for a train and the walk back up. Pair it with Little Adam's Peak at dawn and Ravana Falls in the afternoon for a full day in Ella." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How do you get to the Nine Arch Bridge from Ella?", acceptedAnswer: { "@type": "Answer", text: "A 20-25 minute walk downhill from Ella town through tea and jungle — which means uphill on the way back, in heat. A tuk-tuk to the Demodara side is quieter and saves the climb. Walking the railway track from Ella station is common but it is a live line." } },
            { "@type": "Question", name: "What time does the train cross the Nine Arch Bridge?", acceptedAnswer: { "@type": "Answer", text: "Roughly every two hours, but Sri Lanka Railways runs 30-90 minutes late as a matter of routine, so any blog quoting exact times is quoting a timetable rather than reality. Ask at Ella station on the morning — staff will tell you what is expected and how late it is." } },
            { "@type": "Question", name: "Is there an entrance fee for the Nine Arch Bridge?", acceptedAnswer: { "@type": "Answer", text: "No. There is no ticket and no official viewing area — you walk in and stand where you like. Cafés on the hillside above charge for a drink rather than the view." } },
            { "@type": "Question", name: "Can you walk on the Nine Arch Bridge?", acceptedAnswer: { "@type": "Answer", text: "People do, but it is a working railway with no walkway and no railing, and the deck is narrow. Get off well before a train is due rather than as it arrives. There have been deaths on Sri Lankan lines involving people photographing themselves." } },
            { "@type": "Question", name: "Why was the Nine Arch Bridge built without steel?", acceptedAnswer: { "@type": "Answer", text: "Construction began around 1919 and the steel earmarked for it was requisitioned for the First World War effort. Rather than wait, the builders completed it in solid stone, brick and cement with no steel in the structure. A local builder, P. K. Appuhami, is widely credited with leading the work." } },
            { "@type": "Question", name: "What is the best time to visit the Nine Arch Bridge?", acceptedAnswer: { "@type": "Answer", text: "Before 8am. The light comes across the valley rather than into your lens, and by ten there can be several hundred people on and around it. The path is also cooler and less slippery early." } },
            { "@type": "Question", name: "How long does a visit take?", acceptedAnswer: { "@type": "Answer", text: "About an hour including the walk in, the wait for a train and the walk back up. Pair it with Little Adam's Peak at dawn and Ravana Falls in the afternoon for a full day in Ella." } },
          ],
        },
      };

    case "little-adams-peak-and-ella-rock":
      return {
        title: "Little Adam's Peak and Ella Rock: Which Walk to Do and How Hard They Are",
        seoTitle: "Little Adam's Peak & Ella Rock",
        description: "The two Ella walks compared honestly: 45 minutes on steps versus three hours of unsigned tracks, and why most people should take the first.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368885/asiabylocals/tours/from-ella-waterfalls-abseiling-adventure-thrill-nature/img0.jpg",
        fastFacts: [
          { icon: "mountain", label: "Little Adam's Peak", value: "45 min up, stepped path, suitable for most" },
          { icon: "mountain", label: "Ella Rock", value: "3 hours return, unsigned, easy to get lost" },
          { icon: "clock", label: "Best start", value: "Dawn — both are exposed and hot by nine" },
          { icon: "ticket", label: "Cost", value: "Both free; a guide for Ella Rock is USD 10-20" },
          { icon: "info", label: "Little Adam's Peak height", value: "About 1,141 m" },
          { icon: "info", label: "Ella Rock height", value: "About 1,041 m, but a much longer approach" },
        ],
        sections: [
          {
            title: "Little Adam's Peak and Ella Rock: Which Walk to Do and How Hard They Are",
            icon: "mountain",
            content: "Ella has two walks and most itineraries list them as if they are comparable. They are not.\n\nLittle Adam's Peak is 45 minutes up a mostly stepped path from the edge of town, suitable for anyone reasonably mobile including children, and it delivers the best view in the area — out through the Ella Gap towards the southern plain, with tea on every slope in between. It is one of the highest returns on effort anywhere in Sri Lanka.\n\nElla Rock is three hours return, largely unsigned, follows a railway line for part of the way and then a series of unmarked tea-estate paths, and it is genuinely easy to get lost on. People do get lost on it, regularly, and locals appear at junctions offering to guide you for a fee — which is sometimes helpful and sometimes a shakedown.\n\nBoth are free. Neither has water or shade at the top.\n\nIf you have one morning in Ella, take Little Adam's Peak and use the time you saved on the [Nine Arch Bridge](/sri-lanka/ella/nine-arch-bridge-guide). If you want a proper half-day walk and you take a guide, Ella Rock is a good one.",
            tourCard: {
              slug: "ella-waterfall-abseiling-adventure-hotel-pickup",
              title: "Ella Waterfall Abseiling Adventure with Hotel Pickup",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 57.71",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368885/asiabylocals/tours/from-ella-waterfalls-abseiling-adventure-thrill-nature/img0.jpg",
            },
          },
          {
            title: "Little Adam's Peak, step by step",
            icon: "sunrise",
            content: "The path starts about 15 minutes' walk from Ella town centre, off the Passara road near the Flower Garden hotel, and it is signed from there. Tuk-tuks will drop you at the trailhead for a few hundred rupees if you want to skip the road section.\n\nFrom the trailhead it is a gentle climb through tea estates on a made path, then a set of concrete steps for the final section. Forty-five minutes at a comfortable pace, less if you push. The steps are the only real effort and they are short.\n\nThe summit is a series of connected knolls — most people stop at the first, but walking on to the second and third takes ten more minutes and empties out considerably. There is a swing and a zip line operator up there, which some find fun and others find intrusive.\n\nGo at dawn. The path faces east, sunrise over the Ella Gap is the reason to be there, and by nine there is a queue for the same photograph. It is also 15 degrees cooler at six than at ten.\n\nTake water. There is a stall at the bottom and nothing above it.",
            tourCard: {
              slug: "ella-waterfall-abseiling-adventure-hotel-pickup",
              title: "Ella Waterfall Abseiling Adventure with Hotel Pickup",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 57.71",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368885/asiabylocals/tours/from-ella-waterfalls-abseiling-adventure-thrill-nature/img0.jpg",
            },
          },
          {
            title: "Ella Rock, and why people get lost",
            icon: "mountain",
            content: "The standard route starts at Ella railway station, follows the track southwest for about 20 minutes, crosses a small bridge, and then leaves the line onto a path through tea and eucalyptus before climbing to the summit ridge.\n\nThe getting-lost happens at the point where you leave the railway. There is no sign, there are several plausible paths, and the correct one is not the obvious one. From there the route crosses estate land where paths branch constantly.\n\nWhat this means practically: either take a guide, download an offline map with the route on it before you go, or accept that you will probably be steered by a local who then asks for money. None of those is unreasonable; arriving with none of them is how people end up wandering tea slopes for four hours.\n\nThe walk itself is not technically hard — it is a long uphill on rough ground, three hours return at a moderate pace. The summit is open grass with a big view back over Ella and the Gap.\n\nWalking the railway is part of the standard route and locals use the line constantly. Trains are slow and infrequent here, but stay off the sleepers and listen.",
            tourCard: {
              slug: "ella-to-kandy-guided-transfer-with-nuwara-eliya-ramboda-falls",
              title: "Ella to Kandy Guided Transfer with Nuwara Eliya, Ramboda Falls and Peradeniya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 60.67",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375678/asiabylocals/tours/ella-to-kandy-transfer-with-lakes-falls-botanical-garden/img0.jpg",
            },
          },
          {
            title: "What to take, and when not to go",
            icon: "info",
            content: "Shoes with grip for both. The tea-estate paths on Ella Rock and the upper steps on Little Adam's Peak are slippery after rain, and Ella gets afternoon rain in most months.\n\nAt least a litre of water each, more for Ella Rock. There is nothing to buy on either route once you leave town.\n\nStart at first light. Both walks are exposed, this is the tropics, and the difference between 6am and 10am is not marginal.\n\nLeeches appear on the Ella Rock route in the wet season, mostly in the wooded section. Long socks deal with them.\n\nDo not do Ella Rock in poor visibility. The summit route crosses open ground with steep drops and the path is hard enough to follow in clear weather.\n\nBoth walks are fine to do alone in terms of safety, and both are done by hundreds of people a week. The risk on Ella Rock is navigational, not personal.",
            tourCard: {
              slug: "udawalawe-to-kandy-private-transfer-via-ella-the-nine-arch-bridge",
              title: "Udawalawe to Kandy Private Transfer via Ella, the Nine Arch Bridge and Nuwara Eliya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 98.93",
              duration: "12 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375996/asiabylocals/tours/from-udawalawe-to-kandy-transfer-with-sightseeing-stops/img0.jpg",
            },
          },
          {
            title: "Fitting the walks into an Ella stay",
            icon: "clock",
            content: "Two nights in Ella is the right length and it maps neatly onto the two mornings.\n\nMorning one: Little Adam's Peak at dawn, back for breakfast, then the [Nine Arch Bridge](/sri-lanka/ella/nine-arch-bridge-guide) mid-morning when a train is due. Afternoon at Ravana Falls or abseiling in the same valley, both ten minutes south.\n\nMorning two: Ella Rock with a guide, back by lunch, and an afternoon doing nothing — which after several days of Sri Lankan driving is a legitimate use of a day.\n\nIf you have one night, take Little Adam's Peak and the bridge and skip Ella Rock without regret.\n\nElla is small: one main street, walkable end to end in ten minutes, with everything else within a few kilometres by tuk-tuk. It is also the most backpacker-heavy place in Sri Lanka, which is either part of the appeal or a reason to stay a few kilometres out.\n\nGuided versions of these walks, if you would rather not navigate Ella Rock alone: [Little Adam's Peak at sunrise](/sri-lanka/ella/little-adams-peak-sunrise-hike-from-ella-with-a-local-guide) or [at sunset](/sri-lanka/ella/little-adams-peak-sunset-hike-from-ella-with-a-local-guide), [Ella Rock with the Nine Arch Bridge and Ravana Falls](/sri-lanka/ella/ella-rock-guided-hike-with-the-nine-arch-bridge-and-ravana-falls), [Ella Rock with a spice garden and Little Adam's Peak](/sri-lanka/ella/ella-rock-a-spice-garden-and-little-adams-peak-full-day-tour), and [both peaks plus the bridge and Halpewatte](/sri-lanka/ella/ella-peaks-all-inclusive-day-trip-both-walks-the-bridge-and-halpewatte).\n\nFor a longer walk, [Pekoe Trail Stage 16 runs Ella to Demodara via the Nine Arch Bridge](/sri-lanka/ella/pekoe-trail-stage-16-guided-hike-ella-to-demodara-via-the-nine-arch). Further afield, [Horton Plains and World's End with the train to Ohiya](/sri-lanka/ella/horton-plains-and-worlds-end-from-ella-with-the-train-to-ohiya) and its [private version](/sri-lanka/ella/private-horton-plains-tour-from-ella-with-the-scenic-train-to-ohiya) are the other serious walks reachable from Ella.",
            tourCard: {
              slug: "ella-to-kandy-transfer-with-the-hill-country-train-ride-and-nuwara-eliya",
              title: "Ella to Kandy Transfer with the Hill Country Train Ride and Nuwara Eliya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 65.95",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375778/asiabylocals/tours/ella-kandy-transfer-with-train-ride-nuwara-eliya-tour/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "How hard is Little Adam's Peak?", a: "Easy. About 45 minutes up a mostly stepped path from the edge of town, suitable for most fitness levels and for children. The concrete steps at the end are the only real effort and they are short." },
          { q: "How long does Ella Rock take?", a: "About three hours return at a moderate pace. It is not technically hard but the route is largely unsigned, crosses estate land where paths branch constantly, and people get lost on it regularly." },
          { q: "Do I need a guide for Ella Rock?", a: "Take one, or an offline map with the route loaded. The critical point is where the path leaves the railway line — there is no sign and the correct path is not the obvious one. Locals appear at junctions offering to guide you, which is sometimes helpful and sometimes a shakedown." },
          { q: "Which is better, Little Adam's Peak or Ella Rock?", a: "Little Adam's Peak for almost everyone: a fraction of the effort for arguably the better view, out through the Ella Gap. Ella Rock is worth it if you want a proper half-day walk and you take a guide." },
          { q: "What time should I start?", a: "First light. Both walks are exposed with no shade at the top, this is the tropics, and by nine Little Adam's Peak has a queue for the same photograph. It is also considerably cooler." },
          { q: "Is it safe to walk the railway line to Ella Rock?", a: "It is the standard route and locals use the line constantly — trains here are slow and infrequent. Stay off the sleepers, listen, and do not walk it with headphones on. The real risk on Ella Rock is navigational rather than personal." },
          { q: "Are the walks free?", a: "Yes, both. There is no ticket for either. A guide for Ella Rock runs roughly USD 10-20, and there is a stall at the bottom of Little Adam's Peak but nothing above it — carry water." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How hard is Little Adam's Peak?", acceptedAnswer: { "@type": "Answer", text: "Easy. About 45 minutes up a mostly stepped path from the edge of town, suitable for most fitness levels and for children. The concrete steps at the end are the only real effort and they are short." } },
            { "@type": "Question", name: "How long does Ella Rock take?", acceptedAnswer: { "@type": "Answer", text: "About three hours return at a moderate pace. It is not technically hard but the route is largely unsigned, crosses estate land where paths branch constantly, and people get lost on it regularly." } },
            { "@type": "Question", name: "Do I need a guide for Ella Rock?", acceptedAnswer: { "@type": "Answer", text: "Take one, or an offline map with the route loaded. The critical point is where the path leaves the railway line — there is no sign and the correct path is not the obvious one. Locals appear at junctions offering to guide you, which is sometimes helpful and sometimes a shakedown." } },
            { "@type": "Question", name: "Which is better, Little Adam's Peak or Ella Rock?", acceptedAnswer: { "@type": "Answer", text: "Little Adam's Peak for almost everyone: a fraction of the effort for arguably the better view, out through the Ella Gap. Ella Rock is worth it if you want a proper half-day walk and you take a guide." } },
            { "@type": "Question", name: "What time should I start?", acceptedAnswer: { "@type": "Answer", text: "First light. Both walks are exposed with no shade at the top, this is the tropics, and by nine Little Adam's Peak has a queue for the same photograph. It is also considerably cooler." } },
            { "@type": "Question", name: "Is it safe to walk the railway line to Ella Rock?", acceptedAnswer: { "@type": "Answer", text: "It is the standard route and locals use the line constantly — trains here are slow and infrequent. Stay off the sleepers, listen, and do not walk it with headphones on. The real risk on Ella Rock is navigational rather than personal." } },
            { "@type": "Question", name: "Are the walks free?", acceptedAnswer: { "@type": "Answer", text: "Yes, both. There is no ticket for either. A guide for Ella Rock runs roughly USD 10-20, and there is a stall at the bottom of Little Adam's Peak but nothing above it — carry water." } },
          ],
        },
      };

    case "ella-city-guide":
      return {
        title: "Ella Guide: What to Do, Where It Gets Busy and How Long to Stay",
        seoTitle: "Ella Guide, Sri Lanka",
        description: "A guide to Ella: the two walks, the Nine Arch Bridge, Ravana Falls, the tea estates, and an honest word about how crowded the town has become.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368885/asiabylocals/tours/from-ella-waterfalls-abseiling-adventure-thrill-nature/img0.jpg",
        fastFacts: [
          { icon: "clock", label: "How long to stay", value: "Two nights; one if you are only doing the bridge" },
          { icon: "map", label: "Altitude", value: "About 1,041 m — cool nights, warm days" },
          { icon: "map", label: "Town size", value: "One main street, walkable end to end in 10 minutes" },
          { icon: "train", label: "Reached by", value: "The hill line from Nanu Oya, about 4 hours" },
          { icon: "info", label: "Busiest", value: "December to March; book ahead" },
          { icon: "mountain", label: "The two walks", value: "Little Adam's Peak (easy), Ella Rock (hard)" },
        ],
        sections: [
          {
            title: "Ella Guide: What to Do, Where It Gets Busy and How Long to Stay",
            icon: "map",
            content: "Ella is a single street in a gap between two ridges, at just over a thousand metres, surrounded by tea. Twenty years ago it was a few guesthouses. It is now the most concentrated backpacker town in Sri Lanka, and that is the first thing an honest guide should say.\n\nWhat has not changed is why people come. The gap the town sits in — the Ella Gap — opens south towards the plain, and on a clear morning you can see a long way from almost anywhere above the town. The walking is genuinely good and starts from the street. The train arrives across a stone viaduct through jungle. The tea estates begin at the edge of town.\n\nWhat has changed is the density. The main street is cafés, tour desks and hostels, prices are noticeably higher than anywhere else in the hill country, and the two headline sights have crowds on them by mid-morning.\n\nBoth things are true at once. Ella earns its reputation and it is not a quiet mountain village. Staying a few kilometres out, and doing everything before nine in the morning, gets you most of the first and very little of the second.",
            tourCard: {
              slug: "ella-waterfall-abseiling-adventure-hotel-pickup",
              title: "Ella Waterfall Abseiling Adventure with Hotel Pickup",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 57.71",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368885/asiabylocals/tours/from-ella-waterfalls-abseiling-adventure-thrill-nature/img0.jpg",
            },
          },
          {
            title: "The essential four",
            icon: "sparkles",
            content: "[Little Adam's Peak](/sri-lanka/ella/little-adams-peak-and-ella-rock). Forty-five minutes up a stepped path from the edge of town, the best view in the area out through the Ella Gap, and easy enough for most people and for children. Go at dawn.\n\nThe [Nine Arch Bridge](/sri-lanka/ella/nine-arch-bridge-guide). A 91-metre stone viaduct 24 metres above a gorge, built without steel during the First World War because the steel went to Europe. A 20-minute walk down from town, free, and best before eight when the light is right and the crowd is not there yet. Trains cross roughly every two hours and run late as a matter of routine — ask at the station.\n\nRavana Falls. A broad 25-metre cascade beside the road ten minutes south, named after the demon king of the Ramayana who is said to have hidden Sita in the caves above it. Roadside, so easy, and busy for the same reason.\n\nElla Rock. Three hours return, unsigned, and easy to get lost on. Worth it with a guide, skippable without one.\n\nBeyond those: waterfall abseiling in the Ravana valley, a working tea factory, and the Demodara Loop where the railway spirals under itself to gain height.",
            tourCard: {
              slug: "ella-waterfall-abseiling-adventure-hotel-pickup",
              title: "Ella Waterfall Abseiling Adventure with Hotel Pickup",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 57.71",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368885/asiabylocals/tours/from-ella-waterfalls-abseiling-adventure-thrill-nature/img0.jpg",
            },
          },
          {
            title: "Tea, and where to actually see it made",
            icon: "leaf",
            content: "Ella sits in the Uva province tea district, which produces a distinct style — Uva teas are grown with a dry seasonal wind blowing across them from June to September, and the resulting leaf has a character tasters can identify blind.\n\nThere are working factories within a few kilometres, and a proper visit walks you from the withering troughs through rolling, oxidation and firing to the grading table in about forty-five minutes. The point is not the tasting at the end but the explanation of why one bush produces six graded products that sell at wildly different prices.\n\nFactories close on poya days, the monthly full moons, which catches people out. If your one free day is a poya, an estate walk with a plucker is the substitute and is arguably more interesting anyway.\n\nThe plucking itself happens in the morning. Walking out into the estates before nine, you will see the work being done; by afternoon the slopes are empty.\n\nBuy tea at a factory rather than in town if you want the good grades. The shops on the main street sell to visitors at visitor prices.",
            tourCard: {
              slug: "ella-to-kandy-guided-transfer-with-nuwara-eliya-ramboda-falls",
              title: "Ella to Kandy Guided Transfer with Nuwara Eliya, Ramboda Falls and Peradeniya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 60.67",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375678/asiabylocals/tours/ella-to-kandy-transfer-with-lakes-falls-botanical-garden/img0.jpg",
            },
          },
          {
            title: "Eating and staying",
            icon: "utensils",
            content: "Ella's main street is the most internationalised food in Sri Lanka outside Colombo — smoothie bowls, pizza, banana pancakes. It is fine, it is not why you came, and it costs two to three times what the same meal costs elsewhere in the country.\n\nThe better eating is the rice and curry at the small local places set back from the strip, and the roti stalls. Kottu in the evening, as everywhere. Buffalo curd with treacle for dessert.\n\nOn accommodation, the practical advice is to stay slightly out. Guesthouses on the slopes above town and along the Passara road are quieter, cooler at night, usually have the view, and are five minutes by tuk-tuk from the street. Places on the main strip are convenient and loud.\n\nBook ahead between December and March. Ella fills up in a way most Sri Lankan towns do not, and the good-value places go first.\n\nNights are cool at 1,000 metres — not cold like Nuwara Eliya, but you will want a layer after dark, and few places have heating or hot water that is reliably hot.",
            tourCard: {
              slug: "udawalawe-to-kandy-private-transfer-via-ella-the-nine-arch-bridge",
              title: "Udawalawe to Kandy Private Transfer via Ella, the Nine Arch Bridge and Nuwara Eliya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 98.93",
              duration: "12 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375996/asiabylocals/tours/from-udawalawe-to-kandy-transfer-with-sightseeing-stops/img0.jpg",
            },
          },
          {
            title: "How long, and what Ella is not",
            icon: "clock",
            content: "Two nights is right. That gives you two dawns, which is what the town is for: [Little Adam's Peak](/sri-lanka/ella/little-adams-peak-and-ella-rock) on one and either Ella Rock or the bridge on the other, with afternoons for the falls, a tea factory or nothing.\n\nOne night works if you arrive on the afternoon train, do the bridge that evening and Little Adam's Peak at dawn before moving on. It is tight but common.\n\nThree nights is only worth it if you are walking seriously or genuinely want to stop moving, which after the standard Sri Lankan loop is a real thing to want.\n\nWhat Ella is not: a base for the south coast (Mirissa is four hours), a base for safari (Udawalawe is two hours and is better done on the way out), or a quiet retreat. It is a small, busy, beautifully-sited walking town, and taken as that it is one of the best stops in the country.\n\nThe single best piece of planning advice: whatever you do here, do it before nine in the morning.",
            tourCard: {
              slug: "ella-to-kandy-transfer-with-the-hill-country-train-ride-and-nuwara-eliya",
              title: "Ella to Kandy Transfer with the Hill Country Train Ride and Nuwara Eliya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 65.95",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375778/asiabylocals/tours/ella-kandy-transfer-with-train-ride-nuwara-eliya-tour/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "How many days do you need in Ella?", a: "Two nights. That gives you two dawns — Little Adam's Peak on one, the Nine Arch Bridge or Ella Rock on the other — with afternoons for Ravana Falls, a tea factory or nothing. One night works if you arrive on the afternoon train." },
          { q: "Is Ella too touristy?", a: "It is the most concentrated backpacker town in Sri Lanka and the main street is cafés and tour desks. That is real. The walking, the tea country and the setting are also real. Staying a few kilometres out and doing everything before nine gets you the good half." },
          { q: "What is the best thing to do in Ella?", a: "Little Adam's Peak at dawn — 45 minutes up a stepped path for the best view in the area, out through the Ella Gap. The Nine Arch Bridge is the other essential, best before eight when the light works and the crowds have not arrived." },
          { q: "Is Ella cold at night?", a: "Cool rather than cold at just over 1,000 metres — you will want a layer after dark, but nothing like Nuwara Eliya at 1,900 m. Few guesthouses have heating, and hot water is not always reliably hot." },
          { q: "Where should I stay in Ella?", a: "Slightly out of town. Guesthouses on the slopes above and along the Passara road are quieter, cooler, usually have the view, and are five minutes by tuk-tuk from the street. Book ahead December to March." },
          { q: "Can I visit a tea factory from Ella?", a: "Yes, several are within a few kilometres, and a proper visit takes about 45 minutes from the withering troughs to the grading table. They close on poya days — if your free day is a full moon, take an estate walk instead." },
          { q: "Is Ella a good base for the south coast or a safari?", a: "No. Mirissa is about four hours away and Udawalawe two, and both are better done on the way out rather than as day trips. Ella is a walking town — treat it as one." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How many days do you need in Ella?", acceptedAnswer: { "@type": "Answer", text: "Two nights. That gives you two dawns — Little Adam's Peak on one, the Nine Arch Bridge or Ella Rock on the other — with afternoons for Ravana Falls, a tea factory or nothing. One night works if you arrive on the afternoon train." } },
            { "@type": "Question", name: "Is Ella too touristy?", acceptedAnswer: { "@type": "Answer", text: "It is the most concentrated backpacker town in Sri Lanka and the main street is cafés and tour desks. That is real. The walking, the tea country and the setting are also real. Staying a few kilometres out and doing everything before nine gets you the good half." } },
            { "@type": "Question", name: "What is the best thing to do in Ella?", acceptedAnswer: { "@type": "Answer", text: "Little Adam's Peak at dawn — 45 minutes up a stepped path for the best view in the area, out through the Ella Gap. The Nine Arch Bridge is the other essential, best before eight when the light works and the crowds have not arrived." } },
            { "@type": "Question", name: "Is Ella cold at night?", acceptedAnswer: { "@type": "Answer", text: "Cool rather than cold at just over 1,000 metres — you will want a layer after dark, but nothing like Nuwara Eliya at 1,900 m. Few guesthouses have heating, and hot water is not always reliably hot." } },
            { "@type": "Question", name: "Where should I stay in Ella?", acceptedAnswer: { "@type": "Answer", text: "Slightly out of town. Guesthouses on the slopes above and along the Passara road are quieter, cooler, usually have the view, and are five minutes by tuk-tuk from the street. Book ahead December to March." } },
            { "@type": "Question", name: "Can I visit a tea factory from Ella?", acceptedAnswer: { "@type": "Answer", text: "Yes, several are within a few kilometres, and a proper visit takes about 45 minutes from the withering troughs to the grading table. They close on poya days — if your free day is a full moon, take an estate walk instead." } },
            { "@type": "Question", name: "Is Ella a good base for the south coast or a safari?", acceptedAnswer: { "@type": "Answer", text: "No. Mirissa is about four hours away and Udawalawe two, and both are better done on the way out rather than as day trips. Ella is a walking town — treat it as one." } },
          ],
        },
      };

    case "getting-to-ella":
      return {
        title: "Getting to Ella: The Train, the Road, and Which One to Take",
        seoTitle: "Getting to Ella, Sri Lanka",
        description: "Kandy, Nuwara Eliya, Colombo or the south coast to Ella: real journey times, the train booking window, and the luggage problem nobody mentions.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375778/asiabylocals/tours/ella-kandy-transfer-with-train-ride-nuwara-eliya-tour/img0.jpg",
        fastFacts: [
          { icon: "train", label: "Nanu Oya to Ella by train", value: "About 4 hours — the scenic section" },
          { icon: "train", label: "Kandy to Ella by train", value: "6-7 hours scheduled, routinely later" },
          { icon: "car", label: "Kandy to Ella by road", value: "140 km, 4-5 hours" },
          { icon: "car", label: "Colombo to Ella by road", value: "About 6 hours" },
          { icon: "ticket", label: "Reserved seats", value: "Open 30 days ahead; sell out in hours Dec-Mar" },
          { icon: "info", label: "Nuwara Eliya station", value: "There isn't one — use Nanu Oya, 10 km away" },
        ],
        sections: [
          {
            title: "Getting to Ella: The Train, the Road, and Which One to Take",
            icon: "train",
            content: "Almost everyone arrives in Ella by train, and almost everyone should — but not necessarily for the whole journey.\n\nThe hill line runs Kandy to Nanu Oya to Ella to Badulla, and the section people photograph is the last one: Nanu Oya to Ella, about four hours through the highest tea estates on the island, crossing the [Nine Arch Bridge](/sri-lanka/ella/nine-arch-bridge-guide) on the way in. The first half, Kandy to Nanu Oya, is pleasant and unremarkable, and it takes two to three hours.\n\nThat is the whole decision. If you have time and want the full six to seven hours of it, ride from Kandy. If you would rather see Ramboda Falls, a working tea factory and Nuwara Eliya on the way, drive that half with stops and pick the train up at Nanu Oya. Most people who have done both recommend the second.\n\nThe train is slow, frequently late, and one of the best rail journeys anywhere. Treat it as the day's activity rather than as transport, and it never disappoints. Treat it as a way to get somewhere by a certain time and it will.",
            tourCard: {
              slug: "ella-to-kandy-transfer-with-the-hill-country-train-ride-and-nuwara-eliya",
              title: "Ella to Kandy Transfer with the Hill Country Train Ride and Nuwara Eliya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 65.95",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375778/asiabylocals/tours/ella-kandy-transfer-with-train-ride-nuwara-eliya-tour/img0.jpg",
            },
          },
          {
            title: "Booking: the 30-day window and what to do when you miss it",
            icon: "ticket",
            content: "Reserved seats — first, second and third class — open exactly 30 days before departure. Between December and March they sell out within hours of opening. If you want a guaranteed seat you need to be organised a month ahead or book through an agent who does it for you.\n\nMissing that window is normal and it is not a disaster. Unreserved second and third class are sold at the station on the day and are never sold out, because there is no seat limit — people stand. This is where the open doorways are, where you can sit on the steps with your legs out, and where nearly every photograph you have seen of this train was taken.\n\nFirst class observation carriages are the trap. Air conditioning, sealed windows, rear-facing seats, no door access. Comfortable, and the wrong choice for a journey whose entire point is the view.\n\nIf you take unreserved, be on the platform 30 to 45 minutes early for any chance of a seat, and accept that you may stand for four hours. Most people end up saying it was better that way.",
            tourCard: {
              slug: "ella-to-kandy-transfer-with-the-hill-country-train-ride-and-nuwara-eliya",
              title: "Ella to Kandy Transfer with the Hill Country Train Ride and Nuwara Eliya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 65.95",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375778/asiabylocals/tours/ella-kandy-transfer-with-train-ride-nuwara-eliya-tour/img0.jpg",
            },
          },
          {
            title: "The luggage problem",
            icon: "info",
            content: "This is the practical detail that ruins the ride for people who did not plan for it.\n\nUnreserved carriages are crowded and there is nowhere sensible to put a large suitcase. You will be standing in a doorway for hours with a bag you cannot put down, and the romance of the open door disappears very quickly.\n\nIf you have a driver, the standard and correct arrangement is that the car takes your luggage on to Ella by road while you ride with a day bag. Every driver in Sri Lanka understands this request and most will suggest it themselves.\n\nWithout a driver, the options are to travel light, to use the luggage van if the service has one, or to book a reserved seat where there is at least a rack. Guesthouses in Ella and Nanu Oya will also hold or forward bags for a fee.\n\nOne more: Nuwara Eliya has no railway station. The stop is Nanu Oya, 10 kilometres and a 20-30 minute drive from the town, and tuk-tuk fares there rise sharply the moment a train arrives.",
            tourCard: {
              slug: "ella-to-kandy-guided-transfer-with-nuwara-eliya-ramboda-falls",
              title: "Ella to Kandy Guided Transfer with Nuwara Eliya, Ramboda Falls and Peradeniya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 60.67",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375678/asiabylocals/tours/ella-to-kandy-transfer-with-lakes-falls-botanical-garden/img0.jpg",
            },
          },
          {
            title: "By road, from every direction",
            icon: "car",
            content: "Kandy to Ella is 140 kilometres and four to five hours. The road climbs to Nuwara Eliya then drops, and it bends continuously — take something if you are prone to motion sickness.\n\nColombo to Ella is about six hours and is a long day; almost nobody does it in one go and almost nobody should.\n\nNuwara Eliya to Ella is about two hours, and it is the shortest useful leg on the hill route.\n\nFrom the south coast, Mirissa or Galle to Ella is four to five hours through Udawalawe country, which is why a safari stop on the way makes sense in either direction.\n\nUdawalawe to Ella is two hours and pairs naturally with a morning game drive.\n\nA car with a driver runs roughly USD 55-75 a day including fuel. For a one-way move, a guided transfer with stops costs little more than a plain transfer and turns five hours of driving into the day's sightseeing — which on this particular route, past Ramboda Falls and the tea estates, is worth doing.",
            tourCard: {
              slug: "udawalawe-to-kandy-private-transfer-via-ella-the-nine-arch-bridge",
              title: "Udawalawe to Kandy Private Transfer via Ella, the Nine Arch Bridge and Nuwara Eliya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 98.93",
              duration: "12 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375996/asiabylocals/tours/from-udawalawe-to-kandy-transfer-with-sightseeing-stops/img0.jpg",
            },
          },
          {
            title: "Onward from Ella",
            icon: "map",
            content: "Ella is the natural hinge of a Sri Lankan loop, and where you go next largely decides the shape of the trip.\n\nSouth to Udawalawe and the coast is the standard continuation: a morning safari at Udawalawe, two hours on, and you are at Mirissa or Tangalle by mid-afternoon. This is the route most seven-day itineraries take.\n\nNorth back to Kandy is four to five hours and is worth doing as a guided transfer with Nuwara Eliya, a tea factory and Ramboda Falls built in, rather than as a plain drive.\n\nEast to Arugam Bay is about three hours and is the right call between May and September, when the east coast is the dry side of the island and the south is not.\n\nThe train continues to Badulla, an hour further, which almost no visitors do and which is a quiet, pleasant hour if you want the line to yourself.\n\nWhichever direction, book transport the day before. Ella is small and the good drivers are busy.\n\nThe better way to move on is to make the transfer the day out. Rather than paying for a car that only drives, these stop at things on the route: [Ella to Kandy via Nuwara Eliya and Ramboda Falls](/sri-lanka/ella/ella-to-kandy-guided-transfer-with-nuwara-eliya-ramboda-falls), [Ella to Kandy via a Vedda village and a home lunch](/sri-lanka/ella/ella-to-kandy-transfer-via-a-vedda-village-waterfalls-and-a-home-lunch), [Ella to Nuwara Eliya with Hakgala Gardens](/sri-lanka/ella/ella-to-nuwara-eliya-guided-transfer-with-hakgala-gardens-and-seetha), [Ella to Sigiriya via a Vedda village](/sri-lanka/ella/ella-to-sigiriya-private-transfer-via-a-vedda-village-and-mahiyanganaya), [Ella to Trincomalee](/sri-lanka/ella/ella-to-trincomalee-guided-transfer-via-mahiyanganaya-and-a-vedda), [Ella to Arugam Bay with waterfalls and temples](/sri-lanka/ella/ella-to-arugam-bay-guided-transfer-with-waterfalls-temples), [Ella to Tissamaharama](/sri-lanka/ella/ella-to-tissamaharama-guided-transfer-with-waterfalls-and-buduruwagala) and [Ella to Udawalawe](/sri-lanka/ella/ella-to-udawalawe-guided-transfer-with-waterfalls-a-spice-garden).\n\nArriving rather than leaving: [Udawalawe to Ella](/sri-lanka/ella/udawalawe-to-ella-guided-transfer-with-buduruwagala-and-the-waterfalls) and [Tissamaharama to Ella](/sri-lanka/ella/tissamaharama-to-ella-guided-transfer-with-buduruwagala) run the same routes in reverse.",
            tourCard: {
              slug: "udawalawe-to-kandy-private-transfer-via-ella-the-nine-arch-bridge",
              title: "Udawalawe to Kandy Private Transfer via Ella, the Nine Arch Bridge and Nuwara Eliya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 98.93",
              duration: "12 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375996/asiabylocals/tours/from-udawalawe-to-kandy-transfer-with-sightseeing-stops/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "Should I take the train from Kandy or from Nanu Oya?", a: "From Nanu Oya, for most people. The scenic section is Nanu Oya to Ella, about four hours; the Kandy to Nanu Oya half is pleasant but ordinary and takes two to three hours. Drive that half with stops at Ramboda Falls and a tea factory instead." },
          { q: "How far ahead do I need to book the Ella train?", a: "Reserved seats open exactly 30 days before departure and sell out within hours between December and March. Unreserved second and third class are sold on the day and always available — you will stand, which is where the open doorways and the photographs are." },
          { q: "Is first class worth it on the Ella train?", a: "No. The observation carriage has sealed windows, air conditioning and rear-facing seats, and you cannot reach the open doorways. It is the most comfortable and the worst choice for the view." },
          { q: "What do I do with my luggage on the train?", a: "If you have a driver, send it ahead by road — every driver understands this and most suggest it. Otherwise travel light or book a reserved seat with a rack. Unreserved carriages are crowded with nowhere to put a suitcase, and standing for four hours holding one is miserable." },
          { q: "How long is Kandy to Ella by road?", a: "140 km and four to five hours — the road climbs to Nuwara Eliya then drops, bending continuously. A guided transfer with Ramboda Falls, a tea factory and Nuwara Eliya built in costs little more than a plain one and turns the drive into the day." },
          { q: "Which station do I use for Nuwara Eliya?", a: "Nanu Oya, about 10 km and a 20-30 minute drive from the town. Nuwara Eliya has no station of its own. Tuk-tuk fares at Nanu Oya rise sharply the moment a train arrives." },
          { q: "Where should I go after Ella?", a: "South is the standard continuation — a morning safari at Udawalawe two hours away, then on to the south coast by mid-afternoon. East to Arugam Bay is the right call from May to September, when the east is the dry side of the island." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Should I take the train from Kandy or from Nanu Oya?", acceptedAnswer: { "@type": "Answer", text: "From Nanu Oya, for most people. The scenic section is Nanu Oya to Ella, about four hours; the Kandy to Nanu Oya half is pleasant but ordinary and takes two to three hours. Drive that half with stops at Ramboda Falls and a tea factory instead." } },
            { "@type": "Question", name: "How far ahead do I need to book the Ella train?", acceptedAnswer: { "@type": "Answer", text: "Reserved seats open exactly 30 days before departure and sell out within hours between December and March. Unreserved second and third class are sold on the day and always available — you will stand, which is where the open doorways and the photographs are." } },
            { "@type": "Question", name: "Is first class worth it on the Ella train?", acceptedAnswer: { "@type": "Answer", text: "No. The observation carriage has sealed windows, air conditioning and rear-facing seats, and you cannot reach the open doorways. It is the most comfortable and the worst choice for the view." } },
            { "@type": "Question", name: "What do I do with my luggage on the train?", acceptedAnswer: { "@type": "Answer", text: "If you have a driver, send it ahead by road — every driver understands this and most suggest it. Otherwise travel light or book a reserved seat with a rack. Unreserved carriages are crowded with nowhere to put a suitcase, and standing for four hours holding one is miserable." } },
            { "@type": "Question", name: "How long is Kandy to Ella by road?", acceptedAnswer: { "@type": "Answer", text: "140 km and four to five hours — the road climbs to Nuwara Eliya then drops, bending continuously. A guided transfer with Ramboda Falls, a tea factory and Nuwara Eliya built in costs little more than a plain one and turns the drive into the day." } },
            { "@type": "Question", name: "Which station do I use for Nuwara Eliya?", acceptedAnswer: { "@type": "Answer", text: "Nanu Oya, about 10 km and a 20-30 minute drive from the town. Nuwara Eliya has no station of its own. Tuk-tuk fares at Nanu Oya rise sharply the moment a train arrives." } },
            { "@type": "Question", name: "Where should I go after Ella?", acceptedAnswer: { "@type": "Answer", text: "South is the standard continuation — a morning safari at Udawalawe two hours away, then on to the south coast by mid-afternoon. East to Arugam Bay is the right call from May to September, when the east is the dry side of the island." } },
          ],
        },
      };

    case "best-time-to-visit-ella":
      return {
        title: "Best Time to Visit Ella: Cloud, Rain and the Months the View Disappears",
        seoTitle: "Best Time to Visit Ella",
        description: "Ella sits between Sri Lanka's two monsoons and gets rain from both. When the Ella Gap view is reliable, when the hills are in cloud, and what to expect month by month.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368885/asiabylocals/tours/from-ella-waterfalls-abseiling-adventure-thrill-nature/img0.jpg",
        fastFacts: [
          { icon: "calendar-days", label: "Clearest views", value: "January to March" },
          { icon: "calendar-days", label: "Uva's dry wind season", value: "June to September — dry but hazy and windy" },
          { icon: "calendar-days", label: "Wettest", value: "October to December" },
          { icon: "calendar-days", label: "Temperature", value: "Around 16-27C; cool nights year-round" },
          { icon: "cloud", label: "The real risk", value: "Cloud, not rain — it hides the Gap view" },
          { icon: "calendar-days", label: "Busiest", value: "December to March; book ahead" },
        ],
        sections: [
          {
            title: "Best Time to Visit Ella: Cloud, Rain and the Months the View Disappears",
            icon: "calendar-days",
            content: "Ella is in Uva province, on the eastern flank of the central highlands, and it sits awkwardly between Sri Lanka's two monsoon systems. The southwest monsoon, which soaks Colombo and the west from May to September, mostly spends itself on the far side of the mountains before it gets here. The northeast monsoon, which covers the north and east from October to January, reaches Ella more directly.\n\nThat gives Ella a rain pattern unlike either coast: a genuinely wet stretch from October to December, a clear window from January to March, and a dry but strange period from June to September when the Uva wind blows.\n\nThe thing to plan around, though, is not rain. It is cloud. Ella's whole appeal is the view south through the Ella Gap and out over the tea, and at a thousand metres that view is regularly inside a cloud. You can have a dry day with nothing visible from [Little Adam's Peak](/sri-lanka/ella/little-adams-peak-and-ella-rock). Mornings are reliably clearer than afternoons in every month, which is the single most useful fact on this page.\n\nTemperatures barely move: 16 to 27 degrees year-round, cool at night, never cold.",
            table: {
              headers: ["Months", "Rain", "Cloud / views", "Verdict"],
              rows: [["Jan-Mar", "Low", "Clearest of the year", "Best; busiest"], ["Apr-May", "Building storms", "Variable", "Hot; New Year closures mid-April"], ["Jun-Sep", "Dry (Uva wind)", "Hazy but open", "Good for walking"], ["Oct-Dec", "Wettest", "Often clouded in", "Green, cheap, gamble on views"]],
            },
            tourCard: {
              slug: "ella-waterfall-abseiling-adventure-hotel-pickup",
              title: "Ella Waterfall Abseiling Adventure with Hotel Pickup",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 57.71",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368885/asiabylocals/tours/from-ella-waterfalls-abseiling-adventure-thrill-nature/img0.jpg",
            },
          },
          {
            title: "January to March: the clear window",
            icon: "sun",
            content: "These are the best months and the busiest. The northeast monsoon has finished with Uva, the air is clearest, and the Ella Gap view is reliable in a way it is not at other times of year. Mornings are frequently cloudless.\n\nThis is also when the whole island is in season — the west and south coasts are dry, the hill country is clear, and everyone is doing the same loop. Ella fills up. Guesthouses on the main street book out, reserved train seats vanish within hours of the 30-day window opening, and prices are at their annual high.\n\nFebruary is the pick if you want one month. Rainfall is at its lowest, the crowds are marginally below the December-January peak, and the tea slopes are still green from the wet season.\n\nBook accommodation and, if you want a reserved train seat, do it a month ahead. This is the one place in Sri Lanka where turning up without a plan in high season genuinely costs you.",
            tourCard: {
              slug: "ella-to-kandy-transfer-with-the-hill-country-train-ride-and-nuwara-eliya",
              title: "Ella to Kandy Transfer with the Hill Country Train Ride and Nuwara Eliya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 65.95",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375778/asiabylocals/tours/ella-kandy-transfer-with-train-ride-nuwara-eliya-tour/img0.jpg",
            },
          },
          {
            title: "June to September: dry, windy and hazy",
            icon: "wind",
            content: "The southwest monsoon largely misses Ella, which means these months are dry here while Colombo is being drenched — a useful inversion for anyone travelling in the European summer.\n\nWhat arrives instead is the Uva wind: a persistent dry wind that blows across the province from around June to September and is what gives Uva tea its distinctive character. It also raises haze, so while it does not rain much, the long views are often soft rather than sharp. Photographers notice; most visitors do not.\n\nThe walking is at its best in this window — dry paths, no leeches, and cooler air moving. [Ella Rock](/sri-lanka/ella/little-adams-peak-and-ella-rock) in particular is much more pleasant in a dry August than a wet November.\n\nThe crowds are moderate. This is not peak season for Sri Lanka as a whole, so Ella is busy without being full, and prices sit below the winter peak.\n\nFor a trip built around the cultural triangle and the east coast, which are also dry in these months, Ella fits perfectly as the hill-country stop.",
            tourCard: {
              slug: "ella-to-kandy-guided-transfer-with-nuwara-eliya-ramboda-falls",
              title: "Ella to Kandy Guided Transfer with Nuwara Eliya, Ramboda Falls and Peradeniya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 60.67",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375678/asiabylocals/tours/ella-to-kandy-transfer-with-lakes-falls-botanical-garden/img0.jpg",
            },
          },
          {
            title: "October to December: the wet months",
            icon: "cloud-rain",
            content: "October and November are Ella's wettest and least predictable stretch, as the second inter-monsoon and then the northeast monsoon arrive. Rain comes in heavy afternoon bursts, the paths turn slippery, and leeches appear on the Ella Rock route and in the wooded sections.\n\nMore to the point, this is when the cloud sits lowest. There are days in November when [Little Adam's Peak](/sri-lanka/ella/little-adams-peak-and-ella-rock) has no view at all, and the walk up is still pleasant but the reason for it is missing.\n\nWhat you get in return is the greenest the tea country ever looks, the fewest visitors of the year, the lowest prices, and waterfalls at full volume — Ravana Falls in November is a different thing from Ravana Falls in March.\n\nBy mid-December the pattern usually breaks toward the dry season, and the first half of December can be very good value: near-dry weather at pre-Christmas prices.\n\nIf you are travelling in these months, plan for two mornings rather than one. The odds of at least one clear dawn are much better across two days than one.",
            tourCard: {
              slug: "udawalawe-to-kandy-private-transfer-via-ella-the-nine-arch-bridge",
              title: "Udawalawe to Kandy Private Transfer via Ella, the Nine Arch Bridge and Nuwara Eliya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 98.93",
              duration: "12 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375996/asiabylocals/tours/from-udawalawe-to-kandy-transfer-with-sightseeing-stops/img0.jpg",
            },
          },
          {
            title: "April, May and the practical rules",
            icon: "calendar-days",
            content: "April is hot by hill-country standards and brings the Sinhala and Tamil New Year in the middle of the month — the biggest holiday of the year, when domestic tourism surges and many small businesses close for several days. Ella gets busy with Sri Lankan visitors rather than foreign ones, which is a different and rather good atmosphere if you plan around the closures.\n\nMay is the start of the southwest monsoon and the least reliable of the drier months, with afternoon storms building.\n\nAcross every month, three rules hold. Do the walks at dawn: mornings are clearer than afternoons in every season, without exception. Carry a rain layer regardless of forecast, because the hills make their own weather. And take a warm layer for the evening — Ella is never cold, but at a thousand metres it drops enough after dark to matter.\n\nIf you have only one morning here and it is clouded in, the [Nine Arch Bridge](/sri-lanka/ella/nine-arch-bridge-guide) is unaffected — it sits below the cloud line and works in any weather.",
            tourCard: {
              slug: "ella-waterfall-abseiling-adventure-hotel-pickup",
              title: "Ella Waterfall Abseiling Adventure with Hotel Pickup",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 57.71",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368885/asiabylocals/tours/from-ella-waterfalls-abseiling-adventure-thrill-nature/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "What is the best month to visit Ella?", a: "February. It has the clearest air and the most reliable Ella Gap view, and it sits just past the December-January price peak. January and March are close behind." },
          { q: "Does it rain a lot in Ella?", a: "October to December is genuinely wet. June to September is dry but hazy, because of the Uva wind. The bigger issue than rain is cloud — at 1,000 m the view can be inside a cloud on a dry day, and mornings are clearer than afternoons in every month." },
          { q: "Is Ella worth visiting in the rainy season?", a: "Yes, with lowered expectations for the views. The tea country is at its greenest, waterfalls are at full volume, prices are lowest and crowds are thinnest. Plan two mornings rather than one — the odds of catching a clear dawn are much better across two days." },
          { q: "How cold does Ella get?", a: "Around 16-27C year-round. Cool after dark rather than cold — you will want a layer in the evening, but nothing like Nuwara Eliya at 1,900 m. Few guesthouses have heating." },
          { q: "Does the southwest monsoon affect Ella?", a: "Much less than the west coast. The mountains take most of it, so June to September is dry in Ella while Colombo is being drenched — a useful inversion for a European summer trip. What you get instead is the dry Uva wind and some haze." },
          { q: "When is Ella busiest?", a: "December to March, when the whole island is in season. Guesthouses on the main street book out, reserved train seats vanish within hours of the 30-day window opening, and prices peak. Book ahead." },
          { q: "What if the weather is bad on my only day in Ella?", a: "The Nine Arch Bridge sits below the cloud line and works in any weather, as do the tea factories, Ravana Falls and the abseiling. It is the ridge views from Little Adam's Peak and Ella Rock that cloud takes away." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What is the best month to visit Ella?", acceptedAnswer: { "@type": "Answer", text: "February. It has the clearest air and the most reliable Ella Gap view, and it sits just past the December-January price peak. January and March are close behind." } },
            { "@type": "Question", name: "Does it rain a lot in Ella?", acceptedAnswer: { "@type": "Answer", text: "October to December is genuinely wet. June to September is dry but hazy, because of the Uva wind. The bigger issue than rain is cloud — at 1,000 m the view can be inside a cloud on a dry day, and mornings are clearer than afternoons in every month." } },
            { "@type": "Question", name: "Is Ella worth visiting in the rainy season?", acceptedAnswer: { "@type": "Answer", text: "Yes, with lowered expectations for the views. The tea country is at its greenest, waterfalls are at full volume, prices are lowest and crowds are thinnest. Plan two mornings rather than one — the odds of catching a clear dawn are much better across two days." } },
            { "@type": "Question", name: "How cold does Ella get?", acceptedAnswer: { "@type": "Answer", text: "Around 16-27C year-round. Cool after dark rather than cold — you will want a layer in the evening, but nothing like Nuwara Eliya at 1,900 m. Few guesthouses have heating." } },
            { "@type": "Question", name: "Does the southwest monsoon affect Ella?", acceptedAnswer: { "@type": "Answer", text: "Much less than the west coast. The mountains take most of it, so June to September is dry in Ella while Colombo is being drenched — a useful inversion for a European summer trip. What you get instead is the dry Uva wind and some haze." } },
            { "@type": "Question", name: "When is Ella busiest?", acceptedAnswer: { "@type": "Answer", text: "December to March, when the whole island is in season. Guesthouses on the main street book out, reserved train seats vanish within hours of the 30-day window opening, and prices peak. Book ahead." } },
            { "@type": "Question", name: "What if the weather is bad on my only day in Ella?", acceptedAnswer: { "@type": "Answer", text: "The Nine Arch Bridge sits below the cloud line and works in any weather, as do the tea factories, Ravana Falls and the abseiling. It is the ridge views from Little Adam's Peak and Ella Rock that cloud takes away." } },
          ],
        },
      };

    case "ella-2-day-itinerary":
      return {
        title: "Two Days in Ella: Both Dawns Used Properly",
        seoTitle: "Ella 2-Day Itinerary",
        description: "A two-day Ella plan built around the two mornings: Little Adam's Peak at dawn, the Nine Arch Bridge before eight, and afternoons that ask nothing of you.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368885/asiabylocals/tours/from-ella-waterfalls-abseiling-adventure-thrill-nature/img0.jpg",
        fastFacts: [
          { icon: "clock", label: "Day 1", value: "Little Adam's Peak at dawn, Nine Arch Bridge, Ravana Falls" },
          { icon: "clock", label: "Day 2", value: "Ella Rock with a guide, or a tea estate morning" },
          { icon: "ticket", label: "Cost of the sights", value: "Almost nothing — both walks and the bridge are free" },
          { icon: "clock", label: "The one rule", value: "Everything before nine in the morning" },
          { icon: "map", label: "Stay", value: "A few km out for quiet and the view" },
          { icon: "info", label: "Book ahead", value: "December to March, both rooms and train seats" },
        ],
        sections: [
          {
            title: "Two Days in Ella: Both Dawns Used Properly",
            icon: "clock",
            content: "Ella's sights are free, close together and small in number, which means the plan is not about fitting things in. It is about being awake early.\n\nEverything here is better before nine. The Ella Gap view is clearer in the morning in every month of the year. [Little Adam's Peak](/sri-lanka/ella/little-adams-peak-and-ella-rock) has a queue for the same photograph by nine. The [Nine Arch Bridge](/sri-lanka/ella/nine-arch-bridge-guide) has hundreds of people on it by ten. The tea pluckers are in the field in the morning and gone by afternoon.\n\nSo the itinerary below uses both mornings hard and asks nothing of the afternoons, which after several days of Sri Lankan driving is the point of stopping here at all.\n\nTwo nights is the right length. One works if you arrive on the afternoon train. Three is only worth it if you are walking seriously or genuinely want to stop.",
            tourCard: {
              slug: "ella-waterfall-abseiling-adventure-hotel-pickup",
              title: "Ella Waterfall Abseiling Adventure with Hotel Pickup",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 57.71",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368885/asiabylocals/tours/from-ella-waterfalls-abseiling-adventure-thrill-nature/img0.jpg",
            },
          },
          {
            title: "Day 1, dawn: Little Adam's Peak",
            icon: "sunrise",
            content: "Leave your guesthouse in the dark. The trailhead is about fifteen minutes' walk from the centre off the Passara road, or a few hundred rupees by tuk-tuk.\n\nFrom there it is a gentle climb through tea on a made path, then concrete steps for the last section — 45 minutes at a comfortable pace, easy enough for children and for most fitness levels. Sunrise comes up through the Ella Gap and it is the reason people put this town on a list.\n\nWalk on past the first knoll. Most people stop there; the second and third are ten minutes further and considerably emptier.\n\nBack in town by eight for breakfast.\n\nTake water — there is a stall at the bottom and nothing above it — and shoes with grip, because the steps are slippery after overnight rain, which is most nights in some months.",
            tourCard: {
              slug: "ella-waterfall-abseiling-adventure-hotel-pickup",
              title: "Ella Waterfall Abseiling Adventure with Hotel Pickup",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 57.71",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368885/asiabylocals/tours/from-ella-waterfalls-abseiling-adventure-thrill-nature/img0.jpg",
            },
          },
          {
            title: "Day 1, mid-morning: the Nine Arch Bridge",
            icon: "train",
            content: "Ask at Ella station what time the next train is expected and how late it is running — the published timetable and reality are different things, and staff will tell you both.\n\nThe walk in from town takes 20 to 25 minutes, downhill through tea and jungle, which means uphill on the way back. A tuk-tuk to the Demodara side is quieter and saves the climb.\n\nThe bridge is a 91-metre stone viaduct, 24 metres above a gorge, built during the First World War without any steel because the steel went to Europe. It is free, there is no official viewing area, and you stand where you like.\n\nThree positions: underneath for scale, the hillside cafés above for the full nine-arch profile with a train crossing, and on the bridge itself — which is a working railway with no walkway, so get off well before a train is due rather than as it arrives.\n\nBefore eight is best. By ten there are several hundred people and a queue of drones.",
            tourCard: {
              slug: "ella-to-kandy-transfer-with-the-hill-country-train-ride-and-nuwara-eliya",
              title: "Ella to Kandy Transfer with the Hill Country Train Ride and Nuwara Eliya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 65.95",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375778/asiabylocals/tours/ella-kandy-transfer-with-train-ride-nuwara-eliya-tour/img0.jpg",
            },
          },
          {
            title: "Day 1, afternoon: falls, abseiling, or nothing",
            icon: "waves",
            content: "Ravana Falls is ten minutes south by tuk-tuk, a broad 25-metre cascade right beside the road, named after the demon king of the Ramayana who is said to have hidden Sita in the caves above it. It is roadside and therefore easy and therefore busy; in the wet season it is genuinely powerful.\n\nAbseiling operators work waterfalls in the same valley and it is the one real adventure activity in Ella — a guided descent down a falls face with all equipment provided, no experience needed.\n\nOr do nothing. There are cafés with terraces looking down the Gap, and after four or five days of the standard Sri Lankan loop, an afternoon that involves no vehicle is a legitimate plan.\n\nEvening: eat rice and curry at one of the small local places set back from the main strip rather than on it. The strip does smoothie bowls and pizza at two to three times the national price; the food you came for is a street back.",
            tourCard: {
              slug: "ella-waterfall-abseiling-adventure-hotel-pickup",
              title: "Ella Waterfall Abseiling Adventure with Hotel Pickup",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 57.71",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368885/asiabylocals/tours/from-ella-waterfalls-abseiling-adventure-thrill-nature/img0.jpg",
            },
          },
          {
            title: "Day 2: Ella Rock, or the tea",
            icon: "mountain",
            content: "The ambitious version is [Ella Rock](/sri-lanka/ella/little-adams-peak-and-ella-rock): three hours return, starting along the railway from Ella station, leaving the line at an unsigned junction and climbing through tea and eucalyptus to an open summit ridge. Take a guide or an offline map — the junction is where people get lost, and they get lost regularly. It is not technically hard, just long and unmarked.\n\nThe gentler version is a tea morning. Walk out into the estates before nine and you will see plucking actually happening; by afternoon the slopes are empty. A working factory visit takes 45 minutes from the withering troughs to the grading table and explains why one bush yields six graded products at wildly different prices. Factories close on poya days, when an estate walk substitutes.\n\nThe Demodara Loop, where the railway spirals under itself to gain height, is a few minutes on and is a real curiosity that almost nobody visits.\n\nAfternoon: leave, or don't. If you are moving on, book the vehicle the day before — Ella is small and the good drivers are busy.",
            tourCard: {
              slug: "ella-to-kandy-guided-transfer-with-nuwara-eliya-ramboda-falls",
              title: "Ella to Kandy Guided Transfer with Nuwara Eliya, Ramboda Falls and Peradeniya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 60.67",
              duration: "8 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375678/asiabylocals/tours/ella-to-kandy-transfer-with-lakes-falls-botanical-garden/img0.jpg",
            },
          },
          {
            title: "Where to go next",
            icon: "map",
            content: "South is the standard continuation and the best one: a 6am game drive at Udawalawe, two hours away, then two hours more to the south coast, arriving mid-afternoon with the beach day intact. Udawalawe is the dependable elephant park — open all year, far fewer jeeps than Yala, near-certain sightings.\n\nNorth back to Kandy is four to five hours, and worth doing as a guided transfer with Nuwara Eliya, a tea factory and Ramboda Falls built in rather than as a plain drive.\n\nEast to Arugam Bay is about three hours and is the right call from May to September, when the east coast is the dry side of the island.\n\nThe train continues to Badulla, an hour on, which almost nobody does and which is a quiet, pleasant hour if you want the line to yourself.\n\nWhichever way you go, the sightseeing on this island is usually better built into the transfer than bought as a separate day trip.",
            tourCard: {
              slug: "udawalawe-to-kandy-private-transfer-via-ella-the-nine-arch-bridge",
              title: "Udawalawe to Kandy Private Transfer via Ella, the Nine Arch Bridge and Nuwara Eliya",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 98.93",
              duration: "12 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375996/asiabylocals/tours/from-udawalawe-to-kandy-transfer-with-sightseeing-stops/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "How many days do you need in Ella?", a: "Two nights, which gives you two dawns — Little Adam's Peak on one and either Ella Rock or a tea morning on the other, with the Nine Arch Bridge mid-morning on day one. One night works if you arrive on the afternoon train." },
          { q: "What is the single most important thing to know about visiting Ella?", a: "Do everything before nine in the morning. The Ella Gap view is clearer in the morning in every month, Little Adam's Peak has a queue by nine, and the Nine Arch Bridge has hundreds of people on it by ten." },
          { q: "How much does two days in Ella cost?", a: "Very little for the sights themselves — both walks and the bridge are free. Budget for accommodation, food, tuk-tuks at a few hundred rupees a hop, and optionally a guide for Ella Rock at USD 10-20 or an abseiling session." },
          { q: "Should I do Ella Rock or a tea estate morning on day two?", a: "Ella Rock if you want a proper walk and you take a guide or an offline map. A tea morning if you would rather see the estates working — go out before nine, when the pluckers are in the field." },
          { q: "Where do I go after Ella?", a: "South is the standard route: a 6am Udawalawe safari two hours away, then two hours more to the south coast, arriving with the afternoon intact. North to Kandy is four to five hours and better as a guided transfer with stops than a plain drive." },
          { q: "Do I need to book anything in advance for Ella?", a: "Between December and March, yes — both accommodation and reserved train seats, which open 30 days ahead and go within hours. Outside those months you can usually turn up. Book onward transport the day before whatever the season." },
          { q: "What if it is cloudy?", a: "The Nine Arch Bridge sits below the cloud line and works in any weather, as do the tea factories, Ravana Falls and abseiling. Only the ridge views from the two walks are lost to cloud, and mornings are clearer than afternoons in every month." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How many days do you need in Ella?", acceptedAnswer: { "@type": "Answer", text: "Two nights, which gives you two dawns — Little Adam's Peak on one and either Ella Rock or a tea morning on the other, with the Nine Arch Bridge mid-morning on day one. One night works if you arrive on the afternoon train." } },
            { "@type": "Question", name: "What is the single most important thing to know about visiting Ella?", acceptedAnswer: { "@type": "Answer", text: "Do everything before nine in the morning. The Ella Gap view is clearer in the morning in every month, Little Adam's Peak has a queue by nine, and the Nine Arch Bridge has hundreds of people on it by ten." } },
            { "@type": "Question", name: "How much does two days in Ella cost?", acceptedAnswer: { "@type": "Answer", text: "Very little for the sights themselves — both walks and the bridge are free. Budget for accommodation, food, tuk-tuks at a few hundred rupees a hop, and optionally a guide for Ella Rock at USD 10-20 or an abseiling session." } },
            { "@type": "Question", name: "Should I do Ella Rock or a tea estate morning on day two?", acceptedAnswer: { "@type": "Answer", text: "Ella Rock if you want a proper walk and you take a guide or an offline map. A tea morning if you would rather see the estates working — go out before nine, when the pluckers are in the field." } },
            { "@type": "Question", name: "Where do I go after Ella?", acceptedAnswer: { "@type": "Answer", text: "South is the standard route: a 6am Udawalawe safari two hours away, then two hours more to the south coast, arriving with the afternoon intact. North to Kandy is four to five hours and better as a guided transfer with stops than a plain drive." } },
            { "@type": "Question", name: "Do I need to book anything in advance for Ella?", acceptedAnswer: { "@type": "Answer", text: "Between December and March, yes — both accommodation and reserved train seats, which open 30 days ahead and go within hours. Outside those months you can usually turn up. Book onward transport the day before whatever the season." } },
            { "@type": "Question", name: "What if it is cloudy?", acceptedAnswer: { "@type": "Answer", text: "The Nine Arch Bridge sits below the cloud line and works in any weather, as do the tea factories, Ravana Falls and abseiling. Only the ridge views from the two walks are lost to cloud, and mornings are clearer than afternoons in every month." } },
          ],
        },
      };

    case "yala-vs-udawalawe-from-ella":
      return {
        title: "Yala or Udawalawe from Ella: Which Safari to Actually Book",
        seoTitle: "Yala vs Udawalawe Safari from Ella (2026)",
        description: "Ella sits between Sri Lanka's two best-known safari parks. Yala has the leopards and the crowds; Udawalawe has the elephants and the space. An honest comparison, with drive times and what a jeep really costs.",
        fastFacts: [
          { icon: "Clock", label: "Drive from Ella", value: "Yala about 2.5 h · Udawalawe about 2 h" },
          { icon: "Star", label: "Yala is for", value: "Leopards — the highest density in the world" },
          { icon: "Star", label: "Udawalawe is for", value: "Elephants — sightings are close to guaranteed" },
          { icon: "AlertTriangle", label: "Yala Block 1 closes", value: "Usually September to mid-October" },
        ],
        sections: [
          {
            title: "The Short Answer",
            icon: "Star",
            content: "**Go to Udawalawe if you want to see animals. Go to Yala if you specifically want a leopard and can accept that you may not get one.**\n\nUdawalawe holds around 250 resident elephants in a park of 300 square kilometres with open grassland, so you see them, close, on almost every drive. There is no realistic scenario in which you spend three hours there and see no elephants.\n\nYala has the densest leopard population of any protected area on earth — roughly one leopard per square kilometre in Block 1. That is the draw and it is genuine. But density is not the same as visibility: the animals are in scrub, they move at dawn and dusk, and a sighting is a matter of luck and of how many jeeps are radioing each other. Plenty of visitors leave without one.\n\nThe second difference is the one nobody mentions in listings: **crowds**. Yala Block 1 in peak season can put a hundred jeeps in the same park, and a leopard sighting turns into a traffic jam. Udawalawe is quieter, and the experience is calmer for it.",
            tourCard: TOUR_CARD_ELLA_SAFARI,
          },
          {
            title: "Getting There from Ella",
            icon: "MapPin",
            content: "Ella is unusually well placed — both parks are a morning's drive, and neither needs an overnight.\n\n**Udawalawe** is about **2 hours** south, dropping out of the hill country through Wellawaya. The road is good. A 6 AM departure puts you at the gate for the morning drive.\n\n**Yala** is about **2.5 hours** to the Tissamaharama entrance. Most tours leave Ella between 4 and 5 AM for the dawn slot, which is the productive one.\n\nThe drive is the reason so many of these run as **safari-plus-transfer**: if you are heading to the south coast anyway, doing the park on the way costs you almost no extra time. We list that as [Yala with a drop at Tangalle or Hiriketiya](/sri-lanka/ella/yala-safari-from-ella-with-a-drop-at-tangalle-or-hiriketiya), [Yala with a drop at Arugam Bay](/sri-lanka/ella/yala-safari-from-ella-with-a-drop-at-arugam-bay), [Udawalawe with a south coast drop to Galle](/sri-lanka/ella/udawalawe-safari-with-a-south-coast-drop-from-ella-galle-mirissa-or) and the reverse routes such as [South Coast to Ella via a Yala safari](/sri-lanka/ella/south-coast-to-ella-transfer-via-a-yala-safari-and-buduruwagala) and [Yala to Ella with an Etili village visit](/sri-lanka/ella/yala-to-ella-private-transfer-with-an-etili-village-visit-and-home).",
          },
          {
            title: "Shared Jeep or Private",
            icon: "Info",
            content: "This decides your day more than the park does.\n\nA **shared jeep** puts six to eight strangers in one vehicle. It is cheaper, and it is fine if you are relaxed about it — but you go where the group goes, you stop when the group stops, and photography from the middle row is difficult.\n\nA **private jeep** means the driver works to you. That matters at a leopard sighting, where position is everything, and it matters if anyone in your party is photographing seriously. Our private options are [Private Yala with a dedicated jeep and tracker](/sri-lanka/ella/private-yala-safari-from-ella-with-a-dedicated-jeep-and-tracker), [Private Yala day trip from Ella and Bandarawela](/sri-lanka/ella/private-yala-national-park-safari-day-trip-from-ella-and-back), [Private Udawalawe with jeep, permit and tracker](/sri-lanka/ella/private-udawalawe-safari-from-ella-with-jeep-permit-and-transfers) and the [all-inclusive Udawalawe half-day](/sri-lanka/ella/all-inclusive-udawalawe-half-day-safari-from-ella-with-permit).\n\nShared and standard options: [Yala leopard safari day trip](/sri-lanka/ella/yala-national-park-leopard-safari-day-trip-from-ella), [Yala from Ella, Bandarawela or Haputale](/sri-lanka/ella/yala-national-park-safari-day-trip-from-ella-bandarawela-or-haputale), [Udawalawe jeep safari](/sri-lanka/ella/udawalawe-jeep-safari-from-ella-bandarawela-or-haputale-with-ravana) and the [Udawalawe day tour](/sri-lanka/ella/udawalawe-safari-day-tour-from-ella-bandarawela-or-haputale).\n\n**Check what the price includes.** Park entry and the jeep are separate charges in Sri Lanka, and a cheap headline price often excludes the permit. Ours state it either way.",
          },
          {
            title: "When Not to Go to Yala",
            icon: "AlertTriangle",
            content: "**Block 1, the main and most-visited section, usually closes for around six weeks from early September to mid-October** for the dry-season maintenance period. Dates shift each year and are announced late, so check before you build a trip around it. Block 5 sometimes stays open, and some operators quietly switch you there without saying so — ask.\n\n**The dry season, roughly February to July, is the better bet** in both parks. Water sources shrink, animals concentrate around what is left, and sightings go up sharply. In the wet months the animals disperse because water is everywhere.\n\n**Afternoon drives are the weaker option** at both parks and are usually cheaper for that reason. If your schedule allows only an afternoon, Udawalawe still delivers; Yala often does not.",
          },
          {
            title: "Doing Both, and the Other Parks",
            icon: "Map",
            content: "If you have the day and the budget, [two parks in a day — private Yala and Udawalawe](/sri-lanka/ella/two-parks-in-a-day-private-yala-and-udawalawe-double-safari-from-ella) is genuinely possible from Ella, and it is the only way to compare them honestly. It is a long day: expect to leave before dawn and return after dark.\n\nTwo less obvious options worth knowing about:\n\n**Kalametiya Bird Sanctuary** is a coastal lagoon, not a jeep park — you go by boat, it is quiet, and it is the best birding near Ella. See [the Kalametiya boat safari with a coastal drop](/sri-lanka/ella/kalametiya-bird-sanctuary-boat-safari-from-ella-with-coastal-transfers).\n\n**Combining a park with Ella's own sights** works if you would rather not spend the whole day in a vehicle — [Ravana Falls, Diyaluma and a Yala safari](/sri-lanka/ella/ravana-falls-diyaluma-and-a-yala-safari-full-day-from-ella) and [Ella sights with an Udawalawe safari](/sri-lanka/ella/ella-sights-and-an-udawalawe-safari-all-inclusive-private-day-trip) both do that.",
          },
        ],
        faqs: [
          { q: "Is Yala or Udawalawe better from Ella?", a: "**Udawalawe** if you want a reliable wildlife day — around 250 resident elephants in open grassland, seen close on almost every drive. **Yala** if a leopard is specifically what you want: it has the world's highest leopard density, but sightings are luck, and Block 1 gets very crowded." },
          { q: "How far is Yala from Ella?", a: "About **2.5 hours** to the Tissamaharama entrance. Most tours leave Ella between 4 and 5 AM to make the dawn drive, which is the productive one." },
          { q: "How far is Udawalawe from Ella?", a: "About **2 hours** south through Wellawaya, on good road. A 6 AM departure comfortably makes the morning drive." },
          { q: "When is Yala closed?", a: "**Block 1 usually closes for around six weeks from early September to mid-October.** Exact dates are announced late and change each year, so confirm before planning around it. Some operators switch you to Block 5 without mentioning it — ask which block you are visiting." },
          { q: "Do I need a private jeep?", a: "Not necessarily, but it changes the day. A shared jeep is cheaper and fine if you are relaxed; a private jeep matters at a leopard sighting, where vehicle position decides whether you see anything, and for anyone photographing seriously." },
          { q: "Are park fees included?", a: "Check each listing. In Sri Lanka the jeep and the park permit are separate charges, and cheap headline prices often exclude the permit. Every option we list states which it is." },
          { q: "What is the best time of year for a safari?", a: "**February to July**, the drier months. Water sources shrink, animals concentrate around what remains, and sightings rise sharply. In the wet season the animals disperse because water is everywhere." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Is Yala or Udawalawe better from Ella?", acceptedAnswer: { "@type": "Answer", text: "**Udawalawe** if you want a reliable wildlife day — around 250 resident elephants in open grassland, seen close on almost every drive. **Yala** if a leopard is specifically what you want: it has the world's highest leopard density, but sightings are luck, and Block 1 gets very crowded." } },
            { "@type": "Question", name: "How far is Yala from Ella?", acceptedAnswer: { "@type": "Answer", text: "About **2.5 hours** to the Tissamaharama entrance. Most tours leave Ella between 4 and 5 AM to make the dawn drive, which is the productive one." } },
            { "@type": "Question", name: "How far is Udawalawe from Ella?", acceptedAnswer: { "@type": "Answer", text: "About **2 hours** south through Wellawaya, on good road. A 6 AM departure comfortably makes the morning drive." } },
            { "@type": "Question", name: "When is Yala closed?", acceptedAnswer: { "@type": "Answer", text: "**Block 1 usually closes for around six weeks from early September to mid-October.** Exact dates are announced late and change each year, so confirm before planning around it. Some operators switch you to Block 5 without mentioning it — ask which block you are visiting." } },
            { "@type": "Question", name: "Do I need a private jeep?", acceptedAnswer: { "@type": "Answer", text: "Not necessarily, but it changes the day. A shared jeep is cheaper and fine if you are relaxed; a private jeep matters at a leopard sighting, where vehicle position decides whether you see anything, and for anyone photographing seriously." } },
            { "@type": "Question", name: "Are park fees included?", acceptedAnswer: { "@type": "Answer", text: "Check each listing. In Sri Lanka the jeep and the park permit are separate charges, and cheap headline prices often exclude the permit. Every option we list states which it is." } },
            { "@type": "Question", name: "What is the best time of year for a safari?", acceptedAnswer: { "@type": "Answer", text: "**February to July**, the drier months. Water sources shrink, animals concentrate around what remains, and sightings rise sharply. In the wet season the animals disperse because water is everywhere." } },
          ],
        },
        heroImage: TOUR_CARD_ELLA_SAFARI.image,
      };
    case "liptons-seat-and-ella-tea-country":
      return {
        title: "Lipton's Seat and Ella's Tea Country: The Estates, the Factories and the Climb",
        seoTitle: "Lipton's Seat & Ella Tea Guide (2026)",
        description: "Lipton's Seat, the Dambatenne factory and the Uva estates around Ella — how to get up, when the view is actually there, and which factory tours are working factories rather than showrooms.",
        fastFacts: [
          { icon: "Clock", label: "Best time at Lipton's Seat", value: "6-8 AM, before the cloud closes in" },
          { icon: "MapPin", label: "From Ella", value: "About 1.5 h to Dambatenne, then 7 km up" },
          { icon: "Info", label: "Factory tours", value: "Closed Sundays and poya days — most people find out at the gate" },
          { icon: "Star", label: "Uva season", value: "July-September, when the dry wind makes the region's best tea" },
        ],
        sections: [
          {
            title: "Why the Wind Matters Here",
            icon: "Star",
            content: "Uva tea tastes different from the tea grown on the other side of the hills, and the reason is a wind.\n\nFrom roughly **July to September** a dry wind blows across this side of the central highlands. It stresses the bushes, slows their growth, and concentrates what ends up in the leaf. The result is the distinctive Uva character — a sharper, more aromatic cup — and tea bought during that window sells at a premium. It is one of the few genuinely seasonal things in Sri Lankan tea, and almost no visitor is told about it.\n\nThat also means a factory visit in August shows you a factory working at full stretch, and a visit in a quiet month shows you machinery standing still. Neither is wrong, but they are different visits.\n\nThe estates around Ella and Haputale were laid out by Scottish planters from the 1860s onward, after coffee leaf rust destroyed the coffee industry that came before. The stone-built factories, the bungalows and the estate roads are all from that period and still in use.",
            tourCard: TOUR_CARD_ELLA_SAFARI,
          },
          {
            title: "Lipton's Seat: What It Actually Is",
            icon: "MapPin",
            content: "Thomas Lipton bought estates here in the 1890s and, the story goes, would ride up to a rock outcrop above Dambatenne to look over what he owned. The viewpoint keeps his name.\n\nOn a clear morning you can see across seven provinces — tea slopes falling away in every direction, and on the best days a glimpse toward the south coast.\n\n**Go at dawn.** This is not a preference, it is the whole trip. Cloud typically rolls in from mid-morning and by ten o'clock the view is often gone entirely. Arriving at eight and finding white is the standard disappointment.\n\nGetting up: the road from the Dambatenne factory climbs about **7 km**. You can walk it — a pleasant couple of hours through the estates, and the way most people do it downhill — or take a tuk-tuk to the top and walk back down. Guided options from Ella: [Lipton's Seat, the Dambatenne factory and Adisham Bungalow](/sri-lanka/ella/liptons-seat-the-dambatenne-tea-factory-and-adisham-bungalow-from-ella), the [tuk-tuk excursion with the Dambatenne factory](/sri-lanka/ella/liptons-seat-tuk-tuk-excursion-from-ella-with-the-dambatenne-tea-factory), a [cycling descent from the top](/sri-lanka/ella/liptons-seat-cycling-descent-with-the-dambatenne-tea-factory), the [hill country train ride with Lipton's Seat by tuk-tuk](/sri-lanka/ella/hill-country-train-ride-and-liptons-seat-by-tuk-tuk-from-ella), and a longer day pairing it with [Diyaluma Falls](/sri-lanka/ella/liptons-seat-a-tea-factory-and-diyaluma-falls-day-tour-from-ella).",
          },
          {
            title: "The Factories, and Which Are Real",
            icon: "Info",
            content: "There is a meaningful difference between a **working factory** that lets visitors in and a **visitor centre** built to sell tea.\n\n**Dambatenne**, below Lipton's Seat, is the real thing — built in 1890, still processing leaf, and the machinery you walk past is running. **Halpewatte**, closer to Ella, is also a working factory and the most convenient from town.\n\nWhat a good tour shows you is the sequence: withering troughs where leaf loses moisture overnight, rolling, oxidation on tiled floors, firing, then grading by particle size — which is where BOP, OP, dust and the rest of the alphabet come from. Grade is about leaf size, not quality, and being told that plainly is a fair test of whether your guide knows the subject.\n\nHalpewatte-based options: the [Ella highlights half-day with Halpewatte](/sri-lanka/ella/ella-highlights-half-day-tour-nine-arch-bridge-halpewatte-tea-factory) and the [Ella Heights all-inclusive day](/sri-lanka/ella/ella-heights-all-inclusive-day-trip-with-halpewatte-tea-factory). For a longer day around the estates and the train, [the all-inclusive Ella day with a tea factory and the hill country train](/sri-lanka/ella/all-inclusive-ella-day-with-a-tea-factory-and-the-hill-country-train).\n\n**Most factories close on Sundays and on poya (full moon) days**, and processing stops. Check the day before rather than arriving to a locked gate.",
          },
          {
            title: "Doing It With Your Hands",
            icon: "Star",
            content: "The most interesting version of a tea day is not a factory tour at all.\n\nA [hand-rolled tea making workshop](/sri-lanka/ella/hand-rolled-tea-making-workshop-in-ella-with-a-tasting-and-estate-walk) puts the leaf in your hands: you pluck, you wither, you roll, and you taste what you made. Rolling by hand for twenty minutes explains what the machines are doing better than watching them for an hour, and it is the only way to feel how much leaf goes into a very small amount of tea.\n\nOther days that combine tea with something else: the [tea factory, Ravana Falls and a Sri Lankan cooking class](/sri-lanka/ella/ella-tea-factory-ravana-falls-and-sri-lankan-cooking-class-day-tour), a [tea factory day with a cooking class and Little Adam's Peak](/sri-lanka/ella/ella-day-tour-with-a-tea-factory-a-cooking-class-and-little-adams-peak), and for walkers, [Pekoe Trail Stage 15 from Makulella to Ella through the tea](/sri-lanka/ella/pekoe-trail-stage-15-guided-hike-makulella-to-ella-through-the-tea).\n\n**On the pluckers:** you will be invited to photograph women working the rows. Ask first. They are on piece rates and being photographed is not part of their day, and a tour that hands out a tip or buys tea directly is doing something the estate economy does not.",
          },
        ],
        faqs: [
          { q: "What time should I go to Lipton's Seat?", a: "**Dawn — aim to be up there between 6 and 8 AM.** Cloud usually rolls in from mid-morning and the view can disappear entirely by ten. This is the single decision that makes or breaks the trip." },
          { q: "How do you get to Lipton's Seat from Ella?", a: "About **1.5 hours** to the Dambatenne factory, then roughly **7 km** up the estate road. You can walk it (a couple of hours), take a tuk-tuk up and walk down, or cycle the descent." },
          { q: "Is Dambatenne a working tea factory?", a: "Yes — built in 1890 and still processing leaf, so the machinery you walk past is running. Halpewatte, closer to Ella, is also a working factory and easier to reach from town." },
          { q: "Are tea factories open every day?", a: "**No. Most close on Sundays and on poya (full moon) days**, when processing stops. Check the day before rather than finding out at the gate." },
          { q: "What is Uva tea and why is it different?", a: "From roughly **July to September** a dry wind blows across this side of the highlands, stressing the bushes and concentrating flavour in the leaf. Tea made in that window has the distinctive sharper Uva character and sells at a premium." },
          { q: "What do the tea grades mean?", a: "Grades like BOP, OP and dust describe **leaf particle size, not quality**. Smaller particles brew faster and stronger; larger leaf brews more slowly. A guide who tells you this plainly knows the subject." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What time should I go to Lipton's Seat?", acceptedAnswer: { "@type": "Answer", text: "**Dawn — aim to be up there between 6 and 8 AM.** Cloud usually rolls in from mid-morning and the view can disappear entirely by ten. This is the single decision that makes or breaks the trip." } },
            { "@type": "Question", name: "How do you get to Lipton's Seat from Ella?", acceptedAnswer: { "@type": "Answer", text: "About **1.5 hours** to the Dambatenne factory, then roughly **7 km** up the estate road. You can walk it (a couple of hours), take a tuk-tuk up and walk down, or cycle the descent." } },
            { "@type": "Question", name: "Is Dambatenne a working tea factory?", acceptedAnswer: { "@type": "Answer", text: "Yes — built in 1890 and still processing leaf, so the machinery you walk past is running. Halpewatte, closer to Ella, is also a working factory and easier to reach from town." } },
            { "@type": "Question", name: "Are tea factories open every day?", acceptedAnswer: { "@type": "Answer", text: "**No. Most close on Sundays and on poya (full moon) days**, when processing stops. Check the day before rather than finding out at the gate." } },
            { "@type": "Question", name: "What is Uva tea and why is it different?", acceptedAnswer: { "@type": "Answer", text: "From roughly **July to September** a dry wind blows across this side of the highlands, stressing the bushes and concentrating flavour in the leaf. Tea made in that window has the distinctive sharper Uva character and sells at a premium." } },
            { "@type": "Question", name: "What do the tea grades mean?", acceptedAnswer: { "@type": "Answer", text: "Grades like BOP, OP and dust describe **leaf particle size, not quality**. Smaller particles brew faster and stronger; larger leaf brews more slowly. A guide who tells you this plainly knows the subject." } },
          ],
        },
        heroImage: TOUR_CARD_ELLA_SAFARI.image,
      };
    case "ella-waterfalls-and-day-tours":
      return {
        title: "Ella's Waterfalls and How to See the Town in a Day",
        seoTitle: "Ella Waterfalls & Day Tours Guide (2026)",
        description: "Ravana, Diyaluma and the falls worth the drive — plus how the Ella day tours differ from each other, and which one covers what you actually want to see.",
        fastFacts: [
          { icon: "MapPin", label: "Ravana Falls", value: "6 km from Ella, roadside — no walk needed" },
          { icon: "MapPin", label: "Diyaluma Falls", value: "220 m, Sri Lanka's second-highest, about 1 h away" },
          { icon: "AlertTriangle", label: "Swimming", value: "People drown at these falls every year — never in high water" },
          { icon: "Clock", label: "Best season", value: "Falls are strongest just after the rains, weakest March-April" },
        ],
        sections: [
          {
            title: "Ravana Falls: Easy, Crowded, Still Worth It",
            icon: "MapPin",
            content: "Ravana is the one everybody sees, because it is **right on the Ella-Wellawaya road about 6 km from town** and requires no walking at all. You park, you look, you are there.\n\nThat convenience is also its problem: tour vans, monkeys used to being fed, and stalls. Come early or late and it is a different place.\n\nThe cave associated with the Ramayana legend sits above the falls and is a real climb of a few hundred steps — most people who say they visited Ravana never went up.\n\n**Flow varies enormously.** After rain it is genuinely powerful; in March and April it can be a trickle over rock. Nobody tells you this in advance, and it is the main reason people find the falls underwhelming.\n\nDay tours that include it: [Ella in a Day with the Nine Arch Bridge, Little Adam's Peak and Ravana Falls](/sri-lanka/ella/ella-in-a-day-nine-arch-bridge-little-adams-peak-ravana-falls), [Ella Wonders with a spice garden](/sri-lanka/ella/ella-wonders-day-tour-spice-garden-nine-arch-bridge-ravana-falls), and [Ella waterfalls with the bridge and Little Adam's Peak as a private day](/sri-lanka/ella/ella-waterfalls-nine-arch-bridge-and-little-adams-peak-private-day-trip).",
            tourCard: TOUR_CARD_ELLA_SAFARI,
          },
          {
            title: "Diyaluma: The One Worth the Drive",
            icon: "Star",
            content: "**Diyaluma is 220 metres and the second-highest waterfall in Sri Lanka**, about an hour from Ella toward Koslanda. From the road you see the full drop, which is impressive and takes ten minutes.\n\nThe reason to go is above it. A steep path climbs the side of the escarpment to a series of **natural rock pools at the lip of the fall** — the ones in every photograph, where people sit with their legs over a 200-metre drop. The climb takes about 45 minutes, is genuinely steep, and is slippery in the wet.\n\n**This is where the danger is.** People have died at Diyaluma, and almost always the same way: swimming in the upper pools when the water is high, and being taken over the edge. In strong flow, do not get in. A guide who knows the fall will tell you which pools are safe on the day, and that is most of what you are paying for.\n\nGuided options: [Upper Diyaluma infinity pools trek with a mountain guide](/sri-lanka/ella/upper-diyaluma-infinity-pools-guided-trek-from-ella-with-a-mountain) and [Diyaluma with Buduruwagala rock temple](/sri-lanka/ella/diyaluma-falls-infinity-pools-and-buduruwagala-rock-temple-day-trip).\n\nFor something steeper still, Ella has [waterfall abseiling with hotel pickup](/sri-lanka/ella/ella-waterfall-abseiling-adventure-hotel-pickup).",
          },
          {
            title: "Which Ella Day Tour to Pick",
            icon: "Info",
            content: "Ella's day tours look identical in listings and are not. The differences that matter are **how you move** and **how much you cover**.\n\n**By tuk-tuk, town and immediate surroundings** — the most Ella way to do it, and fine for one day: [ten stops around the town in half a day](/sri-lanka/ella/ella-in-half-a-day-by-tuk-tuk-ten-stops-around-the-town), [Little Adam's Peak, the bridge and more by tuk-tuk](/sri-lanka/ella/ella-tuk-tuk-tour-with-little-adams-peak-the-nine-arch-bridge), and [both peaks, the Loop and the zipline](/sri-lanka/ella/ella-adventure-day-by-tuk-tuk-both-peaks-the-loop-and-the-zipline).\n\n**Walking-led days**, if you want the peaks properly: [Ella Essentials with Little Adam's Peak and the Nine Arch Bridge](/sri-lanka/ella/ella-essentials-day-tour-little-adams-peak-and-the-nine-arch-bridge) and [the adventure day with Ella Rock](/sri-lanka/ella/ella-adventure-day-tour-ella-rock-little-adams-peak-and-the-nine-arch).\n\n**Wider, with the train and the Demodara Loop** — the railway spiral where the line passes under itself, which is more interesting in person than it sounds: [eight sights with the Demodara Loop and a train leg](/sri-lanka/ella/ella-eight-sights-day-trip-with-the-demodara-loop-and-a-train-leg), [the hidden gems day with the Loop and the secret waterfall](/sri-lanka/ella/ella-hidden-gems-day-tour-the-loop-the-secret-waterfall-and-both-peaks), and [the all-inclusive private day with the train and Ella Rock](/sri-lanka/ella/ella-all-inclusive-private-day-trip-with-the-train-ella-rock).\n\n**On two wheels**, which suits the descents rather than the climbs: [Ella to Demodara with the bridge and a train leg](/sri-lanka/ella/ella-to-demodara-cycling-tour-with-the-nine-arch-bridge-and-a-train), [Haputale to Ella through the Uva estates](/sri-lanka/ella/haputale-to-ella-guided-cycling-tour-through-the-uva-tea-estates), and the longer [Udawalawe ride with Ravana Falls and the escarpment](/sri-lanka/ella/udawalawe-cycling-tour-from-ella-with-ravana-falls-and-the-escarpment).",
          },
          {
            title: "The Quieter Half-Days",
            icon: "Map",
            content: "Two things around Ella that almost nobody books and that reward the time.\n\n**The temples.** The area has both Hindu and Buddhist sites, sitting close together in a way that says a great deal about how the hill country actually works — a legacy of the Tamil estate workers brought in during the plantation era alongside the Sinhalese Buddhist villages. [A guided half-day around the temples](/sri-lanka/ella/hindu-and-buddhist-temples-around-ella-a-guided-half-day-tour) is the sort of thing you will not think to do and will remember.\n\n**Village life.** [Uva village life by jeep with a cooking class and a home lunch](/sri-lanka/ella/uva-village-life-by-jeep-from-ella-with-a-cooking-class-and-home-lunch) goes out into the farming country below the tea, which is a different Sri Lanka from the one Ella's main street shows you.\n\nIf you are leaving Ella southward anyway, two options put a park on the way rather than making it a separate day: [Yala with a coastal drop at Tangalle, Mirissa or Galle](/sri-lanka/ella/yala-safari-with-coastal-drop-off-from-ella-tangalle-mirissa-or-galle), [Yala leopard safari with a south coast transfer](/sri-lanka/ella/yala-leopard-safari-and-south-coast-transfer-from-ella) and [Udawalawe safari with a south coast transfer](/sri-lanka/ella/udawalawe-safari-and-south-coast-transfer-from-ella). More on choosing between the parks in our [Yala vs Udawalawe guide](/sri-lanka/ella/yala-vs-udawalawe-from-ella).",
          },
        ],
        faqs: [
          { q: "Is Ravana Falls worth visiting?", a: "Yes, but manage expectations. It is **roadside, 6 km from Ella**, needs no walking, and is busy. Flow varies enormously — powerful after rain, sometimes a trickle in March and April." },
          { q: "How far is Diyaluma Falls from Ella?", a: "About **an hour** toward Koslanda. The roadside view takes ten minutes; the reason to go is the **45-minute climb to the rock pools at the top**." },
          { q: "Is it safe to swim at Diyaluma?", a: "**Only in low flow, and only where a guide tells you.** People have died there, almost always by swimming the upper pools in high water and being carried over the edge. In strong flow, do not get in." },
          { q: "Which Ella day tour should I book?", a: "Decide by how you want to move. **Tuk-tuk** for the town and immediate sights, **walking-led** if you want the peaks properly, **train and Demodara Loop** for a wider day, **cycling** if you would rather descend than climb." },
          { q: "What is the Demodara Loop?", a: "A railway spiral where the line curves back and **passes underneath itself** to lose height — an 1920s engineering solution to the gradient. More interesting in person than it sounds, and several day tours include a train leg through it." },
          { q: "When are the waterfalls at their best?", a: "**Just after the rains.** March and April are the weakest months, when Ravana in particular can be a trickle over rock." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Is Ravana Falls worth visiting?", acceptedAnswer: { "@type": "Answer", text: "Yes, but manage expectations. It is **roadside, 6 km from Ella**, needs no walking, and is busy. Flow varies enormously — powerful after rain, sometimes a trickle in March and April." } },
            { "@type": "Question", name: "How far is Diyaluma Falls from Ella?", acceptedAnswer: { "@type": "Answer", text: "About **an hour** toward Koslanda. The roadside view takes ten minutes; the reason to go is the **45-minute climb to the rock pools at the top**." } },
            { "@type": "Question", name: "Is it safe to swim at Diyaluma?", acceptedAnswer: { "@type": "Answer", text: "**Only in low flow, and only where a guide tells you.** People have died there, almost always by swimming the upper pools in high water and being carried over the edge. In strong flow, do not get in." } },
            { "@type": "Question", name: "Which Ella day tour should I book?", acceptedAnswer: { "@type": "Answer", text: "Decide by how you want to move. **Tuk-tuk** for the town and immediate sights, **walking-led** if you want the peaks properly, **train and Demodara Loop** for a wider day, **cycling** if you would rather descend than climb." } },
            { "@type": "Question", name: "What is the Demodara Loop?", acceptedAnswer: { "@type": "Answer", text: "A railway spiral where the line curves back and **passes underneath itself** to lose height — an 1920s engineering solution to the gradient. More interesting in person than it sounds, and several day tours include a train leg through it." } },
            { "@type": "Question", name: "When are the waterfalls at their best?", acceptedAnswer: { "@type": "Answer", text: "**Just after the rains.** March and April are the weakest months, when Ravana in particular can be a trickle over rock." } },
          ],
        },
        heroImage: TOUR_CARD_ELLA_SAFARI.image,
      };
    case "leaving-ella-onward-transfers":
      return {
        title: "Leaving Ella: Where You Can Get To, and Why the Transfer Is the Day",
        seoTitle: "Ella Onward Transfers Guide 2026",
        description: "Ella to Kandy, the south coast, Yala, Sigiriya, Arugam Bay and Trincomalee — driving times, what a guided transfer actually includes, and why it beats a taxi.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368885/asiabylocals/tours/from-ella-waterfalls-abseiling-adventure-thrill-nature/img0.jpg",
        fastFacts: [
          { icon: "car", label: "Ella to Kandy", value: "About 4 hours direct, a full day with stops" },
          { icon: "waves", label: "Ella to the south coast", value: "3 to 4 hours, usually via a safari" },
          { icon: "binoculars", label: "Ella to Yala or Udawalawe", value: "2 to 3 hours, done as a safari day" },
          { icon: "landmark", label: "Ella to Sigiriya", value: "About 5 hours across the interior" },
          { icon: "sun", label: "Ella to Arugam Bay", value: "3 to 4 hours, the surf coast" },
        ],
        sections: [
          {
            title: "A transfer here is not a taxi, and that is the whole point",
            icon: "car",
            content: "In most countries a transfer means a car takes you from A to B and the day is wasted. In Sri Lanka the same word means something different, and getting this wrong is the single most expensive mistake people make in the hill country.\n\nA **guided transfer** is a private car with a driver-guide that leaves in the morning, stops at three or four real places on the way, and delivers you to your next hotel by evening. You are paying for the day, not the distance. The alternative is a plain taxi that does the same drive with nothing in it, for not much less money.\n\nThat is why almost every route out of Ella is sold as a tour rather than a ride. Our [Ella to Kandy transfer via a Vedda village, waterfalls and a home lunch](/sri-lanka/ella/ella-to-kandy-transfer-via-a-vedda-village-waterfalls-and-a-home-lunch) is a full day, and it costs more than a taxi because it **is** more than a taxi.\n\nThe practical consequence: do not book a hotel in your next town for early check-in. You will arrive in the evening, and that is the correct way to do it.",
          },
          {
            title: "North to Kandy, and the train question",
            icon: "train",
            content: "Kandy is about **four hours** by road, or seven by train, and that gap is where most of the argument happens.\n\nThe **train** from Ella to Kandy is genuinely one of the world's best rail journeys and it is also slow, crowded and unreserved unless you book weeks out. Doing it in the Ella-to-Kandy direction means the good scenery comes early and the last two hours are ordinary.\n\nThe honest answer for most people is **both**: take the scenic stretch by rail and cover the rest by car. Our [Ella to Kandy transfer with the hill country train ride and Nuwara Eliya](/sri-lanka/ella/ella-to-kandy-transfer-with-the-hill-country-train-ride-and-nuwara-eliya) is built exactly that way, and it is the version we recommend if you only do one leg by train.\n\nIf you would rather stay on the road and see more, the [transfer via Nuwara Eliya and Ramboda Falls](/sri-lanka/ella/ella-to-kandy-guided-transfer-with-nuwara-eliya-ramboda-falls) takes the tea-country route. More on the railway itself in our [Kandy to Ella train guide](/sri-lanka/kandy/kandy-to-ella-train-guide).",
          },
          {
            title: "South to the coast, almost always through a national park",
            icon: "binoculars",
            content: "Ella sits above the southern plains, which means the drive down to the beaches passes the two big safari parks. Nobody sensible drives past them empty.\n\n**Udawalawe** is the elephant park and the more reliable sighting. **Yala** has the leopards and the crowds. Which one you choose matters more than which operator, and we have written that comparison separately in [Yala vs Udawalawe from Ella](/sri-lanka/ella/yala-vs-udawalawe-from-ella).\n\nAs a transfer, the shape is: leave Ella early, game drive mid-morning, lunch, and arrive on the coast in the late afternoon. Our [Udawalawe safari with a south coast drop](/sri-lanka/ella/udawalawe-safari-with-a-south-coast-drop-from-ella-galle-mirissa-or) covers Galle, Mirissa or Hiriketiya; the [Yala leopard safari and south coast transfer](/sri-lanka/ella/yala-leopard-safari-and-south-coast-transfer-from-ella) does the same through Yala.\n\nIt works in reverse too, which people forget. The [south coast to Ella transfer via a Yala safari and Buduruwagala](/sri-lanka/ella/south-coast-to-ella-transfer-via-a-yala-safari-and-buduruwagala) is the same day run upwards.",
          },
          {
            title: "East and north: Arugam Bay, Trincomalee and Sigiriya",
            icon: "compass",
            content: "These three are the routes people do not realise exist from Ella, and all of them are a single road day rather than a two-stage trip.\n\n**Arugam Bay** is three to four hours east and is where Sri Lanka's surf is. The road drops out of the hills through Monaragala and the change in landscape is abrupt. Our [Ella to Arugam Bay transfer with waterfalls and temples](/sri-lanka/ella/ella-to-arugam-bay-guided-transfer-with-waterfalls-temples) does it with stops, and there is a [Yala safari version with an Arugam Bay drop](/sri-lanka/ella/yala-safari-from-ella-with-a-drop-at-arugam-bay) if you want the park on the way.\n\n**Trincomalee** on the east coast is longer, and the [transfer via Mahiyanganaya and a Vedda village](/sri-lanka/ella/ella-to-trincomalee-guided-transfer-via-mahiyanganaya-and-a-vedda) breaks it with the indigenous Vedda community, which is a genuinely unusual stop rather than a filler.\n\n**Sigiriya** is about five hours north across the interior. Doing it as a [transfer via a Vedda village and Mahiyanganaya](/sri-lanka/ella/ella-to-sigiriya-private-transfer-via-a-vedda-village-and-mahiyanganaya) turns the least interesting drive in the country into a day worth having.",
          },
          {
            title: "Practical things that change the day",
            icon: "clock",
            content: "**Leave early.** Every one of these routes is better at 7am than at 9am, because the stops are cooler and the roads are emptier. Hill country driving is slow by nature, and an hour lost at the start is an hour lost at the end.\n\n**Luggage travels with you.** That is the advantage over the train and it is worth stating: on a guided transfer your bags stay in the car all day while you walk around. On the train they do not.\n\n**Distances lie.** Ella to Kandy is under 150 km and takes four hours. Do not plan by the map.\n\n**One-way is normal.** You are not paying for the driver's return; that is already in the price, and asking to be dropped somewhere other than where you were quoted usually changes it. Say the exact hotel when booking.\n\nAnd if you are still deciding how long to give Ella itself before moving on, our [two-day Ella itinerary](/sri-lanka/ella/ella-2-day-itinerary) is the honest minimum.",
          },
        ],
      };

    default:
      return null;
  }
}
