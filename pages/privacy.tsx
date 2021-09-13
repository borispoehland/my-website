import { NextSeo } from 'next-seo';
import GenericIntro from '@components/GenericIntro/GenericIntro';
import PrivacyPolicy from '@components/Legal/PrivacyPolicy';
import {
  homeBreadCrumb,
  useCustomBreadCrumbs,
} from '@components/Breadcrumbs/hooks';

export default function PrivacyPolicyPage() {
  useCustomBreadCrumbs([homeBreadCrumb, { label: 'Privacy Policy' }]);

  return (
    <>
      <NextSeo
        title="Privacy Policy"
        description="Privacy Policy of Boris Pöhland's website"
        noindex
      />
      <GenericIntro
        catchPhrase="How I use your data"
        heading="Privacy Policy"
      />
      <PrivacyPolicy />
    </>
  );
}
