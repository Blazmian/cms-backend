import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { DetailProductsEvent } from './detail_products_event.entity'
import { DetailAssistant } from './detail_assistant.entity'
import { DetailInventary } from './detail_inventary.entity'
import { DetailSponsor } from './detail_sponsor.entity'
import { Partners } from './partners.entity'
import { AttendanceEvent } from './attendance_event.entity'

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 50 })
    event_name: string

    @Column({ type: 'text' })
    description: string

    @Column({ default: 'Presencial', length: 10 })
    type: string

    @Column({ length: 200 })
    place: string

    @Column({ type: 'text' })
    link: string

    @Column({ type: 'date' })
    date: Date

    @Column({ type: 'time' })
    hour: Date

    @Column({ type: 'double' })
    event_cost: number

    @Column({ length: 10 })
    status: string

    @Column({ type: 'longblob' })
    image: Buffer

    @ManyToOne(() => Partners, (partner) => partner.event)
    partner: Partners

    @OneToMany(() => DetailProductsEvent, (detailProduct) => detailProduct.event)
    detailProduct: DetailProductsEvent[]

    @OneToMany(() => DetailAssistant, (detailAssistant) => detailAssistant.event)
    detailAssistant: DetailAssistant[]
    
    @OneToMany(() => DetailInventary, (detailInventary) => detailInventary.event)
    detailInventary: DetailInventary[]

    @OneToMany(() => DetailSponsor, (detailSponsor) => detailSponsor.event)
    detailSponsor: DetailSponsor[]

    @OneToMany(() => AttendanceEvent, (attendance) => attendance.event)
    attendance: AttendanceEvent[]
}