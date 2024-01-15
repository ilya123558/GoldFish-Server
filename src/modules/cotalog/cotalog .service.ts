import { HttpException, Injectable } from '@nestjs/common';
import { CotalogRepository } from './repositories/cotalog.repository';

@Injectable()
export class CotalogService {
  constructor(private readonly cotalogRepository: CotalogRepository) {}

  async getCotalogs() {
    try {
      return await this.cotalogRepository.getCotalogs()
    }
    catch (error) {
      if (error in HttpException) {
        throw new HttpException({ message: error.message }, error.status)
      }

      throw new HttpException({ message: 'error' }, 500)
    }
  }
}