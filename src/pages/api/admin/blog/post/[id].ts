import type { NextApiRequest, NextApiResponse } from 'next';
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
  const { id } = req.query;

  switch (req.method) {
    case 'DELETE':
      const deletedpost = await prisma.post.delete({
        where: { id: id as string },
      });

      return res.status(202).json({ body: deletedpost.id });

    case 'PATCH':
      const updatedpost = await prisma.post.update({
        where: { id: id as string },
        data: req.body,
      });

      return res.status(202).json({ body: updatedpost });

    default:
      return res.status(404).json({ message: 'not found' });
  }
}
