// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Town } from '../../typings'

const query = groq`
    *[_type == "town"] {
    ...,
    properties[]->
    }
`;

type Data = {
  towns: Town[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const towns: Town[] = await sanityClient.fetch(query);
  res.status(200).json({ towns });
}
