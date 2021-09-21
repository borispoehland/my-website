import { useEffect } from 'react';

export const useHideScrollToTopButtonWhenOnTop = (threshold: number = 500) => {
  useEffect(() => {
    const $scrollToTopButton = $('.to-top-button');
    const $window = $(window);

    const hideScrollToTopButtonWhenOnTop = () => {
      if (($window.scrollTop() ?? 0) <= threshold) {
        $scrollToTopButton.removeClass('--is-visible');
      } else {
        $scrollToTopButton.addClass('--is-visible');
      }
    };

    hideScrollToTopButtonWhenOnTop();
    $window.on('scroll', hideScrollToTopButtonWhenOnTop);

    return () => {
      $window.off('scroll', hideScrollToTopButtonWhenOnTop);
    };
  }, [threshold]);
};
