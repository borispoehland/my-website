import { atom } from 'recoil';
import { ETheme } from '@enums';

export const sTheme = atom<ETheme>({
  key: 'theme',
  default: ETheme.LIGHT,
});
