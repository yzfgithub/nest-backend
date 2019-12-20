import { Controller, Post, Param, Body } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from 'src/entities/role.entity';

@Controller('role')
export class RoleController {
    constructor(private readonly roleService:RoleService) {}

    @Post()
    test(@Body() body:Role): Promise<any> {
        return this.roleService.test(body);
    }
}
