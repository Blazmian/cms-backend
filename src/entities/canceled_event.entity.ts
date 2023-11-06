import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Event } from './event.entity'

@Entity()
export class CanceledEvent {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    reason: string

    @Column({ type: 'datetime' })
    canceled_day: Date

    @OneToOne(() => Event)
    @JoinColumn()
    event: Event
}