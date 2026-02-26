
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Starting typo fix...');

    // 1. Fix tour_options
    const tourOptions = await prisma.tourOption.findMany({
        where: {
            OR: [
                { optionDescription: { contains: 'officail', mode: 'insensitive' } },
                { optionTitle: { contains: 'officail', mode: 'insensitive' } }
            ]
        }
    });

    console.log(`Found ${tourOptions.length} tour options to fix.`);
    for (const option of tourOptions) {
        const newDescription = option.optionDescription.replace(/officail/gi, 'Official');
        const newTitle = option.optionTitle.replace(/officail/gi, 'Official');
        await prisma.tourOption.update({
            where: { id: option.id },
            data: {
                optionDescription: newDescription,
                optionTitle: newTitle
            }
        });
        console.log(`Updated tour option ID ${option.id}`);
    }

    // 2. Fix tours
    const tours = await prisma.tour.findMany({
        where: {
            OR: [
                { shortDescription: { contains: 'officail', mode: 'insensitive' } },
                { fullDescription: { contains: 'officail', mode: 'insensitive' } },
                { highlights: { contains: 'officail', mode: 'insensitive' } },
                { title: { contains: 'officail', mode: 'insensitive' } }
            ]
        }
    });

    console.log(`Found ${tours.length} tours to fix.`);
    for (const tour of tours) {
        const data: any = {};
        if (tour.shortDescription) {
            data.shortDescription = tour.shortDescription.replace(/officail/gi, 'official');
        }
        if (tour.title) {
            // Keep original casing for title if possible, but the typo is 'officail'
            data.title = tour.title.replace(/officail/gi, 'Official');
        }
        if (tour.fullDescription) {
            data.fullDescription = tour.fullDescription.replace(/officail/gi, 'official');
        }
        if (tour.highlights) {
            data.highlights = tour.highlights.replace(/officail/gi, 'Official');
        }

        await prisma.tour.update({
            where: { id: tour.id },
            data
        });
        console.log(`Updated tour ID ${tour.id}`);
    }

    console.log('Typo fix completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
