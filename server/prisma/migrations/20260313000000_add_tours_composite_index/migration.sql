-- Fix slow tour queries on Basic-256mb Render PostgreSQL
-- Problem: Prisma's mode:'insensitive' generates LOWER() which bypasses regular B-tree indexes
-- Solution: Composite expression index matching the exact query pattern:
--   WHERE status = 'approved' AND LOWER(country) = LOWER(?) AND LOWER(city) = LOWER(?)

-- Composite expression index for the public tours query (status + country + city)
CREATE INDEX IF NOT EXISTS "tours_status_country_city_lower_idx"
  ON "tours" ("status", LOWER("country"), LOWER("city"));

-- Also add a standalone country index (was missing entirely)
CREATE INDEX IF NOT EXISTS "tours_country_idx"
  ON "tours" ("country");
