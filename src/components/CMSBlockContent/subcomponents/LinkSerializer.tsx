import NextLink from '@components/NextLink/NextLink';

interface IMarkProps {
  href: string;
}

interface IProps extends HasChildren {
  mark: IMarkProps;
}

const LinkSerializer = ({ mark: { href }, children }: IProps): JSX.Element => {
  if (!href) return <></>;
  return (
    <NextLink href={href} hasExternalIndicator={href?.startsWith('http')}>
      {children}
    </NextLink>
  );
};

export default LinkSerializer;
