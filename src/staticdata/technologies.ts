export interface ITechnology {
  name: string;
  borderColor: string;
}

type Techs = 'NextAndReact' | 'Typescript' | 'Javascript' | 'Sass' | 'Unknown';

const Technologies: { [key in Techs]: ITechnology } = {
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
