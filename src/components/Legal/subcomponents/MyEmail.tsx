import NextLink from '@components/NextLink/NextLink';

const MyEmail = (): JSX.Element => {
  return (
    <NextLink href={`mailto:${process.env.NEXT_PUBLIC_MY_EMAIL}`}>
      {process.env.NEXT_PUBLIC_MY_EMAIL}
    </NextLink>
  );
};
export default MyEmail;
