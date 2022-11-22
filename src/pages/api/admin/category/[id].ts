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
      const deletedCategory = await prisma.category.delete({
        where: { id: id as string },
      });

      return res.status(202).json({ body: deletedCategory.id });

    case 'PATCH':
      const updatedategory = await prisma.category.update({
        where: { id: id as string },
        data: req.body,
      });

      return res.status(202).json({ body: updatedategory });

    default:
      return res.status(404).json({ message: 'not found' });
  }
}
