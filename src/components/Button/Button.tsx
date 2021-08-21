import cx from 'classnames';
import { MouseEventHandler } from 'react';

type ButtonType = 'submit' | 'reset' | 'button';

interface IProps extends HasChildren {
  className?: string;
  onClick?: MouseEventHandler;
  type?: ButtonType;
  isLoading?: boolean;
}

const Button = ({
  children,
  className,
  onClick,
  type,
  isLoading,
}: IProps): JSX.Element => {
  return (
    <button
      type={type}
      className={cx('button', className, { '--is-loading': isLoading })}
      onClick={onClick}
      disabled={isLoading}
    >
      <span className="button__text">{children}</span>
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  isLoading: false,
};

export default Button;
