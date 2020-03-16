import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getTokenByUserId(phone: string, password: string): Promise<import("../common/exceptions/api.exception").ApiException | {
        token: string;
    }>;
}
