import React from 'react';

const token = '6c008929-673b-4846-9611-8bb2215df6d1';
const isPreview = process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview';

// Could abstract to accept {token, shouldIgnoreScript} as params.
export const useReviewrz = () => {
  const src = `https://rvz.hagever.com/widget.js?id=${token}`;
  const attributesMap = new Map();
  attributesMap.set('type', 'module');
  attributesMap.set('id', 'reviewerz-script');
  attributesMap.set('defer', true);
  attributesMap.set('cross-origin', true);
  useScript({
    src,
    shouldIgnoreScript: !isPreview,
    attributesMap,
  });
};

function useScript({ src, shouldIgnoreScript = false, attributesMap }) {
  // Keep track of script status: "idle" | "loading" | "ready" | "error"
  const [status, setStatus] = React.useState(src ? 'loading' : 'idle');

  React.useEffect(() => {
    if (shouldIgnoreScript) return;

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
      script = document.createElement('script');
      script.setAttribute('src', src);
      script.setAttribute('async', true);
      script.setAttribute('data-status', 'loading');

      attributesMap?.forEach((value, key) => {
        script.setAttribute(key, value);
      });

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
      setStatus(script.getAttribute('data-status'));
    }

    // Script event handler to update status in state
    // Note: Even if the script already exists we still need to add
    // event handlers to update the state for *this* hook instance.
    const setStateFromEvent = (event) => {
      setStatus(event.type === 'load' ? 'ready' : 'error');
    };

    script.addEventListener('load', setStateFromEvent);
    script.addEventListener('error', setStateFromEvent);

    return () => {
      if (script) {
        script.removeEventListener('load', setStateFromEvent);
        script.removeEventListener('error', setStateFromEvent);
      }
    };
  }, [src, ignoreScript]);

  return status;
}
