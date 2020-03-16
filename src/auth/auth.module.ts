import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { RoleService } from 'src/role/role.service';
import { Role } from 'src/entities/role.entity';
import {PassportModule} from '@nestjs/passport'
import {JwtModule} from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy';
@Module({
    imports:[
      TypeOrmModule.forFeature([User,Role]),
      JwtModule.register({
        secretOrPrivateKey: 'yanzf',
        signOptions:{
          expiresIn: 300
        }
      }),
      PassportModule.register({defaultStrategy: 'jwt'}),
    ],
    providers: [AuthService,UserService,RoleService,JwtStrategy],
    controllers: [AuthController]
  })
export class AuthModule {}