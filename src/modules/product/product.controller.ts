import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { ISort } from './models/product.interface';
import {
  GetProductByIdDTO,
  GetProductsByCategoryDTO,
  GetProductsByIdsDTO,
  GetProductsDiscountDTO,
  GetProductsLimitedDTO,
  GetProductsRecommendationByCategoryDTO,
  GetProductsRecommendationDTO
} from './dto';


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get('/all')
  async getProductsAll() {
    const products = this.productService.getProductsAll()
    return products
  }

  @Get('/all-discount')
  async getProductsDiscount(@Query() dto: GetProductsDiscountDTO) {
    const products = this.productService.getProductsDiscount(dto)
    return products
  }

  @Get('/all-limited')
  async getProductsLimited(@Query() dto: GetProductsLimitedDTO) {
    const products = this.productService.getProductsLimited(dto)
    return products
  }

  @Get('/all-by-category')
  async getProductsByCategory(@Query() dto: GetProductsByCategoryDTO) {
    const products = this.productService.getProductsByCategory(dto)
    return products
  }

  @Get('/recommendation')
  async getProductsRecommendation(@Query() dto: GetProductsRecommendationDTO) {
    const products = this.productService.getProductsRecommendation(dto)
    return products
  }

  @Get('/recommendation-by-category')
  async getProductsRecommendationByCategory(@Query() dto: GetProductsRecommendationByCategoryDTO) {
    const products = this.productService.getProductsRecommendationByCategory(dto)
    return products
  }

  @Get('/all-by-ids')
  async getProductsByIds(@Query() dto: GetProductsByIdsDTO) {
    const products = this.productService.getProductsByIds(dto)
    return products
  }
  
  @Post('/sort')
  async getProductsSorted(@Body() sortList: ISort) {
    const products = this.productService.getProductsSorted(sortList)
    return products
  }

  @Get('/:productId')
  async getProductById(@Param() dto: GetProductByIdDTO) {
    const product = this.productService.getProductById(dto)
    return product
  }
}