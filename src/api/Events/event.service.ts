import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event as EventEntity } from 'src/entities/event.entity';

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(EventEntity)
        private eventEntity: Repository<EventEntity>
    )    { }

    async getAll(): Promise<EventEntity[]>{
        return await this.eventEntity.find()
    }
}
