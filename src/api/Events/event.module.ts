import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/entities/event.entity';
import { Partners } from 'src/entities/partners.entity';
import { PartnerService } from '../Partners/partner.service';

@Module({
    imports: [TypeOrmModule.forFeature([Event, Partners])],
    controllers: [EventController],
    providers: [EventService, PartnerService],
    exports: [TypeOrmModule]
})
export class EventModule { }