import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tracking as TrackingEntity } from 'src/entities/partners_tracking.entity';
import { CreateTracking } from 'src/models/Tracking';
import { Repository } from 'typeorm';
import { PartnerService } from '../Partners/partner.service';

@Injectable()
export class TrackingService {
    constructor(
        @InjectRepository(TrackingEntity)
        private trackingEntity: Repository<TrackingEntity>,
        private partnerService: PartnerService
    ) { }

    async createNote(body: CreateTracking) {
        const partner = await this.partnerService.get(body.partnerFolio)

        const newTracking = new TrackingEntity()
        newTracking.tracking_info = body.tracking_info
        newTracking.notes = body.notes
        newTracking.visit_date = body.visit_date
        newTracking.partners = partner

        return await this.trackingEntity.save(newTracking)
    }

    async getTrackingOfPartner(partnerFolio: string): Promise<TrackingEntity[]> {
        return await this.trackingEntity.find({
            where: { partners: { folio: partnerFolio } },
            order: { visit_date: 'DESC' }
        })
    }

    async deleteTrack(trackId: number) {
        return await this.trackingEntity.delete(trackId)
    }
}
