import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sponsor } from 'src/entities/sponsor.entity';
import { SponsorsController } from './sponsors.controller';
import { SponsorsService } from './sponsors.service';

@Module({
    imports: [TypeOrmModule.forFeature([Sponsor])],
    controllers: [SponsorsController],
    providers: [SponsorsService],
    exports: [TypeOrmModule]
})
export class SponsorsModule {}
