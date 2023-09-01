import { Module } from '@nestjs/common';
import { CotalogService } from './cotalog .service';
import { CotalogController } from './cotalog .controller';

@Module({
  providers: [CotalogService],
  controllers: [CotalogController]
})
export class CotalogModule {}
