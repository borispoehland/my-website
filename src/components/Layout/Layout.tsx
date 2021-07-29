import styles from './Layout.module.sass';
import cx from 'classnames';
import Link from 'next/link';

interface IProps extends HasChildren {}

const Layout = ({ children }: IProps): JSX.Element => {
  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <section className={cx(styles.nprogress, 'nprogress')} />
        <nav className={styles.navbar}>
          <Link href="/portfolio">Portfolio</Link>
        </nav>
        <div className={styles.content}>{children}</div>
        <footer className={styles.footer} />
      </div>
    </div>
  );
};

export default Layout;
