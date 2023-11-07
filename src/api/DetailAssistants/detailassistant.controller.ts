import { Controller, Get, Param } from '@nestjs/common';
import { DetailAssistantService } from './detailassistant.service';
import { DetailAssistant } from 'src/entities/detail_assistant.entity';

@Controller('detail-assistant')
export class DetailAssistantController {
    constructor(private detailAssistantService: DetailAssistantService) { }

    @Get('assistant-event/:id')
    getAssistantsFromEvent(@Param('id') param): Promise<DetailAssistant[]> | string {
        try {
            return this.detailAssistantService.getAssistantFromEvent(param)
        } catch (error) {
            return "Cannot read Details Assistants " + error 
        }
    }
}