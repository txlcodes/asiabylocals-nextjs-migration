
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    console.log('Fetching all approved tours...');
    const tours = await prisma.tour.findMany({
        where: { status: 'approved' },
        select: { id: true, slug: true, title: true, city: true, status: true }
    });
    console.log(JSON.stringify(tours, null, 2));
}
main().catch(console.error).finally(() => prisma.$disconnect());
