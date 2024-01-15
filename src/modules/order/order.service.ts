import { HttpException, Injectable } from '@nestjs/common';
import { IGetAllOrders } from './models/order.interface';
import { OrderRepository } from './repositories/order.repository';
import { UpdateOrderDTO } from './dto';
import { BasketService } from '../basket/basket.service';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly basketService: BasketService
  ) { }

  async getAllOrders(data: IGetAllOrders) {
    try {
      return await this.orderRepository.getAllOrders(data)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }

  async createOrder(data: { userId: string, price: number }) {
    try {
      const day = new Date().getDate().toString()
      const month = (new Date().getMonth() + 1).toString()
      const year = new Date().getFullYear().toString()
      const date = `${day.length === 1 ? '0' + day : day}.${month.length === 1 ? '0' + month : month}.${year}`

      const order = await this.orderRepository.createOrder({
        date,
        price: data.price,
        paid: false,
        userId: data.userId
      })

      const basketId = await this.basketService.findBasketIdByUserId(data.userId)
      await this.basketService.resetBasket({ basketId })

      return order
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }

  async updatePaidValueInOrder(dto: UpdateOrderDTO) {
    try {
      return await this.orderRepository.updatePaidValueInOrder(dto)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


}
