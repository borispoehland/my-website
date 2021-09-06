import NormalInput from '@components/Form/subcomponents/NormalInput';
import MessageInput from '@components/Form/subcomponents/MessageInput';
import {
  ICommentFormFields,
  IFormElement,
} from '@components/Form/converters/ToFormElementConverter';

const getCommentFormFields = (): IFormElement<ICommentFormFields>[] => [
  {
    label: 'Your name',
    id: 'name',
    rules: {
      required: 'Please enter your name or nickname!',
    },
    Component: NormalInput,
    placeholder: 'John Doe',
  },
  {
    label: 'Your comment',
    id: 'comment',
    rules: {
      required: 'Please enter a comment!',
    },
    Component: MessageInput,
    placeholder: 'Share your thoughts',
  },
];

export default getCommentFormFields;
