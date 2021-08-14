import NextLink from '../../NextLink/NextLink';
import Image from 'next/image';
import NavToggler from './NavToggler';
import { ETheme } from '../../../../@types/enums';
import { MouseEventHandler } from 'react';
import { navLogoWidth } from '../../../utils/css';

interface IProps {
  onTogglerClick: MouseEventHandler;
  theme: ETheme;
}

const NavbarNonCollapse = ({ onTogglerClick, theme }: IProps): JSX.Element => {
  return (
    <div className="navbar-non-collapse">
      <NextLink href="/" className="navbar-brand">
        <Image
          src={`/img/bp-${theme}.png`}
          alt="Logo of Boris Pöhland"
          width={912}
          height={169}
          quality={100}
          priority
          sizes={navLogoWidth}
        />
      </NextLink>
      <NavToggler onClick={onTogglerClick} />
    </div>
  );
};

export default NavbarNonCollapse;
