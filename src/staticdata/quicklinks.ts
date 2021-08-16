import { FiInstagram, FiMail, FiTwitter } from 'react-icons/fi';
import { IQuicklink } from '@components/QuicklinkBar/converters/ToQuicklinkConverter';
import { FaLinkedin } from 'react-icons/fa';

const getQuicklinks = (): IQuicklink[] => [
  {
    label: 'me@borispoehland.com',
    href: 'mailto:me@borispoehland.com',
    Icon: FiMail,
  },
  {
    label: 'Boris Pöhland',
    href: 'https://www.linkedin.com/in/boris-p%C3%B6hland-541a28207/',
    Icon: FaLinkedin,
  },
  {
    label: '@borispoehland',
    href: 'https://twitter.com/borispoehland',
    Icon: FiTwitter,
  },
  {
    label: '@borispoehland',
    href: 'https://www.instagram.com/borispoehland/',
    Icon: FiInstagram,
  },
];

export default getQuicklinks;
