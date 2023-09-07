import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Event } from './event.entity'
import { Assistant } from './assistant.entity'

@Entity()
export class DetailAssistant {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 30 })
    area: string

    @ManyToOne(() => Event, (event) => event.detailAssistant)
    event: Event

    @ManyToOne(() => Assistant, (assistant) => assistant.detail)
    assistant: Assistant
}