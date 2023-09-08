import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Assistant as AssistantEntity} from 'src/entities/assistant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssistantService {
    constructor(
        @InjectRepository(AssistantEntity)
        private assistantEntity: Repository<AssistantEntity>
    )    { }

    async getAll(): Promise<AssistantEntity[]>{
        return await this.assistantEntity.find()
    }
}
