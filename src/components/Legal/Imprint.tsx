import GenericSection from '@components/GenericSection/GenericSection';
import LegalItem from '@components/Legal/subcomponents/LegalItem';
import NextLink from '@components/NextLink/NextLink';

const Imprint = (): JSX.Element => {
  return (
    <div className="legal">
      <GenericSection id="general" heading="General information" shortIntro="">
        <LegalItem heading="According to § 5 TMG">
          Boris Pöhland <br /> Student, Web Developer, Usability Consultant
          <br /> Friedleinsgasse 17 <br /> 97877 Wertheim, Germany
        </LegalItem>
        <LegalItem heading="Contact">
          Phone: +49 174 733 03 69 <br /> E-Mail:{' '}
          <NextLink href="mailto:me@borispoehland.com">
            me@borispoehland.com
          </NextLink>
        </LegalItem>
        <LegalItem heading="Responsible for content according to § 55 Abs. 2 RStV">
          Boris Pöhland <br /> Student, Web Developer, Usability Consultant
          <br /> Friedleinsgasse 17 <br /> 97877 Wertheim, Germany
        </LegalItem>
      </GenericSection>
      <GenericSection
        id="disclaimer"
        heading="Liability and Copyright"
        shortIntro=""
      >
        <LegalItem heading="Liability for content">
          As a service provider, we are responsible for our own content on these
          pages according to § 7 (1) TMG (German Telemedia Act) and general
          laws. According to §§ 8 to 10 TMG we are not obliged to monitor
          transmitted or stored information from third parties or to investigate
          circumstances that indicate illegal activity.
          <br />
          Obligations to remove or block the use of Information according to
          general laws remains unaffected by this. However, any liability in
          this respect is only valid from the time of knowledge of a concrete
          violation of the law possible. If we become aware of any such legal
          infringements, we will remove the content in question immediately.
        </LegalItem>
        <LegalItem heading="Liability for links">
          Our offer contains links to external websites of third parties, on
          whose contents we have no influence. Therefore we cannot assume any
          liability for these external contents. For the contents of the linked
          pages is always the respective provider or operator of the pages
          responsible. The linked pages were checked for possible legal
          violations at the time of linking. Illegal contents were not
          recognizable at the time of linking. <br /> However, a permanent
          control of the contents of the linked pages is not reasonable without
          concrete evidence of a violation of the law. With becoming known of
          law breakings we become such links immediately.
        </LegalItem>
        <LegalItem heading="Copyright">
          <b>
            The contents and works on these pages created by the site operators,
            especially photos on this site, are subject to German copyright law.
            The duplication, processing, distribution and any kind of
            utilization outside the limits of the copyright require the written
            consent of the respective author or creator. Downloads and copies of
            these pages are only permitted for private, non-commercial use.
          </b>
          <br />
          Insofar as the contents on this site were not created by the operator,
          the copyrights of third parties are not taken into account. In
          particular, third-party content is identified as such. Should you
          nevertheless become aware of a copyright infringement, please inform
          us accordingly. If we become aware of any infringements, we will
          remove such contents immediately.
        </LegalItem>
      </GenericSection>
    </div>
  );
};

export default Imprint;
