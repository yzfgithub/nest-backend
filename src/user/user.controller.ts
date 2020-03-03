import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService) {}

    @Get()
    find(@Query() query): Promise<User []> {
        return this.userService.find(query);
    }
    @Get(':id')
    findOne(@Param() param):Promise<any> {
        return this.userService.findOne(param.id);
    }

    @Post()
    create(@Body() body): Promise<any> {
        return this.userService.create(body);
    }

    @Put()
    update(@Body() body): Promise<any> {
        return this.userService.update(body);
    }
    @Put('bind')
    bind(@Body() body): Promise<any> {
        return this.userService.bind(body);
    }

    @Delete(":user_id")
    remove(@Param() param){
        return this.userService.remove(param.user_id);
    }

}
