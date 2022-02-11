import { IServiceItem } from '@components/Services/converters/ToServicesItemConverter';
import NextLink from '@components/NextLink/NextLink';
import { ETheme } from '@enums';
import Emoji from '@components/Emoji/Emoji';
import { BsClock } from 'react-icons/bs';
import HeadingWithBadge from '@components/Services/subcomponents/HeadingWithBadge';

const getServices = (theme: ETheme): IServiceItem[] => [
  {
    heading: (
      <HeadingWithBadge
        Icon={BsClock}
        heading="Web3 Development"
        badgeText="in progress"
      />
    ),
    description: (
      <>
        In February 2021 I stumbled upon Web3, Crypto and Blockchains. I have
        been spellbound ever since. Developing apps that utilize a world-wide
        distributed, secure ledger is just mind-blowing{' '}
        <Emoji label="Mind blown emoji" symbol="🤯" />
        <h3>Where am I headed?</h3>I already learnt the basics of developing
        Solidity (Ethereum) and Rust (Elrond) smart contracts and integrating
        them on a reactive, blazing-fast frontend like React or Next.js. I am
        still learning though and will update this section whenever I feel ready
        to "go to production".
        <h3>Get in touch</h3>
        My inbox is still open to Web3-related requests. I also have connections
        to Web3-Developers. So why don't you{' '}
        <NextLink href="/contact">drop me a message</NextLink>?
      </>
    ),
    imgSrc: `/img/services-page/web3-${theme}.png`,
  },
  {
    heading: 'Web Development',
    description: (
      <>
        Be it Wordpress or custom React development - I got you covered. Check
        my <NextLink href="/portfolio">portfolio</NextLink> for further
        reference.
        <h3>What is the right fit for you?</h3>
        React (or Next.js) pages are super fast and rely on the latest
        technology available, but also take more time to develop. Wordpress is
        more suited for static websites or websites that don't require
        cutting-edge speed. I can build with both, which one to use on{' '}
        <i>your</i> site also highly depends on your vision and budget.
        <h3>Get in touch</h3>
        If you want to build a website but don't have a plan yet, don't worry!{' '}
        <NextLink href="/contact">Contact me</NextLink> to discuss about your
        project!
      </>
    ),
    imgSrc: `/img/services-page/code-${theme}.png`,
  },
  {
    heading: 'Usability Consulting',
    description: (
      <>
        I studied Human-Computer-Interaction at the University of Würzburg in
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
  },
];

export default getServices;
