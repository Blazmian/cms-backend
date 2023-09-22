import { Controller, Get } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from 'src/entities/event.entity';

@Controller('event')
export class EventController {

    constructor(private eventService: EventService) {

    }

    @Get('/upcoming-events')
    getUpcomingEvents () {
        try {
            return this.eventService.getUpcomingEvents()
        } catch (error) {
            
        }
    }
}
