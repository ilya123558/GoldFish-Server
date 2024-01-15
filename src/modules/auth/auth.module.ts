import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { UserValidateStrategy } from '../../strategies';
import { CookieModule } from '../cookie/cookie.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    CookieModule
  ],
  controllers: [AuthController],
  providers: [AuthService, UserValidateStrategy]
})

export class AuthModule { }