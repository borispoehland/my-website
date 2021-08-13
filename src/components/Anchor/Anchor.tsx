interface IProps {
  id: string;
}

const Anchor = ({ id }: IProps): JSX.Element => {
  return <div className="anchor" id={id} />;
};

export default Anchor;
