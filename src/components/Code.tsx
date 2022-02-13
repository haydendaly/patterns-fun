import { oneDark } from '@codemirror/theme-one-dark';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';

export default function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      minHeight="200"
      width="100%"
      theme={oneDark}
      extensions={[python()]}
      onChange={(value, viewUpdate) => {
        console.log('value:', value);
      }}
    />
  );
}
