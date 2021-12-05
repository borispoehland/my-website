import { IInputProps, IFormFields } from '../converters/ToFormElementConverter';
import { Path } from 'react-hook-form';

const NormalInput = <T extends IFormFields>({
  id,
  register,
  rules,
  placeholder,
}: IInputProps<T>): JSX.Element => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="form-element__input"
      // @ts-ignore
      {...register(id as Path<T>, rules)}
    />
  );
};

export default NormalInput;
