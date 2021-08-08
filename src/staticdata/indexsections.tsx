import { ETheme } from '../../@types/enums';
import NextLink from '../components/NextLink/NextLink';
import Button from '../components/Button/Button';
import { IIndexSection } from '../components/IndexSections/converters/ToIndexSectionConverter';

const getIndexSections = (theme: ETheme): IIndexSection[] => [
  {
    imgSrc: '/img/index-page/me.png',
    imgAlt: '',
    imgPriority: true,
    heading: 'Hey,',
    textContent: (
      <>
        I&#39;m Boris and I&#39;m Web Developer and Usability Analyst from
        Germany. I have a keen eye for Usability, my{' '}
        <NextLink href={'/about'}>
          studies in Human-Computer-Interaction
        </NextLink>{' '}
        helped me in developing that. Currently I really much enjoy coding
        websites - preferrably with <b>React</b>. <br /> <br /> If you like the
        style of this website or{' '}
        <NextLink href={'/portfolio'}>my other projects</NextLink>, send me a
        message for collaboration on <b>your</b> next project.
      </>
    ),
    actionButton: <Button onClick={() => {}}>Contact me</Button>,
    tag: 'main',
  },
  {
    imgSrc: `/img/index-page/stack-${theme}.png`,
    imgAlt: '',
    heading: 'My tech stack',
    textContent: (
      <>
        A good craftsman needs to master the right tools well. I specialised
        myself in the Javascript ecosystem; with <b>Typescript</b>, <b>SASS</b>,{' '}
        <b>React</b> and <b>Next.js</b> as my flagship technologies.
      </>
    ),
    actionButton: <Button onClick={() => {}}>Portfolio</Button>,
  },
  {
    imgSrc: `/img/index-page/zoom.png`,
    imgAlt: '',
    heading: 'My vision',
    textContent: (
      <>
        I am convinced that everyone deserves an easy-to-use and lightning-fast
        web presence. However, with the world becoming more and more digital, I
        don&#39;t want to lose the <b>human</b> aspect. It is therefore
        important to me to keep communication and consultation high on joint
        projects, and to truly care for my partners and customers.
      </>
    ),
    actionButton: <Button onClick={() => {}}>How I work</Button>,
  },
];

export default getIndexSections;
