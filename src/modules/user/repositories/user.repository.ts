import { PrismaClient, User } from '@prisma/client';
import { IFindOneByActivationEmailString } from '../models/user.interface';
import { v4 } from 'uuid'

const prisma = new PrismaClient()

export class UserRepository {

  async findOneByActivationEmailString(data: IFindOneByActivationEmailString) {
    return await prisma.user.findUnique({
      where: data
    })
  }

  
  async findOneByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email }
    })
  }


  async findOneById(id: string) {
    return await prisma.user.findUnique({
      where: { id }
    })
  }


  async create(data: User) {
    return await prisma.user.create({
      data: {
        ...data,
        basket: {
          create: {
            id: v4(),
          }
        }
      }
    })
  }


  async updateStatusByEmail(email: string) {
    return await prisma.user.update({
      where: {
        email
      },
      data: {
        status: 'active'
      }
    })
  }


  async updateName(id: string, name: string) {
    return await prisma.user.update({
      where: {
        id
      },
      data: {
        name
      }
    })
  }


  async updateLastName(id: string, lastName: string) {
    return await prisma.user.update({
      where: {
        id
      },
      data: {
        lastName
      }
    })
  }


  async updatePhone(id: string, phone: string) {
    return await prisma.user.update({
      where: {
        id
      },
      data: {
        phone
      }
    })
  }


  async updateEmail(id: string, email: string) {
    return await prisma.user.update({
      where: {
        id
      },
      data: {
        email
      }
    })
  }


  async updateDiscountPoints(id: string, discountPoints: number) {
    return await prisma.user.update({
      where: {
        id
      },
      data: {
        discountPoints
      }
    })
  }
}