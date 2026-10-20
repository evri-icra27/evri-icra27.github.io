// Initial content from the workshop proposal. Keep unconfirmed details provisional.
// Add headshots by importing images from src/assets/images/organisers and setting photo.
import type { ImageMetadata } from 'astro';

export const workshop = {
  title: 'Event-Based Vision for Real-World Robotics',
  subtitle: 'From Perception to Embodied Intelligence',
  conference: 'ICRA 2027',
  location: 'Seoul, South Korea',
  status: 'Proposed workshop',
  contact: 'andreas.ziegler@utoronto.ca',
};

export interface Organiser {
  name: string;
  affiliation: string;
  website?: string;
  photo?: ImageMetadata;
}

export const organisers: Organiser[] = [
  { name: 'Andreas Ziegler', affiliation: 'University of Toronto', website: 'https://andreasaziegler.github.io/' },
  { name: 'Hanyu Zhou', affiliation: 'National University of Singapore', website: 'https://hyzhouboy.github.io/' },
  { name: 'Kuk-Jin Yoon', affiliation: 'KAIST' },
  { name: 'Young Min Kim', affiliation: 'Seoul National University' },
  { name: 'Shintaro Shiba', affiliation: 'University of Tokyo' },
  { name: 'Yi Zhou', affiliation: 'Hunan University' },
  {
    name: 'Yunfan Lu',
    affiliation: 'Hong Kong University of Science and Technology',
    website: 'https://yunfanlu.github.io/',
  },
  { name: 'Arren Glover', affiliation: 'Italian Institute of Technology' },
  { name: 'Adam Hines', affiliation: 'Queensland University of Technology' },
  {
    name: 'Haoyue Liu',
    affiliation: 'Huazhong University of Science and Technology',
    website: 'https://liu-haoyue.github.io/',
  },
  { name: 'Sebnem Sariozkan', affiliation: 'Paderborn University', website: 'https://sebnem-byte.github.io/' },
  { name: 'Caterina Caccavella', affiliation: 'ETH Zurich & ZHAW' },
  { name: 'Shengqi Xu', affiliation: 'Fudan University', website: 'https://shengqi77.github.io/' },
  { name: 'Shihan Peng', affiliation: 'Tsinghua University', website: 'https://pengshihan.com/' },
  { name: 'Xinlei Chen', affiliation: 'Tsinghua University', website: 'https://chen-xinlei.com/' },
  {
    name: 'Hui Xiong',
    affiliation: 'Hong Kong University of Science and Technology (Guangzhou)',
    website: 'https://ailab.hkust-gz.edu.cn/',
  },
  {
    name: 'Gim Hee Lee',
    affiliation: 'National University of Singapore',
    website: 'https://www.comp.nus.edu.sg/~leegh/',
  },
];

export const topics = [
  {
    title: 'Perception & navigation',
    description: 'Event-based SLAM, visual odometry, agile navigation, and perception for autonomous driving.',
    icon: 'tabler:scan',
  },
  {
    title: 'Embodied intelligence',
    description: 'Event foundation models, vision-language-action models, and spiking neural networks for robotics.',
    icon: 'tabler:brain',
  },
  {
    title: 'Sensing & interaction',
    description: 'Multimodal fusion, neuromorphic tactile sensing, manipulation, and deployment on real robots.',
    icon: 'tabler:hand-finger',
  },
];
