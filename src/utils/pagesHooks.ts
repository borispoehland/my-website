import NProgress from 'nprogress';
import { NextRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { sTheme } from '@store';
import moment from 'moment';
import { isTimeBetween } from '@utils/calc';
import { ETheme } from '@enums';

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

export const usePassiveJqueryEventListeners = () => {
  useEffect(() => {
    jQuery.event.special.touchstart = {
      setup: function (_, ns, handle) {
        // @ts-ignore
        this.addEventListener('touchstart', handle, {
          passive: !ns.includes('noPreventDefault'),
        });
      },
    };
    jQuery.event.special.touchmove = {
      setup: function (_, ns, handle) {
        // @ts-ignore
        this.addEventListener('touchmove', handle, {
          passive: !ns.includes('noPreventDefault'),
        });
      },
    };
    jQuery.event.special.wheel = {
      setup: function (_, ns, handle) {
        // @ts-ignore
        this.addEventListener('wheel', handle, { passive: true });
      },
    };
    jQuery.event.special.mousewheel = {
      setup: function (_, ns, handle) {
        // @ts-ignore
        this.addEventListener('mousewheel', handle, { passive: true });
      },
    };
  }, []);
};

export const useDarkModeOnSpecificTimeRange = (
  startTime: string,
  endTime: string
) => {
  const setTheme = useSetRecoilState(sTheme);

  useEffect(() => {
    const currentTime = moment();
    if (
      isTimeBetween(
        startTime,
        endTime,
        `${currentTime.hours()}:${currentTime.minutes()}`
      )
    ) {
      setTheme(ETheme.DARK);
    }
  }, [endTime, setTheme, startTime]);
};
