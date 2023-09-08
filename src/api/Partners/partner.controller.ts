import { Controller, Get } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { Partners } from 'src/entities/partners.entity';

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
}
