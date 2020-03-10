import { Article } from 'src/entities/article.entity';
import { Repository } from 'typeorm';
export declare class NewsService {
    private readonly newsRepository;
    constructor(newsRepository: Repository<Article>);
    find(query: any): Promise<any>;
    create(body: any): Promise<Article>;
    remove(news_id: string): Promise<any>;
}
