const postFields = `
  "postId": _id,
  title,
  mainImage,
  shortDescription,
  tags,
  "slug": slug.current,
`;

export const indexQuery = `
*[_type == "post"] | order(publishedAt desc, _updatedAt desc) {
  ${postFields}
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) | [0] {
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
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc) | [0...2] {
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
