import { IBlogPost } from '@cmsclient/queries';
import GenericSection from '@components/GenericSection/GenericSection';

type IProps = Pick<IBlogPost, 'hashTags'>;

const BlogHashTags = ({ hashTags }: IProps): JSX.Element => {
  if (!hashTags?.length) return <></>;
  return (
    <GenericSection>
      <div className="blog-hashtags">
        {hashTags.map((hashTag) => {
          return <div key={hashTag}>#{hashTag}</div>;
        })}
      </div>
    </GenericSection>
  );
};

export default BlogHashTags;
