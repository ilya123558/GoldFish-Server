import { IsString } from "class-validator";


export class CreateAuthDTO {
  @IsString()
  name: string

  @IsString()
  lastName: string

  @IsString()
  email: string

  @IsString()
  password: string
}


export class ConfirmEmailDTO {
  @IsString()
  ['activation-email-string']: string

  @IsString()
  email: string
}