import EmailInput from '@components/ContactForm/subcomponents/EmailInput';
import NormalInput from '@components/ContactForm/subcomponents/NormalInput';
import MessageInput from '@components/ContactForm/subcomponents/MessageInput';
import { IFormElement } from '@components/ContactForm/converters/ToFormElementConverter';

const getContactFormFields = (): IFormElement[] => [
  {
    label: 'First name',
    id: 'firstName',
    rules: {
      required: 'Please tell me your first name!',
    },
    Component: NormalInput,
    placeholder: 'Jane',
  },
  {
    label: 'Last name',
    id: 'lastName',
    rules: {
      required: 'Please tell me your last name!',
    },
    Component: NormalInput,
    placeholder: 'Doe',
  },
  {
    label: 'E-Mail',
    id: 'email',
    rules: {
      required: 'Please tell me your email address!',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Please enter a valid email address!',
      },
    },
    Component: EmailInput,
    placeholder: 'business@janedoe.com',
  },
  {
    label: 'Message',
    id: 'message',
    rules: {
      required: 'Please provide me with more details about your inquiry!',
    },
    Component: MessageInput,
    placeholder: 'Please provide me with details about your awesome idea.',
  },
];

export default getContactFormFields;
