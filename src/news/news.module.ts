import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Article } from 'src/entities/article.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[
    TypeOrmModule.forFeature([Article]),
    PassportModule.register({defaultStrategy: 'jwt'}),
  ],
  providers: [NewsService],
  controllers: [NewsController]
})
export class NewsModule {}
