import { Controller, Get, Post, Body, Put, Delete, Param} from '@nestjs/common';
import { Interessed_personService } from './interessed_person.service';
import { InteressedPerson } from 'src/entities/interessed_person.entity';
import { I_interessed_person } from 'src/models/Interessed_person';

@Controller('interessed-person')
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

    @Get('one/:id')
    getInteressedPerson(@Param('id') params): Promise<InteressedPerson[]> | string {
        try {
            const res = this.interessed_personService.get(params)
            return res
        } catch (error) {
            return "Cannot read interessed person: " + error
        }
    }

    @Post('register-event')
    Create(@Body() params: I_interessed_person) {
        try {
            const res = this.interessed_personService.create(params)
            console.log("interessed person created")
            return true
        } catch (error) {
            return "Cannot create interessed person: " + error
        }
    }

    @Put('update/:id')
    Update(@Param('id') id: number, @Body() params: I_interessed_person) {
        try {
            const res = this.interessed_personService.update(id, params)
            return res
        } catch (error) {
            return "Cannot update interessed person: " + error
        }
    }

    @Delete('delete/:id')
    deleteEquipment(@Param('id') params) {
        try {
            const res = this.interessed_personService.delete(params)
            return res
        } catch (error) {
            return "Cannot delete interessed person: " + error
        }
    }
    
}
