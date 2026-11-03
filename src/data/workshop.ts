// Initial content from the workshop proposal. Keep unconfirmed details provisional.
// Headshots live in src/assets/images/{organisers,speakers} as 400x400 face-centred square crops.
import type { ImageMetadata } from 'astro';
import andreasZieglerPhoto from '~/assets/images/organisers/andreas-ziegler.jpg';
import hanyuZhouPhoto from '~/assets/images/organisers/hanyu-zhou.jpg';
import kukJinYoonPhoto from '~/assets/images/organisers/kuk-jin-yoon.jpg';
import youngMinKimPhoto from '~/assets/images/organisers/young-min-kim.jpg';
import yiZhouPhoto from '~/assets/images/organisers/yi-zhou.jpg';
import yunfanLuPhoto from '~/assets/images/organisers/yunfan-lu.jpg';
import arrenGloverPhoto from '~/assets/images/organisers/arren-glover.jpg';
import adamHinesPhoto from '~/assets/images/organisers/adam-hines.jpg';
import haoyueLiuPhoto from '~/assets/images/organisers/haoyue-liu.jpg';
import sebnemSariozkanPhoto from '~/assets/images/organisers/sebnem-sariozkan.jpg';
import caterinaCaccavellaPhoto from '~/assets/images/organisers/caterina-caccavella.jpg';
import shengqiXuPhoto from '~/assets/images/organisers/shengqi-xu.jpg';
import shihanPengPhoto from '~/assets/images/organisers/shihan-peng.jpg';
import xinleiChenPhoto from '~/assets/images/organisers/xinlei-chen.jpg';
import huiXiongPhoto from '~/assets/images/organisers/hui-xiong.jpg';
import gimHeeLeePhoto from '~/assets/images/organisers/gim-hee-lee.jpg';
import amoghJoshiPhoto from '~/assets/images/organisers/amogh-joshi.jpg';
import hyunsurkRyuPhoto from '~/assets/images/speakers/hyunsurk-ryu.jpg';
import danielGehrigPhoto from '~/assets/images/speakers/daniel-gehrig.jpg';
import hoonheeChoPhoto from '~/assets/images/speakers/hoonhee-cho.jpg';
import guillermoGallegoPhoto from '~/assets/images/speakers/guillermo-gallego.jpg';
import alperYegenogluPhoto from '~/assets/images/speakers/alper-yegenoglu.jpg';
import gaurviGoyalPhoto from '~/assets/images/speakers/gaurvi-goyal.jpg';
import chiaraBartolozziPhoto from '~/assets/images/speakers/chiara-bartolozzi.jpg';

export const workshop = {
  title: 'Event-Based Vision for Real-World Robotics',
  subtitle: 'From Perception to Scene Understanding',
  conference: 'ICRA 2027',
  location: 'Seoul, South Korea',
  status: 'Proposed workshop',
  contact: 'andreas.ziegler@robotics.utias.utoronto.ca',
  /** Workshop day as "YYYY-MM-DD". Set once confirmed: this turns on "Add to calendar" on the program page. */
  date: undefined as string | undefined,
  /** Seoul (KST) is UTC+9 all year. */
  utcOffsetHours: 9,
};

export interface Organiser {
  name: string;
  affiliation: string;
  website?: string;
  photo?: ImageMetadata;
}

// Order follows the final proposal.
export const organisers: Organiser[] = [
  {
    name: 'Andreas Ziegler',
    affiliation: 'University of Toronto',
    website: 'https://andreasaziegler.github.io/',
    photo: andreasZieglerPhoto,
  },
  {
    name: 'Hanyu Zhou',
    affiliation: 'National University of Singapore',
    website: 'https://hyzhouboy.github.io/',
    photo: hanyuZhouPhoto,
  },
  { name: 'Kuk-Jin Yoon', affiliation: 'KAIST', photo: kukJinYoonPhoto },
  { name: 'Young Min Kim', affiliation: 'Seoul National University', photo: youngMinKimPhoto },
  { name: 'Yi Zhou', affiliation: 'Hunan University', photo: yiZhouPhoto },
  {
    name: 'Yunfan Lu',
    affiliation: 'Hong Kong University of Science and Technology',
    website: 'https://yunfanlu.github.io/',
    photo: yunfanLuPhoto,
  },
  { name: 'Arren Glover', affiliation: 'Italian Institute of Technology (IIT)', photo: arrenGloverPhoto },
  { name: 'Adam Hines', affiliation: 'Queensland University of Technology', photo: adamHinesPhoto },
  {
    name: 'Haoyue Liu',
    affiliation: 'Huazhong University of Science and Technology',
    website: 'https://liu-haoyue.github.io/',
    photo: haoyueLiuPhoto,
  },
  {
    name: 'Sebnem Sariozkan',
    affiliation: 'Paderborn University',
    website: 'https://sebnem-byte.github.io/',
    photo: sebnemSariozkanPhoto,
  },
  { name: 'Caterina Caccavella', affiliation: 'ETH Zurich & ZHAW', photo: caterinaCaccavellaPhoto },
  {
    name: 'Shengqi Xu',
    affiliation: 'Fudan University',
    website: 'https://shengqi77.github.io/',
    photo: shengqiXuPhoto,
  },
  {
    name: 'Shihan Peng',
    affiliation: 'Tsinghua University',
    website: 'https://pengshihan.com/',
    photo: shihanPengPhoto,
  },
  { name: 'Amogh Joshi', affiliation: 'Purdue University', photo: amoghJoshiPhoto },
  {
    name: 'Xinlei Chen',
    affiliation: 'Tsinghua University',
    website: 'https://chen-xinlei.com/',
    photo: xinleiChenPhoto,
  },
  {
    name: 'Hui Xiong',
    affiliation: 'Hong Kong University of Science and Technology (Guangzhou)',
    website: 'https://ailab.hkust-gz.edu.cn/',
    photo: huiXiongPhoto,
  },
  {
    name: 'Gim Hee Lee',
    affiliation: 'National University of Singapore',
    website: 'https://www.comp.nus.edu.sg/~leegh/',
    photo: gimHeeLeePhoto,
  },
];

export interface Speaker {
  /** Anchor on the speakers page, referenced from the program. */
  id: string;
  name: string;
  affiliation: string;
  /** Expected topic from the proposal. */
  topic: string;
  /** Confirmed talk title, once known. */
  talkTitle?: string;
  photo?: ImageMetadata;
}

// Confirmed invited speakers, in talk order (Talk 1–7). Backup speakers from the proposal are not listed publicly.
export const speakers: Speaker[] = [
  {
    id: 'hyunsurk-ryu',
    name: 'Hyunsurk (Eric) Ryu',
    affiliation: 'NRV (industry)',
    topic: 'Event-based sensing and neuromorphic hardware',
    photo: hyunsurkRyuPhoto,
  },
  {
    id: 'daniel-gehrig',
    name: 'Daniel Gehrig',
    affiliation: 'University of Pennsylvania',
    topic: 'Event-based SLAM and VIO for agile robots',
    photo: danielGehrigPhoto,
  },
  {
    id: 'guillermo-gallego',
    name: 'Guillermo Gallego',
    affiliation: 'TU Berlin',
    topic: 'Event-based stereo and motion estimation',
    photo: guillermoGallegoPhoto,
  },
  {
    id: 'hoonhee-cho',
    name: 'Hoonhee Cho',
    affiliation: 'KAIST',
    topic: 'Event-based perception for autonomous driving and robotics',
    talkTitle: 'Event-based perception for autonomous driving and robotics',
    photo: hoonheeChoPhoto,
  },
  {
    id: 'gaurvi-goyal',
    name: 'Gaurvi Goyal',
    affiliation: 'Maastricht University',
    topic: 'Event-based human pose and motion perception',
    photo: gaurviGoyalPhoto,
  },
  {
    id: 'chiara-bartolozzi',
    name: 'Chiara Bartolozzi',
    affiliation: 'Italian Institute of Technology (IIT)',
    topic: 'Event-driven perception for neuromorphic robots',
    photo: chiaraBartolozziPhoto,
  },
  {
    id: 'alper-yegenoglu',
    name: 'Alper Yegenoglu',
    affiliation: 'Paderborn University',
    topic: 'Spiking neural networks for embodied AI',
    photo: alperYegenogluPhoto,
  },
];

export const getSpeaker = (id: string): Speaker => {
  const speaker = speakers.find((s) => s.id === id);
  if (!speaker) throw new Error(`Unknown speaker: ${id}`);
  return speaker;
};

export const topics = [
  {
    title: 'Event-based state estimation',
    description: 'Event-based SLAM, VO, and VIO for agile, low-latency, high-dynamic-range state estimation.',
    icon: 'tabler:route',
  },
  {
    title: 'Driving perception',
    description: 'Time-to-contact, 3D detection, and fusion of events with RGB, LiDAR, and IMU for autonomous driving.',
    icon: 'tabler:car',
  },
  {
    title: 'Event foundation models',
    description:
      'Event foundation models and representation learning for detection, optical flow, depth, and scene understanding.',
    icon: 'tabler:brain',
  },
  {
    title: 'Datasets and deployment',
    description: 'Datasets, sim-to-real transfer, and how perception outputs best serve navigation and control.',
    icon: 'tabler:database',
  },
];

export interface Challenge {
  title: string;
  description: string;
  leaderboard: string;
}

export const challenges: Challenge[] = [
  {
    title: 'EvSLAM',
    description: 'How much do event cameras improve SLAM, VO, and VIO under high-speed 6-DoF motion?',
    leaderboard: 'https://www.codabench.org/competitions/17239/',
  },
  {
    title: 'eAP TTC',
    description: 'Object time-to-contact estimation from synchronised RGB and event data in driving scenes.',
    leaderboard: 'https://www.codabench.org/competitions/17291/',
  },
  {
    title: 'eAP 3D Detection',
    description:
      'Event-enhanced 3D object detection with synchronised RGB, event, LiDAR, and GNSS-IMU data under challenging illumination and motion.',
    leaderboard: 'https://www.codabench.org/competitions/17291/',
  },
];

/** Initials for photo placeholders, ignoring parenthesised nicknames. */
export const initials = (name: string) =>
  name
    .replace(/\s*\(.*?\)/, '')
    .split(' ')
    .map((part) => part[0])
    .join('');
