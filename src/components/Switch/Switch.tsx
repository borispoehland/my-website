import { ReactNode, useState } from 'react';
import cx from 'classnames';

interface IProps {
  action: Fn<void, void>;
  ariaLabel: string;
  className?: string;
  isRight?: boolean;
  left: ReactNode;
  right: ReactNode;
}

const Switch = ({
  action,
  ariaLabel,
  className,
  isRight: isRightProp,
  left,
  right,
}: IProps): JSX.Element => {
  const [isRight, setIsRight] = useState(isRightProp);

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={cx('--as-link', className)}
    >
      <label className="switch">
        <input
          type="checkbox"
          checked={isRight}
          onChange={(): void => {
            setIsRight((prevState): boolean => !prevState);
            action();
          }}
        />
        <span className="switch__slider">
          <span className="switch__indicator">{isRight ? right : left}</span>
        </span>
      </label>
    </button>
  );
};

Switch.defaultProps = {
  isRight: true,
};

export default Switch;
