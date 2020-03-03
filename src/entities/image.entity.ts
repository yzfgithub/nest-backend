import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()

export class Image {
    @PrimaryGeneratedColumn('uuid')
    image_id: string
    @Column()
    url: string
    @Column()
    user_id: string
}