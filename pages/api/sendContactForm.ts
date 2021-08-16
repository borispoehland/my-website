import { RateLimiterMemory } from 'rate-limiter-flexible';
import type { NextApiRequest, NextApiResponse } from 'next';
import mailer from '@sendgrid/mail';
import getMails from '../../src/staticdata/mails';

mailer.setApiKey(process.env.SENDGRID_API_KEY);

const rateLimiter = new RateLimiterMemory({
  points: 2, // 2 inquiries
  duration: 60 * 60, // per hour
});

export interface ISendMailResponse {
  myMail?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISendMailResponse>
) {
  const clientIP = req.headers['x-real-ip'] || req.socket.remoteAddress || '';

  try {
    await rateLimiter.consume(Array.isArray(clientIP) ? clientIP[0] : clientIP);
  } catch (err) {
    return res.status(429).send({});
  }

  try {
    await mailer.send(getMails(req.body));
    return res.status(200).send({});
  } catch (err) {
    console.log('Contact form', err, req.body);
    if (err.response) console.log(err.response.body.errors);
    return res.status(502).send({ myMail: process.env.MY_EMAIL });
  }
}
