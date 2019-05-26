// @flow
const colors = [
  'var(--green)',
  'var(--red)',
  'var(--light-blue)',
  'var(--yellow)',
  'var(--purple)'
];

export const projectFor = (slug: string): Object =>
  projects.find(project => project.slug === slug) || {};

export const projects = [
  {
    name: 'NSTS METRONOME',
    slug: 'nsts-metronome',
    description:
      'A sleek web metronome capable of playing in non-standard time signatures. Built using Vue JS',
    gitHubLink: 'https://github.com/Ghrehh/nsts-metronome',
    websiteLink: 'https://nsts-metronome.github.io/',
    tags: ['Vue', 'Music', 'CSS Animation']
  },
  {
    name: 'EAR TRAINING',
    slug: 'ear-training',
    description:
      'A web app for musicians to train their aural perception skills.',
    gitHubLink: 'https://github.com/Ghrehh/ear-training',
    websiteLink: 'https://ghrehh.github.io/eartraining/',
    tags: ['Music']
  },
  {
    name: 'VUE WORLD MAP',
    slug: 'vue-world-map',
    description:
      'A Vue.js library for displaying heat map style data per country on a world map.',
    gitHubLink: 'https://github.com/Ghrehh/vue-world-map',
    tags: ['Package']
  },
  {
    name: 'PORTFOLIO WEBSITE',
    slug: 'portfolio-website',
    description:
      "The website you're currently viewing. Built using Create React App.",
    gitHubLink: 'https://github.com/Ghrehh/portfolio-site',
    tags: ['React', 'Flow']
  },
  {
    name: 'FINDLOCATION',
    slug: 'findlocation',
    description:
      'A Go package for parsing locations from a string. Used on the Tweetatlas Backend',
    gitHubLink: 'https://github.com/Ghrehh/findlocation',
    tags: ['Go', 'Package']
  },
  {
    name: 'NOTATION JS',
    slug: 'notation-js',
    description: 'JS library for displaying sheet music.',
    gitHubLink: 'https://github.com/Ghrehh/Notation.js',
    websiteLink: 'https://ghrehh.github.io/Notation.js/',
    tags: ['Javascript', 'Package', 'Music']
  },
  {
    name: 'TWEETATLAS CLIENT',
    slug: 'tweetatlas-client',
    description:
      'Client used to display data from the Tweetatlas Server, built using Vue JS.',
    websiteLink: 'https://tweetatlas.github.io/',
    gitHubLink: 'https://github.com/Ghrehh/tweetatlas-client',
    tags: ['Vue', 'WebSockets']
  },
  {
    name: 'TWEETATLAS SERVER',
    slug: 'tweetatlas-server',
    description:
      'Service used to estimate the location of users creating tweets containing a search phrase or phrases. Built using Go.',
    gitHubLink: 'https://github.com/Ghrehh/tweetatlas-server',
    tags: ['Go', 'WebSockets']
  },
  {
    name: 'MYP BOOST',
    slug: 'myp-boost',
    description:
      'Website commissioned by a life coach to help gather relevant information from his clients. Design by Brian Burns.',
    gitHubLink: 'https://github.com/Ghrehh/mypboost',
    websiteLink: 'https://mypboost.github.io/',
    tags: ['React', 'Redux', 'Commission']
  },
  {
    name: 'BURNS BROS & CO',
    slug: 'burns-bros',
    description: `A website me and my brother put together for our freelance work; we never quite got around to finishing it,
    but a lot of work went into it regardless.
    Design by Brian Burns.`,
    gitHubLink: 'https://github.com/Ghrehh/burnsbros',
    websiteLink: 'https://ghrehh.github.io/burnsbros/build/',
    tags: ['HTML Templating', 'CSS Animation']
  },
  {
    name: 'NEWINGTON FC',
    slug: 'newington-fc',
    description: `Unfinished website for Newington Football Club. Design by Brian Burns`,
    gitHubLink: 'https://github.com/Ghrehh/newington',
    websiteLink: 'https://ghrehh.github.io/newington/build/',
    tags: ['HTML Templating']
  },
  {
    name: 'MACTIRE',
    slug: 'mactire',
    description: `Commissioned website for singer-songwriter MacTire. Note that fonts on this have expired so parts look a little funky.`,
    gitHubLink: 'https://github.com/Ghrehh/mactire',
    websiteLink: 'https://mactiremusic.github.io/',
    tags: ['HTML Templating', 'Commission']
  },
  {
    name: 'UNMUTE RECORDS',
    slug: 'unmute-records',
    description: `Commissioned website for now defunct label Unmute Records.`,
    gitHubLink: 'https://github.com/Ghrehh/unmuterecords',
    websiteLink: 'https://unmuterecords.github.io/',
    tags: ['HTML Templating', 'Commission']
  }
].map((project, index) => ({
  ...project,
  backgroundColor: colors[index % colors.length]
}));

export default {};
