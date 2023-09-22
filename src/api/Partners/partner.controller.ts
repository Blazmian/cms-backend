import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { Partners } from 'src/entities/partners.entity';
import { IPartner } from 'src/models/Partner';

@Controller()
export class PartnerController {
    
    constructor(private partnerService: PartnerService){

    }

    @Get('/all')
    async getAllPartners(): Promise<string | Partners[]>{
        try {
            return await this.partnerService.getAll()
        } catch (error) {
            return "Cannot read partners " + error
        }   
    }

    @Get('one/:id')
    getPartner(@Param('id') params): Promise<Partners[]> | string {
        try {
            const res = this.partnerService.get(params)
            return res
        } catch (error) {
            return "Cannot read partners: " + error
        }
    }

    @Post()
    Create(@Body() params: IPartner) {
        try {
            const res = this.partnerService.create(params)
            console.log("Partner created")
            return true
        } catch (error) {
            return "Cannot create partner: " + error
        }
    }

    @Put('update/:id')
    Update(@Param('id') id: number, @Body() params: IPartner) {
        try {
            const res = this.partnerService.update(id, params)
            return res
        } catch (error) {
            return "Cannot update partner: " + error
        }
    }

    @Delete('delete/:id')
    deleteEquipment(@Param('id') params) {
        try {
            const res = this.partnerService.delete(params)
            return res
        } catch (error) {
            return "Cannot delete partner: " + error
        }
    }

}
