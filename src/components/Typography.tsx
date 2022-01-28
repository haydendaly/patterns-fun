import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegCopy } from 'react-icons/fa';
import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-eighties';

export function Code({ children }) {
  return (
    <div className="code-box">
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
}
