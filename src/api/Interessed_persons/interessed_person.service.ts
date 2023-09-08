import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InteressedPerson as InteressedPersonEntity} from 'src/entities/interessed_person.entity';

@Injectable()
export class Interessed_personService { 
    constructor(
        @InjectRepository(InteressedPersonEntity)
        private interessedPersonEntity: Repository<InteressedPersonEntity>
    )    { }

    async getAll(): Promise<InteressedPersonEntity[]>{
        return await this.interessedPersonEntity.find()
    }
}
