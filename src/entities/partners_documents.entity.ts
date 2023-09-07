import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Partners } from "./partners.entity"

@Entity()
export class Partners_documents {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    address_receipt: Buffer

    @Column()
    constitutive_act: Buffer

    @Column()
    legal_power: Buffer

    @Column()
    identification: Buffer

    @Column()
    tax_certificate: Buffer

    @Column()
    format_32d: Buffer

    @Column()
    curriculum_company: Buffer

    @Column()
    bank_data: Buffer

    @Column()
    etic_code: Buffer

    @Column()
    compliance_use: Buffer

    @Column()
    logo: Buffer

    @OneToOne(() => Partners)
    @JoinColumn()
    partners: Partners
}