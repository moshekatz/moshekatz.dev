import { MDXRemote } from 'next-mdx-remote';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import { ProjectLayout } from '@/components/projects';
import MDXComponents from '@/components/mdx-components';

export default function Blog({ mdxSource, frontMatter }) {
  return (
    <ProjectLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </ProjectLayout>
  );
}

export async function getStaticPaths() {
  const projects = await getFiles('projects');

  return {
    paths: projects.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('projects', params.slug);

  return { props: post };
}
