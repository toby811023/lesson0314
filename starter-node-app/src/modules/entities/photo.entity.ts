import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number;

    //nvarchar(500)
    @Column({ length: 500 })
    name: string;

    @Column('text')
    description: string;

    //nvarchar(255)
    @Column()
    filename: string;

    @Column('int')
    views: number;

    // bit
    @Column()
    isPublished: boolean;
}