import type { CityInfoData } from './cityInfoContent';

export function getBoracayInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "is-island-hopping-worth-it-boracay":
            return {
                title: "Is Island Hopping Worth It in Boracay?",
                description: "An honest look at Boracay's island hopping and snorkeling tour, the single most popular way to see the island's surrounding reefs and smaller islets.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/boracay-island-hopping-with-snorkeling-and/img0/1600.webp",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "This is genuinely Boracay's most popular tour, hopping between snorkeling spots and smaller surrounding islets by traditional outrigger boat, covering more of the area's coastline in a single morning or afternoon than you could reach on your own.",
                        tourCard: { slug: "boracay-island-hopping-with-snorkeling-and", title: "Boracay Island Hopping with Snorkeling", description: "An island hopping tour with snorkeling stops around Boracay.", price: "From $36", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/boracay-island-hopping-with-snorkeling-and/img0/1600.webp" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Bring reef-safe sunscreen and your own snorkel mask if you have one — rental gear quality on shared boats varies.",
                    },
                ],
                faqs: [
                    { q: "Is island hopping worth it in Boracay?", a: "Yes, it's the island's single most popular tour, covering more coastline and snorkeling spots than you'd reach independently." },
                ],
            };

        case "is-whale-shark-watching-worth-it-boracay":
            return {
                title: "Is Whale Shark Watching Worth It in Boracay?",
                description: "An honest look at Boracay's whale shark watching tour, a genuine wildlife encounter with the ocean's largest fish.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/boracay-whale-shark-watching-with-transfer/img0/1600.webp",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Whale sharks are the largest fish in the ocean, and this tour gives a genuine chance to swim alongside one, a real wildlife highlight distinct from Boracay's usual beach and party-boat activities, with transfer included.",
                        tourCard: { slug: "boracay-whale-shark-watching-with-transfer", title: "Boracay Whale Shark Watching with Transfer", description: "A whale shark watching tour with transfer included.", price: "From $99", duration: "6 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/boracay-whale-shark-watching-with-transfer/img0/1600.webp" },
                    },
                    {
                        title: "Practical Tips",
                        content: "No sighting is ever guaranteed in open water, and whale shark feeding practices vary by operator — ask about their approach if that matters to you.",
                    },
                ],
                faqs: [
                    { q: "Is whale shark watching worth it in Boracay?", a: "Yes, for a genuine wildlife encounter with the ocean's largest fish, a real highlight distinct from the island's usual beach activities." },
                ],
            };

        case "is-paraw-sunset-sailing-worth-it-boracay":
            return {
                title: "Is Paraw Sunset Sailing Worth It in Boracay?",
                description: "An honest look at the traditional paraw sunset sailing trip, a quieter way to see Boracay's coastline than a motorized party boat.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/boracay-sunset-paraw-sailing-trip/img0/1600.webp",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "A paraw is a traditional Filipino double-outrigger sailboat, and sailing one at sunset gives a genuinely quieter, more scenic way to see Boracay's coastline than the island's motorized party boats, a short but memorable activity.",
                        tourCard: { slug: "boracay-sunset-paraw-sailing-trip", title: "Boracay Sunset Paraw Sailing Trip", description: "A traditional paraw sailboat trip at sunset.", price: "From $82", duration: "30 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/boracay-sunset-paraw-sailing-trip/img0/1600.webp" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Book a sunset departure specifically — the lighting is a genuine part of the appeal, more than the sailing itself.",
                    },
                ],
                faqs: [
                    { q: "Is paraw sailing worth it in Boracay?", a: "Yes, for a genuinely quieter, more scenic way to see the coastline than the island's usual motorized party boats." },
                ],
            };

        case "is-fire-dancing-show-worth-it-boracay":
            return {
                title: "Is the Fire Dancing Show Worth It in Boracay?",
                description: "An honest look at the fire dancing show at Red Coconut Beach, a short, inexpensive evening spectacle along the island's main strip.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/borocay-fire-dancing-show-at-red-coconut-beach/img0/1600.webp",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "This short fire dancing performance on the beach is a genuinely inexpensive, low-commitment evening activity, the kind of spontaneous beachfront show that's part of Boracay's nightlife atmosphere rather than a formal ticketed attraction.",
                        tourCard: { slug: "borocay-fire-dancing-show-at-red-coconut-beach", title: "Fire Dancing Show at Red Coconut Beach", description: "A fire dancing show on the beach in Boracay.", price: "From $5", duration: "15 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/borocay-fire-dancing-show-at-red-coconut-beach/img0/1600.webp" },
                    },
                    {
                        title: "Practical Tips",
                        content: "A good quick add-on to an evening beach walk rather than a planned destination on its own.",
                    },
                ],
                faqs: [
                    { q: "Is the fire dancing show worth it in Boracay?", a: "Yes, as a genuinely inexpensive, low-commitment part of the island's beachfront evening atmosphere." },
                ],
            };

        case "is-helmet-diving-worth-it-boracay":
            return {
                title: "Is Helmet Diving Worth It in Boracay?",
                description: "An honest look at helmet diving in Boracay, an underwater walking experience that needs no swimming ability or diving certification.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/boracay-helmet-diving-experience-with-photos-and/img0/1600.webp",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Helmet diving uses a weighted helmet with a constant air supply, letting you walk along the seabed and see the reef up close without needing to swim or hold your breath, a genuinely accessible underwater activity for non-swimmers and non-divers alike.",
                        tourCard: { slug: "boracay-helmet-diving-experience-with-photos-and", title: "Boracay Helmet Diving Experience with Photos", description: "A helmet diving experience with underwater photos included.", price: "From $25", duration: "20 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/boracay-helmet-diving-experience-with-photos-and/img0/1600.webp" },
                    },
                    {
                        title: "Practical Tips",
                        content: "No swimming ability or diving certification is needed — this is genuinely accessible to non-swimmers, unlike scuba diving or snorkeling.",
                    },
                ],
                faqs: [
                    { q: "Do you need to know how to swim for helmet diving?", a: "No, the weighted helmet and constant air supply let you walk the seabed without swimming, making it accessible to non-swimmers." },
                ],
            };

        case "is-parasailing-worth-it-boracay":
            return {
                title: "Is Parasailing Worth It in Boracay?",
                description: "An honest look at parasailing in Boracay, a quick aerial view of the island's coastline and turquoise water from above.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/boracay-parasailing-with-free-insta-360/img0/1600.webp",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Parasailing gives a genuinely different aerial perspective on Boracay's turquoise water and White Beach coastline than anything from the water or sand, a short but memorable thrill with photos usually included.",
                        tourCard: { slug: "boracay-parasailing-with-free-insta-360", title: "Boracay Parasailing with Free Insta 360", description: "A parasailing experience with free 360 camera footage.", price: "From $82", duration: "15 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/boracay-parasailing-with-free-insta-360/img0/1600.webp" },
                    },
                    {
                        title: "Practical Tips",
                        content: "At 15 minutes this is a quick add-on activity — pair it with a beach day rather than planning a whole outing around it.",
                    },
                ],
                faqs: [
                    { q: "Is parasailing worth it in Boracay?", a: "Yes, for a genuinely different aerial perspective on the island's turquoise water and coastline, even though it's a short activity." },
                ],
            };

        case "is-shooting-range-worth-it-boracay":
            return {
                title: "Is the Shooting Range Worth It in Boracay?",
                description: "An honest look at Boracay's shooting range experience, an off-beach activity for travelers who want to try firearms on vacation.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/boracay-shooting-range-experience-with-transfers/img0/1600.webp",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "This is a genuine novelty activity rather than anything connected to Boracay's beaches or water, a supervised range session with instruction included and transfers handled, which makes it an easy half-day add-on if you specifically want the experience rather than a typical island highlight.",
                        tourCard: { slug: "boracay-shooting-range-experience-with-transfers", title: "Boracay Shooting Range Experience with Transfers", description: "A supervised shooting range experience with hotel transfers included.", price: "From $139", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/boracay-shooting-range-experience-with-transfers/img0/1600.webp" },
                    },
                    {
                        title: "Practical Tips",
                        content: "This is priced well above most Boracay water activities, so it's worth it specifically for travelers who want the novelty, not as a general-purpose island excursion.",
                    },
                ],
                faqs: [
                    { q: "Is the shooting range worth it in Boracay?", a: "Yes, for travelers who specifically want a supervised firearms experience, though it's priced well above the island's typical water activities." },
                ],
            };

        case "is-jet-ski-rental-worth-it-boracay":
            return {
                title: "Is Jet Ski Rental Worth It in Boracay?",
                description: "An honest look at renting a jet ski in Boracay, a self-driven alternative to the island's guided boat tours.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/boracay-jet-ski-rental-with-insta360-camera/img0/1600.webp",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Unlike Boracay's guided island hopping and party boats, this puts you in control of the craft yourself, with an Insta360 camera included to capture the ride, a genuinely different kind of thrill from passively riding along on a tour.",
                        tourCard: { slug: "boracay-jet-ski-rental-with-insta360-camera", title: "Boracay Jet Ski Rental with Insta360 Camera", description: "A self-driven jet ski rental with an Insta360 camera included.", price: "From $119", duration: "30 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/boracay-jet-ski-rental-with-insta360-camera/img0/1600.webp" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Sessions tend to be short relative to the price, so treat this as a one-off thrill rather than an extended outing.",
                    },
                ],
                faqs: [
                    { q: "Is jet ski rental worth it in Boracay?", a: "Yes, for a self-driven thrill that's genuinely different from the island's guided boat tours, though sessions are short." },
                ],
            };

        case "is-filipino-cooking-class-worth-it-boracay":
            return {
                title: "Is the Filipino Cooking Class Worth It in Boracay?",
                description: "An honest look at Boracay's Filipino cooking class, a hands-on way to learn local dishes beyond the island's beach and water activities.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/boracay-filipino-cooking-class-with-local/img0/1600.webp",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "This is a genuine break from Boracay's water-heavy activity lineup, a hands-on class with a local instructor that teaches real Filipino dishes you'll actually cook and eat, a good fit for travelers who want a cultural activity between beach days.",
                        tourCard: { slug: "boracay-filipino-cooking-class-with-local", title: "Boracay Filipino Cooking Class with Local Instructor", description: "A hands-on Filipino cooking class led by a local instructor.", price: "From $87", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/boracay-filipino-cooking-class-with-local/img0/1600.webp" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Go in with an appetite — you'll be eating what you cook, so this works best as a lunch or early dinner slot.",
                    },
                ],
                faqs: [
                    { q: "Is the Filipino cooking class worth it in Boracay?", a: "Yes, for a genuine hands-on cultural activity that's a good break from the island's water-heavy tour lineup." },
                ],
            };

        case "is-scuba-diving-intro-worth-it-boracay":
            return {
                title: "Is the Scuba Diving Intro Worth It in Boracay?",
                description: "An honest look at Boracay's introduction to scuba diving, for travelers curious about diving without a full certification course.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/boracay-introduction-to-scuba-diving-experience/img0/1600.webp",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "This is a genuine taste of real scuba diving with an instructor guiding you underwater, distinct from helmet diving's walk-the-seabed approach, a good fit if you want to try proper diving before committing to a certification course.",
                        tourCard: { slug: "boracay-introduction-to-scuba-diving-experience", title: "Boracay Introduction to Scuba Diving Experience", description: "A beginner scuba diving experience with an instructor.", price: "From $61", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/boracay-introduction-to-scuba-diving-experience/img0/1600.webp" },
                    },
                    {
                        title: "Practical Tips",
                        content: "No certification is needed for this intro session, but check beforehand whether basic swimming ability is required, since it differs from the no-swimming-needed helmet diving option.",
                    },
                ],
                faqs: [
                    { q: "Do you need certification for this scuba diving intro in Boracay?", a: "No, it's an introductory session with an instructor, not a full certification course, though some swimming ability is typically expected." },
                ],
            };

        case "is-luna-spa-worth-it-boracay":
            return {
                title: "Is Luna Spa Worth It in Boracay?",
                description: "An honest look at the Luna Spa experience in Boracay, a relaxation option for travelers taking a break from the island's activity-packed schedule.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/boracay-luna-spa-experience/img0/1600.webp",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "After a few days of island hopping, parasailing, and party boats, a proper spa session is a genuinely welcome change of pace, and this one is priced reasonably for Boracay rather than at the premium often charged to tourists.",
                        tourCard: { slug: "boracay-luna-spa-experience", title: "Boracay Luna Spa Experience", description: "A relaxing spa experience in Boracay.", price: "From $54", duration: "1.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/boracay-luna-spa-experience/img0/1600.webp" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Book this for a rest day between water activities rather than stacking it on top of a packed itinerary — the point is to actually slow down.",
                    },
                ],
                faqs: [
                    { q: "Is Luna Spa worth it in Boracay?", a: "Yes, for a reasonably priced, genuine break from the island's activity-heavy schedule." },
                ],
            };

        default:
            return null;
    }
}
