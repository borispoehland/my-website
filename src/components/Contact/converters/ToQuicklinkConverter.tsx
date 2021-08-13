import NextLink from '../../NextLink/NextLink';
import { IconType } from 'react-icons';

export interface IQuicklink {
  label: string;
  href: string;
  Icon: IconType;
}

const ToQuicklinkConverter = ({
  Icon,
  href,
  label,
}: IQuicklink): JSX.Element => {
  return (
    <NextLink key={href} href={href} className="quicklinks__link">
      <Icon />
      <span>{label}</span>
    </NextLink>
  );
};

export default ToQuicklinkConverter;
