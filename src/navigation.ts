import { getPermalink } from './utils/permalinks';
import { workshop } from './data/workshop';

export const headerData = {
  position: 'right',
  links: [
    { text: 'Overview', href: getPermalink('/') },
    { text: 'Program', href: getPermalink('/program') },
    { text: 'Speakers', href: getPermalink('/speakers') },
    { text: 'Organisers', href: getPermalink('/organisers') },
  ],
  actions: [{ text: 'Call for papers', href: getPermalink('/call-for-papers') }],
};

export const footerData = {
  links: [
    {
      title: 'Workshop',
      links: [
        { text: 'Overview', href: getPermalink('/') },
        { text: 'Program', href: getPermalink('/program') },
        { text: 'Speakers', href: getPermalink('/speakers') },
      ],
    },
    {
      title: 'Participate',
      links: [
        { text: 'Call for papers', href: getPermalink('/call-for-papers') },
        { text: 'Organisers', href: getPermalink('/organisers') },
        { text: 'Contact', href: `mailto:${workshop.contact}` },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: 'Proposed ICRA 2027 workshop · Details subject to confirmation.',
};
