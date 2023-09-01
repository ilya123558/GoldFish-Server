import { Controller, Param, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('cotalog')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get('/:cotalogUrl')
  async getCategories(@Param('cotalogUrl') cotalogUrl: string) {
    const categories = this.categoryService.getCategories(cotalogUrl)
    return categories
  }
}
