import { User } from "./user.entity";
export declare class Role {
    role_id: string;
    name: string;
    desc: string;
    users: User[];
}
