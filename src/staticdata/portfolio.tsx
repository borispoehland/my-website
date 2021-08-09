import { IPortfolioItem } from '../components/Portfolio/converters/ToPortfolioItemConverter';
import Technologies from './technologies';
import Emoji from '../components/Emoji/Emoji';
import Button from '../components/Button/Button';
import NextLink from '../components/NextLink/NextLink';

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
      href: 'https://regina-poehland.com/en',
    },
    {
      name: 'Your awesome project',
      appetizer: (
        <>
          I&#39;d love to get in touch with you about <b>your</b> project idea.
          You need no technical or design knowledge. When you take a look at{' '}
          <NextLink href={'/tbd'}>how I work</NextLink>, you will see that we
          will explore and flesh out your idea together!
        </>
      ),
      tags: [Technologies.Unknown],
      imgFolder: 'your-next-project-placeholder',
      customActionButton: <Button onClick={() => {}}>Hire me today!</Button>,
    },
  ];
};

export default getPortfolio;
