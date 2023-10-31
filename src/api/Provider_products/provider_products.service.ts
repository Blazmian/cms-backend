import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProviderProducts as ProviderProductsEntity} from 'src/entities/provider_products.entity';
import { IProvider_product } from 'src/models/Provider_product';

@Injectable()
export class Provider_productsService {
    constructor(
        @InjectRepository(ProviderProductsEntity)
        private providerProductsEntity: Repository<ProviderProductsEntity>
    ) { }

    async getAll(): Promise<ProviderProductsEntity[]> {
        return await this.providerProductsEntity.find()
    }

    async get(id: number): Promise<ProviderProductsEntity> {
        return await this.providerProductsEntity.findOne(
            {
                where: { id: id }
            })
    }

    async create(provider_products: IProvider_product) {

        const newProvider_product = new ProviderProductsEntity()
        newProvider_product.product = provider_products.product
        newProvider_product.price = provider_products.price
        newProvider_product.description = provider_products.description

        const res = await this.providerProductsEntity.save(newProvider_product)

        return res
    }

    async update(id: number, body: IProvider_product) {
        return await this.providerProductsEntity.update(id, body)
    }

    async delete(id: number) {
        return await this.providerProductsEntity.delete(id)
    }

}
