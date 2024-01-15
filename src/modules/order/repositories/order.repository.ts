import { v4 } from 'uuid';
import { PrismaClient } from '@prisma/client';
import { ICreateOrder, IGetAllOrders } from '../models/order.interface';
import { UpdateOrderDTO } from '../dto';

const prisma = new PrismaClient()

export class OrderRepository {
  async getAllOrders(data: IGetAllOrders) {
    return prisma.order.findMany({ where: { ...data } })
  }

  async getOrderById(data: { id: string }) {
    return prisma.order.findUnique({ where: { ...data } })
  }

  async createOrder(data: ICreateOrder) {
    const order = await prisma.order.create({
      data: {
        ...data,
        id: v4()
      }
    })

    return order
  }

  async updatePaidValueInOrder(dto: UpdateOrderDTO) {
    const paidValue = (await this.getOrderById(dto)).paid

    return prisma.order.update({
      where: {
        ...dto
      },
      data: {
        paid: !paidValue
      }
    })
  }
}



