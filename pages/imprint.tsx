import { NextSeo } from 'next-seo';
import GenericIntro from '@components/GenericIntro/GenericIntro';
import Imprint from '@components/Legal/Imprint';
import { useUrlBreadcrumbs } from '@components/Breadcrumbs/hooks';

export default function ImprintPage() {
  useUrlBreadcrumbs();

  return (
    <>
      <NextSeo
        title="Imprint"
        description="Imprint of Boris Pöhland's website"
        noindex
      />
      <GenericIntro catchPhrase="Behind the scenes" heading="Imprint" />
      <Imprint />
    </>
  );
}
