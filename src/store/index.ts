import { atom } from 'recoil';
import { ETheme } from '../../@types/enums';

export const sTheme = atom<ETheme>({
  key: 'theme',
  default: ETheme.DARK,
});
