interface IBreakProps {
  style: 'lineBreak' | 'newLineBreak' | 'lightSectionBreak';
}

interface IProps {
  node: IBreakProps;
}

const BreakSerializer = ({ node: { style } }: IProps): JSX.Element => {
  if (style === 'lineBreak') return <br />;
  else if (style === 'lightSectionBreak') return <hr />;
  else
    return (
      <>
        <br />
        <br />
      </>
    );
};

export default BreakSerializer;
