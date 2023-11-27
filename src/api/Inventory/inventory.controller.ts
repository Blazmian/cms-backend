import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Inventory } from 'src/entities/inventory.entity';
import { IInventory } from 'src/models/Inventory';
import { DeleteResult } from 'typeorm';

@Controller('inventory')
export class InventoryController {
    constructor(
        private invetoryService: InventoryService
    ) { }

    @Get('all')
    getAll(): Promise<Inventory[]> | string {
        try {
            return this.invetoryService.getAll()
        } catch (error) {
            return "Cannot read inventory entity" + error
        }
    }

    @Get('one/:id')
    getInventory(@Param('id') param): Promise<Inventory | number> | string {
        try {
            return this.invetoryService.getOne(param)
        } catch (error) {
            return "Cannot read inventory " + error
        }
    }

    @Post()
    create(@Body() newInventory: IInventory): boolean | string {
        try {
            const res = this.invetoryService.create(newInventory)
            return true
        } catch (error) {
            return "Cannot create in inventory entity" + error
        }
    }

    @Put('update/:id')
    updateInventory(@Param('id') param, @Body() data: IInventory) {
        try {
            return this.invetoryService.update(param, data)
        } catch (error) {
            return "Cannot update inventory " + error
        }
    }

    @Delete('delete/:id')
    deleteAssistant(@Param('id') param): Promise<DeleteResult> | string {
        try {
            return this.invetoryService.delete(param)
        } catch (error) {
            return "Cannot delete inventory " + error
        }
    }
}