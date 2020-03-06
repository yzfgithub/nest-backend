import { Injectable } from '@nestjs/common';
import { Article } from 'src/entities/article.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';

@Injectable()
export class NewsService {
    constructor(@InjectRepository(Article) private readonly newsRepository:Repository<Article>){}

    async find(): Promise<Article []> {
        return this.newsRepository.find();
    }
    
    async create(body): Promise<Article>{
        return this.newsRepository.save(body);
    }
    async remove(news_id:string): Promise<any>{
        return this.newsRepository.delete({"news_id":news_id});
    }
}
