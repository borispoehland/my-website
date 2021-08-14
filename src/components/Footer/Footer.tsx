import cx from 'classnames';
import NextLink from '../NextLink/NextLink';
import getQuicklinks from '../../staticdata/quicklinks';
import ToQuicklinkConverter from '../Contact/converters/ToQuicklinkConverter';

interface IProps {
  className: string;
}

const Footer = ({ className }: IProps): JSX.Element => {
  return (
    <footer className={cx('footer', className)}>
      <div className="footer__copyright">
        Copyright &copy; Boris Pöhland {new Date().getFullYear()}
      </div>
      <div className="footer__contact">
        {ToQuicklinkConverter(getQuicklinks()[0])}
      </div>
      <div className="footer__legal">
        <NextLink href="/imprint">Imprint</NextLink>
        <NextLink href="/privacy-policy">Privacy Policy</NextLink>
      </div>
    </footer>
  );
};

export default Footer;
