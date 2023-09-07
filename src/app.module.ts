import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Connection } from './configs/DBConnection';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env' }), Connection],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
