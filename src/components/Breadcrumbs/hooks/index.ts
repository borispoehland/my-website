import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IBreadCrumb } from '../Breadcrumbs';
import { getBottomOfElementRelativeToViewport } from '@utils/positions';

export const useBreadcrumbs = (): State<IBreadCrumb[]> => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadCrumb[]>([]);

  useEffect((): void => {
    const linkPath = router.asPath.split('/');
    linkPath.shift();

    const pathArray = linkPath.map((path, i): IBreadCrumb => {
      return {
        label: path.split('#')[0].split('?')[0],
        href: `/${linkPath.slice(0, i + 1).join('/')}`,
      };
    });

    if (router.pathname === '/') {
      setBreadcrumbs([]); // index page, we don't want breadcrumbs here
    } else {
      setBreadcrumbs([{ label: 'Home', href: '/' }, ...pathArray]);
    }
  }, [router]);

  return [breadcrumbs, setBreadcrumbs];
};

export const useSetBreadcrumbsTop = () => {
  useEffect(() => {
    const $navbar = $('.navbar');
    const $breadcrumbs = $('.breadcrumbs');
    const $window = $(window);

    const setBreadcrumbsTop = () => {
      const navbarBottomDistanceFromTop =
        getBottomOfElementRelativeToViewport($navbar);

      $breadcrumbs.css('top', `${navbarBottomDistanceFromTop}px`);
    };

    setBreadcrumbsTop();
    $window.on('resize', setBreadcrumbsTop);

    return (): void => {
      $window.off('resize', setBreadcrumbsTop);
    };
  }, []);
};

const toleranceInPx = 50; // already puts the breadcrumb in the heading when it's 50px away from getting overscrolled
export const useAddLatestH2ToBreadcrumbs = ([
  breadcrumbs,
  setBreadcrumbs,
]: State<IBreadCrumb[]>) => {
  useEffect(() => {
    const $window = $(window);
    const $breadcrumbs = $('.breadcrumbs');

    const addLatesth2ToBreadcrumbs = () => {
      if (!breadcrumbs || !breadcrumbs.length) return;

      const breadCrumbsBottomDistanceFromTop =
        getBottomOfElementRelativeToViewport($breadcrumbs);

      $('h2').each((index, heading) => {
        const headingTopDistanceFromTop = heading.getBoundingClientRect().top;

        const headingIsOverscrolled =
          headingTopDistanceFromTop - breadCrumbsBottomDistanceFromTop <=
          toleranceInPx;

        if (headingIsOverscrolled) {
          setBreadcrumbs((oldCrumbs: IBreadCrumb[]) => {
            if (!oldCrumbs) return;
            const lastCrumb = oldCrumbs[oldCrumbs.length - 1];
            if (!lastCrumb) return;
            const lastCrumbIsThisOne = lastCrumb.index === index;
            const lastCrumbIsHeading = lastCrumb.index !== undefined;
            const lastCrumbIsEarlierHeading =
              lastCrumb.index !== undefined && lastCrumb.index < index;

            if (lastCrumbIsThisOne) {
              // if the current breadcrumb is already added, do nothing
              return oldCrumbs;
            } else if (lastCrumbIsEarlierHeading) {
              // if the current breadcrumb is a newer heading, replace the old one with the new one
              return [
                ...oldCrumbs.slice(0, -1),
                { href: '', index, label: heading.innerText },
              ];
            } else if (lastCrumbIsHeading) {
              // if the current breadcrumb is a older heading, do nothing
              return oldCrumbs;
            } else {
              // if no heading has been added yet, add the current breadcrumb
              return [
                ...oldCrumbs,
                { href: '', index, label: heading.innerText },
              ];
            }
          });
        } else {
          setBreadcrumbs((oldCrumbs: IBreadCrumb[]) => {
            if (!oldCrumbs) return;
            const lastCrumb = oldCrumbs[oldCrumbs.length - 1];
            if (!lastCrumb) return;
            const lastCrumbIsThisOne = lastCrumb.index === index;

            if (lastCrumbIsThisOne) {
              // if the current breadcrumb is not scrolled past anymore, remove it from the breadcrumbs
              return oldCrumbs.slice(0, -1);
            }

            return oldCrumbs;
          });
        }
      });
    };

    // addLatesth2ToBreadcrumbs(); // we don't want it initially, only when scrolling
    $window.on('scroll', addLatesth2ToBreadcrumbs);

    return () => {
      $window.off('scroll', addLatesth2ToBreadcrumbs);
    };
  }, [breadcrumbs, setBreadcrumbs]);
};
