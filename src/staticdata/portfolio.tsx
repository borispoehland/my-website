import { IPortfolioItem } from '../components/Portfolio/converters/ToPortfolioItemConverter';
import Technologies from './technologies';
import Emoji from '../components/Emoji/Emoji';

const getPortfolio = (): IPortfolioItem[] => {
  return [
    /*    {
                                                          name: 'My website',
                                                          appetizer: <>The website you&#39;re currently on</>,
                                                          tags: [
                                                            Technologies.NextAndReact,
                                                            Technologies.Typescript,
                                                            Technologies.Sass,
                                                          ],
                                                          imgFolder: 'boris-poehland-web',
                                                          imgFilename: 'main',
                                                          href: 'https://boris-webseite-borispoehland.vercel.app',
                                                          customActionButton: <></>,
                                                        },*/
    {
      name: 'Website of Regina Pöhland',
      appetizer: (
        <>
          Web presence for my mother and german artist Regina Pöhland. This was
          the first website I coded alone. Back then I used Javascript to code
          the React components, today I work with <b>Typescript</b>.
        </>
      ),
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
