import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Roles } from "./employees_roles.entity"

@Entity()
export class Employees {
    @PrimaryGeneratedColumn()
    id_employee : number

    @Column({ length : 30 })
    name: string

    @Column({ length : 15 })
    first_last_name : string

    @Column({ length : 15 })
    second_last_name : string

    @Column({ length : 18})
    curp : string

    @Column({ length : 13 })
    rfc : string

    @Column()
    afiliation_imss : Blob

    @Column()
    birthday : Date

    @Column()
    employee_picture : Blob

    @Column()
    registration_date : Date

    @Column({ length : 10})
    status : string

    @OneToMany(() => Roles, (roles) => roles.employees)
    roles: Roles

} 