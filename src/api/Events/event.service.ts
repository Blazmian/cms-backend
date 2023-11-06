import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event as EventEntity } from 'src/entities/event.entity';
import { ICreateEvent, ResultEvent } from 'src/models/Event';
import { Repository } from 'typeorm';
import { PartnerService } from '../Partners/partner.service';

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(EventEntity)
        private eventEntity: Repository<EventEntity>,
        private partnerService: PartnerService
    ) { }

    async getOne(id: number): Promise<ResultEvent> {
        const event = await this.eventEntity.findOne({ where: { id: id } })
        if (event !== null) {
            return { event: event, found: true }
        } else {
            return { event: event, found: false }
        }
    }

    async getUpcomingEvents(): Promise<EventEntity[]> {
        return await this.eventEntity.find({
            order: { date: 'ASC' },
            where: { status: 'Proceso' },
            select: ['id', 'event_name', 'date', 'hour', 'partner'],
            relations: ['partner'],
        })
    }

    async getVirtualEvents(): Promise<EventEntity[]> {
        return await this.eventEntity.find({
            where: { type: 'Virtual', status: 'Proceso' },
            order: { date: 'ASC' },
        })
    }

    async getPresentialEvents(): Promise<EventEntity[]> {
        return await this.eventEntity.find({
            where: { type: 'Presencial', status: 'Proceso' },
            order: { date: 'ASC' }
        })
    }

    async getAscNameEvent(): Promise<EventEntity[]> {
        return await this.eventEntity.find({
            order: { event_name: 'ASC' },
            where: { status: 'Proceso' }
        })
    }

    async getDescNameEvent(): Promise<EventEntity[]> {
        return await this.eventEntity.find({
            order: { event_name: 'DESC' },
            where: { status: 'Proceso' }
        })
    }

    async create(folioPartner: string, eventData: ICreateEvent) {
        const newEvent = new EventEntity()
        newEvent.event_name = eventData.event_name
        newEvent.description = eventData.description
        newEvent.type = eventData.type
        newEvent.place = eventData.place
        newEvent.link = eventData.link
        newEvent.date = eventData.date
        newEvent.hour = new Date(`1970-01-01T${eventData.hour}`)
        newEvent.image = eventData.image

        const partner = await this.partnerService.get(folioPartner)
        newEvent.partner = partner
        newEvent.status = 'Proceso'

        return await this.eventEntity.save(newEvent)
    }

    async update(id: number, body: ICreateEvent) {
        return await this.eventEntity.update(id, body)
    }

    async changeStatus(event: EventEntity) {
        return await this.eventEntity.save(event)
    }
}