-- Add nullable column to store the language the customer selected at booking time.
ALTER TABLE "bookings" ADD COLUMN IF NOT EXISTS "language" TEXT;
