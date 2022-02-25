import cx from 'classnames';
import NextLink from '../NextLink/NextLink';
import getQuicklinks from '@data/quicklinks';
import ToQuicklinkConverter from '../QuicklinkBar/converters/ToQuicklinkConverter';

interface IProps extends HasClassName {}

const EmailQuicklink = ToQuicklinkConverter(getQuicklinks()[0]);

const quicklinks = getQuicklinks();

const Footer = ({ className }: IProps): JSX.Element => {
  return (
    <footer className={cx('footer', className)}>
      <div className="footer__copyright">
        Copyright &copy; Boris Pöhland {new Date().getFullYear()}
      </div>
      <div className="footer__contact">
        {quicklinks.map((link) => (
          <ToQuicklinkConverter key={link.href} {...link} hideLabel />
        ))}
      </div>
      <div className="footer__legal">
        <NextLink href="/imprint">Imprint</NextLink>
        <NextLink href="/privacy">Privacy Policy</NextLink>
      </div>
    </footer>
  );
};

export default Footer;
