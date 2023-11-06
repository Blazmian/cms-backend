import { SponsorsController } from './api/Sponsors/sponsors.controller';
import { SponsorsService } from './api/Sponsors/sponsors.service';
import { SponsorsModule } from './api/Sponsors/sponsors.module';
import { Interessed_personsModule } from './api/Interessed_persons/interessed_person.module';
import { Events_attendanceModule } from './api/Events_attendance/event_attendance.module';
import { Partners_affiliatedModule } from './api/Partners_affiliated/partner_affiliated.module';
import { PartnerModule } from './api/Partners/partner.module';
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
import { GatewayModule } from './gateway/gateway.module';
import { EventModule } from './api/Events/event.module';
import { AssistantModule } from './api/Assistants/assistant.module';
import { EventController } from './api/Events/event.controller';
import { EventService } from './api/Events/event.service';
import { PartnerService } from './api/Partners/partner.service';

@Module({
  imports: [
    SponsorsModule,
    GatewayModule,
    EventModule,
    Interessed_personsModule,
    Events_attendanceModule,
    Partners_affiliatedModule,
    DetailAssistantModule,
    PartnerModule,
    AssistantModule, ConfigModule.forRoot({ envFilePath: '.env' }), Connection],
  controllers: [
    SponsorsController, DetailAssistantController, AssistantController,
    EventController,
    AppController],
  providers: [
    SponsorsService,
    DetailAssistantService, AssistantService,
    EventService,
    AppService,
    PartnerService],
})
export class AppModule { }