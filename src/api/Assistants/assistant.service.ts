import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Assistant as AssistantEntity } from 'src/entities/assistant.entity';
import { ICreateAssistant } from 'src/models/Assistant';
import { Repository } from 'typeorm';

@Injectable()
export class AssistantService {
    constructor(
        @InjectRepository(AssistantEntity)
        private assistantEntity: Repository<AssistantEntity>
    ) { }

    async getOne(id: number): Promise<AssistantEntity | number> {
        const res = await this.assistantEntity.findOne({ where: { id: id }, relations: ["detail", "detail.event", "detail.event.partner"] })
        if (res === null) {
            return -1
        }
        return res
    }

    async getAll(): Promise<AssistantEntity[]> {
        return await this.assistantEntity.find()
    }

    async create(assistantData: ICreateAssistant) {
        const res = await this.assistantEntity.save(assistantData)
        return res.id
    }

    async update(id: number, body: ICreateAssistant) {
        return await this.assistantEntity.update(id, body)
    }

    async delete(id: number) {
        return await this.assistantEntity.delete(id)
    }
}
