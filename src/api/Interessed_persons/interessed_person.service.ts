import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InteressedPerson as InteressedPersonEntity} from 'src/entities/interessed_person.entity';
import { I_interessed_person } from 'src/models/Interessed_person';

@Injectable()
export class Interessed_personService { 
    constructor(
        @InjectRepository(InteressedPersonEntity)
        private interessedPersonEntity: Repository<InteressedPersonEntity>
    )    { }

    async getAll(): Promise<InteressedPersonEntity[]>{
        return await this.interessedPersonEntity.find()
    }

    async get(id: number): Promise<InteressedPersonEntity[]> {
        return await this.interessedPersonEntity.find(
            {
                where: { id: id }
            })
    }

    async create(interessedPerson: I_interessed_person) {
        const newInteressedPerson = new InteressedPersonEntity()
        newInteressedPerson.names = interessedPerson.names
        newInteressedPerson.first_last_name = interessedPerson.first_last_name
        newInteressedPerson.second_last_name = interessedPerson.second_last_name
        newInteressedPerson.company = interessedPerson.company
        newInteressedPerson.email = interessedPerson.email
        newInteressedPerson.registration_date = interessedPerson.registration_date

        const res = await this.interessedPersonEntity.save(newInteressedPerson)

        return res
    }

    async update(id: number, body: I_interessed_person) {
        return await this.interessedPersonEntity.update(id, body)
    }

    async delete(id: number) {
        return await this.interessedPersonEntity.delete(id)
    }
}

