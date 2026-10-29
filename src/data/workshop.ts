// Initial content from the workshop proposal. Keep unconfirmed details provisional.
// Headshots live in src/assets/images/organisers as 400x400 face-centred square crops.
import type { ImageMetadata } from 'astro';
import andreasZieglerPhoto from '~/assets/images/organisers/andreas-ziegler.jpg';
import hanyuZhouPhoto from '~/assets/images/organisers/hanyu-zhou.jpg';
import kukJinYoonPhoto from '~/assets/images/organisers/kuk-jin-yoon.jpg';
import youngMinKimPhoto from '~/assets/images/organisers/young-min-kim.jpg';
import shintaroShibaPhoto from '~/assets/images/organisers/shintaro-shiba.jpg';
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
  { name: 'Shintaro Shiba', affiliation: 'University of Tokyo', photo: shintaroShibaPhoto },
  { name: 'Yi Zhou', affiliation: 'Hunan University', photo: yiZhouPhoto },
  {
    name: 'Yunfan Lu',
    affiliation: 'Hong Kong University of Science and Technology',
    website: 'https://yunfanlu.github.io/',
    photo: yunfanLuPhoto,
  },
  { name: 'Arren Glover', affiliation: 'Italian Institute of Technology', photo: arrenGloverPhoto },
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

export const speakers = [
  { name: 'Hyunsurk (Eric) Ryu', affiliation: 'NRV', topic: 'Event sensing and neuromorphic hardware' },
  {
    name: 'Daniel Gehrig',
    affiliation: 'University of Pennsylvania',
    topic: 'Event-based SLAM and VIO for agile robots',
  },
  { name: 'Hoonhee Cho', affiliation: 'KAIST', topic: 'Event-based perception for autonomous driving and robotics' },
  { name: 'Guillermo Gallego', affiliation: 'TU Berlin', topic: 'Event-based stereo and motion estimation' },
  { name: 'Peiqi Duan', affiliation: 'Peking University', topic: 'Event foundation models for robotic perception' },
  { name: 'Alper Yegenoglu', affiliation: 'Paderborn University', topic: 'Spiking neural networks for embodied AI' },
  { name: 'Zeyu Xiao', affiliation: 'University of Trento', topic: 'Event-based scene reasoning' },
  { name: 'Min Liu', affiliation: 'DVSense', topic: 'Event-based multimodal fusion for autonomous driving' },
  { name: 'Rongfei Nong', affiliation: 'Forma AI', topic: 'From event sensing to embodied world interaction' },
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
