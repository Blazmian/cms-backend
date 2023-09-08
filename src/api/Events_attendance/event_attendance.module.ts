import { Event_attendanceService } from './event_attendance.service';
import { Event_attendanceController } from './event_attendance.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendanceEvent } from 'src/entities/attendance_event.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AttendanceEvent])],
    controllers: [Event_attendanceController],
    providers: [Event_attendanceService],
    exports: [TypeOrmModule]
})
export class Events_attendanceModule { }
