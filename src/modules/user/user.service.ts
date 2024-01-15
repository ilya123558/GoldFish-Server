import { HttpException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from './repositories/user.repository';
import { IFindOneByActivationEmailString } from './models/user.interface';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {

  constructor(private readonly userRepository: UserRepository) { }

  async findOneByActivationEmailString(data: IFindOneByActivationEmailString) {
    try {
      return await this.userRepository.findOneByActivationEmailString(data)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }
  

  async findOneByEmail(email: string) {
    try {
      return await this.userRepository.findOneByEmail(email)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async findOneById(id: string) {
    try {
      return await this.userRepository.findOneById(id)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async create(data: User) {
    try {
      return await this.userRepository.create(data)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async updateStatusByEmail(email: string) {
    try {
      return await this.userRepository.updateStatusByEmail(email)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async isValidPassword(password: string, hashPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword)
  }


  async hashingPassword(password: string): Promise<string> {
    const hashPassword: string = bcrypt.hash(password, 10)
    return hashPassword
  }


  async updateName(id: string, name: string) {
    try {
      return await this.userRepository.updateName(id, name)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async updateLastName(id: string, lastName: string) {
    try {
      return await this.userRepository.updateLastName(id, lastName)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async updatePhone(id: string, phone: string) {
    try {
      return await this.userRepository.updatePhone(id, phone)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }
  

  async updateEmail(id: string, email: string) {
    try {
      return await this.userRepository.updateEmail(id, email)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async updateDiscountPoints(id: string, discountPoints: number) {
    try {
      return await this.userRepository.updateDiscountPoints(id, discountPoints)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }

  
}
