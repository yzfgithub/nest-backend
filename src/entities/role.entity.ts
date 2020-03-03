import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";
import { User } from "./user.entity";

@Entity()

export class Role {
    @PrimaryGeneratedColumn()
    role_id: string;
    @Column({length:45})
    name: string;
    @Column({
        charset: 'utf8mb4'
    })
    desc: string;
    // @OneToMany(type => User, user => user.role)
    // users: User[]

    @ManyToMany(type => User, user => user.roles)
    users: User[];
}