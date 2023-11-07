import { PartnerService } from './partner.service';
import { PartnerController } from './partner.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partners } from 'src/entities/partners.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Partners])],
    controllers: [PartnerController],
    providers: [PartnerService],
    exports: [TypeOrmModule]
})
export class PartnerModule { }
