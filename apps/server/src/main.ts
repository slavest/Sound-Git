import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { HttpLoggerInterceptor } from './libs/logging/http-logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Sound Git API')
    .setDescription('The sound git server API docs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalInterceptors(new HttpLoggerInterceptor());

  const configService = app.get(ConfigService);

  await app.listen(configService.getOrThrow('PORT'));
}

bootstrap();
