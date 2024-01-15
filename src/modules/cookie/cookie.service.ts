import { JwtService } from '@nestjs/jwt';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class CookieService {
  constructor(private readonly jwtService: JwtService) { }

  async setAccessAndRefreshTokenInCookie(data: any, res: Response) {
    try {
      const accessToken = await this.jwtService.signAsync(data, { expiresIn: '30m' })
      const refreshToken = await this.jwtService.signAsync(data, { expiresIn: '1d' })
      res.cookie('accessToken', accessToken, { httpOnly: true, secure: true })
      res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true })
    }
    catch (error) {
      throw new BadRequestException()
    }
  }

  async setAccessTokenInCookie(data: any, res: Response) {
    try {
      const accessToken = await this.jwtService.signAsync(data, { expiresIn: '30m' })
      res.cookie('accessToken', accessToken, { httpOnly: true, secure: true })
    }
    catch (error) {
      throw new BadRequestException()
    }
  }

  async clearAccessAndRefreshTokenFromCookie(res: Response) {
    try {
      res.clearCookie('accessToken')
      res.clearCookie('refreshToken')

      return
    }
    catch (error) {
      throw new BadRequestException()
    }
  }

  async validateToken(token: string): Promise<{
    userId: string;
    iat: number;
    exp: number;
  } | undefined> {
    try {
      const payload = await this.jwtService.verifyAsync(token, { secret: process.env.JWT_SECRET })

      const expirationTime = payload.exp * 1000
      const currentTime = Date.now();

      if (expirationTime < currentTime) {
        return undefined
      }

      return payload
    }
    catch {
      return undefined
    }
  }
}