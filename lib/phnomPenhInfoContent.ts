// Phnom Penh authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getCityInfoContent().
//
// ⚠️ Tour card slugs here are the LIVE slugs the backend generated, not the ones
// import_tours.py sent — the backend rebuilds the slug from the title and cuts
// it at 50 characters. See memory backend-regenerates-slug.
//
// The Khmer Rouge pages are written straight. S-21 and Choeung Ek are not
// attractions and copy that treats them as a highlight reads as obscene.
import type { CityInfoData } from './cityInfoContent';

const R2 = 'https://images.asiabylocals.com/asiabylocals/tours';
const img = (importSlug: string) => `${R2}/${importSlug}/img0/1600.webp`;

const IMG = {
    s21: img('tuol-sleng-and-killing-fields-guided-tour'),
    palace: img('royal-palace-national-museum-and-wat-phnom-with-private-tour-in-phnom-penh'),
    city: img('phnom-penh-must-visit-full-day-classic-city-tour-phnom-penh'),
    market: img('phnom-penh-morning-market-and-street-art-tour-by-tuk-tuk'),
    silk: img('phnom-penh-haft-day-tour-to-silk-island-by-tuk-tuk-phnom-penh'),
    cruise: img('phnom-penh-in-colour-street-art-and-sunset-mekong-cruise'),
    food: img('street-art-and-food-tour-with-pickup-and-beer-in-phnom-penh'),
    kampot: img('a-day-trip-to-kep-beach-and-kampot-from-phnom-penh-phnom-penh'),
    battambang: img('phnom-penh-to-battambang-transfer-with-cultural-stops-phnom-penh'),
    oudong: img('oudong-mountain-and-phnom-penh-full-day-private-tour'),
};

const CARD = {
    s21: { slug: 'tuol-sleng-and-killing-fields-guided-tour', title: 'Tuol Sleng and Choeung Ek with a Guide', description: 'The two Khmer Rouge sites in one half-day, with a guide and transport between them. Done quietly, at the right pace.', price: 'From $78', duration: '4 hours', image: IMG.s21, rating: '4.58' },
    s21private: { slug: 'killing-fields-and-s21-half-day-by-private-tour', title: 'Killing Fields and S-21, Private Half Day', description: 'The same two sites privately, so you can take as long as you need at each and leave when you are ready.', price: 'From $162', duration: '4 hours', image: IMG.s21, rating: '4.85' },
    palace: { slug: 'royal-palace-national-museum-and-wat-phnom-with-pr', title: 'Royal Palace, National Museum and Wat Phnom', description: 'The Silver Pagoda, the best Khmer sculpture collection anywhere, and the hill the city is named after.', price: 'From $163', duration: '4 hours', image: IMG.palace, rating: '4.88' },
    city: { slug: 'phnom-penh-must-visit-full-day-classic-city-tour', title: 'Phnom Penh Classic Full-Day City Tour', description: 'Palace, museum, markets and the riverfront in a single day, with a guide who can put them in order.', price: 'From $195', duration: '8 hours', image: IMG.city },
    market: { slug: 'phnom-penh-morning-market-and-street-art-tour-by', title: 'Morning Market and Street Art by Tuk-Tuk', description: 'The markets while they are still working, then the murals that have gone up across the city since 2015.', price: 'From $64', duration: '4 hours', image: IMG.market, rating: '4.95' },
    food: { slug: 'street-art-and-food-tour-with-pickup-and-beer', title: 'Street Art and Food Tour with Pickup', description: 'Eating where the city eats, with the ordering handled — which is the actual barrier in Cambodia.', price: 'From $51', duration: '4 hours', image: IMG.food, rating: '5.0' },
    silk: { slug: 'phnom-penh-haft-day-tour-to-silk-island-by', title: 'Koh Dach Silk Island by Tuk-Tuk', description: 'A short ferry upstream to the island where weavers still work handlooms under their houses and sell at the loom.', price: 'From $46', duration: 'Half day', image: IMG.silk, rating: '5.0' },
    cruise: { slug: 'phnom-penh-in-colour-street-art-and-sunset-mekong', title: 'Street Art and Sunset Mekong Cruise', description: 'The murals in the afternoon, then an hour on the water where the Mekong, Tonle Sap and Bassac meet.', price: 'From $72', duration: '4 hours', image: IMG.cruise, rating: '5.0' },
    kampot: { slug: 'a-day-trip-to-kep-beach-and-kampot-from', title: 'Kampot and Kep Day Trip', description: 'Pepper smallholdings under Bokor mountain, and blue swimmer crab cooked with green pepper at the Kep crab market.', price: 'From $306', duration: 'Full day', image: IMG.kampot, rating: '4.8' },
    battambang: { slug: 'phnom-penh-to-battambang-transfer-with-cultural-st', title: 'Phnom Penh to Battambang with Cultural Stops', description: 'The five-hour run on National Road 5 turned into a day out, rather than five hours of nothing.', price: 'From $215', duration: '9 hours', image: IMG.battambang },
    oudong: { slug: 'oudong-mountain-and-phnom-penh-full-day-private-to', title: 'Oudong Mountain Full-Day Private Tour', description: 'The royal capital for more than 250 years until 1866, with hilltop stupas holding the ashes of kings.', price: 'From $376', duration: '9 hours', image: IMG.oudong, rating: '5.0' },
};

export function getPhnomPenhInfoContent(slug: string): CityInfoData | null {
    switch (slug) {

        case 'tuol-sleng-and-choeung-ek-guide':
            return {
                title: 'Tuol Sleng and Choeung Ek: What to Expect, and How to Visit Properly',
                seoTitle: 'Tuol Sleng & Choeung Ek: Visitor Guide',
                description: 'A straight guide to S-21 and the Choeung Ek killing fields: opening hours, the audio guide, how long to allow, and what not to schedule afterwards.',
                heroImage: IMG.s21,
                fastFacts: [
                    { icon: 'Clock', label: 'Time needed', value: 'About half a day for both' },
                    { icon: 'MapPin', label: 'Distance apart', value: '~15 km' },
                    { icon: 'Info', label: 'Audio guide', value: 'Take it at Choeung Ek' },
                    { icon: 'AlertTriangle', label: 'Children', value: 'Not suitable for young children' },
                ],
                sections: [
                    {
                        title: 'What these two places are',
                        icon: 'Info',
                        content: "These are not attractions and this page is not going to describe them as a highlight.\n\n**Tuol Sleng** was an ordinary Phnom Penh secondary school. In 1975 the Khmer Rouge turned it into **Security Prison 21**, the central interrogation centre of a regime that killed somewhere between 1.5 and 2 million Cambodians in under four years. Between roughly **12,000 and 20,000 people** were held there. Around a dozen survived.\n\nThe buildings were barely converted, which is a large part of what makes the site what it is. The classrooms still have blackboards, tiled floors and the iron bed frames. The regime photographed every prisoner on arrival and kept meticulous files, and those photographs now fill room after room: faces looking directly at the camera, numbered.\n\n**Choeung Ek**, about fifteen kilometres out of the city, is where most of the people held at S-21 were taken to be killed. It was an orchard and a Chinese cemetery before it became one of several hundred such sites across the country. Mass graves have been excavated; others were left. The **memorial stupa at the centre holds some 5,000 skulls**, arranged and labelled by age and by the injuries that killed them.\n\nMore than two million Cambodians died between 1975 and 1979. Almost every Cambodian over fifty lost family. That is the context for how the country you are travelling in now came to look the way it does.",
                        tourCard: CARD.s21,
                    },
                    {
                        title: 'How to visit: order, timing, and the audio guide',
                        icon: 'Clock',
                        content: "**Do them in that order** - Tuol Sleng first, Choeung Ek second. S-21 gives you the machinery and the faces; Choeung Ek is the end of the same sentence. Reversing it makes the second half abstract.\n\n**Allow about an hour and a half at each**, plus the fifteen kilometres between, so half a day for the pair. Most people come back needing the rest of the day to be quiet, which is the real reason not to book anything demanding afterwards.\n\n**Take the audio guide at Choeung Ek.** It is the single best piece of advice on this page. It is narrated in part by a survivor, it paces you around the site properly, and it lets you stand still and listen rather than read panels in the sun. There is an audio guide at Tuol Sleng too and it is also good, though the site carries more of its own weight.\n\n**Go in the morning or the early afternoon.** Both sites close in the late afternoon and you do not want to be rushing the second one. Check current hours locally; they have shifted over the years and both observe Cambodian public holidays.\n\n**Photography** is permitted in most areas and prohibited inside some of the cell blocks and at the stupa, and the signs are clear. The obvious point still needs making: people come here to visit family. Behave accordingly.\n\n**Children** - not suitable for young ones. Teenagers who have been prepared for it generally manage, and often get a great deal out of it.",
                        tourCard: CARD.s21private,
                    },
                    {
                        title: 'Guided, private, or on your own',
                        icon: 'Star',
                        content: "**With a guide** is what most people should do, and specifically a Cambodian guide. The history is within living memory and guides here frequently have a direct family connection to it. That changes the visit from a museum trip into something else, and it is worth paying for.\n\n**A private half-day** costs more and buys you control of the pace. If you think you may want to sit down for twenty minutes, or leave early, this is the version to book.\n\n**On your own** is entirely workable - a tuk-tuk will take you to both and wait, and the audio guides carry the visit. This is the cheapest route and there is no shame in it.\n\n**What to avoid**: the combined tours that stack S-21 and Choeung Ek into the same day as the Royal Palace, the Russian Market and a sunset cruise. They exist and they sell, and the whiplash does no favours to any part of the day. Give these two sites their own half-day and see the [palace and the museum](/cambodia/phnom-penh/royal-palace-phnom-penh) on a different one.\n\n**Cost**: entry at each site is modest and the audio guide is a small extra; the practical cost is transport and a guide. Budget roughly USD 25-40 for a shared guided half-day, USD 80-160 for a private one with a car.",
                    },
                    {
                        title: 'Afterwards, and reading around it',
                        icon: 'Calendar',
                        content: "Plan the rest of the day before you go, because you will not want to make decisions afterwards. The riverfront along **Sisowath Quay** in the early evening is about the right weight - the city walks there, families, kids, food carts, and the fact that Phnom Penh is a loud and functioning capital is genuinely part of what you have come to understand.\n\nWhat not to do is the rooftop bar at seven. It is not disrespect exactly, it is just that it does not work.\n\n**If you want to read one thing first**, Loung Ung's *First They Killed My Father* is a child's account of the same years and is the book most Cambodian guides will name. Rithy Panh's documentary *S21: The Khmer Rouge Killing Machine* puts former guards and a survivor in the same rooms.\n\n**On the trials**: the UN-backed tribunal ran from 2006 and convicted a small number of senior figures, including the commandant of S-21. It closed in 2022. Ask your guide what Cambodians thought of it - the answers are more varied and more interesting than the summary.\n\n**A note on donations**: both sites have official channels and both are worth supporting. The organisations working with survivors and on documentation are the ones to give to; be wary of anyone collecting at the gate.\n\nBuilding a longer trip? The [5-day Cambodia itinerary](/cambodia/itineraries/5-days) puts these sites on the afternoon of the arrival day in Phnom Penh, deliberately, so the evening after them is free.",
                    },
                ],
                faqs: [
                    { q: 'How long do you need at Tuol Sleng and Choeung Ek?', a: 'About an hour and a half at each, plus the fifteen kilometres between them, so roughly half a day for the pair. Most people need the rest of the day to be quiet afterwards, so do not schedule anything demanding after.' },
                    { q: 'Which should I visit first, S-21 or the Killing Fields?', a: 'Tuol Sleng first, Choeung Ek second. S-21 gives you the prison, the records and the faces; Choeung Ek is where that ended. Done the other way round, the second half feels abstract.' },
                    { q: 'Is the Choeung Ek audio guide worth it?', a: 'Yes, and it is the single most useful thing to take. It is narrated in part by a survivor and it paces you around the site so you can stand still and listen rather than read panels in the sun.' },
                    { q: 'Can children visit Tuol Sleng?', a: 'Not young children. The photographs, the cells and the stupa are explicit, and both sites say so. Teenagers who have been prepared for it usually manage well and often take a lot from it.' },
                    { q: 'Do I need a guide for the Killing Fields?', a: 'Not strictly - the audio guides carry both sites and a tuk-tuk will take you and wait. But a Cambodian guide frequently has a direct family connection to these years, and that turns it into a different kind of visit.' },
                    { q: 'How much does it cost to visit S-21 and Choeung Ek?', a: 'Entry at each is modest with a small charge for the audio guide. The real cost is transport and a guide: roughly USD 25-40 for a shared guided half-day, or USD 80-160 for a private car and guide.' },
                ],
            };

        case 'royal-palace-phnom-penh':
            return {
                title: 'Royal Palace and the Silver Pagoda: Dress Code, Hours and What You Can Actually See',
                seoTitle: 'Royal Palace Phnom Penh: Tickets & Dress Code',
                description: 'What is open at the Royal Palace in Phnom Penh, the Silver Pagoda inside it, the dress code enforced at the gate, and why the National Museum next door closes for lunch.',
                heroImage: IMG.palace,
                fastFacts: [
                    { icon: 'AlertTriangle', label: 'Dress code', value: 'Shoulders and knees, enforced' },
                    { icon: 'Star', label: 'Silver Pagoda floor', value: '5,000 silver tiles' },
                    { icon: 'Star', label: 'Gold Buddha', value: '90 kg, 2,000+ diamonds' },
                    { icon: 'Clock', label: 'National Museum', value: 'Closes for lunch' },
                ],
                sections: [
                    {
                        title: 'A palace that is still someone’s house',
                        icon: 'Star',
                        content: "The Royal Palace has been the residence of the Cambodian king since **1866**, when the capital moved back to Phnom Penh, and it is **still lived in**. That single fact governs the whole visit.\n\nThe royal apartments are closed and always will be. The **Throne Hall**, the building on every postcard, is seen from the outside; you walk the terrace and look in, rather than through. That disappoints people who arrive expecting Bangkok's Grand Palace, and it is worth knowing before you pay rather than after.\n\nWhat you do get is a compound that is calm, well kept and genuinely beautiful, with a coronation hall, a pavilion Napoleon III shipped over in pieces, and gardens that are still gardens rather than a queue management system. It is smaller and quieter than its Thai equivalent, and a lot of people prefer it for exactly that.\n\n**The Silver Pagoda**, inside the same walls, is the reason to come. Its name comes from the **five thousand silver tiles of its floor**, more than five tonnes of them, most now covered with carpet to protect them - a corner is left exposed so you can see. Inside is the Emerald Buddha of Cambodia, in baccarat crystal, and in front of it a life-size Maitreya Buddha of **90 kilograms of gold set with more than two thousand diamonds**, the largest of them around 25 carats. Around the courtyard runs a mural of the Reamker, the Khmer Ramayana, painted in the 1900s and slowly being restored.",
                        tourCard: CARD.palace,
                    },
                    {
                        title: 'The dress code, and the other things that turn people away',
                        icon: 'AlertTriangle',
                        content: "**Shoulders and knees covered, for everyone, men included, and it is enforced at the gate rather than apologetically suggested.** No vests, no shorts above the knee, no strappy tops, nothing see-through. There is a place to buy or borrow a cover-up and there is a queue for it in the middle of the day, which will cost you exactly the cool morning you got up for.\n\nThe practical answer is light long trousers and a sleeved shirt. You want them anyway - the compound is open and there is very little shade.\n\n**Shoes come off** at the Silver Pagoda. Wear something you can slip out of.\n\n**Hours**: the palace opens in the morning, **closes over the middle of the day**, and reopens in the afternoon; it also shuts entirely for royal ceremonies and state occasions, sometimes at short notice. Check on the day rather than assuming.\n\n**Photography** is fine in the grounds and **not permitted inside the Silver Pagoda**. This is enforced.\n\n**Tickets** are bought at the gate. An audio guide and licensed guides are available at the entrance; the guides are worth it here because almost nothing is labelled in any depth and the Reamker mural in particular means nothing without someone to read it to you.\n\n**Go in the morning.** The palace and the [National Museum](/cambodia/phnom-penh/phnom-penh-2-day-itinerary) next door are a single unit in practice, and the museum closes for lunch, so an early start gets you both before the heat.",
                    },
                    {
                        title: 'The National Museum next door, which is the better building',
                        icon: 'MapPin',
                        content: "A hundred metres from the palace gate is the **National Museum of Cambodia**, and if you only have time for one, a lot of people would tell you to make it this one.\n\nIt holds the best collection of **Khmer sculpture anywhere in the world**: pre-Angkorian pieces from the 6th century onwards, the great Angkorian bronzes and stone figures, and a reclining Vishnu from the West Mebon that is the single finest bronze to survive from the empire. The building itself, a terracotta pavilion around an open courtyard built in 1920, is worth the ticket on its own.\n\nWhat makes it land is the order you see it in. If you come to Phnom Penh **after** Siem Reap, you will have spent days looking at these figures in situ - eroded, in place, often with their heads gone. Indoors, lit, at eye level, with the carving intact, they finally read as sculpture rather than as architecture. That is an argument for doing [Siem Reap first](/cambodia/itineraries/5-days) on a two-city trip.\n\n**It closes for lunch**, so pair it with the palace in the morning rather than the afternoon. Photography is not allowed inside the galleries but is fine in the courtyard.\n\nThe two together are about three hours. With the riverfront a five-minute walk away, that is a complete and unhurried morning.",
                        tourCard: CARD.city,
                    },
                    {
                        title: 'What else is within walking distance',
                        icon: 'Info',
                        content: "**Wat Phnom** is a fifteen-minute tuk-tuk north and is where the city gets its name: the hill (*phnom*) of Lady Penh, who according to the legend found four Buddha statues in a floating koki tree in the river around 1372 and raised the mound to house them. It is a working temple, busy with people praying for specific outcomes, and it is the one place in central Phnom Penh with genuine shade.\n\n**Sisowath Quay** runs along the front, and the promenade is where the city walks in the evening. Phnom Penh sits at the confluence of the **Mekong, the Tonle Sap and the Bassac**, which is unusual enough to be worth standing and looking at for a while.\n\n**The Central Market**, Psar Thmei, is a ten-minute ride and its **art deco dome opened in 1937** - it was briefly one of the largest domed buildings in Asia. It is bright, it is cool under the dome, and it is mostly watches and electronics now.\n\n**The Russian Market**, properly **Psar Toul Tom Poung**, is further south and is the one for silver, silk and knock-offs. It got its name from Soviet expatriates shopping there in the 1980s and nobody has bothered to change it. The food stalls in the middle are good and the whole thing is hot and cramped by eleven, so go early.\n\n**Independence Monument**, at the centre of a roundabout, is worth a look at night when it is lit - a 1958 lotus-shaped tower by Vann Molyvann, the architect of New Khmer Architecture, whose buildings are scattered across the city and are a whole separate walk.",
                        tourCard: CARD.market,
                    },
                ],
                faqs: [
                    { q: 'What is the dress code for the Royal Palace in Phnom Penh?', a: 'Shoulders and knees covered, for everyone including men, and it is enforced at the gate. No vests, shorts above the knee or strappy tops. Cover-ups can be bought or borrowed there, but the queue in the middle of the day will cost you your early start.' },
                    { q: 'Can you go inside the Throne Hall at the Royal Palace?', a: 'No. The palace is still the king’s residence, so the royal apartments are closed and the Throne Hall is viewed from outside. The Silver Pagoda in the same compound is the part you go into.' },
                    { q: 'Why is it called the Silver Pagoda?', a: 'Its floor is laid with five thousand solid silver tiles, more than five tonnes of them. Most are now covered with carpet to protect them, with a corner left exposed so visitors can see.' },
                    { q: 'Is the National Museum of Cambodia worth visiting?', a: 'It holds the best Khmer sculpture collection in the world and it is next door to the palace, so there is no reason to skip it. It lands hardest if you come to Phnom Penh after Siem Reap, when you have already seen these figures weathered and in place.' },
                    { q: 'How long do the Royal Palace and National Museum take?', a: 'About three hours for both, and they work best as a single morning because the museum closes for lunch. Add the riverfront five minutes away and that is a complete unhurried half-day.' },
                    { q: 'Can I take photos in the Royal Palace?', a: 'In the grounds yes, inside the Silver Pagoda no, and that is enforced. The National Museum next door also bans photography in the galleries but allows it in the courtyard.' },
                ],
            };

        case 'phnom-penh-2-day-itinerary':
            return {
                title: '2 Days in Phnom Penh: The Khmer Rouge Sites, the Palace and the River',
                seoTitle: '2 Days in Phnom Penh: A Complete Itinerary',
                description: 'A 2-day Phnom Penh itinerary that gives Tuol Sleng and Choeung Ek their own half-day, then the Royal Palace, the museum, the markets and the Mekong.',
                heroImage: IMG.city,
                fastFacts: [
                    { icon: 'Clock', label: 'Day 1 afternoon', value: 'S-21 and Choeung Ek' },
                    { icon: 'Clock', label: 'Day 2 morning', value: 'Palace and museum' },
                    { icon: 'MapPin', label: 'Airport', value: 'Techo (KTI), 20-24 km south' },
                    { icon: 'Star', label: 'Best half-day extra', value: 'Koh Dach silk island' },
                ],
                sections: [
                    {
                        title: 'Why two days, and why in this order',
                        icon: 'Star',
                        content: "Two nights is the minimum that makes Phnom Penh worth the journey, and it is also enough. One day gets you the Khmer Rouge sites or the palace, not both, and a single day that tries for both does justice to neither.\n\nThe order matters more than the content. **Tuol Sleng and Choeung Ek go on the afternoon of the first day**, and nothing else goes after them. The palace, the museum and the river go on the second morning. Done that way the trip has a shape: the hardest thing first, and then a day that shows you the city those events happened to, still functioning, loud and ordinary.\n\nThe reverse order - palace first, killing fields last - is what a lot of tours sell because it fits their transfers, and it leaves you finishing the city at Choeung Ek and getting on a plane. It is a worse trip.\n\nOne piece of logistics that catches people out: **Phnom Penh switched to Techo International Airport on 9 September 2025**, about 20 to 24 kilometres south of the centre, so allow 40 to 50 minutes each way and more in the evening peak. The old airport was half that.",
                        tourCard: CARD.s21,
                    },
                    {
                        title: 'Day 1: arrive, and the Khmer Rouge sites',
                        icon: 'Clock',
                        content: "**Morning** - however you arrive. From Siem Reap it is 315 kilometres and five and a half to six hours on National Road 6, or 55 minutes flying which is about four and a half hours door to door now both airports sit outside their cities. Either way you land with an afternoon.\n\n**Afternoon: Tuol Sleng, then Choeung Ek.** S-21 was a secondary school until the Khmer Rouge converted it in 1975; the classrooms still hold the iron bed frames and the photographs the regime took of every prisoner on arrival. Of the twelve to twenty thousand people held there, around a dozen survived. Choeung Ek is fifteen kilometres out, and its memorial stupa holds some 5,000 skulls. **Take the audio guide there** - it is narrated in part by a survivor and it is what makes the site walkable.\n\nAllow an hour and a half at each, so half a day for the pair. Our [full guide to both sites](/cambodia/phnom-penh/tuol-sleng-and-choeung-ek-guide) covers hours, photography rules and what to read first.\n\n**Evening: Sisowath Quay.** The riverfront promenade is where the city walks after work - families, food carts, aerobics classes in the park. It is the right weight for what is left of the day and it is free. Eat somewhere unremarkable and go to bed.",
                        tourCard: CARD.s21private,
                    },
                    {
                        title: 'Day 2: palace, museum, markets, Mekong',
                        icon: 'MapPin',
                        content: "**Early morning: the Royal Palace.** Residence of the Cambodian king since 1866 and still lived in, so the apartments are closed and the Throne Hall is seen from outside. The **Silver Pagoda** in the same compound is floored with five thousand silver tiles, most now covered, and holds a Buddha of 90 kilograms of gold set with more than two thousand diamonds. **Shoulders and knees covered**, enforced at the gate. Details in our [Royal Palace guide](/cambodia/phnom-penh/royal-palace-phnom-penh).\n\n**Late morning: the National Museum**, a hundred metres away, holding the best Khmer sculpture collection in the world in a 1920 terracotta pavilion. It **closes for lunch**, so this has to be a morning stop.\n\n**Afternoon: the markets.** The **Central Market**'s art deco dome opened in 1937 and is cool underneath; the **Russian Market**, properly Psar Toul Tom Poung, is the one for silver, silk and knock-offs, hot and cramped by eleven so aim early or late. A tuk-tuk street-art and market run is the easiest way to see the streets between them, and the mural scene here has become genuinely good since about 2015.\n\n**Evening: the Mekong.** Phnom Penh sits where the Mekong, the Tonle Sap and the Bassac meet, and an hour on the water at sunset costs very little. It is also the best way to understand the geography that put a capital here.",
                        tourCard: CARD.cruise,
                    },
                    {
                        title: 'If you have a third day',
                        icon: 'Calendar',
                        content: "**Koh Dach, the silk island** - a short ferry upstream, and the best of the options. Weavers still work handlooms under their stilt houses and sell direct at the loom, for a fraction of the Russian Market price and with the piece being made in front of you. It is a half-day by tuk-tuk or a full day by bike, and the island itself is flat, green and almost traffic-free.\n\n**Oudong**, 40 kilometres north-west, was the royal capital for more than 250 years until 1866, and its hilltop stupas hold the ashes of kings. A full day with the drive, and quiet.\n\n**Kampot and Kep** as a day trip - three to four hours each way, which is a lot for one day, but the pepper smallholdings and the Kep crab market are the best eating in the country. If you can stay a night instead, do; if your dates are fixed, the day trip is still worth it.\n\n**Phnom Tamao**, the wildlife rescue centre south of the city, takes in animals confiscated from the trade and is a genuine rescue operation rather than a zoo with a good story. Worth checking the current arrangements before booking.\n\nIf the third day is really about getting somewhere else, the transfer to **Battambang** with cultural stops on National Road 5 turns five hours of road into a day, and lines you up for the bamboo train and the bat cave. Our [Cambodia itineraries](/cambodia/itineraries) set out where each of these fits.",
                        tourCard: CARD.silk,
                    },
                ],
                faqs: [
                    { q: 'Is 2 days enough for Phnom Penh?', a: 'Yes for a first visit. Two days covers Tuol Sleng and Choeung Ek with their own half-day, the Royal Palace and the National Museum, the markets and an evening on the Mekong. A third day buys Koh Dach silk island or Oudong.' },
                    { q: 'What order should I do Phnom Penh in?', a: 'Khmer Rouge sites on the first afternoon with nothing after them, palace and museum on the second morning. Doing it the other way round means finishing your trip at Choeung Ek and getting on a plane, which is a worse day.' },
                    { q: 'How do I get from Siem Reap to Phnom Penh?', a: '315 km on National Road 6, five and a half to six hours by bus, or 55 minutes flying which works out around four and a half hours door to door now both airports are well outside their cities. The bus drops you in the centre; the plane saves about ninety real minutes.' },
                    { q: 'How far is Phnom Penh airport from the city?', a: 'Techo International Airport opened on 9 September 2025 about 20 to 24 kilometres south of the centre. Allow 40 to 50 minutes and more in the evening peak. The airport it replaced was roughly half that distance.' },
                    { q: 'Is Phnom Penh worth visiting?', a: 'Yes, and not only for the Khmer Rouge sites. It has the best Khmer sculpture collection in the world, a still-occupied royal palace, a genuinely good street-food and mural scene, and a riverfront at the meeting of three rivers. Two days is the right amount.' },
                    { q: 'Is Phnom Penh safe for tourists?', a: 'Broadly yes, with ordinary city caution. Bag-snatching from passing motorbikes is the common problem, so keep bags on the inside shoulder and phones away from the kerb, particularly at night and on the riverfront.' },
                ],
            };

        case 'phnom-penh-food-and-markets':
            return {
                title: 'Eating in Phnom Penh: The Markets, the Street Food and the Mural Streets',
                seoTitle: 'Phnom Penh Food Guide: Markets & Street Food',
                description: 'Where to eat in Phnom Penh: the four markets that matter, the Khmer dishes worth going out of your way for, and the street-art streets they sit on.',
                heroImage: IMG.food,
                fastFacts: [
                    { icon: 'Clock', label: 'Market food', value: 'Best before 09:00' },
                    { icon: 'Star', label: 'The city dish', value: 'Kuy teav, pork-bone noodles' },
                    { icon: 'Wallet', label: 'Street plate', value: 'USD 1.50 - 3' },
                    { icon: 'MapPin', label: 'Best market to eat in', value: 'Psar Toul Tom Poung' },
                ],
                sections: [
                    {
                        title: 'The four markets, and what each is actually for',
                        icon: 'MapPin',
                        content: "**Psar Thmei, the Central Market** - the landmark. Its **art deco dome opened in 1937** and was briefly among the largest in Asia; it is cool underneath and worth walking through for the building. The trade inside is mostly watches, electronics and gold. Eat at the edges rather than the middle.\n\n**Psar Toul Tom Poung, the Russian Market** - named for the Soviet expatriates who shopped there in the 1980s, and the best of the four. Silver, silk, motorbike parts and knock-offs in a hot, low, cramped grid, with a food court in the middle that is genuinely good and genuinely local. Go before eleven; after that the heat under the roof becomes the main sensation.\n\n**Psar Kandal and Psar Chas (the old market)** - the smaller working markets near the river, and the ones to walk through in the morning for produce, fish and breakfast rather than for shopping.\n\n**Psar Orussey** - the biggest and the least visited by travellers, three floors of everything, where the city genuinely does its shopping.\n\nThe pattern across all of them: **the food is a morning thing**. Breakfast trade at a Cambodian market is finished by nine or ten, which is why so many visitors conclude the food is unremarkable - they arrived at two in the afternoon.",
                        tourCard: CARD.market,
                    },
                    {
                        title: 'What to order',
                        icon: 'Star',
                        content: "**Kuy teav** is the Phnom Penh breakfast: a clear pork-bone broth over rice noodles, with pork, offal, dried shrimp and fried garlic, which you finish yourself from the tray on the table - lime, chilli, herbs, bean sprouts, a spoon of sugar if that is how you take it. A dollar fifty, eaten sitting on a plastic stool before eight, and it is the most Phnom Penh thing there is.\n\n**Num banh chok** - cold rice noodles under a green fish-and-lemongrass gravy, piled with raw banana flower, cucumber and whatever herbs are in the basket. Sold from a shoulder pole or a cart, and gone by mid-morning.\n\n**Bai sach chrouk** - grilled marinated pork over broken rice with pickled vegetables and a bowl of clear broth on the side. The other breakfast, about a dollar fifty.\n\n**Lok lak** - beef seared hard with black pepper over salad and rice with a fried egg, and a dipping sauce of lime, salt and crushed **Kampot pepper**, which carries a protected geographical indication and is the reason the sauce works.\n\n**Fish amok** - the national dish, a coconut and kroeung curry steamed in a banana-leaf cup until it sets. Steamed, not stirred in a wok; the loose version is the shortcut.\n\n**Prahok ktis** - fermented fish paste with pork and coconut, eaten with raw vegetables. A genuine acquired taste and the most honest thing on a Khmer menu.\n\nCambodian food is **much less chilli-forward than Thai**. Heat sits on the table, not in the pot.",
                        tourCard: CARD.food,
                    },
                    {
                        title: 'Where to eat, beyond the markets',
                        icon: 'Info',
                        content: "**Bassac Lane** - a cluster of narrow bar-and-kitchen spaces off Street 308, small, good and busy in the evening. This is where the city's own restaurant scene got interesting.\n\n**Street 240 and around** - independent kitchens, coffee and the pleasant end of the colonial grid, walkable from the palace.\n\n**Boeung Keng Kang (BKK1)** - the expat district, which cuts both ways: reliable international food, less reason to have flown here for it. Good for a night when you want a salad.\n\n**The riverfront, Sisowath Quay** - the view is the product and the food is priced for it. Have a drink, eat elsewhere.\n\n**The training restaurants** are a real Phnom Penh thing and worth seeking out: several kitchens in the city run as hospitality training programmes for young Cambodians from difficult backgrounds, and a few of them cook as well as anywhere in the city. Ask your guide which are currently operating - the list changes.\n\n**Street food safety** works the same as anywhere: eat where there is turnover and a queue, prefer things cooked to order in front of you, and be more careful with cut fruit and ice from unbranded sources than with hot food off a busy stall. Bottled water throughout.",
                    },
                    {
                        title: 'The murals, and putting a day together',
                        icon: 'Calendar',
                        content: "Phnom Penh has quietly become a **street-art city** since around 2015, and the work is concentrated in a few areas rather than scattered: the lanes off the riverfront, around the White Building site, and pockets across the south of the centre. A lot of it is Cambodian rather than imported, and several pieces deal directly with the city's own recent history.\n\nIt pairs naturally with food, which is why most of the good tuk-tuk tours here do both - murals in the late afternoon, then eating as the light goes, then the river. The city is flat and compact enough that a tuk-tuk covers a lot of ground in four hours.\n\n**A good eating day in Phnom Penh** looks like this: kuy teav at a market stall before eight; the [Royal Palace and the National Museum](/cambodia/phnom-penh/royal-palace-phnom-penh) in the cool of the morning; the Russian Market food court before eleven; the middle of the day indoors, because it is genuinely hot; murals and street food from four; and an hour on the Mekong at sunset.\n\n**Coffee** deserves a note. Cambodian iced coffee is dark, often butter-roasted, and served over ice with condensed milk - ask for *kafe tuk doh koh* and expect sweet. There is also a serious third-wave scene here now, much of it sourcing from Mondulkiri in the east, which is a genuinely good Cambodian arabica most visitors never hear about.",
                        tourCard: CARD.cruise,
                    },
                ],
                faqs: [
                    { q: 'What food is Phnom Penh known for?', a: 'Kuy teav, a clear pork-bone noodle soup you finish yourself at the table, is the city’s breakfast and the dish most associated with it. Beyond that: num banh chok, bai sach chrouk, lok lak with Kampot pepper, and fish amok.' },
                    { q: 'Which market is best for food in Phnom Penh?', a: 'Psar Toul Tom Poung, the Russian Market, whose food court in the middle is both good and genuinely local. Go before eleven - after that the heat under the low roof becomes the main sensation.' },
                    { q: 'What time should I go to a Phnom Penh market?', a: 'Before nine if you are there to eat. The breakfast trade at a Cambodian market finishes by nine or ten, which is why visitors who turn up mid-afternoon conclude the food is unremarkable.' },
                    { q: 'Is Cambodian food spicy?', a: 'Much less than Thai. Khmer cooking is built on lemongrass, galangal, turmeric and kaffir lime rather than chilli, and heat is offered on the table rather than cooked in.' },
                    { q: 'Is street food in Phnom Penh safe?', a: 'Broadly yes with normal care: eat where there is turnover and a queue, choose food cooked to order in front of you, and be more cautious with cut fruit and ice from unbranded sources than with anything hot off a busy stall.' },
                    { q: 'What is Kampot pepper?', a: 'Pepper grown on smallholdings around Kampot in the south, carrying a protected geographical indication - the first Cambodia registered. Green peppercorns still on the stem are a different ingredient from ground pepper, and they are what makes the lok lak dipping sauce work.' },
                ],
            };

        case 'phnom-penh-to-siem-reap-transport':
            return {
                title: 'Phnom Penh to Siem Reap: Bus, Flight or Private Car, and Which Actually Wins',
                seoTitle: 'Phnom Penh to Siem Reap: Bus vs Flight',
                description: '315 km on National Road 6. Bus, flight, private car and boat compared on real door-to-door time, now that both Cambodian airports have moved out of town.',
                heroImage: IMG.battambang,
                fastFacts: [
                    { icon: 'MapPin', label: 'Distance', value: '315 km, National Road 6' },
                    { icon: 'Clock', label: 'Bus', value: '5.5 - 6 hours, centre to centre' },
                    { icon: 'Clock', label: 'Flight', value: '55 min air, ~4.5 h door to door' },
                    { icon: 'Wallet', label: 'Private car', value: 'From about USD 90' },
                ],
                sections: [
                    {
                        title: 'The arithmetic nobody does',
                        icon: 'Star',
                        content: "The standard advice is to fly, and it was right until recently. **Both Cambodian airports have moved, and both moved further out.**\n\n**Siem Reap-Angkor International (SAI)** opened on 16 October 2023, about **45 kilometres east** of Siem Reap - a 45 to 60 minute drive, up to 75 in the rains or at peak hour. The airport it replaced was ten minutes from town.\n\n**Techo International (KTI)** opened on 9 September 2025, about **20 to 24 kilometres south** of Phnom Penh, a 40 to 50 minute run. Roughly double the old one.\n\nSo the flight, which is **55 minutes in the air**, now looks like this door to door: 45 minutes to KTI, an hour or more at the airport, 55 minutes flying, then an hour into Siem Reap. **About four and a half hours**, plus whatever buffer you personally keep.\n\nThe bus is **315 kilometres on National Road 6** and takes **five and a half to six hours**, and it puts you down in the middle of town at both ends. That is a gap of roughly ninety useful minutes, for several times the price and two airport experiences.\n\n**The honest conclusion**: fly if your trip is five days or shorter and every hour counts. Take the road if it is not, because the ninety minutes is not worth much and the country between the two cities is most of the country.",
                        tourCard: CARD.battambang,
                    },
                    {
                        title: 'The options in detail',
                        icon: 'Info',
                        content: "**Bus** - the default, and better than its reputation. Several operators run the route with air-conditioned coaches, most with a rest stop, from roughly USD 10 to 25 depending on the operator and the seat. The fastest scheduled services do it in about five and a half hours. Book a day or two ahead in the November to February peak; outside that, the morning of is usually fine.\n\n**Sleeper bus** - overnight services exist with flat berths. They save you a hotel night and cost you a night's sleep on a road that is not smooth. Most people try it once.\n\n**Minivan** - faster and less comfortable, around four and a half to five hours if the driver is in a hurry, which is not always something to wish for.\n\n**Private car with driver** - from about USD 90 for the route and the obvious choice for two or more people. It is also the version that turns the transfer into a day: **Kampong Thom** is roughly halfway and has the pre-Angkorian brick towers of **Sambor Prei Kuk** nearby, listed by UNESCO in 2017 and older than Angkor itself. Several operators sell exactly this, a transfer with cultural stops, and it is a much better use of the day than five hours of nothing.\n\n**Flight** - Cambodia Angkor Air and others run the route several times a day, 55 minutes in the air, typically USD 70-150 one way depending on season and how far ahead you book.\n\n**Boat** - there is a river and lake service in the wet season, and it is slow, expensive and uncomfortable compared with the alternatives. The good Cambodian boat journey is Siem Reap to **Battambang**, not this one.",
                    },
                    {
                        title: 'Breaking the journey, which is usually the right call',
                        icon: 'MapPin',
                        content: "If you have the days, do not treat this as a transfer at all.\n\n**Battambang** is the best stop in the country that nobody makes. It is not on National Road 6 - it sits west, on National Road 5 - so it is a detour rather than a waypoint, but from Phnom Penh it is about five hours and from Battambang to Siem Reap about three, which is barely more road than the direct route. You get French shophouses on a river, the **bamboo train** (now running on a purpose-built track at Banan rather than the original O Dambong line, which is worth knowing before you buy the ticket), and at dusk millions of wrinkle-lipped bats pouring out of a cliff cave at **Phnom Sampeau** in an unbroken half-hour ribbon. The same hill holds a Khmer Rouge killing cave, and meeting that after Phnom Penh and before Siem Reap is the right order for the history.\n\n**Kampong Thom** is the halfway stop on the direct route, and **Sambor Prei Kuk** nearby is pre-Angkorian - 7th-century brick towers standing in forest, with almost nobody there.\n\n**Kampong Cham**, a couple of hours out of Phnom Penh, has the bamboo bridge to Koh Paen in the dry season, rebuilt by hand every year after the floods take it.\n\nOur [6-day](/cambodia/itineraries/6-days) and [7-day](/cambodia/itineraries/7-days) Cambodia itineraries both put Battambang between the two cities, for exactly this reason.",
                        tourCard: CARD.oudong,
                    },
                    {
                        title: 'Practicalities',
                        icon: 'Clock',
                        content: "**Direction matters.** Do **Siem Reap first and Phnom Penh second** if you can. You have the most energy for Angkor on the days you have just arrived, it is easier to reach the Khmer Rouge sites having already seen what Cambodia built, and it puts your last day near the nearer airport.\n\n**Fly open-jaw**, into Siem Reap and out of Phnom Penh. Regional carriers price the legs separately, so it usually costs the same as a return into either, and you never repeat the 315 kilometres.\n\n**Leave in the morning** whichever way you go. An afternoon departure by road means arriving after dark, and National Road 6 at night with livestock and unlit motorbikes is not the part of Cambodia to experience.\n\n**Road conditions** are fine - surfaced the whole way, with the normal delays for roadworks, markets spilling into the carriageway and slow traffic. The five and a half to six hours already includes that reality; do not plan on beating it.\n\n**Book ahead** in the November to February peak, a day or two for buses and longer for the better private drivers. Outside peak, same-day is usually fine.\n\n**Money on the road**: US dollars everywhere, riel as change under a dollar, and small notes for rest stops. Bring clean, untorn bills - damaged ones get refused.",
                    },
                ],
                faqs: [
                    { q: 'Should I fly or take the bus from Phnom Penh to Siem Reap?', a: 'The flight is 55 minutes in the air but about four and a half hours door to door now both airports sit well outside their cities. The bus is 315 km and five and a half to six hours, centre to centre, for a fraction of the price. The plane buys you roughly ninety useful minutes.' },
                    { q: 'How long is the bus from Phnom Penh to Siem Reap?', a: 'Five and a half to six hours over 315 kilometres on National Road 6, with the fastest scheduled services around five and a half. Tickets run roughly USD 10 to 25 depending on the operator.' },
                    { q: 'Is the road from Phnom Penh to Siem Reap good?', a: 'Yes, surfaced the whole way, with the usual delays for roadworks, roadside markets and slow traffic. The quoted five and a half to six hours already accounts for that, so do not plan on beating it. Travel in daylight.' },
                    { q: 'Can I stop somewhere between Phnom Penh and Siem Reap?', a: 'Kampong Thom is roughly halfway, with the pre-Angkorian brick towers of Sambor Prei Kuk nearby - UNESCO-listed in 2017 and older than Angkor. Battambang is a detour on National Road 5 rather than a waypoint, but it is the best stop in the country that most people skip.' },
                    { q: 'How much is a private car from Phnom Penh to Siem Reap?', a: 'From about USD 90 for the route, which makes it the obvious choice for two or more people. Transfer-with-stops versions cost more and turn five hours of road into an actual day out.' },
                    { q: 'Should I visit Siem Reap or Phnom Penh first?', a: 'Siem Reap first. You have the most energy for Angkor on your freshest days, the Khmer Rouge sites land better once you have seen what Cambodia built, and it leaves your last day near the closer airport. Fly open-jaw so you never repeat the 315 km.' },
                ],
            };

        case 'best-time-to-visit-phnom-penh':
            return {
                title: 'Best Time to Visit Phnom Penh: Heat, Rain and the Water Festival',
                seoTitle: 'Best Time to Visit Phnom Penh: Month by Month',
                description: 'Phnom Penh month by month: the cool dry window, why April is genuinely hard work, and the November water festival that marks the Tonle Sap reversing.',
                heroImage: IMG.cruise,
                fastFacts: [
                    { icon: 'Star', label: 'Best window', value: 'November - February' },
                    { icon: 'AlertTriangle', label: 'Hottest', value: 'April, high 30s' },
                    { icon: 'Calendar', label: 'Water festival', value: 'Bon Om Touk, November' },
                    { icon: 'Wallet', label: 'Cheapest', value: 'May - September' },
                ],
                sections: [
                    {
                        title: 'The short answer',
                        icon: 'Star',
                        content: "**November to February.** Dry, with mornings that are actually pleasant and evenings you can spend outside, which matters more in Phnom Penh than in Siem Reap because this is a city you see on foot and from a tuk-tuk rather than inside a temple complex.\n\nThe city is hotter and more humid than most visitors expect, and it does not have Siem Reap's option of retreating to a hotel pool between temples. A day here is markets, a palace courtyard, a walk along the river - all of it outdoors, most of it unshaded.\n\n**November is the standout month**, and not only for the weather. **Bon Om Touk**, the water festival marking the reversal of the Tonle Sap river, falls in November and is the biggest event in the Cambodian calendar. Boat racing teams come from across the country, the riverfront fills, and the city is busier and better than at any other time of year. It is also completely booked out, so plan months ahead or plan around it.\n\nThe flip side: **April**. High thirties, heavy humidity ahead of the rains, and a city that becomes genuinely hard work between eleven and four.",
                        tourCard: CARD.cruise,
                    },
                    {
                        title: 'Month by month',
                        icon: 'Calendar',
                        content: "**November** - the best month. Rains finished, humidity dropping, the river high, and the water festival. Book early.\n\n**December - January** - the coolest and driest stretch, with mornings in the mid-twenties. Peak season prices, though Phnom Penh never gets Siem Reap's crush.\n\n**February** - still dry and comfortable, warming through the month.\n\n**March** - heat building. Mornings fine, afternoons increasingly not.\n\n**April** - the hardest month. High thirties, thick humidity, and **Khmer New Year around 13-16 April**, which is a genuine national shutdown. Much of Phnom Penh empties as people return to their home provinces; a lot of businesses and some museums close, and the city is unusually quiet in a way that is either lovely or inconvenient depending on your plans. Water-throwing is part of it and you will not stay dry.\n\n**May - June** - the rains establish. Hot, humid, with heavy afternoon storms that can flood streets quickly and briefly. Prices fall.\n\n**July - August** - proper wet season, usually one heavy hour rather than all-day rain. The city is green, the river is rising, and hotels are cheap.\n\n**September - October** - the wettest weeks and the lowest prices. **Pchum Ben**, the ancestor festival, falls in September or October and is a solemn public holiday when pagodas are crowded and many businesses close for several days. Worth seeing; worth checking the dates.",
                    },
                    {
                        title: 'Practical planning for the heat and the rain',
                        icon: 'Clock',
                        content: "**Shape the day around the middle of it.** Out early for the markets - the food trade is done by nine anyway - then the [palace and the museum](/cambodia/phnom-penh/royal-palace-phnom-penh) in the cool of the morning, indoors or asleep from twelve to three, and back out from four. This is not laziness; it is how the city itself works.\n\n**The rain is short and sharp**, not a drizzle. From May to October the afternoon storm arrives fast, drops a lot of water, floods some streets for half an hour and then stops. A light poncho beats an umbrella because the wind comes with it, and tuk-tuks have roll-down sides that work better than you would expect.\n\n**Dress for the palace, not for the weather.** The Royal Palace enforces shoulders and knees at the gate, for everyone, whatever the temperature. Light long trousers and a sleeved shirt are the answer and are better in the sun anyway.\n\n**Mosquitoes** are worth taking seriously, particularly at dusk and in the rainy months. Dengue is present in Cambodia and Phnom Penh is an urban dengue environment; repellent and covered ankles in the evening are the sensible minimum.\n\n**Flooding** during heavy rain affects some streets more than others, and a tuk-tuk will simply refuse a flooded road. Build slack into anything time-critical in the wet season.",
                        tourCard: CARD.market,
                    },
                    {
                        title: 'Prices, crowds and festivals',
                        icon: 'Wallet',
                        content: "Phnom Penh is cheaper than Siem Reap for equivalent quality and much less seasonal, because it is a working capital rather than a tourism town. The swing is real but nothing like the temple economy up north.\n\n**Peak (December - January, plus water festival week in November)**: rates up meaningfully, and the water festival week is genuinely full. Book ahead for that one specifically.\n\n**High (November, February)**: comfortable weather, good availability.\n\n**Shoulder (March, October)**: softening prices, workable conditions.\n\n**Low (May - September)**: 30-40% below peak, and good hotels become very good value.\n\n**What things cost**: guesthouse double USD 15-30; a good hotel with a pool USD 40-80; the riverside and BKK1 boutiques USD 100 and up. A tuk-tuk across town is a couple of dollars, a half-day city tour USD 45-65, and a private full-day car with guide USD 130-200. Street food USD 1.50-3 a plate.\n\n**Festivals worth knowing about**: **Bon Om Touk** in November, the water festival and the best thing in the city's year; **Khmer New Year** in mid-April, when the city empties and closes; **Pchum Ben** in September or October, a solemn ancestor festival and a multi-day public holiday.\n\nIf you are planning dates across a whole trip rather than one city, our [Cambodia itineraries](/cambodia/itineraries) set out honestly what each trip length reaches, and the [2-day Phnom Penh itinerary](/cambodia/phnom-penh/phnom-penh-2-day-itinerary) shows what the city itself needs.",
                    },
                ],
                faqs: [
                    { q: 'What is the best time to visit Phnom Penh?', a: 'November to February - dry, with mornings that are genuinely pleasant. November is the standout because Bon Om Touk, the water festival marking the Tonle Sap reversing, falls then and is the biggest event in the Cambodian calendar.' },
                    { q: 'How hot does Phnom Penh get?', a: 'April is the hardest month, with high thirties and thick humidity ahead of the rains. Unlike Siem Reap, almost everything here is outdoors and unshaded, so plan an early start, the middle of the day indoors, and back out from four.' },
                    { q: 'What is Bon Om Touk?', a: 'The Cambodian water festival, held in November, marking the reversal of the Tonle Sap river. Boat racing teams come from across the country and the Phnom Penh riverfront fills. It is the best week of the year in the city and the hardest to get a room in.' },
                    { q: 'Should I avoid Khmer New Year in Phnom Penh?', a: 'It depends what you want. Around 13-16 April much of the city returns to home provinces, businesses and some museums close, and the streets are quiet apart from the water-throwing. It is a striking time to be here and a bad time to need anything organised.' },
                    { q: 'Is the rainy season a bad time for Phnom Penh?', a: 'Not particularly. May to October usually means one heavy afternoon hour rather than all-day rain, prices are 30-40% lower, and the city is green. Streets flood briefly, so build slack into anything time-critical.' },
                    { q: 'Is Phnom Penh cheaper than Siem Reap?', a: 'Generally yes, for equivalent quality, and it is much less seasonal because it is a working capital rather than a tourism town. Guesthouse doubles run USD 15-30 and a good pool hotel USD 40-80.' },
                ],
            };

        case 'phnom-penh-1-day-itinerary':
            return {
                title: 'One Day in Phnom Penh: The Order That Makes It Bearable',
                seoTitle: 'One Day in Phnom Penh: Hour-by-Hour Plan',
                description: 'A one-day Phnom Penh plan that puts the Khmer Rouge sites in the afternoon and the palace in the cool of the morning, with real timings and what to drop.',
                heroImage: IMG.city,
                fastFacts: [
                    { icon: 'Clock', label: 'Museum closes', value: 'For lunch - go early' },
                    { icon: 'AlertTriangle', label: 'Palace dress code', value: 'Shoulders and knees, enforced' },
                    { icon: 'Clock', label: 'S-21 + Choeung Ek', value: 'About half a day' },
                    { icon: 'MapPin', label: 'Airport', value: 'Techo, 20-24 km south' },
                ],
                sections: [
                    {
                        title: 'Morning: palace, museum, and the heat you are beating',
                        icon: 'Clock',
                        content: "One day in Phnom Penh works if you do the sights in the cool and the history in the afternoon. The reverse - which is how most combined tours sell it - finishes your day at a mass grave and then asks you to enjoy the riverfront.\n\n**08:00 Royal Palace.** Royal residence since 1866 and still lived in, so the apartments are shut and the Throne Hall is seen from outside. The **Silver Pagoda** in the same compound is floored with five thousand solid silver tiles, mostly under carpet now with a corner left exposed, and holds a Maitreya Buddha of **90 kilograms of gold set with more than 2,000 diamonds**. Shoulders and knees covered, enforced at the gate, for men too. Shoes off at the pagoda.\n\n**10:00 National Museum**, a hundred metres away. The best Khmer sculpture collection in the world, in a terracotta pavilion built in 1920 around an open courtyard. **It closes for lunch**, which is the single scheduling constraint of the day. If you have come from Siem Reap it lands hard: these are the same figures you saw weathered and headless on the temple walls, here intact and at eye level.\n\n**11:30 Wat Phnom** if you have energy, a short ride north. The hill the city is named after - *phnom* - where Lady Penh is said to have found four Buddha statues in a floating koki tree around 1372. It is a working temple and the only real shade in the centre.",
                        tourCard: CARD.palace,
                    },
                    {
                        title: 'Afternoon: Tuol Sleng and Choeung Ek',
                        icon: 'Info',
                        content: "Give the afternoon to these two and put nothing after them.\n\n**Tuol Sleng** was an ordinary secondary school until the Khmer Rouge turned it into **Security Prison 21** in 1975. The classrooms still have the blackboards, the tiled floors and the iron bed frames, and room after room is filled with the photographs the regime took of every prisoner on arrival. Between **12,000 and 20,000** people were held there. Around a dozen survived.\n\n**Choeung Ek** is fifteen kilometres out, where most of them were taken to be killed. The memorial stupa holds some **5,000 skulls**, arranged and labelled. **Take the audio guide** - it is narrated in part by a survivor, it paces you around the site, and it is the difference between walking a field and understanding it.\n\nAllow about an hour and a half at each plus the drive: half a day for the pair. Photography is prohibited inside some cell blocks and at the stupa, and the signs are clear. Neither site suits young children.\n\nOur [full guide to both](/cambodia/phnom-penh/tuol-sleng-and-choeung-ek-guide) covers hours, what to read first, and what the tribunal did.",
                        tourCard: CARD.s21,
                    },
                    {
                        title: 'Evening: the river, and nothing demanding',
                        icon: 'Star',
                        content: "Plan this before you go, because you will not want to make decisions afterwards.\n\n**Sisowath Quay** at dusk is the right weight. Phnom Penh sits where the **Mekong, the Tonle Sap and the Bassac** meet, and the promenade is where the city walks after work - families, food carts, aerobics classes in the park. The fact that this is a loud, ordinary, functioning capital is genuinely part of what you came to understand.\n\n**An hour on the water** costs very little and is the best way to see the confluence. Sunset cruises leave from the quay all evening.\n\n**Eat simply.** Kuy teav, the pork-bone noodle soup the city runs on, or lok lak with a lime and Kampot pepper sauce. The [food and markets guide](/cambodia/phnom-penh/phnom-penh-food-and-markets) has where.\n\nWhat does not work is a rooftop bar at seven. It is not disrespect exactly - it just does not fit.",
                        tourCard: CARD.cruise,
                    },
                    {
                        title: 'What one day cannot do',
                        icon: 'AlertTriangle',
                        content: "**The markets.** Psar Thmei's art deco dome opened in 1937 and Psar Toul Tom Poung, the Russian Market, is the one for silver and silk - but market food is a morning thing, finished by nine or ten, and your morning is spoken for.\n\n**Koh Dach, the silk island.** A short ferry upstream where weavers still work handlooms under their houses and sell at the loom. It is a half-day and it is the best thing in Phnom Penh that one day cannot reach.\n\n**Oudong**, the royal capital for more than 250 years until 1866, 40 kilometres north-west with hilltop stupas holding the ashes of kings. A full day.\n\n**Kampot and Kep.** Three to four hours each way. Not in one day in Phnom Penh, though they are a day trip in their own right.\n\n**The honest recommendation is two nights.** Our [two-day itinerary](/cambodia/phnom-penh/phnom-penh-2-day-itinerary) gives the Khmer Rouge sites their own afternoon and the city its own morning without either being rushed.\n\n**And leave for the airport early.** Phnom Penh moved to **Techo International on 9 September 2025**, about 20 to 24 kilometres south - a 40 to 50 minute run, more in the evening peak, and roughly double the old airport.",
                        tourCard: CARD.silk,
                    },
                ],
                faqs: [
                    { q: 'Can you see Phnom Penh in one day?', a: 'Yes, if you take the Royal Palace and National Museum in the cool of the morning and give the afternoon to Tuol Sleng and Choeung Ek. You will miss the markets, Koh Dach silk island and Oudong. Two nights is the honest recommendation.' },
                    { q: 'What order should I see Phnom Penh in?', a: 'Palace and museum first - the museum closes for lunch and the palace is unshaded. Khmer Rouge sites in the afternoon with nothing scheduled after them. River at dusk. Doing it the other way round finishes your day at a mass grave.' },
                    { q: 'How long do Tuol Sleng and Choeung Ek take?', a: 'About an hour and a half each plus the fifteen kilometres between, so roughly half a day. Take the Choeung Ek audio guide - it is narrated in part by a survivor and it is what makes the site legible.' },
                    { q: 'What is the dress code for the Royal Palace?', a: 'Shoulders and knees covered, for everyone including men, and it is enforced at the gate rather than suggested. Shoes come off at the Silver Pagoda. Light long trousers are the answer and you want them in the sun anyway.' },
                    { q: 'How far is Phnom Penh airport from the city?', a: 'Techo International opened on 9 September 2025 about 20 to 24 km south of the centre - a 40 to 50 minute drive and longer in the evening peak, roughly double the airport it replaced.' },
                    { q: 'Is one day enough for Phnom Penh?', a: 'It covers the two things people come for. Two days adds the markets, Koh Dach silk island or Oudong, and lets the Khmer Rouge afternoon sit on its own without the palace crammed around it.' },
                ],
            };

        case 'koh-dach-silk-island':
            return {
                title: 'Koh Dach: The Silk Island, and Why You Buy at the Loom',
                seoTitle: 'Koh Dach Silk Island Guide from Phnom Penh',
                description: 'Koh Dach is a short ferry upstream from Phnom Penh where weavers still work handlooms under their houses. How to get there, what silk costs, and what to look for.',
                heroImage: IMG.silk,
                fastFacts: [
                    { icon: 'MapPin', label: 'Getting there', value: 'Ferry ~30 min north of centre' },
                    { icon: 'Clock', label: 'Time needed', value: 'Half day by tuk-tuk' },
                    { icon: 'Star', label: 'What to buy', value: 'Hol ikat, at the loom' },
                    { icon: 'AlertTriangle', label: 'Watch for', value: 'Machine-made "silk"' },
                ],
                sections: [
                    {
                        title: 'A working island, twenty minutes from the capital',
                        icon: 'Star',
                        content: "Koh Dach - **Silk Island** - is a long sandbank in the Mekong a short ferry ride upstream from Phnom Penh, and the striking thing about it is how ordinary it is. There is no entrance, no ticket and no show. It is a flat, green, almost traffic-free island of villages where a large number of households still keep a handloom under the stilts of the house, and weave.\n\nYou hear it before you see it: the wooden clack of a loom beater from under a house as you cycle past. Walk up and someone will wave you in. There is no obligation to buy and usually no English, and it is one of the least packaged things you can do in Cambodia.\n\nThe island also grows things - the sandy soil takes vegetables and mulberry - and in the dry season sandbanks appear along the edge that Phnom Penh families come out to picnic on at weekends. Go on a weekday for weaving, a Sunday if you want to see the city at leisure.\n\n**Getting there** is a short ride north of the centre to the ferry, then a few minutes across the water. Tuk-tuk tours do the round trip as a half-day; by bicycle it becomes a full day and a very good one, because the island is flat and the lanes are shaded.",
                        tourCard: CARD.silk,
                    },
                    {
                        title: 'What Cambodian silk actually is',
                        icon: 'Info',
                        content: "Knowing three words turns a souvenir stop into something worth the trip.\n\n**Hol** is Cambodian **ikat**: the weft threads are tied off and dyed *before* weaving, so the pattern exists in the thread rather than being printed on the cloth. When it is woven the edges of the motif come out slightly feathered, and that softness is the tell. Cambodian hol uses an uneven twill that gives the surface a particular sheen. It is slow - a complex piece is weeks of work.\n\n**Pidan** is the pictorial version, silk ikat woven with figurative scenes, historically hung in pagodas. The most technically demanding thing on the island.\n\n**Golden silk** is the thread of the indigenous Cambodian yellow silkworm. Most Cambodian weaving today uses imported white thread from Vietnam and China because the domestic supply collapsed, so genuine golden silk is rarer, warmer in colour and costs more. It is worth asking about specifically.\n\n**How to tell silk from polyester**: real silk is warm to the touch rather than cool, it creases and the crease softens, and it has an uneven sheen rather than a flat shine. The classic burn test - real silk smells of burnt hair and crumbles to ash, polyester melts to a hard bead - is one a weaver will happily do for you on a loose thread.",
                    },
                    {
                        title: 'Buying well',
                        icon: 'Wallet',
                        content: "**Buy at the loom.** The same scarf is a fraction of the Russian Market price and the person taking the money is the person who made it. You can usually see the piece on the loom half-finished, which is the best provenance there is.\n\n**Prices** are modest by any Western standard - a simple scarf is a few dollars, a good hol piece considerably more, and a pidan hanging is a serious purchase that reflects weeks of work. Pay the asking price for handwoven work; haggling hard over a fortnight of labour to save two dollars is not a good look.\n\n**What is not local.** Plenty of what is sold on the island and across Phnom Penh is machine-made and imported. That is not a scam if it is priced as what it is, but do not pay handwoven prices for it. If a stall has fifty identical scarves, they were not woven under that house.\n\n**Beyond scarves**: krama, the checked cotton scarf every Cambodian owns and uses as a towel, a sling, a hat and a bag, is the most useful thing you will buy in this country and costs almost nothing.\n\nIf you would rather buy in the city, **Psar Toul Tom Poung**, the Russian Market, is the place - see the [food and markets guide](/cambodia/phnom-penh/phnom-penh-food-and-markets) - but you will pay more and learn less.",
                        tourCard: CARD.market,
                    },
                    {
                        title: 'Making a day of it',
                        icon: 'MapPin',
                        content: "**By bicycle** is the best version. The island is flat, the lanes are shaded and there is almost no traffic, which is a genuine relief after Phnom Penh. Several operators run bike or e-bike day trips that include the ferry.\n\n**By tuk-tuk** is the half-day version and the right one if it is hot or you are short of time.\n\n**Combine it with the city.** A common and good shape is Koh Dach in the morning and the [Royal Palace and National Museum](/cambodia/phnom-penh/royal-palace-phnom-penh) in the afternoon, or the reverse.\n\n**Or with Oudong**, 40 kilometres north-west - the royal capital for more than 250 years until 1866, with hilltop stupas holding the ashes of kings. Both are north of the city and pair into a full day.\n\n**Bring**: small dollar notes, because nobody on the island is taking a card; water; and a hat, because the lanes are shaded but the ferry and the riverbank are not.\n\n**Manners.** You are walking into people's houses. Ask before photographing a weaver, and if you spend twenty minutes watching someone work, buy something.",
                        tourCard: CARD.oudong,
                    },
                ],
                faqs: [
                    { q: 'Is Koh Dach silk island worth visiting?', a: 'Yes, and it is the least packaged thing you can do near Phnom Penh. Households still keep handlooms under their stilt houses, there is no entrance or ticket, and the island is flat, green and almost traffic-free.' },
                    { q: 'How do you get to Koh Dach from Phnom Penh?', a: 'A short ride north of the centre to the ferry, then a few minutes across the Mekong. Tuk-tuk tours do it as a half-day; by bicycle it becomes a full day and a better one, because the island is flat with shaded lanes.' },
                    { q: 'What is hol silk?', a: 'Cambodian ikat - the weft threads are tied and dyed before weaving, so the pattern lives in the thread. The motif edges come out slightly feathered and the uneven twill gives it a particular sheen. A complex piece is weeks of work.' },
                    { q: 'How can you tell real silk from fake?', a: 'Real silk feels warm rather than cool, creases and softens, and has an uneven sheen rather than a flat shine. A weaver will usually burn a loose thread for you: silk smells of burnt hair and crumbles, polyester melts into a hard bead.' },
                    { q: 'Is silk cheaper on Koh Dach than in Phnom Penh?', a: 'Considerably, and the person taking the money is the person who made it. You can often see the piece half-finished on the loom, which is the best provenance available. Do not haggle hard over handwoven work.' },
                    { q: 'What is golden silk?', a: 'Thread from the indigenous Cambodian yellow silkworm. Most weaving here now uses imported white thread because the domestic supply collapsed, so genuine golden silk is rarer, warmer in colour and costs more. Ask for it by name.' },
                ],
            };

        case 'kampot-and-kep-day-trip':
            return {
                title: 'Kampot and Kep from Phnom Penh: Pepper, Crab and a Ruined Riviera',
                seoTitle: 'Kampot & Kep Day Trip from Phnom Penh',
                description: 'Kampot pepper farms, Bokor hill station and the Kep crab market as a day trip from Phnom Penh - the real drive times and why a night there is better.',
                heroImage: IMG.kampot,
                fastFacts: [
                    { icon: 'MapPin', label: 'Phnom Penh to Kampot', value: '~150 km, 3-4 hours' },
                    { icon: 'MapPin', label: 'Kampot to Kep', value: 'About 30 minutes' },
                    { icon: 'Star', label: 'The thing to eat', value: 'Crab with green Kampot pepper' },
                    { icon: 'AlertTriangle', label: 'Honest verdict', value: 'Better as an overnight' },
                ],
                sections: [
                    {
                        title: 'What is down there',
                        icon: 'Star',
                        content: "South of Phnom Penh the country changes completely. No temples, no Khmer Rouge sites - pepper, sea, and the wreckage of two French projects.\n\n**Kampot** is a low river town of French shophouses under Bokor mountain. The pepper grown on smallholdings around it carries a **protected geographical indication, the first Cambodia registered**, and you have been eating it all trip without being told - it is what makes the lok lak dipping sauce work. The farms are visitable and the difference between green peppercorns picked that morning, still on the stem and cooked whole, and the grey dust in a shaker is not marketing.\n\n**Kep**, half an hour on, is stranger. It was built as an elite seaside town, first under the French and then by the Cambodian upper class, and the modernist villas were gutted in the war years. They are still standing - roofless, trees through them, scattered through scrub nobody has decided what to do with. Its **crab market** sells blue swimmer crab taken from baskets sitting in the shallows and cooked with green Kampot pepper while you wait. It is the best meal in the country and it is not close.\n\n**Bokor Hill Station** above Kampot is a French retreat abandoned in the 1940s, reoccupied, and abandoned again in the 1970s, with a casino shell that sits in cloud most mornings. The road up is good now and there is new development on the plateau, so temper the ruin-porn expectations.",
                        tourCard: CARD.kampot,
                    },
                    {
                        title: 'The honest arithmetic of doing it in a day',
                        icon: 'AlertTriangle',
                        content: "Phnom Penh to Kampot is about **150 kilometres and three to four hours**, most of it getting clear of the capital. Kep is another thirty minutes. Back is the same.\n\nThat is **seven to eight hours in a vehicle** for what will be four or five hours on the ground. A day trip leaves at six and gets back after dark.\n\n**Can it be done? Yes**, and it is sold that way. What fits: a pepper farm, lunch at the Kep crab market, a walk among the villas, and back. What does not fit: Bokor, the Kampot river at sunset, the caves, or anything unhurried.\n\n**Is it worth it?** If your dates are fixed and this is the only way to see the south, yes - the crab and the pepper farms are genuinely worth a long drive. If you can spare one night in Kampot, do that instead and the whole thing stops being an endurance event. People who book two nights in Kampot routinely stay four.\n\n**The train** is the other option and an underrated one: Cambodia's rehabilitated railway runs Phnom Penh to Kampot and Sihanoukville a few days a week. It is slow, it is cheap, and it is a much more pleasant way to cover that ground than the road. Check current days before planning around it.",
                    },
                    {
                        title: 'Doing the pepper properly',
                        icon: 'Info',
                        content: "The pepper farms are the part most day trips rush and they are the most interesting stop.\n\n**Kampot pepper is a protected geographical indication** - Cambodia's first, and it also carries EU protected status. That means a defined growing area, defined varieties and defined methods, and it is why the name is worth something.\n\n**The four colours are one plant at different stages.** **Green** is the unripe berry, picked and used fresh - this is what goes in the Kep crab and it cannot be exported easily, so tasting it there is the point of going. **Black** is green, dried. **Red** is the ripened berry, sweeter and more aromatic, picked when it turns. **White** is the red berry soaked and the skin removed, leaving the pale core - sharper, cleaner.\n\n**Red and white cost more than black** and are the two worth carrying home. Buy at the farm, not in a Phnom Penh market.\n\n**The plants** climb poles to three or four metres and are shaded; the farms are quiet, green and completely unlike a field crop. Most welcome visitors and several have a tasting.\n\n**Salt fields** line the road between Kampot and Kep - shallow evaporation pans worked by hand, best seen in the dry months.",
                        tourCard: CARD.kampot,
                    },
                    {
                        title: 'If you can stay the night',
                        icon: 'Calendar',
                        content: "One night turns this from a drive into a destination.\n\n**Kampot in the evening** is the argument. The river runs wide and slow under Bokor, the sunsets over the water are the best in the country, and an hour in a small boat through the mangrove channels is the most restful thing in Cambodia.\n\n**Bokor** needs a morning. The plateau is often in cloud before ten, which is exactly when the abandoned casino is worth seeing.\n\n**The caves** - Phnom Chhnork and Phnom Sorsia, between Kampot and Kep - hold pre-Angkorian brick shrines inside limestone caves, seventh century, with a local child guiding you through by torchlight for a dollar. Completely off the standard circuit.\n\n**Rabbit Island** (Koh Tonsay), a short boat from Kep, is a simple beach with basic bungalows. Not a luxury island; a quiet one.\n\n**Onward** rather than back: Kampot and Kep sit on the way to **Sihanoukville** and the ferry to **Koh Rong**, which is 35 to 50 minutes by fast boat. That is the shape of our [ten-day Cambodia itinerary](/cambodia/itineraries/10-days), and it is a much better trip than driving back to Phnom Penh the same night.",
                    },
                ],
                faqs: [
                    { q: 'Can you do Kampot and Kep as a day trip from Phnom Penh?', a: 'Yes, and it is sold that way, but it is three to four hours each way for four or five hours on the ground. You get a pepper farm, crab at the Kep market and the villas. You do not get Bokor, the river at sunset or the caves.' },
                    { q: 'How far is Kampot from Phnom Penh?', a: 'About 150 km and three to four hours, most of it getting clear of the capital. Kep is another thirty minutes beyond. The rehabilitated railway also runs the route a few days a week and is slower but far more pleasant than the road.' },
                    { q: 'What is special about Kampot pepper?', a: 'It carries a protected geographical indication - Cambodia’s first - with a defined growing area, varieties and methods. Green peppercorns picked that morning and cooked whole are a different ingredient from ground pepper, and they are what makes the Kep crab work.' },
                    { q: 'What is the difference between green, black, red and white Kampot pepper?', a: 'One plant at four stages. Green is the unripe berry used fresh, black is green dried, red is the ripened berry and sweeter, white is the red berry with the skin removed and is sharper. Red and white cost more and are the two worth taking home.' },
                    { q: 'Is Kep beach worth going for?', a: 'No. The beach is modest and grey and nobody should travel for it. Go for the crab market, the ruined modernist villas and the pepper farms. If you want sand, the islands are the answer.' },
                    { q: 'Should I stay overnight in Kampot instead?', a: 'If you can, yes. One night gets you Bokor in the morning, the river at sunset, the pre-Angkorian cave shrines and a boat through the mangroves. People who book two nights in Kampot routinely stay four.' },
                ],
            };

        case 'phnom-penh-street-art':
            return {
                title: 'Phnom Penh Street Art: A City That Started Painting in 2015',
                seoTitle: 'Phnom Penh Street Art: Where to Find the Murals',
                description: 'Phnom Penh has a real street-art scene, largely Cambodian and much of it about the city’s own recent history. Where the work is and how to see it.',
                heroImage: IMG.market,
                fastFacts: [
                    { icon: 'Calendar', label: 'Scene took off', value: 'Around 2015' },
                    { icon: 'MapPin', label: 'Densest area', value: 'Lanes off the riverfront' },
                    { icon: 'Clock', label: 'Best time', value: 'Late afternoon' },
                    { icon: 'Star', label: 'Pairs with', value: 'A tuk-tuk food run' },
                ],
                sections: [
                    {
                        title: 'Why a city with this history started painting walls',
                        icon: 'Star',
                        content: "Phnom Penh is not an obvious street-art city, which is exactly why the scene here is worth an afternoon.\n\nCambodia lost most of a generation of artists between 1975 and 1979. The Khmer Rouge targeted the educated and the creative specifically, and the classical arts - **Apsara dance, shadow puppetry, silk weaving** - were rebuilt after 1979 from the handful of practitioners who survived. That rebuilding is the dominant story of Cambodian culture for forty years, and it is a story about recovering the past.\n\nStreet art is the first significant Cambodian art form that is not about recovery. It arrived properly around **2015**, it is largely made by Cambodians in their twenties and thirties, and a lot of it is not about the Khmer Rouge at all - it is about the city now, about development, about the river, about ordinary people.\n\nSome of it is about the history, and when it is, it is oblique rather than literal in a way the memorials cannot be.\n\nYou will find work on shophouse gables, on the blind walls of new construction, in the lanes behind the riverfront, and on the shutters of businesses that only show it when they are closed - which is one reason to walk this in the evening.",
                        tourCard: CARD.market,
                    },
                    {
                        title: 'Where the work is',
                        icon: 'MapPin',
                        content: "The scene is concentrated rather than scattered, which makes it walkable.\n\n**The lanes off Sisowath Quay.** Step one street back from the riverfront promenade and the side alleys between the quay and Street 19 carry a lot of work. This is the densest area and the easiest to do on foot.\n\n**Around the old White Building site.** The White Building was a 1963 low-cost housing block by the New Khmer Architecture movement, home to hundreds of artists and musicians, and one of the most photographed buildings in the city. It was demolished in 2017. The area around where it stood remains a centre of gravity for the scene, and some of the work there is directly about its loss.\n\n**Street 93 and 95 and the lanes around Boeung Keng Kang**, where several galleries and studios sit among the murals.\n\n**Toul Tom Poung**, around the Russian Market, where shop shutters carry a lot of smaller work.\n\n**New construction hoardings** anywhere in the centre. Phnom Penh is building fast and the hoardings get painted, which means the scene turns over - a wall you photograph this year may be gone next.\n\nA guided tuk-tuk run is genuinely worth it here, more than for most things. The work moves, the good pieces are in lanes you would not turn down, and the guides know which artist did what.",
                    },
                    {
                        title: 'The architecture underneath it',
                        icon: 'Info',
                        content: "Half the pleasure of walking for murals is what you walk past, and Phnom Penh has two architectural layers most visitors never notice.\n\n**French colonial shophouses**, roughly 1900 to 1940, with shuttered upper floors and arcaded walkways, line whole blocks of the old centre. Many are derelict, some are beautifully restored, and they are the canvas a lot of the street art is painted on.\n\n**New Khmer Architecture** is the one worth learning to spot. Between independence in 1953 and 1970, under Sihanouk, Cambodian architects - above all **Vann Molyvann** - built a modernism that was genuinely its own: raised floors for airflow, deep overhangs and brise-soleil for the sun, ponds for cooling, and forms drawn from Angkorian geometry. It is one of the most interesting bodies of mid-century architecture anywhere and it is disappearing to development.\n\nWhat survives in the centre: the **Independence Monument** (1958), a lotus-shaped tower by Vann Molyvann that is best seen lit at night; the **Chaktomuk Conference Hall** on the riverfront, fan-shaped and facing the confluence; and the **National Sports Complex**, still extraordinary.\n\nThe **Central Market**'s art deco dome, 1937, is a different era again and was briefly one of the largest domed structures in Asia.",
                        tourCard: CARD.cruise,
                    },
                    {
                        title: 'Making an afternoon of it',
                        icon: 'Clock',
                        content: "**Go from about four.** The light is better, the heat has broken, and the shutters with work on them start coming down as businesses close.\n\n**Pair it with food.** This is the standard and correct combination, and most tuk-tuk tours here do both: murals while the light is good, eating as it goes, then the river. Phnom Penh's street food is a morning and evening thing - see the [food and markets guide](/cambodia/phnom-penh/phnom-penh-food-and-markets) - so an afternoon that ends in eating works with the city's own rhythm.\n\n**Finish on the water.** An hour on the Mekong at sunset costs very little and is the best way to understand why a capital is here at all, where three rivers meet.\n\n**By tuk-tuk** rather than on foot if you want range - the city is flat but spread out, and four hours by tuk-tuk covers what a day on foot would not.\n\n**Photography.** Ask before photographing people, and be aware that some walls are on private property where the owner commissioned the work. Nobody minds a photograph of a wall.\n\n**Buying.** Several of the artists sell through galleries around Street 240 and Boeung Keng Kang, and there are Cambodian-run print shops where the money goes to the artist rather than a middleman. Worth asking a guide.",
                    },
                ],
                faqs: [
                    { q: 'Does Phnom Penh have street art?', a: 'Yes, and a real one. It took off around 2015, it is largely made by Cambodians in their twenties and thirties, and much of it is about the city now rather than about the Khmer Rouge - which makes it the first significant Cambodian art form not primarily about recovering the past.' },
                    { q: 'Where is the street art in Phnom Penh?', a: 'Densest in the lanes one street back from Sisowath Quay, around the former White Building site, on Streets 93 and 95 near Boeung Keng Kang, and on shop shutters around the Russian Market. Construction hoardings across the centre get painted too, so the scene turns over.' },
                    { q: 'What was the White Building?', a: 'A 1963 low-cost housing block by the New Khmer Architecture movement, home to hundreds of artists and musicians and one of the most photographed buildings in Phnom Penh. It was demolished in 2017, and some of the street art around the site is directly about its loss.' },
                    { q: 'What is New Khmer Architecture?', a: 'The modernism built between independence in 1953 and 1970, above all by Vann Molyvann - raised floors, deep overhangs, ponds for cooling, and forms drawn from Angkorian geometry. The Independence Monument, Chaktomuk Conference Hall and National Sports Complex survive in the centre.' },
                    { q: 'When is the best time to see Phnom Penh street art?', a: 'From about four in the afternoon. The light is better, the heat has broken, and shop shutters with work painted on them come down as businesses close. It pairs naturally with a food run and an hour on the Mekong at sunset.' },
                    { q: 'Is a guided street art tour worth it in Phnom Penh?', a: 'More than for most things here. The work moves as buildings come and go, the best pieces are in lanes you would not turn down on your own, and guides know which artist did what and where to buy prints so the money reaches them.' },
                ],
            };
        case 'where-to-stay-in-phnom-penh':
            return {
                title: 'Where to Stay in Phnom Penh: Four Areas and What Each Trades',
                seoTitle: 'Where to Stay in Phnom Penh: Areas Compared',
                description: 'Riverside, BKK1, Daun Penh and Toul Tom Poung compared - noise, walkability, safety after dark and what a good room actually costs.',
                heroImage: IMG.city,
                fastFacts: [
                    { icon: 'Star', label: 'Best all-round', value: 'BKK1' },
                    { icon: 'MapPin', label: 'Most walkable to sights', value: 'Daun Penh / Riverside' },
                    { icon: 'Wallet', label: 'Good pool hotel', value: 'USD 40 - 80' },
                    { icon: 'AlertTriangle', label: 'Main risk', value: 'Bag-snatching from motorbikes' },
                ],
                sections: [
                    {
                        title: 'The four areas',
                        icon: 'MapPin',
                        content: "Phnom Penh is bigger and less walkable than Siem Reap, and where you sleep genuinely changes the trip.\n\n**Riverside / Sisowath Quay.** The promenade along the confluence, and where the city walks in the evening. You can walk to the **Royal Palace**, the **National Museum** and the Central Market. It is also the most touristed strip, with the hawking and the hostess bars at the northern end that come with that. Good for two nights and for people who want to step out of the door into the city.\n\n**Daun Penh**, the colonial grid just back from the river. Quieter than the quay, still walkable to everything, and full of French shophouses. Where the heritage properties are. The best compromise if walking to the sights matters to you.\n\n**BKK1 (Boeung Keng Kang)**, a kilometre or so south. The expat district: leafy streets, the best concentration of good restaurants and cafes, most of the mid-range and boutique hotels with pools, and genuinely quiet at night. You will tuk-tuk to the sights, which costs a couple of dollars. **This is the best all-round answer** for three nights or more.\n\n**Toul Tom Poung**, around the Russian Market, further south. Cheaper, more residential, a growing cluster of small guesthouses and cafes, and the market on your doorstep for the [morning food](/cambodia/phnom-penh/phnom-penh-food-and-markets). Least convenient for the palace.",
                        tourCard: CARD.city,
                    },
                    {
                        title: 'What it costs',
                        icon: 'Wallet',
                        content: "Phnom Penh is cheaper than Siem Reap for equivalent quality and much less seasonal, because it is a working capital rather than a tourism town. The December-January peak lifts rates but nothing like the temple economy up north.\n\n**Hostel dorm** USD 6-12. **Guesthouse double** USD 15-30.\n\n**Good mid-range hotel with a pool** USD 40-80, and this is where the value is.\n\n**Boutique and riverside heritage** USD 100-200.\n\n**The handful of serious luxury properties** USD 250 and up.\n\n**A pool matters** here as much as in Siem Reap. Phnom Penh is hot, almost everything you do is outdoors and unshaded, and the workable shape of a day is out early, indoors from twelve to three, out again at four.\n\n**Rooftops.** A lot of BKK1 and riverside hotels have one, and in a flat city at the meeting of three rivers that is worth more than it sounds.\n\n**Cash.** Small guesthouses want US dollars and many add a card fee. Clean, untorn notes - damaged bills get refused, and riel comes back as change under a dollar.",
                    },
                    {
                        title: 'Getting around, and the airport',
                        icon: 'Clock',
                        content: "**Tuk-tuks** cost a couple of dollars across the centre. **PassApp** and **Grab** both work and remove the negotiation, which is worth it at night.\n\n**Walking** is fine in Daun Penh and along the river and less pleasant elsewhere - pavements are parked on and crossings are a matter of walking steadily and letting traffic flow around you, which works and feels wrong for the first two days.\n\n**The airport moved.** Phnom Penh switched to **Techo International on 9 September 2025**, about **20 to 24 kilometres south** of the centre. Allow 40 to 50 minutes and more in the evening peak - roughly double the airport it replaced, and any hotel listing quoting 20 minutes predates the change. Ask whether a transfer is included.\n\n**Bus and boat stations** are mostly north and west of the centre. If you are taking the road to [Siem Reap](/cambodia/phnom-penh/phnom-penh-to-siem-reap-transport) or the train south to Kampot, staying central saves a fiddly early-morning ride.\n\n**Safety.** Ordinary city caution, with one specific local pattern: **bag-snatching from passing motorbikes**. Keep bags on the inside shoulder away from the road, do not walk with a phone out at the kerb, and be particularly aware on the riverfront at night. Violent crime against visitors is rare; this is the thing that actually happens.",
                        tourCard: CARD.cruise,
                    },
                    {
                        title: 'How many nights',
                        icon: 'Calendar',
                        content: "**One night** is a stopover between Siem Reap and somewhere else. You get either the Khmer Rouge sites or the palace, not both properly - our [one-day plan](/cambodia/phnom-penh/phnom-penh-1-day-itinerary) squeezes both and is honest about what it drops.\n\n**Two nights** is the right answer for most trips and what the [two-day itinerary](/cambodia/phnom-penh/phnom-penh-2-day-itinerary) is built for: Tuol Sleng and Choeung Ek their own afternoon, the palace and museum their own morning, an evening on the river.\n\n**Three nights** adds [Koh Dach silk island](/cambodia/phnom-penh/koh-dach-silk-island) or Oudong, and lets the city be a city rather than a list.\n\n**Four or more** reaches [Kampot and Kep](/cambodia/phnom-penh/kampot-and-kep-day-trip) as a day trip, though staying a night down there is much better.\n\nOne scheduling note: **do Siem Reap first** if you can. You have the most energy for Angkor on the days you have just arrived, the Khmer Rouge sites land differently once you have seen what Cambodia built, and it puts your last day near the nearer airport. Fly open-jaw in to Siem Reap and out of Phnom Penh - regional carriers price the legs separately, so it usually costs the same as a return.",
                    },
                ],
                faqs: [
                    { q: 'What is the best area to stay in Phnom Penh?', a: 'BKK1 for three nights or more - leafy, quiet at night, the best restaurants and most of the mid-range pool hotels, with a couple of dollars of tuk-tuk to the sights. Daun Penh or Riverside if walking to the palace and museum matters more.' },
                    { q: 'Is Riverside a good place to stay in Phnom Penh?', a: 'Good for two nights and for stepping straight into the city - you can walk to the Royal Palace, National Museum and Central Market. It is also the most touristed strip, with hawking and hostess bars at the northern end.' },
                    { q: 'How much is a hotel in Phnom Penh?', a: 'Guesthouse doubles USD 15-30, a good mid-range hotel with a pool USD 40-80, boutique USD 100-200. It is cheaper than Siem Reap for equivalent quality and much less seasonal, because it is a working capital.' },
                    { q: 'How far is Techo airport from central Phnom Penh?', a: 'About 20 to 24 km south, so 40 to 50 minutes and longer in the evening peak. The airport moved on 9 September 2025 and any listing quoting 20 minutes predates that.' },
                    { q: 'Is Phnom Penh safe at night?', a: 'Broadly yes with ordinary city caution. The specific local pattern is bag-snatching from passing motorbikes - keep bags on the inside shoulder, do not walk with a phone out at the kerb, and use Grab or PassApp rather than walking far after dark.' },
                    { q: 'How many nights do you need in Phnom Penh?', a: 'Two is right for most trips: the Khmer Rouge sites get their own afternoon and the palace and museum their own morning. Three adds Koh Dach silk island or Oudong. One night means choosing between the two halves.' },
                ],
            };

        case 'phnom-penh-to-battambang':
            return {
                title: 'Phnom Penh to Battambang: The Detour Most People Skip',
                seoTitle: 'Phnom Penh to Battambang: Bus, Train & Times',
                description: 'Five hours on National Road 5 to Cambodia’s calmest city - the bamboo train, the bat cave at Phnom Sampeau, and why the detour costs less road than it looks.',
                heroImage: IMG.battambang,
                fastFacts: [
                    { icon: 'MapPin', label: 'Distance', value: '~290 km, National Road 5' },
                    { icon: 'Clock', label: 'By road', value: 'About 5 hours' },
                    { icon: 'Star', label: 'Be there for', value: 'Dusk at Phnom Sampeau' },
                    { icon: 'MapPin', label: 'On to Siem Reap', value: '~170 km, 3-3.5 hrs' },
                ],
                sections: [
                    {
                        title: 'Why it costs less road than it looks',
                        icon: 'MapPin',
                        content: "Battambang is Cambodia's second city and almost nobody on the standard circuit stops there, which is the main argument for going.\n\nThe geography is the thing people get wrong. Battambang is **not** on National Road 6 between Phnom Penh and Siem Reap - it sits west, on National Road 5. That sounds like a detour, and it is, but a small one:\n\n**Phnom Penh to Battambang** is about **290 km and five hours** on NR5.\n**Battambang to Siem Reap** is about **170 km and three to three and a half hours**.\n\nThat is roughly eight and a half hours of road against the six you would spend going direct. **Two and a half extra hours buys you a whole city**, and the direct run is six hours of nothing.\n\nIt also sits in the right place for the history. Phnom Sampeau outside Battambang has a **killing cave** with a memorial at the bottom of the shaft, and meeting that before Tuol Sleng - or after, if you are heading south - gives the Khmer Rouge story a shape that Phnom Penh alone does not.\n\nOur [six-day](/cambodia/itineraries/6-days) and [seven-day](/cambodia/itineraries/7-days) Cambodia itineraries both put Battambang here for exactly this reason.",
                        tourCard: CARD.battambang,
                    },
                    {
                        title: 'Getting there',
                        icon: 'Clock',
                        content: "**Bus** is the default. Several operators run air-conditioned coaches on NR5, roughly USD 8-20 depending on the operator and the seat, about five hours with a rest stop. Book a day or two ahead in the November-to-February peak; the morning of is usually fine otherwise.\n\n**Minivan** is faster and less comfortable, four to four and a half hours if the driver is in a hurry, which is not always something to wish for.\n\n**Private car with driver** runs from about USD 80-110 and is the obvious choice for two or more people. It also lets you stop, and there are things to stop for: **Oudong**, the royal capital for more than 250 years until 1866, is 40 km out of Phnom Penh on the way, and **Kampong Chhnang** has pottery villages and a floating community on the Tonle Sap.\n\n**The train.** Cambodia's rehabilitated railway runs Phnom Penh to Battambang and on to Poipet a few days a week. It is slower than the bus and much more pleasant - check current days and times locally, because the schedule changes.\n\n**Leave in the morning** whichever way you go. Arriving in daylight matters, and NR5 after dark with livestock and unlit motorbikes is not the part of Cambodia to experience.",
                    },
                    {
                        title: 'What to do when you get there',
                        icon: 'Star',
                        content: "**Phnom Sampeau at dusk, and build the day around it.** Millions of wrinkle-lipped bats pour out of a cliff cave in an unbroken ribbon for about half an hour. There is no build-up: nothing, then a stream that does not stop. People sit at the roadside stalls below with a drink and watch it. It is free and it is one of the best things in the country.\n\nThe same hill holds a **killing cave** - a Khmer Rouge execution site where victims were thrown through a shaft in the rock - with a memorial and a reclining Buddha at the bottom. It is quiet, unvisited and harder in its way than Choeung Ek.\n\n**The bamboo train (norry)** is a bamboo platform on wheels with a small motor, run down a single track. When two meet, the lighter one is lifted off the rails by hand. Say plainly that the **original line at O Dambong was replaced by a purpose-built tourist track at Banan** - the carts and the lifting ritual are real, the route is for visitors, and it is still twenty good minutes.\n\n**The town itself** is the quietest place on the circuit: French shophouses along the Sangker river, a working market, and an arts scene - **Phare Ponleu Selpak**, the school the Cambodian circus came out of, is here and can be visited.\n\n**Banan temple** and **Ek Phnom** are eleventh-century and almost empty.",
                        tourCard: CARD.battambang,
                    },
                    {
                        title: 'The boat, and onward',
                        icon: 'Calendar',
                        content: "**The Sangker river boat to Siem Reap** is the best transfer in Cambodia and most people never hear about it. It runs six to nine hours down the river and across the top of the Tonle Sap, through floating villages and flooded forest, and it is a day out rather than a journey.\n\n**It only runs when the water is high** - roughly **August to January** - and in the dry months it either does not run or gets stuck. Check before planning around it. Seats are limited and it is worth booking ahead.\n\nIf the water is low, the road to Siem Reap is three to three and a half hours and perfectly fine.\n\n**How long to stay.** One night is enough for the bamboo train and the bats. Two nights lets you add Banan, the countryside and Phare Ponleu Selpak without hurrying, and Battambang is a pleasant place to do nothing for a day.\n\n**Direction.** Most people do Siem Reap → Battambang → Phnom Penh, which puts Angkor on the freshest days and the Khmer Rouge sites last. Coming the other way works too, and the [Phnom Penh to Siem Reap options](/cambodia/phnom-penh/phnom-penh-to-siem-reap-transport) compare the direct route if you would rather skip the detour.",
                    },
                ],
                faqs: [
                    { q: 'How long is Phnom Penh to Battambang?', a: 'About 290 km and five hours on National Road 5, by bus for USD 8-20 or private car from around USD 80-110. A minivan does it in four to four and a half if the driver hurries.' },
                    { q: 'Is Battambang worth the detour?', a: 'Phnom Penh to Battambang to Siem Reap is about eight and a half hours of road against six going direct. Two and a half extra hours buys a whole city - the bamboo train, the bat exodus at Phnom Sampeau, French shophouses and almost no other visitors.' },
                    { q: 'What is the bamboo train?', a: 'A bamboo platform on wheels with a small motor, run down a single track; when two meet the lighter one is lifted off by hand. The original O Dambong line was replaced by a purpose-built tourist track at Banan - the mechanism is real, the route is for visitors.' },
                    { q: 'What time do the bats come out at Phnom Sampeau?', a: 'At dusk, and it lasts about half an hour with no build-up. Be in place twenty minutes before sunset; arriving late means arriving after. It is free and people watch from the roadside stalls below.' },
                    { q: 'Can you take a boat from Battambang to Siem Reap?', a: 'Yes, down the Sangker river and across the Tonle Sap, six to nine hours through floating villages. It only runs when the water is high, roughly August to January, and in the dry months it either does not run or gets stuck.' },
                    { q: 'Is there a train from Phnom Penh to Battambang?', a: 'Yes, on the rehabilitated railway, a few days a week and continuing to Poipet. It is slower than the bus and much more pleasant. The schedule changes, so check current days locally rather than planning around an old timetable.' },
                ],
            };
        case 'oudong-guide':
            return {
                title: 'Oudong: The Capital Before Phnom Penh, and the Ashes of Kings',
                seoTitle: 'Oudong Guide: Cambodia’s Former Royal Capital',
                description: 'Oudong was the Cambodian capital for more than 250 years until 1866. Hilltop stupas holding royal ashes, 40 km from Phnom Penh, and almost no visitors.',
                heroImage: IMG.oudong,
                fastFacts: [
                    { icon: 'MapPin', label: 'Distance', value: '~40 km north-west' },
                    { icon: 'Calendar', label: 'Capital', value: 'c. 1618 - 1866' },
                    { icon: 'Star', label: 'On the hill', value: 'Stupas of three kings' },
                    { icon: 'Clock', label: 'Time needed', value: 'Half to a full day' },
                ],
                sections: [
                    {
                        title: 'A capital most visitors have never heard of',
                        icon: 'Star',
                        content: "Between Angkor and Phnom Penh there is a gap in most people's mental map of Cambodia - roughly four hundred years where, in the usual telling, nothing happened. Oudong is that gap.\n\nAfter Angkor was abandoned in the fifteenth century the court moved south, and from about **1618 until 1866** Oudong was the royal capital. That is **more than 250 years**, longer than Phnom Penh has been the capital. Kings were crowned here, the court lived here, and then in 1866 Norodom moved the capital to Phnom Penh under French pressure and Oudong simply stopped.\n\nWhat is left is a long ridge with **stupas along the top**, reached by a staircase, holding the ashes of Cambodian kings - among them **Soriyopor**, who founded the capital, **Ang Duong**, the nineteenth-century reforming king, and **Monivong**, who died in 1941. A more recent stupa on the ridge holds a relic of the Buddha.\n\nThe hill was **shelled and mined in the war years** and some of the structures are reconstructions, which the site does not hide.\n\nWhat strikes people is how quiet it is. This is a place of national importance with almost nobody at it on a weekday - a few pilgrims, some monks, and children selling birds to release for merit.",
                        tourCard: CARD.oudong,
                    },
                    {
                        title: 'What is on the hill',
                        icon: 'MapPin',
                        content: "**The staircase.** A long covered flight up the ridge, with naga balustrades. It is a real climb in the heat - go early or late.\n\n**The royal stupas.** Three main ones along the ridge, each in a different style, each holding a king's ashes. They are close enough together that you walk the whole line in twenty minutes and far enough apart that each has its own view over the plain.\n\n**Vihear Preah Ath Roes**, the ruined temple with a seated Buddha. The original figure was destroyed in the war years and what stands now is a reconstruction; the surrounding shell was left as it was.\n\n**The view.** From the ridge the plain runs flat to the horizon in every direction, with rice, sugar palms and the glint of water in the wet months. On a clear day you can see a long way.\n\n**Vipassana Dhura Buddhist Centre** at the foot of the hill is a working meditation centre with hundreds of resident monks and nuns and a large modern complex. Visitors are welcome; dress and behave as you would at any active monastery.\n\n**A memorial** near the base commemorates victims of the Khmer Rouge found in mass graves in the area. Like Battambang's killing cave, it is a reminder that what happened in Phnom Penh happened everywhere.",
                    },
                    {
                        title: 'Getting there and combining it',
                        icon: 'Clock',
                        content: "**About 40 kilometres north-west of Phnom Penh** on National Road 5, an hour or a little more depending on traffic getting out of the city.\n\n**Private car or tuk-tuk** is how almost everyone goes; there is no convenient public option and no reason to want one. A half-day private trip is straightforward and a full day lets you combine it.\n\n**Combine with [Koh Dach silk island](/cambodia/phnom-penh/koh-dach-silk-island).** Both are north of the city and they make a natural full day - looms in the morning, the hill in the late afternoon when it has cooled and the light is good on the stupas.\n\n**Or with Kampong Chhnang**, further up NR5, where there are pottery villages and a floating community on the Tonle Sap. That is a longer day.\n\n**Or on the way to Battambang.** Oudong is directly on National Road 5, so if you are taking the [road to Battambang](/cambodia/phnom-penh/phnom-penh-to-battambang) it costs you almost nothing to stop - an hour on the hill and back in the car.\n\n**Timing.** Early morning or from about four. The staircase and the ridge are completely unshaded and the middle of the day is punishing from March to May.\n\n**Food** at the base is basic stalls. Bring water.",
                        tourCard: CARD.silk,
                    },
                    {
                        title: 'Behaving well at a working religious site',
                        icon: 'Info',
                        content: "Oudong is not a ruin, it is a place Cambodians come to pray, and the difference matters.\n\n**Dress.** Shoulders and knees covered. Nobody will stop you at a barrier the way they do at the [Royal Palace](/cambodia/phnom-penh/royal-palace-phnom-penh), which is exactly why it is worth getting right on your own.\n\n**Shoes off** inside any vihear and at the stupas where it is indicated.\n\n**Monks.** Ask before photographing, every time. Women should not hand anything directly to a monk or sit beside one - place an item down for him to pick up. This is not squeamishness, it is the rule they live under.\n\n**Feet** should not point at a Buddha image or at a person. Sit with your legs folded to one side.\n\n**Caged birds** are sold at the base to release for merit. It looks charitable and it is a trade: the birds are caught to be sold, many die in the process, and buying one funds catching more. Cambodian conservation groups ask visitors not to.\n\n**Children selling** at the base - the same rule as everywhere in Cambodia. Buying from children keeps them out of school by making them earning assets. Give to an organisation instead.\n\n**Donations** at the vihear or the meditation centre are the right place for money, and a small note is normal.",
                    },
                ],
                faqs: [
                    { q: 'What is Oudong?', a: 'Cambodia’s royal capital from about 1618 until 1866 - more than 250 years, longer than Phnom Penh has held the role. A ridge of stupas holds the ashes of Cambodian kings including Soriyopor, Ang Duong and Monivong.' },
                    { q: 'How far is Oudong from Phnom Penh?', a: 'About 40 km north-west on National Road 5, an hour or a little more depending on traffic out of the city. Almost everyone goes by private car or tuk-tuk; there is no convenient public option.' },
                    { q: 'Is Oudong worth visiting?', a: 'If you have a third day in Phnom Penh, yes. It fills the four-hundred-year gap between Angkor and Phnom Penh that most itineraries skip entirely, and it is a site of national importance with almost nobody at it on a weekday.' },
                    { q: 'What can you combine Oudong with?', a: 'Koh Dach silk island - both are north of the city and make a natural full day, looms in the morning and the hill in the late afternoon. It is also directly on National Road 5, so it is nearly a free stop on the way to Battambang.' },
                    { q: 'When is the best time of day to visit Oudong?', a: 'Early morning or from about four. The staircase and the ridge are completely unshaded and the middle of the day is punishing from March to May. Late afternoon also puts good light on the stupas.' },
                    { q: 'Should I buy birds to release at Oudong?', a: 'No. The birds are caught specifically to be sold, many die in the process, and buying one funds catching more. Cambodian conservation groups ask visitors not to, however charitable the merit-release looks.' },
                ],
            };

        case 'phnom-penh-with-kids':
            return {
                title: 'Phnom Penh With Children: What to Do, and What to Leave Out',
                seoTitle: 'Phnom Penh With Kids: What Works, What to Skip',
                description: 'Phnom Penh with children - the palace, the river, silk island and the wildlife centre, plus a straight answer on the Khmer Rouge sites and orphanage tours.',
                heroImage: IMG.cruise,
                fastFacts: [
                    { icon: 'AlertTriangle', label: 'S-21 & Choeung Ek', value: 'Not for young children' },
                    { icon: 'Star', label: 'Biggest hit', value: 'A boat on the Mekong' },
                    { icon: 'Clock', label: 'Plan around', value: 'Indoors 12:00 - 15:00' },
                    { icon: 'AlertTriangle', label: 'Never', value: 'Orphanage visits' },
                ],
                sections: [
                    {
                        title: 'What works',
                        icon: 'Star',
                        content: "Phnom Penh is a harder city for children than Siem Reap - it is hot, flat, and most of what adults come for is heavy. But there is a real day here.\n\n**A boat on the Mekong** is the easiest win. The city sits where three rivers meet, boats leave the quay all evening, an hour costs very little, and being on the water is a break from the heat as well as a sight. Sunset is the time.\n\n**Koh Dach, the silk island**, a short ferry upstream. Flat, green, almost no traffic, weavers working handlooms under the houses, and in the dry season sandbanks along the edge that local families picnic on. By bike it is a proper day out. See the [silk island guide](/cambodia/phnom-penh/koh-dach-silk-island).\n\n**The Royal Palace** holds up better with children than you would expect - the Silver Pagoda's floor is literally five thousand silver tiles and the gold Buddha has two thousand diamonds in it, both of which are facts a child can do something with. Shoulders and knees covered applies to them too, and it is a lot of walking in the sun, so go at opening.\n\n**Phnom Tamao Wildlife Rescue Centre**, about 40 km south, takes in animals confiscated from the illegal trade - elephants, bears, gibbons, tigers. It is a genuine rescue operation rather than a zoo with a good story. A full day with the drive.\n\n**The Central Market's** art deco dome is cool underneath and full of things to look at.",
                        tourCard: CARD.cruise,
                    },
                    {
                        title: 'The Khmer Rouge sites, plainly',
                        icon: 'AlertTriangle',
                        content: "**Tuol Sleng and Choeung Ek are not suitable for young children, and both sites say so.**\n\nS-21 has room after room of intake photographs of people who were about to be killed, the cells and the iron bed frames, and images of what was done there. Choeung Ek is a field of excavated mass graves with a stupa of **around 5,000 skulls** arranged by age and injury, and fragments of bone and cloth still surface in the paths after rain.\n\nThere is no version of this that is child-appropriate below about twelve, and nothing is gained by trying.\n\n**Teenagers who have been prepared usually manage well** and often take more from it than the adults do. Prepare them: what happened, roughly when, why it is there. The Choeung Ek audio guide, narrated in part by a survivor, does a lot of that work and is what makes the site legible rather than just grim.\n\n**The practical answer for a family** is to split. One parent takes the [Khmer Rouge sites](/cambodia/phnom-penh/tuol-sleng-and-choeung-ek-guide) in the afternoon while the other does the palace, the river or the market with the children, and swap the next day if there is one. That is what most families here actually do.\n\nDo not take a small child and stay outside with them either - it is half a day of standing in a car park.",
                    },
                    {
                        title: 'The heat, and the shape of a day',
                        icon: 'Clock',
                        content: "The heat is the thing that decides whether a family day in Phnom Penh works.\n\nAlmost everything here is outdoors and unshaded, and from **March to May** it is high thirties with thick humidity. Children overheat faster than adults and say so later than is useful.\n\n**The workable shape**: out at eight, one thing, back by eleven-thirty. **Indoors or in the pool from twelve to three** - this is non-negotiable in the hot months, not a nice-to-have. Out again at four for the market, the street art or the river, and eat early.\n\n**A pool is part of the itinerary**, not a luxury. Filter for one before anything else - see [where to stay](/cambodia/phnom-penh/where-to-stay-in-phnom-penh), where BKK1 has most of the mid-range hotels with pools and is quiet at night.\n\n**November to February** is a different city - mid-twenties mornings and a bearable afternoon. If you have any choice of dates with children, take these months.\n\n**Traffic.** Crossings work by walking steadily and letting traffic flow around you, which is alarming with a small child. Hold hands, cross with a local if you can, and use tuk-tuks freely - they cost a couple of dollars and remove the problem.\n\n**Mosquitoes.** Dengue is present and Phnom Penh is an urban dengue environment. Repellent at dusk, covered ankles.",
                        tourCard: CARD.market,
                    },
                    {
                        title: 'Two things to refuse',
                        icon: 'Info',
                        content: "**Orphanage visits.** Do not go, and decline any tour that offers one. Paid visits to institutions housing children cause documented harm: they turn children into an attraction, expose them to a stream of strangers, and the money has demonstrably driven children **into** institutions who have living parents. Cambodia has been a centre of this problem and reputable operators stopped offering it years ago. If a driver or a guide suggests it, say no and mean it.\n\nThe same applies to volunteering at one for a day, to \"visiting a village school\" as a paid stop, and to buying milk powder or supplies from a shop somebody leads you to.\n\n**Giving money to begging children.** It is the hardest one because the impulse is decent. Cambodian NGOs are unanimous: money given to a child on the street makes that child an earning asset and keeps them out of school, and organised begging exists here. Give to an organisation working on it instead.\n\n**ChildSafe** is the Cambodian network to know about - posters are everywhere and there is a hotline for concerns. Use it rather than intervening yourself.\n\n**What to do instead**, if you want the money to land: the wildlife centre, the arts schools, Cambodian-run social enterprises and the training restaurants that teach hospitality to young people from hard backgrounds. Several of those cook as well as anywhere in the city, which makes it an easy choice.",
                    },
                ],
                faqs: [
                    { q: 'Is Phnom Penh good for children?', a: 'Harder than Siem Reap - hot, flat, and most of what adults come for is heavy. But a boat on the Mekong, Koh Dach silk island, the Royal Palace and the Phnom Tamao wildlife rescue centre make a real few days.' },
                    { q: 'Should children visit Tuol Sleng or the Killing Fields?', a: 'Not under about twelve, and both sites say so - the intake photographs, the cells and a stupa of some 5,000 skulls are explicit. Prepared teenagers usually manage well. Most families split: one parent goes while the other takes the children to the palace or the river.' },
                    { q: 'What is there to do with kids in Phnom Penh?', a: 'An hour on the Mekong at sunset, Koh Dach silk island by bike, the Royal Palace early, the Central Market under its 1937 dome, and Phnom Tamao Wildlife Rescue Centre 40 km south, which takes in animals confiscated from the illegal trade.' },
                    { q: 'How do you handle the heat in Phnom Penh with children?', a: 'Out at eight, one thing, back by eleven-thirty, indoors or in the pool from twelve to three, out again at four. In March to May that is not a preference. Book a hotel with a pool and treat the pool as part of the itinerary.' },
                    { q: 'Should we visit an orphanage in Cambodia?', a: 'No, and decline any tour that offers one. Paid visits turn children into an attraction and the money has demonstrably driven children into institutions who have living parents. Reputable Cambodian operators stopped offering it years ago.' },
                    { q: 'Should I give money to begging children in Phnom Penh?', a: 'Cambodian NGOs are unanimous that you should not - it makes the child an earning asset and keeps them out of school, and organised begging exists here. Give to an organisation instead, and use the ChildSafe hotline for concerns.' },
                ],
            };
        default:
            return null;
    }
}
