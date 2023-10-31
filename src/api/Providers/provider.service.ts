import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Provider as ProviderEntity } from 'src/entities/provider.entity';
import { IProvider } from 'src/models/Provider';

@Injectable()
export class ProviderService {
    constructor(
        @InjectRepository(ProviderEntity)
        private providerEntity: Repository<ProviderEntity>
    ) { }

    async getAll(): Promise<ProviderEntity[]> {
        return await this.providerEntity.find()
    }

    async get(id: number): Promise<ProviderEntity> {
        return await this.providerEntity.findOne(
            {
                where: { id: id }
            })
    }

    async create(provider: IProvider) {

        const newProvider = new ProviderEntity()
        newProvider.name = provider.name
        newProvider.email = provider.email
        newProvider.cellphone = provider.cellphone
        newProvider.description = provider.description

        const res = await this.providerEntity.save(newProvider)

        return res
    }

    async update(id: number, body: IProvider) {
        return await this.providerEntity.update(id, body)
    }

    async delete(id: number) {
        return await this.providerEntity.delete(id)
    }

}
