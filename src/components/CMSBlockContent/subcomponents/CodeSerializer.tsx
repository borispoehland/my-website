import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface INodeProps {
  code: string;
  language: string;
}

interface IProps {
  node: INodeProps;
}

const CodeSerializer = ({ node }: IProps): JSX.Element => {
  if (!node || !node.code) {
    return <></>;
  }
  const { language, code } = node;
  return (
    <SyntaxHighlighter language={language || 'text'} style={materialDark}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeSerializer;
