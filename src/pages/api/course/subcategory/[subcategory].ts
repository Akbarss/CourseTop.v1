import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../../prisma/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { subcategory } = req.query;

  switch (req.method) {
    case 'GET':
      const courses = await prisma.course.findMany({
        where: { subcategory: { slug: subcategory as string } },
        include: { provider: true, category: true, subcategory: true },
      });

      return res.status(200).json({ courses });

    default:
      return res.status(404).json({ message: 'not found' });
  }
}
