// import Link from 'next/link';

import Container from '@/components/container';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col max-w-2xl mx-auto space-y-4">
        <Intro />
        <SelectedPosts />
        <SelectedProjects />
      </div>
    </Container>
  );
}

function Intro() {
  return (
    <>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
        Hey, I’m Moshe Katz
      </h1>
      <h2 className="prose text-gray-600 dark:text-gray-400">
        [TODO: short-about]
      </h2>
    </>
  );
}

function SelectedPosts() {
  const posts = [
    { title: 'Why a personal site?', slug: 'why-a-personal-site' },
  ];
  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight text-black dark:text-white">
        Selected Posts
      </h3>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </>
  );
}

function PostItem({ post }) {
  return <div>{post.title}</div>;
}

function SelectedProjects() {
  const projects = [{ name: 'The Flow' }];
  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight text-black dark:text-white">
        Selected Projects
      </h3>
      {projects.map((project) => (
        <ProjectItem key={project.name} project={project} />
      ))}
    </>
  );
}

function ProjectItem({ project }) {
  return <div>{project.name}</div>;
}
