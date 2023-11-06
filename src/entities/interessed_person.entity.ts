import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { AffiliatedPartners } from "./partners_affiliated.entity"
import { AttendanceEvent } from "./attendance_event.entity"

@Entity()
export class InteressedPerson {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 30 })
    names: string

    @Column({ length: 15 })
    first_last_name: string

    @Column({ length: 15 })
    second_last_name: string

    @Column({ length: 40 })
    company: string

    @Column({ length: 30})
    position: string

    @Column({ length: 50 })
    email: string

    @Column({ length: 10})
    phone: string

    @Column({ length: 9 })
    sex: string

    @Column({ length: 100})
    event_find: string

    @Column({length: 150})
    expectations: string

    @Column({ type: 'date' })
    registration_date: Date

    @ManyToOne(() => AffiliatedPartners, (affiliated) => affiliated.interessed)
    affiliated: AffiliatedPartners

    @OneToMany(() => AttendanceEvent, (attendance) => attendance.interessed)
    attendance: AttendanceEvent[]
} 
