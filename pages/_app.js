import '../styles/globals.css';
import React from 'react';
import { useAnalytics } from '../lib/analytics';
import { useReviewrz } from '../lib/reviewerz';

import { MDXProvider } from '@mdx-js/react';

import MDXComponents from '@/components/mdx-components';

function MyApp({ Component, pageProps }) {
  useAnalytics();
  useReviewrz();

  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
