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
    tags: ['Vue', 'Music', 'CSS animation']
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
    name: 'PORTFOLIO WEBSITE',
    slug: 'portfolio-website',
    description:
      "The website you're currently viewing. Built using Create React App.",
    gitHubLink: 'https://github.com/Ghrehh/portfolio-site',
    tags: ['React', 'Flow']
  }
].map((project, index) => ({
  ...project,
  backgroundColor: colors[index % colors.length]
}));

export default {};
