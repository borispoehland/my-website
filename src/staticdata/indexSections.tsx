import { ETheme } from '@enums';
import Button from '@components/Button/Button';
import { IIndexSection } from '@components/IndexSections/converters/ToIndexSectionConverter';
import { NextRouter } from 'next/router';

const getIndexSections = (
  theme: ETheme,
  router: NextRouter
): IIndexSection[] => {
  return [
    {
      imgSrc: '/img/index-page/me.png',
      imgAlt: '',
      heading: 'Hey,',
      textContent: (
        <>
          I&#39;m Boris Pöhland, <b>Web Developer</b> living in Montenegro. I
          use modern tech stacks to develop your next web application. But I
          also build cool and free stuff!
        </>
      ),
      actionButton: (
        <div className="wrapper">
          <Button
            onClick={() =>
              window.open('https://calendly.com/web3dev/30min', '_blank')
            }
          >
            Book free call
          </Button>
          <Button
            isSecondary
            onClick={() => window.open('https://montescout.com', '_blank')}
          >
            Free stuff
          </Button>
        </div>
      ),
      tag: 'main',
    },
    {
      imgSrc: `/img/index-page/stack-${theme}.png`,
      imgAlt: '',
      heading: 'I love Next.js',
      textContent: (
        <>
          I specialised myself in the Next.js ecosystem - and offer Drop-In
          Next.js Services.
        </>
      ),
      actionButton: (
        <div className="wrapper">
          <Button
            onClick={() => window.open('https://nextdev.agency', '_blank')}
          >
            Book Next.js services
          </Button>
          <Button isSecondary onClick={() => router.push('/portfolio')}>
            View Portfolio
          </Button>
        </div>
      ),
    },
    {
      imgSrc: `/img/index-page/web3.png`,
      imgAlt: '',
      heading: 'Web3 is the future',
      textContent: (
        <>
          Web3 and smart contracts offer a permissionless way to exchange goods.
          That&apos;s why I founded WEB3DEV, a company specialised in web
          development on the MultiversX blockchain
        </>
      ),
      actionButton: (
        <div className="wrapper">
          <Button onClick={() => window.open('https://xweb3.dev', '_blank')}>
            Check out WEB3DEV
          </Button>
          <Button
            isSecondary
            onClick={() => router.push('/blog/why-you-should-care-about-web3')}
          >
            Read post
          </Button>
        </div>
      ),
    },
    {
      imgSrc: '/img/index-page/workspace.png',
      imgAlt: '',
      heading: 'Ready?',
      textContent: (
        <>
          Profit from years of experience in the realm of web and choose me as
          your trusted partner
        </>
      ),
      actionButton: (
        <div className="wrapper">
          <Button
            onClick={() =>
              window.open('https://calendly.com/web3dev/30min', '_blank')
            }
          >
            Book free call
          </Button>
          <Button isSecondary onClick={() => router.push('/contact')}>
            Write me
          </Button>
        </div>
      ),
    },
  ];
};

export default getIndexSections;
