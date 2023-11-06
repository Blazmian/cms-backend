import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sponsor as SponsorEntity } from 'src/entities/sponsor.entity';
import { SponsorCreate } from 'src/models/Sponsor';
import { Repository } from 'typeorm';

@Injectable()
export class SponsorsService {
    constructor(
        @InjectRepository(SponsorEntity)
        private sponsorEntity: Repository<SponsorEntity>
    ) { }

    async getAll(): Promise<SponsorEntity[]> {
        return await this.sponsorEntity.find()
    }

    async create(sponsor: SponsorCreate) {
        const res = await this.sponsorEntity.save(sponsor)
        return res
    }
}