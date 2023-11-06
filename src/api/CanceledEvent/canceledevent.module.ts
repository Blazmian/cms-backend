import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CanceledEvent } from 'src/entities/canceled_event.entity';
import { CanceledEventController } from './canceledevent.controller';
import { CanceledEventService } from './canceledevent.service';
import { EventService } from '../Events/event.service';
import { Event } from 'src/entities/event.entity';
import { Partners } from 'src/entities/partners.entity';
import { PartnerService } from '../Partners/partner.service';

@Module({
    imports: [TypeOrmModule.forFeature([CanceledEvent, Event, Partners])],
    controllers: [CanceledEventController],
    providers: [CanceledEventService, EventService, PartnerService],
    exports: [TypeOrmModule]
})
export class CanceledEventModule { }
