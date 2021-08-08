import { useEffect } from 'react';
import { pxToNumber } from '../../../utils/calc';
import { layoutGridGap } from '../../../utils/css';

export const useSetMobileNavTop = (): void => {
  useEffect(() => {
    const $navbar = $('.navbar');
    const $navbarCollapse = $('.navbar-collapse');
    const $window = $(window);

    const setMobileNavTop = () => {
      const navbarHeight =
        ($navbar.outerHeight(false) as number) + pxToNumber(layoutGridGap);
      $navbarCollapse.css('top', `${navbarHeight}px`);
    };

    setMobileNavTop();
    $window.on('resize', setMobileNavTop);

    return (): void => {
      $window.off('resize', setMobileNavTop);
    };
  }, []);
};

export const useCloseNavAutomatically = (
  closeMenu: JQuery.EventHandler<unknown, void>
): void => {
  useEffect(() => {
    const $window = $(window);
    const navLinks = $('.nav-link.link, .navbar-brand');
    $window.on('resize', closeMenu);
    navLinks.on('click', closeMenu);

    return (): void => {
      $window.off('resize', closeMenu);
      navLinks.off('click', closeMenu);
    };
  }, [closeMenu]);
};
