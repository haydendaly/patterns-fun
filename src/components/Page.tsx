import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { Code, H1, H2, H3, H4, H5, H6, P, A } from '@/components/Typography';

const components = {
  code: Code,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  a: A,
};
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
        paddingLeft: 38,
        paddingRight: 38,
        paddingTop: 10,
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: '100vh',
        width: 'calc(100vw - 300px)',
      }}
    >
      <div style={{ maxWidth: 900 }}>
        <MDXRemote {...source} components={components} />
      </div>
    </div>
  );
}

export default Page;
