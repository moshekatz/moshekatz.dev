import Link from 'next/link';
import Container from '@/components/container';

export function ProjectLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.name} – Moshe Katz`}
      description={frontMatter.description}
      image={`https://moshekatz.dev${frontMatter.image}`}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto space-y-6 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black">
          {frontMatter.name}
        </h1>
        <div className="prose max-w-none w-full">{children}</div>
      </article>
    </Container>
  );
}

export function ProjectsList({ projectsFrontMatter }) {
  return (
    <div className="space-y-4">
      {projectsFrontMatter.map((projectFrontMatter) => (
        <ProjectItem
          key={projectFrontMatter.name}
          projectFrontMatter={projectFrontMatter}
        />
      ))}
    </div>
  );
}

export function ProjectItem({ projectFrontMatter }) {
  const { slug, name, description } = projectFrontMatter;
  return (
    <div>
      <Link href={`/projects/${slug}`}>
        <a
          className="text-lg font-semibold text-gray-800 inline-block border-b-2 border-transparent opacity-75 hover:border-b-2 hover:border-[#eb5f5e] 
          hover:opacity-100"
        >
          {name}
        </a>
      </Link>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
