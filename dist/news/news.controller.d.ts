import { NewsService } from './news.service';
import { News } from 'src/entities/news.entity';
export declare class NewsController {
    private readonly NewsService;
    constructor(NewsService: NewsService);
    create(body: News): Promise<News>;
    remove(param: any): Promise<any>;
}
