import { CSSProperties, ReactNode } from 'react';

interface IProps {
  catchPhrase: string | ReactNode;
  heading: string;
  style?: CSSProperties;
}

const GenericIntro = ({ catchPhrase, heading, style }: IProps): JSX.Element => {
  return (
    <main className="generic-intro" style={style}>
      <h1 className="generic-intro__heading">{heading}</h1>
      <p className="generic-intro__catchphrase">{catchPhrase}</p>
    </main>
  );
};

export default GenericIntro;
