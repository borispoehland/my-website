import Button from '@components/Button/Button';
import { HiArrowUp } from 'react-icons/hi';
import { useHideScrollToTopButtonWhenOnTop } from '@components/ScrollToTopButton/hooks';

const ScrollToTopButton = (): JSX.Element => {
  useHideScrollToTopButtonWhenOnTop();

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
