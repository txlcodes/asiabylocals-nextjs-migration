import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient();

async function main() {
    // All Phuket tour IDs that were reassigned to cosmetic suppliers
    const tourIds = [235, 238, 241, 242, 244, 245, 287, 311, 312, 328, 329];

    for (const tourId of tourIds) {
        await prisma.tour.update({
            where: { id: tourId },
            data: { supplierId: 1 },
        });
        console.log(`✅ Tour [${tourId}] → supplierId back to 1 (Talha)`);
    }

    console.log('\n✅ All Phuket tours now route bookings to supplier 1 (Talha)');
}

main()
    .catch((e) => { console.error(e); process.exit(1); })
    .finally(async () => { await prisma.$disconnect(); });
