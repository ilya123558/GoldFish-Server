import { HttpException, Injectable } from '@nestjs/common';
import { ProductRepository } from './repositories/product.repository';
import { ISort } from './models/product.interface';
import {
  GetProductByIdDTO,
  GetProductsByCategoryDTO,
  GetProductsByIdsDTO,
  GetProductsDiscountDTO,
  GetProductsLimitedDTO,
  GetProductsRecommendationByCategoryDTO,
  GetProductsRecommendationDTO
} from './dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) { }

  async getProductsAll() {
    try {
      return await this.productRepository.getProductsAll()
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async getProductsByCategory(dto: GetProductsByCategoryDTO) {
    try {
      return await this.productRepository.getProductsByCategory(dto)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async getProductsDiscount(dto: GetProductsDiscountDTO) {
    try {
      return await this.productRepository.getProductsDiscount(dto)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async getProductsLimited(dto: GetProductsLimitedDTO) {
    try {
      return await this.productRepository.getProductsLimited(dto)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async getProductById(dto: GetProductByIdDTO) {
    try {
      return await this.productRepository.getProductById(dto)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async getProductsByIds(dto: GetProductsByIdsDTO) {
    try {
      return await this.productRepository.getProductsByIds(dto)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async getProductsSorted(sortList: ISort) {
    try {
      return await this.productRepository.getProductsSorted(sortList)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async getProductsRecommendation(dto: GetProductsRecommendationDTO) {
    try {
      return await this.productRepository.getProductsRecommendation(dto)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async getProductsRecommendationByCategory(dto: GetProductsRecommendationByCategoryDTO) {
    try {
      return await this.productRepository.getProductsRecommendationByCategory(dto)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }
}
