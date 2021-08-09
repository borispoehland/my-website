import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BiRightArrow } from 'react-icons/bi';
import NextLink from '../NextLink/NextLink';
import { capitalizeFirstLetter } from '../../utils/strings';
import cx from 'classnames';
import {
  useAddLatestH1ToBreadcrumbs,
  useBreadcrumbs,
  useSetBreadcrumbsTop,
} from './hooks';

interface IProps {
  className: string;
}

export interface IBreadCrumb {
  label: string;
  href: string;
  index?: number;
}

const convertBreadcrumb = (string: string): string => {
  return capitalizeFirstLetter(decodeURI(string));
};

const Breadcrumbs = ({ className }: IProps): JSX.Element => {
  useSetBreadcrumbsTop();

  const [breadcrumbs, setBreadcrumbs] = useBreadcrumbs();

  useAddLatestH1ToBreadcrumbs([breadcrumbs, setBreadcrumbs]);

  if (!breadcrumbs || !breadcrumbs.length) {
    return <></>;
  }

  return (
    <div className={cx(className, 'breadcrumbs')}>
      {breadcrumbs.map(
        (
          breadcrumb: IBreadCrumb,
          i: number,
          arr: IBreadCrumb[]
        ): JSX.Element => {
          const isLast = i === arr.length - 1;

          const asLink = !isLast && arr[i + 1].href !== ''; // when the successor is a heading, don't make the breadcrumb as link, neither

          return (
            <Fragment key={breadcrumb.href}>
              <span>
                {asLink && (
                  <NextLink href={breadcrumb.href}>
                    {convertBreadcrumb(breadcrumb.label)}
                  </NextLink>
                )}
                {!asLink && convertBreadcrumb(breadcrumb.label)}
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
