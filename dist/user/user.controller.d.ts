import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): void;
    findOne(res: any, param: any): any;
    create(): void;
    update(): void;
    remove(): void;
}
