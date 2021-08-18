import { useEffect, useState } from 'react';
import { layoutGridGap } from '@utils/css';
import { pxToNumber } from '@utils/calc';

const delayPercentValue = (percent: number, startAt: number): number => {
  const toReach = 1 - startAt;
  const alreadyReached = percent - startAt;
  return Math.max(alreadyReached / toReach, 0);
};

export const useOpacityChangeOnScroll = (
  topOffset: number,
  startVisualizerAtPercent: number
) => {
  useEffect(() => {
    $('.left-lane-item').percentAboveBottom(function callback(
      this: HTMLElement,
      percent,
      index
    ): void {
      const isFirst = index === 0;
      if (!isFirst) {
        const top = (1 - percent) * topOffset;
        $(this).css('top', `${top}px`);
        $(this).css('opacity', percent);
        const $visualizer = $('.right-lane-item').eq(index);
        $visualizer.css(
          'opacity',
          delayPercentValue(percent, startVisualizerAtPercent)
        );
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

export const useAdaptLeftLaneItemHeight = () => {
  const [height, setHeight] = useState<IHeightValues>({
    indexSectionHeight: 0,
    indexSectionStartFromTopInPercent: 0,
  });

  useEffect(() => {
    const $navbar = $('.navbar');
    const $window = $(window);
    const $leftLaneItem = $('.left-lane-item');

    const adaptMobileLaneItemHeight = () => {
      const navbarHeight = $navbar.outerHeight(false) as number;

      const spaceFromTop = navbarHeight + 3 * pxToNumber(layoutGridGap); // above nav, below nav, below breadcrumbs
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
  }, []);

  return height;
};
