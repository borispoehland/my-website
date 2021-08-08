import { MouseEventHandler } from 'react';
import { Navbar } from 'react-bootstrap';

interface IProps {
  onClick: MouseEventHandler;
}

const NavToggler = ({ onClick }: IProps): JSX.Element => (
  <Navbar.Toggle onClick={onClick}>
    <div className="navbar-toggler__icon">
      <span />
      <span />
      <span />
      <span />
    </div>
  </Navbar.Toggle>
);

export default NavToggler;
