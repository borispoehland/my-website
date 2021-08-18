import { RefObject, useEffect } from 'react';

/**
 * Contains all hooks that are shared between components
 **/

export const useFadeInTag = (
  ref: RefObject<HTMLElement>,
  setVisible: StateSet<boolean>
) => {
  useEffect(() => {
    const element = ref.current;

    if (element) {
      const observer = new IntersectionObserver((entries): void => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      });

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }
  }, [ref, setVisible]);
};
