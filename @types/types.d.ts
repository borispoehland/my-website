import { SetStateAction } from 'react';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';

declare global {
  type Fn<I, R> = (input: I) => R;
  type State<T> = [T, ReactDispatch<SetStateAction<T>>];
  type RulesType = Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;
}
