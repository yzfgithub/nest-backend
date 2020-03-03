import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    find(query: any): Promise<User[]>;
    findOne(param: any): Promise<any>;
    create(body: any): Promise<any>;
    update(body: any): Promise<any>;
    bind(body: any): Promise<any>;
    remove(param: any): Promise<any>;
}
