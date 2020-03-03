import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class News {
    @PrimaryGeneratedColumn()
    id: number

    @PrimaryGeneratedColumn('uuid')
    news_id: string

    @Column()
    title: string

    @Column()
    describution: string

    @Column()
    grade: number
}