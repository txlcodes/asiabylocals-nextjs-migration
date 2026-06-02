// Auto-send post-tour review request emails.
// Runs on a timer: finds confirmed bookings whose tour date passed >= N days ago,
// that haven't been emailed and have no review yet, then emails the review link
// and stamps reviewRequestSentAt so it never double-sends.
import { PrismaClient } from '@prisma/client';
import { randomBytes } from 'crypto';
import { sendReviewRequestEmail } from './utils/email.js';

const prisma = new PrismaClient();
const DELAY_DAYS = Number(process.env.REVIEW_REQUEST_DELAY_DAYS || 1); // send N days after tour
const MAX_AGE_DAYS = 60; // don't email tours older than this

export async function sendDueReviewRequests() {
  const now = Date.now();
  const dueCutoff = now - DELAY_DAYS * 864e5; // tour date must be at/earlier than this
  const minCutoff = now - MAX_AGE_DAYS * 864e5; // ...but not ancient

  const candidates = await prisma.booking.findMany({
    where: {
      status: { in: ['confirmed', 'completed'] },
      reviewRequestSentAt: null,
      review: { is: null },
    },
    include: { tour: { select: { title: true, city: true, country: true } } },
  });

  let sent = 0, skipped = 0, failed = 0;
  for (const b of candidates) {
    const td = new Date(b.bookingDate).getTime();
    if (isNaN(td) || td > dueCutoff || td < minCutoff) { skipped++; continue; }
    try {
      let token = b.reviewToken;
      if (!token) {
        token = randomBytes(32).toString('hex');
        await prisma.booking.update({
          where: { id: b.id },
          data: { reviewToken: token, reviewTokenExpiresAt: new Date(now + 90 * 864e5) },
        });
      }
      const reviewUrl = `${process.env.FRONTEND_URL || 'https://www.asiabylocals.com'}/review/${token}`;
      await sendReviewRequestEmail(b.customerEmail, b.customerName, {
        tourTitle: b.tour.title, tourCity: b.tour.city, tourCountry: b.tour.country,
        bookingDate: b.bookingDate, reviewUrl,
      });
      await prisma.booking.update({ where: { id: b.id }, data: { reviewRequestSentAt: new Date() } });
      sent++;
      console.log(`✅ Auto review request sent: booking ${b.id} -> ${b.customerEmail}`);
    } catch (e) {
      failed++;
      console.error(`❌ Auto review request failed for booking ${b.id}:`, e.message);
    }
  }
  const summary = { candidates: candidates.length, sent, skipped, failed };
  console.log('📨 Review request sweep:', JSON.stringify(summary));
  return summary;
}

let started = false;
export function startReviewScheduler() {
  if (started) return;
  started = true;
  const SIX_H = 6 * 60 * 60 * 1000;
  setTimeout(() => sendDueReviewRequests().catch((e) => console.error('review sweep error:', e.message)), 30000);
  setInterval(() => sendDueReviewRequests().catch((e) => console.error('review sweep error:', e.message)), SIX_H);
  console.log(`🗓️  Review scheduler started (sweep every 6h, ${DELAY_DAYS}d after tour date)`);
}
