import Image from 'next/image';
import { urlForImage } from '@cmsclient/sanity';
import CMSBlockContent from '@components/CMSBlockContent/CMSBlockContent';
import GenericSection from '@components/GenericSection/GenericSection';
import { IBlogPost } from '@cmsclient/queries';

type IProps = Pick<IBlogPost, 'author'>;

const BlogAuthor = ({ author: { bio, image, name } }: IProps): JSX.Element => {
  return (
    <GenericSection heading="About the author" id="author" disableAnimation>
      <div className="blog-author">
        <h3 className="blog-author__name">{name}</h3>
        <div className="blog-author__image">
          <Image
            src={urlForImage(image)}
            layout="fill"
            alt={`Image of ${name}`}
          />
        </div>
        <p className="blog-author__bio">
          <CMSBlockContent blocks={bio} />
        </p>
      </div>
    </GenericSection>
  );
};

export default BlogAuthor;
