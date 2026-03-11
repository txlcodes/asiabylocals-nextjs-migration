import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
dotenv.config();
const prisma = new PrismaClient();
async function main() {
    const updated = await prisma.tour.update({
        where: { id: 180 },
        data: { images: JSON.stringify(['/taj-mahal-new.webp']) }
    });
    console.log('Tour 180 images fixed:', updated.images);
}
main().catch(e => { console.error(e); process.exit(1); }).finally(async () => { await prisma.$disconnect(); });
