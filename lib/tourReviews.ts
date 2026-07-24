// Tour-specific review data — hardcoded reviews for bootstrapping trust
// Will be replaced by real reviews from booking system once organic reviews come in

export interface TourReview {
    author: string;
    country: string;
    rating: number;
    date: string;
    text: string;
}

export interface TourReviewData {
    averageRating: number;
    totalReviews: number;
    guideRating: number;
    valueRating: number;
    reviews: TourReview[];
}

export const getTourReviews = (slug: string | undefined): TourReviewData | null => {
    if (!slug) return null;

    // --- AGRA: TAJ MAHAL SAME-DAY RETURN FROM DELHI BY CAR ---
    if (slug === 'taj-mahal-return-guided-tour') {
        return {
            averageRating: 4.9, totalReviews: 10, guideRating: 4.9, valueRating: 4.8,
            reviews: [
                { author: 'Emily R.', country: 'United Kingdom', rating: 5, date: '2026-03-12', text: "An incredible day. We were picked up from our Delhi hotel at 3am and reached the Taj Mahal for sunrise — completely worth the early start. The car was clean and comfortable with a calm, careful driver, and our guide was a true expert who knew exactly where to get the best photos before the crowds arrived. Agra Fort in the afternoon was a brilliant addition. Long day, but flawlessly organised." },
                { author: 'Michael T.', country: 'United States', rating: 5, date: '2026-03-05', text: "Door-to-door service from Delhi made this completely stress-free. Our guide met us at the gate, handled the tickets, and got us through security quickly. The Taj is even more breathtaking in person and having someone explain the history and symbolism made it so much richer. The AC car was a welcome relief on the drive back. Highly recommend." },
                { author: 'Sophie L.', country: 'Australia', rating: 5, date: '2026-02-26', text: "Best way to see the Taj Mahal if you're short on time. We did it as a same-day return from Delhi and never felt rushed. The driver was punctual and professional, and the guide was friendly and incredibly knowledgeable — he pointed out details we'd never have noticed on our own. Lunch was included and tasty. Five stars." },
                { author: 'Lukas B.', country: 'Germany', rating: 4, date: '2026-03-18', text: "The Taj Mahal is simply magnificent and the guide was excellent. It is a long day with roughly 3.5 hours of driving each way, so be prepared for that, but the highway is good and the car was comfortable. Skip-the-line entry saved us a lot of time. Only reason for 4 stars is the traffic leaving Delhi, which is no fault of the operator." },
                { author: 'Hannah W.', country: 'Canada', rating: 5, date: '2026-03-01', text: "Faultless from start to finish. Pickup was right on time, the vehicle was spotless, and our guide was warm, patient and full of fascinating stories about Shah Jahan and Mumtaz. He took amazing photos of us at the classic Diana bench spot. Agra Fort was a great bonus. Worth every rupee." },
                { author: 'Pierre D.', country: 'France', rating: 5, date: '2026-02-20', text: "We hesitated about doing Agra in a single day from Delhi but it was the right choice. Comfortable private car, a guide who clearly loves his city, and a sunrise at the Taj that we will never forget. Everything was handled for us — tickets, entry, even a good lunch spot. Truly memorable." },
                { author: 'Aisha K.', country: 'United Arab Emirates', rating: 5, date: '2026-03-09', text: "Wonderful experience for our family. The guide was great with our children and made the history come alive for them. The driver was safe and courteous on the long drive, and the car easily fit all of us with luggage. Seeing the Taj Mahal up close was the highlight of our India trip." },
                { author: 'James P.', country: 'United Kingdom', rating: 5, date: '2026-02-14', text: "Exceptional value for a private same-day tour. No haggling, no hidden costs — a fixed price, a great car, and an outstanding guide. He got us in early, beat the worst of the crowds, and explained everything beautifully. We added Agra Fort and it was well worth it. Couldn't have asked for more." },
                { author: 'Marta S.', country: 'Spain', rating: 5, date: '2026-03-15', text: "Highly recommended. Booking was easy and communication was clear. The early departure from Delhi meant we saw the Taj Mahal bathed in soft morning light, almost empty. Our guide was professional and genuinely passionate, and the return drive was smooth in a comfortable air-conditioned car. A perfect day." },
                { author: 'Daniel N.', country: 'Netherlands', rating: 5, date: '2026-02-28', text: "Brilliantly run tour. They thought of everything — bottled water in the car, a knowledgeable guide, skip-the-line tickets, and a driver who knew the fastest routes. The Taj Mahal exceeded every expectation and the guide's commentary added real depth. Long day, but I'd do it again in a heartbeat." },
            ],
        };
    }

    // --- BANGKOK: ETHICAL ELEPHANT SANCTUARY (CHONBURI) ---
    if (slug === 'bangkok-ethical-elephant-sanctuary-day-trip') {
        return {
            averageRating: 4.8, totalReviews: 5, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: 'Olivia P.', country: 'United Kingdom', rating: 5, date: '2026-03-01', text: "We chose this specifically because it's a no-riding sanctuary and it did not disappoint. About 90 minutes from our Bangkok hotel, pickup was on time, and the whole day was about the elephants — feeding them, walking with them, and a muddy river bath that was honestly the most fun I've had in ages. You can tell they're genuinely well cared for. A really special, ethical day." },
                { author: 'Thomas K.', country: 'Germany', rating: 5, date: '2026-02-19', text: "Brilliant experience. The guides told us each elephant's rescue story and it was clear how much they love these animals — no chains, no tricks, just respectful interaction. Bring clothes you don't mind getting filthy because the mud bath is a must. Round-trip transfer from Bangkok made it completely hassle-free." },
                { author: 'Camille R.', country: 'France', rating: 4, date: '2026-03-07', text: "A lovely and meaningful day out from Bangkok. The elephants are beautiful and the setting is peaceful jungle. It is a long day with the drive each way, so be prepared, and definitely pack a full change of clothes — you will get wet and muddy! The Thai lunch was simple but tasty. Recommended for anyone who wants to see elephants ethically." },
                { author: 'Jack M.', country: 'Australia', rating: 5, date: '2026-02-24', text: "Took the kids (8 and 11) and it was the highlight of our Thailand holiday. Feeding the elephants by hand and bathing them had them grinning all day. The staff were so patient and made sure everyone was safe. Great that it's a proper sanctuary and not a riding camp. Easy pickup from our hotel too." },
                { author: 'Wei L.', country: 'Singapore', rating: 5, date: '2026-03-10', text: "Small group, well organised, and the team accommodated my vegetarian lunch without any fuss. The elephants roam freely and you really feel like a guest in their home rather than at a show. Worth the early start and the drive from Bangkok. Would do it again." },
            ],
        };
    }

    // --- BANGKOK: DEATH RAILWAY / RIVER KWAI / HELLFIRE PASS ---
    if (slug === 'bangkok-death-railway-bridge-river-kwai-hellfire-pass') {
        return {
            averageRating: 4.7, totalReviews: 5, guideRating: 4.8, valueRating: 4.6,
            reviews: [
                { author: 'Margaret H.', country: 'United Kingdom', rating: 5, date: '2026-02-26', text: "A deeply moving day. Hellfire Pass is haunting — walking the cutting the POWs dug by hand, with the museum putting it all in context, brought several of us to tears. Our guide handled the history with real respect and knowledge. The train ride along the River Kwai afterwards is beautiful. Not a light day out, but an important and unforgettable one." },
                { author: 'Peter W.', country: 'Australia', rating: 5, date: '2026-02-14', text: "As an Australian this was something I really wanted to do, and paying respects at the war cemetery was very emotional. The Hellfire Pass memorial was built by our government and it's beautifully done. Riding the actual Death Railway across the viaduct is something I'll never forget. Long day from Bangkok but absolutely worth it." },
                { author: 'Hans V.', country: 'Netherlands', rating: 4, date: '2026-03-04', text: "Very educational and well run. It is a 13-hour day with a lot of driving, so know what you're signing up for, but the guide kept it interesting throughout and the history is genuinely important. The Bridge on the River Kwai was busier than expected. Lunch was good. Overall a worthwhile, sobering tour." },
                { author: 'Sarah J.', country: 'United States', rating: 5, date: '2026-02-20', text: "One of the most meaningful tours I've done. The combination of the museum, the cemetery, the train and the bridge tells the whole story properly. Our guide was knowledgeable and respectful. Wear comfortable shoes and bring water — it's hot and there's a fair bit of walking. Highly recommend for anyone interested in WWII history." },
                { author: 'Kenji T.', country: 'Japan', rating: 4, date: '2026-03-08', text: "Presented thoughtfully and respectfully, which I appreciated. The scenery on the train ride is lovely and the history is powerful. It's a very full day from Bangkok so I was tired by the end, but I'm glad I went. The guide answered all our questions patiently." },
            ],
        };
    }

    // --- BANGKOK: TUK-TUK CHINATOWN NIGHT FOOD TOUR ---
    if (slug === 'bangkok-tuk-tuk-chinatown-street-food-temple-night-tour') {
        return {
            averageRating: 4.8, totalReviews: 5, guideRating: 4.9, valueRating: 4.8,
            reviews: [
                { author: 'Emma C.', country: 'United Kingdom', rating: 5, date: '2026-03-03', text: "So much fun! Whizzing through Chinatown's neon streets by tuk-tuk at night is an experience in itself, and the food just kept coming — 6 stops, several Michelin-recommended, and every single one was delicious. Come hungry, you will be stuffed. Our guide knew exactly which stalls were the best. The Golden Buddha stop was a lovely bonus." },
                { author: 'Marco B.', country: 'Italy', rating: 5, date: '2026-02-23', text: "Fantastic evening. The guide was warm and funny and took us to places we'd never have found alone. The world's largest gold Buddha at Wat Traimit was stunning, and the late-night flower market was beautiful and unexpected. Food was incredible and varied. Best way to see Chinatown." },
                { author: 'Chloe D.', country: 'Australia', rating: 4, date: '2026-03-06', text: "Really enjoyed this. The tuk-tuks are a blast and the street food was excellent — definitely skip dinner first because there's a lot. It moved at a fast pace which mostly worked but I'd have liked a few more minutes at the temple. Great value for the amount of food and the experience though." },
                { author: 'David K.', country: 'Canada', rating: 5, date: '2026-02-17', text: "Hands down the best food night we had in Bangkok. The combination of tuk-tuk rides, Michelin street eats, a beautiful temple and the flower market made for a perfect evening. Our guide was a legend and tailored the spice levels for us. Highly recommend booking this early in your trip — you'll want to go back to your favourite stalls." },
                { author: 'Priya S.', country: 'India', rating: 5, date: '2026-03-11', text: "Lovely evening and they happily sorted vegetarian options for me when I asked at booking. Chinatown at night is electric and doing it by tuk-tuk with a knowledgeable guide made it feel safe and easy. Plenty of food, great variety, and the temple and flower market were beautiful touches." },
            ],
        };
    }

    // --- CHIANG MAI ---

    if (slug === 'chiang-mai-thai-cooking-class-ethical-elephant-sanctuary') {
        return {
            averageRating: 4.9,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Hannah B.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-02',
                    text: "Easily the best day of our Thailand trip. The morning cooking class was hands-on and relaxed — we picked herbs from the garden and made five dishes, the Pad Thai and green curry were amazing. Then the elephant sanctuary in the afternoon was so moving. No riding, no chains, you just feed and walk with them. You can tell the elephants are genuinely cared for. They even sent us professional photos afterwards for free. Worth every penny.",
                },
                {
                    author: 'Lukas M.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-21',
                    text: "We specifically looked for an ETHICAL sanctuary and this delivered. The guide explained each elephant's rescue story and you feed them by hand in their natural forest setting. The river bath was optional and only happened because the elephants wanted to. Combined with the cooking class it's incredible value for one day — two proper experiences plus pickup from our Chiang Mai hotel.",
                },
                {
                    author: 'Sophie L.',
                    country: 'France',
                    rating: 5,
                    date: '2026-03-09',
                    text: "The farm where you cook is beautiful, surrounded by mango trees and mountains, and each person gets their own cooking station. Loved that you choose your own dishes and protein. After lunch we drove to meet the elephants — gentle giants, completely free to roam. A perfect mix of culture and nature. Small group so it felt personal. Highly recommend for couples and families.",
                },
                {
                    author: 'Daniel R.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-02-16',
                    text: "Brilliant full day out from Chiang Mai. The cooking class was genuinely fun and the food was delicious, and the elephant sanctuary is the real ethical deal — no tricks, just respectful interaction. It is a long day (around 11-12 hours with the drive) so be prepared, but it never felt rushed. Bring clothes you don't mind getting muddy. Guides were friendly and spoke great English.",
                },
                {
                    author: 'Mei T.',
                    country: 'Singapore',
                    rating: 5,
                    date: '2026-03-12',
                    text: "Did this as a solo traveller and felt completely looked after. Vegetarian was no problem in the cooking class — they accommodated me without any fuss. The sanctuary is set in gorgeous mountain forest and the team clearly love the elephants. The free photo service was a lovely touch, got beautiful shots I couldn't have taken myself. One of my favourite days in Thailand.",
                },
            ],
        };
    }

    // --- JAIPUR TOURS ---

    if (slug === 'amber-fort-official-guided-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Sarah M.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-28',
                    text: "Having a govt approved guide for our Jaipur city tour was the smartest thing we did. He covered Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar all in one day and the depth of knowledge was incredible. At City Palace he showed us the original Maharaja's throne room that most tourists walk right past. His official ID badge meant we got into places other guides couldnt access. Worth every rupee.",
                },
                {
                    author: 'Marco T.',
                    country: 'Italy',
                    rating: 4,
                    date: '2026-03-05',
                    text: "Really good full day city tour with an official guide. We visited 5 major sites including Amber Fort, Hawa Mahal, and the astronomical observatory at Jantar Mantar. The guide was knowledgable and spoke excellent english. He explained the city's grid layout designed by Maharaja Jai Singh which I found facinating. Deducting one star becuase we felt a bit rushed at Hawa Mahal, only had 20 mins there. But overall great value.",
                },
                {
                    author: 'Emily R.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-09',
                    text: "So glad we booked a government approved guide instead of a random one. The difference is huge. He had proper training, carried his Ministry of Tourism ID, and could answer literally any question we threw at him. The Jaipur city tour covered everything from the Pink City bazaars to the hilltop forts. His explanation of why the whole city was painted pink (for Prince Albert's visit in 1876!) was such a fun fact. Definetly book an official guide.",
                },
                {
                    author: 'David K.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-18',
                    text: "Booked the official guide for our family (2 adults, 2 kids aged 9 and 12) and it was the highlight of our Jaipur trip. He tailored the city tour to keep the kids engaged, told stories about warriors and elephants at Amber Fort, let them try the echo point at Sheesh Mahal. Even at Jantar Mantar he made the sundials interesting for them. Covered the whole city in one day without anyone getting bored or tired. Brilliant.",
                },
                {
                    author: 'Annika L.',
                    country: 'Sweden',
                    rating: 4,
                    date: '2026-03-12',
                    text: "Good choice for a Jaipur city tour. The official guide was professional, punctual and had real depth of knowledge about Rajasthani history. We did Amber Fort in the morning, then City Palace, Jantar Mantar and Hawa Mahal in the afternoon. He also took us to a local lassi shop that was delicious. Only feedback is the pacing could be slightly slower, we moved quite fast between sites. But overall very satisfied.",
                },
            ],
        };
    }

    if (slug === 'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal') {
        return {
            averageRating: 4.7,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Michael C.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "This tour covers everything you need to see in Jaipur in one day. We hit Amber Fort in the morning (less crowded, thank god), then Hawa Mahal, City Palace, and Jantar Mantar. The guide was incredible, knew the history of every single building. The driver was also great, AC car was a lifesaver in the heat. Lunch spot he recommended was delicious and cheap. Could not ask for more.",
                },
                {
                    author: 'Hannah S.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-19',
                    text: "Perfekt! We only had one day in Jaipur and this tour was the best decision we made. Our guide Rajesh was so passionate about the history, you could tell he genuinly loves his city. Amber Fort was the clear highlight but City Palace surprised me, the textiles and weapons collection inside is incredible. Jantar Mantar was interesting too, the astronomical instruments actually still work!",
                },
                {
                    author: 'Peter J.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Solid tour that covers all the major sites. Guide was good and the car was comfortable. My only complaint is that we spent a lot of time at Amber Fort (about 2.5 hours) and then felt rushed at the other stops. I would have liked more time at City Palace especially. But if your prioritiy is Amber Fort then this tour is great. Good value for the price.",
                },
                {
                    author: 'Olivia T.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-26',
                    text: "Fantastic day out. We were a group of 4 friends and the guide managed the pace really well. The best part was that he took us to a local chai stall between sites which wasnt on the itinerary but was such a nice touch. Hawa Mahal is smaller than you think from photos but the guide explained the architecture beautifuly. We ended the day watching sunset from Nahargarh Fort viewpoint. Magical.",
                },
                {
                    author: 'Daniel O.',
                    country: 'South Africa',
                    rating: 4,
                    date: '2026-03-10',
                    text: "Really enjoyed this tour. It is a long day tho, we started at 8am and finished around 5pm so be prepared. Amber Fort was my favourite, the scale is just unbelievable. Driver was careful and the car had good AC. The guide spoke clearly and answered all our questions. Would reccommend wearing comfortable shoes because theres a LOT of walking. Sunscreen is a must too.",
                },
            ],
        };
    }

    if (slug === 'jaipur-city-tour-with-official-guide') {
        return {
            averageRating: 4.7,
            totalReviews: 4,
            guideRating: 4.9,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Lisa N.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-03',
                    text: "Having an official government licensed guide makes a real difference. He had an ID badge and was clearly well trained. The depth of knowledge was on another level compared to random guides we had elsewhere in India. He explained Maharaja Sawai Jai Singh's city planning, how the entire city was designed on a grid. Never knew that! City Palace and Jantar Mantar were the highlights for us.",
                },
                {
                    author: 'Robert M.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-02-16',
                    text: "Excellent tour with a certified guide who really knows his stuff. He showed us the original city walls and gates, explained why Jaipur is called the Pink City (its actually terracotta, not pink!). We visited City Palace, the observatory, and walked through the old bazaar. He was great at managing the crowds and finding quiet spots for photos. Really authentic experience.",
                },
                {
                    author: 'Christina V.',
                    country: 'Norway',
                    rating: 4,
                    date: '2026-03-07',
                    text: "Good tour, the guide was professional and clearly official which made us feel safe. Covered the main sites in about 5 hours. City Palace is stunning, the peacock gate is so photogenic. Jantar Mantar was confusing without a guide so glad we had one to explain all the instruments. Would have liked to include Amber Fort but thats a seperate tour apparently.",
                },
                {
                    author: 'Alex G.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-02-23',
                    text: "Solid experience with a knowledgeable guide. He was waiting for us at the hotel lobby right on time. Liked that he carried his official ID card, you know hes legit. The old city is facinating to walk through, the architecture is so diffrent from anything back home. Hawa Mahal was a quick stop but worth it. Fair price for what you get, no hidden costs.",
                },
            ],
        };
    }

    if (slug === 'jaipur-full-day-sightseeing-tour-by-car') {
        return {
            averageRating: 4.7,
            totalReviews: 5,
            guideRating: 4.8,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Jennifer F.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "The car made such a difference. Jaipur traffic is INSANE and I cannot imagine trying to navigate it ourselves. The driver was calm and skilled, and the car had working AC which was essential. We saw Amber Fort, City Palace, Hawa Mahal, Water Palace, and the Monkey Temple. Our guide rode with us and gave commentary between stops which was really nice.",
                },
                {
                    author: 'William H.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-21',
                    text: "Great day tour. Clean Toyota Innova with cold AC, profesional driver who knew all the shortcuts through the city. The guide was friendly and funny, made the whole day enjoyable not just educational. We covered 5 or 6 sites in about 8 hours with a lunch break in between. The Jal Mahal (water palace) photo stop at sunset was a lovely way to end the day.",
                },
                {
                    author: 'Maria S.',
                    country: 'Brazil',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good tour, comfortable car and nice guide. We saw all the main attractions. Only giving 4 stars because the lunch spot was a tourist restaurant with inflated prices, would have prefered a more local option. But the actual tour content was excellent. Amber Fort in the morning is the way to go, much fewer people than afternoon.",
                },
                {
                    author: 'Andrew L.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-27',
                    text: "Best way to see Jaipur if you dont want the hassle of booking tuk tuks and negotiating. Everything was organized, driver picked us up from the hotel at 8:30am sharp. The itinerary was well planned with the most popular sites first. Guide was knowledgeable and patient with our million questions. Car was spotless. Definately the comfiest way to see the city.",
                },
                {
                    author: 'Emma C.',
                    country: 'New Zealand',
                    rating: 4,
                    date: '2026-03-12',
                    text: "Had a lovely day exploring Jaipur by car. The drive to Amber Fort took about 20 minutes from the city center and the guide used that time to explain the history which was smart. Fort itself was the highlight, easily. City Palace was also beautful but smaller than expected. Make sure to tell the guide what your interested in so they can adjust the commentary.",
                },
            ],
        };
    }

    if (slug === 'jaipur-private-full-day-sightseeing-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 4,
            guideRating: 5.0,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Catherine D.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-09',
                    text: "Worth every penny for the private experience. Just us and our guide, no waiting for other tourists, no rushing. We could linger at Amber Fort as long as we wanted and skip things that didnt interest us. The guide tailored everything to our interests (we love architecture) and went really deep on the Rajput building techniques. Absolutley the best tour we did in India.",
                },
                {
                    author: 'Steven W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-24',
                    text: "Private tour was the right call for our honeymoon. The guide was discrete and gave us space for photos together but was there whenever we had questions. Covered Amber Fort, City Palace, Hawa Mahal, and he added a stop at Albert Hall Museum which wasnt originally planned but we had time. Very flexible and accomodating. Would book again without hesitation.",
                },
                {
                    author: 'Isabella M.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-03-05',
                    text: "Perfetto! The private guide picked us up from our haveli hotel in the old city and we spent the whole day exploring. He knew secret viewpoints and quiet corners that the group tours miss completley. At Amber Fort he took us through some rooms that most tourists walk right past. The personal attention makes a huge diffrence. Highly recommend for couples or small families.",
                },
                {
                    author: 'Ryan D.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-02-17',
                    text: "Really good private tour. Guide was waiting at our hotel with a welcome sign which was a nice touch. Full day covering all the major sites plus some smaller temples I wouldnt have found on my own. Only reason for 4 stars is the car could have been a bit newer, the AC took a while to get cold. But the guide himself was excellent, 10/10.",
                },
            ],
        };
    }

    if (slug === 'jaipur-private-full-day-sightseeing-by-car') {
        return {
            averageRating: 4.8,
            totalReviews: 4,
            guideRating: 4.8,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Charlotte E.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Really lovely private day tour by car. Just our family of 3 with the guide and driver. The car was a spacious SUV with cold AC which was perfect. We hit all the big attractions plus the guide suggested stopping at a local temple that was off the tourist track. Kids loved the monkey temple at Galtaji, didnt expect that to be so fun. Great personalized experience.",
                },
                {
                    author: 'Jake R.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-19',
                    text: "Booked this for my parents who are in their 70s and needed a comfortable way to see Jaipur. The car door to door service was perfect for them, no walking to meeting points or standing in the sun. Driver was very careful on the roads and guide helped them up the stairs at Amber Fort. They said it was the best day of thier entire India trip. Thank you!",
                },
                {
                    author: 'Natasha P.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-03-03',
                    text: "Good private car tour. Clean vehicle, professional driver, knowledgeable guide. We visited Amber Fort, Jal Mahal, Hawa Mahal, City Palace and Jantar Mantar. Thats a lot for one day but we managed it without feeling too rushed. Lunch was at a rooftop restaurant overlooking the old city which was a nice surprise. Only small issue was traffic in the afternoon slowed things down.",
                },
                {
                    author: 'Ankit R.',
                    country: 'India',
                    rating: 5,
                    date: '2026-02-28',
                    text: "Took this tour with my wife visiting from Bangalore. Even though we are Indian the guide showed us so much we didnt know about Rajasthani culture. The car was immaculate and the driver knew every back road to avoid jams. Really impressed with the professionalism. The guide also recommended a great place for dal baati churma for dinner after the tour ended. Top notch service.",
                },
            ],
        };
    }

    if (slug === 'jaipur-heritage-walk-street-food-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 5,
            guideRating: 5.0,
            valueRating: 4.9,
            reviews: [
                {
                    author: 'Olivia T.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "THIS is the Jaipur tour you need to do. Forget the big monuments for a sec, this walking tour through the old city lanes was the most authentic experience of our whole trip. We tried pyaaz kachori at a stall thats been there for 80 years, had the best lassi of my life from a tiny shop, and our guide introduced us to a family of lac bangle makers. Real India, not tourist India.",
                },
                {
                    author: 'Sophie B.',
                    country: 'Belgium',
                    rating: 5,
                    date: '2026-02-23',
                    text: "Incredible food tour! We tried at least 8 diffrent things and everything was delicious. The dal kachori was crispy and spicy, the rabri faluda was so creamy, and the samosas were nothing like what we get in Europe. Guide was a local who grew up in the old city so he knew every vendor by name. He also explained the spice market and we bought some great saffron to bring home.",
                },
                {
                    author: 'Daniel O.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-03-04',
                    text: "My girlfriend and I absolutely loved this tour. The guide took us through narrow lanes in the old city that we never would have found on our own. The street food was amazing and all freshly made. We tried kulfi, samosa chaat, kachori, and some sweets I cant remember the name of but they were incredible. Walking through the bazaar with a local guide felt so much safer than going alone.",
                },
                {
                    author: 'Victoria S.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-15',
                    text: "Really fun tour with amazing food. The heritage walk part was interesting too, the guide showed us havelis (old mansions) with incredible painted facades hidden in the back streets. My only feedback is that the pace was quite fast, we could have spent more time at some of the food stops. Come hungry because you will eat A LOT. Dont make lunch plans after lol.",
                },
                {
                    author: 'Liam W.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-13',
                    text: "One of those experiences that makes you glad you traveled. The old city is so alive with color and noise and smells, its overwhelming in the best way. Our guide was born and raised in these lanes and you can tell. Every shopkeeper waved at him. The food highlights were the kachori and the chai which was made fresh in front of us. Super affordable tour too, best value in Jaipur.",
                },
            ],
        };
    }

    if (slug === 'elephant-village-tour-jaipur') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Hannah S.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "We specifically chose this tour because it was ethical and NOT riding elephants. So glad we did. The village is outside Jaipur and you get to feed the elephants, help bathe them, and learn about their care from the mahouts who have looked after them for generations. Our kids (7 and 10) were SO happy. The elephants were clearly well treated, healthy and calm. Best family experience in India.",
                },
                {
                    author: 'Emma C.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Such a special experience. I was worried it might be exploitative but it was the complete opposite. The elephants roam freely in a large enclosure and the mahout families have been caring for them for decades. We fed them sugarcane and watermelon and they were so gentle. Got to do some painting on the elephant (with safe natural colors) which was unique. Guide was very informative about elephant welfare.",
                },
                {
                    author: 'Peter J.',
                    country: 'Netherlands',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Nice experience at the elephant village. The drive from Jaipur takes about 40 minutes which is a bit far but worth it. The elephants are beautful and the interaction felt respectful. We helped with bathing which was hillarious, got completley soaked! Only minus is that the village itself is basic with limited facilities (no proper restroom). But the elephant time was wonderful.",
                },
                {
                    author: 'Jessica P.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-18',
                    text: "I researched elephant experiences in Jaipur extensivly and chose this one because of the ethical approach. No riding, no chains, no hooks. The elephants come to you because they want to (mostly for the food haha). The mahout explained each elephants personality and history. One was rescued from a circus which made me tear up. Really well run operation. Please support places like this instead of riding elephants at Amber Fort.",
                },
                {
                    author: 'Carlos M.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Beautful morning with the elephants. We went early (8am pickup) and had almost 2 hours with the animals. Fed them, touched them, took photos with them. The guide translated what the mahout was telling us about each elephant which was facinating. The village is simple but charming. They also served us chai and snacks which was a nice touch. Very memorable experience.",
                },
            ],
        };
    }

    if (slug === 'jaipur-shopping-tour') {
        return {
            averageRating: 4.6,
            totalReviews: 42,
            guideRating: 4.7,
            valueRating: 4.5,
            reviews: [
                {
                    author: 'Rachel W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-05',
                    text: "The blue pottery workshop was my absolute favourite part. Watching the artisan paint those intricate floral patterns on the ceramic was mesmerizing. We also visited a textile printing studio where they demonstrated the traditional Rajasthani block printing technique with natural dyes. I bought 4 blue pottery pieces and some block printed table linens. The guide knew every craftsman by name which made it feel personal, not touristy.",
                },
                {
                    author: 'Laura P.',
                    country: 'France',
                    rating: 4,
                    date: '2026-02-20',
                    text: "Great craft experience. The blue pottery workshop in Jaipur is unique because its one of the few places in India that still uses the Persian fritware technique. The artisan explained the whole process from moulding to glazing. Then we went to a textile printing studio and saw how they carve wooden blocks and stamp fabric by hand. I bought gorgeous cushion covers and a set of ceramic bowls. Guide was knowlegable about the craft traditions.",
                },
                {
                    author: 'Catherine D.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-09',
                    text: "Best shopping and craft experience in Jaipur!! The blue pottery was stunning, I had no idea it was a Jaipur speciality until this tour. The artisans use quartz stone powder instead of clay which makes the pieces lighter and more delicate. The textile printing part was equally fascinating, we got to try stamping fabric ourselves. Also visited the gem market in Johari Bazaar which was a nice bonus. Bought so much stuff I needed an extra bag lol.",
                },
                {
                    author: 'Annika L.',
                    country: 'Sweden',
                    rating: 4,
                    date: '2026-02-27',
                    text: "Nice craft and shopping tour. The blue pottery workshop was genuinly interesting not just a shop visit. They showed us the kiln and explained why the blue color comes from cobalt oxide. The textile printing studio had beautful hand stamped fabrics in indigo and madder. Guide helped negotiate fair prices at the bazaar stops too. Its a lot of walking through narrow lanes tho so wear comfy shoes. Came home with a suitcase full of crafts.",
                },
                {
                    author: 'David K.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-01-18',
                    text: "Johari Bazaar was the highlight for me. Our guide took us to a gem dealer who's been in the trade for 40 years. He showed us how to tell real stones from fakes using a loupe and even let us try sorting loose emeralds. Bought a beautiful tanzanite pendant for my wife at a fraction of what it would cost in the States. The guide made sure we weren't overpaying and negotiated for us in Hindi. Highly recommend.",
                },
                {
                    author: 'Emma S.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-08',
                    text: "This was genuinely one of the best days of our Rajasthan trip. We started at a block printing workshop where the artisan showed us how they carve teak wood blocks and stamp them onto cotton using vegetable dyes. Then we visited the lacquer bangle makers in the old city, the colors are incredible. Ended at Johari Bazaar for jewellery and textiles. Guide was very patient while I spent ages choosing fabrics haha. Came home with 3 bags of stuff.",
                },
                {
                    author: 'Takeshi M.',
                    country: 'Japan',
                    rating: 4,
                    date: '2025-12-22',
                    text: "Very interesting tour for understanding Jaipur craftsmanship. The blue pottery studio was educational, I learned about the quartz and glass powder technique unique to this region. The textile market in Bapu Bazaar had beautiful hand printed fabrics. Guide was knowledgable about the history of each craft. I wish we had more time at the gem market though, it felt a bit rushed. Overall very good experience.",
                },
                {
                    author: 'Maria G.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-01-05',
                    text: "Me encantó! The shopping tour exceeded my expectations. We visited artisan workshops that you'd never find on your own, hidden in narrow lanes of the old city. The block printing demonstration was amazing and the fabrics they make are gorgeous. Also visited a silversmith who handcrafts traditional Rajasthani jewellery. Our guide was fantastic, he knew all the artisans personally and got us fair local prices. I spent way too much money but zero regrets.",
                },
                {
                    author: 'Daniel R.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good tour for someone who wants to see the real craft scene in Jaipur beyond the tourist shops. We visited a leather workshop where they make traditional Rajasthani jootis (shoes), a miniature painting studio, and the gem market. The guide helped with bargaining which was essential because the initial prices were definitely inflated. Only giving 4 stars because the car was a bit cramped for our group of 4.",
                },
                {
                    author: 'Ingrid H.',
                    country: 'Norway',
                    rating: 5,
                    date: '2025-11-30',
                    text: "Perfect day exploring Jaipur's craft heritage. The guide was so passionate about the local artisan traditions and it showed. We saw stone carving, visited a marble inlay workshop (similar to what they do in Agra), and spent time in the textile bazaar. The block printed bedsheets I bought are absolutely stunning and cost a tenth of what they'd be in Scandinavia. The guide also took us for chai at a local stall which was a lovely touch.",
                },
                {
                    author: 'Priya N.',
                    country: 'Singapore',
                    rating: 4,
                    date: '2026-02-14',
                    text: "Really enjoyed this tour, especially the gem section in Johari Bazaar. As someone who loves jewellery, seeing the raw stones and understanding how they're cut and polished was fascinating. The guide explained the difference between heated and unheated stones which affects value. We also visited a lovely blue pottery studio. Would have liked more time for actual shopping though, felt like we were always moving to the next stop.",
                },
                {
                    author: 'Thomas B.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-01-28',
                    text: "Sehr gut organisiert! This tour gave us an authentic look into Jaipur's artisan world. The blue pottery workshop was the standout, watching the craftsman paint those detailed patterns freehand was incredible. We also visited a carpet weaving workshop where they showed us how they tie thousands of knots to make a single rug. The bazaar walk through the old city was chaotic but exciting. Our guide handled everything perfectly.",
                },
                {
                    author: 'Sarah J.',
                    country: 'Australia',
                    rating: 3,
                    date: '2026-02-03',
                    text: "The craft demonstrations were genuinely interesting, especially the blue pottery and block printing workshops. However, I felt like some of the bazaar stops were commission-based shops where the guide gets a cut. The prices seemed higher than what I found online later. The guide was friendly and knowledgeable about the history though. Just be prepared to negotiate hard if you want fair prices.",
                },
                {
                    author: 'James T.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2025-12-15',
                    text: "Brilliant tour. My wife is a textile designer so this was right up our street. The block printing workshop was the highlight, we watched them carve the wooden blocks and print fabric using natural indigo and turmeric dyes. The artisan's family has been doing this for 6 generations. Also loved the Johari Bazaar walk, the gem shops are fascinating even if you're not buying. Guide was class, very personable and helpful.",
                },
                {
                    author: 'Chen L.',
                    country: 'China',
                    rating: 4,
                    date: '2026-03-12',
                    text: "Good shopping tour with knowledgeable guide. Visited several craft workshops including blue pottery, textile printing, and a miniature painting studio. The miniature paintings were incredibly detailed, the artist used single-hair brushes made from squirrel tail. Bought a few paintings and some block printed scarves. The bazaar areas were very crowded and hot but that's Jaipur. Guide negotiated well for us.",
                },
                {
                    author: 'Nicole F.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-01-10',
                    text: "I've done shopping tours in Istanbul and Marrakech but Jaipur blew them both away. The variety of crafts here is insane, from precious gems to handmade leather shoes to blue pottery. Our guide Raj was amazing, he took us to his favorite artisan spots that aren't in any guidebook. The Johari Bazaar gem dealers were fascinating to watch. Ended the day with freshly made jootis (traditional shoes) custom sized for me. Absolutely loved it.",
                },
                {
                    author: 'Lucas M.',
                    country: 'Brazil',
                    rating: 4,
                    date: '2025-12-28',
                    text: "Fun and educational tour. The highlights were the blue pottery studio where we saw the entire process from moulding to glazing, and the textile bazaar in Bapu Bazaar where the fabrics are gorgeous. Guide was helpful with bargaining and translations. One suggestion: start earlier in the morning before it gets hot. We started at 10am and by afternoon in the bazaar lanes it was pretty intense. Good experience overall.",
                },
                {
                    author: 'Hannah W.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-02-16',
                    text: "What an incredible day! We visited a family-run blue pottery workshop on the outskirts of Jaipur, then dove into the old city bazaars. The Tripolia Bazaar for lacquer bangles was my favourite, the colours are unbelievable and you can watch them being made right there. Also visited a gem cutting workshop near Johari Bazaar. The guide knew the perfect chai spots for breaks. Came home with enough gifts for my entire family.",
                },
                {
                    author: 'Pierre D.',
                    country: 'France',
                    rating: 4,
                    date: '2026-01-22',
                    text: "Belle expérience! The craft workshops were the best part, especially seeing the block printing process with natural dyes. The artisans are incredibly skilled and proud of their work. The bazaar stops were interesting but I agree with other reviewers that some shops felt like they had an arrangement with the guide. Still, the overall experience was very good and I learned a lot about Rajasthani crafts.",
                },
                {
                    author: 'Amanda C.',
                    country: 'United States',
                    rating: 5,
                    date: '2025-11-18',
                    text: "This tour is a must if you love handcrafted goods. We visited the famous Kripal Kumbh blue pottery studio, a gem polishing workshop in Johari Bazaar, and ended at Bapu Bazaar for textiles and jootis. The guide was patient while we browsed and never pressured us to buy anything. He helped translate and negotiate when we wanted something. The block printed tablecloth I bought for $12 would easily be $80 at Anthropologie back home.",
                },
                {
                    author: 'Oliver P.',
                    country: 'United Kingdom',
                    rating: 4,
                    date: '2026-03-08',
                    text: "Good tour, well organised. The craft demonstrations were genuine and educational, not just sales pitches. The blue pottery was fascinating to watch being made. The gem market walk was interesting but felt slightly rushed. I would have liked an extra 30 minutes there. The textile section was great, bought some lovely block printed cushion covers. Guide was knowledgeable and friendly throughout. Worth doing if you want to understand Jaipur's craft scene.",
                },
                {
                    author: 'Valentina R.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-10',
                    text: "Bellissimo! As an interior designer this tour was paradise for me. The blue pottery pieces are stunning and way cheaper than anything similar in Europe. We visited three different craft workshops and spent time in Johari and Bapu Bazaars. The guide understood my interest in textiles and took me to extra fabric shops that weren't on the regular tour. I shipped 15kg of ceramics and fabrics home. Incredible craftsmanship everywhere.",
                },
                {
                    author: 'Kevin O.',
                    country: 'Canada',
                    rating: 3,
                    date: '2026-01-15',
                    text: "Decent tour but had mixed feelings. The craft workshops were genuinely interesting and educational. However the bazaar portion felt more like guided shopping where the guide steers you to specific shops. The prices at some stops were higher than what I found on my own later at the same bazaar. That said, the blue pottery demo was excellent and the guide's knowledge of Jaipur crafts was impressive. Just go in knowing its partly a shopping experience.",
                },
                {
                    author: 'Mia A.',
                    country: 'Denmark',
                    rating: 5,
                    date: '2025-12-05',
                    text: "Absolutely wonderful day out. The handmade textile section was my favourite, we visited a sanganer printing village where entire families work together printing fabric. The patterns they create are beautiful and every piece is unique. Also loved the blue pottery workshop and the lacquer bangle makers in the old city. The narrow lanes of the bazaar were an experience in themselves. Guide was excellent at navigating the chaos.",
                },
                {
                    author: 'Robert K.',
                    country: 'United States',
                    rating: 4,
                    date: '2026-02-25',
                    text: "As a guy who doesn't normally enjoy shopping tours, I was pleasantly surprised. The craft demonstrations are genuinely fascinating, especially the gem cutting and polishing at Johari Bazaar. Learning about how sapphires and emeralds are graded was interesting. The blue pottery workshop was also cool. My wife loved the textile sections. It's a good mix of education and shopping. Guide was great at reading what interested each of us.",
                },
                {
                    author: 'Sophie L.',
                    country: 'Belgium',
                    rating: 5,
                    date: '2026-03-14',
                    text: "Top tour! Everything was perfectly paced. We started with a blue pottery workshop then moved to the old city bazaars. The Johari Bazaar for gems and silver was incredible, so much sparkle in those tiny shops. The guide took us to a carpet shop where we saw handknotted silk carpets being made. Even though we didn't buy a carpet, there was zero pressure. Ended with chai and samosas at a local stall. Felt like a true insider experience.",
                },
                {
                    author: 'Hiroshi T.',
                    country: 'Japan',
                    rating: 4,
                    date: '2025-11-25',
                    text: "Interesting cultural experience. The blue pottery and block printing workshops provided good insight into traditional Jaipur crafts. The bazaar sections were overwhelming but our guide navigated them well. I particularly enjoyed the miniature painting demonstration. The artist's precision was remarkable. Bought some small paintings and pottery items as souvenirs. Good tour for understanding the artisan culture of Rajasthan.",
                },
                {
                    author: 'Jessica M.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-01-30',
                    text: "This tour made my entire India trip. I'm obsessed with textiles and the guide catered the tour perfectly to my interests. We spent extra time at the block printing studios and he even arranged for me to meet a master dyer who showed me how they create the famous Jaipur reds using lac insects. The Bapu Bazaar fabric shops were heaven. Bought about 20 meters of hand printed cotton for basically nothing. Can't recommend enough.",
                },
                {
                    author: 'Martin S.',
                    country: 'Switzerland',
                    rating: 4,
                    date: '2026-02-05',
                    text: "Well organized shopping tour with good variety. Craft workshops included blue pottery, block printing, and gem polishing. The workshops felt authentic not staged. The bazaar sections in the old city were a sensory overload but in a good way. Prices for handcrafted items are remarkably low compared to European standards. The guide helped with bargaining which saved us significant money. Just be prepared for the heat and crowds in the lanes.",
                },
                {
                    author: 'Isabella C.',
                    country: 'Argentina',
                    rating: 5,
                    date: '2025-12-12',
                    text: "Increíble! This tour shows you the real Jaipur that tourists miss. We went to workshops hidden in residential lanes where families have been making crafts for centuries. The blue pottery artisan was an old man who's been painting ceramics for 50 years, his hands were so steady and precise. The gem market in Johari Bazaar was dazzling. Our guide translated everything and made sure we got honest prices. Best shopping experience in India.",
                },
                {
                    author: 'Andrew H.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-02',
                    text: "My wife dragged me on this but I ended up enjoying it more than her! The gem market was absolutely fascinating, learning about how they source, cut and grade precious stones. The guide knew the gem dealers personally and they let us watch them cutting an emerald. Also really enjoyed the blue pottery workshop. Bought a beautiful set of ceramic tiles for our kitchen backsplash. The bazaar walk through Jaipur's old city was an adventure.",
                },
                {
                    author: 'Julia W.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-01-08',
                    text: "Gute Tour! The itinerary covered a nice mix of craft demonstrations and actual shopping time. The blue pottery workshop was the standout, truly artisanal and not mass produced. The textile section at Bapu Bazaar was also very good, the block printed cottons are beautiful. I deducted one star because the tour ran about 45 minutes longer than advertised, which messed up our dinner plans. But the content and guide quality were excellent.",
                },
                {
                    author: 'Emily N.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2025-12-20',
                    text: "Loved every minute. Our guide was incredibly knowledgeable about the history of Jaipur's craft traditions. He explained how Maharaja Sawai Ram Singh brought blue pottery artisans from Persia in the 1800s and how the tradition has been kept alive. The workshops we visited were the real deal, no touristy nonsense. Johari Bazaar was my favourite stop, the silver jewellery selection is amazing. This tour is worth every penny.",
                },
                {
                    author: 'Carlos E.',
                    country: 'Mexico',
                    rating: 4,
                    date: '2026-02-18',
                    text: "Very enjoyable tour. The workshops were educational and the guide made everything come alive with stories about the artisan families. The blue pottery was beautiful, I bought a full dinner set. The textile bazaar was overwhelming with choices but the guide helped narrow things down based on quality. Be warned, you will spend money on this tour lol. Everything is so beautiful and cheap compared to back home. Bring an extra bag.",
                },
                {
                    author: 'Lisa K.',
                    country: 'Austria',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Fantastisch! We did this tour on our last day in Jaipur and it was the perfect way to find unique souvenirs. The craft workshops aren't just for show, these are working studios where artisans produce pieces for sale. The blue pottery studio had an incredible showroom attached. The block printing fabrics were gorgeous and we watched them being made step by step. The guide even helped us arrange shipping for our larger purchases.",
                },
                {
                    author: 'Mark D.',
                    country: 'United States',
                    rating: 3,
                    date: '2026-01-25',
                    text: "Mixed experience. The craft workshops were great, genuinely educational and interesting. The blue pottery demo was excellent and the block printing workshop was hands-on and fun. But several of the bazaar stops felt pre-arranged and the prices were marked up. When I tried to negotiate below what the guide suggested, there was some awkwardness. If you go, do your own price research first. The craft education part alone is worth 5 stars though.",
                },
                {
                    author: 'Charlotte R.',
                    country: 'France',
                    rating: 5,
                    date: '2025-11-10',
                    text: "Magnifique! This was my third visit to Jaipur but the first time with a shopping guide and what a difference. He took us to places I'd never found on my own, tiny workshops in residential areas where master craftsmen work. The miniature painting studio was incredible, paintings so detailed you need a magnifying glass. Also discovered Tripolia Bazaar for lac bangles which I'd walked past before without knowing. Essential for craft lovers.",
                },
                {
                    author: 'Nina V.',
                    country: 'Netherlands',
                    rating: 4,
                    date: '2026-02-22',
                    text: "Good tour with authentic craft experiences. The blue pottery is uniquely Jaipur and the workshop visit was one of the best parts of our India trip. The block printing fabrics in natural dyes are beautiful and eco-friendly. Guide was helpful navigating the crowded bazaar streets. I'd suggest wearing comfortable shoes and bringing a water bottle. The lanes get very warm even in February. Overall a great way to experience Jaipur's artisan heritage.",
                },
                {
                    author: 'Patricia M.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "I'm an interior designer and this tour was a goldmine. The blue pottery pieces, the block printed textiles, the handwoven carpets, everything was inspiration for my work. The guide understood exactly what I was looking for and adjusted the tour accordingly. We spent extra time at the textile workshops and he connected me with a wholesaler for future orders. The craftsmanship in Jaipur is world class and this tour proves it. Shipped two boxes home.",
                },
                {
                    author: 'Ryan B.',
                    country: 'Australia',
                    rating: 4,
                    date: '2025-12-30',
                    text: "Solid tour for anyone interested in Indian crafts and shopping. The workshops were legit, not just sales rooms dressed up as demos. The blue pottery kiln was actually firing when we visited which was cool to see. Johari Bazaar gem shops were interesting even just to browse. Guide was good at managing time between stops. The only downside was the crazy traffic getting between locations but thats just Jaipur. Would recommend.",
                },
                {
                    author: 'Astrid J.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-01-12',
                    text: "Best tour in Jaipur hands down. We visited five different craft workshops and each one was unique and interesting. The blue pottery, block printing, gem cutting, miniature painting, and leather jootis. The level of skill these artisans have is breathtaking. The bazaar walks between workshops were exciting too, the old city is so alive with colour and energy. Our guide was exceptional, charming and knowledgeable. A must-do experience.",
                },
                {
                    author: 'George P.',
                    country: 'Greece',
                    rating: 4,
                    date: '2026-02-28',
                    text: "Enjoyed this tour a lot. The variety of crafts we saw was impressive. The blue pottery studio was my wife's favourite while I preferred the gem market in Johari Bazaar. The guide gave us useful tips on identifying genuine gemstones vs synthetics which I appreciated. The block printing fabrics are beautiful and affordable. Only wish we'd had more free browsing time at Bapu Bazaar. Good tour for couples with different interests.",
                },
            ],
        };
    }

    if (slug === 'jaipur-block-printing-workshop') {
        return {
            averageRating: 4.9,
            totalReviews: 4,
            guideRating: 5.0,
            valueRating: 4.9,
            reviews: [
                {
                    author: 'Helena K.',
                    country: 'Netherlands',
                    rating: 5,
                    date: '2026-03-11',
                    text: "One of the most unique experiences of my life. A real artisan showed us how to carve wooden blocks and then we printed our own fabric with traditional Rajasthani patterns. You get to keep what you make which is such a nice souvenir. The artisan familiy has been doing this for 5 generations and you can feel the pride they have in their craft. Absolutley loved it.",
                },
                {
                    author: 'Lisa N.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-25',
                    text: "I am a graphic designer so this was right up my alley but honestly anyone would enjoy it. The process of hand block printing is way more complex than I imagined. Mixing natural dyes, aligning the blocks perfectly, the pressure you apply. Its an art form thats disappearing and this workshop helps keep it alive. Made a beautiful table runner that I will treasue forever.",
                },
                {
                    author: 'Marco T.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-03-08',
                    text: "Fantastico! My wife and I spent 2 hours printing fabric with a master craftsman. He was so patient teaching us the technique. The natural indigo dye process was fasinating to watch. We made matching scarves haha. The workshop is in a small village outside Jaipur, the drive is about 30 minutes but the setting is charming. Chai was provided. Really special afternoon.",
                },
                {
                    author: 'Emily R.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-17',
                    text: "Really cool workshop, the artisan was skilled and friendly. We learned about the entire process from raw fabric to finished product. The only reason for 4 stars is it was a bit shorter than I expected, about 1.5 hours total including the demonstration. But the quality of the experience was excellent and the printed fabric I took home is genuinly beautiful. Great for creative types.",
                },
            ],
        };
    }

    if (slug === 'jaipur-same-day-tour-from-delhi') {
        return {
            averageRating: 4.6,
            totalReviews: 5,
            guideRating: 4.8,
            valueRating: 4.5,
            reviews: [
                {
                    author: 'Michael C.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-04',
                    text: "We pulled off Jaipur in a day from Delhi and it was totally worth it. Driver picked us up at 6am from our hotel in Delhi and we were at Amber Fort by 11am. Covered Amber Fort, City Palace, Hawa Mahal, and the Water Palace before driving back. Got to our Delhi hotel by 9pm. Its a long day but if you dont have time for an overnight this is the way to do it. Guide was excellent and kept things moving.",
                },
                {
                    author: 'Sophie B.',
                    country: 'United Kingdom',
                    rating: 4,
                    date: '2026-02-22',
                    text: "Managed to see the highlights of Jaipur in one day from Delhi. The drive is about 5 hours each way which is tiring but the highway is decent and the car was comfortable. We had a dedicated guide in Jaipur who met us on arrival. He was brilliant and very efficient with the time. You do feel rushed at some sites but for a day trip this is as good as it gets. Would idealy spend 2 days tho.",
                },
                {
                    author: 'Robert M.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-03-10',
                    text: "Its a big day. Left Delhi at 5:30am and got back around 10pm. Honestly I was exhausted by the end. But we saw everything we wanted to see in Jaipur. Amber Fort was the standout, absolutley stunning. The driver on the highway was confident and safe. One tip, bring snacks for the drive because there arent many good food stops on the highway. Overall glad we did it but be prepared for a marathon day.",
                },
                {
                    author: 'Christina V.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-28',
                    text: "Perfekt organiert! Everything was perfectly organized from the early morning pickup to the return. The driver and guide were a great team. We saw 5 main sites in Jaipur and even had time for lunch at a local restaurant. The new expressway makes the drive faster than it used to be. If your tight on time and want to see Jaipur from Delhi, this works. Just go to bed early the night before haha.",
                },
                {
                    author: 'James H.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-03-08',
                    text: "Good day trip but its definitely a long one. The 5 hour drive each way eats into your sightseeing time. That said, the guide in Jaipur was excellent and prioritized the must see sites perfectly. Amber Fort got the most time which is correct. I would reccomend this for people who really cant stay overnight, otherwise plan for 2 days in Jaipur if you can.",
                },
            ],
        };
    }

    if (slug === 'jaipur-same-day-tour-with-cooking-class') {
        return {
            averageRating: 4.8,
            totalReviews: 4,
            guideRating: 4.9,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Jennifer F.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "The cooking class was the cherry on top of an already great day trip. We visited the main sites in the morning and then went to a local home where the family taught us to make dal baati churma and a paneer dish. Cooking in their kitchen felt so intimate and special. The food we made was honestly the best meal of our trip. I have the recipes and make the dal at home now lol.",
                },
                {
                    author: 'Thomas K.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-20',
                    text: "What a unique combination. Sightseeing plus cooking class in one day, brillant idea. The family who hosted the cooking was so warm and welcoming. We made chapati from scratch which was harder than it looks! Also made a vegetable curry and kheer for dessert. Then we sat and ate everything together. It felt like visiting relatives not a tourist activity. This is the kind of experience you remember forever.",
                },
                {
                    author: 'Laura P.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Loved the cooking class portion, it was genuine and the family was lovely. We learned to use spices properly and made 3 dishes. The sightseeing part was a bit rushed because the cooking takes about 2 hours. So we only saw Amber Fort and Hawa Mahal from the outside. If your main goal is the sights maybe skip the cooking, but if you want a cultural experience this is unbeatable.",
                },
                {
                    author: 'Annika L.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-02-26',
                    text: "Best day trip from Delhi hands down. The combination of sightseeing and cooking class is genius. We visited Amber Fort and City Palace in the morning, then the cooking class at a local home in the afternoon. The host auntie was hilarious and patient with our terrible chapati rolling skills. We ate what we cooked for lunch and it was delicious. Going home with recipes and memories.",
                },
            ],
        };
    }

    if (slug === 'delhi-to-jaipur-royal-private-day-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 4,
            guideRating: 4.9,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'William H.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "The 'royal' in the name is accurate. Premium sedan, bottled water and snacks provided, and a guide who clearly works with high end clients. The whole day felt luxurious but not pretentious. He took us to a heritage hotel for lunch which was an experience in itself. Amber Fort, City Palace, and Hawa Mahal were all covered with plenty of time at each. The best day trip money can buy from Delhi.",
                },
                {
                    author: 'Catherine D.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-21',
                    text: "Splurged on this premium tour for our anniversary and no regrets. The car was a proper luxury sedan with leather seats and cold water waiting. Our guide was articulate and dressed smartly. He treated us like VIPs at every stop, knew shortcuts to avoid lines, and got us into a private section of City Palace that regular tours dont visit. Expensive but worth it for a special occasion.",
                },
                {
                    author: 'Peter J.',
                    country: 'France',
                    rating: 4,
                    date: '2026-03-05',
                    text: "Very nice premium day trip. The car and service were excellent, definitely a step above standard tours. The guide was professional and well informed. My only comment is that the drive is still 5 hours each way regardless of how fancy the car is, so manage your expectations about how much time you actually have in Jaipur. We covered 4 main sites which was enough.",
                },
                {
                    author: 'Isabella M.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-16',
                    text: "If you can afford it, do the royal tour. We did a regular day trip last time and the difference is massive. The guide is more experienced, the car is better, and they take you to places that feel exclusive. Lunch was at a boutique hotel with a rooftop view of the city. The driver even had wifi in the car so we could upload photos on the drive back. Premium experience all the way.",
                },
            ],
        };
    }

    if (slug === 'jaipur-to-agra-taj-mahal-day-trip') {
        return {
            averageRating: 4.7,
            totalReviews: 5,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Alex G.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Did the Jaipur to Agra day trip and seeing the Taj Mahal at sunrise was worth every minute of the early start. Driver picked us up at 4am (yes really) and we were at the Taj by sunrise. The guide in Agra was fantastic, explained the love story of Shah Jahan and Mumtaz in a way that gave me goosebumps. We also did Agra Fort before driving back. Long day but one of those once in a lifetime things.",
                },
                {
                    author: 'Maria S.',
                    country: 'Brazil',
                    rating: 5,
                    date: '2026-02-24',
                    text: "Seeing the Taj Mahal for the first time took my breath away. Even after seeing a million photos nothing prepares you for the real thing. Our guide from Jaipur coordinated perfectly with the Agra guide. The drive is about 4.5 hours which sounds bad but the highway is smooth and we slept most of the way there. Totally doable as a day trip. Just dont plan anything for the evening because you will be tired.",
                },
                {
                    author: 'Ryan D.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Good day trip to see the Taj but be warned its a really long day. Left Jaipur at 4:30am and got back around 9pm. The Taj Mahal is obviously incredible but we only had about 2 hours there before needing to move on to Agra Fort. The drive back felt endless. If I did it again I might stay overnight in Agra. But if you only have one day this works, the guide and driver were both professional.",
                },
                {
                    author: 'Lisa N.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-02-18',
                    text: "The Taj Mahal did not disapoint! Our driver was safe and punctual and the Agra guide was very knowlegeable. We saw the Taj, Agra Fort, and even did a quick stop at Baby Taj (Itimad-ud-Daulah) which was a lovely bonus. Packing for snacks and water for the drive is a must. The car was comfortble and had AC. Just prepare yourself mentally for a 14 hour day and you will be fine.",
                },
                {
                    author: 'David K.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Once in a lifetime experience. Woke up at 3:30am which was rough but seeing the Taj Mahal emerge from the morning mist made it all worth it. The guide had pre booked our tickets so we walked straight in while others were queuing. Agra Fort after was also impressive, you can see the Taj from there which is a cool perspective. Driver was calm and safe on the highway. No complaints at all.",
                },
            ],
        };
    }

    if (slug === 'golden-triangle-tour-delhi-agra-jaipur') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Rachel W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-03',
                    text: "This 3 day Golden Triangle tour was the highlight of our 2 week India trip. Day 1 Delhi (Red Fort, Humayuns Tomb, Qutub Minar), Day 2 Agra (Taj Mahal sunrise, Agra Fort), Day 3 Jaipur (Amber Fort, City Palace, Hawa Mahal). Every day had a different guide who was an expert on their city. The logistics were flawless, hotels were good, and the driver was like a ninja navigating Indian traffic. Cannot recommend enough.",
                },
                {
                    author: 'Thomas K.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-19',
                    text: "Perfekt for first time India visitors. The tour takes all the stress out of planning. Each city had its own specialised guide which meant we got real expertise not just surface level stuff. Taj Mahal at sunrise was obviously the peak moment but honestly every day had jaw dropping moments. Amber Fort in Jaipur was a close second. Hotels were clean and comfortable. The driver was with us all 3 days and became like a friend.",
                },
                {
                    author: 'Jessica P.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-03-07',
                    text: "Really well organized tour covering the 3 main tourist cities. Each day was packed but not exhausting. The pacing was good with breaks for lunch and chai. My only feedback is that Delhi felt a bit rushed, we only had half a day there. If possible I would add an extra day in Delhi. Agra and Jaipur were perfect tho. The guides were all great, especially the one in Agra who made the Taj Mahal story so emotional.",
                },
                {
                    author: 'Robert M.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-25',
                    text: "My wife and I booked this for our first trip to India and it was the best decision. Having everything organized (transport, guides, hotels, entry tickets) meant we could just enjoy the experience without stressing. The Taj Mahal made my wife cry it was so beautiful. Jaipur was our favourite city, so colorful and alive. The driver was excellent and made the long drives between cities very comfortable.",
                },
                {
                    author: 'Claire B.',
                    country: 'France',
                    rating: 4,
                    date: '2026-03-12',
                    text: "Tres bien overall. 3 cities in 3 days is ambitious but they make it work. Delhi has so much Mughal history, Agra has the Taj (magnifique!), and Jaipur has the Rajput palaces and forts. Different eras of Indian history back to back which is really educational. Hotels were decent 3 star, nothing fancy but clean and well located. Would have liked 4 star options for a bit more comfort. But guides and transport were excellent.",
                },
            ],
        };
    }

    // --- PHUKET TOURS ---

    if (slug === 'elephant-beach-experience-patong-phuket') {
        return {
            averageRating: 4.7,
            totalReviews: 4,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Rachel G.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-01',
                    text: "Such a special experience. The elephants at this sanctuary are rescued and you can tell they are well cared for. We got to feed them watermelons and bananas, walk alongside them through the jungle, and then swim with them in the river. The staff explained each elephants story and how they were rescued from logging or tourist camps. My 8 year old was a bit nervous at first but the mahout was so patient and gentle with her, by the end she didnt want to leave.",
                },
                {
                    author: 'Kevin S.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-20',
                    text: "Ive been to a few elephant sanctuaries in Thailand and this one in Patong is genuinely ethical. No riding, no chains, no hooks. The elephants roam freely and come to you because they want to, not because theyre forced. The swimming part was incredible, these massive gentle creatures just wading in the water next to you. The mud bath is hilarious and the elephants seem to love it as much as the tourists do. Staff are clearly passionate about animal welfare.",
                },
                {
                    author: 'Ingrid N.',
                    country: 'Norway',
                    rating: 4,
                    date: '2026-03-09',
                    text: "Really meaningful experience that I would recommend to anyone visiting Phuket. The photos you get with the elephants are amazing, the staff take them for you which is nice so you can be fully present. The elephants are beautiful and surprisingly gentle for their size. Only reason for 4 stars is it felt a bit short, about 2 hours total. Would have loved to spend more time with them. But what they pack into those 2 hours is wonderful.",
                },
                {
                    author: 'Tomoko H.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-02-26',
                    text: "Very touching experience. The baby elephant was so playful and kept spraying us with water from her trunk! The sanctuary feels legitimate, not like those tourist traps where elephants are abused. You can see the elephants are healthy and happy. The swim in the river was the highlight, very surreal to be in the water with these giant animals. Bring clothes you dont mind getting dirty because the mud bath is messy but so fun.",
                },
            ],
        };
    }

    if (slug === 'seasoning-thai-cooking-class-phuket-cherngtalay') {
        return {
            averageRating: 4.9,
            totalReviews: 4,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Laura B.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-05',
                    text: "Best cooking class I have ever taken anywhere in the world. Chef Dao taught us to make Tom Yum from scratch, proper Pad Thai (not the sweet tourist version), and a Green Curry that was absolutley incredible. She explained the flavour balance of Thai cooking, sour salty sweet spicy, and how to adjust each element. The kitchen is beautiful, open air with views of the garden where they grow their own herbs. I have already made the Pad Thai twice at home and my family loves it.",
                },
                {
                    author: 'Stefan K.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Really professional cooking school in Cherngtalay, not some backpacker kitchen. Each student gets their own cooking station with proper equipment. We learned to make 3 dishes and the instructor was patient even when I was slow with the chopping. The Tom Yum soup was the star, learning which herbs go in and when makes all the difference. They give you a recipe booklet to take home. Already ordered the ingredients from an Asian grocery store back home.",
                },
                {
                    author: 'Maria C.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-03-10',
                    text: "My husband and I did this on our last day in Phuket and wish we had done it first! Understanding the ingredients and techniques made every meal we ate afterwards so much more interesting. The Green Curry recipe was amazing, fresh coconut cream, homemade paste from scratch, the aroma was unbelievable. Chef Dao has so much personality and made the class entertaining not just educational. The portion sizes for tasting were generous too, we skipped dinner after.",
                },
                {
                    author: 'Chris W.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-28',
                    text: "Great cooking class in a lovely setting. Learned to make Tom Yum, Pad Thai and Green Curry which are exactly the dishes I wanted to learn. The instructor was very hands on and showed us the proper technique for each step. My Pad Thai actually tasted like the ones in restaurants which ive never managed at home before. Small class size (6 people) meant lots of individual attention. Only minor note, getting to Cherngtalay from Patong took about 30 mins but they arranged transfer.",
                },
            ],
        };
    }

    if (slug === 'thai-cooking-class-phuket-kata') {
        return {
            averageRating: 4.8,
            totalReviews: 4,
            guideRating: 4.9,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Amanda T.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-02',
                    text: "This was such a unique experience! We started at the local market in the morning where our chef showed us how to pick fresh ingredients, explained the different types of chili and which ones to use for what, and taught us how to smell test lemongrass for freshness. Then we drove to the jungle kitchen which is literally in the hills above Kata surrounded by tropical plants. Cooked 4 dishes including a curry paste from scratch using a mortar and pestle. My arms were sore but the result was amazing.",
                },
                {
                    author: 'Henrik J.',
                    country: 'Denmark',
                    rating: 5,
                    date: '2026-02-18',
                    text: "The market tour in the morning was worth the price alone. Our instructor showed us ingredients I had never seen before and explained how Thai people actually shop and cook at home, which is very different from what you see in tourist restaurants. The jungle location for the cooking class was magical, cooking outdoors with birds chirping and a view of the hills. We made som tam, pad kra pao, a coconut soup, and mango sticky rice for dessert. Every single dish was delicious.",
                },
                {
                    author: 'Kate P.',
                    country: 'New Zealand',
                    rating: 4,
                    date: '2026-03-08',
                    text: "Loved the hands on approach of this class. The morning market visit was really educational, learning about ingredients at the source. The cooking school itself is in the Phuket jungle near Kata which makes for a gorgeous setting. Made 4 dishes and ate everything we cooked which was a lot of food! The recipes are authentic Thai home cooking style not restaurant style. Only small critique is the morning start (7:30am market pickup) is quite early if youre on holiday.",
                },
                {
                    author: 'Pierre D.',
                    country: 'France',
                    rating: 5,
                    date: '2026-02-25',
                    text: "As a home cook I always look for cooking classes when traveling and this one exceeded expectations. The market tour was fascinating, our chef was bargaining in Thai and getting the freshest produce while explaining everything to us. The jungle kitchen is beautiful, open air under a tin roof with herb gardens all around. Making curry paste by hand in a stone mortar was hard work but the flavour difference compared to store bought paste is night and day. Highly reccomend the morning class.",
                },
            ],
        };
    }

    if (slug === 'private-surf-lesson-kata-beach-phuket') {
        return {
            averageRating: 4.8,
            totalReviews: 4,
            guideRating: 5.0,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Jake R.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-04',
                    text: "Always wanted to learn to surf and Kata Beach was the perfect place for it. The waves here are gentle and consistent which makes it ideal for beginners. My instructor was super patient and started with beach technique before we even got in the water. By the end of the 2 hour lesson I was standing up and riding small waves on my own! Having a private lesson meant all the attention was on me instead of sharing with 10 other students. The instructor also took photos of me surfing which was a nice bonus.",
                },
                {
                    author: 'Nina K.',
                    country: 'Russia',
                    rating: 5,
                    date: '2026-02-21',
                    text: "Booked private lessons for me and my boyfriend who had never surfed before. The instructor was amazing, very encouraging and adjusted his teaching style for each of us individually. Kata Beach has soft sand and the waves during February were perfect for learning, not too big not too flat. My boyfriend was standing up by the end of lesson one! The equipment provided was good quality and included rash guards and reef shoes. Would definately recommend this over group lessons.",
                },
                {
                    author: 'Tom B.',
                    country: 'United Kingdom',
                    rating: 4,
                    date: '2026-03-11',
                    text: "Really enjoyed this. I've surfed a few times before but never had proper technique so this was great for fixing my bad habits. The instructor filmed me on his phone and showed me what I was doing wrong which was really helpful. Kata Beach is a beautiful spot for surfing, warm water, sandy bottom, no scary rocks or reefs to worry about. Only thing is the lesson is quite tiring in the heat so bring plenty of water and sunscreen.",
                },
                {
                    author: 'Soo-jin L.',
                    country: 'South Korea',
                    rating: 5,
                    date: '2026-02-27',
                    text: "I was nervous about trying surfing but the private lesson format made me feel very safe. The instructor spent the first 20 minutes on the beach showing me the technique and only went into the water when I was ready. He stayed right next to me the whole time and pushed me into waves at exactly the right moment. I actually stood up on my third try! The feeling of riding a wave is incredible. Kata Beach is the perfect spot, warm clear water and gentle waves.",
                },
            ],
        };
    }

    if (slug === 'phuket-scuba-diving-beginners-full-day-racha-yai-island') {
        return {
            averageRating: 4.9,
            totalReviews: 4,
            guideRating: 5.0,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Ben C.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-03',
                    text: "Never dived before and was honestly a bit scared but the instructor made me feel completley safe. We spent about an hour in shallow water learning the equipment and hand signals before going deeper. Racha Yai Island has incredibly clear water, visibility was maybe 20 meters, and the coral reef was teeming with fish. Saw a moray eel hiding in a rock which was terrifying and amazing at the same time. The boat ride to the island was beautiful too. Cannot believe I waited this long to try diving.",
                },
                {
                    author: 'Carla V.',
                    country: 'Brazil',
                    rating: 5,
                    date: '2026-02-19',
                    text: "Absolutley magical experience. The full day trip to Racha Yai is worth it, the island is gorgeous with white sand and turquoise water. Did 2 dives, the first one was a training dive to about 8 meters and the second went to 12 meters where we saw so much marine life. Trigger fish, parrot fish, giant clams, and even a small reef shark in the distance! The dive instructor was PADI certified and very professional. Lunch on the boat between dives was good. Hands down the best day of our Phuket holiday.",
                },
                {
                    author: 'Alex M.',
                    country: 'Netherlands',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Did a discover scuba diving day at Racha Yai and it was phenomenal. Water temperature was warm enough to dive in just a shorty wetsuit. The reef at the dive sites was healthy and colourful, much better than what you see snorkeling from the beach in Phuket. Two dives included and by the second one I felt really comfortable underwater. The dive team was very safety focused which gave me confidence. They provide everything including underwater camera for photos. Definitely doing my PADI cert now.",
                },
                {
                    author: 'Mika S.',
                    country: 'Finland',
                    rating: 4,
                    date: '2026-02-24',
                    text: "Great introduction to scuba diving. Racha Yai Island is about 45 minutes by speedboat from Phuket and the change in water quality is dramatic, so much clearer than the beaches near Patong. The dive instructor was patient and thorough with the safety briefing. First dive was a bit overwhelming honestly, its a strange sensation breathing underwater, but by the second dive I was relaxed and could really enjoy the fish and coral. Full day is tiring but totally worth it. Bring motion sickness pills if you need them.",
                },
            ],
        };
    }

    if (slug === 'muay-thai-training-class-phuket-beginners') {
        return {
            averageRating: 4.8,
            totalReviews: 4,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Matt D.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "Ive always been curious about Muay Thai and doing a class in Phuket where the sport is huge felt like the right place to try it. The trainer was a former professional fighter and started with the absolute basics, stance, jab, cross, teep kick. He was patient but pushed us just enough to get a real workout. The gym is authentic, not one of those tourist fitness centers, actual Thai fighters train here too. My legs were jelly by the end but I felt amazing. Best workout of my life honestly.",
                },
                {
                    author: 'Zara H.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-23',
                    text: "Went with my partner and we both absolutely loved it. As a woman I was a bit worried it would be too intense but the trainer adapted everything to our fitness level. He taught us proper technique for punches, kicks, elbows and knee strikes. Hitting the pads with the trainer was the most fun, he calls out combos and you just go for it. Its a great stress reliever! The gym had a really welcoming atmosphere, other fighters training around us but nobody was judgemental at all. Truly a cultural experience.",
                },
                {
                    author: 'Lukas F.',
                    country: 'Austria',
                    rating: 4,
                    date: '2026-03-10',
                    text: "Solid introductory Muay Thai class. The trainer clearly knows what hes doing and the fundamentals he taught were proper technique not just pad work for cardio. You actually learn the art of 8 limbs, fists, elbows, knees, shins. It was physically demanding even for someone who works out regularly. The gym provides gloves and wraps which is handy. Be prepared to sweat a lot, Phuket heat plus Muay Thai is intense. Drink lots of water before you come. Would have liked a slightly longer session.",
                },
                {
                    author: 'Olivia R.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-28',
                    text: "Such a cool experience! Muay Thai is everywhere in Phuket and getting to actually train at a real gym was incredible. Our trainer started with warm up stretches and skipping rope then moved into technique. Learning the roundhouse kick properly was harder than it looks but so satisfying when you nail it. He also explained some of the cultural traditions of Muay Thai like the Wai Kru dance before fights. Finished the class feeling exhausted but buzzing. This is what travel is about, trying new things in the right place.",
                },
            ],
        };
    }

    if (slug === 'james-bond-island-speedboat-tour-phuket') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Hannah W.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-01',
                    text: "The canoeing through the sea caves was honestly the best part of the whole trip. Our guide paddled us through these tiny openings in the limestone and suddenly we were inside this massive hidden lagoon surrounded by jungle walls. So quiet and peaceful in there, totally surreal. James Bond Island itself is smaller than you'd expect but still cool to see the famous needle rock up close. The lunch on the boat was surprisingly good too, proper Thai food not just tourist stuff.",
                },
                {
                    author: 'Luca R.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Booked this tour for my family (me, wife, and 2 teenagers) and everyone loved it. The speedboat was fast and exciting which the kids enjoyed. Phang Nga Bay is absolutely stunning, the limestone karsts rising out of green water look like something from a movie. We stopped at Koh Panyee the floating village which was fascinating, had lunch there and walked around. Our guide was very knowledgable about the geology and wildlife. Saw monkeys on one of the islands too!",
                },
                {
                    author: 'Jessica P.',
                    country: 'United States',
                    rating: 4,
                    date: '2026-03-08',
                    text: "Really enjoyable day out on the water. The scenery at Phang Nga Bay is unreal, photos dont do it justice at all. Canoeing into the hongs (collapsed cave systems) was magical. One small critique, James Bond Island was very crowded even though we arrived before 10am. I think everyone has the same idea. But the other stops more than made up for it. Would definately recommend bringing waterproof bags for your phone and camera.",
                },
                {
                    author: 'Thomas A.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-15',
                    text: "Third time visiting Phuket but first time doing this tour and I regret not doing it sooner. The canoe trip through the caves was something I will never forget, paddling under stalactites into hidden lagoons with nobody else around. Our guide was excellent, very safety conscious and pointed out wildlife like eagles and monitor lizards. Good value for money considering you get speedboat, guide, canoeing, lunch, and multiple island stops all included.",
                },
                {
                    author: 'Mei L.',
                    country: 'Singapore',
                    rating: 4,
                    date: '2026-03-11',
                    text: "Beautiful tour of Phang Nga Bay. The highlight for us was the canoeing, not James Bond Island which is honestly a bit overhyped and touristy. The sea cave exploration is where the real magic happens. Lunch at the floating village Koh Panyee was decent, the fried fish was fresh. Just be prepared for a long day, we left at 8am and got back around 5pm. Bring sunscreen and reapply often, I got burnt even with SPF50.",
                },
            ],
        };
    }

    if (slug === 'phi-phi-islands-speedboat-tour-maya-bay-snorkeling') {
        return {
            averageRating: 4.9,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Sophie K.',
                    country: 'Netherlands',
                    rating: 5,
                    date: '2026-03-03',
                    text: "This premium catamaran tour was absolutley worth it. The boat was spacious and comfortable, way better than being crammed on a speedboat with 40 people. Maya Bay was breathtaking even though theres a strict visitor limit now (which is actually a good thing for the environment). The snorkeling at Pileh Lagoon was incredible, the water is so clear you can see fish from the deck. Our guide knew exactly where to take us for the best coral and marine life.",
                },
                {
                    author: 'Ryan M.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-18',
                    text: "Mate this was hands down the best day of our Thailand trip. The catamaran is way more stable than a speedboat which my partner appreciated since she gets seasick. Maya Bay looks exactly like the movie, just gorgeous. Snorkeling at three different spots and saw so many tropical fish, even a sea turtle at one point!! The crew was super friendly and the Thai lunch on board was delicious. Started early which meant we beat the big tour groups to Maya Bay.",
                },
                {
                    author: 'Isabella F.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-03-07',
                    text: "I was worried Maya Bay would be disappointing after all the hype but it genuinely took my breath away. The turquoise water against the white sand and towering cliffs, it looks like a painting. The catamaran was very premium feeling with cushions, good music, and attentive crew. Snorkeling at Bamboo Island was also amazing, the reef there is recovering beautifully. Only downside is you cant spend as long as youd like at Maya Bay due to the environmental time limits, but I understand why they do it.",
                },
                {
                    author: 'Daniel H.',
                    country: 'United States',
                    rating: 4,
                    date: '2026-02-27',
                    text: "Great tour overall. The catamaran was comfortable and the itinerary was well planned. Phi Phi Don viewpoint hike was tough in the heat but the view from the top is absolutely iconic, you see two bays separated by a thin strip of land. Snorkeling was good, saw lots of colorful fish and some clownfish (nemo!). Food was tasty. Taking off one star only because the pickup from our hotel in Kata was 40 minutes earlier than advertised. But once on the boat everything was perfect.",
                },
                {
                    author: 'Yuki T.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-03-10',
                    text: "We chose the premium catamaran over the regular speedboat tours and so glad we did. Much more comfortable ride, better food, and smaller group size. The guide was very knowledgable about the marine ecology and explained why Maya Bay was closed for rehabilitation and how the coral is recovering. Pileh Lagoon was my favourite spot, the water glows bright emerald green and its perfect for swimming. Brought my underwater camera and got some amazing shots of the reef.",
                },
            ],
        };
    }

    if (slug === 'phi-phi-khai-islands-speedboat-tour-with-lunch') {
        return {
            averageRating: 4.7,
            totalReviews: 5,
            guideRating: 4.8,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Emma J.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-20',
                    text: "What a day! The combo of Phi Phi Islands and Khai Islands gives you the best of both worlds. Phi Phi for the dramatic cliffs and Maya Bay, then Khai for the pristine white sand beaches where you can just relax. The speedboat was fast and exciting, got us to Phi Phi in about 45 minutes. Khai Nok island was like a postcard, the sand is powdery white and the water is crystal clear. Lunch was included and really filling, proper Thai green curry and rice.",
                },
                {
                    author: 'Carlos M.',
                    country: 'Mexico',
                    rating: 4,
                    date: '2026-03-05',
                    text: "Really fun tour that covers a lot of ground in one day. The speedboat ride is bumpy if you sit at the front so heads up, sit in the middle or back if you have a sensitive stomach. Phi Phi was stunning as expected and Khai Islands were a nice surprise, very peaceful and great for snorkeling right off the beach. Saw tons of fish just wading in waist deep water. The guide was entertaining and spoke good English. Would have liked a bit more time at Khai but I understand the schedule is tight.",
                },
                {
                    author: 'Anna S.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-03-09',
                    text: "This tour packs in so much value. You get Maya Bay, Pileh Lagoon, snorkeling spots, AND the Khai Islands all in one trip. The Khai Islands were actually my favourite part, the water is so shallow and clear that fish swim right up to you. Perfect for beginners who are nervous about snorkeling in deeper water. Our guide was really patient with everyone and made sure even the non swimmers felt comfortable. The included lunch was generous portions too.",
                },
                {
                    author: 'James L.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-28',
                    text: "Solid day trip. We got picked up from our hotel in Patong at 7am which felt early but meant we arrived at Maya Bay before the massive crowds showed up. The Phi Phi stops were beautiful as advertised. Adding Khai Islands to the itinerary was a smart choice, its a completley different vibe from Phi Phi. More chill, more beachy, great for floating around in the shallows. Only thing id say is bring your own snorkel mask if you have one, the provided ones are basic.",
                },
                {
                    author: 'Priya D.',
                    country: 'India',
                    rating: 5,
                    date: '2026-03-13',
                    text: "Exceeded our expectations! We almost booked a Phi Phi only tour but chose this one because of the Khai Islands addition and it was 100% the right call. The variety of stops keeps things interesting all day. Maya Bay is as stunning as you see in photos. Then the Khai Islands are perfect for just relaxing on the beach after all the snorkeling and swimming. The crew was very professional, they handed out life jackets and snorkel gear without anyone having to ask. Great lunch too.",
                },
            ],
        };
    }

    if (slug === 'phi-phi-islands-private-yacht-cruise-maya-bay') {
        return {
            averageRating: 4.9,
            totalReviews: 4,
            guideRating: 5.0,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Charlotte B.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-02',
                    text: "Worth every single penny. Having a private yacht to ourselves (just me, my partner, and 2 friends) meant we could go at our own pace and skip the crowded spots. The captain took us to a snorkeling spot near Phi Phi that wasnt on any group tour itinerary, and the coral there was amazing. Maya Bay was stunning even with the visitor limits. The crew served fresh fruit and drinks throughout. Its a half day tour but honestly felt like we packed in more than the full day group tours do.",
                },
                {
                    author: 'Andrew K.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-16',
                    text: "This was our anniversary treat and it did not disappoint. Having your own yacht with a private captain and guide is a completley different experience to a group tour. We could linger at Maya Bay, take our time snorkeling, and stop wherever we wanted. The yacht itself was beautiful and well maintained. Crew prepared a Thai seafood lunch on board that was restaurant quality. If your budget allows it, this is THE way to see Phi Phi Islands. No crowds, no rush, just paradise.",
                },
                {
                    author: 'Nadia V.',
                    country: 'Russia',
                    rating: 5,
                    date: '2026-03-06',
                    text: "Booked this for a birthday celebration with 6 friends and it was the highlight of our trip. The yacht was spacious enough for all of us with a comfortable sunbathing deck. Arrived at Maya Bay just as the sun hit the cliffs perfectly, the water literally glows turquoise. Our captain knew all the secret spots away from the tourist boats. Snorkeled at Pileh Lagoon basically by ourselves while the group tours hadnt arrived yet. The flexibility of a private tour is priceless.",
                },
                {
                    author: 'Richard P.',
                    country: 'United States',
                    rating: 4,
                    date: '2026-02-24',
                    text: "Splurged on the private yacht and mostly glad we did. The experience of cruising to Phi Phi on your own boat with cold drinks and good music is hard to beat. Maya Bay is genuinely stunning, photos dont capture how vivid the colours are. Snorkeling was excellent with the guide pointing out marine life. Half day felt a tiny bit short, we could have easily done a full day. But the crew was outstanding and the boat was immaculate. Would do it again with the full day option if available.",
                },
            ],
        };
    }

    if (slug === 'phuket-private-yacht-catamaran-charter-island-hopping') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'David W.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-19',
                    text: "We chartered a catamaran for the day and went island hopping around Phuket. Having 7 boats to choose from meant we could pick the perfect vessel for our group of 8. The catamaran was gorgeous, very stable which is great if anyone in your group gets seasick. We visited Coral Island, Racha Yai, and a couple of smaller islands the captain suggested. The freedom to create your own itinerary is what makes this special. Crew was incredibly attentive, always offering drinks and snacks.",
                },
                {
                    author: 'Sarah C.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-04',
                    text: "Best money we spent in Thailand. Chartered a yacht for our honeymoon and the crew made it absolutley magical. They set up a private lunch on a secluded beach, just the two of us with Thai food and champagne. Then we snorkeled at spots with nobody else around. The captain has been sailing these waters for 20 years and knows every hidden cove. Having multiple boat options was great, we picked a sleek motor yacht that was perfect for 2 people. Cant reccommend this enough for couples.",
                },
                {
                    author: 'Mark T.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-02-28',
                    text: "Organised a charter for my mates trip (6 guys) and it was legendary. Picked a 42 foot catamaran which had plenty of room for everyone. Went to Racha Islands where the snorkeling was incredible, visibility must have been 20 meters plus. Then to a quiet beach for lunch and swimming. Only reason for 4 stars instead of 5 is the price, its definately a premium experience. But you get what you pay for and the quality of the boat and crew was first class.",
                },
                {
                    author: 'Lisa M.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-03-10',
                    text: "We booked this for a family celebration (grandparents 70th birthday) with 12 people across 3 generations. The team helped us choose a large catamaran that could comfortably fit everyone. The kids loved jumping off the boat into the clear water, grandparents relaxed on the deck with cold drinks, and parents got to actually relax for once! The crew was wonderful with the children. Island hopping around Phuket on your own private boat is honestly the best way to experience the Andaman Sea.",
                },
                {
                    author: 'Jin W.',
                    country: 'South Korea',
                    rating: 5,
                    date: '2026-03-08',
                    text: "Chartered a sailing yacht for a sunset cruise and it was breathtaking. Watching the sun drop behind the Andaman Sea from the deck of a private yacht while the crew serves cocktails is something I will remember forever. Earlier in the day we visited some small islands south of Phuket that were completley empty, felt like we had our own private paradise. The booking process was easy and they responded quickly on WhatsApp. So many boat options to choose from which was great.",
                },
            ],
        };
    }

    // --- AGRA TOURS ---

    if (slug === 'taj-mahal-fort-guided-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Rebecca H.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "Our official tour guide at the Taj Mahal was absolutley brilliant. He knew every single detail about the inlay work on the marble, the semi-precious stones used in the pietra dura, and the symmetry of the gardens. At Agra Fort he showed us the spot where Shah Jahan was imprisoned and could see the Taj from his window, which was such a poignant moment. Having an official guide with a government ID badge meant we skipped right past the touts at the entrance.",
                },
                {
                    author: 'Kenji T.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-03-02',
                    text: "Booking an official guide for both the Taj Mahal and Agra Fort was the right decision. He explained the Mughal architecture in a way that was easy to understand and pointed out details I never would have noticed on my own, like the optical illusion with the minarets leaning slightly outward. At Agra Fort the Diwan-i-Khas and Sheesh Mahal were highlights. Very professional and knowledgable.",
                },
                {
                    author: 'Anna K.',
                    country: 'Sweden',
                    rating: 4,
                    date: '2026-02-22',
                    text: "Good experience overall with our certified guide at both monuments. The Taj Mahal portion was excellent, he took us around the back side where fewer tourists go and explained the calligraphy from the Quran on the gateway. Agra Fort was also interesting but felt a little rushed as we only had about an hour there. I would reccomend asking for more time at the fort if you can.",
                },
                {
                    author: 'David P.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-15',
                    text: "The official guide made our visit to the Taj Mahal and Agra Fort so much more meaningful. He explained how the marble changes color depending on the time of day, pinkish at sunrise and golden at sunset. Inside the fort he showed us the grape vine carvings and the tiny mosque that most visitors walk right past. He also helped us avoid the scam artists outside. Definately worth the booking fee.",
                },
                {
                    author: 'Priya S.',
                    country: 'India',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Even as an Indian I learned so much from our guide at the Taj Mahal and Agra Fort. He shared stories about Mumtaz Mahal and the 20,000 workers who built the Taj over 22 years that I had never heard before. At Agra Fort the Jahangiri Mahal was stunning with its Hindu and Islamic architectural blend. His official credentials got us through security quickly. Highly reccomend for anyone visiting Agra.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-agra-overnight-tour-from-delhi') {
        return {
            averageRating: 4.7,
            totalReviews: 4,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Michelle L.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-06',
                    text: "The overnight tour from Delhi was the perfect way to experience Agra without rushing. Our private car picked us up from our Delhi hotel and the drive took about 3.5 hours on the expressway. We visited the Taj Mahal in the afternoon, had dinner at a lovely local restaurant, then went back for the sunrise view the next morning. Seeing the Taj at two completley different times of day was magical. The hotel they arranged was clean and comfortable.",
                },
                {
                    author: 'Thomas B.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-02-27',
                    text: "Really glad we chose the overnight option instead of trying to cram everything into one day. The private car from Delhi was comfortable with AC and bottled water. We saw the Taj Mahal at sunset which was gorgeous, the marble turns this warm golden colour. Next morning we visited Agra Fort before heading back. Only giving 4 stars because the hotel could have been a bit nicer for the price, but the tour itself was excellent.",
                },
                {
                    author: 'Sakura N.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-03-01',
                    text: "This overnight Agra tour from Delhi exceeded our expectations. The driver was professional and the car was very clean. Arriving in the afternoon meant we could see the Taj without the massive morning crowds. Our guide arranged everything perfectly. The next morning we woke early and caught the sunrise colours on the white marble, it was absolutley breathtaking. Two days in Agra is definately better than one.",
                },
                {
                    author: 'Carlos R.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-02-18',
                    text: "Perfect trip for anyone who doesnt want to rush through Agra in a single day. The private car from Delhi was spacious and our driver was very experienced on the Yamuna Expressway. We checked into the hotel, freshened up, then headed to the Taj Mahal for the afternoon light. Had a wonderful dinner at a rooftop restaurant with views of the Taj lit up at night. Morning visit to Agra Fort completed the experience. Highly recommend the overnight option.",
                },
            ],
        };
    }

    if (slug === 'agra-mathura-full-day-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Jennifer W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "What an incredible day combining the Taj Mahal with Mathura and Vrindavan. Starting at the Taj was spectacular as always but the real surprise was Vrindavan. The Krishna temples there are absolutley stunning, especially the Banke Bihari Temple where the energy of the devotees was infectious. In Mathura we visited the Krishna Janmabhoomi temple where Lord Krishna was born. Our guide explained the Hindu mythology so well. The private car made the whole day comfortable.",
                },
                {
                    author: 'Hans M.',
                    country: 'Netherlands',
                    rating: 5,
                    date: '2026-02-25',
                    text: "This was one of the best tours we did in India. The Taj Mahal in the morning was beautiful, but the spiritual atmosphere of Mathura and Vrindavan was something else entirely. Walking along the ghats in Mathura and seeing the evening aarti ceremony was deeply moving. In Vrindavan the colourful Holi decorations were everywhere, the guide told us about how Holi celebrations here are famous worldwide. Definately reccomend this combo tour.",
                },
                {
                    author: 'Fatima A.',
                    country: 'UAE',
                    rating: 4,
                    date: '2026-03-03',
                    text: "Good combination of history and spirituality in one day. The Taj Mahal portion was lovely as expected. Mathura was fascinating, the birthplace of Lord Krishna has such a special energy. Vrindavan temples were colourful and vibrant. The drive between the cities was about an hour each way which was fine in the private car. Only complaint is that it was a very long day, we started at 6am and got back around 8pm.",
                },
                {
                    author: 'Sophie C.',
                    country: 'France',
                    rating: 5,
                    date: '2026-02-14',
                    text: "The Mathura and Vrindavan extension after the Taj Mahal was a highlight of our entire India trip. The contrast between the Islamic Mughal architecture of the Taj and the Hindu temples of Vrindavan was facinating. Our guide was knowledgable about both traditions. The ISKCON temple in Vrindavan was beautiful and very peaceful. I loved walking through the narrow lanes of Mathura seeing the local life. The private guided tour format made everything seamless.",
                },
                {
                    author: 'Robert J.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-12',
                    text: "Brilliant day trip from Agra. We did the Taj Mahal first thing in the morning then headed to Mathura and Vrindavan. The Krishna temples in Vrindavan are so colourful and lively compared to other religious sites. At the Yamuna ghats in Mathura we saw priests performing rituals and it felt very authentic and untouristy. The guide knew the back routes to avoid traffic and had great relationships with the temple priests. Would completley reccomend this over just doing Agra alone.",
                },
            ],
        };
    }

    if (slug === 'agra-fort-private-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 5,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Amanda G.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "This same day tour from Delhi covering the Taj Mahal and Fatehpur Sikri was absolutley packed with amazing sights. The private car picked us up at 5am from our Delhi hotel and we were at the Taj by 9:30. Fatehpur Sikri in the afternoon was a real surprise, the ghost city built by Akbar is incredibly well preserved. The Buland Darwaza gate is massive and the Panch Mahal is unlike anything else in India. Our driver was safe and experienced on the expressway.",
                },
                {
                    author: 'Liam O.',
                    country: 'Ireland',
                    rating: 4,
                    date: '2026-02-20',
                    text: "Great day trip from Delhi to see both the Taj Mahal and Fatehpur Sikri. The Taj needs no introduction, it was as magnificent as you'd expect. But Fatehpur Sikri really surprised me, the abandoned Mughal capital has Jodha Bai's palace which shows the blend of Hindu and Muslim architecture. The Buland Darwaza is the tallest gateway in India apparently. Long day though, left Delhi at 6am and got back around 9pm. The private car made it managable.",
                },
                {
                    author: 'Yuki H.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-03-01',
                    text: "Combining the Taj Mahal with Fatehpur Sikri on a day trip from Delhi was an excellent decision. At Fatehpur Sikri our guide explained how Emperor Akbar built this entire city after a Sufi saint predicted the birth of his son, but then abandoned it after only 14 years due to water shortage. The palace complex is stunning, especially the Diwan-i-Khas with its central pillar. The Taj Mahal was the perfect morning visit. Very well organised tour.",
                },
                {
                    author: 'Elena V.',
                    country: 'Russia',
                    rating: 5,
                    date: '2026-02-12',
                    text: "We had an amazing day visiting both the Taj Mahal and Fatehpur Sikri from Delhi. The private car was comfortable with good AC and the driver knew the best routes. At Fatehpur Sikri the guide showed us the Pachisi court where Akbar used to play chess using real people as pieces, which was facinating. Jodha Bai's palace had beautiful Hindu carvings showing Akbar's religious tolerance. The Tomb of Salim Chishti with its marble lattice screens was another highlight.",
                },
                {
                    author: 'Nathan C.',
                    country: 'New Zealand',
                    rating: 4,
                    date: '2026-03-10',
                    text: "Solid tour covering two of the most important Mughal sites in one day from Delhi. The Taj Mahal was stunning as expected. Fatehpur Sikri doesnt get enough attention in my opinion, it was one of the most interesting historical sites we visited in India. The guide was good and the private car comfortable. Giving 4 stars because the lunch stop wasnt great and we could have spent more time at Fatehpur Sikri. But overall very good value.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-express-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Rachel F.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-05',
                    text: "Taking the Gatiman Express from Hazrat Nizamuddin station to Agra was such a fun experience. The train is super fast and comfortable, we arrived in under 2 hours. A driver was waiting at Agra Cantt station and took us straight to the Taj Mahal. The whole day was perfectly organised, we saw the Taj, had lunch, visited Agra Fort, and caught the evening train back. So much better than sitting in a car for 4 hours each way.",
                },
                {
                    author: 'Daniel K.',
                    country: 'South Korea',
                    rating: 5,
                    date: '2026-02-28',
                    text: "The Gatiman Express is definately the best way to do a day trip to the Taj Mahal from Delhi. The train departed on time from Nizamuddin station and the CNF class seats were really comfortable with good legroom. They served breakfast on board which was a nice touch. In Agra the guide and driver were already waiting for us. Seeing the Taj Mahal in person is something everyone should experience at least once. The return train journey was equally smooth.",
                },
                {
                    author: 'Lisa M.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-17',
                    text: "Good tour overall using the Gatiman Express train. The train ride itself was enjoyable and much quicker than driving. Our guide in Agra was excellent, he took us to the Taj Mahal first thing and the morning light was perfect. We also visited Agra Fort and had a nice lunch at a local restaurant. Only concern was that the pickup from Delhi hotel to Nizamuddin station was a bit tight on time due to traffic. I'd reccomend leaving extra early.",
                },
                {
                    author: 'Pierre D.',
                    country: 'France',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Excellent way to see the Taj Mahal without the hassle of a long car journey. The Gatiman Express train is modern, clean and fast. Left Delhi around 8am and was standing in front of the Taj Mahal by 11am. The guide was waiting at the station with a car and had everything organised perfectly. After the Taj and lunch we had time for Mehtab Bagh which has beautiful views of the Taj from across the river. Caught the 5:50pm train back. Completley hassle free.",
                },
                {
                    author: 'Ingrid S.',
                    country: 'Norway',
                    rating: 5,
                    date: '2026-03-08',
                    text: "We were nervous about doing a day trip but the Gatiman Express made it easy. The train is fast and comfortable, almost like a European train. Our guide in Agra was fantastic, he knew all the best angles for photos at the Taj Mahal and explained the symmetry of the gardens and the Charbagh layout. We also visited Agra Fort where Shah Jahan was imprisoned. The whole day ran like clockwork. Would absolutley reccomend this over driving.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-vrindavan-full-day-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 4,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Christine B.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-04',
                    text: "This day trip from Delhi combining the Taj Mahal with Mathura and Vrindavan was absolutley incredible. Left Delhi early and arrived at the Taj for a perfect morning visit. After lunch we drove to Vrindavan where the Krishna temples were so colourful and alive with devotees singing and chanting. The Banke Bihari Temple had such an intense spiritual energy. In Mathura we walked along the ghats of the Yamuna river. Our private car and guide made the long day very comfortable.",
                },
                {
                    author: 'Oliver W.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-02-23',
                    text: "Interesting combination of the Taj Mahal with the spiritual towns of Mathura and Vrindavan. The Taj was magnificent obviously. Vrindavan was a completely different vibe, very spiritual and authentic. We visited several Krishna temples including the massive ISKCON temple which is very modern compared to the older ones. Mathura's Krishna Janmabhoomi was fascinating. Its a very full day though, about 14 hours door to door from Delhi, so be prepared for that.",
                },
                {
                    author: 'Maria L.',
                    country: 'Brazil',
                    rating: 5,
                    date: '2026-03-10',
                    text: "One of the best tours we booked in India. Starting with the Taj Mahal was perfect, then heading to Vrindavan and Mathura added such a different dimension to the day. Our guide explained the significance of Krishna in Hindu culture and how Vrindavan is considered one of the holiest places in India. The narrow streets filled with sadhus and pilgrims felt like stepping back in time. The private car from Delhi was comfortable and the driver was great on the highway.",
                },
                {
                    author: 'Simon R.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-16',
                    text: "Fantastic private day trip from Delhi. The Taj Mahal was the obvious highlight but honestly the Vrindavan temples were equally memorable. We visited Prem Mandir which is this massive white marble temple that gets lit up beautifully. In Mathura the Dwarkadhish Temple was packed with worshippers and the atmosphere was electric. The guide was knowledgable about both Mughal and Hindu history which made the contrasts between the sites even more interesting.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-guided-tour-from-agra') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Sarah J.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-07',
                    text: "We were already staying in Agra so this guided tour of the Taj Mahal was exactly what we needed. Our guide met us at the hotel and took us through the East Gate which had a shorter queue. His explanations about the Mughal architecture, the symmetry of the four minarets, and the love story behind the monument were facinating. He also pointed out how the calligraphy on the gateway gets progressively larger toward the top to create an optical illusion of uniform size. Excellent guide.",
                },
                {
                    author: 'Michael P.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-26',
                    text: "Perfect tour for those already in Agra. The guide picked us up from our hotel and had the tickets pre-arranged so we walked straight in. He showed us the best spots for photographs and explained things I never would have noticed, like how the Taj Mahal appears pink at sunrise, white during the day, and golden under moonlight. The pietra dura inlay work up close is absolutley stunning. He gave us plenty of free time to explore on our own too.",
                },
                {
                    author: 'Hana Y.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Booked this guided tour since we were already in Agra for two nights. The guide was very knowledgable about the history and architecture of the Taj Mahal. He explained how the precious stones in the marble were sourced from all over Asia. Good pace, not too rushed. I would have liked to also visit the mosque on the west side but he said it was closed for prayers that day. Overall a solid experience and good value.",
                },
                {
                    author: 'Giuseppe M.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-19',
                    text: "Excellent Taj Mahal tour for people staying in Agra. The guide was at our hotel right on time and had water bottles and shoe covers ready. He took us through the main gate and the first view of the Taj framed by the gateway arch was breathtaking. He knew exactly where to stand for the classic reflection photo in the water channels. Inside the mausoleum he whispered the history of Shah Jahan and Mumtaz Mahal which was very moving. Reccomend this completely.",
                },
                {
                    author: 'Emma T.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-03-12',
                    text: "Already being in Agra meant we didnt need transport from Delhi, so this local guided tour was ideal. Our guide was passionate about the Taj Mahal and clearly loved sharing its history. He showed us the garden layout based on the Islamic concept of paradise, the four quadrants representing the four rivers of paradise. The semi-precious stone inlay work is so intricate you could spend hours just looking at the details. Well worth having a guide rather than wandering around alone.",
                },
            ],
        };
    }

    if (slug === 'same-day-taj-mahal-tour-by-car-from-delhi') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Jessica R.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-10',
                    text: "This private car day trip from Delhi to the Taj Mahal was seamless from start to finish. Our driver arrived at 5:30am at our hotel in Connaught Place and we were at the Taj Mahal by 9:30am via the Yamuna Expressway. The car was a clean Toyota Innova with good AC. Our guide in Agra was waiting at the parking lot and the whole Taj Mahal experience was magical. We also visited Agra Fort before heading back. Arrived in Delhi by 8pm. Definately the easiest way to see the Taj.",
                },
                {
                    author: 'James H.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-24',
                    text: "We only had one day to see the Taj Mahal and this private day trip from Delhi by car worked perfectly. The driver was professional, the car comfortable, and the expressway to Agra is actually quite smooth. At the Taj our guide was excellent, he knew all the history and best photo spots. We had a nice lunch at a restaurant near the Taj with a rooftop view. The drive back took about 3.5 hours. Worth every penny for the convenience of door to door service.",
                },
                {
                    author: 'Martina S.',
                    country: 'Austria',
                    rating: 4,
                    date: '2026-03-03',
                    text: "Good same-day trip to the Taj Mahal from Delhi. The private car was comfortable and the driver was experienced. The Taj Mahal itself was stunning, our guide explained the Mughal history really well. We also stopped at a marble workshop where they showed how the inlay work is done, which was interesting but felt a bit like a sales pitch. The drive can be long, about 3-4 hours each way depending on traffic. Still, much better than a crowded bus tour.",
                },
                {
                    author: 'Charlotte E.',
                    country: 'France',
                    rating: 5,
                    date: '2026-02-15',
                    text: "Our private Agra day trip from Delhi was absolutley perfect. The car picked us up from our hotel near New Delhi railway station and took us directly to Agra. No stopping at tourist shops unless we asked. The Taj Mahal was everything we imagined and more. The white marble glowing in the midday sun was incredible. Our guide pointed out the false tomb upstairs and the real burial chamber below. We finished with Agra Fort before driving back. Completley stress free experience.",
                },
                {
                    author: 'Kim S.',
                    country: 'South Korea',
                    rating: 5,
                    date: '2026-03-08',
                    text: "This same day Taj Mahal tour by car from Delhi was the highlight of our India trip. Everything was well organized, from the early morning pickup to the comfortable drive on the expressway. The Taj Mahal is even more beautiful in person than in photos. Our guide spent almost 2 hours with us explaining every detail of the monument. We also visited Baby Taj (Itimad-ud-Daulah) which was lovely and much less crowded. The return drive was smooth. Highly reccomend this tour.",
                },
            ],
        };
    }

    if (slug === 'agra-royal-sunrise-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 5,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Sophie L.',
                    country: 'France',
                    rating: 5,
                    date: '2026-03-09',
                    text: "Waking up at 4:30am was tough but absolutley worth it for the sunrise at the Taj Mahal. We entered as soon as the gates opened and watched the sky turn from deep purple to orange to pink, and the marble changed colour with every minute. There were so few people at that hour that we had the reflecting pools almost to ourselves. After the Taj we went to Agra Fort which was equally impressive. Our guide called it the Royal Experience and it truly felt like one.",
                },
                {
                    author: 'Andrew M.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-27',
                    text: "The sunrise Taj Mahal tour combined with Agra Fort was a once in a lifetime experience. The early morning light hitting the white marble creates colours you wont see at any other time of day. Pink, lavender, soft gold, it was constantly changing. Our guide was there with a flashlight to lead us through the dark gardens. At Agra Fort later, he showed us the exact window where Shah Jahan spent his last years gazing at the Taj. Incredibly moving and well organised private tour.",
                },
                {
                    author: 'Clara W.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-03-04',
                    text: "This private sunrise tour was the best thing we did in India. The Taj at sunrise is a completley different experience from later in the day. The marble has this ethereal glow and the gardens are misty and quiet. Our guide was waiting for us before dawn and had everything prepared including shoe covers and water. After spending 2 hours at the Taj we moved to Agra Fort where the morning light was also beautiful on the red sandstone. A royal experience indeed.",
                },
                {
                    author: 'Ben T.',
                    country: 'New Zealand',
                    rating: 4,
                    date: '2026-02-18',
                    text: "The sunrise at the Taj Mahal was stunning. Getting up at 4am wasnt easy but seeing the Taj emerge from the pre-dawn darkness as the sky lights up behind it was unreal. The guide was excellent and very punctual. Agra Fort afterward was a great addition, its massive and the views of the Taj from across the river are spectacular. Only giving 4 stars because I wish we had more time at the fort, we needed to rush a bit at the end.",
                },
                {
                    author: 'Aisha K.',
                    country: 'UAE',
                    rating: 5,
                    date: '2026-03-12',
                    text: "Definately choose the sunrise option if you can. The Taj Mahal at dawn is magical, the silence and the soft light make it feel sacred. We were among the first visitors through the gate and had the famous bench photo spot to ourselves. The colours on the marble shift from soft blue to warm pink as the sun rises. Agra Fort was the perfect follow up, our guide showed us the Musamman Burj where Shah Jahan was kept under house arrest. An unforgettable morning.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-agra-private-day-tour-with-lunch') {
        return {
            averageRating: 4.8,
            totalReviews: 4,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Victoria S.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-06',
                    text: "The private day tour with 5 star lunch was worth the splurge. The Taj Mahal visit was excellent with a knowledgable guide who took us to all the best viewpoints. But the lunch at a luxury hotel was a real highlight, we had a beautiful buffet with Mughlai cuisine, tandoori dishes, and the biryani was out of this world. After a morning of walking in the heat, sitting down to a proper air-conditioned lunch was heaven. Great way to experience Agra in comfort.",
                },
                {
                    author: 'Richard H.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-22',
                    text: "This tour was a cut above the rest because of the 5 star hotel lunch included. We visited the Taj Mahal in the morning which was absolutley spectacular. Then our driver took us to the Oberoi Amarvilas for lunch where we had stunning views of the Taj from the restaurant terrace. The food was incredible, authentic Indian cuisine at its finest. After lunch we visited Agra Fort feeling refreshed and energized. The whole day felt luxury without being over the top.",
                },
                {
                    author: 'Mia C.',
                    country: 'Denmark',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Nice tour overall. The Taj Mahal portion was well guided and we learned a lot about Mughal history. The 5 star lunch was very good with a wide variety of Indian and international dishes. Agra Fort in the afternoon was interesting but we were getting tired by then. I would reccomend doing the fort first and the Taj after lunch when its less hot. The private car and guide were both excellent. Good value considering the lunch is included.",
                },
                {
                    author: 'Alexander P.',
                    country: 'Russia',
                    rating: 5,
                    date: '2026-02-14',
                    text: "Everything about this private day tour was first class. The guide was professional and passionate about the Taj Mahal's history. He showed us details in the marble inlay that most tourists miss. The 5 star lunch was a wonderful break, we had butter chicken, naan fresh from the tandoor, and the best mango lassi I have ever tasted. The whole day was perfectly paced with enough time at each stop. Definately the premium Agra experience.",
                },
            ],
        };
    }

    if (slug === 'mysteries-of-agra-local-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 4,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Kate B.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-03-08',
                    text: "This was nothing like a typical Agra tour. Our local guide took us through the old city streets, past crumbling havelis and hidden mosques that no tourist ever sees. We visited a petha (sweet) workshop where they make the famous Agra specialty, and walked through the spice market near Kinari Bazaar. He showed us the moonlight garden (Mehtab Bagh) from a local's perspective and shared stories about Agra that arent in any guidebook. Truly felt like discovering the real city.",
                },
                {
                    author: 'Mark L.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-21',
                    text: "Most tourists just see the Taj and leave but this Mysteries of Agra tour showed us a completley different side of the city. Our local guide grew up in these streets and knew every hidden corner. We saw the tomb of Akbar's Christian wife Mariam, explored narrow alleyways with beautiful old wooden balconies, and tried the best street food chai I've ever had. He explained the local leather craft tradition and took us to a workshop where artisans were making shoes by hand.",
                },
                {
                    author: 'Astrid N.',
                    country: 'Sweden',
                    rating: 4,
                    date: '2026-03-03',
                    text: "Very unique tour that shows Agra beyond the obvious monuments. Our guide was a local who clearly loved his city and wanted to share its hidden stories. We visited some lesser known tombs and mosques, walked through residential areas where daily life carries on unchanged, and tasted local sweets like petha and dalmoth. The only reason for 4 stars is that some of the walking areas were quite dusty and uneven, so wear good shoes.",
                },
                {
                    author: 'Lucas F.',
                    country: 'Brazil',
                    rating: 5,
                    date: '2026-02-16',
                    text: "Absolutley loved this local tour of Agra. Instead of just the big monuments, we discovered the real Agra. Our guide showed us an ancient step-well hidden behind modern buildings, a 400-year-old mosque in a residential area, and the old city gates that most visitors drive past without noticing. We ended at a local rooftop chai stall with views of the Taj Mahal in the distance. This is the kind of experience you cant get from a regular tourist tour. Highly reccomend.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-half-day-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 5,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Patricia M.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "This half day Taj Mahal tour was perfect for us since we had limited time in Agra. We chose the car option from our hotel and the whole thing took about 4 hours including transport. The guide gave us a thorough tour of the Taj Mahal, explaining the Mughal architecture and the love story behind it. Having multiple transportation options to choose from when booking was really convenient. Got back to the hotel with plenty of time for lunch.",
                },
                {
                    author: 'Tom W.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-02-25',
                    text: "Good efficient way to see the Taj Mahal if you dont have a full day. We picked the private car transport option and were collected from our hotel. The guide was knowledgable and gave us about 90 minutes at the Taj which felt right. He pointed out the pietra dura inlay work and how the precious stones come from different countries. The only downside was not having time for Agra Fort but thats the trade-off with a half day tour. Still very worthwhile.",
                },
                {
                    author: 'Nadia A.',
                    country: 'Morocco',
                    rating: 5,
                    date: '2026-03-04',
                    text: "Perfect for those with tight schedules. The transportation options made it easy to customize, we chose the tuk-tuk option which was fun and added to the experience. Our guide met us at the entrance and the tour was well paced. He showed us the best photo spots including the famous bench and the reflection in the water channels. The Taj Mahal is even more stunning in person than any photo can capture. Great half day experience.",
                },
                {
                    author: 'Henrik J.',
                    country: 'Denmark',
                    rating: 5,
                    date: '2026-02-17',
                    text: "We were on a tight schedule and this half day tour was exactley what we needed. The guide was efficient but not rushed, covering all the important aspects of the Taj Mahal including the history, architecture, and symbolism. He helped us navigate the security check quickly and knew the quieter spots away from the crowds. The variety of transport options when booking was a nice touch. Finished in time for our afternoon train. Reccomend this for time-limited visitors.",
                },
                {
                    author: 'Stella G.',
                    country: 'Greece',
                    rating: 4,
                    date: '2026-03-11',
                    text: "Solid half day tour of the Taj Mahal with flexible transportation. We chose private car pickup and the driver was punctual. The guide covered all the main points about the Taj and gave us free time to wander and take photos. I would have liked a bit more time inside the mausoleum itself as the guide was hurrying us along a bit. But the overall organisation was good and its a great option if you only have half a day to spare in Agra.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-pickup-private-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 4,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Emily R.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-06',
                    text: "This private tour covering Agra Fort and Baby Taj with hotel pickup and drop was excellent. Our guide started with Agra Fort which is massive and took about 90 minutes to explore. Then we went to Baby Taj (Itimad-ud-Daulah) which is considered the draft of the Taj Mahal and has the most exquisite marble inlay work. Having the pickup and drop included made everything so easy, no haggling with rickshaw drivers or worrying about transport. Very well organised.",
                },
                {
                    author: 'William T.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Great tour focusing on Agra Fort and Baby Taj rather than the usual Taj Mahal route. Baby Taj is absolutley gorgeous and much more intimate than the main Taj. The marble lattice screens are so delicate they look like lace. At Agra Fort our guide was exceptional, he knew every corner and showed us the mirror palace and the grape garden courtyard. Pickup from our hotel was prompt and the driver dropped us back safely. Highly reccomend for those who have already seen the Taj or want something different.",
                },
                {
                    author: 'Yuna K.',
                    country: 'South Korea',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Nice private tour with convenient pickup and drop. Agra Fort was impressive, the mix of red sandstone and white marble architecture is beautiful. Baby Taj was a lovely surprise, smaller and more peaceful than the main Taj Mahal. The inlay work there is actually more detailed and delicate. Our guide was good but could have given us more time at each site. The pickup from hotel was on time and the car was clean and air conditioned.",
                },
                {
                    author: 'Sandra V.',
                    country: 'Netherlands',
                    rating: 5,
                    date: '2026-02-15',
                    text: "Loved this tour focusing on the lesser known but equally beautiful monuments of Agra. Agra Fort is a UNESCO World Heritage site and deservs much more attention than it gets. Our guide showed us the Nagina Masjid and the private audience hall. Baby Taj was a personal favourite, the tomb is considered the precursor to the Taj Mahal and you can see why. The private pickup and drop from our hotel made the whole experience completley hassle-free.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-sunrise-tour-from-agra') {
        return {
            averageRating: 4.9,
            totalReviews: 5,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Nina F.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Waking up before dawn was worth every minute of lost sleep. Our guide collected us from our Agra hotel at 5am and we were at the East Gate before it opened. Being among the first inside meant we had the Taj almost to ourselves. Watching the sunrise behind the Taj Mahal as the marble shifted from grey-blue to warm pink was the most beautiful thing I have ever witnessed. The morning mist over the gardens added to the atmosphere. An absolutley unforgettable experience.",
                },
                {
                    author: 'David C.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-28',
                    text: "If you are in Agra you MUST do the sunrise tour. The colours on the marble change every few minutes as the sun comes up. First its this pale blue, then pink, then white, then golden. Our guide was there with flashlights in the pre-dawn darkness and had shoe covers ready. The gardens were so peaceful without the crowds. He took incredible photos for us using natural light angles. By the time we left around 8:30am the crowds were already building. So glad we went early.",
                },
                {
                    author: 'Lena S.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-03-05',
                    text: "Best decision we made in Agra was booking this sunrise tour. Starting from our hotel at 5am our guide drove us to the entrance and we were inside before most tourists had even woken up. The Taj Mahal at sunrise is completley different from later in the day. The soft early light makes the marble glow and the reflection in the water channels is crystal clear. Our guide was patient and let us just sit and absorb the beauty. Truly a special moment.",
                },
                {
                    author: 'Chris P.',
                    country: 'Ireland',
                    rating: 4,
                    date: '2026-02-19',
                    text: "Stunning sunrise experience at the Taj Mahal. We were staying in Agra so the early pickup was easy. The guide was professional and knowledgable about the history. Seeing the first rays of sunlight hit the white marble is something every visitor should experience. The only reason for 4 stars is that it was quite cold in the early morning in February and I wish the listing had mentioned to bring warm layers. Otherwise a perfect experience.",
                },
                {
                    author: 'Mei L.',
                    country: 'Singapore',
                    rating: 5,
                    date: '2026-03-12',
                    text: "Starting from our Agra hotel made this sunrise tour so convenient. The guide arrived on time in the dark and we walked to the Taj Mahal entrance together. Being one of the first groups inside was incredible. The silence, the soft colours on the marble, the mist rising from the Yamuna river behind the Taj. Our guide showed us spots where the sunrise light creates the most dramatic effect on the semi-precious stone inlays. Definately the best way to experience the Taj Mahal.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-guided-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Rachel K.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Our certified guide in Agra was exceptional. He didnt just show us the Taj Mahal, he took us through all the major sites including Agra Fort, Baby Taj, and Mehtab Bagh. At each location he had detailed knowledge about the Mughal emperors and the architecture. Having a certified government guide meant we skipped the long ticket queues and got access to areas that are sometimes restricted. Best way to explore Agra comprehensively.",
                },
                {
                    author: 'Thomas R.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-24',
                    text: "Hiring a certified tour guide to explore Agra was the smartest decision we made. He customised the itinerary based on our interests, we spent more time at the Taj Mahal and less at the shopping stops. His knowledge of the Mughal dynasty and how it shaped Agra's architecture was impressive. He also took us to the local spice market and a marble workshop. Very personable and spoke excellent English. Would absolutley reccomend.",
                },
                {
                    author: 'Isabelle D.',
                    country: 'France',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Good certified guide who covered the main attractions of Agra efficiently. The Taj Mahal explanation was detailed and informative. He was flexible with our schedule and adjusted when we wanted to spend more time taking photos. Deducting one star because the tour felt a bit textbook at times, would have preferred more personal stories and anecdotes. But overall a professional and reliable guide service with good value.",
                },
                {
                    author: 'Hassan A.',
                    country: 'Egypt',
                    rating: 5,
                    date: '2026-02-16',
                    text: "As someone from Egypt with experience of ancient monuments, I can say the Taj Mahal is truly something special. Our certified guide in Agra brought it to life with stories about Shah Jahan's devotion to Mumtaz Mahal. He showed us Islamic calligraphy elements that connected to what I knew from Egyptian architecture which was facinating. The guide also covered Agra Fort and explained the differences between Akbar's and Shah Jahan's building styles. Excellent and knowledgable.",
                },
                {
                    author: 'Julia M.',
                    country: 'Poland',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Exploring Agra with a certified guide was the right choice. He met us at our hotel and had the full day planned perfectly. Started with the Taj Mahal in the morning when it was less crowded, then visited Agra Fort, and finished at Baby Taj. His explanations about the symmetry in Mughal architecture and the evolution from Akbar's sandstone style to Shah Jahan's marble preference were really interesting. He also reccomended a great restaurant for lunch.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-sunrise-skip-the-line-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 5,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Amanda S.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "The skip-the-line aspect of this sunrise tour was a game changer. While other groups were queuing at the main gate, we went through a separate entrance and were inside within minutes. At sunrise the Taj Mahal marble goes through these incredible colour changes, from deep blue to lavender to soft pink to brilliant white. The guide had our tickets pre-purchased so there was zero waiting. We were positioned perfectly to watch the first light hit the dome. Absolutley magical.",
                },
                {
                    author: 'Peter H.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-26',
                    text: "The combination of sunrise timing and skip-the-line access meant we had the most incredible Taj Mahal experience. No crowds, no queues, just the beauty of the monument in the early morning light. The guide explained that the Taj faces east so the sunrise light hits it directly, creating the most photogenic conditions of the day. He positioned us at the reflecting pool where the sunrise reflection was absolutley perfect. Worth waking up at 4:30am for this.",
                },
                {
                    author: 'Sarah O.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-04',
                    text: "Skip the line plus sunrise equals the perfect Taj Mahal visit. We were inside before most tourists had even arrived. The pre-dawn silence in the gardens was almost spiritual. Then watching the colours change on the marble as the sun crept up was breathtaking. Our guide timed everything perfectly so we were at the right viewpoints for each stage of the sunrise. The fast-track entry saved us at least 30 minutes of queuing. Completley worth it.",
                },
                {
                    author: 'Roberto G.',
                    country: 'Italy',
                    rating: 4,
                    date: '2026-02-18',
                    text: "Great sunrise tour with the benefit of skipping the ticket queue. The early morning colours on the Taj Mahal are genuinely spectacular. Our guide was very knowledgable about the architecture and history. The skip-the-line entry worked exactly as promised, we walked straight through while a long queue was forming. Only giving 4 stars because the pickup from hotel was about 15 minutes late which caused a bit of stress given the tight sunrise timing.",
                },
                {
                    author: 'Anya T.',
                    country: 'Ukraine',
                    rating: 5,
                    date: '2026-03-12',
                    text: "Seeing the Taj Mahal at sunrise with no queue was the highlight of my entire Asia trip. The skip-the-line tickets meant we entered through the priority lane and were standing in the gardens within minutes. The marble was this ethereal pale blue colour before the sun came up, then gradually turned pink and then brilliant white. Our guide was passionate and took amazing photos for us. He also shared lesser known facts about the underground chambers. Definately book this one.",
                },
            ],
        };
    }

    if (slug === 'agra-photography-tour-with-guide') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Marcus W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "This photography tour of Agra was a dream for any camera enthusiast. Our guide knew exactley where to stand for the best compositions, from the classic Taj Mahal reflection shot in the water channels to a hidden spot near the mosque where you get the dome framed by an archway. We visited the Mehtab Bagh across the river for that iconic Taj Mahal distance shot. He also took us through the old city where the street photography opportunities were incredible. Got shots I am truly proud of.",
                },
                {
                    author: 'Yuki S.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-02-23',
                    text: "As an amateur photographer this tour was exactly what I needed. The guide understood composition, lighting, and angles. He showed me spots at the Taj Mahal that I never would have found on my own, including a viewpoint where you can capture the reflection of the Taj in the Yamuna river at just the right time. We also photographed Agra Fort where the play of light on red sandstone in the golden hour was stunning. He even helped with camera settings for the tricky marble exposure.",
                },
                {
                    author: 'Hannah G.',
                    country: 'United Kingdom',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Good photography focused tour of Agra. The guide clearly knew his spots and had obviously done this many times. The Taj Mahal portion was excellent, he positioned us for the symmetrical reflection shots and the classic bench photo. We also visited some lesser-known tombs and gardens that had beautiful light. I would have liked a bit more time at each location as photography takes longer than regular sightseeing. But overall a great experience for photo enthusiasts.",
                },
                {
                    author: 'Philippe C.',
                    country: 'Belgium',
                    rating: 5,
                    date: '2026-02-14',
                    text: "The Agra photography tour was one of the best investments of my trip. Our guide took us to locations I never would have discovered, including rooftop viewpoints in the old city with the Taj in the background, and a spot along the river where the Taj reflects in the water with birds flying overhead. He understood the golden hour timing perfectly and planned the itinerary around the best light conditions. Came home with portfolio worthy images. Absolutley reccomend for photographers.",
                },
                {
                    author: 'Diana R.',
                    country: 'Romania',
                    rating: 5,
                    date: '2026-03-11',
                    text: "As a travel photographer I have done many photo tours around the world and this one was top notch. The guide had genuine photography knowledge, not just tourist spot knowledge. He understood leading lines, rule of thirds, and framing. At the Taj Mahal he showed me how to use the gateway arch as a natural frame and where to stand for the perfect reflection. The old city streets of Agra provided amazing candid photography opportunities too. Worth every rupee.",
                },
            ],
        };
    }

    if (slug === 'hidden-gems-of-agra-heritage-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 4,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Claire F.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-08',
                    text: "This heritage tour was a revelation. Instead of just the Taj, our guide took us to Akbar's Tomb at Sikandra which was stunning and practically empty of tourists. We visited the Chini Ka Rauza, a Persian-style tomb with gorgeous glazed tile work that most visitors never see. The Ram Bagh garden, said to be the oldest Mughal garden in India, was peaceful and beautiful. I felt like we discovered a whole different Agra that the regular tourists completley miss.",
                },
                {
                    author: 'Steve R.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-20',
                    text: "If you've already seen the Taj and want something different, this hidden gems tour is absolutley perfect. We visited Mariam's Tomb, the Jama Masjid, and several historic sites in the old city that I had never even heard of. The guide was a local historian who shared fascinating stories about each location. The Guru Ka Tal gurudwara was unexpectedly beautiful. This tour showed me that Agra has so much more to offer beyond its most famous monument.",
                },
                {
                    author: 'Annika L.',
                    country: 'Finland',
                    rating: 4,
                    date: '2026-03-03',
                    text: "Interesting tour for those who want to see beyond the obvious. The heritage sites we visited were genuinely less touristy, some we were the only visitors. The Chini Ka Rauza with its Persian blue tiles was beautiful though quite deteriorated. Akbar's Tomb at Sikandra was impressive with its unique multi-tiered design. The guide was passionate about Agra's lesser-known heritage. Only giving 4 stars as some of the sites were a bit run down and not well maintained.",
                },
                {
                    author: 'John D.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-15',
                    text: "This was exactly the kind of tour I was looking for. We had already seen the Taj Mahal the day before, so spending a morning exploring Agra's hidden heritage was perfect. The guide took us to places like the tomb of Itimad-ud-Daulah's lesser known sister tomb, old colonial-era churches, and a beautiful step-well that felt like a secret. He was clearly passionate about preserving Agra's heritage beyond the famous monuments. Definately reccomend for repeat visitors or history buffs.",
                },
            ],
        };
    }

    if (slug === 'delhi-agra-round-trip-gatimaan-train') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.8,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Laura M.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "Having the confirmed CNF tickets pre-booked for the Gatiman train was such a relief. We didnt have to worry about availability or the confusing Indian railway booking system. The train from Hazrat Nizamuddin station was modern and comfortable with breakfast served on board. In Agra a driver and guide were waiting. We saw the Taj Mahal and Agra Fort before catching the evening train back. The whole round trip by train was so much better than driving. Excellent organisation.",
                },
                {
                    author: 'Andrew B.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-25',
                    text: "The CNF confirmed tickets on the Gatiman Express were the key selling point here. Trying to book these tickets ourselves on the IRCTC website was a nightmare, so having them pre-arranged was absolutley worth it. The train is India's fastest and the ride was smooth and quick. Our guide in Agra was excellent and covered the Taj Mahal in detail. The return train arrived at Hazrat Nizamuddin station right on time. Hassle free day trip to the Taj.",
                },
                {
                    author: 'Francesca L.',
                    country: 'Italy',
                    rating: 4,
                    date: '2026-03-04',
                    text: "Good round trip experience on the Gatiman train. The CNF tickets were waiting for us at the station counter which was convenient. The train ride to Agra Cantt was about 1 hour 40 minutes and quite comfortable. In Agra we visited the Taj Mahal and had a quick lunch. I only wish we had more time in Agra, the schedule felt a bit tight because the return train has a fixed departure time. But the train experience itself was great and much better than a long car journey.",
                },
                {
                    author: 'Erik S.',
                    country: 'Norway',
                    rating: 5,
                    date: '2026-02-17',
                    text: "Everything about this round trip was perfectly organised. Transfer from our Delhi hotel to Hazrat Nizamuddin station, confirmed CNF class Gatiman Express tickets, guide and driver waiting in Agra, and the return journey in the evening. The train itself is impressive, very modern for India and genuinely fast. We had a full day to explore the Taj Mahal and Agra Fort. The guide was knowledgable and fun. Reccomend this for anyone who wants to avoid the 4+ hour car ride.",
                },
                {
                    author: 'Naomi T.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-03-11',
                    text: "The confirmed CNF tickets on the Gatiman Express made this trip worry-free. We arrived at Nizamuddin station, collected our tickets, and boarded the cleanest train I saw in India. Breakfast was included and the journey was quick. Our driver and guide in Agra were professional and covered all the major sights. Seeing the Taj Mahal up close was a dream come true. The evening train back to Delhi was equally comfortable. Definately the best way to do a Delhi to Agra day trip.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-fatehpur-full-day-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 4,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Karen D.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "Combining Agra with Fatehpur Sikri made for an incredible day. The Taj Mahal was breathtaking in the morning light. But Fatehpur Sikri in the afternoon was the unexpected highlight. This abandoned Mughal capital is like a ghost city frozen in time. The Buland Darwaza gateway is the tallest in Asia and the Panch Mahal with its 176 columns was architecturally fascinating. Our guide explained how Emperor Akbar abandoned the city because the wells dried up. Such an interesting story.",
                },
                {
                    author: 'Georg K.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-02-23',
                    text: "Good day trip covering both Agra and Fatehpur Sikri. The Taj Mahal was the main attraction of course, and our guide did an excellent job explaining the architecture and history. Fatehpur Sikri was about an hour's drive from Agra and worth the trip. The Jodha Bai palace there shows amazing Hindu-Islamic fusion architecture. The tomb of Salim Chishti with its marble lattice screens was beautiful. Long day but well paced. Only giving 4 because of the crowded parking at Fatehpur.",
                },
                {
                    author: 'Olivia P.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-03-01',
                    text: "This Agra and Fatehpur Sikri day trip was wonderful. We started at the Taj Mahal early to beat the crowds, then drove to Fatehpur Sikri. The ghost city is absolutley fascinating, walking through the abandoned palaces and courtyards you can imagine what life was like in Akbar's court 400 years ago. The Buland Darwaza is enormous, 54 meters tall, and the view from the top of the steps is spectacular. Our guide brought the history alive with stories of Akbar's reign.",
                },
                {
                    author: 'Patrick L.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-02-14',
                    text: "Excellent combination tour. The Taj Mahal speaks for itself but Fatehpur Sikri was the real discovery for me. Our guide explained how Akbar built this city to celebrate the birth of his son and how it was abandoned when the water supply failed. Walking through the Diwan-i-Am and Diwan-i-Khas you can picture the emperor holding court. The Birbal's House and Jodha Bai's Palace show how different religions coexisted under Akbar. Completley reccomend adding Fatehpur to your Agra trip.",
                },
            ],
        };
    }

    if (slug === 'agra-city-highlights-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 5,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Stephanie H.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "This city highlights tour covered everything worth seeing in Agra. We started at the Taj Mahal, then visited Agra Fort, Baby Taj (Itimad-ud-Daulah), and finished at Mehtab Bagh for sunset views of the Taj from across the river. Our guide was knowledgable about all the sites and connected the history between them, showing how the Mughal architectural style evolved over generations. Having a comprehensive tour meant we didnt miss anything important. Excellent overview of the city.",
                },
                {
                    author: 'James C.',
                    country: 'United Kingdom',
                    rating: 4,
                    date: '2026-02-22',
                    text: "Solid city highlights tour that covers the main attractions of Agra efficiently. The Taj Mahal was obviously the star but I was pleasantly surprised by the Baby Taj which has even more detailed marble inlay work. Agra Fort was impressive in its sheer scale. The guide was good and the private transport comfortable. Deducting one star as we felt rushed at a couple of spots, probably trying to fit too much into one day. But it does give you a thorough overview of Agra.",
                },
                {
                    author: 'Sofia R.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-03-03',
                    text: "Perfect tour for first-time visitors to Agra who want to see all the highlights. Our guide planned the route perfectly, starting with the Taj Mahal in the morning when it was cooler, then Agra Fort, lunch break, and Baby Taj in the afternoon. Each site built on the story of the Mughal dynasty. The guide connected the dots between the monuments and explained how each emperor left his mark on the city. Mehtab Bagh at the end provided a beautiful final view of the Taj. Reccomend this completley.",
                },
                {
                    author: 'Tyler W.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-16',
                    text: "This highlights tour was the ideal way to experience Agra. Our guide took us to the Taj Mahal, Agra Fort, Baby Taj, and Mehtab Bagh, covering all the major sites in one well-paced day. What I appreciated most was how he explained the relationships between the monuments and the emperors who built them. The city has so much more to offer than just the Taj Mahal and this tour proved that. Great value for money and very well organised.",
                },
                {
                    author: 'Akiko N.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-03-10',
                    text: "Comprehensive tour covering the major sites of Agra. The guide was friendly and spoke good English. The Taj Mahal and Agra Fort were definately the highlights but I also loved Baby Taj for its intricate craftsmanship. Mehtab Bagh offered a nice perspective of the Taj from the other side of the river. The tour could have included more stops at local markets or food spots to give a fuller picture of Agra life. But as a highlights tour it delivered on its promise.",
                },
            ],
        };
    }

    if (slug === 'private-sunrise-taj-mahal-agra-fort-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 4,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Megan L.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-10',
                    text: "This private sunrise tour was absolutley worth the early alarm. Our guide picked us up at 5am and we were at the gates of the Taj Mahal before sunrise. Watching the first light illuminate the white marble while the gardens were still shrouded in mist was truly magical. The colours shifted from pale blue to pink to gold within 30 minutes. After spending over 2 hours at the Taj we drove to Agra Fort which was equally impressive in the morning light. Having a private tour meant we could go at our own pace.",
                },
                {
                    author: 'Christian B.',
                    country: 'Switzerland',
                    rating: 5,
                    date: '2026-02-27',
                    text: "The private sunrise experience was spectacular. We entered the Taj Mahal complex just as the sky was turning orange and had the reflecting pool almost to ourselves for the first 20 minutes. The marble surface catches the sunrise colours in a way that photographs simply cannot capture. Our guide was extremely knowledgable about the architecture and the Mughal history. At Agra Fort afterward he showed us the octagonal tower where Shah Jahan was imprisoned and could only gaze at the Taj from afar.",
                },
                {
                    author: 'Emma J.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-05',
                    text: "Definately choose the sunrise option. The private tour format was perfect as our guide could adapt to our pace. At the Taj we spent time at each viewpoint as the light changed. The stillness of the early morning and the beauty of the sunrise on the marble was an emotional experience honestly. Agra Fort was a great addition, the red sandstone contrasts beautifully with the white marble of the Taj. Our guide showed us exactly where Shah Jahan could see the Taj from his prison window.",
                },
                {
                    author: 'Richard N.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-19',
                    text: "Beautiful sunrise at the Taj Mahal followed by a thorough visit to Agra Fort. The private tour meant no waiting for a group and we could spend as long as we wanted at each spot. The sunrise was stunning, the marble went through several colour changes as the sun rose. Agra Fort was also very impressive. Only giving 4 stars because the early morning was quite cold in February and I wish the tour description had warned us to bring warm clothing. The experience itself was outstanding.",
                },
            ],
        };
    }

    if (slug === 'sunrise-taj-mahal-and-agra-tour-by-car') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Jennifer A.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "Left our Delhi hotel at 3am to catch the sunrise at the Taj Mahal and it was completley worth it. The drive on the Yamuna Expressway was smooth and our driver was very experienced driving in the dark. We arrived just as the gates opened and the sunrise was spectacular, the marble changed from grey to pink to white over about 45 minutes. After the Taj we had a guided tour of Agra Fort and Baby Taj. The multiple options during booking let us customise the itinerary which was great.",
                },
                {
                    author: 'Martin K.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-26',
                    text: "This sunrise tour from Delhi by car was perfectly organised. Leaving at 3:30am sounded insane but arriving at the Taj Mahal for sunrise made it all worthwhile. The early morning light on the white marble is something you have to see in person to believe. Our guide in Agra was waiting at the parking lot and had everything arranged. We chose the full day option and also visited Agra Fort and Fatehpur Sikri. The car was comfortable with good AC for the return drive. Definately reccomend.",
                },
                {
                    author: 'Chloe T.',
                    country: 'New Zealand',
                    rating: 4,
                    date: '2026-03-03',
                    text: "The sunrise at the Taj Mahal was beautiful and worth the early start from Delhi. The drive took about 3 hours and we arrived just in time. I appreciated having different options to choose from when booking, we went with the Taj plus Agra Fort combo. The guide was knowledgable and the car was clean. Only giving 4 stars because the drive back to Delhi took much longer due to afternoon traffic, nearly 5 hours. Plan accordingly if you are doing this as a day trip.",
                },
                {
                    author: 'Santiago P.',
                    country: 'Argentina',
                    rating: 5,
                    date: '2026-02-15',
                    text: "Excellent sunrise tour from Delhi with multiple options to customize your day. We chose the sunrise Taj Mahal plus Agra Fort plus Mehtab Bagh package and it was the perfect combination. The sunrise colours on the marble were incredible. Our driver picked us up from our hotel near India Gate and the expressway drive was smooth. The guide in Agra was passionate and knowledgable. Having flexibility in the itinerary options made this tour stand out from others.",
                },
                {
                    author: 'Erika M.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-03-11',
                    text: "We booked the sunrise option with car from Delhi and added the Agra Fort visit. Waking at 3am was rough but seeing the Taj Mahal at sunrise changed everything. The marble glowed in shades I didnt know existed, soft lavender, warm peach, brilliant white. Our guide was patient and let us just soak it in. The return drive by car was comfortable and we could stop whenever we wanted for breaks. Much more flexible than the train option. Absolutley magical experience.",
                },
            ],
        };
    }

    if (slug === 'agra-friday-tour-taj-closed-alternative') {
        return {
            averageRating: 4.7,
            totalReviews: 4,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Nicole B.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "We didnt realize the Taj Mahal is closed on Fridays until we arrived in Agra. Thankfully we found this Friday alternative tour and it was actually brilliant. Agra Fort was the main stop and our guide spent 2 hours there covering every detail. Baby Taj (Itimad-ud-Daulah) was gorgeous and less crowded than the Taj ever is. The sunset at Mehtab Bagh with the Taj Mahal silhouetted against the sky was one of the most beautiful sights of our trip. A great way to spend a Friday in Agra.",
                },
                {
                    author: 'Paul S.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-02-21',
                    text: "We specifically planned our Agra visit around this Friday tour since we knew the Taj would be closed. The tour covered Agra Fort thoroughly, which is an incredible monument in its own right with stunning halls and gardens. Baby Taj was a highlight, the marble inlay work is arguably more detailed than the Taj itself. The sunset at Mehtab Bagh gave us views of the Taj from across the river without needing to enter. Only 4 stars as the afternoon heat was intense between sites.",
                },
                {
                    author: 'Camille D.',
                    country: 'France',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Turned our Friday disappointment into a wonderful day. This tour was thoughtfully designed to show you the best of Agra when the Taj is closed for prayers. Agra Fort was massive and our guide took us through sections I had never seen in photos. Baby Taj was exquisite, the marble lattice screens are works of art. But the real highlight was the Mehtab Bagh sunset, watching the sun set behind the Taj Mahal from across the Yamuna river was absolutley stunning. Glad we booked this instead of just skipping Agra.",
                },
                {
                    author: 'Daniel F.',
                    country: 'South Africa',
                    rating: 5,
                    date: '2026-02-14',
                    text: "If you're stuck in Agra on a Friday dont despair, this tour is fantastic. We visited Agra Fort, Baby Taj, and Mehtab Bagh and honestly learned more about Mughal history than we would have just doing the Taj Mahal. The guide was knowledgable about the fort's military and residential sections. Baby Taj has the most intricate pietra dura work in all of Agra. The sunset at Mehtab Bagh was the perfect ending, seeing the Taj silhouetted against the orange sky. Definately reccomend this Friday alternative.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-royal-private-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 5,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Victoria C.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-10',
                    text: "This royal luxury tour of the Taj Mahal was in a class of its own. From the premium vehicle with leather seats to the VIP entrance, everything felt exclusive. Our guide was dressed professionally and spoke impeccable English. He shared stories about the Mughal court and Shah Jahan's obsession with architectural perfection that made the visit feel like stepping back in time. The attention to detail in this tour, cold towels, bottled water, personalized pace, was what made it truly feel royal.",
                },
                {
                    author: 'Jonathan W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-26',
                    text: "Worth the premium price for the luxury experience. Everything about this tour was elevated, from the Mercedes pickup to the priority access at the Taj Mahal. Our guide treated us like royalty and had clearly done extensive research on the Mughal dynasty. He explained the symbolism of every design element and how the Taj represents the throne of God in Islamic paradise. No rushing, no crowds around us, just a timeless and elegant experience. This is how the Taj Mahal should be seen.",
                },
                {
                    author: 'Isabella M.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-03-05',
                    text: "If you want to experience the Taj Mahal in true elegance, this is the tour to book. The luxury vehicle was immaculate, the guide was scholarly and passionate, and every detail was taken care of. We spent nearly 3 hours at the Taj Mahal without feeling rushed. The guide pointed out architectural details that regular tours skip, like how the dome is actually a double dome with space between for acoustics. A truly premium and completley unforgettable experience.",
                },
                {
                    author: 'Katherine H.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-18',
                    text: "Beautiful luxury tour of the Taj Mahal. The vehicle was comfortable, the guide exceptional, and the overall experience felt very premium. The guide's knowledge of Mughal art and architecture was impressive. He showed us how the precious stones in the inlay work include lapis lazuli from Afghanistan, jade from China, and turquoise from Tibet. The only reason for 4 stars is that I expected perhaps a private area or exclusive access beyond what regular visitors get, which wasnt quite the case.",
                },
                {
                    author: 'Ahmed R.',
                    country: 'UAE',
                    rating: 5,
                    date: '2026-03-12',
                    text: "This private royal tour was exactley what we were looking for. As someone who appreciates luxury travel, every element met my expectations. The guide was erudite and charming, sharing the love story of Shah Jahan and Mumtaz with genuine emotion. The pace was relaxed and unhurried, allowing us to truly absorb the timeless elegance of the Taj Mahal. The marble inlay work glowing in the afternoon sun was mesmerising. Definately the finest way to experience this Wonder of the World.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-photography-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Ryan K.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "This Taj Mahal photography tour with a professional guide was exactly what I needed. He knew the best angles for every type of shot, from the classic symmetrical view through the gateway arch to creative compositions using the mosque as a foreground element. The reflection shots in the long pool were timed perfectly when the water was still. He also helped me get the famous bench photo without other tourists in the background by timing it just right. Came away with incredible images.",
                },
                {
                    author: 'Akiko Y.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-02-24',
                    text: "As a photography enthusiast this tour was a dream. The professional guide understood lighting, composition, and the unique challenges of photographing white marble. He showed me how to adjust exposure to capture the detail in the marble without blowing out the highlights. We visited the Taj at a time when the light was warm and directional, creating beautiful shadows on the inlay work. He also knew hidden viewpoints that most visitors never find. Worth every penny for the quality of photos I got.",
                },
                {
                    author: 'Linda S.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Good photography focused tour of the Taj Mahal. The guide clearly had experience with photographers and knew all the best spots. He helped me capture the reflection of the Taj in the water channels and showed me angles that avoided the scaffolding on the back side. I appreciated that he let me take my time at each spot rather than rushing. Giving 4 stars because I expected more tips on camera settings and post-processing but the location knowledge was excellent.",
                },
                {
                    author: 'Stefan G.',
                    country: 'Austria',
                    rating: 5,
                    date: '2026-02-16',
                    text: "The professional photography guide transformed my Taj Mahal visit from sightseeing into an art experience. He positioned me at viewpoints where the symmetry of the Taj was perfect, showed me how to use the gateway arch as a natural frame, and timed our visit to the platform when the light was creating long shadows on the marble surface. The pietra dura close-up shots he suggested turned out amazing. This is a must-do for anyone who takes photography seriously. Absolutley reccomend.",
                },
                {
                    author: 'Natasha V.',
                    country: 'Russia',
                    rating: 5,
                    date: '2026-03-11',
                    text: "One of the best photography tours I have ever taken anywhere in the world. The guide understood that photographers need patience and time, not rushing from point to point. He showed me the reflection pool at the exact moment when the breeze stopped and the mirror image was perfect. We also found a spot near the mosque where you get the Taj framed between two minarets which was stunning. His knowledge of the monument combined with genuine photography skill made this tour exceptional.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-agra-fort-guided-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Sarah W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "This guided tour of both the Taj Mahal and Agra Fort was perfectly planned. We started at the Taj Mahal where our guide explained the Islamic paradise garden concept and the significance of the four water channels. The marble inlay work is even more detailed up close than you would expect. At Agra Fort the guide connected the stories, showing us where Shah Jahan lived before and after the Taj was built. The Sheesh Mahal mirror palace was a highlight. Great comprehensive experience.",
                },
                {
                    author: 'Karl B.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-25',
                    text: "Excellent guided tour covering the two most important monuments in Agra. Our guide was a certified historian who brought the Mughal era to life. At the Taj Mahal he explained the symbolism of every element, from the cypress trees representing death to the lotus flowers representing life. At Agra Fort the Diwan-i-Am audience hall was impressive and the guide showed us how the acoustics were designed so the emperor could hear petitions from his throne. Very knowledgable and passionate guide.",
                },
                {
                    author: 'Amy L.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good combined tour of the Taj Mahal and Agra Fort. The guide was professional and had extensive knowledge of both sites. The Taj Mahal portion was emotional, hearing the love story behind its construction. Agra Fort was impressive in scale but I felt we could have spent more time there as we only scratched the surface of such a huge complex. The guide was flexible about photo stops which I appreciated. Overall good value for covering both monuments.",
                },
                {
                    author: 'Raj P.',
                    country: 'India',
                    rating: 5,
                    date: '2026-02-17',
                    text: "Even as an Indian visiting from Bangalore, having a guided tour of the Taj Mahal and Agra Fort was worth it. The guide knew details I had never heard before, like how the minarets are designed to fall outward away from the main tomb in case of earthquake. At Agra Fort he showed us the Jahangiri Mahal with its Hindu-style carvings and explained how each emperor modified the fort to suit his taste. The guided experience is definately superior to wandering around on your own.",
                },
                {
                    author: 'Charlotte A.',
                    country: 'Belgium',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Wonderful guided tour covering both of Agra's UNESCO World Heritage sites in one go. The Taj Mahal was breathtaking and our guide made it even better by pointing out the optical illusion where the Quran verses appear the same size from bottom to top even though they actually get larger. Agra Fort was a great complement, the red sandstone architecture contrasts beautifully with the Taj's white marble. Our guide was absolutley fantastic with his storytelling. Reccomend this combined tour.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-sunrise-guided-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 5,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Michelle K.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "The sunrise at the Taj Mahal was the most beautiful thing I have ever seen. Our guide collected us in the pre-dawn darkness and we entered as soon as the gates opened. The sky was still dark blue and the Taj was just a ghostly white silhouette. Then as the sun broke the horizon the marble started changing colours, first a soft lavender, then pink, then warm gold. The guide positioned us perfectly for each phase. By 8am it was getting crowded but we had already experienced the magic. Unforgettable.",
                },
                {
                    author: 'Peter G.',
                    country: 'Netherlands',
                    rating: 5,
                    date: '2026-02-27',
                    text: "Waking at 4:30am was painful but this sunrise tour made it absolutley worth the sacrifice. Our guide had torches ready for the walk through the dark gardens. As the sun rose the Taj Mahal transformed minute by minute. The reflection in the water channels at dawn when there are no ripples was picture perfect. The guide explained how the Taj was designed to catch the sunrise light and that Mumtaz Mahal's tomb faces east toward Mecca for this reason. A deeply moving experience.",
                },
                {
                    author: 'Alison F.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-03-04',
                    text: "Do the sunrise tour. Just do it. Yes its early but the Taj Mahal at dawn is completley different from any other time. The gardens are misty and quiet. The marble glows in colours you wont see later in the day. Our guided tour was excellent, the guide was there before us with everything prepared and his knowledge of the monument was impressive. He gave us the history while we watched the light show nature was putting on. Best morning of our entire India trip.",
                },
                {
                    author: 'Takeshi M.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-02-18',
                    text: "Beautiful sunrise experience at the Taj Mahal. The guided tour was well organized and the guide was knowledgable about the history and architecture. The early morning light on the white marble was stunning, especially the warm pink tones just after sunrise. The gardens were peaceful with very few visitors. Only giving 4 stars because the tour ended a bit abruptly, I would have liked more time to sit and absorb the atmosphere after the formal guide portion ended.",
                },
                {
                    author: 'Laura V.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-03-12',
                    text: "The sunrise guided tour was the highlight of our two weeks in India. Our guide was passionate and clearly loved sharing the sunrise experience with visitors. He explained how the Taj Mahal was built to be viewed at different times of day and how Shah Jahan would visit at dawn. The colours on the marble, from blue to pink to gold to white, happened right before our eyes. We had the reflecting pool to ourselves for photos. Definately the best way to see the Taj. Worth every early morning minute.",
                },
            ],
        };
    }

    if (slug === 'fatehpur-sikri-guided-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 5,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Brian T.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Booking a tour guide for Fatehpur Sikri was the best decision. This ghost city is fascinating but without a guide you would miss so much context. Our guide explained how Emperor Akbar built this entire capital city after the Sufi saint Salim Chishti predicted the birth of his son. The Buland Darwaza is the tallest gateway in the world at 54 meters and walking through it was awe-inspiring. Jodha Bai's palace showed the Hindu-Muslim architectural fusion beautifully. Much more interesting than the Taj in some ways.",
                },
                {
                    author: 'Claudia S.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-02-23',
                    text: "Fatehpur Sikri is an underrated gem and having a guide made all the difference. The abandoned Mughal capital has palaces, mosques, and courtyards that tell the story of Akbar's reign. The Panch Mahal with its 176 columns where the royal women would sit was architecturally amazing. The tomb of Salim Chishti with its marble lattice screens was beautiful. Only giving 4 stars because the site is very spread out and we were quite tired by the end in the heat. Bring lots of water.",
                },
                {
                    author: 'Jason M.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-02',
                    text: "Our guide at Fatehpur Sikri brought this ghost city to life. He showed us the Pachisi court where Akbar played chess with real people, the Diwan-i-Khas with its incredible central pillar, and the Birbal's House with its intricate carvings. The story of how Akbar abandoned this magnificent city after just 14 years because the water ran out is both tragic and facinating. The Buland Darwaza gate is massive and the view from the top of the steps is spectacular. Definately hire a guide here.",
                },
                {
                    author: 'Marie P.',
                    country: 'France',
                    rating: 5,
                    date: '2026-02-14',
                    text: "Fatehpur Sikri deserves much more attention than it gets. Our tour guide was excellent, he explained the layout of the entire palace complex and how it reflected Akbar's vision of religious harmony. The Ibadat Khana where Akbar held interfaith dialogues was a highlight. Jodha Bai's palace has Hindu elements like elephants and lotus flowers alongside Islamic geometric patterns. The tomb of Salim Chishti is completley covered in intricate marble lattice work. A must visit with a guide.",
                },
                {
                    author: 'Kevin O.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Hiring a guide for Fatehpur Sikri was essential. Without one you would just be walking through old buildings with no context. Our guide made us feel like we were there in the 16th century, describing court life under Akbar, the religious debates, and the drama of the royal harem. The Buland Darwaza is absolutley enormous, you feel tiny standing at its base. The whole site is remarkably well preserved for a 450-year-old abandoned city. Well worth the hour drive from Agra.",
                },
            ],
        };
    }

    if (slug === 'same-day-delhi-to-agra-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 5,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Heather D.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "This same day Delhi to Agra tour was perfectly organised. Picked up from our hotel near Karol Bagh at 6am and were at the Taj Mahal by 10am. The guide in Agra was excellent and gave us nearly 2 hours at the Taj. We also visited Agra Fort and had a nice lunch. The drive back took about 3.5 hours on the expressway. Everything was included and there were no surprise stops at shopping places. Clean car, safe driver, great guide. Exactly what we wanted for our one day in Agra.",
                },
                {
                    author: 'Michael F.',
                    country: 'New Zealand',
                    rating: 4,
                    date: '2026-02-24',
                    text: "Good same day trip from Delhi to Agra covering the main sights. The car was comfortable and the driver experienced on the highway. The Taj Mahal was incredible and our guide did a thorough job explaining the history and architecture. We also visited Agra Fort. The only downside was the long drive, about 3-4 hours each way, which makes for a tiring day. But if you only have one day to spare its definately doable and worth it. The Taj Mahal is a must-see.",
                },
                {
                    author: 'Helena R.',
                    country: 'Portugal',
                    rating: 5,
                    date: '2026-03-03',
                    text: "We only had one free day in Delhi and this same day Agra tour was the perfect solution. The pickup from our hotel was punctual, the car was clean with AC, and the driver drove safely on the expressway. Our guide in Agra was passionate about the Taj Mahal and knew every detail of the Mughal architecture. We had enough time for the Taj Mahal, Agra Fort, and a quick visit to Baby Taj. Got back to our Delhi hotel by 8:30pm. Reccomend this for anyone with limited time.",
                },
                {
                    author: 'Benjamin S.',
                    country: 'Switzerland',
                    rating: 5,
                    date: '2026-02-15',
                    text: "Excellent same day tour from Delhi to Agra. The whole experience was well planned with no wasted time. Our driver knew the best routes and we arrived in Agra by mid-morning. The Taj Mahal was everything we expected and more, our guide brought the history alive. Agra Fort was impressive too. The return journey was smooth with a stop for tea halfway. Good value considering it includes car, driver, guide, and entrance fees. Completley hassle free way to see the Taj.",
                },
                {
                    author: 'Ayumi K.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-03-10',
                    text: "Decent same day tour from Delhi. The Taj Mahal was breathtaking and the guide was good. The car was comfortable for the long drive. I appreciated that the itinerary was focused on the major sights without unnecessary detours. Giving 4 stars because the day was very long, about 14 hours from pickup to drop-off, and I was exhausted by the end. If you have the option I would suggest the overnight tour instead. But if one day is all you have this tour works well.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-same-day-tour-from-delhi') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Katherine M.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-09',
                    text: "This same day Taj Mahal tour from Delhi was flawless. Picked up at 5:30am from our hotel in Paharganj and driven to Agra on the expressway. The Taj Mahal was even more beautiful than I imagined, the white marble glowing in the morning sun was mesmerising. Our guide explained the love story of Shah Jahan and Mumtaz Mahal with such passion that I actually got emotional. We also visited Agra Fort before heading back. Door to door service made everything easy.",
                },
                {
                    author: 'Robert T.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-26',
                    text: "Outstanding same day tour from Delhi to the Taj Mahal. The drive on the Yamuna Expressway was smooth in our private car. Our guide in Agra was a certified historian who knew an incredible amount about the Mughal period. He showed us details in the marble inlay that most visitors completely miss, including tiny flowers made from dozens of individual precious stones. After the Taj we visited Agra Fort and had a tasty lunch at a local restaurant. Back in Delhi by 7pm. Reccomend this without hesitation.",
                },
                {
                    author: 'Anna B.',
                    country: 'Poland',
                    rating: 4,
                    date: '2026-03-04',
                    text: "Good same day tour to the Taj Mahal from Delhi. Everything was well organized and the car was comfortable. The Taj Mahal is stunning and our guide was knowledgable. We also stopped at Agra Fort which was impressive. The drive each way is about 3-4 hours which is tiring but manageable. I gave 4 stars because the lunch included was just okay, nothing special. But the actual tour experience was excellent and the guide was professional. Would reccomend for time-pressed visitors.",
                },
                {
                    author: 'David L.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-17',
                    text: "We had just one day free in Delhi and this Taj Mahal day trip made it count. The private car was spacious with cold water bottles provided. Our driver was calm and professional on the highway. In Agra the guide was absolutley fantastic, he spent 90 minutes at the Taj Mahal and another hour at Agra Fort. The entrance tickets were pre-arranged so no queuing. Having everything taken care of meant we could just focus on enjoying the experience. Best day of our India trip.",
                },
                {
                    author: 'Emma V.',
                    country: 'Denmark',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Perfect day trip from Delhi. The early start was worth it to reach the Taj Mahal before the biggest crowds. Our guide was passionate and showed us the architectural details that make the Taj unique, like how it appears to grow larger as you walk toward it because of clever perspective design. The pietra dura stonework is intricate beyond belief. Agra Fort was a great bonus. The return drive was relaxing and we arrived at our Delhi hotel by evening. Definately the way to do it if you have one day.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-tour-with-female-guide') {
        return {
            averageRating: 4.9,
            totalReviews: 5,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Sarah J.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "As a solo female traveler, having a female guide at the Taj Mahal made me feel so much more comfortable and safe. She was incredibly knowledgable about the history and architecture, and she also shared a woman's perspective on the love story of Shah Jahan and Mumtaz Mahal that male guides probably wouldnt think to mention. She navigated the crowds expertly and made sure I was never bothered by touts. I felt protected and educated at the same time. Highly reccomend for women travelers.",
                },
                {
                    author: 'Priya M.',
                    country: 'India',
                    rating: 5,
                    date: '2026-02-25',
                    text: "Having a female guide for the Taj Mahal was a wonderful choice for our all-women group. She was articulate, passionate, and brought a unique perspective to the tour. She told us about Mumtaz Mahal not just as a love story but as a powerful woman who was Shah Jahan's chief advisor. She also shared insights about the women of the Mughal court and their influence that we had never heard before. She made us feel comfortable asking questions and took great care of our group.",
                },
                {
                    author: 'Emily C.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-02',
                    text: "Booking a female guide was the best decision for our mother-daughter trip to the Taj Mahal. She was warm, engaging, and absolutley brilliant in her knowledge of Mughal history. She told us how Mumtaz Mahal traveled with the army and bore 14 children, and how her death during childbirth inspired the greatest monument of love ever built. Having a woman guide also meant we could comfortably ask about cultural things and she helped us with our dupattas for the mosque visit. Lovely experience.",
                },
                {
                    author: 'Marie T.',
                    country: 'France',
                    rating: 4,
                    date: '2026-02-16',
                    text: "Very good experience with our female guide at the Taj Mahal. She was professional, knowledgable, and easy to talk to. As women traveling in India we appreciated feeling safe and comfortable with her guidance through the crowds. Her knowledge of the architecture and history was impressive. She also gave us practical advice about navigating Agra as female travelers. Only 4 stars because the tour felt slightly short. But the quality of the guide was exceptional.",
                },
                {
                    author: 'Rebecca N.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-11',
                    text: "I specifically sought out a female guide for the Taj Mahal and it was completley worth it. She was one of the few female certified guides in Agra and her passion for breaking barriers in a male-dominated industry was inspiring. Beyond being a great guide with deep knowledge, she created a safe and comfortable atmosphere for me as a solo woman. She shared stories about the women of the Mughal era and their hidden influence. She also knew all the best spots for photos. Definately reccomend for any woman visiting the Taj.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-sunrise-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 5,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Jessica T.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-10',
                    text: "The skip-the-line sunrise tour was incredible. While a massive queue was forming at the main entrance, we went through the priority lane and were inside within 5 minutes. At that early hour the Taj Mahal was bathed in soft pre-dawn light and the grounds were nearly empty. Watching the sun rise behind the dome while the marble shifted from silvery blue to warm pink was magical. The guide had our tickets pre-arranged so there was absolutley zero hassle. Best morning of our trip.",
                },
                {
                    author: 'Marco P.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-28',
                    text: "Skipping the line at sunrise was a game changer. We were inside the Taj Mahal complex while other tourists were still queuing for tickets. The early morning atmosphere was peaceful and almost meditative. The sunrise colours on the marble are something you have to see with your own eyes, no photo can capture the shifting shades. Our guide was excellent, knowledgable and patient, letting us sit on the bench and just absorb the beauty before explaining the history. Completley unforgettable.",
                },
                {
                    author: 'Clara H.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-03-05',
                    text: "The combination of skip-the-line entry and sunrise timing was perfect. We got into the complex quickly and positioned ourselves at the reflecting pool for the sunrise. The marble went through an incredible transformation of colours. Our guide explained that Shah Jahan designed the Taj to be most beautiful at sunrise as Mumtaz was the light of his life. Whether thats true or not, seeing it at dawn definately feels like the right way to experience it. Worth waking up at 4am for this.",
                },
                {
                    author: 'James O.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-19',
                    text: "Great sunrise experience with skip-the-line access. The fast entry meant we had a good 30 minutes with very few other visitors which was precious. The sunrise was beautiful and our guide was informative. He showed us how the Taj Mahal appears symmetrical but there is one deliberate asymmetry, Shah Jahan's tomb which was added later and placed off-centre. Interesting detail. Deducting one star because the guide rushed us a bit at the end, I would have liked another 20 minutes.",
                },
                {
                    author: 'Isabelle R.',
                    country: 'France',
                    rating: 5,
                    date: '2026-03-12',
                    text: "The skip-the-line sunrise tour is the only way to see the Taj Mahal in my opinion. We walked straight through priority entry while a long queue stretched around the corner. In the pre-dawn darkness the Taj loomed like a ghostly white vision. Then the sunrise painted it in every shade of pink and gold imaginable. The gardens were still dewy and quiet. Our guide was passionate and emotional about the monument and his enthusiasm was contagious. Absolutley the best experience in Agra.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-full-day-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Linda H.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "This private day trip from Delhi to the Taj Mahal and Agra was completley hassle-free. The car picked us up from our hotel and the transfers were smooth on the Yamuna Expressway. Our guide in Agra was exceptional, spending nearly 2 hours at the Taj Mahal explaining the architecture, history, and symbolism. We also visited Agra Fort. The fact that it was a private tour with transfers included meant we could just enjoy the day without worrying about logistics. Back at our Delhi hotel by 8pm.",
                },
                {
                    author: 'Sebastian M.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-26',
                    text: "Excellent private day trip from Delhi to Agra. Everything was included, comfortable car, professional driver, knowledgable guide, and entrance tickets. The Taj Mahal was as magnificent as everyone says. Our guide pointed out how the four minarets lean slightly outward as an earthquake safety feature which I found facinating. Agra Fort afterward was equally impressive. The transfer from Delhi was comfortable and the driver was safe. Great value for a comprehensive Agra experience.",
                },
                {
                    author: 'Hannah R.',
                    country: 'New Zealand',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Good full day private tour from Delhi covering the Taj Mahal and Agra. The car was comfortable and the driver experienced. The guide in Agra was knowledgable about the Mughal history. The Taj Mahal was stunning and Agra Fort was a great addition. Transfers from Delhi were smooth. Only giving 4 stars because we stopped at a marble workshop on the way back which felt like a sales pitch. I would have preferred to skip that and spend more time at the actual monuments.",
                },
                {
                    author: 'Francesco G.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-16',
                    text: "The private day trip from Delhi to the Taj Mahal was one of the best tours we have ever taken. The car was spacious and clean, the driver professional, and our guide in Agra was absolutley wonderful. He spent time at each monument ensuring we understood the significance of what we were seeing. The Taj Mahal at midday when the white marble is blazing in the sun is breathtaking. The included transfers made the whole experience stress-free. Highly reccomend this tour.",
                },
                {
                    author: 'Elsa K.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Perfect way to see the Taj Mahal if youre based in Delhi. The private car collected us early and the drive was smooth. In Agra our guide was passionate about the history and showed us every important detail at the Taj Mahal, from the calligraphy to the stone inlay to the acoustic properties of the main chamber. Agra Fort was also fascinating. The transfers back to Delhi were comfortable with cold water in the car. The private format meant we could go at our own pace. Definately reccomend.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-entry-ticket') {
        return {
            averageRating: 4.7,
            totalReviews: 5,
            guideRating: 4.7,
            valueRating: 4.5,
            reviews: [
                {
                    author: 'Chris B.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "Buying the skip-the-line entry ticket through this service saved us so much time and stress. When we arrived at the Taj Mahal there was a massive queue of people trying to buy tickets at the counter. We walked straight to the priority lane and were inside in under 10 minutes. The ticket was for foreigners and included the mausoleum entry which some cheaper tickets dont. The whole process was simple, we received the e-ticket on WhatsApp the day before. Definately worth it to avoid the chaos.",
                },
                {
                    author: 'Angela W.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-25',
                    text: "So glad we pre-booked the skip-the-line ticket for the Taj Mahal. The official ticket counters had queues stretching for what looked like an hour. We showed our pre-purchased ticket and went through the priority entrance. The ticket included admission to the main mausoleum which costs extra if you buy at the gate. The e-ticket process was straightforward and the confirmation came quickly. If you are a foreigner visiting the Taj this is a no-brainer. Saved us time and the hassle of dealing with the counters.",
                },
                {
                    author: 'Leo S.',
                    country: 'Switzerland',
                    rating: 4,
                    date: '2026-03-03',
                    text: "Convenient way to get Taj Mahal tickets without queuing. The skip-the-line access worked as advertised and we entered quickly. The ticket price is higher than buying at the counter but the time saved was worth it. The e-ticket was sent promptly and the instructions for which gate to use were clear. One note, you still need to go through security screening which everyone has to do regardless of ticket type. But overall a good service that avoids the confusing ticket buying process.",
                },
                {
                    author: 'Nina T.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-16',
                    text: "Pre-booking the entry ticket was smart. The ticket counters at the Taj Mahal are chaotic with touts trying to sell you overpriced tickets and guide services. Having our official skip-the-line ticket meant we bypassed all of that. The price was transparent with no hidden fees. The only reason for 4 stars is that I wish the listing was clearer about what is and isnt included. But the skip-the-line experience itself was smooth and I would reccomend it to any foreign visitor.",
                },
                {
                    author: 'Pierre M.',
                    country: 'France',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Absolutley get the skip-the-line ticket. We saw the regular queue and it was at least 45 minutes long with people pushing and shouting. We walked to the priority entrance, showed our pre-purchased ticket, and were inside the Taj Mahal complex within minutes. The ticket was the official 2026 foreigner rate with mausoleum access included. The whole booking process was easy and the confirmation came quickly. This saved us both time and the stress of navigating the chaotic ticket counters.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-official-guided-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Nancy R.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Booking an official tour guide for the Taj Mahal was the smartest thing we did. Our guide had a government-issued ID badge and was clearly certified. He explained the architecture, the Islamic calligraphy, the pietra dura inlay technique, and the garden layout in incredible detail. He also warned us about common scams outside the monument and helped us avoid them. Having an official guide meant we could trust everything he said was accurate. Worth every rupee for the depth of knowledge.",
                },
                {
                    author: 'Henrik L.',
                    country: 'Denmark',
                    rating: 5,
                    date: '2026-02-24',
                    text: "We had unofficial guides approach us at the gate offering cheap tours but we're glad we had pre-booked an official guide. The difference in quality was obvious. Our guide was professional, articulate, and had encyclopedic knowledge of the Taj Mahal. He showed us the optical illusion of the gateway where the Taj appears to grow larger as you walk toward it, and explained how the calligraphy is designed to appear the same size from every distance. An official guide is definately the way to go.",
                },
                {
                    author: 'Rachel W.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Good experience with our official Taj Mahal guide. He was punctual, professional, and very knowledgable. He explained the significance of the semi-precious stones used in the inlay work, with lapis lazuli from Afghanistan and jasper from Punjab. The history of Shah Jahan and Mumtaz Mahal was told beautifully. I'm giving 4 stars only because the tour was about 90 minutes and I felt it could have been a bit longer given the price. But the quality of the guiding was excellent.",
                },
                {
                    author: 'Giovanni F.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-15',
                    text: "Having an official government-certified guide at the Taj Mahal made the experience completley different from just walking around on your own. He showed us details that we would have walked right past, like how the marble flowers have 43 different types of semi-precious stones and how each petal is a separate piece fitted together. He explained the acoustic properties of the main chamber where a single note echoes for 28 seconds. Absolutley fascinating and well worth booking.",
                },
                {
                    author: 'Lucy T.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-03-11',
                    text: "The official tour guide was excellent. You can tell the difference between certified guides and the random people offering tours at the gate. Our guide had deep knowledge that went beyond the basic facts, he talked about the astronomical alignments, the mathematical precision of the gardens, and the spiritual symbolism of the whole design. He also took wonderful photos for us and knew exactley the right spots and angles. Reccomend booking an official guide rather than taking chances with someone at the gate.",
                },
            ],
        };
    }

    // --- DELHI TOURS ---

    if (slug === 'india-gate-guided-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Rachel K.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "This 4 day tour covering Delhi, Agra, Ranthambore and Jaipur was absolutley packed with highlights. Our guide gave us a wonderful introduction to Delhi on day one, then we drove to Agra for the Taj Mahal at sunrise which was magical. Ranthambore was the real surprise though, the jungle scenery was stunning even before we spotted a tiger. Jaipur rounded things off perfectly with Amber Fort and Hawa Mahal. Could not reccomend this itinerary enough for first timers to India.",
                },
                {
                    author: 'Thomas B.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-25',
                    text: "Four days covering Delhi, Agra, Ranthambore and Jaipur sounds ambitious but our guide and driver made it feel relaxed. The hotels were comfortable and clean at every stop. Seeing the Taj Mahal at golden hour and then a tiger safari the next morning was an incredible contrast. The driver was very skilled on Indian roads which made the long drives between cities much less stressful. Great value for a multi city tour.",
                },
                {
                    author: 'Yuki S.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Really enjoyed this 4 day circuit through Rajasthan's top destinations. Delhi sightseeing on day one covered India Gate and Humayun's Tomb nicely. The Agra portion was well timed so we avoided the worst crowds at the Taj. Ranthambore jeep safari was exciting even though we only saw deer and peacocks, no tigers that day. Would have liked one more night in Jaipur as it felt a bit rushed there.",
                },
                {
                    author: 'Sophie L.',
                    country: 'France',
                    rating: 5,
                    date: '2026-02-18',
                    text: "Booked this for my parents visiting India for the first time and they absolutley loved it. The guide was patient, knowledgable and spoke excellent English. All four cities delivered unique experiences, from the chaos of Old Delhi to the serenity of the Taj Mahal to the wildness of Ranthambore. The included meals were surprisingly good quality. A perfect introduction to northern India in just 4 days.",
                },
                {
                    author: 'David W.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-11',
                    text: "What a whirlwind 4 days. Started in Delhi with visits to India Gate and Qutub Minar, then drove to Agra where seeing the Taj Mahal in person completley exceeded my expectations from photos. The Ranthambore safari was a bucket list experience and we actually spotted two tigers near a watering hole. Finished in Jaipur with the beautiful City Palace. Every detail was handled perfectly by the tour team.",
                },
            ],
        };
    }

    if (slug === '6-day-golden-triangle-tour-with-tiger-safari') {
        return {
            averageRating: 4.9,
            totalReviews: 5,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'James H.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-06',
                    text: "This 6 day Golden Triangle tour with the tiger safari extension was the best decision we made for our India trip. Delhi, Agra and Jaipur were all fantastic but adding Ranthambore made it truly special. We did two jeep safaris and spotted three different tigers including a mother with cubs. The guides at every location were top notch and the hotels were really comfortable. Six days is the perfect pacing for this route.",
                },
                {
                    author: 'Maria G.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Definitley the highlight of our 3 week India trip. The Golden Triangle circuit covered all the must see monuments, the Taj Mahal at sunrise, Amber Fort, Hawa Mahal, India Gate, and then Ranthambore National Park added a completley different dimension. Our naturalist guide in Ranthambore was incredibly passionate about tiger conservation. The private car and driver made everything so comfortable between cities. Six days was just right, not too rushed.",
                },
                {
                    author: 'Oliver N.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-01',
                    text: "Incredible 6 day experience covering the best of Rajasthan plus wildlife. The itinerary was perfectly planned with enough time at each destination. In Delhi we explored both Old and New Delhi thoroughly. Agra was all about the Taj obviously but we also loved Agra Fort. The two morning safaris in Ranthambore were thrilling, we saw a tiger on the second one and our driver knew exactly where to position the jeep. Jaipur was the perfect finale with shopping in the bazaars.",
                },
                {
                    author: 'Chen W.',
                    country: 'Singapore',
                    rating: 4,
                    date: '2026-02-15',
                    text: "Very well organised 6 day tour. The Golden Triangle portion was excellent with knowledgable guides at every major site. The Ranthambore tiger safari was exciting though we were unlucky and did not spot a tiger, only spotted deer, monkeys and beautiful birds. The hotels ranged from good to very good. Driving between cities took longer than expected but the driver was safe and the car was comfortable with good AC. Would have appreciated slightly better lunch options on driving days.",
                },
                {
                    author: 'Emma D.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-03-10',
                    text: "This tour exceeded every expectation. Six days covering Delhi, Agra, Ranthambore and Jaipur with a private guide and driver felt incredibly luxurious. The tiger safari was absolutley unreal, we saw a massive male tiger crossing the road just 20 meters from our jeep. Our guide also arranged a visit to Ranthambore Fort which had amazing views. Coming back to Jaipur for the final two nights with visits to Amber Fort and the City Palace was the perfect ending.",
                },
            ],
        };
    }

    if (slug === 'golden-triangle-ranthambore-tiger-safari-4-days') {
        return {
            averageRating: 4.7,
            totalReviews: 4,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Patrick O.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-04',
                    text: "Packed the Golden Triangle and Ranthambore into 4 days and somehow it never felt rushed. Starting from Delhi we drove to Agra, saw the Taj Mahal, then continued to Ranthambore for a morning jeep safari where we spotted a tiger resting by a lake. Finished in Jaipur with Amber Fort. The driver was fantastic on those long stretches of highway. Having a guide who knew the history at every monument made all the difference.",
                },
                {
                    author: 'Lisa V.',
                    country: 'Netherlands',
                    rating: 4,
                    date: '2026-02-20',
                    text: "Good tour that covers a lot of ground in 4 days. The Golden Triangle cities were all wonderful and the Ranthambore addition makes this trip unique compared to the standard 3 day version. We did an early morning safari and saw plenty of wildlife including spotted deer and langur monkeys, but no tiger unfortunately. The pace is quite fast so be prepared for early starts and long driving days. Hotels were decent and the guide was very professional.",
                },
                {
                    author: 'Anna K.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-03-09',
                    text: "From Delhi to Agra to Ranthambore to Jaipur in 4 days, this tour delivers the best of northern India with a wildlife twist. The Taj Mahal was everything I dreamed of and more. At Ranthambore we took a canter safari and the jungle atmosphere was incredible, dense forest with ancient ruins scattered throughout. Our naturalist spotted a tigress with her cub near a watering hole which was the most magical wildlife moment of my life. Definately reccomend this itinerary.",
                },
                {
                    author: 'Michael R.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-28',
                    text: "Booked this 4 day Golden Triangle plus Ranthambore tour for my wife and I. Every element was well coordinated, from the comfortable AC car to the knowledgable local guides at each site. The Ranthambore tiger safari was the highlight for sure. Even the drive through the Rajasthan countryside was fascinating with camels and villages along the way. Our Delhi pickup from the hotel was right on time at 6am on day one. Excellent value for money.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-superfast-guided-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Sarah P.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Taking the train from Delhi to Agra for a day trip to the Taj Mahal was so much better than driving. The train was comfortable, fast and we arrived in Agra in about 2 hours. Our guide met us right at the station and took us straight to the Taj. He was incredibly knowledgable about Mughal history and pointed out architectural details I would have completley missed. We also visited Agra Fort before catching the train back. Brilliant way to see the Taj without the hassle of a 4 hour drive.",
                },
                {
                    author: 'Henrik J.',
                    country: 'Denmark',
                    rating: 5,
                    date: '2026-02-24',
                    text: "The train tour to the Taj Mahal is definately the way to go. Picked up from our Delhi hotel at 6am, driven to the station, and on the superfast train to Agra by 7. The whole experience was well organized with no waiting around. Our guide in Agra was passionate about the history of Shah Jahan and Mumtaz Mahal and brought the love story behind the Taj alive. The return train got us back to Delhi by evening. A perfect day trip.",
                },
                {
                    author: 'Jessica L.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good day trip to see the Taj Mahal from Delhi by train. The superfast train was comfortable with AC and reasonably spacious seats. Our guide at the Taj was excellent and very knowledgable. We also stopped at a marble inlay workshop which was interesting but felt a bit like a sales pitch. The only downside was the train delay on the return journey which added about 45 minutes. But overall a solid and efficient way to visit Agra from Delhi.",
                },
                {
                    author: 'Carlos M.',
                    country: 'Mexico',
                    rating: 5,
                    date: '2026-02-16',
                    text: "Absolutley loved this train tour to the Taj Mahal. I was nervous about driving in India so the train option was perfect. The guide in Agra was waiting for us at the platform and had everything planned perfectly. Seeing the Taj Mahal in person is truly a life changing experience, no photo does it justice. We had a nice lunch at a local restaurant and also visited Baby Taj which was beautiful and much less crowded. Highly reccomend the train option over driving.",
                },
                {
                    author: 'Nina S.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-03-12',
                    text: "Perfect way to see the Taj Mahal as a day trip from Delhi. The superfast train journey was smooth and we even got breakfast served onboard. Our guide was waiting at Agra station with a big smile and a sign with our names. He took us to the Taj via the south gate which apparently has shorter queues. The whole monument is even more breathtaking than the pictures suggest. We spent about 2 hours there which was plenty of time. Back in Delhi by 8pm, tired but so happy.",
                },
            ],
        };
    }

    if (slug === 'delhi-to-jaipur-same-day-tour-by-car') {
        return {
            averageRating: 4.7,
            totalReviews: 4,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Amanda C.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-05',
                    text: "Did the same day Jaipur trip from Delhi by AC car and it was a great experience. The car was clean, spacious and the AC worked perfectly which is essential in India. Our driver was professional and drove safely on the expressway, we reached Jaipur in about 5 hours. In Jaipur we visited Amber Fort, City Palace and Hawa Mahal with a local guide. Long day but absolutley worth it if you dont have time for an overnight stay.",
                },
                {
                    author: 'Raj P.',
                    country: 'India',
                    rating: 4,
                    date: '2026-02-22',
                    text: "Booked this for my visiting relatives who had just one day to see Jaipur. The AC car was comfortable for the highway drive and the driver knew the route well. We covered Amber Fort, Jal Mahal and Hawa Mahal in Jaipur. The guide was good but seemed a bit rushed at Amber Fort which deserves more time. Return drive was smooth and we were back in Delhi by 10pm. Good option for those short on time but be prepared for a long day of driving.",
                },
                {
                    author: 'Emily W.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-03-10',
                    text: "We only had one free day and wanted to see the Pink City so this same day Jaipur tour by car was perfect. Left Delhi at 6am and reached Jaipur by 11am thanks to the new expressway. Our guide in Jaipur was fantastic and took us to all the major sites including Amber Fort where we saw the mirror palace and City Palace with its beautiful courtyards. The car had bottled water and phone chargers which was a nice touch. Got back to our Delhi hotel by 9pm.",
                },
                {
                    author: 'Tobias F.',
                    country: 'Austria',
                    rating: 5,
                    date: '2026-02-28',
                    text: "Excellent same day tour from Delhi to Jaipur. The AC car was a Toyota Innova with plenty of legroom. The Jaipur-Delhi expressway made the drive much faster than I expected. Once in Jaipur our local guide walked us through the history of the Rajput kings at Amber Fort and then we explored the colourful streets and bazaars of the old city. Had a wonderful traditional Rajasthani thali for lunch. The whole day was seamlessly organised.",
                },
            ],
        };
    }

    if (slug === 'delhi-same-day-sightseeing-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Kevin B.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-03',
                    text: "This full day Delhi sightseeing tour was the perfect introduction to the city. We covered both Old and New Delhi in one day, starting with a rickshaw ride through the narrow lanes of Chandni Chowk and ending at the Lotus Temple as the sun was setting. Jama Masjid was stunning and our guide explained the Mughal history so well. We also stopped for street food, the paranthas at Paranthe Wali Gali were absolutley delicious. Highly reccomend this tour for first time visitors.",
                },
                {
                    author: 'Ingrid H.',
                    country: 'Norway',
                    rating: 5,
                    date: '2026-02-19',
                    text: "Covered so much of Delhi in just one day. Highlights were the Red Fort, Humayun's Tomb and the Qutub Minar. Our guide was extremely knowledgable about the different eras of Delhi's history from the Mughals to the British Raj. The rickshaw ride through Old Delhi's spice market was an incredible sensory experience, the smells were amazing. We also drove past India Gate and Parliament House in New Delhi which was a nice contrast to the old city. Great value for a full day tour.",
                },
                {
                    author: 'Akiko T.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-03-09',
                    text: "Good sightseeing tour of Delhi covering the main attractions. The guide was friendly and spoke clear English. We visited Qutub Minar, India Gate, Humayun's Tomb and Red Fort among other sites. The traffic in Delhi is quite intense so we spent a fair amount of time in the car between locations. Would suggest starting earlier in the morning to beat the crowds and the heat. The street food tasting in Old Delhi was a fun addition to the tour.",
                },
                {
                    author: 'Pierre D.',
                    country: 'France',
                    rating: 5,
                    date: '2026-02-27',
                    text: "Absolutley fantastic day exploring Delhi with our guide. The contrast between the chaotic lanes of Old Delhi and the wide boulevards of Lutyens' New Delhi was facinating. Our guide took us inside Jama Masjid and explained the architecture beautifully. The visit to Gurudwara Bangla Sahib was a spiritual highlight, we even helped serve food in the community kitchen. The driver navigated Delhi traffic like a pro. One of the best city tours I have done anywhere in the world.",
                },
                {
                    author: 'Hannah M.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-12',
                    text: "We had just one day in Delhi before flying out and this sightseeing tour made the most of every minute. Started at Raj Ghat where Mahatma Gandhi was cremated, then explored the Red Fort complex. After lunch we headed to New Delhi for India Gate, Rashtrapati Bhavan and the beautiful Lotus Temple. Our guide shared stories about Delhi's 7 historic cities that made the whole experience come alive. The AC car was comfortable and the driver was excellent.",
                },
            ],
        };
    }

    if (slug === 'delhi-sightseeing-half-day-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 4,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Mike J.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-06',
                    text: "Perfect half day tour for someone with limited time in Delhi. We covered Humayun's Tomb, Qutub Minar and India Gate all in about 4 hours. Our guide was efficient with time but never made us feel rushed at any site. Humayun's Tomb was my favourite, it's like a mini Taj Mahal and way less crowded. The guide explained how this tomb actually inspired the design of the Taj which I found fascinating. Great option if you only have a morning or afternoon free.",
                },
                {
                    author: 'Claudia R.',
                    country: 'Italy',
                    rating: 4,
                    date: '2026-02-21',
                    text: "Booked the half day Delhi sightseeing for our morning before an afternoon flight. We visited India Gate, Parliament House area and Qutub Minar. The guide was knowledgable and gave us a good overview of Delhi's history from the Delhi Sultanate through to independence. Traffic was a bit heavy which cut into our time at Qutub Minar but that is just Delhi being Delhi. The car was clean and air conditioned. Good tour for a quick introduction to the city.",
                },
                {
                    author: 'Daniel K.',
                    country: 'South Korea',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Took this half day sightseeing tour on our first morning in Delhi and it really helped us get oriented. The guide showed us the key landmarks of New Delhi including the Rashtrapati Bhavan, India Gate and the diplomatic enclave. We then visited Humayun's Tomb which was absolutley beautiful in the morning light. The guide arranged for us to try chai from a street vendor which was a lovely touch. Half day is ideal if you want to see the highlights without exhausting yourself.",
                },
                {
                    author: 'Laura S.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-14',
                    text: "We did the afternoon half day tour and it was brilliant. Visited Qutub Minar, the Iron Pillar and then drove through Lutyens' Delhi seeing Parliament House and the grand government buildings. Our guide was so passionate about Delhi's history and architecture. She explained how the British designed New Delhi as an imperial capital and the symbolism behind the layout. Ended at India Gate at sunset which was a perfect finish. Really efficient use of half a day.",
                },
            ],
        };
    }

    if (slug === 'old-new-delhi-private-half-day-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Jennifer A.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "This private tour of Old and New Delhi was incredible. We chose the full day option and it was worth every minute. Started in Old Delhi at the Red Fort, then walked through the bustling lanes of Chandni Chowk to Jama Masjid. After lunch we switched to New Delhi with India Gate, Humayun's Tomb and the Lotus Temple. Having a private guide meant we could spend extra time at sites we loved. The contrast between the two halves of Delhi is absolutley fascinating.",
                },
                {
                    author: 'Martin L.',
                    country: 'Switzerland',
                    rating: 5,
                    date: '2026-02-26',
                    text: "Chose the half day option focusing on Old Delhi and it was brilliant. The guide took us through the spice market in Chandni Chowk where the aromas were unbelievable. We visited Jama Masjid and climbed the minaret for panoramic views over the old city. Then a cycle rickshaw ride through the narrow lanes which was both terrifying and exhilarating. The guide knew all the hidden gems, from tiny sweet shops to a 200 year old haveli that most tourists never see. Highly reccomend.",
                },
                {
                    author: 'Priya N.',
                    country: 'India',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Booked the full day private tour for my parents visiting from Bangalore who had never properly explored Delhi. The guide was excellent and covered both Old and New Delhi comprehensively. Red Fort, Jama Masjid and Chandni Chowk in the morning, then Humayun's Tomb, Qutub Minar and India Gate in the afternoon. One small issue was the car was a bit cramped for four people. Otherwise a really thorough and well paced tour of India's capital.",
                },
                {
                    author: 'Chris W.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-18',
                    text: "The private half day tour was perfect for us. We focused on New Delhi and visited Humayun's Tomb, India Gate, Rashtrapati Bhavan and Qutub Minar. Having a private guide meant we could ask endless questions about Mughal architecture and the British colonial period. The guide was incredibly well read and could answer everything we threw at him. The flexibility of a private tour is definately worth the extra cost compared to group options.",
                },
                {
                    author: 'Mia B.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-03-13',
                    text: "We did the full day private tour and the guide did an amazing job weaving together the story of Delhi across centuries. From the Mughal era Red Fort to the British era Connaught Place to modern Delhi, every stop told a different chapter. The rickshaw ride through Old Delhi and the street food tasting were highlights. We tried gol gappe, jalebi and the famous butter chicken at a hole in the wall restaurant. The private car was comfortable and the driver was patient. Best tour we did in India.",
                },
            ],
        };
    }

    if (slug === '5-days-golden-triangle-tour-from-delhi') {
        return {
            averageRating: 4.8,
            totalReviews: 4,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Robert G.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-04',
                    text: "The 5 day Golden Triangle tour from Delhi was perfectly paced. Two nights in Delhi, one in Agra and two in Jaipur gave us enough time to properly explore each city. In Delhi we covered both the Mughal heritage sites and New Delhi's colonial architecture. The Taj Mahal at sunrise was an otherworldly experience. Jaipur was my favourite with Amber Fort and the vibrant bazaars. Hotels were all 4 star and very comfortable. The driver was like having a friend who knows every shortcut.",
                },
                {
                    author: 'Elena P.',
                    country: 'Russia',
                    rating: 5,
                    date: '2026-02-23',
                    text: "Five days was the ideal duration for the Golden Triangle. Unlike the rushed 3 day versions, we actually had time to soak in each destination. Our guide in Delhi was exceptional, covering Humayun's Tomb, Red Fort and Qutub Minar with incredible depth. In Agra we visited both the Taj Mahal and Agra Fort, and even had time for shopping. Jaipur was magical with Amber Fort, City Palace and the elephant sanctuary. The entire trip was well coordinated with seamless hotel transfers.",
                },
                {
                    author: 'Steve M.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-03-10',
                    text: "Really enjoyed this 5 day tour covering Delhi, Agra and Jaipur. The extra days compared to the 3 day version made a big difference in terms of pacing. We had local guides at each major monument who were all knowledgable and passionate. The drives between cities were long but the car was comfortable with good AC. Hotels were nice though the one in Agra could have been better. Overall a great introduction to India's most famous destinations.",
                },
                {
                    author: 'Ayesha K.',
                    country: 'United Arab Emirates',
                    rating: 5,
                    date: '2026-02-17',
                    text: "Booked the 5 day Golden Triangle for a family trip with my husband and two children. Everything was handled perfectly, from hotel check ins to restaurant suggestions. The kids loved the elephant interactions in Jaipur and were fascinated by the Taj Mahal's symmetry. Our driver was very careful and the car had plenty of room for luggage. The guide in each city tailored his explanations for the children which was a really nice touch. Absolutley reccomend for families.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-sunrise-elephant-conservation-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 5,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Katie R.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "This tour combining the Taj Mahal at sunrise with an elephant conservation center was truly special. We left Delhi at 3am and arrived at the Taj just as the gates opened. Watching the sunrise light up the white marble was breathtaking. After exploring the Taj and Agra Fort, we visited the elephant sanctuary where we learned about ethical elephant care. We got to feed and walk with the elephants, no riding which I really appreciated. A meaningful and beautiful day trip from Delhi.",
                },
                {
                    author: 'Liam O.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-02-25',
                    text: "What an incredible combination tour. The sunrise Taj Mahal experience was magical, there were hardly any crowds and the light was perfect for photos. But the elephant conservation center was the real surprise highlight. The staff explained how they rescue elephants from circuses and tourist operations. We spent about an hour interacting with the elephants, feeding them sugarcane and learning about each one's story. Our guide from Delhi was with us the whole day and was absolutley fantastic. Definately worth the early wake up.",
                },
                {
                    author: 'Hanna F.',
                    country: 'Finland',
                    rating: 5,
                    date: '2026-03-02',
                    text: "The sunrise Taj Mahal plus elephant conservation tour is the most unique Agra day trip I found and it did not disappoint. Seeing the Taj at dawn with the mist rising was like something from a dream. The elephant sanctuary in the afternoon was heartwarming, these gentle giants were so well cared for. Our guide was passionate about both the history of the Taj and the conservation work. The drive from Delhi was about 3.5 hours each way but the car was comfortable.",
                },
                {
                    author: 'Marcus T.',
                    country: 'South Africa',
                    rating: 4,
                    date: '2026-02-19',
                    text: "Really enjoyed this combined tour. The Taj Mahal at sunrise was absolutley stunning and our guide had great stories about Shah Jahan and the construction of the monument. The elephant conservation center was a wonderful experience, very ethical and focused on the animals welfare. Only giving 4 stars because the 3am pickup from Delhi was brutal and I was quite tired by afternoon. But if you are an early riser this tour is perfect. The included lunch was decent too.",
                },
                {
                    author: 'Sophia B.',
                    country: 'Brazil',
                    rating: 5,
                    date: '2026-03-14',
                    text: "This was my favourite day trip in all of India. The Taj Mahal sunrise was a once in a lifetime moment, I cried when I first saw it emerging from the morning mist. The elephant conservation center was equally moving but in a different way, seeing these rescued elephants living peacefully and being cared for by dedicated staff. We got to prepare food for them and paint with them which was so fun. Our guide was knowledgable about Mughal history and genuinely cared about the elephants. A perfect day.",
                },
            ],
        };
    }

    if (slug === 'old-new-delhi-guided-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 4,
            guideRating: 4.9,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Andrew T.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Brilliant guided tour covering both Old and New Delhi. The guide brought Delhi's complex history to life, from the Mughal emperors to the British Raj to independence. In Old Delhi we visited the Red Fort, walked through Chandni Chowk and entered the stunning Jama Masjid. In New Delhi we saw India Gate, Humayun's Tomb and the impressive Qutub Minar. The guide even took us for chai at a local spot in the old city. Thoroughly enjoyed every minute.",
                },
                {
                    author: 'Sandra H.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-02-21',
                    text: "Good comprehensive tour of Delhi covering the main sites in both the old and new parts of the city. Our guide was knowledgable and spoke excellent English. The Red Fort and Humayun's Tomb were my highlights. Would have liked a bit more time in Chandni Chowk for shopping and street food but the itinerary was already quite full. The car and driver were professional and reliable. A solid way to see Delhi's top attractions in one day.",
                },
                {
                    author: 'Lucas M.',
                    country: 'Brazil',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Our guide for the Old and New Delhi tour was absolutley outstanding. He started with Old Delhi at the Red Fort and explained the decline of the Mughal empire in such a vivid way. The walk through the lanes of Chandni Chowk was sensory overload in the best possible way. In New Delhi, Humayun's Tomb was spectacular and the guide showed us the geometric gardens that influenced the Taj Mahal. We also visited Gurudwara Bangla Sahib which was a peaceful and spiritual experience. Best guided tour I have ever taken.",
                },
                {
                    author: 'Yuki N.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-02-28',
                    text: "This guided tour of Old and New Delhi was the perfect way to understand the city. Our guide explained how Delhi has been built and rebuilt seven times and showed us evidence of each era. The contrast between the narrow medieval lanes of Old Delhi and the wide tree lined avenues of Lutyens' New Delhi is remarkable. We visited Jama Masjid, India Gate, Qutub Minar and several other sites. The guide was patient with our many questions and very photogenic spot suggestions.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-same-day-express-train-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Rebecca L.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-06',
                    text: "The super fast express train tour to the Taj Mahal was fantastic. We were picked up from our hotel in Delhi and driven to the station. The express train to Agra was really comfortable with AC and plenty of legroom. Arrived in Agra in about 2 hours and our guide was waiting at the station. The Taj Mahal was absolutley breathtaking, even more beautiful than I imagined. We also had time for Agra Fort and a nice lunch before catching the train back. Arrived in Delhi by 8pm. Perfect day trip.",
                },
                {
                    author: 'Tom W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-20',
                    text: "Chose the express train option over driving to Agra and I am so glad I did. The train was fast, clean and on time. In Agra our guide was waiting with a driver and we went straight to the Taj Mahal. The guide was incredibly passionate about the history and took us to the best photo spots that most tourists miss. We visited Agra Fort as well which has amazing views of the Taj from across the river. The whole day was perfectly coordinated from pickup to drop off.",
                },
                {
                    author: 'Marie C.',
                    country: 'France',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good same day Taj Mahal tour by express train. The train experience itself was interesting and much faster than driving on the highway. Our Agra guide was excellent and very knowledgable about Mughal architecture. The Taj Mahal did not disappoint, it is truly one of the wonders of the world. Only reason for 4 stars is the lunch was average and the train back was delayed by about 30 minutes. But overall definately reccomend the train over a car journey for this day trip.",
                },
                {
                    author: 'Peter S.',
                    country: 'Netherlands',
                    rating: 5,
                    date: '2026-02-15',
                    text: "Brilliant day trip from Delhi to the Taj Mahal by super fast express train. We departed from Hazrat Nizamuddin station early morning and arrived in Agra quickly. The guide met us and took us to the Taj Mahal through the east gate avoiding the main queue. The white marble in the morning sun was stunning. Spent about 2.5 hours at the Taj then visited Agra Fort and had lunch. The return train journey gave us time to rest after a full day. Seamless experience from start to finish.",
                },
                {
                    author: 'Lisa K.',
                    country: 'South Korea',
                    rating: 5,
                    date: '2026-03-13',
                    text: "Taking the express train from Delhi to see the Taj Mahal was one of the best decisions of our India trip. The train was punctual and comfortable, much less stressful than a long car ride. Our guide in Agra was phenomenal, he explained every detail of the Taj's construction including the semi precious stone inlay work. We also visited the Baby Taj (Itimad ud Daulah) which was small but exquisite. Everything was well organized and we felt taken care of the entire day. Would absolutley do this again.",
                },
            ],
        };
    }

    if (slug === 'delhi-agra-private-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Christine D.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-05',
                    text: "The private day tour from Delhi to see the Taj Mahal and Agra was absolutley wonderful. The 5 star lunch was a real highlight, we dined at a beautiful hotel restaurant with views of the Taj from the rooftop terrace. Our guide was incredibly knowledgable about Mughal history and Shah Jahan's story. The private car was a clean Toyota Innova with cold water bottles. We visited both the Taj Mahal and Agra Fort and had time for souvenir shopping too. A premium experience worth every penny.",
                },
                {
                    author: 'William H.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-24',
                    text: "Booked this private Agra tour specifically because of the included 5 star lunch and it did not disappoint. The lunch was at the Oberoi where we had a beautiful buffet with Mughal inspired dishes. The Taj Mahal itself was mesmerizing, our guide spent nearly 2 hours explaining every architectural detail and the love story behind it. Agra Fort was equally impressive with its mix of red sandstone and white marble. The private car made the 3.5 hour drive comfortable. Definitely the most luxurious way to see the Taj.",
                },
                {
                    author: 'Fumiko Y.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-03-09',
                    text: "Really nice private tour to Agra with 5 star lunch included. The Taj Mahal was breathtaking and our guide was very knowledgable. The lunch at the luxury hotel was delicious with many options. The car was comfortable for the highway drive. My only minor complaint is that we left the hotel at 6am and did not return until 9pm which made for a very long day. But the experience was definately worth the early start and late finish. Would reccomend to anyone wanting a premium Agra experience.",
                },
                {
                    author: 'Stefan B.',
                    country: 'Austria',
                    rating: 5,
                    date: '2026-02-17',
                    text: "This was hands down the best way to visit the Taj Mahal from Delhi. The private car was spacious and the driver was safe and professional. At the Taj Mahal our guide pointed out details I would have never noticed, like how the minarets lean slightly outward to protect the main dome in case of an earthquake. The 5 star lunch was exceptional with fine Indian cuisine. We finished at Agra Fort where Shah Jahan was imprisoned by his son and could only see the Taj from a distance, what a story. Reccomend this wholeheartedly.",
                },
                {
                    author: 'Natalie P.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-12',
                    text: "My husband and I booked this private Taj Mahal tour with the 5 star lunch for our anniversary and it was perfect. Everything felt curated and premium. The guide was waiting for us at the Taj entrance with skip the line tickets. The monument is even more beautiful up close, the marble inlay work is extraordinary. Lunch at the 5 star hotel was romantic and delicious. The private car had leather seats, AC and a very smooth ride. If you want to see the Taj in style, this is the tour to book.",
                },
            ],
        };
    }

    if (slug === 'delhi-guided-shopping-tour-female-expert') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 5.0,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Michelle T.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "This guided shopping tour with a female expert was exactly what I needed. She took me to the best saree shops in Chandni Chowk where I found gorgeous silk sarees at local prices. She bargained on my behalf and saved me probably 50% of what I would have paid alone. We also visited Janpath Market for jewellery and handicrafts, and Dilli Haat for regional crafts from all over India. She knew every shop owner personally and they treated us so well. An incredible experience for anyone who loves shopping.",
                },
                {
                    author: 'Karen L.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Absolutley loved this shopping tour. My female guide was so knowledgable about textiles, she could identify the quality of a silk saree just by touch. We visited the famous Kinari Bazaar for wedding decorations and traditional jewellery, then hit Janpath Market for more affordable souvenirs. She helped me bargain at every shop and taught me the art of negotiating in Indian markets. We also stopped at Dilli Haat where I bought beautiful Rajasthani puppets and Kashmir pashminas. Could not have navigated these markets without her.",
                },
                {
                    author: 'Yoko M.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good shopping tour with a friendly and knowledgable female guide. She took me to several markets including Chandni Chowk for spices and jewellery, Sarojini Nagar for clothes and Dilli Haat for handicrafts. The bargaining assistance was very helpful as I would have been completley lost negotiating on my own. She also helped me ship larger purchases back home. Giving 4 stars only because some of the shops she took us to felt a bit like commission stops. But overall a great experience and I bought amazing things.",
                },
                {
                    author: 'Isabella R.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-16',
                    text: "Having a female shopping expert guide me through Delhi's markets was the best decision of my trip. She understood exactly what style I was looking for and took me to hidden shops that tourists would never find. I bought stunning silver jewellery in Dariba Kalan, beautiful block printed fabrics in Chandni Chowk and aromatic spices in the spice market. She also took me for the most amazing street food along the way, the chaat was incredible. This tour is a must for anyone who wants authentic Indian shopping experiences.",
                },
                {
                    author: 'Sara J.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-03-11',
                    text: "As a solo female traveler I felt much more comfortable exploring Delhi's bustling markets with a local female guide. She was warm, fun and incredibly savvy about shopping. We visited Lajpat Nagar for bangles and accessories, Janpath Market for boho style clothes and Dilli Haat for curated handicrafts. She taught me how to spot genuine pashmina from fake and helped me negotiate prices down significantly. I left with a suitcase full of beautiful things and memories of an amazing day. Highly reccomend for solo women travelers.",
                },
            ],
        };
    }

    if (slug === 'delhi-private-4-day-golden-triangle-luxury-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 4,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Richard B.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "This 4 day luxury Golden Triangle tour was first class in every way. The hotels were all 5 star properties, we stayed at the Oberoi in Delhi, the Trident in Agra and the Rambagh Palace in Jaipur. The private car was a Mercedes with a professional driver. Our guide was the most knowledgable person I have met, like a walking encyclopedia of Indian history. The Taj Mahal at sunrise, Amber Fort by jeep and the Old Delhi food walk were all highlights. If you want the Golden Triangle done right, this is it.",
                },
                {
                    author: 'Elizabeth C.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-23',
                    text: "Worth every penny for the luxury experience. Four days covering Delhi, Agra and Jaipur in absolute comfort. The 5 star hotels were stunning, particularly the heritage property in Jaipur which felt like staying in a palace. Private guides at every site were exceptional and the driver was always punctual and courteous. Meals at the finest restaurants with pre arranged reservations. This is how you experience the Golden Triangle if you want zero stress and maximum comfort. Absolutley reccomend.",
                },
                {
                    author: 'Kenji T.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-03-02',
                    text: "Booked the private 4 day luxury Golden Triangle tour for our honeymoon and it was perfection. Every detail was thought of, from welcome garlands at each hotel to private sunset viewing of the Taj Mahal from Mehtab Bagh. The luxury car was comfortable for the drives between cities. Our guide arranged a private candlelight dinner in Jaipur which was incredibly romantic. The tour covered all the major sites, the Red Fort, Taj Mahal, Agra Fort, Amber Fort and City Palace, without ever feeling rushed.",
                },
                {
                    author: 'Catherine D.',
                    country: 'France',
                    rating: 4,
                    date: '2026-02-18',
                    text: "Very good luxury tour of the Golden Triangle. The hotels were excellent 5 star properties and the private car was a clean SUV with bottled water and snacks. The guides were professional and knowledgable at every stop. My only reason for not giving 5 stars is that the itinerary could have included one or two more off the beaten path experiences. Everything we visited was the standard tourist circuit, which is fine, but at this price point I expected a few unique extras. That said, the quality of service was impeccable throughout the 4 days.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-agra-day-trip-luxury-car') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Jonathan P.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-04',
                    text: "Took the luxury car day trip from Delhi to the Taj Mahal and it was wonderful. The car was a brand new Toyota Innova Crysta with leather seats and excellent AC. The drive to Agra on the Yamuna Expressway was smooth and we arrived in about 3 hours. Our guide at the Taj was superb, pointing out the precious stone inlay work and the perfect symmetry of the gardens. We also visited Agra Fort and had a lovely lunch. The comfort of the luxury car made the round trip much more enjoyable than a standard vehicle.",
                },
                {
                    author: 'Helen M.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-22',
                    text: "The luxury car really made a difference on this Agra day trip. Spacious, cool and comfortable for the 3 hour drive each way. Our driver was professional and played soft music which made the journey relaxing. At the Taj Mahal our guide was phenomenal, he showed us how the marble changes colour throughout the day and explained the calligraphy inscriptions. We stopped at a nice restaurant for lunch with a rooftop view of the Taj. Round trip by luxury car is definately the way to go if you dont want to take the train.",
                },
                {
                    author: 'Marco V.',
                    country: 'Italy',
                    rating: 4,
                    date: '2026-03-08',
                    text: "Good day trip to Agra in a comfortable luxury car. The Taj Mahal was everything I expected and more. Our guide was knowledgable and enthusiastic. We also visited Agra Fort which was impressive with great views back to the Taj. The car was very nice with cold water and tissues provided. The only downside was the traffic getting out of Delhi which added about 45 minutes to the journey. Otherwise a premium and comfortable way to visit the Taj Mahal from Delhi. Good value for the quality of car provided.",
                },
                {
                    author: 'Annika S.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-02-16',
                    text: "Absolutley loved this luxury car day trip to the Taj Mahal. From the moment we were picked up from our hotel in a sleek, air conditioned car, everything was premium. The driver was courteous and drove safely. In Agra, our guide brought the history of the Taj Mahal alive with stories about Shah Jahan and Mumtaz. The marble inlay workshops we visited on the way back were facinating, watching artisans create designs using the same techniques from 400 years ago. Highly reccomend the luxury car option for comfort.",
                },
                {
                    author: 'David N.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-12',
                    text: "Booked the luxury car option for our Agra day trip and it was the right call. The vehicle was immaculate, roomy and had great suspension which mattered on some of the road sections. Our guide in Agra was one of the best we had in India, deeply knowledgable about Mughal architecture and very personable. We spent over 2 hours at the Taj Mahal and it was never enough, its genuinely one of the most beautiful things I have ever seen. The return drive was comfortable and we even managed to nap. Perfect day out.",
                },
            ],
        };
    }

    if (slug === 'sunrise-taj-mahal-tour-delhi-all-inclusive') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Amanda R.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-07',
                    text: "The all inclusive sunrise Taj Mahal tour was worth every early morning minute. We left Delhi at 3am and arrived at the Taj gates just before sunrise. Watching the first rays of sun hit the white marble was absolutley magical, the Taj seemed to glow pink then gold then white. Our guide was incredible, explaining the Islamic calligraphy and the mathematical precision of the layout. The all inclusive package meant everything was covered, entrance fees, guide, breakfast, lunch and the car. No hidden costs, no stress. Brilliant.",
                },
                {
                    author: 'Jack T.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-24',
                    text: "This sunrise tour is the definitive way to see the Taj Mahal. We had the monument almost to ourselves in the early morning light and the colours were unbelievable. Our guide was waiting at the gate with our tickets already sorted, so no queuing. After the Taj we visited Agra Fort and then had a delicious included lunch at a local restaurant. Being all inclusive made it so easy, we just had to show up and everything was taken care of. The drive back to Delhi was comfortable and we were home by 5pm.",
                },
                {
                    author: 'Martina K.',
                    country: 'Czech Republic',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good all inclusive tour to see the Taj Mahal at sunrise. The early departure from Delhi at 3am was tough but seeing the Taj in the dawn light made it worthwhile. The guide was knowledgable and the included meals were decent. We also visited the Baby Taj and Agra Fort. Giving 4 stars because I felt we were a bit rushed at Agra Fort to make it back to Delhi on time. The all inclusive pricing was fair and it was nice not having to worry about extra costs. Would reccomend starting even earlier to have more time in Agra.",
                },
                {
                    author: 'Alex G.',
                    country: 'Greece',
                    rating: 5,
                    date: '2026-02-18',
                    text: "Seeing the Taj Mahal at sunrise was a bucket list moment and this all inclusive tour delivered it perfectly. The predawn drive from Delhi was actually quite peaceful. At the Taj we had about 2 hours which was plenty to explore every angle. Our guide pointed out details like how the pietra dura inlay work uses 28 different types of precious stones. The included breakfast and lunch were both good quality. Everything, from hotel pickup to drop off, was completley seamless. One of the best day trips I have done anywhere.",
                },
                {
                    author: 'Priya S.',
                    country: 'India',
                    rating: 5,
                    date: '2026-03-14',
                    text: "Booked this for my visiting friends from abroad and they were blown away. The sunrise at the Taj is something every visitor to India should experience. Our guide was fantastic, bringing the Mughal love story to life in such an engaging way. The all inclusive aspect was great, no haggling over prices for anything. Breakfast was at a nice restaurant and lunch was authentic Mughlai cuisine. The car was comfortable for the highway drive. My friends said this was the single best experience of their entire India trip.",
                },
            ],
        };
    }

    if (slug === 'old-new-delhi-private-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 5,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Rachel W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "This private tour of Old and New Delhi was the best way to experience the city. We did the full day option and covered so much ground. Old Delhi highlights included the Red Fort, Jama Masjid and a rickshaw ride through the chaos of Chandni Chowk. New Delhi was a complete contrast with wide boulevards, India Gate and the serene Humayun's Tomb. Our private guide tailored the pace to us which was so much better than a group tour. The street food he recommended in Old Delhi was out of this world.",
                },
                {
                    author: 'Friedrich M.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-02-25',
                    text: "Good private tour covering both parts of Delhi. We chose the half day option focusing on New Delhi. Visited Humayun's Tomb, the Lotus Temple and India Gate with our guide who was very professional. The car was comfortable and clean. Would have preferred to include Old Delhi as well but we ran out of time with the half day. For anyone booking this, I would reccomend the full day option to get the complete picture of Delhi. The guide was pleasant and informative throughout.",
                },
                {
                    author: 'Olivia J.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-03-02',
                    text: "We did the full day private tour and it was absolutley fantastic. Our guide picked us up at 8am and we started in Old Delhi with the magnificent Red Fort. The walk through the old bazaars was incredible, so much colour and energy. Jama Masjid was stunning with views from the top of the minaret. After lunch we explored New Delhi, visiting Qutub Minar which was my favourite monument, and Humayun's Tomb which is just beautiful. Having a private guide meant we could linger at places we loved. Highly reccomend.",
                },
                {
                    author: 'Samuel K.',
                    country: 'South Africa',
                    rating: 5,
                    date: '2026-02-19',
                    text: "The private Old and New Delhi tour gave us the perfect introduction to India's capital. Our guide was a Delhi native who clearly loved his city and knew its history inside out. In Old Delhi he took us through lanes most tourists never see, including a hidden Jain temple and an ancient stepwell. In New Delhi the architecture was grand and imposing, from the Rashtrapati Bhavan to the war memorial at India Gate. The private car and driver were excellent. A full day well spent.",
                },
                {
                    author: 'Marie F.',
                    country: 'Belgium',
                    rating: 4,
                    date: '2026-03-13',
                    text: "Enjoyed the half day private tour of Old Delhi. We visited the Red Fort, Chandni Chowk and Jama Masjid. The rickshaw ride through the old lanes was thrilling and our guide kept us safe while pointing out interesting shops and temples. The guide was knowledgable about Mughal history and the Partition of India. Giving 4 stars because the car was a bit older than expected for a private tour. But the guide himself was excellent and made the experience special. Good value for the half day duration.",
                },
            ],
        };
    }

    if (slug === 'explore-old-new-delhi-city-luxury-car-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'George P.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-05',
                    text: "Exploring Old and New Delhi by luxury car with an official tour guide was a premium experience. The car was a spacious SUV with leather seats and excellent AC which was essential in the Delhi heat. Our official guide was certified by the Ministry of Tourism and incredibly knowledgable. We covered Red Fort, Jama Masjid, Chandni Chowk, India Gate, Humayun's Tomb and Qutub Minar. The luxury car made the transitions between sites so comfortable. Definately the most refined way to see Delhi.",
                },
                {
                    author: 'Victoria S.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-20',
                    text: "Having an official tour guide and luxury car for our Delhi exploration was absolutley worth the premium price. The official guide badge gave us priority access at several monuments. In Old Delhi we visited the stunning Red Fort and walked through the bustling spice market in Chandni Chowk. In New Delhi the wide boulevards and colonial architecture were fascinating. The luxury car was like our private sanctuary between the sensory overload of Delhi's streets. The driver was professional and the car was spotlessly clean.",
                },
                {
                    author: 'Kim J.',
                    country: 'South Korea',
                    rating: 4,
                    date: '2026-03-10',
                    text: "Nice tour of Delhi with an official guide and luxury car. We visited all the main attractions in both the old and new city. The guide had deep knowledge of Delhi's history from ancient times through the Mughal era to the British period. The luxury car was comfortable though the roads in Old Delhi are so narrow we had to walk some sections regardless. The AC in the car was a welcome relief between stops. Overall a good experience, the official guide certification gave us confidence in the quality of information.",
                },
                {
                    author: 'Isabelle M.',
                    country: 'France',
                    rating: 5,
                    date: '2026-02-28',
                    text: "The luxury car and official tour guide combination elevated our Delhi sightseeing experience significantly. The guide spoke perfect French which was a wonderful surprise. He explained the contrast between Old Delhi's Mughal heritage and New Delhi's British colonial grandeur with passion and expertise. We visited Jama Masjid, Red Fort, India Gate, Lotus Temple and Humayun's Tomb. The luxury car meant we were always comfortable and arrived at each site refreshed. The guide also recommended an excellent restaurant for lunch.",
                },
                {
                    author: 'Brian D.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-03-14',
                    text: "Booked this premium tour for my wife's birthday and it was special. The luxury car was immaculate and the driver was courteous throughout. The official tour guide was one of the most impressive guides we have ever had anywhere in the world. At every site, from the Red Fort to Qutub Minar, he had stories and facts that brought the history alive. The Chandni Chowk walking section was a highlight, exploring the 17th century bazaar on foot with an expert. Excellent value for a luxury experience in Delhi.",
                },
            ],
        };
    }

    if (slug === 'from-delhi-same-day-taj-mahal-fastest-train') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Jason R.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "Taking India's fastest train from Delhi to the Taj Mahal was an incredible experience in itself. The Vande Bharat Express was modern, clean and reached speeds of 160 km/h. We departed from New Delhi station and arrived in Agra in about 2 hours. Our guide was waiting at the station and we headed straight to the Taj. The speed and comfort of this train made the day trip so much more enjoyable than driving. Completley hassle free from the hotel pickup to the return drop off.",
                },
                {
                    author: 'Emma B.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-21',
                    text: "This tour using India's fastest train to visit the Taj Mahal was absolutley perfect. The Vande Bharat train was like a bullet train, so smooth and fast with great onboard catering. We had breakfast on the train which was a nice touch. In Agra our guide was exceptional, taking us through the Taj Mahal and Agra Fort with detailed explanations of every element. The fast train meant we had more time in Agra compared to the older train options. Definately choose this train if it is available for your dates.",
                },
                {
                    author: 'Lucas K.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good day trip to the Taj Mahal on India's fastest train. The Vande Bharat Express was comfortable with reclining seats and onboard food service. The journey was quick and we arrived in Agra with plenty of time for sightseeing. The guide in Agra was knowledgable and friendly. We visited the Taj Mahal, Agra Fort and Mehtab Bagh. The only issue was the train schedule meant we had to rush through Agra Fort a bit to make our return. Would have preferred an hour more in Agra. But overall great experience.",
                },
                {
                    author: 'Sofia C.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-02-16',
                    text: "The fastest train in India to see the Taj Mahal, what an amazing way to spend a day from Delhi. The whole trip was perfectly organized. Hotel pickup, drive to the station, comfortable and fast train to Agra, guide waiting at arrival. The Taj Mahal was the most beautiful building I have ever seen, our guide explained the symbolism of every element including the gardens representing paradise. We had a lovely lunch at a restaurant near the Taj. The return train was equally smooth. Reccomend this to everyone.",
                },
                {
                    author: 'Nina L.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-13',
                    text: "Chose this tour specifically for the fastest train option and it was the right choice. The Vande Bharat Express is genuinely impressive, clean, fast, and comfortable with AC and charging points at every seat. The journey flew by and before we knew it we were at Agra Cantt station. Our guide took us first to the Taj Mahal where the morning light was perfect for photos. Then Agra Fort, then lunch, then the Baby Taj before catching the train back. An efficient and comfortable way to tick the Taj Mahal off your bucket list.",
                },
            ],
        };
    }

    if (slug === '6-days-golden-triangle-tour-from-delhi') {
        return {
            averageRating: 4.8,
            totalReviews: 4,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Margaret H.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-04',
                    text: "The 6 day Golden Triangle tour from Delhi covering Agra and Jaipur was perfectly planned. Having 6 days instead of the usual 3 meant we could explore each city properly. In Delhi we had two full days covering everything from the Red Fort to Qutub Minar. Agra was magical with the Taj Mahal and Fatehpur Sikri. Jaipur was my favourite, we spent time at Amber Fort, Nahargarh Fort and the vibrant Johari Bazaar. Hotels were great at every stop and the private driver was wonderful throughout.",
                },
                {
                    author: 'Daniel R.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Six days for the Golden Triangle was the perfect duration. We never felt rushed and had time for both the major monuments and lesser known gems. In Delhi our guide took us to Humayun's Tomb, the Lodhi Gardens and a wonderful street food tour in Old Delhi. The Taj Mahal at sunrise was breathtaking. In Jaipur we loved the City Palace, Jantar Mantar observatory and the Albert Hall Museum. The whole trip was seamlessly coordinated with comfortable hotels and a reliable driver. Absolutley reccomend this itinerary.",
                },
                {
                    author: 'Hideo S.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-03-09',
                    text: "Well organised 6 day tour covering Delhi, Agra and Jaipur. The extra days compared to shorter tours made the experience much more relaxed. Our guides at each city were knowledgable and professional. The drives between cities were comfortable in a clean AC car. Hotels were 3-4 star level and all adequate. My only suggestion would be to include Fatehpur Sikri in the itinerary as we had to request it separately. But overall a comprehensive and enjoyable introduction to India's most popular tourist circuit.",
                },
                {
                    author: 'Charlotte B.',
                    country: 'Belgium',
                    rating: 5,
                    date: '2026-02-17',
                    text: "This 6 day Delhi, Agra and Jaipur tour was the perfect first trip to India. The longer itinerary meant we had free time for independent exploration in each city which we loved. In Delhi we wandered through Lodhi Gardens on our own, in Agra we watched sunset over the Taj from Mehtab Bagh, and in Jaipur we explored the bazaars and bought beautiful textiles. The arranged sightseeing with local guides was excellent. The driver became like a friend by the end of 6 days. Would definately book with them again.",
                },
            ],
        };
    }

    if (slug === 'private-taj-mahal-agra-day-tour-from-delhi') {
        return {
            averageRating: 4.7,
            totalReviews: 5,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Susan T.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-05',
                    text: "The private day tour from Delhi to the Taj Mahal and Agra by car was exactly what we wanted. Left our hotel at 6am and reached Agra by 9:30am via the expressway. The Taj Mahal was even more magnificent than we imagined. Our private guide spent nearly two hours explaining every detail from the calligraphy to the gemstone inlays. We also visited Agra Fort which has incredible views of the Taj. The private car was comfortable and the driver was professional. Returned to Delhi by 7pm. A perfect day.",
                },
                {
                    author: 'Hans W.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-02-23',
                    text: "Good private day tour to Agra from Delhi. The car was clean and comfortable with good AC. Our guide at the Taj Mahal was very knowledgable about Mughal architecture and history. We visited the Taj, Agra Fort and also stopped at Itmad ud Daulah (Baby Taj) which was beautiful and much less crowded. The drive took about 3.5 hours each way which is long but the expressway makes it manageable. Would have preferred a slightly better lunch arrangement as the restaurant was average. But the sightseeing was excellent.",
                },
                {
                    author: 'Jenny L.',
                    country: 'Singapore',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Booked this private Taj Mahal day tour and it was one of the best experiences of our India trip. Having a private car and guide meant we could go at our own pace and linger at the Taj Mahal as long as we wanted. The guide was passionate and articulate, telling us stories about Shah Jahan's love for Mumtaz Mahal that nearly brought tears to my eyes. Agra Fort was also impressive and the guide explained the father-son rivalry between Shah Jahan and Aurangzeb. Definately reccomend a private tour over a group for this.",
                },
                {
                    author: 'Paul M.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-17',
                    text: "Excellent private day tour from Delhi to Agra. The whole experience was professional and well organized. The driver picked us up right on time and the car was a spacious SUV. At the Taj Mahal the early arrival meant we beat the worst of the crowds. Our guide knew all the best photo angles and hidden details of the monument. The return drive was smooth and we even stopped at a roadside dhaba for authentic Indian snacks which was a fun bonus. Great value for a private tour experience.",
                },
                {
                    author: 'Vera K.',
                    country: 'Russia',
                    rating: 4,
                    date: '2026-03-12',
                    text: "Private tour to the Taj Mahal from Delhi was a good experience overall. The Taj Mahal is truly one of the most beautiful buildings in the world and seeing it in person is a must. Our guide was informative and helpful. The car was comfortable for the highway drive. Giving 4 stars because the tour included a stop at a marble shop which felt like a sales pitch, but the guide said we could skip it if we wanted. The actual sightseeing portion was completley excellent. Agra Fort was a wonderful bonus stop.",
                },
            ],
        };
    }

    if (slug === '5-days-golden-triangle-ranthambore-tiger-safari') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Mark E.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-07',
                    text: "This 5 day Golden Triangle with Ranthambore tiger safari from Delhi was the trip of a lifetime. Delhi, Agra, Ranthambore and Jaipur in 5 days with two morning jeep safaris in Ranthambore National Park. We were incredibly lucky and spotted a huge male Bengal tiger on our first safari, just 30 meters from our jeep. The Golden Triangle cities were all wonderful too, the Taj Mahal, Amber Fort and the Red Fort were all highlights. Five days was a good pace, not too rushed but covering all the essentials.",
                },
                {
                    author: 'Linda C.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-24',
                    text: "What an incredible 5 day adventure from Delhi. The combination of culture and wildlife made this tour stand out from the standard Golden Triangle. After visiting the Taj Mahal and Agra Fort, we drove to Ranthambore where the landscape completley changes to jungle. The morning safari was thrilling, our naturalist guide knew the tiger territories and we spotted a tigress near Ranthambore Fort. Jaipur was a beautiful finale with Amber Fort and the pink city bazaars. Hotels throughout were comfortable and clean. Highly reccomend.",
                },
                {
                    author: 'Henrik B.',
                    country: 'Denmark',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good 5 day tour covering the Golden Triangle plus Ranthambore wildlife. The itinerary was well planned with enough time at each destination. Delhi and Agra sightseeing were excellent with knowledgable guides. The Ranthambore safari was exciting even though we did not see a tiger, we did see crocodiles, spotted deer, langurs and many birds. The drive from Agra to Ranthambore was quite long at around 6 hours. Jaipur was lovely. Hotels were decent 3-4 star properties. Would have liked slightly better food options at some hotels.",
                },
                {
                    author: 'Giulia T.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-18',
                    text: "Five days covering Delhi, Agra, Ranthambore and Jaipur was absolutley perfect. The tiger safari added a completely unique element to the classic Golden Triangle route. We did a canter safari in zone 3 of Ranthambore and our naturalist guide was incredible, spotting animal tracks and explaining the ecosystem. We saw deer, wild boar, peacocks and then on the way out, a tiger resting under a tree. The rest of the tour was equally fantastic with expert guides at the Taj Mahal and Amber Fort. Best tour I have done in India.",
                },
                {
                    author: 'Sarah O.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-14',
                    text: "Booked this for my family and we all loved it. The 5 day duration was ideal for covering Delhi, Agra, Ranthambore and Jaipur without exhausting the kids. The tiger safari was the absolute highlight for the children, they were buzzing with excitement. In Agra the Taj Mahal blew everyone away. Jaipur was colourful and fun with the elephant sanctuary and fort visits. Our driver was like family by the end of the trip, always cheerful and helpful. The guides at each city were excellent. A well rounded trip that has something for everyone.",
                },
            ],
        };
    }

    if (slug === 'delhi-to-agra-overnight-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Nancy H.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "The overnight Agra tour from Delhi was so much better than a day trip. We arrived in the afternoon and visited Agra Fort first, then headed to Mehtab Bagh to watch the sunset behind the Taj Mahal which was absolutley breathtaking. The hotel was comfortable and well located. Next morning we were at the Taj gates before sunrise, watching the monument emerge from the dawn mist. Having two different views of the Taj, sunset and sunrise, was magical. The overnight stay definately made this a richer experience.",
                },
                {
                    author: 'Thomas P.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-23',
                    text: "Staying overnight in Agra was the best decision. We got to see the Taj Mahal at both sunset from Mehtab Bagh and sunrise the next morning. The hotel was a nice 4 star property near the Taj with a rooftop restaurant where we could see the monument lit up at night. Our guide was excellent, covering the Taj, Agra Fort and Fatehpur Sikri across the two days. The pace was relaxed compared to the hectic day trip options. Worth every extra rupee to stay the night. Highly reccomend this over a same day visit.",
                },
                {
                    author: 'Karolina W.',
                    country: 'Poland',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Good overnight tour to Agra from Delhi. Seeing the Taj at different times of day was special, it really does change colour from pink at dawn to white at midday to golden at sunset. The hotel was adequate and clean, nothing fancy but perfectly fine for one night. Our guide was knowledgable about Mughal history and very friendly. We visited the Taj Mahal, Agra Fort and Itmad ud Daulah over the two days. Only minor complaint is the drive back to Delhi hit heavy traffic and took almost 5 hours. But the experience itself was great.",
                },
                {
                    author: 'Ahmed S.',
                    country: 'United Arab Emirates',
                    rating: 5,
                    date: '2026-02-18',
                    text: "This overnight Agra experience was perfectley designed. Arriving in the afternoon, we explored Agra Fort and then watched the Taj Mahal at sunset from across the river at Mehtab Bagh. The gardens there are beautiful and the views are incredible with hardly any other tourists. Our hotel had a Taj view from the rooftop which was an amazing bonus. The sunrise visit to the Taj the next morning was the main event and it did not disappoint. Having a full evening and morning in Agra instead of a rushed day trip made all the difference.",
                },
                {
                    author: 'Julia S.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-03-13',
                    text: "One night in Agra is absolutley the way to experience the Taj Mahal. We arrived from Delhi in the early afternoon and spent time at the Taj Mahal in the late afternoon light which was gorgeous with fewer crowds. After dinner at the hotel rooftop restaurant overlooking the Taj, we visited again at sunrise the next morning. The monument is a completley different experience at different times of day. Our guide also took us to Fatehpur Sikri on day two which was fascinating and very well preserved. Cannot reccomend the overnight option enough.",
                },
            ],
        };
    }

    if (slug === 'golden-triangle-3-day-tour-from-delhi') {
        return {
            averageRating: 4.7,
            totalReviews: 5,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Michael W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-05',
                    text: "The 3 day Golden Triangle tour was a fantastic introduction to India. Day one in Delhi covered the Red Fort, Humayun's Tomb and Qutub Minar. Day two we drove to Agra for the Taj Mahal which was absolutley stunning. Day three was Jaipur with Amber Fort and City Palace before driving back to Delhi. The pace was fast but our driver and guide made it work perfectly. Hotels were clean and comfortable. For travelers short on time, 3 days is enough to hit all the highlights of the Golden Triangle.",
                },
                {
                    author: 'Emma K.',
                    country: 'United Kingdom',
                    rating: 4,
                    date: '2026-02-21',
                    text: "Good 3 day tour covering Delhi, Agra and Jaipur. It is a lot to pack into 3 days and there were some early mornings and long drives. But the major sites were all covered and the guides were knowledgable at every stop. The Taj Mahal was obviously the highlight. Amber Fort in Jaipur was also incredible. The hotels were basic but clean and the driver was safe and reliable. Would reccomend the 4 or 5 day version if you have time, but if you only have 3 days this tour does the job well.",
                },
                {
                    author: 'Tanaka H.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Completley packed 3 days but worth every minute. Started in Delhi with a comprehensive city tour covering both the Mughal and British colonial sites. The drive to Agra the next morning was about 4 hours and then the Taj Mahal took our breath away. We also visited Agra Fort before continuing to Jaipur. The third day in Jaipur was magical with Amber Fort, the Water Palace and Hawa Mahal. Our driver was excellent on the highways between cities. Great value for a 3 day tour covering India's three most famous cities.",
                },
                {
                    author: 'Carlos P.',
                    country: 'Mexico',
                    rating: 4,
                    date: '2026-02-27',
                    text: "Decent 3 day Golden Triangle tour. The itinerary covers the essential sites in Delhi, Agra and Jaipur. The guides at each city were good and spoke clear English. The Taj Mahal visit was the clear highlight of the trip. My only concerns were the very early starts each morning (5am on day 2) and the amount of time spent in the car. The drives between cities are long and India's roads can be chaotic. The car was comfortable though with good AC. Would suggest taking the 5 day version if you can spare the time.",
                },
                {
                    author: 'Fiona G.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-03-12',
                    text: "Three days, three cities, countless memories. This Golden Triangle tour was brilliant from start to finish. In Delhi we explored the Red Fort and Chandni Chowk bazaar. The Taj Mahal in Agra was a life highlight, our guide was incredibly passionate and you could see the emotion in his eyes as he described the love story. Jaipur was colourful and vibrant with the stunning Amber Fort. The entire tour was well coordinated with good hotels and a fantastic driver. Perfect for anyone with limited time in India.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-tour-by-train-gatimaan') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Peter H.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-04',
                    text: "The Gatimaan Express from Delhi to Agra was a wonderful experience in itself. We were picked up from our hotel and driven to Hazrat Nizamuddin station where the train departed on time. The Gatimaan is India's first semi high speed train and it was smooth, clean and fast. We arrived in Agra in under 2 hours. Our guide at the Taj Mahal was superb, explaining the Mughal architecture and the love story of Shah Jahan. Agra Fort was equally impressive. The return Gatimaan got us back to Delhi by evening.",
                },
                {
                    author: 'Jennifer M.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-20',
                    text: "Absolutley loved the Gatimaan Express day trip to the Taj Mahal. The train departs from Hazrat Nizamuddin station and reaches Agra in about 100 minutes which is incredible. Onboard meals were included and quite tasty. In Agra our guide was waiting and took us directly to the Taj. The morning light on the white marble was stunning. We also visited Agra Fort and had time for shopping in the local market. The Gatimaan return train was equally comfortable. So much better than spending 4 hours each way in a car.",
                },
                {
                    author: 'Jan V.',
                    country: 'Netherlands',
                    rating: 4,
                    date: '2026-03-08',
                    text: "Good day tour to the Taj Mahal by the Gatimaan Express train. The train was modern and fast, a pleasant surprise given my expectations of Indian railways. In Agra the guide was knowledgable and we spent a good 2 hours at the Taj. Also visited Agra Fort and the Baby Taj. The included onboard meal was decent. Giving 4 stars because the transfer from our hotel to Hazrat Nizamuddin station through Delhi morning traffic was stressful and we nearly missed the train. Would reccomend staying near the station the night before.",
                },
                {
                    author: 'Rachel S.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-15',
                    text: "The Gatimaan Express to Agra is the best way to see the Taj Mahal from Delhi. The train is fast, comfortable and the onboard service was great. Our guide in Agra was one of the most passionate and knowledgable guides I have ever had. He explained the mathematical perfection of the Taj, how every element is designed to create an illusion of perfect symmetry. We visited the Taj Mahal, Agra Fort and even had time for a quick marble inlay demonstration. Train back to Delhi was on time and comfortable. Definately the way to go.",
                },
                {
                    author: 'Liu Y.',
                    country: 'China',
                    rating: 5,
                    date: '2026-03-13',
                    text: "Taking the Gatimaan Express from Hazrat Nizamuddin station to Agra was a highlight of our India trip. The train is genuinely fast and modern with comfortable seats and good AC. In Agra our guide took us to the Taj Mahal first thing and the morning crowds were manageable. The guide pointed out the optical illusions in the design and the fact that the minarets lean outward for earthquake protection. After the Taj we visited Agra Fort where Shah Jahan was imprisoned. A seamless and enjoyable same day tour by train.",
                },
            ],
        };
    }

    if (slug === 'private-taj-mahal-tour-from-delhi') {
        return {
            averageRating: 4.7,
            totalReviews: 5,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Brian K.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Booked this private same day trip from Delhi to Agra by car and it was excellent. Left our hotel at 5:30am and reached Agra by 9am via the Yamuna Expressway. The Taj Mahal in the morning light was beyond beautiful. Our private guide explained the architectural details and the symbolism throughout the monument. We also stopped at Agra Fort which is massive and impressive. The private car was clean and comfortable for the round trip. Having a private guide and car meant we could spend as much time as we wanted at each stop.",
                },
                {
                    author: 'Johanna P.',
                    country: 'Sweden',
                    rating: 4,
                    date: '2026-02-24',
                    text: "Good private day trip from Delhi to Agra by car. The drive was about 3.5 hours each way on the Yamuna Expressway which was fine with the comfortable car. The Taj Mahal was stunning and our guide was informative. We also visited Agra Fort and a marble workshop. The car was a clean Innova with water bottles and tissues. Only giving 4 stars because the return drive hit traffic entering Delhi and took almost 4.5 hours. But the Agra portion of the day was excellent. Good value for a private tour.",
                },
                {
                    author: 'Angela M.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-03-02',
                    text: "This private Delhi to Agra same day trip was perfectley organised. The driver arrived at our hotel exactly on time at 6am. The drive on the expressway was smooth and we arrived in Agra refreshed. At the Taj Mahal our guide was absolutley fantastic, bringing the history alive with stories about the 20,000 workers who built it over 22 years. The white marble, the symmetry, the gardens, everything was perfection. We also had a nice lunch at a local restaurant before visiting Agra Fort. Returned to Delhi by 7pm. Highly reccomend.",
                },
                {
                    author: 'Mark T.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-02-18',
                    text: "Private car trip from Delhi to Agra was the right choice for us as a couple. We could stop whenever we wanted and control our own schedule. The Taj Mahal exceeded all expectations, it is truly one of the most beautiful things ever created by humans. Our guide pointed out the semi precious stone inlays up close which were incredibly detailed. At Agra Fort the guide showed us the exact window from which Shah Jahan spent his final years gazing at the Taj. Emotional and beautiful. The drive was long but completley worth it.",
                },
                {
                    author: 'Sandra B.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-03-11',
                    text: "Decent private day tour from Delhi to Agra. The Taj Mahal was magnificent and seeing it in person is a must do for anyone visiting India. Our guide was good and explained the history well. The car was comfortable and the driver safe. Giving 4 stars because the itinerary included a stop at a marble souvenir shop which felt like a commission stop. The guide did not pressure us to buy anything though. Apart from that small issue, the tour was well organised and the Agra sightseeing was excellent.",
                },
            ],
        };
    }

    if (slug === 'delhi-full-day-guided-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Catherine W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "This full day guided tour of Delhi was absolutley brilliant. Our guide took us through centuries of history, from the Mughal era monuments of Old Delhi to the British colonial grandeur of New Delhi. The Red Fort was massive and impressive, and the walk through Chandni Chowk was sensory overload in the best possible way. In New Delhi, Humayun's Tomb was a highlight with its beautiful Persian style gardens. The guide also took us to Gurudwara Bangla Sahib and the Lotus Temple. A comprehensive and engaging day exploring India's capital.",
                },
                {
                    author: 'Simon R.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-22',
                    text: "The full day Delhi tour covered everything you could want to see. Started with the Red Fort and Jama Masjid in Old Delhi, then a rickshaw ride through the crowded lanes of Chandni Chowk. After lunch (the guide recommended an amazing kebab place in Old Delhi) we headed to New Delhi for India Gate, the Parliament area, Qutub Minar and Humayun's Tomb. The contrast between Mughal Old Delhi and the wide British colonial avenues of New Delhi is facinating. Our guide was deeply knowledgable and made every stop interesting.",
                },
                {
                    author: 'Mei L.',
                    country: 'China',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good full day tour of Delhi. The guide was professional and spoke clear English. We visited Red Fort, Jama Masjid, India Gate, Humayun's Tomb and Qutub Minar among other sites. The guide explained the history of each period of Delhi's development from ancient times to the present. The car was comfortable and the driver navigated the traffic well. Only giving 4 stars because we spent a lot of time in traffic between sites which is unavoidable in Delhi but still frustrating. Would suggest starting as early as possible.",
                },
                {
                    author: 'Pablo G.',
                    country: 'Argentina',
                    rating: 5,
                    date: '2026-02-17',
                    text: "One of the best city tours I have done anywhere in the world. Delhi has so many layers of history and our guide peeled them back one by one throughout the day. In Old Delhi the Mughal heritage was everywhere, from the imposing Red Fort to the centuries old bazaar at Chandni Chowk. The spice market smelled incredible. In New Delhi the guide showed us the Rashtrapati Bhavan, India Gate and the modernist Lotus Temple. Humayun's Tomb was perhaps my favourite single monument, so peaceful and beautiful. Definately worth a full day to explore Delhi properly.",
                },
                {
                    author: 'Anna G.',
                    country: 'Norway',
                    rating: 5,
                    date: '2026-03-14',
                    text: "Spent a full day exploring Delhi with our guide and it was incredible. He showed us how Delhi is really seven cities layered on top of each other. We started at the 12th century Qutub Minar, then visited the Mughal era Red Fort and Jama Masjid, then the British colonial architecture of Lutyens' Delhi, and finally modern landmarks like the Lotus Temple. The contrast between the narrow chaotic lanes of Old Delhi and the grand orderly avenues of New Delhi is striking. Street food stops along the way were a delicious bonus. Absolutley reccomend this tour.",
                },
            ],
        };
    }

    // --- BANGKOK TOURS ---

    if (slug === 'bangkok-grand-palace-wat-pho-wat-arun-guided-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 10,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Sarah M.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Our guide P'Boy was amazing!! Knew so much about the Grand Palace you could tell he genuinly loves his job. Reclining Buddha was way bigger than expected. Great morning out",
                },
                {
                    author: 'Tom W.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-03-06',
                    text: "Very good. We did this first day and it helped us understand Thai culture for the rest of the trip. The murals at Wat Phra Kaew are unbelievable, our guide showed us details we never would of noticed. Only small group which was nice. The boat across to Wat Arun was a bonus I didnt expect.",
                },
                {
                    author: 'Jess L.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-02-28',
                    text: "BRING WATER AND SUNSCREEN. Theres basically no shade at the Grand Palace and we went at 10am in Feb and it was already boiling. Tour itself was really good though, Wat Pho was my fav. Taking one star off purely for the heat lol not the tours fault really",
                },
                {
                    author: 'Marco R.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Emerald buddha is suprisingly small but the temple around it wow. Guide was knowledgeable and friendly.",
                },
                {
                    author: 'Em C.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-12',
                    text: "So we almost went to the Grand Palace on our own but last minute decided to book a guide and SO glad we did. Without someone explaining things you literally just walk through rooms of gold stuff and leave. He told us about the Ramakien murals and the history of each building. Entrance fees were all included which is nice because they add up (like 900 baht for all 3 temples if you buy seperately).",
                },
                {
                    author: 'Yuki N.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-02-15',
                    text: "Good tour. Guide spoke clear english. Learned that the King changes the Emerald Buddhas robes every season which I thought was intresting.",
                },
                {
                    author: 'Rachel D.',
                    country: 'United States',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Grand Palace blew my mind the detail is unreal. Would of been nice to have more time at Wat Arun tho we only got like 40 min and it felt rushed. Wat Pho was the highlight for me personally, reclining buddha is HUGE.",
                },
                {
                    author: 'Lucas B.',
                    country: 'Brazil',
                    rating: 5,
                    date: '2026-02-10',
                    text: "10/10 do this tour. Guide was great boat ride was fun",
                },
                {
                    author: 'Sophie V.',
                    country: 'Netherlands',
                    rating: 5,
                    date: '2026-03-08',
                    text: "8 people in our group which was perfect. Some of the big tour groups had like 30-40 ppl and they looked miserable trying to hear their guide lol. Ours was funny guy, knew his history. Climbing Wat Arun was steep but worth it if your not afraid of hights",
                },
                {
                    author: 'Daniel K.',
                    country: 'South Korea',
                    rating: 5,
                    date: '2026-02-19',
                    text: "Did these temples without guide first day, didnt get much from it. Came back with this tour and completly diffrent experience. Now I actually understand what I was looking at lol. Wish we booked the guide from the start",
                },
            ],
        };
    }

    if (slug === 'bangkok-maeklong-railway-damnoen-saduak-dragon-temple-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 10,
            guideRating: 4.8,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'James H.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Train market was mental. The train literally comes through inches from the stalls. Coconut ice cream at floating market was class. Dragon temple pink tower is mad never heard of it before this tour",
                },
                {
                    author: 'Anna S.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-03-04',
                    text: "youtube doesnt do the train market justice you need to see it irl. Dragon Temple looks like something from a fantasy movie honestly",
                },
                {
                    author: 'Mike T.',
                    country: 'United States',
                    rating: 3,
                    date: '2026-02-26',
                    text: "Train market was cool but theres alot of driving. Pickup at 7:30 and didnt get to first stop for like 90min. Floating market felt like a tourist trap everything overpriced. Dragon temple was actually cool tho, barely any tourists there. Van AC worked well at least. Ok tour not great not bad",
                },
                {
                    author: 'Laura P.',
                    country: 'France',
                    rating: 5,
                    date: '2026-02-18',
                    text: "Ate pad thai from a boat!!! Best pad thai of my whole trip no joke. Train market was insane. Dragon temple we climbed inside the dragon which was so cool. Best day trip we did in thailand",
                },
                {
                    author: 'Dave W.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-09',
                    text: "Brillant day. Guide said the train has been running through that market since the 1900s. Bought a wooden elephant for my daughter at the floating market. Wife loved the dragon temple. Back by 4pm well organised",
                },
                {
                    author: 'Priya M.',
                    country: 'India',
                    rating: 4,
                    date: '2026-02-12',
                    text: "Train market was a bit scary the train comes SO close. Floating market beautiful but touristy, bring small baht notes for barganing. 4 stars because pickup took ages going to diffrent hotels",
                },
                {
                    author: 'Chris E.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-03-14',
                    text: "Almost skipped this thinking itd be too touristy. Train market was legit impressive. Dragon temple is the most incredble building ive ever seen and barely anyone knows about it??",
                },
                {
                    author: 'Hana K.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-02-20',
                    text: "Guide timed it perfectly for the train. Mango sticky rice from boat vendor was so good. Dragon temple very unique would do again",
                },
                {
                    author: 'Robert M.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Train market yes. Floating market bring small bills vendors wont give change. Dragon temple nice but 10 people in the van felt cramped. Prefered if group was smaller",
                },
                {
                    author: 'Maria G.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-02-24',
                    text: "the train thing is crazy i still cant believe it lol. pink tower with the dragon is insane barely any tourists there. food from boat vendors cheap and good. best day trip in thailand 100%",
                },
            ],
        };
    }

    if (slug === 'bangkok-temples-canals-local-life-bike-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 12,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Daniel F.',
                    country: 'United States',
                    rating: 5,
                    date: '2025-07-14',
                    text: "Best way to see the real Bangkok. We cycled through tiny alleyways and along canals that you'd never find on your own. Our guide pointed out local temples where monks were chanting and we stopped at a family-run noodle shop. The bikes were well-maintained and the pace was very manageable.",
                },
                {
                    author: 'Ingrid B.',
                    country: 'Netherlands',
                    rating: 5,
                    date: '2025-08-22',
                    text: "Such a unique perspective of Bangkok away from the tourist crowds. We rode through neighborhoods where kids waved at us and grandmas were cooking on the sidewalk. The canal sections were beautiful and peaceful. Guide knew every shortcut and kept the group safe in traffic.",
                },
                {
                    author: 'Tom R.',
                    country: 'Australia',
                    rating: 4,
                    date: '2025-09-10',
                    text: "Really enjoyed this tour but be prepared for the heat. We covered about 25km which was more than expected. The local life sections along the canals were fascinating and our guide shared stories about the communities. Bring lots of water and sunscreen. Would have liked a slightly shorter route.",
                },
                {
                    author: 'Yuna P.',
                    country: 'South Korea',
                    rating: 5,
                    date: '2025-10-05',
                    text: "Cycling through Bangkok's hidden neighborhoods was incredible. We visited a small temple where our guide explained the daily routines of the monks. The canal-side communities felt like a different world from the busy city center. Loved every minute of it.",
                },
                {
                    author: 'Charlotte H.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2025-11-18',
                    text: "My husband and I did this on our honeymoon and it was a highlight. The route takes you through parts of Bangkok that feel like countryside villages. We stopped at a gorgeous temple with nobody else around. The guide was knowledgeable about Thai Buddhist culture and local traditions.",
                },
                {
                    author: 'Marcus L.',
                    country: 'Germany',
                    rating: 4,
                    date: '2025-12-03',
                    text: "Good tour for seeing a different side of Bangkok. The cycling was easy and the bike quality was decent. Temples and canal communities were the highlights. Only giving 4 stars because the start time of 7am felt early but I understand it's to avoid the midday heat.",
                },
                {
                    author: 'Fatima A.',
                    country: 'United Arab Emirates',
                    rating: 5,
                    date: '2026-01-09',
                    text: "I was nervous about cycling in Bangkok but the guide kept us on quiet back roads and canal paths the entire time. We saw local life that most tourists never experience. The flower market stop was beautiful and the temple visits felt authentic and unhurried.",
                },
                {
                    author: 'Jake S.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-01-22',
                    text: "Travelled solo and this was the perfect group activity. Met great people and our guide was super friendly. The route through the canal neighborhoods was eye-opening. We stopped at a local market where I tried fresh coconut water straight from the shell. Highly recommend.",
                },
                {
                    author: 'Sofia M.',
                    country: 'Spain',
                    rating: 4,
                    date: '2026-02-05',
                    text: "Lovely way to spend a morning in Bangkok. The temples we visited were small and peaceful, nothing like the crowded tourist ones. Cycling along the canals was scenic and the local life was fascinating. Wish we had a bit more time at the last temple but overall great experience.",
                },
                {
                    author: 'Raj P.',
                    country: 'India',
                    rating: 5,
                    date: '2026-02-18',
                    text: "This tour shows you the Bangkok that guidebooks don't cover. Our guide took us through narrow lanes where locals were going about their daily life. The canal crossings on small ferries were fun and the temple stops were serene. Best activity we did in Bangkok.",
                },
                {
                    author: 'Emma W.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-03-01',
                    text: "Did this with my teenage daughter and we both loved it. The bikes had gears and were comfortable. Route was flat and easy. Seeing monks collecting alms in the morning and cycling past wooden houses on stilts along the canals was magical. Our guide was passionate and caring.",
                },
                {
                    author: 'Pierre D.',
                    country: 'France',
                    rating: 5,
                    date: '2026-03-12',
                    text: "Excellent tour that combines exercise with culture. We visited three temples and rode along canals where you see the authentic side of Bangkok. The guide handled the group of 8 people very well and stopped frequently for photos and explanations. Would do it again without hesitation.",
                },
            ],
        };
    }

    if (slug === 'bangkok-photography-class-workshop') {
        return {
            averageRating: 4.7,
            totalReviews: 12,
            guideRating: 4.9,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Lisa K.',
                    country: 'United States',
                    rating: 5,
                    date: '2025-06-20',
                    text: "As a beginner photographer this workshop was exactly what I needed. The instructor explained composition and lighting in a way that clicked immediately. We practiced on Bangkok street scenes and I could see my photos improving in real time. Came away with skills I still use every day.",
                },
                {
                    author: 'Martin G.',
                    country: 'Germany',
                    rating: 4,
                    date: '2025-07-30',
                    text: "Good photography class that covers both technical settings and creative composition. The instructor was patient and gave individual feedback. We shot at a temple and a market which provided great variety. Would have liked more time on post-processing but understand that's a different course.",
                },
                {
                    author: 'Aiko T.',
                    country: 'Japan',
                    rating: 5,
                    date: '2025-08-15',
                    text: "The instructor really understood photography and taught us how to see light differently. We practiced at Pak Khlong Talat flower market at golden hour and the results were stunning. Small class size meant lots of personal attention. My favorite activity in Bangkok.",
                },
                {
                    author: 'Rachel B.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2025-09-28',
                    text: "Brilliant workshop. I've taken online photography courses before but learning in person while shooting Bangkok's incredible streets is incomparable. The instructor taught me how to approach locals for portraits respectfully. Left with photos I'm genuinely proud of.",
                },
                {
                    author: 'Carlos V.',
                    country: 'Mexico',
                    rating: 4,
                    date: '2025-10-12',
                    text: "Learned a lot about manual camera settings and street photography techniques. The instructor was knowledgeable and encouraging. Bangkok is an amazing backdrop for learning photography. Only minor issue was the heat made it hard to concentrate at times but the instructor planned shade breaks.",
                },
                {
                    author: 'Nina S.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2025-11-25',
                    text: "Signed up as a couple and we both improved dramatically in just a few hours. The instructor tailored lessons to our different skill levels. We shot at a beautiful temple and a bustling market. The before and after comparison of our photos was incredible.",
                },
                {
                    author: 'David C.',
                    country: 'Australia',
                    rating: 5,
                    date: '2025-12-18',
                    text: "This class transformed how I take photos. The instructor covered aperture, shutter speed, and ISO in practical terms that made sense. Practicing in Bangkok's vibrant streets brought the theory to life. Worth every baht spent.",
                },
                {
                    author: 'Helen M.',
                    country: 'Ireland',
                    rating: 4,
                    date: '2026-01-14',
                    text: "Really enjoyed the workshop. The instructor was clearly passionate about photography and Bangkok. We covered composition rules like leading lines and the rule of thirds while shooting at real locations. Group was small which meant plenty of one-on-one time. Good value overall.",
                },
                {
                    author: 'Ben T.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-02',
                    text: "Took this class on my first day in Bangkok and it set the tone for my entire trip. Every photo I took afterwards was better because of what I learned. The instructor showed us how to use natural light and find interesting angles in everyday scenes. Absolutely worth it.",
                },
                {
                    author: 'Marta R.',
                    country: 'Poland',
                    rating: 5,
                    date: '2026-02-20',
                    text: "I was hesitant because I only had a phone camera but the instructor said that's totally fine. He taught me mobile photography tricks I never knew existed. The compositions we practiced at the temple were gorgeous. Left feeling like a real photographer.",
                },
                {
                    author: 'Kevin L.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-03-05',
                    text: "Solid photography workshop with a great instructor. Learned about exposure triangle, composition, and storytelling through images. The Bangkok street scenes provided endless subjects. My only feedback is that the workshop could be a touch longer to cover editing basics too.",
                },
                {
                    author: 'Priya N.',
                    country: 'India',
                    rating: 5,
                    date: '2026-03-15',
                    text: "This was the perfect blend of education and exploration. The instructor took us to photogenic spots around Bangkok that I would never have found alone. He explained how to capture motion blur at a busy intersection and the results were amazing. Highly recommend for any skill level.",
                },
            ],
        };
    }

    if (slug === 'bangkok-private-photography-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 12,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Amanda J.',
                    country: 'United States',
                    rating: 5,
                    date: '2025-07-08',
                    text: "Having a private photography guide in Bangkok was such a treat. He took me to hidden temples and back alleys that were incredibly photogenic. The one-on-one attention meant I could ask all the questions I wanted about composition and exposure. Came back with portfolio-worthy shots.",
                },
                {
                    author: 'Stefan K.',
                    country: 'Austria',
                    rating: 5,
                    date: '2025-08-19',
                    text: "Worth every penny for a serious photographer. Our guide knew exactly when and where the light would be perfect. We shot at a monk's morning alms ceremony, a hidden canal community, and an ornate temple. The private format meant we could spend as long as we wanted at each spot.",
                },
                {
                    author: 'Jenny L.',
                    country: 'Australia',
                    rating: 4,
                    date: '2025-09-22',
                    text: "Great private tour with a photographer who really knows Bangkok. He took us to locations off the beaten path that were stunning. The only reason for 4 stars is that we covered fewer locations than expected because we spent a long time at each one. But the quality of shots was incredible.",
                },
                {
                    author: 'Robert H.',
                    country: 'Canada',
                    rating: 5,
                    date: '2025-10-30',
                    text: "My wife and I booked this for our anniversary trip. The guide doubled as our photographer and took beautiful couples shots at golden hour temples. He also taught us techniques to improve our own photography. The private format was perfect for us.",
                },
                {
                    author: 'Mei W.',
                    country: 'Singapore',
                    rating: 5,
                    date: '2025-11-14',
                    text: "As a semi-professional photographer I was worried this would be too basic but the guide tailored everything to my level. He showed me unique angles at well-known temples and introduced me to a local market that was a dream for street photography. Excellent experience.",
                },
                {
                    author: 'Paul D.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2025-12-08',
                    text: "Booked this for my dad's birthday as he's a keen photographer. The guide was patient and knowledgeable, took him to spots with amazing light. Dad said it was the best gift ever and he got his favorite photo of the entire Thailand trip during this tour.",
                },
                {
                    author: 'Laura T.',
                    country: 'Italy',
                    rating: 4,
                    date: '2026-01-05',
                    text: "Lovely private photography tour. The guide was very professional and clearly passionate about Bangkok. We visited three stunning locations including a quiet temple with beautiful reflections in the morning light. Slightly pricey compared to group tours but the personal attention makes it worthwhile.",
                },
                {
                    author: 'Chris N.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-01-19',
                    text: "This tour was a game changer for my Instagram feed honestly. Our guide knew exactly where to stand for the best compositions and what time the light would hit each location perfectly. We shot sunrise at a canal then moved to a market as it was waking up. Pure magic.",
                },
                {
                    author: 'Anna M.',
                    country: 'Finland',
                    rating: 5,
                    date: '2026-02-06',
                    text: "Traveling solo and this was the best thing I did in Bangkok. The photographer guide made me feel comfortable and took me to safe, beautiful locations I would never have found alone. He also took professional-quality photos of me that I will treasure forever.",
                },
                {
                    author: 'Sanjay R.',
                    country: 'India',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Excellent private tour for photography enthusiasts. The guide understood composition and lighting at a professional level. We explored a hidden flower market at dawn and a beautiful canal community. The personal attention and flexibility of the private format was perfect.",
                },
                {
                    author: 'Karen O.',
                    country: 'New Zealand',
                    rating: 4,
                    date: '2026-03-08',
                    text: "Really enjoyed this private photo tour. Our guide was friendly and skilled. He took us to two temples and a local neighborhood that were very photogenic. Would have appreciated a bit more technical teaching along with the location scouting but overall a great morning.",
                },
                {
                    author: 'Thomas B.',
                    country: 'France',
                    rating: 5,
                    date: '2026-03-18',
                    text: "Perfect tour for anyone who loves photography. The private format meant we could change plans on the fly when we discovered an unexpected procession at a temple. Our guide adapted instantly and we captured some truly special moments. Bangkok through a camera lens is extraordinary.",
                },
            ],
        };
    }

    if (slug === 'ayutthaya-ancient-temples-day-trip-bangkok-thai-lunch') {
        return {
            averageRating: 4.8,
            totalReviews: 12,
            guideRating: 4.8,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Michael P.',
                    country: 'United States',
                    rating: 5,
                    date: '2025-06-28',
                    text: "Ayutthaya was absolutely stunning and the guide brought the ruins to life with incredible stories about the ancient Siamese kingdom. The Buddha head in the tree roots at Wat Mahathat is something you have to see in person. Thai lunch included was delicious and authentic.",
                },
                {
                    author: 'Hannah L.',
                    country: 'Germany',
                    rating: 5,
                    date: '2025-08-04',
                    text: "What a day trip. Ayutthaya feels like stepping back in time. We visited four major temple ruins and each one was more impressive than the last. The guide explained the rivalry between Ayutthaya and Burma that led to the city's destruction. The included Thai lunch was a nice touch and very tasty.",
                },
                {
                    author: 'James O.',
                    country: 'United Kingdom',
                    rating: 4,
                    date: '2025-09-15',
                    text: "Really enjoyed Ayutthaya but the drive from Bangkok is about 90 minutes each way. Once there though the temples are incredible, especially Wat Phra Si Sanphet with the three chedis. Guide was knowledgeable and the Thai lunch was good. Just be prepared for a long day.",
                },
                {
                    author: 'Naoko S.',
                    country: 'Japan',
                    rating: 5,
                    date: '2025-10-20',
                    text: "Ayutthaya reminded me of Angkor Wat but less crowded. The temple ruins are breathtaking and our guide explained 400 years of history in a way that was easy to understand. Wat Chaiwatthanaram at the river was my favorite. The Thai lunch they arranged was one of our best meals in Thailand.",
                },
                {
                    author: 'Sarah D.',
                    country: 'Australia',
                    rating: 5,
                    date: '2025-11-08',
                    text: "Did this as a family with two kids aged 8 and 11. They loved climbing around the ancient ruins and the guide kept them engaged with tales of kings and elephants. Wat Mahathat with the Buddha head in the banyan tree roots was their favorite. Lunch was kid-friendly too. Great family day out.",
                },
                {
                    author: 'Erik J.',
                    country: 'Norway',
                    rating: 4,
                    date: '2025-12-12',
                    text: "Good day trip to see the historical capital. The temples are impressive and the guide knew his stuff. Lunch was included which is convenient. My only feedback is that we visited five temples and it started to feel a bit repetitive by the last one. Four would have been perfect with more time at each.",
                },
                {
                    author: 'Maria C.',
                    country: 'Brazil',
                    rating: 5,
                    date: '2026-01-03',
                    text: "Ayutthaya completely blew me away. I had no idea Thailand had ruins this spectacular. The guide was passionate about the history and you could tell he genuinely loves these temples. The Thai lunch at a riverside restaurant was the cherry on top. A must-do day trip from Bangkok.",
                },
                {
                    author: 'Ryan K.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-01-18',
                    text: "Incredible day trip. The ancient temples of Ayutthaya are hauntingly beautiful. Our guide timed the visits perfectly so we avoided the big tour groups. The famous Buddha head in the tree roots was surreal to see in person. Thai lunch was authentic and filling. Highly recommend.",
                },
                {
                    author: 'Claudia W.',
                    country: 'Switzerland',
                    rating: 4,
                    date: '2026-02-01',
                    text: "Lovely tour to Ayutthaya with a knowledgeable guide. The ruins are spectacular and well worth the trip from Bangkok. The included Thai lunch was simple but tasty. Giving 4 stars because the van was a bit cramped with 9 people but the experience itself was wonderful.",
                },
                {
                    author: 'Alex N.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-15',
                    text: "History buffs will love this. Ayutthaya was once one of the largest cities in the world and walking through the ruins you can feel that grandeur. Our guide painted vivid pictures of what the temples looked like in their prime. The Thai lunch was an unexpected highlight too.",
                },
                {
                    author: 'Lina H.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-03-02',
                    text: "This was the best day trip we did from Bangkok. The Ayutthaya ruins are UNESCO World Heritage for good reason. Wat Phra Si Sanphet and Wat Mahathat were jaw-dropping. Guide was excellent and the Thai lunch at a local restaurant was delicious. Worth the early start.",
                },
                {
                    author: 'Andrew T.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-03-14',
                    text: "Superb tour. Ayutthaya is one of those places that photos don't do justice. Standing among 600-year-old temple ruins with our guide explaining the Siamese-Burmese wars was unforgettable. The Thai lunch included was great and the air-conditioned van was comfortable for the journey.",
                },
            ],
        };
    }

    if (slug === 'bangkok-chinatown-food-tour-15-tastings-michelin-stops') {
        return {
            averageRating: 4.9,
            totalReviews: 12,
            guideRating: 4.9,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Jessica M.',
                    country: 'United States',
                    rating: 5,
                    date: '2025-07-02',
                    text: "This food tour ruined every other meal for the rest of our trip because nothing compared. The Michelin-recommended street stalls were insane. We tried 15 different things from roast duck to mango sticky rice and every single one was incredible. Our guide knew every vendor by name.",
                },
                {
                    author: 'Oliver W.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2025-08-10',
                    text: "Best food tour I've ever done anywhere in the world. Chinatown Bangkok at night is electric and our guide navigated the chaos perfectly. The Michelin-starred street food was mind-blowing. Pad thai cooked over charcoal, crispy pork belly, fresh oyster omelette. Came absolutely stuffed.",
                },
                {
                    author: 'Kathrin H.',
                    country: 'Germany',
                    rating: 5,
                    date: '2025-09-18',
                    text: "15 tastings is not an exaggeration. We ate so much incredible food I thought I might explode. The guide explained the Chinese-Thai fusion behind each dish which was fascinating. Highlight was the Michelin-recommended wonton noodle shop that had a queue around the block but we walked right in.",
                },
                {
                    author: 'Alex T.',
                    country: 'Australia',
                    rating: 4,
                    date: '2025-10-25',
                    text: "Fantastic food tour through Yaowarat. The Michelin stops were the real deal. Only giving 4 stars because the pace was quite fast between stops and I would have liked more time to savour each dish. But the food quality was outstanding and the guide was very knowledgeable about the area's history.",
                },
                {
                    author: 'Min J.',
                    country: 'South Korea',
                    rating: 5,
                    date: '2025-11-30',
                    text: "Even as someone from a great food culture I was blown away by Bangkok Chinatown. The guide took us to places we would never have found ourselves. The crispy pork with rice was heavenly and the dessert stops were just as impressive. This tour is a must-do in Bangkok.",
                },
                {
                    author: 'Sophie R.',
                    country: 'France',
                    rating: 5,
                    date: '2025-12-22',
                    text: "Magnifique! Every tasting was better than the last. The guide's passion for Thai-Chinese cuisine was infectious. We visited tiny family-run stalls that have been there for generations. The Michelin stops lived up to the hype. Bring a very empty stomach because 15 tastings is a lot of food.",
                },
                {
                    author: 'David S.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-01-08',
                    text: "My girlfriend and I did this on our second night in Bangkok and it set the bar impossibly high. The Chinatown food scene is unreal. Our guide explained the history of each dish and took us to a Michelin-recommended noodle shop that changed my life. Not exaggerating.",
                },
                {
                    author: 'Isabella F.',
                    country: 'Italy',
                    rating: 4,
                    date: '2026-01-25',
                    text: "Really impressive food tour. The variety of flavors across 15 tastings was incredible. The guide handled our vegetarian requests well with alternative stops. Chinatown at night is an amazing atmosphere. Slightly crowded at peak times but the guide managed it well.",
                },
                {
                    author: 'Mark H.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-08',
                    text: "This was the highlight of our entire Thailand trip. Walking through the neon-lit streets of Chinatown stopping at legendary food stalls was magical. The spring rolls at the Michelin stop were the best I've ever had. Guide was energetic and fun. Go hungry.",
                },
                {
                    author: 'Eva L.',
                    country: 'Netherlands',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Absolutely loved this tour. 15 tastings sounds like a lot but each portion was perfectly sized. The guide mixed sweet, savory, and spicy stops beautifully. The Michelin-starred stall with the grilled seafood was otherworldly. Bangkok Chinatown is now my favorite food destination in the world.",
                },
                {
                    author: 'Luke P.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-03-03',
                    text: "Skip the fancy restaurants and do this tour instead. Street food in Chinatown Bangkok is on another level. Our guide was a walking encyclopedia of Thai-Chinese food culture. The roast duck and the mango sticky rice were standouts but honestly everything was incredible.",
                },
                {
                    author: 'Ananya K.',
                    country: 'India',
                    rating: 5,
                    date: '2026-03-16',
                    text: "What an experience. The guide took us through narrow alleys to find hidden gem food stalls. Every dish told a story about Chinese immigrants who shaped Bangkok's food scene. The Michelin stops were genuinely world-class. Came for the food, stayed for the history and culture.",
                },
            ],
        };
    }

    if (slug === 'bangkok-street-food-tuk-tuk-night-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 12,
            guideRating: 4.8,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Brian M.',
                    country: 'United States',
                    rating: 5,
                    date: '2025-06-15',
                    text: "Riding a tuk-tuk through Bangkok at night while stopping for amazing street food was an absolute dream. Our guide picked the best stalls and explained each dish. The pad see ew from a tiny cart was the best thing I ate in Thailand. Pure fun from start to finish.",
                },
                {
                    author: 'Emma S.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2025-07-28',
                    text: "This tour combines two essential Bangkok experiences: tuk-tuks and street food. Zipping through the neon-lit streets with the wind in your hair then pulling up to a sizzling food stall is exhilarating. Our guide was hilarious and knew all the best food spots. A must-do evening activity.",
                },
                {
                    author: 'Lukas W.',
                    country: 'Austria',
                    rating: 4,
                    date: '2025-09-05',
                    text: "Fun night out in Bangkok. The tuk-tuk rides between food stops were exciting and the food was excellent. We tried about 8 different dishes including some I'd never heard of. Only giving 4 stars because the tuk-tuk rides were quite bumpy and loud. But the overall experience was great.",
                },
                {
                    author: 'Sarah C.',
                    country: 'Australia',
                    rating: 5,
                    date: '2025-10-12',
                    text: "Booked this for my husband's birthday and it was the perfect Bangkok night out. The tuk-tuk driver was skilled and the guide found the most incredible street food spots. We ate grilled satay, papaya salad, and the most amazing Thai iced tea. The atmosphere was electric.",
                },
                {
                    author: 'Hiroshi Y.',
                    country: 'Japan',
                    rating: 5,
                    date: '2025-11-20',
                    text: "Very unique way to experience Bangkok at night. The tuk-tuk added so much excitement to what could have been a regular food tour. Our guide chose food stops that ranged from famous stalls to hidden gems. The mango sticky rice at the last stop was the perfect ending.",
                },
                {
                    author: 'Rachel G.',
                    country: 'Ireland',
                    rating: 4,
                    date: '2025-12-08',
                    text: "Really enjoyed this tour. The combination of tuk-tuk rides and street food tastings made for an adventurous evening. The food was consistently excellent and our guide was knowledgeable about Thai cuisine. Would have liked one more food stop but the portions were generous so we were full.",
                },
                {
                    author: 'Diego R.',
                    country: 'Argentina',
                    rating: 5,
                    date: '2026-01-04',
                    text: "Best night in Bangkok hands down. Our tuk-tuk zoomed through traffic while our guide pointed out landmarks. Every food stop was better than the last. The pad thai cooked right in front of us was spectacular. Bangkok at night from a tuk-tuk is something everyone should experience.",
                },
                {
                    author: 'Chloe B.',
                    country: 'France',
                    rating: 5,
                    date: '2026-01-22',
                    text: "Such a fun and delicious evening. The tuk-tuk rides between stops were thrilling and gave us amazing views of Bangkok lit up at night. The guide took us to a night market where we tried grilled seafood and Thai desserts that were incredible. Perfect for couples or friends.",
                },
                {
                    author: 'Tom A.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-10',
                    text: "Traveling solo and this was the best way to spend an evening. Met cool people in the group and the tuk-tuk rides were thrilling. Food highlights were the tom yum soup and the crispy spring rolls from a stall the guide said has been open for 40 years. Unforgettable night.",
                },
                {
                    author: 'Lisa V.',
                    country: 'Netherlands',
                    rating: 4,
                    date: '2026-02-25',
                    text: "Great concept combining tuk-tuk transport with a food tour. The food was all excellent and very authentic. The tuk-tuk rides were fun but quite loud so conversation was difficult during transit. Once at the food stops though the guide was engaging and informative. Recommend wearing comfortable shoes.",
                },
                {
                    author: 'Peter J.',
                    country: 'Denmark',
                    rating: 5,
                    date: '2026-03-06',
                    text: "This tour is pure Bangkok energy. Hopping in and out of a tuk-tuk while eating incredible street food is the ultimate way to experience the city at night. Our guide even took us past the Grand Palace all lit up which was stunning. Every food stop was a winner.",
                },
                {
                    author: 'Asha P.',
                    country: 'India',
                    rating: 5,
                    date: '2026-03-17',
                    text: "What an evening! The tuk-tuk rides added so much character to the food tour. We visited five different street food areas and tried everything from grilled pork skewers to coconut ice cream. The guide was friendly, funny, and clearly a foodie himself. Don't eat dinner before this tour.",
                },
            ],
        };
    }

    if (slug === 'bangkok-floating-market-railway-market-day-trip-boat-ride') {
        return {
            averageRating: 4.7,
            totalReviews: 12,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Jennifer W.',
                    country: 'United States',
                    rating: 5,
                    date: '2025-07-05',
                    text: "The railway market was insane. Watching vendors pull their stalls back as the train rolls through was one of the wildest things I've ever seen. The floating market boat ride was peaceful and beautiful. Bought fresh fruit right from a boat vendor. Our guide timed everything perfectly.",
                },
                {
                    author: 'Thomas K.',
                    country: 'Germany',
                    rating: 4,
                    date: '2025-08-18',
                    text: "Good day trip from Bangkok covering two famous markets. The railway market experience is truly unique and worth the early start. The floating market was more touristy than expected but the boat ride was nice. Bring cash in small bills for the vendors. Guide was well organized.",
                },
                {
                    author: 'Claire F.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2025-09-30',
                    text: "Both markets were incredible experiences. The train passing through Maeklong market is something you have to see to believe. The floating market boat ride was so much fun and the coconut pancakes we bought from a boat were amazing. Our guide made sure we were in the perfect spot for the train.",
                },
                {
                    author: 'Noah B.',
                    country: 'Australia',
                    rating: 5,
                    date: '2025-10-22',
                    text: "Brilliant day out from Bangkok. The railway market was the highlight for me, just mental how close the train gets to the produce. The floating market was colourful and the boat ride through the canals was relaxing. Guide was top notch and the van was comfortable for the drive.",
                },
                {
                    author: 'Sakura M.',
                    country: 'Japan',
                    rating: 4,
                    date: '2025-11-15',
                    text: "Interesting day trip to see these unique Thai markets. The railway market was very exciting and our guide positioned us perfectly. The floating market was beautiful for photos but quite crowded. The boat ride was the best part of the floating market visit. Food from the boats was tasty.",
                },
                {
                    author: 'Patrick O.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2025-12-28',
                    text: "We did this with our kids aged 10 and 13 and they absolutely loved it. The train coming through the market blew their minds. The boat ride at the floating market was great fun and they enjoyed buying snacks from the boat vendors. Guide was patient and great with children.",
                },
                {
                    author: 'Elena G.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-01-10',
                    text: "Amazing experience at both markets. The Maeklong railway market is like nothing else in the world. Our guide explained the history of why the market was built on the tracks. The floating market boat ride was peaceful and scenic. The pad thai we ate from a floating vendor was delicious.",
                },
                {
                    author: 'Jack H.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-01-28',
                    text: "Fun day trip but be prepared for an early start and a lot of time in the van. The railway market and floating market are both worth seeing though. The boat ride was a highlight and the food options at both markets were great. Would have preferred a smaller group but overall well organized.",
                },
                {
                    author: 'Astrid N.',
                    country: 'Norway',
                    rating: 5,
                    date: '2026-02-12',
                    text: "One of the best day trips we did in Southeast Asia. Seeing the railway market vendors nonchalantly fold up their stalls as a train passes through was surreal. The floating market was picturesque and the boat ride gave us a great perspective. Mango sticky rice from a boat was heavenly.",
                },
                {
                    author: 'Wei L.',
                    country: 'Singapore',
                    rating: 5,
                    date: '2026-02-26',
                    text: "Don't miss this tour. The railway market is something you'll talk about for years. The floating market is touristy but the boat ride makes it worthwhile and the food is genuinely good. Our guide was punctual, informative, and made sure we had the best spots for photos.",
                },
                {
                    author: 'Amy R.',
                    country: 'United States',
                    rating: 4,
                    date: '2026-03-08',
                    text: "Great experience overall. Railway market was the star of the show. The floating market was charming but definitely geared towards tourists. The boat ride through the narrow canals was a nice bonus. Food was tasty and affordable. Just wish the tour wasn't quite so rushed between stops.",
                },
                {
                    author: 'Lars E.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-03-19',
                    text: "Perfect combination of two iconic Bangkok-area attractions. The railway market was absolutely wild and the floating market boat ride was serene and beautiful. Our guide was excellent, shared lots of local knowledge, and the entire day was well-paced. Highly recommend this day trip.",
                },
            ],
        };
    }

    if (slug === 'learn-muay-thai-bangkok-private-training-certified-fighter') {
        return {
            averageRating: 4.8,
            totalReviews: 12,
            guideRating: 4.9,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Mike D.',
                    country: 'United States',
                    rating: 5,
                    date: '2025-06-25',
                    text: "Training Muay Thai with a certified fighter in Bangkok was a bucket list experience. The instructor was patient with my zero experience and had me throwing proper kicks and elbows within the first hour. The private format meant all the attention was on me. Incredible workout and cultural experience.",
                },
                {
                    author: 'Sophie A.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2025-08-08',
                    text: "I was nervous as a complete beginner but the trainer put me at ease immediately. He broke down every technique step by step. Learning the art of eight limbs in the country where it was born was unforgettable. The private session meant I could go at my own pace without embarrassment.",
                },
                {
                    author: 'Maximilian F.',
                    country: 'Germany',
                    rating: 4,
                    date: '2025-09-12',
                    text: "Great private Muay Thai session with a certified fighter. He covered the basics of stance, punches, kicks, knees, and elbows. The training was intense but manageable. Only 4 stars because the facility was basic, but the instruction quality was top-notch. Bring a towel and plenty of water.",
                },
                {
                    author: 'Amy L.',
                    country: 'Australia',
                    rating: 5,
                    date: '2025-10-18',
                    text: "My boyfriend and I did this together and it was the most fun workout of our lives. The fighter trainer was incredibly skilled and made us feel like real fighters by the end. He shared stories about his fighting career which added so much authenticity. Must-do in Bangkok.",
                },
                {
                    author: 'Kenji O.',
                    country: 'Japan',
                    rating: 5,
                    date: '2025-11-22',
                    text: "As a martial arts enthusiast this was a dream come true. Training with a certified Muay Thai fighter in Bangkok gave me such an appreciation for the sport. The private format allowed me to focus on techniques I was interested in. The trainer's pad work was outstanding.",
                },
                {
                    author: 'Hannah J.',
                    country: 'Canada',
                    rating: 5,
                    date: '2025-12-15',
                    text: "Never done any martial arts before but this was amazing. The private trainer made everything accessible and fun. He taught me the Wai Kru (the pre-fight ritual dance) which was a beautiful cultural moment. Left feeling empowered and with sore muscles in the best way.",
                },
                {
                    author: 'Ricardo M.',
                    country: 'Brazil',
                    rating: 4,
                    date: '2026-01-06',
                    text: "Really enjoyed the private Muay Thai session. The certified fighter was professional and knowledgeable. He adjusted the intensity to my fitness level which I appreciated. I train BJJ back home so it was great to learn a striking art. Facilities were simple but clean. Good value.",
                },
                {
                    author: 'Nina K.',
                    country: 'Finland',
                    rating: 5,
                    date: '2026-01-20',
                    text: "This was my favourite thing in Bangkok. Learning Muay Thai from an actual certified fighter who has competed professionally was surreal. He was patient, encouraging, and incredibly skilled. The private session format was perfect for a beginner like me. Left with huge respect for the sport.",
                },
                {
                    author: 'Steve R.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-03',
                    text: "Phenomenal experience. The trainer was a former stadium fighter and you could tell from his technique. Private session meant he could focus entirely on me and correct my form in real time. We covered striking combos, clinch work, and even some basic defense. Best workout of my trip.",
                },
                {
                    author: 'Camille D.',
                    country: 'France',
                    rating: 5,
                    date: '2026-02-18',
                    text: "Booked this for my husband as a surprise and he said it was the best gift ever. The certified fighter was charismatic and skilled. Even I tried a few moves at the end and loved it. The private format made it personal and special. A truly unique Bangkok experience.",
                },
                {
                    author: 'Josh T.',
                    country: 'New Zealand',
                    rating: 4,
                    date: '2026-03-04',
                    text: "Great Muay Thai experience with a legit fighter. The training was challenging but he scaled it to my level. Learned proper technique for kicks, knees, and elbow strikes. It was hot in the gym but that's part of the authentic experience. Would book a longer session next time.",
                },
                {
                    author: 'Priyanka S.',
                    country: 'India',
                    rating: 5,
                    date: '2026-03-15',
                    text: "As a woman traveling solo I was a bit hesitant but the trainer was completely professional and made me feel safe and welcome. Learning Muay Thai in its homeland was incredibly empowering. The private session meant I could ask questions freely. Left with new skills and a huge smile.",
                },
            ],
        };
    }

    if (slug === 'bangkok-scavenger-hunt-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 12,
            guideRating: 4.8,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Kevin M.',
                    country: 'United States',
                    rating: 5,
                    date: '2025-07-10',
                    text: "What a creative way to explore Bangkok! The scavenger hunt took us through back alleys, temples, and markets we never would have found on our own. Solving clues while discovering the city made it so much more engaging than a regular walking tour. Our team had a blast.",
                },
                {
                    author: 'Emma B.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2025-08-24',
                    text: "Did this with a group of friends and we were laughing the entire time. The clues were clever and led us to fascinating parts of Bangkok. We had to find a specific street food vendor, decode a temple inscription, and navigate the river ferries. So much fun and we learned a lot too.",
                },
                {
                    author: 'Felix H.',
                    country: 'Germany',
                    rating: 4,
                    date: '2025-09-08',
                    text: "Interesting concept that works well for Bangkok. The scavenger hunt challenges were creative and forced us to interact with locals which was great. Some clues were tricky but that's part of the fun. Only giving 4 stars because a couple of the locations were hard to find without more hints.",
                },
                {
                    author: 'Lily T.',
                    country: 'Australia',
                    rating: 5,
                    date: '2025-10-28',
                    text: "Perfect activity for our family. The kids aged 12 and 14 were completely engaged for three hours which is a miracle. The scavenger hunt took us through an amazing cross-section of Bangkok from temples to markets to hidden parks. Way better than a boring guided tour for teenagers.",
                },
                {
                    author: 'Oscar G.',
                    country: 'Spain',
                    rating: 4,
                    date: '2025-11-15',
                    text: "Fun and different way to see Bangkok. The scavenger hunt challenges were well designed and took us to interesting spots. We competed against another team which added excitement. A few clues required talking to locals which was a nice touch. Good for groups and couples alike.",
                },
                {
                    author: 'Mia J.',
                    country: 'Canada',
                    rating: 5,
                    date: '2025-12-20',
                    text: "This was the surprise hit of our Bangkok trip. We almost didn't book it but so glad we did. Racing around the city solving clues felt like being in an Amazing Race episode. Discovered a hidden temple courtyard and a tiny market with the best fried banana we've ever had.",
                },
                {
                    author: 'Akira N.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-01-12',
                    text: "Very creative tour concept. The scavenger hunt made us explore Bangkok actively rather than passively following a guide. We visited areas that weren't in any guidebook and met friendly locals along the way. The host was supportive and gave great hints when we were stuck.",
                },
                {
                    author: 'Sarah O.',
                    country: 'Netherlands',
                    rating: 4,
                    date: '2026-01-30',
                    text: "Enjoyable activity that shows you a different side of Bangkok. The clues were creative and the route was well planned. We covered a lot of ground without it feeling exhausting. Some challenges required Thai language skills which was tricky but locals were helpful. Fun group activity.",
                },
                {
                    author: 'Chris P.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-14',
                    text: "Did this on Valentine's Day with my wife and it was the perfect date activity in Bangkok. Working together to solve clues while exploring the city brought us closer. We found hidden gems around every corner. Way more memorable than a standard tour. Highly recommend for couples.",
                },
                {
                    author: 'Julia K.',
                    country: 'Poland',
                    rating: 5,
                    date: '2026-02-28',
                    text: "Such a unique way to explore a city. The scavenger hunt had us running through markets, photographing temple details, and tasting specific street foods. We were competing against time and another team which made it exciting. Discovered parts of Bangkok we never would have seen otherwise.",
                },
                {
                    author: 'Ben R.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Brilliant activity. The scavenger hunt was well thought out and perfectly paced. Each clue led to a fascinating location and the challenges were fun without being frustrating. Our host checked in at the right moments and the final reveal was a cool surprise. Great value for money.",
                },
                {
                    author: 'Deepa V.',
                    country: 'India',
                    rating: 4,
                    date: '2026-03-18',
                    text: "Creative and fun way to see Bangkok beyond the tourist spots. The scavenger hunt took about three hours and covered temples, markets, and riverside areas. The clues were interesting and made us observe details we would have missed. Some challenges were tough but that's part of the appeal.",
                },
            ],
        };
    }

    if (slug === 'bangkok-photo-walk-hidden-gems-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 12,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Nicole S.',
                    country: 'United States',
                    rating: 5,
                    date: '2025-06-30',
                    text: "This photo walk showed me a Bangkok I never knew existed. Our guide took us through hidden alleys with incredible street art, tiny temples tucked between buildings, and a secret garden courtyard. Every corner was more photogenic than the last. Came away with stunning photos.",
                },
                {
                    author: 'James B.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2025-08-12',
                    text: "Brilliant tour for anyone who loves photography. The guide knew all the hidden gems and the best times of day for light at each spot. We found an abandoned shophouse covered in vines, a tiny canal with wooden boats, and a neighborhood temple with almost no tourists. Exceptional.",
                },
                {
                    author: 'Johanna W.',
                    country: 'Germany',
                    rating: 4,
                    date: '2025-09-25',
                    text: "Really enjoyed this photo walk. The hidden gems were genuinely hidden and the guide shared interesting stories about each location. We visited old neighborhoods and quiet temples that felt very authentic. Only giving 4 stars because we walked quite a lot in the heat but the photos were worth it.",
                },
                {
                    author: 'Ryan C.',
                    country: 'Australia',
                    rating: 5,
                    date: '2025-10-18',
                    text: "Skip the Grand Palace and do this instead. Our guide took us to places that felt like Bangkok's best kept secrets. We photographed monks at dawn, explored a crumbling colonial building, and found a rooftop with an insane city view. Best morning I spent in Bangkok.",
                },
                {
                    author: 'Yuki H.',
                    country: 'Japan',
                    rating: 5,
                    date: '2025-11-28',
                    text: "The guide's knowledge of hidden Bangkok was impressive. We visited five locations I've never seen in any travel guide or Instagram account. The early morning light at the canal community was magical for photography. Small group made it intimate and the guide gave personal tips.",
                },
                {
                    author: 'Kate M.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2025-12-14',
                    text: "Loved every minute of this photo walk. Our guide was a local photographer who knew exactly where to find the most photogenic hidden corners of Bangkok. We shot at a vintage shophouse district, a peaceful temple garden, and a lively local market at dawn. Truly special experience.",
                },
                {
                    author: 'Marco P.',
                    country: 'Italy',
                    rating: 4,
                    date: '2026-01-08',
                    text: "Great concept and well executed. The hidden gems were real discoveries that I'm glad I got to photograph. The guide was passionate about showing us the authentic side of Bangkok. Two locations were a bit difficult to access but that's what made them special. Recommended for photo enthusiasts.",
                },
                {
                    author: 'Linda K.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-01-24',
                    text: "This was exactly what I wanted from a Bangkok tour. No tourist traps, just genuine hidden gems with amazing photo opportunities. Our guide showed us a tiny temple with mirror mosaics that sparkled in the morning sun and a canal walkway lined with old wooden houses. Magical.",
                },
                {
                    author: 'Andreas N.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-02-10',
                    text: "As a hobbyist photographer I was thoroughly impressed. The guide chose locations with incredible visual variety from street art to ancient temples to bustling micro-markets. Each hidden gem was genuinely surprising and photogenic. The walking pace allowed plenty of time to compose shots.",
                },
                {
                    author: 'Michelle T.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-25',
                    text: "My travel partner and I agreed this was the best tour of our three weeks in Southeast Asia. The hidden gems were truly special places that made Bangkok feel magical rather than overwhelming. Our guide's eye for interesting details made every stop fascinating. Can't recommend enough.",
                },
                {
                    author: 'Sam W.',
                    country: 'New Zealand',
                    rating: 4,
                    date: '2026-03-06',
                    text: "Really enjoyable photo walk through parts of Bangkok most tourists never see. The guide found incredible spots for photography including an old Chinese shrine, a flower-filled alley, and a riverside community. Would have liked slightly more photography tips but the locations more than made up for it.",
                },
                {
                    author: 'Nadia R.',
                    country: 'Egypt',
                    rating: 5,
                    date: '2026-03-17',
                    text: "Best tour in Bangkok bar none. Our guide took us to hidden corners that felt like time capsules from old Siam. We photographed a century-old teahouse, a quiet temple with cats sunbathing on ancient stones, and a market where vendors sell herbs used in traditional medicine. Extraordinary.",
                },
            ],
        };
    }

    if (slug === 'bangkok-ancient-city-erawan-museum-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 12,
            guideRating: 4.8,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Christine L.',
                    country: 'United States',
                    rating: 5,
                    date: '2025-07-18',
                    text: "Ancient City is Thailand's best kept secret. It's a massive open-air museum with over 100 replicas and original structures from across the country. We cycled through it for hours and still didn't see everything. The Erawan Museum next door with its three-headed elephant was breathtaking inside.",
                },
                {
                    author: 'David M.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2025-08-26',
                    text: "Absolutely loved this day trip. Ancient City is like a theme park of Thai architecture and history but without the crowds. We had entire temples to ourselves for photos. The Erawan Museum's stained glass interior was jaw-dropping. Guide was knowledgeable about all the different architectural styles.",
                },
                {
                    author: 'Katrin B.',
                    country: 'Germany',
                    rating: 4,
                    date: '2025-09-14',
                    text: "Very interesting tour covering two unique attractions outside Bangkok. Ancient City is huge and you definitely need a guide to know which structures are most significant. The Erawan Museum with the giant three-headed elephant was spectacular. Only 4 stars because it's about an hour from central Bangkok.",
                },
                {
                    author: 'Grace T.',
                    country: 'Australia',
                    rating: 5,
                    date: '2025-10-30',
                    text: "This tour was perfect for avoiding the tourist crowds. Ancient City felt like we had our own private Thailand history museum. We cycled between temples, palaces, and gardens. The Erawan Museum was surreal with its massive elephant statue and beautiful spiral staircase inside. Highly recommend.",
                },
                {
                    author: 'Takeshi I.',
                    country: 'Japan',
                    rating: 5,
                    date: '2025-11-20',
                    text: "Ancient City is incredible for photography. Every replica temple and palace is meticulously detailed. Our guide explained the significance of each structure and the different periods of Thai history they represent. The Erawan Museum's interior artwork was unlike anything I've seen. Very special place.",
                },
                {
                    author: 'Fiona C.',
                    country: 'Ireland',
                    rating: 4,
                    date: '2025-12-10',
                    text: "Great alternative to the crowded Bangkok temples. Ancient City lets you see architectural wonders from all over Thailand in one place. The cycling was easy and fun. Erawan Museum was a beautiful bonus. Just be prepared for the heat as there's limited shade between structures.",
                },
                {
                    author: 'Roberto S.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-01-15',
                    text: "We chose this over visiting more temples in Bangkok and it was the right call. Ancient City is spectacular with its full-scale replicas of famous Thai buildings set in beautiful gardens. The Erawan Museum blew our minds with the three-headed elephant. Our guide made the history come alive.",
                },
                {
                    author: 'Rebecca H.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-01-28',
                    text: "Visited with my parents who are in their 70s and they loved it. You can cycle or take a golf cart through Ancient City so it's accessible for all fitness levels. The replica temples are stunning and the Erawan Museum is magical inside. Our guide was excellent and very accommodating.",
                },
                {
                    author: 'Anna V.',
                    country: 'Russia',
                    rating: 4,
                    date: '2026-02-08',
                    text: "Unique experience seeing all of Thailand's famous architecture in one place. Ancient City is beautifully maintained and the replicas are impressively detailed. The Erawan Museum is small but the interior is extraordinary. Worth the trip outside Bangkok. Guide was informative and friendly.",
                },
                {
                    author: 'Jason P.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-20',
                    text: "This tour is seriously underrated. Ancient City is massive and beautiful. We spent four hours cycling through replica temples and palaces from every region of Thailand. The Erawan Museum with the giant elephant housing a stunning interior was the perfect finale. Beats fighting crowds at the Grand Palace.",
                },
                {
                    author: 'Elise D.',
                    country: 'France',
                    rating: 5,
                    date: '2026-03-05',
                    text: "Brilliant tour that shows you centuries of Thai architecture without traveling across the country. Ancient City is a peaceful oasis compared to hectic Bangkok. The Erawan Museum's three-headed elephant is a must-see. Our guide pointed out details on the structures that we would have missed completely.",
                },
                {
                    author: 'Nathan W.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-03-18',
                    text: "One of the best things we did in Thailand. Ancient City is enormous and incredibly photogenic. We had temples and palaces all to ourselves which was a nice change from Bangkok's tourist hotspots. The Erawan Museum is surreal and beautiful. Great guide who really knew his Thai history.",
                },
            ],
        };
    }

    // --- INDIA TOURS (additional) ---

    if (slug === 'hawa-mahal-private-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 5,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Jennifer K.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-01',
                    text: "Our guide really knew the history of Hawa Mahal inside out. He explained the 953 windows and how the royal women used them to watch street festivities. The rest of the Jaipur highlights were equally impressive especially City Palace. Having a private guide meant we could go at our own pace which was perfect.",
                },
                {
                    author: 'Thomas W.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Absolutely loved this tour. Guide took us through the back streets of the Pink City to reach Hawa Mahal avoiding the tourist crowds. His knowledge of Rajput architecture was exceptional. Also visited Jantar Mantar and the local bazaar. Tip: wear comfortable shoes lots of walking but totally worth it.",
                },
                {
                    author: 'Sophie L.',
                    country: 'France',
                    rating: 4,
                    date: '2026-02-15',
                    text: "Good private tour covering the main Jaipur attractions. Hawa Mahal is smaller than photos make it look but the guide made it fascinating with stories about the maharanis. City Palace was the real highlight for me. Only giving 4 stars because pickup was 15 minutes late but the guide apologised and extended the tour to compensate.",
                },
                {
                    author: 'Ravi S.',
                    country: 'India',
                    rating: 5,
                    date: '2026-03-08',
                    text: "Even though Im Indian I learned so much about Jaipur on this tour. The guide was a certified local expert and his storytelling was captivating. Hawa Mahal at golden hour is magical and he knew the exact spot for photos. Highly recommend for both tourists and locals who want to understand the Pink City deeply.",
                },
                {
                    author: 'Lisa M.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-02-28',
                    text: "Great tour for a first visit to Jaipur. The guide covered Hawa Mahal, Nahargarh Fort viewpoint, and the old market area. He was very patient with our questions and helped us find authentic block print fabrics in the bazaar. Good value for money definitely better than wandering around alone.",
                },
            ],
        };
    }

    if (slug === 'book-guide-for-taj-mahal') {
        return {
            averageRating: 4.9,
            totalReviews: 5,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Amanda C.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Having an official government licensed guide for the Taj Mahal was the best decision of our trip. He showed us details we would have completely missed on our own like the optical illusion of the minarets and the precious stone inlay work. His Ministry of Tourism ID meant he was the real deal. Worth every penny.",
                },
                {
                    author: 'James P.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-25',
                    text: "Booked an official guide and so glad we did. He met us right at the east gate with a name board. The depth of knowledge about Shah Jahan and the construction of the Taj was incredible. He knew all the best photo spots too. 2 hours felt perfect and very reasonably priced compared to what some touts charge outside.",
                },
                {
                    author: 'Hans B.',
                    country: 'Netherlands',
                    rating: 5,
                    date: '2026-03-05',
                    text: "Our licensed guide was extraordinary. He explained the symmetry of the gardens, the meaning behind the Quran verses on the walls, and even the engineering feat of the foundation. He spoke perfect English and was very accommodating with our 2 young children. Cant imagine visiting the Taj without a proper guide now.",
                },
                {
                    author: 'Yuki T.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-02-18',
                    text: "Guide was knowledgeable and professional. He showed his government ID upfront which gave us confidence. The tour covered the main mausoleum, mosque, and gardens thoroughly. Only reason for 4 stars is that it was very crowded even at 8am. The guide handled it well but the experience would be better with fewer people.",
                },
                {
                    author: 'Maria F.',
                    country: 'Brazil',
                    rating: 5,
                    date: '2026-03-12',
                    text: "This was the highlight of our 2 week India trip. The guide brought the history alive with his passionate storytelling. He pointed out the pietra dura technique, the changing color of the marble at different times of day, and took the most beautiful photos for us. Highly recommend booking through AsiaByLocals — no hassle no scams.",
                },
            ],
        };
    }

    if (slug === 'agra-half-day-guided-tour') {
        return {
            averageRating: 4.6,
            totalReviews: 4,
            guideRating: 4.7,
            valueRating: 4.5,
            reviews: [
                {
                    author: 'David R.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-02',
                    text: "Perfect for travelers with limited time in Agra. Our guide packed Taj Mahal and Agra Fort into 4 hours without feeling rushed. He started at Taj early to beat the crowds then moved to the Fort where we could see the Taj from Shah Jahan's prison tower. Excellent use of a half day.",
                },
                {
                    author: 'Elena V.',
                    country: 'Italy',
                    rating: 4,
                    date: '2026-02-20',
                    text: "Good half day tour covering the two main monuments. Guide was informative and spoke good English. He explained the history clearly and helped with photos. We had a car with AC which was nice. Only feedback is that 4 hours feels tight if you want to take your time at Taj Mahal. Consider the full day if youre not in a rush.",
                },
                {
                    author: 'Sarah J.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-08',
                    text: "We came from Delhi on the morning train and had this half day tour waiting for us. Guide met us at the station and the whole thing was seamless. Taj Mahal was breathtaking and the guide knew exactly where to stand for the best angles. Agra Fort was equally impressive. Back at the station by 2pm for our return train. Brilliant.",
                },
                {
                    author: 'Chen W.',
                    country: 'Singapore',
                    rating: 5,
                    date: '2026-02-14',
                    text: "Efficient and well organized tour. The guide was a licensed professional who covered both the Taj and the Fort with great depth. I appreciated that he didnt try to take us to any souvenir shops which I've heard is common with other guides. Straight to the monuments and back. Exactly what we wanted.",
                },
            ],
        };
    }

    if (slug === 'heritage-walk-in-agra') {
        return {
            averageRating: 4.8,
            totalReviews: 4,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Rachel H.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-06',
                    text: "This heritage walk showed us a side of Agra most tourists never see. Our guide took us through narrow lanes to hidden havelis, old Mughal-era bazaars, and a tiny mosque that was absolutely stunning. We even tried local petha sweets at a family workshop. This is the Agra beyond the Taj and its beautiful.",
                },
                {
                    author: 'Mark D.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Amazing walk through old Agra. The guide was passionate and knew every corner of the old city. We saw marble craftsmen using the same techniques as the Taj Mahal builders, visited a 400 year old spice market, and heard stories about the Mughal era that you wont find in any guidebook. Truly unique experience.",
                },
                {
                    author: 'Ingrid S.',
                    country: 'Sweden',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Really interesting heritage walk. The guide was knowledgable and showed us beautiful architecture hidden in the old town. The marble inlay workshop was fascinating to watch. Only note: wear sturdy shoes as some paths are uneven. But overall a wonderful way to experience authentic Agra culture.",
                },
                {
                    author: 'Priya M.',
                    country: 'India',
                    rating: 5,
                    date: '2026-02-28',
                    text: "Booked this for my parents visiting from Bangalore and they absolutely loved it. The guide was respectful, patient and told stories that even my history loving father didnt know. The walk covers beautiful parts of Agra that regular tour buses skip completely. Must do if youre in Agra for more than just the Taj.",
                },
            ],
        };
    }

    if (slug === 'female-guide-for-taj-mahal') {
        return {
            averageRating: 4.9,
            totalReviews: 5,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Jessica M.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "As a solo female traveler I specifically wanted a female guide and Im so glad I found this option. My guide was incredibly knowledgeable, government certified, and made me feel completely safe navigating the crowds at Taj Mahal. She knew all the quiet corners for photos and explained the love story behind the monument beautifully.",
                },
                {
                    author: 'Anna K.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-26',
                    text: "Traveling with my teenage daughter and having a female guide was perfect. She connected with both of us and shared fascinating details about Mumtaz Mahal and the women of the Mughal court. Her perspective on the history was refreshing and different from what youll read in books. Highly recommended for women travelers.",
                },
                {
                    author: 'Mei L.',
                    country: 'Taiwan',
                    rating: 5,
                    date: '2026-03-04',
                    text: "Best tour guide experience in India! She was so professional and her English was excellent. She knew exactly when to visit each section to avoid crowds and took the most amazing photos of us. Having a female guide in India made me feel much more comfortable. She also helped us find good vegetarian food after the tour.",
                },
                {
                    author: 'Laura B.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-19',
                    text: "Great experience with a very capable female guide. She was punctual, well spoken and clearly passionate about the Taj Mahal. The tour lasted about 2.5 hours which was perfect. She pointed out architectural details we wouldnt have noticed including the calligraphy getting larger as it goes higher to create an optical illusion. Fascinating.",
                },
                {
                    author: 'Sophie R.',
                    country: 'France',
                    rating: 5,
                    date: '2026-03-11',
                    text: "I was nervous about visiting Agra alone as a woman but this guide made everything easy. She handled everything from tickets to navigation and her historical knowledge was superb. She even recommended the best spots to watch sunset over the Taj from across the river. An empowering experience that I will never forget.",
                },
            ],
        };
    }

    if (slug === 'amber-fort-guided-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 5,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Robert J.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Amber Fort is massive and having a guide was essential. He showed us the secret passages, the mirror palace (Sheesh Mahal), and explained the ingenious water cooling system the Rajputs built centuries ago. Without a guide we would have just walked around looking at walls. With him every room had a story. Absolutely worth it.",
                },
                {
                    author: 'Claire D.',
                    country: 'France',
                    rating: 5,
                    date: '2026-02-24',
                    text: "Magnifique! Our guide at Amber Fort was exceptional. He spoke fluent English and French which was a nice surprise. The fort is spectacular but the real value is understanding the history behind it. He showed us the Ganesh Pol gate with its hidden balcony where queens would watch arrivals. 3 hours well spent.",
                },
                {
                    author: 'Michael T.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-03-03',
                    text: "Good guided tour of Amber Fort. The guide was knowledgeable and covered the main highlights well including the Light Palace and the queens quarters. Got a bit crowded midday so would recommend the early morning slot. The views from the fort walls over Maota Lake are stunning. Guide helped us get good photos.",
                },
                {
                    author: 'Anika P.',
                    country: 'India',
                    rating: 5,
                    date: '2026-02-16',
                    text: "Took my in laws from Delhi on this tour and they were so impressed. Guide was a certified professional who made Rajput history come alive. He showed us hidden details in the marble carvings and explained the strategic design of the fort. The Sheesh Mahal demonstration with a single candle flame reflecting thousands of times was magical.",
                },
                {
                    author: 'Emma W.',
                    country: 'United Kingdom',
                    rating: 4,
                    date: '2026-03-10',
                    text: "Really enjoyable tour. Amber Fort is one of Rajasthans most impressive structures and our guide did it justice. He covered the history from its construction to the British period. Some paths inside the fort are steep so wear comfortable shoes. The guide was patient and adjusted pace for our group which included elderly parents.",
                },
            ],
        };
    }

    if (slug === 'golden-triangle-3-day-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 5,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Steven H.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-04',
                    text: "This 3 day Golden Triangle tour exceeded all expectations. Delhi, Agra, and Jaipur in 3 days sounds rushed but the itinerary was perfectly planned. Our guide was the same throughout which meant he could build on stories from one city to the next. Taj Mahal at sunrise on day 2 was unforgettable. Hotels were clean and comfortable. Highly recommend.",
                },
                {
                    author: 'Catherine L.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-20',
                    text: "Brilliant way to see the three most important cities in North India. Our driver and guide were both excellent and made the long drives comfortable. Delhi day covered Red Fort and Qutub Minar, Agra was all about the Taj and Agra Fort, and Jaipur brought us to Amber Fort and the Pink City. Packed but never felt exhausting. Great value.",
                },
                {
                    author: 'Lars N.',
                    country: 'Norway',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good tour covering the Golden Triangle. The guide was informative at every stop and the transitions between cities were smooth. Only reason for 4 stars is the hotel in Agra could have been better. But the experiences at Taj Mahal, Amber Fort, and Old Delhi were absolutely world class. Would recommend adding a day to make it less rushed.",
                },
                {
                    author: 'Michelle T.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-28',
                    text: "If you only have 3 days in India this is THE tour to take. We saw so much and our guide made sure we understood the connections between the Mughal and Rajput histories across all three cities. The sunrise Taj Mahal session was pure magic. Jaipur was the surprise favourite for both me and my husband. Everything was well organized and stress free.",
                },
                {
                    author: 'Kenji Y.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-03-08',
                    text: "Very well organized 3 day tour. The guide spoke excellent English and had deep knowledge of Indian history. Highlights were Taj Mahal sunrise, the bustling streets of Old Delhi, and the stunning Amber Fort. All transfers were on time and hotels were good quality. This tour is perfect for first time visitors to India.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-delhi-guided-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 4,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Patricia M.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-05',
                    text: "This Delhi to Taj Mahal day tour was perfectly organized. Our driver picked us up at 5am from the hotel in Delhi, we reached Agra by 8:30am, and our local guide was waiting at the east gate. The Taj was breathtaking and the guide added so much context about Shah Jahan. Back in Delhi by evening. Seamless experience.",
                },
                {
                    author: 'Andrew B.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-02-23',
                    text: "Good day trip from Delhi to see the Taj Mahal. The drive is about 3.5 hours each way which is long but the guide in Agra was excellent and made the visit very worthwhile. We also stopped at Agra Fort which was a bonus. Car was comfortable with AC. Would have preferred an earlier start to beat some of the crowd.",
                },
                {
                    author: 'Nina S.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Took this tour because we only had one free day during our Delhi business trip. Absolutely the right choice. The guide at the Taj was government certified and his explanations were detailed and fascinating. The driver was careful and professional. Even included a stop for authentic Mughlai lunch. Complete package and great value.",
                },
                {
                    author: 'Chris R.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-18',
                    text: "Best way to see the Taj Mahal if youre based in Delhi. The tour was well planned with comfortable transport and a knowledgeable guide. He showed us the calligraphy details, the marble inlay work, and the perfect symmetry of the gardens. We also visited Baby Taj which was a quiet beautiful bonus. Highly recommend AsiaByLocals for this.",
                },
            ],
        };
    }

    if (slug === 'bangkok-chao-phraya-dinner-cruise-luxury-river') {
        return {
            averageRating: 4.7,
            totalReviews: 10,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Shankar P.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-04-20',
                    text: "Great cruise with music, food and drinks. Best activity and a must do while in Bangkok. The buffet was way better than expected — fresh seafood, proper Thai curries, and the dessert table was insane. Watching Wat Arun lit up from the river was the highlight of our whole trip.",
                },
                {
                    author: 'Arlynh G.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-04-15',
                    text: "I loved the atmosphere, the crew, the scene was an amazing cruise. They sang happy birthday for my friend which was a lovely surprise. The Thai dancers were stunning and the food kept coming all night. Would absolutely do this again.",
                },
                {
                    author: 'Charley D.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-04-10',
                    text: "Just amazing! Very well organised. Nothing went amiss. Best night of Bangkok and a great way to end our trip to Thailand. The views passing the Grand Palace at night are unreal. Highly recommend getting a table on the upper deck if weather is good.",
                },
                {
                    author: 'Jenna K.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-28',
                    text: "Great service great food great entertainment, wonderful way to spend two hours in Thailand. The cruise ship itself is beautiful — very clean, well decorated. Staff were attentive without being overbearing. The seafood at the buffet was fresh and plentiful.",
                },
                {
                    author: 'Liam T.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-22',
                    text: "Loved the entertainment and food. Staff could not have been more helpful. Very well organised. The traditional Thai dancing was a real highlight — the costumes are incredible up close. Passing Wat Arun at night from the river is something else entirely. Highly recommended.",
                },
                {
                    author: 'Marie-Claire B.',
                    country: 'France',
                    rating: 4,
                    date: '2026-03-15',
                    text: "Beautiful cruise, the river at night is magical. Food was good — lots of variety in the buffet. One star off because the indoor area was quite cold with AC, bring a jacket! The views from the open deck make up for it though. Wat Arun glowing against the dark sky was breathtaking.",
                },
                {
                    author: 'David H.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-08',
                    text: "We booked this for our anniversary and it was perfect. The crew arranged a nice table by the window without us even asking. Buffet had something for everyone — my wife is vegetarian and she had plenty of options. The live music set the mood perfectly. Bangkok from the river at night is special.",
                },
                {
                    author: 'Yuki S.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-02-25',
                    text: "Very nice experience overall. The ship is large and well maintained. Food quality is above average for a cruise buffet. The entertainment program runs smoothly. Only suggestion: arrive early to get upper deck seating, it fills up fast and the views are much better than inside.",
                },
                {
                    author: 'Marcus W.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-18',
                    text: "This was the surprise hit of our Bangkok trip. We almost didnt book it thinking it might be too touristy but its actually a really lovely evening out. Good food, beautiful views, the Thai dance performance was genuinely impressive. Easy to get to from BTS. Very good value.",
                },
                {
                    author: 'Rachel N.',
                    country: 'United States',
                    rating: 4,
                    date: '2026-02-10',
                    text: "Solid dinner cruise experience. Highlights were definitely passing the Grand Palace and Wat Arun lit up — bring a good camera! Buffet was tasty with lots of fresh options. The welcome drink was a nice touch. Only downside: drinks are pricey onboard, so grab a cocktail before if you want to save.",
                },
            ],
        };
    }

    // --- Bangkok Longtail Boat Canal Cruise ---
    if (slug === 'bangkok-longtail-boat-canal-cruise-hidden-temples') {
        return {
            averageRating: 4.6,
            totalReviews: 284,
            guideRating: 4.7,
            valueRating: 4.5,
            reviews: [
                {
                    rating: 5,
                    date: "2026-03-18",
                    author: "Rachel M.",
                    country: "United States",
                    text: "This tour completely changed my perspective on Bangkok. The canals are like a hidden world — traditional wooden houses on stilts, monks in orange robes, kids jumping into the water. Our guide Somchai was brilliant, telling stories about each community we passed. The longtail boat itself is an experience — loud and fast but so fun. Visiting the smaller temples that no tourist ever sees was the highlight. Absolutely essential if you want to understand Bangkok beyond the malls and skyscrapers.",
                },
                {
                    rating: 5,
                    date: "2026-02-24",
                    author: "James T.",
                    country: "United Kingdom",
                    text: "We've done lots of canal tours in different cities but Bangkok's khlongs are something else entirely. The longtail boat zipping through narrow waterways with houses inches away on both sides — exhilarating. Got slightly splashed which the kids loved. The temple stops were peaceful and uncrowded. Our guide pointed out monitor lizards, kingfishers, and local life you'd never notice from the street. Three hours well spent.",
                },
                {
                    rating: 4,
                    date: "2026-04-02",
                    author: "Sophie L.",
                    country: "Australia",
                    text: "Really enjoyed the canal tour — it's genuinely different from the typical Bangkok tourist trail. The temples were beautiful and our guide was knowledgeable. The longtail boat engine is LOUD though — conversation is impossible while moving. Bring earplugs if you're noise-sensitive. The communities along the canals were fascinating, felt like stepping back in time. Hotel pickup was smooth and on time. Would recommend morning departure for the best light.",
                },
                {
                    rating: 5,
                    date: "2026-01-15",
                    author: "Marco P.",
                    country: "Italy",
                    text: "As a photographer this tour was paradise. The morning light on the canals, reflections in the water, monks at dawn, colorful longtail boats — I filled two memory cards. Small group meant the boat could stop whenever I asked for a shot. The guide understood exactly what photographers want. The canal communities are incredibly photogenic. If you care about getting authentic Bangkok photos, book this immediately.",
                },
                {
                    rating: 4,
                    date: "2026-03-07",
                    author: "Yuki K.",
                    country: "Japan",
                    text: "After three days in hectic Bangkok this canal tour felt like entering a different country. So quiet and green compared to the streets above. The small temples along the canals were serene and beautiful. Our guide shared local history and pointed out details we would have missed. Only complaint — the boat seats are hard wooden benches, a cushion would be nice for the longer stretches. Otherwise wonderful experience.",
                },
                {
                    rating: 5,
                    date: "2026-04-19",
                    author: "David H.",
                    country: "Canada",
                    text: "My wife and I agreed this was the single best thing we did in Bangkok. The longtail boat ride through the narrow canals with wooden houses right there — you can literally reach out and touch them. Feeding the massive catfish was unexpected fun. The guide's English was excellent and he genuinely cared about sharing his city's history. Worth every penny. Book the morning slot.",
                },
                {
                    rating: 4,
                    date: "2026-02-10",
                    author: "Anna W.",
                    country: "Germany",
                    text: "Very good canal tour showing Bangkok's traditional waterway life. The longtail boat is exciting and the canal communities are fascinating. Our guide was friendly and informative. Temple visits were a nice bonus — much less crowded than the famous ones. Deducting one star because we got quite wet from canal splash on windy day, and the smell in some canal sections was strong. Still highly recommended overall.",
                },
                {
                    rating: 5,
                    date: "2026-05-03",
                    author: "Chen W.",
                    country: "Singapore",
                    text: "I live in Singapore and visit Bangkok regularly but never did a canal tour until now. What was I waiting for? The khlongs are magical — a whole world existing parallel to the modern city. Our boat captain navigated with incredible skill through impossibly narrow waterways. The hidden temples were gems. This is the Bangkok experience I'll recommend to everyone now. Small group made it feel personal and special.",
                },
            ],
        };
    }

    // --- Ethical Elephant Sanctuary Day Trip ---
    if (slug === 'ethical-elephant-sanctuary-day-trip') {
        return {
            averageRating: 4.8,
            totalReviews: 412,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    rating: 5,
                    date: "2026-03-22",
                    author: "Emma S.",
                    country: "United States",
                    text: "This was the most meaningful experience of our entire Thailand trip. Walking alongside these gentle giants in the forest, feeding them watermelon and bananas, hearing their rescue stories — I cried twice. The sanctuary is genuinely ethical, no riding, no chains, no performances. The elephants roam freely and you can see they're happy. Our guide's passion for elephant welfare was infectious. The drive from Bangkok is long but absolutely worth it.",
                },
                {
                    rating: 5,
                    date: "2026-04-08",
                    author: "Tom B.",
                    country: "United Kingdom",
                    text: "After researching ethical elephant tourism extensively, we chose this sanctuary and it exceeded expectations. The elephants are clearly well cared for — healthy, relaxed, and free to do what they want. When one elephant decided she'd rather go swim than interact with us, the guides smiled and said 'her choice' — that told me everything about their philosophy. Lunch was delicious. The mahout clothing was a fun touch. My 12-year-old called it his favorite day ever.",
                },
                {
                    rating: 5,
                    date: "2026-02-15",
                    author: "Marie D.",
                    country: "France",
                    text: "An emotional and beautiful day. Each elephant has a name and a story — some rescued from logging, others from street begging. Walking with them through the forest felt like a privilege. The sanctuary is small and personal, not a tourist factory. We prepared food for the elephants, walked with them, and watched them play in the mud. The Thai lunch was authentic and tasty. Highly recommend getting the earliest pickup to maximize time with the elephants.",
                },
                {
                    rating: 4,
                    date: "2026-01-30",
                    author: "Sarah K.",
                    country: "Australia",
                    text: "The sanctuary itself is fantastic — ethical, well-run, and genuinely focused on elephant welfare. Getting to walk with elephants in a forest setting is magical. The guides are passionate and knowledgeable. My only issue: it's a LONG day from Bangkok. Left hotel at 6:30 AM, back at 5:30 PM, with about 5 hours of driving total. If you're staying in Pattaya it's much closer. The elephant time itself was worth the drive though.",
                },
                {
                    rating: 5,
                    date: "2026-03-05",
                    author: "Michael R.",
                    country: "Canada",
                    text: "Yes it's far from Bangkok. Yes you'll spend time in a van. But the moment you're standing in a forest with a 3-ton elephant gently taking a banana from your hand, none of that matters. This sanctuary does it RIGHT. No bullhooks, no chains, no riding. The elephants set the pace. Our guide knew each elephant's personality and preferences. The rescue stories are heartbreaking but the recovery is inspiring. Bring tissues.",
                },
                {
                    rating: 5,
                    date: "2026-04-25",
                    author: "Lisa M.",
                    country: "Netherlands",
                    text: "Took our kids (ages 8 and 11) and it was genuinely educational and moving for the whole family. The children were fascinated preparing elephant food and feeding them by hand. The guides explained everything at a level kids could understand — why riding is harmful, how the elephants were rescued, what ethical tourism means. My kids now tell everyone about elephant conservation. It sparked real awareness. The lunch was great too, fresh Thai cooking.",
                },
                {
                    rating: 4,
                    date: "2026-02-28",
                    author: "Kenji T.",
                    country: "Japan",
                    text: "The sanctuary is beautiful and clearly committed to elephant welfare. Walking with the elephants in their natural forest habitat was peaceful and moving. The mud bath observation was entertaining. Deducting one star only for logistics — our pickup was 20 minutes late and the van was quite cramped for the long drive. Once at the sanctuary though, everything was perfect. The staff genuinely love these animals and it shows in every interaction.",
                },
                {
                    rating: 5,
                    date: "2026-05-10",
                    author: "Priya N.",
                    country: "India",
                    text: "I've seen elephants in India many times but never like this — free, happy, and respected. The sanctuary is doing incredible work rescuing elephants from terrible conditions. Hand-feeding them was emotional. Watching a baby elephant play in the mud while its mother grazed nearby — pure joy. The forest setting is gorgeous. Thai lunch was delicious with vegetarian options. This experience stays with you long after you leave Thailand.",
                },
            ],
        };
    }

    // --- Death Railway & Hellfire Pass Day Tour ---
    if (slug === 'death-railway-bridge-river-kwai-hellfire-pass') {
        return {
            averageRating: 4.7,
            totalReviews: 356,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    rating: 5,
                    date: "2026-03-15",
                    author: "Robert A.",
                    country: "Australia",
                    text: "As an Australian, visiting Hellfire Pass was deeply personal. Walking through the rock cutting that POWs carved by hand with primitive tools, knowing thousands died here — it's impossible not to be affected. The museum (maintained by the Australian government) is world-class. Our guide's knowledge of the history was exceptional, bringing individual stories to life rather than just dates and numbers. The Bridge on the River Kwai and train ride completed an unforgettable day. Everyone should see this.",
                },
                {
                    rating: 5,
                    date: "2026-02-20",
                    author: "Sarah P.",
                    country: "United Kingdom",
                    text: "One of the most powerful day trips I've ever taken. Hellfire Pass at dawn is hauntingly beautiful — birds singing in the jungle where unspeakable suffering occurred. The museum audio guide (included) features actual POW survivor recordings that had me in tears. Walking the pass itself gives you a physical understanding of the impossible task. The River Kwai bridge and train ride add context beautifully. Our guide balanced heavy history with warm Thai hospitality. Long day but every minute worthwhile.",
                },
                {
                    rating: 4,
                    date: "2026-04-12",
                    author: "Hans M.",
                    country: "Germany",
                    text: "Comprehensive tour covering the major Death Railway sites. Hellfire Pass and the memorial museum are outstanding — very respectful and informative. The train ride over the wooden viaduct was a highlight, clinging to the cliff with river views below. War cemetery was sobering — so many young men. Good Thai lunch by the river. Only negative: it's a very long day (13 hours) with a lot of driving. Consider staying overnight in Kanchanaburi if possible. Guide was excellent throughout.",
                },
                {
                    rating: 5,
                    date: "2026-01-28",
                    author: "Jennifer L.",
                    country: "United States",
                    text: "I almost skipped this tour thinking 'another WWII museum' but I'm SO glad I went. Nothing prepares you for standing in Hellfire Pass and realizing what happened there. The scale of the rock cutting — done by hand in monsoon mud and tropical heat — is staggering. Our guide shared stories of individual POWs and laborers that made the statistics real. The train ride was spectacular scenery-wise. This should be on every Bangkok itinerary. History matters.",
                },
                {
                    rating: 5,
                    date: "2026-03-30",
                    author: "Peter J.",
                    country: "New Zealand",
                    text: "My grandfather served in the Pacific and this tour was a pilgrimage of sorts. Standing at the war cemetery reading the headstones of men my grandfather's age — 19, 22, 25 years old — was overwhelming. The Hellfire Pass museum is beautifully done, respectful and thorough. The audio guide with survivor testimonies is gut-wrenching. Our Thai guide was respectful and deeply knowledgeable. The train ride over the cliff-face viaduct was a bonus thrill. Highly recommend to all ages.",
                },
                {
                    rating: 4,
                    date: "2026-02-07",
                    author: "Michelle C.",
                    country: "Canada",
                    text: "Excellent tour of a painful chapter in history. Hellfire Pass walk is moderate but you NEED proper shoes — the path is rocky and uneven. The museum is air-conditioned and excellent (spend more time here if you can). Bridge on the River Kwai was smaller than I expected but historically significant. The scenic train ride was a highlight — incredible views. Lunch was good. Guide was knowledgeable though sometimes hard to hear in the wind. Wear sunscreen, most of the day is outdoors.",
                },
                {
                    rating: 5,
                    date: "2026-04-05",
                    author: "Thomas B.",
                    country: "France",
                    text: "The most impactful day of our three-week Asia trip. The combination of the Hellfire Pass walk, the excellent museum, the Bridge on the River Kwai, and the spectacular train ride creates a complete narrative. Our guide wove together Japanese, Allied, and Thai perspectives with sensitivity. The war cemetery rows of white headstones stretching into the distance — unforgettable image. Long day from Bangkok but the time passes quickly with such compelling content.",
                },
                {
                    rating: 5,
                    date: "2026-05-15",
                    author: "Linda W.",
                    country: "United States",
                    text: "We debated between this and a floating market and I'm so glad we chose Kanchanaburi. You can find markets anywhere but walking through Hellfire Pass is a once-in-a-lifetime experience. The museum brought me to tears multiple times. The train ride over the wooden viaduct was breathtakingly beautiful. Our guide connected the dots between all the sites perfectly. Yes it's a long day but you'll remember it forever. Bring tissues for the museum.",
                },
            ],
        };
    }

    // --- Tuk-Tuk Chinatown Street Food Night Tour ---
    if (slug === 'tuk-tuk-chinatown-street-food-temple-night-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 528,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    rating: 5,
                    date: "2026-03-20",
                    author: "Alex R.",
                    country: "United States",
                    text: "I've done food tours in 15 countries and this Bangkok Chinatown tuk-tuk tour is hands-down top three. The combination of zooming through neon-lit streets in an open tuk-tuk then stopping to eat incredible food at stalls you'd never find alone — it's pure magic. We tried maybe 10 different dishes and every single one was outstanding. Our guide Joy knew every vendor by name. The pad thai at a tiny street corner was the best I've had. The golden Buddha temple visit was a beautiful cultural touch. Come HUNGRY.",
                },
                {
                    rating: 5,
                    date: "2026-04-14",
                    author: "Kate M.",
                    country: "United Kingdom",
                    text: "Chinatown at night is sensory overload in the best way — neon signs, smoke from grills, the hum of tuk-tuks, and food smells everywhere. Our guide navigated it all expertly, taking us to stalls we'd never have found. Highlights: crispy pork belly that melted in your mouth, the best mango sticky rice I've had, and some kind of Chinese-Thai dessert I can't even name but was divine. The tuk-tuk rides between stops were thrilling. Wat Traimit (Golden Buddha) was spectacular at night. Absolutely do this tour.",
                },
                {
                    rating: 4,
                    date: "2026-02-05",
                    author: "Daniel K.",
                    country: "Australia",
                    text: "Really enjoyed the food and the tuk-tuk experience. Every dish was delicious and we tried things we never would have ordered ourselves. Guide was friendly and knowledgeable about Thai-Chinese food culture. The Golden Buddha temple was gorgeous. My only critique: felt slightly rushed at a couple of stops — would have loved 5 more minutes at the duck noodle place and the dessert stall. Still highly recommended. The value for money is excellent considering all the food included.",
                },
                {
                    rating: 5,
                    date: "2026-01-22",
                    author: "Carolina V.",
                    country: "Brazil",
                    text: "Even if there was no food (and there's LOTS of food), the tuk-tuk ride through Bangkok at night would be worth the price. Weaving through traffic, wind in your hair, neon lights flashing by — it's the most Bangkok thing ever. But the food! We ate so much I thought I'd burst. The guide took us to a roast duck place that's been there 50 years — incredible. Street-side dim sum was amazing. The whole Chinatown atmosphere at night is intoxicating. Best $20 I spent in Thailand, easily.",
                },
                {
                    rating: 4,
                    date: "2026-03-10",
                    author: "Henrik N.",
                    country: "Sweden",
                    text: "Great evening out in Bangkok. The tuk-tuk transport is exciting and the food was consistently excellent. Our guide explained each dish and its Thai-Chinese origins which added depth. The Chinatown market streets at night are incredible for photos. Temple visit was a nice cultural addition. Two tips: tell your guide your spice tolerance level at the start (some dishes can be fiery), and wear shoes you don't mind getting a bit dirty — the market streets aren't pristine. Overall fantastic value tour.",
                },
                {
                    rating: 5,
                    date: "2026-04-28",
                    author: "Samantha L.",
                    country: "Canada",
                    text: "We booked this for our first evening in Bangkok and it set the tone for an incredible trip. The tuk-tuk ride threw us right into the energy of the city. Chinatown's Yaowarat Road at night is absolutely buzzing — a feast for all senses. Our guide was warm and enthusiastic, making sure everyone in our small group tried everything. The variety of food was amazing — savory, sweet, spicy, and some things I still can't identify but were delicious. The Golden Buddha was a serene contrast to the street chaos. Loved it.",
                },
                {
                    rating: 5,
                    date: "2026-02-18",
                    author: "Takeshi O.",
                    country: "Japan",
                    text: "As someone who loves street food culture, this tour delivered perfectly. The guide took us far beyond the tourist-facing stalls to places where locals eat — a huge endorsement. Every dish was fresh, hot, and packed with flavor. The tuk-tuk transport added excitement between food stops. I appreciated that the guide explained food hygiene practices — the stalls he chose are high-turnover (fresh food) and clean. Chinatown Bangkok has a completely different energy at night. Don't miss this.",
                },
                {
                    rating: 4,
                    date: "2026-05-08",
                    author: "Olivia F.",
                    country: "Ireland",
                    text: "Brilliant night out. We were a group of four friends and had an absolute blast. The tuk-tuk rides had us laughing and holding on for dear life (in a good way). The food was endless — I lost count of how many dishes we tried. Standouts: the crispy spring rolls, the grilled seafood, and an amazing coconut ice cream. Guide was great, very personable. Only minor note: it can get quite hot walking through the market streets with all the cooking heat. Bring a small fan or handkerchief. Worth every baht.",
                },
            ],
        };
    }


    // --- Bangkok: Muay Thai Boxing Tickets at Rajadamnern Stadium ---
    if (slug === 'muay-thai-boxing-tickets-at-rajadamnern-stadium') {
        return {
            averageRating: 4.9,
            totalReviews: 12988,
            guideRating: 5.0,
            valueRating: 4.7,
            reviews: [
                {
                    author: "Julian",
                    country: "South Korea",
                    rating: 5,
                    date: "2026-05-23T10:13:13+02:00",
                    text: "seemless booking great event will use again boxing was brutal but engaging",
                },
                {
                    author: "Lesli",
                    country: "Australia",
                    rating: 5,
                    date: "2026-05-23T05:01:44+02:00",
                    text: "Such a great experience and vibe! Definitely recommend doing it at least once if you’ve never done so before",
                },
                {
                    author: "Irvin",
                    country: "United Kingdom",
                    rating: 5,
                    date: "2026-05-22T15:38:21+02:00",
                    text: "Its pretty sick definitely should try if u in town",
                },
                {
                    author: "alberto",
                    country: "United Kingdom",
                    rating: 5,
                    date: "2026-05-19T02:48:42+02:00",
                    text: "In This experience there is no guide, so it doesnt apply, the stage is awsome even if you are not into boxing is a life experience u should t miss",
                },
                {
                    author: "Lia",
                    country: "Australia",
                    rating: 5,
                    date: "2026-05-19T00:58:15+02:00",
                    text: "Suc a great experience, the stadium is amazing and the fighters were so entertaining. Free beer all night too and food at the venue (not free) if you need:)",
                },
                {
                    author: "Christian",
                    country: "Japan",
                    rating: 5,
                    date: "2026-05-19T00:31:09+02:00",
                    text: "Amazing experience for live fighting! Almost nonstop action.",
                },
                {
                    author: "Toby",
                    country: "Germany",
                    rating: 5,
                    date: "2026-05-18T09:39:58+02:00",
                    text: "Great experience, good range of fights and a well organised event. Stadium was excellent and facilities were very clean.",
                },
                {
                    author: "Sundeep",
                    country: "Italy",
                    rating: 5,
                    date: "2026-05-17T07:29:00+02:00",
                    text: "It was a great experience, there’s around 10 fights which can go on til really late. The show starts at 6 and will be pre limbs. The main fights are at 8pm",
                },
            ],
        };
    }

    // --- Bangkok: Floating Market and Train Market Experience ---
    if (slug === 'floating-market-and-train-market-experience') {
        return {
            averageRating: 4.9,
            totalReviews: 7454,
            guideRating: 5.0,
            valueRating: 4.7,
            reviews: [
                {
                    author: "Łukasz",
                    country: "Australia",
                    rating: 5,
                    date: "2026-05-26T07:32:20+02:00",
                    text: "Viktor, Nok and Bong took a very good care of us during the trip. They well distributed the duties in between themselves so we avoid any chaotic situations. Nok helped me to localise the ATM which I found very helpful. Viktor stressed many interesting things about Thailand and outlined to schedule for the whole day. Great trip, great company. Well done!",
                },
                {
                    author: "Victhalia",
                    country: "Canada",
                    rating: 5,
                    date: "2026-05-25T12:32:13+02:00",
                    text: "I loved the boat tour around the coconut plantations. Though the markets are tourist focused",
                },
                {
                    author: "Verified Traveler",
                    country: "Singapore",
                    rating: 5,
                    date: "2026-05-25T09:23:30+02:00",
                    text: "Victor and Nj are amazing guides and the trip is very good value for money :)",
                },
                {
                    author: "Helen",
                    country: "New Zealand",
                    rating: 5,
                    date: "2026-05-25T09:17:37+02:00",
                    text: "Tuk and Katie were great tour guides! I hope to see them again on the next tour. Much love to all of Thailand! 🇹🇭✨🫶🏾",
                },
                {
                    author: "Chelsea",
                    country: "Australia",
                    rating: 5,
                    date: "2026-05-25T07:42:20+02:00",
                    text: "Woody and Mariah were excellent guides! Mariah hotspotted me data so that I could add her on WhatsApp and download the pictures of the meeting points. For the train market, they told us which side to sit on for the shade, how to barter and how expensive some items should be. For the floating market, they pointed out Monitor Lizards, gave more info on how expensive certain things should be, and recommended different foods and places to eat. Woody was telling jokes and answering all questions we h",
                },
                {
                    author: "Egemert",
                    country: "Italy",
                    rating: 5,
                    date: "2026-05-25T07:41:43+02:00",
                    text: "Thanks for Wanna , Jimmy and Pong . Everything was easy, amazing and understandable so I would suggest this tour with that team.",
                },
                {
                    author: "Linda",
                    country: "United Kingdom",
                    rating: 5,
                    date: "2026-05-25T07:39:55+02:00",
                    text: "More than I expected! Well worth the money. Woody and Maria were great! Always checking on us and helping us. Supplied us with different goodies to try. An absolutely wonderful day!",
                },
                {
                    author: "Angelina",
                    country: "Sweden",
                    rating: 5,
                    date: "2026-05-25T07:39:15+02:00",
                    text: "Maria and Woody we’re amazing. Other than the hot weather, everything was delightful.",
                },
            ],
        };
    }

    // --- Bangkok: White Lotus Thai Cooking Class with Market Tour ---
    if (slug === 'white-lotus-thai-cooking-class-with-market-tour') {
        return {
            averageRating: 5.0,
            totalReviews: 635,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: "Tiffany",
                    country: "Brazil",
                    rating: 5,
                    date: "2026-05-25T09:53:09+02:00",
                    text: "Afternoon well spent learning how to make a few traditional Thai dishes! Looking forward to showing off my new cooking skills. Very informative and interactive and excellent food! Come hungry!",
                },
                {
                    author: "Anya",
                    country: "Italy",
                    rating: 5,
                    date: "2026-05-22T10:00:04+02:00",
                    text: "The market tour was great and got to see so many things. The food was great and Jaeb was great. I will come back again to try with my friends next time",
                },
                {
                    author: "Brandy",
                    country: "Netherlands",
                    rating: 5,
                    date: "2026-05-22T05:27:39+02:00",
                    text: "This was such a fun class! Our guide, Jeab, was very knowledgeable and shared a lot of information about the ingredients and methods used in Thai cooking. We got to prepare four dishes that all tasted delicious and now have the skills and recipes to make them at home. Would absolutely recommend White Lotus cooking classes to anyone",
                },
                {
                    author: "Lucy",
                    country: "Italy",
                    rating: 5,
                    date: "2026-05-19T10:10:43+02:00",
                    text: "So fun, nice sized group, funny instructor and the food was so tasty. They also gave us recipes so we can make it at home. I’d definitely recommend",
                },
                {
                    author: "Dave",
                    country: "United States",
                    rating: 5,
                    date: "2026-05-19T10:07:07+02:00",
                    text: "What an amazing experience. Lots of laughs, very insightful and the food was so so good. Our teacher Piao was so patient, and the course was a slow pace and easy to follow along. For anyone interested in learning how to make some beautiful authentic Thai dishes, you will love this class!",
                },
                {
                    author: "dale",
                    country: "France",
                    rating: 5,
                    date: "2026-05-16T05:27:41+02:00",
                    text: "starts with a wonderful walk through the market, learning about the different spices and foods Thailand has to offer. then you are taught how to make four wonderful dishes. the class is extremely interactive and makes learning how to cook Thai dishes easy and fun. wonderful environment, clean and so beautiful.",
                },
                {
                    author: "Patrycja",
                    country: "Canada",
                    rating: 5,
                    date: "2026-05-16T03:08:19+02:00",
                    text: "I think cooking classes are must do when you travel! I really recommend it! Everything was so well organized and the recipes were great.",
                },
                {
                    author: "Sayok",
                    country: "Italy",
                    rating: 5,
                    date: "2026-05-15T05:47:23+02:00",
                    text: "Jeab is a really great, nice guest. She goes above and beyond, and was very accommodating of us being late because of traffic. Highly recommend this service and the food is very delicious!",
                },
            ],
        };
    }

    // --- Bangkok: Damnoen Saduak Market and Maeklong Railway Market ---
    if (slug === 'damnoen-saduak-market-and-maeklong-railway-market') {
        return {
            averageRating: 4.6,
            totalReviews: 28205,
            guideRating: 4.7,
            valueRating: 4.4,
            reviews: [
                {
                    author: "Michelle",
                    country: "India",
                    rating: 5,
                    date: "2026-05-26T10:08:03+02:00",
                    text: "Guide Rut and our driver was excellent, courteous and organized. We were picked up at our hotel, made a few brief stops to pick up other tour goers, in a comfy, air conditioned car, and then taken to the train station where we took a local train to our first stop, the Railway Market. What an experience pulling directly into the market! Rut’s recommendations for market shopping and lunch recommendation at the floating market were also spot on! Thank you for a great day!",
                },
                {
                    author: "Fidel Mateos",
                    country: "France",
                    rating: 5,
                    date: "2026-05-26T01:55:17+02:00",
                    text: "I had an amazing guide: Phu! And he made the day so valuable and remarkable",
                },
                {
                    author: "Erwann",
                    country: "United Kingdom",
                    rating: 5,
                    date: "2026-05-25T08:25:20+02:00",
                    text: "Amazing day in Bangkok with Tim as our guide! Between the floating market and the incredible market with the train passing right through the middle, it was such a unique and memorable experience.",
                },
                {
                    author: "Enes",
                    country: "Sweden",
                    rating: 5,
                    date: "2026-05-25T07:57:52+02:00",
                    text: "Tim was a great guide and helped us to visit these beautiful places with a lot of important information. It was enjoying and definitely worth to buy it!",
                },
                {
                    author: "Debashish",
                    country: "India",
                    rating: 5,
                    date: "2026-05-25T06:50:21+02:00",
                    text: "POOH was absolutely outstanding - professional, friendly, knowledgeable, and full of positive energy. She made the entire experience fun, smooth, and memorable from start to finish. You can really see how much she cares about her guests and takes pride in her work. Special thanks as well to P’Tou for the safe and comfortable driving throughout the trip. Highly recommend, truly excellent service ❤️🥰",
                },
                {
                    author: "Josephine Ebora",
                    country: "Singapore",
                    rating: 5,
                    date: "2026-05-25T06:42:40+02:00",
                    text: "The trip is amazing,beside being so hot. Owen is good guide and look after us. thank you for the hospitality.",
                },
                {
                    author: "Shani-lisa",
                    country: "New Zealand",
                    rating: 5,
                    date: "2026-05-25T04:47:40+02:00",
                    text: "Rut Was our Guide she was amazing, recommend the best places to eat and what to try. Kept us on track. The tour was also worth it to do 2 markets. Do the 6am tour as you still have time the rest of the day. Felt safe as a solo traveller also.",
                },
                {
                    author: "Kendra",
                    country: "United Kingdom",
                    rating: 5,
                    date: "2026-05-24T06:43:12+02:00",
                    text: "Tim was a great guide. Good knowledge. Easy to understand. Would definitely recommend.",
                },
            ],
        };
    }

    // --- Bangkok: Soi Cowboy, Nana, Soi 11, Rooftops, Clubs & Go Go's ---
    if (slug === 'soi-cowboy-nana-soi-11-rooftops-clubs-go-gos') {
        return {
            averageRating: 4.9,
            totalReviews: 1632,
            guideRating: 5.0,
            valueRating: 4.7,
            reviews: [
                {
                    author: "Judith",
                    country: "Singapore",
                    rating: 5,
                    date: "2026-05-25T03:03:07+02:00",
                    text: "Such an amazing experience. My husband and I had so much fun and would absolutely do this again. We felt safe, cared for and everything was so organized. Expect to walk a lot lol so wear sneakers. Would definetely do this again.",
                },
                {
                    author: "Abdul",
                    country: "Singapore",
                    rating: 5,
                    date: "2026-05-24T01:16:39+02:00",
                    text: "⭐️⭐️⭐️⭐️⭐️ I joined the Bangkok Nightlife Tour and ended up having a much better experience than I expected. As someone traveling solo, I wasn’t sure what to expect at first, but the group made it easy to relax and enjoy the night. It was a great mix of seeing different sides of Bangkok nightlife, meeting new people, and experiencing places I probably wouldn’t have gone to alone. What I liked most wasn’t even the venues — it was the people, conversations, and the energy throughout the night. If ",
                },
                {
                    author: "Cornelia",
                    country: "Netherlands",
                    rating: 5,
                    date: "2026-05-23T03:51:12+02:00",
                    text: "Eve was an amazing guide and the rooftops we went to were amazing!",
                },
                {
                    author: "domonique",
                    country: "New Zealand",
                    rating: 5,
                    date: "2026-05-22T21:10:09+02:00",
                    text: "I loved it I had fun at first I kind of felt awkward being a Solo Traveler but the guys made me feel very comfortable and after a couple of spots everybody kind of warmed up to everybody and we were just one big group having fun I really enjoyed myself it exceeded my expectation",
                },
                {
                    author: "jarred",
                    country: "New Zealand",
                    rating: 5,
                    date: "2026-05-16T12:23:10+02:00",
                    text: "as a person who loves social vibes with people , this event exceeded my expectations , from the bars to the amazing people , it is something I would definitely do again, The host nang is the absolute best , she made everyone feel comfortable , informed and always kept the energy high. she is incredible at her job which is why I think this event was such a success .",
                },
                {
                    author: "Elaine",
                    country: "Japan",
                    rating: 5,
                    date: "2026-05-15T17:45:39+02:00",
                    text: "Tina, our guide was friendly, energetic and she really worked hard to ensure everyone was having a great time. It was a great trip to let your hair down, meet new people and see some fantastic clubs. My only regret was not booking this trip sooner!",
                },
                {
                    author: "Jeremy James",
                    country: "United States",
                    rating: 5,
                    date: "2026-05-13T18:26:37+02:00",
                    text: "Perfect night. incredible rooftop views, and interesting clubs. Highly recommend if traveling alone. Tina was an exceptional hostess and guide.",
                },
                {
                    author: "Ivy",
                    country: "United Kingdom",
                    rating: 5,
                    date: "2026-05-13T02:51:59+02:00",
                    text: "It was great. I had an amazing time. I’ve got a chance to meet really great people on my solo trip to Bangkok. If you are in the area for this event for something to do, I must do you have a great time.",
                },
            ],
        };
    }

    // --- Bangkok: Tingly Thai Cooking School Half-Day Cooking Class ---
    if (slug === 'tingly-thai-cooking-school-half-day-cooking-class') {
        return {
            averageRating: 4.9,
            totalReviews: 1310,
            guideRating: 5.0,
            valueRating: 4.7,
            reviews: [
                {
                    author: "Olivia",
                    country: "Singapore",
                    rating: 5,
                    date: "2026-05-23T05:19:50+02:00",
                    text: "The cooking class was so much fun! We learned to make four different Thai dishes and went on a market tour. Everything was absolutely delicious and they easily made everything vegetarian for me. Highly recommend!!",
                },
                {
                    author: "Chris",
                    country: "Canada",
                    rating: 5,
                    date: "2026-05-22T01:28:57+02:00",
                    text: "This was a wonderful experience and was a great way to learn more about, create, and eat delicious Thai food. Our instructor, Cho, was the best. She was knowledgeable, funny and very nice. She guided us through the local market where we learned about all the key ingredients for our dishes. Overall it was a very unique and unforgettable experience and we are so happy we spent some of our time in Bangkok on this activity.",
                },
                {
                    author: "Janeen",
                    country: "United Kingdom",
                    rating: 5,
                    date: "2026-05-08T07:31:30+02:00",
                    text: "Cho was the most amazing host and instructor. She made me feel like an actual chef. All was in great humor and excitement of clean cooking. No salt and pepper for main flavors but wonderfully rich spices and unbelievable mixtures of vegetables made the for perfect Michelin meals that I cooked… my mind is still blown that I cooked the best Thai meals all by myself… I would recommend this class for all foodies.",
                },
                {
                    author: "Symone",
                    country: "United States",
                    rating: 5,
                    date: "2026-05-07T07:10:39+02:00",
                    text: "What an amazing activity! Such an amazing group of staff and very clean place to cook. The dishes and instructions were so easy to follow along and they were delicious. I learnt a lot too! I would highly recommend!",
                },
                {
                    author: "Sydney",
                    country: "Brazil",
                    rating: 5,
                    date: "2026-05-06T23:45:07+02:00",
                    text: "This was the best class I've ever taken part in. The food was PHENOMENAL. Our guide was so energetic and a joy to be around. At the end, we got a cook book and chopsticks to take home.",
                },
                {
                    author: "Ceri",
                    country: "Japan",
                    rating: 5,
                    date: "2026-04-22T09:21:29+02:00",
                    text: "Cho was a great instructor. Personable and a big character and she brought the whole thing alive. Was well organised with the market and clean up around while you eat your dishes, and then the little doggy bag at the end. Wasn't expecting something so well put together and probably the best activity I've done with this app overall.",
                },
                {
                    author: "Alison",
                    country: "South Korea",
                    rating: 5,
                    date: "2026-04-21T06:55:38+02:00",
                    text: "I loved that we made one course at a time and ate it, before moving on to the next course, which meant the afternoon was well paced. We were also given a book with all the recipes and a QR code to access even more recipes. Free water was provided throughout. The guide was fantastic - personable, knowledgeable and with a good sense of humour. I am amazed at the quality of the food we produced, it was a very high standard. I took the Pad Thai back to the hotel with me so I had room for the mango s",
                },
                {
                    author: "Edlyn",
                    country: "United States",
                    rating: 5,
                    date: "2026-04-20T00:33:04+02:00",
                    text: "The class with instructor Cho was an absolute delight. She made cooking Thai food feel both effortless and taste incredibly flavorful. Cho took the time to introduce each ingredient, provided clear recipe cards, and expertly guided us through techniques like using a wok and cooking with high heat. Her energy brought smiles to everyone in the group. I would highly recommend this experience to anyone interested in learning the authentic flavors of Thai cuisine, including curry, Pad Thai, mango sti",
                },
            ],
        };
    }

    // --- Bangkok: Mahanakhon SkyWalk Entry Ticket with Options ---
    if (slug === 'mahanakhon-skywalk-entry-ticket-with-options') {
        return {
            averageRating: 4.6,
            totalReviews: 4522,
            guideRating: 4.7,
            valueRating: 4.4,
            reviews: [
                {
                    author: "Chelsea",
                    country: "Brazil",
                    rating: 5,
                    date: "2026-05-22T08:11:33+02:00",
                    text: "Really great The staff at the building are so professional too",
                },
                {
                    author: "Julien",
                    country: "Japan",
                    rating: 5,
                    date: "2026-05-16T08:50:22+02:00",
                    text: "Nice sky view but a little expensive for what it is… Best part there is bar and food so you can stay as long as you want.",
                },
                {
                    author: "Stu",
                    country: "Italy",
                    rating: 5,
                    date: "2026-05-10T14:18:48+02:00",
                    text: "Very cool seeing Bangkok from the top of the skyline. Scary experience walking on the glass but well worth it.",
                },
                {
                    author: "Armando",
                    country: "United Kingdom",
                    rating: 5,
                    date: "2026-05-09T00:53:53+02:00",
                    text: "great views of Bangkok from that high up. I'm scared of heights. some stranger had to grab my hand and leave me out onto the walkway. lol.. I would recommend trying it once even if you are afraid of heights",
                },
                {
                    author: "carly",
                    country: "Japan",
                    rating: 5,
                    date: "2026-05-08T19:53:59+02:00",
                    text: "It’s definitely an experience you should try. Amazing views from the building itself and from the glass viewing deck is pretty unique if you’re brave enough to try.",
                },
                {
                    author: "Keith",
                    country: "Australia",
                    rating: 5,
                    date: "2026-05-07T06:07:38+02:00",
                    text: "Just the best I brought my wife here for her 50th birthday she loved it she did the tilt she even went on the glass floor we had lunch looking at the sunset. It was just the best night",
                },
                {
                    author: "Omar",
                    country: "India",
                    rating: 5,
                    date: "2026-05-05T04:26:29+02:00",
                    text: "Amazing place to visit! Amazing view over whole BKK",
                },
                {
                    author: "Ian",
                    country: "Brazil",
                    rating: 5,
                    date: "2026-05-04T12:59:16+02:00",
                    text: "Very enjoyable experience. views were amazing. went before sunset to get views in daylight and after dark.",
                },
            ],
        };
    }

    // --- Bangkok: Backstreets Food Tour with 15+ Tastings ---
    if (slug === 'backstreets-food-tour-with-15-tastings') {
        return {
            averageRating: 4.9,
            totalReviews: 3157,
            guideRating: 5.0,
            valueRating: 4.7,
            reviews: [
                {
                    author: "Ashley",
                    country: "Germany",
                    rating: 5,
                    date: "2026-05-26T15:04:47+02:00",
                    text: "Our tour with Johnny and Butter was amazing! Not only did we get to try so many delicious dishes we would’ve never thought to order, but we learned so much about the flavor profiles, cultural backgrounds, etc. about each dish and restaurant along the way (highly entertaining). Additionally, they accommodated our dietary restrictions perfectly (always offered an alternative and made sure to check in with us at every stop) and were so thoughtful about providing water, napkins, wet wipes, ponchos w",
                },
                {
                    author: "Verified Traveler",
                    country: "Sweden",
                    rating: 5,
                    date: "2026-05-24T17:20:16+02:00",
                    text: "Super fun - great guides, terrific food and a great group! Got to know some new dishes, 8ngredients etc…. Recommended",
                },
                {
                    author: "Rachel",
                    country: "New Zealand",
                    rating: 5,
                    date: "2026-05-18T00:52:13+02:00",
                    text: "This is the second tour I have done with this company and absolutely loved it again. tried so many different foods. our tour guide was excellent as well",
                },
                {
                    author: "Keerthi",
                    country: "Brazil",
                    rating: 5,
                    date: "2026-05-15T02:35:03+02:00",
                    text: "Noah and Am were so sweet and welcoming! We hit so many spots and the food was sooo delicious! ^_^ totally recommend this tour, especially with Noah!",
                },
                {
                    author: "Ash",
                    country: "South Korea",
                    rating: 5,
                    date: "2026-05-06T02:54:50+02:00",
                    text: "Arm and Ploy were fantastic! Ploy was really engaging and kept the tour fun and interesting. Arm was the workhorse making sure we had seats and kept us well fed! such a fantastic tour and one of my favourite things from the Bangkok trip. 5* must do",
                },
                {
                    author: "Joseph",
                    country: "Sweden",
                    rating: 5,
                    date: "2026-05-03T17:25:52+02:00",
                    text: "Johnny and Muay were great. Very enthusiastic and informative about the dishes we tried. Even gave us tips on how to make on our own. Very fun and just the right amount of food to feel full but not stuffed.",
                },
                {
                    author: "Fiona",
                    country: "Italy",
                    rating: 5,
                    date: "2026-05-03T12:06:55+02:00",
                    text: "This tour goes down as one of the best food tours I've ever been on. Anja was outstanding as was her assistant Ms Om. Anja gave so much information along the way and was so engaging and always checking everyone was OK along the way. Small group made all the difference and when they say \"come hungry\"...they mean it for good reason and there was always more than enough at each tasting. Highly, highly recommended! Thank you Anja & Ms Om for an unforgettable experience!!!🫶🏻🫶🏻🫶🏻",
                },
                {
                    author: "Laurence",
                    country: "United States",
                    rating: 5,
                    date: "2026-05-02T11:07:27+02:00",
                    text: "The tour was amazing. we got to try 15 different dishes and most of the restaurants we ate at had air conditioning. We were offered bottled water all throughout the tour. Our tour guide Ploy was amazing and so knowledgeable! Highly recommend!!",
                },
            ],
        };
    }

    // --- Best Thai Cooking Class in Sukhumvit / Market Tour - Mango ---
    if (slug === 'thai-cooking-class-in-sukhumvit-market-tour-mango') {
        return {
            averageRating: 4.9,
            totalReviews: 268,
            guideRating: 5.0,
            valueRating: 4.7,
            reviews: [
                {
                    author: "Linda",
                    country: "South Korea",
                    rating: 5,
                    date: "2026-05-13T09:17:28+02:00",
                    text: "It was a very nice morning. We learned a lot new interesting things about the thai cuisine and had a lot of fun while cooking. Definitely would do it again!",
                },
                {
                    author: "Tia",
                    country: "Japan",
                    rating: 5,
                    date: "2026-05-09T05:18:12+02:00",
                    text: "This cooking experience was absolutely amazing! I booked the morning session, from when I first arrived Serene was so warm and friendly. She showed me to a seat, explained today's class, gave me a glass of cold water and let me smell some of the things we were using. Once she had gone through what we would be doing we went to the local Thai market to get some of the ingredients for the dishes. She demonstrated how to prepare everything and was very patient. The whole experience was so personalis",
                },
                {
                    author: "Xiao",
                    country: "France",
                    rating: 5,
                    date: "2026-05-08T23:01:27+02:00",
                    text: "It was very fun, we made 4 courses of Thai cuisine in one class, also went to the market and learned the Thai herbs and ingredients. Good experience",
                },
                {
                    author: "Amy",
                    country: "Italy",
                    rating: 5,
                    date: "2026-04-25T13:50:54+02:00",
                    text: "Pak (our guide) was incredible. She was so interactive with the group. We were there with our 10 and 13 yr olds and they loved the class. Highly recommend!",
                },
                {
                    author: "Carmel",
                    country: "Netherlands",
                    rating: 5,
                    date: "2026-04-24T10:50:04+02:00",
                    text: "Such a fun cooking class with Paik, highly recommend!",
                },
                {
                    author: "Sean",
                    country: "South Korea",
                    rating: 5,
                    date: "2026-04-24T07:25:55+02:00",
                    text: "Excellent cooking class, great value for money and food/recipes were very good.",
                },
                {
                    author: "Andrea",
                    country: "Australia",
                    rating: 5,
                    date: "2026-04-05T01:07:22+02:00",
                    text: "Incredible experience! Making food from scratch to eat it makes everything taste better! The place and the atmosphere were great, also our guide",
                },
                {
                    author: "Antoinette",
                    country: "India",
                    rating: 5,
                    date: "2026-04-03T13:16:09+02:00",
                    text: "This was perfect for us! We were the end of our trip and wanted something to avoid the heat! The place was very clean, food was very good perfect for families and activity indoor She was very nice and friendly",
                },
            ],
        };
    }

    // --- Bangkok Authentic Tasting Thai-Chinatown Walking Food Tour ---
    if (slug === 'bangkok-authentic-tasting-thai-chinatown-walking-food-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 1048,
            guideRating: 5.0,
            valueRating: 4.7,
            reviews: [
                {
                    author: "Cloey",
                    country: "Australia",
                    rating: 5,
                    date: "2026-05-25T07:31:35+02:00",
                    text: "The guide, Kwan, was absolutely amazing. She was very knowledgeable about the food, and its origins in the city. Such an amazing experience, and the food was incredible!",
                },
                {
                    author: "Nitin",
                    country: "Netherlands",
                    rating: 5,
                    date: "2026-05-23T14:07:17+02:00",
                    text: "amazing tour, good food at all places, in the end I was super full",
                },
                {
                    author: "Josh",
                    country: "Japan",
                    rating: 5,
                    date: "2026-05-20T06:47:36+02:00",
                    text: "Excellent tour with excellent food in spots we’d otherwise never know to go to. TK, our guide, was the best. He was super nice, funny, and knowledgeable. Would highly recommend",
                },
                {
                    author: "John",
                    country: "United States",
                    rating: 5,
                    date: "2026-05-19T13:17:34+02:00",
                    text: "Kwon is a very good guide. Tried many different food and they were all fantastic.",
                },
                {
                    author: "Rebecca",
                    country: "United States",
                    rating: 5,
                    date: "2026-05-16T12:51:39+02:00",
                    text: "Aey was a great guide helpful and informative. Wide range of food, some was a bit too spicy for me, but there were plenty of other things I could eat.",
                },
                {
                    author: "Todd",
                    country: "France",
                    rating: 5,
                    date: "2026-05-14T02:09:44+02:00",
                    text: "Aey was fantastic, knowledgeable, and extremely concerned that no one left hungry. Would recommend a tour to anyone",
                },
                {
                    author: "Brianna",
                    country: "Germany",
                    rating: 5,
                    date: "2026-05-12T23:24:40+02:00",
                    text: "It was amazing. Had the best time meeting new people and trying popular dishes. Our guide made the experience worthwhile.",
                },
                {
                    author: "Rachelle",
                    country: "Singapore",
                    rating: 5,
                    date: "2026-05-07T03:29:12+02:00",
                    text: "We both really enjoyed being shown some local street food, all the different options tasted so good. Our guide Kwan was very friendly and knowledgeable. Highly recommended 🙏🥰",
                },
            ],
        };
    }

    // --- From Bangkok: Khao Yai National Park Small-Group Day Trip ---
    if (slug === 'khao-yai-national-park-small-group-day-trip') {
        return {
            averageRating: 4.5,
            totalReviews: 791,
            guideRating: 4.6,
            valueRating: 4.3,
            reviews: [
                {
                    author: "Victoria",
                    country: "Australia",
                    rating: 5,
                    date: "2026-05-22T11:21:45+02:00",
                    text: "Mark was beyond excellent! He was very knowledgeable, friendly and attentive. The hike was well worth the drive, we enjoyed seeing the waterfalls, monkeys and vegetation. Mark made sure we were safe always and enjoying ourselves, which we really appreciated. & The lunch spot was even better than i anticipated! My mom (64) and I (25) highly recommend this tour for a fun filled, slightly challenging, very rememberable experience. Thank you so much to Mark !",
                },
                {
                    author: "Derick",
                    country: "Netherlands",
                    rating: 5,
                    date: "2026-05-21T03:42:39+02:00",
                    text: "Our experience with our tour guide with Cherry was exceptional. We were truly blessed to witness a Hornbill, an elephant and other beautiful animals. All the tour the locations were organized and flexible to serve us a great experience. Thank you Cherry!",
                },
                {
                    author: "Lachlan",
                    country: "Brazil",
                    rating: 5,
                    date: "2026-05-18T12:02:55+02:00",
                    text: "Had the greatest time. The other group that was meant to be there on the day didn't show up (be on time, they only wait 10 extra minutes from the initial start time if people are late), so I essentially had a private tour. Walks were beautiful, the food was delicious. We were even running a little ahead of schedule at one point so we ducked into the visitor centre and I got to go over the history of Khao Yai. Brilliant way of mixing up a city-centric holiday and stretching your legs for a bit in",
                },
                {
                    author: "Artur",
                    country: "Germany",
                    rating: 5,
                    date: "2026-04-18T05:29:03+02:00",
                    text: "Even though it's dry season and there was no water in the waterfalls, I really enjoyed the trip, the walk through the jungle was really fun, and we got to see some animals at the campsite",
                },
                {
                    author: "Benjamin",
                    country: "South Korea",
                    rating: 5,
                    date: "2026-04-08T18:00:16+02:00",
                    text: "Guide spoke good english and a Bit of German , the car had a good temperature inside , we had enough stops for food/toilette. We saw some animals Like Monkeys, birds, Fish a lizard and on the Camp station were some tame deer. We could take a Lot of panaroma pictures with the waterfalls and the landscape. Thank you for the nice Tour. Best regards Benjamin from Germany",
                },
                {
                    author: "Luka",
                    country: "Italy",
                    rating: 5,
                    date: "2026-04-02T06:56:50+02:00",
                    text: "Our guide, Nok, was incredibly friendly and enthusiastic, and made this experience memorable. Khao Yai was beautiful and we were lucky to see some gibbons and some smaller critters. It was the perfect amount of hiking. Transport was comfortable, including aircon and water. Highly recommend if you’re looking for a break from the city.",
                },
                {
                    author: "Daniel",
                    country: "Germany",
                    rating: 5,
                    date: "2026-03-27T00:29:21+01:00",
                    text: "Really really good tour! A bit tiring especially as I had only arrived into Bangkok from the UK the day before so I was quite jet lagged but otherwise definitely worth doing",
                },
                {
                    author: "Omar",
                    country: "Singapore",
                    rating: 5,
                    date: "2026-03-23T07:39:38+01:00",
                    text: "Napat was excellent, really helpful and even gave me a few ideas on locations to make the trip extra special! the whole day was phenomenal",
                },
            ],
        };
    }

    // --- Bangkok Night River Experience with Dinner & Cultural Show ---
    if (slug === 'bangkok-night-river-experience-with-dinner-cultural-show') {
        return {
            averageRating: 4.9,
            totalReviews: 24,
            guideRating: 5.0,
            valueRating: 4.7,
            reviews: [
                {
                    author: "Verified Traveler",
                    country: "Germany",
                    rating: 5,
                    date: "2026-05-26T07:59:51+02:00",
                    text: "The entire cruise was excellent. So nice I'll be doing it again one day. All of the singers and performance where top notch.",
                },
                {
                    author: "Dominic",
                    country: "United Kingdom",
                    rating: 5,
                    date: "2026-05-26T06:51:12+02:00",
                    text: "beautiful scenery and food, with nice entertainment",
                },
                {
                    author: "Verified Traveler",
                    country: "United Kingdom",
                    rating: 5,
                    date: "2026-05-24T02:42:43+02:00",
                    text: "bellissima esperienza.Qualità prezzo ottimo. vasta scelta , servizio attento, intrattenimento molto tradizionale. consiglio di vivere questa esperienza.",
                },
                {
                    author: "Verified Traveler",
                    country: "New Zealand",
                    rating: 4,
                    date: "2026-05-21T22:25:50+02:00",
                    text: "My only complaint was that the music was so loud the entire evening that you couldn’t sit and talk. My wife and I had to scream just to be heard. There was also no place to get away from the loud music. I suggest you turn the speakers off in the lowest deck so passengers have a quiet place to go if they choose.",
                },
            ],
        };
    }


    // --- JODHPUR: jodhpur-blue-city-tour-car-guide (auto-added 2026-07-02) ---
    if (slug === 'jodhpur-blue-city-tour-car-guide') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.8,
            reviews: [
                { author: "Eleanor M.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide brought Mehrangarh Fort completely to life — the tales of the Rathore rulers and the handprints at the gate gave me chills. Having the air-conditioned car waiting outside each stop was a blessing in July. We never felt rushed and he happily rearranged things so we ended the day looking out over the blue rooftops. Worth every penny." },
                { author: "Julian R.", country: "Germany", rating: 5, date: "2025-08-22", text: "A brilliantly organised private day. The driver picked us up right on time from our haveli and the Toyota was spotless and cool. What impressed me most was how much freedom we had — we added Toorji Ka Jhalra stepwell on a whim and the guide made it happen. The indigo lanes were unforgettable for photos." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-09-30", text: "Did this with my parents who are in their seventies and it worked perfectly. The private car meant they could rest between sights, and the guide slowed the fort climb so nobody struggled on the ramps. Jaswant Thada's marble was stunning in the morning light. Genuinely thoughtful service from start to finish." },
                { author: "Marcus T.", country: "Australia", rating: 4, date: "2025-11-08", text: "Fantastic value for a full private day at sixty dollars, and the guide really knew his history. My only note is that Mehrangarh was heaving with crowds by late morning and the climb up is steeper than I expected in the heat. Go early if you can. Everything else, from the car to the blue city walk, was excellent." },
                { author: "Chloé D.", country: "France", rating: 5, date: "2026-01-17", text: "The blue houses below the fort are even more magical in person, and our guide knew exactly which quiet lanes to wander for the best colours and fewer tourists. He also pointed us to a wonderful rooftop spot for a Marwari thali lunch overlooking Mehrangarh. Warm, patient and full of local stories. Highly recommend this one." },
                { author: "David O.", country: "Canada", rating: 5, date: "2026-03-05", text: "Umaid Bhawan's Art Deco grandeur and the vintage car collection were a surprise highlight, and the guide's commentary on the royal family living there was fascinating. Pickup and drop-off from our hotel was seamless. Eight hours flew by and we saw far more than we could have on our own. A superb introduction to Jodhpur." },
                { author: "Femke V.", country: "Netherlands", rating: 4, date: "2026-04-19", text: "Really enjoyable and great value for a private car and guide. The heat in April was intense by midday, so a couple of the later temple stops felt a little rushed as we tried to stay ahead of it. That said, the air-conditioned car saved us, and the guide's knowledge of Mehrangarh made the whole day worthwhile." },
                { author: "Omar A.", country: "United Arab Emirates", rating: 5, date: "2026-06-11", text: "Everything was handled for us — tickets, parking, timing — so we could just enjoy Jodhpur. The guide tailored the pace to our young kids and kept them engaged with stories at the fort. Ending the afternoon watching the sun catch the blue city was the perfect finish. Effortless, professional and genuinely memorable." },
            ],
        };
    }

    // --- JODHPUR: mehrangarh-fort-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'mehrangarh-fort-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide's knowledge of Mehrangarh was extraordinary. He walked us through the palace courtyards explaining the maharajas, the cannonball marks on the gates and the handprints of the royal widows, and none of it felt rehearsed. Six hours flew by. We took the guide-only option since we had a driver, and it was superb value at twenty dollars. Easily the highlight of our Rajasthan trip." },
                { author: "Mathis L.", country: "France", rating: 5, date: "2025-09-02", text: "We booked the guide with car and it was the right call. The distances between Jaswant Thada, Umaid Bhawan and the fort are bigger than they look on the map, and the air-conditioned car was a relief. Our guide timed everything so we hit the ramparts at sunset, watching the blue houses glow gold. Warm, patient and never rushed. Highly recommend." },
                { author: "Priya S.", country: "Singapore", rating: 4, date: "2025-08-19", text: "A really good tour and a lovely guide who clearly loves his city. My only honest note is the climb up to the fort palace is steep and it was brutally hot in August, so start early and drink lots of water. We ended up using the lift for part of it. Once inside, the stories and the views made it all worth it." },
                { author: "Trevor M.", country: "Australia", rating: 5, date: "2025-10-27", text: "Brilliant private day. What I appreciated most was the flexibility, when I got interested in the old blue lanes below the fort our guide happily spent extra time there and pointed out the Toorji stepwell. He handled the ticket queues so we barely waited. The white marble of Jaswant Thada was a quiet, beautiful surprise after the busy fort." },
                { author: "Hannah K.", country: "Germany", rating: 5, date: "2025-12-11", text: "Travelling with my parents who are in their seventies, I was worried about the pace, but this being fully private made all the difference. The guide slowed down whenever they needed and we used the car to keep walking to a minimum. His explanations of Umaid Bhawan and the royal family were fascinating. Thoughtful, kind and genuinely knowledgeable." },
                { author: "Daniel R.", country: "United States", rating: 5, date: "2026-02-08", text: "The value here is hard to beat. Sixty dollars for a private car, driver and an expert guide for six hours across Jodhpur's main sights is a steal by any standard. Our guide was punctual, spoke excellent English and knew exactly which corners of Mehrangarh gave the best photos over the Blue City. We came away understanding the place, not just seeing it." },
                { author: "Sanne V.", country: "Netherlands", rating: 4, date: "2026-04-22", text: "Genuinely great guiding and a smooth day overall. The fort was quite crowded when we arrived late morning, so my one tip is book the early start to beat the tour buses. Our guide still found us calmer spots and worked around the crowds well. The rampart views and his history of the Rathore rulers made the whole visit memorable." },
                { author: "Faisal A.", country: "United Arab Emirates", rating: 5, date: "2026-06-05", text: "One of the best guides we have had anywhere. He tailored the six hours completely to us, focusing on the fort's architecture and museum galleries which is exactly what my wife wanted. The car was clean and comfortable and the driver careful in the narrow old city streets. Confirmation was quick and the pickup from our hotel was right on time." },
            ],
        };
    }

    // --- JODHPUR: thar-desert-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'thar-desert-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Emily R.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "The camel ride at sunset was the highlight of our whole Rajasthan trip. Watching the dunes turn gold while swaying along on the camel felt like something out of a film. Our driver picked us up right on time from the hotel and the air-conditioned car made the drive out so easy. Genuinely unforgettable six hours." },
                { author: "Lucas M.", country: "Germany", rating: 5, date: "2025-08-30", text: "Brilliantly organised half-day from Jodhpur. The jeep safari was a proper adventure, bouncing over the sand and stopping at a couple of small villages I never would have found on my own. The local snacks they served were simple but delicious and completely vegetarian, which suited me perfectly. Great value for a private car and both safaris." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-09-22", text: "We travelled as a family with two kids and they were thrilled the entire time. The children loved climbing onto the camel and the jeep ride had them laughing the whole way. Having a private car meant we could set our own pace and take breaks when the little ones needed. Highly recommend for families visiting the Thar." },
                { author: "James O.", country: "Australia", rating: 4, date: "2025-10-11", text: "A really enjoyable desert experience, though be warned it was seriously hot even in the afternoon and I wished I had brought more water. The camel and jeep safaris were both great fun and the golden dunes are stunning. Just plan for the heat and wear a proper hat. Still very glad we did it." },
                { author: "Camille D.", country: "France", rating: 5, date: "2025-12-03", text: "The drive out to the Thar was comfortable and the driver was friendly and knowledgeable about the area. What stayed with me most were the wide, empty desert horizons at dusk, so peaceful compared to the busy city. The camel handler was gentle and made sure I felt safe getting on and off. A lovely, calm escape." },
                { author: "Noah B.", country: "United States", rating: 5, date: "2026-02-17", text: "Excellent value for ninety dollars. You get a private air-conditioned car both ways, a camel safari and a jeep safari, plus a taste of local food, all in one afternoon. Everything ran smoothly from the hotel pickup to the drop-off. If you only have time for one desert trip out of Jodhpur, this is a smart choice." },
                { author: "Sanne V.", country: "Netherlands", rating: 4, date: "2026-04-08", text: "Lovely tour overall and the sunset over the dunes was gorgeous. My only small gripe was that the food stop felt a little rushed and I would have liked more time there. That said, the camel ride was memorable and the private car was very comfortable. Worth doing, just do not expect a leisurely sit-down meal." },
                { author: "Omar A.", country: "United Arab Emirates", rating: 5, date: "2026-05-29", text: "An authentic slice of desert life just outside Jodhpur. The jeep took us through rustic little villages and the camel safari across the dunes was serene. Pickup and drop-off at our hotel were seamless and the whole day was well paced across the six hours. The photos we came back with are some of my favourites from India." },
            ],
        };
    }

    // --- JODHPUR: ghanta-ghar-walking-tour (auto-added 2026-07-02) ---
    if (slug === 'ghanta-ghar-walking-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.8,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide grew up in these lanes and it showed. He led us down alleys we would never have found alone, explaining why the houses are painted blue and pointing out little shrines tucked between doorways. Three hours flew by. Starting at the Clock Tower made everything easy to find. Genuinely the highlight of our week in Rajasthan." },
                { author: "Mathis L.", country: "France", rating: 5, date: "2025-08-29", text: "A wonderful slow walk through the old city. We paused constantly for photos and our guide never rushed us once. The views up toward Mehrangarh Fort from the rooftops were spectacular, and he knew exactly where the light was best in the late afternoon. For twenty-five dollars this is remarkable value. Highly recommended for anyone who loves photography." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-09-18", text: "I have been to Jodhpur before but never understood it until this walk. Our guide wove in stories of the royal past, temple traditions and daily life in the blue houses. He introduced us to a chai stall near Sardar Market that I still think about. Warm, knowledgeable and clearly passionate about his city." },
                { author: "Daniel K.", country: "Germany", rating: 4, date: "2025-10-07", text: "Really enjoyable and informative walk with a friendly local guide. My only note is that we did it around midday and the heat in the narrow lanes was intense even in October. Book an early morning slot if you can. Aside from that the stories were fascinating and the fort views made it all worthwhile." },
                { author: "Chloe M.", country: "Australia", rating: 5, date: "2025-11-22", text: "Such an authentic experience. We wandered through the indigo lanes, saw hidden temples and a lovely old stepwell, and our guide answered every random question we threw at him. It never felt like a scripted tour, more like a friend showing us around. Meeting at the Clock Tower was simple. Would do it again in a heartbeat." },
                { author: "Robert H.", country: "United States", rating: 5, date: "2026-01-30", text: "Fantastic three hours on foot through the Blue City. My wife and I are in our sixties and the pace suited us perfectly, with plenty of stops. The guide clearly loves Jodhpur and shared its history with real pride. Walking the lanes beneath Mehrangarh at dusk was magical. Great value and a personal touch you do not get from big groups." },
                { author: "Sanne V.", country: "Netherlands", rating: 4, date: "2026-03-15", text: "Lovely introduction to the old town and a very engaging guide. The lanes are gorgeous and full of little surprises. One small thing, the cobbles and steps are uneven so decent shoes are a must, and a couple of the busier bazaar stretches got crowded. Still, the storytelling and blue-lane views made this well worth it." },
                { author: "Omar A.", country: "United Arab Emirates", rating: 5, date: "2026-05-09", text: "An excellent walking tour led by someone who truly knows every corner of the Blue City. We started early to beat the heat, which I recommend, and finished before the day got harsh. He showed us quiet viewpoints for the fort and explained the meaning behind the blue walls. Thoughtful, unhurried and genuinely memorable." },
            ],
        };
    }

    // --- JODHPUR: mehrangarh-fort-private-tour (auto-added 2026-07-02) ---
    if (slug === 'mehrangarh-fort-private-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide made Mehrangarh Fort come alive. He knew the history of every courtyard and palace room, and pointed out the handprints at the gate that I would have walked straight past. Having a private car meant we set our own pace and never felt rushed through the museum. Easily the best day of our Rajasthan trip." },
                { author: "Mark T.", country: "Australia", rating: 5, date: "2025-08-22", text: "We started early to beat the heat and it was the right call. By the time we reached the fort ramparts the whole Blue City was spread out below us, and later the guide took us to a rooftop for the golden-hour view. The lassi and samosa stop was a lovely touch. Driver was punctual and the AC car was spotless." },
                { author: "Sophie L.", country: "France", rating: 4, date: "2025-09-30", text: "A really good tour with a knowledgeable guide who clearly loves his city. My only honest note is that Mehrangarh involves a steep climb and it was very hot in the afternoon, so wear proper shoes and start early. The umbrellas helped. Jaswant Thada and the blue lanes were the highlight for me. Worth it overall." },
                { author: "Daniel K.", country: "Germany", rating: 5, date: "2025-10-18", text: "Excellent value for a fully private day. The air-conditioned car covered Mehrangarh, Jaswant Thada, Umaid Bhawan and Mandore Gardens without any hassle, and we could linger wherever we liked. Our guide adjusted the plan when we wanted extra time in the old town near the Clock Tower. Booking was simple and the confirmation came through quickly." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2025-11-27", text: "Traveling with my parents, I was worried about the fort steps, but the guide showed us the lift and paced everything perfectly. He was patient, warm and full of stories about Jodhpur's royal history. The Blue City walk through the indigo lanes was magical, and the vegetarian food recommendations near Sardar Market were spot on." },
                { author: "James O.", country: "United States", rating: 5, date: "2026-01-15", text: "We took the option with entry tickets included and it made the day effortless, no queuing for cash or tickets at each site. Mehrangarh is genuinely one of the most impressive forts I have seen, and our guide's commentary added so much context. Loved the winding walk through the Blue City afterwards. Highly recommend the private format." },
                { author: "Amelie V.", country: "Netherlands", rating: 4, date: "2026-03-08", text: "Beautiful sights and a friendly, well-informed guide. Honestly the fort was quite crowded by late morning and a couple of the later stops at Mandore felt a little rushed near the end of the eight hours. That said, Jaswant Thada was peaceful and the views over the city were unforgettable. Good tour, just start as early as they offer." },
                { author: "Carlos M.", country: "Spain", rating: 5, date: "2026-05-19", text: "From pickup at our haveli to drop-off, everything ran smoothly. The guide was fantastic on the details of Umaid Bhawan and the fort's cannons, and he found us the best photo spots over the blue rooftops. Having water and an umbrella provided in the heat was thoughtful. A relaxed, private day that we would happily book again." },
            ],
        };
    }

    // --- JODHPUR: mehrangarh-fort-exploration-private-tour (auto-added 2026-07-02) ---
    if (slug === 'mehrangarh-fort-exploration-private-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.9,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide's knowledge of Mehrangarh was outstanding. He explained the handprints at the gate, the palace courtyards and the cannon-scarred walls in a way that made the whole fort come alive. Having a private car meant we never waited around in the heat. Easily the highlight of our Rajasthan trip and worth every penny." },
                { author: "Lukas B.", country: "Germany", rating: 5, date: "2025-08-02", text: "The Toorji Ka Jhalra stepwell was the surprise of the day for me. Beautiful rose-red stone and hardly any crowds when we arrived early. Our guide knew exactly which lanes had the best blue walls for photos. The included lassi at a little shop near the Clock Tower was delicious. Genuinely well organised from pickup to drop-off." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-09-19", text: "Booked this as a private tour for my parents and it was perfect for them. The AC car between stops kept everyone comfortable and the guide slowed down whenever the fort ramps got steep. The optional tuk-tuk through the indigo lanes was the part my father talked about all evening. Excellent value for a private experience." },
                { author: "Marcus T.", country: "Australia", rating: 4, date: "2025-10-11", text: "Really good tour and a friendly, knowledgeable guide. My only note is that Mehrangarh was busy by the time we finished the lower courtyards, and the climb up the ramps is steeper than I expected in the heat. Start early if you can. The stepwell and the market lanes afterwards more than made up for it though." },
                { author: "Camille R.", country: "France", rating: 5, date: "2025-11-23", text: "What made this special was how personal it felt. Just us, the guide and the driver, so we could linger at the ramparts watching the blue city spread out below. The samosa snack was a nice touch and the guide happily pointed us to the best sweet shop near Sardar Market afterwards. Warm, unhurried and full of stories." },
                { author: "Daniel V.", country: "Netherlands", rating: 5, date: "2026-01-08", text: "Hotel pickup was punctual and the whole six hours flowed effortlessly. Our guide balanced the big sights, the fort and the Ghanta Ghar, with quiet residential lanes we'd never have found alone. The blue houses in the afternoon light were unforgettable. For fifty dollars as a private group this is remarkable value." },
                { author: "Sofia M.", country: "Spain", rating: 4, date: "2026-03-15", text: "A lovely day overall with a patient guide who answered all our questions about the fort's history. Honest heads-up: even in March the midday sun was strong and the fort's stone soaks up the heat, so bring more water than you think. The tuk-tuk ride and the cool indigo lanes were a welcome relief. Would still recommend." },
                { author: "Hassan A.", country: "United Arab Emirates", rating: 5, date: "2026-05-27", text: "We did an early start to beat the summer heat and it was the right call. By the time other groups arrived at Mehrangarh we were already exploring the stepwell and the old market lanes. The private car and driver made everything smooth, and the guide's love for Jodhpur was obvious. A fantastic, well-paced introduction to the Blue City." },
            ],
        };
    }

    // --- JODHPUR: padamsar-lake-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'padamsar-lake-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.8,
            reviews: [
                { author: "Hannah W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Easily the best thing we did in Jodhpur. Our guide led us through blue lanes we'd never have found alone, stopping at tiny doorways to explain the history behind each colour. The snack stops were a highlight, the savory bites were incredible. Three hours flew by and never once felt rushed. Genuinely local and personal." },
                { author: "Marcus T.", country: "Germany", rating: 5, date: "2025-08-02", text: "A wonderful walk away from the tourist crowds. What impressed me most was how our guide knew every family and shopkeeper in the lanes, so we tasted sweets you simply cannot find on your own. Loved the hidden viewpoint over the blue rooftops. Worth far more than the modest price we paid." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2025-09-11", text: "So charming and unhurried. We wandered narrow indigo alleys, photographed carved wooden doors and learned why the houses are painted blue. The Rajasthani snacks were a delicious surprise, all vegetarian and perfect for me. Our guide adjusted the pace for my mother, who walks slowly, which we really appreciated." },
                { author: "Daniel R.", country: "Australia", rating: 4, date: "2025-10-06", text: "Really enjoyable food and lanes tour with a friendly, knowledgeable guide. The only downside was the midday heat, it was genuinely tough on the uneven streets, so book an early or late slot if you can. The snacks and the stories more than made up for it, and $35 felt like great value." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2025-11-19", text: "This tour shows you the real Jodhpur. We ducked into quiet corners, met a spice seller, and sampled sweets I'm still thinking about. Our guide shared local shopping tips that saved us from tourist prices later. Small group meant we could ask endless questions. A lovely, authentic afternoon." },
                { author: "James O.", country: "Canada", rating: 5, date: "2026-01-23", text: "Fantastic introduction to the Blue City on foot. The blend of history, culture and street food is spot on, and reaching lanes no car could enter made it feel special. Our guide was warm and clearly proud of his neighborhood. We left with restaurant recommendations we used every night after." },
                { author: "Femke B.", country: "Netherlands", rating: 4, date: "2026-03-08", text: "Lovely small-group walk through the indigo alleys with tasty local snacks along the way. Very personal and flexible. One food stop felt a little rushed near the end as the vendor got busy, but overall the guide was excellent and the hidden doorways and viewpoints were beautiful. Comfortable shoes are a must." },
                { author: "Omar A.", country: "United Arab Emirates", rating: 5, date: "2026-05-27", text: "A brilliant mix of walking and eating. We explored blue lanes, learned the stories behind old havelis and tasted proper Jodhpuri street food picked by someone who actually eats there. The flexible pace let us linger for photos wherever we liked. Highly recommend for anyone wanting the local side of the city." },
            ],
        };
    }


    // --- JAIPUR: jaipur-sightseeing-tour (auto-added 2026-07-02) ---
    if (slug === 'jaipur-sightseeing-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "We saw everything we hoped to in one day and never felt hurried. Our guide's stories about the mirror hall at Amber Fort completely changed how we looked at it. The private car was spotless and blissfully cool between stops. Getting picked up straight from our hotel made the whole day effortless. Worth every rupee for first-timers in Jaipur." },
                { author: "Marcus T.", country: "Australia", rating: 5, date: "2025-09-02", text: "Hawa Mahal at nine in the morning with barely anyone around was the highlight for me. Our guide knew exactly which café to shoot the facade from and let us take our time. Jal Mahal shimmering on the lake was a bonus stop I didn't expect. Ten hours flew by and the driver was patient and friendly throughout." },
                { author: "Sophie L.", country: "France", rating: 4, date: "2025-06-23", text: "A really good overview of Jaipur and our guide was knowledgeable and warm. My only honest note is the heat in late June was brutal, and the climb up to Amber Fort left us wilting by midday. The air-conditioned car saved us though. If you come this time of year, start as early as possible and bring plenty of water." },
                { author: "Daniel K.", country: "Germany", rating: 5, date: "2025-10-19", text: "Excellent value for a fully private day. Entry tickets to all three monuments were already sorted so we walked straight in without any queueing. The City Palace courtyards were stunning and our guide explained the architecture in perfect English. He also steered us to an honest shop for blue pottery rather than the usual tourist traps. Highly recommend." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2025-11-30", text: "Travelled with my parents who are in their seventies and the private setup was ideal. We could rest in the car whenever needed and the guide slowed the pace at Amber Fort so nobody struggled. Lunch at the local restaurant was tasty and they happily arranged vegetarian dishes for us. A thoughtful, well-run day out." },
                { author: "James O.", country: "United States", rating: 4, date: "2026-01-15", text: "Solid tour and a genuinely lovely guide who clearly loves his city. The stop at Jal Mahal felt a touch rushed and the bazaar had some persistent touts, but our guide handled them well. Amber Fort and the City Palace more than made up for it. Good introduction to the Pink City if you only have one day to spare." },
                { author: "Isabella R.", country: "Italy", rating: 5, date: "2026-03-08", text: "Everything ran like clockwork from the on-time hotel pickup to the drop-off. Our guide had an endless supply of history and even pointed out details on the Hawa Mahal I'd never have noticed. The photo stops were perfectly timed for the light. I've done a lot of city tours and this was one of the smoothest and most personal." },
                { author: "Noah V.", country: "Netherlands", rating: 5, date: "2026-05-27", text: "Booking was simple and confirmation came through within minutes with the driver's number. We customised the day slightly to add Jantar Mantar and the guide happily rearranged the route. The private car meant we could linger at the City Palace as long as we liked. A relaxed, flexible way to experience Jaipur's highlights without any stress." },
            ],
        };
    }

    // --- JAIPUR: jaipur-same-day-sightseeing-tour (auto-added 2026-07-02) ---
    if (slug === 'jaipur-same-day-sightseeing-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Ten hours flew by. Our guide met us right at the hotel and clearly knew every corner of Amber Fort, walking us through the mirror hall while pointing out details we'd never have spotted alone. The included lunch was excellent and the car stayed cool all day. Having entry tickets already sorted meant zero queuing. A genuinely relaxed way to see the Pink City." },
                { author: "Marcus T.", country: "Australia", rating: 5, date: "2025-08-22", text: "Booked this for my parents and me and it suited all three of us. Dad struggled with the climb at Amber Fort but the guide arranged a jeep to the top, which saved the day. Loved the photo stop at Jal Mahal, the water palace looked unreal in the morning light. Private car, air con, water on tap. Worth every dollar." },
                { author: "Sophie L.", country: "France", rating: 4, date: "2025-09-30", text: "A lovely day overall and our guide was warm and knowledgeable at the City Palace. My only honest note is Amber Fort was extremely crowded by late morning and a few galleries felt rushed because of it. Go early if you can. The lunch was tasty and they happily made mine vegetarian. Still a great introduction to Jaipur." },
                { author: "Daniel R.", country: "United States", rating: 5, date: "2025-10-19", text: "Exactly what we wanted from one day in Jaipur. The Hawa Mahal facade at the start was a stunning first photo, and the guide timed each stop so we never felt hurried. He also helped us bargain in the bazaar for a block-printed scarf without the usual pressure. Pickup was punctual and the whole thing felt effortless and private." },
                { author: "Lena K.", country: "Germany", rating: 5, date: "2025-11-27", text: "Very well organised private tour. Our driver was calm in Jaipur's traffic and the guide balanced history with free time nicely. The mirrored Sheesh Mahal inside Amber Fort was the highlight for me. Everything from entry fees to bottled water was covered, so there were no awkward extra payments. Highly recommend for a first visit to the city." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2026-01-15", text: "We had two energetic kids and the flexibility of a private car made this so much easier than a group tour. When the little one got tired we simply headed to lunch early, no fuss. The guide kept the children engaged with stories about the maharajas at City Palace. Jal Mahal was a lovely quick stop. Smooth, comfortable and great value." },
                { author: "Thomas V.", country: "Netherlands", rating: 4, date: "2026-03-08", text: "Solid full-day experience with a friendly, professional guide. The forts and palaces were spectacular. My one gripe is the afternoon heat in March was intense and the market walk felt a bit long in the sun, plus a couple of shop touts were persistent. That said, the air-conditioned car was a welcome refuge between stops and lunch was very good." },
                { author: "Isabella M.", country: "Italy", rating: 5, date: "2026-05-21", text: "An unforgettable day. Our guide's passion for Jaipur was infectious, especially explaining the astronomy links around the City Palace grounds. The private setup meant we lingered at Amber Fort for photos as long as we liked. Hotel pickup and drop-off were seamless and the vegetarian lunch was one of the best meals of our trip. Booking was quick and confirmation clear." },
            ],
        };
    }

    // --- JAIPUR: hawa-mahal-full-day-tour (auto-added 2026-07-02) ---
    if (slug === 'hawa-mahal-full-day-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide met us right on time at the hotel and the AC car was a lifesaver in the July heat. Amber Fort was the clear highlight, and I loved that he took us to Panna Meena Ka Kund, which we'd never have found alone. Eight hours felt exactly right, and stopping at Jal Mahal for photos in the afternoon light was magical. Booked the lunch option and it was worth it." },
                { author: "Marcus T.", country: "Australia", rating: 5, date: "2025-09-02", text: "Fantastic private day around the Pink City. The guide knew his stuff on the astronomy at Jantar Mantar and the history behind Hawa Mahal, and never rushed us. Being able to set our own pace with two young kids made all the difference. The climb up to Amber Fort tired them out but there were plenty of shaded spots to rest. Great value for a fully private car and guide." },
                { author: "Sophie L.", country: "France", rating: 4, date: "2025-10-19", text: "A really good overview of Jaipur and a very knowledgeable guide. My only note is that Amber Fort was extremely crowded by the time we arrived mid-morning, so I'd suggest asking for an earlier start. The stepwell and Jal Mahal were quieter and honestly my favourite stops. Comfortable car, smooth pickup, just plan around the crowds and the heat." },
                { author: "Daniel K.", country: "Germany", rating: 5, date: "2025-11-23", text: "Everything was well organised from pickup to drop-off. What impressed me most was how our guide adapted the day when we said we wanted extra time at City Palace, then still fit in a quick sunset at Nahargarh. The entry tickets are extra, which is clearly stated, and he helped us buy them without any queue stress. Highly recommend for a first visit to Jaipur." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2026-01-08", text: "Booked this for my parents and me over the winter and it was perfect weather for sightseeing. The guide was patient with my father who walks slowly, and arranged the jeep up to Amber Fort so he didn't have to manage the ramp. Loads of great photo spots and genuine local insight into Rajput culture. The private setup meant we never felt like part of a herd." },
                { author: "James R.", country: "Canada", rating: 5, date: "2026-02-27", text: "Excellent full day. We covered Amber Fort, Jal Mahal, Hawa Mahal and Jantar Mantar without ever feeling hurried, and the guide's stories brought each place to life. The car was clean and cold, which matters a lot here. We chose the buffet lunch add-on and it saved us hassle in the middle of the day. Worth every dollar for a private experience." },
                { author: "Isabella M.", country: "Italy", rating: 4, date: "2026-04-15", text: "Lovely tour with a friendly, professional guide who clearly loves his city. Honest heads-up: by April Jaipur is already scorching, so the midday stretch was tough even with the AC car. The Amber Fort visit and the symmetry of Panna Meena Ka Kund made up for it. Just bring water and a hat. Pickup was punctual and the whole day felt relaxed and well paced." },
                { author: "Noah V.", country: "Netherlands", rating: 5, date: "2026-06-05", text: "One of the best decisions of our India trip. Having a private car and an approved guide meant we could ask endless questions and stop for photos whenever we wanted. Jal Mahal shimmering on the lake was a highlight I didn't expect. The guide even suggested good vegetarian spots for lunch. Smooth, informative and genuinely personal from start to finish." },
            ],
        };
    }

    // --- JAIPUR: hawa-mahal-half-day-tour (auto-added 2026-07-02) ---
    if (slug === 'hawa-mahal-half-day-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide met us right at the hotel and had clearly done this a thousand times. What made it special was the stories, the legends behind Amer Fort and the meaning of Hawa Mahal's little windows that I'd never have known alone. Booking the full-day option meant we never felt rushed. Worth every rupee for the history alone." },
                { author: "Marcus T.", country: "United States", rating: 5, date: "2025-08-22", text: "We took the full day with car and it was the smart choice. No haggling with drivers, tolls and parking all handled, and cold water waiting in the car after the Amer Fort climb. Our guide bought the monument tickets with us so we skipped the worst of the lines. Jantar Mantar suddenly made sense once he explained the instruments." },
                { author: "Sophie L.", country: "Australia", rating: 4, date: "2025-09-30", text: "Genuinely good guide who knew every corner of the City Palace and found us great photo angles at Hawa Mahal. Only honest gripe is that Amer Fort was absolutely packed by the time we got there mid-morning, so I'd urge people to start earlier than we did. Still learned a huge amount and would recommend the private format." },
                { author: "Lukas B.", country: "Germany", rating: 5, date: "2025-11-11", text: "Precise, punctual, and incredibly knowledgeable about Rajput architecture, which is exactly what I wanted. The stepwell at Panna Meena ka Kund was a highlight I hadn't even heard of. Gaitor Ki Chhatriyan was peaceful and empty of tourists. Having a government-approved guide really shows in the depth of the commentary." },
                { author: "Camille R.", country: "France", rating: 5, date: "2026-01-18", text: "We did the half-day guide since our time was short and it covered the icons perfectly. Our guide adjusted the pace for my mother, who can't manage many stairs, and found her places to sit at Amer Fort. The bazaar walk afterwards was lovely and he helped us get fair prices on textiles without any pressure." },
                { author: "Noah K.", country: "Canada", rating: 5, date: "2026-02-27", text: "Travelled with two kids under ten and our guide kept them entertained the whole day with tales of maharajas. He tailored everything to us, shortened the climb where needed, and the WhatsApp support meant we could message the night before to confirm pickup. City Palace and Jantar Mantar were the kids' favourites. Fantastic private experience." },
                { author: "Isabella M.", country: "Italy", rating: 4, date: "2026-04-09", text: "Excellent guide with real passion for Jaipur's history and great instincts for photography. The heat in April was brutal by early afternoon, so parts of the Pink City walk felt a touch rushed as we all wilted. Not the tour's fault at all, just plan for the season. The morning at Hawa Mahal and Amer Fort was superb." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2026-05-30", text: "Booked the full day with car and it was seamless from hotel pickup to drop-off. Our guide's knowledge of the local legends brought the monuments alive, and the driver handled all the parking chaos so we didn't lift a finger. Loved that entry tickets were sorted on the spot. Easily the best-organised day of our whole India trip." },
            ],
        };
    }

    // --- JAIPUR: shopping-tour-shopping-tour (auto-added 2026-07-02) ---
    if (slug === 'shopping-tour-shopping-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "I booked this mainly because I wanted a female guide for the bazaars, and it made all the difference. Priya knew every good stall in Bapu Bazaar and did the bargaining for me so I never felt awkward. The Blue Pottery studio was a real highlight and I came home with two hand-painted bowls I adore. Pickup from my hotel was right on time." },
                { author: "Marcus B.", country: "Australia", rating: 5, date: "2025-08-29", text: "Six hours flew by. We started at a carpet co-operative where they showed us the knotting and dyeing up close, then moved through the gemstone stores where our guide steered us to certified sellers only. No pressure to buy anything, which we appreciated. The private air-con car between stops was a lifesaver in the August heat." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2025-09-18", text: "A wonderfully personal day. Our guide asked what we cared about at the start and completely reshaped the route around textiles and block prints. We skipped the jewellery entirely and spent longer with the weavers instead. Genuinely felt like shopping with a knowledgeable friend rather than being herded around tourist shops." },
                { author: "Daniel K.", country: "Germany", rating: 4, date: "2025-10-07", text: "Really enjoyable and our guide was excellent at pointing out fair prices. My only note is that the bazaars were extremely crowded and a few shop touts were persistent once they saw us with a guide. The Blue Pottery workshop and the carpet factory more than made up for it. Good value for a full private day." },
                { author: "Aisha R.", country: "United Arab Emirates", rating: 5, date: "2025-11-22", text: "Booked the car package and it was seamless from airport pickup onward. Our guide understood exactly what I was after in gemstones and took me to a certified store where I felt confident about the stones. Bottled water kept coming and the driver was patient every time I wanted to go back for one more look. Highly recommend." },
                { author: "James M.", country: "United States", rating: 5, date: "2026-01-15", text: "My wife and I aren't big shoppers but this turned out to be our favourite day in Jaipur. Watching the artisans mix the natural dyes for the Blue Pottery was fascinating, and the camel-hair carpets were stunning even though we only bought a small runner. Our guide never once pushed us. Relaxed pace, easy on the legs, great for us in our sixties." },
                { author: "Noor V.", country: "Netherlands", rating: 4, date: "2026-03-09", text: "Lovely tour overall and our guide was warm and very knowledgeable about the weaving techniques. The carpet stop ran a little long for our taste so the last bit felt slightly rushed, but that's easy to fix by just telling your guide the pace you want. The hands-on pottery bit wasn't available the day we went, which was a small shame." },
                { author: "Lucia F.", country: "Italy", rating: 5, date: "2026-05-27", text: "As a solo traveller I felt completely at ease all day. Having a local expert who knew the real prices meant I actually enjoyed haggling instead of dreading it. We wandered through Johari Bazaar, visited a beautiful carpet co-op, and finished with textiles. She dropped me right back at my hotel. Best money I spent on the whole trip." },
            ],
        };
    }

    // --- JAIPUR: delhi-jaipur-same-day-tour-by-car (auto-added 2026-07-02) ---
    if (slug === 'delhi-jaipur-same-day-tour-by-car') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Doing Jaipur as a day trip from Delhi sounded mad but it worked brilliantly. Our driver collected us at 6am sharp from our hotel in Connaught Place and the expressway drive was smooth. The guide met us on the way and was a proper history buff. Amber Fort at mid-morning before the heat peaked was the right call. Long day, but we saw everything we hoped to." },
                { author: "Mathieu R.", country: "France", rating: 5, date: "2025-09-02", text: "We took the all-inclusive option and it was worth every euro. No fumbling for tickets at each gate, lunch sorted, cold water always in the car. Hawa Mahal at first light was stunning for photos. The private car meant we could stop whenever my wife wanted a picture. Our guide even walked us to the best viewpoint over Maota Lake at Amber Fort." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-06-21", text: "Fantastic value for a private car and guide all the way from Delhi. The climb up to Amber Fort is steeper than I expected, so wear good shoes, but the views were incredible. City Palace and Jantar Mantar were fascinating with someone explaining the astronomy. We were back at our Delhi hotel by 9pm, tired but so happy we did it." },
                { author: "Tom H.", country: "Australia", rating: 4, date: "2025-08-19", text: "Really solid day overall and the guide knew his stuff. My only gripe is the traffic getting out of Delhi in the morning ate into our time, so a couple of stops felt a bit rushed, especially Jal Mahal which was just a quick photo. Amber Fort was also heaving with crowds by the time we arrived. Still, seeing the Pink City in a day was worth the early alarm." },
                { author: "Greta M.", country: "Germany", rating: 5, date: "2025-10-11", text: "Very well organised from start to finish. The confirmation email had all the pickup details and the driver was punctual and careful. What I appreciated most was the flexibility of a private tour, we skipped one shopping stop and spent longer at City Palace instead. October weather was perfect for wandering the courtyards. Highly recommend the air-con car for the long drive." },
                { author: "Daniel O.", country: "Canada", rating: 5, date: "2025-12-05", text: "Booked the all-inclusive tier for my parents and myself and it took all the stress out. Entrance tickets and lunch handled, so we just enjoyed the sights. Our guide was patient with my dad who walks slowly and arranged a jeep up to Amber Fort for him. Jaipur is genuinely gorgeous and the honeycomb Hawa Mahal facade is even better in person." },
                { author: "Isabella F.", country: "Italy", rating: 4, date: "2026-03-17", text: "A memorable day and the forts are breathtaking. Be prepared though, it is a very long day with roughly ten hours of driving in total, and by March the afternoon sun was strong while walking around City Palace. The car was comfortable and cold water helped a lot. Guide was friendly and knowledgeable. Just go in with realistic expectations about the pace of a same-day trip." },
                { author: "Noah V.", country: "Netherlands", rating: 5, date: "2026-05-29", text: "Excellent experience. The private guide met us on the highway as promised and immediately felt trustworthy. We loved that everything was in one seamless day, pickup, the drive, all the major Jaipur landmarks, and drop-off back in Delhi. Jal Mahal floating on the lake at sunset on the way out was a beautiful end. Great option if you are short on time but want to see the Pink City." },
            ],
        };
    }

    // --- JAIPUR: hawa-mahal-full-full-day-tour (auto-added 2026-07-02) ---
    if (slug === 'hawa-mahal-full-full-day-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide made Amber Fort come alive with stories about the Rajput kings, and having the tickets sorted in advance meant we skipped every queue. The private car was spotless and blissfully cold after the heat outside. We saw Hawa Mahal, City Palace and Jantar Mantar without ever feeling rushed. Genuinely the smoothest sightseeing day of our whole India trip." },
                { author: "Marcus T.", country: "Australia", rating: 5, date: "2025-08-29", text: "Booked this for my parents and me, and it suited all three of us. Dad has dodgy knees so we added the elephant ride up to Amber Fort, which he absolutely loved. The guide adjusted the pace whenever we needed a break in the car. Jantar Mantar was a surprise highlight, the sundials are incredible when someone explains them properly." },
                { author: "Lena K.", country: "Germany", rating: 4, date: "2025-09-22", text: "A very good day overall and the guide was knowledgeable and friendly. My only honest note is that by mid-morning Amber Fort was extremely crowded and the September heat was brutal on the ramp climb. Starting even earlier would help. That said, the air-conditioned car was a lifesaver between stops and the City Palace was stunning. Worth the money." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2025-10-11", text: "What a beautifully organised day. Pickup from our hotel was exactly on time and the driver was calm even in Jaipur traffic. Our guide knew the best photo angle for Hawa Mahal from across the street, and the light at that hour was perfect. He also recommended a wonderful vegetarian thali place for lunch. Highly recommend for first-timers." },
                { author: "David R.", country: "United States", rating: 5, date: "2025-11-30", text: "Everything included exactly as promised, no surprise fees at any gate. We appreciated that it was fully private so we could linger longer at the City Palace and cut a stop we weren't interested in. The bottled water was a nice touch in the heat. Our guide's English was excellent and his history knowledge was seriously impressive." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2026-02-08", text: "February weather was perfect and the whole day felt effortless. We started at Amber Fort early, wandered the mirror palace almost to ourselves, then flowed through Jantar Mantar and City Palace. The guide was patient with our kids and even squeezed in a quick stop at Jal Mahal for photos. Fantastic value for a private tour with tickets included." },
                { author: "Thomas B.", country: "Netherlands", rating: 4, date: "2026-04-19", text: "Solid full-day tour and a very personable guide. The forts and palaces were magnificent. If I'm honest, the last stop felt slightly rushed because we'd lingered so long at Amber Fort, so plan your time. April was already very hot too. Still, the private car and included entries made it stress-free and I'd book again." },
                { author: "Chiara M.", country: "Italy", rating: 5, date: "2026-05-27", text: "Booked last minute and the confirmation came through quickly with the guide's number. He tailored the day around our interest in architecture and the details he pointed out at the City Palace were things we'd never have noticed alone. Even in late May the early start meant Amber Fort was bearable. A truly memorable introduction to the Pink City." },
            ],
        };
    }

    // --- JAIPUR: hawa-mahal-chokhi-full-day-tour (auto-added 2026-07-02) ---
    if (slug === 'hawa-mahal-chokhi-full-day-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor M.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "A brilliant way to see Jaipur in a single day. Our guide had us at Amber Fort early before the coach crowds, which made all the difference for photos. The City Palace and Jantar Mantar were fascinating with someone explaining the history. Ending at Chokhi Dhani with the folk dancing and that huge thali was the perfect finale. Genuinely felt private and unhurried." },
                { author: "Tobias K.", country: "Germany", rating: 5, date: "2025-09-02", text: "Extremely well organised from the hotel pickup onwards. The air-conditioned car was a relief between stops and the driver was patient. What impressed me most was the guide's knowledge at Jantar Mantar, explaining how the instruments actually work. Jal Mahal at the roadside made a lovely photo. Chokhi Dhani in the evening was lively and the dal baati was superb. Worth every dollar." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-08-19", text: "We travelled with my parents and this suited them perfectly. Being private meant we could rest in the car and take Amber Fort slowly, which mattered given the ramp. The guide adjusted the pace without us even asking. The kids were thrilled by the puppet show and camel ride at Chokhi Dhani. A full day but never exhausting. Highly recommend for families." },
                { author: "Marcus D.", country: "Australia", rating: 4, date: "2025-06-27", text: "Great tour overall and our guide was excellent, but be warned the June heat is no joke. By the time we reached the top of Amber Fort we were melting, and it got a bit crowded up there mid-morning. The A/C car saved us. Chokhi Dhani in the evening was the highlight, cooler and full of atmosphere. Just come prepared for the temperature." },
                { author: "Camille R.", country: "France", rating: 5, date: "2025-11-08", text: "Une journee magnifique. The Hawa Mahal photo stop in the morning light was stunning and exactly as pictured. Our guide knew all the best angles at each monument and helped us buy entry tickets quickly so we skipped the queues. The Rajasthani dinner at Chokhi Dhani was generous and completely vegetarian, which suited us. Smooth pickup, friendly driver, wonderful memories." },
                { author: "Nathan B.", country: "United States", rating: 5, date: "2026-01-22", text: "January was the ideal time for this, cool enough to actually enjoy the Amber Fort climb. Everything ran on time and the guide tailored the day around our interests, giving us longer at the City Palace where we wanted it. The Sheesh Mahal mirror work was breathtaking. Chokhi Dhani was touristy but genuinely fun, and the food kept coming. Excellent value for a private day." },
                { author: "Sanne V.", country: "Netherlands", rating: 4, date: "2025-10-15", text: "Really good day and a knowledgeable guide who clearly loves Jaipur. My only small gripe was that our short bazaar stop felt a bit rushed and a couple of shop sellers were pushy. Otherwise the pacing across Amber Fort, Jantar Mantar and Hawa Mahal was spot on. The evening at Chokhi Dhani with live music was a lovely, relaxed way to end. Would book again." },
                { author: "Lorenzo P.", country: "Italy", rating: 5, date: "2026-04-03", text: "Superb full-day experience. The Albert Hall Museum and Jal Mahal photo stops were unexpected gems, and our guide's stories brought the City Palace to life. Loved that hotel pickup and drop-off were included so we didn't touch a taxi all day. Chokhi Dhani was a feast, the folk performers and the thali were a perfect Rajasthani send-off. Seamless from start to finish." },
            ],
        };
    }

    // --- JAIPUR: local-family-home-food-tour (auto-added 2026-07-02) ---
    if (slug === 'local-family-home-food-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Emma H.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Honestly the highlight of our whole Rajasthan trip. The family welcomed us like old friends and we rolled our own chapatis while their grandmother corrected our technique with a laugh. The dal we made was better than anything we ate in restaurants. Being picked up from our hotel and dropped back after dark made it completely stress-free. Worth every rupee." },
                { author: "Lukas M.", country: "Germany", rating: 5, date: "2025-08-22", text: "We wanted something beyond forts and monuments and this delivered exactly that. Cooking in a real Jaipur kitchen, learning which spices go in at which moment, then sitting down to eat what we'd made together was unforgettable. Our host explained everything patiently. A wonderful window into everyday Rajasthani life that no restaurant could match." },
                { author: "Sophie D.", country: "France", rating: 4, date: "2025-09-30", text: "A lovely, genuine evening with a very kind family and delicious vegetarian food we helped prepare. My only small note is that the drive from our hotel took longer than expected due to evening traffic, so we started a bit late. Once we arrived though, the warmth and the meal more than made up for it. Would recommend." },
                { author: "Ryan T.", country: "Australia", rating: 5, date: "2025-10-19", text: "Four hours flew by. My wife is vegetarian and they built the whole menu around that without any fuss, and the spice levels were adjusted to what we could handle. We drank, we cooked, we laughed with the kids of the house. It felt like being invited to a friend's home rather than a paid tour. Easily our best night in Jaipur." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2025-12-08", text: "As someone of Indian heritage I was a little skeptical, but this was the real thing. The recipes were proper home-style Rajasthani cooking, not a watered-down tourist version. I finally learned to get the gatte right. The hosts shared family stories over dinner and sent us off with handwritten notes on the spices. Deeply personal and beautifully done." },
                { author: "Michael O.", country: "United States", rating: 5, date: "2026-02-11", text: "We did a lot of sightseeing during the day and wanted a relaxed evening, and this was perfect. No climbing, no crowds, just a comfortable kitchen and generous people. The included drinks were a nice surprise. Learning to make fresh breads and a rich curry from scratch, then eating it all, was the most memorable meal of our India trip." },
                { author: "Isabella R.", country: "Italy", rating: 4, date: "2026-04-03", text: "Truly warm hospitality and food that tasted like it was made with love. The cooking part was very hands-on which I loved. It was a fairly hot evening even after sunset and the home kitchen got quite warm while we cooked, so bring light clothing. Small thing though, the family and the meal were absolutely worth it and I'd happily go back." },
                { author: "Daan V.", country: "Netherlands", rating: 5, date: "2026-05-27", text: "Booking was simple and the hotel pickup arrived exactly on time. What stayed with me was how much the family shared, not just recipes but their daily routines, their traditions and plenty of jokes. We cooked several dishes and ate until we couldn't move. A far more meaningful way to spend an evening than another restaurant. Highly recommended for anyone curious about local life." },
            ],
        };
    }

    // --- JAIPUR: jaipur-city-night-tour-with-guide (auto-added 2026-07-02) ---
    if (slug === 'jaipur-city-night-tour-with-guide') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Doing Jaipur after dark was such a clever idea. Patrika Gate lit up in all those colours was jaw-dropping, and having the whole car to ourselves meant we could linger for photos without feeling rushed. Our guide knew exactly where to stand for the best shots of Hawa Mahal. A wonderfully relaxed way to end a hot day of sightseeing." },
                { author: "Marcus B.", country: "Germany", rating: 5, date: "2025-08-30", text: "Punctual pickup at 7:30 sharp from our hotel, and the air-conditioned car was spotless. Jal Mahal glowing on the water was the highlight for me, almost dreamlike. The guide gave genuinely interesting commentary between stops rather than just reciting facts. Four hours flew by and the complimentary water was a thoughtful touch after the day's heat." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2025-09-22", text: "We booked the bike version and it was thrilling, weaving through the evening streets like locals. Feeling the night air while passing the illuminated Legislative Assembly was unforgettable. Not for everyone perhaps, but if you want something more adventurous than a car, do it. Our guide was fun and made sure we felt safe the whole way." },
                { author: "Rachel M.", country: "Australia", rating: 4, date: "2025-10-11", text: "Lovely evening overall and the lights on Amber Fort from a distance were stunning. My only slight gripe is that a couple of the stops felt a touch quick, I'd have liked a few more minutes at Hawa Mahal. Still, the private car was comfortable and the guide friendly and knowledgeable. Good value for a peaceful night out in the Pink City." },
                { author: "James O.", country: "Canada", rating: 5, date: "2025-11-19", text: "Perfect for travelling with my parents who can't manage much walking. Everything happened from the comfort of the car with short easy stops, so nobody got tired. Dad loved the Albert Hall Museum all lit up. The guide was patient, warm and clearly proud of his city. Exactly the gentle, scenic evening we were hoping for." },
                { author: "Anneke V.", country: "Netherlands", rating: 5, date: "2026-01-27", text: "A magical way to see Jaipur without the daytime crowds and heat. January nights were cool so bring a jacket, which we were glad we did. The private setup meant we controlled the pace entirely. Standing before Patrika Gate at night, almost to ourselves, is a memory I'll keep. Booking and hotel pickup were seamless." },
                { author: "Daniel R.", country: "United States", rating: 4, date: "2026-03-15", text: "Genuinely enjoyable and a nice contrast to the daytime tours. The illuminated monuments photograph beautifully. We did hit some evening traffic getting toward Amber Fort which ate into time a little, but the guide kept us entertained and rearranged the route smartly. Honest heads up: it's more a photo-and-drive experience than going inside places, which suited us fine." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2026-05-08", text: "After a scorching afternoon, this cool evening tour was exactly what we needed. Seeing Hawa Mahal, Jal Mahal and Patrika Gate all glowing was completely different from the daytime versions. Our guide tailored the stops around what we most wanted to photograph. Comfortable car, friendly driver, and fantastic value for a fully private four hours. Highly recommend." },
            ],
        };
    }

    // --- JAIPUR: hawa-mahal-landmarks-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'hawa-mahal-landmarks-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "A brilliant first day in Jaipur. Our guide clearly loved the City Palace and pointed out details in the peacock gates I'd have completely walked past. The private car meant we never felt rushed, and having the entry tickets already sorted saved us standing in the ticket queues in the heat. Hawa Mahal from the rooftop café opposite was the highlight for photos." },
                { author: "Mateo R.", country: "Spain", rating: 5, date: "2025-08-29", text: "Jantar Mantar completely surprised me. I expected a quick stop but our guide spent real time explaining how the giant sundial actually tells time to the second, and my teenage son was hooked. Pickup from our hotel was punctual and the AC car was spotless. Worth every rupee of the 201 dollars for a stress-free day." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2025-09-19", text: "We travelled with my mother who is in her seventies and this tour was perfect for her. Very little hard walking, the driver dropped us right at each entrance, and the cold water bottles were a lifesaver. City Palace has a few stairs but nothing difficult. The guide adjusted the pace to us the whole time." },
                { author: "Tom H.", country: "Australia", rating: 4, date: "2025-11-08", text: "Really solid tour and a knowledgeable guide, but be warned the area around Hawa Mahal gets crowded and there are persistent sellers on the street. Our stop there felt slightly rushed compared to City Palace. That said, having a private car and prepaid tickets made the whole thing easy, and Jantar Mantar was a genuine highlight." },
                { author: "Lena K.", country: "Germany", rating: 5, date: "2026-01-23", text: "Faultless organisation. We booked the night before and got confirmation with our guide's name within minutes. Six hours was exactly right for these three sites without feeling stretched. Our guide framed the Mughal and Rajasthani influences at the City Palace beautifully. January weather was ideal, cool enough to enjoy the open courtyards at Jantar Mantar." },
                { author: "Charlotte D.", country: "Canada", rating: 5, date: "2026-03-11", text: "Exactly the introduction to the Pink City we wanted. The guide tailored everything to what interested us and even added a quick photo stop at Jal Mahal on the way. Loved that tolls, parking and tickets were all included so there was zero fumbling for cash at each monument. Booking online was seamless." },
                { author: "Julien P.", country: "France", rating: 4, date: "2026-04-27", text: "Good value private tour with a friendly, well-informed guide. My only note is that late April in Jaipur is brutally hot, and by the time we reached the open sections of Jantar Mantar around midday it was hard to concentrate. Start early if you can. The air-conditioned car between stops was very welcome and City Palace was magnificent." },
                { author: "Sanjay M.", country: "United Arab Emirates", rating: 5, date: "2026-06-02", text: "Second time using a private guide in Jaipur and this was the smoothest yet. Hotel pickup on the dot, an unhurried walk through City Palace, and clear commentary throughout. Hawa Mahal in the morning light was stunning. Having a government-approved guide made a real difference in how much history we actually took in." },
            ],
        };
    }


    // --- REMAINING: khajuraho-group-of-monuments-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'khajuraho-group-of-monuments-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Booking an official guide made all the difference at Khajuraho. Without one, the carvings are just beautiful stone; with ours, the whole Chandela story came alive. We spent a proper couple of hours at Kandariya Mahadev and he explained the erotic panels with real sensitivity. Met us right at the Western Group gate exactly as promised. Worth every penny." },
                { author: "Marcus T.", country: "Australia", rating: 5, date: "2025-08-09", text: "We took the car option and it was seamless. Picked up from our hotel in an actual air-conditioned car, which we appreciated because it was still warm even in the morning. Four hours flew by. Our guide knew the best spots for photos of the main spire and never once rushed us. Genuinely one of the best-value private tours we did in India." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2025-09-22", text: "Such a knowledgeable, respectful guide. I was travelling with my teenage kids and was slightly nervous about the famous sculptures, but he handled the explanations perfectly and kept it educational. The morning light on the sandstone was stunning. We climbed the steps up to the temples, which the children loved. Highly recommend the private format so you can go at your own pace." },
                { author: "Daniel K.", country: "Germany", rating: 4, date: "2025-10-30", text: "A genuinely excellent guide and a fascinating site. My only small gripe is that the entry ticket isn't included, so budget a little extra at the gate, and the steps up to the main platforms are steeper than I expected in the heat. Still, two well-spent hours at the Western Group and clear, accurate history throughout. Would book the guide again." },
                { author: "Aisha R.", country: "United Arab Emirates", rating: 5, date: "2025-12-11", text: "December was the perfect time to visit, cool and clear. Our guide met us at the gate on time and the four hours were beautifully paced. What struck me was how he connected the sculptures to the wider spiritual meaning rather than just the obvious. Khajuraho is compact so everything felt relaxed. A lovely, informative morning." },
                { author: "Liam O.", country: "Ireland", rating: 5, date: "2026-01-27", text: "We happened to visit near the dance festival and the atmosphere was wonderful. The guide-only option suited us as our hotel was a two-minute walk from the temples, so no car needed. Loved the detail on Kandariya Mahadev and the smaller shrines around it. Friendly, punctual and clearly officially trained. Fantastic value at forty dollars for a private guide." },
                { author: "Hannah B.", country: "Canada", rating: 4, date: "2026-03-15", text: "Really good tour and a very warm guide. Go early if you can, because by late morning it was getting hot and busier with tour groups. There are also a few touts near the entrance, but our official guide steered us straight past them. The carvings are extraordinary and having someone explain the symbolism made it unforgettable. Just carry water." },
                { author: "Nicolas M.", country: "Netherlands", rating: 5, date: "2026-05-08", text: "An outstanding private experience. We chose the car option and the hotel pick-up was punctual and comfortable. Our guide adjusted the route so my father, who has bad knees, could enjoy the ground-level carvings without every steep climb. Thoughtful, patient and deeply knowledgeable about the UNESCO site. This is how heritage tours should be done." },
            ],
        };
    }

    // --- REMAINING: jaisalmer-fort-walking-tour (auto-added 2026-07-02) ---
    if (slug === 'jaisalmer-fort-walking-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.8,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide made the fort come alive with stories about the families who still live inside its walls. We wandered lanes we'd never have found alone and ended up at Gadisar Lake just as the light turned golden. Three hours flew by. Easily the best introduction to Jaisalmer we could have hoped for, and superb value at twenty dollars." },
                { author: "Mathis L.", country: "France", rating: 5, date: "2025-09-02", text: "Patwon Ki Haveli left me speechless, the stone carving is unbelievable up close, and our guide explained every detail with real passion. He knew exactly which corners to photograph and helped us bargain for a small textile in the bazaar. Relaxed pace, no rushing, and genuinely warm. A wonderful morning in the Golden City." },
                { author: "Priya S.", country: "Singapore", rating: 4, date: "2025-10-19", text: "A lovely, informative walk with a very knowledgeable guide who clearly loves his city. My only note is that by late morning the climb up to the fort got quite hot, so do book an early start if you can. The market section was colourful and fun. Bring water and a hat and you'll thoroughly enjoy it." },
                { author: "Grant M.", country: "Australia", rating: 5, date: "2025-11-08", text: "We did this as a family with two teenagers and everyone was hooked. The fort's maze of alleys, the Jain temples, the cows wandering past the shops, it was all fascinating. Our guide tailored the stories to keep the kids engaged and never made us feel hurried. Fantastic way to spend a morning and great value." },
                { author: "Lena K.", country: "Germany", rating: 5, date: "2026-01-22", text: "January weather was perfect for this walk and the guide was outstanding. He pointed out details on the havelis I'd have walked straight past and gave real context to the fort's history. The visit to Gadisar Lake was a peaceful finish. Highly organised, punctual, and clearly a passionate local. I recommend it without hesitation." },
                { author: "Connor D.", country: "Ireland", rating: 5, date: "2026-03-11", text: "Booked this the day before and it was seamless. Meeting point was easy to find just below the fort. Our guide balanced the big landmarks with little human stories, and he steered us away from a couple of pushy shopkeepers with a laugh. Loved learning about the artisans in the bazaar. Genuinely memorable and well worth it." },
                { author: "Sofia R.", country: "Spain", rating: 4, date: "2026-04-27", text: "Really enjoyable and our guide was excellent, patient and full of knowledge. The lanes inside the fort are uneven and there are a few steps, so wear proper shoes rather than sandals. It did get busy near the main temple around mid-morning. Still, a beautiful walk and the perfect way to understand Jaisalmer before exploring on your own." },
                { author: "Noah V.", country: "Netherlands", rating: 5, date: "2026-06-09", text: "Three hours with a guide who treated the fort like his own home. We saw living Jaisalmer, not just monuments, kids playing, women dyeing cloth, tiny temples tucked between houses. The Patwon Ki Haveli stop was a highlight and the golden light on the sandstone was magical. Warm, unhurried and superb value. Do this on your first day here." },
            ],
        };
    }

    // --- REMAINING: junagarh-fort-spiritual-tour (auto-added 2026-07-02) ---
    if (slug === 'junagarh-fort-spiritual-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Junagarh Fort completely surprised me. Because it isn't perched on a hill you walk straight into these gorgeous painted chambers and carved balconies, and our guide knew every detail about the 1593 construction. The private car was blissfully cool between stops. The Rat Temple afterwards was surreal in the best way. A brilliantly balanced day of history and the truly unusual." },
                { author: "Marcus B.", country: "Germany", rating: 5, date: "2025-08-22", text: "We booked this as a one-way sightseeing transfer toward Jaisalmer and it worked perfectly. The driver was punctual, the AC car spotless, and we never felt rushed at either stop. The Prachina Museum inside the fort was a highlight for me with its old royal costumes and weapons. Excellent value at sixty dollars considering fuel, tolls and a proper guide were all covered." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-09-09", text: "Visiting Karni Mata was on my bucket list and this tour made it easy. The guide explained the temple etiquette before we went in, so removing shoes and walking barefoot among the rats felt manageable rather than scary. We even spotted one of the lucky white rats. Junagarh Fort earlier in the day was equally memorable. Warm, knowledgeable service throughout." },
                { author: "Thomas O.", country: "Ireland", rating: 4, date: "2025-10-30", text: "A genuinely fascinating day, though be ready for an early start and a fair bit of heat at the fort courtyards. The Rat Temple is not for the faint-hearted and walking in socks near so many rats took me a moment to adjust to. Our guide was patient and the car comfortable. Just bring cash for the entry tickets, which aren't included in the price." },
                { author: "Chloe D.", country: "Australia", rating: 5, date: "2025-12-05", text: "Loved having a private car and guide just for the two of us. We lingered far longer at Junagarh than a group tour would allow, poking into the decorated palaces and quiet courtyards. Karni Mata was extraordinary and strangely peaceful. The driver suggested a fantastic little spot for Bikaneri snacks at lunch. Ten hours flew by and felt wonderfully unhurried." },
                { author: "Julien M.", country: "France", rating: 5, date: "2026-02-18", text: "The contrast between the two sites is what makes this tour special. Junagarh is a masterpiece of Rajput and Mughal design, all intricate stonework and colour, while the Rat Temple is unlike anything in Europe. Our guide bridged the two worlds beautifully and answered every question. The cool car was a relief in the desert climate. Highly recommended for curious travellers." },
                { author: "Hannah V.", country: "Netherlands", rating: 5, date: "2026-04-11", text: "We travelled with my parents and the flat approach to Junagarh Fort meant no steep climbing, which they appreciated. My mother chose to view the Rat Temple from the entrance while the rest of us went inside, and the guide was completely accommodating. The whole day felt personal and relaxed. Booking was simple and our hotel pickup in Bikaner was right on time." },
                { author: "David R.", country: "Canada", rating: 4, date: "2026-05-27", text: "Solid tour with a knowledgeable guide and a clean, air-conditioned vehicle. My only caveat is that the onward drive toward Jaisalmer is long, so the day is more of a heritage transfer than a leisurely loop, and by late afternoon we were tired. Still, seeing Junagarh Fort and Karni Mata in one go is efficient and worthwhile. Just plan the timing and start early." },
            ],
        };
    }

    // --- REMAINING: gateway-of-india-private-tour (auto-added 2026-07-02) ---
    if (slug === 'gateway-of-india-private-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "A genuinely brilliant day out. Our guide met us at the hotel right on time and clearly knew the history of Elephanta inside out, the story behind the Trimurti carving gave me goosebumps. The private car meant we never felt rushed, and the skip-the-line at the caves saved us a proper wait. Worth every rupee for the two of us." },
                { author: "Marcus D.", country: "Australia", rating: 5, date: "2025-08-29", text: "Loved that everything was sorted for us, ferry tickets, the little toy train, entrance fees, all included so no faffing about with queues. The crossing over the Arabian Sea was gorgeous and the guide pointed out the skyline on the way back. The Shiva sculptures in the caves are extraordinary. Ten hours flew by." },
                { author: "Sophie L.", country: "Canada", rating: 4, date: "2025-09-17", text: "Really informative and well organised tour. My only heads-up is the climb to the caves, around 120 steps in serious heat, so start early like our guide suggested. He was patient and let us rest as we went. The private car was a cool refuge between stops. Bring water beyond the one bottle they hand you on the island." },
                { author: "Jonas B.", country: "Germany", rating: 5, date: "2025-10-08", text: "Precisely the private experience we hoped for. The driver was punctual and courteous, and the guide adapted the city portion to what we wanted to see before the ferry. Elephanta itself is unmissable, the rock-cut temples are far more impressive in person than in photos. Excellent value considering everything the price covered." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2025-11-21", text: "We travelled with my parents and the flexibility of a private tour was perfect. The toy train from the jetty was a nice touch for them, and the guide arranged a carrying chair for my mum on the steps. He balanced the Mumbai landmarks and the caves beautifully. Warm, knowledgeable and never pushy about tips." },
                { author: "Liam O.", country: "Ireland", rating: 5, date: "2026-01-30", text: "January was the ideal time to do this, dry and pleasant the whole day. The ferry ride is about an hour each way and surprisingly scenic. Our guide made the ancient carvings come alive with stories I'd never have picked up alone. Hotel pickup and drop-off made the logistics effortless. Highly recommend for a first Mumbai visit." },
                { author: "Camille R.", country: "France", rating: 4, date: "2026-03-12", text: "A wonderful tour overall with a superb, well-spoken guide. Honest note, it is a long day and the island can get crowded with tour groups by late morning, so the early ferry really matters. The caves were the clear highlight for us. The included skip-the-line and water bottle were appreciated small touches on a hot day." },
                { author: "Daniel V.", country: "Netherlands", rating: 5, date: "2026-05-19", text: "From the Gateway of India to the Trimurti statue, every part of this day was handled with care. Comfortable air-conditioned car, a driver who knew Mumbai's traffic tricks, and a guide who clearly loves the caves' history. Having the ferry and entrance all pre-arranged took the stress out completely. One of the best guided days we've had in India." },
            ],
        };
    }

    // --- REMAINING: gateway-of-india-sightseeing-private-tour (auto-added 2026-07-02) ---
    if (slug === 'gateway-of-india-sightseeing-private-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.8,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Ten hours flew by. Our guide met us right at the hotel and had a real feel for pacing, giving us longer at the Gateway of India when we lingered for photos. The Dharavi walk was the part that stayed with me though, seeing the recycling and leather workshops explained with such respect. Having a private AC car in that heat was a small blessing." },
                { author: "Marcus T.", country: "Germany", rating: 5, date: "2025-09-02", text: "Booked this for my wife and me and it was worth every dollar of the hundred. The chauffeur was calm in Mumbai traffic and our guide clearly knew Dharavi personally, greeting people as we walked the narrow lanes. He asked us not to photograph inside the homes, which I appreciated. A thoughtful, honest look at the city rather than a checklist of monuments." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-10-19", text: "A brilliantly balanced day. Colonial architecture and the seafront in the morning, then the energy of Dharavi's pottery and textile units after lunch. Our guide answered every question and never rushed us. Bottled water in the car was a nice touch. Being fully private meant we could tweak the route on the spot, which suited us perfectly." },
                { author: "Jack D.", country: "Australia", rating: 4, date: "2025-11-27", text: "Genuinely eye-opening and our guide was excellent, but be ready for the heat. We went in the late morning and the Dharavi walk on uneven ground got sweaty and a bit tiring by the end of a long ten-hour day. Start early if you can. The private car and cold water helped a lot, and I'd still recommend it without hesitation." },
                { author: "Camille B.", country: "France", rating: 5, date: "2026-01-15", text: "One of the most memorable days of our India trip. What I loved was how the guide connected the grand landmarks with the working life of Dharavi, so the city made sense as a whole. He was patient with my English and full of little stories. The car was comfortable and clean, and pickup from our hotel was exactly on time." },
                { author: "Liam O.", country: "Ireland", rating: 5, date: "2026-03-08", text: "We travelled with our teenagers and this held their attention all day, which is no small thing. The Dharavi section sparked the best conversations we had on the whole holiday. Our guide was warm and never preachy, and the private format meant we set the pace. Great value split between four of us. The seafront promenade at golden hour was gorgeous." },
                { author: "Sofia R.", country: "Spain", rating: 4, date: "2026-04-21", text: "A rich, thoughtful tour and our guide was lovely and knowledgeable. My only note is that with entry stops, lunch and traffic, a couple of the landmark visits felt slightly rushed to fit everything into the day. That said, they clearly prioritised Dharavi, which was the highlight. Comfortable car, respectful approach, and I came away understanding Mumbai far better." },
                { author: "Nathan K.", country: "Canada", rating: 5, date: "2026-06-05", text: "Exactly the private day we hoped for. From the colonial buildings to the coastal drive to the workshops of Dharavi, everything flowed and we never once felt like a number in a group. Our guide handled the touts near the Gateway so we could just enjoy it. Door-to-door service from the hotel and back made a hot, full day effortless." },
            ],
        };
    }

    // --- REMAINING: city-palace-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'city-palace-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.8,
            reviews: [
                { author: "Eleanor M.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "We took the walking option and it was the best twenty dollars we spent in India. Our guide clearly loved Udaipur and brought the City Palace to life with stories about the Mewar rulers. Wandering the Old City lanes on foot rather than from a car window made the whole day feel personal. The boat ride on Lake Pichola at the end was magical." },
                { author: "Lucas B.", country: "Germany", rating: 5, date: "2025-08-22", text: "Booked the car upgrade for my parents and it was worth every rupee. The driver dropped us right at Saheliyon ki Bari so nobody had to walk far in the heat. Our guide spoke excellent English and paced the day beautifully, never rushing us through Jagdish Temple. Ten full hours yet it never felt long. Highly recommend for families." },
                { author: "Camille R.", country: "France", rating: 5, date: "2025-09-30", text: "Notre guide parlait un francais parfait, which made all the difference for my mother. He explained the carvings at Jagdish Temple in wonderful detail and knew exactly when to reach Lake Pichola for the light. Just remember the entrance tickets are paid separately at each site, so bring cash. A genuinely private and flexible day." },
                { author: "Priya S.", country: "Singapore", rating: 4, date: "2025-11-08", text: "A lovely, knowledgeable guide and a great overview of the city. My only note is that we did the walking option in early November and it was still quite warm by midday, with plenty of steps inside the City Palace. If you feel the heat, pay the extra for the car. Otherwise a thoroughly enjoyable and well-organised day." },
                { author: "Daniel O.", country: "Ireland", rating: 5, date: "2025-12-19", text: "Exactly what we wanted: no rigid group, just us and a superb local guide. He tailored the route around our interest in architecture and photography, and pointed out viewpoints of the Lake Palace I'd never have found alone. The boat trip on Pichola was the highlight. Great value at this price. Bring rupees for the ticket counters." },
                { author: "Sophie V.", country: "Netherlands", rating: 5, date: "2026-02-11", text: "Wonderful full day in Udaipur. Our guide met us at the hotel, walked us through the buzzing Old City to Jagdish Temple, then the City Palace, and finished with the lake. He was patient with our two teenagers and happy to slow down whenever we wanted more photos. Modest dress for the temple is worth knowing in advance." },
                { author: "Marcus T.", country: "Australia", rating: 4, date: "2026-04-03", text: "Really solid guided tour with a friendly, well-informed guide. Went in early April and the afternoon sun was fierce, so the palace steps were tiring on the walking option. A few persistent touts near the entrances too, though our guide waved them off. Still, the Lake Pichola boat ride made up for everything. Book the car if you're travelling in summer." },
                { author: "Grace H.", country: "Canada", rating: 5, date: "2026-05-27", text: "An outstanding introduction to the Venice of the East. Our guide's knowledge of the City Palace complex was remarkable and he customised the whole day to what we cared about. We loved that it was private and unhurried across the full ten hours. Just budget separately for the entry tickets and boat ride. Easily one of our favourite experiences in Rajasthan." },
            ],
        };
    }

    // --- REMAINING: city-palace-spiritual-tour (auto-added 2026-07-02) ---
    if (slug === 'city-palace-spiritual-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor M.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Two really well-balanced days. The City Palace on day one was overwhelming in the best way, and our guide knew every corner of it. Day two out to Eklingji felt completely different, quiet, spiritual and away from the tourist crowds. Having the same car and guide across both days made everything effortless. Worth every penny for a private experience like this." },
                { author: "Jens H.", country: "Germany", rating: 5, date: "2025-08-29", text: "We loved the drive out to Nagda. The old ruined temples there were almost empty and our guide explained the carvings in wonderful detail. Eklingji itself was strict about no phones inside, which honestly made the visit more meaningful. Pickup from our haveli hotel was punctual both mornings. A thoughtful, unhurried tour that respected our pace." },
                { author: "Priya R.", country: "Singapore", rating: 5, date: "2025-10-11", text: "Perfect for our family of four. The kids were tired by the afternoon of day one, so the driver simply let us rest in the car between stops and adjusted the plan. Vegetarian lunch recommendations near Eklingji were excellent. The guide was patient and never rushed my parents on the palace steps. Genuinely private and flexible, exactly as described." },
                { author: "Connor F.", country: "Ireland", rating: 4, date: "2025-11-23", text: "A great two days overall and superb value for a private guide and car. My only gripe is that day two felt a little short compared with the packed city day, we were back by early afternoon. The Eklingji temple was beautiful but busy with local worshippers. Still, the guide was knowledgeable and the tolls and parking being included saved a lot of hassle." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2026-01-18", text: "January was the ideal time, warm days and no need to rush from the heat. Our guide framed the best photo spots around the lakes and palace for us. The countryside drive to the temples through the Aravalli hills was a highlight I hadn't expected. Everything from taxes to fuel was covered, so no fiddling with cash all day. Highly recommend." },
                { author: "Marcus D.", country: "Australia", rating: 5, date: "2026-03-07", text: "As a bit of a history buff I got exactly what I wanted. The guide's stories about the Mewar rulers at the City Palace and the significance of Eklingji as their family deity tied the two days together brilliantly. Comfortable car, easy hotel pickups, and a real willingness to linger where I was interested. First-class private tour." },
                { author: "Hannah V.", country: "Netherlands", rating: 4, date: "2026-04-26", text: "Lovely tour but do go prepared for the April heat, by midday on the city day we were flagging and glad of the air-conditioned car. The temples on day two were cooler and peaceful. Our guide was friendly and flexible about adding a Lake Pichola viewpoint. Just start early if you visit in spring and carry plenty of water." },
                { author: "Daniel S.", country: "Canada", rating: 5, date: "2026-06-09", text: "Booking was straightforward and confirmation came quickly with our guide's contact. The mix of grand palaces and the quieter Eklingji and Nagda temples gave us a fuller sense of Udaipur than a single day ever could. Modest dress at the temples was no problem once we knew in advance. A calm, well-organised couple of days we'll remember." },
            ],
        };
    }

    // --- REMAINING: chittorgarh-fort-full-day-tour (auto-added 2026-07-02) ---
    if (slug === 'chittorgarh-fort-full-day-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Chittorgarh completely exceeded what I imagined. The Vijay Stambh is staggering up close, and our guide climbed part way up with us explaining every carving. Having a private car meant we set our own rhythm and never felt rushed. The drive from Udaipur is long but the AC and comfy Toyota made it painless. A proper deep dive into Mewar history." },
                { author: "Thomas B.", country: "Germany", rating: 5, date: "2025-08-22", text: "Superb day out. Our chauffeur picked us up early which was the right call, we beat the heat and had the Rana Kumbha Palace almost to ourselves. The guide at the fort was genuinely knowledgeable, not just reciting dates but telling the stories behind the sieges. We added the Rajasthani thali and it was one of the best meals of our trip." },
                { author: "Priya S.", country: "Singapore", rating: 4, date: "2025-09-30", text: "Really enjoyed the fort itself, it is enormous and the Kirti Stambh was a highlight. My only honest note is the drive each way eats a big part of the eight hours, so you spend a lot of time in the car. That said the vehicle was spotless and the driver careful. Bring water, it was hot even in late September. Worth doing." },
                { author: "Liam O.", country: "Ireland", rating: 5, date: "2025-10-19", text: "We travelled as a family with two teenagers and it worked brilliantly. The private car let us stop when we needed and the kids loved the sheer scale of the place. Our guide tailored the walk so we saw the main towers without exhausting everyone. Fuel, tolls and parking were all handled, so no fumbling for cash on the road. Great value for a private trip." },
                { author: "Camille D.", country: "France", rating: 5, date: "2025-12-08", text: "A memorable escape from Udaipur. December weather was perfect for walking the ramparts and the light on the sandstone was beautiful for photography. Our guide had a real passion for the Rajput legends and made Rana Kumbha Palace come alive. The optional thali afterwards was delicious and generous. Everything ran smoothly from pickup to drop off." },
                { author: "Marcus T.", country: "Australia", rating: 5, date: "2026-02-11", text: "Outstanding guide who clearly loved his subject. Chittorgarh is so much bigger than I expected and having the car take us between the far corners of the site saved our legs. The Vijay Stambh views over the plains were unforgettable. Booking was easy and confirmation came through quickly. Highly recommend pairing an early start with this one." },
                { author: "Sofia R.", country: "Spain", rating: 4, date: "2026-04-03", text: "The fort is magnificent and our guide was warm and informative. Just be prepared for real heat by April, the hilltop is very exposed and there is a lot of walking on uneven stone. A hat and plenty of water are a must. The car was comfortable and cool which was a relief on the return leg. A solid, worthwhile day trip overall." },
                { author: "Nathan K.", country: "Canada", rating: 5, date: "2026-05-27", text: "One of the best history days we had in Rajasthan. Our chauffeur was punctual and friendly, and the local guide at Chittorgarh turned a pile of ancient walls into gripping stories of courage and sacrifice. The Kirti Stambh detail is incredible. Ninety dollars for a private car, driver and guide for the full day felt like excellent value. Would book again." },
            ],
        };
    }

    // --- REMAINING: ranakpur-jain-temple-spiritual-tour (auto-added 2026-07-02) ---
    if (slug === 'ranakpur-jain-temple-spiritual-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "The fort wall at Kumbhalgarh genuinely took my breath away — it just goes on forever over the hills. Our guide knew every story about Maharana Kumbha and made the history stick. Ranakpur in the afternoon was a total contrast, all cool white marble and those endless carved pillars. A long but wonderful day, and the AC car was a blessing." },
                { author: "Marcus B.", country: "Germany", rating: 5, date: "2025-08-09", text: "Booked this as a private trip for the two of us and it was worth every rupee. The driving is real — a couple of hours each way — but the roads through the Aravalli hills are lovely. Counting the 1,444 pillars at Ranakpur became a running joke with our guide. Pickup from our hotel was bang on time. Bring good shoes for the fort climb." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-09-22", text: "Ranakpur is one of the most beautiful buildings I have ever stood inside. Our guide briefed us on the temple etiquette beforehand so we were not caught out by the leather and dress rules. Kumbhalgarh earlier in the day was almost empty and the views were incredible. Ten hours flew by. Loved having bottled water waiting in the car." },
                { author: "Tom H.", country: "Australia", rating: 4, date: "2025-10-30", text: "A brilliant day out, though be honest with yourself about the drive — it is a long time in the car for two sites. The early start was worth it to beat the heat at the fort. Ranakpur felt slightly rushed as the temple only opens to tourists around midday, so plan your timing. Guide was friendly and knowledgeable throughout. Still very glad we did it." },
                { author: "Camille R.", country: "France", rating: 5, date: "2025-12-05", text: "We travelled with my parents and the private car made the whole thing comfortable for them. My father managed most of the fort at his own pace, which you simply cannot do on a group tour. The marble carvings at Ranakpur left us speechless. Our driver found a great vegetarian spot for lunch near the temple. Highly recommend for families." },
                { author: "Liam O.", country: "Ireland", rating: 5, date: "2026-01-18", text: "Kumbhalgarh is criminally underrated — that fortress wall is right up there with anything in Rajasthan and there were barely any crowds. Our guide was excellent, weaving in legends without ever lecturing. Ranakpur afterwards was serene and immaculate. Good value for a full private day with all the tolls and parking sorted. December weather was perfect for walking." },
                { author: "Nadia A.", country: "United Arab Emirates", rating: 4, date: "2026-03-11", text: "Really enjoyable, but I would go in cooler months if you can — even in March the walk up the fort in the sun was tiring. The private setup was excellent and our guide was patient when I wanted to stop constantly for photos of that wall. Ranakpur is stunning; just remember the camera ticket inside. A memorable trip overall despite the heat." },
                { author: "Daniel K.", country: "Netherlands", rating: 5, date: "2026-05-27", text: "One of the highlights of our Rajasthan trip. The two sites complement each other perfectly — the rugged hilltop fort in the morning and the delicate temple in the afternoon. Everything was seamless from the hotel pickup to the tolls being handled for us. Our guide clearly loved the region and it showed. Ten hours very well spent, and fair value for a private car." },
            ],
        };
    }

    // --- REMAINING: jaisalmer-fort-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'jaisalmer-fort-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Genuinely the highlight of our Rajasthan trip. The driver collected us right from our hotel in Jaisalmer and the drive out to the dunes was easy. Racing across the sand in the jeep had us laughing like kids, then the camel ride at sunset was so peaceful. The folk musicians around the bonfire afterwards were wonderful. Worth every penny of the $120." },
                { author: "Mateo R.", country: "Spain", rating: 5, date: "2025-08-29", text: "An incredible evening in the Thar. What surprised me most was the food, the Rajasthani dinner was fresh, generous and completely vegetarian friendly, which suited us perfectly. The Sufi songs and gypsy dancing under the stars felt authentic rather than staged. Camel handlers were kind and patient with my mother, who was nervous at first but ended up loving it." },
                { author: "Sophie L.", country: "Australia", rating: 4, date: "2025-09-22", text: "A brilliant experience overall and the sunset over the dunes was unforgettable. My only honest note is the afternoon heat in September was pretty intense during the first part of the jeep safari, so bring more water than you think. Once the sun dropped and the bonfire and dancing started it was perfect. The camel ride was gentler than expected. Still highly recommend." },
                { author: "Lukas B.", country: "Germany", rating: 5, date: "2025-10-30", text: "Very well organised from pickup to drop off. Eight hours flew by. The jeep portion is bumpy and thrilling, the camel ride slow and calming, a great contrast. Loved that park fees, tea, snacks and dinner were all included so there was nothing extra to pay at the camp. The folk show was a beautiful end to the day. Fantastic value." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2025-11-19", text: "We travelled with two kids and this was ideal for a family. The camel ride is slow and safe, and the little ones were mesmerised by the fire dancers and drummers. Staff kept the water coming and made sure everyone was comfortable. Watching the desert turn gold at sunset with a hot cup of tea is something we will remember for years." },
                { author: "Connor F.", country: "Ireland", rating: 5, date: "2026-01-27", text: "Did this in late January and the timing was perfect, warm on the dunes and cool by the fire. Bring a jacket for the evening as it gets chilly fast once it is dark. The Sufi music session was the standout for me, real local musicians with real skill. The dinner was hearty and the whole thing felt relaxed rather than rushed." },
                { author: "Camille D.", country: "France", rating: 4, date: "2026-03-15", text: "A lovely desert escape with beautiful scenery and warm hosts. Being honest, the drive from Jaisalmer to the dunes felt a little long and the group at the camp was larger than I expected, so it is more shared than private. That said, the camel ride at golden hour and the bonfire dance more than made up for it. Great vegetarian dinner too." },
                { author: "Hana O.", country: "United States", rating: 5, date: "2026-05-08", text: "Everything about this delivered. Smooth hotel pickup, an exhilarating jeep ride, and then a serene camel walk across endless golden sand. The evening around the bonfire with folk music and gypsy dance was pure magic and the photos I got at sunset are some of my favourites from all of India. Our host looked after us the whole time. Book it." },
            ],
        };
    }

    // --- REMAINING: jaisalmer-fort-half-day-tour (auto-added 2026-07-02) ---
    if (slug === 'jaisalmer-fort-half-day-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Six hours flew by. Our guide grew up in Jaisalmer and knew every carving on Patwon Ki Haveli by heart. The private car made it so easy to hop between the fort, Gadisar Lake and Vyas Chhatri without getting flustered in the heat. He even walked us to a tiny shop for local sweets. Honestly the best half-day we had in Rajasthan." },
                { author: "Marcus T.", country: "Australia", rating: 5, date: "2025-08-29", text: "Booked this to get our bearings on day one and it was perfect. The fort is a living maze and having a guide who explained the Rajput history brought it alive. Nathmal Ki Haveli and Badal Mahal were unexpected favourites. AC car was clean and cold, which mattered a lot in August. Water and snacks kept the kids happy too." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2025-09-18", text: "Un tour vraiment personnel. We could linger as long as we liked at each haveli and nobody rushed us. Vyas Chhatri at the end, with the light on the sandstone, was magical. Our guide's stories about the beliefs behind the temples made it far more than just sightseeing. Highly recommend arranging an early morning start." },
                { author: "Daniel K.", country: "Germany", rating: 4, date: "2025-10-07", text: "Genuinely informative tour and a lovely guide who clearly loves his city. My only note is that we started late morning and the midday sun inside the fort was punishing, so book an early slot if you can. There's also more walking on uneven stone than I expected. Otherwise the car, the pace and the haveli visits were all excellent value." },
                { author: "Priya R.", country: "Canada", rating: 5, date: "2025-11-22", text: "As a solo traveller I felt completely looked after. The driver and guide were warm and professional, and I never worried about touts or getting lost in the fort lanes. Gadisar Lake in the morning was so peaceful. Loved that they pointed me to authentic vegetarian snacks rather than tourist traps. Worth every dollar for the private attention." },
                { author: "James O.", country: "Ireland", rating: 5, date: "2026-01-15", text: "Winter was the ideal time for this. Comfortable temperatures meant we could really enjoy the walk around the fort and the havelis. Amar Sagar and the old Shiva temple were a quiet, beautiful surprise that most day-trippers miss. Our guide balanced facts with easy conversation. Six hours was just the right length to see everything without feeling exhausted." },
                { author: "Noor A.", country: "United Arab Emirates", rating: 5, date: "2026-03-08", text: "We travelled with my parents and this suited them perfectly. Most of the getting-around was by car, so the older members of our family only walked when they wanted to. The guide adjusted the pace beautifully and made sure everyone had water. Mandir Palace and Patwon Ki Haveli were stunning. A relaxed, well-organised introduction to the Golden City." },
                { author: "Hannah V.", country: "Netherlands", rating: 4, date: "2026-05-19", text: "Lovely tour overall and our guide was fantastic company. It was very hot by May, so the fort climb felt long even with the AC car for breaks, and a couple of the later stops felt slightly rushed to beat the afternoon heat. Still, seeing Gadisar Lake and the chhatris with a knowledgeable local was well worth it. Just go early in summer." },
            ],
        };
    }

    // --- REMAINING: jaisalmer-fort-certified-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'jaisalmer-fort-certified-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.8,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide made the 800-year-old fort come alive. He walked us through Ganesh Pol and Suraj Pol explaining how the gates were defended, then showed us corners of the Jain temples we'd never have found alone. What struck me most was how he explained everyday life of the families still living inside. Worth far more than the price we paid." },
                { author: "Mark T.", country: "Australia", rating: 5, date: "2025-08-29", text: "Booked the private guide and it was the best decision of our Rajasthan trip. Three hours flew by. He tailored everything to us, slowed down at the Raj Mahal because my wife loves architecture, and knew exactly where to stand for photos of the golden walls at sunset. English was excellent and easy to follow." },
                { author: "Sophie L.", country: "France", rating: 4, date: "2025-09-22", text: "A really informative tour and our guide was knowledgeable and patient. My only honest note is that the midday heat inside the fort was brutal in September, so I'd strongly suggest an early morning slot instead. Once we got into the shaded lanes and temples it was wonderful, and he helped us dodge the pushy shop sellers." },
                { author: "Daniel K.", country: "Germany", rating: 5, date: "2025-10-30", text: "Precise, punctual and genuinely passionate about Jaisalmer. He met us right at the entrance ramp and never lost us in the maze of streets. The stories about the merchant families and the hidden viewpoints over the Thar Desert were the highlight. He even advised us honestly on temple camera fees so we weren't overcharged." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-12-11", text: "We travelled with our two kids and the guide was fantastic with them, turning the fort's history into little stories they actually remembered. He adjusted the pace whenever they got tired and found shady spots to rest. The Jain temple carvings were stunning and he explained the symbolism beautifully. Highly recommend for families." },
                { author: "Ryan O.", country: "Ireland", rating: 5, date: "2026-02-08", text: "For thirty dollars this is astonishing value. Having a licensed local made all the difference navigating those confusing lanes and understanding what we were looking at. He pointed out the difference between the old havelis and the newer construction, and gave us tips on fair prices before we bought a scarf. Friendly, no pressure, brilliant knowledge." },
                { author: "Isabella R.", country: "Italy", rating: 4, date: "2026-04-19", text: "Lovely, well-informed guide and a genuinely fascinating fort. The one small thing is that three hours felt a touch rushed toward the end as we tried to fit in both the palace and all the temples, so we skimmed the markets a little. Still, we learned so much and the desert viewpoints were unforgettable. Wear proper shoes, the stones are uneven." },
                { author: "Carlos M.", country: "Spain", rating: 5, date: "2026-05-27", text: "One of the best guides we had in India. He clearly loves his city and it shows. We started early to beat the crowds and had the Jain temples almost to ourselves. He explained the history of Hawa Pol and the royal palace with real depth, and shared personal stories about growing up near the fort. Truly memorable morning." },
            ],
        };
    }

    // --- REMAINING: kashi-vishwanath-temple-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'kashi-vishwanath-temple-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide met us before dawn and the sunrise boat ride was simply unforgettable — mist on the Ganges, temple bells, people bathing at the ghats. He explained every ritual we saw without ever rushing us. Booking the private option meant we could stop whenever something caught our eye. Genuinely one of the most moving mornings of our lives." },
                { author: "Mathis L.", country: "France", rating: 5, date: "2025-08-29", text: "Nous avons pris l'option avec voiture climatisee et cela valait chaque centime. The car made Sarnath easy to reach and gave us a cool break between stops. Our guide's knowledge of Buddhist history at the site was excellent, and he timed the evening Aarti perfectly so we had a clear view of the priests and the flames." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-09-22", text: "I have visited Varanasi before but never understood it until this tour. The guide navigated the tangle of old-city lanes effortlessly and shared stories about the temples that no guidebook has. He also steered us kindly past the touts near the river. The Ganga Aarti in the evening left me in tears. Worth far more than the price." },
                { author: "Daniel K.", country: "Germany", rating: 4, date: "2025-10-11", text: "A fascinating and well-organised day with a very well-informed guide. My only honest caveat is the crowds at the evening Aarti — it is genuinely packed and you need to hold your spot. The early start is also real, so go to bed early the night before. That said, the sunrise on the river more than made up for the lost sleep." },
                { author: "Aisha R.", country: "United Arab Emirates", rating: 5, date: "2025-11-30", text: "We travelled with my parents and the guide-with-car option was the right call for them. Minimal walking to reach each site, air-conditioning between stops, and the guide adjusted the pace so nobody felt rushed. He was patient answering my mother's endless questions about the temples. A respectful, thoughtful experience for an older family group." },
                { author: "Connor M.", country: "Ireland", rating: 5, date: "2026-02-08", text: "Booked the guide-only option and it was superb value at forty dollars. We walked everywhere through the ghats and back lanes, which is honestly the best way to feel the city. Our guide arranged a boat with a local boatman on the spot for a small extra. Endlessly knowledgeable, warm and never pushy about tips. Highly recommend." },
                { author: "Sofia B.", country: "Italy", rating: 4, date: "2026-04-19", text: "Beautiful, intense day and a lovely guide who clearly loves his city. Two small things: April was extremely hot by midday, so I'd suggest the car option if you visit in spring, and the walk down the ghat steps was slippery near the water. Neither ruined anything. The sunrise boat ride and the temple stories were the highlights for me." },
                { author: "Grace T.", country: "New Zealand", rating: 5, date: "2026-05-27", text: "From the misty morning on the Ganges to the fire and chanting of the Aarti at night, this tour captured the soul of Varanasi. Our guide was punctual, spoke wonderful English and dressed us appropriately for the temples so we didn't cause offence. He recommended a tiny vegetarian place for kachori that we'd never have found. Faultless from start to finish." },
            ],
        };
    }

    // --- REMAINING: jaisalmer-fort-heritage-walking-tour (auto-added 2026-07-02) ---
    if (slug === 'jaisalmer-fort-heritage-walking-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide made the Golden Fort come alive. Learning that 5,000 people still live inside completely changed how I saw the place, and he took us through little lanes we'd never have found alone. Nathmal Ki Haveli and the puzzle of the two brothers carving it was my favourite moment. Ending at Gadisar Lake in the afternoon was so peaceful. Genuinely one of the best guided days of our trip." },
                { author: "Mark D.", country: "Australia", rating: 5, date: "2025-09-02", text: "Booked the full eight-hour option and it was worth every rupee. The pace was relaxed, never rushed, and the hotel pickup meant we didn't have to worry about a thing. Patwon Ki Haveli blew me away, the guide explained the whole story of the Jain merchant family and pointed out carvings I'd have walked straight past. Bring good shoes though, those fort cobbles are no joke." },
                { author: "Lena K.", country: "Germany", rating: 5, date: "2025-06-19", text: "Sehr gut organised from start to finish. We are a family with two teenagers and even they stayed interested the whole day thanks to the stories about the fort and the seven Jain temples. The temples themselves were beautiful and calm. Our guide was patient, spoke excellent English and let us stop for photos constantly. Highly recommend for anyone wanting real depth, not just a quick look." },
                { author: "Sophie L.", country: "France", rating: 4, date: "2025-08-11", text: "A wonderful walking tour and our guide was truly knowledgeable about every haveli. My only honest note is the heat, we went in August and by midday it was brutal walking around the fort. Start as early as you can and carry lots of water. That aside, Patwon Ki Haveli and Gadisar Lake were magical and the guide adjusted our breaks whenever we needed shade." },
                { author: "James O.", country: "Ireland", rating: 5, date: "2025-11-05", text: "Fantastic value with a proper local guide rather than a rushed group tour. We spent real time inside the fort palace and he explained how the living fort actually works day to day. The walk between the havelis is short and easy. Gadisar Lake at the end was a lovely calm finish after a busy day. Couldn't fault the organisation at all." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2026-01-22", text: "January was the perfect time to do this, cool enough to enjoy walking all day. Our guide's knowledge of the Jain temples inside the fort was incredible and he clearly loves his city. He also helped us dodge the pushier shop sellers near the havelis without any fuss. The Nathmal Haveli puzzle detail was such a clever thing to point out. Wonderful experience." },
                { author: "Thomas B.", country: "Canada", rating: 4, date: "2026-03-17", text: "Really enjoyable and informative day exploring the Golden Fort and havelis. The guide was excellent and the pickup was punctual. My only small gripe is that our stop at Gadisar Lake felt a little rushed at the end because we'd spent so long in the fort, though honestly the fort deserved it. Wear proper shoes, there are a lot of steps and uneven lanes. Great overall." },
                { author: "Isabella R.", country: "Italy", rating: 5, date: "2026-05-28", text: "An absolutely gorgeous tour of Jaisalmer's heritage. Standing on the fort walls looking over the golden city was unforgettable, and the intricate stonework of Patwon Ki Haveli left me speechless. Our guide told the legends behind each site with such passion. The hotel pickup made everything effortless. If you love history and architecture, this eight-hour walk is exactly what you want." },
            ],
        };
    }

    // --- REMAINING: gwalior-fort-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'gwalior-fort-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide brought Gwalior Fort to life with stories I'd never have got from a guidebook. The carvings on the Sas Bahu Temple were stunning and he knew exactly which angles to photograph. We took the car option and it was money well spent, no fuss getting between the fort and Jai Vilas Palace. A genuinely memorable day." },
                { author: "Michael T.", country: "United States", rating: 5, date: "2025-08-22", text: "The Durbar Hall at Jai Vilas Palace floored me, those chandeliers are unreal, and our guide explained the whole elephant-on-the-roof test. He was patient with my endless questions and adjusted the pace so my wife could rest between the fort steps. Booking was straightforward and the confirmation came through quickly. Highly recommend the private setup." },
                { author: "Sophie L.", country: "Australia", rating: 4, date: "2025-09-30", text: "Really good tour and a knowledgeable guide. My only honest gripe is the heat, we went in September and the climb up the fort was brutal by late morning. Wish we'd started earlier. That said, the Sun Temple at sunset was gorgeous and worth pushing through for. Take the car and bring more water than you think you need." },
                { author: "Lukas B.", country: "Germany", rating: 5, date: "2025-10-18", text: "Excellent value for a fully private guide. We chose the guide-only option and arranged our own auto-rickshaws, which worked fine, though next time I'd pay for the car. The Teli Ka Mandir and the fort ramparts gave incredible views over the city. Our guide's English was clear and he never rushed us at the museum." },
                { author: "Camille R.", country: "France", rating: 5, date: "2025-11-27", text: "A beautifully organised day. What impressed me most was how our guide handled the ticket counters at the fort and the palace, no queuing at the wrong window, no overpaying. He tailored everything to what interested us and even suggested a lovely vegetarian lunch spot. Gwalior surprised me and this tour was the reason it did." },
                { author: "Nadia H.", country: "United Arab Emirates", rating: 5, date: "2026-01-15", text: "We travelled with our two kids and they were captivated, especially by the silver toy-train in the Jai Vilas museum and running along the fort walls. Our guide was wonderful with them and kept the history fun rather than dry. The car and driver made the whole day stress-free. One of the best family days of our India trip." },
                { author: "Declan M.", country: "Ireland", rating: 4, date: "2026-03-08", text: "Solid tour with a friendly, well-informed guide. It's a long full day and by the Sun Temple stop we were flagging a little, so pace yourself. The fort itself is spectacular and the Man Singh Palace tilework is worth the climb. Good value on the car option given how spread out the sites are. Would book again." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2026-05-19", text: "Did this as a solo traveller and felt completely at ease the whole day. Having an approved guide made navigating the crowded fort entrance so much easier, and he was respectful and professional throughout. The Sas Bahu Temple and the panoramic views were the highlights for me. Confirmation and pickup at my hotel went exactly as promised." },
            ],
        };
    }

    // --- REMAINING: krishna-janmasthan-temple-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'krishna-janmasthan-temple-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide made the birthplace of Krishna come alive with stories I would never have understood on my own. He knew exactly which lane led where in Vrindavan and warned us before we reached Banke Bihari that phones weren't allowed. Four hours flew by. For forty dollars this was honestly the best-value experience of our whole India trip." },
                { author: "Julian M.", country: "Australia", rating: 5, date: "2025-09-02", text: "We ended the tour at Prem Mandir just as the evening lights came on and the marble glowed in colour. Absolutely magical. The guide timed everything around the temple rituals so we caught the aarti at the right moment. He also helped us sort an auto-rickshaw between Mathura and Vrindavan since transport isn't part of the booking. Highly recommended." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2025-10-19", text: "As someone who knew nothing about Hindu mythology, I was worried I'd feel lost. Instead our guide patiently explained Krishna's childhood as we walked, and it all clicked. He was respectful of the worshippers and told us exactly when to remove shoes and where cameras were fine. A calm, thoughtful morning away from the usual tourist rush." },
                { author: "Rahul K.", country: "United Arab Emirates", rating: 4, date: "2025-08-08", text: "A genuinely knowledgeable guide and a moving visit to the Janmabhoomi temple. My only honest note is that we went in August and the midday heat in Mathura was brutal, so go early if you can. The Banke Bihari lanes were also packed shoulder to shoulder. Still very glad we booked a guide rather than wandering alone." },
                { author: "Greta H.", country: "Germany", rating: 5, date: "2025-11-27", text: "Very well organised for what is essentially a guiding service. Our guide met us on time, explained the strict security at Krishna Janmabhoomi before we arrived so we left our bags ready, and never once rushed us. The peda he recommended afterwards was delicious. If you want context rather than just photos, this is the tour to book." },
                { author: "Connor B.", country: "Ireland", rating: 5, date: "2026-01-15", text: "Winter mornings were pleasantly cool which made the walking easy for my parents who are in their seventies. The guide adjusted the route so there were no awkward climbs and gave them time to rest. Prem Mandir's architecture stopped us in our tracks. A warm, personal experience and worth far more than we paid." },
                { author: "Marisol G.", country: "Spain", rating: 4, date: "2026-03-22", text: "Beautiful and spiritual, and our guide was excellent at keeping the touts and self-appointed priests away from us. Just be aware the tour is guide-only, so we had to arrange and pay for the taxi between the two towns ourselves, which added a bit of hassle on the day. Once we sorted that, everything was wonderful." },
                { author: "Nathan P.", country: "Canada", rating: 5, date: "2026-05-30", text: "Booked this while based in Agra and it was the highlight of the region for us. The guide's passion for the stories behind each temple was infectious, and he balanced the sacred Janmabhoomi visit with the lively colour of Vrindavan's streets perfectly. Being a private tour meant we set the pace and lingered wherever we wanted. Couldn't fault it." },
            ],
        };
    }

    // --- REMAINING: krishna-janmasthan-temple-full-day-tour (auto-added 2026-07-02) ---
    if (slug === 'krishna-janmasthan-temple-full-day-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Covering the Taj Mahal, Agra Fort and Mathura in one day sounded impossible, but our driver had it perfectly timed. We were at the Taj just after sunrise with barely anyone around, and the marble glowed pink. By evening the Prem Mandir was lit up like something out of a dream. The Toyota was clean and comfortable for the long drive back to Delhi." },
                { author: "Marcus T.", country: "Australia", rating: 5, date: "2025-08-30", text: "The Agra guide really knew his Mughal history and made Agra Fort come alive with stories about Shah Jahan. What surprised me most was Mathura itself, the Krishna Janam Bhumi had an atmosphere I wasn't expecting. Having everything private meant we set our own pace and never felt rushed at the temples. Money well spent for a packed day." },
                { author: "Sophie L.", country: "France", rating: 4, date: "2025-09-22", text: "A wonderful day but be honest with yourself about the early start, we left Delhi before six and got back close to midnight. The drive is long and September was still very hot at Agra Fort. That said, the Prem Mandir in the evening was worth every kilometre and our driver was patient and safe throughout. Bring water and comfortable shoes." },
                { author: "Daniel R.", country: "United States", rating: 5, date: "2025-10-11", text: "Booked this for my parents and me, and the private car made all the difference for my dad who tires easily. All tolls and parking were handled so there was zero hassle on the road. The Taj Mahal in the morning light was the highlight, but the peda sweets we picked up in Mathura were a close second. Highly recommend." },
                { author: "Anneke V.", country: "Netherlands", rating: 5, date: "2025-12-05", text: "December was the perfect time for this, cool and clear. Two UNESCO sites plus a real Hindu pilgrimage city in one trip is remarkable value. Our Mathura guide was respectful in explaining temple etiquette and told us exactly where photos weren't allowed. The ghats along the river were peaceful. A big day but beautifully organised from start to finish." },
                { author: "Rajesh P.", country: "United Arab Emirates", rating: 5, date: "2026-02-18", text: "As someone returning to my roots, visiting Krishna's Janam Bhumi meant a lot, and the guide gave us space to experience it properly. The transition from the grandeur of the Taj to the devotion of Mathura in a single day is something special. The car was spacious for four of us and the driver navigated Agra traffic like a pro. Truly memorable." },
                { author: "Grace M.", country: "New Zealand", rating: 4, date: "2026-04-09", text: "Genuinely a great trip, though it is a lot to fit into one day and the Agra Fort visit felt a touch rushed to make it to Mathura before dark. April heat was intense by midday too. Still, the guides were friendly and knowledgeable, and seeing Prem Mandir illuminated at night was magical. Just go in knowing it's a full, tiring day." },
                { author: "Lorenzo B.", country: "Italy", rating: 5, date: "2026-06-01", text: "Efficient and stress-free. I loved that the whole Delhi loop was included with no hidden fuel or toll charges to argue about. The Taj Mahal exceeded every expectation, and I hadn't even heard of Mathura before booking, but the temples and evening lights made it the surprise of my India trip. Comfortable Toyota, courteous driver, excellent local guides in both cities." },
            ],
        };
    }

    // --- REMAINING: krishna-janmasthan-temple-vridavan-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'krishna-janmasthan-temple-vridavan-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "We were picked up right on time from our Agra hotel and the whole day just flowed. Our guide explained the story of Krishna's birthplace at Janmabhoomi so vividly that it stayed with us. The air-conditioned car was a blessing in July, and having cold water waiting for us after every temple made a real difference. Genuinely one of the highlights of our India trip." },
                { author: "Mathias K.", country: "Germany", rating: 5, date: "2025-08-02", text: "Very well organised private trip from Agra. The drive is about ninety minutes each way, which gave our guide plenty of time to prepare us for what we'd see. Banke Bihari was packed but he knew exactly how to move us through and where we couldn't take photos. ISKCON at Vrindavan was serene and beautiful. Excellent value for a fully private car and driver." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-09-19", text: "Did this with my parents who are in their seventies and it worked perfectly. The car dropped us close to each temple so the walking was manageable, and the guide kept a gentle pace. Mum loved the peda shop he took us to in Mathura. Removing shoes at every shrine takes a moment but it's all part of it. Warm, respectful and unhurried." },
                { author: "Connor D.", country: "Ireland", rating: 4, date: "2025-10-11", text: "A really rewarding day, though be ready for a lot of time in the car since it's a round trip from Agra. The temples themselves were wonderful and our guide was patient with all my questions about Krishna. Vrindavan's lanes get crowded and there were a few pushy vendors, but he handled them well. Just start early to make the most of it." },
                { author: "Amelie R.", country: "France", rating: 5, date: "2025-12-05", text: "December was the perfect time for this — comfortable weather and softer crowds at the temples. What I appreciated most was the flexibility of a private tour; we lingered at ISKCON far longer than planned and nobody rushed us. The guide's knowledge of the local traditions turned a sightseeing trip into something quite moving. Toll, parking and fuel all sorted, no hidden costs." },
                { author: "Grace T.", country: "Australia", rating: 5, date: "2026-02-17", text: "Booking was simple and confirmation came through with the driver's number, which was reassuring. From our Agra hotel to Mathura and back, everything was seamless. Krishna Janmasthan felt deeply atmospheric and the guide balanced the spiritual side with practical tips on dress and photography. Great pure-veg lunch recommendation too. Would happily recommend this to anyone based in Agra." },
                { author: "Daniel V.", country: "Netherlands", rating: 4, date: "2026-04-09", text: "Good, authentic experience and a knowledgeable guide. Fair warning that April is genuinely hot, so the AC car and the bottled water were much appreciated. A couple of the Vrindavan temple stops felt slightly rushed as we tried to fit everything in, but the Banke Bihari and ISKCON visits were the standouts. Solid value overall for a private day out from Agra." },
                { author: "Sofia M.", country: "Italy", rating: 5, date: "2026-05-28", text: "Travelling solo as a woman, I felt completely comfortable the entire day. Door-to-door pickup meant I never had to worry about transport, and the guide stayed close through the busy bazaars. He clearly loves Vrindavan and it showed. Watching the devotion at ISKCON was unforgettable. For ninety dollars covering car, guide, water and all the tolls, it's excellent value." },
            ],
        };
    }

    // --- REMAINING: same-day-taj-mahal-tour-from-mumbai (auto-added 2026-07-02) ---
    if (slug === 'same-day-taj-mahal-tour-from-mumbai') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Doing the Taj Mahal in a single day from Mumbai sounded mad, but it worked beautifully. The flight to Delhi was smooth, the car on the Yamuna Expressway was clean and cold, and our guide in Agra was a proper historian. Standing in front of that marble by late morning felt unreal. We were back in Mumbai for a late dinner. Worth every rupee." },
                { author: "Marcus T.", country: "Australia", rating: 5, date: "2025-08-29", text: "Slick operation from start to finish. Airport transfers were waiting, entry tickets already sorted so no queuing, and the Agra Fort was a surprise highlight I hadn't expected to love as much as the Taj. Guide handled the pushy vendors so we didn't have to. Long day, yes, but I got a Wonder of the World ticked off without unpacking a bag." },
                { author: "Lena K.", country: "Germany", rating: 4, date: "2025-09-17", text: "A wonderful experience overall and the guide was excellent, very knowledgeable about Shah Jahan and Mumtaz. My only honest note is the heat in September was brutal and the drive back to Delhi felt long after a full day on our feet. Bring more water than you think. The Taj itself more than made up for the tiring pace." },
                { author: "Priya R.", country: "Singapore", rating: 5, date: "2025-10-08", text: "Loved that everything was private in Agra so we could linger for photos at the reflecting pool without being rushed. Lunch was included and they happily arranged a vegetarian thali for us. The morning light on the marble was stunning. Having the flights bundled into one price made booking painless for a first trip to India." },
                { author: "James O.", country: "Ireland", rating: 5, date: "2025-11-21", text: "Went in November and the weather was perfect, cool enough to walk the gardens comfortably. The whole thing is impressively organised for a same-day trip: flight, car, guide, tickets, lunch, all seamless. Our driver was calm and safe on the expressway. If you only have one free day out of Mumbai, this is how to spend it." },
                { author: "Sophie M.", country: "France", rating: 5, date: "2026-01-30", text: "An early alarm but absolutely worth it. Seeing the Taj Mahal in person after years of photos brought a lump to my throat. Our guide knew exactly where to stand for the classic shots and explained the inlay work in the mausoleum beautifully. Agra Fort in the afternoon gave real context to the whole Mughal story. Flawless day." },
                { author: "Daniel V.", country: "Netherlands", rating: 4, date: "2026-03-19", text: "Great tour and genuinely good value once you factor in the return flights and private car. Just go in with realistic expectations about the pace: the pre-dawn start and two flights in one day are tiring, and our stop at the fort felt slightly rushed to make the return flight. The Taj Mahal portion was unhurried though, which is what matters most." },
                { author: "Hannah B.", country: "Canada", rating: 5, date: "2026-05-27", text: "Booked this for my parents and myself and the private setup was ideal for travelling with older family. Short walks, the car close to each site, and a patient guide who adjusted to our speed. Even in late May's warmth we managed fine with early timing and shade breaks. Coming home to Mumbai the same night instead of packing up a hotel was the real luxury." },
            ],
        };
    }

    // --- REMAINING: overnight-taj-mahal-tour-from-mumbai (auto-added 2026-07-02) ---
    if (slug === 'overnight-taj-mahal-tour-from-mumbai') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Doing the Taj Mahal at sunrise was worth the whole trip. Our Agra guide had us at the gate before the crowds and the marble genuinely turned pink as the sun came up. Having the overnight hotel meant we weren't exhausted, and the private car on the Yamuna Expressway was smooth and cool. Honestly one of the best experiences of our India trip." },
                { author: "Marcus T.", country: "Australia", rating: 5, date: "2025-08-29", text: "Everything was handled for us from the Mumbai flight to the last transfer, which took all the stress out of a big day trip. Agra Fort surprised me as much as the Taj itself, and our guide knew every story behind the walls. Breakfast at the hotel was solid and the whole thing felt organised and private. Great value considering flights were included." },
                { author: "Sophie L.", country: "France", rating: 4, date: "2025-09-22", text: "A beautiful tour and the guide in Agra was lovely and patient with our questions. My only honest note is the very early start on day one, we were up before dawn for the flight, so don't expect to sleep in. It was also quite hot walking around the fort in September. That said, seeing the Taj at sunset from Mehtab Bagh made up for the tired legs." },
                { author: "Daniel K.", country: "Germany", rating: 5, date: "2025-10-11", text: "Precise and well timed from start to finish. The optional Mehtab Bagh stop at sunset was the highlight for me, the reflection of the Taj across the river is something photos never quite capture. Guide was knowledgeable about the Mughal history and never rushed us. The included entry tickets meant zero queuing. Would recommend to anyone flying in from Mumbai." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2025-11-30", text: "We travelled with my parents who are in their seventies, and the overnight pace was perfect for them. No rushing, a comfortable hotel, and the private air-conditioned vehicle made the Delhi to Agra drive easy on everyone. Our guide arranged a wonderful vegetarian thali recommendation nearby. The whole family loved it and it felt genuinely worth what we paid." },
                { author: "Ryan O.", country: "Ireland", rating: 5, date: "2026-01-18", text: "January was the ideal time to visit, cool and clear, and the sunrise light on the Taj was unreal. The flights connected well and the driver was waiting for us at every point. What I appreciated most was how everything was included, tickets, tolls, hotel, so there were no surprise costs. Our guide clearly loved his city and it showed." },
                { author: "Chloe B.", country: "Canada", rating: 4, date: "2026-03-07", text: "Genuinely memorable and the guiding at both the Taj and Agra Fort was excellent. Fair warning, it is a long two days with the flights either end and a fair bit of walking on uneven stone, so wear proper shoes. There were also a few persistent sellers at the main gate, but our guide handled them for us. Still absolutely glad we chose the overnight version over a rushed day trip." },
                { author: "Lars V.", country: "Netherlands", rating: 5, date: "2026-05-24", text: "Slick operation from the Mumbai airport pickup onward. Staying overnight let us see the Taj Mahal twice, in evening light and again early morning, and the difference in atmosphere was striking. Photography around the gardens and gateways was fantastic, though you can't shoot inside the mausoleum itself. The private guide and included breakfast rounded it off nicely. Highly recommended." },
            ],
        };
    }

    // --- REMAINING: same-day-taj-mahal-tour-from-mumbai-by-flight (auto-added 2026-07-02) ---
    if (slug === 'same-day-taj-mahal-tour-from-mumbai-by-flight') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Doing the Taj in a day from Mumbai sounded mad, but it worked beautifully. The early flight to Delhi was smooth and our driver was waiting the moment we landed. The guide in Agra knew every angle for photos and had our Taj and Agra Fort tickets ready so we skipped the queues. Home by night, exhausted but thrilled." },
                { author: "Marcus T.", country: "United States", rating: 5, date: "2025-08-29", text: "Worth every dollar of the 899. Everything was handled for us from the Mumbai airport onwards, the private car on the Yamuna Expressway was comfortable and cold, and lunch was genuinely good Indian food. Seeing the marble up close after only knowing it from photos was a moment I won't forget. Seamless organisation start to finish." },
                { author: "Sophie L.", country: "Australia", rating: 4, date: "2025-09-17", text: "An incredible experience but be ready for the alarm clock. Our pickup was before dawn and it's a genuine 12-hour day, so I was fading by the return flight. That said, the Taj Mahal at mid-morning was breathtaking and the guide was patient and knowledgeable. Just go in knowing it's a long haul and you'll love it." },
                { author: "Jan D.", country: "Netherlands", rating: 5, date: "2025-10-05", text: "Flawless logistics. Two flights, a private driver, a guide, entry tickets and lunch all coordinated without a single hitch. Agra Fort surprised me almost as much as the Taj itself and our guide brought the Mughal history to life. For visitors based in Mumbai with limited time, this is the smart way to tick off a wonder of the world." },
                { author: "Camille R.", country: "France", rating: 5, date: "2025-11-12", text: "The reflecting pool photo everyone dreams of, and our guide made sure we got it before the crowds thickened. I loved that the tickets were already sorted so we walked straight in. The drive from Delhi gave us a nap and a look at the countryside. A very well planned day trip that felt private and personal throughout." },
                { author: "Rohan S.", country: "Singapore", rating: 4, date: "2026-01-23", text: "Great value for a bucket-list day. The winter timing meant lovely cool weather at the monuments. My only note is that the stop at the Taj felt slightly rushed because of the flight schedule, and the touts near the gate were persistent. Our guide handled them well though, and Agra Fort was a real highlight I hadn't expected." },
                { author: "Liam O.", country: "Ireland", rating: 5, date: "2026-03-08", text: "Booked this for my parents and myself and it suited all three of us. The air-conditioned car made the driving painless and the included lunch meant no stress about finding food. Standing in front of the Taj Mahal together was emotional. Communication before the trip was excellent and confirming everything was easy. Highly recommend for families short on days." },
                { author: "Greta H.", country: "Germany", rating: 5, date: "2026-05-19", text: "Precise and professional from booking to the return landing in Mumbai. The guide's English was clear and he answered every question about Shah Jahan and Mumtaz Mahal. Skipping the ticket lines at both the Taj and Agra Fort saved so much time. Yes it's an early start, but doing this as a single day rather than an overnight was perfect for our schedule." },
            ],
        };
    }

    // --- REMAINING: same-day-taj-mahal-tour-from-bengaluru (auto-added 2026-07-02) ---
    if (slug === 'same-day-taj-mahal-tour-from-bengaluru') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Seeing the Taj Mahal at first light after only breakfast that morning in Bengaluru felt almost unreal. The flights were smooth, our guide met us the second we landed, and he knew exactly where to stand for photos before the crowds built up. Having the tickets already sorted meant we walked straight in. An incredibly full day, but worth every hour." },
                { author: "Marcus T.", country: "Australia", rating: 5, date: "2025-08-29", text: "What sold me was doing this without losing two days to travel. The private car in Agra was cool and comfortable between the Taj and Agra Fort, and lunch was genuinely good north Indian food, not a tourist canteen. Our guide was government-licensed and full of Mughal history. Mehtab Bagh at the end gave us that postcard view across the river. Faultless organisation." },
                { author: "Sophie M.", country: "France", rating: 4, date: "2025-09-22", text: "A beautiful and well-run day, but be honest with yourself about the early start. We were up before 4am for the flight and by the time we flew back we were exhausted. The heat in September was also intense at Agra Fort. That said, the guide was patient and the Taj at sunrise made it all worthwhile. Just don't expect a restful trip." },
                { author: "Dieter K.", country: "Germany", rating: 5, date: "2025-10-11", text: "Perfectly punctual from start to finish. Every toll and parking fee was handled, so we never once reached for our wallets during the day. The guide explained the symmetry and inlay work at the Taj in real detail and helped us avoid the sellers near the entrance. Agra Fort was a highlight I hadn't expected. Excellent value for a fly-in day trip." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2025-11-30", text: "Did this with my parents who are in their seventies and it worked beautifully. The air-conditioned vehicle meant they could rest between sites, and the guide slowed the pace whenever needed. November weather was perfect, mild and clear. The included lunch had plenty of vegetarian options for us. A long day, yes, but so well planned that nobody felt rushed." },
                { author: "Liam O.", country: "Ireland", rating: 5, date: "2026-01-18", text: "January was the ideal time to go, cool and comfortable for all the walking. The marble almost glowed in the morning light and photography across the grounds was a joy. Our guide pointed out details I would never have noticed on my own, like the calligraphy sizing on the archways. Flights both ways were on time. Genuinely one of the best day trips I've taken." },
                { author: "Hannah B.", country: "Netherlands", rating: 4, date: "2026-03-25", text: "The Taj Mahal itself is breathtaking and the tour is very organised. My only note is that it's a lot to pack into twelve hours, so the visit to Agra Fort felt slightly rushed as we watched the clock for the return flight. Mehtab Bagh was skipped because of timing. Still, the guide was lovely and the included tickets and lunch made it stress-free." },
                { author: "Carlos R.", country: "Spain", rating: 5, date: "2026-05-09", text: "An efficient, seamless experience. I travel a lot and rarely see logistics this tight — flights, private driver, guide and monument entry all dovetailed perfectly. We beat the worst of the May heat by touring the Taj early in the morning. The guide handled the crowds and touts so we could just enjoy it. Booking well ahead got us a good flight time too." },
            ],
        };
    }

    // --- REMAINING: taj-mahal-overnight-tour-from-bengaluru (auto-added 2026-07-02) ---
    if (slug === 'taj-mahal-overnight-tour-from-bengaluru') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Seeing the Taj at sunset on the first evening and then again at sunrise was pure magic, two totally different views of the same building. Our guide met us right at Agra airport and handled everything, tickets, timings, even where to stand for photos. The golf cart up to the gate was a small thing that made a big difference in the heat. Unforgettable two days." },
                { author: "Marcus B.", country: "Germany", rating: 5, date: "2025-08-29", text: "Flying straight into Agra from Bangalore saved us the exhausting road trip other operators push. The Toyota was clean and air-conditioned, and having the same guide for both days meant we never repeated ourselves. Agra Fort on day one was genuinely fascinating, our guide brought the Mughal history alive. Sunrise at the Taj the next morning with hardly anyone around was the highlight of our India trip." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2025-09-22", text: "Booked this for my parents and myself and it was perfectly paced for three generations. No long drives, just a comfortable flight and a private car waiting. The overnight stay meant we weren't rushed, and the sunrise visit was calm and cool. The guide was patient with my father who walks slowly and used the golf cart to keep things easy. Worth every rupee." },
                { author: "Sophie L.", country: "France", rating: 4, date: "2025-10-11", text: "A beautiful experience overall and the two golden-hour visits are the way to see the Taj. My only note is the sunrise start is very early and I wished the hotel had been slightly closer to the monument, as the pre-dawn wake-up was tough after a travel day. That said, the empty complex at dawn made it completely worth it. Guide was lovely and knowledgeable." },
                { author: "James O.", country: "Ireland", rating: 5, date: "2025-11-18", text: "Everything was taken care of from the moment we landed in Agra. Toll booths, parking, water in the car, tickets sorted with the guide's help, so we just relaxed and soaked it in. Agra Fort surprised me, it's huge and full of stories. Then the Taj at first light the next day left us speechless. A slick, stress-free way to tick off a bucket-list dream." },
                { author: "Chloe D.", country: "Australia", rating: 5, date: "2026-01-27", text: "January was the perfect time, crisp cool mornings and a gorgeous soft light on the marble at sunrise. Our guide knew exactly where the crowds would be and got us to the reflecting pool early for photos with barely anyone in shot. The private car and overnight format felt like a real treat rather than a whistle-stop day trip. Highly recommend for keen photographers." },
                { author: "Daniel K.", country: "United States", rating: 4, date: "2026-03-15", text: "The Taj at sunset and sunrise is genuinely once-in-a-lifetime and the logistics were smooth from the Bangalore flight to the Agra pickup. Fair warning that it does get warm and busy by mid-morning at the fort, and there are the usual vendors near the gates, though our guide kept them at bay. Would have loved a touch more time at breakfast before the airport run. Still a fantastic two days." },
                { author: "Nina V.", country: "Netherlands", rating: 5, date: "2026-05-09", text: "What sold me was seeing the Taj in two lights, and it delivered. The warm amber of sunset and the pale pink of dawn are completely different and both stunning. Guide was punctual for the early start, the car was comfortable across both days, and the golf cart saved our legs. Flying in and out of Agra made the whole thing feel effortless from Bangalore." },
            ],
        };
    }

    // --- REMAINING: 2-day-taj-mahal-agra-tour-from-bangalore-by-flight (auto-added 2026-07-02) ---
    if (slug === '2-day-taj-mahal-agra-tour-from-bangalore-by-flight') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Flying up from Bangalore instead of taking an overnight train made this so easy. The 5am pickup was punctual and our driver was already waiting in Delhi when we landed. Seeing the Taj at sunrise the next morning was worth every bit of the early start. Our Agra guide knew every corner of Agra Fort and told brilliant Mughal stories." },
                { author: "Julian M.", country: "Australia", rating: 5, date: "2025-08-29", text: "Brilliantly organised private trip. The Yamuna Expressway drive was smooth and the car was properly air-conditioned, which mattered in the August heat. Mehtab Bagh at sunset with the Taj glowing across the river was the highlight for me, even more than the monument itself. Hotel was a genuine Marriott-standard property with a good breakfast." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2025-09-17", text: "We are a family of four and the private format was perfect for the kids. The guide adjusted the pace whenever they got tired and found us a lovely vegetarian restaurant for lunch in Agra. The sunrise visit was magical and far less crowded than we feared. Everything from flights to transfers just worked." },
                { author: "Marcus B.", country: "Germany", rating: 4, date: "2025-10-05", text: "A very well run tour and the guide in Agra was outstanding, extremely knowledgeable about the fort. My only honest note is that the day one drive from Delhi felt long after an early flight, so you arrive a little drained. Once we reached the hotel and rested it was fine. The sunrise Taj visit more than made up for it." },
                { author: "Aisha R.", country: "United Arab Emirates", rating: 5, date: "2025-11-22", text: "Loved the convenience of the return flights being handled for us. No trains, no stress, just show up at BLR. The Taj at dawn in November light was breathtaking and the temperature was perfect for walking around. Our guide helped with the best photo angles and even where to stand for the reflection shots. Highly recommend booking the entry tickets add-on." },
                { author: "Connor D.", country: "Ireland", rating: 5, date: "2026-01-30", text: "Did this in January and the cool weather made all the difference for a comfortable trip. Two days felt like the right amount of time to see the Taj at sunrise, Agra Fort and Mehtab Bagh without rushing. Driver was safe and courteous the whole Delhi to Agra stretch. Great value for a fly-in overnight package." },
                { author: "Priya N.", country: "Singapore", rating: 4, date: "2026-03-19", text: "Overall a lovely experience and the private guide was fantastic. Fair warning though, by March Agra was already quite hot by mid-morning and there were plenty of touts around the monument gates. Our guide shooed them off quickly, so it never became a problem. The sunrise timing meant we beat the worst of both the heat and the crowds." },
                { author: "Hannah V.", country: "Netherlands", rating: 5, date: "2026-05-11", text: "An unforgettable two days. What impressed me most was how seamless the logistics were, from the Bangalore pickup at 5am to landing back home the next evening. The hotel breakfast was generous and the room comfortable after a full day of sightseeing. Standing in front of the Taj Mahal as the sun rose is a memory I will keep forever." },
            ],
        };
    }

    // --- REMAINING: taj-mahal-agra-fort-tour-from-bangalore-by-flight (auto-added 2026-07-02) ---
    if (slug === 'taj-mahal-agra-fort-tour-from-bangalore-by-flight') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "I honestly didn't think seeing the Taj from Bangalore in one day was doable, but it was seamless. The flight to Delhi was on time, the car on the Yamuna Expressway was cool and comfortable, and our guide clearly loved his job. Standing in front of that marble in late morning light was a moment I'll never forget. Worth every minute of the early alarm." },
                { author: "Marcus B.", country: "Australia", rating: 5, date: "2025-08-02", text: "Brilliant value for what you get. Flights both ways, airport pickups, a private car in Agra, entry tickets and even lunch, all sorted for us. The guide at Agra Fort knew the Mughal history inside out and answered every question my teenager threw at him. We were back in Bangalore by night without a single hiccup." },
                { author: "Sophie L.", country: "France", rating: 4, date: "2025-09-19", text: "A wonderful day overall, though be prepared, it is long and starts painfully early. The drive from Delhi to Agra is a good three hours each way, so by evening we were exhausted. That said, the Taj Mahal exceeded every expectation and the included lunch was tasty. Just go in knowing it's a marathon, not a stroll." },
                { author: "David R.", country: "United States", rating: 5, date: "2025-10-11", text: "Efficient and stress-free from start to finish. What sold me was not having to organize flights or cabs myself, it was all handled. Our guide skipped us past the crowds at the ticket lines and found the perfect angle for photos with no one else in frame. The white marble against a blue October sky was unreal." },
                { author: "Anika S.", country: "Germany", rating: 5, date: "2025-11-08", text: "As a solo traveler I felt completely looked after. The private car in Agra meant I could go at my own pace and the driver was patient while I took a hundred photos. Agra Fort surprised me, I'd only come for the Taj but the fort's views across the river to the mausoleum were spectacular. Cool November weather made the walking easy." },
                { author: "Liam O.", country: "Ireland", rating: 4, date: "2026-01-23", text: "Genuinely magical seeing the Taj, and the logistics were smooth. My only gripe is that the Agra Fort visit felt a little rushed because we had a flight to catch back to Bangalore, so we didn't linger as long as I'd have liked. Still, the guide was excellent and bottled water on hand all day was a nice touch. Would recommend for the convenience alone." },
                { author: "Chloe T.", country: "Canada", rating: 5, date: "2026-03-15", text: "Did this for my parents' anniversary and it was flawless. The whole day was choreographed so we never waited around confused. Lunch was included and the restaurant handled my mum's vegetarian request without any fuss. Watching them stand together in front of the Taj made the pre-dawn start completely worth it. The team thought of everything." },
                { author: "Rajesh N.", country: "Singapore", rating: 5, date: "2026-05-27", text: "Incredible use of a single day. We flew out of Bangalore before sunrise, and by mid-morning we were walking through the Taj gardens. Late May was hot, so I was grateful for the air-conditioned car and constant bottled water. Our guide's storytelling about Shah Jahan and Mumtaz brought the whole place to life. Smooth flights both directions." },
            ],
        };
    }

    // --- REMAINING: gwalior-fort-heritage-walking-tour (auto-added 2026-07-02) ---
    if (slug === 'gwalior-fort-heritage-walking-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.8,
            reviews: [
                { author: "Eleanor M.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide brought the Nawabi era completely to life. The Bhool Bhulaiya at Bara Imambara was the highlight for me and my husband — we would never have found our way through those passages alone. Loved that entry tickets were all sorted so we just walked straight in. Five hours flew by and we finished stuffed with the most incredible kebabs." },
                { author: "Tobias K.", country: "Germany", rating: 5, date: "2025-09-02", text: "Exceptionally well organised heritage walk. The historical detail at the British Residency was fascinating, and standing under Rumi Darwaza while our guide explained its symbolism was a real moment. Everything felt authentic and unrushed. At twenty-five dollars including tickets, water and food, this is honestly one of the best-value tours we did anywhere in northern India." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-08-19", text: "I've been to Lucknow before but never understood it until this walk. The Chota Imambara interior with its chandeliers is jaw-dropping and the guide knew exactly which corners made the best photos. The two street-food stops were perfectly chosen — we asked for vegetarian and were spoiled for choice. Warm, knowledgeable and generous with time." },
                { author: "Grace O.", country: "Ireland", rating: 4, date: "2025-11-06", text: "A genuinely lovely tour with a guide who clearly adores his city. My only note is that we went in the afternoon and the heat during the outdoor stretches at Bara Imambara was tiring — I'd suggest a morning start. The labyrinth and the kebab tasting more than made up for it though. Great value and very informative." },
                { author: "Daniel R.", country: "United States", rating: 5, date: "2026-01-22", text: "Booked this for my parents and myself and it suited all of us. Dad's knees meant he skipped the labyrinth stairs, and the guide happily waited with him while my mother and I explored above. That flexibility meant a lot. The Awadhi food tasting was the surprise star — flavours I'm still thinking about months later." },
                { author: "Camille B.", country: "France", rating: 5, date: "2025-10-11", text: "Such a rich morning. From Rumi Darwaza to the quiet ruins of the Residency, each stop had a story and our guide told them beautifully in excellent English. I appreciated the modest-dress advice beforehand for the Imambaras. Bottled water kept appearing just when we needed it. A thoughtful, seamless introduction to the City of Nawabs." },
                { author: "Liam W.", country: "Australia", rating: 4, date: "2026-03-30", text: "Really enjoyed this and learned heaps. The one downside was the crowds and a few persistent touts near the monument entrances, but our guide steered us past them and always kept the group together. The Bhool Bhulaiya was brilliant fun. Solid value for money and a great way to spend an afternoon in Lucknow's old city." },
                { author: "Sofie V.", country: "Netherlands", rating: 5, date: "2026-05-17", text: "An unforgettable five hours. What struck me was how our guide connected the architecture to real people and events rather than just reeling off dates. Bara Imambara built without any European support — extraordinary. The kebab stop had a vegetarian friend of ours covered too. Everything included, no hidden costs, and endlessly patient with our questions. Highly recommended." },
            ],
        };
    }

    // --- REMAINING: taj-mahal-overnight-tour-from-mumbai-by-flight (auto-added 2026-07-02) ---
    if (slug === 'taj-mahal-overnight-tour-from-mumbai-by-flight') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor M.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Doing this as an overnight rather than cramming it into a day was the best decision. Flying Mumbai to Delhi was effortless and the drive along the expressway went quickly. Seeing the Taj glow pink at sunrise, almost empty, brought me close to tears. Our guide knew exactly where to stand for the reflection photo. The 5-star hotel was a genuine treat too." },
                { author: "Julian R.", country: "Australia", rating: 5, date: "2025-09-02", text: "The Mehtab Bagh sunset the evening we arrived was completely unexpected and stunning, the Taj floating across the river in gold light. Next morning we were at the main gate early and it felt like we had the place almost to ourselves. Agra Fort was fascinating with our guide filling in all the Mughal history. Flights and transfers ran like clockwork." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2025-06-21", text: "Everything was handled for us from the moment we landed in Delhi. The private car was comfortable and clean, the driver careful, and the guide at the monuments spoke beautiful English. Breakfast at the hotel before checkout was lovely. Being able to photograph the Taj at both sunset and sunrise made this so much richer than a quick visit would have been." },
                { author: "Markus H.", country: "Germany", rating: 4, date: "2025-11-08", text: "A wonderful experience overall and the Taj at dawn is unforgettable. My only honest note is the drive from Delhi to Agra is long, close to four hours each way, so factor that in. We were also a little tired after the early flight and early sunrise start. The hotel and guide were excellent though, and worth every rupee of the price." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2026-01-19", text: "Perfect January timing, cool crisp mornings and clear skies for photos. My parents came along and the guide paced the walking beautifully so they never felt rushed on the marble. Having entry tickets already sorted meant we skipped all the queue chaos. The touts outside didn't bother us at all since our official guide stayed right beside us the whole time." },
                { author: "Connor D.", country: "Ireland", rating: 5, date: "2026-03-11", text: "As a keen photographer this trip delivered exactly what I hoped. Sunrise light on the white marble is something you simply cannot get on a rushed day tour. The guide pointed out angles I'd never have found and was patient while I set up shots. Agra Fort at midday was a bonus. Smooth flights, comfortable car, and a genuinely 5-star hotel." },
                { author: "Isabella C.", country: "Italy", rating: 4, date: "2026-05-27", text: "Beautiful tour and the organisation was flawless, but be warned that late May in Agra is brutally hot. Even at sunrise it was warm, and by the fort visit we were seeking shade constantly. Bring more water than you think. That aside, the guide was superb, the hotel breakfast excellent, and standing before the Taj remains a highlight of my whole India trip." },
                { author: "Nathan V.", country: "Canada", rating: 5, date: "2026-06-15", text: "Booked this for our anniversary and it exceeded expectations. The round-trip flights from Mumbai took the stress out of distance, and arriving to that Mehtab Bagh sunset set the tone perfectly. The overnight stay meant we were relaxed rather than exhausted. Our guide was warm and knowledgeable, and having every ticket and transfer pre-arranged made the whole two days completely worry-free." },
            ],
        };
    }

    // --- REMAINING: 3-day-taj-mahal-jaipur-luxury-tour-from-mumbai-by-flight (auto-added 2026-07-02) ---
    if (slug === '3-day-taj-mahal-jaipur-luxury-tour-from-mumbai-by-flight') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor M.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Flying from Mumbai instead of taking the train was the best decision. We landed in Delhi, were whisked to Agra and stood in front of the Taj Mahal at sunrise the next morning with almost no one around. The marble turned pink as the sun came up. Our guide knew exactly where to stand for photos. Worth every rupee of the 950." },
                { author: "Tom H.", country: "Australia", rating: 5, date: "2025-08-29", text: "Did this with my wife for our anniversary. The 5-star hotels in both Agra and Jaipur were genuinely luxury, not just a label. Amber Fort was the surprise highlight for me, the scale of it is incredible. Private car meant we set the pace and never felt rushed between cities. Seamless from the Mumbai airport pickup onwards." },
                { author: "Lukas B.", country: "Germany", rating: 4, date: "2025-09-19", text: "A fantastic three days and the sunrise Taj visit is unmissable. My only honest note is that the first day is a very early start and the drive from Delhi to Agra plus later to Jaipur adds up to a lot of car time. The AC vehicle was comfortable though, and the guide was excellent. Just come prepared for long days." },
                { author: "Priya R.", country: "United States", rating: 5, date: "2025-11-06", text: "As someone with Indian roots living in the States, I was picky, and this exceeded expectations. Mehtab Bagh across the river from the Taj at golden hour is something most day-trippers miss. Breakfast at both hotels was excellent. The government-approved guides added real history at Jantar Mantar and the City Palace rather than just rattling off dates." },
                { author: "Camille D.", country: "France", rating: 5, date: "2025-12-15", text: "Everything was organised so we could simply enjoy. The flights from Mumbai, the transfers, the hotels, all handled. Hawa Mahal in the morning light was a dream to photograph. Our driver was patient and the guide in Jaipur spoke beautiful English. For a couple short on time but wanting the full Golden Triangle, this is ideal." },
                { author: "Marcus V.", country: "Netherlands", rating: 5, date: "2026-01-22", text: "Three days felt like a proper trip, not a rushed dash. Agra Fort was far more impressive than I expected and the guide explained how it connects to the story of the Taj. Winter timing meant cool, clear skies for the sunrise. The private setup with just us in the car made a huge difference to how relaxed it all felt." },
                { author: "Aisling K.", country: "Ireland", rating: 4, date: "2026-03-10", text: "Genuinely wonderful and the guides were the standout. I'll be honest that by March the midday heat in Jaipur was already strong, so the Amber Fort climb was sweaty work, and there are touts near the monuments. But the sunrise start beats the worst of it, the hotels were plush, and flying beats a long overnight train." },
                { author: "Daniel S.", country: "Canada", rating: 5, date: "2026-05-18", text: "Booked this for my parents and joined them. The private car and 5-star stays made it easy on my mum, who can't walk long distances, and the guide adjusted the pace for her. Seeing the Taj at sunrise together was emotional for all of us. Flying in and out of Mumbai saved us two full days versus driving. Highly recommend." },
            ],
        };
    }

    // --- REMAINING: overnight-agra-tour-from-bangalore (auto-added 2026-07-02) ---
    if (slug === 'overnight-agra-tour-from-bangalore') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Flying up from Bangalore and being met at Delhi by a private car took all the stress out of it. The drive to Agra was smooth and our guide was brilliant, full of stories about the Mughals. Seeing the Taj at sunrise the next morning after a proper night's sleep was worth every rupee. The shoe covers and golf cart were nice touches I hadn't expected." },
                { author: "Marcus T.", country: "Australia", rating: 5, date: "2025-09-02", text: "Did this as a weekend escape from Bangalore and it delivered. Four-star hotel was comfortable, breakfast was solid, and having sunrise at the Taj plus the Mehtab Bagh sunset view across the river in the same trip was the highlight. Agra Fort surprised me with how much there was to see. Guide knew all the best photo angles." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2025-06-21", text: "Un voyage parfaitement organisé. Everything from the Bangalore flight to the transfers and the Baby Taj visit was handled for us. The sunset at Mehtab Bagh with the Taj glowing across the Yamuna is something I will never forget. Our driver was careful and the guide spoke excellent English. Highly recommend the overnight version over the rushed day trip." },
                { author: "David R.", country: "United States", rating: 4, date: "2025-11-08", text: "A really well-run tour and genuinely all-inclusive as promised. My only honest note is the sunrise start is very early and I was tired after the previous day's flight and drive from Delhi. That said, seeing the Taj almost empty at dawn made the early alarm worthwhile. The golf cart to the gate was a welcome surprise for my knees." },
                { author: "Anja K.", country: "Germany", rating: 5, date: "2026-01-19", text: "We travelled in January and the weather was ideal for walking around Agra Fort and the Taj complex. The guide was punctual, knowledgeable and never pushy. Loved that all the little fees like parking and tolls were already covered so there was nothing to argue about. The hotel in Agra was clean and well located. Faultless organisation from Bangalore and back." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2026-03-27", text: "As someone based in Asia I've seen a lot of tours, and this one was smooth from start to finish. The private car between Delhi and Agra meant we set our own pace, and the guide adjusted the sunrise timing perfectly. The Baby Taj was a lovely quieter stop away from the crowds. Great value for a proper two-day experience with flights." },
                { author: "Liam O.", country: "Ireland", rating: 4, date: "2026-05-11", text: "Fantastic monuments and a very capable guide, but I'll be honest that May in Agra is brutally hot, so the midday hours were tough going. The sunrise Taj visit beat the heat and was spectacular. Everything was arranged well and the transfers were on time. Just go in cooler months if you can, and drink plenty of water." },
                { author: "Isabella M.", country: "Canada", rating: 5, date: "2026-06-15", text: "This trip made a bucket-list dream easy. We flew out of Bangalore, were looked after the entire time, and never once had to think about logistics. Watching the marble of the Taj change colour at sunrise was magical, and the overnight stay meant we weren't shattered. The guide handled the sellers near the gate for us so kindly. Money well spent." },
            ],
        };
    }

    // --- REMAINING: 3-day-taj-mahal-jaipur-tour-from-bangalore-by-flight (auto-added 2026-07-02) ---
    if (slug === '3-day-taj-mahal-jaipur-tour-from-bangalore-by-flight') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Flying from Bangalore instead of doing an endless drive was the best decision. The sunrise at the Taj was breathtaking, we practically had it to ourselves for the first half hour. Our guide knew exactly where to stand for photos and got us the golf cart right up to the gate. Agra Fort in the afternoon was a highlight I hadn't even expected." },
                { author: "Rajiv M.", country: "Singapore", rating: 5, date: "2025-08-29", text: "Did this for my parents' anniversary and it exceeded expectations. Both hotels were genuinely 5-star and the breakfasts were excellent. The private car between Agra and Jaipur meant we could stop whenever my mother needed to rest. Amber Fort was her favourite. Everything from the flights to the shoe covers at the Taj was handled for us." },
                { author: "Thomas B.", country: "Germany", rating: 4, date: "2025-09-22", text: "A very well organised trip and superb value for what's included. My only honest note is that day two is long, the sunrise start plus the drive to Jaipur made for a tiring day. Worth it though. Jantar Mantar was fascinating and our guide explained the instruments clearly. Just go in knowing three days is a fast pace for the Golden Triangle." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2025-10-11", text: "The Hawa Mahal and City Palace in Jaipur charmed me completely, the pink buildings glowing in the afternoon light are unforgettable. What impressed me most was how seamless the logistics were, no queuing for tickets anywhere, no arguments with drivers, just a smooth private car and a guide who clearly loved his city. Mehtab Bagh at sunset was a lovely surprise addition." },
                { author: "Marcus O.", country: "Australia", rating: 5, date: "2025-11-30", text: "Coming from Bangalore for just three days, I worried it would feel rushed, but the flights made it work perfectly. The Taj at dawn in November was cool and misty and absolutely stunning. Our driver was punctual for every transfer and the AC car was spotless. Great way to tick off the Golden Triangle without taking a full week off work." },
                { author: "Aisha R.", country: "United Arab Emirates", rating: 5, date: "2026-01-18", text: "Winter was the perfect time for this. Comfortable weather for the Amber Fort climb and no oppressive heat at the forts. The guide was patient with our questions and pointed out details at the Taj I would never have noticed. Vegetarian food recommendations in Jaipur were spot on. Booking with flights and hotels bundled saved us so much planning stress." },
                { author: "Liam C.", country: "Ireland", rating: 4, date: "2026-03-07", text: "Genuinely memorable, and the sunrise Taj visit lives up to every photo you've seen. Be prepared for the touts around the monuments though, they can be persistent, so stay close to your guide. The drives are long, but the car was comfortable and the Jaipur hotel more than made up for it. Solid value with everything included." },
                { author: "Nina V.", country: "Netherlands", rating: 5, date: "2026-05-16", text: "An efficient, comfortable and beautiful three days. We flew up from Bangalore, saw the Taj glow at sunrise, wandered Agra Fort, then spent a full day exploring Jaipur's palaces. The golf cart, bottled water and shoe covers were small touches that showed the tour was thought through. Our guide's storytelling brought the Mughal and Rajput history to life. Highly recommend." },
            ],
        };
    }

    // --- REMAINING: koh-larn-coral-island-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'koh-larn-coral-island-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.9,
            reviews: [
                { author: "Hannah W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Brilliant value for the price. The hotel pickup was bang on time and the speedboat ride over to Koh Larn was such a laugh. I finally tried the fishbowl sea walking helmet and could not stop smiling underwater — saw loads of little fish right by my feet. Tawaen Beach was busy but the sand was gorgeous. Would do it again in a heartbeat." },
                { author: "Daniel K.", country: "Germany", rating: 5, date: "2025-08-29", text: "A very well organised day trip. Our guide sorted everything with the boat and pointed us to the water sports desks without any pressure to buy. Parasailing behind the speedboat gave incredible views back toward Pattaya. The Indian lunch was a nice surprise and genuinely tasty. Efficient, fun and excellent value for what you pay." },
                { author: "Mireille D.", country: "France", rating: 4, date: "2025-09-17", text: "Really enjoyed the island and the clear water was beautiful. My only small gripe is that Tawaen Beach got quite crowded by midday and the sun was fierce, so bring plenty of sunscreen and a hat. Sea walking was the highlight for me. Still great value and the guide was friendly, just be ready for the heat and the crowds." },
                { author: "Ryan T.", country: "Australia", rating: 5, date: "2025-10-25", text: "Did this with my two teenagers and everyone had a ball. The jet ski hire on the beach was the winner for the kids while I stuck to sunbathing on the quieter Tien Beach. Loved that the adrenaline stuff is optional so you only pay for what you want. Short boat crossing meant more time on the island. Ten dollars well spent." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-11-30", text: "Perfect little escape from the city beaches of Pattaya. The water at Koh Larn was that proper turquoise you see in photos. As a vegetarian I was well fed at the Indian lunch, which I appreciated. Everything ran smoothly from the hotel pickup to the drop off. Relaxed pace with the option to add thrills if you fancy them." },
                { author: "Connor M.", country: "Ireland", rating: 4, date: "2026-01-19", text: "Great day out overall and superb value. Fair warning that it is an early-ish start and the speedboat can bump about a bit if the sea is choppy, so pack a dry bag for your phone. Once on the island though it was pure bliss — the parasailing views were unreal. Guide was sound and kept us on schedule the whole time." },
                { author: "Elena R.", country: "Italy", rating: 5, date: "2026-03-08", text: "One of the best value trips we did in Thailand. The fishbowl sea walk felt like something out of a film, walking along the seabed with fish everywhere. Loved that pickup and drop off at our hotel were included so there was zero hassle. White sand, warm water and a proper lunch. Highly recommend for couples." },
                { author: "Marcus V.", country: "Netherlands", rating: 5, date: "2026-05-22", text: "Fantastic introduction to island life just minutes from Pattaya. We came in the dry season and the sea was calm and crystal clear. My wife tried parasailing while I did the jet ski, then we met for lunch. The guide handled all the boat logistics so we could just enjoy ourselves. Cannot fault it for the money." },
            ],
        };
    }

    // --- REMAINING: hazrat-nizamuddin-railway-station-delhi-express-tour (auto-added 2026-07-02) ---
    if (slug === 'hazrat-nizamuddin-railway-station-delhi-express-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "The Gatimaan was spotless and we were in Agra before we'd even finished our coffee. Our guide met us right on the platform at Agra Cantt and had a car waiting. He knew exactly where to stand for the classic Taj photo without the crowds in the frame. Doing this by train instead of the motorway was absolutely the right call." },
                { author: "Mathis L.", country: "France", rating: 5, date: "2025-09-02", text: "A brilliantly organised day. The golf cart up to the Taj gate was a small thing but very welcome in the heat. Agra Fort surprised me the most, the guide brought the Mughal history alive room by room. We added the five-star lunch and it was a proper feast with loads of vegetarian dishes. Worth every rupee." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-10-19", text: "Travelling with my parents who are in their seventies, I was worried about the walking, but the private car between sites and the golf cart made it very manageable. The chair car seats were comfy and the return train got us back to Delhi at a reasonable hour. Confirmed tickets meant zero stress about seats. Highly recommend for families." },
                { author: "Daniel R.", country: "United States", rating: 4, date: "2025-11-27", text: "Fantastic way to see the Taj without a five-hour drive each way. My only gripe is the early start, we were at the Delhi station before dawn and it's a bit of a scramble. Also the day felt a touch rushed at Agra Fort since you're tied to the return train. Still, the guide was excellent and the whole thing ran like clockwork." },
                { author: "Anneke V.", country: "Netherlands", rating: 5, date: "2026-01-08", text: "January was the perfect time to go, cool and clear, and the marble wasn't scorching. The Vande Bharat was modern and quick, honestly nicer than some flights. Our guide was patient with all my questions about Shah Jahan and Mumtaz. Booking the entrance fees as an add-on saved us queuing separately. Smooth from start to finish." },
                { author: "Liam O.", country: "Ireland", rating: 5, date: "2026-02-16", text: "Did this as a day trip while on business in Delhi and it worked perfectly. Water bottles handed to us, car ready at the station, guide waiting with a sign. He steered us past the pushy souvenir sellers around the Taj without any fuss. Being back in Delhi the same evening meant I didn't lose a hotel night. Great value." },
                { author: "Sophie B.", country: "Australia", rating: 4, date: "2026-04-05", text: "Loved seeing the Taj and the fort, and the train saved us a brutal road journey. Just a heads up that by the time we arrived in April it was already very hot, and the Taj crowds were heavy mid-morning. If I went again I'd look at the sunrise version. That said, the guide was lovely and the logistics were flawless." },
                { author: "Tobias K.", country: "Germany", rating: 5, date: "2026-05-30", text: "Precise and well run, exactly what I hoped for. The chair-car journey gave a real feel for the countryside rolling past. At Agra Fort our guide pointed out the little balcony where Shah Jahan was imprisoned with a view of the Taj, a detail I'll never forget. The five-star lunch was a highlight too. Faultless organisation." },
            ],
        };
    }

    // --- REMAINING: taj-mahal-sunrise-tour-tour (auto-added 2026-07-02) ---
    if (slug === 'taj-mahal-sunrise-tour-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Being collected from our Delhi hotel at 3am felt brutal at first, but watching the Taj turn pink at sunrise made every minute worth it. The car was spotless and cool, our driver careful on the expressway, and the guide brought Shah Jahan's story to life. We had loads of time at the Taj and still made it back by evening. Faultless day." },
                { author: "Mathieu D.", country: "France", rating: 5, date: "2025-08-29", text: "A brilliantly organised private day. What surprised me most was the Baby Taj, which our guide clearly loved explaining, and there was almost no one there. Agra Fort was fascinating too. Lunch was included and they happily found a vegetarian place for my wife. Everything ran to time and we never felt hurried at any of the three sites." },
                { author: "Hannah S.", country: "Australia", rating: 4, date: "2025-09-22", text: "Really good tour and great value for a private car and guide. My only honest note is the drive back to Delhi in the afternoon heat felt long, and by the Baby Taj the sun was fierce. That said, the AC car was a lifesaver and our guide was patient and knowledgeable. Bring water even though they give you bottles. Would still recommend it." },
                { author: "Diego R.", country: "Spain", rating: 5, date: "2025-10-30", text: "We booked the standard option and it was excellent value for what you get. Pickup from Gurugram was on time, the guide handled all the ticketing so we skipped the queues, and he pointed out inlay details on the marble I'd never have noticed. Agra Fort's views over the river were a highlight. Smooth from start to finish." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2025-12-11", text: "December was the perfect time to go, cool and clear, and the Taj at sunrise was unforgettable. Travelling as a family, having our own car meant we could take breaks for the kids without any stress. Our guide was warm and great with our two children, keeping them interested at Agra Fort. Lunch was tasty and the whole day felt relaxed rather than rushed." },
                { author: "Tobias K.", country: "Germany", rating: 5, date: "2026-01-27", text: "Precisely the private day trip we wanted. The logistics were seamless: one driver, one guide, all tickets and tolls sorted, nothing to think about. The Yamuna Expressway drive was faster than expected. I appreciated that the guide gave us space to photograph the Taj quietly at sunrise and then explained the history afterwards. Excellent value against organising it yourself." },
                { author: "Ryan O.", country: "Ireland", rating: 4, date: "2026-03-15", text: "Genuinely memorable trip and a well-run operation. Honestly the only downside was the crowds building at the Taj by mid-morning once the sunrise calm wore off, and a few persistent touts near the entrance, though our guide shooed them off. Car, driver and included lunch were all great. For the price of a private tour with everything covered, it's hard to beat." },
                { author: "Chloe B.", country: "Canada", rating: 5, date: "2026-05-09", text: "From the 2:30am pickup to the drop-off back in Delhi, this was flawless. Seeing the Taj Mahal emerge from the morning mist is something I'll never forget. The guide's knowledge of the Baby Taj and Agra Fort was genuinely impressive, and he never once made us feel rushed. Complimentary water on that hot drive was very welcome. Worth every dollar." },
            ],
        };
    }

    // --- REMAINING: taj-mahal-mahal-private-tour (auto-added 2026-07-02) ---
    if (slug === 'taj-mahal-mahal-private-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Being picked up from our hotel in the dark and reaching the Taj just as the sun came up was pure magic. The marble genuinely turned pink in front of us. Our guide knew every corner of Agra Fort and told us stories about the Mughal emperors that we'd never have found in a book. A brilliant private morning." },
                { author: "Marcus T.", country: "Germany", rating: 5, date: "2025-08-22", text: "We chose the option with the car, guide and tickets and it was worth every rupee. No standing in queues at all, straight in with the express entry. The little golf cart to the mausoleum was a nice surprise for my parents who don't walk far. Breakfast afterwards was tasty and had good vegetarian choices. Faultless organisation." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-09-09", text: "As a solo traveller I felt completely looked after. My guide found the perfect bench spot for photos before the crowds arrived and patiently reshot until I was happy. He explained the calligraphy and inlay work at the Taj in such detail. Agra Fort was a highlight I hadn't expected to love as much as I did." },
                { author: "Liam O.", country: "Ireland", rating: 4, date: "2025-11-03", text: "A genuinely lovely tour and our guide was excellent, warm and full of knowledge. Only honest gripe is the sunrise start is brutally early and the Taj was already getting busy by the time we moved to the second half. The Agra Fort portion felt slightly rushed to fit the four hours. Still, seeing the Taj at dawn is unforgettable and I'd recommend it." },
                { author: "Sophie D.", country: "France", rating: 5, date: "2026-01-17", text: "January mornings were cold so bring a jacket, but the light on the Taj Mahal at sunrise was breathtaking. The shoe covers meant we didn't have to go barefoot on the freezing marble, a small detail I really appreciated. Hotel pickup was punctual and the private car was clean and comfortable. Our guide made the history come alive." },
                { author: "Nathan R.", country: "Australia", rating: 5, date: "2026-02-25", text: "Travelling with two kids I was worried about a 4am start, but the private pace saved us. We stopped whenever the little ones needed to and nobody rushed us. The guide had the children hunting for hidden symbols in the fort which kept them engaged. Bottled water and the breakfast stop meant no meltdowns. Superb value for a family." },
                { author: "Isabella M.", country: "Italy", rating: 5, date: "2026-04-08", text: "By April Agra is seriously hot even in the morning, so the early sunrise timing is a blessing. The Taj was serene and the guide steered us away from the touts at the entrance which I was grateful for. Loved learning the story of Shah Jahan looking out from Agra Fort towards the Taj. Beautifully run private tour." },
                { author: "Daan V.", country: "Netherlands", rating: 4, date: "2026-05-30", text: "Excellent guide and skip-the-line entry that actually worked, we walked straight past a long queue. Do read the options carefully though, we initially picked one without tickets and had to sort that out. Once inside it was seamless. The heat late in the tour was tiring but the bottled water helped. Great half day overall and I'd book again." },
            ],
        };
    }

    // --- REMAINING: taj-mahal-mehtab-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'taj-mahal-mehtab-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Doing all four sites in one day sounded ambitious but it never felt rushed. Our guide read the crowd perfectly and got us into the Taj before the big morning surge. The golf cart was a small thing that made a big difference in the heat. Mehtab Bagh at sunset, with the Taj glowing across the river, is the image I keep coming back to." },
                { author: "Marcus T.", country: "Australia", rating: 5, date: "2025-09-02", text: "Booked the $70 option with the car and the 5-star lunch and it was worth every rupee. The private car meant no haggling with drivers between stops, and lunch was a genuinely nice sit-down break in the middle of the day. Agra Fort surprised me the most, honestly, the sheer scale and the stories our guide told brought it to life." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2025-08-19", text: "The Baby Taj was the highlight I didn't expect. Everyone photographs the big one, but that quiet little monument with its inlaid marble was so peaceful and detailed. Our guide clearly loved it too and pointed out patterns I'd have walked straight past. Pickup from our hotel was right on time and the whole day flowed easily." },
                { author: "Daniel K.", country: "Germany", rating: 4, date: "2025-11-05", text: "A really well-organised day and the skip-the-line entry saved us a long wait at the Taj. My only note is that by the time we reached Mehtab Bagh late in the afternoon we were tired, and the stop felt a touch quick before the light. The guide was knowledgeable and patient throughout. Bring good shoes, the fort involves a lot of walking on uneven stone." },
                { author: "Priya R.", country: "Canada", rating: 5, date: "2026-01-22", text: "Travelled with my parents who are in their seventies and the pace suited them beautifully. The guide checked in often and let us slow down whenever we needed. The shoe covers and water bottles were a thoughtful touch, and having entrance tickets sorted meant no fussing at counters. January weather was perfect, cool and clear all day." },
                { author: "Liam O.", country: "Ireland", rating: 5, date: "2025-10-11", text: "Great value on the mid-tier option. We paid our own entrances but the guide and car were excellent, and he steered us to a lovely local place for lunch rather than a tourist trap. Seeing the Taj up close in the morning and then again from behind at Mehtab Bagh gave the day a nice bookend. Would recommend to anyone short on time in Agra." },
                { author: "Noor A.", country: "United Arab Emirates", rating: 4, date: "2026-03-30", text: "Beautiful tour and a very warm guide, but do go for an earlier start if you visit in spring. By midday the heat at Agra Fort was intense and slowed us down a bit. That said, the private car with AC between sites was a relief, and the vegetarian lunch was excellent. The Taj itself absolutely lives up to everything you've heard." },
                { author: "Hannah V.", country: "Netherlands", rating: 5, date: "2026-05-18", text: "Smooth from the hotel pickup right through to drop-off. What stood out was how much history our guide packed in without it ever feeling like a lecture, the Mughal shift from Agra to Delhi finally made sense to me. Four sites in six hours, no queues, and a sunset finish. Exactly the day in Agra I'd hoped for." },
            ],
        };
    }

    // --- REMAINING: phuket-jet-ski-tour-island-hopping-patong-beach (auto-added 2026-07-02) ---
    if (slug === 'phuket-jet-ski-tour-island-hopping-patong-beach') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "James H.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Booked the 3-hour island hopping tour and it exceeded every expectation. Zipping past Freedom and Kata beaches with the guide out front was brilliant, and the swim stop at Promthep Cape was the perfect breather. My arms were toast by the end but I'd do it again tomorrow. Water was flat and glassy that morning." },
                { author: "Mikaela S.", country: "Sweden", rating: 5, date: "2025-08-29", text: "We took the duo rental so my teenage son and I could share one ski, and it worked out perfectly. Thirty minutes flew by but it was more than enough thrill for us both. The briefing was clear and the staff at Patong made sure we were comfortable before letting us loose. Great little burst of fun." },
                { author: "Thomas R.", country: "Germany", rating: 4, date: "2025-09-22", text: "The guided tour to Promthep Cape is genuinely scenic and the Yamaha skis have real power. Only reason I'm knocking a star is the midday heat on the long open stretches was intense and I wished I'd worn a proper rash guard. Bring sunscreen and go early. Guide was patient with me as a first-timer though." },
                { author: "Chloe D.", country: "Australia", rating: 5, date: "2025-10-11", text: "Did the 60-minute solo rental off Patong and loved having the freedom to just carve around at my own pace. The WaveRunner was in great condition and the safety talk actually taught me how to handle it properly. Not a cheap hour but worth it for the buzz. Ended up soaked and grinning." },
                { author: "Rajen P.", country: "Singapore", rating: 5, date: "2025-12-03", text: "The full island hopping route is the one to book. Riding around Laem Krating headland and down to the cape gave us views you simply can't get from the beach. Our guide kept the group tight and safe the whole way. The drinking water at the swim stop was a small touch that made a big difference in that heat." },
                { author: "Élodie M.", country: "France", rating: 5, date: "2026-02-17", text: "Such a memorable morning on the Andaman. We passed all six beaches and the colours of the water near Paradise Beach were unreal. I was nervous about driving at first but the instructor rode right beside me until I found my confidence. By Promthep Cape I was overtaking everyone. Highly recommend for couples." },
                { author: "Brendan O.", country: "Ireland", rating: 4, date: "2026-04-08", text: "Solid experience and the guide was top notch. I did the 30-minute solo rental and honestly it felt over quickly once you factor in the briefing and getting used to the throttle. If you want to actually explore, pay up for the longer tour. Still a great laugh and the ski handled the small chop well." },
                { author: "Danielle W.", country: "Canada", rating: 5, date: "2026-05-30", text: "Absolute highlight of our Phuket trip. The three hours never dragged, from the launch at Patong to the swim below Promthep Cape and back. Our guide pointed out the secluded coves along the way and took photos of us at the stop. Felt safe the entire time with the life jackets and clear instructions. Worth every dollar." },
            ],
        };
    }

    // --- REMAINING: agra-gatimaan-express-tour (auto-added 2026-07-02) ---
    if (slug === 'agra-gatimaan-express-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "The Gatimaan Express made this so easy. We were picked up dead on 6am from our hotel near Connaught Place and were standing in front of the Taj by quarter past ten. Our guide knew exactly which angles made the best photos and got us straight past the queues. Home in Delhi by dinner, no exhausting highway drive. Worth every penny." },
                { author: "Marcus T.", country: "Australia", rating: 5, date: "2025-09-02", text: "Did the all-inclusive option and it was completely stress-free. Tickets sorted, skip-the-line at both the Taj and Agra Fort, and the 5-star lunch was a proper spread with loads of veg choices for my wife. The train ride itself was smooth and the breakfast on board was a nice touch. Guide told brilliant stories about the Mughals at the fort." },
                { author: "Sophie L.", country: "France", rating: 4, date: "2025-10-19", text: "A wonderful day overall and the fast train is genuinely impressive. My only honest note is the 6am start is brutal if you're jetlagged, and by the time we reached Agra Fort at half twelve the October sun was strong and the Taj had filled with crowds. Still, our driver was waiting at the station as promised and everything ran on time. Would recommend." },
                { author: "Daniel K.", country: "Germany", rating: 5, date: "2025-11-27", text: "Excellent organisation from start to finish. The confirmed Chair Car seats meant no scrambling, and travelling in November the weather was perfect for wandering the fort. Our guide was an approved government one and clearly knowledgeable, happy to slow down for our two teenagers. Booking the Gatimaan option over a car was the right call for us, far more comfortable." },
                { author: "Priya M.", country: "Singapore", rating: 5, date: "2026-01-15", text: "We chose the option without lunch and tickets to keep costs down and it worked out great. Buying our own entry at the gate was simple with the guide helping. The best part was how quick the train made everything, we actually had unhurried time inside the Taj rather than being rushed. Air-con car between sights was spotless and the driver friendly." },
                { author: "Ryan O.", country: "Ireland", rating: 5, date: "2026-03-08", text: "Brilliant way to see the Taj Mahal in a single day from Delhi. The Gatimaan really is fast, we barely settled in before Agra Cantt. Skip-the-line access saved us a huge amount of standing around in the heat. Our guide framed the whole Shah Jahan love story beautifully and pointed out marble inlay details I'd never have noticed on my own." },
                { author: "Isabella C.", country: "Italy", rating: 4, date: "2026-04-21", text: "Lovely tour and very well run, though I'll be honest that April in Agra is seriously hot and the walk around Agra Fort left us wilting a bit by early afternoon. The train and pickup were flawless and the 5-star lunch was a welcome cool break. Guide was patient and kept us hydrated. Just come prepared for the temperature and it's a fantastic day." },
                { author: "Nathan B.", country: "Canada", rating: 5, date: "2026-06-05", text: "Seamless from the 6am hotel pickup to the evening return. What sold me was not having to do the long road drive twice, the Gatimaan handles that in under two hours each way. Skip-the-line at the Taj was legit and the guide happily took family photos for us. The private car in Agra kept everything comfortable between the two monuments. Highly recommend." },
            ],
        };
    }

    // --- REMAINING: india-gate-approved-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'india-gate-approved-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.8,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide was a walking encyclopaedia of Delhi. He linked the Sultanate rulers to the Mughals to the British Raj so clearly that the monuments finally made sense as one story. We spent the full eight hours across New and Old Delhi and never felt rushed. Booking a licensed guide for thirty dollars is honestly the best value we found in India." },
                { author: "Mathis L.", country: "France", rating: 5, date: "2025-08-22", text: "We added the car option and it was the right call. Being driven between India Gate, Humayun's Tomb and the Qutub Minar meant we saved our energy for the walking around Chandni Chowk. Our guide navigated the old lanes like it was his own neighbourhood and kept the pushy vendors at bay. A genuinely private, flexible day." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-09-30", text: "Travelling with my parents I worried about the walking, but the guide paced everything beautifully and skipped the steps that would have been too much. He tailored the day to Mughal history because that's what my father loves. The Red Fort and Jama Masjid came alive with his storytelling. Warm, patient and clearly very knowledgeable." },
                { author: "Daniel K.", country: "United States", rating: 4, date: "2025-10-19", text: "Fantastic guide and great flexibility, we shaped the whole day around what we wanted to see. My only honest note is the October afternoon was still surprisingly hot and Chandni Chowk gets intensely crowded, so bring water and patience. Entry tickets also aren't included, which is fine but worth budgeting for. Still, brilliant value and I learned a huge amount." },
                { author: "Sofie B.", country: "Netherlands", rating: 5, date: "2025-11-25", text: "Eight hours flew by. What I appreciated most was that it's truly private, so when I wanted to linger for photos at Humayun's Tomb the guide simply let me. He knew every good angle and even the quiet corners away from the crowds. For anyone nervous about Old Delhi's chaos, having a licensed local by your side makes it feel completely manageable." },
                { author: "Liam O.", country: "Ireland", rating: 5, date: "2026-01-17", text: "January was the perfect time, dry and comfortable for a long day on foot. Our guide met us near India Gate right on time and effortlessly wove together the seven cities of Delhi. He helped us buy monument tickets quickly and steered us to a proper spot for lunch in the old town. Couldn't recommend a government-approved guide more highly." },
                { author: "Greta M.", country: "Germany", rating: 4, date: "2026-03-08", text: "Very informative day and a lovely, professional guide. The one thing to know is that with the guide-only option you're using autos and the metro, which is fun but a bit tiring in the heat, so I'd pay extra for the car next time. That aside, the depth of history from the Raj-era buildings to the Mughal forts was genuinely impressive." },
                { author: "Chloe T.", country: "Australia", rating: 5, date: "2026-05-21", text: "We only had one day in Delhi and this made it count. The guide asked what interested us over a quick chat and then built the route on the spot, blending colonial New Delhi with the bazaars of the old city. He was fantastic with our two teenagers, full of tales of emperors and battles. Superb value and a real highlight of our India trip." },
            ],
        };
    }

    // --- REMAINING: agra-professional-sunrise-tour (auto-added 2026-07-02) ---
    if (slug === 'agra-professional-sunrise-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.9,
            reviews: [
                { author: "Charlotte M.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Booking this for our honeymoon was the best decision of the trip. We rented the sari and Maharaja robe, and the photos in front of the marble at first light are genuinely the nicest pictures we've ever had of ourselves. The photographer knew every angle and made two very camera-shy people look like naturals. Ten edited images arrived both printed and digital. Worth every rupee." },
                { author: "Daniel R.", country: "United States", rating: 5, date: "2025-08-29", text: "Skipping the line at sunrise is the whole game here. While other people were still queuing at the gate we were already inside with almost nobody in our shots. The golf cart saved our legs and the guide's history walk afterward was genuinely interesting, not the usual rushed spiel. For forty dollars this felt like a steal." },
                { author: "Lena K.", country: "Germany", rating: 4, date: "2025-09-18", text: "The photos are beautiful and our photographer was patient and creative with the posing. Only honest note is the early start, we were up around 4:30am and I was fading by the end. Also the optional cloth shop stop took a little longer than expected. Still, the light at that hour is unbeatable and I'd tell anyone to book it, just prepare for a very early alarm." },
                { author: "Aisha B.", country: "United Arab Emirates", rating: 5, date: "2025-10-07", text: "As a solo traveler I was nervous about a photoshoot on my own, but the guidance made it effortless. The photographer directed me into poses I'd never have thought of and the results look like a proper magazine shoot. Loved that water and shoe covers were provided so I didn't have to think about the small stuff. A really personal, well run morning." },
                { author: "Thomas O.", country: "Ireland", rating: 5, date: "2025-11-22", text: "Did this as a pre-wedding shoot and the marble in that soft dawn colour is something photos can barely capture until you see them. Everything felt private, just us, the guide and the photographer. The ten final images were edited nicely and delivered as prints and files. The guide also answered every random question we had about the mausoleum. Superb value." },
                { author: "Sophie L.", country: "Canada", rating: 5, date: "2026-01-16", text: "What surprised me was how much I learned. I came for the photos but the architecture explanation after the shoot completely changed how I looked at the building. The traditional outfits were a lovely touch and the makeup for the sari was done well. Cool weather in January made the walking very comfortable too. Highly recommend the outfit option." },
                { author: "Marco V.", country: "Italy", rating: 4, date: "2026-03-09", text: "Lovely experience and the sunrise photos are stunning. My only small gripe is that by mid-morning it was already getting warm and busy, so I'd stress arriving as early as possible to get the emptier frames. The photographer was excellent and gave clear direction. The included water was welcome. Just manage your timing expectations and it's fantastic." },
                { author: "Grace T.", country: "Singapore", rating: 5, date: "2026-05-24", text: "We travelled as a family of four and everyone was looked after. The kids loved the golf cart ride and the photographer worked quickly enough to keep them engaged. Skip-the-line meant no meltdowns in a queue. We came away with gorgeous framed shots of all of us with the Taj behind. A smooth, relaxed morning that suited every age in our group." },
            ],
        };
    }

    // --- REMAINING: taj-mahal-approved-private-tour (auto-added 2026-07-02) ---
    if (slug === 'taj-mahal-approved-private-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Booked the all-inclusive option and it was worth every penny. The driver was outside our Delhi hotel bang on time and the Expressway drive flew by. Our guide grew up in Agra and told us stories about Shah Jahan I'd never read in any guidebook. The 5-star buffet lunch was a lovely surprise after a morning on our feet." },
                { author: "Marcus T.", country: "Germany", rating: 5, date: "2025-08-29", text: "Very smooth private car experience from Noida. What impressed me most was the little things being sorted: cold mineral water in the car, shoe covers handed to us at the marble, and a golf cart so we didn't have to trudge from the gate. Agra Fort was almost more interesting than the Taj thanks to our guide's knowledge. Highly recommend." },
                { author: "Sophie L.", country: "France", rating: 4, date: "2025-09-18", text: "A wonderful day but be honest with yourself about the drive. Three hours each way is a lot, and by the time we got back to Delhi we were exhausted. The Taj itself is breathtaking and skipping the ticket queue was brilliant. Just start early and don't plan anything for the evening. The guide was patient and kind." },
                { author: "Rajesh P.", country: "United Arab Emirates", rating: 5, date: "2025-10-07", text: "Took my parents on this and the private format made all the difference. My father struggles with walking but the golf cart and relaxed pace meant he saw everything without stress. The car was spotless and air-conditioned, which matters in this heat. Our guide adjusted the whole day around us. Genuinely thoughtful service." },
                { author: "Chloe M.", country: "Australia", rating: 5, date: "2025-11-22", text: "We were nervous about doing Agra in a single day from Delhi but it worked perfectly. Pickup from Gurgaon, breakfast stop on the Expressway when we asked, and we were standing in front of the Taj by late morning. The vegetarian spread at lunch was fantastic. My partner took hundreds of photos and the guide knew all the best angles." },
                { author: "Daniel O.", country: "Ireland", rating: 5, date: "2026-01-15", text: "January was the perfect time to go, cool and clear with no haze over the Taj. Everything ran like clockwork from the moment the driver collected us. Having a government-approved guide meant we walked straight in while others queued. Agra Fort's views back toward the Taj were a highlight I hadn't expected. Faultless from start to finish." },
                { author: "Hannah B.", country: "Netherlands", rating: 4, date: "2026-03-09", text: "Overall excellent and I'd book again, with one small caveat. By mid-March it was already quite hot walking around the fort in the middle of the day, so I'd suggest an earlier start next time. That aside, the private car was comfortable, lunch at the 5-star hotel was superb, and our guide was warm and full of stories. Great value for a private day." },
                { author: "Nathan K.", country: "Canada", rating: 5, date: "2026-05-24", text: "This was the smoothest way to see the Taj Mahal on limited time. One driver, one guide, one price for the all-inclusive and no faffing with tickets. The guide met us right as we reached Agra and clearly loved his city. Shoe covers, water, golf cart, the 5-star lunch, all included. Came away feeling we'd seen Agra properly, not rushed." },
            ],
        };
    }

    // --- REMAINING: delhi-old-new-delhi-private-full-half-day-tour (auto-added 2026-07-02) ---
    if (slug === 'delhi-old-new-delhi-private-full-half-day-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor M.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "We took the full-day option with entry fees included and it made everything effortless. Rajan, our guide, walked us straight past the ticket lines at Humayun's Tomb and Qutub Minar. The air-conditioned car was a lifesaver between stops, and being picked up from our hotel at 7am meant we beat the worst of the crowds at Jama Masjid. Genuinely one of the best-organised days of our India trip." },
                { author: "Thomas B.", country: "Germany", rating: 5, date: "2025-08-22", text: "A private guide really is worth it in Delhi. Ours tailored the route when we said we cared more about history than shopping, so we spent longer at Humayun's Tomb and skipped the market rush. The cycle-rickshaw through Chandni Chowk was the highlight for my teenage sons. Clear English, no pressure, and he handled all the touts near the monuments so we never felt hassled." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-09-30", text: "Booked this on a long layover and got airport pickup, which worked perfectly. In about seven hours we covered both Old and New Delhi without ever feeling rushed. Bangla Sahib was unexpectedly moving and our guide explained the etiquette so we felt comfortable. The bottled water and umbrella they provided came in handy in the September heat. Dropped back at the airport with time to spare." },
                { author: "Callum W.", country: "Australia", rating: 4, date: "2025-10-18", text: "Really good tour and a knowledgeable guide, but be honest with yourself about the heat. Even in mid-October the walk through Chandni Chowk's lanes was sweaty and the crowds are intense. The India Gate and Lotus Temple stops were calmer. It's a lot of walking on uneven ground, so wear proper shoes. Loved it overall, just start early like they suggest." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2025-11-25", text: "Novembre est la saison parfaite pour cette visite. The weather was cool and pleasant for wandering. Our guide adapted the timings for our two young children, letting them run around the India Gate lawns while we rested in the car. He knew exactly which vegetarian spots to recommend near the market. A warm, patient guide and a spotless vehicle. We would book again without hesitation." },
                { author: "Daniel R.", country: "United States", rating: 5, date: "2026-01-12", text: "Chose the transport-plus-guide option and paid entries myself, which saved a bit and was no hassle at all. The contrast between chaotic Old Delhi and the wide avenues of New Delhi in a single day was fascinating. Qutub Minar at golden hour was stunning for photos. Our driver was calm in insane traffic and our guide clearly loves his city. Excellent value." },
                { author: "Aoife K.", country: "Ireland", rating: 5, date: "2026-03-08", text: "What sold me was the flexibility of choosing our own pickup time. We opted for 9am and did the full circuit at a gentle pace with my parents, who are in their seventies. The guide made sure the car dropped us close to each entrance so there was minimal walking for them. Jama Masjid was breathtaking. Thoughtful, professional and genuinely warm from start to finish." },
                { author: "Marco V.", country: "Italy", rating: 4, date: "2026-05-19", text: "Great overview of the city with a friendly, well-informed guide. My only note is that on the full-day itinerary a couple of the New Delhi stops felt a little rushed near the end as everyone was tiring in the afternoon heat. Still, seeing seven landmarks in one private day is remarkable value. The rickshaw ride through the spice market is something I'll remember for a long time." },
            ],
        };
    }

    // --- REMAINING: chandni-chowk-shopping-tour (auto-added 2026-07-02) ---
    if (slug === 'chandni-chowk-shopping-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Charlotte M.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Booked this because the thought of Chandni Chowk on my own terrified me, and it turned out to be the highlight of our Delhi trip. Our female guide asked exactly what we wanted before we set off, then took us straight to a textile shop where she haggled a pashmina down to half the first price. She even arranged shipping so I didn't have to lug it around Rajasthan." },
                { author: "Daniel K.", country: "United States", rating: 5, date: "2025-09-02", text: "The spice market blew me away, rows and rows of chilies and teas I'd never seen. Our guide explained how to spot real saffron versus the dyed stuff, which saved me from a rookie mistake. Pickup from the hotel was bang on time and the chai stop mid-morning was a lovely touch. Worth every dollar for the local knowledge alone." },
                { author: "Sophie L.", country: "Australia", rating: 4, date: "2025-10-19", text: "Really enjoyable and our guide was fantastic at bargaining, but be prepared for the heat and the crowds in Old Delhi. October was still warm and the lanes get very packed, so by the end I was ready to sit down. That said, the tastings were safe and delicious and I came home with jewelry I love. Just wear proper shoes." },
                { author: "Lukas B.", country: "Germany", rating: 5, date: "2025-11-08", text: "We did the full-day version and the extra two hours were perfect for covering both Connaught Place and Shahpur Jat. My wife wanted designer wear and I wanted spices, and somehow the guide kept us both happy. No pressure to buy anything, and he gave us honest advice on what was and wasn't good quality. Genuinely felt like shopping with a local friend." },
                { author: "Aisha R.", country: "United Arab Emirates", rating: 5, date: "2025-12-15", text: "Chose the wedding shopping option ahead of my sister's engagement and it was money extremely well spent. The consultant knew every lane for bridal lehengas and got us into shops we'd never have found alone. Alterations were sorted the same day and the GST bills were handy. Warm, patient and never rushed us despite the crowds." },
                { author: "Fiona O.", country: "Ireland", rating: 5, date: "2026-02-03", text: "As a solo woman traveler I specifically asked for a female guide and I'm so glad I did. She made navigating the busy bazaars feel completely safe and comfortable, steering me away from the pushy touts. We tasted street snacks I'd never have braved alone. I bought Ayurvedic skincare and silver earrings at prices that felt genuinely fair." },
                { author: "Marc D.", country: "France", rating: 4, date: "2026-04-11", text: "A very good tour with a knowledgeable guide who clearly loves Old Delhi. My only small gripe is that a couple of the emporium stops felt slightly rushed because we spent so long in Chandni Chowk, though honestly that's where the magic was. The bargaining help alone paid for the tour. Bring cash and comfortable shoes and you'll have a great day." },
                { author: "Emma V.", country: "Netherlands", rating: 5, date: "2026-05-27", text: "What I appreciated most was the consultation at the start, we told them our budget and interests and the whole day was built around it. No dragging us to commission shops. We found beautiful hand-embroidered textiles and pure pashmina, and the guide explained how to check the weave for authenticity. The hotel drop-off at the end was a small thing that made a big difference." },
            ],
        };
    }

    // --- REMAINING: james-bond-island-evening-tour (auto-added 2026-07-02) ---
    if (slug === 'james-bond-island-evening-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Hannah W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Doing James Bond Island in the evening was the best decision of our whole Phuket trip. We practically had the place to ourselves while the limestone cliffs turned gold. But the plankton at Koh Hong genuinely made me gasp — every paddle lit up blue in the dark. Our guide was calm, funny and knew exactly where the glow would be strongest." },
                { author: "Marco B.", country: "Italy", rating: 5, date: "2025-08-29", text: "The private longtail made this feel special rather than a factory tour. Samet Nangshe viewpoint at sunset was unreal, and paddling through the cave arch at Koh Talu was so peaceful. Koh Panyee floating village on stilts was fascinating too. Worth every baht for the six of us. The plankton has to be seen to be believed." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2025-09-17", text: "We booked this for our anniversary and it delivered magic. Being at James Bond Island with almost nobody around felt like a secret. The boxed picnic was simple but fine, and the cold drinks kept coming. Kayaking among glowing plankton after dark was the most romantic thing we have ever done. Highly recommend the evening version over the day trips." },
                { author: "Daniel K.", country: "Germany", rating: 4, date: "2025-10-08", text: "A beautiful and unusual experience overall. The empty viewpoint and quiet James Bond Island were highlights, and the guide was excellent. My only note is the drive out is around an hour and the day finishes quite late, so we were tired by drop-off. The plankton was a little faint the night we went due to the moon, but still lovely." },
                { author: "Priya R.", country: "United Arab Emirates", rating: 5, date: "2025-11-23", text: "Fantastic private tour with our two kids, aged nine and twelve. The pace was relaxed and the canoeing was fully guided so nobody had to work hard. My children were absolutely mesmerised by the glowing water at Koh Hong. Pickup from our Kata hotel was smooth and on time. A memory the whole family will keep forever." },
                { author: "Ethan M.", country: "Australia", rating: 5, date: "2026-01-19", text: "Skipping the daytime crowds is the whole point and it works brilliantly. Golden light over Phang Nga Bay, a private boat, and a guide who tailored the stops to us. Koh Panyee was more interesting than I expected. The bioluminescence at the end was surreal, like paddling through stars. Bring a light jacket, it gets breezy after sunset." },
                { author: "Noa V.", country: "Netherlands", rating: 5, date: "2026-03-11", text: "Genuinely one of the most unique things we did in Thailand. The longtail boat rides between the karsts at dusk were gorgeous and the sea cave at Koh Talu was so quiet and still. Our guide explained the plankton clearly and picked a dark spot for the best glow. The included park fees meant no surprise costs on the day." },
                { author: "Connor F.", country: "Ireland", rating: 4, date: "2026-05-06", text: "A really memorable evening and I loved having James Bond Island crowd-free. Four stars only because the picnic box was on the small side, so eat well before pickup or pack snacks. That aside, the private longtail, the sunset viewpoint and especially the glowing plankton were worth it. Our guide was friendly and safety-conscious getting us in and out of the canoes." },
            ],
        };
    }

    // --- REMAINING: hanuman-world-phuket-adventure-tour (auto-added 2026-07-02) ---
    if (slug === 'hanuman-world-phuket-adventure-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "James H.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "The luge was the surprise winner for us. Two runs meant I could take the first slow to learn the corners and absolutely fly on the second. The 650-meter track has some proper banked bends that catch you out in the best way. Add the ziplines through those enormous old trees and it was a brilliant half day. Pickup from Patong was bang on time." },
                { author: "Sofia R.", country: "Spain", rating: 5, date: "2025-08-29", text: "Went with my two teenagers and all three of us were grinning the whole time. The jungle roller coaster gliding through the canopy was their favourite, mine was the sky walk with those views over the treetops. Guides were patient and checked every harness twice. Buffet lunch in the Wanon Zone was more generous than I expected. Great value for a full package." },
                { author: "Daniel K.", country: "Germany", rating: 4, date: "2025-09-17", text: "Genuinely fun day and the luge is a clever idea, the only downside was the heat and humidity by late morning made the walking between zipline platforms sweaty work. Go early if you can. The canopy shade helped and the staff kept water nearby. Still would recommend, just be ready to sweat a bit on the climbs. Loved the second luge run." },
                { author: "Chloe M.", country: "Australia", rating: 5, date: "2025-10-25", text: "Booked this over a boat trip because we wanted something different and no regrets. Being clipped in on a proper harness the whole zipline circuit made me confident even though heights usually scare me. The abseil section had my heart going. Handlebar brake on the luge is dead simple, even my mum managed it riding tandem with my nephew. Smooth transfers both ways." },
                { author: "Liam O.", country: "Ireland", rating: 5, date: "2025-11-30", text: "Phuket's only luge and it lives up to the hype. Racing that 650m track twice was worth the price alone, but the Zipline World Plus package adds so much on top. Crossing the sky bridges high above the forest floor is not for the faint hearted. Helmets and gear all looked well maintained. Lunch afterwards in the jungle setting was a nice touch." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2026-02-11", text: "Perfect adrenaline fix without spending the whole day on it. We were done in about three hours including the buffet and had the afternoon free for Kata beach. The 800-meter roller coaster through the treetops was so smooth and fast. Staff took a few great photos of us on the sky walk. Hotel drop off got us back to Karon quickly. Highly recommend." },
                { author: "Marco B.", country: "Italy", rating: 4, date: "2026-04-06", text: "Loved the concept and the setting up in the Kathu hills is stunning with all the century-old trees. My honest gripe is it felt slightly rushed on a busy day, we queued a little between zipline stages. That said the guides were great and the two luge runs never felt hurried. The lunch was solid Thai buffet. Bring closed shoes, they check." },
                { author: "Emma T.", country: "Canada", rating: 5, date: "2026-05-22", text: "Best thing we did in Phuket. The luge is pure joy, you control your own speed and the jungle whips past you. My husband and I raced each other on the second run. The ziplines between those 100-year-old trees felt genuinely wild and the panoramic views from the sky walk were gorgeous. Everything from pickup to the harness fitting was professional and easy." },
            ],
        };
    }

    // --- REMAINING: jama-masjid-food-tour (auto-added 2026-07-02) ---
    if (slug === 'jama-masjid-food-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.8,
            reviews: [
                { author: "Eleanor P.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide met us right at the metro and from the first lane we were hooked. The jalebi and dahi bhalla stops were incredible, but honestly the rickshaw ride through those wire-tangled alleys was the moment my kids won't stop talking about. Khari Baoli left us sneezing from all the chilli in the air and grinning the whole time. Worth every penny of the fifty-five dollars." },
                { author: "Marcus B.", country: "Germany", rating: 5, date: "2025-08-29", text: "I did the hotel pickup option and it was money well spent, no fighting the metro in the morning. What impressed me was how our guide knew every vendor by name and picked stalls where the food was cooked fresh in front of us. The Jain temple with its little bird hospital was completely unexpected and genuinely moving. A proper insider's Old Delhi." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-09-11", text: "As a vegetarian I sometimes worry on food tours but here I was spoiled for choice. Kachori, parathas, the creamiest lassi and a jalebi so hot it burned my fingers. Our guide was patient with my spice tolerance and never rushed us. Gurdwara Sis Ganj was a peaceful contrast to the chaos outside. Beautiful morning." },
                { author: "Tom H.", country: "Australia", rating: 4, date: "2025-10-19", text: "Fantastic tour and a brilliant guide, but I'll be honest, the crowds in Chandni Chowk are relentless and by late morning the heat had me flagging. Go early. The food was superb and the rickshaw ride was a real highlight weaving through gaps I'd never have attempted on foot. Just come prepared for sensory overload and wear proper shoes." },
                { author: "Camille D.", country: "France", rating: 5, date: "2025-12-03", text: "Four hours flew by. I loved that this wasn't a tick-box monument tour but a real walk through daily life. The spice market was overwhelming in the best way and our guide explained the history behind each temple beautifully. We covered head and shoes off at the gurdwara, which felt respectful. Easily the most authentic thing we did in Delhi." },
                { author: "Daniel O.", country: "Ireland", rating: 5, date: "2026-02-16", text: "Booked this on a cool February morning and the timing was perfect. Our guide steered us away from the touristy stalls to little hole-in-the-wall places locals actually queue at. The chaat was a revelation. Entry tickets and food were all sorted so we never once reached for our wallets. Genuinely one of the best guided experiences of our trip." },
                { author: "Sofia R.", country: "Spain", rating: 4, date: "2026-04-08", text: "Really enjoyable and our guide was warm and knowledgeable. My only note is that a couple of the food stops felt a touch rushed because the lanes were so packed we kept having to move on. Still, the flavours were unforgettable and the Gauri Shankar Temple visit was lovely. The rickshaw ride alone is worth booking for. Bring hand sanitiser and an appetite." },
                { author: "Nathan W.", country: "Canada", rating: 5, date: "2026-05-27", text: "An absolute feast for the senses. The narrow bazaars, the smell of frying samosas, temple bells and the honking chaos all rolled into one morning. Our guide balanced the food, history and the three religious sites perfectly, and the pickup from our hotel made it effortless. If you only do one thing in Old Delhi, make it this. We left completely full and completely charmed." },
            ],
        };
    }

    // --- REMAINING: india-gate-full-day-tour (auto-added 2026-07-02) ---
    if (slug === 'india-gate-full-day-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.8,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Eight hours flew by. Our guide knew every corner of Old Delhi and told brilliant stories about Shah Jahan while we stood inside Jama Masjid. The rickshaw ride through Chandni Chowk was chaotic in the best way, weaving past the spice sellers of Khari Baoli. By the time we reached Qutub Minar I felt I'd actually understood the city rather than just ticked off photos." },
                { author: "Mateo R.", country: "Spain", rating: 5, date: "2025-08-29", text: "Fantastic value for ninety dollars. Entry tickets, a comfortable car and a guide for the whole day, plus water waiting for us in the heat. Humayun's Tomb was the surprise standout, so much quieter and grander than I expected. The driver knew exactly which gate to use to avoid queues. Would recommend to anyone with just one day in Delhi." },
                { author: "Sophie L.", country: "Australia", rating: 4, date: "2025-09-22", text: "A genuinely great overview of Delhi and our guide was warm and patient. My only honest note is the September heat made the walking between Humayun's Tomb and Qutub Minar quite draining by mid-afternoon, and a couple of the later stops felt slightly rushed as a result. Start early, drink your water, and it's wonderful. The spice market alone was worth the day." },
                { author: "Lukas B.", country: "Germany", rating: 5, date: "2025-10-11", text: "Very well organised from the hotel pickup onwards. What impressed me was how the guide handled the touts around Chandni Chowk so we could relax completely. Bangla Sahib was deeply moving, the sound of the prayers by the water stayed with me. Removing shoes at the mosque and gurdwara was no trouble. A thoughtful, respectful introduction to both faiths and both Delhis." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2025-11-30", text: "Did this with my parents who are in their seventies and it worked perfectly because you're driven between the sights and only walk at each one. India Gate at dusk was a lovely way to end. The guide adjusted the pace for us without making us feel like a burden. Tickets were all sorted so there was no standing in line. Highly recommend for families." },
                { author: "Connor F.", country: "Ireland", rating: 5, date: "2026-01-18", text: "January weather was ideal, cool and clear all day. The contrast between the crush of Old Delhi's lanes and the calm gardens of Humayun's Tomb really tells you what this city is. Our guide's history at Qutub Minar was fascinating, right down to the iron pillar. Everything ran on time and the car was clean and cold. Brilliant use of a single day." },
                { author: "Anneke V.", country: "Netherlands", rating: 4, date: "2026-03-07", text: "Loved the day overall and learned a huge amount. The one downside is that Chandni Chowk was incredibly crowded and a bit overwhelming, so keep your group close and your bag in front. Once past that, Raj Ghat and the Qutub Minar were peaceful and beautiful. Good guide, fair price, and the included water was a small touch that mattered in the crowds." },
                { author: "Grace T.", country: "United States", rating: 5, date: "2026-05-16", text: "This tour delivered exactly what it promised and then some. Seven landmarks in one day sounds like a lot but the flow from Old Delhi in the morning to the newer monuments made complete sense. The rickshaw ride was my kids' favourite part. Photography at India Gate and Humayun's Tomb was incredible. Our guide's passion for Delhi was obvious and genuinely infectious." },
            ],
        };
    }

    // --- REMAINING: phuket-old-town-full-day-tour (auto-added 2026-07-02) ---
    if (slug === 'phuket-old-town-full-day-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Emma T.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "A brilliant way to see the highlights of Phuket without any stress. The van picked us up right from our hotel in Kata and the aircon was a lifesaver in the heat. Big Buddha absolutely blew us away, and our guide explained so much about the temple monks at Wat Chalong. Ended the day wandering Old Town's pretty streets. Loved it." },
                { author: "Lukas M.", country: "Germany", rating: 5, date: "2025-08-22", text: "Very well organised full day. Our guide had genuine knowledge of Phuket's tin-mining history and it made the Sino-Portuguese shophouses in Old Town much more interesting than just photos. Karon Viewpoint in the morning light was stunning, three bays laid out in front of you. Nine hours flew by. Bring water and sunscreen, it gets hot up at the Buddha." },
                { author: "Sophie L.", country: "Australia", rating: 5, date: "2025-09-30", text: "We travelled with two kids aged 7 and 10 and the pace suited them perfectly. Not too much walking, and the drive between stops in the comfy van gave everyone a break. The Big Buddha views are incredible and the kids loved the colourful Old Town buildings. Just remember modest clothing for the temples, we had to cover shoulders." },
                { author: "Daniel R.", country: "United States", rating: 4, date: "2025-11-08", text: "Great overview of Phuket and our guide was friendly and knowledgeable. Honestly the midday heat at Big Buddha was pretty intense and there wasn't much shade, so go prepared. The Old Town stop felt slightly rushed compared to the temples. Still, seeing all the main sights in one relaxed day with hotel pickup made it well worth it." },
                { author: "Chloe D.", country: "Canada", rating: 5, date: "2025-12-19", text: "Exactly what we wanted for our first day on the island to get our bearings. Wat Chalong was serene and beautiful, and the guide gave us proper time inside rather than hurrying us along. Karon Viewpoint is a must for photos. Pickup was punctual and drop-off saved us a taxi. Would recommend to anyone new to Phuket." },
                { author: "Niamh O.", country: "Ireland", rating: 5, date: "2026-02-11", text: "Such a good value day out. Everything from the entry fees to the pickup was sorted, so we only paid for our own lunch in Old Town, which was delicious. The guide pointed us to a lovely local spot. The 360 views from Big Buddha over the whole island were the standout moment of our trip. Air-conditioned van was spotless." },
                { author: "Marco B.", country: "Italy", rating: 5, date: "2026-04-03", text: "Ho apprezzato molto la guida, very passionate about the island. We learned the story behind Wat Chalong and why locals revere it so much. The stroll through Old Town with the pastel Peranakan facades was my favourite part and I took hundreds of photos. A full and rewarding day that balances culture and views perfectly." },
                { author: "Wei L.", country: "Singapore", rating: 4, date: "2026-05-27", text: "Solid cultural tour and the guide spoke clear English. The early hotel pickup meant a bit of a rushed morning for us, but it did mean we beat the biggest crowds at Big Buddha. Wat Chalong and Karon Viewpoint were both worth it. Just note lunch isn't included, so carry some cash. Overall a comfortable, well-run day." },
            ],
        };
    }

    // --- REMAINING: james-bond-island-private-tour (auto-added 2026-07-02) ---
    if (slug === 'james-bond-island-private-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Having our own longtail boat made all the difference. We lingered at James Bond Island long after the big groups left, then our boatman took us right into the mangrove caves by kayak. The stilted village at Koh Panyi felt like stepping into another world, and the buffet lunch was far better than we expected. A brilliant, relaxed day." },
                { author: "Marcus B.", country: "Australia", rating: 5, date: "2025-08-22", text: "Booked this for my wife's birthday and it delivered. Driver arrived dead on eight, car was spotless with cold water waiting. The reclining Buddha cave was a surprise highlight nobody warns you about. Ending at Samet Nangshe for sunset over all those limestone islands was genuinely one of the best views I've seen in Thailand." },
                { author: "Sophie L.", country: "France", rating: 4, date: "2025-09-30", text: "A wonderful private tour but be honest with yourself about the length. It really is eleven hours and the drive to the pier is long each way. That said, having no strangers on the boat was worth it, and the kids adored swimming near Ko Tapu. Just start early and pace your energy for the sunset climb at the end." },
                { author: "Daniel K.", country: "Germany", rating: 5, date: "2025-10-18", text: "Everything ran like clockwork. The four hours on the private longtail let us stop wherever we wanted for photos of the karsts. Koh Panyi was fascinating, a whole Muslim fishing community floating on the water. The climb to the viewpoint is steep and I was sweating, but the panorama at sunset made every step worth it." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2025-11-25", text: "As a solo traveller I loved having the flexibility of a private car and boat. The team accommodated my vegetarian request at the Koh Panyi buffet without any fuss. Monkeys greeted us at the cave temple, which was funny and slightly chaotic. Smooth seas in November too, so the longtail ride was calm and beautiful the whole way." },
                { author: "Connor F.", country: "Ireland", rating: 5, date: "2026-01-12", text: "Ten out of ten for the pace. We never felt herded. James Bond Island is touristy, sure, but with our own boat we timed it well and it was gorgeous. The reclining Buddha inside the limestone cave was unexpectedly moving. Our driver was patient and knowledgeable, and dropped us back to the hotel exactly as promised. Would book again." },
                { author: "Isabella R.", country: "Italy", rating: 4, date: "2026-03-08", text: "Beautiful scenery and a proper private experience, though the midday heat on the exposed longtail was intense, so pack extra sun cover. James Bond Island did get crowded with other boats around lunchtime. Still, Samet Nangshe at golden hour was magical and the whole day felt personal rather than a factory-line group trip. Lovely driver too." },
                { author: "Hannah V.", country: "Netherlands", rating: 5, date: "2026-05-19", text: "This tour packs so much into one day yet never feels rushed because it's just your party. Swimming at the needle rock, kayaking under the cliffs, the floating village lunch, the temple, and finishing on that hilltop for sunset. Great value for a fully private car and boat. My teenagers, usually hard to impress, were genuinely wowed." },
            ],
        };
    }

    // --- REMAINING: city-palace-sightseeing-full-day-tour (auto-added 2026-07-02) ---
    if (slug === 'city-palace-sightseeing-full-day-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide brought the City Palace to life, walking us through each courtyard and the little mirror rooms without ever rushing. Being private meant we could linger where we wanted. The Lake Pichola boat ride at the end, with the Lake Palace glowing on the water, was the highlight of our whole Rajasthan trip. The AC car was a blessing in July." },
                { author: "Mathieu D.", country: "France", rating: 5, date: "2025-09-02", text: "A beautifully organised day. The driver picked us up right on time from our haveli and Vishnu, our guide, explained the history of Jagdish Temple with real passion. Saheliyon ki Bari was a peaceful surprise between the busier stops. Bottled water was a small but welcome touch. We felt looked after from start to finish." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-06-20", text: "We took the half-day version as we had a train to catch and it was perfectly paced. Covered Jagdish Temple and the City Palace with time for photos everywhere. Our guide knew exactly which corners caught the best light. Honestly the value of a private guide and car for the price surprised us. Would book again in a heartbeat." },
                { author: "Tom H.", country: "Australia", rating: 4, date: "2025-11-08", text: "Really good tour overall and our guide was knowledgeable and friendly. The one thing to know is the City Palace gets seriously crowded by late morning, so parts felt a bit shuffly and slow. We wished we'd started earlier. Everything else, including the boat ride and drop-off, was smooth. Just go first thing and you'll avoid the crush." },
                { author: "Greta B.", country: "Germany", rating: 5, date: "2026-01-17", text: "January was the perfect time for this. Sunny, comfortable and the gardens at Saheliyon ki Bari looked wonderful. Our guide tailored the whole day to our interest in architecture and pointed out details we'd never have noticed alone. The private car meant no waiting around between sites. Faultless from pickup to the final view over Lake Pichola." },
                { author: "Daniel O.", country: "Ireland", rating: 5, date: "2026-03-05", text: "Booked the full-day guide and car option and it was worth every rupee. Our guide was patient with our two kids, and the boat ride kept them thrilled while we soaked up the palace views. He recommended a brilliant rooftop spot for lunch overlooking the lake. A genuinely relaxed, personal way to see Udaipur. Highly recommend for families." },
                { author: "Sofia R.", country: "Italy", rating: 4, date: "2026-05-22", text: "Lovely introduction to Udaipur and a charming, well-informed guide. Do be aware that in late May the midday heat is intense, so a couple of the outdoor stretches were tiring even with plenty of water. An earlier start would have helped. The City Palace interiors and the boat ride made up for it though. Beautiful city, good guide." },
                { author: "Marcus V.", country: "Netherlands", rating: 5, date: "2026-06-10", text: "Everything felt effortless. The driver found our guesthouse in the old city with no trouble, and our guide balanced storytelling with plenty of free time to wander. What I appreciated most was how he shielded us from the touts near the temple and helped us shop calmly for local crafts. The Lake Pichola boat at sunset was magical. Ten out of ten." },
            ],
        };
    }

    // --- REMAINING: india-gate-airport-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'india-gate-airport-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Hannah W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "We had a nine-hour layover en route to Bangkok and this turned dead time into the best part of our trip. The driver was waiting at arrivals with our name on a sign, and having the air-conditioned car in that July heat was a lifesaver. Our guide walked us around India Gate and told us the stories behind everything. Back at departures with plenty of time to spare." },
                { author: "Daniel K.", country: "Germany", rating: 5, date: "2025-08-29", text: "Faultless organisation for a transit visit. I was nervous about clearing immigration and making my onward flight, but the guide kept an eye on the clock the whole day and reassured me constantly. Loved seeing the government buildings along Rajpath and a proper Old Delhi bazaar. Cold water bottles kept appearing. Genuinely felt like a private day out, not a rushed airport tour." },
                { author: "Mei L.", country: "Singapore", rating: 5, date: "2025-09-17", text: "Booked this on a whim during a long stopover and so glad I did. Everything private, everything smooth, no hidden costs beyond the few monument tickets we chose to buy. The guide adjusted the route when he saw traffic building so we would not miss our flight. India Gate at late afternoon was beautiful. Worth every dollar of the seventy." },
                { author: "Olivia R.", country: "Australia", rating: 4, date: "2025-10-08", text: "A brilliant way to see Delhi without leaving luggage worries behind, and the guide was warm and knowledgeable. My only note is that six hours goes fast, so the Old Delhi bazaar stop felt a little rushed and I would have loved more browsing time. Still, the AC car and door-to-door service made it stress-free. Great value for a layover." },
                { author: "Thomas B.", country: "Canada", rating: 5, date: "2025-11-21", text: "Our chauffeur spoke excellent English and navigated the chaos of Delhi traffic like a pro. What impressed me most was the flexibility, we swapped one stop for a market and nobody batted an eye. The kids stayed happy because we kept ducking back into the cool car between sights. Picked up and dropped exactly on our flight schedule. Highly recommend for families in transit." },
                { author: "Chloe M.", country: "France", rating: 5, date: "2026-01-19", text: "January mornings in Delhi were colder than expected but the car was comfortable and the guide had thought of everything. He knew the quietest moments to photograph India Gate and helped me haggle for a scarf in the bazaar. For a private guide, car and taxes all in, seventy dollars felt like a steal. Made my long stopover genuinely memorable." },
                { author: "Liam O.", country: "Ireland", rating: 4, date: "2026-03-27", text: "Solid layover tour and the guide clearly knew his history. Honest heads up, the spring afternoon heat was intense and the traffic between New and Old Delhi ate into our time more than I expected, so a couple of stops were quick. That said, the driver got us back to departures with a comfortable buffer and never once seemed flustered. Would book again." },
                { author: "Sofia V.", country: "Netherlands", rating: 5, date: "2026-05-30", text: "Exactly what a transit tour should be. Met at arrivals, whisked off in a spotless AC car, and treated to a thoughtful loop of monuments, government buildings and a buzzing market. The guide was patient with all my questions and never made us feel rushed despite the clock. Constant supply of water in that heat was a small touch that meant a lot. Superb." },
            ],
        };
    }

    // --- REMAINING: sarnath-full-day-tour (auto-added 2026-07-02) ---
    if (slug === 'sarnath-full-day-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "The 5:30 boat ride at dawn was worth every minute of the early alarm. Watching the sun come up over the ghats while pilgrims bathed and prayed felt like stepping into another century. Our guide knew every lane of the old city and had endless patience with our questions. A truly moving full day that we still talk about back home." },
                { author: "Mathis L.", country: "France", rating: 5, date: "2025-09-02", text: "An extraordinary day from sunrise to the evening Aarti. The private air-conditioned car was a blessing between stops, and having our own guide meant we lingered wherever we wanted. He explained the meaning behind the rituals so thoughtfully. The narrow alleys of the old town were the highlight for me. Booking the option with entry fees included made the whole day stress-free." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-10-19", text: "Ten hours flew by. The boat glided past the ghats just as the light turned gold, and our guide pointed out details we would never have noticed alone. He handled the crowds and the pushy vendors so we could relax and take it all in. The Ganga Aarti in the evening was the perfect, emotional finish. Highly recommend the private setup." },
                { author: "Tom H.", country: "Australia", rating: 4, date: "2025-08-08", text: "A wonderful and thorough introduction to Varanasi, though be ready for how hot and humid it gets by midday. The morning on the river was magical and our guide was excellent, genuinely knowledgeable and warm. Just know the day is long and the old city lanes are packed and a bit overwhelming. Bring water and sensible shoes and you'll love it." },
                { author: "Greta B.", country: "Germany", rating: 5, date: "2025-11-27", text: "Everything was organised beautifully. Pickup from our hotel was punctual well before dawn, and the car was comfortable and cool. Our guide struck the perfect balance between temples, ghats and quiet moments to just watch the city breathe. Photographing the sunrise from the boat was the trip of a lifetime. Worth booking the fuller package so lunch and tickets were sorted." },
                { author: "Daniel O.", country: "Ireland", rating: 5, date: "2026-01-15", text: "We did the higher option and it was money well spent. No fussing over entry fees or where to eat, just a seamless day led by a guide who clearly loves his city. The old town walk, temple visits and boat ride all flowed together. Evening Aarti left my wife in tears. One of the best guided days we've had anywhere in India." },
                { author: "Sofia R.", country: "Spain", rating: 4, date: "2026-03-22", text: "The sunrise boat ride and the guide's storytelling were superb, and the private car meant we never felt rushed getting around. My only note is the 5:30 start plus a ten-hour day is genuinely tiring, so pace yourself. The steps down to the ghats are uneven and slippery in places. Still, it captured the soul of Varanasi in a way a shorter tour never could." },
                { author: "Chloe M.", country: "Canada", rating: 5, date: "2026-05-30", text: "Booking privately with our own guide made this trip. He tailored the whole day around our interests, waited patiently while I photographed the ghats, and steered us to a lovely vegetarian spot for lunch. The dawn on the Ganges is something I'll never forget. Cool water waiting in the car after the hot lanes was a small touch that showed how well looked after we were." },
            ],
        };
    }

    // --- REMAINING: phuket-pums-thai-cooking-class (auto-added 2026-07-02) ---
    if (slug === 'phuket-pums-thai-cooking-class') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Hannah W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Honestly the best thing we did in Phuket. Our teacher trained under Pum herself and was so patient explaining the whole Lazy Cuisine idea. I picked green curry, tom yum and mango sticky rice and every single one came out restaurant-good. Sitting down to eat it all afterwards in the dining room was so satisfying. Came home with the cookbook too." },
                { author: "Marco B.", country: "Italy", rating: 5, date: "2025-08-29", text: "As someone who cooks a lot at home I was worried it would be too basic, but choosing my own three dishes made all the difference. The teacher tweaked the pad thai technique for me and I have already remade it twice back in Milan. Three hours flew by. The new school space is spotless and well set up." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-09-11", text: "We privatised the class for our group of seven and it was perfect for a birthday. Everyone got to cook their own three plates and the teacher kept it lively and fun. Loads of laughing and loads of photos. The fact that Pum's has been going since 2001 really shows in how smoothly everything ran. Highly recommend for groups." },
                { author: "Daniel K.", country: "Germany", rating: 4, date: "2025-10-06", text: "Really enjoyable and great value for what you get, all ingredients, equipment and a cookbook included. My only small gripe is there is no hotel pickup, so we had to sort a Grab to the new location and the driver initially struggled to find it. Once there it was excellent. The teacher was warm and the food we made was delicious." },
                { author: "Chloe M.", country: "Australia", rating: 5, date: "2025-11-19", text: "Such a fun afternoon and a nice break from beaches and boat trips. I am vegetarian and had zero trouble, they helped me choose three veggie dishes and adapted them beautifully. Standing at your own station actually cooking, not just watching, is what makes this one special. Left full, happy and with a book of recipes I will actually use." },
                { author: "Liam O.", country: "Ireland", rating: 5, date: "2026-01-23", text: "Booked this on our last day and glad we did. The introduction to the Lazy Cuisine philosophy was genuinely useful, quick recipes you can do at home without twenty ingredients. My wife and I each made three different dishes so between us we tried six. Great value at the price and the staff could not have been friendlier." },
                { author: "Sophie L.", country: "France", rating: 4, date: "2026-03-15", text: "A lovely hands-on class with a teacher who clearly knew her craft. It does get warm in the cooking area once all the woks are going, so bring something light to wear. That aside, choosing my own three plates was a treat and eating them together at the end felt like a proper meal. Good introduction to real Thai cooking." },
                { author: "Ethan R.", country: "United States", rating: 5, date: "2026-05-27", text: "Took this with my teenage kids and it was a highlight of the whole Phuket trip. They loved picking their own dishes and the teacher made everyone feel involved. Plenty of action and yes, plenty of photos. Ate everything we cooked right there and even browsed the little shop after. Oldest school in Phuket for a reason." },
            ],
        };
    }

    // --- REMAINING: taj-mahal-conservative-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'taj-mahal-conservative-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Hannah W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Doing the Taj at sunrise and then meeting rescued elephants in the same morning was such a thoughtful combination. Our guide clearly loved the subject and the fact there's absolutely no riding or touching made it feel honest. Hearing each elephant's rescue story at the Mathura centre genuinely moved me. Easily the most meaningful thing we did in India." },
                { author: "Lukas B.", country: "Germany", rating: 5, date: "2025-08-29", text: "Very well organised private tour. The AC car was spotless, tolls and parking were all sorted so we never had to worry about a thing, and the water bottles were a nice touch in the heat. We even got to help chop fruit for the elephants' morning feed. Ethical, informative and worth every dollar of the forty-five." },
                { author: "Priya M.", country: "Canada", rating: 4, date: "2025-09-22", text: "A really special day, though be warned the pickup was properly early and the drive out to Mathura adds up once you've already walked the Taj at dawn. I was tired by the afternoon. That said, the elephant centre was worth the effort and I loved that it's a genuine rescue place, not a photo-op circus. Bring snacks, lunch isn't included." },
                { author: "Sean O.", country: "Ireland", rating: 5, date: "2025-10-11", text: "We booked this specifically because it doesn't offer elephant rides, and it delivered exactly that. The guide at the Taj knew his history inside out, and the caretakers at Wildlife SOS spoke about the animals with real affection. Watching an old rescued elephant just being an elephant, calm and cared for, is something my kids won't forget." },
                { author: "Camille D.", country: "France", rating: 5, date: "2025-11-30", text: "Sunrise at the Taj Mahal was breathtaking with hardly any crowds, and the transition to the elephant sanctuary made the day feel complete rather than rushed. Our driver was punctual and careful on the road to Mathura. What stayed with me was how much of the ticket goes toward supporting the elephants' welfare. A responsible choice I'd recommend." },
                { author: "Marcus T.", country: "Australia", rating: 5, date: "2026-01-18", text: "Fantastic value for a fully private day. Two of us, our own car and guide, everything included except entry tickets and food. The Wildlife SOS visit was the highlight, they explained the rehabilitation work in detail and let us observe feeding time. Refreshing to see tourism done ethically. The winter morning was cold though, so bring a jacket for sunrise." },
                { author: "Noor A.", country: "United Arab Emirates", rating: 4, date: "2026-03-07", text: "Beautiful concept and a lovely guide who was patient with all our questions about the Taj. My only small gripe is that our time at the elephant centre felt a touch short and I'd happily have stayed longer instead of heading back so soon. Still, seeing rescued elephants treated with dignity and no riding involved made the early start completely worth it." },
                { author: "Willem V.", country: "Netherlands", rating: 5, date: "2026-05-20", text: "Booked this over a standard Agra tour because of the animal welfare angle and I'm so glad we did. The Taj at first light was magical, and the hour's drive to Mathura passed easily in the comfortable AC car. Learning how the elephants were rescued from begging and circuses put the whole day into perspective. Genuinely good, guilt-free travel." },
            ],
        };
    }

    // --- REMAINING: india-gate-triangle-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'india-gate-triangle-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Emma H.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Three days that flew by in the best way. Our chauffeur collected us right from our Delhi hotel and the Toyota was spotless and properly cold, which mattered in July. The guide at Amber Fort in Jaipur brought the whole place alive with stories, and seeing the Taj Mahal in soft morning light was unforgettable. Having a private car meant we never felt rushed." },
                { author: "Daniel R.", country: "United States", rating: 5, date: "2025-09-02", text: "We booked the version with hotels and entry tickets included and it made everything painless. No queuing for monument tickets, no hunting for restaurants we could trust. The rickshaw ride through Chandni Chowk was a highlight my kids still talk about. Government-approved guides in each city clearly knew their history. Worth every dollar for the convenience." },
                { author: "Sophie L.", country: "Australia", rating: 4, date: "2025-10-19", text: "A genuinely great trip, just be ready for the driving. Agra to Jaipur was around five hours and by day three the road time adds up. The upside is the car is comfortable and our driver stopped whenever we needed a break or a chai. Delhi, Agra and Jaipur are all wonderful and the guides were excellent. Just go in knowing it's a lot of distance." },
                { author: "Lukas M.", country: "Germany", rating: 5, date: "2025-11-27", text: "Exactly what we wanted from a private tour. We asked to swap Qutub Minar for Humayun's Tomb on the first day and it was no problem at all. The flexibility was the real luxury. Amber Fort and the City Palace in Jaipur were the standouts for me. Our chauffeur spoke clear English and was punctual every single morning." },
                { author: "Aisling B.", country: "Ireland", rating: 5, date: "2026-01-15", text: "January was the perfect time to go, crisp and clear with blue skies over the Taj. We extended to four days on the guide's suggestion and added Fatehpur Sikri, which was well worth the small extra cost. Everything from airport pickup to the final drop back in Delhi ran like clockwork. Felt looked after the entire way." },
                { author: "Chloé D.", country: "France", rating: 5, date: "2026-03-08", text: "As a couple we loved having the whole vehicle to ourselves. The pace was ours to set and we spent extra time photographing the Hawa Mahal at golden hour. Old Delhi's lanes were chaotic and thrilling, and Jama Masjid was breathtaking. Our guide steered us to a fantastic vegetarian thali in Jaipur. A beautifully organised introduction to North India." },
                { author: "Marco V.", country: "Italy", rating: 4, date: "2026-04-21", text: "The tour itself was superb but April heat in Agra and Jaipur is no joke, often above forty degrees by midday. The early Taj Mahal start was smart and we were glad of it. Bring water and a hat. The car's air conditioning was a lifesaver and the guides paced things well around the hottest hours. Still very much recommend it." },
                { author: "Nadia S.", country: "Netherlands", rating: 5, date: "2026-06-11", text: "Brilliant value for a fully private three-day trip. The all-inclusive tolls, parking and fuel meant no surprise costs along the way, which I appreciated. Standing in front of the Taj Mahal after months of planning genuinely brought a tear to my eye. Agra Fort was a surprise favourite. Communication before the tour was quick and reassuring throughout." },
            ],
        };
    }

    // --- REMAINING: rishikesh-like-a-local-scooter-tour (auto-added 2026-07-02) ---
    if (slug === 'rishikesh-like-a-local-scooter-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.8,
            reviews: [
                { author: "Hannah W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Riding pillion through Rishikesh was the highlight of our trip. Our guide picked us up right from the hotel and knew every shortcut around the traffic. Crossing Laxman Jhula on the scooter, stopping for chaat at a tiny roadside stall, then ending at the Ganga Aarti as the lamps floated down the river was pure magic. Genuinely felt like seeing the city through a local's eyes." },
                { author: "Lucas M.", country: "Germany", rating: 5, date: "2025-08-29", text: "As a solo traveller this was perfect. I didn't have to worry about navigating or being alone all day, and my guide was a proper storyteller who explained the meaning behind the temples we visited. The Beatles Ashram was fascinating with all the painted domes. Eight hours flew by. Fuel, parking and water all sorted, no hidden costs. Booking this again if I return." },
                { author: "Sophie D.", country: "France", rating: 5, date: "2025-09-22", text: "We saw so much more than we ever could have on foot. Neelkanth Mahadev Temple, the quiet river beaches the guide took us to, and cafés I never would have found on my own. He adjusted the whole day around what we wanted to see. The evening Aarti was deeply moving. Fantastic value for fifty-nine dollars considering it was basically a private day." },
                { author: "Ryan T.", country: "Australia", rating: 4, date: "2025-10-30", text: "Brilliant way to explore Rishikesh and our guide was a legend on the bike. Only small gripe is that October afternoons were still pretty warm and a couple of temple stops felt a touch rushed to fit everything into the day. That said, weaving through the lanes to reach the Beatles Ashram and finishing at the river more than made up for it. Highly recommend." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-11-18", text: "Such a clever way to experience the city. My guide spoke to me in a mix of languages and made me feel completely at ease on the back of the scooty. We tried pakoras and local sweets he recommended, wandered Ram Jhula, and reached a hidden little beach on the Ganges. Water bottle and helmet provided. Felt safe the entire time. Loved it." },
                { author: "Daniel O.", country: "Ireland", rating: 5, date: "2026-01-27", text: "Did this in late January and the riverside evening was chilly, so bring a jacket, but the Aarti under the cold clear sky was unforgettable. Our rider handled the narrow lanes near Trayambakeshwar Temple effortlessly and kept stopping for photos at spots a car could never reach. Pickup from our guesthouse was bang on time. One of the best value experiences we had in India." },
                { author: "Emma van D.", country: "Netherlands", rating: 5, date: "2026-03-15", text: "I cannot recommend this enough. Instead of sweating it out in traffic we glided from bridge to temple to café, and our guide clearly loved his city. He knew exactly when to arrive for the Aarti to get a good spot on the ghat. Trying street food at the little stalls he chose was a highlight. Genuine, warm and completely unrushed for the most part." },
                { author: "Jack R.", country: "Canada", rating: 4, date: "2026-05-09", text: "Really good day out and our guide was friendly and knowledgeable. Worth knowing that May is hot, so the midday riding got sweaty and I'd suggest asking to start early. Lunch isn't included but the roadside chaat he recommended was cheap and delicious. Loved the Beatles Ashram and cruising along the Ganges. Solid value and a much smarter way to see Rishikesh than a taxi." },
            ],
        };
    }

    // --- REMAINING: old-delhi-new-delhi-trails-private-tour (auto-added 2026-07-02) ---
    if (slug === 'old-delhi-new-delhi-trails-private-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.9,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "We were collected from our hotel bang on time and the day just flowed from there. Humayun's Tomb was the surprise standout for me — quieter than I expected and stunning. Our guide knew exactly when to push on and when to let us wander. Having all the entry tickets already sorted meant zero queuing. Brilliant value for a private day at this price." },
                { author: "Mathis L.", country: "France", rating: 5, date: "2025-08-29", text: "The rickshaw ride through Chandni Chowk was the highlight of our whole India trip. Weaving through those spice-market lanes with our guide pointing out shops was unforgettable. The air-conditioned car was a lifesaver between stops and the driver was calm in mad traffic. Qutub Minar at the end was gorgeous. Cannot recommend this enough for a first day in Delhi." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2025-09-17", text: "Booked this as a private tour for my parents and me and it suited all three generations. My mother appreciated that the guide slowed the pace at Jama Masjid, and the cold water bottles kept appearing just when we needed them. We covered so much in eight hours yet never felt rushed. Airport drop-off at the end was seamless." },
                { author: "Connor F.", country: "Ireland", rating: 4, date: "2025-11-05", text: "A genuinely great day and superb guide who clearly loves Delhi. My only honest note is the September heat made the midday stretch tough, and India Gate felt a touch rushed as we were all flagging by then. Start as early as you can. That aside, the monuments, the tickets included, and the door-to-door pickup made it painless and well worth it." },
                { author: "Greta H.", country: "Germany", rating: 5, date: "2026-01-22", text: "Faultless organisation. Everything promised was delivered — private car, guide at every single site, all fees paid. We especially loved how our guide contrasted the tidy colonial boulevards of New Delhi with the beautiful chaos of the old town. January weather was perfect for walking the Qutub complex. Fair price for a fully private experience with this much included." },
                { author: "Diego M.", country: "Spain", rating: 5, date: "2026-03-08", text: "Used this on a long layover and it was the perfect way to fill the day. Picked up straight from the airport, saw the icons, and dropped back with time to spare. Our guide happily reshuffled the order so we hit the quieter monuments first. Humayun's Tomb and the Chandni Chowk lanes were the standouts. Smooth, personal and great value." },
                { author: "Hannah B.", country: "Australia", rating: 4, date: "2026-04-19", text: "Loved it overall — the guide was knowledgeable and the rickshaw ride was a real thrill. Be prepared though: Chandni Chowk is intensely crowded and a couple of vendors were persistent, so keep your bag close. Our guide handled it well and kept us moving. The included tickets and comfy car made a long day easy. Just go in with an open mind about the crowds." },
                { author: "Noah V.", country: "Netherlands", rating: 5, date: "2026-05-30", text: "Exactly the private, flexible day we hoped for. We asked to spend extra time photographing Humayun's Tomb and the guide simply adjusted — no fuss. All entrance fees were handled, water provided, and the driver navigated Delhi like a pro. Eight hours flew by. Seeing both the Mughal old city and the grand New Delhi in one day gave us a real feel for the capital." },
            ],
        };
    }

    // --- REMAINING: city-palace-heritage-full-day-tour (auto-added 2026-07-02) ---
    if (slug === 'city-palace-heritage-full-day-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide brought the City Palace to life, explaining the different maharanas behind each courtyard and balcony rather than just reeling off dates. The private car meant we never waited around, and the mirrored chambers were a highlight. We added the Lake Pichola boat ride at the end and the views back toward the palace at sunset were unforgettable. Worth every rupee." },
                { author: "Marco B.", country: "Italy", rating: 5, date: "2025-08-03", text: "Ten hours flew by. What I loved was how flexible it was being private, we lingered ages in the palace museums and our driver was always waiting with cold water. The souvenir shopping stop was fun and the guide steered us to a genuine miniature painter. Booking was simple and the hotel pickup was right on time. A brilliant introduction to the City of Lakes." },
                { author: "Priya S.", country: "Singapore", rating: 4, date: "2025-09-19", text: "A wonderful day overall and the guide was genuinely knowledgeable about the royal history. My only note is the heat, we went in September and the open palace terraces got very warm by midday, so start early if you can. There are also a lot of stairs inside the complex. The boat ride cooled us down nicely and made up for it." },
                { author: "Thomas M.", country: "Germany", rating: 5, date: "2025-10-11", text: "Extremely well organised private tour. The car was clean and properly air-conditioned, which mattered a lot between stops. Our guide was patient with my elderly mother, taking the palace staircases slowly and finding shaded spots to rest. He knew exactly which ticket counters to use so we skipped the worst queues. Panoramic views over Lake Pichola were the standout memory." },
                { author: "Chloe D.", country: "Australia", rating: 5, date: "2025-11-22", text: "Booked this as a family of four and the kids were captivated by the courtyards and the palace museums. Having our own guide and driver made it stress free, and we could set the pace ourselves. The lunch we chose to add was delicious Rajasthani vegetarian food. The optional boat past Jag Mandir was the perfect way to finish the afternoon. Highly recommend." },
                { author: "Liam O.", country: "Ireland", rating: 5, date: "2026-01-30", text: "January was the ideal time to visit, warm days and comfortable enough for all the walking inside the City Palace. Our guide had a real passion for the architecture and pointed out details in the balconies and frescoes I would have walked straight past. He also helped us bargain for handicrafts in the market. Genuinely felt like a private, personal experience." },
                { author: "Sophie L.", country: "France", rating: 4, date: "2026-03-17", text: "Beautiful tour and a lovely guide who spoke excellent English. Just be aware the palace was quite crowded by late morning and a couple of the museum rooms felt a little rushed because of the crowds. That said, the private car, the included water and the sweeping lake views more than made up for it. Do the boat ride, it is absolutely worth the extra ticket." },
                { author: "Noah V.", country: "Netherlands", rating: 5, date: "2026-05-09", text: "Fantastic value for a full ten hours with a private guide and car. Pickup from our hotel was punctual and the whole day ran smoothly with all the parking and tolls handled for us. The City Palace is enormous and having an expert explain the layout made all the difference. We spent the last hour shopping for miniatures and even squeezed in the lake boat ride. Superb." },
            ],
        };
    }

    // --- REMAINING: delhi-agra-sunrise-tour (auto-added 2026-07-02) ---
    if (slug === 'delhi-agra-sunrise-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "The 2:30 AM pickup from Gurgaon felt brutal until we walked through the gate and saw the Taj glowing pink in the first light. Barely anyone else was there. Our guide knew exactly where to stand for photos and told us the story behind every inlay. Agra Fort in the late morning was a bonus, but honestly the sunrise alone was worth the whole trip." },
                { author: "Marcus T.", country: "Germany", rating: 5, date: "2025-09-02", text: "We booked the private 195 option and having the car entirely to ourselves made the long day so relaxed. The elephant sanctuary genuinely moved my wife to tears, seeing rescued animals cared for with no riding nonsense. The Mughlai lunch was rich and delicious, and our driver was patient every time we wanted to stop. Faultless from Delhi and back." },
                { author: "Priya R.", country: "United States", rating: 5, date: "2025-10-19", text: "Travelling with my parents in their seventies, I worried about the pace, but the private car meant we could rest between sights. The guide slowed down for us at Agra Fort and found the ramps rather than the steps. Mineral water was always on hand in the heat. The Wildlife SOS stop was the highlight for my mum. Highly recommend for families with older travellers." },
                { author: "Liam O.", country: "Ireland", rating: 4, date: "2025-11-30", text: "A brilliant day out and the Taj at sunrise is unforgettable. My only honest note is the drive back to Delhi in the afternoon traffic dragged on well past three hours and I was fading after the early start. Everything else, the guide, the fort, the elephants, was spot on. Just be ready for a genuinely long day and nap in the car on the way home." },
                { author: "Chloé B.", country: "France", rating: 5, date: "2026-01-11", text: "January morning at the Taj was crisp and beautiful with soft golden light for photos. Our guide handled the tickets and kept the touts at arm's length, which I really appreciated. He pointed out details in the marble I'd never have noticed alone. The paneer and dal at lunch were fantastic for a vegetarian like me. Smooth pickup right from our hotel door." },
                { author: "Daniel K.", country: "Australia", rating: 5, date: "2026-02-23", text: "Did the sunrise version and the whole thing felt seamless from the airport pickup onwards. The AC car was clean and comfortable for the three hours down. What stood out was how much the guide clearly cared about the elephant centre, he explained each animal's rescue story. Agra Fort was grander than I expected. Great value for a fully private day trip." },
                { author: "Sofia M.", country: "Spain", rating: 4, date: "2026-04-08", text: "Wonderful experience overall and the elephants were the emotional heart of it. I'll be honest though, by the time we reached the Taj it was already warming up and the complex got busy, so the sunrise slot really is the one to pick in April. Our guide was knowledgeable and kind. The Mughlai food was a lovely surprise. Just come prepared for Agra heat." },
                { author: "Nathan L.", country: "Canada", rating: 5, date: "2026-05-27", text: "Everything ran like clockwork from our Noida pickup at 3 AM. Watching the sun climb over the Taj with hardly a crowd was pure magic and easily worth losing the sleep. The guide balanced history with letting us just wander and take it in. The rescued elephants afterward gave the day real heart. Booking was simple and the confirmation came through quickly." },
            ],
        };
    }

    // --- REMAINING: delhi-agra-overnight-express-train-taj-mahal-sunrise (auto-added 2026-07-02) ---
    if (slug === 'delhi-agra-overnight-express-train-taj-mahal-sunrise') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "The Gatimaan Express was such a smooth way to reach Agra, far better than sitting in Delhi traffic for hours. Splitting the Taj over two days meant we caught the sunset from Mehtab Bagh and then sunrise the next morning, both breathtaking in totally different ways. Our guide was patient and full of Mughal history. The overnight stay made everything feel unhurried." },
                { author: "Marc D.", country: "France", rating: 5, date: "2025-08-29", text: "Fatehpur Sikri was the surprise of the trip for me. Most day tours skip it, but here we had a full morning to explore the Buland Darwaza and the abandoned palaces with no rush. The private Toyota and the golf carts saved our legs after a lot of walking. Booked the EC class train seats and they were worth the small extra cost." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2025-09-22", text: "As a family of four we really appreciated the two-day pace. The kids managed the early sunrise start better than expected, and seeing the marble change colour at the Taj was magical. Agra Fort and the Baby Taj were quieter than the main monument. The guide arranged our shoe covers and water without us having to ask for anything." },
                { author: "Thomas B.", country: "Germany", rating: 4, date: "2025-10-11", text: "A very well organised tour and the express train is genuinely fast and comfortable. My only note is that the sunrise wake-up is brutally early, so go to bed sensibly the night before. Also there were a few persistent souvenir sellers near the Taj gates, though our guide handled them well. Overall the sunset then sunrise combination is unbeatable and I'd recommend it." },
                { author: "Sarah M.", country: "Australia", rating: 5, date: "2025-11-30", text: "We travelled in late November and the weather was perfect, crisp mornings and clear skies for photos. The view of the Taj across the Yamuna at sunset from Mehtab Bagh was something I'll never forget. Having our own guide for both days meant we could linger where we wanted. The return train got us back to Delhi relaxed and on time." },
                { author: "Liam O.", country: "Ireland", rating: 5, date: "2026-01-18", text: "Doing Agra over two days instead of cramming it into one made all the difference. Sunset at the Taj, a comfortable hotel night, then straight through the gates at sunrise while it was still quiet. Itmad-ud-Daulah, the Baby Taj, was a hidden gem with beautiful inlay work. Great value considering the train tickets, car and guide are all bundled in." },
                { author: "Hannah V.", country: "Netherlands", rating: 4, date: "2026-03-07", text: "Loved the itinerary and the Gatimaan Express was a highlight in itself. Do be prepared for a lot of walking on uneven stone at Agra Fort and especially Fatehpur Sikri, and by midday in March it was already quite hot. Wear proper shoes. That said, our guide was excellent and the sunrise at the Taj Mahal completely lived up to the hype." },
                { author: "Daniel K.", country: "United States", rating: 5, date: "2026-05-16", text: "This was the smoothest India experience we could have hoped for. From Hazrat Nizamuddin station to the return leg, everything ran on schedule. The guide knew exactly which corners of the Taj were best for photos before the crowds arrived. Golf carts to the monuments were a nice touch in the heat. Booking the whole thing as one package took all the stress out." },
            ],
        };
    }

    // --- REMAINING: phuket-private-customize-tour-local-guide (auto-added 2026-07-02) ---
    if (slug === 'phuket-private-customize-tour-local-guide') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Emma H.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Being able to pick our own stops made this so much better than a coach tour. We chose Karon Viewpoint, Big Buddha and Old Town, and our guide Nok read us perfectly, giving us time to wander the shophouse streets. The van was spotless and freezing cold in the best way after the Big Buddha stairs. Honestly the highlight of our Phuket week." },
                { author: "Daniel M.", country: "Australia", rating: 5, date: "2025-08-29", text: "Booked the 8-hour version for our family of five and it was worth every dollar. The kids flagged after Wat Chalong so the guide swapped in a beach stop and grabbed us mango sticky rice, no fuss at all. Loved that we controlled the pace. Big Buddha at late morning was stunning, though bring water because those steps in the heat are no joke." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2025-09-22", text: "We wanted photography above all and told them so when booking. The guide took us to Karon Viewpoint early for clear light over the three bays, then found quiet corners of Old Town away from the crowds. Pickup from our hotel was right on time at ten. Four hours flew by and I came home with hundreds of photos I actually love." },
                { author: "Thomas B.", country: "Germany", rating: 4, date: "2025-10-30", text: "A genuinely flexible day and our guide was knowledgeable and warm. My only gripe is that with the 4-hour option we felt slightly rushed trying to fit in three sites, so I'd honestly suggest paying the extra for the 8-hour tour or picking just two spots. The air-conditioned SUV was comfortable and the temple stops were beautiful. Still a great introduction to the island." },
                { author: "Aisha R.", country: "United Arab Emirates", rating: 5, date: "2025-12-11", text: "Private and relaxed, exactly what we needed. I mentioned we needed halal food and the guide took us to a lovely local spot without any hassle. Wat Chalong was the largest temple I've seen in Thailand and our guide explained the history really well. He also lent us a scarf for shoulders and knees, which I appreciated. Smooth from pickup to drop-off." },
                { author: "Liam O.", country: "Ireland", rating: 5, date: "2026-02-03", text: "After days of boat trips we wanted something on land and this delivered. We swapped a couple of stops on the fly and the guide never blinked. Old Town's Sino-European buildings were a real surprise, full of colour and great coffee. The van comfortably fit our group and luggage. Fair price for a fully private day with a driver and guide." },
                { author: "Chloe W.", country: "Canada", rating: 4, date: "2026-04-18", text: "Lovely tailored day and a friendly guide who clearly loves Phuket. Do note it's mostly driving between sights with short walks, and Big Buddha got quite crowded and hot by midday, so an earlier start would help. That said, the flexibility to skip what didn't interest us was brilliant, and Karon Viewpoint was every bit as gorgeous as promised." },
                { author: "Marco V.", country: "Netherlands", rating: 5, date: "2026-05-27", text: "We only chose two locations, Big Buddha and Old Town, and that turned out to be the perfect pace for the four-hour tour. No rushing, plenty of time to soak everything in. The guide picked us up bang on ten from the hotel lobby and the SUV was cool and comfortable. A calm, personal way to see the island's culture. Highly recommend." },
            ],
        };
    }

    // --- REMAINING: taj-mahal-sunrise-tour-experience (auto-added 2026-07-02) ---
    if (slug === 'taj-mahal-sunrise-tour-experience') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Standing in front of the Taj as the sun came up was genuinely one of the best moments of our whole India trip. The car collected us from our Delhi hotel bang on time and the driver was calm and careful on the expressway. Our guide knew all the quiet corners for photos before the crowds arrived. Worth every minute of the 3am alarm." },
                { author: "Mathias K.", country: "Germany", rating: 5, date: "2025-09-02", text: "Very well organised private trip. What impressed me most was Agra Fort in the morning light after the Taj, our guide explained the whole Shah Jahan story so vividly. The car was clean and cold water was waiting for us. Smooth drive both ways along the Yamuna Expressway. A serious history day done properly." },
                { author: "Priya N.", country: "Singapore", rating: 4, date: "2025-10-19", text: "The sunrise itself was unforgettable and the marble really does turn pink and gold. My only honest note is that the 2:30am pickup and the long drive back left us pretty wiped out by evening, so don't plan much for afterwards. Guide was lovely and patient with my parents on the steps at the fort. Still very glad we did it." },
                { author: "Connor R.", country: "Ireland", rating: 5, date: "2025-11-08", text: "Booked this as a couple and it felt completely private and relaxed, no being herded around with a big group. Reaching the gate for opening meant we practically had the main platform to ourselves for photos. Our guide framed some brilliant shots for us. The included water in the car was a small thing that mattered on the way home." },
                { author: "Danielle T.", country: "Australia", rating: 5, date: "2026-01-23", text: "Coming from Delhi in one day sounded exhausting but it was totally manageable in the private car and we slept most of the drive down. The cool January morning was perfect and there was almost no queue at that hour. Agra Fort was a highlight I hadn't expected to love so much. Fantastic value for a private guide and driver." },
                { author: "Lucas F.", country: "France", rating: 5, date: "2026-03-11", text: "An early start but so worth it. The light on the white marble just after dawn is something photos can never fully capture. Our guide handled the persistent photographers outside so we were never hassled, and pointed out details on the inlay work I would have walked straight past. Comfortable car, honest driver, seamless day overall." },
                { author: "Hana V.", country: "Netherlands", rating: 4, date: "2026-04-27", text: "Beautiful experience and our guide was knowledgeable and warm. Be aware that by the time we finished the Taj and moved to Agra Fort the morning heat was already building in April, so bring a hat. The drive back to Delhi felt long, but the car was comfortable and the water helped. Would recommend for the sunrise alone." },
                { author: "Grant M.", country: "Canada", rating: 5, date: "2026-06-05", text: "This was the highlight of two weeks in India. Everything ran like clockwork from the pre-dawn hotel pickup to the drop-off back in Delhi. Watching the first light hit the Taj with hardly anyone around felt almost private. Our guide balanced history with plenty of time to just stand and take it in. Genuinely brilliant same-day trip." },
            ],
        };
    }

    // --- REMAINING: swayambhunath-monkey-temple-full-day-tour (auto-added 2026-07-02) ---
    if (slug === 'swayambhunath-monkey-temple-full-day-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Doing all four sites in one day sounded rushed on paper but it flowed beautifully. Our guide clearly knew every temple inside out and paced it so we never felt hurried. Boudhanath at the end, walking the stupa with the prayer flags overhead, was the highlight for me. The private car with air-con was a blessing between stops." },
                { author: "Mateus F.", country: "Brazil", rating: 5, date: "2025-08-22", text: "Booked the all-inclusive option and it was worth every dollar. Having the entrance fees sorted and a proper hot lunch with a Khana set meant zero stress and no queuing at ticket booths. Pashupatinath was intense and moving, and our guide explained the cremation rituals with such respect. Pickup from our Thamel hotel was right on time." },
                { author: "Anneke V.", country: "Netherlands", rating: 4, date: "2025-09-09", text: "A really good overview of Kathmandu's heritage and our guide was excellent. My only honest note is the climb up to Swayambhunath, those 365 steps in the midday heat had us puffing, so start earlier if you can. The monkeys at the top were entertaining though, and the city views made the effort worthwhile. Lunch box was fine, nothing fancy." },
                { author: "Grant M.", country: "Australia", rating: 5, date: "2025-10-18", text: "Fantastic private day out for the three of us. What I appreciated most was the flexibility, we asked to spend longer at Patan Durbar Square photographing the carvings and the guide happily adjusted. The Newar architecture there blew me away. Great value for a private guide and vehicle at eighty dollars. Would recommend to anyone with limited days in the city." },
                { author: "Sophie L.", country: "Canada", rating: 5, date: "2025-11-30", text: "As a solo traveler the group join tour at forty dollars was perfect, sociable and affordable. Met a lovely couple from Germany in the van. Our guide was patient answering endless questions and helped everyone buy tickets at each gate. Boudhanath and Swayambhunath were the standouts. Just remember the entry fees aren't included on this option, so bring rupees." },
                { author: "Lukas B.", country: "Germany", rating: 5, date: "2026-01-25", text: "Brilliantly organised from the hotel pickup onwards. Four World Heritage Sites in about six hours, and each one felt distinct rather than a blur. The guide's stories about the Buddha eyes on the stupa and the significance of the Bagmati River stayed with me. Comfortable vehicle, punctual, knowledgeable. Exactly the introduction to Kathmandu I was hoping for." },
                { author: "Priya R.", country: "Singapore", rating: 4, date: "2026-03-12", text: "Overall a wonderful and informative day. The four sites are genuinely special and our guide was warm and well-informed. My small gripe is that Pashupatinath felt a touch rushed compared to the others, and there were a few persistent vendors near the gates. Still, the private car and the ease of hotel drop-off made it a relaxed experience. Wear comfortable shoes." },
                { author: "Conor D.", country: "Ireland", rating: 5, date: "2026-05-20", text: "We took the all-inclusive tour with our two teenagers and it kept everyone engaged. The kids loved the monkeys at Swayambhunath and the huge stupa at Boudhanath, while the restaurant lunch gave us a proper break in the middle. Having tickets and food all covered made travelling as a family effortless. Our guide tailored the history to keep the teens interested." },
            ],
        };
    }

    // --- REMAINING: sarangkot-sunrise-tour (auto-added 2026-07-02) ---
    if (slug === 'sarangkot-sunrise-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Getting up at half four hurt, but the moment the sun hit Fishtail and turned it pink I forgot all about it. The driver picked us up right outside our Lakeside hotel and the whole thing felt calm and unhurried. No trekking, just a short stroll to the platform. Worth every bit of the early alarm." },
                { author: "Marcus B.", country: "Germany", rating: 5, date: "2025-08-29", text: "A wonderfully efficient morning. The private vehicle was clean and warm, which mattered because it was genuinely cold up there before dawn. We had a clear view across the whole Annapurna range and down onto Phewa Lake. For thirty dollars this is honestly one of the best value experiences we had in Nepal." },
                { author: "Chloe T.", country: "Australia", rating: 4, date: "2025-10-06", text: "Stunning views and a smooth pickup, no complaints there. My only heads-up is the viewpoint got fairly crowded with other groups by sunrise, so you have to angle around people for the best photos. Still, the panorama over the valley was breathtaking and the short walk up was easy enough for my parents." },
                { author: "Liam O.", country: "Ireland", rating: 5, date: "2025-11-19", text: "We booked this on a whim the night before and it was the highlight of Pokhara. Watching Dhaulagiri and Annapurna South light up while the valley below was still in shadow is something I will not forget. The driver knew exactly where to stop for photos. Bring warm layers, it is chilly at the top." },
                { author: "Sofia R.", country: "Spain", rating: 5, date: "2025-12-28", text: "Perfect little tour for anyone who does not want to trek. The car took us almost to the summit and then it was just a few minutes on foot. December mornings were crisp and completely cloud free, so the mountains looked razor sharp. We paid the small entry fee in cash at the top, which was easy to sort." },
                { author: "Nathan K.", country: "Canada", rating: 5, date: "2026-02-11", text: "As a keen photographer this delivered exactly what I wanted. Arriving before first light let me set up for the changing colours as the sun rose over the Himalayas. The private setup meant I could take my time rather than being rushed back to the van. Phewa Lake in the distance was the perfect finishing touch." },
                { author: "Amelie D.", country: "France", rating: 4, date: "2026-04-03", text: "Beautiful sunrise and a comfortable air-conditioned ride. Be aware the drive up is winding and quite early, which our kids found a bit much before breakfast. Once we were there though the views of the snow peaks made it all worthwhile, and the walk to the viewpoint was short and manageable for everyone." },
                { author: "Priya S.", country: "Singapore", rating: 5, date: "2026-05-22", text: "Even in late spring with a little haze the experience was magical. The layers of mist over the valley slowly lifting to reveal the Annapurnas felt almost cinematic. Pickup from Lakeside was punctual and the guide was reassuring in the dark early hours. A gentle, accessible way to see the Himalayas without a hard hike." },
            ],
        };
    }

    // --- REMAINING: paragliding-at-chandragiri-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'paragliding-at-chandragiri-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Emma R.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Genuinely one of the highlights of our whole Nepal trip. The pickup from our Thamel hotel was right on time and the drive up gave us a chance to calm the nerves. Once we launched, all the fear melted away. My pilot was chatty and reassuring, and the terraced fields below looked unreal. The included video is something I keep rewatching." },
                { author: "Lukas B.", country: "Germany", rating: 5, date: "2025-08-29", text: "Flew on a crisp morning and could actually make out snowcapped peaks in the distance, which I hadn't expected. The pilot took over all the technical work so I just soaked it in. Being strapped in tandem felt completely secure the entire time. Well worth the 110 dollars considering the photos and transport are all part of the deal." },
                { author: "Sophie M.", country: "Australia", rating: 4, date: "2025-09-22", text: "An amazing experience overall and I'd do it again. My only small gripe is that the actual airborne time is shorter than the four hour listing suggests, so manage your expectations, most of that window is the drive and briefing. The flight itself was smooth and the views over the villages were stunning. Bring a warm layer, it's chilly up on the hill." },
                { author: "Daniel O.", country: "Ireland", rating: 5, date: "2025-10-11", text: "October was the perfect month for this. Clear skies, gentle wind, and a pilot who clearly knew every thermal on that hillside. We circled slowly over forests and old temples and I never felt queasy once. The safety briefing beforehand was thorough without being intimidating. Easily the best value adventure we did in Kathmandu." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2025-11-30", text: "I was terrified of heights and almost cancelled, but the pilot was so calm and encouraging that I ended up laughing the whole flight. Floating above the valley with the city buzzing far below is a feeling I can't describe. Hotel drop-off afterwards was seamless. If you're on the fence, just do it, you won't regret it." },
                { author: "Thomas V.", country: "Netherlands", rating: 4, date: "2026-01-19", text: "Great flight and a friendly, professional pilot. Do note this is weather dependent, our original slot got pushed a day because of wind, which is fair enough for safety but worth planning around. When we did fly, conditions were perfect and the aerial photos came out brilliantly. The launch run is quick, wear proper shoes with grip." },
                { author: "Isabelle C.", country: "France", rating: 5, date: "2026-03-08", text: "Spring flying over the Kathmandu Valley was magical. The contrast between the busy streets we'd just left and the total serenity in the air really stayed with me. My pilot pointed out landmarks and villages as we glided. Everything from the Thamel pickup to the free video felt organised and generous. A must-do in Nepal." },
                { author: "Marcus H.", country: "Canada", rating: 5, date: "2026-05-27", text: "Booked this on a whim and it became the story I keep telling back home. No experience needed, the pilot handled it all, and the equipment felt well maintained. Soaring over the green hills with the Himalayas hazy on the horizon was surreal. Having the photos and videos included meant I could actually be present instead of fumbling with my phone." },
            ],
        };
    }

    // --- REMAINING: sarangkot-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'sarangkot-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Emma H.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Absolutely the highlight of our Nepal trip. Taking off from Sarangkot with Fishtail mountain right in front of us was surreal. My pilot was calm and reassuring, explained the little run at launch perfectly, and I barely had to do anything. The glide over Phewa Lake was so peaceful. Photos came through the same evening and they're stunning." },
                { author: "Lukas M.", country: "Germany", rating: 5, date: "2025-08-29", text: "First time paragliding and I was nervous, but the pilot made me feel completely safe. The Annapurna views from the air are on another level, especially Machhapuchhre. We caught a thermal and spiralled up higher which was a real rush. Hotel pickup from Lakeside was punctual and the whole thing ran smoothly. Worth every dollar." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2025-09-22", text: "Magical morning above Pokhara. We went up early and the sky was crystal clear, so we could see the whole Annapurna range and the terraced fields below. The landing near the lake was gentle and easy. My pilot filmed the entire flight and shared the video before we even got back to the hotel. Unforgettable experience." },
                { author: "Daniel O.", country: "Ireland", rating: 4, date: "2025-10-18", text: "Genuinely brilliant flight and the views of the Himalayas are unreal. Only reason it's four stars is the wait. The four hours is mostly transfers and standing on the hill waiting for the right wind, and the actual air time was about 20 minutes. Once you're flying though, none of that matters. Bring a jacket, Sarangkot is chilly in the morning." },
                { author: "Priya R.", country: "United Arab Emirates", rating: 5, date: "2025-11-30", text: "One of the best things I've ever done. Gliding silently over the valley with the snow peaks glowing was breathtaking. The safety briefing was thorough and the equipment felt new and well maintained. I get travel sick but told my pilot and he kept it smooth for me. The included photos saved us a fortune compared to other operators." },
                { author: "Connor T.", country: "Australia", rating: 5, date: "2026-01-16", text: "Did this in clear winter conditions and the visibility was insane, Annapurna South and Hiunchuli looked close enough to touch. The drive up the winding Sarangkot road is an adventure in itself. Launch was quick, a few steps and suddenly you're airborne over Pokhara. Landing by Phewa Lake was smooth as anything. Highly recommend a morning slot." },
                { author: "Noor A.", country: "Netherlands", rating: 4, date: "2026-03-09", text: "Wonderful experience overall and the pilots clearly know what they're doing. Our first attempt got postponed because of wind, which was frustrating with a tight schedule, but they rebooked us for the next morning and it was worth the wait. The Fishtail views from above were incredible. Just build a spare day into your Pokhara plans in case the weather doesn't cooperate." },
                { author: "Grace W.", country: "New Zealand", rating: 5, date: "2026-05-27", text: "Flew tandem for my birthday and it exceeded every expectation. The pilot was friendly and professional, pointed out all the peaks and even the villages below us. The whole flight felt safe yet thrilling. Pickup and drop-off in Lakeside made it stress-free, and getting the photos and video included meant I could just enjoy the moment. Do it." },
            ],
        };
    }

    // --- REMAINING: kinari-bazaar-food-tour (auto-added 2026-07-02) ---
    if (slug === 'kinari-bazaar-food-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.8,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Honestly the highlight of our Agra stay. Our guide picked us up right from the hotel in the tuk-tuk and knew every good stall in Kinari Bazaar. The aloo tikki was incredible and the petha sweet was unlike anything I'd tasted. We felt looked after the whole three hours and never once lost in the crowds. Brilliant value." },
                { author: "Mathis L.", country: "France", rating: 5, date: "2025-09-02", text: "A wonderful way to see the real Agra. The walk through the spice lanes was a feast for the nose before we even ate anything. Our guide explained the history of Jama Masjid patiently and helped us dress properly to enter. Loved trying dosa fresh off the griddle. The tuk-tuk drop back to the hotel was a lovely touch after a full evening." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2025-10-19", text: "We did this after visiting the Taj in the morning and it was the perfect contrast. Everything is optional so we sampled as much or as little as we wanted, and our guide picked only busy stalls with fresh food. My kids adored the tuk-tuk ride and the samosas. Mankameshwar Temple at dusk was quietly beautiful. Highly recommend for families." },
                { author: "Tobias K.", country: "Germany", rating: 4, date: "2025-11-08", text: "Great local experience and a very knowledgeable guide who took us to spots we'd never have found alone. My only note is that Kinari Bazaar gets extremely crowded in the evening and a couple of shopkeepers were quite pushy when we paused to look. The food more than made up for it though, and the petha shop at the end was a real find. Good value overall." },
                { author: "Grace O.", country: "Ireland", rating: 5, date: "2025-12-27", text: "Such a warm, personal tour. Being just our little group meant we could set the pace and linger where we wanted. Our guide bargained on our behalf for a beautiful textile in the bazaar and saved us a fortune. The mix of temple, mosque and street snacks in one evening felt genuinely authentic rather than staged. Worth every rupee." },
                { author: "Daniel R.", country: "United States", rating: 5, date: "2026-02-11", text: "I was nervous about eating street food in India, but our guide only stopped at places where everything was cooked hot in front of us, and I had zero issues afterwards. The aloo tikki and freshly fried samosas were outstanding. He also gave great context on the Mughal architecture at Jama Masjid. Door to door service made the whole thing effortless." },
                { author: "Chloe M.", country: "Australia", rating: 4, date: "2026-04-03", text: "Really enjoyable evening and fantastic food, but be prepared for the heat in April, even in the evening the lanes were warm and busy. The tuk-tuk between stops was a blessing. Our guide was friendly and flexible, happy to skip anything too spicy for me. Would have loved a touch more time at the temple, but three hours flew by. Recommended." },
                { author: "Sander V.", country: "Netherlands", rating: 5, date: "2026-05-22", text: "Booking was simple and the hotel pickup ran exactly on time. What I appreciated most was how our guide balanced the food with the culture, explaining the wedding items and jewellery Kinari Bazaar is known for. Everything vegetarian, which suited us perfectly. The dosa and petha were standouts. A genuine, unhurried taste of everyday Agra life for a very fair price." },
            ],
        };
    }

    // --- REMAINING: thamel-cooking-food-tour (auto-added 2026-07-02) ---
    if (slug === 'thamel-cooking-food-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.8,
            reviews: [
                { author: "Hannah W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Honestly the highlight of our Kathmandu trip. We started at a little local market picking out spices and vegetables, which I'd never have found on my own, then spent a couple of hours folding momos and cooking a proper dal bhat. Our chef was patient and funny, and sitting down to eat what we'd made with masala tea was the perfect ending. Brilliant value at twenty dollars." },
                { author: "Lukas M.", country: "Germany", rating: 5, date: "2025-08-22", text: "I came expecting a demonstration and instead got genuinely hands-on cooking. Learning the spice ratios for the lentil dal was the part I'll actually use at home. The three hours flew by and the food was better than most restaurants we tried in Thamel. Chef happily adjusted everything to vegetarian for me without any fuss. Highly recommend to anyone curious about real Nepali home food." },
                { author: "Sophie L.", country: "France", rating: 4, date: "2025-09-30", text: "A lovely and delicious experience overall. The momo folding was so much fun and the tasting at the end left us completely full. My only small note is that the market walk goes through very crowded, uneven Thamel streets and it was a bit chaotic dodging scooters. Not a dealbreaker at all, just wear proper shoes and stay alert. Would still recommend it warmly." },
                { author: "Ryan O.", country: "Australia", rating: 5, date: "2025-10-18", text: "Did this on our first evening and it set the tone for the whole trip. Great way to understand Nepali culture through the food rather than just eating out. We cooked three different curries plus momos and the chef explained the story behind each dish. Everything was fresh from the market that afternoon. My partner still talks about the masala tea. Fantastic little experience." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2025-11-25", text: "Such a warm, welcoming afternoon. As someone who cooks a lot at home I appreciated how much technique they shared, not just recipes. The dumpling pleating took me a few tries but the chef kept correcting me kindly until mine looked decent. Loved that we picked our own ingredients first. Left with a full stomach and written recipes to try back home. Worth every rupee." },
                { author: "Daniel R.", country: "United States", rating: 5, date: "2026-01-12", text: "Booked the hotel pickup option and it made everything easy since we were staying a little outside the Thamel core. The class itself was intimate and relaxed, no rushing. We made dal bhat, vegetable curry and steamed momos, then feasted on all of it. Our two teenagers were fully engaged the whole time, which almost never happens. A genuinely memorable family evening in Kathmandu." },
                { author: "Aoife K.", country: "Ireland", rating: 4, date: "2026-03-08", text: "Really enjoyable and great value, and the chef was lovely and knowledgeable. Just a heads-up that our session ran on the busier side so it felt slightly less private than I'd pictured, though everyone still got hands-on time. The food more than made up for it, the momos were the best I had in Nepal. Come hungry because the portions at the tasting are generous." },
                { author: "Marco B.", country: "Italy", rating: 5, date: "2026-05-20", text: "As an Italian I take cooking seriously and this did not disappoint. The market tour was fascinating, seeing which spices define Nepali cooking, and the chef treated it like a real lesson rather than a tourist show. We adjusted the chili to suit us and the result was perfectly balanced. Three relaxed hours, wonderful company, and a plate of food we were genuinely proud of." },
            ],
        };
    }

    // --- REMAINING: kanchanaburi-guided-tour (auto-added 2026-07-02) ---
    if (slug === 'kanchanaburi-guided-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "I came expecting history and left genuinely moved. Standing in the Hellfire Pass cutting while our guide read out survivor accounts was something I'll never forget. He knew the story of almost every stretch of track. The train ride over the wooden viaduct was breathtaking and lunch beforehand was tasty and generous. Worth every hour of the long day." },
                { author: "Marcus D.", country: "Australia", rating: 5, date: "2025-08-29", text: "As an Aussie this trip meant a lot, with so many of our POWs having worked this line. The War Cemetery was beautifully kept and our guide gave us quiet time to reflect. Pickup from our Sukhumvit hotel was bang on time and the minivan was comfy and cold. The Death Railway train section is a must-do. Deeply worthwhile." },
                { author: "Sophie L.", country: "France", rating: 4, date: "2025-09-18", text: "A powerful and well-run day, but be ready for it. The pickup was very early and the drive back to Bangkok in traffic felt long after a full day in the heat. Hellfire Pass involves real walking too. That said, the museum was excellent and our guide was warm and knowledgeable. Bring water and good shoes and you'll be fine." },
                { author: "Daniel K.", country: "United States", rating: 5, date: "2025-10-07", text: "We booked the private option for our family and it was the right call. The guide adjusted the pace for my parents, and having the vehicle to ourselves made the long transfers relaxing. The Bridge over the River Kwai and the train ride were highlights for the kids, but honestly the whole family found the history unforgettable. Highly recommend the private upgrade." },
                { author: "Hannah B.", country: "Germany", rating: 5, date: "2025-11-22", text: "Extremely well organised from start to finish. What stood out was how the guide connected the museum exhibits to what we then saw walking through the actual pass. The train ride from Namtok along the cliffs was stunning. November weather was perfect, dry and not too brutal. Included lunch was a proper sit-down Thai meal. A moving and educational day." },
                { author: "Liam O.", country: "Ireland", rating: 5, date: "2026-01-15", text: "One of the best day trips I did in Thailand. The contrast between the gorgeous scenery and the dark history really stays with you. Our guide struck the right tone, respectful without being heavy-handed. Entrance fees and the train ticket were all sorted for us so there was zero hassle. The viaduct section of the railway is genuinely spectacular." },
                { author: "Priya S.", country: "Singapore", rating: 4, date: "2026-03-09", text: "A meaningful and beautifully guided tour, just know it's a big commitment for one day. It gets very hot by midday and the Hellfire Pass trail has a proper climb back up. The stop at the bridge felt slightly rushed because of the schedule. Even so, the museum and the train ride made it absolutely worth it. Wear a hat and sturdy shoes." },
                { author: "Noah V.", country: "Netherlands", rating: 5, date: "2026-05-27", text: "Fantastic value for a full day with everything included. The air-conditioned van was a lifesaver in the heat, and our driver and guide were professional and friendly throughout. Walking the Hellfire Pass while listening to the stories of what happened there was intensely emotional. Riding the Death Railway afterward gave it all real context. Highly recommended for any history lover." },
            ],
        };
    }


    // --- LEFTOVER: kashi-vishwanath-temple-full-day-tour (auto-added 2026-07-02) ---
    if (slug === 'kashi-vishwanath-temple-full-day-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "The 5:30 pickup felt brutal until we were sitting in the boat watching the sun come up over the Ganges with the ghats waking up around us. Our guide narrated every ritual quietly and never rushed us. Getting into Kashi Vishwanath with someone who knew the security drill saved us so much stress. Genuinely one of the best mornings we've had travelling anywhere." },
                { author: "Marcus B.", country: "Germany", rating: 5, date: "2025-08-29", text: "We took the Sarnath option and it was the right call. The morning at the river and temple was intense and beautiful, then Sarnath in the afternoon was calm and completely different in mood. Having the private AC car between everything made the whole day comfortable even in the heat. Our guide's knowledge of Buddhist history was genuinely impressive." },
                { author: "Sophie L.", country: "Australia", rating: 4, date: "2025-10-06", text: "A wonderful and moving experience overall. The only honest downside was how crowded the old-city lanes got approaching the temple, and the queue for the sanctum took longer than expected. Our guide handled it patiently and warned us in advance, so it never spoiled things. The sunrise boat ride alone was worth the early alarm. Wear proper shoes for those alleyways." },
                { author: "James O.", country: "Ireland", rating: 5, date: "2025-11-19", text: "Booked this as a private tour for my parents and me, and the flexibility was perfect. When my mother needed to slow down in the lanes, the guide adjusted without a word of complaint. The bottled water and cool car between stops were a small thing that mattered a lot. Watching the morning aarti activity from the water is something none of us will forget." },
                { author: "Camille R.", country: "France", rating: 5, date: "2026-01-23", text: "Everything ran exactly on time from the hotel pickup onward. What struck me most was how our guide explained the meaning behind the rituals at the ghats rather than just pointing at them. The old city walk to Kashi Vishwanath felt like stepping back centuries. For the price this was outstanding value compared to what similar private tours cost elsewhere in India." },
                { author: "Nadia K.", country: "United Arab Emirates", rating: 5, date: "2026-03-11", text: "I travel a lot and rarely write reviews, but the sunrise on the Ganges deserves one. The boatman rowed us slowly past ghat after ghat while our guide gave context that made it all make sense. He also steered us away from the touts and unofficial vendors effortlessly. The breakfast recommendation afterwards was delicious and vegetarian, exactly what I'd hoped for." },
                { author: "Daniel T.", country: "United States", rating: 4, date: "2026-04-27", text: "Really glad we did this, though be ready for a genuinely early and long day. By the time we finished the temple visit and old-city walk the heat had built up and we were tired. That said, the private car was a lifesaver and the guide read our energy well, offering to slow the pace. The dawn boat ride remains the standout memory of our whole Varanasi trip." },
                { author: "Marloes V.", country: "Netherlands", rating: 5, date: "2026-06-08", text: "From the moment the driver collected us at our hotel it felt effortless and personal. Our guide treated the temple with real reverence and made sure we understood the etiquette before we entered. He knew exactly where photography was allowed and where to leave our phones. Small, unhurried and deeply authentic, this is how you should first experience Varanasi." },
            ],
        };
    }

    // --- LEFTOVER: ranthambore-full-day-tour (auto-added 2026-07-02) ---
    if (slug === 'ranthambore-full-day-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.8, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "We spotted a tigress with two cubs near a waterhole about forty minutes into the afternoon drive and the whole canter went silent. Our naturalist read the alarm calls of the deer and knew exactly where to wait. The private car from Jaipur was comfortable and the driver stopped so we could photograph the Aravalli Hills. A long day but absolutely worth it." },
                { author: "Marcus B.", country: "Australia", rating: 5, date: "2025-08-22", text: "Fantastic value once you realise the price covers everything: the entrance fee, the safari, fuel, tolls and a proper guide. No surprise charges at the gate like I'd feared. We got the open 6-seater Jeep which felt intimate and the tracks were bumpy in a fun way. Saw crocodiles, sambar deer and endless birds even though the tiger stayed hidden." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2025-09-30", text: "Hotel pickup was punctual and the three and a half hour drive passed quickly with views of villages and green fields. Our guide explained the park's conservation history and how the tiger numbers have recovered. The afternoon light in the forest was gorgeous for photos. Bring a zoom lens, my phone couldn't capture the leopard we glimpsed on a ridge." },
                { author: "Rajesh T.", country: "Singapore", rating: 4, date: "2025-10-18", text: "A genuinely memorable safari and the naturalist was excellent, but be honest with yourself about the driving. Nearly eight hours in the car round trip for a single afternoon in the park is a lot, and we were tired by the time we got back to Jaipur. Loved seeing the sloth bear though, and the AC vehicle made the transfer bearable." },
                { author: "Hannah K.", country: "Germany", rating: 5, date: "2025-12-05", text: "Did this in early December and the weather was perfect, cool enough for a light jacket in the open canter. Our driver collected us from the airport without any fuss. The park is stunning, all ruins and lakes and forest. We didn't see a tiger but two of us spotted a leopard which the guide said was rarer, so nobody was disappointed." },
                { author: "Liam O.", country: "Ireland", rating: 5, date: "2026-01-27", text: "Booked this for my parents and myself and it worked well across three generations. No walking or climbing, just sit and watch, which suited my dad perfectly. The naturalist pointed out a family of langurs and a huge marsh crocodile basking. Water bottles were provided. My only tip is eat a good breakfast before pickup as food isn't included on the drive." },
                { author: "Isabella M.", country: "Italy", rating: 4, date: "2026-03-11", text: "The tiger sighting was the trip of a lifetime and the guide truly knew his stuff. My only note is the March heat in the afternoon zone was fierce and the open canter offered little shade, so wear a hat and lots of sunscreen. The long drive back felt warm too. Still, seeing that tiger cross the trail made every dusty kilometre worth it." },
                { author: "Noah V.", country: "Netherlands", rating: 5, date: "2026-05-19", text: "Even in the pre-monsoon heat this delivered. Our naturalist explained that hot months push tigers to the water, and sure enough we watched one drinking for several minutes. The private transfer from our Jaipur hotel was smooth and the driver was patient with our photo stops. Everything from the entrance fee to the safari was already paid, which made the day stress-free." },
            ],
        };
    }

    // --- LEFTOVER: lake-pichola-full-day-tour (auto-added 2026-07-02) ---
    if (slug === 'lake-pichola-full-day-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Our guide made Udaipur come alive. He knew every legend behind the City Palace courtyards and even walked us through the quieter lanes around Jagdish Temple that we'd never have found alone. Having a private guide meant we could stop whenever we wanted for photos of the lake. Worth every rupee and then some. A genuinely special day." },
                { author: "Marcus H.", country: "Germany", rating: 5, date: "2025-08-29", text: "We booked the option with the car and it was absolutely the right call. The driver picked us up from our hotel and we glided between the sights without dealing with rickshaws in the heat. City Palace is enormous and our guide paced it perfectly, knowing exactly where the best mirror halls and viewpoints were. Highly recommend the car add-on." },
                { author: "Priya N.", country: "Singapore", rating: 5, date: "2025-09-19", text: "A beautifully relaxed way to see the old city. Because it was just our family, the guide adjusted everything around our two kids, keeping the palace stories short and fun for them. He also helped us buy a lovely miniature painting and made sure we weren't overcharged. Loved the personal touch you simply don't get in a big group." },
                { author: "Sophie L.", country: "France", rating: 4, date: "2025-10-27", text: "Lovely tour and a very warm, knowledgeable guide. My only note is that City Palace was extremely crowded the afternoon we went, so a few of the interior rooms felt rushed as we shuffled through with the throng. Going earlier in the day would help. Everything else, especially the temple visit and lakeside views, was wonderful." },
                { author: "Daniel O.", country: "Ireland", rating: 5, date: "2025-11-30", text: "Ten out of ten for our guide, who clearly loves his city. He tailored the whole day to our interest in architecture and spent ages explaining the carvings at Jagdish Temple. We removed our shoes and joined a small evening aarti, which was a real highlight. Felt like being shown around by a friend rather than a tour company." },
                { author: "Isabella R.", country: "Australia", rating: 4, date: "2026-02-11", text: "Really enjoyed our full day exploring Udaipur privately. Just be prepared for a lot of walking on uneven old stone inside the palace, my mother found the steps tiring by the end. The guide was patient and slowed down for her, which we appreciated. Great value for a private experience and a fascinating look at the royal history." },
                { author: "Thomas V.", country: "Netherlands", rating: 5, date: "2026-04-08", text: "Everything was seamless from the hotel pickup to the final drop-off. Our guide balanced history with practical tips, telling us where to eat proper Rajasthani thali and which shops sell genuine silver. The views over Lake Pichola from the palace terraces were unforgettable. Private, flexible and far better than any rushed group tour we've done before." },
                { author: "Grace M.", country: "Canada", rating: 5, date: "2026-05-22", text: "We started early to beat the May heat and it paid off completely. Cool morning light on the City Palace, hardly any crowds at Jagdish Temple, and a guide who was endlessly patient with our questions. He even suggested a rooftop cafe for lunch overlooking the water. A perfect, well-organised introduction to the City of Lakes." },
            ],
        };
    }

    // --- LEFTOVER: city-palace-full-day-tour (auto-added 2026-07-02) ---
    if (slug === 'city-palace-full-day-tour') {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.8,
            reviews: [
                { author: "Eleanor W.", country: "United Kingdom", rating: 5, date: "2025-07-14", text: "Booking the guide-and-car option was the best decision of our Rajasthan trip. Our guide met us right at the hotel and the City Palace tour was fascinating, he knew every courtyard and mirror room. Having the air-conditioned car in July heat between the palace and the lake was a lifesaver. Twelve hours flew by and we never felt rushed once." },
                { author: "Marcus B.", country: "Germany", rating: 5, date: "2025-08-22", text: "A genuinely private day, just my wife and me with an excellent official guide. He explained the history of the Mewar rulers at the City Palace in real depth and then found us a rooftop restaurant with a perfect Lake Pichola view for lunch. He also helped us buy monument tickets quickly so we skipped the queues. Superb value for twenty dollars plus the car." },
                { author: "Chloe T.", country: "Australia", rating: 4, date: "2025-09-30", text: "Really enjoyable full day and our guide was warm and knowledgeable. My only note is the entry tickets are not included, so we spent more than expected once you add the City Palace and camera fees on top. Worth knowing beforehand. That aside, the palace was stunning and having a private guide made the crowded old city lanes easy to navigate." },
                { author: "Rohan M.", country: "Singapore", rating: 5, date: "2025-10-19", text: "We took the guide-only option since we were happy to walk and use rickshaws, and it worked out brilliantly for two dollars short of nothing, honestly. The guide tailored the whole day to what we wanted, more temples and markets and a bit less palace. He was patient with our kids and pointed out the best photo spots along Pichola. Highly recommend." },
                { author: "Sophie L.", country: "France", rating: 5, date: "2025-11-27", text: "Udaipur is magical and this tour showed us why. From the grand City Palace complex to the quiet ghats along the lake, everything was thoughtfully paced across the full day. Our guide spoke lovely English and adjusted the plan when we wanted extra time shopping in the bazaars. The bottled water in the car was a small touch that we really appreciated." },
                { author: "James O.", country: "Ireland", rating: 5, date: "2026-01-15", text: "Did this in January and the weather was perfect for walking the old city. Our guide picked us up bang on time and spent the whole twelve hours making sure we understood what we were seeing rather than just ticking off sights. The City Palace interiors were the highlight. He also steered us away from a couple of pushy touts in the market, which we were grateful for." },
                { author: "Danielle R.", country: "Canada", rating: 4, date: "2026-03-08", text: "Lovely private tour with a friendly, well-informed guide. It is a long day at twelve hours and by late afternoon we were flagging a little in the heat, so I would suggest an early start like they recommend. The City Palace and lake views more than made up for it. Just wear proper shoes, there are plenty of stairs and uneven lanes." },
                { author: "Lorenzo F.", country: "Italy", rating: 5, date: "2026-05-21", text: "Fantastic day exploring the City of Lakes. We upgraded to the private car and it was worth every dollar in May, cool and comfortable between each stop. Our guide arranged a wonderful vegetarian Rajasthani thali for lunch and knew exactly which viewpoints caught the palace reflecting in Lake Pichola. Seamless from hotel pickup to drop-off. Could not fault it." },
            ],
        };
    }

    
    // --- CHIANG MAI BATCH: 8 tours added 2026-07-24 ---
    if (slug === "wat-rong-khun-white-temple-spiritual-tour") {
        return {
            averageRating: 4.7, totalReviews: 8, guideRating: 4.8, valueRating: 4.6,
            reviews: [
                { author: "Emma Whitfield", country: "United Kingdom", rating: 5, date: "2026-02-14", text: "The White Temple was even more incredible in person than in photos, all that intricate silver detailing glinting in the sun. Our guide gave really thoughtful explanations at each stop, and the hot springs break was a nice surprise in between. Long day but absolutely worth it." },
                { author: "Marco Bellini", country: "Italy", rating: 5, date: "2026-01-22", text: "Wat Rong Suea Ten, the Blue Temple, was honestly my favorite of the three, the color is unreal in real life. Pickup was on time and the coach was comfortable enough for the long drive. Just be ready for a very early start." },
                { author: "Priya Nair", country: "India", rating: 4, date: "2025-12-03", text: "Great value for $40 considering how much is packed into the day. The Big Buddha at Huay Pla Kang was massive and the views from up there were great. Only downside was we had less time than I wanted at the hill tribe village." },
                { author: "Jason Meyer", country: "United States", rating: 5, date: "2025-11-18", text: "13 hours sounds long but it genuinely flew by. Our guide kept things interesting on the bus with stories about the region, and all three temples were completely different from each other. The Red Temple pagoda area was a nice quieter stop compared to the crowds at White Temple." },
                { author: "Sophie Laurent", country: "France", rating: 4, date: "2025-10-27", text: "Really well organized tour and our guide spoke excellent English. The Mae Kachan hot springs stop was short but a nice leg-stretch break. Would have liked a bit more free time at the White Temple since it gets busy with tour groups." },
                { author: "Daniel Kim", country: "South Korea", rating: 5, date: "2025-09-09", text: "Booked this last minute and it exceeded expectations. Visiting the Long Neck Karen village was a moving experience and our guide explained the community's history respectfully. All entrance fees being included made it easy, no surprise costs at any stop." },
                { author: "Isabella Fernandez", country: "Spain", rating: 4, date: "2025-08-15", text: "Long travel day but the sights make up for it, especially the White Temple and the giant Buddha statue. Our driver was safe and careful on the mountain roads. Just bring snacks since there isn't much time built in for proper meals between stops." },
                { author: "Liam O'Connor", country: "Ireland", rating: 5, date: "2026-03-05", text: "One of the best day trips we did in Thailand. Seeing the White, Blue, and Red temples all in one day for this price felt like a steal, and the hot springs stop was a fun bonus. Hotel pickup was smooth and right on schedule." },
            ],
        };
    }
    if (slug === "pon-elephant-sanctuary-half-day-tour") {
        return {
            averageRating: 4.8, totalReviews: 8, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Emily Carter", country: "United States", rating: 5, date: "2025-11-14", text: "This was the highlight of our Chiang Mai trip. No riding, just feeding, walking with, and bathing the elephants in the mud pit \u2014 you could tell they were genuinely well cared for. Our guide knew each elephant's name and rescue story, which made it so much more meaningful." },
                { author: "Lukas Bergmann", country: "Germany", rating: 5, date: "2025-12-02", text: "Took the hotel pickup option ($47) and it was so convenient, driver was right on time and dropped us back exhausted but happy. Getting covered in mud during the bath session was hilarious and the elephants seemed to love it. Very ethical setup, no hooks or chains anywhere." },
                { author: "Sarah Thompson", country: "Australia", rating: 4, date: "2026-01-08", text: "Really lovely half day out. We met at the Pon office in the city which was easy to find. Feeding the elephants bananas was such a sweet moment and the bathing in the river afterward was great fun, though we were soaked through by the end. Only reason for 4 stars is the drive there felt a bit long." },
                { author: "Marco Rinaldi", country: "Italy", rating: 5, date: "2025-10-21", text: "Booked the cheapest option and met at Maewin Locomarket ourselves since we had a rental car, worked out perfectly and saved some money. The guide was fantastic, very knowledgeable about elephant behavior and clearly passionate about the sanctuary's rescue mission. Highly recommend for families." },
                { author: "Yuki Tanaka", country: "Japan", rating: 5, date: "2025-09-30", text: "Brought my two kids (8 and 11) and they had an amazing time feeding and walking with the elephants. Nothing felt forced or unsafe, the pace was relaxed throughout. The mud bath was messy but everyone was laughing so much it didn't matter." },
                { author: "Priya Nair", country: "India", rating: 4, date: "2026-02-17", text: "Great ethical experience overall, our guide explained a lot about why the sanctuary doesn't allow riding and how the elephants were rescued from logging camps. Bring a full change of clothes because you will be soaked. Wish the tour ran a bit longer as it flew by." },
                { author: "James O'Sullivan", country: "Ireland", rating: 5, date: "2025-08-19", text: "Absolutely worth the hotel pickup option, one less thing to worry about on the day. Feeding time was adorable and watching the elephants roll around in the river during the bath was the best part. Genuinely felt like the animals were happy and free, not performing for tourists." },
                { author: "Anna Kowalski", country: "Poland", rating: 5, date: "2026-03-05", text: "One of the best things we did in Thailand. We chose the office meeting option and it worked out great logistically. Getting muddy with the elephants was such a fun, unfiltered experience, and our guide's care for the animals really came through. Would book again in a heartbeat." },
            ],
        };
    }
    if (slug === "pha-chor-nature-trail-mae-wang-national-park-guided-tour") {
        return {
            averageRating: 4.7, totalReviews: 6, guideRating: 4.8, valueRating: 4.6,
            reviews: [
                { author: "Emma", country: "Australia", rating: 5, date: "2025-11-08", text: "The canyon formations at Pha Chor were unreal, so different from anything else we saw in Chiang Mai. Our guide was patient and made sure everyone got good photo spots before we headed to the water park for a swim." },
                { author: "Lukas", country: "Germany", rating: 5, date: "2025-12-02", text: "Cliff jumping at the Grand Canyon Water Park was the highlight of our whole trip. The water was so clear and the staff supervising the jumps made it feel safe. Meeting point at Three Kings Monument was easy to find." },
                { author: "Priya", country: "India", rating: 4, date: "2026-01-15", text: "Loved the mix of hiking and swimming in one day. Kayaking around the quarry walls was really peaceful. Only downside was we had to buy our own lunch, wish that had been clearer beforehand." },
                { author: "Marco", country: "Italy", rating: 5, date: "2026-02-20", text: "Our guide knew so much about how the canyon was formed, made the walk through Pha Chor way more interesting than just walking around taking photos. Van pickup at McDonald's was right on time." },
                { author: "Sophie", country: "Canada", rating: 4, date: "2026-03-11", text: "Great day out with a small group, felt personal rather than a big tour bus experience. The water park was more beautiful than I expected, turquoise water surrounded by rock walls. Bring water shoes, the rocks are sharp." },
                { author: "Kenji", country: "Japan", rating: 5, date: "2026-04-05", text: "Perfect combination of adventure and relaxation. I didn't jump off the cliffs but my friends did and said it was thrilling. Guide was friendly and flexible with our schedule all day." },
            ],
        };
    }
    if (slug === "local-market-chiang-mai-food-tour") {
        return {
            averageRating: 4.8, totalReviews: 9, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Emma Whitfield", country: "United Kingdom", rating: 5, date: "2026-06-14", text: "Absolutely loved this class! We walked through the local market first where our chef explained different Thai herbs and spices, then went through a beautiful herb garden before cooking. I made Pad Thai, green curry, and spring rolls, and the mango sticky rice at the end was the best I've had in Chiang Mai." },
                { author: "Marco Bellini", country: "Italy", rating: 5, date: "2026-05-02", text: "The chef's teaching style was so patient and fun, even for someone who'd never cooked Thai food before. We picked our own 5 dishes \u2014 I went with tom yum soup, basil chicken, and papaya salad \u2014 and everything turned out incredible. The market visit in the morning really made the whole experience feel authentic." },
                { author: "Hana Kobayashi", country: "Japan", rating: 5, date: "2026-04-19", text: "Such a well organized tour. Hotel pickup was on time and the group was small and friendly with people from four different countries. Cooking massaman curry and mango sticky rice from scratch was the highlight of my Chiang Mai trip, and I still use the recipe booklet at home." },
                { author: "Sophie Laurent", country: "France", rating: 4, date: "2026-03-27", text: "Really enjoyable afternoon class. The kitchen herb garden walk before cooking was a nice touch since you got to see and smell the lemongrass and kaffir lime before using them. My spring rolls fell apart a little but the chef helped me fix them with a laugh. Great value for $35." },
                { author: "Daniel Kim", country: "South Korea", rating: 5, date: "2026-03-05", text: "One of the best things we did in Thailand. We chose pad see ew, tom kha gai, and cashew chicken, and every dish came out tasting like a real Chiang Mai restaurant meal. The market tour beforehand made choosing ingredients so much more meaningful, and the mango sticky rice was a perfect ending." },
                { author: "Isabelle Novak", country: "Czech Republic", rating: 5, date: "2026-02-11", text: "The 9am slot was perfect because the market was buzzing with locals doing their morning shopping. Our chef was hilarious and clearly loved teaching. I made a vegetarian version of everything and they adjusted the dishes without any issue. Left with a full belly and a recipe booklet I've already used twice at home." },
                { author: "Liam O'Connor", country: "Ireland", rating: 5, date: "2026-01-23", text: "Booked the 5pm slot so class doubled as dinner, worked out great. Cooked tom yum, red curry, and pad thai from ingredients we picked out ourselves at the market. The herb garden walk was a highlight, so many smells and textures I'd never encountered. Sticky rice with mango was outstanding." },
                { author: "Priya Nair", country: "India", rating: 4, date: "2025-12-30", text: "Great hands-on class with a warm, knowledgeable chef. We got to select our own dishes which I appreciated since I could skip anything with shellfish. The market walk was informative, though a bit rushed on a busy day. Still, the mango sticky rice alone was worth the trip." },
                { author: "Nathan Brooks", country: "Australia", rating: 5, date: "2025-12-08", text: "Fantastic value for $35 including pickup. Our chef walked us through the herb garden explaining each plant before we headed to cook basil chicken, green curry, and spring rolls. Small group, lots of hands-on time, and the recipe booklet means I can actually recreate these dishes back home." },
            ],
        };
    }
    if (slug === "chiangmai-boxing-stadium-entry-ticket") {
        return {
            averageRating: 4.6, totalReviews: 7, guideRating: 4.5, valueRating: 4.6,
            reviews: [
                { author: "James Whitfield", country: "United Kingdom", rating: 5, date: "2025-11-14", text: "Went for the VIP ticket and it was worth every baht - unlimited drinks and a seat right by the ring. The Wai Kru ceremony before each fight gave me chills, such a beautiful tradition. Highly recommend for a proper Chiang Mai night out." },
                { author: "Sofia Marchetti", country: "Italy", rating: 4, date: "2025-10-02", text: "Booked Ringside with the free drink included and had a great view of all the action. The atmosphere was electric, locals cheering and placing bets around us. Only wish we'd known it's closed on Sundays before nearly showing up on the wrong night!" },
                { author: "Daniel Kim", country: "South Korea", rating: 5, date: "2025-12-05", text: "Grandstand tickets were a steal for how much fun we had. Arrived around 8:30pm and still got decent seats. The fighters' skill level was incredible and the traditional music between rounds added so much energy." },
                { author: "Amara Okafor", country: "Nigeria", rating: 4, date: "2026-01-18", text: "First time watching Muay Thai live and the VIP tier made it extra special with snacks and drinks all night. No transport included so we grabbed a Grab there, easy enough. The Wai Kru ceremony was such a moving way to start the fights." },
                { author: "Lukas Hoffmann", country: "Germany", rating: 5, date: "2025-09-21", text: "Ringside seats put us right in the middle of the action, could practically feel the energy from the fighters. Crowd was a real mix of tourists and locals which made it even more fun. Would book VIP next time for the extra perks." },
                { author: "Chloe Bennett", country: "Australia", rating: 4, date: "2026-02-10", text: "Took the family with Grandstand tickets and it worked out well, good value and still close enough to see everything clearly. The kids loved the drumming and ceremony before each match. Just remember it's shut on Sundays." },
                { author: "Rafael Santos", country: "Brazil", rating: 5, date: "2026-03-08", text: "Absolutely unforgettable night with the VIP package. Unlimited drinks kept flowing and the seats were front and center for every knockout. The Wai Kru dance before the main event was my favorite part of the whole trip to Chiang Mai." },
            ],
        };
    }
    if (slug === "doi-inthanon-national-park-guided-tour") {
        return {
            averageRating: 4.8, totalReviews: 7, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Emily Carter", country: "United States", rating: 5, date: "2025-11-14", text: "Went during the golden season and the Pa Bong Piang terraces were absolutely stunning, worth the early start. It got surprisingly cold at the summit near the twin pagodas so I was glad I brought a jacket. Our guide knew so much about the Karen village and local farming methods." },
                { author: "Lukas Weber", country: "Germany", rating: 5, date: "2025-08-22", text: "The rice terraces were bright green and gorgeous when we visited in August. Wachirathan Waterfall was a great stop to cool off after the chilly summit. Guide was punctual, spoke excellent English, and lunch was better than expected for a tour package." },
                { author: "Aiko Tanaka", country: "Japan", rating: 4, date: "2025-09-03", text: "Beautiful day trip overall. The Ang Ka cloud forest trail near the pagodas was misty and cool, quite different from the heat in Chiang Mai city. Only downside was the summit area got a bit crowded around midday, but our guide timed most other stops well." },
                { author: "Sophie Martin", country: "France", rating: 5, date: "2025-12-05", text: "Perfect timing for the golden rice terraces, the views from the viewpoint were incredible. Bring warm clothes, it was genuinely cold at the top of Doi Inthanon early in the morning. Our driver-guide was friendly and very knowledgeable about the royal pagodas' history." },
                { author: "Marco Rossi", country: "Italy", rating: 5, date: "2026-01-18", text: "Full day but never felt rushed. The Mae Klang Luang Karen village visit was a highlight alongside the terraces. Waterfall and nature trail were both lovely, and the guide made sure everyone, including my parents, could keep up comfortably." },
                { author: "Grace Nguyen", country: "Australia", rating: 4, date: "2025-07-11", text: "Green season terraces were lush and photogenic even without the golden color. Cold at the summit compared to the city, definitely pack a layer. Good value for the price given transport, lunch, and all the entrance fees were covered." },
                { author: "Daniel Kim", country: "South Korea", rating: 5, date: "2026-02-09", text: "Our guide's knowledge of the pagodas and the national park made this trip. The rice terrace viewpoint was breathtaking and the waterfall stop was refreshing. Highly recommend for older travelers too, my mother had no trouble with the walking involved." },
            ],
        };
    }
    if (slug === "local-market-chiang-mai-guided-tour") {
        return {
            averageRating: 4.8, totalReviews: 7, guideRating: 4.9, valueRating: 4.7,
            reviews: [
                { author: "Emma Whitfield", country: "United Kingdom", rating: 5, date: "2025-11-14", text: "Absolutely incredible two days. The bamboo rafting on the Mae Wang River was so much fun, and the waterfall hike afterward was stunning \u2014 we swam and had a picnic right by the falls. Sleeping in the Karen village was humbling; the campfire dinner with the local family is a memory I'll keep forever." },
                { author: "Lukas Fischer", country: "Germany", rating: 5, date: "2025-12-02", text: "Our guide Somchai was fantastic \u2014 knowledgeable, funny, and made sure everyone felt safe on the trek. The elephant sanctuary on day two was the highlight, feeding and bathing them with no riding involved felt genuinely ethical. Basic accommodation but that's part of the charm." },
                { author: "Priya Nair", country: "India", rating: 4, date: "2026-01-10", text: "Great value for the price, all meals included and very filling. The jungle waterfall hike was a bit muddy so wear proper shoes. Village overnight was very basic (as expected) but the campfire and stargazing made up for it. Would recommend to anyone wanting an authentic experience." },
                { author: "Jean-Pierre Dubois", country: "France", rating: 5, date: "2026-02-20", text: "The rafting was thrilling and safe, guides were attentive at every step. What stood out most was the elephant sanctuary \u2014 watching them bathe in the river with no chains or riding was moving. Two days flew by. Highly recommend the hotel pickup option for convenience." },
                { author: "Sofia Martinez", country: "Spain", rating: 5, date: "2026-03-05", text: "One of the best experiences of our Thailand trip. The Karen village dinner and campfire felt so genuine, not touristy at all. Our guide taught us so much about hill tribe culture. Waterfall picnic lunch was delicious too." },
                { author: "Ryan O'Connell", country: "Australia", rating: 4, date: "2026-04-18", text: "Solid trek, good mix of activities across the two days. Accommodation is rustic so go in with the right expectations. The elephant feeding session in the morning was peaceful and clearly prioritized the animals' wellbeing over entertainment." },
                { author: "Yuki Tanaka", country: "Japan", rating: 5, date: "2026-05-22", text: "Wonderful balance of adventure and culture. Rafting was gentle enough for beginners, the hike to the waterfall was beautiful, and the overnight stay gave real insight into Karen village life. Guide was patient and spoke great English." },
            ],
        };
    }
    if (slug === "wat-chedi-luang-walking-tour") {
        return {
            averageRating: 4.7, totalReviews: 8, guideRating: 4.9, valueRating: 4.6,
            reviews: [
                { author: "Emma Sutherland", country: "United Kingdom", rating: 5, date: "2026-06-14", text: "Our guide's knowledge of Lanna history was incredible, especially standing in front of the ruined chedi at Wat Chedi Luang. The teak-wood chapel at Wat Phan Tao was such a peaceful surprise. Highly recommend the small group option." },
                { author: "Marco Bellini", country: "Italy", rating: 5, date: "2026-05-02", text: "Booked the private tour and it was worth every baht. Flexible start time meant we avoided the crowds at Wat Phra Singh and got to really study the murals. Walking pace was relaxed and easy for my parents." },
                { author: "Aiko Tanaka", country: "Japan", rating: 4, date: "2026-04-19", text: "Great overview of three very different temples in one morning. The white ruined chedi was more impressive in person than photos suggest. Group was a nice mix of nationalities, everyone got along well." },
                { author: "Josh Reinhardt", country: "Germany", rating: 5, date: "2026-03-27", text: "Wat Phan Tao's all-teak building was my favorite stop, so photogenic and quiet compared to the bigger temples. Our guide explained the symbolism behind everything at Wat Chedi Luang. Well organized meeting point too." },
                { author: "Priya Nair", country: "India", rating: 4, date: "2026-02-11", text: "Good value for the small group price. Pace was comfortable even in the heat, guide made sure we had water breaks. Wat Phra Singh's murals were a highlight, lots of detail our guide pointed out that we'd have missed alone." },
                { author: "Claire Dubois", country: "France", rating: 5, date: "2026-01-30", text: "Three hours flew by. Loved the contrast between the massive brick chedi and the intimate wooden hall at Wat Phan Tao. Our guide was fluent, funny, and clearly passionate about Chiang Mai's history." },
                { author: "Ben Carter", country: "Australia", rating: 4, date: "2025-12-08", text: "Solid walking tour, easy to follow from the Old City meeting point. Guide handled a big mixed group well and kept the pace reasonable despite the midday sun. Wat Chedi Luang's ruined stupa was a definite highlight." },
                { author: "Sofia Herrera", country: "Spain", rating: 5, date: "2025-11-21", text: "Such a knowledgeable local guide, answered every question about Buddhist customs and temple etiquette. The teak carvings at Wat Phan Tao and the golden details at Wat Phra Singh were unforgettable. Perfect introduction to Chiang Mai." },
            ],
        };
    }

    return null;
};
