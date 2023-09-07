import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Partners } from "./partners.entity"
import { InteressedPerson } from "./interessed_person.entity"

@Entity()
export class AffiliatedPartners {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 30 })
    name: string

    @Column({ length: 15 })
    first_last_name: string

    @Column({ length: 15 })
    second_last_name: string

    @Column({ length: 50 })
    email: string

    @Column({ length: 10 })
    phone_numer: string

    @Column({ default: false })
    contact: boolean

    @ManyToOne(() => Partners, (partners) => partners.affiliated_partners)
    partners: Partners

    @OneToMany(() => InteressedPerson, (interessed) => interessed.affiliated)
    interessed: InteressedPerson[]
}
