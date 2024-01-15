import { Module } from '@nestjs/common';
import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';
import { BasketToProductRepository } from './repositories/basketToProduct.repository';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [ProductModule],
  controllers: [BasketController],
  providers: [BasketService, BasketToProductRepository],
  exports: [BasketService]
})
export class BasketModule {}
