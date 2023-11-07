
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventary as InventaryEntity } from 'src/entities/inventary.entity';
import { IInventory } from 'src/models/Inventory';
import { Repository } from 'typeorm';

@Injectable()
export class InventoryService { 
    constructor(
        @InjectRepository(InventaryEntity)
        private inventoryEntity: Repository<InventaryEntity>
    ){}

    async getAll (): Promise<InventaryEntity[]>{
        const res = await this.inventoryEntity.find()
        return res
    }

    async create(inventory: IInventory) {

        const newInventory = new InventaryEntity()
        newInventory.object = inventory.object
        newInventory.description = inventory.description
        newInventory.type = inventory.type
        newInventory.status = inventory.status
        
        const res = await this.inventoryEntity.save(newInventory)
        return res
    }

    async update(id: number, body: IInventory) {
        return await this.inventoryEntity.update(id, body)
    }
}
