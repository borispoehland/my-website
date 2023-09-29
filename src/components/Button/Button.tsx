import cx from 'classnames';
import { MouseEventHandler } from 'react';

type ButtonType = 'submit' | 'reset' | 'button';

interface IProps extends HasChildren {
  className?: string;
  onClick?: MouseEventHandler;
  type?: ButtonType;
  isLoading?: boolean;
  isSecondary?: boolean;
}

const Button = ({
  children,
  className,
  onClick,
  type,
  isLoading,
  isSecondary,
}: IProps): JSX.Element => {
  return (
    <button
      type={type}
      className={cx('button', className, {
        '--is-loading': isLoading,
        '--is-secondary': isSecondary,
      })}
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
