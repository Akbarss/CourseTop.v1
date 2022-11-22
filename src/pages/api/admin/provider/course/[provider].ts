import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from '../../../../../../prisma/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token: any = await getToken({ req });

  if (!token || token.user.role !== 'SUPER_USER') {
    return res.status(401).json({ message: 'Forbidden' });
  }

  const { provider, skip, limit } = req.query;

  switch (req.method) {
    case 'GET':
      const count = await prisma.course.count({
        where: {
          provider: { slug: provider as string },
        },
      });
      const courses = await prisma.course.findMany({
        where: { provider: { slug: provider as string } },
        include: { provider: true, category: true, subcategory: true },
        skip: skip ? +skip : 0,
        take: limit ? +limit : 12,
      });
      return res.status(200).json({ body: courses, count });

    default:
      return res.status(404).json({ message: 'not found' });
  }
}
