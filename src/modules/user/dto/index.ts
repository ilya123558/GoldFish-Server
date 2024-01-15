import { IsNumber, IsString } from "class-validator";


export class UpdateUserNameDTO {
  @IsString()
  name: string
}


export class UpdateUserLastNameDTO {
  @IsString()
  lastName: string
}


export class UpdateUserPhoneDTO {
  @IsString()
  phone: string
}


export class UpdateUserEmailDTO {
  @IsString()
  email: string
}


export class UpdateUserDiscountPointsDTO {
  @IsNumber()
  discountPoints: number
}