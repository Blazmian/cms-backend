import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Partners } from "./partners.entity"

@Entity()
export class Partners_documents {
    @PrimaryGeneratedColumn()
    id_partner_document : number

    @Column()
    address_receipt : Blob

    @Column()
    constitutive_act : Blob

    @Column()
    legal_power : Blob

    @Column()
    identification : Blob

    @Column()
    tax_certificate : Blob

    @Column()
    format_32d : Blob

    @Column()
    curriculum_company : Blob

    @Column()
    bank_data : Blob

    @Column()
    etic_code : Blob

    @Column()
    compliance_use : Blob

    @Column()
    logo : Blob

    @OneToOne(() => Partners)
    @JoinColumn()
    partners: Partners

}