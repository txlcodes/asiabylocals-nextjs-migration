
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
    // Tour 311: "Phuket Scuba Diving for Beginners – Full Day Racha Yai Island Dive Trip"
    const tour311 = await prisma.tour.update({
        where: { id: 311 },
        data: { slug: 'phuket-scuba-diving-beginners-full-day-racha-yai-island' }
    });
    console.log(`✅ Tour 311 slug updated to: ${tour311.slug}`);

    // Tour 312: "Private Surf Lesson at Kata Beach Phuket"
    const tour312 = await prisma.tour.update({
        where: { id: 312 },
        data: { slug: 'private-surf-lesson-kata-beach-phuket' }
    });
    console.log(`✅ Tour 312 slug updated to: ${tour312.slug}`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
