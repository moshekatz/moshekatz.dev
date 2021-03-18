import Link from 'next/link';

import { getAllFilesFrontMatter } from '@/lib/mdx';

import Container from '@/components/container';
import { PostsList } from '@/components/posts';
import { ProjectsList } from '@/components/projects';

export async function getStaticProps() {
  const [postsFrontMatter, projectsFrontMatter] = await Promise.all([
    getAllFilesFrontMatter('posts'),
    getAllFilesFrontMatter('projects'),
  ]);

  const selectedPostsFrontMatter = postsFrontMatter.filter(
    (postsFrontMatter) => postsFrontMatter.isSelected
  );

  const selectedProjectsFrontMatter = projectsFrontMatter.filter(
    (projectFrontMatter) => projectFrontMatter.isSelected
  );

  return { props: { selectedPostsFrontMatter, selectedProjectsFrontMatter } };
}

export default function Home({
  selectedPostsFrontMatter,
  selectedProjectsFrontMatter,
}) {
  return (
    <Container>
      <div className="flex flex-col max-w-2xl mx-auto space-y-6">
        <Intro />
        <SelectedPosts selectedPostsFrontMatter={selectedPostsFrontMatter} />
        <SelectedProjects
          selectedProjectsFrontMatter={selectedProjectsFrontMatter}
        />
      </div>
    </Container>
  );
}

function Intro() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Hey, I’m Moshe Katz 👋
      </h1>
      <h2 className="text-2xl text-gray-800 font-semibold">
        <span className="bg-gradient-to-r from-yellow-300 to-yellow-200 font-mono">
          TODO:
        </span>{' '}
        short-about
      </h2>
      <p className="text-gray-500">
        Lorem ipsum dolor sit{' '}
        <Link href="/projects">
          <a className="inline-block bg-gradient-to-r from-red-200 to-red-100 text-gray-800 hover:bg-red-200 hover:text-gray-900">
            amet
          </a>
        </Link>
        ,{' '}
        <Link href="/writing">
          <a className="inline-block bg-gradient-to-r from-red-200 to-red-100 text-gray-800 hover:bg-red-200 hover:text-gray-900">
            ullamco
          </a>
        </Link>{' '}
        adipiscing{' '}
        <Link href="/about">
          <a className="inline-block bg-gradient-to-r from-red-200 to-red-100 text-gray-800 hover:bg-red-200 hover:text-gray-900">
            elit
          </a>
        </Link>
        , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
      <Link href="/about">
        <a className="inline-block bg-gradient-to-r from-red-200 to-red-100 text-gray-800 hover:text-gray-900">
          More about me{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 inline-block"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
}

function SelectedPosts({ selectedPostsFrontMatter }) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl tracking-tight font-extrabold text-gray-900">
        Selected Posts
      </h3>
      <PostsList postsFrontMatter={selectedPostsFrontMatter} />
      <Link href="/writing">
        <a className="inline-block hover:bg-gradient-to-r hover:from-red-200 hover:to-red-100 hover:text-gray-800">
          all posts{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 inline-block"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
}

function SelectedProjects({ selectedProjectsFrontMatter }) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl tracking-tight font-extrabold text-gray-900">
        Selected Projects
      </h3>
      <ProjectsList projectsFrontMatter={selectedProjectsFrontMatter} />
      <Link href="/projects">
        <a className="inline-block hover:bg-gradient-to-r hover:from-red-200 hover:to-red-100 hover:text-gray-800">
          all projects{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 inline-block"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
}
