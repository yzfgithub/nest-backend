import { User } from "./user.entity";
export declare class Role {
    id: number;
    role_id: number;
    name: string;
    desc: string;
    users: User[];
}
