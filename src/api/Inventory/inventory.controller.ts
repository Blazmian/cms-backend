/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Inventary } from 'src/entities/inventary.entity';
import { IInventory } from 'src/models/Inventory';

/*localhost:8000/inventory/all*/
@Controller('inventory')
export class InventoryController { 
    constructor(
        private invetoryService: InventoryService
    ){}

    @Get('all')
    getAll(): Promise<Inventary[]> | string{
        try {
            return this.invetoryService.getAll()
        } catch (error) {
            return "Cannot read inventory entity" + error
        }
    }

    @Post()
    create(@Body() newInventory: IInventory): boolean | string{
        try{
            const res = this.invetoryService.create(newInventory)
            return true
        }catch(error){
            return "Cannot create in inventory entity" + error
        }
    }

    @Put('update/:id')
    updateAssistant(@Param('id') param, @Body() data: IInventory){
        try {
            return this.invetoryService.update(param, data)
        } catch (error) {
            return "Cannot update inventory " + error
        }
}
}
