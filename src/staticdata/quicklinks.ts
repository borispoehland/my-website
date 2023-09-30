import { FiInstagram, FiMail, FiTwitter, FiGithub } from 'react-icons/fi';
import { IQuicklink } from '@components/QuicklinkBar/converters/ToQuicklinkConverter';
import { FaLinkedin } from 'react-icons/fa';

const getQuicklinks = (): IQuicklink[] => [
  {
    label: process.env.NEXT_PUBLIC_MY_EMAIL,
    href: `mailto:${process.env.NEXT_PUBLIC_MY_EMAIL}`,
    Icon: FiMail,
  },
  {
    label: '@borispoehland',
    href: 'https://github.com/borispoehland',
    Icon: FiGithub,
  },
  {
    label: '@borispoehland',
    href: 'https://www.linkedin.com/in/borispoehland',
    Icon: FaLinkedin,
  },
  {
    label: '@borispoehland',
    href: 'https://twitter.com/borispoehland',
    Icon: FiTwitter,
  },
  {
    label: '@borispoehland',
    href: 'https://www.instagram.com/borispoehland',
    Icon: FiInstagram,
  },
];

export default getQuicklinks;
