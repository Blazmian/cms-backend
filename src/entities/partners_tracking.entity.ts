import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Partners } from "./partners.entity"

@Entity()
export class Tracking {
    @PrimaryGeneratedColumn()
    id_tracking : number

    @Column()
    tracking_info : Text

    @Column()
    notes : Text

    @Column()
    visit_date : Date

    @ManyToOne(() => Partners, (partners) => partners.tracking)
    partners: Partners

}