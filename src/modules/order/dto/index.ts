import { IsNumber, IsString } from "class-validator";

export class CreateOrderDTO {
  @IsNumber()
  price: number
}


export class UpdateOrderDTO {
  @IsString()
  id: string
}
