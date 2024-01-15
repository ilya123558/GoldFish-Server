import { Controller, Get, Param, Query, Post, Body, UseGuards, Res, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../../guards';
import { Request, Response } from 'express';
import { User } from '@prisma/client';
import {
  UpdateUserDiscountPointsDTO,
  UpdateUserEmailDTO,
  UpdateUserLastNameDTO,
  UpdateUserNameDTO,
  UpdateUserPhoneDTO
} from './dto';
import { BasketService } from '../basket/basket.service';


@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly basketService: BasketService
  ) { }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUser(@Res() res: Response, @Req() req: Request) {
    const { name, lastName, email, phone, imgSrc, discountPoints } = req.user as User
    return res.status(200).json({ name, lastName, email, phone, imgSrc, discountPoints })
  }

  @Get('get-ids')
  @UseGuards(JwtAuthGuard)
  async getUserWithBasketId(@Res() res: Response, @Req() req: Request) {
    const { id } = req.user as User
    const basketId = await this.basketService.findBasketIdByUserId(id)

    return res.status(200).json({
      userId: id,
      basketId
    })
  }

  @Post('update/name')
  @UseGuards(JwtAuthGuard)
  async updateName(@Req() req: Request, @Body() dto: UpdateUserNameDTO) {
    const { id } = req.user as User
    const newName = (await this.userService.updateName(id, dto.name)).name

    return newName
  }

  @Post('update/lastname')
  @UseGuards(JwtAuthGuard)
  async updateLastName(@Req() req: Request, @Body() dto: UpdateUserLastNameDTO) {
    const { id } = req.user as User
    const newLastName = (await this.userService.updateLastName(id, dto.lastName)).lastName

    return newLastName
  }

  @Post('update/phone')
  @UseGuards(JwtAuthGuard)
  async updatePhone(@Req() req: Request, @Body() dto: UpdateUserPhoneDTO) {
    const { id } = req.user as User
    const newPhone = (await this.userService.updatePhone(id, dto.phone)).phone

    return newPhone
  }

  @Post('update/email')
  @UseGuards(JwtAuthGuard)
  async updateEmail(@Req() req: Request, @Body() dto: UpdateUserEmailDTO) {
    const { id } = req.user as User
    const newEmail = (await this.userService.updateEmail(id, dto.email)).email

    return newEmail
  }

  @Post('update/discount-points')
  @UseGuards(JwtAuthGuard)
  async updateDiscountPoints(@Req() req: Request, @Body() dto: UpdateUserDiscountPointsDTO) {
    const { id } = req.user as User
    const newDiscountPoints = (await this.userService.updateDiscountPoints(id, dto.discountPoints)).discountPoints

    return newDiscountPoints
  }
}
