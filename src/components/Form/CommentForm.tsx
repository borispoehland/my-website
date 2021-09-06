import getCommentFormFields from '@data/commentFormFields';
import ToFormElementConverter, {
  ICommentFormFields,
} from '@components/Form/converters/ToFormElementConverter';
import Button from '@components/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallbackOne } from 'use-memo-one';
import axios from 'axios';
import { fireSweetAlert } from '@utils/dom';

interface IProps {
  postId: string;
}

const CommentForm = ({ postId }: IProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ICommentFormFields>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<ICommentFormFields> = useCallbackOne(
    async (data) => {
      try {
        const res = await axios.post(
          '/api/createComment',
          { ...data, postId },
          {
            responseType: 'text',
          }
        );
        await fireSweetAlert(res.data);
        reset();
      } catch (err) {
        await fireSweetAlert(err.response.data);
      }
    },
    [reset]
  );

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form comment-form"
        noValidate
      >
        <h3 className="comment-form__heading">What&#39;s on your mind?</h3>
        {getCommentFormFields()
          .map((formElement) => ({ ...formElement, errors, register }))
          .map(ToFormElementConverter)}
        <Button type="submit" className="form__submit" isLoading={isSubmitting}>
          Submit comment
        </Button>
      </form>
    </>
  );
};

export default CommentForm;
