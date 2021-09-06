import type { NextApiRequest, NextApiResponse } from 'next';
import { ISwalProps } from '@utils/dom';
import { previewClient as writeClient } from '@cmsclient/sanity.server';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISwalProps>
) {
  const { postId, name, comment } = req.body;
  try {
    await writeClient.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: postId,
      },
      name,
      comment,
    });
  } catch (err) {
    console.log('Comment form', err, req.body);
    return res.status(500).send({
      swalTitle: 'Something went wrong!',
      swalDescription: `The comment couldn't get submitted. It would be highly appreciated when you could report that bug to <a href='mailto:${process.env.NEXT_PUBLIC_MY_EMAIL}'>${process.env.NEXT_PUBLIC_MY_EMAIL}</a>. Thanks!`,
      swalType: 'error',
    });
  }
  return res.status(200).send({
    swalTitle: 'Success!',
    swalDescription:
      'Your comment was posted and is awaiting approval. Thanks!',
    swalType: 'success',
  });
}
