import { Injectable } from '@nestjs/common';
import { News } from 'src/entities/News.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';

@Injectable()
export class NewsService {
    constructor(@InjectRepository(News) private readonly newsRepository:Repository<News>){}
    
    async create(body): Promise<News>{
        return this.newsRepository.save(body);
    }
    async remove(news_id:string): Promise<any>{
        return this.newsRepository.delete({"news_id":news_id});
    }
}
