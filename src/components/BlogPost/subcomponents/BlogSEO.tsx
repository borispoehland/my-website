import { NextSeo } from 'next-seo';
import { IBlogPost } from '@cmsclient/queries';
import { urlForImage } from '@cmsclient/sanity';

type IProps = Pick<IBlogPost, 'mainImage' | 'metaDescription' | 'title'>;

const BlogSeo = ({
  mainImage,
  metaDescription,
  title,
}: IProps): JSX.Element => {
  return (
    <NextSeo
      title={title}
      description={metaDescription}
      openGraph={{
        images: [
          {
            url: urlForImage(mainImage.asset),
            width: 1920,
            height: 1080,
            alt: mainImage.alt,
          },
        ],
      }}
    />
  );
};

export default BlogSeo;
