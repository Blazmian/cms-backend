import { Controller, Get, Param } from '@nestjs/common';
import { DetailSponsorService } from './detailsponsor.service';
import { DetailSponsor } from 'src/entities/detail_sponsor.entity';

@Controller('detail-sponsor')
export class DetailSponsorController {
    constructor(
        private detailSponsorService: DetailSponsorService
    ) { }

    @Get('sponsors-from-event/:id')
    getAllFromEvent(@Param('id') eventId: number): Promise<DetailSponsor[]> | string {
        try {
            return this.detailSponsorService.getSponsorsFromEvent(eventId)
        } catch (error) {
            return "Cannot read detail sponsor table: " + error
        }
    }
}