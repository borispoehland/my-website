import { createElement, FunctionComponent } from 'react';
import { FieldError, FieldErrors } from 'react-hook-form';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { useFormError } from '../hooks';

export interface IContactFormFields {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface ICommentFormFields {
  name: string;
  comment: string;
}

export type IFormFields = IContactFormFields | ICommentFormFields;

export interface IInputProps<T> {
  id: keyof T;
  register: UseFormRegister<T>;
  rules: RulesType;
  placeholder: string;
}

export interface IFormElement<T> {
  label: string;
  id: keyof T;
  rules: RulesType;
  Component: FunctionComponent<IInputProps<T>>;
  placeholder: string;
}

interface IProps<T> extends IFormElement<T> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

const ToFormElementConverter = <T extends IFormFields>({
  id,
  register,
  rules,
  placeholder,
  errors,
  label,
  Component,
}: IProps<T>): JSX.Element => {
  // @ts-ignore
  const errorMessage = (errors[id] as FieldError)?.message;

  useFormError(id, errorMessage);

  return (
    <div key={id} className="form-element" style={{ gridArea: id }}>
      <label htmlFor={id}>{label}</label>
      {createElement(Component, {
        id,
        rules,
        register,
        placeholder,
      })}
      <div className="form-element__error">{errorMessage}</div>
    </div>
  );
};

export default ToFormElementConverter;
