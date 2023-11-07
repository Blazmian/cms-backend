import { Partner_affiliatedService } from './partner_affiliated.service';
import { Partner_affiliatedController } from './partner_affiliated.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AffiliatedPartners } from 'src/entities/partners_affiliated.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AffiliatedPartners])],
    controllers: [Partner_affiliatedController],
    providers: [Partner_affiliatedService],
    exports: [TypeOrmModule]
})
export class Partners_affiliatedModule { }
