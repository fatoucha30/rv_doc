import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Doctors {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Email: string

    @Column()
    Téléphone: number

    @Column()
    Password: number

    @Column()
    Address: string
    
    @Column()
    Speciality: string
    
}






