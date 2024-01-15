import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class UserValidateStrategy extends PassportStrategy(Strategy, 'user_validate') {
  constructor(private readonly userService: UserService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Неверный email или пароль');
    }
    const isValidPassword = await this.userService.isValidPassword(password, user.password)

    if (!isValidPassword) {
      throw new UnauthorizedException('Неверный email или пароль');
    }
    
    return { userId: user.id };
  }
}