import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetailAssistant } from 'src/entities/detail_assistant.entity';
import { DetailAssistantService } from './detailassistant.service';
import { EventModule } from '../Events/event.module';
import { EventService } from '../Events/event.service';
import { DetailAssistantController } from './detailassistant.controller';

@Module({
    imports: [TypeOrmModule.forFeature([DetailAssistant]), EventModule],
    controllers: [DetailAssistantController],
    providers: [DetailAssistantService, EventService],
    exports: [TypeOrmModule]
})
export class DetailAssistantModule { }
