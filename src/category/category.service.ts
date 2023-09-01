import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CategoryService {

  async getCategories(cotalogUrl) {
    const prisma = new PrismaClient()
    await prisma.$connect()
    return prisma.category.findMany({ where: { cotalogUrl } })
  }
}
