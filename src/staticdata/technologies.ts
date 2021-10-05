export interface ITechnology {
  name: string;
  borderColor: string;
}

type Techs =
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
  | 'Prisma';

const Technologies: { [key in Techs]: ITechnology } = {
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
  Unknown: {
    name: '???',
    borderColor: '#1def27',
  },
};

export default Technologies;
