import { BsClock } from 'react-icons/bs';
import { ICommonBlog } from '@cmsclient/queries';

type IProps = Pick<ICommonBlog, 'estimatedReadingTime'>;

const BlogReadingTime = ({ estimatedReadingTime }: IProps): JSX.Element => {
  return (
    <div className="blog-reading-time">
      <BsClock />
      {estimatedReadingTime} min read
    </div>
  );
};

export default BlogReadingTime;
