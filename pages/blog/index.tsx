import { indexQuery } from '@cmsclient/queries';
import { getClient } from '@cmsclient/sanity.server';
import { GetStaticPropsResult } from 'next';
import { NextSeo } from 'next-seo';
import GenericIntro from '@components/GenericIntro/GenericIntro';
import BlogOverview from '@components/BlogOverview/BlogOverview';

interface IProps {
  allPosts: any[];
}

const BlogPage = ({ allPosts }: IProps): JSX.Element => {
  return (
    <>
      <NextSeo title="Blog" description="Boris Pöhland's personal blog" />
      <GenericIntro heading="Blog" catchPhrase="Follow my journey!" />
      <BlogOverview blogPosts={allPosts} />
    </>
  );
};

export async function getStaticProps({
  preview = process.env.NODE_ENV === 'development',
}): Promise<GetStaticPropsResult<IProps>> {
  const allPosts = await getClient(preview).fetch(indexQuery);
  return {
    props: { allPosts },
    revalidate: 60,
  };
}

export default BlogPage;
