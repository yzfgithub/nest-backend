import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { RoleService } from 'src/role/role.service';
export declare class UserService {
    private readonly userRepository;
    private roleService;
    constructor(userRepository: Repository<User>, roleService: RoleService);
    find(query: any): Promise<User[]>;
    findOne(user_id: any): Promise<any>;
    create(user: User): Promise<User>;
    update(user: User): Promise<any>;
    bind(param: any): Promise<any>;
    remove(user_id: string): Promise<any>;
    getUserByToken(token: any): Promise<any>;
}
