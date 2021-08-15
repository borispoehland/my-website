import Contact from '../src/components/Contact/Contact';
import GenericIntro from '../src/components/GenericIntro/GenericIntro';
import { NextSeo } from 'next-seo';

const ContactPage = (): JSX.Element => {
  return (
    <>
      <NextSeo
        title="Contact"
        description="Boris Pöhland is Web Developer and Usability Consultant from Würzburg, Germany. Hire him today!"
      />
      <GenericIntro
        heading="Contact"
        catchPhrase="Don't hesitate to contact me!"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
