import { ReactNode, useCallback, useState } from 'react';
import cx from 'classnames';
import { useUID } from 'react-uid';

interface IProps {
  action: Fn<void, void>;
  label: string;
  className?: string;
  isRight?: boolean;
  left: ReactNode;
  right: ReactNode;
}

const Switch = ({
  action,
  label,
  className,
  isRight: isRightProp,
  left,
  right,
}: IProps): JSX.Element => {
  const [isRight, setIsRight] = useState(isRightProp);
  const id = useUID();

  const onSwitchChange = useCallback(() => {
    setIsRight((prevState): boolean => !prevState);
    action();
  }, [action]);

  return (
    <button type="button" className={cx('--as-link', className)}>
      <div className="switch">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type="checkbox"
          checked={isRight}
          onChange={onSwitchChange}
        />
        <span className="switch__slider">
          <span className="switch__indicator">{isRight ? right : left}</span>
        </span>
      </div>
    </button>
  );
};

Switch.defaultProps = {
  isRight: true,
};

export default Switch;