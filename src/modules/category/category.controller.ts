import { Controller, Get, Param, Query } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get('/all-by-cotalog')
  async getCategoriesByCotalog(@Query('cotalogUrl') cotalogUrl: string) {
    const categories = this.categoryService.getCategoriesByCotalog(cotalogUrl)
    return categories
  } 

  @Get('/:categoryUrl')
  async getCategoriesByUrl(@Param('categoryUrl') categoryUrl: string) {
    const category = this.categoryService.getCategoriesByUrl(categoryUrl)
    return category
  } 
}