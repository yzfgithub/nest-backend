import { Injectable } from '@nestjs/common';
import { Article } from 'src/entities/article.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';

@Injectable()
export class NewsService {
    constructor(@InjectRepository(Article) private readonly newsRepository:Repository<Article>){}

    async find(query): Promise<any> {
        let qb = this.newsRepository.createQueryBuilder('news');
        let startNum = (+query.pageSize) * (+query.pageNum - 1);
        qb = qb.skip(startNum).take(+query.pageSize);
        let result = await qb.getManyAndCount();
        let obj = {data:result[0],total: result[1]}
        return obj;
        // return this.newsRepository.find();
    }
    
    async create(body): Promise<Article>{
        return this.newsRepository.save(body);
    }
    async remove(news_id:string): Promise<any>{
        return this.newsRepository.delete({"news_id":news_id});
    }
}
