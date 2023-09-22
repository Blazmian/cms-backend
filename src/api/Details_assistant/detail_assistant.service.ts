import { Injectable } from '@nestjs/common';
import { DetailAssistant as DetailAssistantEntity} from 'src/entities/detail_assistant.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class Detail_assistantService {
    constructor(
        @InjectRepository(DetailAssistantEntity)
        private detailAssistantEntity: Repository<DetailAssistantEntity>
    )    { }

    async getAll(): Promise<DetailAssistantEntity[]>{
        return await this.detailAssistantEntity.find()
    }
}
