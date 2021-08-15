import IndexSections from '../src/components/IndexSections/IndexSections';
import { NextSeo } from 'next-seo';
import { defaultDescription } from '@data/defaultSEO';

export default function HomePage() {
  return (
    <>
      <NextSeo title="Home" description={defaultDescription} />
      <IndexSections />
    </>
  );
}
