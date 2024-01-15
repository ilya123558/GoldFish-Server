import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export class CategoryRepository {
  async getCategoriesByCotalog(cotalogUrl: string) {
    return prisma.category.findMany({ where: { cotalogUrl } })
  }

  
  async getCategoriesByUrl(categoryUrl: string) {
    return prisma.category.findUnique({ where: { url: categoryUrl } })
  }
}