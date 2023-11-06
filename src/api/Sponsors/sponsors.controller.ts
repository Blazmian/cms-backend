import { Controller, Get, Post, Body } from '@nestjs/common';
import { SponsorsService } from './sponsors.service';
import { Sponsor } from 'src/entities/sponsor.entity';
import { SponsorCreate } from 'src/models/Sponsor';

@Controller('sponsor')
export class SponsorsController {
    constructor(
        private sponsorService: SponsorsService
    ) { }

    @Get('all')
    getAll(): Promise<Sponsor[]> | string {
        try {
            return this.sponsorService.getAll()
        } catch (error) {
            return "Cannot read sponsor entity: " + error
        }
    }

    @Post()
    create(@Body() newSponsor: SponsorCreate): boolean | string {
        try {
            this.sponsorService.create(newSponsor)
            return true
        } catch (error) {
            return "Cannot create in sponsor entity: " + error
        }
    }
}