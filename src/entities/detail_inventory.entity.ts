import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Inventory } from './inventory.entity'
import { Event } from './event.entity'

@Entity()
export class DetailInventory {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'date' })
    loan_date: Date

    @Column({ type: 'date' })
    return_date: Date

    @ManyToOne(() => Inventory, (inventory) => inventory.detail)
    inventory: Inventory

    @ManyToOne(() => Event, (event) => event.detailInventory)
    event: Event
}