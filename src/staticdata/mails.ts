import { IInputs } from '@components/ContactForm/converters/ToFormElementConverter';

const getMails = ({ firstName, lastName, email, message }: IInputs) => {
  const subject = `[Inquiry received] Your contact inquiry at Boris Pöhland`;
  const htmlForMe = `${firstName} ${lastName} wrote on ${new Date().toLocaleString(
    'en-GB',
    { timeZone: 'UTC' }
  )} UTC <br/> <br/> ${message}`;

  return [
    {
      from: {
        name: 'Boris Pöhland',
        email: process.env.MY_EMAIL,
      },
      to: process.env.MY_REDIRECT_EMAIL,
      replyTo: email,
      subject: subject,
      html: htmlForMe,
    },
    {
      from: {
        name: 'Boris Pöhland',
        email: process.env.MY_EMAIL,
      },
      to: email,
      replyTo: process.env.MY_EMAIL,
      templateId: process.env.SENDGRID_TEMPLATE_ID,
      dynamicTemplateData: {
        subject,
        fullName: `${firstName} ${lastName}`,
      },
    },
  ];
};

export default getMails;
