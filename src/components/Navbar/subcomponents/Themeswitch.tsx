import { useRecoilState } from 'recoil';
import { useCallback, useEffect } from 'react';
import { sTheme } from '../../../store';
import Switch from '../../Switch/Switch';
import { Theme } from '../../../../@types/enums';
import { BiMoon, BiSun } from 'react-icons/bi';

interface IProps {
  className: string;
}

const ThemeSwitch = ({ className }: IProps): JSX.Element => {
  const [theme, setTheme] = useRecoilState(sTheme);

  useEffect((): void => {
    $('body').attr('data-theme', theme);
  }, [theme]);

  const changeTheme = useCallback((): void => {
    setTheme(1 - theme);
  }, [theme, setTheme]);

  return (
    <Switch
      action={changeTheme}
      ariaLabel={`${
        theme === Theme.LIGHT ? 'Activate' : 'Deactivate'
      } dark mode`}
      className={className}
      left={<BiSun />}
      right={<BiMoon />}
      isRight={theme === Theme.DARK}
    />
  );
};

export default ThemeSwitch;
