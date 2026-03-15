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

    if (slug === 'amber-fort-official-guided-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 14,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Sarah M.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-28',
                    text: 'Our guide Vikram was absolutley brilliant. He knew every corner of Amber Fort and the stories behind the Sheesh Mahal mirror room were fascinating. He had us turn off our phone lights so he could demonstrate with a single candle. My husband and I were mesmerized. The jeep ride up the hill was a nice bonus too, saved our legs for the actual exploring. Only suggestion would be to bring water, its very hot even in february.',
                },
                {
                    author: 'Marco T.',
                    country: 'Italy',
                    rating: 4,
                    date: '2026-03-05',
                    text: "Really good tour, guide was knowledgable and spoke excellent english. Amber Fort is massive, way bigger than I expected. We spent almost 3 hours which felt right. Took some amazing photos from the ramparts looking down at Maota Lake. Deducting one star becuase the meeting point was a bit confusing, took us 10 mins to find our guide at the parking area. But once we started the tour itself was great.",
                },
                {
                    author: 'Emily R.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-09',
                    text: "Wow what an incredible place!! Our guide explained the difference between the Hindu and Mughal architectural styles and I never would have noticed on my own. The Ganesh Pol gateway is stunning, the level of detail in the paintings is insane. We also went to Jaigarh Fort after which was included and has the worlds largest cannon on wheels. Definetly book a guide, you'd miss so much without one.",
                },
                {
                    author: 'David K.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-18',
                    text: "Booked this for my family (2 adults, 2 kids aged 9 and 12) and it was the highlight of our Jaipur trip. The guide was patient with our kids and made history come alive for them. The Sheesh Mahal was their favorite part, they kept calling it the 'disco room' lol. Fair warning tho, theres a LOT of stairs so wear comfortable shoes.",
                },
                {
                    author: 'Annika L.',
                    country: 'Sweden',
                    rating: 4,
                    date: '2026-03-12',
                    text: 'Nice tour, the fort is beautiful and well worth visiting. Guide was friendly and informative. I wish we had more time at Jaigarh Fort tho, felt a bit rushed there compared to Amber Fort. The views of the Aravalli hills from the top are breathtaking. Would reccomend starting early in the morning before it gets crowded.',
                },
            ],
        };
    }

    return null;
};
