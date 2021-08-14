import { Nav, Navbar } from 'react-bootstrap';
import getNavLinks from '../../../staticdata/navLinks';
import ThemeSwitch from './Themeswitch';
import { useRouter } from 'next/router';
import ToNavLinkConverter from '../converters/ToNavLinkConverter';

const NavbarCollapse = (): JSX.Element => {
  const router = useRouter();

  return (
    <Navbar.Collapse timeout={0}>
      <Nav>
        {getNavLinks()
          .map((navLink) => ({
            ...navLink,
            isActive: router.pathname === navLink.href,
          }))
          .map(ToNavLinkConverter)}
        <ThemeSwitch className="nav-link" />
      </Nav>
    </Navbar.Collapse>
  );
};

export default NavbarCollapse;
