import { ICommonBlog, indexQuery } from '@cmsclient/queries';
import { getClient } from '@cmsclient/sanity.server';
import { GetStaticPropsResult } from 'next';
import { NextSeo } from 'next-seo';
import GenericIntro from '@components/GenericIntro/GenericIntro';
import BlogOverview from '@components/BlogOverview/BlogOverview';
import { useUrlBreadcrumbs } from '@components/Breadcrumbs/hooks';
import externalBlogPosts from '@data/externalBlogPosts';

interface IProps {
  blogPosts: ICommonBlog[];
}

const BlogPage = ({ blogPosts }: IProps): JSX.Element => {
  useUrlBreadcrumbs();

  return (
    <>
      <NextSeo title="Blog" description="Boris Pöhland's blog" />
      <GenericIntro heading="Blog" catchPhrase="Follow my journey!" />
      <BlogOverview
        blogPosts={[
          ...blogPosts.slice(0, 1),
          ...externalBlogPosts,
          ...blogPosts.slice(1),
        ]}
      />
    </>
  );
};

export async function getStaticProps({
  preview = process.env.NODE_ENV === 'development',
}): Promise<GetStaticPropsResult<IProps>> {
  const blogPosts = await getClient(preview).fetch(indexQuery);
  return {
    props: { blogPosts },
    revalidate: 10,
  };
}

export default BlogPage;
