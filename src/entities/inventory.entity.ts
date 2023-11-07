import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { DetailInventory } from './detail_inventory.entity'

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 15 })
    object: string

    @Column({ length: 10 })
    status: string

    @Column({ length: 50 })
    description: string

    @Column({ length: 10 })
    type: string

    @OneToMany(() => DetailInventory, (detailInventory) => detailInventory.inventory)
    detail: DetailInventory[]
}