import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./user.entity";

@Entity()

export class Role {
    @PrimaryGeneratedColumn()
    id: number;
    @PrimaryGeneratedColumn('uuid')
    role_id: string;
    @Column({length:45})
    name: string;
    @Column({
        charset: 'utf8mb4'
    })
    desc: string;
    // @OneToMany(type => User, user => user.role)
    // users: User[]
}