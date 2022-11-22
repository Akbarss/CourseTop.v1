import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../prisma/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;

  switch (req.method) {
    case 'GET':
      const course = await prisma.course.findUnique({
        where: { slug: slug as string },
        include: { provider: true, category: true, subcategory: true },
      });

      return res.status(200).json({ course });

    default:
      return res.status(404).json({ message: 'not found' });
  }
}
