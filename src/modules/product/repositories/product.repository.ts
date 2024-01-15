import { PrismaClient } from '@prisma/client';
import { ISort } from '../models/product.interface';
import { filter } from '../filters/filter';
import {
  GetProductByIdDTO,
  GetProductsByCategoryDTO,
  GetProductsByIdsDTO,
  GetProductsDiscountDTO,
  GetProductsLimitedDTO,
  GetProductsRecommendationByCategoryDTO,
  GetProductsRecommendationDTO
} from '../dto';

const prisma = new PrismaClient()

export class ProductRepository {
  async getProductsAll() {
    return await prisma.product.findMany()
  }


  async getProductsByCategory(dto: GetProductsByCategoryDTO) {
    return await prisma.product.findMany({
      where: {
        categoryUrl: dto.categoryUrl
      },
      take: dto.limit ? Number(dto.limit) : 50
    })
  }


  async getProductsDiscount(dto: GetProductsDiscountDTO) {
    return await prisma.product.findMany({
      where: {
        discount: {
          not: null
        }
      },
      take: dto.limit ? Number(dto.limit) : 12
    })
  }


  async getProductsLimited(dto: GetProductsLimitedDTO) {
    return await prisma.product.findMany({
      where: {
        count: {
          lt: 3
        }
      },
      take: dto.limit ? Number(dto.limit) : 12
    })
  }


  async getProductById(dto: GetProductByIdDTO) {
    return await prisma.product.findUnique({
      where: {
        id: Number(dto.productId)
      },
      include: {
        faq: true
      }
    })
  }


  async getProductsByIds(getProductsByIdsDTO: GetProductsByIdsDTO) {
    return await prisma.product.findMany({
      where:
      {
        id:
        {
          in: getProductsByIdsDTO.productIdList.split(',').map(productId => Number(productId))
        }
      }
    })
  }


  async getProductsSorted(sortList: ISort) {
    return await prisma.product.findMany({ where: filter(sortList) })
  }


  async getProductsRecommendation(dto: GetProductsRecommendationDTO) {
    const products = await prisma.product.findMany({
      take: Number(dto.limit)
    })

    return products
  }


  async getProductsRecommendationByCategory(dto: GetProductsRecommendationByCategoryDTO) {
    const products = await prisma.product.findMany({
      where: {
        categoryUrl: dto.categoryUrl,
        NOT: {
          id: Number(dto.productId)
        }
      },
      take: dto.limit ? Number(dto.limit) : 2
    })

    return products
  }
}