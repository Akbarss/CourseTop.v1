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
      const deletedpostCategory = await prisma.postCategory.delete({
        where: { id: id as string },
      });

      return res.status(202).json({ body: deletedpostCategory.id });

    case 'PATCH':
      const updatedpostCategory = await prisma.postCategory.update({
        where: { id: id as string },
        data: req.body,
      });

      return res.status(202).json({ body: updatedpostCategory });

    default:
      return res.status(404).json({ message: 'not found' });
  }
}
