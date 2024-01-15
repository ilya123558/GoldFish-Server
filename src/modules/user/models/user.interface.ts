import { User } from "@prisma/client";

export interface IUser extends Omit<User, 'id' | 'activationEmailString' | 'status'> {}

export interface IFindOneByActivationEmailString {
  activationEmailString: string,
  email: string
}