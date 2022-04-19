import NextLink from '@components/NextLink/NextLink';

interface IMarkProps {
  href: string;
}

interface IProps extends HasChildren {
  mark: IMarkProps;
}

const LinkSerializer = ({ mark: { href }, children }: IProps): JSX.Element => {
  if (!href) return <></>;
  if (href.startsWith('#')) {
    return (
      <a
        className="link"
        href=""
        onClick={(e) => {
          e.preventDefault();
          $('html, body').animate(
            { scrollTop: ($(href).offset()?.top ?? 150) - 150 },
            {
              duration: 'slow',
            }
          );
        }}
      >
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} hasExternalIndicator={href.startsWith('http')}>
      {children}
    </NextLink>
  );
};

export default LinkSerializer;
