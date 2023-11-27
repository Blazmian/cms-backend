import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AssistantService } from './assistant.service';
import { Assistant } from 'src/entities/assistant.entity';
import { ICreateAssistant } from 'src/models/Assistant';
import { DeleteResult } from 'typeorm';

@Controller('assistant')
export class AssistantController {
    constructor(private assistantService: AssistantService) { }

    @Post()
    createAssistant(@Body() data: ICreateAssistant): boolean | string {
        try {
            this.assistantService.create(data)
            return true
        } catch (error) {
            return "Cannot create assistant " + error
        }
    }

    @Get('all')
    getAssistants(): Promise<Assistant[]> | string {
        try {
            return this.assistantService.getAll()
        } catch (error) {
            return "Cannot read assistants " + error
        }
    }

    @Get('one/:id')
    getAssistant(@Param('id') param): Promise<Assistant | number> | string {
        try {
            return this.assistantService.getOne(param)
        } catch (error) {
            return "Cannot read assistants " + error
        }
    }
    
    @Put('update/:id')
    updateAssistant(@Param('id') param, @Body() data: ICreateAssistant){
        try {
            return this.assistantService.update(param, data)
        } catch (error) {
            return "Cannot update assistants " + error
        }
    }

    @Delete('delete/:id')
    deleteAssistant(@Param('id') param): Promise<DeleteResult> | string {
        try {
            return this.assistantService.delete(param)
        } catch (error) {
            return "Cannot delete assistant " + error
        }
    }
}
