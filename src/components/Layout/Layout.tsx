import Navbar from '../Navbar/Navbar';

interface IProps extends HasChildren {}

const Layout = ({ children }: IProps): JSX.Element => {
  return (
    <div className="page">
      <section className="page__progress" />
      <Navbar className="page__navbar" />
      <div className="page__content">{children}</div>
      <footer className="page__footer" />
    </div>
  );
};

export default Layout;
