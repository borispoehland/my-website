import cx from 'classnames';
import { MouseEventHandler } from 'react';

type ButtonType = 'submit' | 'reset' | 'button';

interface IProps extends HasChildren {
  className?: string;
  onClick?: MouseEventHandler;
  type?: ButtonType;
  [props: string]: any;
}

const Button = ({
  children,
  className,
  onClick,
  type,
  ...props
}: IProps): JSX.Element => {
  return (
    <button
      type={type}
      className={cx('button', className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
