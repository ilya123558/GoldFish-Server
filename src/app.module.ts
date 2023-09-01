import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CotalogModule } from './cotalog/cotalog .module';

@Module({
  imports: [CategoryModule, CotalogModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
