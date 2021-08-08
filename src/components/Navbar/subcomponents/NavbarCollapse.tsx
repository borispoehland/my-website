import { Nav, Navbar } from 'react-bootstrap';
import getTranslatedNavItems from '../../../staticdata/navlinks';
import NextLink from '../../NextLink/NextLink';
import cx from 'classnames';
import ThemeSwitch from './Themeswitch';

const NavbarCollapse = (): JSX.Element => {
  return (
    <Navbar.Collapse timeout={0}>
      <Nav>
        {getTranslatedNavItems().map(({ href, label, collapsedOnly }) => {
          return (
            <NextLink
              key={href}
              href={href}
              className={cx('nav-link', {
                '--collapsed-only': collapsedOnly,
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
