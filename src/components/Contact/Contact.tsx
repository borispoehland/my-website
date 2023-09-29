import ContactForm from '../Form/ContactForm';
import GenericSection from '../GenericSection/GenericSection';
import Button from '../Button/Button';
import QuicklinkBar from '../QuicklinkBar/QuicklinkBar';

const Contact = (): JSX.Element => {
  return (
    <>
      <GenericSection
        heading="Contact me now"
        shortIntro="I'll reply within 24 hours"
      >
        <ContactForm />
      </GenericSection>
      <GenericSection
        heading="In case you missed it ..."
        shortIntro="You can download my CV below."
      >
        <Button
          onClick={() =>
            window.open('https://www.linkedin.com/in/borispoehland', '_blank')
          }
        >
          Download CV
        </Button>
      </GenericSection>
      <GenericSection
        heading="Contact me later"
        shortIntro="Add me to your contacts and reach out to me whenever you have time."
      >
        <QuicklinkBar />
      </GenericSection>
    </>
  );
};

export default Contact;
