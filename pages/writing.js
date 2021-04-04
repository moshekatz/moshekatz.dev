import { getAllFilesFrontMatter } from '@/lib/mdx';

import Container from '@/components/container';
import { PostsList } from '@/components/posts';

export default function Writing({ postsFrontMatter }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 space-y-3">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black">
          Writing
        </h1>
        <p className="font-semibold text-lg text-gray-500">
          I write. Mostly about code.
        </p>
        <PostsList postsFrontMatter={postsFrontMatter} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const postsFrontMatter = await getAllFilesFrontMatter('posts');

  return { props: { postsFrontMatter } };
}
