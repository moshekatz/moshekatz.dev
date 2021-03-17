import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>
          <Link href="/writing">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Writing
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Projects
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/moshekatzdev">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/moshekatz">
            GitHub
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          {/* TODO: tweets-page */}
          {/* <Link href="/tweets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Tweets
            </a>
          </Link> */}

          {/* TODO: til-page */}
          {/* <Link href="/til">
            <a className="text-gray-500 hover:text-gray-600 transition">til</a>
          </Link> */}

          {/* TODO: snippets-page */}
          {/* <Link href="/snippets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </a>
          </Link> */}

          {/* TODO: uses-page */}
          {/* <Link href="/uses">
            <a className="text-gray-500 hover:text-gray-600 transition">Uses</a>
          </Link> */}
        </div>
      </div>
    </footer>
  );
}

function ExternalLink({ href, children }) {
  return (
    <a
      className="text-gray-500 hover:text-gray-600 transition"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}
