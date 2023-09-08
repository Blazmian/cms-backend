import { Controller, Get} from '@nestjs/common';
import { Event } from 'src/entities/event.entity';
import { EventService } from './event.service';

@Controller()
export class EventController {
    constructor(private eventService: EventService){

    }

    @Get('/all')
    async getAllAssistants(): Promise<string | Event[]>{
        try {
            return await this.eventService.getAll()
        } catch (error) {
            return "Cannot read assistants " + error
        }   
    }
}
