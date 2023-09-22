import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assistant } from 'src/entities/assistant.entity';
import { AssistantService } from './assistant.service';
import { AssistantController } from './assistant.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Assistant])],
    controllers: [AssistantController],
    providers: [AssistantService],
    exports: [TypeOrmModule]
})
export class AssistantModule {}