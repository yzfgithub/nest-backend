import { Role } from 'src/entities/role.entity';
import { Repository } from 'typeorm';
export declare class RoleService {
    private readonly roleRepository;
    constructor(roleRepository: Repository<Role>);
    find(): Promise<Role[]>;
    create(role: Role): Promise<Role>;
    update(role: Role): Promise<any>;
    delete(id: any): Promise<any>;
    getRolesByIds(ids: any): Promise<Role[]>;
}
