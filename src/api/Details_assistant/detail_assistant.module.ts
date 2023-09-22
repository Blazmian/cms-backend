import { DetailAssistant } from 'src/entities/detail_assistant.entity';
import { Detail_assistantService } from './detail_assistant.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Detail_assistantController } from './detail_assistant.controller';

@Module({
    imports: [TypeOrmModule.forFeature([DetailAssistant])],
    controllers: [Detail_assistantController],
    providers: [Detail_assistantService],
    exports: [TypeOrmModule]
})
export class Details_assistantModule { }
