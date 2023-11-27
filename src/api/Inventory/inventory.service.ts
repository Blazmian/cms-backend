import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventory as InventoryEntity } from 'src/entities/inventory.entity';
import { IInventory } from 'src/models/Inventory';
import { Repository } from 'typeorm';

@Injectable()
export class InventoryService {
    constructor(
        @InjectRepository(InventoryEntity)
        private inventoryEntity: Repository<InventoryEntity>
    ) { }

    async getOne(id: number): Promise<InventoryEntity | number> {
        const res = await this.inventoryEntity.findOne({ where: { id: id }, relations: { detail: true } })
        if (res === null) {
            return -1
        }
        return res
    }

    async getAll(): Promise<InventoryEntity[]> {
        const res = await this.inventoryEntity.find()
        return res
    }

    async create(inventory: IInventory) {

        const newInventory = new InventoryEntity()
        newInventory.object = inventory.object
        newInventory.description = inventory.description
        newInventory.type = inventory.type
        newInventory.status = inventory.status = 'Activo'

        const res = await this.inventoryEntity.save(newInventory)
        return res
    }

    async update(id: number, body: IInventory) {
        return await this.inventoryEntity.update(id, body)
    }

    async delete(id: number) {
        return await this.inventoryEntity.delete(id)
    }
}