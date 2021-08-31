import { useForm, SubmitHandler } from 'react-hook-form';
import getContactFormFields from '@data/contactFormFields';
import Button from '../Button/Button';
import ToFormElementConverter, {
  IContactFormFields,
} from './converters/ToFormElementConverter';
import Emoji from '../Emoji/Emoji';
import axios from 'axios';
import { fireSweetAlert } from '@utils/dom';
import { useCallbackOne } from 'use-memo-one';

const ContactForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IContactFormFields>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<IContactFormFields> = useCallbackOne(
    async (data) => {
      try {
        const res = await axios.post('/api/sendContactForm', data, {
          responseType: 'text',
        });
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
        className="form contact-form"
        noValidate
      >
        {getContactFormFields()
          .map((formElement) => ({ ...formElement, errors, register }))
          .map(ToFormElementConverter)}
        <Button type="submit" className="form__submit" isLoading={isSubmitting}>
          Send message
        </Button>
      </form>
      <p>
        * You can also write me in <b>german</b> <Emoji symbol="&#128521;" />
      </p>
    </>
  );
};

export default ContactForm;
