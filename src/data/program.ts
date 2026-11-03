// Tentative schedule from the final proposal (Sec. 3). Times are local to Seoul (KST).
import { getSpeaker, workshop, type Speaker } from '~/data/workshop';
import type { CalendarEvent } from '~/utils/calendar';

export type Item =
  | { time: string; kind: 'talk'; number: number; speaker: Speaker }
  | { time: string; kind: 'event'; title: string; short: string; description?: string };

export type Block =
  | { kind: 'session'; label: string; title: string; description: string; items: Item[] }
  | { kind: 'break'; time: string; title: string; short: string; description?: string };

type Break = Extract<Block, { kind: 'break' }>;

export const blocks: Block[] = [
  {
    kind: 'session',
    label: 'Morning · Session 1',
    title: 'Sensing and state estimation',
    description: 'From the event camera itself to agile, low-latency state estimation.',
    items: [
      {
        time: '08:30–08:40',
        kind: 'event',
        title: 'Opening remarks',
        short: 'Opening',
        description: 'Welcome, workshop goals, and an overview of the day and the challenges.',
      },
      {
        time: '08:40–09:10',
        kind: 'event',
        title: 'Tutorial: Event cameras for roboticists',
        short: 'Tutorial',
        description:
          'A short introduction to how event cameras work, common event representations, and where they help robots. Aimed at attendees with conventional perception or robot-learning backgrounds.',
      },
      { time: '09:10–09:40', kind: 'talk', number: 1, speaker: getSpeaker('hyunsurk-ryu') },
      { time: '09:40–10:10', kind: 'talk', number: 2, speaker: getSpeaker('daniel-gehrig') },
      {
        time: '10:10–10:30',
        kind: 'event',
        title: 'Spotlight talks',
        short: 'Spotlight talks',
        description: 'Short presentations of the highest-rated contributed papers.',
      },
    ],
  },
  {
    kind: 'break',
    time: '10:30–11:00',
    title: 'Coffee and posters 1',
    short: 'Coffee & posters 1',
    description: 'First poster session for accepted papers.',
  },
  {
    kind: 'session',
    label: 'Morning · Session 2',
    title: 'Benchmarks, geometry, and driving',
    description: 'The benchmark challenges, then geometric and driving perception with events.',
    items: [
      {
        time: '11:00–11:30',
        kind: 'event',
        title: 'Challenge introduction',
        short: 'Challenge intro',
        description:
          'The three benchmark challenges (EvSLAM, eAP TTC, and eAP 3D Detection): tasks, datasets, metrics, and baselines.',
      },
      { time: '11:30–12:00', kind: 'talk', number: 3, speaker: getSpeaker('guillermo-gallego') },
      { time: '12:00–12:30', kind: 'talk', number: 4, speaker: getSpeaker('hoonhee-cho') },
    ],
  },
  { kind: 'break', time: '12:30–14:00', title: 'Lunch', short: 'Lunch' },
  {
    kind: 'session',
    label: 'Afternoon · Session 3',
    title: 'Human motion and neuromorphic robots',
    description: 'Semantic perception of people in motion, through to embodied neuromorphic systems.',
    items: [
      { time: '14:00–14:30', kind: 'talk', number: 5, speaker: getSpeaker('gaurvi-goyal') },
      { time: '14:30–15:00', kind: 'talk', number: 6, speaker: getSpeaker('chiara-bartolozzi') },
      { time: '15:00–15:30', kind: 'talk', number: 7, speaker: getSpeaker('alper-yegenoglu') },
    ],
  },
  {
    kind: 'break',
    time: '15:30–16:30',
    title: 'Coffee, posters, and robot demos 2',
    short: 'Coffee, posters & demos 2',
    description: 'Second poster session, with live and video robot and system demos.',
  },
  {
    kind: 'session',
    label: 'Afternoon · Session 4',
    title: 'Challenges and discussion',
    description: 'Challenge results, a panel with all invited speakers, and awards.',
    items: [
      {
        time: '16:30–17:00',
        kind: 'event',
        title: 'Challenge results and winners’ talks',
        short: 'Challenge results',
        description: 'Final leaderboards for all three challenges, with presentations from the top teams.',
      },
      {
        time: '17:00–17:50',
        kind: 'event',
        title: 'Panel discussion',
        short: 'Panel discussion',
        description: 'All seven invited speakers, with questions from the audience collected live and in advance.',
      },
      { time: '17:50–18:00', kind: 'event', title: 'Closing remarks and awards', short: 'Closing & awards' },
    ],
  },
];

export const toMinutes = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

/** Splits "08:30–08:40" into its start and end times. */
export const splitTime = (time: string) => {
  const [start, end] = time.split('–');
  return { start, end };
};

/** Anchor id of a schedule slot on the program page, e.g. "slot-0910". */
export const slotId = (time: string) => `slot-${splitTime(time).start.replace(':', '')}`;

export const sessionRange = (items: Item[]) => `${splitTime(items[0].time).start}–${splitTime(items.at(-1)!.time).end}`;

const talks = blocks.flatMap((block) =>
  block.kind === 'session' ? block.items.filter((item) => item.kind === 'talk') : []
);

export const talkFor = (speakerId: string) => talks.find((talk) => talk.speaker.id === speakerId);

/** Every schedule slot as a calendar event, keyed by slot id. `url` is the absolute program URL. */
export const calendarEvents = (programUrl: string): CalendarEvent[] => {
  const location = `${workshop.conference}, ${workshop.location}`;
  const footer = `${workshop.title} (EVRI) workshop at ${workshop.conference}.`;
  return blocks
    .flatMap<Item | Break>((block) => (block.kind === 'break' ? [block] : block.items))
    .filter((item) => item.kind !== 'break' || item.short !== 'Lunch')
    .map((item) => {
      const { start, end } = splitTime(item.time);
      const id = slotId(item.time);
      const [summary, details] =
        item.kind === 'talk'
          ? [
              `Invited talk ${item.number}: ${item.speaker.name}, ${item.speaker.affiliation}`,
              item.speaker.talkTitle ?? `Title to be announced. Topic: ${item.speaker.topic}.`,
            ]
          : [item.title, item.description];
      return {
        id,
        start,
        end,
        summary: `EVRI · ${summary}`,
        description: [details, footer, `Program: ${programUrl}#${id}`].filter(Boolean).join('\n\n'),
        location,
        url: `${programUrl}#${id}`,
      };
    });
};

/** A single event covering the whole workshop, with the agenda in its description. */
export const wholeDayEvent = (programUrl: string): CalendarEvent => {
  const times = blocks.flatMap((block) => (block.kind === 'break' ? [block.time] : block.items.map((i) => i.time)));
  const lines = blocks.flatMap((block) =>
    block.kind === 'break'
      ? [`${block.time}  ${block.title}`]
      : block.items.map((item) =>
          item.kind === 'talk'
            ? `${item.time}  Invited talk ${item.number}: ${item.speaker.name}`
            : `${item.time}  ${item.title}`
        )
  );
  return {
    id: 'workshop',
    start: splitTime(times[0]).start,
    end: splitTime(times.at(-1)!).end,
    summary: `EVRI workshop @ ${workshop.conference}: ${workshop.title}`,
    description: ['Tentative schedule (times in KST):', ...lines, '', `Full program: ${programUrl}`].join('\n'),
    location: `${workshop.conference}, ${workshop.location}`,
    url: programUrl,
  };
};
