import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ApiException } from 'src/common/exceptions/api.exception';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    createToken(name: string, password: string): Promise<ApiException | {
        ret: import("../entities/user.entity").User;
    }>;
    validateUser(payload: any): Promise<any>;
}
