import { FC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegCopy } from 'react-icons/fa';
import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-eighties';

export const Code: FC = ({ children }) => {
  return (
    <div className="code-box">
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <CopyToClipboard onCopy={() => console.log('copied')} text={children}>
        <button
          type="button"
          aria-label="Copy to Clipboard Button"
          className="copy-to-clipboard"
        >
          {<FaRegCopy />}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter
        style={style}
        customStyle={{ borderRadius: 8, padding: 20, paddingBottom: 5 }}
        language="python"
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
