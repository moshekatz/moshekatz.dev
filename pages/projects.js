import { getAllFilesFrontMatter } from '@/lib/mdx';

import Container from '@/components/container';
import { ProjectsList } from '@/components/projects';

export default function Projects({ projectsFrontMatter }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 space-y-3">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black">
          Projects
        </h1>
        <p className="font-semibold text-lg text-gray-500">
          I deploy. Mostly stuff that helps me, but also just for fun.
        </p>
        <ProjectsList projectsFrontMatter={projectsFrontMatter} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const projectsFrontMatter = await getAllFilesFrontMatter('projects');

  return { props: { projectsFrontMatter } };
}
