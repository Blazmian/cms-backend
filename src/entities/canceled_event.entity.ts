import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Event } from './event.entity'

@Entity()
export class CanceledEvent {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    reason: string

    @OneToOne(() => Event)
    @JoinColumn()
    event: Event
}