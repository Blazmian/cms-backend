import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ProviderProducts } from './provider_products.entity'
import { Event } from './event.entity'

@Entity()
export class DetailProductsEvent {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    quantity: number

    @Column({ type: 'double' })
    total: number

    @ManyToOne(() => ProviderProducts, (idProduct) => idProduct.detailProduct)
    product: ProviderProducts

    @ManyToOne(() => Event, (event) => event.detailProduct)
    event: Event
}