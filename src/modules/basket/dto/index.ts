import { IsNumber, IsString } from "class-validator";

export class UpdateBasketDTO {
  @IsString()
  basketId: string

  @IsNumber()
  productId: number
}

export class CreateBasketDTO {
  @IsString()
  basketId: string

  @IsNumber()
  productId: number
}

export class GetBasketDTO {
  @IsString()
  basketId: string
}

export class DeleteBasketDTO {
  @IsString()
  basketId: string
}