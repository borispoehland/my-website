export interface ITechnology {
  name: string;
  borderColor: string;
}

type Techs =
  | 'Wordpress'
  | 'NextAndReact'
  | 'Typescript'
  | 'Javascript'
  | 'Sass'
  | 'Unknown'
  | 'Java'
  | 'CSS'
  | 'Spring'
  | 'Postgres'
  | 'Hibernate'
  | 'JavaFX'
  | 'GDrive'
  | 'Tailwind'
  | 'Sanity'
  | 'NextAuth'
  | 'Prisma'
  | 'RestAPI'
  | 'JetEngine'
  | 'Bootstrap'
  | 'ElrondAPI'
  | 'ChakraUI'
  | 'AWS';

const Technologies: { [key in Techs]: ITechnology } = {
  ChakraUI: {
    name: 'Chakra UI',
    borderColor: '#319795',
  },
  Bootstrap: {
    name: 'Bootstrap',
    borderColor: '#7f12f9',
  },
  ElrondAPI: {
    name: 'Elrond API',
    borderColor: '#1b46c2',
  },
  JetEngine: {
    name: 'JetEngine',
    borderColor: '#9d64ed',
  },
  RestAPI: {
    name: 'Rest API',
    borderColor: '#79b22d',
  },
  Wordpress: {
    name: 'Wordpress',
    borderColor: '#207196',
  },
  Prisma: {
    name: 'Prisma',
    borderColor: '#38a169',
  },
  NextAuth: {
    name: 'NextAuth.js',
    borderColor: '#a322d8',
  },
  Sanity: {
    name: 'Sanity.io',
    borderColor: '#e93c2e',
  },
  Tailwind: {
    name: 'Tailwind',
    borderColor: '#15b7c4',
  },
  GDrive: {
    name: 'Google Drive API',
    borderColor: '#34a853',
  },
  JavaFX: {
    name: 'Java FX',
    borderColor: '#ed7e18',
  },
  CSS: {
    name: 'CSS',
    borderColor: '#2fa7d9',
  },
  Hibernate: {
    name: 'Hibernate',
    borderColor: '#b6a975',
  },
  Java: {
    name: 'Java',
    borderColor: '#ed7e18',
  },
  Postgres: {
    name: 'PostgreSQL',
    borderColor: '#31648c',
  },
  Spring: {
    name: 'Spring Boot',
    borderColor: '#6aad3d',
  },
  NextAndReact: {
    name: 'Next.js / React',
    borderColor: '#02cffd',
  },
  Typescript: {
    name: 'Typescript',
    borderColor: '#017acc',
  },
  Javascript: {
    name: 'Javascript',
    borderColor: '#efd81d',
  },
  Sass: {
    name: 'SASS',
    borderColor: '#ce6999',
  },
  AWS: {
    name: 'AWS',
    borderColor: '#ff9c08',
  },
  Unknown: {
    name: '???',
    borderColor: '#1def27',
  },
};

export default Technologies;
