import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,  // chỉ lấy các field đã khai báo trong validation -> các trường khác ngoài validation sẽ bỏ qua
    forbidNonWhitelisted: true, 
  }));
  app.setGlobalPrefix('api/v1', { exclude: [''] }); //set prefix route cho các route 'api/v1' và exclude route '/' không áp dụng prefix

  // await app.listen(process.env.PORT ?? 8080);
  await app.listen(port ?? 8080);
}
bootstrap();
