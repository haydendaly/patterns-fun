import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import SyntaxHighlighter from 'react-syntax-highlighter';

const components = { SyntaxHighlighter };
interface PageProps {
  source: MDXRemoteSerializeResult;
}

function Page({ source }: PageProps) {
  return <MDXRemote {...source} components={components} />;
}

export default Page;
