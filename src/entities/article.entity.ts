import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class Article {
    @PrimaryGeneratedColumn('uuid')
    news_id: string

    @Column()
    title: string

    @Column()
    describution: string

    @Column()
    link: string

    @Column()
    grade: number
}