import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter'
import { NestExpressApplication } from '@nestjs/platform-express';
import {join} from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname,'../public', 'upload'),{
    prefix:'/static/'
  })
  app.setGlobalPrefix('backend');
  app.useGlobalFilters(new HttpExceptionFilter());


  const options = new DocumentBuilder()
    .setTitle('测试swagger')
    .setDescription('描述')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
