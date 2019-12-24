import { Role } from 'src/entities/role.entity';
import { Repository } from 'typeorm';
export declare class RoleService {
    private readonly roleRepository;
    constructor(roleRepository: Repository<Role>);
    test(role: Role): Promise<Role>;
}
