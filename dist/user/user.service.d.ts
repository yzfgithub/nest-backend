import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    find(query: any): Promise<User[]>;
    create(user: User): Promise<User>;
    update(user: User): Promise<any>;
    bind(param: any): Promise<any>;
    remove(user_id: string): Promise<any>;
}
