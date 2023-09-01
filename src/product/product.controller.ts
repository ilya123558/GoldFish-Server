import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('category')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get('/:categoryUrl/:cotalogUrl')
  async getProducts(@Param('cotalogUrl') cotalogUrl: string) {
    const products = this.productService.getProducts(cotalogUrl)
    return products
  }
}
