import { IPortfolioItem } from '@components/Portfolio/converters/ToPortfolioItemConverter';
import Technologies from './technologies';
import Button from '@components/Button/Button';
import NextLink from '@components/NextLink/NextLink';
import { openResourceInNewTab } from '@utils/dom';
import { NextRouter } from 'next/router';

const getPortfolio = (router: NextRouter | undefined): IPortfolioItem[] => {
  return [
    {
      name: 'Natural Born Degenz',
      appetizer: (
        <>
          As a Natural Born Degen, I love to work with this awesome, cultural
          NFT project on Elrond. The website you can see here is a work in
          progress, but at least the &quot;Gullible Seagulls&quot; NFT minter
          works already! PS: I fell in love with{' '}
          <NextLink href="https://chakra-ui.com/" hasExternalIndicator>
            Chakra UI
          </NextLink>
          .
        </>
      ),
      tags: [
        Technologies.NextAndReact,
        Technologies.Typescript,
        Technologies.ChakraUI,
        Technologies.ElrondAPI,
      ],
      imgFolder: 'nbd',
      href: 'https://seagulls.naturalborndegenz.art',
    },
    {
      name: 'XOXNO',
      appetizer: (
        <>
          Trust Market rebranded to XOXNO, and I was involved in creating an
          entirely new frontend and new features!
        </>
      ),
      tags: [
        Technologies.NextAndReact,
        Technologies.Typescript,
        Technologies.Bootstrap,
        Technologies.ElrondAPI,
      ],
      imgFolder: 'xoxno',
      href: 'https://xoxno.com',
    },
    {
      name: 'Trust Market 2.0',
      appetizer: (
        <>
          Trust Market has been migrated from regular React to Next.js. Thanks
          to my past experience with Next.js, I could be of assistance in this
          migration. The new marketplace is exponentially faster, partially
          thanks to Next.js!
        </>
      ),
      tags: [
        Technologies.NextAndReact,
        Technologies.Typescript,
        Technologies.Bootstrap,
        Technologies.ElrondAPI,
      ],
      imgFolder: 'trust-market',
      href: 'https://trust.market',
    },
    {
      name: 'Elrond Gallery',
      appetizer: (
        <>
          An NFT Explorer on the Elrond blockchain. I like Elrond&apos;s NFT
          ecosystem because it is very affordable,{' '}
          <NextLink
            href="https://elrond.com/blog/elrond-carbon-negative-offsetra/"
            hasExternalIndicator
          >
            carbon negative
          </NextLink>{' '}
          and has an awesome and helping community.
        </>
      ),
      tags: [
        Technologies.NextAndReact,
        Technologies.Typescript,
        Technologies.Bootstrap,
        Technologies.ElrondAPI,
      ],
      imgFolder: 'elrond-gallery',
      href: 'https://eglry.com',
    },
    {
      name: 'Seedify ROI Tracker',
      appetizer: (
        <>
          A special version of the Launchpad ROI Tracker from below that is
          tailored to Seedify. Apart from the different design, I also used an
          entirely different tech stack!
        </>
      ),
      tags: [
        Technologies.NextAndReact,
        Technologies.Typescript,
        Technologies.Tailwind,
        Technologies.RestAPI,
      ],
      imgFolder: 'seedify-launchpad-roi',
      href: 'https://seedifyhodlers.com/tools/roi',
    },
    {
      name: 'Launchpad ROI Tracker',
      appetizer: (
        <>
          Tool to track the Return on Investment (ROI) of selected crypto
          launchpads. I coded it with Wordpress, JetEngine for dynamic data
          fetching and the{' '}
          <NextLink
            href="https://www.coingecko.com/en/api/documentation"
            hasExternalIndicator
          >
            Coingecko REST API
          </NextLink>{' '}
          to display prices.
        </>
      ),
      tags: [
        Technologies.Wordpress,
        Technologies.JetEngine,
        Technologies.RestAPI,
      ],
      imgFolder: 'g-hub_launchpad-roi',
      href: 'https://cryptoghub.com/launchpads',
    },
    {
      name: 'Landing Page for Crypto G-Hub',
      appetizer: (
        <>
          Web presence for the consultancy Crypto G-Hub. I worked on this
          together with a Designer. It was my first Wordpress production-project
          and I loved it!
        </>
      ),
      tags: [Technologies.Wordpress, Technologies.JetEngine],
      imgFolder: 'g-hub',
      href: 'https://cryptoghub.com',
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
        <Button onClick={() => openResourceInNewTab('/thesis')}>
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
