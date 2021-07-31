import { useEffect } from 'react';

export const useSetMobileNavPosition = (): void => {
  useEffect(() => {
    const setCollapseTopOnNavChange = (): void => {
      const navbarHeight = $('.navbar').outerHeight(false);
      $('.navbar-collapse').css('top', `${navbarHeight}px`);
    };
    const $window = $(window);
    setCollapseTopOnNavChange();
    $window.on('scroll resize', setCollapseTopOnNavChange);
    return (): void => {
      $window.off('scroll resize', setCollapseTopOnNavChange);
    };
  }, []);
};

export const useCloseNavAutomatically = (
  closeMenu: JQuery.EventHandler<unknown, void>
): void => {
  useEffect(() => {
    const $window = $(window);
    const navLinks = $('.nav-link.link');
    $window.on('resize', closeMenu);
    navLinks.on('click', closeMenu);

    return (): void => {
      $window.off('resize', closeMenu);
      navLinks.off('click', closeMenu);
    };
  }, [closeMenu]);
};
