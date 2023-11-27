import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tracking } from 'src/entities/partners_tracking.entity';
import { TrackingController } from './tracking.controller';
import { TrackingService } from './tracking.service';
import { Partners } from 'src/entities/partners.entity';
import { PartnerService } from '../Partners/partner.service';

@Module({
    imports: [TypeOrmModule.forFeature([Tracking, Partners])],
    controllers: [TrackingController],
    providers: [TrackingService, PartnerService],
    exports: [TypeOrmModule]
})
export class TrackingModule {}
