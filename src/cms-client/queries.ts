import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { BlockContentType } from '@sanity/block-content-to-react';

interface IAuthor {
  name: string;
  bio: BlockContentType;
  image: SanityImageSource;
}

interface IComment {
  name: string;
  comment: string;
  _createdAt: string;
}

interface IImage {
  asset: SanityImageSource;
  alt: string;
}

export interface ICommonBlog {
  title: string;
  mainImage: IImage;
  shortDescription: BlockContentType;
  slug: string;
  estimatedReadingTime: number;
  tags: string[];
}

export interface IBlogPost extends ICommonBlog {
  postId: string;
  publishedAt: string;
  body: BlockContentType;
  metaDescription: string;
  comments: IComment[];
  author: IAuthor;
  hashTags: string[];
}

const postFields = `
  title,
  mainImage,
  shortDescription,
  tags,
  "slug": slug.current,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 120 )
`;

export const indexQuery = `
*[_type == "post"] | order(publishedAt desc, _updatedAt desc) {
  ${postFields}
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    "postId": _id,
    publishedAt,
    body,
    metaDescription,
    "author": author->{name, image, bio},
    "comments": 
      *[
        _type == "comment" && 
        post._ref == ^._id && 
        approved == true
        ] | order(_createdAt desc)
        {
          _id, 
          name, 
          comment, 
          _createdAt
        },
    hashTags,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc) [0...2] {
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;
