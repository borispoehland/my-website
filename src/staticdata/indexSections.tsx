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
          I&#39;m Boris Pöhland, <b>Web Developer</b> from Germany. I use modern
          tech stacks to develop your next web application. I am currently
          learning <b>Web3</b> and <b>Smart Contract</b> Development.
        </>
      ),
      actionButton: (
        <Button onClick={() => router.push('/services')}>My services</Button>
      ),
      tag: 'main',
    },
    {
      imgSrc: `/img/index-page/stack-${theme}.png`,
      imgAlt: '',
      heading: 'Frontend stack',
      textContent: (
        <>
          A good developer needs to master the right tools well. I specialised
          myself in the Javascript ecosystem - with <b>React.js</b>,{' '}
          <b>Next.js</b>, <b>Typescript</b> and <b>Tailwind</b> as my main
          stack.
        </>
      ),
      actionButton: (
        <Button onClick={() => router.push('/portfolio')}>
          View Portfolio
        </Button>
      ),
    },
    {
      imgSrc: `/img/index-page/web3.png`,
      imgAlt: '',
      heading: 'Web3 is the future',
      textContent: (
        <>
          Web3 is the internet formed and owned by <b>everyone</b>, not by big
          tech companies. I am optimistic that <b>Web3</b> and <b>Blockchain</b>{' '}
          will take their place in our daily lifes and actively adapt my
          skillset to master these technologies!
        </>
      ),
      actionButton: (
        <Button
          onClick={() => router.push('/blog/why-you-should-care-about-web3')}
        >
          Read post
        </Button>
      ),
    },
    {
      imgSrc: '/img/index-page/workspace.png',
      imgAlt: '',
      heading: 'Ready?',
      textContent: (
        <>
          You want to make your vision reality but didn't dare the step yet?
          Pull yourself together, reach out to me and start turning your dream
          into reality! Me and my tools are ready, are you?
        </>
      ),
      actionButton: (
        <Button onClick={() => router.push('/contact')}>Get in touch</Button>
      ),
    },
  ];
};

export default getIndexSections;
