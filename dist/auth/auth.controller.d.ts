import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getTokenByUserId(name: string, password: string): Promise<import("../common/exceptions/api.exception").ApiException | {
        ret: import("../entities/user.entity").User;
    }>;
}
