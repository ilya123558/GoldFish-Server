import { PrismaClient } from '@prisma/client';
import { v4 } from 'uuid';
import { CreateBasketDTO, DeleteBasketDTO, GetBasketDTO, UpdateBasketDTO } from '../dto';

const prisma = new PrismaClient()

export class BasketToProductRepository {
  async getAllProducts(getBasketDTO: GetBasketDTO) {
    const products = await prisma.basketToProduct.findMany({
      where: {
        ...getBasketDTO
      },
      orderBy: {
        productId: 'asc'
      }
    })
    return products
  }


  async findProduct(createBasketDTO: CreateBasketDTO) {
    const product = await prisma.basketToProduct.findFirst({
      where: {
        ...createBasketDTO
      }
    })
    return product
  }


  async addProduct(createBasketDTO: CreateBasketDTO) {
    const product = await prisma.basketToProduct.create({
      data: {
        ...createBasketDTO,
        id: v4(),
        quantity: 1
      }
    })
    return product
  }


  async incProduct(updateBasketDTO: UpdateBasketDTO) {
    const product = await prisma.basketToProduct.updateMany({
      where: {
        ...updateBasketDTO
      },
      data: {
        quantity: {
          increment: 1
        }
      }
    })
    return product
  }


  async decProduct(updateBasketDTO: UpdateBasketDTO) {
    const product = await prisma.basketToProduct.updateMany({
      where: {
        ...updateBasketDTO
      },
      data: {
        quantity: {
          decrement: 1
        }
      }
    })
    return product
  }


  async deleteProduct(updateBasketDTO: UpdateBasketDTO) {
    const product = await prisma.basketToProduct.deleteMany({
      where: {
        ...updateBasketDTO
      }
    })
    return product
  }

  
  async findBasketIdByUserId(userId: string) {
    const { id } = await prisma.basket.findUnique({
      where: {
        userId
      }
    })
    return id
  }

  async resetBasket(dto: DeleteBasketDTO) {
    return await prisma.basketToProduct.deleteMany({
      where: dto
    })
  }
}