import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Container(props) {
  useGreeting();
  const router = useRouter();
  const { children, ...customMeta } = props;
  const meta = {
    title: 'Moshe Katz',
    description: `Developer, Writer, Obsessed with simplicity.`,
    image: 'https://moshekatz.dev/static/images/banner.png',
    type: 'website',
    ...customMeta,
  };

  return (
    <div className="bg-white">
      <Head>
        <title>moshekatz.dev</title>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://moshekatz.dev${router.asPath}`}
        />
        <link rel="canonical" href={`https://moshekatz.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Moshe Katz" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@moshekatzdev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navigation />
      <main
        id="skip"
        className="bg-gray-50 min-h-screen px-4 py-24 md:py-32 lg:px-0"
      >
        {children}
      </main>
    </div>
  );
}

const routes = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Writing',
    path: '/writing',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
];

function Navigation() {
  return (
    <div className="fixed top-0 z-10 w-full py-2 bg-white border-b border-gray-400 bg-opacity-80 shadow-sm filter-blur">
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <MobileNav />
      <DesktopNav />
    </div>
  );
}

function MobileNav() {
  const router = useRouter();
  const currPathName = router.pathname;
  const [isExpanded, setIsExpanded] = React.useState(false);
  const mobileTitle =
    currPathName === '/'
      ? 'Home'
      : routes
          .filter((r) => r.path !== '/')
          .find((r) => currPathName.includes(r.path))?.label;
  return (
    <div className="grid grid-cols-1 md:hidden">
      <div className="flex items-center pr-4 text-primary">
        <button
          className="p-4 pl-4 -my-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <span className="sr-only">Close navigation menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </>
          ) : (
            <>
              <span className="sr-only">Open navigation menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </>
          )}
        </button>
        <p className="font-sans text-sm font-semibold clamp-1 text-primary">
          {mobileTitle}
        </p>
      </div>
      {isExpanded && (
        <div className="w-full h-px mt-2 bg-gray-1000 bg-opacity-10" />
      )}
      {isExpanded && (
        <nav>
          {routes.map((route) => {
            const defaultClasses = `flex font-sans items-center pl-12 py-4 font-semibold text-sm text-primary text-opacity-80`;

            return (
              <Link href={route.path} key={route.path}>
                <a className={`${defaultClasses}`}>{route.label}</a>
              </Link>
            );
          })}
        </nav>
      )}
    </div>
  );
}

function DesktopNav() {
  const router = useRouter();

  return (
    <nav className="hidden max-w-screen-md grid-cols-4 gap-1 mx-auto md:grid">
      {routes.map((route) => {
        const isActive = route.path === router.pathname;
        const defaultClasses =
          'font-sans font-semibold flex rounded items-center text-opacity-40 justify-center py-2 text-sm';
        {
          /* const activeClasses = 'bg-gray-900 bg-opacity-5 text-primary'; */
        }
        const activeClasses =
          'bg-gradient-to-br from-[#eb5f5e] to-[#f9b353] text-gray-900 text-opacity-100 opacity-75';
        const inactiveClasses =
          'hover:bg-gradient-to-br hover:from-[#eb5f5e] hover:to-[#f9b353] hover:text-gray-900 hover:text-opacity-100 hover:opacity-50';
        return (
          <Link href={route.path} key={route.path}>
            <a
              className={`
                ${defaultClasses} 
                ${isActive ? activeClasses : inactiveClasses}`}
            >
              {route.label}
            </a>
          </Link>
        );
      })}
    </nav>
  );
}

function useGreeting() {
  React.useEffect(() => {
    let msg = `%c Hi 👋! Welcome to moshekatz.dev! 😍`;
    let styles = [
      `font-size: 16px`,
      `font-family: monospace`,
      `background: white`,
      `display: inline-block`,
      `color: black`,
      `padding: 8px 19px`,
      `border: 1px dashed;`,
    ].join(';');
    console.log(msg, styles);
  }, []);
}
