import Contact from '../src/components/Contact/Contact';
import GenericIntro from '../src/components/GenericIntro/GenericIntro';

const ContactPage = (): JSX.Element => {
  return (
    <>
      <GenericIntro
        heading="Contact"
        catchPhrase="Don't hesitate to contact me!"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
