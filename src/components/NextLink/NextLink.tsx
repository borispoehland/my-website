import Link from 'next/link';
import { GoLinkExternal } from 'react-icons/go';
import cx from 'classnames';
import { useMemoOne } from 'use-memo-one';

interface IProps extends HasChildren {
  className?: string;
  href: string;
  hasExternalIndicator?: boolean;
}

const NextLink = ({
  children,
  className,
  href,
  hasExternalIndicator,
}: IProps): JSX.Element => {
  const isExternalLink = useMemoOne(() => {
    return /^https?:\/\//i.test(href) || /^mailto:/i.test(href);
  }, [href]);

  return (
    <Link href={href} legacyBehavior>
      <a
        target={isExternalLink ? '__blank' : undefined}
        className={cx('link', className, {
          '--has-external-indicator': hasExternalIndicator,
        })}
      >
        {hasExternalIndicator ? (
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
  hasExternalIndicator: false,
};

export default NextLink;
