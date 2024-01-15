import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({origin: process.env.CLIENT_DOMEN, credentials: true})
  app.use(cookieParser())
  app.setGlobalPrefix('api');
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
