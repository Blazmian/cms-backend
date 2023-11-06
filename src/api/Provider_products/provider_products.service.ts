import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProviderProducts as ProviderProductsEntity} from 'src/entities/provider_products.entity';
import { IProvider_product } from 'src/models/Provider_product';
import { ProviderService } from '../Providers/provider.service';
import { IProvider_product_update } from 'src/models/Provider_product';

@Injectable()
export class Provider_productsService {
    constructor(
        @InjectRepository(ProviderProductsEntity)
        private providerProductsEntity: Repository<ProviderProductsEntity>,
        private providerService: ProviderService
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

    async create(data: IProvider_product) {
        const provider = await this.providerService.getOne(data.provider)
        const newProvider_product = new ProviderProductsEntity()
        newProvider_product.product = data.product
        newProvider_product.price = data.price
        newProvider_product.description = data.description
        newProvider_product.provider = provider

        return await this.providerProductsEntity.save(newProvider_product)
        //const res = await this.providerProductsEntity.save(newProvider_product)

        //return res
    }

    async update(id: number, body: IProvider_product_update) {
        return await this.providerProductsEntity.update(id, body)
    }

    async delete(id: number) {
        return await this.providerProductsEntity.delete(id)
    }

}
