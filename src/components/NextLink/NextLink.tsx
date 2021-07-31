import Link from 'next/link';
import { GoLinkExternal } from 'react-icons/go';
import cx from 'classnames';

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
        className={cx('link', className, {
          '--is-external': isExternal,
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
