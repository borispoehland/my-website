import ContactForm from '../ContactForm/ContactForm';
import getQuicklinks from '../../staticdata/quicklinks';
import ToQuicklinkConverter from './converters/ToQuicklinkConverter';
import GenericSection from '../GenericSection/GenericSection';
import Button from '../Button/Button';
import { openResourceInNewTab } from '../../utils/dom';

const Contact = (): JSX.Element => {
  return (
    <>
      <GenericSection
        id="form"
        heading="Contact me now"
        shortIntro="I'll reply within 24 hours"
      >
        <ContactForm />
      </GenericSection>
      <GenericSection
        id="links"
        heading="Contact me later"
        shortIntro="Add me to your contacts and reach out to me whenever you have time."
      >
        <div className="quicklinks">
          {getQuicklinks().map(ToQuicklinkConverter)}
        </div>
      </GenericSection>
      <GenericSection
        id="cv"
        heading="In case you missed it ..."
        shortIntro="You can download my CV below."
      >
        <Button onClick={() => openResourceInNewTab('/files/cv.pdf')}>
          Download CV
        </Button>
      </GenericSection>
    </>
  );
};

export default Contact;
