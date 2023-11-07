import { Event_attendanceService } from './event_attendance.service';
import { Event_attendanceController } from './event_attendance.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendanceEvent } from 'src/entities/attendance_event.entity';
import { Event } from 'src/entities/event.entity';
import { EventService } from '../Events/event.service';
import { PartnerService } from '../Partners/partner.service';
import { Partners } from 'src/entities/partners.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AttendanceEvent, Event, Partners])],
    controllers: [Event_attendanceController],
    providers: [Event_attendanceService, EventService, PartnerService],
    exports: [TypeOrmModule]
})
export class Events_attendanceModule { }
