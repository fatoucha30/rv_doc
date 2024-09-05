import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Patients {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Prenom: string

    @Column()
    Nom: string

    @Column()
    Age: number

    @Column()
    Address: string

    @Column()
    Téléphone: number
}