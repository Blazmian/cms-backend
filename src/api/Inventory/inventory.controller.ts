import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Inventory } from 'src/entities/inventory.entity';
import { IInventory } from 'src/models/Inventory';

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
    updateAssistant(@Param('id') param, @Body() data: IInventory) {
        try {
            return this.invetoryService.update(param, data)
        } catch (error) {
            return "Cannot update inventory " + error
        }
    }
}