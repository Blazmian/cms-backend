import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Inventary } from './inventary.entity'
import { Event } from './event.entity'

@Entity()
export class DetailInventary {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'date' })
    loan_date: Date

    @Column({ type: 'date' })
    return_date: Date

    @ManyToOne(() => Inventary, (inventary) => inventary.detail)
    inventary: Inventary

    @ManyToOne(() => Event, (event) => event.detailInventary)
    event: Event
}