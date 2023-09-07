import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Roles } from "./employees_roles.entity"


@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 30 })
    department_name: string

    @OneToMany(() => Roles, (roles) => roles.department)
    role: Roles

} 
