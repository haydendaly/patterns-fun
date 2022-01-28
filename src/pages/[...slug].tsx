import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import fs from 'fs';
import { globby } from 'globby';
import path from 'path';
import matter from 'gray-matter';

import Menu from '@/components/Menu';
import Page from '@/components/Page';

interface PageContainerProps {
  source: MDXRemoteSerializeResult;
}

const PageContainer = ({ source }: PageContainerProps) => {
  return (
    <>
      <Menu />
      <Page source={source} />
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
  const source = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      source,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PageContainer;
