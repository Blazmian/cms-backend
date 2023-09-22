import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Partners as PartnersEntity} from 'src/entities/partners.entity';
import { IPartner } from 'src/models/Partner';
import * as fs from 'fs'
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class PartnerService {
    constructor(
        @InjectRepository(PartnersEntity)
        private partnersEntity: Repository<PartnersEntity>
    )    { }

    async getAll(): Promise<PartnersEntity[]>{
        return await this.partnersEntity.find()
    }

    async get(id: number): Promise<PartnersEntity[]> {
        return await this.partnersEntity.find(
            {
                where: { id: id }
            })
    }

    async create(partner: IPartner) {
        if (!fs.existsSync(`${process.cwd()}/temp`)) {
            fs.mkdirSync(`${process.cwd()}/temp`);
        }

        const newPartner = new PartnersEntity()
        newPartner.social_reason = partner.social_reason
        newPartner.comercial_name = partner.comercial_name
        newPartner.legal_representative = partner.legal_representative
        newPartner.registration_date = partner.registration_date
        newPartner.status = partner.status
        newPartner.afiliation_payment = partner.afiliation_payment
        newPartner.expiration_date = partner.expiration_date

        if (partner.company_image) {
            const tempFileName = uuidv4()
            const tempFilePath = `${process.cwd()}/temp/${tempFileName}`
            fs.writeFileSync(tempFilePath, partner.company_image)
            newPartner.company_image = fs.readFileSync(tempFilePath)
            fs.unlinkSync(tempFilePath)
        }

        const res = await this.partnersEntity.save(newPartner)

        return res
    }

    async update(id: number, body: IPartner) {
        return await this.partnersEntity.update(id, body)
    }

    async delete(id: number) {
        return await this.partnersEntity.delete(id)
    }

    async getPartnerEvents(idPartners: number): Promise<PartnersEntity[]> {
        return await this.partnersEntity.find({ where: { id: idPartners }, relations: ['events'] })
    }
}
