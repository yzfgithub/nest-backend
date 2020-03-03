import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Article } from 'src/entities/article.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Article])],
  providers: [NewsService],
  controllers: [NewsController]
})
export class NewsModule {}
