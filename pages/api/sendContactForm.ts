import { RateLimiterMemory } from 'rate-limiter-flexible';
import type { NextApiRequest, NextApiResponse } from 'next';
import mailer from '@sendgrid/mail';
import getMails from '../../src/staticdata/mails';
import { ISwalProps } from '@utils/dom';

mailer.setApiKey(process.env.SENDGRID_API_KEY);

const rateLimiter = new RateLimiterMemory({
  points: 2, // 2 inquiries
  duration: 60 * 60, // per hour
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISwalProps>
) {
  const clientIP = req.headers['x-real-ip'] || req.socket.remoteAddress || '';

  // Rate limiting to 2 requests per hour
  try {
    await rateLimiter.consume(clientIP as string);
  } catch (err) {
    return res.status(429).send({
      swalTitle: 'Too many submissions!',
      swalDescription:
        'Please try again later or respond to the confirmation mail I sent you in case you want to add something. Thanks!',
      swalType: 'error',
    });
  }

  // Try to send out the mail
  try {
    await mailer.send(getMails(req.body));
    return res.status(200).send({
      swalTitle: 'Success!',
      swalDescription:
        'I received your message and sent you a confirmation mail. Please make sure to also check your <b>Spam</b> folder - just in case! You can close the window now.',
      swalType: 'success',
    });
  } catch (err) {
    console.log('Contact form', err, req.body);
    if (err.response) console.log(err.response.body.errors);
    return res.status(502).send({
      swalTitle: 'Something went wrong!',
      swalDescription: `It's not your fault. Please try again later or directly send me an email to <a href='mailto:${process.env.NEXT_PUBLIC_MY_EMAIL}'>${process.env.NEXT_PUBLIC_MY_EMAIL}</a>. Thanks!`,
      swalType: 'error',
    });
  }
}
