import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { ApiException } from 'src/common/exceptions/api.exception';
import { ApiErrorCode } from 'src/common/enums/api-error-code.enmu';

import { RoleService } from 'src/role/role.service'
import { Role } from 'src/entities/role.entity';
import { create } from 'istanbul-reports';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        private roleService:RoleService
        ){}

    async find(query): Promise<User []> {
        return this.userRepository.find(query);
    }

    async findOne(user_id): Promise<any> {
        return await this.userRepository.findOne({'user_id':user_id}, {relations: ['roles']})
        // return this.userRepository.createQueryBuilder('')
        // return this.userRepository.findOne({'id':id});
        // return this.userRepository.findOne(id,{
        //     relations: ['image'],
        // });
    }

    async create(user:User): Promise<User> {
        let arr = [];
        if (user.roles.length) {
            arr = user.roles.map((item) =>  {
                return {role_id: item}
            })
        }
        console.log(arr)
        user.roles =  await this.roleService.getRolesByIds(arr);
        return this.userRepository.save(user)
    }

    async update(user:User): Promise<any> {
        let result = await this.userRepository.findOne(user.user_id);
        if (result) {
            return this.userRepository.update({"user_id":user.user_id},user);
        } else {
            return new ApiException('用户id不存在', ApiErrorCode.USER_ID_INVALID, HttpStatus.BAD_REQUEST)
        }
    }

    async bind(param): Promise<any> {
        let result = await this.userRepository.findOne({"user_id":param.user_id})
        if (result) {
            let arr = [];
            if (param.roles.length) {
                arr = param.roles.map((item) =>  {
                    return {role_id: item}
                })
            }
            result.roles =  await this.roleService.getRolesByIds(arr);
            return this.userRepository.save(result)
        } else {
            return new ApiException('用户id不存在', ApiErrorCode.USER_ID_INVALID, HttpStatus.BAD_REQUEST)
        }
    }

    async remove(user_id:string): Promise<any> {
        return this.userRepository.delete({"user_id":user_id})
    }
}
