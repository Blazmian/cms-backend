import { Controller, Get } from '@nestjs/common';
import { Detail_assistantService } from './detail_assistant.service';
import { DetailAssistant } from 'src/entities/detail_assistant.entity';

@Controller()
export class Detail_assistantController { 

    constructor(private detail_assistantService : Detail_assistantService){

    }

    @Get('/all')
    async getAllDetail_assistant(): Promise<string | DetailAssistant[]>{
        try {
            return await this.detail_assistantService.getAll()
        } catch (error) {
            return "Cannot read detail assistants " + error
        }   
    }
}
