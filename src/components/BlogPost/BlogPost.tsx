import Toc from '@components/BlogPost/subcomponents/Toc';
import CMSBlockContent from '@components/CMSBlockContent/CMSBlockContent';
import { useEffect, useState } from 'react';
import { getTopOfElementRelativeToViewport } from '@utils/positions';
import GenericSection from '@components/GenericSection/GenericSection';

interface IProps {
  body: any[];
}

const BlogPost = ({ body }: IProps): JSX.Element => {
  const grouped = body.reduce(
    function (acc, curr, i) {
      if (curr._type === 'sectionBreak') return [...acc, []];
      else {
        acc[acc.length - 1].push(curr);
        return acc;
      }
    },
    [[]]
  );

  const [headings, setHeadings] = useState<string[]>([]);

  useEffect(() => {
    const $headings = $('.blogpost-block h2');
    setHeadings($headings.toArray().map((heading) => decodeURI(heading.id)));
  }, []);

  useEffect(() => {
    const $window = $(window);

    const foo = () => {
      const activeHeadingID = $('.blogpost h2')
        .filter((_, el) => {
          const $heading = $(el);
          return getTopOfElementRelativeToViewport($heading) <= 10;
        })
        .last()
        .attr('id');

      const allTocItems = $('.toc__item');

      allTocItems.removeClass('--is-active');

      allTocItems
        .filter(`[data-id="${activeHeadingID}"]`)
        .addClass('--is-active');
    };

    foo();
    $window.on('scroll', foo);

    return () => {
      $window.off('scroll', foo);
    };
  }, []);

  return (
    <GenericSection heading="" shortIntro="" className="blogpost">
      <Toc headings={headings} />
      {/*<GenericSection heading="" shortIntro="" style={{ display: 'block' }}>
          <CMSBlockContent blocks={body} />
        </GenericSection>*/}
      <div className="blogpost__content">
        {grouped.map((group: any[]) => {
          return (
            <section key={group[0]._key} className="blogpost-block">
              <CMSBlockContent blocks={group} />
            </section>
          );
        })}
      </div>
    </GenericSection>
  );
};

export default BlogPost;
