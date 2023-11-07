import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetailAssistant } from 'src/entities/detail_assistant.entity';
import { DetailAssistantService } from './detailassistant.service';
import { EventService } from '../Events/event.service';
import { DetailAssistantController } from './detailassistant.controller';
import { Event } from 'src/entities/event.entity';
import { Partners } from 'src/entities/partners.entity';
import { PartnerService } from '../Partners/partner.service';

@Module({
    imports: [TypeOrmModule.forFeature([DetailAssistant, Event, Partners])],
    controllers: [DetailAssistantController],
    providers: [DetailAssistantService, EventService, PartnerService],
    exports: [TypeOrmModule]
})
export class DetailAssistantModule { }
