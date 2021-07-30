import { atom } from 'recoil';
import { Theme } from '../../@types/enums';

export const sTheme = atom<Theme>({
  key: 'theme',
  default: Theme.DARK,
});
