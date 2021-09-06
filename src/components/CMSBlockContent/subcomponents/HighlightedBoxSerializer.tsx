import CMSBlockContent from '@components/CMSBlockContent/CMSBlockContent';

interface IHighlightedBoxProps {
  text: string;
}

interface IProps {
  node: IHighlightedBoxProps;
}

const HighlightedBoxSerializer = ({ node: { text } }: IProps): JSX.Element => {
  return (
    <div className="highlight">
      <CMSBlockContent blocks={text} />
    </div>
  );
};

export default HighlightedBoxSerializer;
