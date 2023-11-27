import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TrackingService } from './tracking.service';
import { Tracking } from 'src/entities/partners_tracking.entity';
import { CreateTracking } from 'src/models/Tracking';

@Controller('tracking')
export class TrackingController {

    constructor(
        private trackingService: TrackingService
    ) { }

    @Post()
    create(@Body() data: CreateTracking): boolean | string {
        try {
            this.trackingService.createNote(data)
            return true
        } catch (error) {
            return "Cannot create tracking: " + error
        }
    }

    @Get('one/:folio')
    getTrackingOfPartner(@Param('folio') folio: string): Promise<Tracking[]> | string {
        try {
            return this.trackingService.getTrackingOfPartner(folio)
        } catch (error) {
            return "Cannot read tracking from partner: " + error
        }
    }

    @Delete('delete/:id')
    deleteTrack(@Param('id') idTrack: number) {
        try {
            return this.trackingService.deleteTrack(idTrack)
        } catch (error) {
            return "Cannot delete tracking: " + error 
        }
    }
}
