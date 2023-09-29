import Contact from '../src/components/Contact/Contact';
import GenericIntro from '../src/components/GenericIntro/GenericIntro';
import { NextSeo } from 'next-seo';
import { useUrlBreadcrumbs } from '@components/Breadcrumbs/hooks';

const ContactPage = (): JSX.Element => {
  useUrlBreadcrumbs();

  return (
    <>
      <NextSeo
        title="Contact"
        description="Boris Pöhland is Web Developer and Indie Hacker living in Montenegro. Hire him today!"
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
