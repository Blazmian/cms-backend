import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttendanceEvent as AttendanceEventEntity } from 'src/entities/attendance_event.entity';

@Injectable()
export class Event_attendanceService {
        constructor(
            @InjectRepository(AttendanceEventEntity)
            private attendanceEventEntity: Repository<AttendanceEventEntity>
        )    { }
    
        async getAll(): Promise<AttendanceEventEntity[]>{
            return await this.attendanceEventEntity.find()
        }
}
