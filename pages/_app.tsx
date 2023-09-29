import '../styles/main.sass';

import 'intersection-observer';

import type { AppProps } from 'next/app';
import Layout from '../src/components/Layout/Layout';
import NProgress from 'nprogress';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import { UIDReset } from 'react-uid';
import {
  useLoadingSpinner,
  usePassiveJqueryEventListeners,
} from '@utils/pagesHooks';
import { DefaultSeo } from 'next-seo';
import getDefaultSEO from '@data/defaultSEO';

import { Montserrat } from 'next/font/google';

const font = Montserrat({ subsets: ['latin'], display: 'swap' });

NProgress.configure({ showSpinner: false, parent: '.page__progress' });

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useLoadingSpinner(router);

  usePassiveJqueryEventListeners();

  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <DefaultSeo {...getDefaultSEO()} />
      <UIDReset prefix="uid_">
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </UIDReset>
    </>
  );
};

export default MyApp;
