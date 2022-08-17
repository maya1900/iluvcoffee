import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true, // 传没有定义的报错
      transformOptions: {
        enableImplicitConversion: true, // 隐式转换
      },
    }),
  );
  await app.listen(3000);
}

bootstrap();
