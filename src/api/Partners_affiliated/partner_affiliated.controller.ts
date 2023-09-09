import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Partner_affiliatedService } from './partner_affiliated.service';
import { AffiliatedPartners } from 'src/entities/partners_affiliated.entity';
import { IAffiliatedPartner } from 'src/models/Partner_affiliated';

@Controller()
export class Partner_affiliatedController {
    
    constructor(private partner_affiliatedService: Partner_affiliatedService){

    }

    @Get('/all')
    async getAllAffiliatedPartners(): Promise<string | AffiliatedPartners[]>{
        try {
            return await this.partner_affiliatedService.getAll()
        } catch (error) {
            return "Cannot read affiliated partners " + error
        }   
    }

    @Get('one/:id')
    getAffiliatedPartner(@Param('id') params): Promise<AffiliatedPartners[]> | string {
        try {
            const res = this.partner_affiliatedService.get(params)
            return res
        } catch (error) {
            return "Cannot read affiliated partner: " + error
        }
    }


    @Post()
    Create(@Body() params: IAffiliatedPartner) {
        try {
            const res = this.partner_affiliatedService.create(params)
            console.log("affiliated partner created")
            return true
        } catch (error) {
            return "Cannot create affiliated partner: " + error
        }
    }

    @Put('update/:id')
    Update(@Param('id') id: number, @Body() params: IAffiliatedPartner) {
        try {
            const res = this.partner_affiliatedService.update(id, params)
            return res
        } catch (error) {
            return "Cannot update affiliated partner: " + error
        }
    }

    @Delete('delete/:id')
    deleteEquipment(@Param('id') params) {
        try {
            const res = this.partner_affiliatedService.delete(params)
            return res
        } catch (error) {
            return "Cannot delete affiliated partner: " + error
        }
    }
}
