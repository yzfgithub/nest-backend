import { Controller, Post, Body, Delete, Param } from '@nestjs/common';
import { NewsService } from './news.service';
import { Article } from 'src/entities/article.entity';

@Controller('news')
export class NewsController {
    constructor(private readonly NewsService:NewsService){}

    @Post()
    create(@Body() body:Article): Promise<Article> {
        return this.NewsService.create(body);
    }

    @Delete(":news_id")
    remove(@Param() param){
        return this.NewsService.remove(param.news_id);
    }
}
