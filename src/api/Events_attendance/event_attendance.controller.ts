import { Controller, Get } from '@nestjs/common';
import { Event_attendanceService } from './event_attendance.service';
import { AttendanceEvent } from 'src/entities/attendance_event.entity';

@Controller()
export class Event_attendanceController { 

    constructor(private event_attendanceService: Event_attendanceService){

    }
    
    @Get('/all')
    async getAllEvent_attendance(): Promise<string | AttendanceEvent[]>{
        try {
            return await this.event_attendanceService.getAll()
        } catch (error) {
            return "Cannot read event attendance " + error
        }   
    }
}

