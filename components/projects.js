import Link from 'next/link';
import Container from '@/components/container';

export function ProjectLayout({ children, frontMatter }) {
  const { name, description, image, stack, repo, live } = frontMatter;
  return (
    <Container
      title={`${name} – Moshe Katz`}
      description={description}
      image={`https://moshekatz.dev${image}`}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto space-y-5 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black">
          {name}
        </h1>
        <ProjectDetails name={name} stack={stack} repo={repo} live={live} />
        <div className="prose max-w-none w-full">{children}</div>
      </article>
    </Container>
  );
}

function ProjectDetails({ name, stack, repo, live }) {
  // const stackArray = stack.split(',');
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-white">
        <tr>
          <th
            scope="col"
            className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
          >
            Stack
          </th>
          <th
            scope="col"
            className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
          >
            Code
          </th>
          <th
            scope="col"
            className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
          >
            Live
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white">
          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {name}
          </td>
          <td className="px-3 sm:px-6 py-4 text-xs text-gray-500">{stack}</td>
          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="inline-block border-b border-[#eb5f5e] text-gray-900 font-semibold"
            >
              Repository
            </a>
          </td>
          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="inline-block border-b border-[#eb5f5e] text-gray-900 font-semibold"
            >
              View App
            </a>
          </td>
        </tr>
      </tbody>
    </table>
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
      <Link
        href={`/projects/${slug}`}
        className="text-lg font-semibold text-gray-800 inline-block border-b-2 border-transparent opacity-75 hover:border-b-2 hover:border-[#eb5f5e] 
          hover:opacity-100"
      >
        {name}
      </Link>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
