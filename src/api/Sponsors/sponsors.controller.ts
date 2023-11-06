
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SponsorsService } from './sponsors.service';
import { Sponsor } from 'src/entities/sponsor.entity';
import { ISponsor } from 'src/models/Sponsor';

@Controller('sponsor')
export class SponsorsController {
    constructor(private sponsorService: SponsorsService) {

    }

    @Get('/all')
    async getAllSponsors(): Promise<string | Sponsor[]> {
        try {
            return await this.sponsorService.getAll()
        } catch (error) {
            return "Cannot read sponsors " + error
        }
    }

    @Get('one/:id')
    getSponsor(@Param('id') params): Promise<Sponsor> | string {
        try {
            const res = this.sponsorService.get(params)
            return res
        } catch (error) {
            return "Cannot read sponsors: " + error
        }
    }

    @Put('update/:id')
    Update(@Param('id') id: number, @Body() params: ISponsor) {
        try {
            const res = this.sponsorService.update(id, params)
            return res
        } catch (error) {
            return "Cannot update sponsor: " + error
        }
    }


    @Post()
    create(@Body() newSponsor: ISponsor): boolean | string {
        try {
            this.sponsorService.create(newSponsor)
            return true
        } catch (error) {
            return "Cannot create in sponsor entity:" + error
        }
    }

    @Delete('delete/:id')
    deleteEquipment(@Param('id') params) {
        try {
            const res = this.sponsorService.delete(params)
            return res
        } catch (error) {
            return "Cannot delete sponsor: " + error
        }
    }
}