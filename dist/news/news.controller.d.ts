import { NewsService } from './news.service';
import { Article } from 'src/entities/article.entity';
export declare class NewsController {
    private readonly NewsService;
    constructor(NewsService: NewsService);
    find(): Promise<Article[]>;
    create(body: Article): Promise<Article>;
    remove(param: any): Promise<any>;
}
