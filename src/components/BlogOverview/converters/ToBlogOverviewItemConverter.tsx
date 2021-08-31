import Button from '@components/Button/Button';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { urlForImage } from '@cmsclient/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import CMSBlockContent from '@components/CMSBlockContent/CMSBlockContent';
import { useMemoOne } from 'use-memo-one';
import NextLink from '@components/NextLink/NextLink';
import useInView from 'react-cool-inview';
import cx from 'classnames';

interface IProps {
  slug: string;
  title: string;
  shortDescription: any[];
  mainImage: SanityImageSource;
  tags: string[];
}

const ToBlogOverviewItemConverter = ({
  shortDescription,
  mainImage,
  slug,
  title,
  tags,
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
          <Image
            width={1920}
            height={1080}
            alt={`Cover Image for ${title}`}
            src={
              urlForImage(mainImage).height(1080).width(1920).url() ??
              '/img/placeholder.png'
            }
          />
        </NextLink>
      </div>
      <p className="blog-item__appetizer">
        <CMSBlockContent blocks={shortDescription} />
      </p>
      {tags?.length && (
        <div className="blog-item__tags">
          {tags.map((tag) => {
            return (
              <div key={tag} className="blog-tag">
                {tag}
              </div>
            );
          })}
        </div>
      )}
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
