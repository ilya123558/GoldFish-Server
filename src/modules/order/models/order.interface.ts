import { Order, User } from "@prisma/client";

export interface IGetAllOrders {
  userId: User['id']
}

export interface ICreateOrder extends Omit<Order, 'id'> { 
  userId: User['id']
}