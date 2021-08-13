import ContactForm from '../ContactForm/ContactForm';
import getQuicklinks from '../../staticdata/quicklinks';
import ToQuicklinkConverter from './converters/ToQuicklinkConverter';

const Contact = (): JSX.Element => {
  return (
    <div className="generic-layout">
      <section className="generic-layout__section">
        <h1>Quicklinks</h1>
        <p>In case you want to contact me yourself</p>
        <div className="quicklinks">
          {getQuicklinks().map(ToQuicklinkConverter)}
        </div>
        <hr />
      </section>
      <ContactForm />
    </div>
  );
};

export default Contact;
