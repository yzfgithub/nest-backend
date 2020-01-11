import { Injectable, HttpStatus } from '@nestjs/common';
import { Role } from 'src/entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { ApiException } from 'src/common/exceptions/api.exception';
import { ApiErrorCode } from 'src/common/enums/api-error-code.enmu';

@Injectable()
export class RoleService {
    constructor( @InjectRepository(Role) private readonly roleRepository:Repository<Role>) {}

        async find(): Promise<Role []>{
            return this.roleRepository.find();
        }

        async create(role:Role): Promise<Role> {
            console.log(role);
            return this.roleRepository.save(role)
        }
        async update(role:Role): Promise<any> {
            let result = await this.roleRepository.findOne(role.id);
            if (result) {
                return this.roleRepository.update({"id": role.id}, role)
            } else {
                return new ApiException('角色id不存在', ApiErrorCode.ROLE_ID_INVALID, HttpStatus.BAD_REQUEST);
            }
        }
        async delete(id): Promise<any> {
            let role = await this.roleRepository.findOne({
                where: {"id":id}
            })
            if (role) {
                return this.roleRepository.delete(role);
            } else {
                return  new ApiException('角色id不存在', ApiErrorCode.ROLE_ID_INVALID, HttpStatus.BAD_REQUEST);
            }
            
        }
}
