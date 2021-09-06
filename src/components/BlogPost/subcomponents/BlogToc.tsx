import NextLink from '@components/NextLink/NextLink';
import { useSetActiveTocItem } from '@components/BlogPost/hooks';
import { GoPrimitiveDot } from 'react-icons/go';

interface IProps {
  headings: string[];
}

const BlogToc = ({ headings }: IProps): JSX.Element => {
  useSetActiveTocItem();

  return (
    <aside className="blogpost__toc">
      <h3>Table of content</h3>
      <ul className="blog-toc">
        {headings.map((heading) => {
          return (
            <li
              key={heading}
              data-id={encodeURI(heading)}
              className="blog-toc__item"
            >
              <GoPrimitiveDot className="blog-toc__indicator" />
              <NextLink href={`#${heading}`} className="blog-toc__link">
                {heading}
              </NextLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default BlogToc;
