import { IsNumberString, IsOptional, IsString } from "class-validator";

export class GetProductsDiscountDTO {
  @IsOptional()
  @IsNumberString()
  limit?: string;
}

export class GetProductsLimitedDTO {
  @IsOptional()
  @IsNumberString()
  limit?: string;
}

export class GetProductsByCategoryDTO {
  @IsString()
  categoryUrl: string

  @IsOptional()
  @IsNumberString()
  limit?: string;
}

export class GetProductsRecommendationDTO {
  @IsString()
  limit: string
}

export class GetProductsRecommendationByCategoryDTO {
  @IsString()
  categoryUrl: string

  @IsString()
  productId: string

  @IsOptional()
  @IsNumberString()
  limit?: string;
}

export class GetProductsByIdsDTO {
  @IsString()
  productIdList: string
}

export class GetProductByIdDTO {
  @IsString()
  productId: string
}


