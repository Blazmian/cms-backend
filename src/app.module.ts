import { DetailAssistantController } from './api/DetailAssistants/detailassistant.controller';
import { DetailAssistantService } from './api/DetailAssistants/detailassistant.service';
import { DetailAssistantModule } from './api/DetailAssistants/detailassistant.module';
import { AssistantController } from './api/Assistants/assistant.controller';
import { AssistantService } from './api/Assistants/assistant.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Connection } from './configs/DBConnection';
import { EventModule } from './api/Events/event.module';
import { EventController } from './api/Events/event.controller';
import { EventService } from './api/Events/event.service';
import { AssistantModule } from './api/Assistants/assistant.module';

@Module({
  imports: [
    DetailAssistantModule, ConfigModule.forRoot({ envFilePath: '.env' }), Connection, EventModule, AssistantModule],
  controllers: [
    DetailAssistantController, AssistantController,
    EventController,
    AppController],
  providers: [
    DetailAssistantService, AssistantService,
    EventService,
    AppService,],
})
export class AppModule { }
