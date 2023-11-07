import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { DetailSponsor } from './detail_sponsor.entity'

@Entity()
export class Sponsor {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 50 })
    name: string

    @Column({ length: 20 })
    sponsor: string

    @Column({ length: 50 })
    email: string

    @Column({ type: 'text' })
    description: string

    @Column({ type: 'date' })
    date: Date

    @OneToMany(() => DetailSponsor, (detail) => detail.sponsor)
    detail: DetailSponsor[]
}