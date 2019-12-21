import { Controller, Get, Post, Put, Delete, Res, Param, HttpStatus, HttpException } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiException } from 'src/common/exceptions/api.exception';
import { ApiErrorCode } from 'src/common/enums/api-error-code.enmu';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService) {}

    @Get()
    findAll() {
        if(true) {
            throw new HttpException('111', HttpStatus.BAD_REQUEST);
        }
    }
    @Get(':name')
    findOne(@Res() res, @Param() param) {
        if (param.name === 'yzf') {
            throw new ApiException('非法用户', ApiErrorCode.USER_ID_INVALID, HttpStatus.BAD_REQUEST);
        }
        return res.status(HttpStatus.OK).send({
            errorCode : 0,
            errorMessage: '22222',
        })
    }
    @Post()
    create(){
        console.log('aa')
    }
    @Put()
    update() {

    }
    @Delete()
    remove(){

    }

}
