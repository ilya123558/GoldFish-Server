import { ExecutionContext, HttpException, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response, Request } from 'express';
import { CookieService } from 'src/modules/cookie/cookie.service';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private readonly cookieService: CookieService,
    private readonly userService: UserService
  ) {
    super()
  }

  async canActivate(context: ExecutionContext) {
    try {
      const req = context.switchToHttp().getRequest<Request>()
      const res = context.switchToHttp().getResponse<Response>()
      const accessToken = req.cookies['accessToken']
      const refreshToken = req.cookies['refreshToken']

      let payload = await this.cookieService.validateToken(accessToken)

      if (!payload) {
        payload = await this.cookieService.validateToken(refreshToken)

        if (!payload) return false
        const user = await this.userService.findOneById(payload.userId)

        if (!user) return false
        await this.cookieService.setAccessTokenInCookie({ userId: user.id }, res)

        req.user = user

        return true
      }

      const user = await this.userService.findOneById(payload.userId)

      if (!user) return false
      req.user = user

      return true
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 401)
    }
  }
}