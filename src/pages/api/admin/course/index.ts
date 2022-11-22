import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../../prisma/prisma';
import { getToken } from 'next-auth/jwt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token: any = await getToken({ req });

  if (!token || token.user.role !== 'SUPER_USER') {
    return res.status(401).json({ message: 'Forbidden' });
  }

  switch (req.method) {
    case 'GET':
      const courses = await prisma.course.findMany();
      return res.status(200).json({ message: 'success', body: courses });

    case 'POST':
      const course = await prisma.course.create({
        data: { ...req.body },
      });
      return res.status(201).json({ message: 'success', body: course });

    default:
      return res.status(404).json({ message: 'not found' });
  }
}
