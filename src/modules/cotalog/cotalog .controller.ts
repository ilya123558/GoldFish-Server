import { Controller, Get } from '@nestjs/common';
import { CotalogService } from './cotalog .service';

@Controller('cotalog')
export class CotalogController {
  constructor(private readonly cotalogService: CotalogService) { }

  @Get('/all')
  async getCotalogs() {
    const cotalogs = await this.cotalogService.getCotalogs()
    
    return cotalogs
  }
}
