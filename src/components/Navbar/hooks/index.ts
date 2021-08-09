import { useEffect } from 'react';
import { getBottomOfElementRelativeToViewport } from '../../../utils/positions';

export const useSetMobileNavTop = (): void => {
  useEffect(() => {
    const $navbar = $('.navbar');
    const $navbarCollapse = $('.navbar-collapse');
    const $window = $(window);

    const setMobileNavTop = () => {
      const navbarBottomDistanceFromTop =
        getBottomOfElementRelativeToViewport($navbar);
      $navbarCollapse.css('top', `${navbarBottomDistanceFromTop}px`);
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
