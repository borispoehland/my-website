import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { sTheme } from '../../../store';
import Switch from '../../Switch/Switch';
import { Theme } from '../../../../@types/enums';
import { BiMoon, BiSun } from 'react-icons/bi';
import { useCallbackOne } from 'use-memo-one';

interface IProps {
  className: string;
}

const ThemeSwitch = ({ className }: IProps): JSX.Element => {
  const [theme, setTheme] = useRecoilState(sTheme);

  useEffect((): void => {
    $('html').attr('data-theme', theme);
  }, [theme]);

  const changeTheme = useCallbackOne((): void => {
    setTheme(1 - theme);
  }, [theme, setTheme]);

  return (
    <Switch
      action={changeTheme}
      label={`${theme === Theme.LIGHT ? 'Activate' : 'Deactivate'} dark mode`}
      className={className}
      left={<BiSun />}
      right={<BiMoon />}
      isRight={theme === Theme.DARK}
    />
  );
};

export default ThemeSwitch;
