import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { Code } from '@/components/Typography';

const components = { code: Code };
interface PageProps {
  source: MDXRemoteSerializeResult;
}

function Page({ source }: PageProps) {
  return (
    <div
      style={{
        position: 'absolute',
        left: 300,
        padding: 20,
        paddingTop: 10,
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: '100vh',
        width: 'calc(100vw - 300px)',
      }}
    >
      <MDXRemote {...source} components={components} />
    </div>
  );
}

export default Page;
