import '../styles/globals.css';

import { MDXProvider } from '@mdx-js/react';

import MDXComponents from '@/components/mdx-components';

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
