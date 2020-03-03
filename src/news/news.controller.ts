import { Controller, Post, Body, Delete, Param } from '@nestjs/common';
import { NewsService } from './news.service';
import { News } from 'src/entities/news.entity';

@Controller('news')
export class NewsController {
    constructor(private readonly NewsService:NewsService){}

    @Post()
    create(@Body() body:News): Promise<News> {
        return this.NewsService.create(body);
    }
    
    @Delete(":news_id")
    remove(@Param() param){
        return this.NewsService.remove(param.news_id);
    }
}
