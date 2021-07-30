import '../styles/globals.sass';
import type { AppProps } from 'next/app';
import Layout from '../src/components/Layout/Layout';
import NProgress from 'nprogress';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { RecoilRoot } from 'recoil';

NProgress.configure({ showSpinner: false, parent: '.page__progress' });

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const computedOnce = useRef({
    startLoadingSpinner: (): void => {
      NProgress.start();
    },
    endLoadingSpinner: (): void => {
      NProgress.done();
    },
  });

  useEffect(() => {
    const { startLoadingSpinner, endLoadingSpinner } = computedOnce.current;

    router.events.on('routeChangeStart', startLoadingSpinner);

    router.events.on('routeChangeComplete', endLoadingSpinner);

    router.events.on('routeChangeError', endLoadingSpinner);

    $('body').attr('data-theme', 'light');

    return () => {
      router.events.off('routeChangeStart', startLoadingSpinner);

      router.events.off('routeChangeComplete', endLoadingSpinner);

      router.events.off('routeChangeError', endLoadingSpinner);
    };
  }, [router.events]);

  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};

export default MyApp;
