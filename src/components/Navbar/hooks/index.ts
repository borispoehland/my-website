import { useEffect } from 'react';
import { getBottomOfElementRelativeToViewport } from '@utils/positions';

export const useSetMobileNavCollapseTop = (): void => {
  useEffect(() => {
    const $navbar = $('.navbar');
    const $navbarCollapse = $('.navbar-collapse');
    const $window = $(window);

    const setMobileNavCollapseTop = () => {
      const navbarBottomDistanceFromTop =
        getBottomOfElementRelativeToViewport($navbar);
      $navbarCollapse.css('top', `${navbarBottomDistanceFromTop}px`);
    };

    setMobileNavCollapseTop();
    $window.on('resize', setMobileNavCollapseTop);

    return (): void => {
      $window.off('resize', setMobileNavCollapseTop);
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

/**
 * When we do the transition initially, Brave browser on Android causes problems.
 * So we only add it once the user opens the navbar
 * @param isOpen
 */
export const useNavbarCollapseTransitionButNotInitially = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      $('.navbar-collapse').css('transition', 'transform 0.4s ease-out');
    }
  }, [isOpen]);
};
