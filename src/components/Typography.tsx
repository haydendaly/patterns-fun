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
        customStyle={{ borderRadius: 6, padding: 15, marginBottom: 0 }}
        language="python"
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export const H1 = (props: any) => <h1 {...props} className="typography-h1" />;
export const H2 = (props: any) => <h2 {...props} className="typography-h2" />;
export const H3 = (props: any) => <h3 {...props} className="typography-h3" />;
export const H4 = (props: any) => <h4 {...props} className="typography-h4" />;
export const H5 = (props: any) => <h5 {...props} className="typography-h5" />;
export const H6 = (props: any) => <h6 {...props} className="typography-h6" />;
export const P = (props: any) => <p {...props} className="typography-p" />;
export const A = (props: any) => <a {...props} className="typography-a" />;
