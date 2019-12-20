import { Injectable } from '@nestjs/common';
import { Role } from 'src/entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
    constructor( @InjectRepository(Role) private readonly roleRepository:Repository<Role>) {}

        async test(role:Role): Promise<Role> {
            console.log(role,'a')
            return this.roleRepository.save(role)
        }
    // async create(): Promise<Role> {
    //     return this.roleRepository.save()
    //     .then(res => )
    //     .catch()
    // }
}
