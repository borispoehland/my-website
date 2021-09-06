import GenericSection from '@components/GenericSection/GenericSection';
import Moment from 'react-moment';
import CommentForm from '@components/Form/CommentForm';
import { IBlogPost } from '@cmsclient/queries';

type IProps = Pick<IBlogPost, 'comments' | 'postId'>;

const BlogComments = ({ comments, postId }: IProps): JSX.Element => {
  return (
    <GenericSection heading="Comments">
      {!comments.length && <p>No comments yet!</p>}
      {comments.map(({ name, comment, _createdAt }) => {
        return (
          <div key={_createdAt} className="blog-comment">
            <div className="blog-comment__name">{name}</div>
            <div className="blog-comment__date">
              <Moment format="MMM DD, YYYY">{_createdAt}</Moment>
            </div>
            <div className="blog-comment__comment">{comment}</div>
          </div>
        );
      })}
      <CommentForm postId={postId} />
    </GenericSection>
  );
};

export default BlogComments;
