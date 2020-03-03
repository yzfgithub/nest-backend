import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class Article {
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