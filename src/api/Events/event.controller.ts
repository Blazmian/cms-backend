import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EventService } from './event.service';
import { ICreateEvent, ResultEvent} from 'src/models/Event';

@Controller('event')
export class EventController {

    constructor(
        private eventService: EventService
    ) { }

    @Get('/one/:id')
    getOne(@Param('id') id: number): Promise<ResultEvent> | string {
        try {
            return this.eventService.getOne(id)
        } catch (error) {
            return "Cannot read events: " + error
        }
    }

    @Post('/create-event/:partnerFolio')
    Create(@Param('partnerFolio') folio: string, @Body() body: ICreateEvent) {
        try {
            const res = this.eventService.create(folio, body)
            console.log("Event Created!")
            return true
        } catch (error) {
            return "Cannot create event: " + error
        }
    }

    @Get('/upcoming-events')
    getUpcomingEvents() {
        try {
            return this.eventService.getUpcomingEvents()
        } catch (error) {

        }
    }

    @Put('/update-event/:id')
    updateEvent(@Param('id') id: number, @Body() body: ICreateEvent): boolean | string {
        try {
            const res = this.eventService.update(id, body)
            console.log("Event Updated!")
            return true
        } catch (error) {
            return "Cannot update event entity"
        }
    }
}
