import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Reafiliations } from "./partners_reafiliations.entity"
import { Affiliated_partners } from "./partners_affiliated.entity"
import { Tracking } from "./partners_tracking.entity"
import { Event } from "./event.entity"


@Entity()
export class Partners {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100 })
    social_reason: string

    @Column({ length: 20 })
    comercial_name: string

    @Column({ length: 20 })
    legal_representative: string

    @Column()
    registration_date: Date

    @Column({ length: 10 })
    status: string

    @Column({ type: 'double' })
    afiliation_payment: number

    @Column()
    expiration_date: Date

    @Column()
    company_image: Buffer

    @OneToMany(() => Reafiliations, (reafiliations) => reafiliations.partners)
    reafiliations: Reafiliations[]

    @OneToMany(() => Event, (event) => event.partner)
    event: Event[]

    @OneToMany(() => Affiliated_partners, (affiliated_partners) => affiliated_partners.partners)
    affiliated_partners: Affiliated_partners[]

    @OneToMany(() => Tracking, (tracking) => tracking.partners)
    tracking: Affiliated_partners[]
} 
