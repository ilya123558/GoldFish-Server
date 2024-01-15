import { Injectable, HttpException, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '@prisma/client';
import { v4 } from 'uuid'
import { ILogin } from './models/auth.interface';
import { ConfirmEmailDTO, CreateAuthDTO } from './dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) { }

  async validateUserByEmailAndPassword({ email, password }: ILogin) {
    try {
      const user = await this.userService.findOneByEmail(email)
      const isPasswordValid = await this.userService.isValidPassword(password, user.password)

      if (user && isPasswordValid) {
        if (user.status === 'pending') {
          throw new UnauthorizedException('Check your email')
        }

        return user
      }

      throw new UnauthorizedException()
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async registration(createAuthDTO: CreateAuthDTO) {
    try {
      const userExists = await this.userService.findOneByEmail(createAuthDTO.email)

      if (userExists) {
        throw new UnauthorizedException('User with this email already exists')
      }

      const user: User = {
        ...createAuthDTO,
        password: await this.userService.hashingPassword(createAuthDTO.password),
        status: 'pending',
        phone: null,
        imgSrc: null,
        discountPoints: 1000,
        id: v4(),
        activationEmailString: v4()
      }

      return await this.userService.create(user)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }

  
  async confirmEmail(confirmEmailDTO: ConfirmEmailDTO) {
    try {
      const userExists = await this.userService.findOneByActivationEmailString({
        ...confirmEmailDTO,
        activationEmailString: confirmEmailDTO['activation-email-string']
      })

      if (!userExists) {
        throw new BadRequestException()
      }

      return await this.userService.updateStatusByEmail(confirmEmailDTO.email)
    }

    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async login(data: ILogin) {
    try {
      const user = await this.validateUserByEmailAndPassword(data)
      return user
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }

  }
}
