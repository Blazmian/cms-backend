import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Sponsor } from './sponsor.entity'
import { Event } from './event.entity'

@Entity()
export class DetailSponsor {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Sponsor, (sponsor) => sponsor.detail)
    sponsor: Sponsor

    @ManyToOne(() => Event, (event) => event.detailSponsor)
    event: Event
}