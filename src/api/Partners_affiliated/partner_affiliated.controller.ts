import { Controller, Get } from '@nestjs/common';
import { Partner_affiliatedService } from './partner_affiliated.service';
import { AffiliatedPartners } from 'src/entities/partners_affiliated.entity';

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
}
