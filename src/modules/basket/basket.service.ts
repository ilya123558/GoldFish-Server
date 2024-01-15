import { HttpException, Injectable } from '@nestjs/common';
import { BasketToProductRepository } from './repositories/basketToProduct.repository';
import { CreateBasketDTO, DeleteBasketDTO, GetBasketDTO, UpdateBasketDTO } from './dto';
import { ProductService } from '../product/product.service';
import { findPriceWithDiscount } from 'src/common/findPriceWithDiscount';


@Injectable()
export class BasketService {
  constructor(
    private readonly basketToProductRepository: BasketToProductRepository,
    private productService: ProductService
  ) { }


  async getAllProducts(getBasketDTO: GetBasketDTO) {
    try {
      const products = await this.basketToProductRepository.getAllProducts(getBasketDTO)
      return products
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async getTotalPrice(dto: GetBasketDTO) {
    try {
      const allProductsInBasket = await this.basketToProductRepository.getAllProducts(dto)
      const productIdList = allProductsInBasket.map(item => item.productId).join(',')
      const productList = await this.productService.getProductsByIds({ productIdList })
      const totalPrice = productList.reduce((acc, product) => {
        const quantity = allProductsInBasket.find(item => item.productId === product.id).quantity
        return acc + findPriceWithDiscount(product.price * quantity, product.discount || 0)
      }, 0)

      return totalPrice
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async addProduct(dto: CreateBasketDTO) {
    try {
      const productExist = await this.basketToProductRepository.findProduct(dto)
      if (!productExist) {
        const product = await this.basketToProductRepository.addProduct(dto)
        return product
      }

      if (productExist.quantity < 10) {
        const product = await this.basketToProductRepository.incProduct(dto)
        return product
      }

      return { message: 'products > 10' }
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async incProduct(dto: UpdateBasketDTO) {
    try {
      const product = await this.basketToProductRepository.incProduct(dto)
      return product
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async decProduct(dto: UpdateBasketDTO) {
    try {
      const product = await this.basketToProductRepository.decProduct(dto)
      return product
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async deleteProduct(dto: UpdateBasketDTO) {
    try {
      const product = await this.basketToProductRepository.deleteProduct(dto)
      return product
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async findBasketIdByUserId(userId: string) {
    try {
      const basketId = await this.basketToProductRepository.findBasketIdByUserId(userId)
      return basketId
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }

  
  async resetBasket(dto: DeleteBasketDTO) {
    try {
      const product = await this.basketToProductRepository.resetBasket(dto)
      return product
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }
}