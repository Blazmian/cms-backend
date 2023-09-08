import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Partners as PartnersEntity} from 'src/entities/partners.entity';


@Injectable()
export class PartnerService {
    constructor(
        @InjectRepository(PartnersEntity)
        private partnersEntity: Repository<PartnersEntity>
    )    { }

    async getAll(): Promise<PartnersEntity[]>{
        return await this.partnersEntity.find()
    }
}
