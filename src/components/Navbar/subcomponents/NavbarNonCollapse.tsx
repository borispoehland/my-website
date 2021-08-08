import NextLink from '../../NextLink/NextLink';
import Image from 'next/image';
import NavToggler from './NavToggler';
import { ETheme } from '../../../../@types/enums';
import { MouseEventHandler } from 'react';
import { navLogoWidth } from '../../../utils/css';

interface IProps {
  isOpen: boolean;
  onTogglerClick: MouseEventHandler;
  theme: ETheme;
}

const logoSizes = `${navLogoWidth}`;

const NavbarNonCollapse = ({
  isOpen,
  onTogglerClick,
  theme,
}: IProps): JSX.Element => {
  return (
    <div className="navbar-non-collapse">
      <NextLink href="/" className="navbar-brand">
        <Image
          src={`/img/bp-${theme}.png`}
          width={912}
          height={169}
          sizes={logoSizes}
          quality={100}
          priority
          alt="Image of Boris Pöhland"
        />
      </NextLink>
      <NavToggler isOpen={isOpen} onClick={onTogglerClick} />
    </div>
  );
};

export default NavbarNonCollapse;
