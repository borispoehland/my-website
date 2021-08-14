import cx from 'classnames';
import { MouseEventHandler } from 'react';

type ButtonType = 'submit' | 'reset' | 'button';

interface IProps extends HasChildren {
  className?: string;
  onClick?: MouseEventHandler;
  type?: ButtonType;
}

const Button = ({
  children,
  className,
  onClick,
  type,
}: IProps): JSX.Element => {
  return (
    <button type={type} className={cx('button', className)} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
