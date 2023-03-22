// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Town } from '../../typings'

const query = groq`
*[_id == "8638726f-ee1c-4827-a56a-3bbd3b17b49f"] {
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
