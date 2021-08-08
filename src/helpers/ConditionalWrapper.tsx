interface IProps {
  condition: boolean;
  wrapper: (children: JSX.Element) => JSX.Element;
  children: JSX.Element;
}

const ConditionalWrapper = ({ condition, wrapper, children }: IProps) =>
  condition ? wrapper(children) : children;

export default ConditionalWrapper;
