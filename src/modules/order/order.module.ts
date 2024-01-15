import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from './../user/user.module';
import { OrderRepository } from './repositories/order.repository';
import { BasketModule } from '../basket/basket.module';
import { CookieModule } from '../cookie/cookie.module';

@Module({
  imports: [PassportModule, UserModule, BasketModule, CookieModule],
  providers: [OrderService, OrderRepository],
  controllers: [OrderController]
})
export class OrderModule { }
