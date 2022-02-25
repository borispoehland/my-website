import NextLink from '@components/NextLink/NextLink';
import { IconType } from 'react-icons';

export interface IQuicklink {
  label: string;
  href: string;
  Icon: IconType;
  hideLabel?: boolean;
}

const ToQuicklinkConverter = ({
  Icon,
  href,
  label,
  hideLabel,
}: IQuicklink): JSX.Element => {
  return (
    <NextLink key={href} href={href} className="quicklink-bar__link">
      <Icon />
      {!hideLabel && <span>{label}</span>}
    </NextLink>
  );
};

ToQuicklinkConverter.defaultProps = {
  hideLabel: false,
};

export default ToQuicklinkConverter;
