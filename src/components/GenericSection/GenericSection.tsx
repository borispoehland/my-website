import { ElementType, ReactNode } from 'react';
import cx from 'classnames';
import useInView from 'react-cool-inview';

interface IProps extends HasChildren {
  heading?: string;
  shortIntro?: string | ReactNode;
  className?: string;
  tag?: keyof HTMLElementTagNameMap;
  disableAnimation?: boolean;

  [props: string]: any;
}

const GenericSection = ({
  children,
  className,
  heading,
  shortIntro,
  tag,
  disableAnimation,
  ...props
}: IProps): JSX.Element => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  });

  const Tag = tag as ElementType;

  return (
    <Tag
      className={cx(className, 'generic-section', {
        '--in-view': disableAnimation || inView,
      })}
      ref={observe}
      {...props}
    >
      {heading && <h2 className="generic-section__heading">{heading}</h2>}
      {shortIntro && <p className="generic-section__intro">{shortIntro}</p>}
      {children}
      <hr />
    </Tag>
  );
};

GenericSection.defaultProps = {
  tag: 'section',
  disableAnimation: false,
};

export default GenericSection;
