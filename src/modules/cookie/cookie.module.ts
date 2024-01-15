import { Module } from '@nestjs/common';
import { CookieService } from './cookie.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET
    })
  ],
  providers: [CookieService],
  exports: [CookieService]
})
export class CookieModule { }