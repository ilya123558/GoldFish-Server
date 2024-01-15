import { HttpException, Injectable } from '@nestjs/common';
import { CategoryRepository } from './repositories/category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async getCategoriesByCotalog(cotalogUrl: string) {
    try {
      return await this.categoryRepository.getCategoriesByCotalog(cotalogUrl)

    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }


  async getCategoriesByUrl(categoryUrl: string) {
    try {
      return await this.categoryRepository.getCategoriesByUrl(categoryUrl)
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }
}
