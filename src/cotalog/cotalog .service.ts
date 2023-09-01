import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CotalogService {
  async getCotalogs() {
    const prisma = new PrismaClient()
    await prisma.$connect()
    return prisma.cotalog.findMany()
  }
}