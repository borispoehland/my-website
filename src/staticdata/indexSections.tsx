import { ETheme } from '@enums';
import NextLink from '@components/NextLink/NextLink';
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
          I&#39;m Boris and I&#39;m Web Developer from Germany. I also have a
          keen eye for usability, my{' '}
          <NextLink href={'/services#usability'}>
            studies in human-computer interaction
          </NextLink>{' '}
          helped me developing that. Currently I really much enjoy coding
          websites - preferrably with <b>React</b>.
        </>
      ),
      actionButton: (
        <Button onClick={() => router.push('/services')}>Services</Button>
      ),
      tag: 'main',
    },
    {
      imgSrc: `/img/index-page/stack-${theme}.png`,
      imgAlt: '',
      heading: 'My tech stack',
      textContent: (
        <>
          A good craftsman needs to master the right tools well. I specialised
          myself in the Javascript ecosystem - with <b>Typescript</b>,{' '}
          <b>SASS</b>, <b>React</b> and <b>Next.js</b> as my flagship
          technologies.
        </>
      ),
      actionButton: (
        <Button onClick={() => router.push('/portfolio')}>Portfolio</Button>
      ),
    },
    {
      imgSrc: `/img/index-page/zoom.png`,
      imgAlt: '',
      heading: 'My vision',
      textContent: (
        <>
          I am convinced that everyone deserves an easy-to-use and
          lightning-fast web presence. However, with the world becoming more and
          more digital, I don&#39;t want to lose the <b>human</b> aspect. It is
          therefore important to me to keep communication and consultation high
          on joint projects.
        </>
      ),
      actionButton: (
        <Button onClick={() => router.push('/contact')}>Hire me</Button>
      ),
    },
  ];
};

export default getIndexSections;
