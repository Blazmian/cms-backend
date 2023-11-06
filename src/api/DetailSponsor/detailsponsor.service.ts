import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetailSponsor as DetailSponsorEntity } from 'src/entities/detail_sponsor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DetailSponsorService {
    constructor(
        @InjectRepository(DetailSponsorEntity)
        private detailSponsorEntity: Repository<DetailSponsorEntity>
    ) { }

    async getSponsorsFromEvent(eventId: number): Promise<DetailSponsorEntity[]> {
        return await this.detailSponsorEntity.find({
            where: {
                event: { id: eventId }
            },
            relations: ['sponsor']
        })
    }
}