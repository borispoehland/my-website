import { IConcreteInputProps } from '../converters/ToFormElementConverter';

const EmailInput = ({
  id,
  register,
  rules,
  placeholder,
}: IConcreteInputProps): JSX.Element => {
  return (
    <input
      type="email"
      id={id}
      placeholder={placeholder}
      className="form-element__input"
      {...register(id, rules)}
    />
  );
};

export default EmailInput;
