import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { sTheme } from '@store';
import {
  useBackgroundBlurWhenNavIsOpen,
  useCloseNavAutomatically,
} from './hooks';
import NavbarCollapse from './subcomponents/NavbarCollapse';
import NavbarNonCollapse from './subcomponents/NavbarNonCollapse';
import NavbarBlurrer from '@components/Navbar/subcomponents/NavbarBlurrer';

interface IProps extends HasClassName {}

const Navbar = ({ className }: IProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useRecoilValue(sTheme);

  const computedOnce = useRef({
    closeMenu: (): void => setIsOpen(false),
    toggleMenu: (): void => setIsOpen((prevState): boolean => !prevState),
  });

  useCloseNavAutomatically(computedOnce.current.closeMenu);

  useBackgroundBlurWhenNavIsOpen(isOpen);

  return (
    <BootstrapNavbar className={className} expand="md" expanded={isOpen}>
      <NavbarNonCollapse
        onTogglerClick={computedOnce.current.toggleMenu}
        theme={theme}
      />
      <NavbarCollapse />
      <NavbarBlurrer />
    </BootstrapNavbar>
  );
};

export default Navbar;
