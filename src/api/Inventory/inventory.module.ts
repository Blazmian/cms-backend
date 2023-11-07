import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventary } from 'src/entities/inventary.entity';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Inventary])],
    controllers: [InventoryController],
    providers: [InventoryService],
    exports: [TypeOrmModule]
})
export class InventoryModule { }
