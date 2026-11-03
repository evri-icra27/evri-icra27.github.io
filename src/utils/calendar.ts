// Builds iCalendar (.ics) files. Runs in the browser, so it must not import Astro virtual modules.

export interface CalendarEvent {
  /** Stable id, used for the event UID. */
  id: string;
  /** Local start and end times, "HH:MM". */
  start: string;
  end: string;
  summary: string;
  description?: string;
  location?: string;
  url?: string;
}

const pad = (n: number) => String(n).padStart(2, '0');

const formatUtc = (d: Date) =>
  `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;

/** Converts a local date ("YYYY-MM-DD") and time ("HH:MM") at a fixed UTC offset to an iCalendar UTC timestamp. */
const toUtc = (date: string, time: string, utcOffsetHours: number) => {
  const [y, mo, d] = date.split('-').map(Number);
  const [h, mi] = time.split(':').map(Number);
  return formatUtc(new Date(Date.UTC(y, mo - 1, d, h - utcOffsetHours, mi)));
};

const escapeText = (text: string) =>
  text.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');

/** Folds a content line to at most 75 octets per line (RFC 5545 §3.1), without splitting characters. */
const fold = (line: string) => {
  const encoder = new TextEncoder();
  const lines: string[] = [];
  let current = '';
  let bytes = 0;
  for (const char of line) {
    const size = encoder.encode(char).length;
    // Continuation lines start with a space, which counts towards the limit.
    if (bytes + size > (lines.length ? 74 : 75)) {
      lines.push(current);
      current = '';
      bytes = 0;
    }
    current += char;
    bytes += size;
  }
  lines.push(current);
  return lines.join('\r\n ');
};

export const buildIcs = (
  events: CalendarEvent[],
  { date, utcOffsetHours, uidDomain }: { date: string; utcOffsetHours: number; uidDomain: string }
) => {
  const stamp = formatUtc(new Date());
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    `PRODID:-//${uidDomain}//Workshop program//EN`,
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    ...events.flatMap((event) => [
      'BEGIN:VEVENT',
      `UID:${event.id}-${date}@${uidDomain}`,
      `DTSTAMP:${stamp}`,
      `DTSTART:${toUtc(date, event.start, utcOffsetHours)}`,
      `DTEND:${toUtc(date, event.end, utcOffsetHours)}`,
      `SUMMARY:${escapeText(event.summary)}`,
      ...(event.description ? [`DESCRIPTION:${escapeText(event.description)}`] : []),
      ...(event.location ? [`LOCATION:${escapeText(event.location)}`] : []),
      ...(event.url ? [`URL:${event.url}`] : []),
      'END:VEVENT',
    ]),
    'END:VCALENDAR',
  ];
  return lines.map(fold).join('\r\n') + '\r\n';
};
