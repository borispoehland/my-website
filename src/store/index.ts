import { atom } from 'recoil';
import { ETheme } from '@enums';
import { IBreadCrumb } from '@components/Breadcrumbs/Breadcrumbs';

export const sTheme = atom<ETheme>({
  key: 'theme',
  default: ETheme.LIGHT,
});

export const sBreadCrumbs = atom<IBreadCrumb[]>({
  key: 'breadcrumbs',
  default: [],
});
