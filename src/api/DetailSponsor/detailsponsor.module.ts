import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetailSponsor } from 'src/entities/detail_sponsor.entity';
import { DetailSponsorController } from './detailsponsor.controller';
import { DetailSponsorService } from './detailsponsor.service';

@Module({
    imports: [TypeOrmModule.forFeature([DetailSponsor])],
    controllers: [DetailSponsorController],
    providers: [DetailSponsorService],
    exports: [TypeOrmModule]
})
export class DetailSponsorModule {}
