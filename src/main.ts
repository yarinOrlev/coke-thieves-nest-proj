import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // strips non-DTO fields
    forbidNonWhitelisted:true, // throws an error if extra fields exist
  }));
  await app.listen(3000);
}
bootstrap();
