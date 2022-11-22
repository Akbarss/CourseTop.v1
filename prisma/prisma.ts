// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const _global: any = global;

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!_global.prisma) {
    _global.prisma = new PrismaClient();
  }
  prisma = _global.prisma;
}

export default prisma;
