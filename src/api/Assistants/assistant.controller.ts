import { Controller, Get } from '@nestjs/common';
import { AssistantService } from './assistant.service';
import { Assistant } from 'src/entities/assistant.entity';

@Controller('assistant')
export class AssistantController { 

    constructor(private assistantService: AssistantService){

    }

    @Get('/all')
    async getAllAssistants(): Promise<string | Assistant[]>{
        try {
            return await this.assistantService.getAll()
        } catch (error) {
            return "Cannot read assistants " + error
        }   
    }
}
