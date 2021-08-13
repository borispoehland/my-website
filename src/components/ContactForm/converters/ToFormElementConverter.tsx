import { createElement, FunctionComponent } from 'react';
import { FieldErrors } from 'react-hook-form';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { useFormError } from '../hooks';

export interface IInputs {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface IConcreteInputProps {
  id: keyof IInputs;
  register: UseFormRegister<IInputs>;
  rules: RulesType;
  placeholder: string;
}

export interface IFormElement {
  label: string;
  id: keyof IInputs;
  rules: RulesType;
  Component: FunctionComponent<IConcreteInputProps>;
  placeholder: string;
}

interface IProps extends IFormElement {
  register: UseFormRegister<IInputs>;
  errors: FieldErrors<IInputs>;
}

const ToFormElementConverter = ({
  id,
  register,
  rules,
  placeholder,
  errors,
  label,
  Component,
}: IProps): JSX.Element => {
  const errorMessage = errors[id]?.message;

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
