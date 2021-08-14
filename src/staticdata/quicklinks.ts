import { FiMail, FiTwitter } from 'react-icons/fi';
import { IQuicklink } from '@components/QuicklinkBar/converters/ToQuicklinkConverter';

const getQuicklinks = (): IQuicklink[] => [
  {
    label: 'me@borispoehland.com',
    href: 'mailto:me@borispoehland.com',
    Icon: FiMail,
  },
  {
    label: '@borispoehland',
    href: 'https://twitter.com/borispoehland',
    Icon: FiTwitter,
  },
];

export default getQuicklinks;
