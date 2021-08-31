import { getClient, sanityClient } from '@cmsclient/sanity.server';
import { postQuery, postSlugsQuery } from '@cmsclient/queries';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { urlForImage, usePreviewSubscription } from '@cmsclient/sanity';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { NextSeo } from 'next-seo';
import GenericIntro from '@components/GenericIntro/GenericIntro';
import CMSBlockContent from '@components/CMSBlockContent/CMSBlockContent';
import Image from 'next/image';
import GenericSection from '@components/GenericSection/GenericSection';
import Author from '@components/BlogPost/subcomponents/Author';
import Comments from '@components/BlogPost/subcomponents/Comments';
import Toc from '@components/BlogPost/subcomponents/Toc';
import BlogPost from '@components/BlogPost/BlogPost';
import { useMemoOne } from 'use-memo-one';
import InfoBar from '@components/BlogPost/subcomponents/InfoBar';

interface IDataProps {
  post: any;
  morePosts: any[];
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
    enabled: preview && slug,
  });

  if (!freshData?.post || (!router.isFallback && !slug)) {
    return <ErrorPage statusCode={404} />;
  }

  const {
    publishedAt,
    postId,
    title,
    metaDescription,
    shortDescription,
    mainImage,
    body,
    author,
    comments,
    tags,
  } = freshData.post;

  return (
    <>
      <NextSeo title={title} description={metaDescription} />
      <GenericIntro heading={title} catchPhrase="" />
      <InfoBar body={body} publishedAt={publishedAt} tags={tags} />
      {mainImage && (
        <GenericSection heading="" shortIntro="">
          <Image
            width={1920}
            height={1080}
            alt={`Cover Image for ${title}`}
            src={
              urlForImage(mainImage).height(1080).width(1920).url() as string
            }
          />
        </GenericSection>
      )}
      <BlogPost body={body} />
      <Author author={author} />
      <Comments comments={comments} postId={postId} />
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
    fallback: 'blocking',
  };
}

export default BlogPostPage;
