import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BasketService } from './basket.service';
import { GetBasketDTO, UpdateBasketDTO, CreateBasketDTO } from './dto';

@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) { }

  @Get('/all-products')
  async getAllProducts(@Query() dto: GetBasketDTO) {
    const products = this.basketService.getAllProducts(dto)
    return products
  }

  @Get('/get-total-price')
  async getTotalPrice(@Query() dto: GetBasketDTO) {
    const products = this.basketService.getTotalPrice(dto)
    return products
  }

  @Post('/add-product')
  async addProduct(@Body() dto: CreateBasketDTO) {
    const product = this.basketService.addProduct(dto)
    return product
  }

  @Put('/inc')
  async incProduct(@Body() dto: UpdateBasketDTO) {
    const product = this.basketService.incProduct(dto)
    return product
  }

  @Put('/dec')
  async decProduct(@Body() dto: UpdateBasketDTO) {
    const product = this.basketService.decProduct(dto)
    return product
  }

  @Delete('/delete')
  async deleteProduct(@Body() dto: UpdateBasketDTO) {
    const product = this.basketService.deleteProduct(dto)
    return product
  }
}
