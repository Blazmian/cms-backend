import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AffiliatedPartners as AffiliatedPartnersEntity } from 'src/entities/partners_affiliated.entity';
import { IAffiliatedPartner } from 'src/models/Partner_affiliated';

@Injectable()
export class Partner_affiliatedService {
    constructor(
        @InjectRepository(AffiliatedPartnersEntity)
        private affiliatedPartnersEntity: Repository<AffiliatedPartnersEntity>
    )    { }

    async getAll(): Promise<AffiliatedPartnersEntity[]>{
        return await this.affiliatedPartnersEntity.find()
    }

    async get(id: number): Promise<AffiliatedPartnersEntity[]> {
        return await this.affiliatedPartnersEntity.find(
            {
                where: { id: id }
            })
    }

    async create(affiliatedPartner: IAffiliatedPartner) {
        const newAffiliatedPartner = new AffiliatedPartnersEntity()
        newAffiliatedPartner.name = affiliatedPartner.name
        newAffiliatedPartner.first_last_name = affiliatedPartner.first_last_name
        newAffiliatedPartner.second_last_name = affiliatedPartner.second_last_name
        newAffiliatedPartner.email = affiliatedPartner.email
        newAffiliatedPartner.phone_numer = affiliatedPartner.phone_number
        newAffiliatedPartner.contact = affiliatedPartner.contact

        const res = await this.affiliatedPartnersEntity.save(newAffiliatedPartner)

        return res
    }

    async update(id: number, body: IAffiliatedPartner) {
        return await this.affiliatedPartnersEntity.update(id, body)
    }

    async delete(id: number) {
        return await this.affiliatedPartnersEntity.delete(id)
    }
}
