import Moment from 'react-moment';
import BlogTags from '@components/BlogPost/subcomponents/BlogTags';
import { IBlogPost } from '@cmsclient/queries';
import BlogReadingTime from '@components/BlogPost/subcomponents/BlogReadingTime';

type IProps = Pick<IBlogPost, 'tags' | 'publishedAt' | 'estimatedReadingTime'>;

const BlogInfo = ({
  tags,
  publishedAt,
  estimatedReadingTime,
}: IProps): JSX.Element => {
  return (
    <section className="blog-info">
      <div className="blog-info__published-at">
        <Moment format="MMM DD, YYYY">{publishedAt}</Moment>
      </div>
      <BlogReadingTime estimatedReadingTime={estimatedReadingTime} />
      <BlogTags tags={tags} />
    </section>
  );
};

export default BlogInfo;
