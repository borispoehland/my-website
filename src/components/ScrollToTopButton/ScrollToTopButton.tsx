import Button from '@components/Button/Button';
import { HiArrowUp } from 'react-icons/hi';
import { useEffect } from 'react';

const ScrollToTopButton = (): JSX.Element => {
  useEffect(() => {
    const $scrollToTopButton = $('.to-top-button');
    const $window = $(window);

    const hideScrollToTopButtonWhenOnTop = () => {
      if (($window.scrollTop() ?? 0) <= 500) {
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
  }, []);

  return (
    <Button
      onClick={() => {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
      }}
      className="to-top-button"
    >
      <HiArrowUp />
    </Button>
  );
};

export default ScrollToTopButton;
