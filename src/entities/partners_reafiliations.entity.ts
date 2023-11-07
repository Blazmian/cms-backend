import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Partners } from "./partners.entity"

@Entity()
export class Reafiliations {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    reafiliation_date: Date

    @ManyToOne(() => Partners, (partners) => partners.reafiliations)
    partners: Partners

}
