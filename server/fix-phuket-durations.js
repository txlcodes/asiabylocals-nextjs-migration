import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
    // Find all Phuket tours with wrong duration
    const phuketTours = await prisma.tour.findMany({
        where: { city: { equals: 'phuket', mode: 'insensitive' } },
        select: { id: true, title: true, slug: true, duration: true },
    });

    console.log(`Found ${phuketTours.length} Phuket tours:\n`);
    for (const t of phuketTours) {
        console.log(`  [${t.id}] "${t.title}" → duration: "${t.duration}"`);
    }

    // Fix Elephant Beach Experience
    const elephant = phuketTours.find(t => t.slug?.includes('elephant'));
    if (elephant) {
        await prisma.tour.update({
            where: { id: elephant.id },
            data: { duration: '30 minutes' },
        });
        console.log(`\n✅ [${elephant.id}] Elephant → 30 minutes`);
    }

    // Fix Muay Thai
    const muayThai = phuketTours.find(t => t.title?.toLowerCase().includes('muay thai'));
    if (muayThai) {
        await prisma.tour.update({
            where: { id: muayThai.id },
            data: { duration: '3 hours' },
        });
        console.log(`✅ [${muayThai.id}] Muay Thai → 3 hours`);
    }

    // Show any other tours with "6 days" or "6 hours"
    const badDurations = phuketTours.filter(t => t.duration?.includes('6'));
    if (badDurations.length > 0) {
        console.log(`\n⚠️ Other tours with '6' in duration:`);
        for (const t of badDurations) {
            console.log(`  [${t.id}] "${t.title}" → "${t.duration}"`);
        }
    }
}

main()
    .catch((e) => { console.error(e); process.exit(1); })
    .finally(async () => { await prisma.$disconnect(); });
