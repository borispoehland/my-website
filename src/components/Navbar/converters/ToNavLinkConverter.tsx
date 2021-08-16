import cx from 'classnames';
import NextLink from '@components/NextLink/NextLink';
import { INavLink } from '@data/navLinks';

interface IProps extends INavLink {
  isActive: boolean;
}

const ToNavLinkConverter = ({
  collapsedOnly,
  href,
  isActive,
  label,
}: IProps): JSX.Element => {
  return (
    <NextLink
      key={href}
      href={href}
      className={cx('nav-link', {
        '--is-visible-collapsed-only': collapsedOnly,
        '--is-active': isActive,
      })}
    >
      {label}
    </NextLink>
  );
};

export default ToNavLinkConverter;
