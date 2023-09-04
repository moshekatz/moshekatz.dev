import Link from 'next/link';

import Container from '@/components/container';

export default function About() {
  return (
    <Container title="About - Moshe Katz">
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full">
        <div className="prose max-w-none w-full">
          <p>
            <span className="font-semibold">Hey, I'm Moshe.</span> A software
            developer currently living in Tel Aviv.
          </p>

          <p>
            Having finished my B.Sc. (Computer Science) at 19 years old, I’ve
            developed an extensive skillset from an early age.
          </p>

          <p>
            In the past, I served at the IDF building web applications, leading
            a team of 10 developers incrementaly adopt React into our Angular
            1.X web app, and leveling up our technology stack along the way
            using tools like Typescript, Webpack, Eslint, Prettier and Jest.
          </p>

          <p>
            I was also an Aide-de camp to the C4I Technology Division Commander,
            where I was in charge of the ongoing management of operational and
            technological unit of more than 3,000 officers and soldiers. More
            importantly, during that time I was a core contributer to the design
            and implementation of the unit's strategy, culture and core values,
            learning tons of lessons along the way.
          </p>

          <p>
            You can find me on{' '}
            <a
              href="https://twitter.com/moshekatzdev"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>{' '}
            where I talk about bridging the gap between UX and UI, on{' '}
            <a
              href="https://github.com/moshekatz"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{' '}
            where I’m building in the open, and also right here on this website
            where I{' '}
            <Link href="/writing">
              <a>learn in public</a>
            </Link>{' '}
            and share behind the scenes of the{' '}
            <Link href="/projects">
              <a>projects I work on.</a>
            </Link>
          </p>

          <p>
            If you'd like to get in touch with me{' '}
            <a href="mailto:me@moshekatz.dev">Email</a> and{' '}
            <a
              href="https://twitter.com/moshekatzdev"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>{' '}
            are your best channels. :)
          </p>
        </div>
      </article>
    </Container>
  );
}
