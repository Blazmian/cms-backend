import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm"
import { InteressedPerson } from "./interessed_person.entity"
import { Event } from "./event.entity"

@Entity()
export class AttendanceEvent {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: false })
    status: boolean

    @ManyToOne(() => InteressedPerson, (interessed) => interessed.attendance)
    interessed: InteressedPerson

    @ManyToOne(() => Event, (event) => event.attendance)
    event: Event
}