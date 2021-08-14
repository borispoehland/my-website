import cx from 'classnames';
import {
  useAddLatestH2ToBreadcrumbs,
  useBreadcrumbs,
  useSetBreadcrumbsTop,
} from './hooks';
import ToBreadcrumbConverter from './converters/ToBreadcrumbConverter';

interface IProps extends HasClassName {}

export interface IBreadCrumb {
  label: string;
  href: string;
  index?: number;
}

const Breadcrumbs = ({ className }: IProps): JSX.Element => {
  useSetBreadcrumbsTop();

  const [breadcrumbs, setBreadcrumbs] = useBreadcrumbs();

  useAddLatestH2ToBreadcrumbs([breadcrumbs, setBreadcrumbs]);

  return (
    <div className={cx(className, 'breadcrumbs')}>
      {breadcrumbs
        .map((crumb, i, arr) => ({
          ...crumb,
          isLast: i === arr.length - 1,
          successor: arr[i + 1],
        }))
        .map(ToBreadcrumbConverter)}
    </div>
  );
};

export default Breadcrumbs;
