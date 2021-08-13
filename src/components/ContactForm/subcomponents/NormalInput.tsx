import { IConcreteInputProps } from '../converters/ToFormElementConverter';

const NormalInput = ({
  id,
  register,
  rules,
  placeholder,
}: IConcreteInputProps): JSX.Element => {
  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="form-element__input"
      {...register(id, rules)}
    />
  );
};

export default NormalInput;
