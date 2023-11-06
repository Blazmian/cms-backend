import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CanceledEvent as CanceledEventEntity } from 'src/entities/canceled_event.entity';
import { Repository } from 'typeorm';
import { EventService } from '../Events/event.service';
import { CreateCancelEvent } from 'src/models/CanceledEvent';

@Injectable()
export class CanceledEventService {
    constructor(
        @InjectRepository(CanceledEventEntity)
        private canceledEventEntity: Repository<CanceledEventEntity>,
        private eventService: EventService
    ) { }

    async cancelEvent(data: CreateCancelEvent) {
        const event = await this.eventService.getOne(data.event_id)
        event.event.status =  'Cancelado'
        await this.eventService.changeStatus(event.event)
        const newCanceledEvent = new CanceledEventEntity()
        newCanceledEvent.reason = data.reason
        newCanceledEvent.event = event.event
        newCanceledEvent.canceled_day = new Date()
        return await this.canceledEventEntity.save(newCanceledEvent)
    }

    async getCanceledEvents(): Promise<CanceledEventEntity[]> {
        return await this.canceledEventEntity.find({
            order: { canceled_day: 'DESC' },
            relations: ['event', 'event.partner'],
        })
    }
}