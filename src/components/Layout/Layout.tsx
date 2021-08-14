import Navbar from '../Navbar/Navbar';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Footer from '../Footer/Footer';

interface IProps extends HasChildren {}

const Layout = ({ children }: IProps): JSX.Element => {
  return (
    <div className="page">
      <div className="page__progress" />
      <Navbar className="page__navbar" />
      <Breadcrumbs className="page__breadcrumbs" />
      <div className="page__content">{children}</div>
      <Footer className="page__footer" />
    </div>
  );
};

export default Layout;
