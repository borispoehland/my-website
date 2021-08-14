import Services from '../src/components/Services/Services';
import GenericIntro from '../src/components/GenericIntro/GenericIntro';

const ServicesPage = () => {
  return (
    <>
      <GenericIntro catchPhrase="What I can do for you" heading="Services" />
      <Services />
    </>
  );
};

export default ServicesPage;
