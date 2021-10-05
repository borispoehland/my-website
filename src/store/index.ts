import { atom } from 'recoil';
import { ETheme } from '@enums';
import { IBreadCrumb } from '@components/Breadcrumbs/Breadcrumbs';
import moment from 'moment';
import { isTimeBetween } from '@utils/calc';

export const sTheme = atom<ETheme>({
  key: 'theme',
  default: isTimeBetween(
    '18:00',
    '07:00',
    `${moment().hours()}:${moment().minutes()}`
  )
    ? ETheme.DARK
    : ETheme.LIGHT,
});

export const sBreadCrumbs = atom<IBreadCrumb[]>({
  key: 'breadcrumbs',
  default: [],
});
