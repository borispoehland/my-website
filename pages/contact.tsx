import Contact from '../src/components/Contact/Contact';
import GenericIntro from '../src/components/GenericIntro/GenericIntro';

const ContactPage = (): JSX.Element => {
  return (
    <>
      <GenericIntro
        heading="Contact"
        catchPhrase="Don&#39;t hesitate to contact me!"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
