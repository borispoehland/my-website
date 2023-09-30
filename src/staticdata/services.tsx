import { IServiceItem } from '@components/Services/converters/ToServicesItemConverter';
import NextLink from '@components/NextLink/NextLink';
import { ETheme } from '@enums';

const getServices = (theme: ETheme): IServiceItem[] => [
  /*   {
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
  }, */
  {
    heading: 'Next.js Development',
    description: (
      <>
        Next.js is my main stack. I offer Drop-in Next.js Services
        <h3>What can you do for my Next.js Codebase?</h3>
        Fix nasty bugs, refactor your code or update to Next.js 13. With my
        backend skills, I can also assist you in DevOps questions as well as
        architectural or logic related challenges.
        <h3>Get started</h3>
        Visit the website of{' '}
        <NextLink href="https://nextdev.agency">Next Dev Agency</NextLink> and
        get started for as low as 250$!
      </>
    ),
    imgSrc: `/img/services-page/nextdev.png`,
  },
  {
    heading: 'Everything web',
    description: (
      <>
        IT guys are expected to do anything tech related - from coding websites,
        to troubleshooting shutdown issues, up to fixing the damn printer. We
        are problem solvers by heart, and over the years I gained valuable
        knowledge in everything web related: Domains, Emails, Deployment,
        Databases, Git, DevOps, AWS, PWAs, a bit of Wordpress.
        <h3>Get started</h3>
        <NextLink href="/contact">Contact</NextLink> me any time to find out how
        I can help you!
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
      </>
    ),
    imgSrc: '/img/services-page/usability.png',
  },
];

export default getServices;
