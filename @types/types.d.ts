import { SetStateAction } from 'react';

declare global {
  type Fn<I, R> = (input: I) => R;
  type State<T> = [T, ReactDispatch<SetStateAction<T>>];
}
