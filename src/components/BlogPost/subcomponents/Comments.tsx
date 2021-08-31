import GenericSection from '@components/GenericSection/GenericSection';
import Moment from 'react-moment';
import CommentForm from '@components/Form/CommentForm';

interface IComment {
  _id: string;
  name: string;
  comment: string;
  _createdAt: string;
}

interface IProps {
  comments: IComment[];
  postId: string;
}

const Comments = ({ comments, postId }: IProps): JSX.Element => {
  return (
    <GenericSection heading="Comments" shortIntro="">
      {!comments.length && <p>No comments yet!</p>}
      {comments.map(({ name, comment, _createdAt, _id }) => {
        return (
          <div key={_id} className="comment">
            <div className="comment__name">{name}</div>
            <div className="comment__date">
              <Moment format="MMM DD, YYYY">{_createdAt}</Moment>
            </div>
            <div className="comment__comment">{comment}</div>
          </div>
        );
      })}
      <CommentForm postId={postId} />
    </GenericSection>
  );
};

export default Comments;
