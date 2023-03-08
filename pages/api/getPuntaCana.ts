// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Town } from '../../typings'

const query = groq`
*[_id == "877282a6-c68e-4f2f-b48f-2740dbd4de0e"] {
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
  res.status(200).json({ towns })
}
