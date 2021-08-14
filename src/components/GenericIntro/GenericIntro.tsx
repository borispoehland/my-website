interface IProps {
  catchPhrase: string;
  heading: string;
}

const GenericIntro = ({ catchPhrase, heading }: IProps): JSX.Element => {
  return (
    <main className="generic-intro">
      <h1 className="generic-intro__heading">{heading}</h1>
      <p className="generic-intro__catchphrase">{catchPhrase}</p>
    </main>
  );
};

export default GenericIntro;
