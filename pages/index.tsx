import IndexSections from '../src/components/IndexSections/IndexSections';
import { NextSeo } from 'next-seo';
import { defaultDescription } from '@data/defaultSEO';
import { useCustomBreadCrumbs } from '@components/Breadcrumbs/hooks';

export default function HomePage() {
  useCustomBreadCrumbs([]);

  return (
    <>
      <NextSeo
        title="Boris Pöhland - Next.js Developer"
        description={defaultDescription}
      />
      <IndexSections />
    </>
  );
}
