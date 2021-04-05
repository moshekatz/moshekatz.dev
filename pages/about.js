// import Link from 'next/link';

import Container from '@/components/container';

export default function About() {
  return (
    <Container title="About - Moshe Katz">
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black mb-4">
          About Me
        </h1>
        <h2 className="text-2xl text-gray-800 font-semibold">
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-200 font-mono">
            TODO:
          </span>{' '}
          long-about
        </h2>
        <div className="prose max-w-none w-full">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>Some bold statemnt.</p>
        </div>
      </article>
    </Container>
  );
}
