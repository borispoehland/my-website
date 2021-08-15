import { NextSeo } from 'next-seo';
import GenericIntro from '@components/GenericIntro/GenericIntro';
import Imprint from '@components/Legal/Imprint';

export default function ImprintPage() {
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
