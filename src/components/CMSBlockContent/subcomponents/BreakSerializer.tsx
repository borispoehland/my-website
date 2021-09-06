interface IBreakProps {
  style: 'lineBreak' | 'newLineBreak';
}

interface IProps {
  node: IBreakProps;
}

const BreakSerializer = ({ node: { style } }: IProps): JSX.Element => {
  if (style === 'lineBreak') return <br />;
  else
    return (
      <>
        <br />
        <br />
      </>
    );
};

export default BreakSerializer;
