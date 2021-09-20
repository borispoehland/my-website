import { useAddLatestH2ToBreadcrumbs, useSetBreadcrumbsTop } from './hooks';
import ToBreadcrumbConverter from './converters/ToBreadcrumbConverter';
import { useRecoilState } from 'recoil';
import { sBreadCrumbs } from '@store';
import cx from 'classnames';

interface IProps extends HasClassName {
  maxDepth: number;
}

export interface IBreadCrumb {
  label: string;
  href?: string;
  index?: number;
}

const Breadcrumbs = ({ className, maxDepth }: IProps): JSX.Element => {
  useSetBreadcrumbsTop();

  const [breadcrumbs, setBreadcrumbs] = useRecoilState(sBreadCrumbs);

  useAddLatestH2ToBreadcrumbs([breadcrumbs, setBreadcrumbs]);

  return (
    <div className={cx(className, 'breadcrumbs')}>
      {breadcrumbs
        .slice(0, maxDepth)
        .map((breadcrumb, i, arr) => ({
          ...breadcrumb,
          isLast: i === arr.length - 1,
        }))
        .map(ToBreadcrumbConverter)}
    </div>
  );
};

Breadcrumbs.defaultProps = {
  maxDepth: 3,
};

export default Breadcrumbs;
