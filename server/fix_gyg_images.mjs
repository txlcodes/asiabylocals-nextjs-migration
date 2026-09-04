// Re-host hotlinked GetYourGuide images on Cloudinary and update Tour.images.
// Usage:
//   node fix_gyg_images.mjs           -> DRY RUN (reports scale, writes nothing)
//   node fix_gyg_images.mjs --apply   -> performs upload + DB update (with backup)
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

const APPLY = process.argv.includes('--apply');
const GYG = 'cdn.getyourguide.com';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const prisma = new PrismaClient();

function parseImages(raw) {
  if (!raw) return [];
  try {
    const a = JSON.parse(raw);
    return Array.isArray(a) ? a : [];
  } catch {
    return [];
  }
}

async function main() {
  const tours = await prisma.tour.findMany({
    where: { images: { contains: GYG } },
    select: { id: true, title: true, city: true, images: true },
  });

  const totalGyg = tours.reduce(
    (n, t) => n + parseImages(t.images).filter((u) => typeof u === 'string' && u.includes(GYG)).length,
    0
  );

  console.log(`\n=== ${APPLY ? 'APPLY' : 'DRY RUN'} ===`);
  console.log(`Tours with hotlinked GYG images: ${tours.length}`);
  console.log(`Total GYG image URLs to re-host: ${totalGyg}`);
  for (const t of tours) {
    const imgs = parseImages(t.images);
    const g = imgs.filter((u) => typeof u === 'string' && u.includes(GYG)).length;
    console.log(`  #${t.id} [${t.city}] ${t.title.slice(0, 50)} — ${g}/${imgs.length} GYG`);
  }

  if (!APPLY) {
    console.log('\nDry run only. Re-run with --apply to upload + update.');
    await prisma.$disconnect();
    return;
  }

  // Backup before any write
  const stamp = process.env.RUN_STAMP || 'backup';
  const backupPath = `./gyg_images_backup_${stamp}.json`;
  fs.writeFileSync(backupPath, JSON.stringify(tours, null, 2));
  console.log(`\nBackup written: ${backupPath}`);

  let fixed = 0,
    uploaded = 0,
    failed = 0;
  for (const t of tours) {
    const imgs = parseImages(t.images);
    const newImgs = [];
    for (const url of imgs) {
      if (typeof url === 'string' && url.includes(GYG)) {
        try {
          const folder = `tours/${(t.city || 'misc').toLowerCase().replace(/\s+/g, '-')}`;
          const res = await cloudinary.uploader.upload(url, {
            folder,
            resource_type: 'image',
            transformation: [
              { width: 1920, height: 1080, crop: 'limit', quality: 'auto' },
              { fetch_format: 'auto' },
            ],
          });
          newImgs.push(res.secure_url);
          uploaded++;
        } catch (e) {
          console.error(`  ! upload failed for tour #${t.id}: ${e.message}`);
          newImgs.push(url); // keep original rather than lose the slot
          failed++;
        }
      } else {
        newImgs.push(url);
      }
    }
    await prisma.tour.update({
      where: { id: t.id },
      data: { images: JSON.stringify(newImgs) },
    });
    fixed++;
    console.log(`  ✓ updated tour #${t.id} (${t.title.slice(0, 40)})`);
  }

  console.log(`\nDone. Tours updated: ${fixed}, images uploaded: ${uploaded}, failures: ${failed}`);
  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
