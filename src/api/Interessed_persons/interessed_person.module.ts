import { Interessed_personService } from './interessed_person.service';
import { Interessed_personsController } from './interessed_person.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InteressedPerson } from 'src/entities/interessed_person.entity';

@Module({
    imports: [TypeOrmModule.forFeature([InteressedPerson])],
    controllers: [Interessed_personsController],
    providers: [Interessed_personService],
    exports: [TypeOrmModule]
})
export class Interessed_personsModule { }
