import { getAllFilesFrontMatter } from '@/lib/mdx';

import Container from '@/components/container';
import { PostsList } from '@/components/posts';

export default function Writing({ postsFrontMatter }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black">
          Writing
        </h1>
        <PostsList postsFrontMatter={postsFrontMatter} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const postsFrontMatter = await getAllFilesFrontMatter('posts');

  return { props: { postsFrontMatter } };
}
