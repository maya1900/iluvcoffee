import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ApiKeyGuard } from './common/guards/api-key.guard';

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
  // app.useGlobalGuards(new ApiKeyGuard());
  await app.listen(3000);
}

bootstrap();
