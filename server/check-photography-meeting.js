
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const tour = await prisma.tour.findUnique({
        where: { slug: 'taj-mahal-photography-tour' }
    });
    console.log('Meeting Point:', tour?.meetingPoint);
    console.log('Included:', tour?.included);
}

main().catch(console.error).finally(() => prisma.$disconnect());
