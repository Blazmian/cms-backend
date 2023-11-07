import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from 'src/entities/inventory.entity';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Inventory])],
    controllers: [InventoryController],
    providers: [InventoryService],
    exports: [TypeOrmModule]
})
export class InventoryModule { }