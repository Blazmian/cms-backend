import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Partners as PartnersEntity } from 'src/entities/partners.entity';
import { IPartner } from 'src/models/Partner';
import * as fs from 'fs'
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class PartnerService {
    constructor(
        @InjectRepository(PartnersEntity)
        private partnersEntity: Repository<PartnersEntity>
    ) { }

    async getAll(): Promise<PartnersEntity[]> {
        return await this.partnersEntity.find()
    }

    async getPartnersByComercialNameNonText(): Promise<PartnersEntity[]> {
        return await this.partnersEntity.find({
            where: { status: 'Activo' },
            select: ['folio', 'comercial_name', 'status']
        })
    }

    async getPartnersByComercialName(value: string): Promise<PartnersEntity[]> {
        return await this.partnersEntity.find({
            where: { social_reason: Like(`%${value}%`), status: 'Activo' },
            select: ['folio', 'comercial_name', 'status']
        })
    }

    async get(folio: string): Promise<PartnersEntity> {
        return await this.partnersEntity.findOne(
            {
                where: { folio: folio }
            })
    }

    async create(partner: IPartner) {

        const newPartner = new PartnersEntity()
        newPartner.folio = partner.folio
        newPartner.social_reason = partner.social_reason
        newPartner.comercial_name = partner.comercial_name
        newPartner.legal_representative = partner.legal_representative
        newPartner.afiliation_payment = partner.afiliation_payment

        const res = await this.partnersEntity.save(newPartner)

        return res
    }

    async update(folio: string, body: IPartner) {
        return await this.partnersEntity.update(folio, body)
    }

    async delete(folio: string) {
        return await this.partnersEntity.delete(folio)
    }

    async getPartnerEvents(folio: string): Promise<PartnersEntity[]> {
        return await this.partnersEntity.find({ where: { folio: folio }, relations: ['events'] })
    }
}
