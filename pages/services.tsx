import Services from '../src/components/Services/Services';
import GenericIntro from '../src/components/GenericIntro/GenericIntro';
import { NextSeo } from 'next-seo';
import { useUrlBreadcrumbs } from '@components/Breadcrumbs/hooks';

const ServicesPage = () => {
  useUrlBreadcrumbs();

  return (
    <>
      <NextSeo
        title="Services"
        description="Boris Pöhland is Web Developer and Usability Consultant from Würzburg, Germany. See the services he can offer you or your business!"
      />
      <GenericIntro catchPhrase="What I can do for you" heading="Services" />
      <Services />
    </>
  );
};

export default ServicesPage;
