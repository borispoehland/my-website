import { IPortfolioItem } from '../components/Portfolio/converters/ToPortfolioItemConverter';
import Technologies from './technologies';

const getPortfolio = (): IPortfolioItem[] => {
  return [
    {
      name: 'Website of Boris Pöhland',
      appetizer: <>The website you&#39;re currently on</>,
      tags: [
        Technologies.NextAndReact,
        Technologies.Typescript,
        Technologies.Sass,
      ],
      imgFolder: 'boris-poehland-web',
      imgFilename: 'main',
      href: 'https://boris-webseite-borispoehland.vercel.app',
    },
    {
      name: 'Website of Regina Pöhland',
      appetizer: <>Web presence for the artist Regina Pöhland</>,
      tags: [
        Technologies.NextAndReact,
        Technologies.Javascript,
        Technologies.Sass,
      ],
      imgFolder: 'regina-poehland-web',
      imgFilename: 'main',
      href: 'https://regina-poehland.com/en',
    },
  ];
};

export default getPortfolio;
