import styles from './Navbar.module.sass';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import { useRef, useState } from 'react';
import NextLink from '../NextLink/NextLink';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { sTheme } from '../../store';

interface IProps extends HasClassName {}

const Navbar = ({ className }: IProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useRecoilValue(sTheme);

  const computedOnce = useRef({
    closeMenu: (): void => setIsOpen(false),
    toggleMenu: (): void => setIsOpen((prevState): boolean => !prevState),
  });

  return (
    <BootstrapNavbar className={className} expand="md" expanded={isOpen}>
      <div className={styles.navbarNonCollapse}>
        <NextLink href="/" className={styles.navbarBrand}>
          <Image
            src={`/img/bp-${theme}.png`}
            width={912}
            height={169}
            quality={100}
            alt="Image of Boris Pöhland"
          />
        </NextLink>
        {/*<NavToggler onClick={onTogglerClick} />*/}
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar;
