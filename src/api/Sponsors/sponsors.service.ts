import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sponsor as SponsorEntity} from 'src/entities/sponsor.entity';
import { ISponsor } from 'src/models/Sponsor';
import { Repository } from 'typeorm';

@Injectable()
export class SponsorsService {
    constructor(
        @InjectRepository(SponsorEntity)
        private sponsorEntity: Repository<SponsorEntity>
    ) {}

    async getAll(): Promise<SponsorEntity[]> {
        return await this.sponsorEntity.find()

    }

    async get(id: number): Promise<SponsorEntity> {
        return await this.sponsorEntity.findOne(
            {
                where: { id: id }
            })
    }

    async create(sponsor : ISponsor) {
        const newSponsor = new SponsorEntity()

        newSponsor.name = sponsor.name
        newSponsor.sponsor = sponsor.sponsor
        newSponsor.email = sponsor.email
        newSponsor.description = sponsor.description
        newSponsor.date = sponsor.date

        const res = await this.sponsorEntity.save(newSponsor)
        return res
    }

    async update(id: number, body: ISponsor) {
        return await this.sponsorEntity.update(id, body)
    }

    async delete(id: number) {
        return await this.sponsorEntity.delete(id)
    }

}
