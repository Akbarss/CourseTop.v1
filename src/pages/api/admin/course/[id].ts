import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from '../../../../../prisma/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token: any = await getToken({ req });

  if (!token || token.user.role !== 'SUPER_USER') {
    return res.status(401).json({ message: 'Forbidden' });
  }
  const { id } = req.query;

  switch (req.method) {
    case 'DELETE':
      const deletedCourse = await prisma.course.delete({
        where: { id: id as string },
      });

      return res.status(202).json({ body: deletedCourse.id });

    case 'PATCH':
      const updatedCourse = await prisma.course.update({
        where: { id: id as string },
        data: req.body,
      });

      return res.status(202).json({ body: updatedCourse });

    case 'GET':
      const course = await prisma.course.findUnique({
        where: { id: id as string },
      });

      return res.status(200).json({ body: course });
    default:
      return res.status(404).json({ message: 'not found' });
  }
}
