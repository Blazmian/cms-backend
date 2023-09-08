import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AffiliatedPartners as AffiliatedPartnersEntity } from 'src/entities/partners_affiliated.entity';

@Injectable()
export class Partner_affiliatedService {
    constructor(
        @InjectRepository(AffiliatedPartnersEntity)
        private affiliatedPartnersEntity: Repository<AffiliatedPartnersEntity>
    )    { }

    async getAll(): Promise<AffiliatedPartnersEntity[]>{
        return await this.affiliatedPartnersEntity.find()
    }
}
