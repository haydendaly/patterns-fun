import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import fs from 'fs';
import { globby } from 'globby';
import path from 'path';
import matter from 'gray-matter';
import SyntaxHighlighter from 'react-syntax-highlighter';

import Menu from '@/components/Menu';

const components = { SyntaxHighlighter };

interface ChapterPageProps {
  mdxSource: MDXRemoteSerializeResult;
}

const ChapterPage = ({ mdxSource }: ChapterPageProps) => {
  return (
    <>
      <Menu />
      <div
        style={{ position: 'absolute', left: 250, padding: 20, paddingTop: 10 }}
      >
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </>
  );
};

const getStaticPaths = async () => {
  const files = (await globby(`src/chapters/**/*.mdx`)).map((f) =>
    f
      .replace('src/chapters/', '')
      .replace('.mdx', '')
      .replace('/README', '')
      .split('/'),
  );

  const paths = files.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string[] };
}) => {
  const mdPath =
    slug.length === 3 ? slug.join('/') : slug.join('/') + '/README';
  const markdownWithMeta = fs.readFileSync(
    path.join(`src/chapters/`, mdPath + '.mdx'),
    `utf-8`,
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default ChapterPage;
