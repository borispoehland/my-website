import Anchor from '../Anchor/Anchor';
import { ReactNode } from 'react';
import cx from 'classnames';
import useInView from 'react-cool-inview';

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
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  });

  return (
    <section
      className={cx('generic-section', {
        '--in-view': inView,
      })}
      ref={observe}
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
