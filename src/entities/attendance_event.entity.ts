import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { InteressedPerson } from "./interessed_person.entity"
import { Event } from "./event.entity"

@Entity()
export class AttendanceEvent {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => InteressedPerson, (interessed) => interessed.attendance)
    interessed: InteressedPerson

    @ManyToOne(() => Event, (event) => event.attendance)
    event: Event
} 
