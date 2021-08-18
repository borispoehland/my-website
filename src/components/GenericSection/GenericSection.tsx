import Anchor from '../Anchor/Anchor';
import { ReactNode, useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { useFadeInTag } from '@utils/sharedHooks';

interface IProps extends HasChildren {
  id: string;
  heading: string;
  shortIntro: string | ReactNode;

  [props: string]: any;
}

const GenericSection = ({
  children,
  heading,
  id,
  shortIntro,
  ...props
}: IProps): JSX.Element => {
  const fadeInRef = useRef<HTMLElement>(null);

  const [isVisible, setVisible] = useState(false);

  useFadeInTag(fadeInRef, setVisible);

  return (
    <section
      className={cx('generic-section', { '--is-visible': isVisible })}
      ref={fadeInRef}
      {...props}
    >
      <Anchor id={id} />
      {heading && <h2 className="generic-section__heading">{heading}</h2>}
      {shortIntro && <p className="generic-section__intro">{shortIntro}</p>}
      {children}
      <hr />
    </section>
  );
};

export default GenericSection;
