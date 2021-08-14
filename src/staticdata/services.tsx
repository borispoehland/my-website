import { IServiceItem } from '../components/Services/converters/ToServicesItemConverter';
import NextLink from '../components/NextLink/NextLink';
import { ETheme } from '../../@types/enums';

const getServices = (theme: ETheme): IServiceItem[] => [
  {
    heading: 'Web Development',
    description: (
      <>
        Besides my studies I enhanced my coding skills, especially in the web
        development area. Check my{' '}
        <NextLink href="/portfolio">portfolio</NextLink> for further reference.
        <h3>Why choose me?</h3>
        I&#39;m a very aesthetic person, I am bothered by visual inconsistencies
        and bugs that others don&#39;t even notice. That makes my products stand
        out in a way that they look seamless and clean. My high standard also
        affect that the code is well-structured <b>internally</b>. For instance,
        feel free to take a look at{' '}
        <NextLink
          href="https://github.com/borispoehland/Boris-Poehland-Website"
          hasExternalIndicator
        >
          the source code of this site
        </NextLink>
        .<h3>Get in touch</h3>
        If you&#39;re not sure whether your idea is actionable or if I&#39;m the
        right guy for your job, <NextLink href="/contact">
          contact me
        </NextLink>{' '}
        to discuss about your project!
      </>
    ),
    imgSrc: `/img/services-page/code-${theme}.png`,
    anchorId: 'coding',
  },
  {
    heading: 'Usability consulting',
    description: (
      <>
        I studied human-computer-interaction at the University of Würzburg in
        Bavaria, Germany. The degree program taught me to recognize, evaluate
        and strive for the usability of software.
        <h3>What is usability?</h3>
        Broadly spoken, usability is the ease-of-use you feel when using a
        specific software. A good usability is key to a enjoyable user
        experience (UX).
        <h3>Get in touch</h3>I can analyze the usability of your product, as
        well as giving design implications to enhance it. If you&#39;re
        interested in boosting the usability of your product to the next level,{' '}
        <NextLink href="/contact">contact me</NextLink> today!
      </>
    ),
    imgSrc: '/img/services-page/usability.png',
    anchorId: 'usability',
  },
];

export default getServices;
