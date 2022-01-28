import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegCopy } from 'react-icons/fa';
import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/hljs/dracula';

function SyntaxHighlighterWrapper({ children }) {
  return (
    <div>
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
        customStyle={{ borderRadius: 10, padding: 10 }}
        language="python"
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default SyntaxHighlighterWrapper;
