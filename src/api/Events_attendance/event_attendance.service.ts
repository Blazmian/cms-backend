import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttendanceEvent as AttendanceEventEntity } from 'src/entities/attendance_event.entity';
import { EventService } from '../Events/event.service';

@Injectable()
export class Event_attendanceService {
    constructor(
        @InjectRepository(AttendanceEventEntity)
        private attendanceEventEntity: Repository<AttendanceEventEntity>,
        private eventService: EventService
    ) { }

    async getAll(): Promise<AttendanceEventEntity[]> {
        return await this.attendanceEventEntity.find()
    }

    async getInteressedPersonByEvent(idEvent: number): Promise<AttendanceEventEntity[]> {
        const event = await this.eventService.getOne(idEvent)
        return await this.attendanceEventEntity.find({ where: { event: event }, relations: { interessed: true } })
    }
}
