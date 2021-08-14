import Anchor from '../Anchor/Anchor';
import { ReactNode } from 'react';

interface IProps extends HasChildren {
  id: string;
  heading: string;
  shortIntro: string | ReactNode;
}

const GenericSection = ({
  children,
  heading,
  id,
  shortIntro,
  ...props
}: IProps): JSX.Element => {
  return (
    <section className="generic-section" {...props}>
      <Anchor id={id} />
      {heading && <h2 className="generic-section__heading">{heading}</h2>}
      {shortIntro && <p className="generic-section__intro">{shortIntro}</p>}
      {children}
      <hr />
    </section>
  );
};

export default GenericSection;
