import { EventsModule } from './api/Events/event.module';
import { Interessed_personsModule } from './api/Interessed_persons/interessed_person.module';
import { Events_attendanceModule } from './api/Events_attendance/event_attendance.module';
import { Details_assistantModule } from './api/Details_assistant/detail_assistant.module';
import { Partners_affiliatedModule } from './api/Partners_affiliated/partner_affiliated.module';
import { PartnerModule } from './api/Partners/partner.module';
import { AssistantModule } from './api/Assistants/assistant.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Connection } from './configs/DBConnection';
import { GatewayModule } from './gateway/gateway.module';

@Module({
  imports: [
    GatewayModule,
    EventsModule,
    Interessed_personsModule,
    Events_attendanceModule,
    Details_assistantModule,
    Partners_affiliatedModule,
    PartnerModule,
    AssistantModule, ConfigModule.forRoot({ envFilePath: '.env' }), Connection],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
