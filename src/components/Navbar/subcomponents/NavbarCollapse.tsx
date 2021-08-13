import { Nav, Navbar } from 'react-bootstrap';
import getTranslatedNavItems from '../../../staticdata/navLinks';
import NextLink from '../../NextLink/NextLink';
import cx from 'classnames';
import ThemeSwitch from './Themeswitch';
import { useRouter } from 'next/router';

const NavbarCollapse = (): JSX.Element => {
  const router = useRouter();

  return (
    <Navbar.Collapse timeout={0}>
      <Nav>
        {getTranslatedNavItems().map(({ href, label, collapsedOnly }) => {
          return (
            <NextLink
              key={href}
              href={href}
              className={cx('nav-link', {
                '--is-visible-collapsed-only': collapsedOnly,
                '--is-active': router.pathname === href,
              })}
            >
              {label}
            </NextLink>
          );
        })}
        <ThemeSwitch className="nav-link" />
      </Nav>
    </Navbar.Collapse>
  );
};

export default NavbarCollapse;
