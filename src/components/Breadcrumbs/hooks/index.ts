import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IBreadCrumb } from '../Breadcrumbs';
import { pxToNumber } from '../../../utils/calc';
import { layoutGridGap } from '../../../utils/css';

export const useFetchBreadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadCrumb[]>([]);

  useEffect((): void => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i): IBreadCrumb => {
        return { label: path, href: `/${linkPath.slice(0, i + 1).join('/')}` };
      });

      if (pathArray.length === 1 && pathArray[0].href === '/') {
        setBreadcrumbs([]); // index page, we don't want breadcrumbs here
      } else {
        setBreadcrumbs([{ label: 'Home', href: '/' }, ...pathArray]);
      }
    }
  }, [router]);

  return breadcrumbs;
};

export const useSetBreadcrumbsTop = () => {
  useEffect(() => {
    const $navbar = $('.navbar');
    const $breadcrumbs = $('.breadcrumbs');
    const $window = $(window);

    const setBreadcrumbsTop = () => {
      const navbarHeight = $navbar.outerHeight(false) as number;
      // TODO: offset().top
      const spaceFromTop = navbarHeight + pxToNumber(layoutGridGap); // above nav

      $breadcrumbs.css('top', `${spaceFromTop}px`);
    };

    setBreadcrumbsTop();
    $window.on('resize', setBreadcrumbsTop);

    return (): void => {
      $window.off('resize', setBreadcrumbsTop);
    };
  });
};
