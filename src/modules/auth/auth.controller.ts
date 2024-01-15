import { Body, Controller, Get, Post, Query, Res, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { JwtAuthGuard, UserValidateGuard } from '../../guards';
import { CookieService } from '../cookie/cookie.service';
import { ConfirmEmailDTO, CreateAuthDTO } from './dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly cookieService: CookieService
  ) { }

  @Get()
  @UseGuards(JwtAuthGuard)
  async isAuth(@Res() res: Response) {
    return res.status(200).json({ status: 200 })
  }

  @Get('confirm')
  async confirmEmail(@Query() confirmEmailDTO: ConfirmEmailDTO) {
    return await this.authService.confirmEmail(confirmEmailDTO)
  }

  @Post('registration')
  async registration(@Body() createAuthDTO: CreateAuthDTO) {
    const user = await this.authService.registration(createAuthDTO)
    return { userId: user.id }
  }


  @Post('login')
  @UseGuards(UserValidateGuard)
  async login(@Req() req: Request, @Res() res: Response) {
    await this.cookieService.setAccessAndRefreshTokenInCookie(req.user, res)

    return res.status(200).json({ status: 200 })
  }

  @Post('logout')
  async logout(@Res() res: Response) {
    await this.cookieService.clearAccessAndRefreshTokenFromCookie(res)

    return res.status(200).json({ status: 200 })
  }
}
