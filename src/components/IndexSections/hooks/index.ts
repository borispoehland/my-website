import { MutableRefObject, useEffect, useState } from 'react';
import { IIndexSectionProps } from '../IndexSections';

const delayPercentValue = (percent: number, startAt: number): number => {
  const toReach = 1 - startAt;
  const alreadyReached = percent - startAt;
  return Math.max(alreadyReached / toReach, 0);
};

export const useOpacityChangeOnScroll = ({
  leftLaneOffset,
  rightLaneCliff,
}: IIndexSectionProps) => {
  useEffect(() => {
    $('.left-lane-item').percentAboveBottom(function callback(
      this: HTMLElement,
      percent,
      index
    ): void {
      const isFirst = index === 0;
      if (!isFirst) {
        const top = (1 - percent) * leftLaneOffset;
        $(this).css('top', `${top}px`);
        $(this).css('opacity', percent);
        const $visualizer = $('.right-lane-item').eq(index);
        $visualizer.css('opacity', delayPercentValue(percent, rightLaneCliff));
      }
    });

    return () => {
      $(window).off('resize.percentAboveBottom scroll.percentAboveBottom');
    };
  });
};

export interface IHeightValues {
  indexSectionHeight: number;
  indexSectionStartFromTopInPercent: number;
}

export const useAdaptLeftLaneItemHeight = (
  container: MutableRefObject<HTMLDivElement>
) => {
  const [height, setHeight] = useState<IHeightValues>({
    indexSectionHeight: 0,
    indexSectionStartFromTopInPercent: 0,
  });

  useEffect(() => {
    const $container = $(container.current);
    const $window = $(window);
    const $leftLaneItem = $('.left-lane-item');

    const adaptMobileLaneItemHeight = () => {
      const spaceFromTop = $container.offset()?.top as number;
      const doubleSpaceFromTop = 2 * spaceFromTop;

      const leftLaneHeightAsCss = `calc(100vh - ${doubleSpaceFromTop}px)`;
      $leftLaneItem.css('height', leftLaneHeightAsCss);
      $leftLaneItem.css('min-height', leftLaneHeightAsCss);
      $leftLaneItem.css('visibility', 'visible'); // to prevent FOUC

      const leftLaneHeightAsPx = $leftLaneItem.height() as number;
      const windowHeightAsPx = $window.height() as number;

      setHeight({
        indexSectionHeight: leftLaneHeightAsPx,
        indexSectionStartFromTopInPercent: spaceFromTop / windowHeightAsPx,
      });
    };

    adaptMobileLaneItemHeight();
    $window.on('resize', adaptMobileLaneItemHeight);

    return () => {
      $window.off('resize', adaptMobileLaneItemHeight);
    };
  }, [container]);

  return height;
};
