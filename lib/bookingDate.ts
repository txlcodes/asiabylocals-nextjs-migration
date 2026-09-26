/**
 * Read a booking date the way the guest wrote it.
 *
 * Booking dates are stored as plain "YYYY-MM-DD" strings with no time and no
 * zone, because a tour on 13 November is on 13 November wherever the guest
 * happens to be sitting. Passing that string to `new Date()` parses it as
 * midnight UTC, which renders as the day before for everyone west of London: a
 * guest in California picked 13 November, was shown 12 November on the checkout
 * screen, and paid anyway.
 */
export function parseBookingDate(value: string | Date | null | undefined): Date | null {
  if (!value) return null;
  if (value instanceof Date) return value;
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(value));
  if (m) return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  const d = new Date(value);
  return isNaN(d.getTime()) ? null : d;
}

export function formatBookingDate(
  value: string | Date | null | undefined,
  options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
): string {
  const d = parseBookingDate(value);
  return d ? d.toLocaleDateString('en-US', options) : '';
}
