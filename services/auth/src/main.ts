import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // remove extra fields
      forbidNonWhitelisted: true, // throw error on extra fields
      transform: true,            // auto-transform DTOs
    }),
  );

  const port = process.env.PORT ? Number(process.env.PORT) : 3000;

  await app.listen(port, '0.0.0.0');
}
bootstrap();