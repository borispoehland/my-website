import { useEffect } from 'react';
import { getBottomOfElementRelativeToViewport } from '../../utils/positions';

interface IProps {
  id: string;
}

const Anchor = ({ id }: IProps): JSX.Element => {
  useEffect(() => {
    const $anchor = $('.anchor');
    const $navbar = $('.navbar');

    const navbarBottomDistanceFromTop =
      getBottomOfElementRelativeToViewport($navbar);
    const approximateBreadcrumbsHeight = 30; // breadcrumbs don't exist yet, so I need this as ugly workaround
    $anchor.css(
      'top',
      `-${navbarBottomDistanceFromTop + approximateBreadcrumbsHeight}px`
    );
  }, []);

  return <a className="anchor" id={id} />;
};

export default Anchor;
