import { RoleService } from './role.service';
import { Role } from 'src/entities/role.entity';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    test(body: Role): Promise<any>;
}
