import { User } from "./user.entity";
export declare class Role {
    id: number;
    role_id: string;
    name: string;
    desc: string;
    users: User[];
}
