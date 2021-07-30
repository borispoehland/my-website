import { MouseEventHandler } from 'react';
import { Navbar } from 'react-bootstrap';
import cx from 'classnames';

interface IProps {
  isOpen: boolean;
  onClick: MouseEventHandler;
}

const NavToggler = ({ isOpen, onClick }: IProps): JSX.Element => (
  <Navbar.Toggle onClick={onClick}>
    <div
      className={cx('navbar-toggler__icon', {
        '--is-open': isOpen,
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
