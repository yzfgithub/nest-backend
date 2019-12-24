import { Role } from "./role.entity";
export declare class User {
    id: number;
    name: string;
    password: string;
    email: string;
    mobile: number;
    gender: number;
    create_at: string;
    update_at: string;
    role: Role;
}
