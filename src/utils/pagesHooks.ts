import NProgress from 'nprogress';
import { NextRouter } from 'next/router';
import { useEffect } from 'react';

/**
 * Contains all hooks that are used in the /pages directory
 **/

const startLoader = () => NProgress.start();
const endLoader = () => NProgress.done();

export const useLoadingSpinner = (router: NextRouter) => {
  useEffect(() => {
    router.events.on('routeChangeStart', startLoader);

    router.events.on('routeChangeComplete', endLoader);

    router.events.on('routeChangeError', endLoader);

    return () => {
      router.events.off('routeChangeStart', startLoader);

      router.events.off('routeChangeComplete', endLoader);

      router.events.off('routeChangeError', endLoader);
    };
  }, [router.events]);
};
