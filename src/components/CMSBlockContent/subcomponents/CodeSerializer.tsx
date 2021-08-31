import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import { IoMdCopy } from 'react-icons/io';
import { ImCheckmark } from 'react-icons/im';

interface INodeProps {
  code: string;
  language: string;
}

interface IProps {
  node: INodeProps;
}

const CodeSerializer = ({ node }: IProps): JSX.Element => {
  const [isCopied, setIsCopied] = useState(false);

  if (!node || !node.code) {
    return <></>;
  }
  const { language, code } = node;
  return (
    <div className="code-box">
      <CopyToClipboard text={code} onCopy={() => setIsCopied(true)}>
        <button className="code-box__copy">
          {isCopied ? (
            <>
              <ImCheckmark />
              Copied!
            </>
          ) : (
            <>
              <IoMdCopy />
              Copy to clipboard
            </>
          )}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter language={language || 'text'} style={materialDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSerializer;
