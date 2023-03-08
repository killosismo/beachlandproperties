// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Property } from '../../typings'

const query = groq`
    *[_type == "property"]  
`;

type Data = {
  properties: Property[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const properties: Property[] = await sanityClient.fetch(query);
  res.status(200).json({ properties })
}
