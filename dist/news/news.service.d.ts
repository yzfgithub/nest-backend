import { News } from 'src/entities/News.entity';
import { Repository } from 'typeorm';
export declare class NewsService {
    private readonly newsRepository;
    constructor(newsRepository: Repository<News>);
    create(body: any): Promise<News>;
    remove(news_id: string): Promise<any>;
}
