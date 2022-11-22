import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../prisma/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      const result = await prisma.contact.create({ data: { ...req.body } });
      return res.status(200).json({ message: 'success', body: result });

    default:
      return res.status(404).json({ message: 'not found' });
  }
}
