import styles from './Layout.module.sass';
import cx from 'classnames';
import Navbar from '../Navbar/Navbar';

interface IProps extends HasChildren {}

const Layout = ({ children }: IProps): JSX.Element => {
  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <section className={cx(styles.nprogress, 'nprogress')} />
        <Navbar className={styles.navbar} />
        <div className={styles.content}>{children}</div>
        <footer className={styles.footer} />
      </div>
    </div>
  );
};

export default Layout;
