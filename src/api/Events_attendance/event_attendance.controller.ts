import { Controller, Get, Param } from '@nestjs/common';
import { Event_attendanceService } from './event_attendance.service';
import { AttendanceEvent } from 'src/entities/attendance_event.entity';

@Controller('attendance-event')
export class Event_attendanceController {

    constructor(private event_attendanceService: Event_attendanceService) {

    }

    @Get('/interessed-person-by-event/:idEvent')
    getInteressedPersonByEvent(@Param('idEvent') idEvent: number): Promise<AttendanceEvent[]> | string {
        try {
            return this.event_attendanceService.getInteressedPersonByEvent(idEvent)
        } catch (error) {
            return "Cannot read attendance: " + error
        }
    }

    @Get('/all')
    async getAllEvent_attendance(): Promise<string | AttendanceEvent[]> {
        try {
            return await this.event_attendanceService.getAll()
        } catch (error) {
            return "Cannot read event attendance " + error
        }
    }
}

