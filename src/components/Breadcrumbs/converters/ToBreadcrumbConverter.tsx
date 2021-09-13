import NextLink from '@components/NextLink/NextLink';
import { BiRightArrow } from 'react-icons/bi';
import React, { Fragment } from 'react';
import { IBreadCrumb } from '../Breadcrumbs';
import { capitalizeFirstLetter } from '@utils/strings';

interface IProps extends IBreadCrumb {
  isLast: boolean;
}

const getBreadCrumbText = (urlChunk: string): string => {
  return capitalizeFirstLetter(decodeURI(urlChunk));
};

const ToBreadcrumbConverter = ({
  isLast,
  href,
  label,
}: IProps): JSX.Element => {
  return (
    <Fragment key={href}>
      <span>
        {href && <NextLink href={href}>{getBreadCrumbText(label)}</NextLink>}
        {!href && getBreadCrumbText(label)}
      </span>
      {!isLast && <BiRightArrow />}
    </Fragment>
  );
};

export default ToBreadcrumbConverter;
