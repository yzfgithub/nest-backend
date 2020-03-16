import { Role } from "./role.entity";
export declare class User {
    user_id: string;
    name: string;
    password: string;
    email: string;
    mobile: number;
    gender: string;
    create_at: Date;
    update_at: Date;
    roles: Role[];
    token: string;
}
