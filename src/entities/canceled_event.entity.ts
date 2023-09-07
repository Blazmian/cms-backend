import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class CanceledEvent {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    reason: string
}