import Button from '@components/Button/Button';
import { useRouter } from 'next/router';
import CMSBlockContent from '@components/CMSBlockContent/CMSBlockContent';
import { useMemoOne } from 'use-memo-one';
import NextLink from '@components/NextLink/NextLink';
import useInView from 'react-cool-inview';
import cx from 'classnames';
import { ICommonBlog } from '@cmsclient/queries';
import ImageSerializer from '@components/CMSBlockContent/subcomponents/ImageSerializer';
import BlogTags from '@components/BlogPost/subcomponents/BlogTags';
import BlogReadingTime from '@components/BlogPost/subcomponents/BlogReadingTime';

interface IProps extends ICommonBlog {}

const ToBlogOverviewItemConverter = ({
  shortDescription,
  mainImage,
  slug,
  title,
  tags,
  estimatedReadingTime,
}: IProps): JSX.Element => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  });

  const router = useRouter();

  const blogPostUrl = useMemoOne(() => {
    return `/blog/${slug}`;
  }, [slug]);

  return (
    <section
      key={slug}
      className={cx('blog-item', { '--in-view': inView })}
      ref={observe}
    >
      <h3 className="blog-item__title">{title}</h3>
      <div className="blog-item__image">
        <NextLink href={blogPostUrl}>
          <ImageSerializer node={mainImage} />
        </NextLink>
      </div>
      <p className="blog-item__appetizer">
        <CMSBlockContent blocks={shortDescription} />
      </p>
      <BlogTags tags={tags} />
      <BlogReadingTime estimatedReadingTime={estimatedReadingTime} />
      <Button
        className="blog-item__action"
        onClick={() => router.push(blogPostUrl)}
      >
        Read post
      </Button>
    </section>
  );
};

export default ToBlogOverviewItemConverter;
