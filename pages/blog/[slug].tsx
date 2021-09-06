import { getClient, sanityClient } from '@cmsclient/sanity.server';
import { IBlogPost, postQuery, postSlugsQuery } from '@cmsclient/queries';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { usePreviewSubscription } from '@cmsclient/sanity';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import GenericIntro from '@components/GenericIntro/GenericIntro';
import GenericSection from '@components/GenericSection/GenericSection';
import BlogAuthor from '@components/BlogPost/subcomponents/BlogAuthor';
import BlogComments from '@components/BlogPost/subcomponents/BlogComments';
import BlogPost from '@components/BlogPost/BlogPost';
import BlogInfo from '@components/BlogPost/subcomponents/BlogInfo';
import BlogHashTags from '@components/BlogPost/subcomponents/BlogHashTags';
import ImageSerializer from '@components/CMSBlockContent/subcomponents/ImageSerializer';
import BlogSeo from '@components/BlogPost/subcomponents/BlogSEO';

interface IDataProps {
  post: IBlogPost;
  morePosts: IBlogPost[];
}

interface IProps {
  data: IDataProps;
  preview: boolean;
}

const BlogPostPage = ({ data, preview }: IProps): JSX.Element => {
  const router = useRouter();

  const slug = data?.post?.slug;

  const { data: freshData } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && Boolean(slug),
  });

  if (!freshData?.post || (!router.isFallback && !slug)) {
    return <ErrorPage statusCode={404} />;
  }

  const {
    publishedAt,
    postId,
    title,
    metaDescription,
    hashTags,
    mainImage,
    estimatedReadingTime,
    body,
    author,
    comments,
    tags,
  } = freshData.post;

  return (
    <>
      <BlogSeo
        metaDescription={metaDescription}
        title={title}
        mainImage={mainImage}
      />
      <GenericIntro heading={title} catchPhrase="" />
      <BlogInfo
        publishedAt={publishedAt}
        tags={tags}
        estimatedReadingTime={estimatedReadingTime}
      />
      <GenericSection>
        <ImageSerializer node={mainImage} />
      </GenericSection>
      <BlogPost content={body} />
      <BlogAuthor author={author} />
      <BlogHashTags hashTags={hashTags} />
      <BlogComments comments={comments} postId={postId} />
    </>
  );
};

export async function getStaticProps({
  params,
  preview = process.env.NODE_ENV === 'development',
}: GetStaticPropsContext): Promise<GetStaticPropsResult<IProps>> {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params?.slug,
  });

  return {
    props: {
      preview,
      data: {
        post,
        morePosts,
      },
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: false,
  };
}

export default BlogPostPage;
