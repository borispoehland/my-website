interface IProps extends HasChildren {
  heading: string;
}

const LegalItem = ({ children, heading }: IProps): JSX.Element => {
  return (
    <div>
      <h3>{heading}</h3>
      <div>{children}</div>
    </div>
  );
};

export default LegalItem;
