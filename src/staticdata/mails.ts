import { IContactFormFields } from '@components/Form/converters/ToFormElementConverter';

const getMails = ({
  firstName,
  lastName,
  email,
  message,
}: IContactFormFields) => {
  const subject = `[Inquiry received] Your contact inquiry at Boris Pöhland`;
  const htmlForMe = `${firstName} ${lastName} wrote on ${new Date().toLocaleString(
    'en-GB',
    { timeZone: 'UTC' }
  )} UTC <br/> <br/> ${message}`;

  return [
    {
      from: {
        name: 'Boris Pöhland',
        email: process.env.NEXT_PUBLIC_MY_EMAIL,
      },
      to: process.env.MY_REDIRECT_EMAIL,
      replyTo: email,
      subject: subject,
      html: htmlForMe,
    },
    {
      from: {
        name: 'Boris Pöhland',
        email: process.env.NEXT_PUBLIC_MY_EMAIL,
      },
      to: email,
      replyTo: process.env.NEXT_PUBLIC_MY_EMAIL,
      templateId: 'd-e608f14c3fa247a889c7579c08cb46b2',
      dynamicTemplateData: {
        subject,
        fullName: `${firstName} ${lastName}`,
      },
    },
  ];
};

export default getMails;
