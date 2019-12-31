import { Controller, Post, Param, Body, Delete, Put, Get } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from 'src/entities/role.entity';

@Controller('role')
export class RoleController {
    constructor(private readonly roleService:RoleService) {}

    @Get()
    find():Promise<Role []>{
        return this.roleService.find();
    }

    @Post()
    create(@Body() body:Role): Promise<any> {
        return this.roleService.create(body);
    }
    @Put()
    update(@Body() body:Role): Promise<Role> {
        return this.roleService.update(body);
    }
    @Delete(':id')
    delete(@Param() param): Promise<string> {
        return this.roleService.delete(param.id);
    }
}
