import { OrderService } from './order.service';
import { Controller, Get, Post, Req, Res, UseGuards, Body, Put } from '@nestjs/common';
import { User } from '@prisma/client';
import { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/guards';
import { CreateOrderDTO, UpdateOrderDTO } from './dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Get('get-all')
  @UseGuards(JwtAuthGuard)
  async getAllOrders(@Res() res: Response, @Req() req: Request) {
    const user = req.user as User
    const orders = await this.orderService.getAllOrders({ userId: user.id })

    return res.status(200).json(orders)
  }

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async createOrder(@Res() res: Response, @Req() req: Request, @Body() dto: CreateOrderDTO) {
    const user = req.user as User
    const orders = await this.orderService.createOrder({
      price: dto.price,
      userId: user.id
    })

    return res.status(200).json({ orders })
  }

  @Put('update')
  @UseGuards(JwtAuthGuard)
  async updatePaidValueInOrder(@Res() res: Response, @Body() dto: UpdateOrderDTO) {
    const orders = await this.orderService.updatePaidValueInOrder(dto)

    return res.status(200).json({ orders })
  }
}
