import Button from '@components/Button/Button';
import { HiArrowUp } from 'react-icons/hi';
import { useHideScrollToTopButtonWhenOnTop } from '@components/ScrollToTopButton/hooks';
import { reAppendDOMNode } from '@utils/dom';

const ScrollToTopButton = (): JSX.Element => {
  useHideScrollToTopButtonWhenOnTop();

  return (
    <Button
      onClick={({ target }) => {
        $('html, body').animate(
          { scrollTop: 0 },
          {
            duration: 'slow',
            complete() {
              reAppendDOMNode(target as HTMLElement);
            },
          }
        );
      }}
      className="to-top-button"
    >
      <HiArrowUp style={{ marginTop: '-3px' }} />
    </Button>
  );
};

export default ScrollToTopButton;
