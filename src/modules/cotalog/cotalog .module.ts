import { Module } from '@nestjs/common';
import { CotalogService } from './cotalog .service';
import { CotalogController } from './cotalog .controller';
import { CotalogRepository } from './repositories/cotalog.repository';

@Module({
  providers: [CotalogService, CotalogRepository],
  controllers: [CotalogController]
})
export class CotalogModule {}
