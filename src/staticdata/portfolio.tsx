import { IPortfolioItem } from '@components/Portfolio/converters/ToPortfolioItemConverter';
import Technologies from './technologies';
import Button from '@components/Button/Button';
import NextLink from '@components/NextLink/NextLink';
import { openResourceInNewTab } from '@utils/dom';

const getPortfolio = (): IPortfolioItem[] => {
  return [
    {
      name: 'Website for Regina Pöhland',
      appetizer: (
        <>
          In the first website I coded alone, I created the web presence for my
          mother and german artist Regina Pöhland. Back then I used Javascript
          to code the React components, today I work with <b>Typescript</b>.
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
          In my bachelor thesis, I expanded the existing software
          &quot;OCR4all&quot; with a tour system that was developed according to
          user requirements and with the aim of modularity. For more information
          see the bachelor thesis below or{' '}
          <NextLink href="https://github.com/OCR4all/OCR4all/compare/dev...borispoehland:master">
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
          onClick={() => openResourceInNewTab('/files/bachelor-thesis.pdf')}
        >
          See my thesis
        </Button>
      ),
    },
    {
      name: 'Artwork management tool for Regina Pöhland',
      appetizer: (
        <>
          Because my mother is artist and has lots of artworks, she required a
          tool to manage her stock. I provided her with an UI where she could
          add, alter or delete artworks. The pictures of her updates / new
          artworks are automatically added to Google Drive and she can export
          her whole stock as CSV or HTML at any time.
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
      customActionButton: <Button onClick={() => {}}>Hire me today!</Button>,
    },
  ];
};

export default getPortfolio;
