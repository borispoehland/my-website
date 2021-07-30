import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { useRef, useState, useEffect } from 'react';
import NextLink from '../NextLink/NextLink';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { sTheme } from '../../store';
import NavToggler from './subcomponents/NavToggler';
import getTranslatedNavItems from '../../staticdata/navlinks';
import cx from 'classnames';

interface IProps extends HasClassName {}

export const useCloseNavAutomatically = (
  closeMenu: JQuery.EventHandler<unknown, void>
): void => {
  useEffect(() => {
    const $window = $(window);
    const navLinks = $('nav .link');
    $window.on('resize', closeMenu);
    navLinks.on('click', closeMenu);

    return (): void => {
      $window.off('resize', closeMenu);
      navLinks.off('click', closeMenu);
    };
  }, [closeMenu]);
};

const Navbar = ({ className }: IProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useRecoilValue(sTheme);

  const computedOnce = useRef({
    closeMenu: (): void => setIsOpen(false),
    toggleMenu: (): void => setIsOpen((prevState): boolean => !prevState),
  });

  useCloseNavAutomatically(computedOnce.current.closeMenu);

  return (
    <BootstrapNavbar className={className} expand="md" expanded={isOpen}>
      <section className="navbar-non-collapse">
        <NextLink href="/" className="navbar-brand">
          <Image
            src={`/img/bp-${theme}.png`}
            width={912}
            height={169}
            quality={100}
            alt="Image of Boris Pöhland"
          />
        </NextLink>
        <NavToggler isOpen={isOpen} onClick={computedOnce.current.toggleMenu} />
      </section>
      <BootstrapNavbar.Collapse timeout={0}>
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
          {/*{getTranslatedNavItems(t).map(ToNavLinkConverter)}*/}
          {/*          <LanguageSwitch className="nav-link" />
          <ThemeSwitch className="nav-link" />*/}
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
