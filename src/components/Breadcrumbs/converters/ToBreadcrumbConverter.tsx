import NextLink from '../../NextLink/NextLink';
import { BiRightArrow } from 'react-icons/bi';
import React, { Fragment } from 'react';
import { IBreadCrumb } from '../Breadcrumbs';
import { capitalizeFirstLetter } from '@utils/strings';

interface IProps extends IBreadCrumb {
  isLast: boolean;
  successor: IBreadCrumb;
}

const getBreadCrumbText = (urlChunk: string): string => {
  return capitalizeFirstLetter(decodeURI(urlChunk));
};

const ToBreadcrumbConverter = ({
  isLast,
  href,
  label,
  successor,
}: IProps): JSX.Element => {
  const asLink = !isLast && successor.href !== ''; // when the successor is a heading, don't make the breadcrumb as link, neither
  return (
    <Fragment key={href}>
      <span>
        {asLink && <NextLink href={href}>{getBreadCrumbText(label)}</NextLink>}
        {!asLink && getBreadCrumbText(label)}
      </span>
      {!isLast && <BiRightArrow />}
    </Fragment>
  );
};

export default ToBreadcrumbConverter;
