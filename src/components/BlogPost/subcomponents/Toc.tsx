import NextLink from '@components/NextLink/NextLink';

interface IProps {
  headings: string[];
}

const Toc = ({ headings }: IProps): JSX.Element => {
  return (
    <aside className="blogpost__toc">
      <h3>Table of contents</h3>
      <ul className="toc">
        {headings.map((heading) => {
          return (
            <li
              key={heading}
              data-id={encodeURI(heading)}
              className="toc__item"
            >
              <NextLink href={`#${heading}`}>{heading}</NextLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Toc;
