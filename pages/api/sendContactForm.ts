import type { NextApiRequest, NextApiResponse } from 'next';
import mailer from '@sendgrid/mail';
import getMails from '../../src/staticdata/mails';

mailer.setApiKey(process.env.SENDGRID_API_KEY);

export interface ISendMailResponse {
  myMail?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISendMailResponse>
) {
  return mailer
    .send(getMails(req.body))
    .then(() => {
      return res.status(200).send({});
    })
    .catch((err) => {
      console.log('Contact form', err, req.body);
      if (err.response) console.log(err.response.body.errors);
      return res.status(502).send({ myMail: process.env.MY_EMAIL });
    });
}
