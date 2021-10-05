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
      heading: 'Hey',
      textContent: (
        <>
          I&#39;m Boris Pöhland and I&#39;m <b>Web Developer</b> from Germany. I
          also have a keen eye for <b>Usability</b>, my studies in
          human-computer interaction helped me developing that. Besides my
          studies I enjoy creating websites - preferably with <b>React.js</b>.
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
          A good developer needs to master the right tools well. I specialised
          myself in the Javascript ecosystem - with <b>React.js</b>,{' '}
          <b>Next.js</b>, <b>Typescript</b> and <b>Tailwind</b> as my favorite
          technologies.
        </>
      ),
      actionButton: (
        <Button onClick={() => router.push('/portfolio')}>Portfolio</Button>
      ),
    },
    {
      imgSrc: '/img/index-page/zoom.png',
      imgAlt: '',
      heading: 'My vision',
      textContent: (
        <>
          Everyone deserves an easy-to-use and lightning-fast web presence.
          However, with the world becoming more and more digital, I don&#39;t
          want to lose the <b>human</b> aspect. It is therefore important to me
          to keep communication and consultation high on joint projects.
        </>
      ),
      actionButton: (
        <Button onClick={() => router.push('/contact')}>Hire me</Button>
      ),
    },
  ];
};

export default getIndexSections;
