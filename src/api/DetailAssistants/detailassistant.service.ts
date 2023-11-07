import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetailAssistant as DetailAssistantEntity } from 'src/entities/detail_assistant.entity';
import { Repository } from 'typeorm';
import { EventService } from '../Events/event.service';

@Injectable()
export class DetailAssistantService {
    constructor(
        @InjectRepository(DetailAssistantEntity)
        private detailAssistantEntity: Repository<DetailAssistantEntity>,
        private eventService: EventService
    ) { }

    async getAssistantFromEvent(idEvent: number) {
        const event = await this.eventService.getOne(idEvent)
        return await this.detailAssistantEntity.find({ where: { event: event }, relations: { assistant: true } })
    }
}