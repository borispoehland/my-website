import { IPortfolioItem } from '@components/Portfolio/converters/ToPortfolioItemConverter';
import Technologies from './technologies';
import Button from '@components/Button/Button';
import NextLink from '@components/NextLink/NextLink';
import { openResourceInNewTab } from '@utils/dom';
import { NextRouter } from 'next/router';

const getPortfolio = (router: NextRouter | undefined): IPortfolioItem[] => {
  return [
    {
      name: 'G-Hub Calendar',
      appetizer: (
        <>
          A small side project where I provide a calendar together with a CMS
          for friends.
        </>
      ),
      tags: [
        Technologies.NextAndReact,
        Technologies.Typescript,
        Technologies.Tailwind,
        Technologies.Sanity,
      ],
      imgFolder: 'g-hub',
    },
    {
      name: 'Website for Regina Pöhland',
      appetizer: (
        <>
          Web presence for my mother and german artist Regina Pöhland. Back then
          I used Javascript to code the React components, today I work with{' '}
          <b>Typescript</b>.
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
      name: 'Guided tour system for OCR4all',
      appetizer: (
        <>
          Expansion of the existing software &quot;OCR4all&quot; with a tour
          system that was developed according to user requirements and with the
          aim of modularity. For more information see the bachelor thesis below
          or{' '}
          <NextLink
            href="https://github.com/OCR4all/OCR4all/compare/dev...borispoehland:master"
            hasExternalIndicator
          >
            view the source code
          </NextLink>
          .
        </>
      ),
      tags: [
        Technologies.Java,
        Technologies.Javascript,
        Technologies.CSS,
        Technologies.Spring,
        Technologies.Postgres,
        Technologies.Hibernate,
      ],
      imgFolder: 'ocr4all-thesis',
      customActionButton: (
        <Button
          onClick={() =>
            openResourceInNewTab('/files/bachelor_thesis_boris_poehland.pdf')
          }
        >
          See my thesis
        </Button>
      ),
    },
    {
      name: 'Artwork management tool for Regina Pöhland',
      appetizer: (
        <>
          GUI for my mother and german artist Regina Pöhland, where she can add,
          alter or delete artworks. The pictures of her artworks are
          automatically added to Google Drive and she can export her whole stock
          as CSV or HTML at any time.
        </>
      ),
      tags: [Technologies.JavaFX, Technologies.GDrive],
      imgFolder: 'regina-poehland-tool',
      customActionButton: <></>,
    },
    {
      name: 'Your awesome project',
      appetizer: (
        <>
          I&#39;d love to get in touch with you about <b>your</b> project idea.
          You need no technical or design knowledge. We will explore and flesh
          out your vision together!
        </>
      ),
      tags: [Technologies.Unknown],
      imgFolder: 'your-next-project-placeholder',
      customActionButton: (
        <Button onClick={() => router && router.push('/contact')}>
          Hire me today!
        </Button>
      ),
    },
  ];
};

export default getPortfolio;
