# CLAUDE.md

Guidance for AI assistants working in this repository.

## What this is

**AsiaByLocals** — a travel marketplace where suppliers (local guides / tour companies) list
tours and travellers book and pay for them. Two deployables in one repo:

| Part | Path | Stack | Hosted on |
|---|---|---|---|
| Frontend | `/app`, `/components`, `/lib` | Next.js 15 App Router, React 19, TypeScript, Tailwind 3 | Vercel |
| Backend API | `/server` | Express 4 (ESM), Prisma 5, PostgreSQL | Render |

The two are **separate services**, not a monolith. The frontend never touches the database —
it always talks to the Express API over `NEXT_PUBLIC_API_URL`. There are **no Next.js API
routes**; don't add one without a reason, put server logic in `server/server.js`.

The repo name says "nextjs-migration": this was a Vite + React SPA that was ported to the
Next.js App Router. The old SPA components are parked in `/legacy` for reference only —
they are excluded from `tsconfig.json` and are not built or shipped. Never edit `/legacy`
to fix a live bug; find the App Router equivalent in `/components`.

## Commands

```bash
# Frontend (repo root) — http://localhost:3000
npm install
npm run dev
npm run build          # also the Vercel build
npm run lint

# Backend (server/) — http://localhost:3001
cd server && npm install
npx prisma generate    # required after any schema.prisma change
npm run dev            # node --watch server.js
npm run prisma:migrate # create + apply a dev migration
npm run prisma:studio
```

`npm run server` from the root does install + generate + start for the backend in one go.

There is **no test suite** and no CI. Verification means `npm run build` (catches type and
prerender errors) plus manually exercising the affected page against a running backend.
The dozens of `server/test-*.js`, `check-*.js`, `fix-*.js` files are one-off operational
scripts run by hand against a live database — not tests. Don't run them speculatively; several
mutate production data.

## Routing model (the part that trips people up)

Public URLs are `/{country}/{city}/{slug}` — e.g. `/india/agra/taj-mahal-sunrise-tour`.
A single route file, `app/[country]/[city]/[slug]/page.tsx`, serves **two different page
types** and dispatches between them:

- If the slug is in one of the `*_INFO_SLUGS` arrays in `lib/constants.ts`
  (`AGRA_INFO_SLUGS`, `DELHI_INFO_SLUGS`, `JAIPUR_INFO_SLUGS`, `PHUKET_INFO_SLUGS`,
  `BANGKOK_INFO_SLUGS`, `KASHMIR_INFO_SLUGS`) → it's an **SEO info page**, content comes from
  `lib/cityInfoContent.ts` and renders via `CityInfoClient`.
- Otherwise → it's a **tour page**, fetched from `GET /api/public/tours/by-slug/:slug` and
  rendered via `TourDetailClient`.

Adding a new info page means adding the slug to the right array **and** the content entry
**and** the sitemap list. Miss one and the page 404s or goes unindexed.

Other route groups: `app/[country]` (country landing), `app/[country]/[city]` (city listing),
`app/tour/[id]`, `app/booking/[id]`, `app/booking-confirmation/[id]`, `app/review/[token]`,
`app/supplier` (supplier auth + dashboard), and `app/admin` / `app/secure-panel-abl` (the same
admin UI at two paths, both `robots: noindex`).

### Server/client split convention

Every route is a thin **server component** in `app/**/page.tsx` that owns `metadata`,
`revalidate`, data fetching and JSON-LD, and then renders a `*Client.tsx` component from
`/components` marked `'use client'` for the interactive UI. Keep it that way — moving fetching
or metadata into a client component silently kills SEO, which is the point of this codebase.

### ISR

Dynamic route pages set `export const revalidate = 60`. High-traffic tour and info slugs are
listed in `generateStaticParams()` in the `[slug]` and `[city]` pages so they prerender at
build time. When a tour's slug is prominent, add it there.

## Database

Prisma schema: `server/prisma/schema.prisma` (PostgreSQL). Models: `Supplier`, `Tour`,
`TourOption`, `Booking`, `Review`, `Message`, `Tourist`, `EmailSubscription`.

Conventions worth knowing before you change anything:

- Fields are camelCase in Prisma, `snake_case` in the DB via `@map`, and tables via `@@map`.
  Keep both sides when adding a column.
- Many "arrays" are **JSON encoded into `String` columns** — `images`, `highlights`,
  `tourTypes`, `itineraryItems`, `groupPricingTiers`, `unavailableDates`,
  `unavailableDaysOfWeek`, `checklistItems`, `certificates`. Parse defensively; some rows
  hold legacy shapes.
- `Tour.pricePerPerson` is legacy. Real pricing lives in `TourOption` rows; group pricing in
  `groupPricingTiers`.
- Two commented-out fields in `TourOption` (`maxGroupSize`, `groupPrice`) are deliberately
  disabled because the production DB lacks those columns. Don't uncomment without shipping
  the migration first.
- `Tour.status`: `draft` → `pending` → `approved` / `rejected`. Only approved tours are
  public. `Booking.status`: `pending_payment` → `confirmed` / `payment_failed` / `cancelled`
  / `completed`.

Migrations live in `server/prisma/migrations/`. Use `prisma migrate dev` locally and
`prisma migrate deploy` on Render — never hand-edit an applied migration.

## Backend

`server/server.js` is a single ~10k-line Express file holding every route. It's large but
flat; find endpoints by grepping `app.get('/api/...`. Follow the surrounding style rather
than refactoring it out from under a task.

Route families: `/api/suppliers/*`, `/api/tours/*`, `/api/public/tours/*` (unauthenticated,
what the Next.js pages read), `/api/bookings/*`, `/api/payments/*` + `/api/verify-payment`,
`/api/reviews/*`, `/api/admin/*`, `/api/cron/*`.

Supporting modules: `server/db.js` (Prisma singleton), `server/utils/email.js`,
`server/utils/cloudinary.js`, `server/utils/invoice.js` (PDF invoices),
`server/reviewScheduler.js` (timer that sends post-tour review emails on the tour day plus a
next-day reminder, stamped so it never double-sends), `server/bookingPush.js` (ntfy alerts),
`server/generate-sitemap.js`.

**Auth is minimal and you should not assume it's stronger than it is.** Admin routes use
`verifyAdmin`, which only checks for the header `x-admin-auth: authenticated` — there are no
JWTs or sessions. Supplier/tourist auth is bcrypt password check plus email-verification
tokens. If a task touches auth, say plainly what the current model is rather than pretending
a token check exists.

## Integrations

- **Cloudinary** — all tour images. `lib/cloudinaryLoader.ts` rewrites Cloudinary URLs into
  `f_auto,q_auto,w_,c_limit` transforms so images bypass the Vercel optimizer entirely; that
  was a deliberate fix for ~35s cold city pages. Don't route Cloudinary images back through
  Next's optimizer.
- **Razorpay** — payments, with an optional proxy (`RAZORPAY_PROXY_URL`) and HMAC signature
  verification in `/api/verify-payment`.
- **Email** — `server/utils/email.js` picks a transport by priority: Resend → SendGrid →
  Gmail SMTP. Resend with the verified `asiabylocals.com` domain is the production path;
  Gmail SMTP does not work on Render (see `WHY_GMAIL_DOESNT_WORK_ON_RENDER.md`).
- **SEO indexing** — on tour approval the backend pings the Google Indexing API (service
  account creds) and IndexNow, and regenerates the sitemap.
- **OpenAI / Google GenAI** — itinerary generation (`/api/generate-itinerary`).

## Environment variables

Frontend: `NEXT_PUBLIC_API_URL` (defaults to `http://127.0.0.1:3001`),
`NEXT_PUBLIC_FRONTEND_URL`.

Backend: `DATABASE_URL`, `PORT`, `FRONTEND_URL`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`,
`ADMIN_EMAIL`, `RESEND_API_KEY` / `SENDGRID_API_KEY` / `EMAIL_USER` + `EMAIL_APP_PASSWORD`,
`CLOUDINARY_CLOUD_NAME` / `CLOUDINARY_API_KEY` / `CLOUDINARY_API_SECRET`, `RAZORPAY_KEY_ID`,
`RAZORPAY_KEY_SECRET`, `RAZORPAY_PROXY_URL`, `RAZORPAY_PROXY_SECRET`, `OPENAI_API_KEY`,
`CRON_SECRET`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `NTFY_URL`, `NTFY_TOPIC`.

`VITE_FRONTEND_URL` still appears in CORS config — a leftover from the Vite era, harmless.
`.env` files are gitignored; never commit secrets or echo them into docs, PRs, or commits.

## SEO is a first-class concern

This is a search-traffic business, and much of the code exists to serve that:

- **Never change the slug of a ranking page.** Slug changes need a 301 in the
  `slugRedirects` map in `next.config.ts` — that map is the historical record of every rename.
- `SEO_TITLE_OVERRIDES` in the `[slug]` page overrides only the meta title, not the on-page
  H1. The comment there warns against touching already-ranking titles; respect it.
- `app/sitemap.ts` mixes a hardcoded static/info-page list with tours pulled from the API.
  New public pages must be added there.
- Tour pages emit JSON-LD; FAQs (`lib/tourFaqs.ts`) and seed reviews (`lib/tourReviews.ts`)
  are large hand-written per-slug lookups keyed by tour slug. Follow the existing `if (slug
  === '...')` shape when adding entries.
- `next.config.ts` also owns security headers and immutable caching for versioned static art.

## Conventions

- Import with the `@/*` alias (`@/lib/constants`, `@/components/Footer`), not deep relatives.
- TypeScript runs with `strict: false`; `any` is common in tour payloads. Match local style
  rather than introducing strict typing piecemeal.
- Tailwind utility classes inline; no CSS modules. Global styles in `app/globals.css`.
- Icons from `lucide-react`.
- Backend is ESM (`"type": "module"`) — use `import`, not `require`. Root-level `.cjs`
  scripts are the exception.
- Comments in this codebase explain *why* (perf regressions, SEO rules, production DB
  constraints). Preserve them; they encode expensive lessons.

## Repo hygiene

The root holds ~90 historical `.md` files (deployment attempts, one-off fixes, checklists)
and a pile of ad-hoc scripts. They are chronological notes, often stale and sometimes
contradictory. Treat `README.md` and this file as current; treat the rest as archaeology,
and prefer reading the code over trusting an old `FIX_*.md`. `README.md` itself still
describes the pre-migration Vite structure in its "Tech Stack" section.

Don't add new `SOMETHING_FIX.md` files at the root as a matter of course — update this file
or the relevant code comment instead.

## Git workflow

Default branch is `main`; work happens on feature branches. Push with
`git push -u origin <branch>`. Commit messages in this repo are short imperative summaries
of user-visible effect ("Fix slow city/tour pages: bypass Vercel image optimizer, restore
ISR"). Don't open a PR unless asked.
