import { Injectable, HttpStatus } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ApiException } from 'src/common/exceptions/api.exception';
import { ApiErrorCode } from 'src/common/enums/api-error-code.enmu';
@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        ) {}
    async createToken(name: string,password: string) {
        console.log('gg')
        let result =await this.userService.find({"name":name,"password":password});
        console.log(result,'result');
        if(result){
            const expiration = 60*60;
            const data = {name:result[0].name,user_id:result[0].user_id}
            const accessToken = this.jwtService.sign(data)
            console.log(accessToken)
            const ret = result[0];
            ret.token = accessToken;
            return {
                ret
            }
        } else {
            return new ApiException("没有",ApiErrorCode.USER_ID_INVALID,HttpStatus.BAD_REQUEST)
        }
    }
    async validateUser(payload) {
        console.log(payload,'auth.service--')
        return await this.userService.findOne(payload.user_id);
    }
}