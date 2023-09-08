import { Controller, Get } from '@nestjs/common';
import { Interessed_personService } from './interessed_person.service';
import { InteressedPerson } from 'src/entities/interessed_person.entity';

@Controller()
export class Interessed_personsController { 

    constructor(private interessed_personService: Interessed_personService){

    }

    @Get('/all')
    async getAllInteressedPersons(): Promise<string | InteressedPerson[]>{
        try {
            return await this.interessed_personService.getAll()
        } catch (error) {
            return "Cannot read interessed persons " + error
        }   
    }
}
