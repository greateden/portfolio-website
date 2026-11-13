/** Eden's public profile and editorial content. No CMS account or external secrets required. */
export const person = {
  name: 'Eden Li Yitian',
  location: 'Zürich, Switzerland',
  role: 'Computational linguist · photographer · writer',
  bio: 'I study language, speech and the ways people make meaning. I also photograph, write and follow the questions that escape a neat explanation.',
  description: 'Eden Li Yitian is a computational linguistics researcher, photographer and writer in Zürich, working between languages, images and technology.',
  flickr: 'https://www.flickr.com/people/lumierecrafter/',
  linkedin: 'https://www.linkedin.com/in/eden-li-616a01255/',
  github: 'https://github.com/greateden',
};

export const projects = [
  {
    number: '01', title: 'Listening to Romansh', category: 'Language technology · speech',
    subtitle: 'Automatic subtitling for Romansh television',
    description: 'Investigating how speech recognition, careful evaluation and subtitling can make Romansh-language media more accessible. This is ongoing research, not a finished product.',
    details: 'ASR · subtitle alignment · WER/CER', status: 'Research in progress',
    href: '',
  },
  {
    number: '02', title: 'Verlan, in reverse', category: 'French · computational linguistics',
    subtitle: 'Identifying and normalising French wordplay',
    description: 'A computational investigation of verlan and the meeting point of variation, identity and language technology.',
    details: 'Corpus linguistics · NLP · evaluation', status: 'Research project',
    href: 'https://github.com/greateden/Verlan-Identification-Normalisation',
  },
  {
    number: '03', title: 'Railways as a living map', category: 'Cartography · interface design',
    subtitle: 'Swiss Rail Companion',
    description: 'An evolving exploration of Swiss public transport, from the national rail network to the trams that stitch cities together.',
    details: 'Geospatial data · visual interfaces', status: 'Work in progress',
    href: '',
  },
  {
    number: '04', title: 'Weather inside the poem', category: 'Comparative poetics · literature',
    subtitle: 'Storm imagery across languages and centuries',
    description: 'Reading storms as images of longing, freedom and endurance across Chinese and European literary traditions.',
    details: 'Chinese · French · close reading', status: 'Research and writing',
    href: '',
  },
  {
    number: '05', title: 'A voice in the machine', category: 'Speech · human-computer interaction',
    subtitle: 'Experiments towards a personal voice assistant',
    description: 'Exploring local AI, latency and speech interaction, with attention to how technology should fit into everyday life.',
    details: 'Speech systems · local AI', status: 'Exploratory prototype',
    href: '',
  },
];

export { photos } from './photography/collection';
