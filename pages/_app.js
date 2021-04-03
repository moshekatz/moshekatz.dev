import '../styles/globals.css';
import React from 'react';

import { MDXProvider } from '@mdx-js/react';

import MDXComponents from '@/components/mdx-components';

const isProduction = process.env.NODE_ENV === 'production';

const attributesMap = new Map();
attributesMap.set('async', true);
attributesMap.set('type', 'module');
attributesMap.set('id', 'reviewerz-script');
attributesMap.set('defer', true);
attributesMap.set('cross-origin', true);

function MyApp({ Component, pageProps }) {
  useScript({
    src:
      'https://rvz.hagever.com/widget.js?id=6c008929-673b-4846-9611-8bb2215df6d1',
    attributesMap,
    ignoreScript: isProduction,
  });
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

function useScript({ src, attributesMap, ignoreScript = false }) {
  // Keep track of script status ("idle", "loading", "ready", "error")
  const [status, setStatus] = React.useState(src ? 'loading' : 'idle');

  React.useEffect(
    () => {
      if (ignoreScript) return;
      // Allow falsy src value if waiting on other data needed for
      // constructing the script URL passed to this hook.
      if (!src) {
        setStatus('idle');
        return;
      }

      // Fetch existing script element by src
      // It may have been added by another intance of this hook
      let script = document.querySelector(`script[src="${src}"]`);

      if (!script) {
        // Create script
        script = document.createElement('script');
        script.setAttribute('src', src);

        attributesMap?.forEach((value, key) => {
          script.setAttribute(key, value);
        });

        script.setAttribute('data-status', 'loading');
        // Add script to document body
        document.body.appendChild(script);

        // Store status in attribute on script
        // This can be read by other instances of this hook
        const setAttributeFromEvent = (event) => {
          script.setAttribute(
            'data-status',
            event.type === 'load' ? 'ready' : 'error'
          );
        };

        script.addEventListener('load', setAttributeFromEvent);
        script.addEventListener('error', setAttributeFromEvent);
      } else {
        // Grab existing script status from attribute and set to state.
        setStatus(script.getAttribute('data-status'));
      }

      // Script event handler to update status in state
      // Note: Even if the script already exists we still need to add
      // event handlers to update the state for *this* hook instance.
      const setStateFromEvent = (event) => {
        setStatus(event.type === 'load' ? 'ready' : 'error');
      };

      // Add event listeners
      script.addEventListener('load', setStateFromEvent);
      script.addEventListener('error', setStateFromEvent);

      // Remove event listeners on cleanup
      return () => {
        if (script) {
          script.removeEventListener('load', setStateFromEvent);
          script.removeEventListener('error', setStateFromEvent);
        }
      };
    },
    [src, ignoreScript] // Only re-run effect if script src changes
  );

  return status;
}

export default MyApp;
