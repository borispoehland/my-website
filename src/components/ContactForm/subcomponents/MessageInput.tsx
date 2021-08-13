import { IConcreteInputProps } from '../converters/ToFormElementConverter';

const MessageInput = ({
  id,
  register,
  rules,
  placeholder,
}: IConcreteInputProps): JSX.Element => {
  return (
    <textarea
      id={id}
      rows={4}
      placeholder={placeholder}
      className="form-element__input"
      {...register(id, rules)}
    />
  );
};

export default MessageInput;
