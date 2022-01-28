import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import SyntaxHighlighter from '@/components/typography/SyntaxHighlighter';

const components = { code: SyntaxHighlighter };
interface PageProps {
  source: MDXRemoteSerializeResult;
}

function Page({ source }: PageProps) {
  return (
    <div
      style={{
        position: 'absolute',
        left: 250,
        padding: 20,
        paddingTop: 10,
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: '100vh',
        width: 'calc(100vw - 250px)',
      }}
    >
      <MDXRemote {...source} components={components} />
    </div>
  );
}

export default Page;
