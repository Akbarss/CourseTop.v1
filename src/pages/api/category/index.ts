import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../prisma/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      const categories = await prisma.category.findMany({
        include: { Subcategory: true },
      });
      return res.status(200).json({ message: 'success', body: categories });

    default:
      return res.status(404).json({ message: 'not found' });
  }
}
