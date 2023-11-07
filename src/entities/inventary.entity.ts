import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { DetailProductsEvent } from './detail_products_event.entity'
import { DetailAssistant } from './detail_assistant.entity'
import { DetailInventary } from './detail_inventary.entity'

@Entity()
export class Inventary {
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

    @OneToMany(() => DetailInventary, (detailInventary) => detailInventary.inventary)
    detail: DetailInventary[]
}