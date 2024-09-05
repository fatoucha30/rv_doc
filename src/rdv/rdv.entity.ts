import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Rdv {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Titre_Rendez_vous: string

    @Column()
    Avec_qui?: string

    @Column()
    Date_Rendez_vous: number

    @Column()
    Heure_Rendez_vous: String

    @Column()
     Lieu_Rendez_vous: String
}