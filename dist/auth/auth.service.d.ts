import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ApiException } from 'src/common/exceptions/api.exception';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    createToken(phone: string, password: string): Promise<ApiException | {
        token: string;
    }>;
    validateUser(payload: any): Promise<any>;
}
