import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export class CotalogRepository {
  async getCotalogs() {
    return await prisma.cotalog.findMany()
  }
}