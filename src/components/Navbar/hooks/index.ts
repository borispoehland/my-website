import { useEffect } from 'react';

export const useCloseNavAutomatically = (
  closeMenu: JQuery.EventHandler<unknown, void>
): void => {
  useEffect(() => {
    const $window = $(window);
    const $navLinks = $('.nav-link.link, .navbar-brand');
    const $navbarBlurrer = $('.navbar-blurrer');

    $window.on('resize', closeMenu);
    $navLinks.on('click', closeMenu);
    $navbarBlurrer.on('click', closeMenu);

    return (): void => {
      $window.off('resize', closeMenu);
      $navLinks.off('click', closeMenu);
      $navbarBlurrer.off('click', closeMenu);
    };
  }, [closeMenu]);
};

export const useBackgroundBlurWhenNavIsOpen = (isOpen: boolean) => {
  useEffect(() => {
    const $blurrer = $('.navbar-blurrer');
    const $body = $('body');

    if (isOpen) {
      $blurrer.show();
      $body.addClass('--overflow-y-hidden');
    } else {
      $blurrer.hide();
      $body.removeClass('--overflow-y-hidden');
    }
  }, [isOpen]);
};
