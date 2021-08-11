interface IProps {
  id: string;
}

const Anchor = ({ id }: IProps): JSX.Element => {
  return <a className="anchor" id={id} />;
};

export default Anchor;
