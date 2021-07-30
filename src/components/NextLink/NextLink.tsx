import Link from 'next/link';
import { GoLinkExternal } from 'react-icons/go';
import cx from 'classnames';
import styles from './NextLink.module.sass';

interface IProps extends HasChildren {
  className?: string;
  href: string;
  isExternal?: boolean;
}

const NextLink = ({
  children,
  className,
  href,
  isExternal,
}: IProps): JSX.Element => {
  return (
    <Link href={href}>
      <a
        target={isExternal ? '__blank' : undefined}
        className={cx('link', styles.link, className, {
          [styles.linkIsExternal]: isExternal,
        })}
      >
        {isExternal ? (
          <>
            <span>{children}</span>
            <GoLinkExternal />
          </>
        ) : (
          <>{children}</>
        )}
      </a>
    </Link>
  );
};

NextLink.defaultProps = {
  isExternal: false,
};

export default NextLink;
