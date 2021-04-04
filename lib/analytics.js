import { useEffect } from 'react';
import splitbee from '@splitbee/web';

const isProduction = process.env.NODE_ENV === 'production';

export const useAnalytics = () => {
  useEffect(() => {
    if (isProduction) {
      splitbee.init();
    }
  }, []);
};
