import { Body, Controller, Get, Post } from '@nestjs/common';
import { CanceledEventService } from './canceledevent.service';
import { CreateCancelEvent } from 'src/models/CanceledEvent';
import { CanceledEvent } from 'src/entities/canceled_event.entity';

@Controller('canceled-event')
export class CanceledEventController {

    constructor(private canceledEventService: CanceledEventService) { }

    @Post('create')
    createCanceledEvent(@Body() data: CreateCancelEvent) {
        try {
            this.canceledEventService.cancelEvent(data)
            console.log('Canceled event succesfully')
            return true
        } catch (error) {
            return 'Cannot create in canceled event entity'
        }
    }

    @Get('all')
    getAllCanceledEvents(): Promise<CanceledEvent[]> | string {
        try {
            return this.canceledEventService.getCanceledEvents()
        } catch (error) {
            return 'Cannot get canceled events'
        }
    }
}
