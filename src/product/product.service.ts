import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductService {

  async getProducts(cotalogUrl) {
    const prisma = new PrismaClient()
    await prisma.$connect()
    return prisma.product.findMany({ where: { cotalogUrl } })
  }
}
