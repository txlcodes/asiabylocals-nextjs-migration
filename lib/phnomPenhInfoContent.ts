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

        default:
            return null;
    }
}
