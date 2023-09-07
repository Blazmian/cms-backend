import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Partners } from "./partners.entity"

@Entity()
export class Tracking {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text'})
    tracking_info: string

    @Column({ type: 'text'})
    notes: string

    @Column()
    visit_date: Date

    @ManyToOne(() => Partners, (partners) => partners.tracking)
    partners: Partners
}