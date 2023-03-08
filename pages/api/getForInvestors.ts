// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { ForInvestors } from '../../typings'

const query = groq`
    *[_type == "forInvestors"]
`;

type Data = {
  forInvestorss: ForInvestors[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const forInvestorss: ForInvestors[] = await sanityClient.fetch(query);
  res.status(200).json({ forInvestorss })
}
