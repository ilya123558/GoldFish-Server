import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './repositories/user.repository';
import { PassportModule } from '@nestjs/passport';
import { CookieModule } from '../cookie/cookie.module';
import { BasketModule } from '../basket/basket.module';

@Module({
  imports: [
    PassportModule,
    CookieModule,
    BasketModule
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService]
})
export class UserModule { }
