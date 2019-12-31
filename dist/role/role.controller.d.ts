import { RoleService } from './role.service';
import { Role } from 'src/entities/role.entity';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    find(): Promise<Role[]>;
    create(body: Role): Promise<any>;
    update(body: Role): Promise<Role>;
    delete(param: any): Promise<string>;
}
