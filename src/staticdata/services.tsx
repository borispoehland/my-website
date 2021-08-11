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
        <h4>Why choose me?</h4>
        I&#39;m a very aesthetic person, I am bothered by visual inconsistencies
        and bugs that others don&#39;t even notice. That makes my products stand
        out in a way that they look seamless and clean. My high standard also
        affect that the code is well-structured <b>internally</b>. For instance,
        feel free to take a look at{' '}
        <NextLink
          href="https://github.com/borispoehland/Boris-Poehland-Website"
          hasExternalIndicator
        >
          the source code of this website
        </NextLink>
        .<h4>Get in touch</h4>
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
        and strive for the Usability of software.
        <h4>What is usability?</h4>
        Usability is the ease-of-use the user experiences when using a website.
        A good usability is key to a enjoyable user experience (UX).
        <h4>Get in touch</h4>I can analyze the Usability of your product, as
        well as giving design implications to enhance it. If you&#39;re
        interested in boosting the Usability of your product to the next level,{' '}
        <NextLink href="/contact">contact me</NextLink> today!
      </>
    ),
    imgSrc: '/img/services-page/usability.png',
    anchorId: 'usability',
  },
];

export default getServices;
