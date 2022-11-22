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
      const is_safe = await prisma.course.findMany({
        where: { provider_id: id as string },
      });

      if (is_safe.length > 0) {
        return res.status(401).json({ message: 'provider has courses' });
      }

      const deletedProvider = await prisma.provider.delete({
        where: { id: id as string },
      });

      return res.status(202).json({ body: deletedProvider.id });

    case 'PATCH':
      const updatedPrvider = await prisma.provider.update({
        where: { id: id as string },
        data: req.body,
      });

      return res.status(202).json({ body: updatedPrvider });

    case 'GET':
      const provider = await prisma.provider.findUnique({
        where: { slug: id as string },
      });

      return res.status(200).json({ body: provider });
    default:
      return res.status(404).json({ message: 'not found' });
  }
}
