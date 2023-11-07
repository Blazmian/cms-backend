import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ProviderProducts } from './provider_products.entity'

@Entity()
export class Provider {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 50 })
    name: string

    @Column({ length: 50 })
    email: string

    @Column({ length: 10 })
    cellphone: string

    @Column({ type: 'text' })
    description: string

    @OneToMany(() => ProviderProducts, (providerProduct) => providerProduct.provider)
    providerProduct: ProviderProducts[]
}