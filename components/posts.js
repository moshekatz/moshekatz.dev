import Link from 'next/link';
import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from '@/components/container';

const editUrl = (slug) =>
  `https://github.com/moshekatz/moshekatz.dev/edit/main/_content/posts/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://moshekatz.dev/writing/${slug}`
  )}`;

export function PostLayout({ children, frontMatter }) {
  const customMeta = {
    title: `${frontMatter.title} - Moshe Katz`,
    description: frontMatter.description,
    date: new Date(frontMatter.published).toISOString(),
    type: 'article',
    ...(frontMatter.image && {
      image: `https://moshekatz.dev${frontMatter.image}`,
    }),
  };

  return (
    <Container {...customMeta}>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto space-y-6 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <div className="flex items-center">
            <Image
              alt="Moshe Katz"
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
              priority
            />
            <p className="text-sm text-gray-700 ml-2">
              {'Moshe Katz / '}
              {format(parseISO(frontMatter.published), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="text-sm text-gray-600 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
          </p>
        </div>
        <div className="prose max-w-none w-full">{children}</div>
        <div className="text-sm text-gray-700">
          <a
            href={discussUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </div>
      </article>
    </Container>
  );
}

export function PostsList({ postsFrontMatter }) {
  return (
    <div className="space-y-4">
      {postsFrontMatter.map((postFrontMatter) => (
        <PostItem
          key={postFrontMatter.slug}
          postFrontMatter={postFrontMatter}
        />
      ))}
    </div>
  );
}

export function PostItem({ postFrontMatter }) {
  const { slug, title, description, published } = postFrontMatter;
  return (
    <div>
      <Link href={`/writing/${slug}`}>
        <a
          className="text-lg font-semibold text-gray-800 inline-block border-b-2 border-transparent opacity-75 hover:border-b-2 hover:border-[#eb5f5e] 
          hover:opacity-100"
        >
          {title}
        </a>
      </Link>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-600 text-sm">
        {format(parseISO(published), 'MMMM dd, yyyy')}
      </p>
    </div>
  );
}
