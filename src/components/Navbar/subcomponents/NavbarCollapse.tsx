import { Nav, Navbar } from 'react-bootstrap';
import getNavLinks from '@data/navLinks';
import ThemeSwitch from './Themeswitch';
import { useRouter } from 'next/router';
import ToNavLinkConverter from '../converters/ToNavLinkConverter';
import { useMemoOne } from 'use-memo-one';

const NavbarCollapse = (): JSX.Element => {
  const router = useRouter();

  const firstUrlPath = useMemoOne(() => {
    return `/${router.pathname.split('/')[1]}`;
  }, [router.pathname]);

  return (
    <Navbar.Collapse timeout={0}>
      <Nav>
        {getNavLinks()
          .map((navLink) => ({
            ...navLink,
            isActive: firstUrlPath === navLink.href,
          }))
          .map(ToNavLinkConverter)}
        <ThemeSwitch className="nav-link" />
      </Nav>
    </Navbar.Collapse>
  );
};

export default NavbarCollapse;
