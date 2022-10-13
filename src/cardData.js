import notifizor from './assets/notifizor.png';
import table from './assets/table.png'
import node from './assets/node.png';
import html from './assets/html.png';
import opensource from './assets/opensource.png';
import javascript from './assets/javascript.png';
import jest from './assets/jest.png';
import gatsby from './assets/gatsby.png';
import sprinklr from './assets/sprinklr.png';
import thisOne from './assets/this.png';

const cardData = [
  {
    title: 'Tables',
    text: 'React table component made with Gatsby/Contentful/GraphQL.',
    image: table,
    link: 'https://table-showcase.netlify.app/',
    secondaryLink: 'https://github.com/AaronMullan/tables',
  },
  {
    title: 'Sprinklr',
    text:
      'One of 5 developers building this marketing website using Typescript / GraphQL.',
    link: 'https://www.sprinklr.com/',
    image: sprinklr,
    linkText: 'site',
  },
  {
    title: 'Audio',
    text: 'Personal Site made with Gatsby/Contentful/GraphQL.',
    image: gatsby,
    link: 'https://aaron-mullan-audio.netlify.app/',
    secondaryLink: 'https://github.com/AaronMullan/aaronmullanaudio',
  },
  {
    title: 'This Site',
    text: 'Personal Site made with React Bootstrap.',
    image: thisOne,
    secondaryLink: 'https://github.com/AaronMullan/portfolio',
    secondaryLinkText: 'code',
  },
  {
    title: 'Notifizor',
    text: 'Simple notifications app integrating with the New York Times API.',
    link: 'https://notifizor.herokuapp.com/',
    image: notifizor,
    linkText: 'site',
    secondaryLink: 'https://github.com/AaronMullan/notifizor',
  },
  {
    title: 'Covid Tracking Project',
    text:
      'Contributor to this project using Gatsby, D3 for data visualization for Covid tracking.',
    link: 'https://covidtracking.com/',
    image: opensource,
    secondaryLink: 'https://github.com/COVID19Tracking/website',
  },

  {
    title: 'Godzilla Paper Scissors',
    text: 'HTML and some Vanilla Javascript for ASCII art game.',
    link: 'https://aaronmullan.github.io/rockpaper/',
    image: html,
    secondaryLink: 'https://github.com/AaronMullan/rockpaper',
  },
  {
    title: 'Whatever Synth',
    text:
      'Collaborative use of Web Audio API to make a browser-based synthesizer.',
    link: 'https://whateversynth.netlify.app/',
    image: javascript,
    secondaryLink: 'https://github.com/whateverSynth/whateverSynth-frontend',
  },
  {
    title: 'MultCo Jail Data',
    text: 'Web Scraping, Mongo DB and Express routes for a public API.',
    link: 'https://mult-co-jail-data.netlify.app/developers',
    image: node,
    secondaryLink:
      'https://github.com/MultCoJailData/MultCo-jail-data-BE/tree/dev/lib',
  },
  {
    title: 'Jest',
    text: 'Jest coverage on database routes and models.',
    image: jest,
    link:
      'https://github.com/AaronMullan/record-database/tree/master/lib/models',
    linkText: 'models',
    secondaryLink:
      'https://github.com/AaronMullan/record-database/tree/master/__tests__',
    secondaryLinkText: 'routes',
  },
];

export default cardData;
