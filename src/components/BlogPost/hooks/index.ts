import { useEffect, useState } from 'react';
import { getTopOfElementRelativeToViewport } from '@utils/positions';
import { useMemoOne } from 'use-memo-one';
import { BlockContentType } from '@sanity/block-content-to-react';

export const useSetActiveTocItem = () => {
  useEffect(() => {
    const $window = $(window);

    const setActiveTocItem = () => {
      const activeHeadingID = $('.blogpost h2')
        .filter((_, h2) => getTopOfElementRelativeToViewport($(h2)) <= 10)
        .last()
        .attr('id');

      const allTocItems = $('.blog-toc__item');

      allTocItems.removeClass('--is-active');

      allTocItems
        .filter(`[data-id="${activeHeadingID}"]`)
        .addClass('--is-active');
    };

    setActiveTocItem();
    $window.on('scroll', setActiveTocItem);

    return () => {
      $window.off('scroll', setActiveTocItem);
    };
  }, []);
};

export const useHeadingsForToc = () => {
  const [headings, setHeadings] = useState<string[]>([]);

  useEffect(() => {
    const $headings = $('.blogpost-block h2');
    setHeadings($headings.toArray().map((heading) => decodeURI(heading.id)));
  }, []);

  return headings;
};

export const useSplitContentOnSectionBreaks = (content: BlockContentType) => {
  return useMemoOne(() => {
    return content.reduce(
      function (acc: BlockContentType[], curr: BlockContentType) {
        // if we encounter a sanity "break" item, start a new section
        if (curr.style === 'sectionBreak') {
          return [...acc, []];
        }
        // else push the current content block into the current section
        else {
          acc[acc.length - 1].push(curr);
          return acc;
        }
      },
      [[]]
    );
  }, [content]);
};
