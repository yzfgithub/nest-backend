import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from "typeorm";
import { Role } from "./role.entity";

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({length:45})
    name: string;
    @Column({length:20})
    password: string;
    @Column()
    email: string;
    @Column()
    mobile: number;
    @Column()
    gender: number;
    @Column()
    create_at: string;
    @Column()
    update_at: string;
    @ManyToOne(type => Role, role => role.users, {cascade: ["insert", "update"]})
    @JoinTable()
    role: Role
}