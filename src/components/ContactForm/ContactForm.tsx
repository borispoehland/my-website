import { useForm, SubmitHandler } from 'react-hook-form';
import getContactFormFields from '../../staticdata/contactFormFields';
import Button from '../Button/Button';
import ToFormElementConverter, {
  IInputs,
} from './converters/ToFormElementConverter';
import Emoji from '../Emoji/Emoji';
import axios from 'axios';
import { fireSweetAlert } from '../../utils/dom';
import { ISendMailResponse } from '../../../pages/api/sendContactForm';

const ContactForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IInputs>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<IInputs> = (data) => {
    return axios
      .post('/api/sendContactForm', data)
      .then(async () => {
        await fireSweetAlert(
          'success',
          'I received your message! You can close the window now.'
        );
        reset();
      })
      .catch((err) => {
        const { myMail } = err.response.data as ISendMailResponse;
        return fireSweetAlert(
          'error',
          `It's not your fault. Please try again later or directly send me an email to <a href='mailto:${myMail}'>${myMail}</a>. Thanks!`
        );
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="contact-form"
        noValidate
      >
        {getContactFormFields()
          .map((obj) => ({ ...obj, errors, register }))
          .map(ToFormElementConverter)}
        <Button
          onClick={() => {}}
          type="submit"
          className="contact-form__submit"
        >
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
