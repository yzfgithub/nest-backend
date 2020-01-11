import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, OneToMany } from "typeorm";
import { Role } from "./role.entity";

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @PrimaryGeneratedColumn('uuid')
    user_id: string;
    @Column({length:45})
    name: string;
    @Column({length:20})
    password: string;
    @Column()
    email: string;
    @Column()
    mobile: number;
    @Column({length: 30, charset:'utf8mb4'})
    gender: string;
    @Column('timestamp', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        name: 'create_at'
    })
    create_at: Date;
    @Column('timestamp',{
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        name: 'update_at'
    })
    update_at: Date;

    @Column()
    role_ids: string;

    // @OneToMany(type => Role, role => role.role_id, {cascade: ["insert", "update"]})
    // role: Role
}