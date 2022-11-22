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

  switch (req.method) {
    case 'GET':
      const categories = await prisma.postCategory.findMany();
      return res.status(200).json({ message: 'success', body: categories });

    case 'POST':
      const postCategory = await prisma.postCategory.create({
        data: { ...req.body },
      });
      return res.status(201).json({ message: 'success', body: postCategory });

    default:
      return res.status(404).json({ message: 'not found' });
  }
}
