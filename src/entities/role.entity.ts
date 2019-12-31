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
    @Column()
    desc: string;
    // @OneToMany(type => User, user => user.role)
    // users: User[]
}