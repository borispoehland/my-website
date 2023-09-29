import GenericSection from '@components/GenericSection/GenericSection';
import LegalItem from '@components/Legal/subcomponents/LegalItem';
import NextLink from '@components/NextLink/NextLink';
import MyEmail from '@components/Legal/subcomponents/MyEmail';

const PrivacyPolicy = (): JSX.Element => {
  return (
    <div className="legal">
      <GenericSection heading="An overview of data protection">
        <LegalItem heading="General information">
          The following gives a simple overview of what happens to your personal
          information when you visit our website. Personal information is any
          data with which you could be personally identified. Detailed
          information on the subject of data protection can be found in our
          privacy policy found below.
        </LegalItem>
        <LegalItem heading="Data collection on our website">
          <h4>Who is responsible for data collection on this website?</h4> The
          data collected on this website are processed by the website operator.
          The operators contact details can be found in the websites imprint.
          <h4>How do we collect your information?</h4> On the one hand, your
          data is collected by providing it to us. This can be, for example,
          data that you enter in a contact form. Other data will be generated
          automatically or with your consent recorded by our IT systems when
          visiting the website. This is primarily technical data (e.g. internet
          browser, operating system or time of the page visit). This data is
          recorded automatically as soon as you enter our website.
          <h4>What do we use your data for?</h4> Part of the data is collected
          to ensure that the website is working correctly. Other data can be
          used to to analyze how visitors use the site.
          <h4>What rights do you have regarding your data?</h4> You always have
          the right to request information about your stored data, its origin,
          its recipients, and the purpose of its collection at no charge. You
          also have the right to request that it be corrected, blocked, or
          deleted. You can contact us at any time using the address given in the
          legal notice if you have further questions about the issue of privacy
          and data protection. You may also, of course, file a complaint with
          the competent regulatory authorities.
        </LegalItem>
      </GenericSection>
      <GenericSection heading="Hosting and Content Delivery Networks (CDN)">
        <LegalItem heading="External hosting">
          This website is hosted by an external service provider (hoster). The
          personal data that is collected on this website is stored on the
          server of the hoster. This may include IP addresses, contact requests,
          meta and communication data, contract data, contact details, names,
          website access and other data generated via a website.
          <br /> <br />
          The host is used for the purpose of fulfilling the contract towards
          our potential and existing customers (Art. 6 (1) (b) GDPR) and in the
          interest of a secure, fast and efficient provision of our online offer
          by a professional provider (Art. 6 (1) (f) GDPR).
          <br /> <br />
          Our hoster will only process your data to the extent necessary to
          fulfill its performance obligations and will follow our instructions
          in relation to this data.
          <h4>Conclusion of an order processing contract</h4>
          In order to ensure data protection-compliant processing, we have
          concluded a data processing agreement with our hoster.
        </LegalItem>
      </GenericSection>
      <GenericSection heading="General and mandatory information">
        <LegalItem heading="Data protection">
          The operators of this website take the protection of your personal
          data very seriously. We treat your personal data as confidential and
          in accordance with the statutory data protection regulations and this
          privacy policy.
          <br /> <br />
          If you use this website, various pieces of personal data will be
          collected. Personal information is any data with which you could be
          personally identified. This privacy policy explains what information
          we collect and what we use it for. It also explains how and for what
          purpose this happens.
          <br /> <br />
          Please note that data transmitted via the internet (e.g. via email
          communication) may be subject to security breaches. Complete
          protection of your data from third-party access is not possible.
        </LegalItem>
        <LegalItem heading="Right to object to data collection in special cases and direct mail (Art. 21 GDPR)">
          If the data processing is carried out on the basis of Art. 6 (1) (e)
          or (f) GDPR, you have the right at any time to object to the
          processing of your personal data for reasons that arise from your
          particular situation; this also applies to profiling based on these
          provisions. The respective legal basis on which a processing is based
          can be found in this privacy policy. If you object, we will no longer
          process your personal data unless we can identify compelling
          legitimate grounds for processing that outweigh your interests, rights
          and freedoms, or processing for the purpose of enforcing, pursuing or
          defending legal claims (Objection according to Art. 21 (1) GDPR). If
          your personal data is processed to operate direct mail, you have the
          right to object at any time to the processing of your personal data
          for the purpose of such advertising; this also applies to profiling
          insofar as it is associated with such direct mail. If you object, your
          personal data will then no longer be used for the purpose of direct
          advertising (objection under Art. 21 (2) GDPR).
        </LegalItem>
        <LegalItem heading="Right to file complaints with regulatory authorities">
          If there has been a breach of data protection legislation, the person
          affected may file a complaint with the competent regulatory
          authorities. The competent regulatory authority for matters related to
          data protection legislation is the data protection officer of the
          German state in which our company is headquartered. A list of data
          protection officers and their contact details can be found{' '}
          <NextLink
            href="https://www.bfdi.bund.de/DE/Service/Anschriften/anschriften_table.html"
            hasExternalIndicator
          >
            here
          </NextLink>
          .
        </LegalItem>
        <LegalItem heading="Right to data portability">
          You have the right to have data which we process based on your consent
          or in fulfillment of a contract automatically delivered to yourself or
          to a third party in a standard, machine-readable format. If you
          require the direct transfer of data to another responsible party, this
          will only be done to the extent technically feasible.
        </LegalItem>
        <LegalItem heading="SSL or TLS encryption">
          This site uses SSL or TLS encryption for security reasons and for the
          protection of the transmission of confidential content, such as the
          inquiries you send to us as the site operator. You can recognize an
          encrypted connection in your browser&#39;s address line when it
          changes from &quot;http://&quot; to &quot;https://&quot; and the lock
          icon is displayed in your browser&#39;s address bar.
          <br /> <br />
          If SSL or TLS encryption is activated, the data you transfer to us
          cannot be read by third parties.
        </LegalItem>
        <LegalItem heading="Information, deletion, correction">
          As permitted by law, you have the right to be provided at any time
          with information free of charge about any of your personal data that
          is stored as well as its origin, the recipient and the purpose for
          which it has been processed. You also have the right to have this data
          corrected or deleted. You can contact us at any time using the address
          given in our legal notice if you have further questions on the topic
          of personal data.
        </LegalItem>
        <LegalItem heading="Right to restriction of processing">
          You have the right to request that the processing of your personal
          data be restricted. You can contact us at any time at the address
          given in the imprint. The right to restrict the processing exists in
          the following cases:
          <ul>
            <li>
              If you contest the accuracy of your personal data stored with us,
              we usually need time to check this. For the duration of the check,
              you have the right to request that the processing of your personal
              data be restricted.
            </li>
            <li>
              If the processing of your personal data happened / happens
              illegally, you can request the restriction of the data processing
              instead of the deletion.
            </li>
            <li>
              If we no longer need your personal data, but you need it to
              exercise, defend or assert legal claims, you have the right to
              request that the processing of your personal data be restricted
              instead of being deleted.
            </li>
            <li>
              If you have filed an objection in accordance with Art. 21 (1)
              GDPR, you and our interests must be weighed up. As long as it is
              not clear whose interests outweigh the rights, you have the right
              to request that the processing of your personal data be
              restricted.
            </li>
          </ul>
          If you have restricted the processing of your personal data, this data
          - apart from its storage - may only be obtained with your consent or
          to assert, exercise or defend legal claims or to protect the rights of
          another natural or legal person or or for reasons of important public
          interest the European Union or a Member State.
        </LegalItem>
      </GenericSection>
      <GenericSection heading="Data collection on our website">
        <LegalItem heading="Cookies">
          <b>Currently our website uses no cookies</b>. Cookies are small text
          files and do no damage to your device. They are either stored
          temporarily on your device for the duration of a session (session
          cookies) or permanently (permanent cookies). Session cookies are
          automatically deleted at the end of your visit. Permanent cookies
          remain on your device until you delete them yourself or they are
          automatically deleted by your web browser.
          <br /> <br />
          In some cases, third-party cookies can also be stored on your device
          if you enter our site and explicitly consent to them (opt-in-consent).
          These enable us or you to use certain services of the third-party
          company (e.g. cookies for processing payment services).
          <br /> <br />
          Cookies have different functions. Numerous cookies are technically
          necessary because certain website functions would not work without
          them (e.g. the shopping cart function or the display of videos). Other
          cookies are used to evaluate user behavior or to display advertising.
          <br /> <br />
          Cookies that are used to carry out the electronic communication
          process (necessary cookies) or to provide certain functions desired by
          you (functional cookies, e.g. for the shopping cart function) or to
          optimize the website (e.g. cookies for Measurement of the web
          audience) are required on the basis of Art. 6 (1) (f) GDPR saved,
          unless another legal basis is specified. The website operator has a
          legitimate interest in storing cookies for the technically error-free
          and optimized provision of its services. If consent to the storage of
          cookies has been requested, the storage of the relevant cookies takes
          place exclusively on the basis of this consent (Art. 6 (1) (a) GDPR);
          the consent can be revoked at any time.
          <br /> <br />
          Alternatively, you can set your browser so that you are informed about
          the setting of cookies and only allow cookies in individual cases,
          exclude the acceptance of cookies for certain cases or in general, and
          activate the automatic deletion of cookies when the browser is closed.
          If cookies are deactivated, the functionality of this website may be
          restricted.
          <br /> <br />
          Insofar as cookies from third-party companies or for analysis purposes
          are used, we will inform you of this separately in the context of this
          data protection declaration and will never set them without your
          consent.
        </LegalItem>
        <LegalItem heading="Server log files">
          The provider of the pages automatically collects and stores
          information in so-called server log files, which your browser
          automatically transmits to us. These are:
          <ul>
            <li>
              Domain from which you are accessing (i.e. www.borispoehland.com)
            </li>
            <li>Request line (the destination address without the domain)</li>
            <li>Status code (e.g. 200 or 404)</li>
            <li>Size of response body</li>
            <li>Referrer URL (previous page you were on)</li>
            <li>Browser type and browser version</li>
            <li>operating system used</li>
            <li>IP address (anonymized)</li>
            <li>Time of server request</li>
          </ul>
          This data will not be merged with other data sources.
          <br /> <br />
          This data is collected on the basis of Article 6 (1) (f) GDPR. The
          website operator has a legitimate interest in the technically
          error-free presentation and optimization of his website - the server
          log files must be recorded for this.
        </LegalItem>
        <LegalItem heading="Contact form">
          If you send us inquiries via the contact form, your details from the
          inquiry form, including the contact details you provided there, will
          be stored by us for the purpose of processing the inquiry and in the
          event of follow-up questions. We will not pass on this data without
          your consent.
          <br /> <br />
          The processing of this data takes place on the basis of Art. 6 (1) (b)
          GDPR, if your request is related to the fulfillment of a contract or
          is necessary to carry out pre-contractual measures. In all other
          cases, the processing is based on our legitimate interest in the
          effective processing of inquiries addressed to us (Art. 6 (1) (f)
          GDPR) or on your consent (Art. 6 (1) (a) GDPR).
          <br /> <br />
          The data you entered in the contact form will remain with us until you
          request deletion, revoke your consent to storage or the purpose for
          data storage no longer applies (e.g. after your request has been
          processed). Mandatory legal provisions - especially statutory
          retention periods - remain unaffected.
        </LegalItem>
        <LegalItem heading="Inquiry by email, phone or fax">
          If you contact us by e-mail, telephone or fax, your request including
          all personal data resulting from it (name, inquiry) will be stored and
          processed by us for the purpose of processing your request. We will
          not pass on this data without your consent.
          <br /> <br />
          The processing of this data takes place on the basis of Art. 6 (1) (b)
          GDPR, if your request is related to the fulfillment of a contract or
          is necessary to carry out pre-contractual measures. In other cases,
          the processing is based on our legitimate interest in the effective
          processing of inquiries addressed to us (Art. 6 (1) (f) GDPR) or on
          your consent (Art. 6 (1) (a) GDPR) if this has been given.
          <br /> <br />
          The data you send to us via contact inquiries will remain with us
          until you request deletion, revoke your consent to storage or the
          purpose for data storage no longer applies (e.g. after your request
          has been processed). Mandatory legal provisions - especially statutory
          retention periods - remain unaffected.
        </LegalItem>
      </GenericSection>
    </div>
  );
};

export default PrivacyPolicy;
