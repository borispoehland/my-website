import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { HTMLProps } from 'react';
import { useCallbackOne, useMemoOne } from 'use-memo-one';
import { arrayRange } from '@utils/arrays';
import CopyToClipboardButton from '@components/CopyToClipboardButton/CopyToClipboardButton';

interface ICodeHighlightRangeProps {
  start: number;
  end: number;
}

interface ICodeProps {
  code: string;
  language: string;
}

interface INodeProps {
  codeBox: ICodeProps;
  codeHighlightRange: ICodeHighlightRangeProps;
}

interface IProps {
  node: INodeProps;
}

const CodeSerializer = ({
  node: { codeBox, codeHighlightRange },
}: IProps): JSX.Element => {
  const lineHighlighterRange: number[] | undefined = useMemoOne(() => {
    if (codeHighlightRange?.start && codeHighlightRange?.end) {
      return arrayRange(codeHighlightRange.start, codeHighlightRange.end);
    }
    return undefined;
  }, [codeHighlightRange]);

  const lineHighlighter = useCallbackOne(
    (lineNumber: number): HTMLProps<HTMLElement> => {
      if (lineHighlighterRange?.includes(lineNumber)) {
        return {
          style: {
            display: 'table-row',
            background: '#630462',
          },
        };
      }
      return {};
    },
    [lineHighlighterRange]
  );

  const { code, language } = codeBox;

  return (
    <div className="blog-code-box">
      <CopyToClipboardButton className="blog-code-box__copy" text={code} />
      <SyntaxHighlighter
        language={language || 'text'}
        style={materialDark}
        wrapLines
        showLineNumbers
        lineProps={lineHighlighter}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSerializer;
