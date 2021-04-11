import { getAllFilesFrontMatter } from '@/lib/mdx';

import Container from '@/components/container';
import { ProjectsList } from '@/components/projects';

const description = 'I deploy; Mostly software I (also) use myself.';

export default function Projects({ projectsFrontMatter }) {
  return (
    <Container title="Projects – Moshe Katz" description={description}>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 space-y-3">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black">
          Projects
        </h1>
        <p className="font-semibold text-lg text-gray-600">{description}</p>
        <ProjectsList projectsFrontMatter={projectsFrontMatter} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const projectsFrontMatter = await getAllFilesFrontMatter('projects');

  return { props: { projectsFrontMatter } };
}
