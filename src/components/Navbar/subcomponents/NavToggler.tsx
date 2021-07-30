import { MouseEventHandler } from 'react';
import { Navbar } from 'react-bootstrap';
import styles from './NavToggler.module.sass';
import cx from 'classnames';

interface IProps {
  isOpen: boolean;
  onClick: MouseEventHandler;
}

const NavToggler = ({ isOpen, onClick }: IProps): JSX.Element => (
  <Navbar.Toggle className={styles.navbarToggler} onClick={onClick}>
    <div
      className={cx(styles.navbarTogglerIcon, {
        [styles.navbarTogglerIconIsOpen]: isOpen,
      })}
    >
      <span />
      <span />
      <span />
      <span />
    </div>
  </Navbar.Toggle>
);

export default NavToggler;
