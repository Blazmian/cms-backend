import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Provider } from './provider.entity'
import { DetailProductsEvent } from './detail_products_event.entity'

@Entity()
export class ProviderProducts {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 20 })
    product: string

    @Column({ length: 50 })
    description: string

    @Column({ type: 'double' })
    price: number

    @ManyToOne(() => Provider, (provider) => provider.providerProduct)
    provider: Provider

    @OneToMany(() => DetailProductsEvent, (detailProduct) => detailProduct.product)
    detailProduct: DetailProductsEvent[]
}