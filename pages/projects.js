import { getAllFilesFrontMatter } from '@/lib/mdx';

import Container from '@/components/container';
import { ProjectsList } from '@/components/projects';

export default function Projects({ projectsFrontMatter }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <ProjectsList projectsFrontMatter={projectsFrontMatter} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const projectsFrontMatter = await getAllFilesFrontMatter('projects');

  return { props: { projectsFrontMatter } };
}
