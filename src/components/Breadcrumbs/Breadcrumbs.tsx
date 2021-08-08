import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BiRightArrow } from 'react-icons/bi';
import NextLink from '../NextLink/NextLink';
import { capitalizeFirstLetter, urlToWord } from '../../utils/strings';
import cx from 'classnames';
import { useFetchBreadcrumbs, useSetBreadcrumbsTop } from './hooks';

interface IProps {
  className: string;
}

export interface IBreadCrumb {
  label: string;
  href: string;
}

const convertBreadcrumb = (string: string): string => {
  return capitalizeFirstLetter(decodeURI(string));
};

const Breadcrumbs = ({ className }: IProps): JSX.Element => {
  useSetBreadcrumbsTop();

  const breadcrumbs: IBreadCrumb[] = useFetchBreadcrumbs();

  if (!breadcrumbs || !breadcrumbs.length) {
    return <></>;
  }

  return (
    <div className={cx(className, 'breadcrumbs')}>
      {breadcrumbs.map(
        (breadcrumb: IBreadCrumb, i: number, arr): JSX.Element => {
          const isLast = i === arr.length - 1;
          return (
            <Fragment key={breadcrumb.href}>
              <span>
                {!isLast && (
                  <NextLink href={breadcrumb.href}>
                    {convertBreadcrumb(breadcrumb.label)}
                  </NextLink>
                )}
                {isLast && convertBreadcrumb(breadcrumb.label)}
              </span>
              {!isLast && <BiRightArrow />}
            </Fragment>
          );
        }
      )}
    </div>
  );
};

export default Breadcrumbs;
