import { ImCheckmark } from 'react-icons/im';
import { IoMdCopy } from 'react-icons/io';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import cx from 'classnames';

interface IProps {
  className?: string;
  text: string;
}

const CopyToClipboardButton = ({ className, text }: IProps): JSX.Element => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <CopyToClipboard text={text} onCopy={() => setIsCopied(true)}>
      <button className={cx('copy-to-clipboard', className)}>
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
  );
};

export default CopyToClipboardButton;
